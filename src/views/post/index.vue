<script lang="ts">
export default {
  name: "post",
  components: { WangEditor }
};
</script>

<script setup lang="ts">
import api, { convertPageQuery } from "@/api";
import { Post__CreateOneInput, Post__GetListResponse } from "@/api/models";
import { merge } from "@/utils";
import WangEditor from "@/components/WangEditor/index.vue";
import { FormItemRule, ElForm, ElMessage, ElMessageBox, ElPagination } from "element-plus";
import type { Arrayable } from "element-plus/es/utils";
import { ref, reactive, onMounted } from "vue";
import { Icon } from '@iconify/vue';
import { createOne } from "@/api/post";
import { useUserStoreHook } from "@/store/modules/user";

const queryFormRef = ref(ElForm);
const dataFormRef = ref(ElForm);

const loading = ref(false);
const ids = ref<number[]>([]);
const total = ref(0);

const queryParams = reactive<PageQuery>({
  title: "",
  pageNum: 1,
  pageSize: 10
});

const dataSource = ref<
  NonNullable<NonNullable<Post__GetListResponse["data"]>["data"]>
>([]);

const dialog = reactive<DialogOption>({
  visible: false
});

const formData = reactive<Post__CreateOneInput>({
  title: "",
  poster: "",
  content: "",
  publishedAt: undefined
});
const editingId = ref<number>();

const rules = reactive<
  Partial<Record<keyof Post__CreateOneInput, Arrayable<FormItemRule>>>
>({
  title: [{ required: true, message: "请输入文章标题", trigger: "blur" }],
  poster: [{ required: true, message: "请上传文章封面", trigger: "blur" }],
  content: [{ required: true, message: "请输入文章内容", trigger: "blur" }]
});

/**
 * 查询
 */
async function handleQuery() {
  loading.value = true;
  const { error, data } = await api.query({
    operationName: "Post/GetList",
    input: convertPageQuery(queryParams, { containsFields: ["title"] })
  });
  if (!error) {
    dataSource.value = data!.data!;
    total.value = data!.total!;
  }
  loading.value = false;
}

/**
 * 重置查询
 */
function resetQuery() {
  queryFormRef.value.resetFields();
  queryParams.pageNum = 1;
  handleQuery();
}

/**
 * 行checkbox change事件
 */
function handleSelectionChange(selection: any) {
  ids.value = selection.map((item: any) => item.id);
}

/**
 * 新增/编辑
 *
 * @param id 数据ID
 */
async function openDialog(id?: number) {
  editingId.value = id;
  if (id) {
    dialog.title = "修改文章";
    const { error, data } = await api.query({
      operationName: "Post/GetOne",
      input: { id }
    });
    if (!error) {
      dialog.visible = true;
      merge(formData, data!.data!);
    } else {
      ElMessage.error("获取数据失败");
    }
  } else {
    dialog.visible = true;
    dialog.title = "新增文章";
  }
}

/**
 * 表单提交
 */
function handleSubmit() {
  loading.value = false;
  dataFormRef.value.validate(async (isValid: boolean) => {
    if (isValid) {
      if (editingId.value) {
        const { error } = await api.mutate({
          operationName: "Post/UpdateOne",
          input: {
            id: editingId.value,
            ...formData
          }
        });
        if (!error) {
          ElMessage.success("修改成功");
          closeDialog();
          handleQuery();
        }
        loading.value = false;
      } else {
        const username = useUserStoreHook().username;
        createOne(formData.title, username, formData.content, formData.poster, formData.publishedAt).then(res => {
          if (res.data.data.id) {
            ElMessage.success("新增成功");
            closeDialog();
            handleQuery();
          }
          loading.value = false;
        });
      }
    }
  });
}

/**
 * 关闭弹窗
 */
function closeDialog() {
  dialog.visible = false;
  resetForm();
}

/**
 * 重置表单
 */
function resetForm() {
  dataFormRef.value.resetFields();
  dataFormRef.value.clearValidate();

  formData.title = "";
  formData.poster = "";
  formData.content = "";
  formData.publishedAt = undefined;
}

/**
 * 删除数据
 */
function handleDelete(id?: number) {
  const idList = id ? [id] : ids.value;
  if (!idList.length) {
    ElMessage.warning("请勾选删除项");
    return;
  }

  ElMessageBox.confirm("确认删除已选中的数据项?", "警告", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(async () => {
    const { error } = await api.mutate({
      operationName: "Post/DeleteMany",
      input: { ids: idList }
    });
    if (!error) {
      ElMessage.success("删除成功");
      resetQuery();
    }
  });
}

onMounted(() => {
  handleQuery();
});
</script>

<template>
  <div class="app-container">
    <div class="search">
      <el-form ref="queryFormRef" :model="queryParams" :inline="true">
        <el-form-item label="标题" prop="title">
          <el-input v-model="queryParams.title" placeholder="标题" clearable @keyup.enter="handleQuery" />
        </el-form-item>
        <el-form-item>
          <Auth value="/Post/GetList">
            <el-button type="primary" @click="handleQuery()">
              <Icon icon="ep:search" />搜索
            </el-button>
          </Auth>
          <Auth value="/Post/DeleteList">
            <el-button @click="resetQuery()">
              <Icon icon="ep:refresh" />重置
            </el-button>
          </Auth>
        </el-form-item>
      </el-form>
    </div>

    <el-card shadow="never">
      <template #header>
        <Auth value="/Post/CreateOne">
          <el-button type="success" @click="openDialog()">
            <Icon icon="ep:plus" />新增
          </el-button>
        </Auth>

        <Auth value="/Post/DeleteOne">
          <el-button type="danger" :disabled="ids.length === 0" @click="handleDelete()">
            <Icon icon="ep:delete" />删除
          </el-button>
        </Auth>

      </template>
      <el-table highlight-current-row :data="dataSource" v-loading="loading" @selection-change="handleSelectionChange"
        border>
        <el-table-column type="selection" width="55" align="center" />
        <el-table-column label="标题" prop="title" width="200" ellipsis />
        <el-table-column label="封面" prop="poster" width="200">
          <template #default="scope">
            <el-image :src="scope.row.poster" fit="fill" :preview-src-list="[scope.row.poster]" />
          </template>
        </el-table-column>
        <el-table-column label="作者" prop="author" width="200" ellipsis align="center" />
        <el-table-column label="发布时间" prop="published_at" align="center" :formatter="(row, col, v) => (v ? new Date(v).toLocaleDateString() : '')
          " />
        <el-table-column fixed="right" label="操作" align="center" width="220">
          <template #default="scope">
            <Auth value="/Post/GetOne">
              <el-button type="primary" link size="small" @click.stop="openDialog(scope.row.id)">
                <Icon icon="ep:edit" />编辑
              </el-button>
            </Auth>
            <el-button type="primary" link size="small" @click.stop="handleDelete(scope.row.id)">
              <Icon icon="ep:delete" />删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination v-if="total > 0" v-model:total="total" v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize" @pagination="handleQuery" />
    </el-card>

    <el-dialog :title="dialog.title" v-model="dialog.visible" width="900px" @close="closeDialog">
      <el-form ref="dataFormRef" :model="formData" :rules="rules" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="formData.title" placeholder="请输入文章标题" />
        </el-form-item>
        <el-form-item label="封面" prop="poster">
          <el-input v-model="formData.poster" placeholder="请输入封面图片地址" />
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <WangEditor v-model="formData.content" />
          <!-- <el-input type="textarea" :rows="5" v-model="formData.content" placeholder="请输入文章内容" /> -->
        </el-form-item>
        <el-form-item label="发布时间" prop="publishedAt">
          <el-date-picker v-model="formData.publishedAt" type="datetime" placeholder="请选择发布时间" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <Auth value="/Post/UpdateOne">
            <el-button type="primary" @click="handleSubmit">确 定</el-button>
          </Auth>
          <Auth value="/Post/UpdateOne">
            <el-button @click="closeDialog">取 消</el-button>
          </Auth>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
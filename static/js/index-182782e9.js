import{d as j,aC as fe,r as i,au as Z,a as v,k as H,c as D,w as t,b as U,f as K,i as e,e as c,m as J,l as f,aH as ee,aB as M,a0 as G,o as ve,g as ye,ax as q,aI as Y,ay as _e,az as B,aA as ge,D as be,aD as ke,N as Ce}from"./index-11183741.js";import{a as x,c as Ve}from"./index-65564d26.js";import{m as he}from"./index-adf42357.js";import{a as Se,d as we,r as Re}from"./system-b273f915.js";const xe={class:"dialog-footer"},Ne={name:"roleBindApi"},Be=j({...Ne,props:{modelValue:{type:Boolean,default:!1},role:{type:Object},roles:{type:Array,required:!0}},emits:["update:modelValue"],setup(A,{emit:E}){const y=A,S=fe(),_=i(),d=i(!1),k=i([]),p=i([]);let m=[];function N(u){p.value=u.map(s=>+s.id)}function b(){E("update:modelValue",!1),d.value=!1,p.value=[],m=[]}async function o(){d.value=!0;const{error:u}=await x.mutate({operationName:"System/Role/BindRoleApis",input:{allRoles:y.roles.map(s=>s.code),apis:p.value,roleCode:y.role.code}});if(u)M.error("绑定失败"),d.value=!1;else{const s=S.roles;Se(s).then(r=>{S.SET_PERMISSIONS(r)}),M.success("绑定成功"),b()}}return Z(async()=>{var u,s;if(y.modelValue&&((u=y.role)!=null&&u.code)){d.value=!0;const r=await x.query({operationName:"System/Operation/GetMany"});if(!r.error){k.value=r.data.data;const{error:C,data:V}=await x.query({operationName:"System/Role/GetRoleBindApis",input:{code:y.role.code}});if(!C){m=((s=V.data)==null?void 0:s.map(w=>w.id))??[],p.value=m;const g=k.value.filter(w=>m.includes(+w.id));for(const w of g)_.value.toggleRowSelection(w,!0)}}d.value=!1}}),(u,s)=>{const r=v("el-table-column"),C=v("el-button"),V=v("el-dialog"),g=H("loading");return U(),D(V,{title:"绑定权限","model-value":A.modelValue,width:"600px","append-to-body":"","onUpdate:modelValue":s[0]||(s[0]=w=>u.$emit("update:modelValue",w)),onClose:b},{footer:t(()=>[K("span",xe,[e(C,{onClick:b},{default:t(()=>[c("取消")]),_:1}),e(C,{type:"primary",onClick:o},{default:t(()=>[c("确定")]),_:1})])]),default:t(()=>[J((U(),D(f(ee),{data:k.value,ref_key:"tableRef",ref:_,onSelectionChange:N},{default:t(()=>[e(r,{type:"selection",width:"55",align:"center"}),e(r,{label:"路径",prop:"title"}),e(r,{label:"Method",align:"center",prop:"method"}),e(r,{label:"实时查询",align:"center",prop:"liveQuery"})]),_:1},8,["data"])),[[g,d.value]])]),_:1},8,["model-value"])}}}),Me={class:"dialog-footer"},Ue={name:"roleBindMenu"},Ae=j({...Ue,props:{modelValue:{type:Boolean,default:!1},role:{type:Object}},emits:["update:modelValue"],setup(A,{emit:E}){const y=A,S=i(),_=i(!1),d=i([]),k=i([]);let p=[];function m(o){k.value=o.map(u=>u.id)}function N(){E("update:modelValue",!1),_.value=!1,k.value=[],p=[]}async function b(){_.value=!0;for(const o of p)await x.mutate({operationName:"System/Role/DisconnectOneMenu",input:{id:y.role.id,menuId:o}});for(const o of k.value)await x.mutate({operationName:"System/Role/ConnectOneMenu",input:{id:y.role.id,menuId:o}});N(),M.success("绑定成功"),_.value=!1}return Z(async()=>{var o,u;if(y.modelValue&&((o=y.role)!=null&&o.code)){_.value=!0;const s=await x.query({operationName:"System/Menu/GetMany",input:{in:[1,2]}});if(!s.error){d.value=s.data.data;const{error:r,data:C}=await x.query({operationName:"System/Role/GetBindMenus",input:{roleId:y.role.id}});if(!r){p=((u=C.data)==null?void 0:u.map(g=>g.id))??[],k.value=p;const V=d.value.filter(g=>p.includes(g.id));for(const g of V)S.value.toggleRowSelection(g,!0)}}_.value=!1}}),(o,u)=>{const s=v("el-table-column"),r=v("el-button"),C=v("el-dialog"),V=H("loading");return U(),D(C,{title:"绑定菜单","model-value":A.modelValue,width:"600px","append-to-body":"","onUpdate:modelValue":u[0]||(u[0]=g=>o.$emit("update:modelValue",g)),onClose:N},{footer:t(()=>[K("span",Me,[e(r,{onClick:N},{default:t(()=>[c("取消")]),_:1}),e(r,{type:"primary",onClick:b},{default:t(()=>[c("确定")]),_:1})])]),default:t(()=>[J((U(),D(f(ee),{data:d.value,ref_key:"tableRef",ref:S,onSelectionChange:m},{default:t(()=>[e(s,{type:"selection",width:"55",align:"center"}),e(s,{label:"名称",prop:"label"}),e(s,{label:"路径",align:"center",prop:"path"})]),_:1},8,["data"])),[[V,_.value]])]),_:1},8,["model-value"])}}}),De={class:"app-container"},Ee={class:"search"},Te={class:"dialog-footer"},ze=j({name:"RoleManage",__name:"index",setup(A,{expose:E}){const y=i(q),S=i(q);i(Y);const _=i([]),d=i(!1),k=i([]),p=i(0),m=G({pageNum:1,pageSize:10}),N=i([]),b=G({visible:!1}),o=G({code:"",remark:"",menuCheckStrictly:!1}),u=i(),s=G({code:[{required:!0,message:"请输入角色编码",trigger:"blur"}]}),r=i(!1),C=i(!1),V=i(),g=i(!1),w=i(!1),T=i(null);E({menu:T});async function $(){d.value=!0;const{error:n,data:l}=await x.query({operationName:"System/Role/GetList",input:Ve(m,{containsFields:["code","remark"]})});n||(N.value=l.data,p.value=l.total),d.value=!1}function F(){y.value.resetFields(),m.pageNum=1,$()}function le(n){k.value=n.map(l=>l.id)}function W(n){b.visible=!0,n?(b.title="修改角色",he(o,n),u.value=n.id,ie(n.id)):b.title="新增角色"}async function te(){d.value=!0,S.value.validate(async n=>{if(n){if(u.value){const{error:l}=await x.mutate({operationName:"System/Role/UpdateOne",input:{id:u.value,remark:o.remark}});l||(M.success("修改成功"),z(),F())}else{const{error:l}=await x.mutate({operationName:"System/Role/AddOne",input:{...o}});l||(M.success("新增成功"),z(),F())}d.value=!1}})}function z(){b.visible=!1,ae()}function ae(){S.value.resetFields(),S.value.clearValidate(),o.code="",o.remark=""}function X(n){const l=n?[n]:k.value;if(!l){M.warning("请勾选删除项");return}ke.confirm("确认删除已选中的数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{d.value=!0,we(l).then(h=>{h&&(M.success("删除成功"),F())}),d.value=!1})}function oe(n){r.value=!0,V.value=n}function ne(n){C.value=!0,V.value=n}ve(()=>{$()});function ie(n){return Re(n).then(l=>(_.value=l.data.menus,Ce(()=>{l.data.checkedKeys.forEach(h=>{T.value.setChecked(h,!0)})}),l))}function ue(n){let l=_.value;for(let h=0;h<l.length;++h)T.value.store.nodesMap[l[h].id].expanded=n}function se(n){T.value.setCheckedNodes(n?_.value:[])}function de(n){o.menuCheckStrictly=n}return(n,l)=>{const h=v("el-input"),O=v("el-form-item"),R=v("el-button"),I=v("Auth"),P=v("el-table-column"),re=v("el-table"),ce=v("el-card"),Q=v("el-checkbox"),me=v("el-dialog"),pe=H("loading");return U(),ye("div",De,[K("div",Ee,[e(f(q),{ref_key:"queryFormRef",ref:y,model:m,inline:!0},{default:t(()=>[e(O,{prop:"code",label:"编码"},{default:t(()=>[e(h,{modelValue:m.code,"onUpdate:modelValue":l[0]||(l[0]=a=>m.code=a),placeholder:"角色编码",clearable:"",onKeyup:_e($,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(O,null,{default:t(()=>[e(R,{type:"primary",onClick:$},{default:t(()=>[e(f(B),{icon:"ep:search"}),c("搜索 ")]),_:1}),e(R,{onClick:F},{default:t(()=>[e(f(B),{icon:"ep:refresh"}),c("重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),e(ce,{shadow:"never"},{header:t(()=>[e(I,{value:"/System/Role/AddOne"},{default:t(()=>[e(R,{type:"success",onClick:l[1]||(l[1]=a=>W())},{default:t(()=>[e(f(B),{icon:"ep:plus"}),c("新增 ")]),_:1})]),_:1}),e(I,{value:"/System/Role/DeleteOne"},{default:t(()=>[e(R,{type:"danger",disabled:k.value.length===0,onClick:l[2]||(l[2]=a=>X())},{default:t(()=>[e(f(B),{icon:"ep:delete"}),c("删除 ")]),_:1},8,["disabled"])]),_:1})]),default:t(()=>[J((U(),D(re,{ref:"dataTableRef",data:N.value,onSelectionChange:le,"highlight-current-row":"",border:""},{default:t(()=>[e(P,{type:"selection",width:"55",align:"center"}),e(P,{label:"角色编码",prop:"code",width:"200"}),e(P,{label:"角色描述",prop:"remark",width:"300"}),e(P,{fixed:"right",label:"操作"},{default:t(a=>[e(I,{value:"/System/Role/BindRoleApis"},{default:t(()=>[e(R,{type:"primary",size:"small",link:"",onClick:L=>oe(a.row)},{default:t(()=>[e(f(B),{icon:"ep:position"}),c("分配权限 ")]),_:2},1032,["onClick"])]),_:2},1024),e(R,{type:"primary",size:"small",link:"",onClick:L=>ne(a.row)},{default:t(()=>[e(f(B),{icon:"ep:position"}),c("分配菜单 ")]),_:2},1032,["onClick"]),e(R,{type:"primary",size:"small",link:"",onClick:L=>W(a.row)},{default:t(()=>[e(f(B),{icon:"ep:edit"}),c("编辑 ")]),_:2},1032,["onClick"]),e(I,{value:"/System/Role/DeleteMany"},{default:t(()=>[e(R,{type:"primary",size:"small",link:"",onClick:L=>X(a.row.id)},{default:t(()=>[e(f(B),{icon:"ep:delete"}),c("删除 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:1})]),_:1},8,["data"])),[[pe,d.value]]),p.value>0?(U(),D(f(ge),{key:0,total:p.value,"onUpdate:total":l[3]||(l[3]=a=>p.value=a),page:m.pageNum,"onUpdate:page":l[4]||(l[4]=a=>m.pageNum=a),limit:m.pageSize,"onUpdate:limit":l[5]||(l[5]=a=>m.pageSize=a),onPagination:$},null,8,["total","page","limit"])):be("",!0)]),_:1}),e(me,{title:b.title,modelValue:b.visible,"onUpdate:modelValue":l[14]||(l[14]=a=>b.visible=a),width:"500px",onClose:z},{footer:t(()=>[K("div",Te,[e(R,{type:"primary",onClick:te},{default:t(()=>[c("确 定")]),_:1}),e(R,{onClick:z},{default:t(()=>[c("取 消")]),_:1})])]),default:t(()=>[e(f(q),{ref_key:"roleFormRef",ref:S,model:o,rules:s,"label-width":"100px"},{default:t(()=>[e(O,{label:"角色编码",prop:"code"},{default:t(()=>[e(h,{modelValue:o.code,"onUpdate:modelValue":l[6]||(l[6]=a=>o.code=a),readonly:!!u.value,placeholder:"请输入角色编码"},null,8,["modelValue","readonly"])]),_:1}),e(O,{label:"角色描述",prop:"remark"},{default:t(()=>[e(h,{modelValue:o.remark,"onUpdate:modelValue":l[7]||(l[7]=a=>o.remark=a),placeholder:"请输入角色描述"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),e(f(q),{ref:"form",model:o,rules:s,"label-width":"100px"},{default:t(()=>[e(O,{label:"菜单权限"},{default:t(()=>[e(Q,{modelValue:g.value,"onUpdate:modelValue":l[8]||(l[8]=a=>g.value=a),onChange:l[9]||(l[9]=a=>ue(a))},{default:t(()=>[c("展开/折叠")]),_:1},8,["modelValue"]),e(Q,{modelValue:w.value,"onUpdate:modelValue":l[10]||(l[10]=a=>w.value=a),onChange:l[11]||(l[11]=a=>se(a))},{default:t(()=>[c("全选/全不选")]),_:1},8,["modelValue"]),e(Q,{modelValue:o.menuCheckStrictly,"onUpdate:modelValue":l[12]||(l[12]=a=>o.menuCheckStrictly=a),onChange:l[13]||(l[13]=a=>de(a))},{default:t(()=>[c("父子联动")]),_:1},8,["modelValue"]),e(f(Y),{class:"tree-border",data:_.value,"show-checkbox":"",ref_key:"menu",ref:T,"node-key":"id","check-strictly":!o.menuCheckStrictly,"empty-text":"加载中，请稍候",props:n.defaultProps},null,8,["data","check-strictly","props"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"]),e(Be,{modelValue:r.value,"onUpdate:modelValue":l[15]||(l[15]=a=>r.value=a),role:V.value,roles:N.value},null,8,["modelValue","role","roles"]),e(Ae,{modelValue:C.value,"onUpdate:modelValue":l[16]||(l[16]=a=>C.value=a),role:V.value},null,8,["modelValue","role"])])}}});export{ze as default};

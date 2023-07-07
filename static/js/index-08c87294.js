import{d as Z,aP as ae,h as m,ah as ne,k as ee,r,o as h,c as P,a as e,w as l,f as G,N as H,P as J,F as ie,l as se,_ as re,au as ue,aK as X,$,M as de,q as k,aM as U,x as f,m as A,W as B,y as Y,t as ce,ax as D,aO as pe,aQ as me,aR as fe}from"./index-51577e83.js";import{a as R}from"./index-85436ecc.js";import{m as _e}from"./index-adf42357.js";const ve={class:"icon-list"},be=["onClick"],ge=Z({__name:"index",props:{modelValue:{type:String,require:!1}},emits:["update:modelValue"],setup(K,{emit:y}){const d=ae(K,"modelValue"),i=m(!1),c=[],b=m(""),g=m([]),x=m(null);function a(){const _=Object.assign({});for(const s in _){const w=s.split("assets/icons/")[1].split(".svg")[0];c.push(w)}g.value=c}function S(){b.value?g.value=c.filter(_=>_.includes(b.value)):g.value=c}function O(_){y("update:modelValue",_),i.value=!1}return ne(x,()=>i.value=!1),ee(()=>{a()}),(_,s)=>{const w=r("svg-icon"),M=r("el-input"),N=r("Icon"),T=r("el-divider"),V=r("el-tooltip"),q=r("el-scrollbar"),z=r("el-popover");return h(),P("div",{class:"iconselect-container",ref_key:"iconSelectorRef",ref:x},[e(M,{modelValue:d.value,"onUpdate:modelValue":s[0]||(s[0]=p=>d.value=p),readonly:"",onClick:s[1]||(s[1]=p=>i.value=!i.value),placeholder:"点击选择图标"},{prepend:l(()=>[e(w,{"icon-class":d.value},null,8,["icon-class"])]),_:1},8,["modelValue"]),e(z,{shadow:"none",visible:i.value,placement:"bottom-end",trigger:"click",width:"400"},{reference:l(()=>[G("div",{onClick:s[2]||(s[2]=p=>i.value=!i.value),class:"cursor-pointer text-[#999] absolute right-[10px] top-0 height-[32px] leading-[32px]"},[H(e(N,{icon:"ep:caret-top"},null,512),[[J,i.value]]),H(e(N,{icon:"ep:caret-bottom"},null,512),[[J,!i.value]])])]),default:l(()=>[e(M,{class:"p-2",modelValue:b.value,"onUpdate:modelValue":s[3]||(s[3]=p=>b.value=p),placeholder:"搜索图标",clearable:"",onInput:S},null,8,["modelValue"]),e(T,{"border-style":"dashed"}),e(q,{height:"300px"},{default:l(()=>[G("ul",ve,[(h(!0),P(ie,null,se(g.value,(p,E)=>(h(),P("li",{class:"icon-item",key:E,onClick:L=>O(p)},[e(V,{content:p,placement:"bottom",effect:"light"},{default:l(()=>[e(w,{color:"var(--el-text-color-regular)","icon-class":p},null,8,["icon-class"])]),_:2},1032,["content"])],8,be))),128))])]),_:1})]),_:1},8,["visible"])],512)}}});const he=re(ge,[["__scopeId","data-v-35189a2f"]]),ye={class:"app-container"},we={class:"dialog-footer"},Ve={name:"cmenu"},Se=Z({...Ve,name:"MenuManage",setup(K){ue();const y=m(X),C=m(!1),d=$({visible:!1}),i=$({visible:!1}),c=$({visible:!1}),b=m([]),g=m([]),x=m([]),a=$({label:"",level:1,path:"",icon:"",sort:1}),S=m(),O=$({label:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],path:[{required:!0,message:"请输入菜单路径",trigger:"blur"}]}),_=m();async function s(){C.value=!0;const{error:n,data:t}=await R.query({operationName:"System/Menu/GetMany"});n||(b.value=t.data),C.value=!1}function w(n){_.value=n.id}function M(n){d.visible=!0,n?(d.title="编辑菜单",S.value=n.id,_e(a,n)):d.title="新增菜单"}function N(){y.value.validate(async n=>{if(n){if(S.value){const{error:t}=await R.mutate({operationName:"System/Menu/UpdateOne",input:{id:S.value,...a}});t||(D.success("修改成功"),V(),s())}else{const{error:t}=await R.mutate({operationName:"System/Menu/CreateOne",input:{...a}});t||(D.success("新增成功"),V(),s())}C.value=!1}})}function T(n){if(!n)return D.warning("请勾选删除项"),!1;pe.confirm("确认删除已选中的数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{const{error:t}=await R.mutate({operationName:"System/Menu/DeleteOne",input:{id:n}});t||(D.success("删除成功"),s())}).catch(()=>D.info("已取消删除"))}function V(){d.visible=!1,p()}function q(){i.visible=!1}function z(){c.visible=!1}function p(){y.value.resetFields(),y.value.clearValidate(),a.icon="",a.label="",a.level=1,a.path="",a.sort=1}ee(()=>{s()});function E(n){i.title="子菜单",me(n).then(t=>{i.visible=!0,g.value=t.data.data})}function L(n){c.title="子权限",fe(n).then(t=>{c.visible=!0,x.value=t.data.data})}return(n,t)=>{const v=r("el-button"),u=r("el-table-column"),Q=r("el-table"),le=r("el-card"),W=r("el-input"),F=r("el-form-item"),te=r("el-input-number"),j=r("el-dialog"),oe=de("loading");return h(),P("div",ye,[e(le,{shadow:"never"},{header:l(()=>[e(v,{type:"success",onClick:t[0]||(t[0]=o=>M())},{icon:l(()=>[e(k(U),{icon:"ep:plus"})]),default:l(()=>[f(" 新增")]),_:1})]),default:l(()=>[H((h(),A(Q,{data:b.value,"highlight-current-row":"","tree-props":{children:"children",hasChildren:"hasChildren"},onRowClick:w,"row-key":"id","default-expand-all":"",border:""},{default:l(()=>[e(u,{label:"菜单名称",width:"200",prop:"label"}),e(u,{label:"菜单路径",align:"center",width:"150",prop:"path"}),e(u,{label:"排序",align:"center",width:"100",prop:"sort"}),e(u,{fixed:"right",align:"center",label:"操作","min-width":"220"},{default:l(o=>[e(v,{type:"primary",link:"",size:"small",onClick:B(I=>M(o.row),["stop"])},{default:l(()=>[e(k(U),{icon:"ep:edit"}),f("编辑 ")]),_:2},1032,["onClick"]),e(v,{type:"primary",link:"",size:"small",onClick:B(I=>T(o.row.id),["stop"])},{default:l(()=>[e(k(U),{icon:"ep:delete"}),f("删除 ")]),_:2},1032,["onClick"]),o.row.is_bottom?Y("",!0):(h(),A(v,{key:0,type:"primary",link:"",size:"small",onClick:B(I=>E(o.row.id),["stop"])},{default:l(()=>[e(k(U),{icon:"ep:edit"}),f("子菜单 ")]),_:2},1032,["onClick"])),o.row.is_bottom?(h(),A(v,{key:1,type:"primary",link:"",size:"small",onClick:B(I=>L(o.row.id),["stop"])},{default:l(()=>[e(k(U),{icon:"ep:edit"}),f("子权限 ")]),_:2},1032,["onClick"])):Y("",!0)]),_:1})]),_:1},8,["data"])),[[oe,C.value]])]),_:1}),e(j,{title:d.title,modelValue:d.visible,"onUpdate:modelValue":t[5]||(t[5]=o=>d.visible=o),onClose:V,"destroy-on-close":"",appendToBody:"",width:"750px"},{footer:l(()=>[G("div",we,[e(v,{type:"primary",onClick:N},{default:l(()=>[f("确 定")]),_:1}),e(v,{onClick:V},{default:l(()=>[f("取 消")]),_:1})])]),default:l(()=>[e(k(X),{ref_key:"menuFormRef",ref:y,model:a,rules:O,"label-width":"100px"},{default:l(()=>[e(F,{label:"菜单名称",prop:"label"},{default:l(()=>[e(W,{modelValue:a.label,"onUpdate:modelValue":t[1]||(t[1]=o=>a.label=o),placeholder:"请输入菜单名称"},null,8,["modelValue"])]),_:1}),e(F,{label:"路由路径",prop:"path"},{default:l(()=>[e(W,{modelValue:a.path,"onUpdate:modelValue":t[2]||(t[2]=o=>a.path=o),placeholder:"/system  (目录以/开头)"},null,8,["modelValue"])]),_:1}),e(F,{label:"图标",prop:"icon"},{default:l(()=>[e(he,{modelValue:a.icon,"onUpdate:modelValue":t[3]||(t[3]=o=>a.icon=o)},null,8,["modelValue"])]),_:1}),e(F,{label:"排序",prop:"sort"},{default:l(()=>[e(te,{modelValue:a.sort,"onUpdate:modelValue":t[4]||(t[4]=o=>a.sort=o),style:{width:"100px"},"controls-position":"right",min:0},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"]),e(j,{title:i.title,modelValue:i.visible,"onUpdate:modelValue":t[6]||(t[6]=o=>i.visible=o),onClose:q,"destroy-on-close":"",appendToBody:"",width:"750px"},{default:l(()=>[e(Q,{data:g.value,style:{width:"100%"}},{default:l(()=>[e(u,{label:"菜单名称",width:"180",prop:"label"}),e(u,{label:"菜单路径",width:"200",prop:"path"}),e(u,{label:"排序",align:"center",width:"160",prop:"sort"}),e(u,{fixed:"right",align:"center",label:"操作"},{default:l(o=>[e(v,{type:"primary",link:"",size:"small",onClick:B(I=>L(o.row.id),["stop"])},{default:l(()=>[f(" 子权限 ")]),_:2},1032,["onClick"])]),_:1}),f("> ")]),_:1},8,["data"])]),_:1},8,["title","modelValue"]),e(j,{title:c.title,modelValue:c.visible,"onUpdate:modelValue":t[7]||(t[7]=o=>c.visible=o),onClose:z,"destroy-on-close":"",appendToBody:"",width:"750px"},{default:l(()=>[e(Q,{data:x.value,style:{width:"100%"}},{default:l(()=>[e(u,{label:"创建时间",width:"200",prop:"createdAt"}),e(u,{label:"是否启用",align:"center",width:"180"},{default:l(o=>[f(ce(o===0?"否":"是"),1)]),_:1}),e(u,{label:"方法",align:"center",width:"100",prop:"method"}),e(u,{label:"路径",width:"240",prop:"path"})]),_:1},8,["data"])]),_:1},8,["title","modelValue"])])}}});export{Se as default};

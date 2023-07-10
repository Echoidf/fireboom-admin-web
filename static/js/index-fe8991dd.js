import{d as D,h as r,aL as b,$ as L,k as M,r as o,M as P,o as k,c as S,f as E,a as e,w as a,aM as K,q as u,aN as V,x as _,N as Q,m as $,aO as R}from"./index-963cbf12.js";import{a as A,c as G}from"./index-ed420ef0.js";import{_ as I}from"./role.bind.vue_vue_type_script_setup_true_lang-5881b222.js";const O={class:"app-container"},T={class:"search"},X=D({name:"UserManage",__name:"index",setup(j){const f=r(b),d=r(!1),g=r(0),m=r(!1),v=r(),n=L({pageNum:1,pageSize:10,name:""}),h=r([]);async function i(){d.value=!0;const{error:c,data:l}=await A.query({operationName:"System/User/GetList",input:G(n,{containsFields:["name"]})});c||(h.value=l.data,g.value=l.data.length),d.value=!1}function N(){f.value.resetFields(),n.pageNum=1,i()}function x(c){m.value=!0,v.value=c}return M(()=>{i()}),(c,l)=>{const C=o("el-input"),w=o("el-form-item"),p=o("el-button"),s=o("el-table-column"),U=o("el-image"),q=o("el-table"),z=o("el-card"),F=P("loading");return k(),S("div",O,[E("div",T,[e(u(b),{ref_key:"queryFormRef",ref:f,model:n,inline:!0},{default:a(()=>[e(w,{label:"名称",prop:"name"},{default:a(()=>[e(C,{modelValue:n.name,"onUpdate:modelValue":l[0]||(l[0]=t=>n.name=t),placeholder:"用户名",clearable:"",style:{width:"200px"},onKeyup:K(i,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(w,null,{default:a(()=>[e(p,{type:"primary",onClick:i},{default:a(()=>[e(u(V),{icon:"ep:search"}),_("搜索 ")]),_:1}),e(p,{onClick:N},{default:a(()=>[e(u(V),{icon:"ep:refresh"}),_(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),e(z,{shadow:"never"},{default:a(()=>[Q((k(),$(q,{data:h.value,"highlight-current-row":"",border:""},{default:a(()=>[e(s,{key:"id",label:"编号",align:"center",prop:"id",width:"100"}),e(s,{key:"name",label:"用户名",align:"center",prop:"name",width:"200"}),e(s,{label:"头像",width:"80",align:"center",prop:"avatar"},{default:a(t=>[e(U,{src:t.row.avatar,"preview-src-list":[t.row.avatar]},null,8,["src","preview-src-list"])]),_:1}),e(s,{label:"创建时间",align:"center",prop:"createdAt",width:"180",formatter:(t,B,y)=>y?new Date(y).toLocaleDateString():""},null,8,["formatter"]),e(s,{label:"操作",fixed:"right","min-width":"220"},{default:a(t=>[e(p,{type:"primary",size:"small",link:"",onClick:B=>x(t.row)},{default:a(()=>[_("绑定角色")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[F,d.value]]),e(u(R),{total:g.value,"page-count":n.pageNum,"page-size":n.pageSize,onPagination:i},null,8,["total","page-count","page-size"])]),_:1}),e(I,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=t=>m.value=t),user:v.value},null,8,["modelValue","user"])])}}});export{X as default};

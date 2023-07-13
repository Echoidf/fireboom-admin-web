import{d as B,h as r,aL as N,$ as D,k as M,r as o,M as P,o as f,c as E,f as G,a as e,w as n,aM as K,q as d,aN as U,x as v,N as Q,m as V,aO as $,y as R}from"./index-3f41c710.js";import{a as I,c as O}from"./index-ba7ef396.js";import{_ as T}from"./role.bind.vue_vue_type_script_setup_true_lang-edf06d33.js";const j={class:"app-container"},H={class:"search"},Z=B({name:"UserManage",__name:"index",setup(J){const g=r(N),m=r(!1),u=r(0),p=r(!1),y=r(),l=D({pageNum:1,pageSize:10,name:""}),b=r([]);async function s(){m.value=!0;const{error:c,data:t}=await I.query({operationName:"System/User/GetList",input:O(l,{containsFields:["name"]})});c||(b.value=t.data,u.value=t.data.length),m.value=!1}function C(){g.value.resetFields(),l.pageNum=1,s()}function x(c){p.value=!0,y.value=c}return M(()=>{s()}),(c,t)=>{const S=o("el-input"),w=o("el-form-item"),_=o("el-button"),h=o("Auth"),i=o("el-table-column"),L=o("Avatar"),q=o("el-table"),A=o("el-card"),F=P("loading");return f(),E("div",j,[G("div",H,[e(d(N),{ref_key:"queryFormRef",ref:g,model:l,inline:!0},{default:n(()=>[e(w,{label:"名称",prop:"name"},{default:n(()=>[e(S,{modelValue:l.name,"onUpdate:modelValue":t[0]||(t[0]=a=>l.name=a),placeholder:"用户名",clearable:"",style:{width:"200px"},onKeyup:K(s,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(w,null,{default:n(()=>[e(h,{value:"/System/User/GetList"},{default:n(()=>[e(_,{type:"primary",onClick:s},{default:n(()=>[e(d(U),{icon:"ep:search"}),v("搜索 ")]),_:1})]),_:1}),e(h,{value:"/System/User/GetList"},{default:n(()=>[e(_,{onClick:C},{default:n(()=>[e(d(U),{icon:"ep:refresh"}),v(" 重置 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),e(A,{shadow:"never"},{default:n(()=>[Q((f(),V(q,{data:b.value,"highlight-current-row":"",border:""},{default:n(()=>[e(i,{key:"id",label:"编号",align:"center",prop:"id",width:"100"}),e(i,{key:"name",label:"用户名",align:"center",prop:"name",width:"200"}),e(i,{label:"头像",width:"80",align:"center",prop:"avatar"},{default:n(a=>[e(L,{username:a.row.name,src:a.row.avatar,color:"#fff","background-color":"#ccc",style:{"vertical-align":"middle"},inline:!0},null,8,["username","src"])]),_:1}),e(i,{label:"创建时间",align:"center",prop:"createdAt",width:"180",formatter:(a,z,k)=>k?new Date(k).toLocaleDateString():""},null,8,["formatter"]),e(i,{label:"操作",fixed:"right","min-width":"220"},{default:n(a=>[e(_,{type:"primary",size:"small",link:"",onClick:z=>x(a.row)},{default:n(()=>[v("绑定角色")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[F,m.value]]),u.value>0?(f(),V(d($),{key:0,total:u.value,"onUpdate:total":t[1]||(t[1]=a=>u.value=a),"current-page":l.pageNum,"onUpdate:currentPage":t[2]||(t[2]=a=>l.pageNum=a),limit:l.pageSize,"onUpdate:limit":t[3]||(t[3]=a=>l.pageSize=a),onCurrentChange:s},null,8,["total","current-page","limit"])):R("",!0)]),_:1}),e(T,{modelValue:p.value,"onUpdate:modelValue":t[4]||(t[4]=a=>p.value=a),user:y.value},null,8,["modelValue","user"])])}}});export{Z as default};

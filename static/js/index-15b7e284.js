import{a as C}from"./index-2ab825e1.js";import{s as B}from"./system-11ac3e2f.js";import{d as M,r as l,o as N,a as i,k as R,g as D,i as a,w as u,aI as E,b as w,m as G,c as V,l as z,aG as A,f as I,e as O}from"./index-1ea74710.js";const Q={class:"app-container"},j={style:{"margin-top":"20px"}},H=M({name:"PermManage",__name:"index",setup(q){const m=l(),d=l(!1);let r=[];const _=l(0),h=l([]);async function y(){d.value=!0;const{error:o,data:e}=await C.query({operationName:"System/Operation/GetMany"});o||(r=e.data,_.value=r.length,b(),E.get("/operations/System/Perm/GetBindPerms").then(t=>{const c=t.data.data.data.map(n=>n.path)??[];h.value=c;const p=r.filter(n=>c.includes(n.title));for(const n of p)m.value.toggleRowSelection(n,!0)})),d.value=!1}N(()=>{y()});let g=[];const S=o=>{g=o,h.value=o.map(e=>{e.title})};let f=[];const k=()=>{g.forEach(e=>{const t={id:e.id,createdAt:new Date(e.createTime).toISOString(),enabled:e.enabled?1:0,method:e.method,path:e.title};f.push(t)}),B({data:f}).then(e=>{})};l();const s=l(1),v=l(10),b=()=>r.slice((s.value-1)*v.value,s.value*v.value),x=o=>o.title;return(o,e)=>{const t=i("el-table-column"),c=i("el-pagination"),p=i("el-button"),n=i("el-card"),P=R("loading");return w(),D("div",Q,[a(n,{shadow:"never"},{default:u(()=>[G((w(),V(z(A),{ref_key:"dataTableRef",ref:m,data:b(),onSelectionChange:S,"row-key":x,"highlight-current-row":"",border:""},{default:u(()=>[a(t,{label:"勾选",type:"selection","reserve-selection":!0}),a(t,{label:"请求路径",prop:"title",width:"250"}),a(t,{label:"Method",prop:"method",width:"150"}),a(t,{label:"请求类型",prop:"operationType"}),a(t,{label:"是否实时",prop:"liveQuery",width:"100"}),a(t,{label:"是否启用",prop:"enabled",width:"100"})]),_:1},8,["data"])),[[P,d.value]]),a(c,{small:"",background:"",layout:"prev, pager, next","current-page":s.value,"onUpdate:currentPage":e[0]||(e[0]=T=>s.value=T),total:_.value,size:10,class:"mt-4"},null,8,["current-page","total"]),I("div",j,[a(p,{onClick:k},{default:u(()=>[O("勾选项同步到数据库")]),_:1})])]),_:1})])}}});export{H as default};

import{a as p}from"./index-85436ecc.js";import{d as i,h as m,k as u,r as f,o as e,m as h,w as n,x as v,c as _,l as S,f as s,t,O as y,F as x,_ as g}from"./index-51577e83.js";const k={class:"ml-4"},N={class:"ml-auto"},T=i({__name:"SalesTop10",setup(B){const o=m([]);return u(async()=>{const{data:r,error:c}=await p.query({operationName:"Statistics/SalesTop10"});c||(o.value=r.data)}),(r,c)=>{const d=f("el-card");return e(),h(d,null,{header:n(()=>[v("门店销售额排名")]),default:n(()=>[(e(!0),_(x,null,S(o.value,(l,a)=>(e(),_("div",{key:a,className:"flex py-1.5 items-center"},[s("div",{class:y(["order",{highlight:a<3}])},t(a+1),3),s("div",k,t(l.shopName),1),s("div",N,t(Math.round(l.totalSales*100)/100),1)]))),128))]),_:1})}}});const b=g(T,[["__scopeId","data-v-c84ab863"]]);export{b as default};

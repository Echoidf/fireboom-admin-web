import{i as c,L as l}from"./index-5972638f.js";import{a as d}from"./index-43b279d1.js";import{d as p,h as s,k as f,r as m,o as u,m as _,w as i,x as y,f as g,O as h}from"./index-80a7ef5e.js";const N=p({__name:"VisitTrending",props:{className:{type:String,default:""}},setup(n){const r=s(),a=s();return f(async()=>{a.value=c(r.value),window.addEventListener("resize",()=>{var e;(e=a.value)==null||e.resize()});const{data:t,error:o}=await d.query({operationName:"Statistics/VisitTrending"});o||a.value.setOption({tooltip:{trigger:"axis"},grid:{left:40,top:20,bottom:20,right:20},xAxis:{type:"category",data:t.data.map(e=>e.days)??[]},yAxis:{type:"value"},series:[{data:t.data.map(e=>e.count)??[],type:"line",smooth:!0,areaStyle:{color:new l(0,0,0,1,[{offset:0,color:"rgba(58,77,233,0.8)"},{offset:1,color:"rgba(58,77,233,0.3)"}])}}]})}),(t,o)=>{const e=m("el-card");return u(),_(e,null,{header:i(()=>[y("日访问量趋势")]),default:i(()=>[g("div",{ref_key:"chartElRef",ref:r,class:h([n.className,"h-60"])},null,2)]),_:1})}}});export{N as _};
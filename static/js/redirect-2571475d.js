import{d as c,z as s,q as p,c as u,o as _}from"./index-26a832c3.js";const l=c({name:"Redirect",__name:"redirect",setup(i){const{currentRoute:r,replace:t}=s(),{params:a,query:n}=p(r),{path:e}=a,o=Array.isArray(e)?e.join("/"):e;return t({path:"/"+o,query:n}),(m,d)=>(_(),u("div"))}});export{l as default};
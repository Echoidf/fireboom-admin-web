import{d as s,u as c,l as p,g as u,b as _}from"./index-1ea74710.js";const f=s({name:"Redirect",__name:"redirect",setup(i){const{currentRoute:r,replace:t}=c(),{params:a,query:n}=p(r),{path:e}=a,o=Array.isArray(e)?e.join("/"):e;return t({path:"/"+o,query:n}),(m,d)=>(_(),u("div"))}});export{f as default};

import{af as A,y as i,aO as te,ae as ne,x as j,q as G,Z as c,$ as m,s as h,M as oe,v as F,r as E,d as S,ah as w,aP as ae,aQ as z,aR as ue,u as le,aS as re,H as se,aC as k,K as N,aT as ie,a7 as fe,aU as de,U as ce,P as me,an as he,b as I,g as L,f as T}from"./index-986fbe68.js";function ge(){const{$storage:t,$config:e}=A(),o=()=>{te().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=ne),t.locale||(t.locale={locale:(e==null?void 0:e.Locale)??"zh"},j().locale.value=(e==null?void 0:e.Locale)??"zh"),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},n=i(()=>t==null?void 0:t.layout.layout),a=i(()=>t.layout);return{layout:n,layoutTheme:a,initStorage:o}}const pe=G({id:"pure-app",state:()=>{var t,e;return{sidebar:{opened:((t=c().getItem(`${m()}layout`))==null?void 0:t.sidebarStatus)??h().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((e=c().getItem(`${m()}layout`))==null?void 0:e.layout)??h().Layout,device:oe()?"mobile":"desktop"}},getters:{getSidebarStatus(t){return t.sidebar.opened},getDevice(t){return t.device}},actions:{TOGGLE_SIDEBAR(t,e){const o=c().getItem(`${m()}layout`);t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,o.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,o.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,o.sidebarStatus=this.sidebar.opened),c().setItem(`${m()}layout`,o)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function ve(){return pe(F)}const be=G({id:"pure-epTheme",state:()=>{var t,e;return{epThemeColor:((t=c().getItem(`${m()}layout`))==null?void 0:t.epThemeColor)??h().EpThemeColor,epTheme:((e=c().getItem(`${m()}layout`))==null?void 0:e.theme)??h().Theme}},getters:{getEpThemeColor(t){return t.epThemeColor},fill(t){return t.epTheme==="light"?"#409eff":t.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(t){const e=c().getItem(`${m()}layout`);this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e&&(e.epThemeColor=t,c().setItem(`${m()}layout`,e))}}});function y(){return be(F)}const x={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/home/runner/work/fireboom-admin-web/fireboom-admin-web/node_modules/.pnpm/@pureadmin+theme@3.1.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #001529 !default;
        $menuHover: #4091f7 !default;
        $subMenuBg: #0f0303 !default;
        $subMenuActiveBg: #4091f7 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #002140 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-light",varsContent:`
        $subMenuActiveText: #409eff !default;
        $menuBg: #fff !default;
        $menuHover: #e0ebf6 !default;
        $subMenuBg: #fff !default;
        $subMenuActiveBg: #e0ebf6 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #fff !default;
        $menuTitleHover: #000 !default;
        $menuActiveBefore: #4091f7 !default;
      `},{scopeName:"layout-theme-dusk",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2a0608 !default;
        $menuHover: #e13c39 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #e13c39 !default;
        $menuText: rgb(254 254 254 / 65.1%) !default;
        $sidebarLogo: #42090c !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e13c39 !default;
      `},{scopeName:"layout-theme-volcano",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #2b0e05 !default;
        $menuHover: #e85f33 !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #e85f33 !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #441708 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #e85f33 !default;
      `},{scopeName:"layout-theme-yellow",varsContent:`
        $subMenuActiveText: #d25f00 !default;
        $menuBg: #2b2503 !default;
        $menuHover: #f6da4d !default;
        $subMenuBg: #0f0603 !default;
        $subMenuActiveBg: #f6da4d !default;
        $menuText: rgb(254 254 254 / 65%) !default;
        $sidebarLogo: #443b05 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #f6da4d !default;
      `},{scopeName:"layout-theme-mingQing",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #032121 !default;
        $menuHover: #59bfc1 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #59bfc1 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #053434 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #59bfc1 !default;
      `},{scopeName:"layout-theme-auroraGreen",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #0b1e15 !default;
        $menuHover: #60ac80 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #60ac80 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #112f21 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #60ac80 !default;
      `},{scopeName:"layout-theme-pink",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #28081a !default;
        $menuHover: #d84493 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #d84493 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #3f0d29 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #d84493 !default;
      `},{scopeName:"layout-theme-saucePurple",varsContent:`
        $subMenuActiveText: #fff !default;
        $menuBg: #130824 !default;
        $menuHover: #693ac9 !default;
        $subMenuBg: #000 !default;
        $subMenuActiveBg: #693ac9 !default;
        $menuText: #7a80b4 !default;
        $sidebarLogo: #1f0c38 !default;
        $menuTitleHover: #fff !default;
        $menuActiveBefore: #693ac9 !default;
      `}]},Te="./",$e="assets";function V(t){let e=t.replace("#","").match(/../g);for(let o=0;o<3;o++)e[o]=parseInt(e[o],16);return e}function Q(t,e,o){let n=[t.toString(16),e.toString(16),o.toString(16)];for(let a=0;a<3;a++)n[a].length==1&&(n[a]=`0${n[a]}`);return`#${n.join("")}`}function ye(t,e){let o=V(t);for(let n=0;n<3;n++)o[n]=Math.floor(o[n]*(1-e));return Q(o[0],o[1],o[2])}function Ce(t,e){let o=V(t);for(let n=0;n<3;n++)o[n]=Math.floor((255-o[n])*e+o[n]);return Q(o[0],o[1],o[2])}function P(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function R({scopeName:t,multipleScopeVars:e}){const o=Array.isArray(e)&&e.length?e:x.multipleScopeVars;let n=document.documentElement.className;new RegExp(P(t)).test(n)||(o.forEach(a=>{n=n.replace(new RegExp(P(a.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function D({id:t,href:e}){const o=document.createElement("link");return o.rel="stylesheet",o.href=e,o.id=t,o}function Me(t){const e={scopeName:"theme-default",customLinkHref:s=>s,...t},o=e.themeLinkTagId||x.themeLinkTagId;let n=document.getElementById(o);const a=e.customLinkHref(`${Te.replace(/\/$/,"")}${`/${$e}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${o}_old`;const s=D({id:o,href:a});n.nextSibling?n.parentNode.insertBefore(s,n.nextSibling):n.parentNode.appendChild(s),s.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),R(e)};return}n=D({id:o,href:a}),R(e),document[(e.themeLinkTagInjectTo||x.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function Ge(){var $;const{layoutTheme:t,layout:e}=ge(),o=E([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=A(),a=E(($=n==null?void 0:n.layout)==null?void 0:$.darkMode),s=document.documentElement;function d(r=h().Theme??"default"){var l,p;if(t.value.theme=r,Me({scopeName:`layout-theme-${r}`}),n.layout={layout:e.value,theme:r,darkMode:a.value,sidebarStatus:(l=n.layout)==null?void 0:l.sidebarStatus,epThemeColor:(p=n.layout)==null?void 0:p.epThemeColor},r==="default"||r==="light")g(h().EpThemeColor);else{const C=o.value.find(M=>M.themeColor===r);g(C.color)}}function v(r,l,p){document.documentElement.style.setProperty(`--el-color-primary-${r}-${l}`,a.value?ye(p,l/10):Ce(p,l/10))}const g=r=>{y().setEpThemeColor(r),document.documentElement.style.setProperty("--el-color-primary",r);for(let l=1;l<=2;l++)v("dark",l,r);for(let l=1;l<=9;l++)v("light",l,r)};function b(){y().epTheme==="light"&&a.value?d("default"):d(y().epTheme),a.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:s,dataTheme:a,layoutTheme:t,themeColors:o,dataThemeChange:b,setEpThemeColor:g,setLayoutThemeColor:d}}function Fe(t,e){const o=/^IF-/;if(o.test(t)){const n=t.split(o)[1],a=n.slice(0,n.indexOf(" ")==-1?n.length:n.indexOf(" ")),s=n.slice(n.indexOf(" ")+1,n.length);return S({name:"FontIcon",render(){return w(ae,{icon:a,iconType:s,...e})}})}else return typeof t=="function"||typeof(t==null?void 0:t.render)=="function"?t:typeof t=="object"?S({name:"OfflineIcon",render(){return w(z,{icon:t,...e})}}):S({name:"Icon",render(){const n=t&&t.includes(":")?ue:z;return w(n,{icon:t,...e})}})}function Be(t){return{all:t=t||new Map,on:function(e,o){var n=t.get(e);n?n.push(o):t.set(e,[o])},off:function(e,o){var n=t.get(e);n&&(o?n.splice(n.indexOf(o)>>>0,1):t.set(e,[]))},emit:function(e,o){var n=t.get(e);n&&n.slice().map(function(a){a(o)}),(n=t.get("*"))&&n.slice().map(function(a){a(e,o)})}}}const O=Be(),Se="当前路由配置不正确，请检查配置";function we(){var H;const t=ve(),e=le().options.routes,{wholeMenus:o}=re(se()),n=((H=h())==null?void 0:H.TooltipEffect)??"light",a=i(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),s=i(()=>{var u;return(u=k())==null?void 0:u.username}),d=i(()=>{var u;return(u=k())==null?void 0:u.avatar}),v=i(()=>(u,f)=>({background:u===f?y().epThemeColor:"",color:u===f?"#f4f4f5":"#000"})),g=i(()=>(u,f)=>u===f?"":"dark:hover:!text-primary"),b=i(()=>s.value?{marginRight:"10px"}:""),$=i(()=>!t.getSidebarStatus),r=i(()=>t.getDevice),{$storage:l,$config:p}=A(),C=i(()=>{var u;return(u=l==null?void 0:l.layout)==null?void 0:u.layout}),M=i(()=>p.Title);function U(u){const f=h().Title;f?document.title=`${N(u.title)} | ${f}`:document.title=N(u.title)}function W(){k().logOut()}function q(){var u;ie.push((u=fe())==null?void 0:u.path)}function K(){O.emit("openPanel")}function Z(){t.toggleSideBar()}function J(u){u==null||u.handleResize()}function X(u){var _;if(!u.children)return console.error(Se);const f=/^http(s?):\/\//,B=(_=u.children[0])==null?void 0:_.path;return f.test(B)?u.path+"/"+B:B}function Y(u){o.value.length===0||ee(u)||O.emit("changLayoutRoute",u)}function ee(u){return de.includes(u)}return{title:M,device:r,layout:C,logout:W,routers:e,$storage:l,backTopMenu:q,onPanel:K,getDivStyle:a,changeTitle:U,toggleSideBar:Z,menuSelect:Y,handleResize:J,resolvePath:X,isCollapse:$,pureApp:t,username:s,userAvatar:d,avatarsStyle:b,tooltipEffect:n,getDropdownItemStyle:v,getDropdownItemClass:g}}function Ve(t){const{$storage:e,changeTitle:o,handleResize:n}=we(),{locale:a,t:s}=j(),d=ce();function v(){e.locale={locale:"zh"},a.value="zh",t&&n(t.value)}function g(){e.locale={locale:"en"},a.value="en",t&&n(t.value)}return me(()=>a.value,()=>{o(d.meta)}),he(()=>{var b;a.value=((b=e.locale)==null?void 0:b.locale)??"zh"}),{t:s,route:d,locale:a,translationCh:v,translationEn:g}}const ke={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},xe=T("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),Ae=[xe];function Ie(t,e){return I(),L("svg",ke,Ae)}const Qe={render:Ie},Ue={width:1024,height:1024,body:'<path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>'},Le={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},He=T("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),_e=T("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),Ee=[He,_e];function ze(t,e){return I(),L("svg",Le,Ee)}const We={render:ze},Ne={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Pe=T("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Re=T("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),De=[Pe,Re];function Oe(t,e){return I(),L("svg",Ne,De)}const qe={render:Oe};export{Fe as a,we as b,Ve as c,Ue as d,O as e,Ge as f,Qe as g,ve as h,We as i,qe as j,ge as k,Me as t,y as u};

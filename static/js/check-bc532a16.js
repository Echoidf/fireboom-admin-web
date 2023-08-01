import{ah as I,y as i,b0 as Y,ag as Z,x as _,q as z,a0 as c,a1 as m,s as h,M as ee,v as O,r as w,d as S,aj as M,b1 as te,b2 as H,b3 as ne,u as ae,b4 as oe,H as ue,aH as k,K as E,b5 as le,a9 as re,b6 as se,W as ie,R as fe,ap as de,b as ce,g as me,f as he}from"./index-d0b35c07.js";function ge(){const{$storage:t,$config:e}=I(),a=()=>{Y().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=Z),t.locale||(t.locale={locale:(e==null?void 0:e.Locale)??"zh"},_().locale.value=(e==null?void 0:e.Locale)??"zh"),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},n=i(()=>t==null?void 0:t.layout.layout),o=i(()=>t.layout);return{layout:n,layoutTheme:o,initStorage:a}}const pe=z({id:"pure-app",state:()=>{var t,e;return{sidebar:{opened:((t=c().getItem(`${m()}layout`))==null?void 0:t.sidebarStatus)??h().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((e=c().getItem(`${m()}layout`))==null?void 0:e.layout)??h().Layout,device:ee()?"mobile":"desktop"}},getters:{getSidebarStatus(t){return t.sidebar.opened},getDevice(t){return t.device}},actions:{TOGGLE_SIDEBAR(t,e){const a=c().getItem(`${m()}layout`);t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,a.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,a.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,a.sidebarStatus=this.sidebar.opened),c().setItem(`${m()}layout`,a)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function be(){return pe(O)}const Te=z({id:"pure-epTheme",state:()=>{var t,e;return{epThemeColor:((t=c().getItem(`${m()}layout`))==null?void 0:t.epThemeColor)??h().EpThemeColor,epTheme:((e=c().getItem(`${m()}layout`))==null?void 0:e.theme)??h().Theme}},getters:{getEpThemeColor(t){return t.epThemeColor},fill(t){return t.epTheme==="light"?"#409eff":t.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(t){const e=c().getItem(`${m()}layout`);this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e&&(e.epThemeColor=t,c().setItem(`${m()}layout`,e))}}});function y(){return Te(O)}const A={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/home/runner/work/fireboom-admin-web/fireboom-admin-web/node_modules/.pnpm/@pureadmin+theme@3.1.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
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
      `}]},ve="./",ye="assets";function j(t){let e=t.replace("#","").match(/../g);for(let a=0;a<3;a++)e[a]=parseInt(e[a],16);return e}function G(t,e,a){let n=[t.toString(16),e.toString(16),a.toString(16)];for(let o=0;o<3;o++)n[o].length==1&&(n[o]=`0${n[o]}`);return`#${n.join("")}`}function $e(t,e){let a=j(t);for(let n=0;n<3;n++)a[n]=Math.floor(a[n]*(1-e));return G(a[0],a[1],a[2])}function Ce(t,e){let a=j(t);for(let n=0;n<3;n++)a[n]=Math.floor((255-a[n])*e+a[n]);return G(a[0],a[1],a[2])}function N(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function P({scopeName:t,multipleScopeVars:e}){const a=Array.isArray(e)&&e.length?e:A.multipleScopeVars;let n=document.documentElement.className;new RegExp(N(t)).test(n)||(a.forEach(o=>{n=n.replace(new RegExp(N(o.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function R({id:t,href:e}){const a=document.createElement("link");return a.rel="stylesheet",a.href=e,a.id=t,a}function Be(t){const e={scopeName:"theme-default",customLinkHref:s=>s,...t},a=e.themeLinkTagId||A.themeLinkTagId;let n=document.getElementById(a);const o=e.customLinkHref(`${ve.replace(/\/$/,"")}${`/${ye}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${a}_old`;const s=R({id:a,href:o});n.nextSibling?n.parentNode.insertBefore(s,n.nextSibling):n.parentNode.appendChild(s),s.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),P(e)};return}n=R({id:a,href:o}),P(e),document[(e.themeLinkTagInjectTo||A.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function He(){var v;const{layoutTheme:t,layout:e}=ge(),a=w([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=I(),o=w((v=n==null?void 0:n.layout)==null?void 0:v.darkMode),s=document.documentElement;function d(r=h().Theme??"default"){var l,p;if(t.value.theme=r,Be({scopeName:`layout-theme-${r}`}),n.layout={layout:e.value,theme:r,darkMode:o.value,sidebarStatus:(l=n.layout)==null?void 0:l.sidebarStatus,epThemeColor:(p=n.layout)==null?void 0:p.epThemeColor},r==="default"||r==="light")g(h().EpThemeColor);else{const $=a.value.find(C=>C.themeColor===r);g($.color)}}function b(r,l,p){document.documentElement.style.setProperty(`--el-color-primary-${r}-${l}`,o.value?$e(p,l/10):Ce(p,l/10))}const g=r=>{y().setEpThemeColor(r),document.documentElement.style.setProperty("--el-color-primary",r);for(let l=1;l<=2;l++)b("dark",l,r);for(let l=1;l<=9;l++)b("light",l,r)};function T(){y().epTheme==="light"&&o.value?d("default"):d(y().epTheme),o.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:s,dataTheme:o,layoutTheme:t,themeColors:a,dataThemeChange:T,setEpThemeColor:g,setLayoutThemeColor:d}}function Ee(t,e){const a=/^IF-/;if(a.test(t)){const n=t.split(a)[1],o=n.slice(0,n.indexOf(" ")==-1?n.length:n.indexOf(" ")),s=n.slice(n.indexOf(" ")+1,n.length);return S({name:"FontIcon",render(){return M(te,{icon:o,iconType:s,...e})}})}else return typeof t=="function"||typeof(t==null?void 0:t.render)=="function"?t:typeof t=="object"?S({name:"OfflineIcon",render(){return M(H,{icon:t,...e})}}):S({name:"Icon",render(){const n=t&&t.includes(":")?ne:H;return M(n,{icon:t,...e})}})}function Se(t){return{all:t=t||new Map,on:function(e,a){var n=t.get(e);n?n.push(a):t.set(e,[a])},off:function(e,a){var n=t.get(e);n&&(a?n.splice(n.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var n=t.get(e);n&&n.slice().map(function(o){o(a)}),(n=t.get("*"))&&n.slice().map(function(o){o(e,a)})}}}const D=Se(),Me="当前路由配置不正确，请检查配置";function ke(){var L;const t=be(),e=ae().options.routes,{wholeMenus:a}=oe(ue()),n=((L=h())==null?void 0:L.TooltipEffect)??"light",o=i(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),s=i(()=>{var u;return(u=k())==null?void 0:u.username}),d=i(()=>{var u;return(u=k())==null?void 0:u.avatar}),b=i(()=>(u,f)=>({background:u===f?y().epThemeColor:"",color:u===f?"#f4f4f5":"#000"})),g=i(()=>(u,f)=>u===f?"":"dark:hover:!text-primary"),T=i(()=>s.value?{marginRight:"10px"}:""),v=i(()=>!t.getSidebarStatus),r=i(()=>t.getDevice),{$storage:l,$config:p}=I(),$=i(()=>{var u;return(u=l==null?void 0:l.layout)==null?void 0:u.layout}),C=i(()=>p.Title);function F(u){const f=h().Title;f?document.title=`${E(u.title)} | ${f}`:document.title=E(u.title)}function V(){k().logOut()}function W(){var u;le.push((u=re())==null?void 0:u.path)}function Q(){D.emit("openPanel")}function q(){t.toggleSideBar()}function K(u){u==null||u.handleResize()}function U(u){var x;if(!u.children)return console.error(Me);const f=/^http(s?):\/\//,B=(x=u.children[0])==null?void 0:x.path;return f.test(B)?u.path+"/"+B:B}function J(u){a.value.length===0||X(u)||D.emit("changLayoutRoute",u)}function X(u){return se.includes(u)}return{title:C,device:r,layout:$,logout:V,routers:e,$storage:l,backTopMenu:W,onPanel:Q,getDivStyle:o,changeTitle:F,toggleSideBar:q,menuSelect:J,handleResize:K,resolvePath:U,isCollapse:v,pureApp:t,username:s,userAvatar:d,avatarsStyle:T,tooltipEffect:n,getDropdownItemStyle:b,getDropdownItemClass:g}}function Ne(t){const{$storage:e,changeTitle:a,handleResize:n}=ke(),{locale:o,t:s}=_(),d=ie();function b(){e.locale={locale:"zh"},o.value="zh",t&&n(t.value)}function g(){e.locale={locale:"en"},o.value="en",t&&n(t.value)}return fe(()=>o.value,()=>{a(d.meta)}),de(()=>{var T;o.value=((T=e.locale)==null?void 0:T.locale)??"zh"}),{t:s,route:d,locale:o,translationCh:b,translationEn:g}}const Ae={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},Ie=he("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),Le=[Ie];function xe(t,e){return ce(),me("svg",Ae,Le)}const Pe={render:xe},Re={width:1024,height:1024,body:'<path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>'};export{Ee as a,ke as b,Ne as c,Re as d,D as e,He as f,Pe as g,be as h,ge as i,Be as t,y as u};

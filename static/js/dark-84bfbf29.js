import{ae as k,i,ay as K,ad as X,u as D,e as R,Y as c,Z as m,g as h,I as ee,s as j,h as _,z as te,az as ne,C as ae,au as w,G as E,aA as oe,a6 as ue,aB as le,T as se,L as re,am as ie,o as A,c as L,f as T}from"./index-26a832c3.js";function de(){const{$storage:t,$config:e}=k(),a=()=>{K().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=X),t.locale||(t.locale={locale:(e==null?void 0:e.Locale)??"zh"},D().locale.value=(e==null?void 0:e.Locale)??"zh"),t.layout||(t.layout={layout:(e==null?void 0:e.Layout)??"vertical",theme:(e==null?void 0:e.Theme)??"default",darkMode:(e==null?void 0:e.DarkMode)??!1,sidebarStatus:(e==null?void 0:e.SidebarStatus)??!0,epThemeColor:(e==null?void 0:e.EpThemeColor)??"#409EFF"}),t.configure||(t.configure={grey:(e==null?void 0:e.Grey)??!1,weak:(e==null?void 0:e.Weak)??!1,hideTabs:(e==null?void 0:e.HideTabs)??!1,showLogo:(e==null?void 0:e.ShowLogo)??!0,showModel:(e==null?void 0:e.ShowModel)??"smart",multiTagsCache:(e==null?void 0:e.MultiTagsCache)??!1})},n=i(()=>t==null?void 0:t.layout.layout),u=i(()=>t.layout);return{layout:n,layoutTheme:u,initStorage:a}}const fe=R({id:"pure-app",state:()=>{var t,e;return{sidebar:{opened:((t=c().getItem(`${m()}layout`))==null?void 0:t.sidebarStatus)??h().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((e=c().getItem(`${m()}layout`))==null?void 0:e.layout)??h().Layout,device:ee()?"mobile":"desktop"}},getters:{getSidebarStatus(t){return t.sidebar.opened},getDevice(t){return t.device}},actions:{TOGGLE_SIDEBAR(t,e){const a=c().getItem(`${m()}layout`);t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,a.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,a.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,a.sidebarStatus=this.sidebar.opened),c().setItem(`${m()}layout`,a)},async toggleSideBar(t,e){await this.TOGGLE_SIDEBAR(t,e)},toggleDevice(t){this.device=t},setLayout(t){this.layout=t}}});function ce(){return fe(j)}const me=R({id:"pure-epTheme",state:()=>{var t,e;return{epThemeColor:((t=c().getItem(`${m()}layout`))==null?void 0:t.epThemeColor)??h().EpThemeColor,epTheme:((e=c().getItem(`${m()}layout`))==null?void 0:e.theme)??h().Theme}},getters:{getEpThemeColor(t){return t.epThemeColor},fill(t){return t.epTheme==="light"?"#409eff":t.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(t){const e=c().getItem(`${m()}layout`);this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e&&(e.epThemeColor=t,c().setItem(`${m()}layout`,e))}}});function y(){return me(j)}const S={outputDir:"",defaultScopeName:"",includeStyleWithColors:[],extract:!0,themeLinkTagId:"theme-link-tag",themeLinkTagInjectTo:"head",removeCssScopeName:!1,customThemeCssFileName:null,arbitraryMode:!1,defaultPrimaryColor:"",customThemeOutputPath:"/home/runner/work/fireboom-admin-web/fireboom-admin-web/node_modules/.pnpm/@pureadmin+theme@3.1.0/node_modules/@pureadmin/theme/setCustomTheme.js",styleTagId:"custom-theme-tagid",InjectDefaultStyleTagToHtml:!0,hueDiffControls:{low:0,high:0},multipleScopeVars:[{scopeName:"layout-theme-default",varsContent:`
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
      `}]},he="./",ge="assets";function G(t){let e=t.replace("#","").match(/../g);for(let a=0;a<3;a++)e[a]=parseInt(e[a],16);return e}function O(t,e,a){let n=[t.toString(16),e.toString(16),a.toString(16)];for(let u=0;u<3;u++)n[u].length==1&&(n[u]=`0${n[u]}`);return`#${n.join("")}`}function pe(t,e){let a=G(t);for(let n=0;n<3;n++)a[n]=Math.floor(a[n]*(1-e));return O(a[0],a[1],a[2])}function ve(t,e){let a=G(t);for(let n=0;n<3;n++)a[n]=Math.floor((255-a[n])*e+a[n]);return O(a[0],a[1],a[2])}function I(t){return`(^${t}\\s+|\\s+${t}\\s+|\\s+${t}$|^${t}$)`}function z({scopeName:t,multipleScopeVars:e}){const a=Array.isArray(e)&&e.length?e:S.multipleScopeVars;let n=document.documentElement.className;new RegExp(I(t)).test(n)||(a.forEach(u=>{n=n.replace(new RegExp(I(u.scopeName),"g"),` ${t} `)}),document.documentElement.className=n.replace(/(^\s+|\s+$)/g,""))}function N({id:t,href:e}){const a=document.createElement("link");return a.rel="stylesheet",a.href=e,a.id=t,a}function be(t){const e={scopeName:"theme-default",customLinkHref:r=>r,...t},a=e.themeLinkTagId||S.themeLinkTagId;let n=document.getElementById(a);const u=e.customLinkHref(`${he.replace(/\/$/,"")}${`/${ge}/${e.scopeName}.css`.replace(/\/+(?=\/)/g,"")}`);if(n){n.id=`${a}_old`;const r=N({id:a,href:u});n.nextSibling?n.parentNode.insertBefore(r,n.nextSibling):n.parentNode.appendChild(r),r.onload=()=>{setTimeout(()=>{n.parentNode.removeChild(n),n=null},60),z(e)};return}n=N({id:a,href:u}),z(e),document[(e.themeLinkTagInjectTo||S.themeLinkTagInjectTo||"").replace("-prepend","")].appendChild(n)}function Pe(){var $;const{layoutTheme:t,layout:e}=de(),a=_([{color:"#1b2a47",themeColor:"default"},{color:"#ffffff",themeColor:"light"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#fadb14",themeColor:"yellow"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"},{color:"#eb2f96",themeColor:"pink"},{color:"#722ed1",themeColor:"saucePurple"}]),{$storage:n}=k(),u=_(($=n==null?void 0:n.layout)==null?void 0:$.darkMode),r=document.documentElement;function f(s=h().Theme??"default"){var l,p;if(t.value.theme=s,be({scopeName:`layout-theme-${s}`}),n.layout={layout:e.value,theme:s,darkMode:u.value,sidebarStatus:(l=n.layout)==null?void 0:l.sidebarStatus,epThemeColor:(p=n.layout)==null?void 0:p.epThemeColor},s==="default"||s==="light")g(h().EpThemeColor);else{const C=a.value.find(M=>M.themeColor===s);g(C.color)}}function v(s,l,p){document.documentElement.style.setProperty(`--el-color-primary-${s}-${l}`,u.value?pe(p,l/10):ve(p,l/10))}const g=s=>{y().setEpThemeColor(s),document.documentElement.style.setProperty("--el-color-primary",s);for(let l=1;l<=2;l++)v("dark",l,s);for(let l=1;l<=9;l++)v("light",l,s)};function b(){y().epTheme==="light"&&u.value?f("default"):f(y().epTheme),u.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}return{body:r,dataTheme:u,layoutTheme:t,themeColors:a,dataThemeChange:b,setEpThemeColor:g,setLayoutThemeColor:f}}function Te(t){return{all:t=t||new Map,on:function(e,a){var n=t.get(e);n?n.push(a):t.set(e,[a])},off:function(e,a){var n=t.get(e);n&&(a?n.splice(n.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var n=t.get(e);n&&n.slice().map(function(u){u(a)}),(n=t.get("*"))&&n.slice().map(function(u){u(e,a)})}}}const P=Te(),$e="当前路由配置不正确，请检查配置";function ye(){var x;const t=ce(),e=te().options.routes,{wholeMenus:a}=ne(ae()),n=((x=h())==null?void 0:x.TooltipEffect)??"light",u=i(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),r=i(()=>{var o;return(o=w())==null?void 0:o.username}),f=i(()=>{var o;return(o=w())==null?void 0:o.avatar}),v=i(()=>(o,d)=>({background:o===d?y().epThemeColor:"",color:o===d?"#f4f4f5":"#000"})),g=i(()=>(o,d)=>o===d?"":"dark:hover:!text-primary"),b=i(()=>r.value?{marginRight:"10px"}:""),$=i(()=>!t.getSidebarStatus),s=i(()=>t.getDevice),{$storage:l,$config:p}=k(),C=i(()=>{var o;return(o=l==null?void 0:l.layout)==null?void 0:o.layout}),M=i(()=>p.Title);function V(o){const d=h().Title;d?document.title=`${E(o.title)} | ${d}`:document.title=E(o.title)}function F(){w().logOut()}function Q(){var o;oe.push((o=ue())==null?void 0:o.path)}function W(){P.emit("openPanel")}function U(){t.toggleSideBar()}function Y(o){o==null||o.handleResize()}function Z(o){var H;if(!o.children)return console.error($e);const d=/^http(s?):\/\//,B=(H=o.children[0])==null?void 0:H.path;return d.test(B)?o.path+"/"+B:B}function q(o){a.value.length===0||J(o)||P.emit("changLayoutRoute",o)}function J(o){return le.includes(o)}return{title:M,device:s,layout:C,logout:F,routers:e,$storage:l,backTopMenu:Q,onPanel:W,getDivStyle:u,changeTitle:V,toggleSideBar:U,menuSelect:q,handleResize:Y,resolvePath:Z,isCollapse:$,pureApp:t,username:r,userAvatar:f,avatarsStyle:b,tooltipEffect:n,getDropdownItemStyle:v,getDropdownItemClass:g}}function De(t){const{$storage:e,changeTitle:a,handleResize:n}=ye(),{locale:u,t:r}=D(),f=se();function v(){e.locale={locale:"zh"},u.value="zh",t&&n(t.value)}function g(){e.locale={locale:"en"},u.value="en",t&&n(t.value)}return re(()=>u.value,()=>{a(f.meta)}),ie(()=>{var b;u.value=((b=e.locale)==null?void 0:b.locale)??"zh"}),{t:r,route:f,locale:u,translationCh:v,translationEn:g}}const Ce={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em","aria-hidden":"true",class:"globalization",viewBox:"0 0 512 512"},Me=T("path",{fill:"currentColor",d:"m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"},null,-1),Be=[Me];function we(t,e){return A(),L("svg",Ce,Be)}const Re={render:we},je={width:1024,height:1024,body:'<path fill="currentColor" d="M406.656 706.944L195.84 496.256a32 32 0 1 0-45.248 45.248l256 256l512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/>'},Se={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},ke=T("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Ae=T("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"},null,-1),Le=[ke,Ae];function xe(t,e){return A(),L("svg",Se,Le)}const Ge={render:xe},He={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},_e=T("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),Ee=T("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"},null,-1),Ie=[_e,Ee];function ze(t,e){return A(),L("svg",He,Ie)}const Oe={render:ze};export{ye as a,De as b,Pe as c,je as d,P as e,ce as f,Re as g,Ge as h,Oe as i,de as j,be as t,y as u};

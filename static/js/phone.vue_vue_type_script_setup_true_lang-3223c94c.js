import{d as M,M as G,N as H,ag as P,$ as z,G as i,a0 as u,aC as U,h as p,aD as X,u as L,z as j,i as q,au as x,r as _,o as A,m as O,w as n,a as t,q as a,f as W,x as E,t as b,av as Y,a6 as Z,aw as T,ax as J,aE as K}from"./index-80a7ef5e.js";import{u as $}from"./hooks-8d11a447.js";const h=M({name:"Motion",props:{delay:{type:Number,default:50}},render(){const{delay:d}=this,o=G("motion");return H(P("div",{},{default:()=>[this.$slots.default()]}),[[o,{initial:{opacity:0,y:100},enter:{opacity:1,y:0,transition:{delay:d}}}]])}}),Q=/^[a-zA-Z]\w{5,17}$/,ee=/^\d{6}$/,oe=z({phone:[{validator:(d,o,e)=>{o===""?e(new Error(i(u("login.phoneReg")))):U(o)?e():e(new Error(i(u("login.phoneCorrectReg"))))},trigger:"blur"}],verifyCode:[{validator:(d,o,e)=>{o===""?e(new Error(i(u("login.verifyCodeReg")))):ee.test(o)?e():e(new Error(i(u("login.verifyCodeSixReg"))))},trigger:"blur"}]}),se=z({password:[{validator:(d,o,e)=>{o===""?e(new Error(i(u("login.passwordReg")))):Q.test(o)?e():e(new Error(i(u("login.passwordRuleReg"))))},trigger:"blur"}]}),w=p(!1),f=p(null),c=p(""),D=()=>({isDisabled:w,timer:f,text:c,start:async(e,C,l=60)=>{if(!e)return;const R=X(l,!0);await e.validateField(C,g=>{g&&(clearInterval(f.value),w.value=!0,c.value=`${l}`,f.value=setInterval(()=>{l>0?(l-=1,c.value=`${l}`):(c.value="",w.value=!1,clearInterval(f.value),l=R)},1e3))})},end:()=>{c.value="",w.value=!1,clearInterval(f.value)}}),ae={width:1024,height:1024,body:'<path fill="currentColor" d="M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0a48 48 0 0 1 96 0z"/>'},le={class:"w-full flex justify-between"},re=M({__name:"phone",setup(d){const{t:o}=L(),e=p(!1),C=j(),l=z({phone:"18856264667",verifyCode:""}),R=q(()=>x().loginType),g=p(),{isDisabled:B,text:I}=D(),N=async v=>{e.value=!0,v&&await v.validate((s,m)=>{if(s)setTimeout(()=>{x().loginByUsername({username:l.phone,code:l.verifyCode,loginType:R.value}).then(r=>{r.data.data.success&&Y().then(()=>{C.replace(Z(!0).path),T("登录成功",{type:"success"})})}).catch(r=>{e.value=!1,J.error(r)}),T(i(u("login.loginSuccess")),{type:"success"}),e.value=!1},2e3);else return e.value=!1,m})},S=async()=>{await K({dest:l.phone}).then(v=>{})};function k(){D().end(),x().SET_LOGINTYPE("password")}return(v,s)=>{const m=_("el-input"),r=_("el-form-item"),V=_("el-button"),F=_("el-form");return A(),O(F,{ref_key:"ruleFormRef",ref:g,model:l,rules:a(oe),size:"large"},{default:n(()=>[t(a(h),null,{default:n(()=>[t(r,{prop:"phone"},{default:n(()=>[t(m,{clearable:"",modelValue:l.phone,"onUpdate:modelValue":s[0]||(s[0]=y=>l.phone=y),placeholder:a(o)("login.phone"),"prefix-icon":a($)(a(ae))},null,8,["modelValue","placeholder","prefix-icon"])]),_:1})]),_:1}),t(a(h),{delay:100},{default:n(()=>[t(r,{prop:"verifyCode"},{default:n(()=>[W("div",le,[t(m,{clearable:"",modelValue:l.verifyCode,"onUpdate:modelValue":s[1]||(s[1]=y=>l.verifyCode=y),placeholder:a(o)("login.smsVerifyCode"),"prefix-icon":a($)("ri:shield-keyhole-line")},null,8,["modelValue","placeholder","prefix-icon"]),t(V,{disabled:a(B),class:"ml-2",onClick:S},{default:n(()=>[E(b(a(I).length>0?a(I)+a(o)("login.info"):a(o)("login.getVerifyCode")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}),t(a(h),{delay:150},{default:n(()=>[t(r,null,{default:n(()=>[t(V,{class:"w-full",size:"default",type:"primary",loading:e.value,onClick:s[2]||(s[2]=y=>N(g.value))},{default:n(()=>[E(b(a(o)("login.login")),1)]),_:1},8,["loading"])]),_:1})]),_:1}),t(a(h),{delay:200},{default:n(()=>[t(r,null,{default:n(()=>[t(V,{class:"w-full",size:"default",onClick:k},{default:n(()=>[E(b(a(o)("login.back")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])}}});export{h as M,re as _,se as l};
import{W as c,d as u,r as m,o as p,c as s,i as o,e as f,g as r,U as g,f as _,D as y}from"./BiZ3PDMN.js";function h(t){const e=`\`${t}\` is provided by @nuxt/scripts. Check your console to install it or run 'npx nuxi@latest module add @nuxt/scripts' to install it.`;throw c({fatal:!0,statusCode:500,statusMessage:e})}function x(t,e){h("useScript")}const b={key:0,class:"flex gap-3 justify-center items-center"},w=["data-tally-src"],T=u({__name:"TallyForm",props:["embed"],setup(t){const e=m(!0),{onLoaded:l}=x();function a(){e.value=!1,Tally.loadEmbeds()}return l(i=>{a()}),p(()=>{typeof Tally<"u"&&a()}),(i,n)=>{const d=y;return o(),s("div",null,[g(e)?(o(),s("div",b,[n[0]||(n[0]=r("span",null,"Please wait we are loading the form",-1)),_(d,{name:"svg-spinners:90-ring-with-bg"})])):f("",!0),r("iframe",{"data-tally-src":t.embed,loading:"lazy",width:"100%",height:"589",frameborder:"0",marginheight:"0",marginwidth:"0"},null,8,w)])}}});export{T as default};

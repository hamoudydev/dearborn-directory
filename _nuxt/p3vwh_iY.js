import{ah as g,ai as y,u as h,aj as _,J as w,a6 as x,ak as S,p as k,al as v,am as $,d as N,r as b,o as R,c as f,i as m,e as T,g as p,U as C,f as E,D as P}from"./BVCG5v7W.js";function V(r,e){const s={};for(const t of e)t in r&&(s[t]=r[t]);return s}function j(){return k().public["nuxt-scripts"]}const B=["onNuxtReady","client"],M=["preconnect","dns-prefetch"];function A(r,e,s){const{src:t}=r,n=v(t),i=e&&M.includes(e),a=i?`${n.protocol}${n.host}`:t,o=!!n.host;if(!e||i&&!o)return;const u={href:a,rel:e,...V(r,["crossorigin","referrerpolicy","fetchpriority","integrity"])},c={fetchpriority:"low"};return e==="preload"&&(c.as="script"),o&&(c.crossorigin="anonymous",c.referrerpolicy="no-referrer"),$({link:[g(u,c)]},{head:s,tagPriority:"high"})}function F(r,e){var u,c,d;r=typeof r=="string"?{src:r}:r,e=g(e,(u=j())==null?void 0:u.defaultScriptOptions);const s=String(y(r)),t=h(),n=e.head||_();t.$scripts=t.$scripts||w({});const i=!!((c=t.$scripts)!=null&&c[s]);!e.warmupStrategy&&B.includes(String(e.trigger))&&(e.warmupStrategy="preload"),e.trigger==="onNuxtReady"&&(e.trigger=x),i||(d=performance==null?void 0:performance.mark)==null||d.call(performance,"mark_feature_usage",{detail:{feature:e.performanceMarkFeature??`nuxt-scripts:${s}`}});const a=S(r,e);a.warmup=l=>{a._warmupEl||(a._warmupEl=A(r,l,n))},e.warmupStrategy&&a.warmup(e.warmupStrategy);const o=a.remove;return a.remove=()=>{var l;return(l=a._warmupEl)==null||l.dispose(),t.$scripts[s]=void 0,o()},t.$scripts[s]=a,a}const H={key:0,class:"flex gap-3 justify-center items-center"},L=["data-tally-src"],U=N({__name:"TallyForm",props:["embed"],setup(r){const e=b(!0),{onLoaded:s}=F({src:"https://tally.so/widgets/embed.js",async:!0});function t(){e.value=!1,Tally.loadEmbeds()}return s(n=>{t()}),R(()=>{typeof Tally<"u"&&t()}),(n,i)=>{const a=P;return m(),f("div",null,[C(e)?(m(),f("div",H,[i[0]||(i[0]=p("span",null,"Please wait we are loading the form",-1)),E(a,{name:"svg-spinners:90-ring-with-bg"})])):T("",!0),p("iframe",{"data-tally-src":r.embed,loading:"lazy",width:"100%",height:"589",frameborder:"0",marginheight:"0",marginwidth:"0"},null,8,L)])}}});export{U as default};

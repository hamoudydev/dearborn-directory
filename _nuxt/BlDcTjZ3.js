import{_ as C,a as B}from"./6Bi_2bfH.js";import{d as x,y as N,R as o,U as n,i as s,w as g,e as $,c as h,g as t,a0 as F,t as a,F as T,ab as V,n as j,A as z,B as A}from"./CNSbmDX_.js";const D={key:2,class:"w-full h-48 flex justify-center items-center rounded-t font-bold text-2xl bg-gray-200"},L={class:"p-6"},P={class:"m-0 text-lg font-semibold"},U={class:"line-clamp-4 mt-2"},E={class:"p-0 mt-2 flex gap-2 flex-wrap"},I={class:"inline-flex gap-2 items-center"},R=["src"],S={class:"font-semibold"},q={class:"text-gray-600"},J=x({__name:"Card",props:{item:{},fullPath:{type:Boolean,default:!1}},setup(y){var l,c;const i=(c=(l=N().directory)==null?void 0:l.grid)==null?void 0:c.card,r=y,b=r.fullPath?r.item.path:`/${r.item.path.split("/")[2]}`;return(e,d)=>{var p,_,u;const k=C,v=F,w=B,m=A;return((p=n(i))==null?void 0:p.type)!=="bullet"?(s(),o(m,{key:0,to:n(b),class:j(["border col-span-1 border-gray-200 hover:border-primary-400 hover:border-solid rounded relative group transition-all",((_=n(i))==null?void 0:_.type)==="shadow"?"shadow-sm":((u=n(i))==null?void 0:u.type)==="dashed"?"border-dashed":""])},{default:g(()=>[e.item.featured?(s(),o(k,{key:0,class:"ml-6"})):$("",!0),e.item.card_image?(s(),o(v,{key:1,sizes:"400px",alt:`${e.item.title} banner`,class:"w-full h-48 rounded-t object-contain",src:e.item.card_image??"/logo.png"},null,8,["alt","src"])):(s(),h("div",D,a(e.item.title),1)),t("div",L,[t("h3",P,a(e.item.title),1),t("p",U,a(e.item.description),1),t("div",E,[(s(!0),h(T,null,V(e.item.tags,f=>(s(),o(w,{key:f,tag:f},null,8,["tag"]))),128))])])]),_:1},8,["to","class"])):(s(),o(m,{key:1,to:e.item.path},{default:g(()=>[t("div",I,[t("img",{class:"h-5 w-5",src:e.item.cover??"/logo.png"},null,8,R),t("span",S,a(e.item.title),1),d[0]||(d[0]=z(" - ")),t("span",q,a(e.item.description),1)])]),_:1},8,["to"]))}}});export{J as _};

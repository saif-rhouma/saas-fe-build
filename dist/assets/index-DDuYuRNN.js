import{b as D,j as e,B as d,cF as G,v as j,C as v,T as C,cY as m,L as _,g as z,r as A,p as Q,dd as U,am as R,e as B,I as S,S as V,A as $,dk as K,h as Y,dP as J,dQ as X,cV as x,dR as Z,dS as ee,dT as w,dU as se,H as re,dp as te,dm as ae}from"./index-BEaGYMEI.js";import{u as oe,E as le}from"./error-block-BQYINy50.js";import{A as ie}from"./embla-carousel-autoplay.esm-0OO14Ffu.js";import{I as ne}from"./image-C-zCjJjA.js";import{C as de}from"./carousel-progress-bar-Cwck2AFz.js";import{u as ce}from"./use-carousel-BoAOrAu7.js";import{C as pe}from"./carousel-dot-buttons-Cl0207W4.js";import{b as xe}from"./carousel-arrow-buttons-Dud4wtbO.js";import{b as he,c as f,d as y}from"./format-number-JDGLw5r5.js";import{a as me,b as ue,c as je,T as ge}from"./table-head-custom-Drg40nu1.js";import{C as g}from"./CardHeader-gej34ZFd.js";import{T as b}from"./TableCell-CzBf4-Ov.js";import{E as be}from"./empty-content-DxNFQfFL.js";import{u as F,C as E}from"./use-chart-abvzApBu.js";import{C as fe}from"./chart-select-Budkjuvy.js";import{C as N}from"./chart-legends-Bi7K-8iP.js";import{A as k}from"./app-widget-summary-CxDR2rcb.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-DRhnNWXi.js";import"./index-DHKdtuyp.js";function ye({title:s,description:a,action:t,img:o,sx:r,...p}){const h=D();return e.jsxs(d,{sx:{...G({color:`to right, ${j(h.vars.palette.grey["900Channel"],.88)} 0%, ${h.vars.palette.grey[900]} 75%`,imgUrl:`${v.site.basePath}/assets/background/background-5.webp`}),pt:5,pb:5,pr:3,gap:5,borderRadius:2,display:"flex",height:{md:1},position:"relative",pl:{xs:3,md:5},alignItems:"center",color:"common.white",textAlign:{xs:"center",md:"left"},flexDirection:{xs:"column",md:"row"},border:`solid 1px ${h.vars.palette.grey[800]}`,...r},...p,children:[e.jsxs(d,{sx:{display:"flex",flex:"1 1 auto",flexDirection:"column",alignItems:{xs:"center",md:"flex-start"}},children:[e.jsx(C,{variant:"h4",sx:{whiteSpace:"pre-line",mb:1},children:s}),e.jsx(C,{variant:"body2",sx:{opacity:.64,maxWidth:360,...t&&{mb:3}},children:a}),t&&t]}),o&&e.jsx(d,{sx:{maxWidth:260},children:o})]})}function ve({list:s,sx:a,...t}){const o=ce({loop:!0},[ie({playOnInit:!0,delay:8e3})]);return e.jsxs(m,{sx:{bgcolor:"common.black",...a},...t,children:[e.jsx(pe,{scrollSnaps:o.dots.scrollSnaps,selectedIndex:o.dots.selectedIndex,onClickDot:o.dots.onClickDot,sx:{top:16,left:16,position:"absolute",color:"primary.light"}}),e.jsx(xe,{...o.arrows,options:o.options,sx:{top:8,right:8,position:"absolute",color:"common.white"}}),e.jsx(de,{carousel:o,children:s.map(r=>e.jsx(Ce,{item:r},r.id))})]})}function Ce({item:s,...a}){return e.jsxs(d,{sx:{width:1,position:"relative",...a},children:[e.jsxs(d,{sx:{p:3,gap:1,width:1,bottom:0,zIndex:9,display:"flex",position:"absolute",color:"common.white",flexDirection:"column"},children:[e.jsx(C,{variant:"overline",sx:{color:"primary.light"},children:"Featured App"}),e.jsx(_,{color:"inherit",underline:"none",variant:"h5",noWrap:!0,children:s.title}),e.jsx(C,{variant:"body2",noWrap:!0,children:s.description})]}),e.jsx(ne,{alt:s.title,src:s.coverUrl,slotProps:{overlay:{background:t=>`linear-gradient(to bottom, ${j(t.vars.palette.common.blackChannel,0)} 0%, ${t.vars.palette.common.black} 75%)`}},sx:{width:1,height:{xs:288,xl:320}}})]})}function Ie({title:s,subheader:a,tableData:t,headLabel:o,...r}){const p=z(),h=A.useCallback(c=>{p.push(Q.dashboard.topProducts)},[p]);return e.jsxs(m,{...r,children:[e.jsx(g,{title:s,subheader:a,sx:{mb:3}}),e.jsx(U,{sx:{minHeight:402},children:e.jsxs(me,{sx:{minWidth:680},children:[e.jsx(ue,{headLabel:o}),e.jsx(je,{children:t.map(c=>e.jsx(we,{row:c},c.id))})]})}),e.jsx(R,{sx:{borderStyle:"dashed"}}),e.jsx(d,{sx:{p:2,textAlign:"right"},children:e.jsx(B,{size:"small",color:"inherit",endIcon:e.jsx(S,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),onClick:()=>h(),children:"View all"})})]})}function we({row:s}){return e.jsxs(ge,{children:[e.jsx(b,{children:s.id}),e.jsx(b,{children:e.jsxs(V,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx($,{alt:s==null?void 0:s.name,src:v.site.serverFileHost+((s==null?void 0:s.image)||v.site.defaultImgPlaceHolder)}),e.jsx(d,{component:"span",children:s==null?void 0:s.name})]})}),e.jsx(b,{children:he(s.price)}),e.jsx(b,{children:s.total_quantity})]})}function ke({title:s,subheader:a,list:t,...o}){return e.jsxs(m,{...o,children:[e.jsx(g,{title:s,subheader:a}),e.jsx(d,{sx:{p:3,gap:3,mt:.5,display:"flex",flexDirection:"column"},children:K(t,["total_orders"],["desc"]).map((r,p)=>e.jsx(Ae,{item:r,index:p},r.id))})]})}function Ae({item:s,index:a,sx:t,...o}){return e.jsxs(d,{sx:{gap:2,display:"flex",alignItems:"center",...t},...o,children:[e.jsx($,{alt:s.name,src:s.avatar}),e.jsxs(d,{flexGrow:1,children:[e.jsx(d,{sx:{typography:"subtitle2"},children:s.name}),e.jsxs(d,{sx:{gap:.5,mt:.5,alignItems:"center",typography:"caption",display:"inline-flex",color:"text.secondary"},children:[e.jsx(S,{icon:"solar:cart-large-4-bold-duotone",width:14}),f(s.total_orders)]})]}),e.jsx(d,{sx:{width:40,height:40,display:"flex",borderRadius:"50%",alignItems:"center",color:"primary.main",justifyContent:"center",bgcolor:r=>j(r.vars.palette.primary.mainChannel,.08),...a===1&&{color:"info.main",bgcolor:r=>j(r.vars.palette.info.mainChannel,.08)},...a===2&&{color:"error.main",bgcolor:r=>j(r.vars.palette.error.mainChannel,.08)}},children:e.jsx(S,{width:24,icon:"solar:cup-star-bold"})})]})}function Se({title:s,subheader:a,chart:t,...o}){var P,T,W,L,M,H;const r=D(),[p,h]=A.useState("2024"),c=t.colors??[r.palette.primary.lighter,r.palette.primary.light,r.palette.primary.dark,r.palette.primary.darker],l=F({chart:{stacked:!0},colors:c,stroke:{width:0},xaxis:{categories:t.categories},tooltip:{y:{formatter:i=>y(i)}},plotOptions:{bar:{columnWidth:"40%"}},...t.options}),I=A.useCallback(i=>{h(i)},[]),n=t.series.find(i=>i.name===p),u=i=>i==null?void 0:i.reduce((O,q)=>O+q,0);return((P=t.series)==null?void 0:P.length)===0?e.jsxs(m,{...o,sx:{height:1},children:[e.jsx(g,{title:s,subheader:a,sx:{mb:3}}),e.jsx(d,{sx:{display:"flex",height:1,justifyContent:"center",alignItems:"center"},children:e.jsx(be,{filled:!0})})]}):e.jsxs(m,{...o,sx:{height:1},children:[e.jsx(g,{title:s,subheader:a,action:e.jsx(fe,{options:t.series.map(i=>i.name),value:p,onChange:I}),sx:{mb:3}}),e.jsx(N,{colors:l==null?void 0:l.colors,labels:(W=(T=t.series[0])==null?void 0:T.data)==null?void 0:W.map(i=>i==null?void 0:i.name),values:[f(u((L=n==null?void 0:n.data[0])==null?void 0:L.data)),f(u((M=n==null?void 0:n.data[1])==null?void 0:M.data)),f(u((H=n==null?void 0:n.data[2])==null?void 0:H.data))],sx:{px:3,gap:3}}),e.jsx(E,{type:"bar",series:n==null?void 0:n.data,options:l,height:320,sx:{py:2.5,pl:1,pr:2.5}},p)]})}function De({title:s,subheader:a,chart:t,...o}){const r=D(),p=t.colors??[r.palette.primary.lighter,r.palette.primary.light,r.palette.primary.dark,r.palette.primary.darker],h=t.series.map(l=>l.value),c=F({chart:{sparkline:{enabled:!0}},colors:p,labels:t.series.map(l=>l.label),stroke:{width:0},tooltip:{y:{formatter:l=>y(l),title:{formatter:l=>`${l}`}}},plotOptions:{pie:{donut:{size:"72%",labels:{value:{formatter:l=>y(l)},total:{formatter:l=>{const I=l.globals.seriesTotals.reduce((n,u)=>n+u,0);return y(I)}}}}}},...t.options});return e.jsxs(m,{...o,children:[e.jsx(g,{title:s,subheader:a}),e.jsx(E,{type:"donut",series:h,options:c,width:{xs:240,xl:260},height:{xs:240,xl:260},sx:{my:6,mx:"auto"}}),e.jsx(R,{sx:{borderStyle:"dashed"}}),e.jsx(N,{labels:c==null?void 0:c.labels,colors:c==null?void 0:c.colors,sx:{p:3,justifyContent:"center"}})]})}function Pe({analytics:s}){var o;const{user:a}=Y(),{t}=J("overview");return e.jsx(X,{maxWidth:"xl",children:e.jsxs(x,{container:!0,spacing:3,children:[e.jsx(x,{xs:12,md:8,children:e.jsx(ye,{title:`${t("appWelcome.title")} 
 ${a==null?void 0:a.firstName}`,description:t("appWelcome.description"),img:e.jsx(Z,{hideBackground:!0}),action:e.jsx(B,{variant:"contained",color:"primary",children:t("appWelcome.action")})})}),e.jsx(x,{xs:12,md:4,children:e.jsx(ve,{list:ee})}),e.jsx(x,{xs:12,md:4,children:e.jsx(k,{title:t("widgets.waitingApproval"),total:s.orders.analytics.Draft,chart:{categories:s.orders.draftLastSixMonth.map(r=>w(r==null?void 0:r.inMonth)),series:s.orders.draftLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(x,{xs:12,md:4,children:e.jsx(k,{title:t("widgets.processingOrder"),total:s.orders.analytics.InProcess,chart:{categories:s.orders.inProcessLastSixMonth.map(r=>w(r==null?void 0:r.inMonth)),series:s.orders.inProcessLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(x,{xs:12,md:4,children:e.jsx(k,{title:t("widgets.readyToDeliver"),total:s.orders.analytics.Ready,chart:{categories:s.orders.readyLastSixMonth.map(r=>w(r==null?void 0:r.inMonth)),series:s.orders.readyLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(x,{xs:12,md:6,lg:4,children:e.jsx(De,{title:t("widgets.orderOverview"),chart:{series:[{label:"Ready",value:s.orders.analytics.Ready||0},{label:"In Process",value:s.orders.analytics.InProcess||0},{label:"Waiting for Approval",value:s.orders.analytics.Draft||0},{label:"Delivered",value:s.orders.analytics.Delivered||0}]}})}),e.jsx(x,{xs:12,md:6,lg:8,children:e.jsx(Se,{title:t("widgets.orderStatus"),chart:(o=s==null?void 0:s.orders)==null?void 0:o.chartData})}),e.jsx(x,{xs:12,lg:8,children:e.jsx(Ie,{title:t("widgets.topOrderedProducts"),tableData:s.products,headLabel:[{id:"id",label:t("tableHeaders.id"),width:60},{id:"name",label:t("tableHeaders.productName")},{id:"price",label:t("tableHeaders.price")},{id:"quantity",label:t("tableHeaders.totalQuantity"),width:160}]})}),e.jsx(x,{xs:12,md:6,lg:4,children:e.jsx(ke,{title:t("widgets.topCustomers"),list:s.customers})})]})})}const Te={title:`Dashboard - ${v.site.name}`};function Ze(){const s=oe({queryKey:["overview-analytics"],queryFn:async()=>{const{data:a}=await te.get(ae.dashboard);return a}});return s.isPending||s.isLoading?e.jsx(se,{}):s.isError?e.jsx(le,{route:""}):e.jsxs(e.Fragment,{children:[e.jsx(re,{children:e.jsxs("title",{children:[" ",Te.title]})}),e.jsx(Pe,{analytics:s.data})]})}export{Ze as default};

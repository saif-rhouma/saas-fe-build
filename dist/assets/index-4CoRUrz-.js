import{b as w,j as e,B as d,cF as q,v as j,C as v,T as C,cY as m,L as Q,g as _,r as P,p as z,dd as V,am as B,e as $,I as S,S as U,A as F,dk as K,h as Y,dP as J,cV as x,dQ as X,dR as Z,dS as k,dT as ee,H as se,dp as re,dm as te}from"./index-DP6a2E9k.js";import{u as ae,E as oe}from"./error-block-BfI0F7Kg.js";import{A as le}from"./embla-carousel-autoplay.esm-0OO14Ffu.js";import{I as ie}from"./image-BCt9NHAx.js";import{C as ne}from"./carousel-progress-bar-DeX6L-HV.js";import{u as de}from"./use-carousel-CwdCf5JT.js";import{C as ce}from"./carousel-dot-buttons-Bg0iDL3j.js";import{b as pe}from"./carousel-arrow-buttons-CdbldbnL.js";import{b as xe,c as b,d as y}from"./format-number-u73Xbp1v.js";import{a as he,b as me,c as ue,T as je}from"./table-head-custom-C_hN9bN8.js";import{C as g}from"./CardHeader-lL1twHfB.js";import{T as f}from"./TableCell-DXk-udIV.js";import{E as ge}from"./empty-content-C-IKiilK.js";import{u as E,C as H}from"./use-chart-DBY56glq.js";import{C as fe}from"./chart-select-DaUiA_Ke.js";import{C as N}from"./chart-legends-BuTf5Wn5.js";import{A}from"./app-widget-summary-B6tfGDif.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-DQX8Zacg.js";import"./index-lAqY_A3n.js";function be({title:s,description:o,action:t,img:r,sx:a,...p}){const h=w();return e.jsxs(d,{sx:{...q({color:`to right, ${j(h.vars.palette.grey["900Channel"],.88)} 0%, ${h.vars.palette.grey[900]} 75%`,imgUrl:`${v.site.basePath}/assets/background/background-5.webp`}),pt:5,pb:5,pr:3,gap:5,borderRadius:2,display:"flex",height:{md:1},position:"relative",pl:{xs:3,md:5},alignItems:"center",color:"common.white",textAlign:{xs:"center",md:"left"},flexDirection:{xs:"column",md:"row"},border:`solid 1px ${h.vars.palette.grey[800]}`,...a},...p,children:[e.jsxs(d,{sx:{display:"flex",flex:"1 1 auto",flexDirection:"column",alignItems:{xs:"center",md:"flex-start"}},children:[e.jsx(C,{variant:"h4",sx:{whiteSpace:"pre-line",mb:1},children:s}),e.jsx(C,{variant:"body2",sx:{opacity:.64,maxWidth:360,...t&&{mb:3}},children:o}),t&&t]}),r&&e.jsx(d,{sx:{maxWidth:260},children:r})]})}function ye({list:s,sx:o,...t}){const r=de({loop:!0},[le({playOnInit:!0,delay:8e3})]);return e.jsxs(m,{sx:{bgcolor:"common.black",...o},...t,children:[e.jsx(ce,{scrollSnaps:r.dots.scrollSnaps,selectedIndex:r.dots.selectedIndex,onClickDot:r.dots.onClickDot,sx:{top:16,left:16,position:"absolute",color:"primary.light"}}),e.jsx(pe,{...r.arrows,options:r.options,sx:{top:8,right:8,position:"absolute",color:"common.white"}}),e.jsx(ne,{carousel:r,children:s.map(a=>e.jsx(ve,{item:a},a.id))})]})}function ve({item:s,...o}){return e.jsxs(d,{sx:{width:1,position:"relative",...o},children:[e.jsxs(d,{sx:{p:3,gap:1,width:1,bottom:0,zIndex:9,display:"flex",position:"absolute",color:"common.white",flexDirection:"column"},children:[e.jsx(C,{variant:"overline",sx:{color:"primary.light"},children:"Featured App"}),e.jsx(Q,{color:"inherit",underline:"none",variant:"h5",noWrap:!0,children:s.title}),e.jsx(C,{variant:"body2",noWrap:!0,children:s.description})]}),e.jsx(ie,{alt:s.title,src:s.coverUrl,slotProps:{overlay:{background:t=>`linear-gradient(to bottom, ${j(t.vars.palette.common.blackChannel,0)} 0%, ${t.vars.palette.common.black} 75%)`}},sx:{width:1,height:{xs:288,xl:320}}})]})}function Ce({title:s,subheader:o,tableData:t,headLabel:r,...a}){const p=_(),h=P.useCallback(c=>{p.push(z.dashboard.topProducts)},[p]);return e.jsxs(m,{...a,children:[e.jsx(g,{title:s,subheader:o,sx:{mb:3}}),e.jsx(V,{sx:{minHeight:402},children:e.jsxs(he,{sx:{minWidth:680},children:[e.jsx(me,{headLabel:r}),e.jsx(ue,{children:t.map(c=>e.jsx(Ie,{row:c},c.id))})]})}),e.jsx(B,{sx:{borderStyle:"dashed"}}),e.jsx(d,{sx:{p:2,textAlign:"right"},children:e.jsx($,{size:"small",color:"inherit",endIcon:e.jsx(S,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),onClick:()=>h(),children:"View all"})})]})}function Ie({row:s}){return e.jsxs(je,{children:[e.jsx(f,{children:s.id}),e.jsx(f,{children:e.jsxs(U,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(F,{alt:s==null?void 0:s.name,src:v.site.serverFileHost+((s==null?void 0:s.image)||v.site.defaultImgPlaceHolder)}),e.jsx(d,{component:"span",children:s==null?void 0:s.name})]})}),e.jsx(f,{children:xe(s.price)}),e.jsx(f,{children:s.total_quantity})]})}function ke({title:s,subheader:o,list:t,...r}){return e.jsxs(m,{...r,children:[e.jsx(g,{title:s,subheader:o}),e.jsx(d,{sx:{p:3,gap:3,mt:.5,display:"flex",flexDirection:"column"},children:K(t,["total_orders"],["desc"]).map((a,p)=>e.jsx(Ae,{item:a,index:p},a.id))})]})}function Ae({item:s,index:o,sx:t,...r}){return e.jsxs(d,{sx:{gap:2,display:"flex",alignItems:"center",...t},...r,children:[e.jsx(F,{alt:s.name,src:s.avatar}),e.jsxs(d,{flexGrow:1,children:[e.jsx(d,{sx:{typography:"subtitle2"},children:s.name}),e.jsxs(d,{sx:{gap:.5,mt:.5,alignItems:"center",typography:"caption",display:"inline-flex",color:"text.secondary"},children:[e.jsx(S,{icon:"solar:cart-large-4-bold-duotone",width:14}),b(s.total_orders)]})]}),e.jsx(d,{sx:{width:40,height:40,display:"flex",borderRadius:"50%",alignItems:"center",color:"primary.main",justifyContent:"center",bgcolor:a=>j(a.vars.palette.primary.mainChannel,.08),...o===1&&{color:"info.main",bgcolor:a=>j(a.vars.palette.info.mainChannel,.08)},...o===2&&{color:"error.main",bgcolor:a=>j(a.vars.palette.error.mainChannel,.08)}},children:e.jsx(S,{width:24,icon:"solar:cup-star-bold"})})]})}function Pe({title:s,subheader:o,chart:t,...r}){var D,T,L,M,R,W;const a=w(),[p,h]=P.useState("2024"),c=t.colors??[a.palette.primary.lighter,a.palette.primary.light,a.palette.primary.dark,a.palette.primary.darker],l=E({chart:{stacked:!0},colors:c,stroke:{width:0},xaxis:{categories:t.categories},tooltip:{y:{formatter:i=>y(i)}},plotOptions:{bar:{columnWidth:"40%"}},...t.options}),I=P.useCallback(i=>{h(i)},[]),n=t.series.find(i=>i.name===p),u=i=>i==null?void 0:i.reduce((O,G)=>O+G,0);return((D=t.series)==null?void 0:D.length)===0?e.jsxs(m,{...r,sx:{height:1},children:[e.jsx(g,{title:s,subheader:o,sx:{mb:3}}),e.jsx(d,{sx:{display:"flex",height:1,justifyContent:"center",alignItems:"center"},children:e.jsx(ge,{filled:!0})})]}):e.jsxs(m,{...r,sx:{height:1},children:[e.jsx(g,{title:s,subheader:o,action:e.jsx(fe,{options:t.series.map(i=>i.name),value:p,onChange:I}),sx:{mb:3}}),e.jsx(N,{colors:l==null?void 0:l.colors,labels:(L=(T=t.series[0])==null?void 0:T.data)==null?void 0:L.map(i=>i==null?void 0:i.name),values:[b(u((M=n==null?void 0:n.data[0])==null?void 0:M.data)),b(u((R=n==null?void 0:n.data[1])==null?void 0:R.data)),b(u((W=n==null?void 0:n.data[2])==null?void 0:W.data))],sx:{px:3,gap:3}}),e.jsx(H,{type:"bar",series:n==null?void 0:n.data,options:l,height:320,sx:{py:2.5,pl:1,pr:2.5}},p)]})}function Se({title:s,subheader:o,chart:t,...r}){const a=w(),p=t.colors??[a.palette.primary.lighter,a.palette.primary.light,a.palette.primary.dark,a.palette.primary.darker],h=t.series.map(l=>l.value),c=E({chart:{sparkline:{enabled:!0}},colors:p,labels:t.series.map(l=>l.label),stroke:{width:0},tooltip:{y:{formatter:l=>y(l),title:{formatter:l=>`${l}`}}},plotOptions:{pie:{donut:{size:"72%",labels:{value:{formatter:l=>y(l)},total:{formatter:l=>{const I=l.globals.seriesTotals.reduce((n,u)=>n+u,0);return y(I)}}}}}},...t.options});return e.jsxs(m,{...r,children:[e.jsx(g,{title:s,subheader:o}),e.jsx(H,{type:"donut",series:h,options:c,width:{xs:240,xl:260},height:{xs:240,xl:260},sx:{my:6,mx:"auto"}}),e.jsx(B,{sx:{borderStyle:"dashed"}}),e.jsx(N,{labels:c==null?void 0:c.labels,colors:c==null?void 0:c.colors,sx:{p:3,justifyContent:"center"}})]})}function we({analytics:s}){var t;const{user:o}=Y();return e.jsx(J,{maxWidth:"xl",children:e.jsxs(x,{container:!0,spacing:3,children:[e.jsx(x,{xs:12,md:8,children:e.jsx(be,{title:`Welcome back 👋 
 ${o==null?void 0:o.firstName}`,description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",img:e.jsx(X,{hideBackground:!0}),action:e.jsx($,{variant:"contained",color:"primary",children:"Go now"})})}),e.jsx(x,{xs:12,md:4,children:e.jsx(ye,{list:Z})}),e.jsx(x,{xs:12,md:4,children:e.jsx(A,{title:"Waiting for Approval",total:s.orders.analytics.Draft,chart:{categories:s.orders.draftLastSixMonth.map(r=>k(r==null?void 0:r.inMonth)),series:s.orders.draftLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(x,{xs:12,md:4,children:e.jsx(A,{title:"Processing Order",total:s.orders.analytics.InProcess,chart:{categories:s.orders.inProcessLastSixMonth.map(r=>k(r==null?void 0:r.inMonth)),series:s.orders.inProcessLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(x,{xs:12,md:4,children:e.jsx(A,{title:"Ready to Deliver",total:s.orders.analytics.Ready,chart:{categories:s.orders.readyLastSixMonth.map(r=>k(r==null?void 0:r.inMonth)),series:s.orders.readyLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(x,{xs:12,md:6,lg:4,children:e.jsx(Se,{title:"Order Overview",chart:{series:[{label:"Ready",value:s.orders.analytics.Ready||0},{label:"In Process",value:s.orders.analytics.InProcess||0},{label:"Waiting for Approval",value:s.orders.analytics.Draft||0},{label:"Delivered",value:s.orders.analytics.Delivered||0}]}})}),e.jsx(x,{xs:12,md:6,lg:8,children:e.jsx(Pe,{title:"Order Status",chart:(t=s==null?void 0:s.orders)==null?void 0:t.chartData})}),e.jsx(x,{xs:12,lg:8,children:e.jsx(Ce,{title:"Top 5 Ordered Products By Quantity",tableData:s.products,headLabel:[{id:"id",label:"#",width:60},{id:"name",label:"Product Name"},{id:"price",label:"Price"},{id:"quantity",label:"Total Quantity",width:160}]})}),e.jsx(x,{xs:12,md:6,lg:4,children:e.jsx(ke,{title:"Top 5 Customers",list:s.customers})})]})})}const De={title:`Dashboard - ${v.site.name}`};function Xe(){const s=ae({queryKey:["overview-analytics"],queryFn:async()=>{const{data:o}=await re.get(te.dashboard);return o}});return s.isPending||s.isLoading?e.jsx(ee,{}):s.isError?e.jsx(oe,{route:""}):e.jsxs(e.Fragment,{children:[e.jsx(se,{children:e.jsxs("title",{children:[" ",De.title]})}),e.jsx(we,{analytics:s.data})]})}export{Xe as default};

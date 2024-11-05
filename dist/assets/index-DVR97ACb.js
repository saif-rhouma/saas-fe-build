import{b as w,j as e,B as d,cF as q,v as j,C as v,T as C,cY as m,L as Q,dd as _,am as R,e as $,I as S,S as z,A as F,dk as V,r as B,h as U,dP as K,cV as x,dQ as Y,dR as J,dS as A,dT as X,H as Z,dp as ee,dm as se}from"./index-DJBSy2EF.js";import{u as re,E as te}from"./error-block-CvrkSCmw.js";import{A as ae}from"./embla-carousel-autoplay.esm-0OO14Ffu.js";import{I as oe}from"./image-CcUpnek_.js";import{C as le}from"./carousel-progress-bar-CUDdNUGo.js";import{u as ne}from"./use-carousel-obpDnxEr.js";import{C as ie}from"./carousel-dot-buttons-CwS_CDCT.js";import{b as de}from"./carousel-arrow-buttons-0oX6V-C3.js";import{b as ce,c as b,d as y}from"./format-number-BkN-sNtV.js";import{a as xe,b as pe,c as he,T as me}from"./table-head-custom-DS0GuAHi.js";import{C as g}from"./CardHeader-CcqBvLFR.js";import{T as f}from"./TableCell-DF0lLe6g.js";import{E as ue}from"./empty-content-Bo7F874U.js";import{u as E,C as H}from"./use-chart-Cb038OIt.js";import{C as je}from"./chart-select-MW9Mnkhp.js";import{C as N}from"./chart-legends-Db2Q8naQ.js";import{A as k}from"./app-widget-summary-D6l7hVtV.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-CJWY43L-.js";import"./index-cfJrRA7m.js";function ge({title:s,description:o,action:t,img:r,sx:a,...c}){const h=w();return e.jsxs(d,{sx:{...q({color:`to right, ${j(h.vars.palette.grey["900Channel"],.88)} 0%, ${h.vars.palette.grey[900]} 75%`,imgUrl:`${v.site.basePath}/assets/background/background-5.webp`}),pt:5,pb:5,pr:3,gap:5,borderRadius:2,display:"flex",height:{md:1},position:"relative",pl:{xs:3,md:5},alignItems:"center",color:"common.white",textAlign:{xs:"center",md:"left"},flexDirection:{xs:"column",md:"row"},border:`solid 1px ${h.vars.palette.grey[800]}`,...a},...c,children:[e.jsxs(d,{sx:{display:"flex",flex:"1 1 auto",flexDirection:"column",alignItems:{xs:"center",md:"flex-start"}},children:[e.jsx(C,{variant:"h4",sx:{whiteSpace:"pre-line",mb:1},children:s}),e.jsx(C,{variant:"body2",sx:{opacity:.64,maxWidth:360,...t&&{mb:3}},children:o}),t&&t]}),r&&e.jsx(d,{sx:{maxWidth:260},children:r})]})}function fe({list:s,sx:o,...t}){const r=ne({loop:!0},[ae({playOnInit:!0,delay:8e3})]);return e.jsxs(m,{sx:{bgcolor:"common.black",...o},...t,children:[e.jsx(ie,{scrollSnaps:r.dots.scrollSnaps,selectedIndex:r.dots.selectedIndex,onClickDot:r.dots.onClickDot,sx:{top:16,left:16,position:"absolute",color:"primary.light"}}),e.jsx(de,{...r.arrows,options:r.options,sx:{top:8,right:8,position:"absolute",color:"common.white"}}),e.jsx(le,{carousel:r,children:s.map(a=>e.jsx(be,{item:a},a.id))})]})}function be({item:s,...o}){return e.jsxs(d,{sx:{width:1,position:"relative",...o},children:[e.jsxs(d,{sx:{p:3,gap:1,width:1,bottom:0,zIndex:9,display:"flex",position:"absolute",color:"common.white",flexDirection:"column"},children:[e.jsx(C,{variant:"overline",sx:{color:"primary.light"},children:"Featured App"}),e.jsx(Q,{color:"inherit",underline:"none",variant:"h5",noWrap:!0,children:s.title}),e.jsx(C,{variant:"body2",noWrap:!0,children:s.description})]}),e.jsx(oe,{alt:s.title,src:s.coverUrl,slotProps:{overlay:{background:t=>`linear-gradient(to bottom, ${j(t.vars.palette.common.blackChannel,0)} 0%, ${t.vars.palette.common.black} 75%)`}},sx:{width:1,height:{xs:288,xl:320}}})]})}function ye({title:s,subheader:o,tableData:t,headLabel:r,...a}){return e.jsxs(m,{...a,children:[e.jsx(g,{title:s,subheader:o,sx:{mb:3}}),e.jsx(_,{sx:{minHeight:402},children:e.jsxs(xe,{sx:{minWidth:680},children:[e.jsx(pe,{headLabel:r}),e.jsx(he,{children:t.map(c=>e.jsx(ve,{row:c},c.id))})]})}),e.jsx(R,{sx:{borderStyle:"dashed"}}),e.jsx(d,{sx:{p:2,textAlign:"right"},children:e.jsx($,{size:"small",color:"inherit",endIcon:e.jsx(S,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View all"})})]})}function ve({row:s}){return e.jsxs(me,{children:[e.jsx(f,{children:s.id}),e.jsx(f,{children:e.jsxs(z,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(F,{alt:s==null?void 0:s.name,src:v.site.serverFileHost+((s==null?void 0:s.image)||v.site.defaultImgPlaceHolder)}),e.jsx(d,{component:"span",children:s==null?void 0:s.name})]})}),e.jsx(f,{children:ce(s.price)}),e.jsx(f,{children:s.total_quantity})]})}function Ce({title:s,subheader:o,list:t,...r}){return e.jsxs(m,{...r,children:[e.jsx(g,{title:s,subheader:o}),e.jsx(d,{sx:{p:3,gap:3,mt:.5,display:"flex",flexDirection:"column"},children:V(t,["total_orders"],["desc"]).map((a,c)=>e.jsx(Ie,{item:a,index:c},a.id))})]})}function Ie({item:s,index:o,sx:t,...r}){return e.jsxs(d,{sx:{gap:2,display:"flex",alignItems:"center",...t},...r,children:[e.jsx(F,{alt:s.name,src:s.avatar}),e.jsxs(d,{flexGrow:1,children:[e.jsx(d,{sx:{typography:"subtitle2"},children:s.name}),e.jsxs(d,{sx:{gap:.5,mt:.5,alignItems:"center",typography:"caption",display:"inline-flex",color:"text.secondary"},children:[e.jsx(S,{icon:"solar:cart-large-4-bold-duotone",width:14}),b(s.total_orders)]})]}),e.jsx(d,{sx:{width:40,height:40,display:"flex",borderRadius:"50%",alignItems:"center",color:"primary.main",justifyContent:"center",bgcolor:a=>j(a.vars.palette.primary.mainChannel,.08),...o===1&&{color:"info.main",bgcolor:a=>j(a.vars.palette.info.mainChannel,.08)},...o===2&&{color:"error.main",bgcolor:a=>j(a.vars.palette.error.mainChannel,.08)}},children:e.jsx(S,{width:24,icon:"solar:cup-star-bold"})})]})}function Ae({title:s,subheader:o,chart:t,...r}){var D,P,T,L,M,W;const a=w(),[c,h]=B.useState("2024"),p=t.colors??[a.palette.primary.dark,a.palette.warning.main,a.palette.info.main],l=E({chart:{stacked:!0},colors:p,stroke:{width:0},xaxis:{categories:t.categories},tooltip:{y:{formatter:n=>y(n)}},plotOptions:{bar:{columnWidth:"40%"}},...t.options}),I=B.useCallback(n=>{h(n)},[]),i=t.series.find(n=>n.name===c),u=n=>n==null?void 0:n.reduce((O,G)=>O+G,0);return((D=t.series)==null?void 0:D.length)===0?e.jsxs(m,{...r,sx:{height:1},children:[e.jsx(g,{title:s,subheader:o,sx:{mb:3}}),e.jsx(d,{sx:{display:"flex",height:1,justifyContent:"center",alignItems:"center"},children:e.jsx(ue,{filled:!0})})]}):e.jsxs(m,{...r,sx:{height:1},children:[e.jsx(g,{title:s,subheader:o,action:e.jsx(je,{options:t.series.map(n=>n.name),value:c,onChange:I}),sx:{mb:3}}),e.jsx(N,{colors:l==null?void 0:l.colors,labels:(T=(P=t.series[0])==null?void 0:P.data)==null?void 0:T.map(n=>n==null?void 0:n.name),values:[b(u((L=i==null?void 0:i.data[0])==null?void 0:L.data)),b(u((M=i==null?void 0:i.data[1])==null?void 0:M.data)),b(u((W=i==null?void 0:i.data[2])==null?void 0:W.data))],sx:{px:3,gap:3}}),e.jsx(H,{type:"bar",series:i==null?void 0:i.data,options:l,height:320,sx:{py:2.5,pl:1,pr:2.5}},c)]})}function ke({title:s,subheader:o,chart:t,...r}){const a=w(),c=t.colors??[a.palette.primary.lighter,a.palette.primary.light,a.palette.primary.dark,a.palette.primary.darker],h=t.series.map(l=>l.value),p=E({chart:{sparkline:{enabled:!0}},colors:c,labels:t.series.map(l=>l.label),stroke:{width:0},tooltip:{y:{formatter:l=>y(l),title:{formatter:l=>`${l}`}}},plotOptions:{pie:{donut:{size:"72%",labels:{value:{formatter:l=>y(l)},total:{formatter:l=>{const I=l.globals.seriesTotals.reduce((i,u)=>i+u,0);return y(I)}}}}}},...t.options});return e.jsxs(m,{...r,children:[e.jsx(g,{title:s,subheader:o}),e.jsx(H,{type:"donut",series:h,options:p,width:{xs:240,xl:260},height:{xs:240,xl:260},sx:{my:6,mx:"auto"}}),e.jsx(R,{sx:{borderStyle:"dashed"}}),e.jsx(N,{labels:p==null?void 0:p.labels,colors:p==null?void 0:p.colors,sx:{p:3,justifyContent:"center"}})]})}function Se({analytics:s}){var t;const{user:o}=U();return e.jsx(K,{maxWidth:"xl",children:e.jsxs(x,{container:!0,spacing:3,children:[e.jsx(x,{xs:12,md:8,children:e.jsx(ge,{title:`Welcome back 👋 
 ${o==null?void 0:o.firstName}`,description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",img:e.jsx(Y,{hideBackground:!0}),action:e.jsx($,{variant:"contained",color:"primary",children:"Go now"})})}),e.jsx(x,{xs:12,md:4,children:e.jsx(fe,{list:J})}),e.jsx(x,{xs:12,md:4,children:e.jsx(k,{title:"Waiting for Approval",total:s.orders.analytics.Draft,chart:{categories:s.orders.draftLastSixMonth.map(r=>A(r==null?void 0:r.inMonth)),series:s.orders.draftLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(x,{xs:12,md:4,children:e.jsx(k,{title:"Processing Order",total:s.orders.analytics.InProcess,chart:{categories:s.orders.inProcessLastSixMonth.map(r=>A(r==null?void 0:r.inMonth)),series:s.orders.inProcessLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(x,{xs:12,md:4,children:e.jsx(k,{title:"Ready to Deliver",total:s.orders.analytics.Ready,chart:{categories:s.orders.readyLastSixMonth.map(r=>A(r==null?void 0:r.inMonth)),series:s.orders.readyLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(x,{xs:12,md:6,lg:4,children:e.jsx(ke,{title:"Order Overview",chart:{series:[{label:"Ready",value:s.orders.analytics.Ready||0},{label:"In Process",value:s.orders.analytics.InProcess||0},{label:"Waiting for Approval",value:s.orders.analytics.Draft||0},{label:"Delivered",value:s.orders.analytics.Delivered||0}]}})}),e.jsx(x,{xs:12,md:6,lg:8,children:e.jsx(Ae,{title:"Order Status",chart:(t=s==null?void 0:s.orders)==null?void 0:t.chartData})}),e.jsx(x,{xs:12,lg:8,children:e.jsx(ye,{title:"Top 5 Ordered Products By Quantity",tableData:s.products,headLabel:[{id:"id",label:"#",width:60},{id:"name",label:"Product Name"},{id:"price",label:"Price"},{id:"quantity",label:"Total Quantity",width:160}]})}),e.jsx(x,{xs:12,md:6,lg:4,children:e.jsx(Ce,{title:"Top 5 Customers",list:s.customers})})]})})}const we={title:`Dashboard - ${v.site.name}`};function Ye(){const s=re({queryKey:["overview-analytics"],queryFn:async()=>{const{data:o}=await ee.get(se.dashboard);return o}});return s.isPending||s.isLoading?e.jsx(X,{}):s.isError?e.jsx(te,{route:""}):e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:e.jsxs("title",{children:[" ",we.title]})}),e.jsx(Se,{analytics:s.data})]})}export{Ye as default};

import{b as k,j as e,B as i,av as B,v as h,C as f,T as y,aD as u,L as F,dy as R,D as w,e as P,I as S,S as $,A as T,dF as E,r as D,n as H,e8 as N,G as c,e9 as O,ea as G,eb as A,ec as q,H as J,dJ as _,dH as z}from"./index-MU8Aef1d.js";import{u as Q,E as U}from"./error-block-CRZzLFBN.js";import{A as V}from"./embla-carousel-autoplay.esm-0OO14Ffu.js";import{I as K}from"./image-BL6GZRKO.js";import{C as X}from"./carousel-progress-bar-BQohD8SB.js";import{u as Y}from"./use-carousel-CHPs3to_.js";import{C as Z}from"./carousel-dot-buttons-Yjvs8VIU.js";import{C as ee}from"./carousel-arrow-buttons-h8WjztGU.js";import{b as se,c as g,d as b}from"./format-number-B_68Y8_p.js";import{a as re,b as ae,c as te,T as oe}from"./table-head-custom-D2PRNs_u.js";import{C as v}from"./CardHeader-xGefmfFV.js";import{T as j}from"./TableCell-D2iXYdpM.js";import{u as M,C as L}from"./use-chart-C9DoQqx4.js";import{C as ne}from"./chart-select-O98seMl3.js";import{C as W}from"./chart-legends-Db7dPZuc.js";import{A as I}from"./app-widget-summary-IVVCiv9h.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-Brycgjrz.js";import"./index-KXkaILWh.js";function ie({title:s,description:t,action:r,img:o,sx:a,...l}){const x=k();return e.jsxs(i,{sx:{...B({color:`to right, ${h(x.vars.palette.grey["900Channel"],.88)} 0%, ${x.vars.palette.grey[900]} 75%`,imgUrl:`${f.site.basePath}/assets/background/background-5.webp`}),pt:5,pb:5,pr:3,gap:5,borderRadius:2,display:"flex",height:{md:1},position:"relative",pl:{xs:3,md:5},alignItems:"center",color:"common.white",textAlign:{xs:"center",md:"left"},flexDirection:{xs:"column",md:"row"},border:`solid 1px ${x.vars.palette.grey[800]}`,...a},...l,children:[e.jsxs(i,{sx:{display:"flex",flex:"1 1 auto",flexDirection:"column",alignItems:{xs:"center",md:"flex-start"}},children:[e.jsx(y,{variant:"h4",sx:{whiteSpace:"pre-line",mb:1},children:s}),e.jsx(y,{variant:"body2",sx:{opacity:.64,maxWidth:360,...r&&{mb:3}},children:t}),r&&r]}),o&&e.jsx(i,{sx:{maxWidth:260},children:o})]})}function le({list:s,sx:t,...r}){const o=Y({loop:!0},[V({playOnInit:!0,delay:8e3})]);return e.jsxs(u,{sx:{bgcolor:"common.black",...t},...r,children:[e.jsx(Z,{scrollSnaps:o.dots.scrollSnaps,selectedIndex:o.dots.selectedIndex,onClickDot:o.dots.onClickDot,sx:{top:16,left:16,position:"absolute",color:"primary.light"}}),e.jsx(ee,{...o.arrows,options:o.options,sx:{top:8,right:8,position:"absolute",color:"common.white"}}),e.jsx(X,{carousel:o,children:s.map(a=>e.jsx(de,{item:a},a.id))})]})}function de({item:s,...t}){return e.jsxs(i,{sx:{width:1,position:"relative",...t},children:[e.jsxs(i,{sx:{p:3,gap:1,width:1,bottom:0,zIndex:9,display:"flex",position:"absolute",color:"common.white",flexDirection:"column"},children:[e.jsx(y,{variant:"overline",sx:{color:"primary.light"},children:"Featured App"}),e.jsx(F,{color:"inherit",underline:"none",variant:"h5",noWrap:!0,children:s.title}),e.jsx(y,{variant:"body2",noWrap:!0,children:s.description})]}),e.jsx(K,{alt:s.title,src:s.coverUrl,slotProps:{overlay:{background:r=>`linear-gradient(to bottom, ${h(r.vars.palette.common.blackChannel,0)} 0%, ${r.vars.palette.common.black} 75%)`}},sx:{width:1,height:{xs:288,xl:320}}})]})}function ce({title:s,subheader:t,tableData:r,headLabel:o,...a}){return e.jsxs(u,{...a,children:[e.jsx(v,{title:s,subheader:t,sx:{mb:3}}),e.jsx(R,{sx:{minHeight:402},children:e.jsxs(re,{sx:{minWidth:680},children:[e.jsx(ae,{headLabel:o}),e.jsx(te,{children:r.map(l=>e.jsx(pe,{row:l},l.id))})]})}),e.jsx(w,{sx:{borderStyle:"dashed"}}),e.jsx(i,{sx:{p:2,textAlign:"right"},children:e.jsx(P,{size:"small",color:"inherit",endIcon:e.jsx(S,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View all"})})]})}function pe({row:s}){return e.jsxs(oe,{children:[e.jsx(j,{children:s.id}),e.jsx(j,{children:e.jsxs($,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(T,{alt:s==null?void 0:s.name,src:f.site.serverFileHost+((s==null?void 0:s.image)||f.site.defaultImgPlaceHolder)}),e.jsx(i,{component:"span",children:s==null?void 0:s.name})]})}),e.jsx(j,{children:se(s.price)}),e.jsx(j,{children:s.total_quantity})]})}function xe({title:s,subheader:t,list:r,...o}){return e.jsxs(u,{...o,children:[e.jsx(v,{title:s,subheader:t}),e.jsx(i,{sx:{p:3,gap:3,display:"flex",flexDirection:"column"},children:E(r,["total_orders"],["desc"]).map((a,l)=>e.jsx(me,{item:a,index:l},a.id))})]})}function me({item:s,index:t,sx:r,...o}){return e.jsxs(i,{sx:{gap:2,display:"flex",alignItems:"center",...r},...o,children:[e.jsx(T,{alt:s.name,src:s.avatar}),e.jsxs(i,{flexGrow:1,children:[e.jsx(i,{sx:{typography:"subtitle2"},children:s.name}),e.jsxs(i,{sx:{gap:.5,mt:.5,alignItems:"center",typography:"caption",display:"inline-flex",color:"text.secondary"},children:[e.jsx(S,{icon:"solar:cart-large-4-bold-duotone",width:14}),g(s.total_orders)]})]}),e.jsx(i,{sx:{width:40,height:40,display:"flex",borderRadius:"50%",alignItems:"center",color:"primary.main",justifyContent:"center",bgcolor:a=>h(a.vars.palette.primary.mainChannel,.08),...t===1&&{color:"info.main",bgcolor:a=>h(a.vars.palette.info.mainChannel,.08)},...t===2&&{color:"error.main",bgcolor:a=>h(a.vars.palette.error.mainChannel,.08)}},children:e.jsx(S,{width:24,icon:"solar:cup-star-bold"})})]})}function he({title:s,subheader:t,chart:r,...o}){const a=k(),[l,x]=D.useState("2023"),p=r.colors??[a.palette.primary.dark,a.palette.warning.main,a.palette.info.main],n=M({chart:{stacked:!0},colors:p,stroke:{width:0},xaxis:{categories:r.categories},tooltip:{y:{formatter:d=>b(d)}},plotOptions:{bar:{columnWidth:"40%"}},...r.options}),C=D.useCallback(d=>{x(d)},[]),m=r.series.find(d=>d.name===l);return e.jsxs(u,{...o,children:[e.jsx(v,{title:s,subheader:t,action:e.jsx(ne,{options:r.series.map(d=>d.name),value:l,onChange:C}),sx:{mb:3}}),e.jsx(W,{colors:n==null?void 0:n.colors,labels:r.series[0].data.map(d=>d.name),values:[g(1234),g(6789),g(1012)],sx:{px:3,gap:3}}),e.jsx(L,{type:"bar",series:m==null?void 0:m.data,options:n,height:320,sx:{py:2.5,pl:1,pr:2.5}},l)]})}function ue({title:s,subheader:t,chart:r,...o}){const a=k(),l=r.colors??[a.palette.primary.lighter,a.palette.primary.light,a.palette.primary.dark,a.palette.primary.darker],x=r.series.map(n=>n.value),p=M({chart:{sparkline:{enabled:!0}},colors:l,labels:r.series.map(n=>n.label),stroke:{width:0},tooltip:{y:{formatter:n=>b(n),title:{formatter:n=>`${n}`}}},plotOptions:{pie:{donut:{size:"72%",labels:{value:{formatter:n=>b(n)},total:{formatter:n=>{const C=n.globals.seriesTotals.reduce((m,d)=>m+d,0);return b(C)}}}}}},...r.options});return e.jsxs(u,{...o,children:[e.jsx(v,{title:s,subheader:t}),e.jsx(L,{type:"donut",series:x,options:p,width:{xs:240,xl:260},height:{xs:240,xl:260},sx:{my:6,mx:"auto"}}),e.jsx(w,{sx:{borderStyle:"dashed"}}),e.jsx(W,{labels:p==null?void 0:p.labels,colors:p==null?void 0:p.colors,sx:{p:3,justifyContent:"center"}})]})}function je({analytics:s}){const{user:t}=H();return e.jsx(N,{maxWidth:"xl",children:e.jsxs(c,{container:!0,spacing:3,children:[e.jsx(c,{xs:12,md:8,children:e.jsx(ie,{title:`Welcome back 👋 
 ${t==null?void 0:t.firstName}`,description:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.",img:e.jsx(O,{hideBackground:!0}),action:e.jsx(P,{variant:"contained",color:"primary",children:"Go now"})})}),e.jsx(c,{xs:12,md:4,children:e.jsx(le,{list:G})}),e.jsx(c,{xs:12,md:4,children:e.jsx(I,{title:"Waiting for Approval",total:s.orders.analytics.Draft,chart:{categories:s.orders.draftLastSixMonth.map(r=>A(r==null?void 0:r.inMonth)),series:s.orders.draftLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(c,{xs:12,md:4,children:e.jsx(I,{title:"Processing Order",total:s.orders.analytics.InProcess,chart:{categories:s.orders.inProcessLastSixMonth.map(r=>A(r==null?void 0:r.inMonth)),series:s.orders.inProcessLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(c,{xs:12,md:4,children:e.jsx(I,{title:"Ready to Deliver",total:s.orders.analytics.Ready,chart:{categories:s.orders.readyLastSixMonth.map(r=>A(r==null?void 0:r.inMonth)),series:s.orders.readyLastSixMonth.map(r=>r==null?void 0:r.ClaimsPerMonth)}})}),e.jsx(c,{xs:12,md:6,lg:4,children:e.jsx(ue,{title:"Order Overview",chart:{series:[{label:"Ready",value:s.orders.analytics.Ready},{label:"In Process",value:s.orders.analytics.InProcess},{label:"Waiting for Approval",value:s.orders.analytics.Draft},{label:"Delivered",value:s.orders.analytics.Delivered}]}})}),e.jsx(c,{xs:12,md:6,lg:8,children:e.jsx(he,{title:"Area installed",subheader:"(+43%) than last year",chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[{name:"2022",data:[{name:"Asia",data:[12,10,18,22,20,12,8,21,20,14,15,16]},{name:"Europe",data:[12,10,18,22,20,12,8,21,20,14,15,16]},{name:"Americas",data:[12,10,18,22,20,12,8,21,20,14,15,16]}]},{name:"2023",data:[{name:"Asia",data:[6,18,14,9,20,6,22,19,8,22,8,17]},{name:"Europe",data:[6,18,14,9,20,6,22,19,8,22,8,17]},{name:"Americas",data:[6,18,14,9,20,6,22,19,8,22,8,17]}]},{name:"2024",data:[{name:"Asia",data:[6,20,15,18,7,24,6,10,12,17,18,10]},{name:"Europe",data:[6,20,15,18,7,24,6,10,12,17,18,10]},{name:"Americas",data:[6,20,15,18,7,24,6,10,12,17,18,10]}]}]}})}),e.jsx(c,{xs:12,lg:8,children:e.jsx(ce,{title:"Top 5 Ordered Products By Quantity",tableData:s.products,headLabel:[{id:"id",label:"#",width:60},{id:"name",label:"Product Name"},{id:"price",label:"Price"},{id:"quantity",label:"Total Quantity",width:160}]})}),e.jsx(c,{xs:12,md:6,lg:4,children:e.jsx(xe,{title:"Top 5 Customers",list:s.customers})})]})})}const ge={title:`Dashboard - ${f.site.name}`};function He(){const s=Q({queryKey:["overview-analytics"],queryFn:async()=>{const{data:t}=await _.get(z.dashboard);return t}});return s.isPending||s.isLoading?e.jsx(q,{}):s.isError?e.jsx(U,{route:""}):e.jsxs(e.Fragment,{children:[e.jsx(J,{children:e.jsxs("title",{children:[" ",ge.title]})}),e.jsx(je,{analytics:s.data})]})}export{He as default};
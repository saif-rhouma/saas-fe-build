import{j as n,B as o,b as ee,v as ae}from"./index-BRWSQhLj.js";import{_ as re}from"./chart-legends-CvC6VTHU.js";function te({sx:e,type:a,series:r,height:l,options:h,width:d="100%",...t}){return n.jsx(o,{dir:"ltr",sx:{width:d,height:l,flexShrink:0,borderRadius:1.5,position:"relative",...e},...t,children:n.jsx(re,{type:a,series:r,options:h,width:"100%",height:"100%"})})}function he(e){var d,t,f,m,b,c,g,v,y,k,x,O,w,C,A,B,L,z,S,W,E,R,T,j,_,F,I,M,V,D,G,H,N,P,U,Y,q,J,K,Q,X,Z,$,i;const a=ee(),r={show:!0,label:"Total",color:a.vars.palette.text.secondary,fontSize:a.typography.subtitle2.fontSize,fontWeight:a.typography.subtitle2.fontWeight},l={offsetY:8,color:a.vars.palette.text.primary,fontSize:a.typography.h4.fontSize,fontWeight:a.typography.h4.fontWeight},h=[{breakpoint:a.breakpoints.values.sm,options:{plotOptions:{bar:{borderRadius:3,columnWidth:"80%"}}}},{breakpoint:a.breakpoints.values.md,options:{plotOptions:{bar:{columnWidth:"60%"}}}},...(e==null?void 0:e.responsive)??[]];return{...e,chart:{toolbar:{show:!1},zoom:{enabled:!1},parentHeightOffset:0,fontFamily:a.typography.fontFamily,foreColor:a.vars.palette.text.disabled,...e==null?void 0:e.chart,animations:{enabled:!0,speed:360,animateGradually:{enabled:!0,delay:120},dynamicAnimation:{enabled:!0,speed:360},...(d=e==null?void 0:e.chart)==null?void 0:d.animations}},colors:(e==null?void 0:e.colors)??[a.palette.primary.main,a.palette.warning.main,a.palette.info.main,a.palette.error.main,a.palette.success.main,a.palette.warning.dark,a.palette.success.darker,a.palette.info.dark,a.palette.info.darker],states:{...e==null?void 0:e.states,hover:{...(t=e==null?void 0:e.states)==null?void 0:t.hover,filter:{type:"darken",value:.88,...(m=(f=e==null?void 0:e.states)==null?void 0:f.hover)==null?void 0:m.filter}},active:{...(b=e==null?void 0:e.states)==null?void 0:b.active,filter:{type:"darken",value:.88,...(g=(c=e==null?void 0:e.states)==null?void 0:c.active)==null?void 0:g.filter}}},fill:{opacity:1,...e==null?void 0:e.fill,gradient:{type:"vertical",shadeIntensity:0,opacityFrom:.4,opacityTo:0,stops:[0,100],...(v=e==null?void 0:e.fill)==null?void 0:v.gradient}},dataLabels:{enabled:!1,...e==null?void 0:e.dataLabels},stroke:{width:2.5,curve:"smooth",lineCap:"round",...e==null?void 0:e.stroke},grid:{strokeDashArray:3,borderColor:a.vars.palette.divider,...e==null?void 0:e.grid,padding:{top:0,right:0,bottom:0,...(y=e==null?void 0:e.grid)==null?void 0:y.padding},xaxis:{lines:{show:!1},...(k=e==null?void 0:e.grid)==null?void 0:k.xaxis}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},...e==null?void 0:e.xaxis},yaxis:{tickAmount:5,...e==null?void 0:e.yaxis},markers:{size:0,strokeColors:a.vars.palette.background.paper,...e==null?void 0:e.markers},tooltip:{theme:"false",fillSeriesColor:!1,x:{show:!0},...e==null?void 0:e.tooltip},legend:{show:!1,position:"top",fontWeight:500,fontSize:"13px",horizontalAlign:"right",markers:{radius:12},labels:{colors:a.vars.palette.text.primary},...e==null?void 0:e.legend,itemMargin:{horizontal:8,vertical:8,...(x=e==null?void 0:e.legend)==null?void 0:x.itemMargin}},plotOptions:{...e==null?void 0:e.plotOptions,bar:{borderRadius:4,columnWidth:"48%",borderRadiusApplication:"end",...(O=e==null?void 0:e.plotOptions)==null?void 0:O.bar},pie:{...(w=e==null?void 0:e.plotOptions)==null?void 0:w.pie,donut:{...(A=(C=e==null?void 0:e.plotOptions)==null?void 0:C.pie)==null?void 0:A.donut,labels:{show:!0,...(z=(L=(B=e==null?void 0:e.plotOptions)==null?void 0:B.pie)==null?void 0:L.donut)==null?void 0:z.labels,value:{...l,...(R=(E=(W=(S=e==null?void 0:e.plotOptions)==null?void 0:S.pie)==null?void 0:W.donut)==null?void 0:E.labels)==null?void 0:R.value},total:{...r,...(F=(_=(j=(T=e==null?void 0:e.plotOptions)==null?void 0:T.pie)==null?void 0:j.donut)==null?void 0:_.labels)==null?void 0:F.total}}}},radialBar:{...(I=e==null?void 0:e.plotOptions)==null?void 0:I.radialBar,hollow:{margin:-8,size:"100%",...(V=(M=e==null?void 0:e.plotOptions)==null?void 0:M.radialBar)==null?void 0:V.hollow},track:{margin:-8,strokeWidth:"50%",background:ae(a.vars.palette.grey["500Channel"],.16),...(G=(D=e==null?void 0:e.plotOptions)==null?void 0:D.radialBar)==null?void 0:G.track},dataLabels:{...(N=(H=e==null?void 0:e.plotOptions)==null?void 0:H.radialBar)==null?void 0:N.dataLabels,value:{...l,...(Y=(U=(P=e==null?void 0:e.plotOptions)==null?void 0:P.radialBar)==null?void 0:U.dataLabels)==null?void 0:Y.value},total:{...r,...(K=(J=(q=e==null?void 0:e.plotOptions)==null?void 0:q.radialBar)==null?void 0:J.dataLabels)==null?void 0:K.total}}},radar:{...(Q=e==null?void 0:e.plotOptions)==null?void 0:Q.radar,polygons:{fill:{colors:["transparent"]},strokeColors:a.vars.palette.divider,connectorColors:a.vars.palette.divider,...(Z=(X=e==null?void 0:e.plotOptions)==null?void 0:X.radar)==null?void 0:Z.polygons}},polarArea:{rings:{strokeColor:a.vars.palette.divider},spokes:{connectorColors:a.vars.palette.divider},...($=e==null?void 0:e.plotOptions)==null?void 0:$.polarArea},heatmap:{distributed:!0,...(i=e==null?void 0:e.plotOptions)==null?void 0:i.heatmap}},responsive:h.reduce((u,s)=>(u.some(p=>p.breakpoint===s.breakpoint)||u.push(s),u),[])}}export{te as C,he as u};
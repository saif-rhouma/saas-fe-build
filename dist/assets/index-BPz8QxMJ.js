import{b as i,cS as c,j as a,v as d,p as h,H as g,C as u}from"./index-DyaX_SWt.js";import{C as x}from"./custom-breadcrumbs-BBBfmruK.js";import{u as s,C as n}from"./use-chart-CVcFMo5I.js";import{C as p}from"./chart-legends-BH3b7Wtu.js";import{d as f,f as y,a as m}from"./format-number-gV4plKym.js";import{C}from"./component-hero-k6zUSiNe.js";import{S as b}from"./component-template-Di5qNmKp.js";import"./index-DV-9sifZ.js";import"./CardHeader-CBkIq1EG.js";import"./CardContent-BS3x0hxy.js";function j({chart:t}){const e=i(),r=t.colors??[c(e.palette.primary.dark,.8),e.palette.warning.main,e.palette.info.dark,e.palette.error.main],o=s({chart:{sparkline:{enabled:!0}},colors:r,labels:t.categories,stroke:{width:0},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},plotOptions:{pie:{donut:{labels:{show:!1}}}}});return a.jsxs(a.Fragment,{children:[a.jsx(p,{labels:o==null?void 0:o.labels,colors:o==null?void 0:o.colors,sx:{p:3,justifyContent:"center"}}),a.jsx(n,{type:"pie",series:t.series,options:o,width:240,height:240,sx:{my:3,mx:"auto"}})]})}function S({chart:t}){const e=i(),r=t.colors??[c(e.palette.primary.dark,.8)],o=s({colors:r,stroke:{width:0},xaxis:{categories:t.categories},tooltip:{y:{formatter:l=>`$ ${l} thousands`,title:{formatter:()=>""}}},plotOptions:{bar:{horizontal:!0,barHeight:"30%",borderRadius:2}}});return a.jsx(n,{type:"bar",series:[{data:t.series}],options:o,height:320})}function w({chart:t}){const e=i(),r=t.colors??[c(e.palette.primary.dark,.8),e.palette.warning.main],o=s({colors:r,legend:{show:!0},xaxis:{categories:t.categories}});return a.jsx(n,{type:"line",series:t.series,options:o,height:320})}function k({chart:t}){const e=i(),r=t.colors??[e.palette.primary.main,e.palette.warning.main],o=s({colors:r,legend:{show:!0},xaxis:{type:"datetime",categories:t.categories},tooltip:{x:{format:"dd/MM/yy HH:mm"}}});return a.jsx(n,{type:"area",series:t.series,options:o,height:320})}function M({chart:t}){const e=i(),r=t.colors??[c(e.palette.primary.dark,.8),e.palette.warning.main,e.palette.info.main],o=s({colors:r,stroke:{width:[0,2,2]},fill:{type:["solid","gradient","solid"]},legend:{show:!0},xaxis:{type:"datetime",categories:t.categories},yaxis:{min:0,title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:l=>`${l} points`}}});return a.jsx(n,{type:"line",series:t.series,options:o,height:320})}function A({chart:t}){const e=i(),r=t.colors??[c(e.palette.primary.dark,.8),e.palette.warning.main,e.palette.info.dark,e.palette.error.main],o=s({chart:{sparkline:{enabled:!0}},colors:r,labels:t.categories,stroke:{width:0},plotOptions:{pie:{donut:{size:"72%"}}}});return a.jsxs(a.Fragment,{children:[a.jsx(p,{labels:o==null?void 0:o.labels,colors:o==null?void 0:o.colors,sx:{p:3,justifyContent:"center"}}),a.jsx(n,{type:"donut",series:t.series,options:o,width:240,height:240,sx:{my:3,mx:"auto"}})]})}function B({chart:t}){const e=s({chart:{zoom:{enabled:!0,type:"xy"}},legend:{show:!0},xaxis:{tickAmount:8,labels:{formatter:r=>parseFloat(r).toFixed(1)}},markers:{size:6}});return a.jsx(n,{type:"scatter",series:t.series,options:e,height:350})}function O({chart:t}){const e=i(),r=t.colors??[e.palette.primary.dark,e.palette.warning.main],o=s({colors:r,legend:{show:!0},dataLabels:{enabled:!0},tooltip:{x:{show:!1}}});return a.jsx(n,{type:"treemap",series:t.series,options:o,height:320})}function T({chart:t}){const e=i(),r=t.colors??[e.palette.primary.dark,e.palette.warning.main,e.palette.info.main,e.palette.success.main,e.palette.error.main,e.palette.info.dark],o=s({colors:r,legend:{show:!0},tooltip:{x:{show:!1}},xaxis:{categories:t.categories}});return a.jsx(n,{type:"heatmap",series:t.series,options:o,height:320})}function J({chart:t}){const e=i(),r=t.colors??[e.palette.info.main,e.palette.error.main],o=s({stroke:{width:2,colors:[e.palette.divider]},plotOptions:{boxPlot:{colors:{upper:r[0],lower:r[1]}}}});return a.jsx(n,{type:"boxPlot",series:t.series,options:o,height:320})}function v({chart:t}){const e=i(),r=t.colors??[e.palette.primary.main,e.palette.warning.main,e.palette.error.main],o=s({colors:r,stroke:{width:2},fill:{opacity:.48},legend:{show:!0,floating:!0,position:"right"},xaxis:{categories:t.categories,labels:{style:{colors:[e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled,e.palette.text.disabled]}}}});return a.jsx(n,{type:"radar",series:t.series,options:o,height:280})}function F({chart:t}){const e=i(),r=t.colors??[[e.palette.secondary.light,e.palette.secondary.main],[e.palette.warning.light,e.palette.warning.main]],o=s({chart:{sparkline:{enabled:!0}},colors:r.map(l=>l[1]),labels:t.categories,stroke:{width:0},fill:{type:"gradient",gradient:{colorStops:r.map(l=>[{offset:0,color:l[0],opacity:1},{offset:100,color:l[1],opacity:1}])}},grid:{padding:{top:-40,bottom:-40}},plotOptions:{radialBar:{hollow:{margin:14,size:"32%"},track:{margin:14,background:d(e.vars.palette.grey["500Channel"],.08)},dataLabels:{total:{formatter:()=>f(2324)},value:{offsetY:2,fontSize:e.typography.h5.fontSize},name:{offsetY:-10}}}}});return a.jsxs(a.Fragment,{children:[a.jsx(n,{type:"radialBar",series:t.series,options:o,width:320,height:320,sx:{mx:"auto"}}),a.jsx(p,{labels:o==null?void 0:o.labels,colors:o==null?void 0:o.colors,sx:{p:3,justifyContent:"center"}})]})}function D({chart:t}){const e=i(),r=t.colors??[e.palette.error.main,e.palette.error.light],o=s({chart:{offsetY:16,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:r[0],opacity:1},{offset:100,color:r[1],opacity:1}]}},stroke:{dashArray:4,curve:"straight",lineCap:"butt"},plotOptions:{radialBar:{startAngle:-135,endAngle:135,hollow:{margin:-24},track:{margin:-24,strokeWidth:"100%",background:d(e.vars.palette.grey["500Channel"],.08)},dataLabels:{name:{offsetY:96},value:{offsetY:48},total:{label:"Median Ratio",color:e.vars.palette.error.main,fontSize:e.typography.subtitle2.fontSize,fontWeight:e.typography.subtitle2.fontWeight}}}}});return a.jsx(n,{type:"radialBar",series:t.series,options:o,width:260,height:260,sx:{mx:"auto"}})}function z({chart:t}){const e=i(),r=t.colors??[c(e.palette.primary.dark,.8)],o=s({colors:r,stroke:{width:0},xaxis:{categories:t.categories},tooltip:{y:{formatter:l=>`${l} thousands`,title:{formatter:()=>""}}},plotOptions:{bar:{columnWidth:"40%"}}});return a.jsx(n,{type:"bar",series:t.series,options:o,height:320})}function G({chart:t}){const e=i(),r=t.colors??[c(e.palette.primary.dark,.8),e.palette.warning.main,e.palette.info.main,e.palette.error.main],o=s({chart:{stacked:!0},colors:r,stroke:{width:0},legend:{show:!0,position:"right",itemMargin:{vertical:8}},xaxis:{type:"datetime",categories:t.categories},plotOptions:{bar:{columnWidth:"36%"}}});return a.jsx(n,{type:"bar",series:t.series,options:o,height:320})}function Z({chart:t}){const e=i(),r=t.colors??[e.palette.warning.main,e.palette.info.main],o=s({stroke:{width:0},xaxis:{type:"datetime",categories:t.categories},yaxis:{labels:{formatter:l=>y(l)}},tooltip:{y:{title:{formatter:()=>""}}},plotOptions:{bar:{borderRadius:2,colors:{ranges:[{from:-100,to:-46,color:r[0]},{from:-45,to:0,color:r[1]}]}}}});return a.jsx(n,{type:"bar",series:t.series,options:o,height:320})}function P({chart:t}){const e=i(),r=t.colors??[c(e.palette.primary.dark,.8),e.palette.warning.main],o=s({colors:r,legend:{show:!0},xaxis:{categories:t.categories},stroke:{show:!0,width:2,colors:["transparent"]},tooltip:{y:{formatter:l=>`$ ${l} thousands`}}});return a.jsx(n,{type:"bar",series:t.series,options:o,height:320})}function Y({chart:t}){const e=i(),r=t.colors??[e.palette.secondary.main,e.palette.secondary.light],o=s({chart:{offsetY:56,sparkline:{enabled:!0}},fill:{type:"gradient",gradient:{colorStops:[{offset:0,color:r[0],opacity:1},{offset:100,color:r[1],opacity:1}]}},plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{margin:-24},track:{margin:-24},dataLabels:{name:{offsetY:8},value:{offsetY:-40},total:{label:`Used of ${m(24*1024*1024)} / ${m(50*1024*1024)}`,color:e.vars.palette.text.disabled,fontSize:e.typography.caption.fontSize,fontWeight:e.typography.caption.fontWeight}}}}});return a.jsx(n,{type:"radialBar",series:t.series,options:o,width:260,height:260,sx:{mx:"auto"}})}const L=[{name:"Line",component:a.jsx(w,{chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{name:"Series A",data:[32,40,28,42,64,72,56,80,100]},{name:"Series B",data:[12,32,45,32,34,52,40,60,60]}]}})},{name:"Area",component:a.jsx(k,{chart:{categories:["2023-09-19T00:00:00.000Z","2023-09-19T01:30:00.000Z","2023-09-19T02:30:00.000Z","2023-09-19T03:30:00.000Z","2023-09-19T04:30:00.000Z","2023-09-19T05:30:00.000Z","2023-09-19T06:30:00.000Z","2023-09-19T07:30:00.000Z","2023-09-19T08:30:00.000Z"],series:[{name:"Series A",data:[32,40,28,42,64,72,56,80,100]},{name:"Series B",data:[12,32,45,32,34,52,40,60,60]}]}})},{name:"Column single",component:a.jsx(z,{chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{data:[32,40,28,42,64,72,56,80,100]}]}})},{name:"Column multiple",component:a.jsx(P,{chart:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],series:[{name:"Series A",data:[32,40,28,42,64,72,56,80,100]},{name:"Series B",data:[12,32,45,32,34,52,40,60,60]}]}})},{name:"Column stacked",component:a.jsx(G,{chart:{categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"],series:[{name:"Series A",data:[44,55,41,67,22,43]},{name:"Series B",data:[13,23,20,8,13,27]},{name:"Series C",data:[11,17,15,15,21,14]},{name:"Series D",data:[21,7,25,13,22,8]}]}})},{name:"Column negative",component:a.jsx(Z,{chart:{categories:["2011-01-01","2011-02-01","2011-03-01","2011-04-01","2011-05-01","2011-06-01","2011-07-01","2011-08-01","2011-09-01","2011-10-01","2011-11-01","2011-12-01","2012-01-01","2012-02-01","2012-03-01","2012-04-01","2012-05-01","2012-06-01","2012-07-01","2012-08-01","2012-09-01","2012-10-01","2012-11-01","2012-12-01","2013-01-01","2013-02-01","2013-03-01","2013-04-01","2013-05-01","2013-06-01","2013-07-01","2013-08-01","2013-09-01"],series:[{data:[1.45,5.42,5.9,-.42,-12.6,-18.1,-18.2,-14.16,-11.1,-6.09,.34,3.88,13.07,5.8,2,7.37,8.1,13.57,15.75,17.1,19.8,-27.03,-54.4,-47.2,-43.3,-18.6,-48.6,-41.1,-39.6,-37.6,-29.4,-21.4,-2.4]}]}})},{name:"Bar",component:a.jsx(S,{chart:{categories:["Italy","Japan","China","Canada","France","Germany","South Korea","Netherlands","United States","United Kingdom"],series:[400,430,448,470,540,580,690,1100,1200,1380]}})},{name:"Mixed",component:a.jsx(M,{chart:{categories:["01/01/2023","02/01/2023","03/01/2023","04/01/2023","05/01/2023","06/01/2023","07/01/2023","08/01/2023","09/01/2023","10/01/2023","11/01/2023"],series:[{name:"Series A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Series B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Series C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})},{name:"Scatter",component:a.jsx(B,{chart:{series:[{name:"Series A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0]]},{name:"Series B",data:[[36.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10]]},{name:"Series C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4]]}]}})},{name:"Pie",component:a.jsx(j,{chart:{categories:["Series A","Series B","Series C","Series D"],series:[44,55,13,43]}})},{name:"Donut",component:a.jsx(A,{chart:{categories:["Series A","Series B","Series C","Series D"],series:[44,55,13,43]}})},{name:"Radial bar",component:a.jsx(F,{chart:{categories:["Apples","Oranges"],series:[24,50]}})},{name:"Radar bar",component:a.jsx(v,{chart:{categories:["2011","2012","2013","2014","2015","2016"],series:[{name:"Series A",data:[80,50,30,40,100,20]},{name:"Series B",data:[20,30,40,80,20,80]},{name:"Series C",data:[44,76,78,13,43,10]}]}})},{name:"Semi circle gauge",component:a.jsx(Y,{chart:{series:[75]}})},{name:"Stroked gauge",component:a.jsx(D,{chart:{series:[75]}})},{name:"BoxPlot",component:a.jsx(J,{chart:{series:[{data:[{x:"Jan 2015",y:[54,66,69,75,88]},{x:"Jan 2016",y:[43,65,69,76,81]},{x:"Jan 2017",y:[31,39,45,51,59]},{x:"Jan 2018",y:[39,46,55,65,71]},{x:"Jan 2019",y:[29,31,35,39,44]},{x:"Jan 2020",y:[41,49,58,61,67]},{x:"Jan 2021",y:[54,59,66,71,88]}]}]}})},{name:"Heatmap",component:a.jsx(T,{chart:{categories:["10:00","10:30","11:00","11:30","12:00","12:30","01:00"],series:[{name:"Metric 1",data:[45,52,38,45,19,23,2]},{name:"Metric 2",data:[26,21,20,6,8,15,12]},{name:"Metric 3",data:[30,22,16,29,15,10,20]},{name:"Metric 4",data:[44,55,41,37,22,43,21]},{name:"Metric 5",data:[35,41,36,26,45,48,52]},{name:"Metric 6",data:[21,35,22,27,13,28,37]}]}})},{name:"Treemap",component:a.jsx(O,{chart:{series:[{name:"Desktops",data:[{x:"ABC",y:10},{x:"DEF",y:60},{x:"XYZ",y:41}]},{name:"Mobile",data:[{x:"ABCD",y:10},{x:"DEFG",y:20},{x:"WXYZ",y:51},{x:"PQR",y:30},{x:"MNO",y:20},{x:"CDE",y:30}]}]}})}];function R(){return a.jsxs(a.Fragment,{children:[a.jsx(C,{children:a.jsx(x,{heading:"Chart",links:[{name:"Components",href:h.components},{name:"Chart"}],moreLink:["https://apexcharts.com"]})}),a.jsx(b,{data:L})]})}const $={title:`Chart | Components - ${u.site.name}`};function q(){return a.jsxs(a.Fragment,{children:[a.jsx(g,{children:a.jsxs("title",{children:[" ",$.title]})}),a.jsx(R,{})]})}export{q as default};
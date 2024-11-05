import{r as o,j as e,S as h,B as P,cY as C,v as f,aS as p,p as v,H as b,C as w}from"./index-z3fnkpoB.js";import{C as S}from"./custom-breadcrumbs-amwibr4j.js";import{P as t}from"./Pagination-De4fUOCj.js";import{F as I}from"./FormControl-B2PHWm2c.js";import{I as y}from"./InputLabel-BIO8ukMt.js";import{S as R}from"./Select-Dog87Ggh.js";import{C as k}from"./component-hero-BJCwNRk4.js";import{a as n}from"./component-block-BXJsKF3k.js";import{S as B}from"./component-template-Bp6EQ_hr.js";import{T as F}from"./TablePagination-Cw9TijaD.js";import"./LastPage-B8VOrBow.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-iDu77X9X.js";import"./Menu-Bx_-ENI-.js";import"./InputBase-GNP6DFYA.js";import"./CardHeader-Bgb3Zq_G.js";import"./CardContent-BWH8Hsze.js";import"./KeyboardArrowRight-ah785XZm.js";import"./TableCell-CZRS_F_G.js";const g=[...Array(100)].map((l,r)=>r+1);function T(){const[l,r]=o.useState(1),[i,u]=o.useState(12),d=o.useCallback((c,a)=>{r(a)},[]),m=o.useCallback(c=>{u(parseInt(c.target.value,10)),r(1)},[]);return e.jsxs(h,{alignItems:"center",spacing:8,sx:{width:1},children:[e.jsx(P,{gap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(4, 1fr)"},sx:{width:1},children:g.slice((l-1)*i,(l-1)*i+i).map(c=>e.jsx(C,{sx:{py:3,typography:"h3",borderRadius:1.5,textAlign:"center",color:a=>f(a.vars.palette.text.disabledChannel,.48)},children:c},c))}),e.jsxs(h,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:1},children:[e.jsx(t,{page:l,shape:"circular",count:Math.ceil(g.length/i),onChange:d}),e.jsxs(I,{size:"small",sx:{width:120},children:[e.jsx(y,{htmlFor:"demo-pagination-select-label",children:"Items per page"}),e.jsxs(R,{value:String(i),label:"Item per page",onChange:m,inputProps:{id:"demo-pagination-select-label"},children:[e.jsx(p,{value:8,children:"8"}),e.jsx(p,{value:12,children:"12"}),e.jsx(p,{value:24,children:"24"})]})]})]})]})}const x=["standard","primary","secondary","info","success","warning","error"],E=["small","medium","large"],s={gap:3,flexDirection:"column"};function L(){const[l,r]=o.useState(2),[i,u]=o.useState(10),d=o.useCallback((a,j)=>{r(j)},[]),m=o.useCallback(a=>{u(parseInt(a.target.value,10)),r(0)},[]),c=[{name:"Circular",component:e.jsxs(n,{sx:s,children:[e.jsx(t,{shape:"circular",count:10,variant:"text"}),e.jsx(t,{shape:"circular",count:10,variant:"text",disabled:!0}),e.jsx(t,{shape:"circular",count:10,variant:"outlined"}),e.jsx(t,{shape:"circular",count:10,variant:"outlined",disabled:!0}),e.jsx(t,{shape:"circular",count:10,variant:"soft"}),e.jsx(t,{shape:"circular",count:10,variant:"soft",disabled:!0})]})},{name:"Rounded",component:e.jsxs(n,{sx:s,children:[e.jsx(t,{shape:"rounded",count:10,variant:"text"}),e.jsx(t,{shape:"rounded",count:10,variant:"text",disabled:!0}),e.jsx(t,{shape:"rounded",count:10,variant:"outlined"}),e.jsx(t,{shape:"rounded",count:10,variant:"outlined",disabled:!0}),e.jsx(t,{shape:"rounded",count:10,variant:"soft"}),e.jsx(t,{shape:"rounded",count:10,variant:"soft",disabled:!0})]})},{name:"Colors",component:e.jsxs(n,{sx:s,children:[x.map(a=>e.jsx(t,{color:a,count:10,variant:"text"},a)),x.map(a=>e.jsx(t,{color:a,count:10,variant:"outlined"},a)),x.map(a=>e.jsx(t,{color:a,count:10,variant:"soft"},a))]})},{name:"Sizes",component:e.jsx(n,{sx:s,children:E.map(a=>e.jsx(t,{count:10,size:a},a))})},{name:"Buttons",component:e.jsxs(n,{sx:s,children:[e.jsx(t,{count:10,showFirstButton:!0,showLastButton:!0}),e.jsx(t,{count:10,hidePrevButton:!0,hideNextButton:!0})]})},{name:"Ranges",component:e.jsxs(n,{sx:s,children:[e.jsx(t,{count:11,defaultPage:6,siblingCount:0}),e.jsx(t,{count:11,defaultPage:6}),e.jsx(t,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),e.jsx(t,{count:11,defaultPage:6,boundaryCount:2})]})},{name:"Table",component:e.jsx(n,{sx:s,children:e.jsx(F,{component:"div",count:100,page:l,onPageChange:d,rowsPerPage:i,onRowsPerPageChange:m})})},{name:"Items",component:e.jsx(n,{sx:s,children:e.jsx(T,{})})}];return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(S,{heading:"Pagination",links:[{name:"Components",href:v.components},{name:"Pagination"}],moreLink:["https://mui.com/components/pagination"]})}),e.jsx(B,{data:c})]})}const M={title:`Pagination | MUI - ${w.site.name}`};function te(){return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsxs("title",{children:[" ",M.title]})}),e.jsx(L,{})]})}export{te as default};

import{j as e,dy as u,o as k,w as b,I as C,dh as v,az as I,T as A,r as P,S as E,cM as T,B as F,p as R,H as L,C as H}from"./index-BHptOA6I.js";import{C as z}from"./custom-breadcrumbs-B2UF9gRN.js";import{a as m,b as B,c as x,T as c,d as f}from"./table-head-custom-DTqHCDKd.js";import{T as a}from"./TableCell-zkyNesf-.js";import{C as W}from"./component-hero-CdwWNpUc.js";import{a as p}from"./component-block-DIiC8SvR.js";import{g as G,T as U,a as $,e as M}from"./table-selected-action-DBtt4rXc.js";import{u as D}from"./use-table-1qhelxBn.js";import{T as w}from"./table-pagination-custom-DsNAOOVn.js";import{C as N}from"./Checkbox-BavyM9xV.js";import{S as O}from"./component-template-B2F2QeV7.js";import"./TablePagination-BTNJDIkW.js";import"./KeyboardArrowRight-D4oZF--s.js";import"./LastPage-CD7ip7g7.js";import"./Select-B_eI20e-.js";import"./Menu-C5yStwHf.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-JkTJu-C5.js";import"./FormControlLabel-BpgKL08t.js";import"./CardHeader-CgIhu_s4.js";import"./CardContent-hDOGZBx8.js";function h(n,r,i,s,t){return{name:n,calories:r,fat:i,carbs:s,protein:t}}const _=[h("Frozen yoghurt",159,6,24,4),h("Ice cream sandwich",237,9,37,4.3),h("Eclair",262,16,24,6),h("Cupcake",305,3.7,67,4.3),h("Gingerbread",356,16,49,3.9)],J=[{id:"dessert",label:"Dessert (100g serving)"},{id:"calories",label:"Calories",align:"right"},{id:"fat",label:"Fat (g)",align:"right"},{id:"carbs",label:"Carbs (g)",align:"right"},{id:"protein",label:"Protein (g)",align:"right"}];function K(){return e.jsx(u,{children:e.jsxs(m,{sx:{minWidth:800},children:[e.jsx(B,{headLabel:J}),e.jsx(x,{children:_.map(n=>e.jsxs(c,{children:[e.jsx(a,{children:n.name}),e.jsx(a,{align:"right",children:n.calories}),e.jsx(a,{align:"right",children:n.fat}),e.jsx(a,{align:"right",children:n.carbs}),e.jsx(a,{align:"right",children:n.protein})]},n.name))})]})})}function g(n,r,i,s,t,d){return{name:n,calories:r,fat:i,carbs:s,protein:t,price:d,history:[{date:"2020-01-05",customerId:"11091700",amount:3},{date:"2020-01-02",customerId:"Anonymous",amount:1}]}}const V=[g("Frozen yoghurt",159,6,24,4,3.99),g("Ice cream sandwich",237,9,37,4.3,4.99),g("Eclair",262,16,24,6,3.79),g("Cupcake",305,3.7,67,4.3,2.5),g("Gingerbread",356,16,49,3.9,1.5)];function X(){return e.jsx(u,{children:e.jsxs(m,{sx:{minWidth:800},children:[e.jsx(f,{children:e.jsxs(c,{children:[e.jsx(a,{}),e.jsx(a,{children:"Dessert (100g serving)"}),e.jsx(a,{align:"right",children:"Calories"}),e.jsx(a,{align:"right",children:"Fat (g)"}),e.jsx(a,{align:"right",children:"Carbs (g)"}),e.jsx(a,{align:"right",children:"Protein (g)"})]})}),e.jsx(x,{children:V.map(n=>e.jsx(q,{row:n},n.name))})]})})}function q({row:n}){const r=k();return e.jsxs(e.Fragment,{children:[e.jsxs(c,{sx:{"& > *":{borderBottom:"unset"}},children:[e.jsx(a,{children:e.jsx(b,{size:"small",color:r.value?"inherit":"default",onClick:r.onToggle,children:e.jsx(C,{icon:r.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})}),e.jsx(a,{component:"th",scope:"row",children:n.name}),e.jsx(a,{align:"right",children:n.calories}),e.jsx(a,{align:"right",children:n.fat}),e.jsx(a,{align:"right",children:n.carbs}),e.jsx(a,{align:"right",children:n.protein})]}),e.jsx(c,{children:e.jsx(a,{sx:{py:0},colSpan:6,children:e.jsx(v,{in:r.value,timeout:"auto",unmountOnExit:!0,children:e.jsxs(I,{variant:"outlined",sx:{py:2,mb:2,borderRadius:1.5,...r.value&&{boxShadow:i=>i.customShadows.z20}},children:[e.jsx(A,{variant:"h6",component:"div",sx:{p:2},children:"History"}),e.jsxs(m,{size:"small","aria-label":"purchases",children:[e.jsx(f,{children:e.jsxs(c,{children:[e.jsx(a,{children:"Date"}),e.jsx(a,{children:"Customer"}),e.jsx(a,{align:"right",children:"Amount"}),e.jsx(a,{align:"right",children:"Total price ($)"})]})}),e.jsx(x,{children:n.history.map(i=>e.jsxs(c,{children:[e.jsx(a,{component:"th",scope:"row",children:i.date}),e.jsx(a,{children:i.customerId}),e.jsx(a,{align:"right",children:i.amount}),e.jsx(a,{align:"right",children:Math.round(i.amount*n.price*100)/100})]},i.date))})]})]})})})})]})}function o(n,r,i,s,t){return{name:n,calories:r,fat:i,carbs:s,protein:t}}const Q=[o("Cupcake",305,3.7,67,4.3),o("Donut",452,25,51,4.9),o("Eclair",262,16,24,6),o("Frozen yoghurt",159,6,24,4),o("Gingerbread",356,16,49,3.9),o("Honeycomb",408,3.2,87,6.5),o("Ice cream sandwich",237,9,37,4.3),o("Jelly Bean",375,0,94,0),o("KitKat",518,26,65,7),o("Lollipop",392,.2,98,0),o("Marshmallow",318,0,81,2),o("Nougat",360,19,9,37)],Y=[{id:"name",label:"Dessert (100g serving)",align:"left"},{id:"calories",label:"Calories",align:"center"},{id:"fat",label:"Fat (g)",align:"center"},{id:"carbs",label:"Carbs (g)",align:"center"},{id:"protein",label:"Protein (g)",align:"center"}];function Z(){const n=D({defaultOrderBy:"calories"}),[r,i]=P.useState([]);P.useEffect(()=>{i(Q)},[]);const s=ee({inputData:r,comparator:G(n.order,n.orderBy)});return e.jsxs("div",{children:[e.jsxs(E,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:3},children:[e.jsx(A,{variant:"h6",children:" Title"}),e.jsx(T,{title:"Filter list",children:e.jsx(b,{children:e.jsx(C,{icon:"ic:round-filter-list"})})})]}),e.jsxs(F,{sx:{position:"relative"},children:[e.jsx(U,{dense:n.dense,numSelected:n.selected.length,rowCount:r.length,onSelectAllRows:t=>n.onSelectAllRows(t,r.map(d=>d.name)),action:e.jsx(T,{title:"Delete",children:e.jsx(b,{color:"primary",children:e.jsx(C,{icon:"solar:trash-bin-trash-bold"})})})}),e.jsx(u,{children:e.jsxs(m,{size:n.dense?"small":"medium",sx:{minWidth:800},children:[e.jsx(B,{order:n.order,orderBy:n.orderBy,headLabel:Y,rowCount:r.length,numSelected:n.selected.length,onSort:n.onSort,onSelectAllRows:t=>n.onSelectAllRows(t,r.map(d=>d.name))}),e.jsxs(x,{children:[s.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map(t=>e.jsxs(c,{hover:!0,onClick:()=>n.onSelectRow(t.name),selected:n.selected.includes(t.name),children:[e.jsx(a,{padding:"checkbox",children:e.jsx(N,{checked:n.selected.includes(t.name)})}),e.jsxs(a,{children:[" ",t.name," "]}),e.jsx(a,{align:"center",children:t.calories}),e.jsx(a,{align:"center",children:t.fat}),e.jsx(a,{align:"center",children:t.carbs}),e.jsx(a,{align:"center",children:t.protein})]},t.name)),e.jsx($,{height:n.dense?34:54,emptyRows:M(n.page,n.rowsPerPage,r.length)})]})]})})]}),e.jsx(w,{page:n.page,dense:n.dense,count:s.length,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onChangeDense:n.onChangeDense,onRowsPerPageChange:n.onChangeRowsPerPage})]})}function ee({inputData:n,comparator:r}){const i=n.map((s,t)=>[s,t]);return i.sort((s,t)=>{const d=r(s[0],t[0]);return d!==0?d:s[1]-t[1]}),n=i.map(s=>s[0]),n}function l(n,r,i,s){const t=i/s;return{name:n,code:r,population:i,size:s,density:t}}const S=[l("India","IN",1324171354,3287263),l("China","CN",1403500365,9596961),l("Italy","IT",60483973,301340),l("United States","US",327167434,9833520),l("Canada","CA",37602103,9984670),l("Australia","AU",25475400,7692024),l("Germany","DE",83019200,357578),l("Ireland","IE",4857e3,70273),l("Mexico","MX",126577691,1972550),l("Japan","JP",126317e3,377973),l("France","FR",67022e3,640679),l("United Kingdom","GB",67545757,242495),l("Russia","RU",146793744,17098246),l("Nigeria","NG",200962417,923768),l("Brazil","BR",210147125,8515767)],y=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:n=>n.toLocaleString("en-US")},{id:"size",label:"Size (km²)",minWidth:170,align:"right",format:n=>n.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:n=>n.toFixed(2)}];function ne(){const n=D({defaultRowsPerPage:10});return e.jsxs(e.Fragment,{children:[e.jsx(u,{sx:{maxHeight:400},children:e.jsxs(m,{stickyHeader:!0,sx:{minWidth:800},children:[e.jsxs(f,{children:[e.jsxs(c,{children:[e.jsx(a,{align:"center",colSpan:2,sx:{borderBottomColor:"transparent",background:r=>r.vars.palette.background.paper},children:"Country"}),e.jsx(a,{align:"center",colSpan:3,sx:{borderBottomColor:"transparent",background:r=>r.vars.palette.background.paper},children:"Details"})]}),e.jsx(c,{children:y.map(r=>e.jsx(a,{align:r.align,style:{top:56,minWidth:r.minWidth},children:r.label},r.id))})]}),e.jsx(x,{children:S.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage).map(r=>e.jsx(c,{hover:!0,role:"checkbox",tabIndex:-1,children:y.map(i=>{const s=r[i.id];return e.jsx(a,{align:i.align,children:i.format&&typeof s=="number"?i.format(s):s},i.id)})},r.code))})]})}),e.jsx(w,{page:n.page,count:S.length,rowsPerPage:n.rowsPerPage,onPageChange:n.onChangePage,onRowsPerPageChange:n.onChangeRowsPerPage})]})}const j={p:0,overflow:"hidden",alignItems:"unset",flexDirection:"column",bgcolor:"background.paper"},ae=[{name:"Basic Table",component:e.jsx(p,{sx:j,children:e.jsx(K,{})})},{name:"Sorting & selecting",component:e.jsx(p,{sx:j,children:e.jsx(Z,{})})},{name:"Grouping & fixed header",component:e.jsx(p,{sx:j,children:e.jsx(ne,{})})},{name:"Collapsible table",component:e.jsx(p,{sx:j,children:e.jsx(X,{})})}];function re(){return e.jsxs(e.Fragment,{children:[e.jsx(W,{children:e.jsx(z,{heading:"Table",links:[{name:"Components",href:R.components},{name:"Table"}],moreLink:["https://mui.com/components/tables"]})}),e.jsx(O,{data:ae})]})}const ie={title:`Table | MUI - ${H.site.name}`};function De(){return e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsxs("title",{children:[" ",ie.title]})}),e.jsx(re,{})]})}export{De as default};

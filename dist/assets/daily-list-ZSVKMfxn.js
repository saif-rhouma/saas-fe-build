import{j as t,r as p,aW as R,S as g,de as v,e2 as C,dP as S,p as h,cY as P,B,ed as E,dT as Y,H as F,C as O,dp as A,dm as k}from"./index-B_LxAfOw.js";import{u as w,E as I}from"./error-block-D_MYnRmv.js";import{b as y}from"./format-number-FqNcKw9g.js";import{C as L}from"./custom-breadcrumbs-DL_hb143.js";import{g as N,e as H}from"./utils-MBUcMVfY.js";import{u as M}from"./use-table-CgWaK9GH.js";import{T as W}from"./table-no-data-BpBxpQNC.js";import{T as V}from"./table-empty-rows-XUBxCVEs.js";import{T as q,a as z,b as _,c as G}from"./table-head-custom-D-1KlyPH.js";import{T as K}from"./table-selected-action-DmJZ48Ja.js";import{T as j}from"./TableCell-Bkba25Fa.js";import{D as Q}from"./DatePicker-CY7qF4QG.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-C6zWf2hF.js";import"./Checkbox-z6GeiG8R.js";import"./index-CbjmbUmg.js";import"./FormControl-Cpf2cPA_.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DgCi-pAG.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-5sjEvyne.js";import"./FormHelperText-D_d3ajJ5.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-g4Fthtsf.js";import"./Select-QKqu9e47.js";import"./Menu-CxORF-cC.js";import"./InputBase-_1vnMm32.js";import"./InputAdornment-BTvT09Ii.js";import"./DialogContent-mATg592v.js";import"./ListItem-BI9IFyG7.js";import"./Chip-CVIOtR2A.js";const $=({row:e,selected:a})=>{const n=t.jsxs(q,{hover:!0,selected:a,children:[t.jsx(j,{children:e==null?void 0:e.label}),t.jsx(j,{children:e==null?void 0:e.value})]});return t.jsx(t.Fragment,{children:n})};function J({filters:e,onResetPage:a}){const n=p.useCallback(i=>{const s=R(i).add(1,"day").format("YYYY-MM-DD");a(),e.setState({startDate:i,endDate:s})},[e,a]);return t.jsx(g,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:t.jsx(Q,{label:"Date",format:"DD/MM/YYYY",value:e.state.startDate,onChange:n})})}const U=[{id:"reminderId",label:"Particular"},{id:"date",label:"value",width:280}],X=[{label:"Orders",value:0},{label:"No. of Orders Delivered",value:0},{label:"Total Sales",value:0},{label:"Total Payment",value:0}],Z=({orders:e})=>{const a=M({defaultOrderBy:"orderNumber"}),[n,i]=p.useState(e);p.useRef(X);const s=v({name:"",status:"all",startDate:null,endDate:null}),c=C(s.state.startDate,s.state.endDate),l=ee({inputData:n,comparator:N(a.order,a.orderBy),filters:s.state,dateError:c}),b=p.useCallback(o=>{const m=o.filter(u=>u.status==="Delivered").length,D=y(o.reduce((u,x)=>u+x.totalOrderAmount,0)),T=y(o.reduce((u,x)=>u+x.orderPaymentAmount,0));return{orders:o.length,nbDelivered:m,totalSales:D,totalPayments:T}},[]),r=o=>{const m=b(o);return[{label:"Orders",value:m.orders},{label:"No. of Orders Delivered",value:m.nbDelivered},{label:"Total Sales",value:m.totalSales},{label:"Total Payment",value:m.totalPayments}]};p.useEffect(()=>{e&&i(e)},[e]);const d=!!s.state.name||s.state.status!=="all"||!!s.state.startDate&&!!s.state.endDate,f=!l.length&&d||!l.length;return t.jsx(S,{maxWidth:"xl",children:t.jsxs(g,{spacing:3,children:[t.jsx(L,{links:[{name:"Dashboard",href:h.dashboard.root},{name:"Reports",href:h.dashboard.reports.root},{name:"Daily Report",href:h.dashboard.reports.daily}]}),t.jsxs(P,{children:[t.jsx(J,{filters:s,onResetPage:a.onResetPage,dateError:c}),t.jsxs(B,{sx:{position:"relative"},children:[t.jsx(K,{dense:a.dense,numSelected:a.selected.length,rowCount:l.length}),t.jsxs(z,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(_,{order:a.order,orderBy:a.orderBy,headLabel:U,rowCount:l.length}),t.jsxs(G,{children:[r(l).map(o=>t.jsx($,{row:o,selected:a.selected.includes(o.id)},o.id)),t.jsx(V,{height:a.dense?56:76,emptyRows:H(a.page,a.rowsPerPage,l.length)}),t.jsx(W,{notFound:f})]})]})]})]})]})})};function ee({inputData:e,comparator:a,filters:n,dateError:i}){const{status:s,startDate:c,endDate:l}=n,b=e.map((r,d)=>[r,d]);return b.sort((r,d)=>{const f=a(r[0],d[0]);return f!==0?f:r[1]-d[1]}),e=b.map(r=>r[0]),s!=="all"&&(e=e.filter(r=>r.status===s)),i||c&&l&&(e=e.filter(r=>E(r.orderDate,c,l))),e}const te={title:`Reports list | Dashboard - ${O.site.name}`};function Ie(){const e=w({queryKey:["orders"],queryFn:async()=>{const{data:a}=await A.get(k.order.list);return a}});return e.isPending||e.isLoading?t.jsx(Y,{}):e.isError?t.jsx(I,{route:h.dashboard.reports.root}):t.jsxs(t.Fragment,{children:[t.jsx(F,{children:t.jsxs("title",{children:[" ",te.title]})}),t.jsx(Z,{orders:e.data})]})}export{Ie as default};

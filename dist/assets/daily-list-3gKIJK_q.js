import{j as t,r as p,bU as R,S as g,dz as v,eo as C,e8 as S,p as f,aD as P,B,ep as E,ec as F,H as O,C as Y,dJ as A,dH as k}from"./index-qTpQGZSM.js";import{u as w,E as I}from"./error-block-LdKLJmXG.js";import{b as y}from"./format-number-BnI2ZW2X.js";import{C as L}from"./custom-breadcrumbs-BGUga5Db.js";import{g as H,T as N,e as M}from"./table-empty-rows-BjNRKAw-.js";import{u as z}from"./use-table-BsmW9kBY.js";import{T as V}from"./table-no-data-CfTNoIH2.js";import{T as W,a as q,b as _,c as G}from"./table-head-custom-C1TpOHrp.js";import{T as J}from"./table-selected-action-Bi30jodZ.js";import{T as j}from"./TableCell-C7feBr2O.js";import{D as K}from"./DatePicker-1dQyUDWB.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-DkGXVbKZ.js";import"./Checkbox-BIMD_Kz2.js";import"./index-DQ3rvJDb.js";import"./FormControl-BpZ03tA-.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-DcOK32WR.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-DnNlyvb5.js";import"./FormHelperText-B0yAPKEP.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-DlbgkIdM.js";import"./Select-CPhaOcE2.js";import"./Menu-rdkUPF4f.js";import"./InputBase-iWMV7tHw.js";import"./InputAdornment-AOuf2E7W.js";import"./DialogContent-BiWMH9ix.js";import"./ListItem-BzSUAL2X.js";import"./Chip-BkTmiN33.js";const Q=({row:e,selected:a})=>{const n=t.jsxs(W,{hover:!0,selected:a,children:[t.jsx(j,{children:e==null?void 0:e.label}),t.jsx(j,{children:e==null?void 0:e.value})]});return t.jsx(t.Fragment,{children:n})};function U({filters:e,onResetPage:a}){const n=p.useCallback(i=>{const s=R(i).add(1,"day").format("YYYY-MM-DD");a(),e.setState({startDate:i,endDate:s})},[e,a]);return t.jsx(g,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:t.jsx(K,{label:"Date",format:"DD/MM/YYYY",value:e.state.startDate,onChange:n})})}const $=[{id:"reminderId",label:"Particular"},{id:"date",label:"value",width:280}],X=[{label:"Orders",value:0},{label:"No. of Orders Delivered",value:0},{label:"Total Sales",value:0},{label:"Total Payment",value:0}],Z=({orders:e})=>{const a=z({defaultOrderBy:"orderNumber"}),[n,i]=p.useState(e);p.useRef(X);const s=v({name:"",status:"all",startDate:null,endDate:null}),c=C(s.state.startDate,s.state.endDate),l=ee({inputData:n,comparator:H(a.order,a.orderBy),filters:s.state,dateError:c}),b=p.useCallback(o=>{const m=o.filter(u=>u.status==="Delivered").length,D=y(o.reduce((u,x)=>u+x.totalOrderAmount,0)),T=y(o.reduce((u,x)=>u+x.orderPaymentAmount,0));return{orders:o.length,nbDelivered:m,totalSales:D,totalPayments:T}},[]),r=o=>{const m=b(o);return[{label:"Orders",value:m.orders},{label:"No. of Orders Delivered",value:m.nbDelivered},{label:"Total Sales",value:m.totalSales},{label:"Total Payment",value:m.totalPayments}]};p.useEffect(()=>{e&&i(e)},[e]);const d=!!s.state.name||s.state.status!=="all"||!!s.state.startDate&&!!s.state.endDate,h=!l.length&&d||!l.length;return t.jsx(S,{maxWidth:"xl",children:t.jsxs(g,{spacing:3,children:[t.jsx(L,{links:[{name:"Dashboard",href:f.dashboard.root},{name:"Reports",href:f.dashboard.reports.root},{name:"Daily Report",href:f.dashboard.reports.daily}]}),t.jsxs(P,{children:[t.jsx(U,{filters:s,onResetPage:a.onResetPage,dateError:c}),t.jsxs(B,{sx:{position:"relative"},children:[t.jsx(J,{dense:a.dense,numSelected:a.selected.length,rowCount:l.length}),t.jsxs(q,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(_,{order:a.order,orderBy:a.orderBy,headLabel:$,rowCount:l.length}),t.jsxs(G,{children:[r(l).map(o=>t.jsx(Q,{row:o,selected:a.selected.includes(o.id)},o.id)),t.jsx(N,{height:a.dense?56:76,emptyRows:M(a.page,a.rowsPerPage,l.length)}),t.jsx(V,{notFound:h})]})]})]})]})]})})};function ee({inputData:e,comparator:a,filters:n,dateError:i}){const{status:s,startDate:c,endDate:l}=n,b=e.map((r,d)=>[r,d]);return b.sort((r,d)=>{const h=a(r[0],d[0]);return h!==0?h:r[1]-d[1]}),e=b.map(r=>r[0]),s!=="all"&&(e=e.filter(r=>r.status===s)),i||c&&l&&(e=e.filter(r=>E(r.orderDate,c,l))),e}const te={title:`Reports list | Dashboard - ${Y.site.name}`};function we(){const e=w({queryKey:["orders"],queryFn:async()=>{const{data:a}=await A.get(k.order.list);return a}});return e.isPending||e.isLoading?t.jsx(F,{}):e.isError?t.jsx(I,{route:f.dashboard.reports.root}):t.jsxs(t.Fragment,{children:[t.jsx(O,{children:t.jsxs("title",{children:[" ",te.title]})}),t.jsx(Z,{orders:e.data})]})}export{we as default};

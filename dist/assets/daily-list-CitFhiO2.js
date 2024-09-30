import{j as e,r as u,bU as R,S as j,dz as C,eo as S,e8 as P,p as h,aD as B,B as E,ep as F,ec as O,H as Y,C as A,dJ as k,dH as I}from"./index-Cq03K-HC.js";import{u as L,E as w}from"./error-block-CBMWt84f.js";import{b as D}from"./format-number-DITXUPMN.js";import{C as H}from"./custom-breadcrumbs-C_F-6vOC.js";import{u as N,g as M,T as z,a as W,e as q}from"./table-selected-action-CjXNfoiW.js";import{T as V}from"./table-no-data-BdJ2y3p3.js";import{T as _,a as G,b as J,c as K}from"./table-head-custom-xPqHms_A.js";import{T as y}from"./TableCell-BY4odiRW.js";import{D as Q}from"./DatePicker-C0kjDQAX.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-B5P4NoLN.js";import"./empty-content-D3sAh_j_.js";import"./index-DqNxVOmH.js";import"./FormControl-DUlfZx4z.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D6SX5sCR.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bx5V1G4l.js";import"./FormHelperText-BdgqWWO0.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-BNZ3YpVQ.js";import"./Select-BJK6Q71-.js";import"./Menu-B_EWYTTU.js";import"./InputBase-CPtucf_J.js";import"./InputAdornment-B7jHbOut.js";import"./DialogContent-D0WbZEYR.js";import"./ListItem-Dwol_2rN.js";import"./Chip-x2W7r02e.js";const U=({row:t,selected:a})=>{const l=e.jsxs(_,{hover:!0,selected:a,children:[e.jsx(y,{children:t==null?void 0:t.label}),e.jsx(y,{children:t==null?void 0:t.value})]});return e.jsx(e.Fragment,{children:l})};function $({filters:t,onResetPage:a}){const l=u.useCallback(d=>{const n=R(d).add(1,"day").format("YYYY-MM-DD");a(),t.setState({startDate:d,endDate:n})},[t,a]);return e.jsx(j,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(Q,{label:"Date",format:"DD/MM/YYYY",value:t.state.startDate,onChange:l})})}const X=[{id:"reminderId",label:"Particular"},{id:"date",label:"value",width:280}],Z=[{label:"Orders",value:0},{label:"No. of Orders Delivered",value:0},{label:"Total Sales",value:0},{label:"Total Payment",value:0}],ee=({orders:t})=>{const a=N({defaultOrderBy:"orderNumber"}),[l,d]=u.useState(t),[n,p]=u.useState(Z),o=C({name:"",status:"all",startDate:null,endDate:null}),m=S(o.state.startDate,o.state.endDate),s=te({inputData:l,comparator:M(a.order,a.orderBy),filters:o.state,dateError:m}),i=u.useCallback(r=>{const x=r.filter(c=>c.status==="Delivered").length,T=D(r.reduce((c,f)=>c+f.totalOrderAmount,0)),v=D(r.reduce((c,f)=>c+f.orderPaymentAmount,0));return{orders:r.length,nbDelivered:x,totalSales:T,totalPayments:v}},[]);u.useEffect(()=>{const r=i(s),x=[{label:"Orders",value:r.orders},{label:"No. of Orders Delivered",value:r.nbDelivered},{label:"Total Sales",value:r.totalSales},{label:"Total Payment",value:r.totalPayments}];p(x)},[s.length,a,l]);const b=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,g=!s.length&&b||!s.length;return e.jsx(P,{maxWidth:"xl",children:e.jsxs(j,{spacing:3,children:[e.jsx(H,{links:[{name:"Dashboard",href:h.dashboard.root},{name:"Reports",href:h.dashboard.reports.root},{name:"Daily Report",href:h.dashboard.reports.daily}]}),e.jsxs(B,{children:[e.jsx($,{filters:o,onResetPage:a.onResetPage,dateError:m}),e.jsxs(E,{sx:{position:"relative"},children:[e.jsx(z,{dense:a.dense,numSelected:a.selected.length,rowCount:s.length}),e.jsxs(G,{size:a.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(J,{order:a.order,orderBy:a.orderBy,headLabel:X,rowCount:s.length}),e.jsxs(K,{children:[n.map(r=>e.jsx(U,{row:r,selected:a.selected.includes(r.id)},r.id)),e.jsx(W,{height:a.dense?56:76,emptyRows:q(a.page,a.rowsPerPage,s.length)}),e.jsx(V,{notFound:g})]})]})]})]})]})})};function te({inputData:t,comparator:a,filters:l,dateError:d}){const{status:n,startDate:p,endDate:o}=l,m=t.map((s,i)=>[s,i]);return m.sort((s,i)=>{const b=a(s[0],i[0]);return b!==0?b:s[1]-i[1]}),t=m.map(s=>s[0]),n!=="all"&&(t=t.filter(s=>s.status===n)),d||p&&o&&(t=t.filter(s=>F(s.orderDate,p,o))),t}const ae={title:`Reports list | Dashboard - ${A.site.name}`};function ke(){const t=L({queryKey:["orders"],queryFn:async()=>{const{data:a}=await k.get(I.order.list);return a}});return t.isPending||t.isLoading?e.jsx(O,{}):t.isError?e.jsx(w,{route:h.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsxs("title",{children:[" ",ae.title]})}),e.jsx(ee,{orders:t.data})]})}export{ke as default};
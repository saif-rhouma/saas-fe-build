import{w as D,bG as v,j as e,aL as O,r as d,bM as C,S as p,I as f,bJ as j,dC as I,eq as R,eb as B,p as b,aF as F,B as x,e as y,er as k,ef as A,H as L,C as P,dM as E,dK as w}from"./index-DAC7DrKI.js";import{u as Y,E as M}from"./error-block-DySOa_eo.js";import{b as T}from"./format-number-BqWqqWdN.js";import{C as G}from"./custom-breadcrumbs-DLqq1jlX.js";import{u as N,g as H,T as q,a as z,e as K}from"./table-selected-action-DmMVDdQK.js";import{T as W}from"./table-no-data-Bjt5vEVk.js";import{T as J,a as Q,b as V,c as _}from"./table-head-custom-54sFYCX7.js";import{T as h}from"./TableCell-BaRSSNo0.js";import{T as $}from"./TextField-BemIARnN.js";import{I as U}from"./InputAdornment-Coc5CotZ.js";import{D as S}from"./DatePicker-B0W1aFhA.js";import{S as X}from"./Select-VxgK60LB.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-aWzJpCDA.js";import"./empty-content-uSXcwtCU.js";import"./FormControl-CAs0fYHm.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BgYGZs-G.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Ohl1t8N_.js";import"./FormHelperText-DDJizVQ2.js";import"./index-F5Z3hI1r.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-CNnwUfBT.js";import"./ListItem-Dtgjcfn6.js";import"./Chip-BV006SG6.js";import"./Menu-CO2UhTso.js";import"./InputBase-CinKVcWY.js";const Z=({row:t,selected:s,onViewRow:i,onSelectRow:u,onDeleteRow:o})=>{var a;D(),D(),v();const l=e.jsxs(J,{hover:!0,selected:s,children:[e.jsx(h,{children:O(t==null?void 0:t.orderDate)}),e.jsxs(h,{children:["ORD-",t==null?void 0:t.id]}),e.jsx(h,{children:(a=t==null?void 0:t.customer)==null?void 0:a.name}),e.jsx(h,{children:T(t==null?void 0:t.totalOrderAmount)||"-"}),e.jsx(h,{children:t==null?void 0:t.status})]});return e.jsx(e.Fragment,{children:l})};function ee({filters:t,onResetPage:s}){const[i,u]=d.useState("all");d.useState(C()),d.useState(C());const o=d.useCallback(n=>{s(),t.setState({name:n.target.value})},[t,s]),l=d.useCallback(n=>{s(),t.setState({status:n.target.value}),u(n.target.value)},[t,s]),a=d.useCallback(n=>{s(),t.setState({startDate:n})},[t,s]),c=d.useCallback(n=>{s(),t.setState({endDate:n})},[t,s]);return e.jsxs(p,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx($,{sx:{flexGrow:1},value:t.state.name,onChange:o,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(U,{position:"start",children:e.jsx(f,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(S,{label:"Start Date",sx:{flexGrow:1},format:"DD/MM/YYYY",value:t.state.startDate,onChange:a}),e.jsx(S,{label:"End Date",sx:{flexGrow:1},value:t.state.endDate,onChange:c,format:"DD/MM/YYYY"}),e.jsxs(X,{sx:{flexGrow:1,textTransform:"capitalize"},value:i,onChange:l,children:[e.jsx(j,{value:"all",children:"All Orders"}),e.jsx(j,{value:"InProcess",children:"Processing"}),e.jsx(j,{value:"Ready",children:"Ready To Deliver"}),e.jsx(j,{value:"Delivered",children:"Delivered"})]})]})}const te=[{id:"date",label:"Date",width:300},{id:"orderId",label:"Order Id"},{id:"customer",label:"Customer"},{id:"orderAmount",label:"Order Amount"},{id:"status",label:"Status"}],se=({orders:t})=>{const s=N({defaultOrderBy:"orderNumber"}),[i,u]=d.useState(t),o=I({name:"",status:"all",startDate:null,endDate:null}),l=R(o.state.startDate,o.state.endDate),a=re({inputData:i,comparator:H(s.order,s.orderBy),filters:o.state,dateError:l});console.log("----------><> dataFiltered",a);const c=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,n=!a.length&&c||!a.length;return e.jsx(B,{maxWidth:"xl",children:e.jsxs(p,{spacing:3,children:[e.jsx(G,{links:[{name:"Dashboard",href:b.dashboard.root},{name:"Reports",href:b.dashboard.reports.root},{name:"Order Report",href:b.dashboard.reports.order}]}),e.jsxs(F,{children:[e.jsx(ee,{filters:o,onResetPage:s.onResetPage,dateError:l}),e.jsxs(x,{sx:{position:"relative"},children:[e.jsx(q,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length}),e.jsxs(Q,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(V,{order:s.order,orderBy:s.orderBy,headLabel:te,rowCount:a.length}),e.jsxs(_,{children:[a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(r=>e.jsx(Z,{row:r,selected:s.selected.includes(r.id)},r.id)),e.jsx(z,{height:s.dense?56:76,emptyRows:K(s.page,s.rowsPerPage,a.length)}),e.jsx(W,{notFound:n})]})]})]}),e.jsx(x,{children:e.jsxs(p,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[e.jsxs(p,{spacing:1,children:[e.jsxs(x,{sx:{color:"text.secondary"},children:["Total Orders: ",a.length]}),e.jsxs(x,{sx:{color:"text.secondary"},children:["Total Order Amount:"," ",T(a.reduce((r,m)=>r+m.totalOrderAmount,0))]})]}),e.jsx(x,{children:e.jsxs(p,{direction:"row",spacing:1,children:[e.jsx(y,{variant:"contained",startIcon:e.jsx(f,{icon:"carbon:checkmark-filled"}),children:"Download Report"}),e.jsx(y,{variant:"outlined",startIcon:e.jsx(f,{icon:"carbon:checkmark-filled"}),children:"Print Report"})]})})]})})]})]})})};function re({inputData:t,comparator:s,filters:i,dateError:u}){const{status:o,name:l,startDate:a,endDate:c}=i,n=t.map((r,m)=>[r,m]);return n.sort((r,m)=>{const g=s(r[0],m[0]);return g!==0?g:r[1]-m[1]}),t=n.map(r=>r[0]),l&&(t=t.filter(r=>r.orderNumber.toLowerCase().indexOf(l.toLowerCase())!==-1||r.customer.name.toLowerCase().indexOf(l.toLowerCase())!==-1||r.customer.email.toLowerCase().indexOf(l.toLowerCase())!==-1)),o!=="all"&&(t=t.filter(r=>r.status===o)),u||a&&c&&(t=t.filter(r=>k(r.orderDate,a,c))),t}const ae={title:`Reports list | Dashboard - ${P.site.name}`};function Ee(){const t=Y({queryKey:["orders"],queryFn:async()=>{const{data:s}=await E.get(w.order.list);return s}});return t.isPending||t.isLoading?e.jsx(A,{}):t.isError?e.jsx(M,{route:b.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsxs("title",{children:[" ",ae.title]})}),e.jsx(se,{orders:t.data})]})}export{Ee as default};

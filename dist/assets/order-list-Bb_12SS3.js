import{w as D,bI as v,j as e,aN as O,r as d,bO as C,S as p,I as f,bL as j,dE as I,er as R,ed as B,p as b,aH as L,B as x,e as y,es as k,eh as A,H as E,C as F,dO as P,dM as w}from"./index-BjIn7_qX.js";import{u as Y,E as M}from"./error-block-DgIB22LQ.js";import{b as T}from"./format-number-CVePc8Zq.js";import{C as N}from"./custom-breadcrumbs-BvfCbkJS.js";import{u as G,g as H,T as z,a as q,e as V}from"./table-selected-action-n7GKjEz8.js";import{T as W}from"./table-no-data-D4XesE38.js";import{T as $,a as K,b as Q,c as _}from"./table-head-custom-BUj35xa1.js";import{T as h}from"./TableCell-CN8hPv6L.js";import{T as J}from"./TextField-DpiQLRVb.js";import{I as U}from"./InputAdornment-DyfHBPVt.js";import{D as S}from"./DatePicker-CbfV6klG.js";import{S as X}from"./Select-DuF5QBaf.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-B4RwwnIi.js";import"./empty-content-DUH3kGlt.js";import"./FormControl-7ae63LEX.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CFOghGNi.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CGBfd-SD.js";import"./FormHelperText-CzQPg626.js";import"./index-DhoXhWEB.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-Y7gFy98Q.js";import"./ListItem-Dqffwavq.js";import"./Chip-Csudtta_.js";import"./Menu-BwYh9-WP.js";import"./InputBase-B1W2ZC-C.js";const Z=({row:t,selected:s,onViewRow:i,onSelectRow:u,onDeleteRow:o})=>{var a;D(),D(),v();const l=e.jsxs($,{hover:!0,selected:s,children:[e.jsx(h,{children:O(t==null?void 0:t.orderDate)}),e.jsxs(h,{children:["ORD-",t==null?void 0:t.id]}),e.jsx(h,{children:(a=t==null?void 0:t.customer)==null?void 0:a.name}),e.jsx(h,{children:T(t==null?void 0:t.totalOrderAmount)||"-"}),e.jsx(h,{children:t==null?void 0:t.status})]});return e.jsx(e.Fragment,{children:l})};function ee({filters:t,onResetPage:s}){const[i,u]=d.useState("all");d.useState(C()),d.useState(C());const o=d.useCallback(n=>{s(),t.setState({name:n.target.value})},[t,s]),l=d.useCallback(n=>{s(),t.setState({status:n.target.value}),u(n.target.value)},[t,s]),a=d.useCallback(n=>{s(),t.setState({startDate:n})},[t,s]),c=d.useCallback(n=>{s(),t.setState({endDate:n})},[t,s]);return e.jsxs(p,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:[e.jsx(J,{sx:{flexGrow:1},value:t.state.name,onChange:o,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(U,{position:"start",children:e.jsx(f,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(S,{label:"Start Date",sx:{flexGrow:1},format:"DD/MM/YYYY",value:t.state.startDate,onChange:a}),e.jsx(S,{label:"End Date",sx:{flexGrow:1},value:t.state.endDate,onChange:c,format:"DD/MM/YYYY"}),e.jsxs(X,{sx:{flexGrow:1,textTransform:"capitalize"},value:i,onChange:l,children:[e.jsx(j,{value:"all",children:"All Orders"}),e.jsx(j,{value:"InProcess",children:"Processing"}),e.jsx(j,{value:"Ready",children:"Ready To Deliver"}),e.jsx(j,{value:"Delivered",children:"Delivered"})]})]})}const te=[{id:"date",label:"Date",width:300},{id:"orderId",label:"Order Id"},{id:"customer",label:"Customer"},{id:"orderAmount",label:"Order Amount"},{id:"status",label:"Status"}],se=({orders:t})=>{const s=G({defaultOrderBy:"orderNumber"}),[i,u]=d.useState(t),o=I({name:"",status:"all",startDate:null,endDate:null}),l=R(o.state.startDate,o.state.endDate),a=ae({inputData:i,comparator:H(s.order,s.orderBy),filters:o.state,dateError:l});console.log("----------><> dataFiltered",a);const c=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,n=!a.length&&c||!a.length;return e.jsx(B,{maxWidth:"xl",children:e.jsxs(p,{spacing:3,children:[e.jsx(N,{links:[{name:"Dashboard",href:b.dashboard.root},{name:"Reports",href:b.dashboard.reports.root},{name:"Order Report",href:b.dashboard.reports.order}]}),e.jsxs(L,{children:[e.jsx(ee,{filters:o,onResetPage:s.onResetPage,dateError:l}),e.jsxs(x,{sx:{position:"relative"},children:[e.jsx(z,{dense:s.dense,numSelected:s.selected.length,rowCount:a.length}),e.jsxs(K,{size:s.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Q,{order:s.order,orderBy:s.orderBy,headLabel:te,rowCount:a.length}),e.jsxs(_,{children:[a.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(r=>e.jsx(Z,{row:r,selected:s.selected.includes(r.id)},r.id)),e.jsx(q,{height:s.dense?56:76,emptyRows:V(s.page,s.rowsPerPage,a.length)}),e.jsx(W,{notFound:n})]})]})]}),e.jsx(x,{children:e.jsxs(p,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[e.jsxs(p,{spacing:1,children:[e.jsxs(x,{sx:{color:"text.secondary"},children:["Total Orders: ",a.length]}),e.jsxs(x,{sx:{color:"text.secondary"},children:["Total Order Amount:"," ",T(a.reduce((r,m)=>r+m.totalOrderAmount,0))]})]}),e.jsx(x,{children:e.jsxs(p,{direction:"row",spacing:1,children:[e.jsx(y,{variant:"contained",startIcon:e.jsx(f,{icon:"carbon:checkmark-filled"}),children:"Download Report"}),e.jsx(y,{variant:"outlined",startIcon:e.jsx(f,{icon:"carbon:checkmark-filled"}),children:"Print Report"})]})})]})})]})]})})},re=se;function ae({inputData:t,comparator:s,filters:i,dateError:u}){const{status:o,name:l,startDate:a,endDate:c}=i,n=t.map((r,m)=>[r,m]);return n.sort((r,m)=>{const g=s(r[0],m[0]);return g!==0?g:r[1]-m[1]}),t=n.map(r=>r[0]),l&&(t=t.filter(r=>r.orderNumber.toLowerCase().indexOf(l.toLowerCase())!==-1||r.customer.name.toLowerCase().indexOf(l.toLowerCase())!==-1||r.customer.email.toLowerCase().indexOf(l.toLowerCase())!==-1)),o!=="all"&&(t=t.filter(r=>r.status===o)),u||a&&c&&(t=t.filter(r=>k(r.orderDate,a,c))),t}const oe={title:`Reports list | Dashboard - ${F.site.name}`};function we(){const t=Y({queryKey:["orders"],queryFn:async()=>{const{data:s}=await P.get(w.order.list);return s}});return t.isPending||t.isLoading?e.jsx(A,{}):t.isError?e.jsx(M,{route:b.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsxs("title",{children:[" ",oe.title]})}),e.jsx(re,{orders:t.data})]})}export{we as default};

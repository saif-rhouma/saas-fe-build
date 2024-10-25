import{i as D,b6 as I,j as e,aH as k,r as d,bc as T,S as h,I as g,b9 as b,dd as N,ec as A,dP as E,p as y,aB as B,B as j,e2 as S,e as O,em as L,ed as F,dT as w,H as Y,C as H,dn as G,dl as M}from"./index-Blkmi4zg.js";import{u as z,E as _}from"./error-block-j3VOggr8.js";import{l as q}from"./index-gpjoIoNm.js";import{b as v}from"./format-number-BYLJRdzc.js";import{C as W}from"./custom-breadcrumbs-hNvYebPU.js";import{P as R}from"./permission-access-controller-D4h3jzk_.js";import{g as K,e as Q}from"./utils-MBUcMVfY.js";import{u as V}from"./use-table-6Wdiw2DX.js";import{T as $}from"./table-no-data-B5csQnwV.js";import{T as J}from"./table-empty-rows-BnIicbwz.js";import{T as U,a as X,b as Z,c as ee}from"./table-head-custom-C3e5Ny4W.js";import{T as te}from"./table-selected-action-jfSsh_We.js";import{T as f}from"./TableCell-gHO2nfBt.js";import{T as se}from"./TextField-ClHFnGLS.js";import{I as re}from"./InputAdornment-Mhf8ESbr.js";import{D as P}from"./DatePicker-DwlNsJux.js";import{S as ae}from"./Select-Dsko4AZ7.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-BCOh8Csq.js";import"./Checkbox-frxSvImW.js";import"./FormControl-Cq1ehgrJ.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BBPKF53u.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-sbLiSHbj.js";import"./FormHelperText-qaIx3Z7I.js";import"./index-D3feOP7M.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-C-Pa2r_f.js";import"./ListItem-ByhCeQFz.js";import"./Chip-CzDIV7yE.js";import"./Menu-Cys168vL.js";import"./InputBase-DaiJVK9f.js";const oe=({row:t,selected:s,onViewRow:c,onSelectRow:m,onDeleteRow:p})=>{var i;D(),D(),I();const r=e.jsxs(U,{hover:!0,selected:s,children:[e.jsx(f,{children:k(t==null?void 0:t.orderDate)}),e.jsx(f,{children:t==null?void 0:t.ref}),e.jsx(f,{children:(i=t==null?void 0:t.customer)==null?void 0:i.name}),e.jsx(f,{children:v(t==null?void 0:t.totalOrderAmount)||"-"}),e.jsx(f,{children:t==null?void 0:t.status})]});return e.jsx(e.Fragment,{children:r})};function ne({filters:t,onResetPage:s}){const[c,m]=d.useState("all");d.useState(T()),d.useState(T());const p=d.useCallback(n=>{s(),t.setState({name:n.target.value})},[t,s]),r=d.useCallback(n=>{s(),t.setState({status:n.target.value}),m(n.target.value)},[t,s]),i=d.useCallback(n=>{s(),t.setState({startDate:n})},[t,s]),o=d.useCallback(n=>{s(),t.setState({endDate:n})},[t,s]);return e.jsxs(h,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},className:"print-hide",children:[e.jsx(se,{sx:{flexGrow:1},value:t.state.name,onChange:p,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(re,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(P,{label:"Start Date",sx:{flexGrow:1},format:"DD/MM/YYYY",value:t.state.startDate,onChange:i}),e.jsx(P,{label:"End Date",sx:{flexGrow:1},value:t.state.endDate,onChange:o,format:"DD/MM/YYYY"}),e.jsxs(ae,{sx:{flexGrow:1,textTransform:"capitalize"},value:c,onChange:r,children:[e.jsx(b,{value:"all",children:"All Orders"}),e.jsx(b,{value:"InProcess",children:"Processing"}),e.jsx(b,{value:"Ready",children:"Ready To Deliver"}),e.jsx(b,{value:"Delivered",children:"Delivered"})]})]})}const ie=[{id:"date",label:"Date",width:140},{id:"orderId",label:"Order Id"},{id:"customer",label:"Customer"},{id:"orderAmount",label:"Order Amount"},{id:"status",label:"Status"}],le=({orders:t})=>{const s=V({defaultOrderBy:"orderNumber"}),c=d.useRef(),[m,p]=d.useState(t),r=N({name:"",status:"all",startDate:null,endDate:null}),i=A(r.state.startDate,r.state.endDate),o=de({inputData:m,comparator:K(s.order,s.orderBy),filters:r.state,dateError:i}),n=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,a=!o.length&&n||!o.length,u=q.useReactToPrint({content:()=>c.current});return e.jsx(E,{maxWidth:"xl",children:e.jsxs(h,{spacing:3,children:[e.jsx(W,{links:[{name:"Dashboard",href:y.dashboard.root},{name:"Reports",href:y.dashboard.reports.root},{name:"Order Report",href:y.dashboard.reports.order}]}),e.jsxs(B,{ref:c,className:"print-padding",children:[e.jsx(h,{justifyContent:"center",alignItems:"center",children:e.jsx("h1",{className:"print-title",children:"Order Reports"})}),e.jsx("style",{jsx:!0,children:`
            .print-title {
              display: none; /* Hide on screen */
            }

            @media print {
              .print-title {
                display: block; /* Show only when printing */
              }
              .print-hide {
                display: none; /* Hide on screen */
              }
              .print-padding {
                padding: 60px;
              }
            }
          `}),e.jsx(ne,{filters:r,onResetPage:s.onResetPage,dateError:i}),e.jsxs(j,{sx:{position:"relative"},children:[e.jsx(te,{dense:s.dense,numSelected:s.selected.length,rowCount:o.length,className:"print-hide"}),e.jsxs(X,{size:s.dense?"small":"medium",children:[e.jsx(Z,{order:s.order,orderBy:s.orderBy,headLabel:ie,rowCount:o.length}),e.jsxs(ee,{children:[o.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(l=>e.jsx(oe,{row:l,selected:s.selected.includes(l.id)},l.id)),e.jsx(J,{height:s.dense?56:76,emptyRows:Q(s.page,s.rowsPerPage,o.length)}),e.jsx($,{notFound:a})]})]})]}),e.jsx(j,{children:e.jsxs(h,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[e.jsxs(h,{spacing:1,children:[e.jsxs(j,{sx:{color:"text.secondary"},children:["Total Orders: ",o.length]}),e.jsxs(j,{sx:{color:"text.secondary"},children:["Total Order Amount:"," ",v(o.reduce((l,x)=>l+x.totalOrderAmount,0))]})]}),e.jsx(j,{children:e.jsxs(h,{direction:"row",spacing:1,className:"print-hide",children:[e.jsx(R,{permission:S.DOWNLOAD_REPORT,children:e.jsx(O,{onClick:()=>{L("plan reports",[{displayName:"Date",key:"orderDate"},{displayName:"Order Ref",key:"ref"},{displayName:"Customer",key:"name"},{displayName:"Order Amount",key:"totalOrderAmount"},{displayName:"Status",key:"status"}],o.map(x=>{var C;return{...x,name:(C=x==null?void 0:x.customer)==null?void 0:C.name}}),"Stock")},variant:"contained",startIcon:e.jsx(g,{icon:"mdi:microsoft-excel"}),children:"Download Report"})}),e.jsx(R,{permission:S.PRINT_REPORT,children:e.jsx(O,{variant:"outlined",onClick:()=>u(),startIcon:e.jsx(g,{icon:"solar:printer-minimalistic-bold"}),children:"Print Report"})})]})})]})})]})]})})};function de({inputData:t,comparator:s,filters:c,dateError:m}){const{status:p,name:r,startDate:i,endDate:o}=c,n=t.map((a,u)=>[a,u]);return n.sort((a,u)=>{const l=s(a[0],u[0]);return l!==0?l:a[1]-u[1]}),t=n.map(a=>a[0]),r&&(t=t.filter(a=>a.orderNumber.toLowerCase().indexOf(r.toLowerCase())!==-1||a.customer.name.toLowerCase().indexOf(r.toLowerCase())!==-1||a.customer.email.toLowerCase().indexOf(r.toLowerCase())!==-1)),p!=="all"&&(t=t.filter(a=>a.status===p)),m||i&&o&&(t=t.filter(a=>F(a.orderDate,i,o))),t}const ce={title:`Reports list | Dashboard - ${H.site.name}`};function Ke(){const t=z({queryKey:["orders"],queryFn:async()=>{const{data:s}=await G.get(M.order.list);return s}});return t.isPending||t.isLoading?e.jsx(w,{}):t.isError?e.jsx(_,{route:y.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsxs("title",{children:[" ",ce.title]})}),e.jsx(le,{orders:t.data})]})}export{Ke as default};

import{o as C,bO as I,j as e,aJ as k,r as d,bU as T,S as h,I as g,bR as b,dz as A,eo as N,e8 as E,p as y,aD as B,B as j,em as S,e as O,eA as L,ep as F,ec as w,H as Y,C as H,dJ as G,dH as M}from"./index-CcYGUVHj.js";import{u as z,E as _}from"./error-block-DrLwzfMU.js";import{l as q}from"./index-G5UN0OAB.js";import{b as v}from"./format-number-DKjUSt8e.js";import{C as J}from"./custom-breadcrumbs-B2pKwILD.js";import{P as R}from"./permission-access-controller-Ci2e19YC.js";import{u as W,g as K,T as Q,a as U,e as V}from"./table-selected-action-DY6ZnUX7.js";import{T as $}from"./table-no-data-xD53Bfnu.js";import{T as X,a as Z,b as ee,c as te}from"./table-head-custom-DEIjwtVm.js";import{T as f}from"./TableCell-YX8_wKqf.js";import{T as se}from"./TextField-Q8D-fe1P.js";import{I as re}from"./InputAdornment--gMbc1oW.js";import{D as P}from"./DatePicker-MBb6QCnS.js";import{S as ae}from"./Select-oUaPpSxi.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-DgQwk_ps.js";import"./empty-content-CC0bVKs6.js";import"./FormControl-DyEi2am2.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-C9X7_uSi.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Ct8Q-9i0.js";import"./FormHelperText-CaS0BGUe.js";import"./index-SZ6SJdRJ.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-Blcxs__o.js";import"./ListItem-DhWHRhwD.js";import"./Chip-BF8Po0b7.js";import"./Menu-DMwTpGo6.js";import"./InputBase-D4Zcsm26.js";const oe=({row:t,selected:s,onViewRow:c,onSelectRow:m,onDeleteRow:p})=>{var i;C(),C(),I();const r=e.jsxs(X,{hover:!0,selected:s,children:[e.jsx(f,{children:k(t==null?void 0:t.orderDate)}),e.jsx(f,{children:t==null?void 0:t.ref}),e.jsx(f,{children:(i=t==null?void 0:t.customer)==null?void 0:i.name}),e.jsx(f,{children:v(t==null?void 0:t.totalOrderAmount)||"-"}),e.jsx(f,{children:t==null?void 0:t.status})]});return e.jsx(e.Fragment,{children:r})};function ne({filters:t,onResetPage:s}){const[c,m]=d.useState("all");d.useState(T()),d.useState(T());const p=d.useCallback(n=>{s(),t.setState({name:n.target.value})},[t,s]),r=d.useCallback(n=>{s(),t.setState({status:n.target.value}),m(n.target.value)},[t,s]),i=d.useCallback(n=>{s(),t.setState({startDate:n})},[t,s]),o=d.useCallback(n=>{s(),t.setState({endDate:n})},[t,s]);return e.jsxs(h,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},className:"print-hide",children:[e.jsx(se,{sx:{flexGrow:1},value:t.state.name,onChange:p,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(re,{position:"start",children:e.jsx(g,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(P,{label:"Start Date",sx:{flexGrow:1},format:"DD/MM/YYYY",value:t.state.startDate,onChange:i}),e.jsx(P,{label:"End Date",sx:{flexGrow:1},value:t.state.endDate,onChange:o,format:"DD/MM/YYYY"}),e.jsxs(ae,{sx:{flexGrow:1,textTransform:"capitalize"},value:c,onChange:r,children:[e.jsx(b,{value:"all",children:"All Orders"}),e.jsx(b,{value:"InProcess",children:"Processing"}),e.jsx(b,{value:"Ready",children:"Ready To Deliver"}),e.jsx(b,{value:"Delivered",children:"Delivered"})]})]})}const ie=[{id:"date",label:"Date",width:140},{id:"orderId",label:"Order Id"},{id:"customer",label:"Customer"},{id:"orderAmount",label:"Order Amount"},{id:"status",label:"Status"}],le=({orders:t})=>{const s=W({defaultOrderBy:"orderNumber"}),c=d.useRef(),[m,p]=d.useState(t),r=A({name:"",status:"all",startDate:null,endDate:null}),i=N(r.state.startDate,r.state.endDate),o=de({inputData:m,comparator:K(s.order,s.orderBy),filters:r.state,dateError:i}),n=!!r.state.name||r.state.status!=="all"||!!r.state.startDate&&!!r.state.endDate,a=!o.length&&n||!o.length,u=q.useReactToPrint({content:()=>c.current});return e.jsx(E,{maxWidth:"xl",children:e.jsxs(h,{spacing:3,children:[e.jsx(J,{links:[{name:"Dashboard",href:y.dashboard.root},{name:"Reports",href:y.dashboard.reports.root},{name:"Order Report",href:y.dashboard.reports.order}]}),e.jsxs(B,{ref:c,className:"print-padding",children:[e.jsx(h,{justifyContent:"center",alignItems:"center",children:e.jsx("h1",{className:"print-title",children:"Order Reports"})}),e.jsx("style",{jsx:!0,children:`
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
          `}),e.jsx(ne,{filters:r,onResetPage:s.onResetPage,dateError:i}),e.jsxs(j,{sx:{position:"relative"},children:[e.jsx(Q,{dense:s.dense,numSelected:s.selected.length,rowCount:o.length,className:"print-hide"}),e.jsxs(Z,{size:s.dense?"small":"medium",children:[e.jsx(ee,{order:s.order,orderBy:s.orderBy,headLabel:ie,rowCount:o.length}),e.jsxs(te,{children:[o.slice(s.page*s.rowsPerPage,s.page*s.rowsPerPage+s.rowsPerPage).map(l=>e.jsx(oe,{row:l,selected:s.selected.includes(l.id)},l.id)),e.jsx(U,{height:s.dense?56:76,emptyRows:V(s.page,s.rowsPerPage,o.length)}),e.jsx($,{notFound:a})]})]})]}),e.jsx(j,{children:e.jsxs(h,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[e.jsxs(h,{spacing:1,children:[e.jsxs(j,{sx:{color:"text.secondary"},children:["Total Orders: ",o.length]}),e.jsxs(j,{sx:{color:"text.secondary"},children:["Total Order Amount:"," ",v(o.reduce((l,x)=>l+x.totalOrderAmount,0))]})]}),e.jsx(j,{children:e.jsxs(h,{direction:"row",spacing:1,className:"print-hide",children:[e.jsx(R,{permission:S.DOWNLOAD_REPORT,children:e.jsx(O,{onClick:()=>{L("plan reports",[{displayName:"Date",key:"orderDate"},{displayName:"Order Ref",key:"ref"},{displayName:"Customer",key:"name"},{displayName:"Order Amount",key:"totalOrderAmount"},{displayName:"Status",key:"status"}],o.map(x=>{var D;return{...x,name:(D=x==null?void 0:x.customer)==null?void 0:D.name}}),"Stock")},variant:"contained",startIcon:e.jsx(g,{icon:"mdi:microsoft-excel"}),children:"Download Report"})}),e.jsx(R,{permission:S.PRINT_REPORT,children:e.jsx(O,{variant:"outlined",onClick:()=>u(),startIcon:e.jsx(g,{icon:"solar:printer-minimalistic-bold"}),children:"Print Report"})})]})})]})})]})]})})};function de({inputData:t,comparator:s,filters:c,dateError:m}){const{status:p,name:r,startDate:i,endDate:o}=c,n=t.map((a,u)=>[a,u]);return n.sort((a,u)=>{const l=s(a[0],u[0]);return l!==0?l:a[1]-u[1]}),t=n.map(a=>a[0]),r&&(t=t.filter(a=>a.orderNumber.toLowerCase().indexOf(r.toLowerCase())!==-1||a.customer.name.toLowerCase().indexOf(r.toLowerCase())!==-1||a.customer.email.toLowerCase().indexOf(r.toLowerCase())!==-1)),p!=="all"&&(t=t.filter(a=>a.status===p)),m||i&&o&&(t=t.filter(a=>F(a.orderDate,i,o))),t}const ce={title:`Reports list | Dashboard - ${H.site.name}`};function _e(){const t=z({queryKey:["orders"],queryFn:async()=>{const{data:s}=await G.get(M.order.list);return s}});return t.isPending||t.isLoading?e.jsx(w,{}):t.isError?e.jsx(_,{route:y.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsxs("title",{children:[" ",ce.title]})}),e.jsx(le,{orders:t.data})]})}export{_e as default};

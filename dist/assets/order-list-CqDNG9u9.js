import{j as e,d0 as v,r as d,aW as T,S as h,I as y,aS as g,de as I,ec as N,dP as k,p as b,cY as A,B as j,e3 as D,e as P,eo as E,ed as w,dT as B,H as L,C as F,dp as Y,dm as H}from"./index-BUkc7Fsf.js";import{u as G,E as M}from"./error-block-BMnFuAQR.js";import{l as z}from"./index-Dag_Owh_.js";import{b as O}from"./format-number-DclRACXZ.js";import{C as W}from"./custom-breadcrumbs-CL0q_6e2.js";import{P as S}from"./permission-access-controller-D8InZjLn.js";import{g as _,e as q}from"./utils-MBUcMVfY.js";import{u as K}from"./use-table-D-rmPlGf.js";import{T as Q}from"./table-no-data-L_vtbHNw.js";import{T as V}from"./table-empty-rows-CnKwt_g5.js";import{T as $,a as J,b as U,c as X}from"./table-head-custom-BG1xHw-X.js";import{T as Z}from"./table-selected-action-CtrtJ4bi.js";import{T as ee}from"./table-pagination-custom-CRcGgWz1.js";import{T as f}from"./TableCell-pnBacSd4.js";import{T as te}from"./TextField-borq0bL5.js";import{I as re}from"./InputAdornment-Cb7Fe9N5.js";import{D as R}from"./DatePicker-BA7hh0CT.js";import{S as se}from"./Select-BqjrNlWW.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-B0vrpYbF.js";import"./Checkbox-CBb5w9Zu.js";import"./TablePagination-YMeSIc_D.js";import"./KeyboardArrowRight-BHo19vWg.js";import"./LastPage-CgQNJj_q.js";import"./InputBase-eA2S-h6o.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-CXIRs7Ob.js";import"./FormControl-Da6RRZ3T.js";import"./InputLabel-eL3TaEhp.js";import"./FormLabel-ClNwb4vl.js";import"./FormHelperText-FWMNt2lu.js";import"./index-DIvWYC7g.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-Cp4PxtSn.js";import"./ListItem-VlWOepYx.js";import"./Chip-CIa4MnwU.js";import"./Menu-DnxcDa3h.js";const ae=({row:t,selected:r,onViewRow:c,onSelectRow:m,onDeleteRow:p})=>{var i;const s=e.jsxs($,{hover:!0,selected:r,children:[e.jsx(f,{children:v(t==null?void 0:t.orderDate)}),e.jsx(f,{children:t==null?void 0:t.ref}),e.jsx(f,{children:(i=t==null?void 0:t.customer)==null?void 0:i.name}),e.jsx(f,{children:O(t==null?void 0:t.totalOrderAmount)||"-"}),e.jsx(f,{children:t==null?void 0:t.status})]});return e.jsx(e.Fragment,{children:s})};function oe({filters:t,onResetPage:r}){const[c,m]=d.useState("all");d.useState(T()),d.useState(T());const p=d.useCallback(n=>{r(),t.setState({name:n.target.value})},[t,r]),s=d.useCallback(n=>{r(),t.setState({status:n.target.value}),m(n.target.value)},[t,r]),i=d.useCallback(n=>{r(),t.setState({startDate:n})},[t,r]),o=d.useCallback(n=>{r(),t.setState({endDate:n})},[t,r]);return e.jsxs(h,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},className:"print-hide",children:[e.jsx(te,{sx:{flexGrow:1},value:t.state.name,onChange:p,placeholder:"Search customer or order number...",InputProps:{startAdornment:e.jsx(re,{position:"start",children:e.jsx(y,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(R,{label:"Start Date",sx:{flexGrow:1},format:"DD/MM/YYYY",value:t.state.startDate,onChange:i}),e.jsx(R,{label:"End Date",sx:{flexGrow:1},value:t.state.endDate,onChange:o,format:"DD/MM/YYYY"}),e.jsxs(se,{sx:{flexGrow:1,textTransform:"capitalize"},value:c,onChange:s,children:[e.jsx(g,{value:"all",children:"All Orders"}),e.jsx(g,{value:"InProcess",children:"Processing"}),e.jsx(g,{value:"Ready",children:"Ready To Deliver"}),e.jsx(g,{value:"Delivered",children:"Delivered"})]})]})}const ne=[{id:"date",label:"Date",width:140},{id:"orderId",label:"Order Id"},{id:"customer",label:"Customer"},{id:"orderAmount",label:"Order Amount"},{id:"status",label:"Status"}],ie=({orders:t})=>{const r=K({defaultOrderBy:"orderNumber"}),c=d.useRef(),[m,p]=d.useState(t),s=I({name:"",status:"all",startDate:null,endDate:null}),i=N(s.state.startDate,s.state.endDate),o=le({inputData:m,comparator:_(r.order,r.orderBy),filters:s.state,dateError:i}),n=!!s.state.name||s.state.status!=="all"||!!s.state.startDate&&!!s.state.endDate,a=!o.length&&n||!o.length,u=z.useReactToPrint({content:()=>c.current});return e.jsx(k,{maxWidth:"xl",children:e.jsxs(h,{spacing:3,children:[e.jsx(W,{links:[{name:"Dashboard",href:b.dashboard.root},{name:"Reports",href:b.dashboard.reports.root},{name:"Order Report",href:b.dashboard.reports.order}]}),e.jsxs(A,{ref:c,className:"print-padding",children:[e.jsx(h,{justifyContent:"center",alignItems:"center",children:e.jsx("h1",{className:"print-title",children:"Order Reports"})}),e.jsx("style",{jsx:!0,children:`
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
          `}),e.jsx(oe,{filters:s,onResetPage:r.onResetPage,dateError:i}),e.jsxs(j,{sx:{position:"relative"},children:[e.jsx(Z,{dense:r.dense,numSelected:r.selected.length,rowCount:o.length,className:"print-hide"}),e.jsxs(J,{size:r.dense?"small":"medium",children:[e.jsx(U,{order:r.order,orderBy:r.orderBy,headLabel:ne,rowCount:o.length}),e.jsxs(X,{children:[o.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage).map(l=>e.jsx(ae,{row:l,selected:r.selected.includes(l.id)},l.id)),e.jsx(V,{height:r.dense?56:76,emptyRows:q(r.page,r.rowsPerPage,o.length)}),e.jsx(Q,{notFound:a})]})]})]}),e.jsx(ee,{className:"print-hide",page:r.page,count:o.length,rowsPerPage:r.rowsPerPage,onPageChange:r.onChangePage,onRowsPerPageChange:r.onChangeRowsPerPage}),e.jsx(j,{children:e.jsxs(h,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[e.jsxs(h,{spacing:1,children:[e.jsxs(j,{sx:{color:"text.secondary"},children:["Total Orders: ",o.length]}),e.jsxs(j,{sx:{color:"text.secondary"},children:["Total Order Amount:"," ",O(o.reduce((l,x)=>l+x.totalOrderAmount,0))]})]}),e.jsx(j,{children:e.jsxs(h,{direction:"row",spacing:1,className:"print-hide",children:[e.jsx(S,{permission:D.DOWNLOAD_REPORT,children:e.jsx(P,{onClick:()=>{E("plan reports",[{displayName:"Date",key:"orderDate"},{displayName:"Order Ref",key:"ref"},{displayName:"Customer",key:"name"},{displayName:"Order Amount",key:"totalOrderAmount"},{displayName:"Status",key:"status"}],o.map(x=>{var C;return{...x,name:(C=x==null?void 0:x.customer)==null?void 0:C.name}}),"Stock")},variant:"contained",startIcon:e.jsx(y,{icon:"mdi:microsoft-excel"}),children:"Download Report"})}),e.jsx(S,{permission:D.PRINT_REPORT,children:e.jsx(P,{variant:"outlined",onClick:()=>u(),startIcon:e.jsx(y,{icon:"solar:printer-minimalistic-bold"}),children:"Print Report"})})]})})]})})]})]})})};function le({inputData:t,comparator:r,filters:c,dateError:m}){const{status:p,name:s,startDate:i,endDate:o}=c,n=t.map((a,u)=>[a,u]);return n.sort((a,u)=>{const l=r(a[0],u[0]);return l!==0?l:a[1]-u[1]}),t=n.map(a=>a[0]),s&&(t=t.filter(a=>a.orderNumber.toLowerCase().indexOf(s.toLowerCase())!==-1||a.customer.name.toLowerCase().indexOf(s.toLowerCase())!==-1||a.customer.email.toLowerCase().indexOf(s.toLowerCase())!==-1)),p!=="all"&&(t=t.filter(a=>a.status===p)),m||i&&o&&(t=t.filter(a=>w(a.orderDate,i,o))),t}const de={title:`Reports list | Dashboard - ${F.site.name}`};function Je(){const t=G({queryKey:["orders"],queryFn:async()=>{const{data:r}=await Y.get(H.order.list);return r}});return t.isPending||t.isLoading?e.jsx(B,{}):t.isError?e.jsx(M,{route:b.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsxs("title",{children:[" ",de.title]})}),e.jsx(ie,{orders:t.data})]})}export{Je as default};

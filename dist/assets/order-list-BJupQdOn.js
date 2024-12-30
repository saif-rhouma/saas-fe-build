import{j as e,d0 as k,r as l,dn as O,ab as R,S as h,I as y,a7 as f,de as A,e3 as w,dQ as E,p as T,cY as B,B as b,e4 as P,e as D,eo as L,ed as F,dU as H,H as M,C as Y,dq as $,dm as G}from"./index-88qAwG8P.js";import{u as q,E as z}from"./error-block-BTff90qR.js";import{l as _}from"./index-BBBOFUXR.js";import{b as I}from"./format-number-B8FPsWIV.js";import{C as Q}from"./custom-breadcrumbs-x7W5GMPl.js";import{P as S}from"./permission-access-controller-BVvbpBzt.js";import{g as W,e as K}from"./utils-MBUcMVfY.js";import{u as U}from"./use-table-BYPgfP9k.js";import{T as V}from"./table-no-data-wFoKraSE.js";import{T as J}from"./table-empty-rows-6krMqYw2.js";import{T as X,a as Z,b as ee,c as te}from"./table-head-custom-g2OgtrHv.js";import{T as re}from"./table-selected-action-DnALz1xy.js";import{T as se}from"./table-pagination-custom-Ds9-Dw8y.js";import{T as j}from"./TableCell-Cl8UZGxf.js";import{T as ae}from"./TextField-CQpihH7F.js";import{I as oe}from"./InputAdornment-Bg-m_z4_.js";import{D as v}from"./DatePicker-C1aTSbY2.js";import{S as ne}from"./Select-DFC-Q2QB.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./empty-content-vgDCQT8r.js";import"./Checkbox-Cpc8f1GH.js";import"./TablePagination-CrnuwEMO.js";import"./KeyboardArrowRight-fE7_2VJ7.js";import"./LastPage-B6xWbdc0.js";import"./InputBase-DD8qHu7J.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormControlLabel-ts_MkIWE.js";import"./FormControl-BXGEHd-f.js";import"./InputLabel-B0kOUcWA.js";import"./FormLabel-Ck5_RgM9.js";import"./FormHelperText-DA7jizKd.js";import"./index-CySZofTa.js";import"./visuallyHidden-Dan1xhjv.js";import"./DialogContent-F9o-_CVT.js";import"./ListItem-Bt-kWpW8.js";import"./Chip-yDeOg34u.js";import"./Menu-BDUaDfAf.js";const le=({row:t,selected:r,onViewRow:d,onSelectRow:c,onDeleteRow:n})=>{var o;const a=e.jsxs(X,{hover:!0,selected:r,children:[e.jsx(j,{children:k(t==null?void 0:t.orderDate)}),e.jsx(j,{children:t==null?void 0:t.ref}),e.jsx(j,{children:(o=t==null?void 0:t.customer)==null?void 0:o.name}),e.jsx(j,{children:I(t==null?void 0:t.totalOrderAmount)||"-"}),e.jsx(j,{children:t==null?void 0:t.status})]});return e.jsx(e.Fragment,{children:a})};function de({filters:t,onResetPage:r}){const[d,c]=l.useState("all"),{t:n}=O("reports");l.useState(R()),l.useState(R());const a=l.useCallback(s=>{r(),t.setState({name:s.target.value})},[t,r]),o=l.useCallback(s=>{r(),t.setState({status:s.target.value}),c(s.target.value)},[t,r]),m=l.useCallback(s=>{r(),t.setState({startDate:s})},[t,r]),i=l.useCallback(s=>{r(),t.setState({endDate:s})},[t,r]);return e.jsxs(h,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},className:"print-hide",children:[e.jsx(ae,{sx:{flexGrow:1},value:t.state.name,onChange:a,placeholder:n("orderReports.table.tableToolbar.searchPlaceholder"),InputProps:{startAdornment:e.jsx(oe,{position:"start",children:e.jsx(y,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),e.jsx(v,{label:n("orderReports.table.tableToolbar.startDate"),sx:{flexGrow:1},format:"DD/MM/YYYY",value:t.state.startDate,onChange:m}),e.jsx(v,{label:n("orderReports.table.tableToolbar.endDate"),sx:{flexGrow:1},value:t.state.endDate,onChange:i,format:"DD/MM/YYYY"}),e.jsxs(ne,{sx:{flexGrow:1,textTransform:"capitalize"},value:d,onChange:o,children:[e.jsx(f,{value:"all",children:n("orderReports.table.tableToolbar.selectMenu.allOrders")}),e.jsx(f,{value:"InProcess",children:n("orderReports.table.tableToolbar.selectMenu.processing")}),e.jsx(f,{value:"Ready",children:n("orderReports.table.tableToolbar.selectMenu.readyToDeliver")}),e.jsx(f,{value:"Delivered",children:n("orderReports.table.tableToolbar.selectMenu.delivered")})]})]})}const ie=({orders:t})=>{const r=U({defaultOrderBy:"orderNumber"}),d=l.useRef(),[c,n]=l.useState(t),{t:a}=O("reports"),o=A({name:"",status:"all",startDate:null,endDate:null}),m=[{id:"date",label:`${a("orderReports.table.tableHeader.date")}`,width:140},{id:"orderId",label:`${a("orderReports.table.tableHeader.orderId")}`},{id:"customer",label:`${a("orderReports.table.tableHeader.customer")}`},{id:"orderAmount",label:`${a("orderReports.table.tableHeader.orderAmount")}`},{id:"status",label:`${a("orderReports.table.tableHeader.status")}`}],i=w(o.state.startDate,o.state.endDate),s=ce({inputData:c,comparator:W(r.order,r.orderBy),filters:o.state,dateError:i}),p=!!o.state.name||o.state.status!=="all"||!!o.state.startDate&&!!o.state.endDate,g=!s.length&&p||!s.length,N=_.useReactToPrint({content:()=>d.current});return e.jsx(E,{maxWidth:"xl",children:e.jsxs(h,{spacing:3,children:[e.jsx(Q,{links:[{name:`${a("orderReports.breadCrumbsPageRootTitle")}`,href:T.dashboard.root},{name:`${a("orderReports.breadCrumbsParentPageTitle")}`,href:T.dashboard.reports.root},{name:`${a("orderReports.breadCrumbsPageTitle")}`,href:T.dashboard.reports.order}]}),e.jsxs(B,{ref:d,className:"print-padding",children:[e.jsx(h,{justifyContent:"center",alignItems:"center",children:e.jsx("h1",{className:"print-title",children:a("orderReports.breadCrumbsParentPageTitle")})}),e.jsx("style",{jsx:!0,children:`
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
          `}),e.jsx(de,{filters:o,onResetPage:r.onResetPage,dateError:i}),e.jsxs(b,{sx:{position:"relative"},children:[e.jsx(re,{dense:r.dense,numSelected:r.selected.length,rowCount:s.length,className:"print-hide"}),e.jsxs(Z,{size:r.dense?"small":"medium",children:[e.jsx(ee,{order:r.order,orderBy:r.orderBy,headLabel:m,rowCount:s.length}),e.jsxs(te,{children:[s.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage).map(u=>e.jsx(le,{row:u,selected:r.selected.includes(u.id)},u.id)),e.jsx(J,{height:r.dense?56:76,emptyRows:K(r.page,r.rowsPerPage,s.length)}),e.jsx(V,{notFound:g})]})]})]}),e.jsx(se,{className:"print-hide",page:r.page,count:s.length,rowsPerPage:r.rowsPerPage,onPageChange:r.onChangePage,onRowsPerPageChange:r.onChangeRowsPerPage}),e.jsx(b,{children:e.jsxs(h,{direction:"row",justifyContent:"space-between",sx:{p:3,typography:"body2"},children:[e.jsxs(h,{spacing:1,children:[e.jsxs(b,{sx:{color:"text.secondary"},children:[a("orderReports.totalOrders")," ",s.length]}),e.jsxs(b,{sx:{color:"text.secondary"},children:[a("orderReports.totalAmount"),I(s.reduce((u,x)=>u+x.totalOrderAmount,0))]})]}),e.jsx(b,{children:e.jsxs(h,{direction:"row",spacing:1,className:"print-hide",children:[e.jsx(S,{permission:P.DOWNLOAD_REPORT,children:e.jsx(D,{onClick:()=>{L("plan reports",[{displayName:"Date",key:"orderDate"},{displayName:"Order Ref",key:"ref"},{displayName:"Customer",key:"name"},{displayName:"Order Amount",key:"totalOrderAmount"},{displayName:"Status",key:"status"}],s.map(x=>{var C;return{...x,name:(C=x==null?void 0:x.customer)==null?void 0:C.name}}),"Stock")},variant:"contained",startIcon:e.jsx(y,{icon:"mdi:microsoft-excel"}),children:a("orderReports.downloadReport")})}),e.jsx(S,{permission:P.PRINT_REPORT,children:e.jsx(D,{variant:"outlined",onClick:()=>N(),startIcon:e.jsx(y,{icon:"solar:printer-minimalistic-bold"}),children:a("orderReports.printReport")})})]})})]})})]})]})})};function ce({inputData:t,comparator:r,filters:d,dateError:c}){const{status:n,name:a,startDate:o,endDate:m}=d,i=t.map((s,p)=>[s,p]);return i.sort((s,p)=>{const g=r(s[0],p[0]);return g!==0?g:s[1]-p[1]}),t=i.map(s=>s[0]),a&&(t=t.filter(s=>s.orderNumber.toLowerCase().indexOf(a.toLowerCase())!==-1||s.customer.name.toLowerCase().indexOf(a.toLowerCase())!==-1||s.customer.email.toLowerCase().indexOf(a.toLowerCase())!==-1)),n!=="all"&&(t=t.filter(s=>s.status===n)),c||o&&m&&(t=t.filter(s=>F(s.orderDate,o,m))),t}const me={title:`Reports list | Dashboard - ${Y.site.name}`};function Xe(){const t=q({queryKey:["orders"],queryFn:async()=>{const{data:r}=await $.get(G.order.list);return r}});return t.isPending||t.isLoading?e.jsx(H,{}):t.isError?e.jsx(z,{route:T.dashboard.reports.root}):e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsxs("title",{children:[" ",me.title]})}),e.jsx(ie,{orders:t.data})]})}export{Xe as default};

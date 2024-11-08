import{p as x,j as e,eo as l,C as r,d7 as R,I,aw as k,bR as u,e7 as g,r as c,aW as T,T as b,cx as $,B as o,aQ as F,fx as L,d0 as M,H as B}from"./index-DSZ8-SnN.js";import{b as E,a as W,c as G,f as H,d as O}from"./format-number-Cz1FSQLM.js";import{C as V}from"./custom-breadcrumbs-D_ovYyL8.js";import{C as z}from"./component-hero-jcNtHv0F.js";import{S as Q}from"./component-template-DwZt6HKj.js";import{R as U,a as q}from"./RadioGroup-B-VQ3Ex7.js";import{F as A}from"./FormControlLabel-DcdZLABF.js";import{T as J}from"./TablePagination-DMx1QqWY.js";import{D as K}from"./DatePicker-CHiyzFIc.js";import"./CardHeader-anFXzk9d.js";import"./CardContent-BDnQgvR7.js";import"./FormGroup-BoA-oXkm.js";import"./formControlState-Dq1zat_P.js";import"./KeyboardArrowRight-ySj1HR2l.js";import"./LastPage-DNd_MO8z.js";import"./TableCell-DSOEY65A.js";import"./Select-bvm1T7cr.js";import"./Menu-WNpJDxC0.js";import"./utils-DoM3o7-Q.js";import"./InputBase-DUSf-v3M.js";import"./index-CHAbpX0m.js";import"./FormControl-DVwuE-Z3.js";import"./InputLabel-Dt93HXfK.js";import"./FormLabel-D8PgMfa3.js";import"./FormHelperText-CAtOlLkP.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-DXnGVnKc.js";import"./InputAdornment-DQTsYq75.js";import"./DialogContent-9Yn0EsJP.js";import"./ListItem-CKvXkhKm.js";import"./Chip-BxDt4Lxe.js";function X(t){return[{subheader:t("subheader"),items:[{title:t("app"),path:x.dashboard.permission,icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-invoice.svg`})},{title:t("travel"),path:"#disabled",icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-tour.svg`})},{title:t("job"),path:"#label",icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-job.svg`}),info:e.jsx(R,{color:"info",variant:"inverted",startIcon:e.jsx(I,{icon:"solar:bell-bing-bold-duotone"}),children:"NEW"})},{title:t("blog.title"),path:"#caption",icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-blog.svg`}),caption:t("blog.caption")},{title:t("user"),path:"https://www.google.com/",icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-user.svg`})},{title:t("invoice"),path:x.dashboard.blank,icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-invoice.svg`})}]}]}const j=k(t=>e.jsx(u,{variant:"outlined",...t}))(({theme:t})=>({...t.typography.body2,display:"flex",gap:t.spacing(1),flexDirection:"column",padding:t.spacing(3),borderRadius:t.shape.borderRadius*2}));function Y(){const{t,onChangeLang:n,currentLang:i}=g(),[d,s]=c.useState(T("2022-04-17")),[m,h]=c.useState(2),[v,f]=c.useState(10),{t:y}=g("navbar"),P=X(y),C=c.useCallback((a,D)=>{h(D)},[]),N=c.useCallback(a=>{f(parseInt(a.target.value,10)),h(0)},[]),S=e.jsxs(u,{sx:{m:2,pb:1,pt:2,px:2,right:0,zIndex:1,top:"25%",position:"fixed",borderRadius:1.5,bgcolor:"background.paper",boxShadow:a=>a.customShadows.dropdown},children:[e.jsx(b,{variant:"subtitle2",sx:{mb:1,color:"text.sexcondary"},children:"Langs"}),e.jsx(U,{value:i==null?void 0:i.value,onChange:a=>{n(a.target.value)},children:$.map(a=>e.jsx(A,{value:a.value,label:a.label,control:e.jsx(q,{})},a.value))})]}),w=[{name:"Flexible",component:e.jsxs("div",{children:[e.jsxs(o,{sx:{gap:1,mb:2,display:"flex",typography:"h3",alignItems:"center"},children:[e.jsx(F,{code:i.countryCode}),t("demo.lang")]}),e.jsx(b,{children:t("demo.description")})]})},{name:"System (MUI)",component:e.jsxs("div",{children:[e.jsx(o,{sx:{typography:"subtitle2"},children:"Supports other components including:"}),e.jsxs(o,{component:"ul",sx:{mt:1,mb:3,pl:3,typography:"body2",listStyleType:"disc"},children:[e.jsx(o,{component:"li",children:" Data Grid"}),e.jsx(o,{component:"li",children:" Date Pickers"})]}),e.jsx(J,{component:"div",count:100,page:m,onPageChange:C,rowsPerPage:v,onRowsPerPageChange:N,sx:{borderRadius:2,border:a=>`solid 1px ${a.vars.palette.divider}`}})]})},{name:"Nav",component:e.jsx(u,{variant:"outlined",sx:{p:2,width:1,maxWidth:320,borderRadius:2},children:e.jsx(L,{data:P})})},{name:"Numbers",component:e.jsx("div",{children:e.jsxs(o,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(p,{title:"Currency",type:"currency",data:[2217.01,247598.18,677606.08,473444751e-2,847144209e-2,void 0,null,NaN,0]}),e.jsx(p,{title:"Percent",type:"percent",data:[1.7,17.67,28.1,41.3,91.16,void 0,null,NaN,0]}),e.jsx(p,{title:"Shorten",type:"shorten",data:[719,719.63,3683.72,558340751e-2,334558340751e-2,void 0,null,NaN,0]}),e.jsx(p,{title:"Data",type:"data",data:[719,719.63,3683.72,558340751e-2,334558340751e-2,void 0,null,NaN,0]}),e.jsx(p,{title:"Number",type:"number",data:[451,451.82,1081.62,27921.9,600668.81,758705486e-2,void 0,null,NaN,0]}),e.jsxs(j,{children:[e.jsx(K,{label:"Input",value:d,onChange:a=>s(a),slotProps:{textField:{fullWidth:!0}}}),e.jsxs(o,{sx:{mt:2,typography:"subtitle2"},children:["Output: ",M(new Date)]})]})]})})}];return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx(V,{heading:"Multi language",links:[{name:"Components",href:x.components},{name:"Multi language"}],moreLink:["https://react.i18next.com","https://mui.com/guides/localization/#main-content"]})}),S,e.jsx(Q,{data:w})]})}function p({data:t,type:n,title:i}){const d=s=>s===void 0?"undefined":s===null?"null":String(s)==="NaN"?"NaN":s;return e.jsxs(j,{children:[e.jsx(o,{sx:{typography:"subtitle2"},children:i}),t.map((s,m)=>e.jsxs(o,{children:[e.jsx(o,{component:"span",sx:{color:"text.primary"},children:d(s)}),e.jsxs(o,{component:"span",sx:{color:"text.secondary"},children:[" => ",n==="currency"&&E(s)||n==="percent"&&W(s)||n==="shorten"&&G(s)||n==="data"&&H(s)||n==="number"&&O(s)]})]},String(m)))]})}const Z={title:`Multi language | Components - ${r.site.name}`};function ke(){return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("title",{children:[" ",Z.title]})}),e.jsx(Y,{})]})}export{ke as default};

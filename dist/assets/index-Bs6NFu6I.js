import{p as u,j as e,er as l,C as n,d7 as R,I,aw as k,bR as x,fv as g,r as c,aW as T,T as b,cx as $,B as o,aQ as F,fw as L,d0 as M,H as B}from"./index-z3fnkpoB.js";import{b as E,a as W,c as G,f as H,d as O}from"./format-number-DSavMuMU.js";import{C as V}from"./custom-breadcrumbs-amwibr4j.js";import{C as z}from"./component-hero-BJCwNRk4.js";import{S as Q}from"./component-template-Bp6EQ_hr.js";import{R as U,a as q}from"./RadioGroup-B4loAmcf.js";import{F as A}from"./FormControlLabel-DnJDcr7S.js";import{T as J}from"./TablePagination-Cw9TijaD.js";import{D as K}from"./DatePicker-SChZoizn.js";import"./CardHeader-Bgb3Zq_G.js";import"./CardContent-BWH8Hsze.js";import"./FormGroup-BdHgFYf7.js";import"./formControlState-Dq1zat_P.js";import"./KeyboardArrowRight-ah785XZm.js";import"./LastPage-B8VOrBow.js";import"./TableCell-CZRS_F_G.js";import"./Select-Dog87Ggh.js";import"./Menu-Bx_-ENI-.js";import"./utils-DoM3o7-Q.js";import"./InputBase-GNP6DFYA.js";import"./index-B4W8hBtR.js";import"./FormControl-B2PHWm2c.js";import"./InputLabel-BIO8ukMt.js";import"./FormLabel-iDu77X9X.js";import"./FormHelperText-DTr2rmP9.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-BQ3kGvPv.js";import"./InputAdornment-D86Tm1Uk.js";import"./DialogContent-BY0XZ4fZ.js";import"./ListItem-BWP6CNNU.js";import"./Chip-CZ2BSjs8.js";function X(t){return[{subheader:t("subheader"),items:[{title:t("app"),path:u.dashboard.permission,icon:e.jsx(l,{src:`${n.site.basePath}/assets/icons/navbar/ic-invoice.svg`})},{title:t("travel"),path:"#disabled",icon:e.jsx(l,{src:`${n.site.basePath}/assets/icons/navbar/ic-tour.svg`})},{title:t("job"),path:"#label",icon:e.jsx(l,{src:`${n.site.basePath}/assets/icons/navbar/ic-job.svg`}),info:e.jsx(R,{color:"info",variant:"inverted",startIcon:e.jsx(I,{icon:"solar:bell-bing-bold-duotone"}),children:"NEW"})},{title:t("blog.title"),path:"#caption",icon:e.jsx(l,{src:`${n.site.basePath}/assets/icons/navbar/ic-blog.svg`}),caption:t("blog.caption")},{title:t("user"),path:"https://www.google.com/",icon:e.jsx(l,{src:`${n.site.basePath}/assets/icons/navbar/ic-user.svg`})},{title:t("invoice"),path:u.dashboard.blank,icon:e.jsx(l,{src:`${n.site.basePath}/assets/icons/navbar/ic-invoice.svg`})}]}]}const j=k(t=>e.jsx(x,{variant:"outlined",...t}))(({theme:t})=>({...t.typography.body2,display:"flex",gap:t.spacing(1),flexDirection:"column",padding:t.spacing(3),borderRadius:t.shape.borderRadius*2}));function Y(){const{t,onChangeLang:r,currentLang:i}=g(),[d,s]=c.useState(T("2022-04-17")),[m,h]=c.useState(2),[v,f]=c.useState(10),{t:y}=g("navbar"),P=X(y),C=c.useCallback((a,D)=>{h(D)},[]),N=c.useCallback(a=>{f(parseInt(a.target.value,10)),h(0)},[]),S=e.jsxs(x,{sx:{m:2,pb:1,pt:2,px:2,right:0,zIndex:1,top:"25%",position:"fixed",borderRadius:1.5,bgcolor:"background.paper",boxShadow:a=>a.customShadows.dropdown},children:[e.jsx(b,{variant:"subtitle2",sx:{mb:1,color:"text.sexcondary"},children:"Langs"}),e.jsx(U,{value:i==null?void 0:i.value,onChange:a=>{r(a.target.value)},children:$.map(a=>e.jsx(A,{value:a.value,label:a.label,control:e.jsx(q,{})},a.value))})]}),w=[{name:"Flexible",component:e.jsxs("div",{children:[e.jsxs(o,{sx:{gap:1,mb:2,display:"flex",typography:"h3",alignItems:"center"},children:[e.jsx(F,{code:i.countryCode}),t("demo.lang")]}),e.jsx(b,{children:t("demo.description")})]})},{name:"System (MUI)",component:e.jsxs("div",{children:[e.jsx(o,{sx:{typography:"subtitle2"},children:"Supports other components including:"}),e.jsxs(o,{component:"ul",sx:{mt:1,mb:3,pl:3,typography:"body2",listStyleType:"disc"},children:[e.jsx(o,{component:"li",children:" Data Grid"}),e.jsx(o,{component:"li",children:" Date Pickers"})]}),e.jsx(J,{component:"div",count:100,page:m,onPageChange:C,rowsPerPage:v,onRowsPerPageChange:N,sx:{borderRadius:2,border:a=>`solid 1px ${a.vars.palette.divider}`}})]})},{name:"Nav",component:e.jsx(x,{variant:"outlined",sx:{p:2,width:1,maxWidth:320,borderRadius:2},children:e.jsx(L,{data:P})})},{name:"Numbers",component:e.jsx("div",{children:e.jsxs(o,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(p,{title:"Currency",type:"currency",data:[2217.01,247598.18,677606.08,473444751e-2,847144209e-2,void 0,null,NaN,0]}),e.jsx(p,{title:"Percent",type:"percent",data:[1.7,17.67,28.1,41.3,91.16,void 0,null,NaN,0]}),e.jsx(p,{title:"Shorten",type:"shorten",data:[719,719.63,3683.72,558340751e-2,334558340751e-2,void 0,null,NaN,0]}),e.jsx(p,{title:"Data",type:"data",data:[719,719.63,3683.72,558340751e-2,334558340751e-2,void 0,null,NaN,0]}),e.jsx(p,{title:"Number",type:"number",data:[451,451.82,1081.62,27921.9,600668.81,758705486e-2,void 0,null,NaN,0]}),e.jsxs(j,{children:[e.jsx(K,{label:"Input",value:d,onChange:a=>s(a),slotProps:{textField:{fullWidth:!0}}}),e.jsxs(o,{sx:{mt:2,typography:"subtitle2"},children:["Output: ",M(new Date)]})]})]})})}];return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx(V,{heading:"Multi language",links:[{name:"Components",href:u.components},{name:"Multi language"}],moreLink:["https://react.i18next.com","https://mui.com/guides/localization/#main-content"]})}),S,e.jsx(Q,{data:w})]})}function p({data:t,type:r,title:i}){const d=s=>s===void 0?"undefined":s===null?"null":String(s)==="NaN"?"NaN":s;return e.jsxs(j,{children:[e.jsx(o,{sx:{typography:"subtitle2"},children:i}),t.map((s,m)=>e.jsxs(o,{children:[e.jsx(o,{component:"span",sx:{color:"text.primary"},children:d(s)}),e.jsxs(o,{component:"span",sx:{color:"text.secondary"},children:[" => ",r==="currency"&&E(s)||r==="percent"&&W(s)||r==="shorten"&&G(s)||r==="data"&&H(s)||r==="number"&&O(s)]})]},String(m)))]})}const Z={title:`Multi language | Components - ${n.site.name}`};function ke(){return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("title",{children:[" ",Z.title]})}),e.jsx(Y,{})]})}export{ke as default};

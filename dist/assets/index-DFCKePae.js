import{p as u,j as e,g as l,C as r,du as R,I,aS as k,aB as x,fF as g,r as c,bM as F,T as b,d8 as T,B as o,bH as $,fG as L,aL as M,H as B}from"./index-lMp9zap6.js";import{b as E,f as G,c as H,a as O,d as V}from"./format-number-BW6JEF9q.js";import{C as W}from"./custom-breadcrumbs-CnRCretL.js";import{C as z}from"./component-hero-Dnf8NE5K.js";import{S as U}from"./component-template-CUrlzMRX.js";import{R as q,a as A}from"./RadioGroup-C-GnO1ca.js";import{F as J}from"./FormControlLabel-CSqTNcaw.js";import{T as K}from"./TablePagination-Dir7BHGy.js";import{D as Q}from"./DatePicker-CRaT7_Tx.js";import"./CardHeader-s6sY6NkO.js";import"./CardContent-43agVJaZ.js";import"./FormGroup-BE8TyzSB.js";import"./formControlState-Dq1zat_P.js";import"./LastPage-B3GbPSnl.js";import"./TableCell-ljoaX5oi.js";import"./Select-DE7_tqxX.js";import"./Menu-Di83eYAm.js";import"./utils-DoM3o7-Q.js";import"./InputBase-D6UR9yYG.js";import"./index-KeOEaw8h.js";import"./FormControl-BFlCQpvi.js";import"./InputLabel-D2FT-Pcv.js";import"./FormLabel-CKyhTT_V.js";import"./FormHelperText-CiWaMPMf.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-BEm0Gfgz.js";import"./InputAdornment-CznJJWQj.js";import"./DialogContent-B0tqVN_s.js";import"./ListItem-Eefms6HN.js";import"./Chip-lc0vODcu.js";function X(t){return[{subheader:t("subheader"),items:[{title:t("app"),path:u.dashboard.permission,icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-invoice.svg`})},{title:t("travel"),path:"#disabled",icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-tour.svg`})},{title:t("job"),path:"#label",icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-job.svg`}),info:e.jsx(R,{color:"info",variant:"inverted",startIcon:e.jsx(I,{icon:"solar:bell-bing-bold-duotone"}),children:"NEW"})},{title:t("blog.title"),path:"#caption",icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-blog.svg`}),caption:t("blog.caption")},{title:t("user"),path:"https://www.google.com/",icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-user.svg`})},{title:t("invoice"),path:u.dashboard.blank,icon:e.jsx(l,{src:`${r.site.basePath}/assets/icons/navbar/ic-invoice.svg`})}]}]}const j=k(t=>e.jsx(x,{variant:"outlined",...t}))(({theme:t})=>({...t.typography.body2,display:"flex",gap:t.spacing(1),flexDirection:"column",padding:t.spacing(3),borderRadius:t.shape.borderRadius*2}));function Y(){const{t,onChangeLang:n,currentLang:i}=g(),[d,s]=c.useState(F("2022-04-17")),[m,h]=c.useState(2),[v,f]=c.useState(10),{t:y}=g("navbar"),P=X(y),C=c.useCallback((a,D)=>{h(D)},[]),N=c.useCallback(a=>{f(parseInt(a.target.value,10)),h(0)},[]),S=e.jsxs(x,{sx:{m:2,pb:1,pt:2,px:2,right:0,zIndex:1,top:"25%",position:"fixed",borderRadius:1.5,bgcolor:"background.paper",boxShadow:a=>a.customShadows.dropdown},children:[e.jsx(b,{variant:"subtitle2",sx:{mb:1,color:"text.sexcondary"},children:"Langs"}),e.jsx(q,{value:i==null?void 0:i.value,onChange:a=>{n(a.target.value)},children:T.map(a=>e.jsx(J,{value:a.value,label:a.label,control:e.jsx(A,{})},a.value))})]}),w=[{name:"Flexible",component:e.jsxs("div",{children:[e.jsxs(o,{sx:{gap:1,mb:2,display:"flex",typography:"h3",alignItems:"center"},children:[e.jsx($,{code:i.countryCode}),t("demo.lang")]}),e.jsx(b,{children:t("demo.description")})]})},{name:"System (MUI)",component:e.jsxs("div",{children:[e.jsx(o,{sx:{typography:"subtitle2"},children:"Supports other components including:"}),e.jsxs(o,{component:"ul",sx:{mt:1,mb:3,pl:3,typography:"body2",listStyleType:"disc"},children:[e.jsx(o,{component:"li",children:" Data Grid"}),e.jsx(o,{component:"li",children:" Date Pickers"})]}),e.jsx(K,{component:"div",count:100,page:m,onPageChange:C,rowsPerPage:v,onRowsPerPageChange:N,sx:{borderRadius:2,border:a=>`solid 1px ${a.vars.palette.divider}`}})]})},{name:"Nav",component:e.jsx(x,{variant:"outlined",sx:{p:2,width:1,maxWidth:320,borderRadius:2},children:e.jsx(L,{data:P})})},{name:"Numbers",component:e.jsx("div",{children:e.jsxs(o,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(p,{title:"Currency",type:"currency",data:[2217.01,247598.18,677606.08,473444751e-2,847144209e-2,void 0,null,NaN,0]}),e.jsx(p,{title:"Percent",type:"percent",data:[1.7,17.67,28.1,41.3,91.16,void 0,null,NaN,0]}),e.jsx(p,{title:"Shorten",type:"shorten",data:[719,719.63,3683.72,558340751e-2,334558340751e-2,void 0,null,NaN,0]}),e.jsx(p,{title:"Data",type:"data",data:[719,719.63,3683.72,558340751e-2,334558340751e-2,void 0,null,NaN,0]}),e.jsx(p,{title:"Number",type:"number",data:[451,451.82,1081.62,27921.9,600668.81,758705486e-2,void 0,null,NaN,0]}),e.jsxs(j,{children:[e.jsx(Q,{label:"Input",value:d,onChange:a=>s(a),slotProps:{textField:{fullWidth:!0}}}),e.jsxs(o,{sx:{mt:2,typography:"subtitle2"},children:["Output: ",M(new Date)]})]})]})})}];return e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx(W,{heading:"Multi language",links:[{name:"Components",href:u.components},{name:"Multi language"}],moreLink:["https://react.i18next.com","https://mui.com/guides/localization/#main-content"]})}),S,e.jsx(U,{data:w})]})}function p({data:t,type:n,title:i}){const d=s=>s===void 0?"undefined":s===null?"null":String(s)==="NaN"?"NaN":s;return e.jsxs(j,{children:[e.jsx(o,{sx:{typography:"subtitle2"},children:i}),t.map((s,m)=>e.jsxs(o,{children:[e.jsx(o,{component:"span",sx:{color:"text.primary"},children:d(s)}),e.jsxs(o,{component:"span",sx:{color:"text.secondary"},children:[" => ",n==="currency"&&E(s)||n==="percent"&&G(s)||n==="shorten"&&H(s)||n==="data"&&O(s)||n==="number"&&V(s)]})]},String(m)))]})}const Z={title:`Multi language | Components - ${r.site.name}`};function Ie(){return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:e.jsxs("title",{children:[" ",Z.title]})}),e.jsx(Y,{})]})}export{Ie as default};

import{b3 as S,b4 as w,aw as A,T as p,ay as M,r as l,aC as W,aD as I,j as e,aA as k,aE as B,aF as G,i as u,e as o,B as d,cJ as f,A as y,I as b,aT as v,aS as h,aV as R,eA as D,eB as L,e6 as P,l as E,am as U,p as O,H as V,C as N}from"./index-CeoumMXa.js";import{C as H}from"./custom-breadcrumbs-ngxVXzzx.js";import{a as x,b as j,D as g}from"./DialogContent-lL6v-LR1.js";import{D as m}from"./DialogTitle-DLappBwE.js";import{T as _}from"./TextField-z3Q2rwEm.js";import{F as q}from"./FormControl-BFUuTpvQ.js";import{I as $}from"./InputLabel-BN-i6Vxq.js";import{S as z}from"./Select-DbrC784k.js";import{F as J}from"./FormControlLabel-D1f6UQW5.js";import{C as Y}from"./component-hero-l5ma9eZu.js";import{C as K,a as c}from"./component-block-BrE1jzNC.js";import"./FormHelperText-NhuMVC6U.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-D-qsWjCe.js";import"./Menu-CT9abzpD.js";import"./InputBase-BzFRFGp-.js";function Q(n){return w("MuiDialogContentText",n)}S("MuiDialogContentText",["root"]);const X=["children","className"],Z=n=>{const{classes:s}=n,i=G({root:["root"]},Q,s);return k({},s,i)},ee=A(p,{shouldForwardProp:n=>M(n)||n==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(n,s)=>s.root})({}),ne=l.forwardRef(function(s,r){const i=W({props:s,name:"MuiDialogContentText"}),{className:t}=i,a=I(i,X),C=Z(a);return e.jsx(ee,k({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:a,className:B(C.root,t)},i,{classes:C}))});function se(){const n=u();return e.jsxs("div",{children:[e.jsx(o,{variant:"outlined",color:"warning",onClick:n.onTrue,children:"Form Dialogs"}),e.jsxs(x,{open:n.value,onClose:n.onFalse,children:[e.jsx(m,{children:"Subscribe"}),e.jsxs(j,{children:[e.jsx(p,{sx:{mb:3},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.jsx(_,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email address"})]}),e.jsxs(g,{children:[e.jsx(o,{onClick:n.onFalse,variant:"outlined",color:"inherit",children:"Cancel"}),e.jsx(o,{onClick:n.onFalse,variant:"contained",children:"Subscribe"})]})]})]})}function oe(){const n=u();return e.jsxs(e.Fragment,{children:[e.jsx(o,{color:"info",variant:"outlined",onClick:n.onTrue,children:"Open alert dialog"}),e.jsxs(x,{open:n.value,onClose:n.onFalse,children:[e.jsx(m,{children:"Use Google's location service?"}),e.jsx(j,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),e.jsxs(g,{children:[e.jsx(o,{variant:"outlined",onClick:n.onFalse,children:"Disagree"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}function ie(){const n=u(),[s,r]=l.useState("paper"),i=l.useCallback(a=>()=>{n.onTrue(),r(a)},[n]),t=l.useRef(null);return l.useEffect(()=>{if(n.value){const{current:a}=t;a&&a.focus()}},[n.value]),e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:i("paper"),sx:{mr:2},children:"scroll=paper"}),e.jsx(o,{variant:"outlined",onClick:i("body"),children:"scroll=body"}),e.jsxs(x,{open:n.value,onClose:n.onFalse,scroll:s,children:[e.jsx(m,{sx:{pb:2},children:"Subscribe"}),e.jsx(j,{dividers:s==="paper",children:e.jsx(ne,{ref:t,tabIndex:-1,children:[...new Array(50)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})}),e.jsxs(g,{children:[e.jsx(o,{onClick:n.onFalse,children:"Cancel"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,children:"Subscribe"})]})]})]})}const T=["username@gmail.com","user02@gmail.com"];function le(){const n=u(),[s,r]=l.useState(T[1]),i=l.useCallback(t=>{n.onFalse(),r(t)},[n]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:n.onTrue,children:"Open simple dialog"}),e.jsxs(p,{variant:"subtitle1",children:["Selected: ",s]}),e.jsxs(x,{open:n.value,onClose:()=>i(s),children:[e.jsx(m,{children:"Set backup account"}),e.jsxs(d,{component:"ul",children:[T.map(t=>e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsxs(f,{onClick:()=>i(t),children:[e.jsx(y,{sx:{mr:2,color:"info.lighter",bgcolor:"info.darker"},children:e.jsx(b,{icon:"solar:user-rounded-bold"})}),e.jsx(v,{primary:t})]})},t)),e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsxs(f,{autoFocus:!0,onClick:()=>i("addAccount"),children:[e.jsx(y,{sx:{mr:2},children:e.jsx(b,{icon:"mingcute:add-line"})}),e.jsx(v,{primary:"Add account"})]})})]})]})]})}function te(){const n=u(),[s,r]=l.useState(!0),[i,t]=l.useState("sm"),a=l.useCallback(F=>{t(F.target.value)},[]),C=l.useCallback(F=>{r(F.target.checked)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:n.onTrue,children:"Max width dialog"}),e.jsxs(x,{open:n.value,maxWidth:i,onClose:n.onFalse,fullWidth:s,children:[e.jsx(m,{children:"Optional sizes"}),e.jsxs(j,{children:[e.jsx(p,{sx:{color:"text.secondary"},children:"You can set my maximum width and whether to adapt or not."}),e.jsxs(d,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[e.jsxs(q,{sx:{my:3,minWidth:160},children:[e.jsx($,{htmlFor:"max-width-label",children:"maxWidth"}),e.jsxs(z,{autoFocus:!0,value:i,onChange:a,label:"maxWidth",inputProps:{id:"max-width-label"},children:[e.jsx(h,{value:!1,children:"false"}),e.jsx(h,{value:"xs",children:"xs"}),e.jsx(h,{value:"sm",children:"sm"}),e.jsx(h,{value:"md",children:"md"}),e.jsx(h,{value:"lg",children:"lg"}),e.jsx(h,{value:"xl",children:"xl"})]})]}),e.jsx(J,{control:e.jsx(R,{checked:s,onChange:C}),label:"Full width",sx:{mt:1}})]})]}),e.jsx(g,{children:e.jsx(o,{onClick:n.onFalse,variant:"contained",children:"Close"})})]})]})}const ae=l.forwardRef((n,s)=>e.jsx(D,{direction:"up",ref:s,...n}));function re(){const n=u();return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",color:"error",onClick:n.onTrue,children:"Full screen dialogs"}),e.jsxs(x,{fullScreen:!0,open:n.value,onClose:n.onFalse,TransitionComponent:ae,children:[e.jsx(L,{position:"relative",color:"default",children:e.jsxs(P,{children:[e.jsx(E,{color:"inherit",edge:"start",onClick:n.onFalse,children:e.jsx(b,{icon:"mingcute:close-line"})}),e.jsx(p,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),e.jsx(o,{autoFocus:!0,color:"inherit",variant:"contained",onClick:n.onFalse,children:"Save"})]})}),e.jsxs(d,{component:"ul",children:[e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsx(f,{children:e.jsx(v,{primary:"Phone ringtone",secondary:"Titania"})})}),e.jsx(U,{}),e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsx(f,{children:e.jsx(v,{primary:"Default notification ringtone",secondary:"Tethys"})})})]})]})]})}const ce=l.forwardRef((n,s)=>e.jsx(D,{direction:"up",ref:s,...n}));function de(){const n=u();return e.jsxs("div",{children:[e.jsx(o,{variant:"outlined",color:"success",onClick:n.onTrue,children:"Transitions dialogs"}),e.jsxs(x,{keepMounted:!0,open:n.value,TransitionComponent:ce,onClose:n.onFalse,children:[e.jsx(m,{children:"Use Google's location service?"}),e.jsx(j,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),e.jsxs(g,{children:[e.jsx(o,{variant:"outlined",onClick:n.onFalse,children:"Disagree"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}function ue(){return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsx(H,{heading:"Dialog",links:[{name:"Components",href:O.components},{name:"Dialog"}],moreLink:["https://mui.com/components/dialogs"]})}),e.jsxs(K,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}},children:[e.jsx(c,{title:"Simple",children:e.jsx(le,{})}),e.jsx(c,{title:"Alerts",children:e.jsx(oe,{})}),e.jsx(c,{title:"Transitions",children:e.jsx(de,{})}),e.jsx(c,{title:"Form",children:e.jsx(se,{})}),e.jsx(c,{title:"Full Screen",children:e.jsx(re,{})}),e.jsx(c,{title:"Max width dialog",children:e.jsx(te,{})}),e.jsx(c,{title:"Scrolling content dialogs",children:e.jsx(ie,{})})]})]})}const xe={title:`Dialog | MUI - ${N.site.name}`};function Me(){return e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsxs("title",{children:[" ",xe.title]})}),e.jsx(ue,{})]})}export{Me as default};
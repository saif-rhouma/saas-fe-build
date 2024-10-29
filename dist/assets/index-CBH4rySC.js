import{bk as S,bl as w,aO as W,T as p,aQ as M,r as i,aU as A,aV as I,j as e,aS as k,aW as G,aX as B,i as u,e as o,B as d,aw as f,A as y,I as b,aG as v,b8 as h,ba as R,ew as D,ex as L,eg as P,l as U,am as E,p as O,H as V,C as N}from"./index-Cb6aSJqI.js";import{C as H}from"./custom-breadcrumbs-k2LFOW06.js";import{a as x,b as j,D as g}from"./DialogContent-CSEM2EB2.js";import{D as m}from"./DialogTitle-DEoYoKxf.js";import{T as _}from"./TextField-DQXcR5as.js";import{F as q}from"./FormControl-BIuepxap.js";import{I as $}from"./InputLabel-BHzQjcru.js";import{S as z}from"./Select-CfChxtbn.js";import{F as Q}from"./FormControlLabel-CI_VXRKb.js";import{C as X}from"./component-hero-BZXVmynV.js";import{C as Y,a as c}from"./component-block-O3tX8buv.js";import"./FormHelperText-BO4BDf2D.js";import"./formControlState-Dq1zat_P.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-Bb0ljwLc.js";import"./Menu-BgA5ob5m.js";import"./InputBase-4YzQn0tJ.js";function J(n){return w("MuiDialogContentText",n)}S("MuiDialogContentText",["root"]);const K=["children","className"],Z=n=>{const{classes:s}=n,l=B({root:["root"]},J,s);return k({},s,l)},ee=W(p,{shouldForwardProp:n=>M(n)||n==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(n,s)=>s.root})({}),ne=i.forwardRef(function(s,r){const l=A({props:s,name:"MuiDialogContentText"}),{className:t}=l,a=I(l,K),C=Z(a);return e.jsx(ee,k({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:a,className:G(C.root,t)},l,{classes:C}))});function se(){const n=u();return e.jsxs("div",{children:[e.jsx(o,{variant:"outlined",color:"warning",onClick:n.onTrue,children:"Form Dialogs"}),e.jsxs(x,{open:n.value,onClose:n.onFalse,children:[e.jsx(m,{children:"Subscribe"}),e.jsxs(j,{children:[e.jsx(p,{sx:{mb:3},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.jsx(_,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email address"})]}),e.jsxs(g,{children:[e.jsx(o,{onClick:n.onFalse,variant:"outlined",color:"inherit",children:"Cancel"}),e.jsx(o,{onClick:n.onFalse,variant:"contained",children:"Subscribe"})]})]})]})}function oe(){const n=u();return e.jsxs(e.Fragment,{children:[e.jsx(o,{color:"info",variant:"outlined",onClick:n.onTrue,children:"Open alert dialog"}),e.jsxs(x,{open:n.value,onClose:n.onFalse,children:[e.jsx(m,{children:"Use Google's location service?"}),e.jsx(j,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),e.jsxs(g,{children:[e.jsx(o,{variant:"outlined",onClick:n.onFalse,children:"Disagree"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}function le(){const n=u(),[s,r]=i.useState("paper"),l=i.useCallback(a=>()=>{n.onTrue(),r(a)},[n]),t=i.useRef(null);return i.useEffect(()=>{if(n.value){const{current:a}=t;a&&a.focus()}},[n.value]),e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:l("paper"),sx:{mr:2},children:"scroll=paper"}),e.jsx(o,{variant:"outlined",onClick:l("body"),children:"scroll=body"}),e.jsxs(x,{open:n.value,onClose:n.onFalse,scroll:s,children:[e.jsx(m,{sx:{pb:2},children:"Subscribe"}),e.jsx(j,{dividers:s==="paper",children:e.jsx(ne,{ref:t,tabIndex:-1,children:[...new Array(50)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})}),e.jsxs(g,{children:[e.jsx(o,{onClick:n.onFalse,children:"Cancel"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,children:"Subscribe"})]})]})]})}const T=["username@gmail.com","user02@gmail.com"];function ie(){const n=u(),[s,r]=i.useState(T[1]),l=i.useCallback(t=>{n.onFalse(),r(t)},[n]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:n.onTrue,children:"Open simple dialog"}),e.jsxs(p,{variant:"subtitle1",children:["Selected: ",s]}),e.jsxs(x,{open:n.value,onClose:()=>l(s),children:[e.jsx(m,{children:"Set backup account"}),e.jsxs(d,{component:"ul",children:[T.map(t=>e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsxs(f,{onClick:()=>l(t),children:[e.jsx(y,{sx:{mr:2,color:"info.lighter",bgcolor:"info.darker"},children:e.jsx(b,{icon:"solar:user-rounded-bold"})}),e.jsx(v,{primary:t})]})},t)),e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsxs(f,{autoFocus:!0,onClick:()=>l("addAccount"),children:[e.jsx(y,{sx:{mr:2},children:e.jsx(b,{icon:"mingcute:add-line"})}),e.jsx(v,{primary:"Add account"})]})})]})]})]})}function te(){const n=u(),[s,r]=i.useState(!0),[l,t]=i.useState("sm"),a=i.useCallback(F=>{t(F.target.value)},[]),C=i.useCallback(F=>{r(F.target.checked)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",onClick:n.onTrue,children:"Max width dialog"}),e.jsxs(x,{open:n.value,maxWidth:l,onClose:n.onFalse,fullWidth:s,children:[e.jsx(m,{children:"Optional sizes"}),e.jsxs(j,{children:[e.jsx(p,{sx:{color:"text.secondary"},children:"You can set my maximum width and whether to adapt or not."}),e.jsxs(d,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[e.jsxs(q,{sx:{my:3,minWidth:160},children:[e.jsx($,{htmlFor:"max-width-label",children:"maxWidth"}),e.jsxs(z,{autoFocus:!0,value:l,onChange:a,label:"maxWidth",inputProps:{id:"max-width-label"},children:[e.jsx(h,{value:!1,children:"false"}),e.jsx(h,{value:"xs",children:"xs"}),e.jsx(h,{value:"sm",children:"sm"}),e.jsx(h,{value:"md",children:"md"}),e.jsx(h,{value:"lg",children:"lg"}),e.jsx(h,{value:"xl",children:"xl"})]})]}),e.jsx(Q,{control:e.jsx(R,{checked:s,onChange:C}),label:"Full width",sx:{mt:1}})]})]}),e.jsx(g,{children:e.jsx(o,{onClick:n.onFalse,variant:"contained",children:"Close"})})]})]})}const ae=i.forwardRef((n,s)=>e.jsx(D,{direction:"up",ref:s,...n}));function re(){const n=u();return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"outlined",color:"error",onClick:n.onTrue,children:"Full screen dialogs"}),e.jsxs(x,{fullScreen:!0,open:n.value,onClose:n.onFalse,TransitionComponent:ae,children:[e.jsx(L,{position:"relative",color:"default",children:e.jsxs(P,{children:[e.jsx(U,{color:"inherit",edge:"start",onClick:n.onFalse,children:e.jsx(b,{icon:"mingcute:close-line"})}),e.jsx(p,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),e.jsx(o,{autoFocus:!0,color:"inherit",variant:"contained",onClick:n.onFalse,children:"Save"})]})}),e.jsxs(d,{component:"ul",children:[e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsx(f,{children:e.jsx(v,{primary:"Phone ringtone",secondary:"Titania"})})}),e.jsx(E,{}),e.jsx(d,{component:"li",sx:{display:"flex"},children:e.jsx(f,{children:e.jsx(v,{primary:"Default notification ringtone",secondary:"Tethys"})})})]})]})]})}const ce=i.forwardRef((n,s)=>e.jsx(D,{direction:"up",ref:s,...n}));function de(){const n=u();return e.jsxs("div",{children:[e.jsx(o,{variant:"outlined",color:"success",onClick:n.onTrue,children:"Transitions dialogs"}),e.jsxs(x,{keepMounted:!0,open:n.value,TransitionComponent:ce,onClose:n.onFalse,children:[e.jsx(m,{children:"Use Google's location service?"}),e.jsx(j,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),e.jsxs(g,{children:[e.jsx(o,{variant:"outlined",onClick:n.onFalse,children:"Disagree"}),e.jsx(o,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}function ue(){return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx(H,{heading:"Dialog",links:[{name:"Components",href:O.components},{name:"Dialog"}],moreLink:["https://mui.com/components/dialogs"]})}),e.jsxs(Y,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}},children:[e.jsx(c,{title:"Simple",children:e.jsx(ie,{})}),e.jsx(c,{title:"Alerts",children:e.jsx(oe,{})}),e.jsx(c,{title:"Transitions",children:e.jsx(de,{})}),e.jsx(c,{title:"Form",children:e.jsx(se,{})}),e.jsx(c,{title:"Full Screen",children:e.jsx(re,{})}),e.jsx(c,{title:"Max width dialog",children:e.jsx(te,{})}),e.jsx(c,{title:"Scrolling content dialogs",children:e.jsx(le,{})})]})]})}const xe={title:`Dialog | MUI - ${N.site.name}`};function Me(){return e.jsxs(e.Fragment,{children:[e.jsx(V,{children:e.jsxs("title",{children:[" ",xe.title]})}),e.jsx(ue,{})]})}export{Me as default};

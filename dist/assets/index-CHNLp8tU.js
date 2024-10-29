import{j as e,B as p,T as r,S as s,d7 as b,ba as g,am as h,e as j,I as n,i as v,r as u,au as f,aG as w,f as P,ay as m,H as C,C as S}from"./index-Cb6aSJqI.js";import{P as I}from"./payment-new-card-dialog--Z4yxT15.js";import{T as c}from"./TextField-DQXcR5as.js";import"./DialogContent-CSEM2EB2.js";import"./DialogTitle-DEoYoKxf.js";import"./InputAdornment-B3lMmCet.js";import"./FormControl-BIuepxap.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BHzQjcru.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-Bb0ljwLc.js";import"./Select-CfChxtbn.js";import"./Menu-BgA5ob5m.js";import"./InputBase-4YzQn0tJ.js";import"./FormHelperText-BO4BDf2D.js";function T({sx:t,...i}){const l=e.jsxs(s,{direction:"row",justifyContent:"flex-end",children:[e.jsx(r,{variant:"h4",children:"$"}),e.jsx(r,{variant:"h2",children:"9.99"}),e.jsx(r,{component:"span",sx:{ml:1,alignSelf:"center",typography:"body2",color:"text.disabled"},children:"/ mo"})]});return e.jsxs(p,{sx:{p:5,borderRadius:2,bgcolor:"background.neutral",...t},...i,children:[e.jsx(r,{variant:"h6",sx:{mb:5},children:"Summary"}),e.jsxs(s,{spacing:2.5,children:[e.jsxs(s,{direction:"row",justifyContent:"space-between",children:[e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Subscription"}),e.jsx(b,{color:"error",children:"PREMIUM"})]}),e.jsxs(s,{direction:"row",justifyContent:"space-between",children:[e.jsx(r,{variant:"body2",sx:{color:"text.secondary"},children:"Billed monthly"}),e.jsx(g,{defaultChecked:!0})]}),l,e.jsx(h,{sx:{borderStyle:"dashed"}}),e.jsxs(s,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(r,{variant:"subtitle1",children:"Total billed"}),e.jsx(r,{variant:"subtitle1",children:"$9.99*"})]}),e.jsx(h,{sx:{borderStyle:"dashed"}})]}),e.jsx(r,{component:"div",variant:"caption",sx:{color:"text.secondary",mt:1},children:"* Plus applicable taxes"}),e.jsx(j,{fullWidth:!0,size:"large",variant:"contained",sx:{mt:5,mb:3},children:"Upgrade plan"}),e.jsxs(s,{alignItems:"center",spacing:1,children:[e.jsxs(s,{direction:"row",alignItems:"center",spacing:1,children:[e.jsx(n,{icon:"solar:shield-check-bold",sx:{color:"success.main"}}),e.jsx(r,{variant:"subtitle2",children:"Secure credit card payment"})]}),e.jsx(r,{variant:"caption",sx:{color:"text.disabled",textAlign:"center"},children:"This is a secure 128-bit SSL encrypted payment"})]})]})}const k=[{value:"paypal",label:"Paypal"},{value:"credit",label:"Credit / Debit card"}],A=[{value:"visa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"visa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"mastercard",label:"**** **** **** 4545 - Cole Armstrong"}];function B(){const t=v(),[i,l]=u.useState("paypal"),x=u.useCallback(a=>{l(a)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{spacing:5,children:[e.jsx(r,{variant:"h6",children:"Payment method"}),e.jsx(s,{spacing:3,children:k.map(a=>e.jsx(O,{option:a,selected:i===a.value,isCredit:a.value==="credit"&&i==="credit",onOpen:t.onTrue,onClick:()=>x(a.value)},a.label))})]}),e.jsx(I,{open:t.value,onClose:t.onFalse})]})}function O({option:t,selected:i,isCredit:l,onOpen:x,...a}){const{value:d,label:y}=t;return e.jsxs(f,{variant:"outlined",sx:{p:2.5,cursor:"pointer",...i&&{boxShadow:o=>`0 0 0 2px ${o.vars.palette.text.primary}`}},...a,children:[e.jsx(w,{primary:e.jsxs(s,{direction:"row",alignItems:"center",children:[e.jsx(n,{icon:i?"eva:checkmark-circle-2-fill":"eva:radio-button-off-fill",width:24,sx:{mr:2,color:i?"primary.main":"text.secondary"}}),e.jsx(p,{component:"span",sx:{flexGrow:1},children:y}),e.jsxs(s,{spacing:1,direction:"row",alignItems:"center",children:[d==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:"logos:mastercard",width:24}),",",e.jsx(n,{icon:"logos:visa",width:24})]}),d==="paypal"&&e.jsx(n,{icon:"logos:paypal",width:24}),d==="cash"&&e.jsx(n,{icon:"solar:wad-of-money-bold",width:24})]})]}),primaryTypographyProps:{typography:"subtitle2"}}),l&&e.jsxs(s,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(c,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:A.map(o=>e.jsx("option",{value:o.value,children:o.label},o.value))}),e.jsx(j,{size:"small",color:"primary",startIcon:e.jsx(n,{icon:"mingcute:add-line"}),onClick:x,children:"Add new card"})]})]},d)}function F(){return e.jsxs("div",{children:[e.jsx(r,{variant:"h6",children:"Billing address"}),e.jsxs(s,{spacing:3,mt:5,children:[e.jsx(c,{fullWidth:!0,label:"Person name"}),e.jsx(c,{fullWidth:!0,label:"Phone number"}),e.jsx(c,{fullWidth:!0,label:"Email"}),e.jsx(c,{fullWidth:!0,label:"Address"})]})]})}function M(){return e.jsxs(P,{sx:{pt:5,pb:10},children:[e.jsx(r,{variant:"h3",align:"center",sx:{mb:2},children:"Let's finish powering you up!"}),e.jsx(r,{align:"center",sx:{color:"text.secondary",mb:5},children:"Professional plan is right for you."}),e.jsxs(m,{container:!0,rowSpacing:{xs:5,md:0},columnSpacing:{xs:0,md:5},children:[e.jsx(m,{xs:12,md:8,children:e.jsxs(p,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{p:{md:5},borderRadius:2,border:t=>({md:`dashed 1px ${t.vars.palette.divider}`})},children:[e.jsx(F,{}),e.jsx(B,{})]})}),e.jsx(m,{xs:12,md:4,children:e.jsx(T,{})})]})]})}const W={title:`Payment - ${S.site.name}`};function K(){return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsxs("title",{children:[" ",W.title]})}),e.jsx(M,{})]})}export{K as default};

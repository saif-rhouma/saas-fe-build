import{j as e,aF as y,e as p,I as a,S as x,B as l,T as d,D as S,A as O,du as E,y as W,dB as z,G as m,C as I,R as L,p as $,aS as G,aB as w,aK as P,w as T,d$ as N,L as R,e0 as q,r as H,f as V,e1 as _,H as Q}from"./index-lMp9zap6.js";import{E as U}from"./empty-content-v04S0NJf.js";import{u as v}from"./use-checkout-context-C07HUaXY.js";import{b as h}from"./format-number-BW6JEF9q.js";import{C as b}from"./CardHeader-s6sY6NkO.js";import{T as D}from"./TextField-BEm0Gfgz.js";import{I as M}from"./InputAdornment-CznJJWQj.js";import{T as Y,a as K,b as J,c as X}from"./table-head-custom-BwAPFtwe.js";import{C as Z}from"./color-preview-CJO_juDV.js";import{I as ee}from"./incrementer-button-iExNop-d.js";import{T as j}from"./TableCell-ljoaX5oi.js";import{S as te,s as f,a as se,b as re,c as ne,d as oe}from"./Stepper-DkTZxN9f.js";import{b as A,C as B,z as g,u as ae,t as ie,a as le}from"./form-provider-Cj0Z9UsE.js";import"./editor-56m6PEpo.js";import"./image-7Gw8g56m.js";import{P as ce}from"./payment-new-card-dialog-ClP2ZvmN.js";import{F as de}from"./FormHelperText-CiWaMPMf.js";import{L as pe}from"./LoadingButton-BI3VwLzw.js";import{a as xe}from"./DialogContent-B0tqVN_s.js";import{A as me,a as he}from"./address-new-form-DyrLisU9.js";import"./FormControl-BFlCQpvi.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-D2FT-Pcv.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CKyhTT_V.js";import"./Select-DE7_tqxX.js";import"./Menu-Di83eYAm.js";import"./InputBase-D6UR9yYG.js";import"./Checkbox-BfbryewD.js";import"./Rating-D1epoFLf.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider--FnFNgPJ.js";import"./RadioGroup-C-GnO1ca.js";import"./FormGroup-BE8TyzSB.js";import"./FormControlLabel-CSqTNcaw.js";import"./index-KeOEaw8h.js";import"./countries-DSLisFCy.js";import"./Autocomplete-DnVwYLlc.js";import"./Chip-lc0vODcu.js";import"./country-select-DkXlsKd6.js";import"./upload-avatar-jEC4OtmL.js";import"./DatePicker-CRaT7_Tx.js";import"./ListItem-Eefms6HN.js";import"./MobileDateTimePicker-CghIhRUp.js";import"./index-DTyO1f1S.js";import"./DialogTitle-BCkrw5VA.js";import"./CircularProgress-CX5vuYgb.js";import"./schema-helper-DOzR5VHI.js";function k({total:t,onEdit:s,discount:n,subtotal:o,shipping:r,onApplyDiscount:i}){const c=r!==null?"Free":"-";return e.jsxs(y,{sx:{mb:3},children:[e.jsx(b,{title:"Order summary",action:s&&e.jsx(p,{size:"small",onClick:s,startIcon:e.jsx(a,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsxs(x,{spacing:2,sx:{p:3},children:[e.jsxs(l,{display:"flex",children:[e.jsx(d,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Sub total"}),e.jsx(d,{component:"span",variant:"subtitle2",children:h(o)})]}),e.jsxs(l,{display:"flex",children:[e.jsx(d,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Discount"}),e.jsx(d,{component:"span",variant:"subtitle2",children:n?h(-n):"-"})]}),e.jsxs(l,{display:"flex",children:[e.jsx(d,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Shipping"}),e.jsx(d,{component:"span",variant:"subtitle2",children:r?h(r):c})]}),e.jsx(S,{sx:{borderStyle:"dashed"}}),e.jsxs(l,{display:"flex",children:[e.jsx(d,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Total"}),e.jsxs(l,{sx:{textAlign:"right"},children:[e.jsx(d,{component:"span",variant:"subtitle1",sx:{display:"block",color:"error.main"},children:h(t)}),e.jsx(d,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),i&&e.jsx(D,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:e.jsx(M,{position:"end",children:e.jsx(p,{color:"primary",onClick:()=>i(5),sx:{mr:-.5},children:"Apply"})})}})]})]})}function ue({row:t,onDelete:s,onDecrease:n,onIncrease:o}){return e.jsxs(Y,{children:[e.jsx(j,{children:e.jsxs(x,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(O,{variant:"rounded",alt:t.name,src:t.coverUrl,sx:{width:64,height:64}}),e.jsxs(x,{spacing:.5,children:[e.jsx(d,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:t.name}),e.jsxs(x,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:["size: ",e.jsxs(E,{sx:{ml:.5},children:[" ",t.size," "]}),e.jsx(S,{orientation:"vertical",sx:{mx:1,height:16}}),e.jsx(Z,{colors:t.colors})]})]})]})}),e.jsx(j,{children:h(t.price)}),e.jsx(j,{children:e.jsxs(l,{sx:{width:88,textAlign:"right"},children:[e.jsx(ee,{quantity:t.quantity,onDecrease:n,onIncrease:o,disabledDecrease:t.quantity<=1,disabledIncrease:t.quantity>=t.available}),e.jsxs(d,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",t.available]})]})}),e.jsx(j,{align:"right",children:h(t.price*t.quantity)}),e.jsx(j,{align:"right",sx:{px:1},children:e.jsx(W,{onClick:s,children:e.jsx(a,{icon:"solar:trash-bin-trash-bold"})})})]})}const je=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function ye({products:t,onDelete:s,onIncreaseQuantity:n,onDecreaseQuantity:o}){return e.jsx(z,{children:e.jsxs(K,{sx:{minWidth:720},children:[e.jsx(J,{headLabel:je}),e.jsx(X,{children:t.map(r=>e.jsx(ue,{row:r,onDelete:()=>s(r.id),onDecrease:()=>o(r.id),onIncrease:()=>n(r.id)},r.id))})]})})}function be(){const t=v(),s=!t.items.length;return e.jsxs(m,{container:!0,spacing:3,children:[e.jsxs(m,{xs:12,md:8,children:[e.jsxs(y,{sx:{mb:3},children:[e.jsx(b,{title:e.jsxs(d,{variant:"h6",children:["Cart",e.jsxs(d,{component:"span",sx:{color:"text.secondary"},children:[" (",t.totalItems," item)"]})]}),sx:{mb:3}}),s?e.jsx(U,{title:"Cart is empty!",description:"Look like you have no items in your shopping cart.",imgUrl:`${I.site.basePath}/assets/icons/empty/ic-cart.svg`,sx:{pt:5,pb:10}}):e.jsx(ye,{products:t.items,onDelete:t.onDeleteCart,onIncreaseQuantity:t.onIncreaseQuantity,onDecreaseQuantity:t.onDecreaseQuantity})]}),e.jsx(p,{component:L,href:$.product.root,color:"inherit",startIcon:e.jsx(a,{icon:"eva:arrow-ios-back-fill"}),children:"Continue shopping"})]}),e.jsxs(m,{xs:12,md:4,children:[e.jsx(k,{total:t.total,discount:t.discount,subtotal:t.subtotal,onApplyDiscount:t.onApplyDiscount}),e.jsx(p,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:s,onClick:t.onNextStep,children:"Check out"})]})]})}const fe=G(te)(({theme:t})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${f.line}`]:{borderTopWidth:2,borderColor:t.vars.palette.divider},[`&.${f.active}, &.${f.completed}`]:{[`& .${f.line}`]:{borderColor:t.vars.palette.primary.main}}}));function ve({steps:t,activeStep:s,sx:n,...o}){return e.jsx(se,{alternativeLabel:!0,activeStep:s,connector:e.jsx(fe,{}),sx:{mb:{xs:3,md:5},...n},...o,children:t.map(r=>e.jsx(re,{children:e.jsx(ne,{StepIconComponent:Ce,sx:{[`& .${oe.label}`]:{fontWeight:"fontWeightSemiBold"}},children:r})},r))})}function Ce({active:t,completed:s}){return e.jsx(x,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...t&&{color:"primary.main"}},children:s?e.jsx(a,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(l,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}function ge({options:t,onApplyShipping:s,...n}){const{control:o}=A();return e.jsxs(y,{...n,children:[e.jsx(b,{title:"Delivery"}),e.jsx(B,{name:"delivery",control:o,render:({field:r})=>e.jsx(l,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:t.map(i=>e.jsx(Se,{option:i,selected:r.value===i.value,onClick:()=>{r.onChange(i.value),s(i.value)}},i.label))})})]})}function Se({option:t,selected:s,...n}){const{value:o,label:r,description:i}=t;return e.jsxs(w,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...s&&{boxShadow:c=>`0 0 0 2px ${c.vars.palette.text.primary}`}},...n,children:[r==="Free"&&e.jsx(a,{icon:"carbon:bicycle",width:32}),r==="Standard"&&e.jsx(a,{icon:"carbon:delivery",width:32}),r==="Express"&&e.jsx(a,{icon:"carbon:rocket",width:32}),e.jsx(P,{sx:{ml:2},primary:e.jsxs(x,{direction:"row",alignItems:"center",children:[e.jsx(l,{component:"span",sx:{flexGrow:1},children:r}),e.jsx(l,{component:"span",sx:{typography:"h6"},children:`$${o}`})]}),secondary:i,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},o)}function ke({billing:t,onBackStep:s}){return e.jsxs(y,{sx:{mb:3},children:[e.jsx(b,{title:"Address",action:e.jsx(p,{size:"small",startIcon:e.jsx(a,{icon:"solar:pen-bold"}),onClick:s,children:"Edit"})}),e.jsxs(x,{spacing:1,sx:{p:3},children:[e.jsxs(l,{sx:{typography:"subtitle2"},children:[`${t==null?void 0:t.name} `,e.jsxs(l,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",t==null?void 0:t.addressType,")"]})]}),e.jsx(l,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.fullAddress}),e.jsx(l,{sx:{color:"text.secondary",typography:"body2"},children:t==null?void 0:t.phoneNumber})]})]})}function Ie({options:t,...s}){const{control:n}=A(),o=T();return e.jsxs(e.Fragment,{children:[e.jsxs(y,{...s,children:[e.jsx(b,{title:"Payment"}),e.jsx(B,{name:"payment",control:n,render:({field:r,fieldState:{error:i}})=>e.jsxs(x,{sx:{px:3,pb:3},children:[t.payments.map(c=>e.jsx(we,{option:c,onOpen:o.onTrue,cardOptions:t.cards,selected:r.value===c.value,isCredit:c.value==="credit"&&r.value==="credit",onClick:()=>{r.onChange(c.value)}},c.label)),!!i&&e.jsx(de,{error:!0,sx:{pt:1,px:2},children:i.message})]})})]}),e.jsx(ce,{open:o.value,onClose:o.onFalse})]})}function we({option:t,cardOptions:s,selected:n,isCredit:o,onOpen:r,...i}){const{value:c,label:C,description:F}=t;return e.jsxs(w,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...n&&{boxShadow:u=>`0 0 0 2px ${u.vars.palette.text.primary}`}},...i,children:[e.jsx(P,{primary:e.jsxs(x,{direction:"row",alignItems:"center",children:[e.jsx(l,{component:"span",sx:{flexGrow:1},children:C}),e.jsxs(x,{spacing:1,direction:"row",alignItems:"center",children:[c==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:"logos:mastercard",width:24}),",",e.jsx(a,{icon:"logos:visa",width:24})]}),c==="paypal"&&e.jsx(a,{icon:"logos:paypal",width:24}),c==="cash"&&e.jsx(a,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:F,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),o&&e.jsxs(x,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(D,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:s.map(u=>e.jsx("option",{value:u.value,children:u.label},u.value))}),e.jsx(p,{size:"small",color:"primary",startIcon:e.jsx(a,{icon:"mingcute:add-line"}),onClick:r,children:"Add New Card"})]})]},c)}const Pe=[{value:0,label:"Free",description:"5-7 days delivery"},{value:10,label:"Standard",description:"3-5 days delivery"},{value:20,label:"Express",description:"2-3 days delivery"}],Te=[{value:"paypal",label:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely."},{value:"credit",label:"Credit / Debit card",description:"We support Mastercard, Visa, Discover and Stripe."},{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],De=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}],Ae=g.object({payment:g.string().min(1,{message:"Payment is required!"}),delivery:g.number()});function Be(){const t=v(),s={delivery:t.shipping,payment:""},n=ae({resolver:ie(Ae),defaultValues:s}),{handleSubmit:o,formState:{isSubmitting:r}}=n,i=o(async c=>{try{t.onNextStep(),t.onReset(),console.info("DATA",c)}catch(C){console.error(C)}});return e.jsx(le,{methods:n,onSubmit:i,children:e.jsxs(m,{container:!0,spacing:3,children:[e.jsxs(m,{xs:12,md:8,children:[e.jsx(ge,{onApplyShipping:t.onApplyShipping,options:Pe}),e.jsx(Ie,{options:{payments:Te,cards:De},sx:{my:3}}),e.jsx(p,{size:"small",color:"inherit",onClick:t.onBackStep,startIcon:e.jsx(a,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(m,{xs:12,md:4,children:[e.jsx(ke,{billing:t.billing,onBackStep:t.onBackStep}),e.jsx(k,{total:t.total,subtotal:t.subtotal,discount:t.discount,shipping:t.shipping,onEdit:()=>t.onGotoStep(0)}),e.jsx(pe,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:r,children:"Complete order"})]})]})})}function Fe({open:t,onReset:s,onDownloadPDF:n}){return e.jsx(xe,{fullWidth:!0,fullScreen:!0,open:t,PaperProps:{sx:{width:{md:"calc(100% - 48px)"},height:{md:"calc(100% - 48px)"}}},children:e.jsxs(l,{gap:5,display:"flex",alignItems:"center",flexDirection:"column",sx:{py:5,m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(d,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(N,{}),e.jsxs(d,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(R,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{}),"All the best,"]}),e.jsx(S,{sx:{width:1,borderStyle:"dashed"}}),e.jsxs(l,{gap:2,display:"flex",flexWrap:"wrap",justifyContent:"center",children:[e.jsx(p,{size:"large",color:"inherit",variant:"outlined",onClick:s,startIcon:e.jsx(a,{icon:"eva:arrow-ios-back-fill"}),children:"Continue shopping"}),e.jsx(p,{size:"large",variant:"contained",startIcon:e.jsx(a,{icon:"eva:cloud-download-fill"}),onClick:n,children:"Download as PDF"})]})]})})}function Oe(){const t=v(),s=T();return e.jsxs(e.Fragment,{children:[e.jsxs(m,{container:!0,spacing:3,children:[e.jsxs(m,{xs:12,md:8,children:[q.slice(0,4).map(n=>e.jsx(me,{address:n,action:e.jsxs(x,{flexDirection:"row",flexWrap:"wrap",flexShrink:0,children:[!n.primary&&e.jsx(p,{size:"small",color:"error",sx:{mr:1},children:"Delete"}),e.jsx(p,{variant:"outlined",size:"small",onClick:()=>t.onCreateBilling(n),children:"Deliver to this address"})]}),sx:{p:3,mb:3,borderRadius:2,boxShadow:o=>o.customShadows.card}},n.id)),e.jsxs(x,{direction:"row",justifyContent:"space-between",children:[e.jsx(p,{size:"small",color:"inherit",onClick:t.onBackStep,startIcon:e.jsx(a,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(p,{size:"small",color:"primary",onClick:s.onTrue,startIcon:e.jsx(a,{icon:"mingcute:add-line"}),children:"New address"})]})]}),e.jsx(m,{xs:12,md:4,children:e.jsx(k,{total:t.total,subtotal:t.subtotal,discount:t.discount})})]}),e.jsx(he,{open:s.value,onClose:s.onFalse,onCreate:t.onCreateBilling})]})}function Ee(){const t=v();return H.useEffect(()=>{t.initialStep()},[]),e.jsxs(V,{sx:{mb:10},children:[e.jsx(d,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(m,{container:!0,justifyContent:t.completed?"center":"flex-start",children:e.jsx(m,{xs:12,md:8,children:e.jsx(ve,{activeStep:t.activeStep,steps:_})})}),e.jsxs(e.Fragment,{children:[t.activeStep===0&&e.jsx(be,{}),t.activeStep===1&&e.jsx(Oe,{}),t.activeStep===2&&e.jsx(Be,{}),t.completed&&e.jsx(Fe,{open:!0,onReset:t.onReset,onDownloadPDF:()=>{}})]})]})}const We={title:`Checkout - ${I.site.name}`};function At(){return e.jsxs(e.Fragment,{children:[e.jsx(Q,{children:e.jsxs("title",{children:[" ",We.title]})}),e.jsx(Ee,{})]})}export{At as default};

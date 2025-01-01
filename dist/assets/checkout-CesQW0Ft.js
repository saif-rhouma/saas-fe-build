import{j as e,cZ as C,e as x,I as d,S as p,B as i,T as l,a5 as w,A as L,d8 as D,$ as R,de as H,cW as u,C as A,R as V,p as _,o as U,b6 as T,a8 as F,Y as N,dE as Q,L as M,dF as Y,r as Z,f as J,dG as K,H as X}from"./index-BrVky5Gg.js";import{E as ee}from"./empty-content-TcyibYvM.js";import{u as k}from"./use-checkout-context-BZ4a0LU5.js";import{b}from"./format-number-BYcftzxu.js";import{C as v}from"./CardHeader-DEDB19_Z.js";import{T as B}from"./TextField-BzhmS018.js";import{I as se}from"./InputAdornment-DEzDbK1Q.js";import{T as re,a as te,b as ne,c as oe}from"./table-head-custom-CKQJMo0x.js";import{C as ie}from"./color-preview-BThBkbX2.js";import{I as ae}from"./incrementer-button-w4nr0pul.js";import{T as g}from"./TableCell-VebxIpQE.js";import{S as le,s as S,a as ce,b as de,c as pe,d as xe}from"./Stepper-PvLV-n7R.js";import{b as O,C as $,z as h,u as z,t as G,a as W,i as me,F as j}from"./form-provider-IGnvse7Q.js";import"./editor-DG5O80Yq.js";import"./image-C-59YYlQ.js";import{P as he}from"./payment-new-card-dialog-90HUTevR.js";import{F as ue}from"./FormHelperText-DFhB8bFU.js";import{L as E}from"./LoadingButton-a60uG7nr.js";import{a as q,b as je,D as ye}from"./DialogContent-Bneue424.js";import{s as P}from"./schema-helper-DBRyPFKX.js";import{D as be}from"./DialogTitle-5kRkAohy.js";import"./FormControl-DZf5wqQ9.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-Dec_12dS.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-ChyBHZVN.js";import"./Select-6IXk9lW0.js";import"./Menu-DD-zT_J0.js";import"./InputBase-C8xLxBIT.js";import"./Checkbox-CQHPQqdR.js";import"./Rating-Hlni2mlB.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-MS8qHiiX.js";import"./RadioGroup-D0Qu_fwA.js";import"./FormGroup-DxT7LmQ0.js";import"./FormControlLabel-0HOCsOrO.js";import"./utils-lkMXEcUg.js";import"./index-Yn_vEU-0.js";import"./countries-DSLisFCy.js";import"./Autocomplete-CdBrZWYz.js";import"./Chip-DP4Tp82d.js";import"./country-select-BuZykQim.js";import"./upload-avatar-DQ7Fanyq.js";import"./DatePicker-B1JNPBiT.js";import"./ListItem-CVfDDPgr.js";import"./MobileDateTimePicker-DDuapApM.js";import"./Tabs-BKfmXuvi.js";import"./KeyboardArrowRight-Bg2_dmW-.js";import"./index-rYiI9UdX.js";import"./CircularProgress-BTXCWzN0.js";function I({total:s,onEdit:r,discount:n,subtotal:o,shipping:t,onApplyDiscount:a}){const c=t!==null?"Free":"-";return e.jsxs(C,{sx:{mb:3},children:[e.jsx(v,{title:"Order summary",action:r&&e.jsx(x,{size:"small",onClick:r,startIcon:e.jsx(d,{icon:"solar:pen-bold"}),children:"Edit"})}),e.jsxs(p,{spacing:2,sx:{p:3},children:[e.jsxs(i,{display:"flex",children:[e.jsx(l,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Sub total"}),e.jsx(l,{component:"span",variant:"subtitle2",children:b(o)})]}),e.jsxs(i,{display:"flex",children:[e.jsx(l,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Discount"}),e.jsx(l,{component:"span",variant:"subtitle2",children:n?b(-n):"-"})]}),e.jsxs(i,{display:"flex",children:[e.jsx(l,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Shipping"}),e.jsx(l,{component:"span",variant:"subtitle2",children:t?b(t):c})]}),e.jsx(w,{sx:{borderStyle:"dashed"}}),e.jsxs(i,{display:"flex",children:[e.jsx(l,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Total"}),e.jsxs(i,{sx:{textAlign:"right"},children:[e.jsx(l,{component:"span",variant:"subtitle1",sx:{display:"block",color:"error.main"},children:b(s)}),e.jsx(l,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),a&&e.jsx(B,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:e.jsx(se,{position:"end",children:e.jsx(x,{color:"primary",onClick:()=>a(5),sx:{mr:-.5},children:"Apply"})})}})]})]})}function fe({row:s,onDelete:r,onDecrease:n,onIncrease:o}){return e.jsxs(re,{children:[e.jsx(g,{children:e.jsxs(p,{spacing:2,direction:"row",alignItems:"center",children:[e.jsx(L,{variant:"rounded",alt:s.name,src:s.coverUrl,sx:{width:64,height:64}}),e.jsxs(p,{spacing:.5,children:[e.jsx(l,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:s.name}),e.jsxs(p,{direction:"row",alignItems:"center",sx:{typography:"body2",color:"text.secondary"},children:["size: ",e.jsxs(D,{sx:{ml:.5},children:[" ",s.size," "]}),e.jsx(w,{orientation:"vertical",sx:{mx:1,height:16}}),e.jsx(ie,{colors:s.colors})]})]})]})}),e.jsx(g,{children:b(s.price)}),e.jsx(g,{children:e.jsxs(i,{sx:{width:88,textAlign:"right"},children:[e.jsx(ae,{quantity:s.quantity,onDecrease:n,onIncrease:o,disabledDecrease:s.quantity<=1,disabledIncrease:s.quantity>=s.available}),e.jsxs(l,{variant:"caption",component:"div",sx:{color:"text.secondary",mt:1},children:["available: ",s.available]})]})}),e.jsx(g,{align:"right",children:b(s.price*s.quantity)}),e.jsx(g,{align:"right",sx:{px:1},children:e.jsx(R,{onClick:r,children:e.jsx(d,{icon:"solar:trash-bin-trash-bold"})})})]})}const ge=[{id:"product",label:"Product"},{id:"price",label:"Price"},{id:"quantity",label:"Quantity"},{id:"totalAmount",label:"Total Price",align:"right"},{id:""}];function Ce({products:s,onDelete:r,onIncreaseQuantity:n,onDecreaseQuantity:o}){return e.jsx(H,{children:e.jsxs(te,{sx:{minWidth:720},children:[e.jsx(ne,{headLabel:ge}),e.jsx(oe,{children:s.map(t=>e.jsx(fe,{row:t,onDelete:()=>r(t.id),onDecrease:()=>o(t.id),onIncrease:()=>n(t.id)},t.id))})]})})}function ve(){const s=k(),r=!s.items.length;return e.jsxs(u,{container:!0,spacing:3,children:[e.jsxs(u,{xs:12,md:8,children:[e.jsxs(C,{sx:{mb:3},children:[e.jsx(v,{title:e.jsxs(l,{variant:"h6",children:["Cart",e.jsxs(l,{component:"span",sx:{color:"text.secondary"},children:[" (",s.totalItems," item)"]})]}),sx:{mb:3}}),r?e.jsx(ee,{title:"Cart is empty!",description:"Look like you have no items in your shopping cart.",imgUrl:`${A.site.basePath}/assets/icons/empty/ic-cart.svg`,sx:{pt:5,pb:10}}):e.jsx(Ce,{products:s.items,onDelete:s.onDeleteCart,onIncreaseQuantity:s.onIncreaseQuantity,onDecreaseQuantity:s.onDecreaseQuantity})]}),e.jsx(x,{component:V,href:_.product.root,color:"inherit",startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill"}),children:"Continue shopping"})]}),e.jsxs(u,{xs:12,md:4,children:[e.jsx(I,{total:s.total,discount:s.discount,subtotal:s.subtotal,onApplyDiscount:s.onApplyDiscount}),e.jsx(x,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:r,onClick:s.onNextStep,children:"Check out"})]})]})}const Se=U(le)(({theme:s})=>({top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)",[`& .${S.line}`]:{borderTopWidth:2,borderColor:s.vars.palette.divider},[`&.${S.active}, &.${S.completed}`]:{[`& .${S.line}`]:{borderColor:s.vars.palette.primary.main}}}));function ke({steps:s,activeStep:r,sx:n,...o}){return e.jsx(ce,{alternativeLabel:!0,activeStep:r,connector:e.jsx(Se,{}),sx:{mb:{xs:3,md:5},...n},...o,children:s.map(t=>e.jsx(de,{children:e.jsx(pe,{StepIconComponent:we,sx:{[`& .${xe.label}`]:{fontWeight:"fontWeightSemiBold"}},children:t})},t))})}function we({active:s,completed:r}){return e.jsx(p,{alignItems:"center",justifyContent:"center",sx:{width:24,height:24,color:"text.disabled",...s&&{color:"primary.main"}},children:r?e.jsx(d,{icon:"eva:checkmark-fill",sx:{color:"primary.main"}}):e.jsx(i,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}function Te({options:s,onApplyShipping:r,...n}){const{control:o}=O();return e.jsxs(C,{...n,children:[e.jsx(v,{title:"Delivery"}),e.jsx($,{name:"delivery",control:o,render:({field:t})=>e.jsx(i,{columnGap:2,rowGap:2.5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},sx:{p:3},children:s.map(a=>e.jsx(Ie,{option:a,selected:t.value===a.value,onClick:()=>{t.onChange(a.value),r(a.value)}},a.label))})})]})}function Ie({option:s,selected:r,...n}){const{value:o,label:t,description:a}=s;return e.jsxs(T,{variant:"outlined",sx:{p:2.5,cursor:"pointer",display:"flex",...r&&{boxShadow:c=>`0 0 0 2px ${c.vars.palette.text.primary}`}},...n,children:[t==="Free"&&e.jsx(d,{icon:"carbon:bicycle",width:32}),t==="Standard"&&e.jsx(d,{icon:"carbon:delivery",width:32}),t==="Express"&&e.jsx(d,{icon:"carbon:rocket",width:32}),e.jsx(F,{sx:{ml:2},primary:e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{flexGrow:1},children:t}),e.jsx(i,{component:"span",sx:{typography:"h6"},children:`$${o}`})]}),secondary:a,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}})]},o)}function Pe({billing:s,onBackStep:r}){return e.jsxs(C,{sx:{mb:3},children:[e.jsx(v,{title:"Address",action:e.jsx(x,{size:"small",startIcon:e.jsx(d,{icon:"solar:pen-bold"}),onClick:r,children:"Edit"})}),e.jsxs(p,{spacing:1,sx:{p:3},children:[e.jsxs(i,{sx:{typography:"subtitle2"},children:[`${s==null?void 0:s.name} `,e.jsxs(i,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:["(",s==null?void 0:s.addressType,")"]})]}),e.jsx(i,{sx:{color:"text.secondary",typography:"body2"},children:s==null?void 0:s.fullAddress}),e.jsx(i,{sx:{color:"text.secondary",typography:"body2"},children:s==null?void 0:s.phoneNumber})]})]})}function De({options:s,...r}){const{control:n}=O(),o=N();return e.jsxs(e.Fragment,{children:[e.jsxs(C,{...r,children:[e.jsx(v,{title:"Payment"}),e.jsx($,{name:"payment",control:n,render:({field:t,fieldState:{error:a}})=>e.jsxs(p,{sx:{px:3,pb:3},children:[s.payments.map(c=>e.jsx(Ae,{option:c,onOpen:o.onTrue,cardOptions:s.cards,selected:t.value===c.value,isCredit:c.value==="credit"&&t.value==="credit",onClick:()=>{t.onChange(c.value)}},c.label)),!!a&&e.jsx(ue,{error:!0,sx:{pt:1,px:2},children:a.message})]})})]}),e.jsx(he,{open:o.value,onClose:o.onFalse})]})}function Ae({option:s,cardOptions:r,selected:n,isCredit:o,onOpen:t,...a}){const{value:c,label:f,description:m}=s;return e.jsxs(T,{variant:"outlined",sx:{p:2.5,mt:2.5,cursor:"pointer",...n&&{boxShadow:y=>`0 0 0 2px ${y.vars.palette.text.primary}`}},...a,children:[e.jsx(F,{primary:e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsx(i,{component:"span",sx:{flexGrow:1},children:f}),e.jsxs(p,{spacing:1,direction:"row",alignItems:"center",children:[c==="credit"&&e.jsxs(e.Fragment,{children:[e.jsx(d,{icon:"logos:mastercard",width:24}),",",e.jsx(d,{icon:"logos:visa",width:24})]}),c==="paypal"&&e.jsx(d,{icon:"logos:paypal",width:24}),c==="cash"&&e.jsx(d,{icon:"solar:wad-of-money-bold",width:32})]})]}),secondary:m,primaryTypographyProps:{typography:"subtitle1",mb:.5},secondaryTypographyProps:{typography:"body2"}}),o&&e.jsxs(p,{spacing:2.5,alignItems:"flex-end",sx:{pt:2.5},children:[e.jsx(B,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:r.map(y=>e.jsx("option",{value:y.value,children:y.label},y.value))}),e.jsx(x,{size:"small",color:"primary",startIcon:e.jsx(d,{icon:"mingcute:add-line"}),onClick:t,children:"Add New Card"})]})]},c)}const Fe=[{value:0,label:"Free",description:"5-7 days delivery"},{value:10,label:"Standard",description:"3-5 days delivery"},{value:20,label:"Express",description:"2-3 days delivery"}],Ne=[{value:"paypal",label:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely."},{value:"credit",label:"Credit / Debit card",description:"We support Mastercard, Visa, Discover and Stripe."},{value:"cash",label:"Cash",description:"Pay with cash when your order is delivered."}],Be=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}],Oe=h.object({payment:h.string().min(1,{message:"Payment is required!"}),delivery:h.number()});function $e(){const s=k(),r={delivery:s.shipping,payment:""},n=z({resolver:G(Oe),defaultValues:r}),{handleSubmit:o,formState:{isSubmitting:t}}=n,a=o(async c=>{try{s.onNextStep(),s.onReset(),console.info("DATA",c)}catch(f){console.error(f)}});return e.jsx(W,{methods:n,onSubmit:a,children:e.jsxs(u,{container:!0,spacing:3,children:[e.jsxs(u,{xs:12,md:8,children:[e.jsx(Te,{onApplyShipping:s.onApplyShipping,options:Fe}),e.jsx(De,{options:{payments:Ne,cards:Be},sx:{my:3}}),e.jsx(x,{size:"small",color:"inherit",onClick:s.onBackStep,startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),e.jsxs(u,{xs:12,md:4,children:[e.jsx(Pe,{billing:s.billing,onBackStep:s.onBackStep}),e.jsx(I,{total:s.total,subtotal:s.subtotal,discount:s.discount,shipping:s.shipping,onEdit:()=>s.onGotoStep(0)}),e.jsx(E,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:t,children:"Complete order"})]})]})})}function ze({open:s,onReset:r,onDownloadPDF:n}){return e.jsx(q,{fullWidth:!0,fullScreen:!0,open:s,PaperProps:{sx:{width:{md:"calc(100% - 48px)"},height:{md:"calc(100% - 48px)"}}},children:e.jsxs(i,{gap:5,display:"flex",alignItems:"center",flexDirection:"column",sx:{py:5,m:"auto",maxWidth:480,textAlign:"center",px:{xs:2,sm:0}},children:[e.jsx(l,{variant:"h4",children:"Thank you for your purchase!"}),e.jsx(Q,{}),e.jsxs(l,{children:["Thanks for placing order",e.jsx("br",{}),e.jsx("br",{}),e.jsx(M,{children:"01dc1370-3df6-11eb-b378-0242ac130002"}),e.jsx("br",{}),e.jsx("br",{}),"We will send you a notification within 5 days when it ships.",e.jsx("br",{})," If you have any question or queries then fell to get in contact us. ",e.jsx("br",{}),"All the best,"]}),e.jsx(w,{sx:{width:1,borderStyle:"dashed"}}),e.jsxs(i,{gap:2,display:"flex",flexWrap:"wrap",justifyContent:"center",children:[e.jsx(x,{size:"large",color:"inherit",variant:"outlined",onClick:r,startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill"}),children:"Continue shopping"}),e.jsx(x,{size:"large",variant:"contained",startIcon:e.jsx(d,{icon:"eva:cloud-download-fill",color:"error.main"}),onClick:n,children:"Download as PDF"})]})]})})}function Ge({address:s,action:r,sx:n,...o}){return e.jsxs(T,{sx:{gap:2,display:"flex",position:"relative",alignItems:{md:"flex-end"},flexDirection:{xs:"column",md:"row"},...n},...o,children:[e.jsxs(p,{flexGrow:1,spacing:1,children:[e.jsxs(p,{direction:"row",alignItems:"center",children:[e.jsxs(l,{variant:"subtitle2",children:[s.name,e.jsxs(i,{component:"span",sx:{ml:.5,typography:"body2",color:"text.secondary"},children:["(",s.addressType,")"]})]}),s.primary&&e.jsx(D,{color:"info",sx:{ml:1},children:"Default"})]}),e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:s.fullAddress}),e.jsx(l,{variant:"body2",sx:{color:"text.secondary"},children:s.phoneNumber})]}),r&&r]})}const We=h.object({city:h.string().min(1,{message:"City is required!"}),state:h.string().min(1,{message:"State is required!"}),name:h.string().min(1,{message:"Name is required!"}),address:h.string().min(1,{message:"Address is required!"}),zipCode:h.string().min(1,{message:"Zip code is required!"}),phoneNumber:P.phoneNumber({isValidPhoneNumber:me}),country:P.objectOrNull({message:{required_error:"Country is required!"}}),primary:h.boolean(),addressType:h.string()});function Ee({open:s,onClose:r,onCreate:n}){const o={name:"",city:"",state:"",address:"",zipCode:"",country:"",primary:!0,phoneNumber:"",addressType:"Home"},t=z({mode:"all",resolver:G(We),defaultValues:o}),{handleSubmit:a,formState:{isSubmitting:c}}=t,f=a(async m=>{try{n({name:m.name,phoneNumber:m.phoneNumber,fullAddress:`${m.address}, ${m.city}, ${m.state}, ${m.country}, ${m.zipCode}`,addressType:m.addressType,primary:m.primary}),r()}catch(y){console.error(y)}});return e.jsx(q,{fullWidth:!0,maxWidth:"sm",open:s,onClose:r,children:e.jsxs(W,{methods:t,onSubmit:f,children:[e.jsx(be,{children:"New address"}),e.jsx(je,{dividers:!0,children:e.jsxs(p,{spacing:3,children:[e.jsx(j.RadioGroup,{row:!0,name:"addressType",options:[{label:"Home",value:"Home"},{label:"Office",value:"Office"}]}),e.jsxs(i,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[e.jsx(j.Text,{name:"name",label:"Full name"}),e.jsx(j.Phone,{name:"phoneNumber",label:"Phone number"})]}),e.jsx(j.Text,{name:"address",label:"Address"}),e.jsxs(i,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"},children:[e.jsx(j.Text,{name:"city",label:"Town/city"}),e.jsx(j.Text,{name:"state",label:"State"}),e.jsx(j.Text,{name:"zipCode",label:"Zip/code"})]}),e.jsx(j.CountrySelect,{name:"country",label:"Country",placeholder:"Choose a country"}),e.jsx(j.Checkbox,{name:"primary",label:"Use this address as default."})]})}),e.jsxs(ye,{children:[e.jsx(x,{color:"inherit",variant:"outlined",onClick:r,children:"Cancel"}),e.jsx(E,{type:"submit",variant:"contained",loading:c,children:"Deliver to this address"})]})]})})}function qe(){const s=k(),r=N();return e.jsxs(e.Fragment,{children:[e.jsxs(u,{container:!0,spacing:3,children:[e.jsxs(u,{xs:12,md:8,children:[Y.slice(0,4).map(n=>e.jsx(Ge,{address:n,action:e.jsxs(p,{flexDirection:"row",flexWrap:"wrap",flexShrink:0,children:[!n.primary&&e.jsx(x,{size:"small",color:"error",sx:{mr:1},children:"Delete"}),e.jsx(x,{variant:"outlined",size:"small",onClick:()=>s.onCreateBilling(n),children:"Deliver to this address"})]}),sx:{p:3,mb:3,borderRadius:2,boxShadow:o=>o.customShadows.card}},n.id)),e.jsxs(p,{direction:"row",justifyContent:"space-between",children:[e.jsx(x,{size:"small",color:"inherit",onClick:s.onBackStep,startIcon:e.jsx(d,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),e.jsx(x,{size:"small",color:"primary",onClick:r.onTrue,startIcon:e.jsx(d,{icon:"mingcute:add-line"}),children:"New address"})]})]}),e.jsx(u,{xs:12,md:4,children:e.jsx(I,{total:s.total,subtotal:s.subtotal,discount:s.discount})})]}),e.jsx(Ee,{open:r.value,onClose:r.onFalse,onCreate:s.onCreateBilling})]})}function Le(){const s=k();return Z.useEffect(()=>{s.initialStep()},[]),e.jsxs(J,{sx:{mb:10},children:[e.jsx(l,{variant:"h4",sx:{my:{xs:3,md:5}},children:"Checkout"}),e.jsx(u,{container:!0,justifyContent:s.completed?"center":"flex-start",children:e.jsx(u,{xs:12,md:8,children:e.jsx(ke,{activeStep:s.activeStep,steps:K})})}),e.jsxs(e.Fragment,{children:[s.activeStep===0&&e.jsx(ve,{}),s.activeStep===1&&e.jsx(qe,{}),s.activeStep===2&&e.jsx($e,{}),s.completed&&e.jsx(ze,{open:!0,onReset:s.onReset,onDownloadPDF:()=>{}})]})]})}const Re={title:`Checkout - ${A.site.name}`};function Es(){return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsxs("title",{children:[" ",Re.title]})}),e.jsx(Le,{})]})}export{Es as default};

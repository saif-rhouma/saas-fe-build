import{r as w,dn as M,dp as E,dm as I,eg as _,j as e,am as A,S as k,B as r,T as s,d0 as N,e8 as R,aS as F,e as O,h as H,l as K,I as z,C as W,aW as J,ea as X}from"./index-Blsk_n2J.js";import{z as C,u as q,t as B,a as G,F as P}from"./form-provider-DdfiYo_S.js";import{u as L}from"./useMutation-9mDdNxrY.js";import{b as f}from"./format-number-CrK_YprG.js";import{U as Z}from"./upload-box-ad-DM_7rvdf.js";import"./image-Cb1bD9tg.js";import"./editor-BNs7J7mr.js";import{s as tt}from"./schema-helper-CVZeQlXx.js";import{a as Q,b as U,D as V}from"./DialogContent-CB0eeVYr.js";import{D as Y}from"./DialogTitle-EF_AIZLJ.js";import{L as et}from"./LoadingButton-B-r7xLAp.js";const at=C.object({amount:C.number().min(1,{message:"Amount is required!"}),paymentDate:tt.date({message:{required_error:"Start date is required!"}}),paymentType:C.string().min(1,{message:"Payment Type is required!"}),notes:C.string().optional()}),gt=({order:a,payment:t,open:c,onClose:x,handler:n})=>{const i=w.useRef(t),[p,o]=w.useState(),b=w.useCallback(l=>{const h=l[0];o(()=>h)},[]),g=()=>{o(null)},S=M(),y={headers:{"content-type":"multipart/form-data"}},{mutate:D}=L({mutationFn:l=>E.post(I.files.upload,l,y),onSuccess:async({data:l})=>{const{name:h}=l;if(h){const{current:j}=i;j.attachments=h,await n(j)}return l},onSettled:async()=>{o(null),i.current={},await S.invalidateQueries({queryKey:["payments-images"]})},onError:l=>{console.log(l)}}),v={paymentType:"",notes:"",paymentDate:_()},d=q({resolver:B(at),defaultValues:v}),{reset:u,handleSubmit:T,formState:{isSubmitting:$}}=d,m=T(async l=>{try{const h={...l,orderId:a.id,customerId:a.customer.id};if(p){i.current={...h};const j=new FormData;j.append("file",p),j.append("category","Payment"),await D(j)}else await n(h);u()}catch(h){console.log(h)}});return e.jsxs(Q,{fullWidth:!0,maxWidth:"lg",open:c,onClose:x,children:[e.jsx(Y,{children:"Add Payment"}),e.jsxs(G,{methods:d,onSubmit:m,children:[e.jsxs(U,{children:[e.jsx(A,{}),e.jsxs(k,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(r,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary",textTransform:"capitalize"},children:a.customer.name})]}),e.jsxs(r,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:a.ref})]}),e.jsxs(r,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Date:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:N(a.orderDate)})]}),e.jsxs(r,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Delivery Date:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:a.deliveryDate?N(a.deliveryDate):e.jsx("span",{children:" - "})})]})]}),e.jsx(A,{}),e.jsxs(k,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(r,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:f(R(a.totalOrderAmount-a.totalOrderAmount*(a.discount/100),a==null?void 0:a.snapshotTaxPercentage))||"-"})]}),e.jsxs(r,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:f(a.orderPaymentAmount)||"-"})]})]}),e.jsx(A,{}),e.jsx(k,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(r,{display:"flex",children:[e.jsx(s,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(s,{component:"span",variant:"subtitle1",children:f(R(a.totalOrderAmount-a.totalOrderAmount*(a.discount/100),a==null?void 0:a.snapshotTaxPercentage)-a.orderPaymentAmount)||"-"})]})}),e.jsx(A,{}),e.jsxs(k,{spacing:2,sx:{pt:2,pb:1},children:[e.jsxs(r,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(P.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1},placeholder:"Amount",InputLabelProps:{shrink:!0}}),e.jsx(P.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1},InputLabelProps:{shrink:!0}})]}),e.jsxs(r,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(r,{children:e.jsxs(P.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(F,{value:"Cash",children:"Cash"}),e.jsx(F,{value:"Transfer",children:"Transfer"}),e.jsx(F,{value:"Card",children:"Card"})]})}),e.jsx(k,{spacing:1.5,flexDirection:"row",sx:{height:"56px"},children:e.jsx(Z,{file:p,handleDelete:g,handleDropSingleFile:b})})]}),e.jsx(k,{spacing:1,children:e.jsx(P.Text,{label:"Notes",name:"notes",placeholder:"Notes / Remarks",InputLabelProps:{shrink:!0},multiline:!0,rows:2})})]})]}),e.jsxs(V,{children:[e.jsx(et,{type:"submit",variant:"contained",children:"Save"}),e.jsx(O,{color:"inherit",variant:"outlined",onClick:()=>{u(),o(null),x()},children:"Cancel"})]})]})]})},ft=({order:a})=>{const[t,c]=w.useState(),x=()=>{const i=window.open("","_blank");c(i)},{user:n}=H();return w.useEffect(()=>{const p=nt((o=>{var g;let b=o.userOwnedApps;return(g=n==null?void 0:n.roles)!=null&&g.includes("STAFF")&&(b=o.applications),b})(n),a);t==null||t.document.open(),t==null||t.document.write(p),t==null||t.document.close(),t==null||t.print()},[t]),e.jsx(K,{onClick:x,children:e.jsx(z,{icon:"solar:printer-minimalistic-bold"})})},st=a=>{switch(a){case QuotationStatus.Converted:return"#118D57";case QuotationStatus.Confirmed:return"#006C9C";case QuotationStatus.Created:return"#54575e";case QuotationStatus.Canceled:return"#B71D18";default:return"#54575e"}},nt=(a,t)=>{var c,x,n,i,p,o,b,g,S,y,D,v,d,u,T,$;return`
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<style>

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
box-sizing: border-box;
/* 1 */
border-width: 0;
/* 2 */
border-style: solid;
/* 2 */
border-color: #e5e7eb;
/* 2 */
}

::before,
::after {
--tw-content: '';
}


html {
line-height: 1.5;
/* 1 */
-webkit-text-size-adjust: 100%;
/* 2 */
-moz-tab-size: 4;
/* 3 */
tab-size: 4;
/* 3 */
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
/* 4 */
font-feature-settings: normal;
/* 5 */
font-variation-settings: normal;
/* 6 */
}



body {
margin: 0;
/* 1 */
line-height: inherit;
/* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
height: 0;
/* 1 */
color: inherit;
/* 2 */
border-top-width: 1px;
/* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
-webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
font-size: inherit;
font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
color: inherit;
text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
font-weight: bolder;
}


code,
kbd,
samp,
pre {
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
/* 1 */
font-size: 1em;
/* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
font-size: 80%;
}


sub,
sup {
font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
}

sub {
bottom: -0.25em;
}

sup {
top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
text-indent: 0;
/* 1 */
border-color: inherit;
/* 2 */
border-collapse: collapse;
/* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
font-family: inherit;
/* 1 */
font-feature-settings: inherit;
/* 1 */
font-variation-settings: inherit;
/* 1 */
font-size: 100%;
/* 1 */
font-weight: inherit;
/* 1 */
line-height: inherit;
/* 1 */
color: inherit;
/* 1 */
margin: 0;
/* 2 */
padding: 0;
/* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
-webkit-appearance: button;
/* 1 */
background-color: transparent;
/* 2 */
background-image: none;
/* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
outline: auto;
}



:-moz-ui-invalid {
box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
-webkit-appearance: textfield;
/* 1 */
outline-offset: -2px;
/* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
-webkit-appearance: none;
}


::-webkit-file-upload-button {
-webkit-appearance: button;
/* 1 */
font: inherit;
/* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
display: list-item;
}


/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
margin: 0;
}

fieldset {
margin: 0;
padding: 0;
}

legend {
padding: 0;
}

ol,
ul,
menu {
list-style: none;
margin: 0;
padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
opacity: 1;
/* 1 */
color: #9ca3af;
/* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
cursor: default;
}


img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
display: block;
/* 1 */
vertical-align: middle;
/* 2 */
}


img,
video {
max-width: 100%;
height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
display: none;
}

*, ::before, ::after{
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-translate-x: 0;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-skew-x: 0;
--tw-skew-y: 0;
--tw-scale-x: 1;
--tw-scale-y: 1;
--tw-pan-x:  ;
--tw-pan-y:  ;
--tw-pinch-zoom:  ;
--tw-scroll-snap-strictness: proximity;
--tw-gradient-from-position:  ;
--tw-gradient-via-position:  ;
--tw-gradient-to-position:  ;
--tw-ordinal:  ;
--tw-slashed-zero:  ;
--tw-numeric-figure:  ;
--tw-numeric-spacing:  ;
--tw-numeric-fraction:  ;
--tw-ring-inset:  ;
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgb(59 130 246 / 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-shadow: 0 0 #0000;
--tw-shadow-colored: 0 0 #0000;
--tw-blur:  ;
--tw-brightness:  ;
--tw-contrast:  ;
--tw-grayscale:  ;
--tw-hue-rotate:  ;
--tw-invert:  ;
--tw-saturate:  ;
--tw-sepia:  ;
--tw-drop-shadow:  ;
--tw-backdrop-blur:  ;
--tw-backdrop-brightness:  ;
--tw-backdrop-contrast:  ;
--tw-backdrop-grayscale:  ;
--tw-backdrop-hue-rotate:  ;
--tw-backdrop-invert:  ;
--tw-backdrop-opacity:  ;
--tw-backdrop-saturate:  ;
--tw-backdrop-sepia:  ;
}

::backdrop{
--tw-border-spacing-x: 0;
--tw-border-spacing-y: 0;
--tw-translate-x: 0;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-skew-x: 0;
--tw-skew-y: 0;
--tw-scale-x: 1;
--tw-scale-y: 1;
--tw-pan-x:  ;
--tw-pan-y:  ;
--tw-pinch-zoom:  ;
--tw-scroll-snap-strictness: proximity;
--tw-gradient-from-position:  ;
--tw-gradient-via-position:  ;
--tw-gradient-to-position:  ;
--tw-ordinal:  ;
--tw-slashed-zero:  ;
--tw-numeric-figure:  ;
--tw-numeric-spacing:  ;
--tw-numeric-fraction:  ;
--tw-ring-inset:  ;
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgb(59 130 246 / 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-shadow: 0 0 #0000;
--tw-shadow-colored: 0 0 #0000;
--tw-blur:  ;
--tw-brightness:  ;
--tw-contrast:  ;
--tw-grayscale:  ;
--tw-hue-rotate:  ;
--tw-invert:  ;
--tw-saturate:  ;
--tw-sepia:  ;
--tw-drop-shadow:  ;
--tw-backdrop-blur:  ;
--tw-backdrop-brightness:  ;
--tw-backdrop-contrast:  ;
--tw-backdrop-grayscale:  ;
--tw-backdrop-hue-rotate:  ;
--tw-backdrop-invert:  ;
--tw-backdrop-opacity:  ;
--tw-backdrop-saturate:  ;
--tw-backdrop-sepia:  ;
}

.fixed{
position: fixed;
}

.bottom-0{
bottom: 0px;
}

.left-0{
left: 0px;
}

.table{
display: table;
}

.h-12{
height: 3rem;
}

.w-1/2{
width: 50%;
}

.w-full{
width: 100%;
}

.border-collapse{
border-collapse: collapse;
}

.border-spacing-0{
--tw-border-spacing-x: 0px;
--tw-border-spacing-y: 0px;
border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
}

.whitespace-nowrap{
white-space: nowrap;
}

.border-b{
border-bottom-width: 1px;
}

.border-b-2{
border-bottom-width: 2px;
}

.border-r{
border-right-width: 1px;
}

.border-main{
border-color: #00AB55;
}

.bg-main{
background-color: #00AB55;
}

.bg-slate-100{
background-color: #f1f5f9;
}

.p-3{
padding: 0.75rem;
}

.px-14{
padding-left: 3.5rem;
padding-right: 3.5rem;
}

.px-2{
padding-left: 0.5rem;
padding-right: 0.5rem;
}

.py-10{
padding-top: 2.5rem;
padding-bottom: 2.5rem;
}

.py-3{
padding-top: 0.75rem;
padding-bottom: 0.75rem;
}

.py-4{
padding-top: 1rem;
padding-bottom: 1rem;
}

.py-6{
padding-top: 1.5rem;
padding-bottom: 1.5rem;
}

.pb-3{
padding-bottom: 0.75rem;
}

.pl-2{
padding-left: 0.5rem;
}

.pl-3{
padding-left: 0.75rem;
}

.pl-4{
padding-left: 1rem;
}

.pr-3{
padding-right: 0.75rem;
}

.pr-4{
padding-right: 1rem;
}

.text-center{
text-align: center;
}

.text-right{
text-align: right;
}

.align-top{
vertical-align: top;
}

.text-sm{
font-size: 0.875rem;
line-height: 1.25rem;
}

.text-xs{
font-size: 0.75rem;
line-height: 1rem;
}

.font-bold{
font-weight: 700;
}

.italic{
font-style: italic;
}

.text-main{
color: #00AB55;
}

.text-neutral-600{
color: #525252;
}

.text-neutral-700{
color: #404040;
}

.text-slate-300{
color: #cbd5e1;
}

.text-slate-400{
color: #94a3b8;
}

.text-white{
color: #fff;
}

.order-status{
  color: ${st(t.status)};
  text-transform: uppercase;
}

@page {
margin: 0;
}

@media print {
body {
-webkit-print-color-adjust: exact;
}
}

</style>
</head>

<body>
<div>
<div class="py-4">
  <div class="px-14 py-6">
    <table class="w-full border-collapse border-spacing-0">
      <tbody>
        <tr>
          <td class="w-full align-top">
            <div style="display: flex; gap:20px; align-items: center">
              <img src="${W.site.serverFileHost}${a.appLogo}" class="h-12" />
              <span class="font-bold text-main" style="font-size:28px">${a.name}</span>
            </div>
          </td>

          <td class="align-top">
            <div class="text-sm">
              <table class="border-collapse border-spacing-0">
                <tbody>
                  <tr>
                    <td class="border-r pr-4">
                      <div>
                        <p class="whitespace-nowrap text-slate-400 text-right">Date</p>
                        <p class="whitespace-nowrap font-bold text-main text-right">${J().format("MMMM DD, YYYY")}</p>
                      </div>
                      <div>
                          <p class="whitespace-nowrap font-bold text-main text-right">&nbsp;</p>
                      </div>
                    </td>
                    <td class="pl-4">
                      <div>
                        <p class="whitespace-nowrap text-slate-400 text-right">Order #</p>
                        <p class="whitespace-nowrap font-bold text-main text-right">${t.ref}</p>
                      </div>
                      <div>
                          <p class="order-status whitespace-nowrap font-bold text-main text-right">${t.status}</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="bg-slate-100 px-14 py-6 text-sm">
    <table class="w-full border-collapse border-spacing-0">
      <tbody>
        <tr>
          <td class="w-1/2 align-top">
            <div class="text-sm text-neutral-600">
              <p class="font-bold">${a==null?void 0:a.name}</p>
              <p>Number: ${(c=t==null?void 0:t.application)==null?void 0:c.phoneNumber}</p>
              <p>Tax/Vat: ${(x=t==null?void 0:t.application)==null?void 0:x.taxNumber}</p>
              <p>${(i=(n=t.application)==null?void 0:n.address)==null?void 0:i.city}</p>
              <p>${(o=(p=t.application)==null?void 0:p.address)==null?void 0:o.state}</p>
              <p>${(g=(b=t.application)==null?void 0:b.address)==null?void 0:g.country}</p>
            </div>
          </td>
          <td class="w-1/2 align-top text-right">
            <div class="text-sm text-neutral-600">
              <p class="font-bold" style="text-transform: capitalize !important">${t.customer.name}</p>
              <p>Number: ${t.customer.phoneNumber}</p>
              <p>Tax/Vat: ${t.customer.taxNumber}</p>
              <p>${(y=(S=t.customer)==null?void 0:S.address)==null?void 0:y.street}</p>
              <p>${(v=(D=t.customer)==null?void 0:D.address)==null?void 0:v.country}</p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="px-14 py-10 text-sm text-neutral-700">
    <table class="w-full border-collapse border-spacing-0">
      <thead>
        <tr>
          <td class="border-b-2 border-main pb-3 pl-3 font-bold text-main">#</td>
          <td class="border-b-2 border-main pb-3 pl-2 font-bold text-main">Product Name</td>
          <td class="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Rate</td>
          <td class="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">Quantity</td>
          <td class="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">Total</td>
        </tr>
      </thead>
      <tbody>
      ${(d=t.productToOrder)==null?void 0:d.map((m,l)=>`
        <tr>
          <td class="border-b py-3 pl-3">${l}.</td>
          <td class="border-b py-3 pl-2">${m.product.name}</td>
          <td class="border-b py-3 pl-2 text-right">${f(m.snapshotProductPrice||m.product.price)}</td>
          <td class="border-b py-3 pl-2 text-center">${m==null?void 0:m.quantity}</td>
          <td class="border-b py-3 pl-2 text-center">${f(m.snapshotProductPrice*m.quantity)}</td>
        </tr>`)}
        <tr>
          <td colspan="7">
            <table class="w-full border-collapse border-spacing-0">
              <tbody>
                <tr>
                  <td class="w-full"></td>
                  <td>
                    <table class="w-full border-collapse border-spacing-0">
                      <tbody>
                        <tr>
                          <td class="border-b p-3">
                            <div class="whitespace-nowrap text-slate-400">Subtotal:</div>
                          </td>
                          <td class="border-b p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-main">${f(t==null?void 0:t.totalOrderAmount)}</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-3">
                            <div class="whitespace-nowrap text-slate-400">Discount:</div>
                          </td>
                          <td class="p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-main">${t==null?void 0:t.discount}%</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-3">
                            <div class="whitespace-nowrap text-slate-400">Tax (${(t==null?void 0:t.snapshotTaxPercentage)||"0"}%):</div>
                          </td>
                          <td class="p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-main">${t!=null&&t.snapshotTaxPercentage?f(X((t==null?void 0:t.totalOrderAmount)-(t==null?void 0:t.totalOrderAmount)*((t==null?void 0:t.discount)/100),t==null?void 0:t.snapshotTaxPercentage)):"-"}</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="bg-main p-3">
                            <div class="whitespace-nowrap font-bold text-white">Total:</div>
                          </td>
                          <td class="bg-main p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-white">${f(R((t==null?void 0:t.totalOrderAmount)-(t==null?void 0:t.totalOrderAmount)*((t==null?void 0:t.discount)/100),t==null?void 0:t.snapshotTaxPercentage))||"-"}</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="px-14 py-10 text-sm text-neutral-700">
    <p class="text-main font-bold">Terms & Conditions:</p>
    <p class="italic">Delivery within 1/2 days from P.O. and advance payment.</p>
    <p class="italic">Payment 100% advance and before delivery.</p>
    <p class="italic">Delivery: Ex-factory.</p>
    <p class="italic">Warranty: One year "Against Manufacturing defects".the warranty does not include preventive maintenance consumables, Warranty is limited to using original parts.</p>
    </dvi>

    <footer class="fixed bottom-0 left-0 bg-slate-100 w-full text-neutral-600 text-center text-xs py-3">
      ${(u=t==null?void 0:t.application)==null?void 0:u.name}
      <span class="text-slate-300 px-2">|</span>
      ${(T=t==null?void 0:t.application)==null?void 0:T.email}
      <span class="text-slate-300 px-2">|</span>
      ${($=t==null?void 0:t.application)==null?void 0:$.phoneNumber}
    </footer>
  </div>
</div>
</body>
</html>
`},it=C.object({status:C.string().min(1,{message:"Status is required!"})}),wt=({currentOrder:a,open:t,onClose:c,handler:x})=>{const n=w.useMemo(()=>({status:(a==null?void 0:a.status)||""}),[a]);w.useEffect(()=>{b(n)},[a]);const i=M(),{mutate:p}=L({mutationFn:({id:d,payload:u})=>E.patch(I.orderStatus.edit+d,u),onSuccess:async()=>{await i.invalidateQueries({queryKey:["orders"]}),await i.invalidateQueries({queryKey:["order",a.id]}),await i.invalidateQueries({queryKey:["orders","analytics"]})},onSettled:async()=>{},onError:d=>{console.log(d)}}),o=q({resolver:B(it),defaultValues:n}),{reset:b,watch:g,setValue:S,handleSubmit:y,formState:{isSubmitting:D}}=o,v=y(async d=>{try{await p({id:a.id,payload:d}),c()}catch(u){console.error(u)}});return e.jsxs(Q,{fullWidth:!0,open:t,onClose:c,children:[e.jsx(Y,{children:"Order Status"}),e.jsx(A,{}),e.jsxs(G,{methods:o,onSubmit:v,children:[e.jsx(U,{sx:{pt:1,mt:1,display:"flex",justifyContent:"center"},children:e.jsx(P.RadioGroup,{row:!0,name:"status",options:[{label:e.jsxs(r,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(z,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"error.main"}}),"Processing"]}),value:"InProcess"},{label:e.jsxs(r,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(z,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"warning.main"}}),"Ready"]}),value:"Ready"},{label:e.jsxs(r,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(z,{icon:"solar:double-alt-arrow-up-bold-duotone",sx:{color:"info.main"}}),"Delivered"]}),value:"Delivered"}],sx:{gap:6,flexGrow:1}})}),e.jsxs(V,{children:[e.jsx(O,{type:"submit",variant:"contained",children:"Confirm"}),e.jsx(O,{color:"inherit",variant:"outlined",onClick:c,children:"Cancel"})]})]})]})};export{gt as O,ft as P,wt as a};

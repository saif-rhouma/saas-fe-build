import{r as w,h as _,j as e,l as H,I as A,C as K,aW as J,ee as X,e8 as R,dn as M,dp as q,dm as E,am as D,B as i,e as O,ek as Z,S as k,T as s,d0 as N,aS as F}from"./index-DBAnnifB.js";import{b as f}from"./format-number-DHkj0q5I.js";import{z as P,u as G,t as I,a as B,F as z}from"./form-provider-C9WrYleO.js";import{u as L}from"./useMutation-DLdc3eWl.js";import"./image-V4smZB5P.js";import"./editor-CpxSiSi_.js";import{a as U,b as Q,D as V}from"./DialogContent-BOG7TMWB.js";import{D as Y}from"./DialogTitle-m6FUYnnv.js";import{a as W}from"./upload-avatar-CgBNTr-y.js";import{s as tt}from"./schema-helper-CvPOGW5C.js";import{L as et}from"./LoadingButton-CunA2jBP.js";const xt=({order:a})=>{const[t,p]=w.useState(),x=()=>{const o=window.open("","_blank");p(o)},{user:n}=_();return w.useEffect(()=>{const d=at((r=>{var g;let b=r.userOwnedApps;return(g=n==null?void 0:n.roles)!=null&&g.includes("STAFF")&&(b=r.applications),b})(n),a);t==null||t.document.open(),t==null||t.document.write(d),t==null||t.document.close(),t==null||t.print()},[t]),e.jsx(H,{color:"info",onClick:x,children:e.jsx(A,{icon:"solar:printer-minimalistic-bold"})})},at=(a,t)=>{var p,x,n,o,d,r,b,g,C,y,S,v,c,h,T,$;return`
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
              <img src="${K.site.serverFileHost}${a.logo}" class="h-12" />
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
                    </td>
                    <td class="pl-4">
                      <div>
                        <p class="whitespace-nowrap text-slate-400 text-right">Order #</p>
                        <p class="whitespace-nowrap font-bold text-main text-right">${t.ref}</p>
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
              <p>Number: ${(p=t==null?void 0:t.application)==null?void 0:p.phoneNumber}</p>
              <p>Tax/Vat: ${(x=t==null?void 0:t.application)==null?void 0:x.taxNumber}</p>
              <p>${(o=(n=t.application)==null?void 0:n.address)==null?void 0:o.city}</p>
              <p>${(r=(d=t.application)==null?void 0:d.address)==null?void 0:r.state}</p>
              <p>${(g=(b=t.application)==null?void 0:b.address)==null?void 0:g.country}</p>
            </div>
          </td>
          <td class="w-1/2 align-top text-right">
            <div class="text-sm text-neutral-600">
              <p class="font-bold" style="text-transform: capitalize !important">${t.customer.name}</p>
              <p>Number: ${t.customer.phoneNumber}</p>
              <p>Tax/Vat: ${t.customer.taxNumber}</p>
              <p>${(y=(C=t.customer)==null?void 0:C.address)==null?void 0:y.street}</p>
              <p>${(v=(S=t.customer)==null?void 0:S.address)==null?void 0:v.country}</p>
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
      ${(c=t.productToOrder)==null?void 0:c.map((m,l)=>`
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
                            <div class="whitespace-nowrap font-bold text-main">$320.00</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-3">
                            <div class="whitespace-nowrap text-slate-400">Discount:</div>
                          </td>
                          <td class="p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-main">$64.00</div>
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
    <p class="text-main font-bold">Notes</p>
    <p class="italic">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
      for previewing layouts and visual mockups.</p>
    </dvi>

    <footer class="fixed bottom-0 left-0 bg-slate-100 w-full text-neutral-600 text-center text-xs py-3">
      ${(h=t==null?void 0:t.application)==null?void 0:h.name}
      <span class="text-slate-300 px-2">|</span>
      ${(T=t==null?void 0:t.application)==null?void 0:T.email}
      <span class="text-slate-300 px-2">|</span>
      ${($=t==null?void 0:t.application)==null?void 0:$.phoneNumber}
    </footer>
  </div>
</div>
</body>
</html>
`},st=P.object({status:P.string().min(1,{message:"Status is required!"})}),gt=({currentOrder:a,open:t,onClose:p,handler:x})=>{const n=w.useMemo(()=>({status:(a==null?void 0:a.status)||""}),[a]);w.useEffect(()=>{b(n)},[a]);const o=M(),{mutate:d}=L({mutationFn:({id:c,payload:h})=>q.patch(E.orderStatus.edit+c,h),onSuccess:async()=>{await o.invalidateQueries({queryKey:["orders"]}),await o.invalidateQueries({queryKey:["order",a.id]}),await o.invalidateQueries({queryKey:["orders","analytics"]})},onSettled:async()=>{},onError:c=>{console.log(c)}}),r=G({resolver:I(st),defaultValues:n}),{reset:b,watch:g,setValue:C,handleSubmit:y,formState:{isSubmitting:S}}=r,v=y(async c=>{try{await d({id:a.id,payload:c}),p()}catch(h){console.error(h)}});return e.jsxs(U,{fullWidth:!0,open:t,onClose:p,children:[e.jsx(Y,{children:"Order Status"}),e.jsx(D,{}),e.jsxs(B,{methods:r,onSubmit:v,children:[e.jsx(Q,{sx:{pt:1,mt:1,display:"flex",justifyContent:"center"},children:e.jsx(z.RadioGroup,{row:!0,name:"status",options:[{label:e.jsxs(i,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(A,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"error.main"}}),"Processing"]}),value:"InProcess"},{label:e.jsxs(i,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(A,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"warning.main"}}),"Ready"]}),value:"Ready"},{label:e.jsxs(i,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(A,{icon:"solar:double-alt-arrow-up-bold-duotone",sx:{color:"info.main"}}),"Delivered"]}),value:"Delivered"}],sx:{gap:6,flexGrow:1}})}),e.jsxs(V,{children:[e.jsx(O,{type:"submit",variant:"contained",children:"Confirm"}),e.jsx(O,{color:"inherit",variant:"outlined",onClick:p,children:"Cancel"})]})]})]})},it=P.object({amount:P.number().min(1,{message:"Amount is required!"}),paymentDate:tt.date({message:{required_error:"Start date is required!"}}),paymentType:P.string().min(1,{message:"Payment Type is required!"})}),ft=({order:a,payment:t,open:p,onClose:x,handler:n})=>{const o=w.useRef(t),[d,r]=w.useState(),b=w.useCallback(l=>{const u=l[0];r(()=>u)},[]),g=()=>{r(null)},C=M(),y={headers:{"content-type":"multipart/form-data"}},{mutate:S}=L({mutationFn:l=>q.post(E.files.upload,l,y),onSuccess:async({data:l})=>{const{name:u}=l;if(u){const{current:j}=o;j.attachments=u,await n(j)}return l},onSettled:async()=>{r(null),o.current={},await C.invalidateQueries({queryKey:["payments-images"]})},onError:l=>{console.log(l)}}),v={amount:0,paymentType:"",paymentDate:Z()},c=G({resolver:I(it),defaultValues:v}),{reset:h,handleSubmit:T,formState:{isSubmitting:$}}=c,m=T(async l=>{try{const u={...l,orderId:a.id,customerId:a.customer.id};if(d){o.current={...u};const j=new FormData;j.append("file",d),j.append("category","Payment"),await S(j)}else await n(u);h()}catch(u){console.log(u)}});return e.jsxs(U,{fullWidth:!0,maxWidth:"lg",open:p,onClose:x,children:[e.jsx(Y,{children:"Add Payment"}),e.jsxs(B,{methods:c,onSubmit:m,children:[e.jsxs(Q,{children:[e.jsx(D,{}),e.jsxs(k,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(i,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:a.customer.name})]}),e.jsxs(i,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:a.ref})]}),e.jsxs(i,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Date:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:N(a.orderDate)})]}),e.jsxs(i,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Delivery Date:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:a.deliveryDate?N(a.deliveryDate):e.jsx("span",{children:" - "})})]})]}),e.jsx(D,{}),e.jsxs(k,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(i,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:f(R(a.totalOrderAmount-a.totalOrderAmount*(a.discount/100),a==null?void 0:a.snapshotTaxPercentage))||"-"})]}),e.jsxs(i,{display:"flex",children:[e.jsx(s,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(s,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:f(a.orderPaymentAmount)||"-"})]})]}),e.jsx(D,{}),e.jsx(k,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(i,{display:"flex",children:[e.jsx(s,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(s,{component:"span",variant:"subtitle1",children:f(R(a.totalOrderAmount-a.totalOrderAmount*(a.discount/100),a==null?void 0:a.snapshotTaxPercentage)-a.orderPaymentAmount)||"-"})]})}),e.jsx(D,{}),e.jsxs(k,{spacing:2,sx:{pt:4,pb:1},children:[e.jsxs(i,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(z.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),e.jsx(z.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),e.jsxs(i,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(i,{children:e.jsxs(z.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(F,{value:"Cash",children:"Cash"}),e.jsx(F,{value:"Transfer",children:"Transfer"}),e.jsx(F,{value:"Card",children:"Card"})]})}),e.jsxs(k,{spacing:1.5,flexDirection:"row",sx:{height:"56px"},children:[e.jsx(W,{onDrop:b,sx:{height:"auto"}}),d&&e.jsxs(k,{flexDirection:"row",spacing:1,justifyContent:"center",alignItems:"center",sx:{typography:"body2",color:"error.main",cursor:"pointer",border:"solid 1px rgba(0,0,0,0)",p:1,"&:hover":{border:"solid 1px",borderColor:"error.main",borderRadius:1.5}},onClick:g,children:[e.jsx(A,{icon:"solar:trash-bin-trash-bold"}),e.jsx(i,{children:e.jsxs(i,{spacing:3,children:[e.jsx(s,{component:"span",variant:"subtitle2",sx:{flexGrow:1,mr:1},children:"Filename:"}),e.jsx("span",{children:d.name})]})})]})]})]})]})]}),e.jsxs(V,{children:[e.jsx(et,{type:"submit",variant:"contained",children:"Save"}),e.jsx(O,{color:"inherit",variant:"outlined",onClick:()=>{h(),r(null),x()},children:"Cancel"})]})]})]})};export{gt as O,xt as P,ft as a};

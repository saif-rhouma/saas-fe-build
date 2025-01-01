import{r as y,br as rt,dp as Z,dq as X,dn as J,eg as lt,j as e,a5 as $,S as k,B as l,T as o,d1 as K,e8 as R,a7 as N,e as B,X as dt,$ as ct,I as V,C as pt,ab as mt,ea as bt}from"./index-BrVky5Gg.js";import{z as D,u as W,t as tt,a as et,F as z}from"./form-provider-IGnvse7Q.js";import{u as at}from"./useMutation-CE0P_ta-.js";import{b as f}from"./format-number-BYcftzxu.js";import{U as ht}from"./upload-box-ad-BtwdQlbF.js";import"./image-C-59YYlQ.js";import"./editor-DG5O80Yq.js";import{s as ut}from"./schema-helper-DBRyPFKX.js";import{a as it,b as ot,D as st}from"./DialogContent-Bneue424.js";import{D as nt}from"./DialogTitle-5kRkAohy.js";import{L as gt}from"./LoadingButton-a60uG7nr.js";const xt=D.object({amount:D.number().min(1,{message:"Amount is required!"}),paymentDate:ut.date({message:{required_error:"Start date is required!"}}),paymentType:D.string().min(1,{message:"Payment Type is required!"}),notes:D.string().optional()}),At=({order:a,payment:t,open:m,onClose:g,handler:s})=>{const n=y.useRef(t),{t:i}=rt("orders"),[d,c]=y.useState(),x=y.useCallback(r=>{const p=r[0];c(()=>p)},[]),P=()=>{c(null)},v=Z(),S={headers:{"content-type":"multipart/form-data"}},{mutate:j}=at({mutationFn:r=>X.post(J.files.upload,r,S),onSuccess:async({data:r})=>{const{name:p}=r;if(p){const{current:u}=n;u.attachments=p,await s(u)}return r},onSettled:async()=>{c(null),n.current={},await v.invalidateQueries({queryKey:["payments-images"]})},onError:r=>{console.log(r)}}),b={paymentType:"",notes:"",paymentDate:lt()},h=W({resolver:tt(xt),defaultValues:b}),{reset:C,handleSubmit:T,formState:{isSubmitting:F}}=h,A=T(async r=>{try{const p={...r,orderId:a.id,customerId:a.customer.id};if(d){n.current={...p};const u=new FormData;u.append("file",d),u.append("category","Payment"),await j(u)}else await s(p);C()}catch(p){console.log(p)}});return e.jsxs(it,{fullWidth:!0,maxWidth:"lg",open:m,onClose:g,children:[e.jsx(nt,{children:i("detailView.orderPaymentDialog.addPaymentTitle")}),e.jsxs(et,{methods:h,onSubmit:A,children:[e.jsxs(ot,{children:[e.jsx($,{}),e.jsxs(k,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(l,{display:"flex",children:[e.jsx(o,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:i("detailView.orderPaymentDialog.customerName")}),e.jsx(o,{component:"span",variant:"body2",sx:{color:"text.secondary",textTransform:"capitalize"},children:a.customer.name})]}),e.jsxs(l,{display:"flex",children:[e.jsx(o,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:i("detailView.orderPaymentDialog.orderRef")}),e.jsx(o,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:a.ref})]}),e.jsxs(l,{display:"flex",children:[e.jsx(o,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:i("detailView.orderPaymentDialog.orderDate")}),e.jsx(o,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:K(a.orderDate)})]}),e.jsxs(l,{display:"flex",children:[e.jsx(o,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:i("detailView.orderPaymentDialog.deliveryDate")}),e.jsx(o,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:a.deliveryDate?K(a.deliveryDate):e.jsx("span",{children:" - "})})]})]}),e.jsx($,{}),e.jsxs(k,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(l,{display:"flex",children:[e.jsx(o,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:i("detailView.orderPaymentDialog.orderAmount")}),e.jsx(o,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:f(R(a.totalOrderAmount-a.totalOrderAmount*(a.discount/100),a==null?void 0:a.snapshotTaxPercentage))||"-"})]}),e.jsxs(l,{display:"flex",children:[e.jsx(o,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:i("detailView.orderPaymentDialog.paidAmount")}),e.jsx(o,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:f(a.orderPaymentAmount)||"-"})]})]}),e.jsx($,{}),e.jsx(k,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(l,{display:"flex",children:[e.jsx(o,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:i("detailView.orderPaymentDialog.balance")}),e.jsx(o,{component:"span",variant:"subtitle1",children:f(R(a.totalOrderAmount-a.totalOrderAmount*(a.discount/100),a==null?void 0:a.snapshotTaxPercentage)-a.orderPaymentAmount)||"-"})]})}),e.jsx($,{}),e.jsxs(k,{spacing:2,sx:{pt:2,pb:1},children:[e.jsxs(l,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(z.Text,{type:"number",name:"amount",label:i("detailView.orderPaymentDialog.paidAmountLabel"),sx:{flexGrow:1},placeholder:"Amount",InputLabelProps:{shrink:!0}}),e.jsx(z.DatePicker,{name:"paymentDate",label:i("detailView.orderPaymentDialog.dateLabel"),sx:{flexGrow:1},InputLabelProps:{shrink:!0}})]}),e.jsxs(l,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(l,{children:e.jsxs(z.Select,{name:"paymentType",label:i("detailView.orderPaymentDialog.paymentTypeLabel"),children:[e.jsx(N,{value:"Cash",children:i("detailView.orderPaymentDialog.cash")}),e.jsx(N,{value:"Transfer",children:i("detailView.orderPaymentDialog.transfer")}),e.jsx(N,{value:"Card",children:i("detailView.orderPaymentDialog.card")})]})}),e.jsx(k,{spacing:1.5,flexDirection:"row",sx:{height:"56px"},children:e.jsx(ht,{file:d,handleDelete:P,handleDropSingleFile:x})})]}),e.jsx(k,{spacing:1,children:e.jsx(z.Text,{label:i("detailView.orderPaymentDialog.notesLabel"),name:"notes",placeholder:"Notes / Remarks",InputLabelProps:{shrink:!0},multiline:!0,rows:2})})]})]}),e.jsxs(st,{children:[e.jsx(gt,{type:"submit",variant:"contained",children:i("detailView.orderPaymentDialog.save")}),e.jsx(B,{color:"inherit",variant:"outlined",onClick:()=>{C(),c(null),g()},children:i("detailView.orderPaymentDialog.cancel")})]})]})]})},Vt=({order:a})=>{const[t,m]=y.useState(),g=()=>{const n=window.open("","_blank");m(n)},{user:s}=dt();return y.useEffect(()=>{const i=wt((d=>{var x;let c=d.userOwnedApps;return(x=s==null?void 0:s.roles)!=null&&x.includes("STAFF")&&(c=d.applications),c})(s),a);t==null||t.document.open(),t==null||t.document.write(i),t==null||t.document.close(),t==null||t.print()},[t]),e.jsx(ct,{onClick:g,children:e.jsx(V,{icon:"solar:printer-minimalistic-bold",color:"grey.800"})})},wt=(a,t)=>{var m,g,s,n,i,d,c,x,P,v,S,j,b,h,C,T,F,A,r,p,u,O,M,E,L,q,I,G,H,U,Q,Y;return`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <title>Order</title>
    <style>
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
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
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
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
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
      [role='button'] {
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

      *,
      ::before,
      ::after {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgb(59 130 246 / 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
      }

      ::backdrop {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgb(59 130 246 / 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
      }

      .fixed {
        position: fixed;
      }

      .bottom-0 {
        bottom: 0px;
      }

      .left-0 {
        left: 0px;
      }

      .table {
        display: table;
      }

      .h-12 {
        height: 3rem;
      }

      .w-1/2 {
        width: 50%;
      }

      .w-full {
        width: 100%;
      }

      .border-collapse {
        border-collapse: collapse;
      }

      .border-spacing-0 {
        --tw-border-spacing-x: 0px;
        --tw-border-spacing-y: 0px;
        border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
      }

      .whitespace-nowrap {
        white-space: nowrap;
      }

      .border-b {
        border-bottom-width: 1px;
      }

      .border-b-2 {
        border-bottom-width: 2px;
      }

      .border-r {
        border-right-width: 1px;
        border-right-color: #222222;
      }

      .border-main {
        border-color: #0CBB97;
      }

      .bg-main {
        background-color: #00ab55;
      }

      .bg-slate-100 {
        background-color: #f1f5f9;
      }

      .p-3 {
        padding: 0.75rem;
      }

      .px-14 {
        padding-left: 3.5rem;
        padding-right: 3.5rem;
      }

      .px-2 {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
      }

      .py-10 {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
      }

      .py-3 {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
      }

      .py-4 {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }

      .py-6 {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }

      .pb-3 {
        padding-bottom: 0.75rem;
      }

      .pt-3 {
        padding-top: 0.75rem;
      }

      .pl-2 {
        padding-left: 0.5rem;
      }

      .pl-3 {
        padding-left: 0.75rem;
      }

      .pl-4 {
        padding-left: 1rem;
      }

      .pl-5 {
        padding-left: 2rem;
      }

      .pr-3 {
        padding-right: 0.75rem;
      }

      .pr-4 {
        padding-right: 1rem;
      }

      .pr-5 {
        padding-right: 2rem;
      }

      .text-center {
        text-align: center;
      }

      .text-right {
        text-align: right;
      }

      .align-top {
        vertical-align: top;
      }

      .text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }

      .text-xs {
        font-size: 0.75rem;
        line-height: 1rem;
      }

      .font-bold {
        font-weight: 700;
      }

      .italic {
        font-style: italic;
      }

      .text-main {
        color: #00ab55;
      }

      .text-neutral-600 {
        color: #525252;
      }

      .text-neutral-700 {
        color: #404040;
      }

      .text-slate-300 {
        color: #cbd5e1;
      }

      .text-slate-400 {
        color: #94a3b8;
      }

      .text-white {
        color: #fff;
      }

      @page {
        margin: 0;
      }


      @media print {
        body {
          -webkit-print-color-adjust: exact;
          margin: 0;
          padding: 0;
        }
        /* Footer styles for page numbers */
        @page {
          size: A4;
        }
      }
      footer > svg{
        position: fixed;
        z-index: 999;
        bottom:  0;
        left: 50%;
        transform: translateX(-50%);
      }
      footer > .bottom-bar-dark{
        position: fixed;
        bottom: 0;
        width: 40%;
        left: 0;
        height: 38px;
        background-color: #121415;
        z-index: 1;
      }
      footer > .bottom-bar-green{
        position: fixed;
        bottom: 0;
        width: 40%;
        right: 0;
        height: 38px;
        background-color: #0CBB97;
        z-index: 1;
      } 
      header {
        position: fixed;
        top: 0;
        width: 30%;
        height: 28px;
        background-color: #0CBB97;
        z-index: 1;
      }
      .top-bar-img {
        z-index: 999;
        top: 0;
        left: 30%;
        position: absolute;
      }
      .main-background-color {
        background-color: #0CBB97;
      }
      .tr-background-color {
        background-color: #E7E7E7;
      }
      .zi-999{
        z-index: 9999;
      }
      .conditional-section {
        page-break-before: always;
        margin-top: 30px;
      }
    </style>
  </head>

  <header>
      <svg class="top-bar-img" width="341" height="28" viewBox="0 0 341 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M316.464 28H0V0H341L316.464 28Z" fill="#0CBB97"/>
      </svg>
  </header>
    <div class="py-4">
      <div class="px-14 py-6">
        <table class="w-full border-collapse border-spacing-0">
          <tbody>
            <tr>
              <td class="w-full align-top" style="position: relative">
                <div
                  style="
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    object-fit: contain;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                  "
                >
                  <img
                    src="${pt.site.serverFileHost}${a.appLogo}"
                    class="h-12"
                    style="height: 100%; object-fit: contain"
                  />
                </div>
              </td>

              <td class="align-top">
                <div class="text-sm">
                  <table class="border-collapse border-spacing-0">
                    <tbody>
                      <tr>
                        <td class="border-r pr-5">
                          <div>
                            <p
                              class="whitespace-nowrap text-slate-400 text-right"
                            >
                              Date
                            </p>
                            <p class="whitespace-nowrap text-right">
                            ${mt(t.orderDate).format("MMMM DD, YYYY")}
                            </p>
                          </div>
                        </td>
                        <td class="pl-5">
                          <div>
                            <p
                              class="whitespace-nowrap text-slate-400 text-right"
                            >
                              Order #
                            </p>
                            <p class="whitespace-nowrap text-right">${t.ref}</p>
                            <p
                              class="whitespace-nowrap text-slate-400 text-right"
                            >
                              Status: ${t.status}
                            </p>
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

      <div class="px-14 py-6 text-sm">
        <table class="w-full border-collapse border-spacing-0">
          <tbody>
            <tr>
              <td class="w-1/2 align-top">
                <div class="text-sm text-neutral-600">
                  <p class="font-bold">${(m=t.application)==null?void 0:m.name}</p>
                  <p>Number: ${(g=t==null?void 0:t.application)==null?void 0:g.phoneNumber}</p>
                  <p>Tax/Vat: ${(s=t==null?void 0:t.application)==null?void 0:s.taxNumber}</p>
                  <p>${(i=(n=t.application)==null?void 0:n.address)==null?void 0:i.city}</p>
                  <p>${(c=(d=t.application)==null?void 0:d.address)==null?void 0:c.state}</p>
                  <p>${(P=(x=t.application)==null?void 0:x.address)==null?void 0:P.country}</p>
                </div>
              </td>
              <td class="w-1/2 align-top text-right">
                <div class="text-sm text-neutral-600">
                  <p
                    class="font-bold"
                    style="text-transform: capitalize !important"
                  >
                    ${t.customer.name}
                  </p>
                  <p>Number: ${t.customer.phoneNumber}</p>
                  <p>Tax/Vat: ${t.customer.taxNumber}</p>
                  <p>${(S=(v=t.customer)==null?void 0:v.address)==null?void 0:S.street}</p>
                  <p>${(b=(j=t.customer)==null?void 0:j.address)==null?void 0:b.country}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="px-14 py-10 text-sm text-neutral-700">
        <table class="w-full border-collapse border-spacing-0">
          <thead>
            <tr class="main-background-color">
              <td
                class="border-b-2 border-main pb-3 pt-3 pl-3 font-bold text-white"
              >
                #
              </td>
              <td
                class="border-b-2 border-main pb-3 pt-3 pl-2 font-bold text-white"
              >
                Product Name
              </td>
              <td
                class="border-b-2 border-main pb-3 pt-3 pl-2 text-right font-bold text-white"
              >
                Rate
              </td>
              <td
                class="border-b-2 border-main pb-3 pt-3 pl-2 text-center font-bold text-white"
              >
                Quantity
              </td>
              <td
                class="border-b-2 border-main pb-3 pt-3 pl-2 text-center font-bold text-white"
              >
                Total
              </td>
            </tr>
          </thead>
          <tbody>
            ${(h=t.productToOrder)==null?void 0:h.map((w,_)=>`
            <tr ${_%2===0&&'class="tr-background-color"'}>
              <td class="border-b py-3 pl-3">${_}.</td>
              <td class="border-b py-3 pl-2">${w.product.name}</td>
              <td class="border-b py-3 pl-2 text-right">
                ${f(w.snapshotProductPrice||w.product.price,a.currencySymbol)}
              </td>
              <td class="border-b py-3 pl-2 text-center">
                ${w==null?void 0:w.quantity}
              </td>
              <td class="border-b py-3 pl-2 text-center">
                ${f(w.snapshotProductPrice*w.quantity,a.currencySymbol)}
              </td>
            </tr>
            `)}
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
                                <div class="whitespace-nowrap font-bold">
                                  Subtotal:
                                </div>
                              </td>
                              <td class="border-b p-3 text-right">
                                <div class="whitespace-nowrap text-slate-400">
                                  ${f(t==null?void 0:t.totalOrderAmount,a.currencySymbol)}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="p-3">
                                <div class="whitespace-nowrap font-bold ">
                                  Discount:
                                </div>
                              </td>
                              <td class="p-3 text-right">
                                <div class="whitespace-nowrap text-slate-400">
                                  ${t==null?void 0:t.discount}%
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="p-3">
                                <div class="whitespace-nowrap font-bold ">
                                  Tax (${(t==null?void 0:t.snapshotTaxPercentage)||"0"}%):
                                </div>
                              </td>
                              <td class="p-3 text-right">
                                <div class="whitespace-nowrap text-slate-400">
                                  ${t!=null&&t.snapshotTaxPercentage?f(bt((t==null?void 0:t.totalOrderAmount)-(t==null?void 0:t.totalOrderAmount)*((t==null?void 0:t.discount)/100),t==null?void 0:t.snapshotTaxPercentage),a.currencySymbol):"-"}
                                </div>
                              </td>
                            </tr>
                            <tr class="tr-background-color">
                              <td class="p-3">
                                <div
                                  class="whitespace-nowrap font-bold "
                                >
                                  Total:
                                </div>
                              </td>
                              <td class="p-3 text-right">
                                <div
                                  class="whitespace-nowrap text-slate-400"
                                >
                                  ${f(R((t==null?void 0:t.totalOrderAmount)-(t==null?void 0:t.totalOrderAmount)*((t==null?void 0:t.discount)/100),t==null?void 0:t.snapshotTaxPercentage),a.currencySymbol)||"-"}
                                </div>
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
    <div class="${((C=t.productToOrder)==null?void 0:C.length)>8&&"conditional-section"}">
    ${((T=t.productToOrder)==null?void 0:T.length)>8?`      <div class="px-14 py-6 text-sm">
        <table class="w-full border-collapse border-spacing-0">
          <tbody>
            <tr>
              <td class="w-1/2 align-top">
                <div class="text-sm text-neutral-600">
                  <p class="font-bold">${(F=t.application)==null?void 0:F.name}</p>
                  <p>Number: ${(A=t==null?void 0:t.application)==null?void 0:A.phoneNumber}</p>
                  <p>Tax/Vat: ${(r=t==null?void 0:t.application)==null?void 0:r.taxNumber}</p>
                  <p>${(u=(p=t.application)==null?void 0:p.address)==null?void 0:u.city}</p>
                  <p>${(M=(O=t.application)==null?void 0:O.address)==null?void 0:M.state}</p>
                  <p>${(L=(E=t.application)==null?void 0:E.address)==null?void 0:L.country}</p>
                </div>
              </td>
              <td class="w-1/2 align-top text-right">
                <div class="text-sm text-neutral-600">
                  <p
                    class="font-bold"
                    style="text-transform: capitalize !important"
                  >
                    ${t.customer.name}
                  </p>
                  <p>Number: ${t.customer.phoneNumber}</p>
                  <p>Tax/Vat: ${t.customer.taxNumber}</p>
                  <p>${(I=(q=t.customer)==null?void 0:q.address)==null?void 0:I.street}</p>
                  <p>${(H=(G=t.customer)==null?void 0:G.address)==null?void 0:H.country}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
`:""}
      <div class=" py-6 text-sm">
        <table class="w-full border-collapse border-spacing-0">
          <tbody>
            <tr>
              <td class="w-1/2 align-top">
                <div class="px-14 py-5 text-sm text-neutral-700">
                  <p class="font-bold">Terms & Conditions:</p>
                  <p class="italic">Delivery within 1/2 days from P.O. and advance payment.</p>
                  <p class="italic">Payment 100% advance and before delivery.</p>
                  <p class="italic">Delivery: Ex-factory.</p>
                  <p class="italic">Warranty: One year "Against Manufacturing defects".the warranty does not include preventive maintenance consumables, Warranty is limited to using original parts.</p>
                </div>
              </td>
              <td  class="px-14 py-5 text-sm text-neutral-700" style="display: flex; justify-content: right;">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div class="fixed zi-999 bottom-0 left-0 w-full text-white text-neutral-600 text-xs pl-5 py-3">
      ${(U=t.application)==null?void 0:U.name}
      <span class="text-main px-2">|</span>
      ${(Q=t.application)==null?void 0:Q.email}
      <span class="text-main px-2">|</span>
      ${(Y=t.application)==null?void 0:Y.phoneNumber}
    </div>
    <footer>
      <div class="bottom-bar-dark">
      </div>
      <div class="bottom-bar-green">
      </div>
        <svg width="595" height="38" viewBox="0 0 595 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M316.464 38H0V0H341L316.464 38Z" fill="#121415"/>
        <path d="M349 0L325 38H336.766H595V0H349Z" fill="#0CBB97"/>
        </svg>
    </footer>
  </div>
  </body>
</html>
`},ft=D.object({status:D.string().min(1,{message:"Status is required!"})}),Ft=({currentOrder:a,open:t,onClose:m,handler:g})=>{const s=y.useMemo(()=>({status:(a==null?void 0:a.status)||""}),[a]);y.useEffect(()=>{c(s)},[a]);const n=Z(),{mutate:i}=at({mutationFn:({id:b,payload:h})=>X.patch(J.orderStatus.edit+b,h),onSuccess:async()=>{await n.invalidateQueries({queryKey:["orders"]}),await n.invalidateQueries({queryKey:["order",a.id]}),await n.invalidateQueries({queryKey:["orders","analytics"]})},onSettled:async()=>{},onError:b=>{console.log(b)}}),d=W({resolver:tt(ft),defaultValues:s}),{reset:c,watch:x,setValue:P,handleSubmit:v,formState:{isSubmitting:S}}=d,j=v(async b=>{try{await i({id:a.id,payload:b}),m()}catch(h){console.error(h)}});return e.jsxs(it,{fullWidth:!0,open:t,onClose:m,children:[e.jsx(nt,{children:"Order Status"}),e.jsx($,{}),e.jsxs(et,{methods:d,onSubmit:j,children:[e.jsx(ot,{sx:{pt:1,mt:1,display:"flex",justifyContent:"center"},children:e.jsx(z.RadioGroup,{row:!0,name:"status",options:[{label:e.jsxs(l,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(V,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"error.main"}}),"Processing"]}),value:"InProcess"},{label:e.jsxs(l,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(V,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"warning.main"}}),"Ready"]}),value:"Ready"},{label:e.jsxs(l,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(V,{icon:"solar:double-alt-arrow-up-bold-duotone",sx:{color:"info.main"}}),"Delivered"]}),value:"Delivered"}],sx:{gap:6,flexGrow:1}})}),e.jsxs(st,{children:[e.jsx(B,{type:"submit",variant:"contained",children:"Confirm"}),e.jsx(B,{color:"inherit",variant:"outlined",onClick:m,children:"Cancel"})]})]})]})};export{At as O,Vt as P,Ft as a};

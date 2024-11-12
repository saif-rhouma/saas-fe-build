import{j as t,C as q,d0 as R,ea as I,e8 as _,r as D,h as J,l as X,I as F,aW as Z,dn as M,dp as E,dm as G,am as P,B as p,e as N,em as tt,S as z,T as d,aS as B}from"./index-KK-mXlr9.js";import{F as et,V as a,I as st,T as i,D as at,a as it,S as nt}from"./react-pdf.browser-DLZ7fuBr.js";import{b as y}from"./format-number-BAsKNL1v.js";import{z as $,u as L,t as H,a as Q,F as O}from"./form-provider-B-2G1ur0.js";import{u as U}from"./useMutation-BLbhE-7U.js";import"./image-DBvfg_3r.js";import"./editor-BLpnXJL9.js";import{a as V,b as W,D as Y}from"./DialogContent-DEOZCbff.js";import{D as K}from"./DialogTitle-BbIsmimy.js";import{a as ot}from"./upload-avatar-DWVWcCXJ.js";import{s as lt}from"./schema-helper-ZDfKx4k_.js";import{L as rt}from"./LoadingButton-C_dnO_6P.js";et.register({family:"Roboto",fonts:[{src:"/fonts/Roboto-Regular.ttf"},{src:"/fonts/Roboto-Bold.ttf"}]});const ct=()=>D.useMemo(()=>nt.create({page:{fontSize:9,lineHeight:1.6,fontFamily:"Roboto",backgroundColor:"#FFFFFF",padding:"40px 24px 120px 24px"},footer:{left:0,right:0,bottom:0,padding:24,margin:"auto",borderTopWidth:1,borderStyle:"solid",position:"absolute",borderColor:"#e9ecef"},container:{flexDirection:"row",justifyContent:"space-between"},mb4:{marginBottom:4},mb8:{marginBottom:8},mb40:{marginBottom:40},h3:{fontSize:16,fontWeight:700},h4:{fontSize:13,fontWeight:700},body1:{fontSize:10},subtitle1:{fontSize:10,fontWeight:700},body2:{fontSize:9},subtitle2:{fontSize:9,fontWeight:700},table:{display:"flex",width:"100%"},row:{padding:"10px 0 8px 0",flexDirection:"row",borderBottomWidth:1,borderStyle:"solid",borderColor:"#e9ecef"},cell_1:{width:"5%"},cell_2:{width:"50%"},cell_3:{width:"15%",paddingLeft:32},cell_4:{width:"15%",paddingLeft:8},cell_5:{width:"15%"},noBorder:{paddingTop:"10px",paddingBottom:0,borderBottomWidth:0}}),[]),Ct=({order:s})=>{var h,o,x,f,k,j,C,v,m,u,T;const e=ct(),b=t.jsxs(a,{style:[e.container,e.mb40],children:[t.jsx(st,{source:`${q.site.serverFileHost+((h=s.application)==null?void 0:h.logo)}`,style:{width:48,height:48}}),t.jsxs(a,{style:{alignItems:"flex-end",flexDirection:"column"},children:[t.jsx(i,{style:[e.h3,{textTransform:"capitalize"}],children:(o=s.application)==null?void 0:o.name}),t.jsxs(i,{children:[" ",s.ref," "]})]})]}),w=t.jsxs(a,{style:[e.container,e.footer],fixed:!0,children:[t.jsxs(a,{style:{width:"75%"},children:[t.jsx(i,{style:e.subtitle2,children:"NOTES"}),t.jsx(i,{children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),t.jsxs(a,{style:{width:"25%",textAlign:"right"},children:[t.jsx(i,{style:e.subtitle2,children:"Have a question?"}),t.jsx(i,{children:(x=s.application)==null?void 0:x.email})]})]}),l=t.jsxs(a,{style:[e.container,e.mb40],children:[t.jsxs(a,{style:{width:"50%"},children:[t.jsx(i,{style:[e.subtitle2,e.mb4],children:"Order from"}),t.jsx(i,{style:[e.body2,{textTransform:"capitalize"}],children:(f=s.application)==null?void 0:f.name}),t.jsx(i,{style:e.body2,children:(j=(k=s.application)==null?void 0:k.address)==null?void 0:j.country}),t.jsx(i,{style:e.body2,children:(C=s.application)==null?void 0:C.phoneNumber})]}),t.jsxs(a,{style:{width:"50%"},children:[t.jsx(i,{style:[e.subtitle2,e.mb4],children:"Order to"}),t.jsx(i,{style:[e.body2,{textTransform:"capitalize"}],children:(v=s==null?void 0:s.customer)==null?void 0:v.name}),t.jsx(i,{style:e.body2,children:(m=s==null?void 0:s.customer)==null?void 0:m.fullAddress}),t.jsx(i,{style:e.body2,children:(u=s==null?void 0:s.customer)==null?void 0:u.phoneNumber})]})]});a,e.container,e.mb40,a,i,e.subtitle2,e.mb4,i,e.body2,R(s.orderDate),a,i,e.subtitle2,e.mb4,i,e.body2,R(s.orderDate);const r=t.jsxs(t.Fragment,{children:[t.jsx(i,{style:[e.subtitle1,e.mb8],children:"Quotation details"}),t.jsxs(a,{style:e.table,children:[t.jsx(a,{children:t.jsxs(a,{style:e.row,children:[t.jsx(a,{style:e.cell_1,children:t.jsx(i,{style:e.subtitle2,children:"#"})}),t.jsx(a,{style:e.cell_2,children:t.jsx(i,{style:e.subtitle2,children:"Product Name"})}),t.jsx(a,{style:e.cell_3,children:t.jsx(i,{style:e.subtitle2,children:"Qty"})}),t.jsx(a,{style:e.cell_4,children:t.jsx(i,{style:e.subtitle2,children:"Unit price"})}),t.jsx(a,{style:[e.cell_5,{textAlign:"right"}],children:t.jsx(i,{style:e.subtitle2,children:"Total"})})]})}),t.jsxs(a,{children:[(T=s.productToOrder)==null?void 0:T.map((n,g)=>{var c;return t.jsxs(a,{style:e.row,children:[t.jsx(a,{style:e.cell_1,children:t.jsx(i,{children:g+1})}),t.jsx(a,{style:e.cell_2,children:t.jsx(i,{style:e.subtitle2,children:(c=n==null?void 0:n.product)==null?void 0:c.name})}),t.jsx(a,{style:e.cell_3,children:t.jsx(i,{children:n.quantity})}),t.jsx(a,{style:e.cell_4,children:t.jsx(i,{children:n.snapshotProductPrice})}),t.jsx(a,{style:[e.cell_5,{textAlign:"right"}],children:t.jsx(i,{children:y(n.snapshotProductPrice*n.quantity)})})]},n.id)}),[{name:"Subtotal",value:y(s==null?void 0:s.totalOrderAmount)},{name:"Discount",value:`- ${s==null?void 0:s.discount}%`},{name:`Taxes (${(s==null?void 0:s.snapshotTaxPercentage)||"0"}%)`,value:y(I((s==null?void 0:s.totalOrderAmount)-(s==null?void 0:s.totalOrderAmount)*((s==null?void 0:s.discount)/100),s==null?void 0:s.snapshotTaxPercentage))},{name:"Total",value:y(_((s==null?void 0:s.totalOrderAmount)-(s==null?void 0:s.totalOrderAmount)*((s==null?void 0:s.discount)/100),s==null?void 0:s.snapshotTaxPercentage)),styles:e.h4}].map(n=>t.jsxs(a,{style:[e.row,e.noBorder],children:[t.jsx(a,{style:e.cell_1}),t.jsx(a,{style:e.cell_2}),t.jsx(a,{style:e.cell_3}),t.jsx(a,{style:e.cell_4,children:t.jsx(i,{style:n.styles,children:n.name})}),t.jsx(a,{style:[e.cell_5,{textAlign:"right"}],children:t.jsx(i,{style:n.styles,children:n.value})})]},n.name))]})]})]});return t.jsx(at,{children:t.jsxs(it,{size:"A4",style:e.page,children:[b,l,r,w]})})},Dt=({order:s})=>{const[e,b]=D.useState(),w=()=>{const r=window.open("","_blank");b(r)},{user:l}=J();return D.useEffect(()=>{const h=dt((o=>{var f;let x=o.userOwnedApps;return(f=l==null?void 0:l.roles)!=null&&f.includes("STAFF")&&(x=o.applications),x})(l),s);e==null||e.document.open(),e==null||e.document.write(h),e==null||e.document.close(),e==null||e.print()},[e]),t.jsx(X,{color:"info",onClick:w,children:t.jsx(F,{icon:"solar:printer-minimalistic-bold"})})},dt=(s,e)=>{var b,w,l,r,h,o,x,f,k,j,C,v,m,u,T,n;return`
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
              <img src="${q.site.serverFileHost}${s.logo}" class="h-12" />
              <span class="font-bold text-main" style="font-size:28px">${s.name}</span>
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
                        <p class="whitespace-nowrap font-bold text-main text-right">${Z().format("MMMM DD, YYYY")}</p>
                      </div>
                    </td>
                    <td class="pl-4">
                      <div>
                        <p class="whitespace-nowrap text-slate-400 text-right">Order #</p>
                        <p class="whitespace-nowrap font-bold text-main text-right">${e.ref}</p>
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
              <p class="font-bold">${s==null?void 0:s.name}</p>
              <p>Number: ${(b=e==null?void 0:e.application)==null?void 0:b.phoneNumber}</p>
              <p>Tax/Vat: ${(w=e==null?void 0:e.application)==null?void 0:w.taxNumber}</p>
              <p>${(r=(l=e.application)==null?void 0:l.address)==null?void 0:r.city}</p>
              <p>${(o=(h=e.application)==null?void 0:h.address)==null?void 0:o.state}</p>
              <p>${(f=(x=e.application)==null?void 0:x.address)==null?void 0:f.country}</p>
            </div>
          </td>
          <td class="w-1/2 align-top text-right">
            <div class="text-sm text-neutral-600">
              <p class="font-bold" style="text-transform: capitalize !important">${e.customer.name}</p>
              <p>Number: ${e.customer.phoneNumber}</p>
              <p>Tax/Vat: ${e.customer.taxNumber}</p>
              <p>${(j=(k=e.customer)==null?void 0:k.address)==null?void 0:j.street}</p>
              <p>${(v=(C=e.customer)==null?void 0:C.address)==null?void 0:v.country}</p>
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
      ${(m=e.productToOrder)==null?void 0:m.map((g,c)=>`
        <tr>
          <td class="border-b py-3 pl-3">${c}.</td>
          <td class="border-b py-3 pl-2">${g.product.name}</td>
          <td class="border-b py-3 pl-2 text-right">${y(g.snapshotProductPrice||g.product.price)}</td>
          <td class="border-b py-3 pl-2 text-center">${g==null?void 0:g.quantity}</td>
          <td class="border-b py-3 pl-2 text-center">${y(g.snapshotProductPrice*g.quantity)}</td>
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
                            <div class="whitespace-nowrap font-bold text-main">${y(e==null?void 0:e.totalOrderAmount)}</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-3">
                            <div class="whitespace-nowrap text-slate-400">Discount:</div>
                          </td>
                          <td class="p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-main">${e==null?void 0:e.discount}%</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="p-3">
                            <div class="whitespace-nowrap text-slate-400">Tax (${(e==null?void 0:e.snapshotTaxPercentage)||"0"}%):</div>
                          </td>
                          <td class="p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-main">${e!=null&&e.snapshotTaxPercentage?y(I((e==null?void 0:e.totalOrderAmount)-(e==null?void 0:e.totalOrderAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage)):"-"}</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="bg-main p-3">
                            <div class="whitespace-nowrap font-bold text-white">Total:</div>
                          </td>
                          <td class="bg-main p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-white">${y(_((e==null?void 0:e.totalOrderAmount)-(e==null?void 0:e.totalOrderAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage))||"-"}</div>
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
      ${(u=e==null?void 0:e.application)==null?void 0:u.name}
      <span class="text-slate-300 px-2">|</span>
      ${(T=e==null?void 0:e.application)==null?void 0:T.email}
      <span class="text-slate-300 px-2">|</span>
      ${(n=e==null?void 0:e.application)==null?void 0:n.phoneNumber}
    </footer>
  </div>
</div>
</body>
</html>
`},pt=$.object({status:$.string().min(1,{message:"Status is required!"})}),Tt=({currentOrder:s,open:e,onClose:b,handler:w})=>{const l=D.useMemo(()=>({status:(s==null?void 0:s.status)||""}),[s]);D.useEffect(()=>{x(l)},[s]);const r=M(),{mutate:h}=U({mutationFn:({id:m,payload:u})=>E.patch(G.orderStatus.edit+m,u),onSuccess:async()=>{await r.invalidateQueries({queryKey:["orders"]}),await r.invalidateQueries({queryKey:["order",s.id]}),await r.invalidateQueries({queryKey:["orders","analytics"]})},onSettled:async()=>{},onError:m=>{console.log(m)}}),o=L({resolver:H(pt),defaultValues:l}),{reset:x,watch:f,setValue:k,handleSubmit:j,formState:{isSubmitting:C}}=o,v=j(async m=>{try{await h({id:s.id,payload:m}),b()}catch(u){console.error(u)}});return t.jsxs(V,{fullWidth:!0,open:e,onClose:b,children:[t.jsx(K,{children:"Order Status"}),t.jsx(P,{}),t.jsxs(Q,{methods:o,onSubmit:v,children:[t.jsx(W,{sx:{pt:1,mt:1,display:"flex",justifyContent:"center"},children:t.jsx(O.RadioGroup,{row:!0,name:"status",options:[{label:t.jsxs(p,{sx:{display:"flex",justifyContent:"center",gap:1},children:[t.jsx(F,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"error.main"}}),"Processing"]}),value:"InProcess"},{label:t.jsxs(p,{sx:{display:"flex",justifyContent:"center",gap:1},children:[t.jsx(F,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"warning.main"}}),"Ready"]}),value:"Ready"},{label:t.jsxs(p,{sx:{display:"flex",justifyContent:"center",gap:1},children:[t.jsx(F,{icon:"solar:double-alt-arrow-up-bold-duotone",sx:{color:"info.main"}}),"Delivered"]}),value:"Delivered"}],sx:{gap:6,flexGrow:1}})}),t.jsxs(Y,{children:[t.jsx(N,{type:"submit",variant:"contained",children:"Confirm"}),t.jsx(N,{color:"inherit",variant:"outlined",onClick:b,children:"Cancel"})]})]})]})},ht=$.object({amount:$.number().min(1,{message:"Amount is required!"}),paymentDate:lt.date({message:{required_error:"Start date is required!"}}),paymentType:$.string().min(1,{message:"Payment Type is required!"})}),At=({order:s,payment:e,open:b,onClose:w,handler:l})=>{const r=D.useRef(e),[h,o]=D.useState(),x=D.useCallback(c=>{const S=c[0];o(()=>S)},[]),f=()=>{o(null)},k=M(),j={headers:{"content-type":"multipart/form-data"}},{mutate:C}=U({mutationFn:c=>E.post(G.files.upload,c,j),onSuccess:async({data:c})=>{const{name:S}=c;if(S){const{current:A}=r;A.attachments=S,await l(A)}return c},onSettled:async()=>{o(null),r.current={},await k.invalidateQueries({queryKey:["payments-images"]})},onError:c=>{console.log(c)}}),v={amount:0,paymentType:"",paymentDate:tt()},m=L({resolver:H(ht),defaultValues:v}),{reset:u,handleSubmit:T,formState:{isSubmitting:n}}=m,g=T(async c=>{try{const S={...c,orderId:s.id,customerId:s.customer.id};if(h){r.current={...S};const A=new FormData;A.append("file",h),A.append("category","Payment"),await C(A)}else await l(S);u()}catch(S){console.log(S)}});return t.jsxs(V,{fullWidth:!0,maxWidth:"lg",open:b,onClose:w,children:[t.jsx(K,{children:"Add Payment"}),t.jsxs(Q,{methods:m,onSubmit:g,children:[t.jsxs(W,{children:[t.jsx(P,{}),t.jsxs(z,{spacing:1,sx:{pt:1,pb:1},children:[t.jsxs(p,{display:"flex",children:[t.jsx(d,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),t.jsx(d,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s.customer.name})]}),t.jsxs(p,{display:"flex",children:[t.jsx(d,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),t.jsx(d,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s.ref})]}),t.jsxs(p,{display:"flex",children:[t.jsx(d,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Date:"}),t.jsx(d,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:R(s.orderDate)})]}),t.jsxs(p,{display:"flex",children:[t.jsx(d,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Delivery Date:"}),t.jsx(d,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s.deliveryDate?R(s.deliveryDate):t.jsx("span",{children:" - "})})]})]}),t.jsx(P,{}),t.jsxs(z,{spacing:1,sx:{pt:1,pb:1},children:[t.jsxs(p,{display:"flex",children:[t.jsx(d,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),t.jsx(d,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:y(_(s.totalOrderAmount-s.totalOrderAmount*(s.discount/100),s==null?void 0:s.snapshotTaxPercentage))||"-"})]}),t.jsxs(p,{display:"flex",children:[t.jsx(d,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),t.jsx(d,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:y(s.orderPaymentAmount)||"-"})]})]}),t.jsx(P,{}),t.jsx(z,{spacing:1,sx:{pt:2,pb:2},children:t.jsxs(p,{display:"flex",children:[t.jsx(d,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),t.jsx(d,{component:"span",variant:"subtitle1",children:y(_(s.totalOrderAmount-s.totalOrderAmount*(s.discount/100),s==null?void 0:s.snapshotTaxPercentage)-s.orderPaymentAmount)||"-"})]})}),t.jsx(P,{}),t.jsxs(z,{spacing:2,sx:{pt:4,pb:1},children:[t.jsxs(p,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsx(O.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),t.jsx(O.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),t.jsxs(p,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsx(p,{children:t.jsxs(O.Select,{name:"paymentType",label:"Payment Type",children:[t.jsx(B,{value:"Cash",children:"Cash"}),t.jsx(B,{value:"Transfer",children:"Transfer"}),t.jsx(B,{value:"Card",children:"Card"})]})}),t.jsxs(z,{spacing:1.5,flexDirection:"row",sx:{height:"56px"},children:[t.jsx(ot,{onDrop:x,sx:{height:"auto"}}),h&&t.jsxs(z,{flexDirection:"row",spacing:1,justifyContent:"center",alignItems:"center",sx:{typography:"body2",color:"error.main",cursor:"pointer",border:"solid 1px rgba(0,0,0,0)",p:1,"&:hover":{border:"solid 1px",borderColor:"error.main",borderRadius:1.5}},onClick:f,children:[t.jsx(F,{icon:"solar:trash-bin-trash-bold"}),t.jsx(p,{children:t.jsxs(p,{spacing:3,children:[t.jsx(d,{component:"span",variant:"subtitle2",sx:{flexGrow:1,mr:1},children:"Filename:"}),t.jsx("span",{children:h.name})]})})]})]})]})]})]}),t.jsxs(Y,{children:[t.jsx(rt,{type:"submit",variant:"contained",children:"Save"}),t.jsx(N,{color:"inherit",variant:"outlined",onClick:()=>{u(),o(null),w()},children:"Cancel"})]})]})]})};export{Tt as O,Ct as P,Dt as a,At as b};

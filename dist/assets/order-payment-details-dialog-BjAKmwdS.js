import{j as e,C as I,d0 as R,ea as q,e8 as _,r as A,h as J,l as X,I as O,aW as Z,dn as M,dp as E,dm as G,am as F,B as m,e as B,em as tt,S as P,T as p,aS as N}from"./index-CuWEjZ-G.js";import{F as et,V as a,I as st,T as n,D as at,a as nt,S as it}from"./react-pdf.browser-D5ipLDg5.js";import{b as y}from"./format-number-Cf_bMPPr.js";import{z,u as L,t as U,a as H,F as $}from"./form-provider-C1xS_hNP.js";import{u as Q}from"./useMutation-D-9-TWzs.js";import"./image--hG_jsIt.js";import"./editor-C8JBU4_J.js";import{a as V,b as W,D as Y}from"./DialogContent-BvQOSjqo.js";import{D as K}from"./DialogTitle-CwCOmkp8.js";import{U as lt}from"./upload-box-ad-DkAE6uOo.js";import{s as ot}from"./schema-helper-Bh6rnOep.js";import{L as rt}from"./LoadingButton-DZjqLJO9.js";et.register({family:"Roboto",fonts:[{src:"/fonts/Roboto-Regular.ttf"},{src:"/fonts/Roboto-Bold.ttf"}]});const ct=()=>A.useMemo(()=>it.create({page:{fontSize:9,lineHeight:1.6,fontFamily:"Roboto",backgroundColor:"#FFFFFF",padding:"40px 24px 120px 24px"},footer:{left:0,right:0,bottom:0,padding:24,margin:"auto",borderTopWidth:1,borderStyle:"solid",position:"absolute",borderColor:"#e9ecef"},container:{flexDirection:"row",justifyContent:"space-between"},mb4:{marginBottom:4},mb8:{marginBottom:8},mb40:{marginBottom:40},h3:{fontSize:16,fontWeight:700},h4:{fontSize:13,fontWeight:700},body1:{fontSize:10},subtitle1:{fontSize:10,fontWeight:700},body2:{fontSize:9},subtitle2:{fontSize:9,fontWeight:700},table:{display:"flex",width:"100%"},row:{padding:"10px 0 8px 0",flexDirection:"row",borderBottomWidth:1,borderStyle:"solid",borderColor:"#e9ecef"},cell_1:{width:"5%"},cell_2:{width:"50%"},cell_3:{width:"15%",paddingLeft:32},cell_4:{width:"15%",paddingLeft:8},cell_5:{width:"15%"},noBorder:{paddingTop:"10px",paddingBottom:0,borderBottomWidth:0}}),[]),Tt=({order:s})=>{var h,l,x,f,S,j,T,v,d,u,C;const t=ct(),b=e.jsxs(a,{style:[t.container,t.mb40],children:[e.jsx(st,{source:`${I.site.serverFileHost+((h=s.application)==null?void 0:h.logo)}`,style:{width:48,height:48}}),e.jsxs(a,{style:{alignItems:"flex-end",flexDirection:"column"},children:[e.jsx(n,{style:[t.h3,{textTransform:"capitalize"}],children:(l=s.application)==null?void 0:l.name}),e.jsxs(n,{children:[" ",s.ref," "]})]})]}),w=e.jsxs(a,{style:[t.container,t.footer],fixed:!0,children:[e.jsxs(a,{style:{width:"75%"},children:[e.jsx(n,{style:t.subtitle2,children:"NOTES"}),e.jsx(n,{children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),e.jsxs(a,{style:{width:"25%",textAlign:"right"},children:[e.jsx(n,{style:t.subtitle2,children:"Have a question?"}),e.jsx(n,{children:(x=s.application)==null?void 0:x.email})]})]}),o=e.jsxs(a,{style:[t.container,t.mb40],children:[e.jsxs(a,{style:{width:"50%"},children:[e.jsx(n,{style:[t.subtitle2,t.mb4],children:"Order from"}),e.jsx(n,{style:[t.body2,{textTransform:"capitalize"}],children:(f=s.application)==null?void 0:f.name}),e.jsx(n,{style:t.body2,children:(j=(S=s.application)==null?void 0:S.address)==null?void 0:j.country}),e.jsx(n,{style:t.body2,children:(T=s.application)==null?void 0:T.phoneNumber})]}),e.jsxs(a,{style:{width:"50%"},children:[e.jsx(n,{style:[t.subtitle2,t.mb4],children:"Order to"}),e.jsx(n,{style:[t.body2,{textTransform:"capitalize"}],children:(v=s==null?void 0:s.customer)==null?void 0:v.name}),e.jsx(n,{style:t.body2,children:(d=s==null?void 0:s.customer)==null?void 0:d.fullAddress}),e.jsx(n,{style:t.body2,children:(u=s==null?void 0:s.customer)==null?void 0:u.phoneNumber})]})]});a,t.container,t.mb40,a,n,t.subtitle2,t.mb4,n,t.body2,R(s.orderDate),a,n,t.subtitle2,t.mb4,n,t.body2,R(s.orderDate);const r=e.jsxs(e.Fragment,{children:[e.jsx(n,{style:[t.subtitle1,t.mb8],children:"Quotation details"}),e.jsxs(a,{style:t.table,children:[e.jsx(a,{children:e.jsxs(a,{style:t.row,children:[e.jsx(a,{style:t.cell_1,children:e.jsx(n,{style:t.subtitle2,children:"#"})}),e.jsx(a,{style:t.cell_2,children:e.jsx(n,{style:t.subtitle2,children:"Product Name"})}),e.jsx(a,{style:t.cell_3,children:e.jsx(n,{style:t.subtitle2,children:"Qty"})}),e.jsx(a,{style:t.cell_4,children:e.jsx(n,{style:t.subtitle2,children:"Unit price"})}),e.jsx(a,{style:[t.cell_5,{textAlign:"right"}],children:e.jsx(n,{style:t.subtitle2,children:"Total"})})]})}),e.jsxs(a,{children:[(C=s.productToOrder)==null?void 0:C.map((i,g)=>{var c;return e.jsxs(a,{style:t.row,children:[e.jsx(a,{style:t.cell_1,children:e.jsx(n,{children:g+1})}),e.jsx(a,{style:t.cell_2,children:e.jsx(n,{style:t.subtitle2,children:(c=i==null?void 0:i.product)==null?void 0:c.name})}),e.jsx(a,{style:t.cell_3,children:e.jsx(n,{children:i.quantity})}),e.jsx(a,{style:t.cell_4,children:e.jsx(n,{children:i.snapshotProductPrice})}),e.jsx(a,{style:[t.cell_5,{textAlign:"right"}],children:e.jsx(n,{children:y(i.snapshotProductPrice*i.quantity)})})]},i.id)}),[{name:"Subtotal",value:y(s==null?void 0:s.totalOrderAmount)},{name:"Discount",value:`- ${s==null?void 0:s.discount}%`},{name:`Taxes (${(s==null?void 0:s.snapshotTaxPercentage)||"0"}%)`,value:y(q((s==null?void 0:s.totalOrderAmount)-(s==null?void 0:s.totalOrderAmount)*((s==null?void 0:s.discount)/100),s==null?void 0:s.snapshotTaxPercentage))},{name:"Total",value:y(_((s==null?void 0:s.totalOrderAmount)-(s==null?void 0:s.totalOrderAmount)*((s==null?void 0:s.discount)/100),s==null?void 0:s.snapshotTaxPercentage)),styles:t.h4}].map(i=>e.jsxs(a,{style:[t.row,t.noBorder],children:[e.jsx(a,{style:t.cell_1}),e.jsx(a,{style:t.cell_2}),e.jsx(a,{style:t.cell_3}),e.jsx(a,{style:t.cell_4,children:e.jsx(n,{style:i.styles,children:i.name})}),e.jsx(a,{style:[t.cell_5,{textAlign:"right"}],children:e.jsx(n,{style:i.styles,children:i.value})})]},i.name))]})]})]});return e.jsx(at,{children:e.jsxs(nt,{size:"A4",style:t.page,children:[b,o,r,w]})})},At=({order:s})=>{const[t,b]=A.useState(),w=()=>{const r=window.open("","_blank");b(r)},{user:o}=J();return A.useEffect(()=>{const h=dt((l=>{var f;let x=l.userOwnedApps;return(f=o==null?void 0:o.roles)!=null&&f.includes("STAFF")&&(x=l.applications),x})(o),s);t==null||t.document.open(),t==null||t.document.write(h),t==null||t.document.close(),t==null||t.print()},[t]),e.jsx(X,{color:"info",onClick:w,children:e.jsx(O,{icon:"solar:printer-minimalistic-bold"})})},dt=(s,t)=>{var b,w,o,r,h,l,x,f,S,j,T,v,d,u,C,i;return`
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
              <img src="${I.site.serverFileHost}${s.logo}" class="h-12" />
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
              <p class="font-bold">${s==null?void 0:s.name}</p>
              <p>Number: ${(b=t==null?void 0:t.application)==null?void 0:b.phoneNumber}</p>
              <p>Tax/Vat: ${(w=t==null?void 0:t.application)==null?void 0:w.taxNumber}</p>
              <p>${(r=(o=t.application)==null?void 0:o.address)==null?void 0:r.city}</p>
              <p>${(l=(h=t.application)==null?void 0:h.address)==null?void 0:l.state}</p>
              <p>${(f=(x=t.application)==null?void 0:x.address)==null?void 0:f.country}</p>
            </div>
          </td>
          <td class="w-1/2 align-top text-right">
            <div class="text-sm text-neutral-600">
              <p class="font-bold" style="text-transform: capitalize !important">${t.customer.name}</p>
              <p>Number: ${t.customer.phoneNumber}</p>
              <p>Tax/Vat: ${t.customer.taxNumber}</p>
              <p>${(j=(S=t.customer)==null?void 0:S.address)==null?void 0:j.street}</p>
              <p>${(v=(T=t.customer)==null?void 0:T.address)==null?void 0:v.country}</p>
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
      ${(d=t.productToOrder)==null?void 0:d.map((g,c)=>`
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
                            <div class="whitespace-nowrap font-bold text-main">${y(t==null?void 0:t.totalOrderAmount)}</div>
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
                            <div class="whitespace-nowrap font-bold text-main">${t!=null&&t.snapshotTaxPercentage?y(q((t==null?void 0:t.totalOrderAmount)-(t==null?void 0:t.totalOrderAmount)*((t==null?void 0:t.discount)/100),t==null?void 0:t.snapshotTaxPercentage)):"-"}</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="bg-main p-3">
                            <div class="whitespace-nowrap font-bold text-white">Total:</div>
                          </td>
                          <td class="bg-main p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-white">${y(_((t==null?void 0:t.totalOrderAmount)-(t==null?void 0:t.totalOrderAmount)*((t==null?void 0:t.discount)/100),t==null?void 0:t.snapshotTaxPercentage))||"-"}</div>
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
      ${(u=t==null?void 0:t.application)==null?void 0:u.name}
      <span class="text-slate-300 px-2">|</span>
      ${(C=t==null?void 0:t.application)==null?void 0:C.email}
      <span class="text-slate-300 px-2">|</span>
      ${(i=t==null?void 0:t.application)==null?void 0:i.phoneNumber}
    </footer>
  </div>
</div>
</body>
</html>
`},pt=z.object({status:z.string().min(1,{message:"Status is required!"})}),Ct=({currentOrder:s,open:t,onClose:b,handler:w})=>{const o=A.useMemo(()=>({status:(s==null?void 0:s.status)||""}),[s]);A.useEffect(()=>{x(o)},[s]);const r=M(),{mutate:h}=Q({mutationFn:({id:d,payload:u})=>E.patch(G.orderStatus.edit+d,u),onSuccess:async()=>{await r.invalidateQueries({queryKey:["orders"]}),await r.invalidateQueries({queryKey:["order",s.id]}),await r.invalidateQueries({queryKey:["orders","analytics"]})},onSettled:async()=>{},onError:d=>{console.log(d)}}),l=L({resolver:U(pt),defaultValues:o}),{reset:x,watch:f,setValue:S,handleSubmit:j,formState:{isSubmitting:T}}=l,v=j(async d=>{try{await h({id:s.id,payload:d}),b()}catch(u){console.error(u)}});return e.jsxs(V,{fullWidth:!0,open:t,onClose:b,children:[e.jsx(K,{children:"Order Status"}),e.jsx(F,{}),e.jsxs(H,{methods:l,onSubmit:v,children:[e.jsx(W,{sx:{pt:1,mt:1,display:"flex",justifyContent:"center"},children:e.jsx($.RadioGroup,{row:!0,name:"status",options:[{label:e.jsxs(m,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(O,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"error.main"}}),"Processing"]}),value:"InProcess"},{label:e.jsxs(m,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(O,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"warning.main"}}),"Ready"]}),value:"Ready"},{label:e.jsxs(m,{sx:{display:"flex",justifyContent:"center",gap:1},children:[e.jsx(O,{icon:"solar:double-alt-arrow-up-bold-duotone",sx:{color:"info.main"}}),"Delivered"]}),value:"Delivered"}],sx:{gap:6,flexGrow:1}})}),e.jsxs(Y,{children:[e.jsx(B,{type:"submit",variant:"contained",children:"Confirm"}),e.jsx(B,{color:"inherit",variant:"outlined",onClick:b,children:"Cancel"})]})]})]})},ht=z.object({amount:z.number().min(1,{message:"Amount is required!"}),paymentDate:ot.date({message:{required_error:"Start date is required!"}}),paymentType:z.string().min(1,{message:"Payment Type is required!"}),notes:z.string().optional()}),Dt=({order:s,payment:t,open:b,onClose:w,handler:o})=>{const r=A.useRef(t),[h,l]=A.useState(),x=A.useCallback(c=>{const k=c[0];l(()=>k)},[]),f=()=>{l(null)},S=M(),j={headers:{"content-type":"multipart/form-data"}},{mutate:T}=Q({mutationFn:c=>E.post(G.files.upload,c,j),onSuccess:async({data:c})=>{const{name:k}=c;if(k){const{current:D}=r;D.attachments=k,await o(D)}return c},onSettled:async()=>{l(null),r.current={},await S.invalidateQueries({queryKey:["payments-images"]})},onError:c=>{console.log(c)}}),v={paymentType:"",notes:"",paymentDate:tt()},d=L({resolver:U(ht),defaultValues:v}),{reset:u,handleSubmit:C,formState:{isSubmitting:i}}=d,g=C(async c=>{try{const k={...c,orderId:s.id,customerId:s.customer.id};if(h){r.current={...k};const D=new FormData;D.append("file",h),D.append("category","Payment"),await T(D)}else await o(k);u()}catch(k){console.log(k)}});return e.jsxs(V,{fullWidth:!0,maxWidth:"lg",open:b,onClose:w,children:[e.jsx(K,{children:"Add Payment"}),e.jsxs(H,{methods:d,onSubmit:g,children:[e.jsxs(W,{children:[e.jsx(F,{}),e.jsxs(P,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(m,{display:"flex",children:[e.jsx(p,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),e.jsx(p,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s.customer.name})]}),e.jsxs(m,{display:"flex",children:[e.jsx(p,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),e.jsx(p,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s.ref})]}),e.jsxs(m,{display:"flex",children:[e.jsx(p,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Date:"}),e.jsx(p,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:R(s.orderDate)})]}),e.jsxs(m,{display:"flex",children:[e.jsx(p,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Delivery Date:"}),e.jsx(p,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:s.deliveryDate?R(s.deliveryDate):e.jsx("span",{children:" - "})})]})]}),e.jsx(F,{}),e.jsxs(P,{spacing:1,sx:{pt:1,pb:1},children:[e.jsxs(m,{display:"flex",children:[e.jsx(p,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),e.jsx(p,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:y(_(s.totalOrderAmount-s.totalOrderAmount*(s.discount/100),s==null?void 0:s.snapshotTaxPercentage))||"-"})]}),e.jsxs(m,{display:"flex",children:[e.jsx(p,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),e.jsx(p,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:y(s.orderPaymentAmount)||"-"})]})]}),e.jsx(F,{}),e.jsx(P,{spacing:1,sx:{pt:2,pb:2},children:e.jsxs(m,{display:"flex",children:[e.jsx(p,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),e.jsx(p,{component:"span",variant:"subtitle1",children:y(_(s.totalOrderAmount-s.totalOrderAmount*(s.discount/100),s==null?void 0:s.snapshotTaxPercentage)-s.orderPaymentAmount)||"-"})]})}),e.jsx(F,{}),e.jsxs(P,{spacing:2,sx:{pt:2,pb:1},children:[e.jsxs(m,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx($.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1},placeholder:"Amount",InputLabelProps:{shrink:!0}}),e.jsx($.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1},InputLabelProps:{shrink:!0}})]}),e.jsxs(m,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[e.jsx(m,{children:e.jsxs($.Select,{name:"paymentType",label:"Payment Type",children:[e.jsx(N,{value:"Cash",children:"Cash"}),e.jsx(N,{value:"Transfer",children:"Transfer"}),e.jsx(N,{value:"Card",children:"Card"})]})}),e.jsx(P,{spacing:1.5,flexDirection:"row",sx:{height:"56px"},children:e.jsx(lt,{file:h,handleDelete:f,handleDropSingleFile:x})})]}),e.jsx(P,{spacing:1,children:e.jsx($.Text,{label:"Notes",name:"notes",placeholder:"Notes / Remarks",InputLabelProps:{shrink:!0},multiline:!0,rows:2})})]})]}),e.jsxs(Y,{children:[e.jsx(rt,{type:"submit",variant:"contained",children:"Save"}),e.jsx(B,{color:"inherit",variant:"outlined",onClick:()=>{u(),l(null),w()},children:"Cancel"})]})]})]})};export{Ct as O,Tt as P,At as a,Dt as b};

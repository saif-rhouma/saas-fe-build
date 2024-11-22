import{r as g,de as $,e2 as A,j as a,B as y,S as R,I as v,aS as C,d0 as D,d7 as j,ed as F,ee as P,h as U,l as Y,C as q,aW as G,ea as V,e8 as J,e9 as x}from"./index-DNUduzdf.js";import{g as L,r as K,e as X}from"./utils-MBUcMVfY.js";import{u as E}from"./use-table-YXqc5LMD.js";import{a as I,b as O,c as N,T as B}from"./table-head-custom-D-wyN4FW.js";import{T as M}from"./table-pagination-custom-DUcFqs_c.js";import{T as Q}from"./TextField-6Rb6lrwr.js";import{I as H}from"./InputAdornment-BS55mf9p.js";import{S as Z}from"./Select-B7QtE-mc.js";import{T as m}from"./TableCell-Dbm5jNNJ.js";import{T as W}from"./table-empty-rows-DpQ1pK9N.js";import{b as w}from"./format-number-BcLd92wH.js";const tt=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Topic"},{id:"rate",label:"Date",width:200,align:"center"},{id:"totalAmount",label:"Status",width:80,align:"center"},{id:"status",label:"Priority",width:120,align:"center"}],wt=({tickets:s})=>{const t=E({defaultOrderBy:"orderId",defaultRowsPerPage:5}),[p,b]=g.useState(s),i=$({name:"",status:"all",startDate:null,endDate:null});g.useEffect(()=>{b(s)},[s]);const r=A(i.state.startDate,i.state.endDate),o=et({inputData:p,comparator:L(t.order,t.orderBy),filters:i.state,dateError:r});K(o,t.page,t.rowsPerPage);const d=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate;!o.length&&d||o.length;const[c,e]=g.useState("all"),l=g.useCallback(n=>{t.onResetPage(),i.setState({name:n.target.value})},[i,t]),h=g.useCallback(n=>{t.onResetPage(),i.setState({status:n.target.value}),e(n.target.value)},[i,t]);return a.jsxs(y,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:n=>`solid 1px ${n.vars.palette.divider}`},children:[a.jsxs(R,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:[a.jsx(Q,{value:i.state.name,onChange:l,size:"small",placeholder:"Search ticket",InputProps:{startAdornment:a.jsx(H,{position:"start",children:a.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),a.jsxs(Z,{size:"small",sx:{width:200,textTransform:"capitalize"},value:c,onChange:h,children:[a.jsx(C,{value:"all",children:"All Tickets"}),a.jsx(C,{value:"Open",children:"Open Tickets"}),a.jsx(C,{value:"Closed",children:"Close Tickets"})]})]}),a.jsx(y,{sx:{flex:1,width:1},children:a.jsxs(I,{size:"small",children:[a.jsx(O,{headLabel:tt}),a.jsx(N,{children:o.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((n,f)=>a.jsxs(B,{children:[a.jsxs(m,{align:"center",children:[" ",f+1||n.id," "]}),a.jsx(m,{children:n.topic}),a.jsx(m,{align:"center",children:D(n.createTime)}),a.jsx(m,{align:"center",children:a.jsx(j,{variant:"soft",color:n.status==="Open"&&"info"||n.status==="Closed"&&"default"||"default",children:n.status})}),a.jsx(m,{align:"center",children:a.jsx(j,{variant:"soft",color:n.priority==="Low"&&"success"||n.priority==="Medium"&&"warning"||n.priority==="Hight"&&"error"||"default",children:n.priority})})]},`${n.id}`))})]})}),a.jsx(M,{sx:{width:1},page:t.page,dense:!0,count:o.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage})]})};function et({inputData:s,comparator:t,filters:p,dateError:b}){const{status:i,name:r,startDate:o,endDate:d}=p,c=s.map((e,l)=>[e,l]);return c.sort((e,l)=>{const h=t(e[0],l[0]);return h!==0?h:e[1]-l[1]}),s=c.map(e=>e[0]),r&&(s=s.filter(e=>e.id.toString().toLowerCase().indexOf(r.toLowerCase())!==-1||e.topic.toLowerCase().indexOf(r.toLowerCase())!==-1||e.description.toLowerCase().indexOf(r.toLowerCase())!==-1)),i!=="all"&&(s=s.filter(e=>e.status===i)),b||o&&d&&(s=s.filter(e=>F(e.createdAt,o,d))),s}const at=[{id:"#",label:"#",width:40,align:"center"},{id:"title",label:"Title"},{id:"rate",label:"Date",width:180,align:"center"},{id:"totalAmount",label:"Status",width:80,align:"center"}],ft=({reminders:s=[]})=>{const t=E({defaultOrderBy:"orderId",defaultRowsPerPage:5}),[p,b]=g.useState(s);g.useEffect(()=>{b(s)},[s]);const i=$({name:"",status:"all",startDate:null,endDate:null}),r=A(i.state.startDate,i.state.endDate),o=st({inputData:p,comparator:L(t.order,t.orderBy),filters:i.state,dateError:r}),d=!!i.state.name||i.state.status!=="all"||!!i.state.startDate&&!!i.state.endDate;!o.length&&d||o.length;const c=g.useCallback(e=>{t.onResetPage(),i.setState({name:e.target.value})},[i,t]);return a.jsxs(y,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:[a.jsx(R,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:a.jsx(Q,{value:i.state.name,onChange:c,size:"small",placeholder:"Search reminder",InputProps:{startAdornment:a.jsx(H,{position:"start",children:a.jsx(v,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),a.jsx(y,{sx:{flex:1,width:1},children:a.jsxs(I,{size:"small",children:[a.jsx(O,{headLabel:at}),a.jsxs(N,{children:[o.slice(t.page*t.rowsPerPage,t.page*t.rowsPerPage+t.rowsPerPage).map((e,l)=>a.jsxs(B,{children:[a.jsxs(m,{align:"center",children:[" ",l+1||e.id," "]}),a.jsx(m,{children:e.title}),a.jsx(m,{align:"center",children:D(e.reminderDate)}),a.jsx(m,{align:"center",children:a.jsx(j,{variant:"soft",color:P(e.reminderDate)?"error":"success",children:a.jsx(v,{icon:P(e.reminderDate)?"solar:forbidden-circle-bold":"solar:check-circle-bold-duotone",sx:{color:P(e.reminderDate)?"error":"success"}})})})]},`${e.id}`)),a.jsx(W,{emptyRows:X(t.page,t.rowsPerPage,o.length)})]})]})}),a.jsx(M,{sx:{width:1},page:t.page,dense:!0,count:o.length,rowsPerPage:t.rowsPerPage,onPageChange:t.onChangePage,onRowsPerPageChange:t.onChangeRowsPerPage})]})};function st({inputData:s,comparator:t,filters:p,dateError:b}){const{status:i,name:r,startDate:o,endDate:d}=p,c=s.map((e,l)=>[e,l]);return c.sort((e,l)=>{const h=t(e[0],l[0]);return h!==0?h:e[1]-l[1]}),s=c.map(e=>e[0]),r&&(s=s.filter(e=>e.id.toString().toLowerCase().indexOf(r.toLowerCase())!==-1||e.title.toLowerCase().indexOf(r.toLowerCase())!==-1||e.description.toLowerCase().indexOf(r.toLowerCase())!==-1)),i!=="all"&&(s=s.filter(e=>e.status===i)),b||o&&d&&(s=s.filter(e=>F(e.createdAt,o,d))),s}const xt=({quotation:s})=>{const[t,p]=g.useState(),b=()=>{const r=window.open("","_blank");p(r)},{user:i}=U();return g.useEffect(()=>{const o=ot((d=>{var e;let c=d.userOwnedApps;return(e=i==null?void 0:i.roles)!=null&&e.includes("STAFF")&&(c=d.applications),c})(i),s);t==null||t.document.open(),t==null||t.document.write(o),t==null||t.document.close(),t==null||t.print()},[t]),a.jsx(Y,{onClick:b,children:a.jsx(v,{icon:"solar:printer-minimalistic-bold"})})},it=s=>{switch(s){case x.Converted:return"#118D57";case x.Confirmed:return"#006C9C";case x.Created:return"#54575e";case x.Canceled:return"#B71D18";default:return"#54575e"}},ot=(s,t)=>{var p,b,i,r,o,d,c,e,l,h,n,f,T,k,S,z;return`
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
border-color: #686D76;
}

.bg-main{
background-color: #686D76;
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
color: #686D76;
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
  color: ${it(t.status)};
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
                        <p class="whitespace-nowrap font-bold text-main text-right">${G().format("MMMM DD, YYYY")}</p>
                      </div>
                      <div>
                          <p class="whitespace-nowrap font-bold text-main text-right">&nbsp;</p>
                      </div>
                    </td>
                    <td class="pl-4">
                      <div>
                        <p class="whitespace-nowrap text-slate-400 text-right">Quotation #</p>
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
              <p class="font-bold">${s==null?void 0:s.name}</p>
              <p>Number: ${(p=t==null?void 0:t.application)==null?void 0:p.phoneNumber}</p>
              <p>Tax/Vat: ${(b=t==null?void 0:t.application)==null?void 0:b.taxNumber}</p>
              <p>${(r=(i=t.application)==null?void 0:i.address)==null?void 0:r.city}</p>
              <p>${(d=(o=t.application)==null?void 0:o.address)==null?void 0:d.state}</p>
              <p>${(e=(c=t.application)==null?void 0:c.address)==null?void 0:e.country}</p>
            </div>
          </td>
          <td class="w-1/2 align-top text-right">
            <div class="text-sm text-neutral-600">
              <p class="font-bold" style="text-transform: capitalize !important">${t.customer.name}</p>
              <p>Number: ${t.customer.phoneNumber}</p>
              <p>Tax/Vat: ${t.customer.taxNumber}</p>
              <p>${(h=(l=t.customer)==null?void 0:l.address)==null?void 0:h.street}</p>
              <p>${(f=(n=t.customer)==null?void 0:n.address)==null?void 0:f.country}</p>
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
      ${(T=t.productToQuotation)==null?void 0:T.map((u,_)=>`
        <tr>
          <td class="border-b py-3 pl-3">${_}.</td>
          <td class="border-b py-3 pl-2">${u.product.name}</td>
          <td class="border-b py-3 pl-2 text-right">${w(u.snapshotProductPrice||u.product.price)}</td>
          <td class="border-b py-3 pl-2 text-center">${u==null?void 0:u.quantity}</td>
          <td class="border-b py-3 pl-2 text-center">${w(u.snapshotProductPrice*u.quantity)}</td>
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
                            <div class="whitespace-nowrap font-bold text-main">${w(t==null?void 0:t.totalAmount)}</div>
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
                            <div class="whitespace-nowrap font-bold text-main">${t!=null&&t.snapshotTaxPercentage?w(V((t==null?void 0:t.totalAmount)-(t==null?void 0:t.totalAmount)*((t==null?void 0:t.discount)/100),t==null?void 0:t.snapshotTaxPercentage)):"-"}</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="bg-main p-3">
                            <div class="whitespace-nowrap font-bold text-white">Total:</div>
                          </td>
                          <td class="bg-main p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-white">${w(J((t==null?void 0:t.totalAmount)-(t==null?void 0:t.totalAmount)*((t==null?void 0:t.discount)/100),t==null?void 0:t.snapshotTaxPercentage))||"-"}</div>
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
      ${(k=t==null?void 0:t.application)==null?void 0:k.name}
      <span class="text-slate-300 px-2">|</span>
      ${(S=t==null?void 0:t.application)==null?void 0:S.email}
      <span class="text-slate-300 px-2">|</span>
      ${(z=t==null?void 0:t.application)==null?void 0:z.phoneNumber}
    </footer>
  </div>
</div>
</body>
</html>
`};export{xt as P,wt as Q,ft as a};

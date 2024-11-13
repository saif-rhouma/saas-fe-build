import{j as t,C as $,d0 as S,ea as D,e8 as _,r as f,de as I,e2 as L,B as k,S as B,I as z,aS as A,d7 as R,ed as E,ej as F,h as G,l as J,aW as K}from"./index-CuWEjZ-G.js";import{F as X,V as i,I as Z,T as r,D as q,a as ee,S as te}from"./react-pdf.browser-D5ipLDg5.js";import{b as u}from"./format-number-Cf_bMPPr.js";import{g as N,r as se,e as ae}from"./utils-MBUcMVfY.js";import{u as O}from"./use-table-75dAXbPG.js";import{a as M,b as Q,c as H,T as U}from"./table-head-custom-B_b4Mciq.js";import{T as Y}from"./table-pagination-custom-B4KJAJyJ.js";import{T as V}from"./TextField-DJCgOoyp.js";import{I as W}from"./InputAdornment-BPgjxEzZ.js";import{S as le}from"./Select-yTvD-6UB.js";import{T as y}from"./TableCell-xn0OHm1b.js";import{T as ie}from"./table-empty-rows-Flo5S0Tu.js";X.register({family:"Roboto",fonts:[{src:"/fonts/Roboto-Regular.ttf"},{src:"/fonts/Roboto-Bold.ttf"}]});const re=()=>f.useMemo(()=>te.create({page:{fontSize:9,lineHeight:1.6,fontFamily:"Roboto",backgroundColor:"#FFFFFF",padding:"40px 24px 120px 24px"},footer:{left:0,right:0,bottom:0,padding:24,margin:"auto",borderTopWidth:1,borderStyle:"solid",position:"absolute",borderColor:"#e9ecef"},container:{flexDirection:"row",justifyContent:"space-between"},mb4:{marginBottom:4},mb8:{marginBottom:8},mb40:{marginBottom:40},h3:{fontSize:16,fontWeight:700},h4:{fontSize:13,fontWeight:700},body1:{fontSize:10},subtitle1:{fontSize:10,fontWeight:700},body2:{fontSize:9},subtitle2:{fontSize:9,fontWeight:700},table:{display:"flex",width:"100%"},row:{padding:"10px 0 8px 0",flexDirection:"row",borderBottomWidth:1,borderStyle:"solid",borderColor:"#e9ecef"},cell_1:{width:"5%"},cell_2:{width:"50%"},cell_3:{width:"15%",paddingLeft:32},cell_4:{width:"15%",paddingLeft:8},cell_5:{width:"15%"},noBorder:{paddingTop:"10px",paddingBottom:0,borderBottomWidth:0}}),[]),Ce=({quotation:s})=>{var n,p,h,a,c,x,o,j,v,P,C;const e=re(),g=t.jsxs(i,{style:[e.container,e.mb40],children:[t.jsx(Z,{source:`${$.site.serverFileHost+((n=s.application)==null?void 0:n.logo)}`,style:{width:48,height:48}}),t.jsxs(i,{style:{alignItems:"flex-end",flexDirection:"column"},children:[t.jsx(r,{style:[e.h3,{textTransform:"capitalize"}],children:(p=s.application)==null?void 0:p.name}),t.jsxs(r,{children:[" ",s.ref," "]})]})]}),m=t.jsxs(i,{style:[e.container,e.footer],fixed:!0,children:[t.jsxs(i,{style:{width:"75%"},children:[t.jsx(r,{style:e.subtitle2,children:"NOTES"}),t.jsx(r,{children:"We appreciate your business. Should you need us to add VAT or extra notes let us know!"})]}),t.jsxs(i,{style:{width:"25%",textAlign:"right"},children:[t.jsx(r,{style:e.subtitle2,children:"Have a question?"}),t.jsx(r,{children:(h=s.application)==null?void 0:h.email})]})]}),l=t.jsxs(i,{style:[e.container,e.mb40],children:[t.jsxs(i,{style:{width:"50%"},children:[t.jsx(r,{style:[e.subtitle2,e.mb4],children:"Quotation from"}),t.jsx(r,{style:[e.body2,{textTransform:"capitalize"}],children:(a=s.application)==null?void 0:a.name}),t.jsx(r,{style:e.body2,children:(x=(c=s.application)==null?void 0:c.address)==null?void 0:x.country}),t.jsx(r,{style:e.body2,children:(o=s.application)==null?void 0:o.phoneNumber})]}),t.jsxs(i,{style:{width:"50%"},children:[t.jsx(r,{style:[e.subtitle2,e.mb4],children:"Quotation to"}),t.jsx(r,{style:[e.body2,{textTransform:"capitalize"}],children:(j=s==null?void 0:s.customer)==null?void 0:j.name}),t.jsx(r,{style:e.body2,children:(v=s==null?void 0:s.customer)==null?void 0:v.fullAddress}),t.jsx(r,{style:e.body2,children:(P=s==null?void 0:s.customer)==null?void 0:P.phoneNumber})]})]});i,e.container,e.mb40,i,r,e.subtitle2,e.mb4,r,e.body2,S(s.quotationDate),i,r,e.subtitle2,e.mb4,r,e.body2,S(s.quotationDate);const d=t.jsxs(t.Fragment,{children:[t.jsx(r,{style:[e.subtitle1,e.mb8],children:"Quotation details"}),t.jsxs(i,{style:e.table,children:[t.jsx(i,{children:t.jsxs(i,{style:e.row,children:[t.jsx(i,{style:e.cell_1,children:t.jsx(r,{style:e.subtitle2,children:"#"})}),t.jsx(i,{style:e.cell_2,children:t.jsx(r,{style:e.subtitle2,children:"Product Name"})}),t.jsx(i,{style:e.cell_3,children:t.jsx(r,{style:e.subtitle2,children:"Qty"})}),t.jsx(i,{style:e.cell_4,children:t.jsx(r,{style:e.subtitle2,children:"Unit price"})}),t.jsx(i,{style:[e.cell_5,{textAlign:"right"}],children:t.jsx(r,{style:e.subtitle2,children:"Total"})})]})}),t.jsxs(i,{children:[(C=s.productToQuotation)==null?void 0:C.map((b,w)=>{var T;return t.jsxs(i,{style:e.row,children:[t.jsx(i,{style:e.cell_1,children:t.jsx(r,{children:w+1})}),t.jsx(i,{style:e.cell_2,children:t.jsx(r,{style:e.subtitle2,children:(T=b==null?void 0:b.product)==null?void 0:T.name})}),t.jsx(i,{style:e.cell_3,children:t.jsx(r,{children:b.quantity})}),t.jsx(i,{style:e.cell_4,children:t.jsx(r,{children:b.snapshotProductPrice})}),t.jsx(i,{style:[e.cell_5,{textAlign:"right"}],children:t.jsx(r,{children:u(b.snapshotProductPrice*b.quantity)})})]},b.id)}),[{name:"Subtotal",value:u(s==null?void 0:s.totalAmount)},{name:"Discount",value:`- ${s==null?void 0:s.discount}%`},{name:`Taxes (${(s==null?void 0:s.snapshotTaxPercentage)||"0"}%)`,value:u(D((s==null?void 0:s.totalAmount)-(s==null?void 0:s.totalAmount)*((s==null?void 0:s.discount)/100),s==null?void 0:s.snapshotTaxPercentage))},{name:"Total",value:u(_((s==null?void 0:s.totalAmount)-(s==null?void 0:s.totalAmount)*((s==null?void 0:s.discount)/100),s==null?void 0:s.snapshotTaxPercentage)),styles:e.h4}].map(b=>t.jsxs(i,{style:[e.row,e.noBorder],children:[t.jsx(i,{style:e.cell_1}),t.jsx(i,{style:e.cell_2}),t.jsx(i,{style:e.cell_3}),t.jsx(i,{style:e.cell_4,children:t.jsx(r,{style:b.styles,children:b.name})}),t.jsx(i,{style:[e.cell_5,{textAlign:"right"}],children:t.jsx(r,{style:b.styles,children:b.value})})]},b.name))]})]})]});return t.jsx(q,{children:t.jsxs(ee,{size:"A4",style:e.page,children:[g,l,d,m]})})},ne=[{id:"orderNumber",label:"#",width:40,align:"center"},{id:"name",label:"Topic"},{id:"rate",label:"Date",width:200,align:"center"},{id:"totalAmount",label:"Status",width:80,align:"center"},{id:"status",label:"Priority",width:120,align:"center"}],Te=({tickets:s})=>{const e=O({defaultOrderBy:"orderId",defaultRowsPerPage:5}),[g,m]=f.useState(s),l=I({name:"",status:"all",startDate:null,endDate:null});f.useEffect(()=>{m(s)},[s]);const d=L(l.state.startDate,l.state.endDate),n=oe({inputData:g,comparator:N(e.order,e.orderBy),filters:l.state,dateError:d});se(n,e.page,e.rowsPerPage);const p=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate;!n.length&&p||n.length;const[h,a]=f.useState("all"),c=f.useCallback(o=>{e.onResetPage(),l.setState({name:o.target.value})},[l,e]),x=f.useCallback(o=>{e.onResetPage(),l.setState({status:o.target.value}),a(o.target.value)},[l,e]);return t.jsxs(k,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:o=>`solid 1px ${o.vars.palette.divider}`},children:[t.jsxs(B,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:[t.jsx(V,{value:l.state.name,onChange:c,size:"small",placeholder:"Search ticket",InputProps:{startAdornment:t.jsx(W,{position:"start",children:t.jsx(z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),t.jsxs(le,{size:"small",sx:{width:200,textTransform:"capitalize"},value:h,onChange:x,children:[t.jsx(A,{value:"all",children:"All Tickets"}),t.jsx(A,{value:"Open",children:"Open Tickets"}),t.jsx(A,{value:"Closed",children:"Close Tickets"})]})]}),t.jsx(k,{sx:{flex:1,width:1},children:t.jsxs(M,{size:"small",children:[t.jsx(Q,{headLabel:ne}),t.jsx(H,{children:n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map((o,j)=>t.jsxs(U,{children:[t.jsxs(y,{align:"center",children:[" ",j+1||o.id," "]}),t.jsx(y,{children:o.topic}),t.jsx(y,{align:"center",children:S(o.createTime)}),t.jsx(y,{align:"center",children:t.jsx(R,{variant:"soft",color:o.status==="Open"&&"info"||o.status==="Closed"&&"default"||"default",children:o.status})}),t.jsx(y,{align:"center",children:t.jsx(R,{variant:"soft",color:o.priority==="Low"&&"success"||o.priority==="Medium"&&"warning"||o.priority==="Hight"&&"error"||"default",children:o.priority})})]},`${o.id}`))})]})}),t.jsx(Y,{sx:{width:1},page:e.page,dense:!0,count:n.length,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage})]})};function oe({inputData:s,comparator:e,filters:g,dateError:m}){const{status:l,name:d,startDate:n,endDate:p}=g,h=s.map((a,c)=>[a,c]);return h.sort((a,c)=>{const x=e(a[0],c[0]);return x!==0?x:a[1]-c[1]}),s=h.map(a=>a[0]),d&&(s=s.filter(a=>a.id.toString().toLowerCase().indexOf(d.toLowerCase())!==-1||a.topic.toLowerCase().indexOf(d.toLowerCase())!==-1||a.description.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(s=s.filter(a=>a.status===l)),m||n&&p&&(s=s.filter(a=>E(a.createdAt,n,p))),s}const de=[{id:"#",label:"#",width:40,align:"center"},{id:"title",label:"Title"},{id:"rate",label:"Date",width:180,align:"center"},{id:"totalAmount",label:"Status",width:80,align:"center"}],Se=({reminders:s=[]})=>{const e=O({defaultOrderBy:"orderId",defaultRowsPerPage:5}),[g,m]=f.useState(s);f.useEffect(()=>{m(s)},[s]);const l=I({name:"",status:"all",startDate:null,endDate:null}),d=L(l.state.startDate,l.state.endDate),n=ce({inputData:g,comparator:N(e.order,e.orderBy),filters:l.state,dateError:d}),p=!!l.state.name||l.state.status!=="all"||!!l.state.startDate&&!!l.state.endDate;!n.length&&p||n.length;const h=f.useCallback(a=>{e.onResetPage(),l.setState({name:a.target.value})},[l,e]);return t.jsxs(k,{display:"flex",flexDirection:"column",alignItems:"center",sx:{borderRadius:1,height:1,width:1,overflow:"hidden",border:a=>`solid 1px ${a.vars.palette.divider}`},children:[t.jsx(B,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:1,width:1},children:t.jsx(V,{value:l.state.name,onChange:h,size:"small",placeholder:"Search reminder",InputProps:{startAdornment:t.jsx(W,{position:"start",children:t.jsx(z,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})}),t.jsx(k,{sx:{flex:1,width:1},children:t.jsxs(M,{size:"small",children:[t.jsx(Q,{headLabel:de}),t.jsxs(H,{children:[n.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map((a,c)=>t.jsxs(U,{children:[t.jsxs(y,{align:"center",children:[" ",c+1||a.id," "]}),t.jsx(y,{children:a.title}),t.jsx(y,{align:"center",children:S(a.reminderDate)}),t.jsx(y,{align:"center",children:t.jsx(R,{variant:"soft",color:F(a.reminderDate)?"error":"success",children:t.jsx(z,{icon:F(a.reminderDate)?"solar:forbidden-circle-bold":"solar:check-circle-bold-duotone",sx:{color:F(a.reminderDate)?"error":"success"}})})})]},`${a.id}`)),t.jsx(ie,{emptyRows:ae(e.page,e.rowsPerPage,n.length)})]})]})}),t.jsx(Y,{sx:{width:1},page:e.page,dense:!0,count:n.length,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage})]})};function ce({inputData:s,comparator:e,filters:g,dateError:m}){const{status:l,name:d,startDate:n,endDate:p}=g,h=s.map((a,c)=>[a,c]);return h.sort((a,c)=>{const x=e(a[0],c[0]);return x!==0?x:a[1]-c[1]}),s=h.map(a=>a[0]),d&&(s=s.filter(a=>a.id.toString().toLowerCase().indexOf(d.toLowerCase())!==-1||a.title.toLowerCase().indexOf(d.toLowerCase())!==-1||a.description.toLowerCase().indexOf(d.toLowerCase())!==-1)),l!=="all"&&(s=s.filter(a=>a.status===l)),m||n&&p&&(s=s.filter(a=>E(a.createdAt,n,p))),s}const ke=({quotation:s})=>{const[e,g]=f.useState(),m=()=>{const d=window.open("","_blank");g(d)},{user:l}=G();return f.useEffect(()=>{const n=pe((p=>{var a;let h=p.userOwnedApps;return(a=l==null?void 0:l.roles)!=null&&a.includes("STAFF")&&(h=p.applications),h})(l),s);e==null||e.document.open(),e==null||e.document.write(n),e==null||e.document.close(),e==null||e.print()},[e]),t.jsx(J,{color:"info",onClick:m,children:t.jsx(z,{icon:"solar:printer-minimalistic-bold"})})},pe=(s,e)=>{var g,m,l,d,n,p,h,a,c,x,o,j,v,P,C,b;return`
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
border-color: #FFBC42;
}

.bg-main{
background-color: #FFBC42;
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
color: #FFBC42;
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
              <img src="${$.site.serverFileHost}${s.logo}" class="h-12" />
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
                        <p class="whitespace-nowrap font-bold text-main text-right">${K().format("MMMM DD, YYYY")}</p>
                      </div>
                    </td>
                    <td class="pl-4">
                      <div>
                        <p class="whitespace-nowrap text-slate-400 text-right">Quotation #</p>
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
              <p>Number: ${(g=e==null?void 0:e.application)==null?void 0:g.phoneNumber}</p>
              <p>Tax/Vat: ${(m=e==null?void 0:e.application)==null?void 0:m.taxNumber}</p>
              <p>${(d=(l=e.application)==null?void 0:l.address)==null?void 0:d.city}</p>
              <p>${(p=(n=e.application)==null?void 0:n.address)==null?void 0:p.state}</p>
              <p>${(a=(h=e.application)==null?void 0:h.address)==null?void 0:a.country}</p>
            </div>
          </td>
          <td class="w-1/2 align-top text-right">
            <div class="text-sm text-neutral-600">
              <p class="font-bold" style="text-transform: capitalize !important">${e.customer.name}</p>
              <p>Number: ${e.customer.phoneNumber}</p>
              <p>Tax/Vat: ${e.customer.taxNumber}</p>
              <p>${(x=(c=e.customer)==null?void 0:c.address)==null?void 0:x.street}</p>
              <p>${(j=(o=e.customer)==null?void 0:o.address)==null?void 0:j.country}</p>
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
      ${(v=e.productToQuotation)==null?void 0:v.map((w,T)=>`
        <tr>
          <td class="border-b py-3 pl-3">${T}.</td>
          <td class="border-b py-3 pl-2">${w.product.name}</td>
          <td class="border-b py-3 pl-2 text-right">${u(w.snapshotProductPrice||w.product.price)}</td>
          <td class="border-b py-3 pl-2 text-center">${w==null?void 0:w.quantity}</td>
          <td class="border-b py-3 pl-2 text-center">${u(w.snapshotProductPrice*w.quantity)}</td>
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
                            <div class="whitespace-nowrap font-bold text-main">${u(e==null?void 0:e.totalAmount)}</div>
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
                            <div class="whitespace-nowrap font-bold text-main">${e!=null&&e.snapshotTaxPercentage?u(D((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage)):"-"}</div>
                          </td>
                        </tr>
                        <tr>
                          <td class="bg-main p-3">
                            <div class="whitespace-nowrap font-bold text-white">Total:</div>
                          </td>
                          <td class="bg-main p-3 text-right">
                            <div class="whitespace-nowrap font-bold text-white">${u(_((e==null?void 0:e.totalAmount)-(e==null?void 0:e.totalAmount)*((e==null?void 0:e.discount)/100),e==null?void 0:e.snapshotTaxPercentage))||"-"}</div>
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
      ${(P=e==null?void 0:e.application)==null?void 0:P.name}
      <span class="text-slate-300 px-2">|</span>
      ${(C=e==null?void 0:e.application)==null?void 0:C.email}
      <span class="text-slate-300 px-2">|</span>
      ${(b=e==null?void 0:e.application)==null?void 0:b.phoneNumber}
    </footer>
  </div>
</div>
</body>
</html>
`};export{Ce as P,Te as Q,ke as a,Se as b};

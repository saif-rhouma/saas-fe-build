import{r as d,j as e,B as w,cB as c,aw as n,I as r,aG as i,am as k,c5 as y,cZ as T,eu as b,A as u,l as A,ba as I,p as F,H as E,C as H}from"./index-bfXnrd_B.js";import{C as J}from"./custom-breadcrumbs-DCz3ADG5.js";import{C as N}from"./component-hero-DriVaYlD.js";import{a as x}from"./component-block-Bo7RLSOb.js";import{S as V}from"./component-template-eZYJOia1.js";import{L as o,a as C}from"./ListItem-CmnuLqtj.js";import{L as t}from"./ListItemIcon-B2I6uwMi.js";import{C as $}from"./Checkbox-Dz0lv2WL.js";import"./CardHeader-Dl7IFxoa.js";import"./CardContent-BigBPofS.js";function G(){const[f,L]=d.useState(!0),[p,S]=d.useState([0]),[h,D]=d.useState(["wifi"]),[m,P]=d.useState(1),O=d.useCallback(()=>{L(s=>!s)},[]),j=d.useCallback((s,l)=>{P(l)},[]),B=s=>()=>{const l=p.indexOf(s),a=[...p];l===-1?a.push(s):a.splice(l,1),S(a)},g=s=>()=>{const l=h.indexOf(s),a=[...h];l===-1?a.push(s):a.splice(l,1),D(a)},v=[{name:"Simple",component:e.jsx(x,{sx:{flexDirection:"column",alignItems:"unset"},children:e.jsxs(w,{sx:{bgcolor:"background.paper"},children:[e.jsx("nav",{"aria-label":"main mailbox folders",children:e.jsxs(c,{children:[e.jsx(o,{disablePadding:!0,children:e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"solar:inbox-in-bold",width:24})}),e.jsx(i,{primary:"Inbox"})]})}),e.jsx(o,{disablePadding:!0,children:e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{primary:"Drafts"})]})})]})}),e.jsx(k,{}),e.jsx("nav",{"aria-label":"secondary mailbox folders",children:e.jsxs(c,{children:[e.jsx(o,{disablePadding:!0,children:e.jsx(n,{children:e.jsx(i,{primary:"Trash"})})}),e.jsx(o,{disablePadding:!0,children:e.jsx(n,{component:"a",href:"#simple-list",children:e.jsx(i,{primary:"Spam"})})})]})})]})})},{name:"Nested",component:e.jsx(x,{sx:{flexDirection:"column",alignItems:"unset"},children:e.jsxs(c,{sx:{bgcolor:"background.paper"},component:"nav","aria-labelledby":"nested-list-subheader",subheader:e.jsx(y,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:[e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"iconamoon:send-fill",width:24})}),e.jsx(i,{primary:"Sent mail"})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{primary:"Drafts"})]}),e.jsxs(n,{onClick:O,children:[e.jsx(t,{children:e.jsx(r,{icon:"solar:inbox-in-bold",width:24})}),e.jsx(i,{primary:"Inbox"}),e.jsx(r,{icon:f?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})]}),e.jsx(T,{in:f,timeout:"auto",unmountOnExit:!0,children:e.jsx(c,{component:"div",disablePadding:!0,children:e.jsxs(n,{sx:{pl:4},children:[e.jsx(t,{children:e.jsx(r,{icon:"ic:round-star-border",width:24})}),e.jsx(i,{primary:"Starred"})]})})})]})})},{name:"Folder",component:e.jsx(x,{sx:{flexDirection:"column",alignItems:"unset"},children:e.jsxs(c,{sx:{bgcolor:"background.paper"},children:[e.jsxs(o,{children:[e.jsx(b,{children:e.jsx(u,{children:e.jsx(r,{icon:"ic:baseline-image",width:24})})}),e.jsx(i,{primary:"Photos",secondary:"Jan 9, 2014"})]}),e.jsxs(o,{children:[e.jsx(b,{children:e.jsx(u,{children:e.jsx(r,{icon:"ic:baseline-work",width:24})})}),e.jsx(i,{primary:"Work",secondary:"Jan 7, 2014"})]}),e.jsxs(o,{children:[e.jsx(b,{children:e.jsx(u,{children:e.jsx(r,{icon:"ic:round-beach-access",width:24})})}),e.jsx(i,{primary:"Vacation",secondary:"July 20, 2014"})]})]})})},{name:"Selected",component:e.jsx(x,{sx:{flexDirection:"column",alignItems:"unset"},children:e.jsxs(w,{sx:{bgcolor:"background.paper"},children:[e.jsxs(c,{component:"nav","aria-label":"main mailbox folders",children:[e.jsxs(n,{selected:m===0,onClick:s=>j(s,0),children:[e.jsx(t,{children:e.jsx(r,{icon:"solar:inbox-in-bold",width:24})}),e.jsx(i,{primary:"Inbox"})]}),e.jsxs(n,{selected:m===1,onClick:s=>j(s,1),children:[e.jsx(t,{children:e.jsx(r,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(i,{primary:"Drafts"})]})]}),e.jsx(k,{}),e.jsxs(c,{component:"nav","aria-label":"secondary mailbox folder",children:[e.jsx(n,{selected:m===2,onClick:s=>j(s,2),children:e.jsx(i,{primary:"Trash"})}),e.jsx(n,{selected:m===3,onClick:s=>j(s,3),children:e.jsx(i,{primary:"Spam"})})]})]})})},{name:"Controls",component:e.jsx(x,{sx:{flexDirection:"column",alignItems:"unset"},children:e.jsx(c,{sx:{bgcolor:"background.paper"},children:[0,1,2,3].map(s=>{const l=`checkbox-list-label-${s}`;return e.jsx(o,{secondaryAction:e.jsx(A,{edge:"end","aria-label":"comments",children:e.jsx(r,{icon:"solar:chat-round-dots-bold",width:24})}),disablePadding:!0,children:e.jsxs(n,{role:void 0,dense:!0,onClick:B(s),children:[e.jsx(t,{children:e.jsx($,{edge:"start",checked:p.indexOf(s)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{id:l,"aria-labelledby":l}})}),e.jsx(i,{id:l,primary:`Line item ${s+1}`})]},s)},s)})})})},{name:"Switch",component:e.jsx(x,{sx:{flexDirection:"column",alignItems:"unset"},children:e.jsxs(c,{subheader:e.jsx(y,{children:"Settings"}),sx:{bgcolor:"background.paper"},children:[e.jsx(o,{children:e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"ic:baseline-wifi",width:24})}),e.jsx(i,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),e.jsx(C,{children:e.jsx(I,{edge:"end",onChange:g("wifi"),checked:h.indexOf("wifi")!==-1,inputProps:{id:"switch-list-label-wifi","aria-labelledby":"switch-list-label-wifi"}})})]})}),e.jsx(o,{children:e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"ic:baseline-bluetooth",width:24})}),e.jsx(i,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),e.jsx(C,{children:e.jsx(I,{edge:"end",onChange:g("bluetooth"),checked:h.indexOf("bluetooth")!==-1,inputProps:{id:"switch-list-label-bluetooth","aria-labelledby":"switch-list-label-bluetooth"}})})]})})]})})}];return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx(J,{heading:"List",links:[{name:"Components",href:F.components},{name:"Lists"}],moreLink:["https://mui.com/components/lists"]})}),e.jsx(V,{data:v})]})}const M={title:`List | MUI - ${H.site.name}`};function _(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{children:e.jsxs("title",{children:[" ",M.title]})}),e.jsx(G,{})]})}export{_ as default};

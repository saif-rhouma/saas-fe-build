import{r as t,j as e,p as b,e as O,aS as l,cJ as S,aT as H,l as T,I as v,H as P,C as y}from"./index-DSZ8-SnN.js";import{C as L}from"./custom-breadcrumbs-D_ovYyL8.js";import{C as w}from"./component-hero-jcNtHv0F.js";import{C as E,a as i}from"./component-block-CgPE_oqU.js";import{M as o}from"./Menu-WNpJDxC0.js";const C=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],B=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function G(){const[r,j]=t.useState(1),[c,m]=t.useState(null),[u,d]=t.useState(null),[h,p]=t.useState(null),k=t.useCallback(n=>{p(n.currentTarget)},[]),g=t.useCallback(n=>{d(n.currentTarget)},[]),f=t.useCallback((n,s)=>{j(s),d(null)},[]),M=t.useCallback(n=>{m(n.currentTarget)},[]),a=t.useCallback(()=>{m(null)},[]),x=t.useCallback(()=>{p(null)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx(L,{heading:"Menu",links:[{name:"Components",href:b.components},{name:"Menu"}],moreLink:["https://mui.com/components/menus"]})}),e.jsxs(E,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}},children:[e.jsxs(i,{title:"Simple",children:[e.jsx(O,{variant:"outlined",onClick:M,children:"Open Menu"}),e.jsx(o,{id:"simple-menu",anchorEl:c,onClose:a,open:!!c,children:["Profile","My account","Logout"].map(n=>e.jsx(l,{selected:n==="Profile",onClick:a,children:n},n))})]}),e.jsxs(i,{title:"Selected",children:[e.jsx("nav",{"aria-label":"Device settings",children:e.jsx(S,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:g,children:e.jsx(H,{primary:"When device is locked",secondary:C[r]})})}),e.jsx(o,{id:"lock-menu",anchorEl:u,onClose:a,open:!!u,children:C.map((n,s)=>e.jsx(l,{disabled:s===0,selected:s===r,onClick:I=>f(I,s),children:n},n))})]}),e.jsxs(i,{title:"Max height",children:[e.jsx(T,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:k,children:e.jsx(v,{icon:"eva:more-vertical-fill"})}),e.jsx(o,{id:"long-menu",anchorEl:h,onClose:x,open:!!h,slotProps:{paper:{sx:{width:"20ch",maxHeight:48*4.5}}},children:B.map(n=>e.jsx(l,{selected:n==="Pyxis",onClick:x,children:n},n))})]})]})]})}const N={title:`Menu | MUI - ${y.site.name}`};function R(){return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:e.jsxs("title",{children:[" ",N.title]})}),e.jsx(G,{})]})}export{R as default};

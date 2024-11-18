import{r as o,aP as x,j as e,p as C,e as h,db as a,B as l,T as t,l as b,I as g,H as P,C as E}from"./index-CIoKvMHn.js";import{C as y}from"./custom-breadcrumbs-BThLSMc0.js";import{C as F}from"./component-hero-BFqKvMY5.js";import{C as k,a as v}from"./component-block-Boqz2sjj.js";import{F as w}from"./FormControl-FN21q8Rq.js";import{F as B}from"./FormLabel-BuFlWDAS.js";import{R as H,a as O}from"./RadioGroup-HYVGGCqV.js";import{F as R}from"./FormControlLabel-CjW9C05T.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./FormGroup-DrrfJQn4.js";function I(){const[i,j]=o.useState("top-left"),n=x(),s=x(),c=o.useRef(null),[p,m]=o.useState(!1),f=o.useCallback(r=>{j(r.target.value)},[]),u=o.useCallback(()=>{m(!0)},[]),d=o.useCallback(()=>{m(!1)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsx(y,{heading:"Popover",links:[{name:"Components",href:C.components},{name:"Popover"}],moreLink:["https://mui.com/components/popover"]})}),e.jsxs(k,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[e.jsxs(v,{title:"Click & hover",sx:{gap:3},children:[e.jsxs("div",{children:[e.jsx(h,{variant:"contained",onClick:n.onOpen,children:"Click popover"}),e.jsx(a,{open:n.open,onClose:n.onClose,anchorEl:n.anchorEl,slotProps:{arrow:{placement:"top-center"}},children:e.jsxs(l,{sx:{p:2,maxWidth:280},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),e.jsxs("div",{children:[e.jsx(h,{ref:c,variant:"outlined",onMouseEnter:u,onMouseLeave:d,children:"Hover popover."}),e.jsx(a,{open:p,anchorEl:c.current,slotProps:{arrow:{placement:"bottom-center"},paper:{onMouseEnter:u,onMouseLeave:d,sx:{...p&&{pointerEvents:"auto"}}}},sx:{pointerEvents:"none"},children:e.jsxs(l,{sx:{p:2,maxWidth:280},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]}),e.jsxs(v,{title:"Customized",sx:{gap:5},children:[e.jsx(b,{onClick:s.onOpen,sx:{bgcolor:"action.hover"},children:e.jsx(g,{icon:"eva:more-vertical-fill"})}),e.jsxs(w,{children:[e.jsx(B,{sx:{typography:"body2"},children:"Arrow"}),e.jsx(H,{value:i,onChange:f,children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom","right-top","right-center","right-bottom"].map(r=>e.jsx(R,{value:r,control:e.jsx(O,{}),label:r},r))})]}),e.jsx(a,{open:s.open,onClose:s.onClose,anchorEl:s.anchorEl,slotProps:{arrow:{placement:i}},children:e.jsxs(l,{sx:{p:2,maxWidth:280},children:[e.jsx(t,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),e.jsx(t,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})]})}const L={title:`Popover | MUI - ${E.site.name}`};function q(){return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:e.jsxs("title",{children:[" ",L.title]})}),e.jsx(I,{})]})}export{q as default};

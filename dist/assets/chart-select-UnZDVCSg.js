import{aP as d,j as e,ax as h,v as l,I as t,db as x,aR as p,aS as u}from"./index-CuWEjZ-G.js";function j({options:o,value:i,onChange:s,slotProps:a,...c}){const n=d();return e.jsxs(e.Fragment,{children:[e.jsxs(h,{onClick:n.onOpen,sx:{pr:1,pl:1.5,gap:1.5,height:34,borderRadius:1,typography:"subtitle2",border:r=>`solid 1px ${l(r.vars.palette.grey["500Channel"],.24)}`,...a==null?void 0:a.button},...c,children:[i,e.jsx(t,{width:16,icon:n.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})]}),e.jsx(x,{open:n.open,anchorEl:n.anchorEl,onClose:n.onClose,children:e.jsx(p,{sx:a==null?void 0:a.popover,children:o.map(r=>e.jsx(u,{selected:r===i,onClick:()=>{n.onClose(),s(r)},children:r},r))})})]})}export{j as C};

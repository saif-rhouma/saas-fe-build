import{r as f,j as e,B as l,aR as w,S as j,v as b,cS as g,I as y}from"./index-MIl7JRte.js";const C=f.forwardRef(({colors:s,selected:n,onSelectColor:i,limit:d="auto",sx:c,slotProps:r,...u},p)=>{const x=typeof n=="string",o=f.useCallback(t=>{if(x)t!==n&&i(t);else{const h=n.includes(t)?n.filter(a=>a!==t):[...n,t];i(h)}},[i,n,x]);return e.jsx(l,{ref:p,component:"ul",sx:{flexWrap:"wrap",flexDirection:"row",display:"inline-flex",...d!=="auto"&&{width:d*36,justifyContent:"flex-end"},...c},...u,children:s.map(t=>{const h=x?n===t:n.includes(t);return e.jsx(l,{component:"li",sx:{display:"inline-flex"},children:e.jsx(w,{"aria-label":t,onClick:()=>o(t),sx:{width:36,height:36,borderRadius:"50%",...r==null?void 0:r.button},children:e.jsx(j,{alignItems:"center",justifyContent:"center",sx:{width:20,height:20,bgcolor:t,borderRadius:"50%",border:a=>`solid 1px ${b(a.vars.palette.grey["500Channel"],.16)}`,...h&&{transform:"scale(1.3)",boxShadow:`4px 4px 8px 0 ${g(t,.48)}`,outline:`solid 2px ${g(t,.08)}`,transition:a=>a.transitions.create("all",{duration:a.transitions.duration.shortest})}},children:e.jsx(y,{width:h?12:0,icon:"eva:checkmark-fill",sx:{color:a=>a.palette.getContrastText(t),transition:a=>a.transitions.create("all",{duration:a.transitions.duration.shortest})}})})})},t)})})}),k=f.forwardRef(({colors:s,limit:n=3,sx:i,...d},c)=>{const r=s.slice(0,n),u=s.length-n;return e.jsxs(l,{ref:c,sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",...i},...d,children:[r.map((p,x)=>e.jsx(l,{sx:{ml:-.75,width:16,height:16,bgcolor:p,borderRadius:"50%",border:o=>`solid 2px ${o.vars.palette.background.paper}`,boxShadow:o=>`inset -1px 1px 2px ${b(o.vars.palette.common.blackChannel,.24)}`}},p+x)),s.length>n&&e.jsx(l,{component:"span",sx:{typography:"subtitle2"},children:`+${u}`})]})});export{k as C,C as a};

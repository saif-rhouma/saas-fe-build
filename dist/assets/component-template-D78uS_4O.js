import{r as i,j as o,S as x,B as w,L as y,aB as L,f as k}from"./index-CDcUgrfM.js";import{C as T}from"./CardHeader-CNs3kuny.js";import{C}from"./CardContent-_eacRkjJ.js";const B=typeof window<"u"?i.useLayoutEffect:i.useEffect;function H(l,r,e,a){const c=i.useRef(r);B(()=>{c.current=r},[r]),i.useEffect(()=>{const s=window;if(!(s&&s.addEventListener))return;const d=m=>c.current(m);return s.addEventListener(l,d,a),()=>{s.removeEventListener(l,d)}},[l,e,a])}function W({sx:l,data:r,slotProps:e,offsetValue:a=.3,queryClassName:c="scroll__to__view",...s}){const[d,m]=i.useState(0),g=i.useCallback(()=>{const n=window.innerHeight*a,t=window.scrollY+n,u=document.querySelectorAll(`.${c}`);let f=null;u.forEach((h,E)=>{const p=h.offsetTop,b=p+h.clientHeight;t>=p&&t<b&&(f=E)}),m(f)},[a,c]);H("scroll",g);const S=i.useCallback(n=>{const t=document.querySelectorAll(`.${c}`);if(t&&t.length>n){const f=t[n].offsetTop-160;window.scrollTo({top:f,behavior:"smooth"})}},[c]),v=o.jsx(x,{component:"nav",sx:{top:80,width:240,flexShrink:0,position:"sticky",display:{xs:"none",md:"flex"},...e==null?void 0:e.nav},children:o.jsx(w,{component:"ul",sx:{gap:1.5,display:"flex",flexDirection:"column"},children:r.map((n,t)=>o.jsx(w,{component:"li",sx:{display:"flex"},children:o.jsxs(y,{underline:"none",onClick:()=>S(t),sx:{cursor:"pointer",typography:"body2",color:"text.disabled",...d===t&&{color:"text.primary",fontWeight:"fontWeightSemiBold"}},children:[t+1," - ",n.name]})},n.name))})}),j=o.jsx(x,{component:"section",spacing:5,flex:"1 1 auto",sx:{minWidth:0,borderRadius:2,p:{xs:3,md:5},bgcolor:"background.neutral",...e==null?void 0:e.section},children:r.map(n=>o.jsxs(L,{className:c,children:[o.jsx(T,{title:n.name}),o.jsx(C,{children:n.component})]},n.name))});return o.jsx(k,{...e==null?void 0:e.container,children:o.jsxs(x,{spacing:5,direction:"row",alignItems:"flex-start",sx:{pt:10,pb:15,...l},...s,children:[v,j]})})}export{W as S};

import{b as S,j as d,e1 as C,B as m,aP as z,v as N,s as A}from"./index-Cb6aSJqI.js";import{c as s}from"./carousel-progress-bar-B_O7Xlpj.js";function W({sx:p,gap:l,slotProps:e,onClickDot:w,scrollSnaps:$,selectedIndex:f,fallbackCount:u=1,variant:i="circular",fallback:j=!1,...B}){var b,x;const c=S(),a={number:l??6,rounded:l??2,circular:l??2},r={circular:((b=e==null?void 0:e.dot)==null?void 0:b.size)??18,number:((x=e==null?void 0:e.dot)==null?void 0:x.size)??28},R=d.jsx(m,{sx:{height:r.circular,width:`calc(${u*r.circular+a.circular*(u-1)}px )`,...i==="number"&&{height:r.number,width:`calc(${u*r.number+a.number*(u-1)}px )`}}}),h={circular:t=>({width:r.circular,height:r.circular,"&::before":{width:8,height:8,content:'""',opacity:.24,borderRadius:"50%",bgcolor:"currentColor",transition:c.transitions.create(["opacity"],{easing:c.transitions.easing.sharp,duration:c.transitions.duration.short}),...t&&{opacity:1}}}),rounded:t=>({width:r.circular,height:r.circular,"&::before":{width:8,height:8,content:'""',opacity:.24,borderRadius:"50%",bgcolor:"currentColor",transition:c.transitions.create(["width","opacity"],{easing:c.transitions.easing.sharp,duration:c.transitions.duration.short}),...t&&{width:"calc(100% - 4px)",opacity:1,borderRadius:1}}}),number:t=>({width:r.number,height:r.number,borderRadius:"50%",typography:"caption",color:"text.disabled",border:`solid 1px ${N(c.vars.palette.grey["500Channel"],.16)}`,...t&&{color:"common.white",bgcolor:"text.primary",fontWeight:"fontWeightSemiBold",[A.dark]:{color:"grey.800"}}})};return d.jsx(C,{fallback:j?R:null,children:d.jsx(m,{component:"ul",className:s.dots,sx:{zIndex:9,display:"inline-flex",...i==="circular"&&{gap:`${a.circular}px`},...i==="rounded"&&{gap:`${a.rounded}px`},...i==="number"&&{gap:`${a.number}px`},...p},...B,children:$.map((t,n)=>{var g,y;const o=n===f;return d.jsx(m,{component:"li",sx:{display:"inline-flex"},children:d.jsx(z,{disableRipple:!0,"aria-label":`dot-${n}`,className:s.dot.concat(o?` ${s.state.selected}`:""),onClick:()=>w(n),sx:{...i==="circular"&&h.circular(o),...i==="rounded"&&h.rounded(o),...i==="number"&&h.number(o),[`&.${s.state.selected}`]:{...(g=e==null?void 0:e.dot)==null?void 0:g.selected},...(y=e==null?void 0:e.dot)==null?void 0:y.sx},children:i==="number"&&n+1})},n)})})})}export{W as C};

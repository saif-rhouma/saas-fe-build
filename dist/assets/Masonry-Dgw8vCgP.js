import{bT as Q,bU as X,aS as ee,r as N,aY as te,aZ as se,aW as h,bO as ne,c3 as oe,bA as re,j as U,a_ as ae,a$ as ie,dn as W,dp as le,cx as H,dq as O,dr as w}from"./index-DLJImauo.js";function ce(e){return X("MuiMasonry",e)}Q("MuiMasonry",["root"]);const ue=["children","className","component","columns","spacing","sequential","defaultColumns","defaultHeight","defaultSpacing"],u=e=>Number(e.replace("px","")),de={flexBasis:"100%",width:0,margin:0,padding:0},me=e=>{const{classes:n}=e;return ie({root:["root"]},ce,n)},fe=({ownerState:e,theme:n})=>{let r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const c={};if(e.isSSR){const s={},t=u(n.spacing(e.defaultSpacing));for(let o=1;o<=e.defaultColumns;o+=1)s[`&:nth-of-type(${e.defaultColumns}n+${o%e.defaultColumns})`]={order:o};return c.height=e.defaultHeight,c.margin=-(t/2),c["& > *"]=h({},r["& > *"],s,{margin:t/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${t}px)`}),h({},r,c)}const a=W({values:e.spacing,breakpoints:n.breakpoints.values}),y=le(n);r=H(r,O({theme:n},a,s=>{let t;if(typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number"){const o=Number(s);t=w(y,o)}else t=s;return h({margin:`calc(0px - (${t} / 2))`,"& > *":{margin:`calc(${t} / 2)`}},e.maxColumnHeight&&{height:typeof t=="number"?Math.ceil(e.maxColumnHeight+u(t)):`calc(${e.maxColumnHeight}px + ${t})`})}));const i=W({values:e.columns,breakpoints:n.breakpoints.values});return r=H(r,O({theme:n},i,s=>{const o=`${(100/Number(s)).toFixed(2)}%`,p=typeof a=="string"&&!Number.isNaN(Number(a))||typeof a=="number"?w(y,Number(a)):"0px";return{"& > *":{width:`calc(${o} - ${p})`}}})),typeof a=="object"&&(r=H(r,O({theme:n},a,(s,t)=>{if(t){const o=Number(s),p=Object.keys(i).pop(),$=w(y,o);return{"& > *":{width:`calc(${`${(100/(typeof i=="object"?i[t]||i[p]:i)).toFixed(2)}%`} - ${$})`}}}return null}))),r},pe=ee("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,n)=>[n.root]})(fe),he=N.forwardRef(function(n,r){const c=te({props:n,name:"MuiMasonry"}),{children:a,className:y,component:B="div",columns:i=4,spacing:v=1,sequential:s=!1,defaultColumns:t,defaultHeight:o,defaultSpacing:p}=c,$=se(c,ue),d=N.useRef(),[F,_]=N.useState(),j=!F&&o&&t!==void 0&&p!==void 0,[A,q]=N.useState(j?t-1:0),V=h({},c,{spacing:v,columns:i,maxColumnHeight:F,defaultColumns:t,defaultHeight:o,defaultSpacing:p,isSSR:j}),D=me(V),T=N.useCallback(m=>{if(!d.current||!m||m.length===0)return;const l=d.current,M=d.current.firstChild,z=l.clientWidth,L=M.clientWidth;if(z===0||L===0)return;const P=window.getComputedStyle(M),Y=u(P.marginLeft),Z=u(P.marginRight),S=Math.round(z/(L+Y+Z)),b=new Array(S).fill(0);let x=!1,C=1;l.childNodes.forEach(f=>{if(f.nodeType!==Node.ELEMENT_NODE||f.dataset.class==="line-break"||x)return;const R=window.getComputedStyle(f),J=u(R.marginTop),K=u(R.marginBottom),E=u(R.height)?Math.ceil(u(R.height))+J+K:0;if(E===0){x=!0;return}for(let g=0;g<f.childNodes.length;g+=1){const k=f.childNodes[g];if(k.tagName==="IMG"&&k.clientHeight===0){x=!0;break}}if(!x)if(s)b[C-1]+=E,f.style.order=C,C+=1,C>S&&(C=1);else{const g=b.indexOf(Math.min(...b));b[g]+=E;const k=g+1;f.style.order=k}}),x||ne.flushSync(()=>{_(Math.max(...b)),q(S>0?S-1:0)})},[s]);oe(()=>{if(typeof ResizeObserver>"u")return;let m;const l=new ResizeObserver(()=>{m=requestAnimationFrame(T)});return d.current&&d.current.childNodes.forEach(M=>{l.observe(M)}),()=>{m&&window.cancelAnimationFrame(m),l&&l.disconnect()}},[i,v,a,T]);const I=re(r,d),G=new Array(A).fill("").map((m,l)=>U.jsx("span",{"data-class":"line-break",style:h({},de,{order:l+1})},l));return U.jsxs(pe,h({as:B,className:ae(D.root,y),ref:I,ownerState:V},$,{children:[a,G]}))});export{he as M};

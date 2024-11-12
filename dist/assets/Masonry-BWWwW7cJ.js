import{bM as Y,bN as Z,b6 as ee,r as N,bo as te,bp as se,bm as h,bF as ne,c8 as oe,c5 as re,j as A,bq as ie,br as ae,dr as U,ds as le,cA as H,dt as w,du as B}from"./index-DT04UR_O.js";function ce(e){return Z("MuiMasonry",e)}Y("MuiMasonry",["root"]);const ue=["children","className","component","columns","spacing","sequential","defaultColumns","defaultHeight","defaultSpacing"],u=e=>Number(e.replace("px","")),de={flexBasis:"100%",width:0,margin:0,padding:0},me=e=>{const{classes:n}=e;return ae({root:["root"]},ce,n)},fe=({ownerState:e,theme:n})=>{let r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const c={};if(e.isSSR){const s={},t=u(n.spacing(e.defaultSpacing));for(let o=1;o<=e.defaultColumns;o+=1)s[`&:nth-of-type(${e.defaultColumns}n+${o%e.defaultColumns})`]={order:o};return c.height=e.defaultHeight,c.margin=-(t/2),c["& > *"]=h({},r["& > *"],s,{margin:t/2,width:`calc(${(100/e.defaultColumns).toFixed(2)}% - ${t}px)`}),h({},r,c)}const i=U({values:e.spacing,breakpoints:n.breakpoints.values}),y=le(n);r=H(r,w({theme:n},i,s=>{let t;if(typeof s=="string"&&!Number.isNaN(Number(s))||typeof s=="number"){const o=Number(s);t=B(y,o)}else t=s;return h({margin:`calc(0px - (${t} / 2))`,"& > *":{margin:`calc(${t} / 2)`}},e.maxColumnHeight&&{height:typeof t=="number"?Math.ceil(e.maxColumnHeight+u(t)):`calc(${e.maxColumnHeight}px + ${t})`})}));const a=U({values:e.columns,breakpoints:n.breakpoints.values});return r=H(r,w({theme:n},a,s=>{const o=`${(100/Number(s)).toFixed(2)}%`,p=typeof i=="string"&&!Number.isNaN(Number(i))||typeof i=="number"?B(y,Number(i)):"0px";return{"& > *":{width:`calc(${o} - ${p})`}}})),typeof i=="object"&&(r=H(r,w({theme:n},i,(s,t)=>{if(t){const o=Number(s),p=Object.keys(a).pop(),F=B(y,o);return{"& > *":{width:`calc(${`${(100/(typeof a=="object"?a[t]||a[p]:a)).toFixed(2)}%`} - ${F})`}}}return null}))),r},pe=ee("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(e,n)=>[n.root]})(fe),he=N.forwardRef(function(n,r){const c=te({props:n,name:"MuiMasonry"}),{children:i,className:y,component:O="div",columns:a=4,spacing:v=1,sequential:s=!1,defaultColumns:t,defaultHeight:o,defaultSpacing:p}=c,F=se(c,ue),d=N.useRef(),[$,W]=N.useState(),j=!$&&o&&t!==void 0&&p!==void 0,[_,q]=N.useState(j?t-1:0),V=h({},c,{spacing:v,columns:a,maxColumnHeight:$,defaultColumns:t,defaultHeight:o,defaultSpacing:p,isSSR:j}),D=me(V),z=N.useCallback(m=>{if(!d.current||!m||m.length===0)return;const l=d.current,M=d.current.firstChild,L=l.clientWidth,P=M.clientWidth;if(L===0||P===0)return;const T=window.getComputedStyle(M),J=u(T.marginLeft),K=u(T.marginRight),S=Math.round(L/(P+J+K)),b=new Array(S).fill(0);let x=!1,C=1;l.childNodes.forEach(f=>{if(f.nodeType!==Node.ELEMENT_NODE||f.dataset.class==="line-break"||x)return;const R=window.getComputedStyle(f),Q=u(R.marginTop),X=u(R.marginBottom),E=u(R.height)?Math.ceil(u(R.height))+Q+X:0;if(E===0){x=!0;return}for(let g=0;g<f.childNodes.length;g+=1){const k=f.childNodes[g];if(k.tagName==="IMG"&&k.clientHeight===0){x=!0;break}}if(!x)if(s)b[C-1]+=E,f.style.order=C,C+=1,C>S&&(C=1);else{const g=b.indexOf(Math.min(...b));b[g]+=E;const k=g+1;f.style.order=k}}),x||ne.flushSync(()=>{W(Math.max(...b)),q(S>0?S-1:0)})},[s]);oe(()=>{if(typeof ResizeObserver>"u")return;let m;const l=new ResizeObserver(()=>{m=requestAnimationFrame(z)});return d.current&&d.current.childNodes.forEach(M=>{l.observe(M)}),()=>{m&&window.cancelAnimationFrame(m),l&&l.disconnect()}},[a,v,i,z]);const I=re(r,d),G=new Array(_).fill("").map((m,l)=>A.jsx("span",{"data-class":"line-break",style:h({},de,{order:l+1})},l));return A.jsxs(pe,h({as:O,className:ie(D.root,y),ref:I,ownerState:V},F,{children:[i,G]}))});export{he as M};
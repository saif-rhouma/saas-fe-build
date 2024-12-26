import{r as l,au as $,ax as s,ay as b,bv as R,bx as z,bw as A,dI as P,aA as j,aB as _,j as D,aC as M,aD as N,dJ as W}from"./index-dT1vCng0.js";const B=l.createContext(),E=l.createContext(),I=["align","className","component","padding","scope","size","sortDirection","variant"],U=a=>{const{classes:e,variant:i,align:o,padding:r,size:g,stickyHeader:d}=a,x={root:["root",i,d&&"stickyHeader",o!=="inherit"&&`align${s(o)}`,r!=="normal"&&`padding${s(r)}`,`size${s(g)}`]};return N(x,W,e)},J=$("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:i}=a;return[e.root,e[i.variant],e[`size${s(i.size)}`],i.padding!=="normal"&&e[`padding${s(i.padding)}`],i.align!=="inherit"&&e[`align${s(i.align)}`],i.stickyHeader&&e.stickyHeader]}})(({theme:a,ownerState:e})=>b({},a.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:a.vars?`1px solid ${a.vars.palette.TableCell.border}`:`1px solid
    ${a.palette.mode==="light"?R(z(a.palette.divider,1),.88):A(z(a.palette.divider,1),.68)}`,textAlign:"left",padding:16},e.variant==="head"&&{color:(a.vars||a).palette.text.primary,lineHeight:a.typography.pxToRem(24),fontWeight:a.typography.fontWeightMedium},e.variant==="body"&&{color:(a.vars||a).palette.text.primary},e.variant==="footer"&&{color:(a.vars||a).palette.text.secondary,lineHeight:a.typography.pxToRem(21),fontSize:a.typography.pxToRem(12)},e.size==="small"&&{padding:"6px 16px",[`&.${P.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},e.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},e.padding==="none"&&{padding:0},e.align==="left"&&{textAlign:"left"},e.align==="center"&&{textAlign:"center"},e.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},e.align==="justify"&&{textAlign:"justify"},e.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(a.vars||a).palette.background.default})),q=l.forwardRef(function(e,i){const o=j({props:e,name:"MuiTableCell"}),{align:r="inherit",className:g,component:d,padding:x,scope:T,size:k,sortDirection:v,variant:h}=o,m=_(o,I),t=l.useContext(B),p=l.useContext(E),y=p&&p.variant==="head";let n;d?n=d:n=y?"th":"td";let c=T;n==="td"?c=void 0:!c&&y&&(c="col");const u=h||p&&p.variant,C=b({},o,{align:r,component:n,padding:x||(t&&t.padding?t.padding:"normal"),size:k||(t&&t.size?t.size:"medium"),sortDirection:v,stickyHeader:u==="head"&&t&&t.stickyHeader,variant:u}),H=U(C);let f=null;return v&&(f=v==="asc"?"ascending":"descending"),D.jsx(J,b({as:n,ref:i,className:M(H.root,g),"aria-sort":f,scope:c,ownerState:C},m))});export{q as T,B as a,E as b};

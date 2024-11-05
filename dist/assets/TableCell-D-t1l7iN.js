import{r as l,aw as $,az as s,aA as v,bx as R,bz as z,by as A,dI as P,aC as j,aD as _,j as D,aE as E,aF as M,dJ as N}from"./index-D6VGg1bq.js";const W=l.createContext(),I=l.createContext(),U=["align","className","component","padding","scope","size","sortDirection","variant"],B=a=>{const{classes:e,variant:i,align:o,padding:r,size:g,stickyHeader:d}=a,x={root:["root",i,d&&"stickyHeader",o!=="inherit"&&`align${s(o)}`,r!=="normal"&&`padding${s(r)}`,`size${s(g)}`]};return M(x,N,e)},F=$("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:i}=a;return[e.root,e[i.variant],e[`size${s(i.size)}`],i.padding!=="normal"&&e[`padding${s(i.padding)}`],i.align!=="inherit"&&e[`align${s(i.align)}`],i.stickyHeader&&e.stickyHeader]}})(({theme:a,ownerState:e})=>v({},a.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:a.vars?`1px solid ${a.vars.palette.TableCell.border}`:`1px solid
    ${a.palette.mode==="light"?R(z(a.palette.divider,1),.88):A(z(a.palette.divider,1),.68)}`,textAlign:"left",padding:16},e.variant==="head"&&{color:(a.vars||a).palette.text.primary,lineHeight:a.typography.pxToRem(24),fontWeight:a.typography.fontWeightMedium},e.variant==="body"&&{color:(a.vars||a).palette.text.primary},e.variant==="footer"&&{color:(a.vars||a).palette.text.secondary,lineHeight:a.typography.pxToRem(21),fontSize:a.typography.pxToRem(12)},e.size==="small"&&{padding:"6px 16px",[`&.${P.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},e.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},e.padding==="none"&&{padding:0},e.align==="left"&&{textAlign:"left"},e.align==="center"&&{textAlign:"center"},e.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},e.align==="justify"&&{textAlign:"justify"},e.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(a.vars||a).palette.background.default})),L=l.forwardRef(function(e,i){const o=j({props:e,name:"MuiTableCell"}),{align:r="inherit",className:g,component:d,padding:x,scope:T,size:k,sortDirection:b,variant:h}=o,m=_(o,U),t=l.useContext(W),p=l.useContext(I),y=p&&p.variant==="head";let n;d?n=d:n=y?"th":"td";let c=T;n==="td"?c=void 0:!c&&y&&(c="col");const C=h||p&&p.variant,u=v({},o,{align:r,component:n,padding:x||(t&&t.padding?t.padding:"normal"),size:k||(t&&t.size?t.size:"medium"),sortDirection:b,stickyHeader:C==="head"&&t&&t.stickyHeader,variant:C}),H=B(u);let f=null;return b&&(f=b==="asc"?"ascending":"descending"),D.jsx(F,v({as:n,ref:i,className:E(H.root,g),"aria-sort":f,scope:c,ownerState:u},m))});export{L as T,W as a,I as b};

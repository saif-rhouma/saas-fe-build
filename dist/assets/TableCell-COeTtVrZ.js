import{r as l,aQ as $,aT as s,aU as y,cc as R,ce as T,cd as P,e1 as j,aW as A,aX as _,j as W,aY as D,aZ as M,e2 as N}from"./index-DCM0dqKu.js";const U=l.createContext(),E=l.createContext(),B=["align","className","component","padding","scope","size","sortDirection","variant"],I=a=>{const{classes:e,variant:i,align:o,padding:r,size:g,stickyHeader:d}=a,x={root:["root",i,d&&"stickyHeader",o!=="inherit"&&`align${s(o)}`,r!=="normal"&&`padding${s(r)}`,`size${s(g)}`]};return M(x,N,e)},L=$("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:i}=a;return[e.root,e[i.variant],e[`size${s(i.size)}`],i.padding!=="normal"&&e[`padding${s(i.padding)}`],i.align!=="inherit"&&e[`align${s(i.align)}`],i.stickyHeader&&e.stickyHeader]}})(({theme:a,ownerState:e})=>y({},a.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:a.vars?`1px solid ${a.vars.palette.TableCell.border}`:`1px solid
    ${a.palette.mode==="light"?R(T(a.palette.divider,1),.88):P(T(a.palette.divider,1),.68)}`,textAlign:"left",padding:16},e.variant==="head"&&{color:(a.vars||a).palette.text.primary,lineHeight:a.typography.pxToRem(24),fontWeight:a.typography.fontWeightMedium},e.variant==="body"&&{color:(a.vars||a).palette.text.primary},e.variant==="footer"&&{color:(a.vars||a).palette.text.secondary,lineHeight:a.typography.pxToRem(21),fontSize:a.typography.pxToRem(12)},e.size==="small"&&{padding:"6px 16px",[`&.${j.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},e.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},e.padding==="none"&&{padding:0},e.align==="left"&&{textAlign:"left"},e.align==="center"&&{textAlign:"center"},e.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},e.align==="justify"&&{textAlign:"justify"},e.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(a.vars||a).palette.background.default})),X=l.forwardRef(function(e,i){const o=A({props:e,name:"MuiTableCell"}),{align:r="inherit",className:g,component:d,padding:x,scope:z,size:k,sortDirection:v,variant:h}=o,m=_(o,B),t=l.useContext(U),p=l.useContext(E),b=p&&p.variant==="head";let n;d?n=d:n=b?"th":"td";let c=z;n==="td"?c=void 0:!c&&b&&(c="col");const u=h||p&&p.variant,C=y({},o,{align:r,component:n,padding:x||(t&&t.padding?t.padding:"normal"),size:k||(t&&t.size?t.size:"medium"),sortDirection:v,stickyHeader:u==="head"&&t&&t.stickyHeader,variant:u}),H=I(C);let f=null;return v&&(f=v==="asc"?"ascending":"descending"),W.jsx(L,y({as:n,ref:i,className:D(H.root,g),"aria-sort":f,scope:c,ownerState:C},m))});export{X as T,U as a,E as b};

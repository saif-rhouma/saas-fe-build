import{j as t,S as y,v as c,B as j,C as s,T as r}from"./index-Cs0Sdxyr.js";function b({sx:d,imgUrl:h,action:n,filled:m,slotProps:e,description:i,title:x="No data",...g}){return t.jsxs(y,{flexGrow:1,alignItems:"center",justifyContent:"center",sx:{px:3,height:1,...m&&{borderRadius:2,bgcolor:a=>c(a.vars.palette.grey["500Channel"],.04),border:a=>`dashed 1px ${c(a.vars.palette.grey["500Channel"],.08)}`},...d},...g,children:[t.jsx(j,{component:"img",alt:"empty content",src:h??`${s.site.basePath}/assets/icons/empty/ic-content.svg`,sx:{width:1,maxWidth:160,...e==null?void 0:e.img}}),x&&t.jsx(r,{variant:"h6",component:"span",sx:{mt:1,textAlign:"center",...e==null?void 0:e.title,color:"text.disabled"},children:x}),i&&t.jsx(r,{variant:"caption",sx:{mt:1,textAlign:"center",color:"text.disabled",...e==null?void 0:e.description},children:i}),n&&n]})}export{b as E};

import{b as x,r as v,j as e,B as t,T as a,I as b,cF as y,v as m,C as u,f as h,M as C,m as p,e as w,d5 as A,H as M}from"./index-BUkc7Fsf.js";import{M as N,a as T,b as B,c as F}from"./map-control-CtdWh1pd.js";import{v as l}from"./fade-o6mfZnVH.js";import{A as G,a as c}from"./animate-text-u6X951xd.js";import{T as i}from"./TextField-borq0bL5.js";import"./transition-BJzcwH5q.js";import"./FormControl-Da6RRZ3T.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-eL3TaEhp.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-ClNwb4vl.js";import"./Select-BqjrNlWW.js";import"./Menu-DnxcDa3h.js";import"./InputBase-eA2S-h6o.js";import"./FormHelperText-FWMNt2lu.js";function $({contacts:r}){const n=x(),[s,d]=v.useState(null),j=n.palette.mode==="light";return e.jsx(t,{sx:{zIndex:0,borderRadius:1.5,overflow:"hidden",position:"relative",height:{xs:320,md:560}},children:e.jsxs(N,{initialViewState:{latitude:12,longitude:42,zoom:2},mapStyle:`mapbox://styles/mapbox/${j?"light":"dark"}-v10`,children:[e.jsx(T,{hideGeolocate:!0}),r.map((o,g)=>e.jsx(B,{latitude:o.latlng[0],longitude:o.latlng[1],onClick:f=>{f.originalEvent.stopPropagation(),d(o)}},`marker-${g}`)),s&&e.jsxs(F,{longitude:s.latlng[1],latitude:s.latlng[0],onClose:()=>d(null),children:[e.jsx(a,{variant:"subtitle2",sx:{mb:.5},children:"Address"}),e.jsx(a,{component:"div",variant:"caption",children:s.address}),e.jsxs(a,{component:"div",variant:"caption",sx:{mt:1,display:"flex",alignItems:"center"},children:[e.jsx(b,{icon:"solar:phone-bold",width:14,sx:{mr:.5}}),s.phoneNumber]})]})]})})}const I=[{country:"Bali",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(239) 555-0108"},{country:"London",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(319) 555-0115"},{country:"Prague",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(252) 555-0126"},{country:"Moscow",address:"508 Bridle",phoneNumber:"(307) 555-0133"}];function P(){const r=x();return e.jsx(t,{sx:{...y({color:`0deg, ${m(r.vars.palette.grey["900Channel"],.8)}, ${m(r.vars.palette.grey["900Channel"],.8)}`,imgUrl:`${u.site.basePath}/assets/images/contact/hero.webp`}),height:{md:560},py:{xs:10,md:0},overflow:"hidden",position:"relative"},children:e.jsx(h,{component:C,children:e.jsxs(t,{sx:{bottom:{md:80},position:{md:"absolute"},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(G,{component:"h1",variant:"h1",text:["Where","to find us?"],variants:l({distance:24}).inUp,sx:{color:"common.white",[`& .${c.line}[data-index="0"]`]:{[`& .${c.word}[data-index="0"]`]:{color:"primary.main"}}}}),e.jsx(t,{columnGap:{xs:2,md:5},rowGap:{xs:5,md:0},display:{xs:"grid",md:"flex"},gridTemplateColumns:{xs:"repeat(2, 1fr)"},sx:{mt:5,color:"common.white"},children:I.map(n=>e.jsxs(t,{children:[e.jsx(p.div,{variants:l({distance:24}).inUp,children:e.jsx(a,{variant:"h6",gutterBottom:!0,children:n.country})}),e.jsx(p.div,{variants:l({distance:24}).inUp,children:e.jsx(a,{variant:"body2",sx:{opacity:.8},children:n.address})})]},n.country))})]})})})}function S(){return e.jsxs("div",{children:[e.jsxs(a,{variant:"h3",children:["Feel free to contact us. ",e.jsx("br",{}),"We'll be glad to hear from you buddy."]}),e.jsxs(t,{gap:3,display:"flex",flexDirection:"column",sx:{my:5},children:[e.jsx(i,{fullWidth:!0,label:"Name"}),e.jsx(i,{fullWidth:!0,label:"Email"}),e.jsx(i,{fullWidth:!0,label:"Subject"}),e.jsx(i,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})]}),e.jsx(w,{size:"large",variant:"contained",children:"Submit"})]})}function W(){return e.jsxs(e.Fragment,{children:[e.jsx(P,{}),e.jsx(h,{sx:{py:10},children:e.jsxs(t,{gap:10,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(S,{}),e.jsx($,{contacts:A})]})})]})}const E={title:`Contact us - ${u.site.name}`};function Y(){return e.jsxs(e.Fragment,{children:[e.jsx(M,{children:e.jsxs("title",{children:[" ",E.title]})}),e.jsx(W,{})]})}export{Y as default};

import{j as e,B as r,C as c,f as h,M as A,m as a,T as i,b as g,h as b,G as l,v as d,s as y,S as m,aD as $,e as f,I as p,aE as U,aF as P,aG as R,y as S,au as T,c as M,aH as W,aI as B,ax as D,aJ as F,A as L,aK as O,aL as z,H as G}from"./index-DLJImauo.js";import{v as n}from"./fade-o6mfZnVH.js";import{A as H,a as w}from"./animate-text-DW1wmYcz.js";import{f as _}from"./format-number-Be330NDU.js";import{I as j}from"./image-BZDZbX9M.js";import{C as V}from"./carousel-progress-bar-Cb8X7yBu.js";import{u as q}from"./use-carousel-BDHsJSIl.js";import{a as E}from"./carousel-arrow-buttons-CCHNAu5j.js";import{F as K}from"./Fab-CWYIlTqJ.js";import{M as N}from"./Masonry-Dgw8vCgP.js";import{R as Y}from"./Rating-FzotwsHz.js";import"./transition-BJzcwH5q.js";import"./use-in-view-DaJd3bOS.js";import"./visuallyHidden-Dan1xhjv.js";function J(){return e.jsx(r,{sx:{height:{md:560},py:{xs:10,md:0},overflow:"hidden",position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:`url(${c.site.basePath}/assets/background/overlay.svg), url(${c.site.basePath}/assets/images/about/hero.webp)`},children:e.jsx(h,{component:A,children:e.jsxs(r,{sx:{bottom:{md:80},position:{md:"absolute"},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(H,{component:"h1",variant:"h1",text:["Who","we are?"],variants:n({distance:24}).inRight,sx:{color:"common.white",[`& .${w.line}[data-index="0"]`]:{[`& .${w.word}[data-index="0"]`]:{color:"primary.main"}}}}),e.jsx(a.div,{variants:n({distance:24}).inUp,children:e.jsxs(i,{variant:"h4",sx:{mt:3,color:"common.white",fontWeight:"fontWeightSemiBold"},children:["Let's work together and",e.jsx("br",{})," make awesome site easily"]})})]})})})}const Q=[...Array(3)].map((s,t)=>({label:["Development","Design","Marketing"][t],value:[20,40,60][t]}));function X(){const s=g();return e.jsx(h,{component:b,sx:{py:{xs:10,md:15},textAlign:{xs:"center",md:"unset"}},children:e.jsxs(l,{container:!0,columnSpacing:{md:3},alignItems:"flex-start",children:[e.jsxs(l,{container:!0,xs:12,md:6,lg:7,alignItems:"center",sx:{pr:{md:7},display:{xs:"none",md:"flex"}},children:[e.jsx(l,{xs:6,children:e.jsx(a.div,{variants:n().inUp,children:e.jsx(j,{alt:"Our office small",src:`${c.site.basePath}/assets/images/about/what-small.webp`,ratio:"1/1",sx:{borderRadius:3,boxShadow:`-40px 40px 80px ${d(s.vars.palette.grey["500Channel"],.24)}`,[y.dark]:{boxShadow:`-40px 40px 80px ${d(s.vars.palette.common.blackChannel,.24)}`}}})})}),e.jsx(l,{xs:6,children:e.jsx(a.div,{variants:n().inUp,children:e.jsx(j,{alt:"Our office large",src:`${c.site.basePath}/assets/images/about/what-large.webp`,ratio:"3/4",sx:{borderRadius:3,boxShadow:`-40px 40px 80px ${d(s.vars.palette.grey["500Channel"],.24)}`,[y.dark]:{boxShadow:`-40px 40px 80px ${d(s.vars.palette.common.blackChannel,.24)}`}}})})})]}),e.jsxs(l,{xs:12,md:6,lg:5,children:[e.jsx(a.div,{variants:n().inRight,children:e.jsx(i,{variant:"h2",sx:{mb:3},children:"What is Minimal?"})}),e.jsx(a.div,{variants:n().inRight,children:e.jsx(i,{sx:{color:"text.secondary",[y.dark]:{color:"common.white"}},children:"Our theme is the most advanced and user-friendly theme you will find on the market, we have documentation and video to help set your site really easily, pre-installed demos you can import in one click and everything from the theme options to page content can be edited from the front-end. This is the theme you are looking for."})}),e.jsx(m,{spacing:3,sx:{my:5},children:Q.map((t,o)=>e.jsxs(r,{component:a.div,variants:n().inRight,children:[e.jsxs(m,{direction:"row",alignItems:"center",sx:{mb:1},children:[e.jsx(i,{variant:"subtitle2",sx:{flexGrow:1,textAlign:"left"},children:t.label}),e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:_(t.value)})]}),e.jsx($,{color:o===0&&"primary"||o===1&&"warning"||"error",variant:"determinate",value:t.value})]},t.label))}),e.jsx(a.div,{variants:n().inRight,children:e.jsx(f,{variant:"outlined",color:"inherit",size:"large",endIcon:e.jsx(p,{icon:"eva:arrow-ios-forward-fill"}),children:"Our work"})})]})]})})}function Z(){const s=q({align:"start",slideSpacing:"24px",slidesToShow:{xs:1,sm:2,md:3,lg:4}});return e.jsxs(h,{component:b,sx:{textAlign:"center",py:{xs:10,md:15}},children:[e.jsx(a.div,{variants:n().inDown,children:e.jsx(i,{variant:"overline",sx:{color:"text.disabled"},children:"Dream team"})}),e.jsx(a.div,{variants:n().inUp,children:e.jsx(i,{variant:"h2",sx:{my:3},children:"Great team is the key"})}),e.jsx(a.div,{variants:n().inUp,children:e.jsx(i,{sx:{mx:"auto",maxWidth:640,color:"text.secondary"},children:"Minimal will provide you support if you have any problems, our support team will reply within a day and we also have detailed documentation."})}),e.jsxs(m,{sx:{position:"relative"},children:[e.jsx(E,{...s.arrows,options:s.options,slotProps:{prevBtn:{sx:{left:{xs:-8,md:-40}}},nextBtn:{sx:{right:{xs:-8,md:-40}}}}}),e.jsx(V,{carousel:s,sx:{px:.5},children:U.map(t=>e.jsx(r,{component:a.div,variants:n().in,sx:{py:{xs:8,md:10}},children:e.jsx(ee,{member:t})},t.id))})]}),e.jsx(f,{size:"large",color:"inherit",variant:"outlined",endIcon:e.jsx(p,{icon:"eva:arrow-ios-forward-fill",width:24}),sx:{mx:"auto"},children:"All members"})]})}function ee({member:s}){return e.jsxs(P,{children:[e.jsx(i,{variant:"subtitle1",sx:{mt:2.5,mb:.5},children:s.name}),e.jsx(i,{variant:"body2",sx:{mb:2.5,color:"text.secondary"},children:s.role}),e.jsx(r,{sx:{px:1},children:e.jsx(j,{alt:s.name,src:s.avatarUrl,ratio:"1/1",sx:{borderRadius:2}})}),e.jsx(m,{direction:"row",alignItems:"center",justifyContent:"center",sx:{p:2},children:R.map(t=>e.jsx(S,{children:e.jsx(T,{icon:t.name})},t.name))})]})}function se(){const s=g(),t=e.jsx(j,{src:`${c.site.basePath}/assets/images/about/vision.webp`,alt:"about-vision",ratio:{xs:"4/3",sm:"16/9"},slotProps:{overlay:{background:d(s.vars.palette.grey["900Channel"],.48)}}}),o=e.jsx(m,{direction:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center",sx:{width:1,zIndex:9,bottom:0,opacity:.48,position:"absolute",py:{xs:1.5,md:2.5}},children:["ibm","lya","spotify","netflix","hbo","amazon"].map(x=>e.jsx(r,{component:a.img,variants:n().in,alt:x,src:`${c.site.basePath}/assets/icons/brands/ic-brand-${x}.svg`,sx:{m:{xs:1.5,md:2.5},height:{xs:20,md:32}}},x))});return e.jsx(r,{sx:{pb:10,position:"relative",bgcolor:"background.neutral","&::before":{top:0,left:0,width:1,content:"''",position:"absolute",height:{xs:80,md:120},bgcolor:"background.default"}},children:e.jsxs(h,{component:b,children:[e.jsxs(r,{sx:{mb:10,borderRadius:2,display:"flex",overflow:"hidden",position:"relative",alignItems:"center",justifyContent:"center"},children:[t,o,e.jsx(K,{sx:{position:"absolute",zIndex:9},children:e.jsx(p,{icon:"solar:play-broken",width:24})})]}),e.jsx(a.div,{variants:n().inUp,children:e.jsx(i,{variant:"h3",sx:{textAlign:"center",maxWidth:800,mx:"auto"},children:"Our vision offering the best product nulla vehicula tortor scelerisque ultrices malesuada."})})]})})}function te(){const s=g(),t=M("up","md"),o=e.jsx(f,{color:"primary",endIcon:e.jsx(p,{icon:"eva:arrow-ios-forward-fill"}),children:"Read more testimonials"}),x=e.jsxs(r,{sx:{maxWidth:{md:360},textAlign:{xs:"center",md:"unset"}},children:[e.jsx(a.div,{variants:n().inUp,children:e.jsx(i,{variant:"overline",sx:{color:"common.white",opacity:.48},children:"Testimonials"})}),e.jsx(a.div,{variants:n().inUp,children:e.jsxs(i,{variant:"h2",sx:{my:3,color:"common.white"},children:["Who love ",e.jsx("br",{}),"my work"]})}),e.jsx(a.div,{variants:n().inUp,children:e.jsx(i,{sx:{color:"common.white"},children:"Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say."})}),!t&&e.jsx(r,{component:a.div,variants:n().inUp,sx:{mt:3,display:"flex",justifyContent:"center"},children:o})]}),u=e.jsx(r,{sx:{...W,py:{md:10},height:{md:1},overflowY:{xs:"unset",md:"auto"}},children:e.jsx(N,{spacing:3,columns:{xs:1,md:2},sx:{ml:0},children:B.map(v=>e.jsx(a.div,{variants:n().inUp,children:e.jsx(ne,{testimonial:v})},v.name))})});return e.jsx(r,{sx:{...D({color:`0deg, ${d(s.vars.palette.grey["900Channel"],.9)}, ${d(s.vars.palette.grey["900Channel"],.9)}`,imgUrl:`${c.site.basePath}/assets/images/about/testimonials.webp`}),overflow:"hidden",height:{md:840},py:{xs:10,md:0}},children:e.jsxs(h,{component:b,sx:{position:"relative",height:1},children:[e.jsxs(l,{container:!0,spacing:3,alignItems:"center",justifyContent:{xs:"center",md:"space-between"},sx:{height:1},children:[e.jsx(l,{xs:10,md:4,children:x}),e.jsx(l,{xs:12,md:7,lg:6,alignItems:"center",sx:{height:1},children:u})]}),t&&e.jsx(r,{component:a.div,variants:n().inUp,sx:{bottom:60,position:"absolute"},children:o})]})})}function ne({testimonial:s,sx:t,...o}){const x=g(),{name:u,ratingNumber:v,postedDate:k,content:C,avatarUrl:I}=s;return e.jsxs(m,{spacing:3,sx:{...F({color:d(x.vars.palette.common.whiteChannel,.08)}),p:3,borderRadius:2,color:"common.white",...t},...o,children:[e.jsx(p,{icon:"mingcute:quote-left-fill",width:40,sx:{opacity:.48}}),e.jsx(i,{variant:"body2",children:C}),e.jsx(Y,{value:v,readOnly:!0,size:"small"}),e.jsxs(m,{direction:"row",children:[e.jsx(L,{alt:u,src:I,sx:{mr:2}}),e.jsx(O,{primary:u,secondary:z(k),primaryTypographyProps:{typography:"subtitle2",mb:.5},secondaryTypographyProps:{color:"inherit",typography:"caption",sx:{opacity:.64}}})]})]})}function ae(){return e.jsxs(e.Fragment,{children:[e.jsx(J,{}),e.jsx(X,{}),e.jsx(se,{}),e.jsx(Z,{}),e.jsx(te,{})]})}const ie={title:`About us - ${c.site.name}`};function ye(){return e.jsxs(e.Fragment,{children:[e.jsx(G,{children:e.jsxs("title",{children:[" ",ie.title]})}),e.jsx(ae,{})]})}export{ye as default};

import{j as e,S as t,A as oe,aI as ie,aJ as ae,I as p,T as d,B as h,aR as z,o as ce,dW as le,aB as de,e as I,D as C,l as xe,r as P,p as pe,L as b,bR as ue,ds as W}from"./index-MU8Aef1d.js";import{c as S,b as F}from"./format-number-B_68Y8_p.js";import{R}from"./Rating-RcXdXktn.js";import{P as he,p as me}from"./Pagination-D337G_Kb.js";import{P as je}from"./product-review-new-form-9cDgRMn2.js";import{u as ye,F as be,a as ge,C as fe}from"./form-provider-ButI2dhd.js";import{I as ve}from"./image-BL6GZRKO.js";import"./editor-DkQPNGFJ.js";import{a as we}from"./color-preview-B5SG5GPo.js";import{I as Ie}from"./incrementer-button-BrxkOs4x.js";import{f as Ce}from"./FormHelperText-CRdMe4Vi.js";import{u as Pe,L as Se}from"./use-light-box-Bh4vTks7.js";import{C as Re,a as Te,b as ke}from"./carousel-progress-bar-BQohD8SB.js";import{u as qe}from"./use-carousel-CHPs3to_.js";import{b as Be}from"./carousel-arrow-buttons-h8WjztGU.js";import{M as De}from"./markdown-B-WzjPeF.js";function Le({review:s}){var n;const r=e.jsxs(t,{spacing:2,alignItems:"center",direction:{xs:"row",md:"column"},sx:{width:{md:240},textAlign:{md:"center"}},children:[e.jsx(oe,{src:s.avatarUrl,sx:{width:{xs:48,md:64},height:{xs:48,md:64}}}),e.jsx(ie,{primary:s.name,secondary:ae(s.postedAt),primaryTypographyProps:{noWrap:!0,typography:"subtitle2",mb:.5},secondaryTypographyProps:{noWrap:!0,typography:"caption",component:"span"}})]}),a=e.jsxs(t,{spacing:1,flexGrow:1,children:[e.jsx(R,{size:"small",value:s.rating,precision:.1,readOnly:!0}),s.isPurchased&&e.jsxs(t,{direction:"row",alignItems:"center",sx:{color:"success.main",typography:"caption"},children:[e.jsx(p,{icon:"ic:round-verified",width:16,sx:{mr:.5}}),"Verified purchase"]}),e.jsx(d,{variant:"body2",children:s.comment}),!!((n=s.attachments)!=null&&n.length)&&e.jsx(t,{direction:"row",flexWrap:"wrap",spacing:1,sx:{pt:1},children:s.attachments.map(c=>e.jsx(h,{component:"img",alt:c,src:c,sx:{width:64,height:64,borderRadius:1.5}},c))}),e.jsxs(t,{direction:"row",spacing:2,sx:{pt:1.5},children:[e.jsxs(z,{disableRipple:!0,sx:{gap:.5,typography:"caption"},children:[e.jsx(p,{icon:"solar:like-outline",width:16}),"123"]}),e.jsxs(z,{disableRipple:!0,sx:{gap:.5,typography:"caption"},children:[e.jsx(p,{icon:"solar:dislike-outline",width:16}),"34"]})]})]});return e.jsxs(t,{spacing:2,direction:{xs:"column",md:"row"},sx:{mt:5,px:{xs:2.5,md:0}},children:[r,a]})}function ze({reviews:s}){return e.jsxs(e.Fragment,{children:[s.map(r=>e.jsx(Le,{review:r},r.id)),e.jsx(he,{count:10,sx:{mx:"auto",[`& .${me.ul}`]:{my:5,mx:"auto",justifyContent:"center"}}})]})}function Ye({totalRatings:s,totalReviews:r,ratings:a=[],reviews:n=[]}){const c=ce(),o=le(a,l=>l.starCount),u=e.jsxs(t,{spacing:1,alignItems:"center",justifyContent:"center",children:[e.jsx(d,{variant:"subtitle2",children:"Average rating"}),e.jsxs(d,{variant:"h2",children:[s,"/5"]}),e.jsx(R,{readOnly:!0,value:s,precision:.1}),e.jsxs(d,{variant:"caption",sx:{color:"text.secondary"},children:["(",S(r)," reviews)"]})]}),m=e.jsx(t,{spacing:1.5,sx:{py:5,px:{xs:3,md:5},borderLeft:l=>({md:`dashed 1px ${l.vars.palette.divider}`}),borderRight:l=>({md:`dashed 1px ${l.vars.palette.divider}`})},children:a.slice(0).reverse().map(l=>e.jsxs(t,{direction:"row",alignItems:"center",children:[e.jsx(d,{variant:"subtitle2",component:"span",sx:{width:42},children:l.name}),e.jsx(de,{color:"inherit",variant:"determinate",value:l.starCount/o*100,sx:{mx:2,flexGrow:1}}),e.jsx(d,{variant:"body2",component:"span",sx:{minWidth:48,color:"text.secondary"},children:S(l.reviewCount)})]},l.name))}),y=e.jsx(t,{alignItems:"center",justifyContent:"center",children:e.jsx(I,{size:"large",variant:"soft",color:"inherit",onClick:c.onTrue,startIcon:e.jsx(p,{icon:"solar:pen-bold"}),children:"Write your review"})});return e.jsxs(e.Fragment,{children:[e.jsxs(h,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{py:{xs:5,md:0}},children:[u,m,y]}),e.jsx(C,{sx:{borderStyle:"dashed"}}),e.jsx(ze,{reviews:n}),e.jsx(je,{open:c.value,onClose:c.onFalse})]})}function Ze({items:s,product:r,onAddCart:a,onGotoStep:n,disableActions:c,...o}){const u=xe(),{id:m,name:y,sizes:l,price:T,coverUrl:O,colors:k,newLabel:g,available:j,priceSale:q,saleLabel:f,totalRatings:M,totalReviews:$,inventoryType:v,subDescription:E}=r,A=!!(s!=null&&s.length)&&s.map(i=>i.id).includes(m),N=!!(s!=null&&s.length)&&s.filter(i=>i.id===m).map(i=>i.quantity)[0]>=j,B={id:m,name:y,coverUrl:O,available:j,price:T,colors:k[0],size:l[4],quantity:j<1?0:1},D=ye({defaultValues:B}),{reset:Q,watch:V,control:G,setValue:L,handleSubmit:U}=D,x=V();P.useEffect(()=>{r&&Q(B)},[r]);const H=U(async i=>{try{A||a==null||a({...i,colors:[x.colors],subtotal:i.price*i.quantity}),n==null||n(0),u.push(pe.product.checkout)}catch(w){console.error(w)}}),J=P.useCallback(()=>{try{a==null||a({...x,colors:[x.colors],subtotal:x.price*x.quantity})}catch(i){console.error(i)}},[a,x]),K=e.jsxs(h,{sx:{typography:"h5"},children:[q&&e.jsx(h,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through",mr:.5},children:F(q)}),F(T)]}),X=e.jsxs(t,{direction:"row",spacing:3,justifyContent:"center",children:[e.jsxs(b,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(p,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Compare"]}),e.jsxs(b,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(p,{icon:"solar:heart-bold",width:16,sx:{mr:1}}),"Favorite"]}),e.jsxs(b,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(p,{icon:"solar:share-bold",width:16,sx:{mr:1}}),"Share"]})]}),Y=e.jsxs(t,{direction:"row",children:[e.jsx(d,{variant:"subtitle2",sx:{flexGrow:1},children:"Color"}),e.jsx(fe,{name:"colors",control:G,render:({field:i})=>e.jsx(we,{colors:k,selected:i.value,onSelectColor:w=>i.onChange(w),limit:4})})]}),Z=e.jsxs(t,{direction:"row",children:[e.jsx(d,{variant:"subtitle2",sx:{flexGrow:1},children:"Size"}),e.jsx(be.Select,{name:"size",size:"small",helperText:e.jsx(b,{underline:"always",color:"textPrimary",children:"Size chart"}),sx:{maxWidth:88,[`& .${Ce.root}`]:{mx:0,mt:1,textAlign:"right"}},children:l.map(i=>e.jsx(ue,{value:i,children:i},i))})]}),_=e.jsxs(t,{direction:"row",children:[e.jsx(d,{variant:"subtitle2",sx:{flexGrow:1},children:"Quantity"}),e.jsxs(t,{spacing:1,children:[e.jsx(Ie,{name:"quantity",quantity:x.quantity,disabledDecrease:x.quantity<=1,disabledIncrease:x.quantity>=j,onIncrease:()=>L("quantity",x.quantity+1),onDecrease:()=>L("quantity",x.quantity-1)}),e.jsxs(d,{variant:"caption",component:"div",sx:{textAlign:"right"},children:["Available: ",j]})]})]}),ee=e.jsxs(t,{direction:"row",spacing:2,children:[e.jsx(I,{fullWidth:!0,disabled:N||c,size:"large",color:"warning",variant:"contained",startIcon:e.jsx(p,{icon:"solar:cart-plus-bold",width:24}),onClick:J,sx:{whiteSpace:"nowrap"},children:"Add to cart"}),e.jsx(I,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:c,children:"Buy now"})]}),se=e.jsx(d,{variant:"body2",sx:{color:"text.secondary"},children:E}),re=e.jsxs(t,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[e.jsx(R,{size:"small",value:M,precision:.1,readOnly:!0,sx:{mr:1}}),`(${S($)} reviews)`]}),te=(g.enabled||f.enabled)&&e.jsxs(t,{direction:"row",alignItems:"center",spacing:1,children:[g.enabled&&e.jsx(W,{color:"info",children:g.content}),f.enabled&&e.jsx(W,{color:"error",children:f.content})]}),ne=e.jsx(h,{component:"span",sx:{typography:"overline",color:v==="out of stock"&&"error.main"||v==="low stock"&&"warning.main"||"success.main"},children:v});return e.jsx(ge,{methods:D,onSubmit:H,children:e.jsxs(t,{spacing:3,sx:{pt:3},...o,children:[e.jsxs(t,{spacing:2,alignItems:"flex-start",children:[te,ne,e.jsx(d,{variant:"h5",children:y}),re,K,se]}),e.jsx(C,{sx:{borderStyle:"dashed"}}),Y,Z,_,e.jsx(C,{sx:{borderStyle:"dashed"}}),ee,X]})})}function _e({images:s}){var c;const r=qe({thumbs:{slidesToShow:"auto"}}),a=(s==null?void 0:s.map(o=>({src:o})))||[],n=Pe(a);return P.useEffect(()=>{var o;n.open&&((o=r.mainApi)==null||o.scrollTo(n.selected,!0))},[r.mainApi,n.open,n.selected]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs(h,{sx:{mb:2.5,position:"relative"},children:[e.jsx(Be,{...r.arrows,options:r.options,totalSlides:r.dots.dotCount,selectedIndex:r.dots.selectedIndex+1,sx:{right:16,bottom:16,position:"absolute"}}),e.jsx(Re,{carousel:r,sx:{borderRadius:2},children:a.map(o=>e.jsx(ve,{alt:o.src,src:o.src,ratio:"1/1",onClick:()=>n.onOpen(o.src),sx:{cursor:"zoom-in",minWidth:320}},o.src))})]}),e.jsx(Te,{ref:r.thumbs.thumbsRef,options:(c=r.options)==null?void 0:c.thumbs,slotProps:{disableMask:!0},sx:{width:360},children:a.map((o,u)=>e.jsx(ke,{index:u,src:o.src,selected:u===r.thumbs.selectedIndex,onClick:()=>r.thumbs.onClickThumb(u)},o.src))})]}),e.jsx(Se,{index:n.selected,slides:a,open:n.open,close:n.onClose,onGetCurrentIndex:o=>n.setSelected(o)})]})}function es({description:s}){return e.jsx(De,{children:s,sx:{p:3,"& p, li, ol":{typography:"body2"},"& ol":{p:0,display:{md:"flex"},listStyleType:"none","& li":{"&:first-of-type":{minWidth:240,mb:{xs:.5,md:0}}}}}})}export{_e as P,Ze as a,es as b,Ye as c};

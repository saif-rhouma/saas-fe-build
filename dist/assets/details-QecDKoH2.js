import{j as e,S as o,A as le,aG as ce,aH as de,I as m,T as c,B as p,aP as A,i as xe,dz as me,az as pe,e as g,am as P,g as he,r as S,p as R,L as b,b8 as ue,d7 as G,f as I,R as je,ay as k,aB as ye,v as be,H as ge,C as fe}from"./index-1idvz3yo.js";import{u as ve}from"./use-params-DOYLYWzc.js";import{b as we,C as Ce,c as Ie}from"./cart-icon-CBTMtnif.js";import{P as ke}from"./product-review-new-form-CjQiCB9i.js";import{I as Pe}from"./image-DdCP0E-b.js";import{a as Se}from"./color-preview-6BORAZPW.js";import{u as Re}from"./use-tabs-QiGr1gZ-.js";import{E as Te}from"./empty-content-BU4LmDZm.js";import{C as Be}from"./custom-breadcrumbs-Cd5BgAXC.js";import{u as De}from"./use-checkout-context-eSvT-vof.js";import{c as T,b as M}from"./format-number-CBFKJ_Xm.js";import{R as B}from"./Rating-DX-PCdge.js";import{P as Le,p as qe}from"./Pagination-iywodags.js";import{u as ze,F as Fe,a as We,C as Ae}from"./form-provider-CRkwJWgI.js";import"./editor-D3n3GjcT.js";import{I as Ge}from"./incrementer-button-DFdQN2rq.js";import{f as Me}from"./FormHelperText-D4hzGFD8.js";import{u as $e,L as Ee}from"./use-light-box-D00dofH_.js";import{C as Oe,a as He,b as Ne}from"./carousel-progress-bar-BqHm23vL.js";import{u as Ve}from"./use-carousel-up2Dx5Dj.js";import{a as Qe}from"./carousel-arrow-buttons-pPvH5fSZ.js";import{M as Ue}from"./markdown-CaY_GVTD.js";import{T as Ye,a as Je}from"./Tabs-BXODOCZp.js";import"./index-PlqHHuj4.js";import"./Skeleton-B8XqxX6Q.js";import"./useMutation-BdU4esUD.js";import"./utils-km2FGkQ4.js";import"./confirm-dialog-Bh7v_d6V.js";import"./DialogContent-DD2zYDfk.js";import"./DialogTitle-ComDvH0u.js";import"./product-Item-button-C7qGCMmZ.js";import"./upload-avatar-kKzdYGMV.js";import"./index-BGw46kZf.js";import"./LoadingButton-D7yfFEAj.js";import"./CircularProgress-CaSQHkro.js";import"./AccordionSummary-wVBruncF.js";import"./FormControlLabel-BSF48Dfl.js";import"./formControlState-Dq1zat_P.js";import"./visuallyHidden-Dan1xhjv.js";import"./LastPage-mCnlHbyp.js";import"./TextField-Deyfex1l.js";import"./FormControl-e9sHLsS9.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-B7kGj3og.js";import"./FormLabel-DnpLWzxD.js";import"./Select-BzV6E8A7.js";import"./Menu-Bh2_2QIQ.js";import"./InputBase-bYfGaHWI.js";import"./Slider-Co86ffvq.js";import"./RadioGroup-B8Dgslmt.js";import"./FormGroup-D7-JGyTF.js";import"./utils-WnNbXvdL.js";import"./countries-DSLisFCy.js";import"./InputAdornment-lyNMHj9g.js";import"./Autocomplete-D-gYEvyh.js";import"./Chip-BvDqjkJu.js";import"./country-select-6TD4L1qU.js";import"./Checkbox-BE-qIa3l.js";import"./DatePicker-CEGP_gWC.js";import"./ListItem-pRP8lI0N.js";import"./MobileDateTimePicker-CPvIs9e9.js";import"./index-CRahxoL1.js";import"./html-to-markdown-CVqVogjg.js";import"./KeyboardArrowRight-OJVnc1rR.js";function Ke({review:s}){var i;const t=e.jsxs(o,{spacing:2,alignItems:"center",direction:{xs:"row",md:"column"},sx:{width:{md:240},textAlign:{md:"center"}},children:[e.jsx(le,{src:s.avatarUrl,sx:{width:{xs:48,md:64},height:{xs:48,md:64}}}),e.jsx(ce,{primary:s.name,secondary:de(s.postedAt),primaryTypographyProps:{noWrap:!0,typography:"subtitle2",mb:.5},secondaryTypographyProps:{noWrap:!0,typography:"caption",component:"span"}})]}),n=e.jsxs(o,{spacing:1,flexGrow:1,children:[e.jsx(B,{size:"small",value:s.rating,precision:.1,readOnly:!0}),s.isPurchased&&e.jsxs(o,{direction:"row",alignItems:"center",sx:{color:"success.main",typography:"caption"},children:[e.jsx(m,{icon:"ic:round-verified",width:16,sx:{mr:.5}}),"Verified purchase"]}),e.jsx(c,{variant:"body2",children:s.comment}),!!((i=s.attachments)!=null&&i.length)&&e.jsx(o,{direction:"row",flexWrap:"wrap",spacing:1,sx:{pt:1},children:s.attachments.map(a=>e.jsx(p,{component:"img",alt:a,src:a,sx:{width:64,height:64,borderRadius:1.5}},a))}),e.jsxs(o,{direction:"row",spacing:2,sx:{pt:1.5},children:[e.jsxs(A,{disableRipple:!0,sx:{gap:.5,typography:"caption"},children:[e.jsx(m,{icon:"solar:like-outline",width:16}),"123"]}),e.jsxs(A,{disableRipple:!0,sx:{gap:.5,typography:"caption"},children:[e.jsx(m,{icon:"solar:dislike-outline",width:16}),"34"]})]})]});return e.jsxs(o,{spacing:2,direction:{xs:"column",md:"row"},sx:{mt:5,px:{xs:2.5,md:0}},children:[t,n]})}function Xe({reviews:s}){return e.jsxs(e.Fragment,{children:[s.map(t=>e.jsx(Ke,{review:t},t.id)),e.jsx(Le,{count:10,sx:{mx:"auto",[`& .${qe.ul}`]:{my:5,mx:"auto",justifyContent:"center"}}})]})}function Ze({totalRatings:s,totalReviews:t,ratings:n=[],reviews:i=[]}){const a=xe(),r=me(n,d=>d.starCount),h=e.jsxs(o,{spacing:1,alignItems:"center",justifyContent:"center",children:[e.jsx(c,{variant:"subtitle2",children:"Average rating"}),e.jsxs(c,{variant:"h2",children:[s,"/5"]}),e.jsx(B,{readOnly:!0,value:s,precision:.1}),e.jsxs(c,{variant:"caption",sx:{color:"text.secondary"},children:["(",T(t)," reviews)"]})]}),u=e.jsx(o,{spacing:1.5,sx:{py:5,px:{xs:3,md:5},borderLeft:d=>({md:`dashed 1px ${d.vars.palette.divider}`}),borderRight:d=>({md:`dashed 1px ${d.vars.palette.divider}`})},children:n.slice(0).reverse().map(d=>e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(c,{variant:"subtitle2",component:"span",sx:{width:42},children:d.name}),e.jsx(pe,{color:"inherit",variant:"determinate",value:d.starCount/r*100,sx:{mx:2,flexGrow:1}}),e.jsx(c,{variant:"body2",component:"span",sx:{minWidth:48,color:"text.secondary"},children:T(d.reviewCount)})]},d.name))}),y=e.jsx(o,{alignItems:"center",justifyContent:"center",children:e.jsx(g,{size:"large",variant:"soft",color:"inherit",onClick:a.onTrue,startIcon:e.jsx(m,{icon:"solar:pen-bold"}),children:"Write your review"})});return e.jsxs(e.Fragment,{children:[e.jsxs(p,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{py:{xs:5,md:0}},children:[h,u,y]}),e.jsx(P,{sx:{borderStyle:"dashed"}}),e.jsx(Xe,{reviews:i}),e.jsx(ke,{open:a.value,onClose:a.onFalse})]})}function _e({items:s,product:t,onAddCart:n,onGotoStep:i,disableActions:a,...r}){const h=he(),{id:u,name:y,sizes:d,price:D,coverUrl:$,colors:L,newLabel:f,available:j,priceSale:q,saleLabel:v,totalRatings:E,totalReviews:O,inventoryType:w,subDescription:H}=t,N=!!(s!=null&&s.length)&&s.map(l=>l.id).includes(u),V=!!(s!=null&&s.length)&&s.filter(l=>l.id===u).map(l=>l.quantity)[0]>=j,z={id:u,name:y,coverUrl:$,available:j,price:D,colors:L[0],size:d[4],quantity:j<1?0:1},F=ze({defaultValues:z}),{reset:Q,watch:U,control:Y,setValue:W,handleSubmit:J}=F,x=U();S.useEffect(()=>{t&&Q(z)},[t]);const K=J(async l=>{try{N||n==null||n({...l,colors:[x.colors],subtotal:l.price*l.quantity}),i==null||i(0),h.push(R.product.checkout)}catch(C){console.error(C)}}),X=S.useCallback(()=>{try{n==null||n({...x,colors:[x.colors],subtotal:x.price*x.quantity})}catch(l){console.error(l)}},[n,x]),Z=e.jsxs(p,{sx:{typography:"h5"},children:[q&&e.jsx(p,{component:"span",sx:{color:"text.disabled",textDecoration:"line-through",mr:.5},children:M(q)}),M(D)]}),_=e.jsxs(o,{direction:"row",spacing:3,justifyContent:"center",children:[e.jsxs(b,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(m,{icon:"mingcute:add-line",width:16,sx:{mr:1}}),"Compare"]}),e.jsxs(b,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(m,{icon:"solar:heart-bold",width:16,sx:{mr:1}}),"Favorite"]}),e.jsxs(b,{variant:"subtitle2",sx:{color:"text.secondary",display:"inline-flex",alignItems:"center"},children:[e.jsx(m,{icon:"solar:share-bold",width:16,sx:{mr:1}}),"Share"]})]}),ee=e.jsxs(o,{direction:"row",children:[e.jsx(c,{variant:"subtitle2",sx:{flexGrow:1},children:"Color"}),e.jsx(Ae,{name:"colors",control:Y,render:({field:l})=>e.jsx(Se,{colors:L,selected:l.value,onSelectColor:C=>l.onChange(C),limit:4})})]}),se=e.jsxs(o,{direction:"row",children:[e.jsx(c,{variant:"subtitle2",sx:{flexGrow:1},children:"Size"}),e.jsx(Fe.Select,{name:"size",size:"small",helperText:e.jsx(b,{underline:"always",color:"textPrimary",children:"Size chart"}),sx:{maxWidth:88,[`& .${Me.root}`]:{mx:0,mt:1,textAlign:"right"}},children:d.map(l=>e.jsx(ue,{value:l,children:l},l))})]}),re=e.jsxs(o,{direction:"row",children:[e.jsx(c,{variant:"subtitle2",sx:{flexGrow:1},children:"Quantity"}),e.jsxs(o,{spacing:1,children:[e.jsx(Ge,{name:"quantity",quantity:x.quantity,disabledDecrease:x.quantity<=1,disabledIncrease:x.quantity>=j,onIncrease:()=>W("quantity",x.quantity+1),onDecrease:()=>W("quantity",x.quantity-1)}),e.jsxs(c,{variant:"caption",component:"div",sx:{textAlign:"right"},children:["Available: ",j]})]})]}),te=e.jsxs(o,{direction:"row",spacing:2,children:[e.jsx(g,{fullWidth:!0,disabled:V||a,size:"large",color:"warning",variant:"contained",startIcon:e.jsx(m,{icon:"solar:cart-plus-bold",width:24}),onClick:X,sx:{whiteSpace:"nowrap"},children:"Add to cart"}),e.jsx(g,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:a,children:"Buy now"})]}),ie=e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:H}),ne=e.jsxs(o,{direction:"row",alignItems:"center",sx:{color:"text.disabled",typography:"body2"},children:[e.jsx(B,{size:"small",value:E,precision:.1,readOnly:!0,sx:{mr:1}}),`(${T(O)} reviews)`]}),oe=(f.enabled||v.enabled)&&e.jsxs(o,{direction:"row",alignItems:"center",spacing:1,children:[f.enabled&&e.jsx(G,{color:"info",children:f.content}),v.enabled&&e.jsx(G,{color:"error",children:v.content})]}),ae=e.jsx(p,{component:"span",sx:{typography:"overline",color:w==="out of stock"&&"error.main"||w==="low stock"&&"warning.main"||"success.main"},children:w});return e.jsx(We,{methods:F,onSubmit:K,children:e.jsxs(o,{spacing:3,sx:{pt:3},...r,children:[e.jsxs(o,{spacing:2,alignItems:"flex-start",children:[oe,ae,e.jsx(c,{variant:"h5",children:y}),ne,Z,ie]}),e.jsx(P,{sx:{borderStyle:"dashed"}}),ee,se,re,e.jsx(P,{sx:{borderStyle:"dashed"}}),te,_]})})}function es({images:s}){var a;const t=Ve({thumbs:{slidesToShow:"auto"}}),n=(s==null?void 0:s.map(r=>({src:r})))||[],i=$e(n);return S.useEffect(()=>{var r;i.open&&((r=t.mainApi)==null||r.scrollTo(i.selected,!0))},[t.mainApi,i.open,i.selected]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs(p,{sx:{mb:2.5,position:"relative"},children:[e.jsx(Qe,{...t.arrows,options:t.options,totalSlides:t.dots.dotCount,selectedIndex:t.dots.selectedIndex+1,sx:{right:16,bottom:16,position:"absolute"}}),e.jsx(Oe,{carousel:t,sx:{borderRadius:2},children:n.map(r=>e.jsx(Pe,{alt:r.src,src:r.src,ratio:"1/1",onClick:()=>i.onOpen(r.src),sx:{cursor:"zoom-in",minWidth:320}},r.src))})]}),e.jsx(He,{ref:t.thumbs.thumbsRef,options:(a=t.options)==null?void 0:a.thumbs,slotProps:{disableMask:!0},sx:{width:360},children:n.map((r,h)=>e.jsx(Ne,{index:h,src:r.src,selected:h===t.thumbs.selectedIndex,onClick:()=>t.thumbs.onClickThumb(h)},r.src))})]}),e.jsx(Ee,{index:i.selected,slides:n,open:i.open,close:i.onClose,onGetCurrentIndex:r=>i.setSelected(r)})]})}function ss({description:s}){return e.jsx(Ue,{children:s,sx:{p:3,"& p, li, ol":{typography:"body2"},"& ol":{p:0,display:{md:"flex"},listStyleType:"none","& li":{"&:first-of-type":{minWidth:240,mb:{xs:.5,md:0}}}}}})}const rs=[{title:"100% original",description:"Chocolate bar candy canes ice cream toffee cookie halvah.",icon:"solar:verified-check-bold"},{title:"10 days replacement",description:"Marshmallow biscuit donut dragée fruitcake wafer.",icon:"solar:clock-circle-bold"},{title:"Year warranty",description:"Cotton candy gingerbread cake I love sugar sweet.",icon:"solar:shield-check-bold"}];function ts({product:s,error:t,loading:n}){const i=De(),a=Re("description");return n?e.jsx(I,{sx:{mt:5,mb:10},children:e.jsx(we,{})}):t?e.jsx(I,{sx:{mt:5,mb:10},children:e.jsx(Te,{filled:!0,title:"Product not found!",action:e.jsx(g,{component:je,href:R.product.root,startIcon:e.jsx(m,{width:16,icon:"eva:arrow-ios-back-fill"}),sx:{mt:3},children:"Back to list"}),sx:{py:10}})}):e.jsxs(I,{sx:{mt:5,mb:10},children:[e.jsx(Ce,{totalItems:i.totalItems}),e.jsx(Be,{links:[{name:"Home",href:"/"},{name:"Shop",href:R.product.root},{name:s==null?void 0:s.name}],sx:{mb:5}}),e.jsxs(k,{container:!0,spacing:{xs:3,md:5,lg:8},children:[e.jsx(k,{xs:12,md:6,lg:7,children:e.jsx(es,{images:s==null?void 0:s.images})}),e.jsx(k,{xs:12,md:6,lg:5,children:s&&e.jsx(_e,{product:s,items:i.items,onAddCart:i.onAddToCart,onGotoStep:i.onGotoStep,disableActions:!(s!=null&&s.available)})})]}),e.jsx(p,{gap:5,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},sx:{my:10},children:rs.map(r=>e.jsxs(p,{sx:{textAlign:"center",px:5},children:[e.jsx(m,{icon:r.icon,width:32,sx:{color:"primary.main"}}),e.jsx(c,{variant:"subtitle1",sx:{mb:1,mt:2},children:r.title}),e.jsx(c,{variant:"body2",sx:{color:"text.secondary"},children:r.description})]},r.title))}),e.jsxs(ye,{children:[e.jsx(Ye,{value:a.value,onChange:a.onChange,sx:{px:3,boxShadow:r=>`inset 0 -2px 0 0 ${be(r.vars.palette.grey["500Channel"],.08)}`},children:[{value:"description",label:"Description"},{value:"reviews",label:`Reviews (${s==null?void 0:s.reviews.length})`}].map(r=>e.jsx(Je,{value:r.value,label:r.label},r.value))}),a.value==="description"&&e.jsx(ss,{description:s==null?void 0:s.description}),a.value==="reviews"&&e.jsx(Ze,{ratings:s==null?void 0:s.ratings,reviews:s==null?void 0:s.reviews,totalRatings:s==null?void 0:s.totalRatings,totalReviews:s==null?void 0:s.totalReviews})]})]})}const is={title:`Product details - ${fe.site.name}`};function ur(){const{id:s=""}=ve(),{product:t,productLoading:n,productError:i}=Ie(s);return e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:e.jsxs("title",{children:[" ",is.title]})}),e.jsx(ts,{product:t,loading:n,error:i})]})}export{ur as default};
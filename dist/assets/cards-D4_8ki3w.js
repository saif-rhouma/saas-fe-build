import{j as t,aH as x,B as m,eH as h,A as g,v as j,aM as u,S as y,aI as b,y as f,aw as v,D as C,T as e,r as p,ed as I,p as i,e as w,R as P,I as U,eI as T,H as F,C as S}from"./index-BPQkDe0s.js";import"./user-quick-edit-form-BuY8kJno.js";import{C as k}from"./custom-breadcrumbs-BIW9VTmo.js";import{c as n}from"./format-number-9dwzKsgZ.js";import{I as A}from"./image-C7AA7Kgf.js";import{P as B}from"./Pagination-daZsO5gk.js";import"./form-provider-Csxs3POq.js";import"./TextField-Bi7NVwCq.js";import"./FormControl-bKQXC1dH.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-AqbAhnGZ.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-8bz6Jicd.js";import"./Select-9Xhy8-ut.js";import"./Menu-DGoJy9BJ.js";import"./InputBase-CPrPQ_RD.js";import"./FormHelperText-CPxcDFA-.js";import"./index-DGJW8Nhg.js";import"./countries-DSLisFCy.js";import"./InputAdornment-Ck59aR0s.js";import"./fields-uLHuWF6F.js";import"./Rating-CpW9817X.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-JwZorNGg.js";import"./index-DhCxhDCC.js";import"./Slider-Cn-68b2h.js";import"./RadioGroup-DbSLazbi.js";import"./FormGroup-CC5xoKev.js";import"./FormControlLabel-CkOEQNeq.js";import"./Autocomplete-lg4xc3Dx.js";import"./Chip-ALPNHt2t.js";import"./country-select-Bo5KTiYN.js";import"./Checkbox-DYdkvSfk.js";import"./upload-avatar-CesV9ZGt.js";import"./DatePicker-BGXln9IR.js";import"./DialogContent-p3i0msBI.js";import"./ListItem-BApUg4RM.js";import"./MobileDateTimePicker-dEpBlYqw.js";import"./schema-helper-CODNJXI3.js";import"./LoadingButton-ByZAe6Vn.js";import"./CircularProgress-BW2J7VJ8.js";import"./DialogTitle-DTSEDZ4J.js";import"./LastPage-nNWQQMs1.js";function D({user:r}){return t.jsxs(x,{sx:{textAlign:"center"},children:[t.jsxs(m,{sx:{position:"relative"},children:[t.jsx(h,{sx:{left:0,right:0,zIndex:10,mx:"auto",bottom:-26,position:"absolute"}}),t.jsx(g,{alt:r.name,src:r.avatarUrl,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),t.jsx(A,{src:r.coverUrl,alt:r.coverUrl,ratio:"16/9",slotProps:{overlay:{background:o=>j(o.vars.palette.grey["900Channel"],.48)}}})]}),t.jsx(u,{sx:{mt:7,mb:1},primary:r.name,secondary:r.role,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{component:"span",mt:.5}}),t.jsx(y,{direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:2.5},children:b.map(o=>t.jsx(f,{children:t.jsx(v,{icon:o.name})},o.name))}),t.jsx(C,{sx:{borderStyle:"dashed"}}),t.jsxs(m,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{py:3,typography:"subtitle1"},children:[t.jsxs("div",{children:[t.jsx(e,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Follower"}),n(r.totalFollowers)]}),t.jsxs("div",{children:[t.jsx(e,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Following"}),n(r.totalFollowing)]}),t.jsxs("div",{children:[t.jsx(e,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Total post"}),n(r.totalPosts)]})]})]})}function H({users:r}){const[o,l]=p.useState(1),a=12,d=p.useCallback((s,c)=>{l(c)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(m,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:r.slice((o-1)*a,(o-1)*a+a).map(s=>t.jsx(D,{user:s},s.id))}),t.jsx(B,{page:o,shape:"circular",count:Math.ceil(r.length/a),onChange:d,sx:{mt:{xs:5,md:8},mx:"auto"}})]})}function L(){return t.jsxs(I,{children:[t.jsx(k,{heading:"User cards",links:[{name:"Dashboard",href:i.dashboard.root},{name:"User",href:i.dashboard.user.root},{name:"Cards"}],action:t.jsx(w,{component:P,href:i.dashboard.user.new,variant:"contained",startIcon:t.jsx(U,{icon:"mingcute:add-line"}),children:"New user"}),sx:{mb:{xs:3,md:5}}}),t.jsx(H,{users:T})]})}const N={title:`User cards | Dashboard - ${S.site.name}`};function Ut(){return t.jsxs(t.Fragment,{children:[t.jsx(F,{children:t.jsxs("title",{children:[" ",N.title]})}),t.jsx(L,{})]})}export{Ut as default};

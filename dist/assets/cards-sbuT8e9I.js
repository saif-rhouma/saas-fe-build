import{j as t,aH as x,B as m,eH as h,A as g,v as j,aM as u,S as y,aI as b,y as f,aw as v,D as C,T as e,r as p,ed as I,p as i,e as w,R as P,I as U,eI as T,H as F,C as S}from"./index-BjIn7_qX.js";import"./user-quick-edit-form-CYs9itGT.js";import{C as k}from"./custom-breadcrumbs-BvfCbkJS.js";import{c as n}from"./format-number-CVePc8Zq.js";import{I as A}from"./image-Cp18p2kF.js";import{P as B}from"./Pagination-BqwvN9vO.js";import"./form-provider-IpIS7QyH.js";import"./TextField-DpiQLRVb.js";import"./FormControl-7ae63LEX.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CFOghGNi.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-CGBfd-SD.js";import"./Select-DuF5QBaf.js";import"./Menu-BwYh9-WP.js";import"./InputBase-B1W2ZC-C.js";import"./FormHelperText-CzQPg626.js";import"./index-DhoXhWEB.js";import"./countries-DSLisFCy.js";import"./InputAdornment-DyfHBPVt.js";import"./fields-CDnR68NQ.js";import"./Rating-BiHaY-Qu.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-BSuX1ABo.js";import"./index-DAAlmJgF.js";import"./Slider-FnaxrRJO.js";import"./RadioGroup-B6OaYHCI.js";import"./FormGroup-g0K-BISM.js";import"./FormControlLabel-Cebq6FC-.js";import"./Autocomplete-CgcgI0fc.js";import"./Chip-Csudtta_.js";import"./country-select-BQ80n0Y3.js";import"./Checkbox-B4RwwnIi.js";import"./upload-avatar-BmHBzJEB.js";import"./DatePicker-CbfV6klG.js";import"./DialogContent-Y7gFy98Q.js";import"./ListItem-Dqffwavq.js";import"./MobileDateTimePicker-esLuqduG.js";import"./schema-helper-Ca6G8-HA.js";import"./LoadingButton-DnorAK6T.js";import"./CircularProgress-DB5GjJT4.js";import"./DialogTitle-DGtAiJ5y.js";import"./LastPage-CKDegpzl.js";function D({user:r}){return t.jsxs(x,{sx:{textAlign:"center"},children:[t.jsxs(m,{sx:{position:"relative"},children:[t.jsx(h,{sx:{left:0,right:0,zIndex:10,mx:"auto",bottom:-26,position:"absolute"}}),t.jsx(g,{alt:r.name,src:r.avatarUrl,sx:{width:64,height:64,zIndex:11,left:0,right:0,bottom:-32,mx:"auto",position:"absolute"}}),t.jsx(A,{src:r.coverUrl,alt:r.coverUrl,ratio:"16/9",slotProps:{overlay:{background:o=>j(o.vars.palette.grey["900Channel"],.48)}}})]}),t.jsx(u,{sx:{mt:7,mb:1},primary:r.name,secondary:r.role,primaryTypographyProps:{typography:"subtitle1"},secondaryTypographyProps:{component:"span",mt:.5}}),t.jsx(y,{direction:"row",alignItems:"center",justifyContent:"center",sx:{mb:2.5},children:b.map(o=>t.jsx(f,{children:t.jsx(v,{icon:o.name})},o.name))}),t.jsx(C,{sx:{borderStyle:"dashed"}}),t.jsxs(m,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",sx:{py:3,typography:"subtitle1"},children:[t.jsxs("div",{children:[t.jsx(e,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Follower"}),n(r.totalFollowers)]}),t.jsxs("div",{children:[t.jsx(e,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Following"}),n(r.totalFollowing)]}),t.jsxs("div",{children:[t.jsx(e,{variant:"caption",component:"div",sx:{mb:.5,color:"text.secondary"},children:"Total post"}),n(r.totalPosts)]})]})]})}function H({users:r}){const[o,l]=p.useState(1),a=12,d=p.useCallback((s,c)=>{l(c)},[]);return t.jsxs(t.Fragment,{children:[t.jsx(m,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:r.slice((o-1)*a,(o-1)*a+a).map(s=>t.jsx(D,{user:s},s.id))}),t.jsx(B,{page:o,shape:"circular",count:Math.ceil(r.length/a),onChange:d,sx:{mt:{xs:5,md:8},mx:"auto"}})]})}function L(){return t.jsxs(I,{children:[t.jsx(k,{heading:"User cards",links:[{name:"Dashboard",href:i.dashboard.root},{name:"User",href:i.dashboard.user.root},{name:"Cards"}],action:t.jsx(w,{component:P,href:i.dashboard.user.new,variant:"contained",startIcon:t.jsx(U,{icon:"mingcute:add-line"}),children:"New user"}),sx:{mb:{xs:3,md:5}}}),t.jsx(H,{users:T})]})}const N={title:`User cards | Dashboard - ${S.site.name}`};function Ut(){return t.jsxs(t.Fragment,{children:[t.jsx(F,{children:t.jsxs("title",{children:[" ",N.title]})}),t.jsx(L,{})]})}export{Ut as default};

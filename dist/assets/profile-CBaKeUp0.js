import{r as x,j as e,A as j,L as y,B as d,aN as C,y as m,I as n,S as l,aD as M,v as b,bq as O,aH as h,T as f,D as q,aI as U,aw as R,G as v,e as D,b as E,az as V,aM as F,bI as K,dB as J,bK as Q,bL as L,ed as X,p as A,eB as w,i as Y,k as Z,eC as ee,eD as re,eE as se,eF as oe,H as te,C as ie}from"./index-BPQkDe0s.js";import"./user-quick-edit-form-BuY8kJno.js";import{I as G}from"./image-C7AA7Kgf.js";import{u as ae}from"./use-tabs-B-x2h9_m.js";import{u as N}from"./use-mocked-user-BLzAaaGS.js";import{C as ne}from"./custom-breadcrumbs-BIW9VTmo.js";import{c as le,d as S}from"./format-number-9dwzKsgZ.js";import{C as k}from"./CardHeader--tCBXTtB.js";import{b as B}from"./InputBase-CPrPQ_RD.js";import{I as z}from"./InputAdornment-Ck59aR0s.js";import{F as ce}from"./FormControlLabel-CkOEQNeq.js";import{C as de}from"./Checkbox-DYdkvSfk.js";import{A as pe}from"./AvatarGroup-DApFS9jB.js";import{F as T}from"./Fab-r1wCoDSe.js";import{S as xe}from"./form-provider-Csxs3POq.js";import{T as he}from"./TextField-Bi7NVwCq.js";import{u as me,L as ue}from"./use-light-box-C5iYO2_w.js";import"./fields-uLHuWF6F.js";import"./FormHelperText-CPxcDFA-.js";import"./formControlState-Dq1zat_P.js";import"./Rating-CpW9817X.js";import"./visuallyHidden-Dan1xhjv.js";import"./editor-JwZorNGg.js";import"./Menu-DGoJy9BJ.js";import"./index-DhCxhDCC.js";import"./Slider-Cn-68b2h.js";import"./FormControl-bKQXC1dH.js";import"./utils-DoM3o7-Q.js";import"./FormLabel-8bz6Jicd.js";import"./RadioGroup-DbSLazbi.js";import"./FormGroup-CC5xoKev.js";import"./Autocomplete-lg4xc3Dx.js";import"./Select-9Xhy8-ut.js";import"./Chip-ALPNHt2t.js";import"./country-select-Bo5KTiYN.js";import"./countries-DSLisFCy.js";import"./InputLabel-AqbAhnGZ.js";import"./upload-avatar-CesV9ZGt.js";import"./index-DGJW8Nhg.js";import"./DatePicker-BGXln9IR.js";import"./DialogContent-p3i0msBI.js";import"./ListItem-BApUg4RM.js";import"./MobileDateTimePicker-dEpBlYqw.js";import"./schema-helper-CODNJXI3.js";import"./LoadingButton-ByZAe6Vn.js";import"./CircularProgress-BW2J7VJ8.js";import"./DialogTitle-DTSEDZ4J.js";function je({post:r}){var I,P;const{user:s}=N(),t=x.useRef(null),o=x.useRef(null),[i,a]=x.useState(""),u=x.useCallback(c=>{a(c.target.value)},[]),g=x.useCallback(()=>{o.current&&o.current.click()},[]),p=x.useCallback(()=>{t.current&&t.current.focus()},[]),$=e.jsx(k,{disableTypography:!0,avatar:e.jsx(j,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName,children:(I=s==null?void 0:s.displayName)==null?void 0:I.charAt(0).toUpperCase()}),title:e.jsx(y,{color:"inherit",variant:"subtitle1",children:s==null?void 0:s.displayName}),subheader:e.jsx(d,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:C(r.createdAt)}),action:e.jsx(m,{children:e.jsx(n,{icon:"eva:more-vertical-fill"})})}),W=e.jsx(l,{spacing:1.5,sx:{px:3,pb:2},children:r.comments.map(c=>e.jsxs(l,{direction:"row",spacing:2,children:[e.jsx(j,{alt:c.author.name,src:c.author.avatarUrl}),e.jsxs(M,{sx:{p:1.5,flexGrow:1,bgcolor:"background.neutral"},children:[e.jsxs(l,{sx:{mb:.5},alignItems:{sm:"center"},justifyContent:"space-between",direction:{xs:"column",sm:"row"},children:[e.jsx(d,{sx:{typography:"subtitle2"},children:c.author.name}),e.jsx(d,{sx:{typography:"caption",color:"text.disabled"},children:C(c.createdAt)})]}),e.jsx(d,{sx:{typography:"body2",color:"text.secondary"},children:c.message})]})]},c.id))}),_=e.jsxs(l,{spacing:2,direction:"row",alignItems:"center",sx:{p:c=>c.spacing(0,3,3,3)},children:[e.jsx(j,{src:s==null?void 0:s.photoURL,alt:s==null?void 0:s.displayName,children:(P=s==null?void 0:s.displayName)==null?void 0:P.charAt(0).toUpperCase()}),e.jsx(B,{fullWidth:!0,value:i,inputRef:t,placeholder:"Write a comment…",onChange:u,endAdornment:e.jsxs(z,{position:"end",sx:{mr:1},children:[e.jsx(m,{size:"small",onClick:g,children:e.jsx(n,{icon:"solar:gallery-add-bold"})}),e.jsx(m,{size:"small",children:e.jsx(n,{icon:"eva:smiling-face-fill"})})]}),inputProps:{id:`comment-input-${r.id}`,"aria-label":"Write a comment"},sx:{pl:1.5,height:40,borderRadius:1,border:c=>`solid 1px ${b(c.vars.palette.grey["500Channel"],.32)}`}}),e.jsx("input",{type:"file",ref:o,style:{display:"none"}})]}),H=e.jsxs(l,{direction:"row",alignItems:"center",sx:{p:c=>c.spacing(2,3,3,3)},children:[e.jsx(ce,{control:e.jsx(de,{defaultChecked:!0,color:"error",icon:e.jsx(n,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(n,{icon:"solar:heart-bold"})}),label:le(r.personLikes.length),sx:{mr:1}}),!!r.personLikes.length&&e.jsx(pe,{sx:{[`& .${O.avatar}`]:{width:32,height:32}},children:r.personLikes.map(c=>e.jsx(j,{alt:c.name,src:c.avatarUrl},c.name))}),e.jsx(d,{sx:{flexGrow:1}}),e.jsx(m,{onClick:p,children:e.jsx(n,{icon:"solar:chat-round-dots-bold"})}),e.jsx(m,{children:e.jsx(n,{icon:"solar:share-bold"})})]});return e.jsxs(h,{children:[$,e.jsx(f,{variant:"body2",sx:{p:c=>c.spacing(3,3,2,3)},children:r.message}),e.jsx(d,{sx:{p:1},children:e.jsx(G,{alt:r.media,src:r.media,ratio:"16/9",sx:{borderRadius:1.5}})}),H,!!r.comments.length&&W,_]})}function ye({info:r,posts:s}){const t=x.useRef(null),o=()=>{t.current&&t.current.click()},i=e.jsx(h,{sx:{py:3,textAlign:"center",typography:"h4"},children:e.jsxs(l,{direction:"row",divider:e.jsx(q,{orientation:"vertical",flexItem:!0,sx:{borderStyle:"dashed"}}),children:[e.jsxs(l,{width:1,children:[S(r.totalFollowers),e.jsx(d,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Follower"})]}),e.jsxs(l,{width:1,children:[S(r.totalFollowing),e.jsx(d,{component:"span",sx:{color:"text.secondary",typography:"body2"},children:"Following"})]})]})}),a=e.jsxs(h,{children:[e.jsx(k,{title:"About"}),e.jsxs(l,{spacing:2,sx:{p:3},children:[e.jsx(d,{sx:{typography:"body2"},children:r.quote}),e.jsxs(l,{direction:"row",spacing:2,children:[e.jsx(n,{icon:"mingcute:location-fill",width:24}),e.jsxs(d,{sx:{typography:"body2"},children:["Live at ",e.jsx(y,{variant:"subtitle2",color:"inherit",children:r.country})]})]}),e.jsxs(l,{direction:"row",sx:{typography:"body2"},children:[e.jsx(n,{icon:"fluent:mail-24-filled",width:24,sx:{mr:2}}),r.email]}),e.jsxs(l,{direction:"row",spacing:2,children:[e.jsx(n,{icon:"ic:round-business-center",width:24}),e.jsxs(d,{sx:{typography:"body2"},children:[r.role," ","at ",e.jsx(y,{variant:"subtitle2",color:"inherit",children:r.company})]})]}),e.jsxs(l,{direction:"row",spacing:2,children:[e.jsx(n,{icon:"ic:round-business-center",width:24}),e.jsxs(d,{sx:{typography:"body2"},children:["Studied at ",e.jsx(y,{variant:"subtitle2",color:"inherit",children:r.school})]})]})]})]}),u=e.jsxs(h,{sx:{p:3},children:[e.jsx(B,{multiline:!0,fullWidth:!0,rows:4,placeholder:"Share what you are thinking here...",sx:{p:2,mb:3,borderRadius:1,border:p=>`solid 1px ${b(p.vars.palette.grey["500Channel"],.2)}`}}),e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsxs(l,{direction:"row",spacing:1,alignItems:"center",sx:{color:"text.secondary"},children:[e.jsxs(T,{size:"small",color:"inherit",variant:"softExtended",onClick:o,children:[e.jsx(n,{icon:"solar:gallery-wide-bold",width:24,sx:{color:"success.main"}}),"Image/Video"]}),e.jsxs(T,{size:"small",color:"inherit",variant:"softExtended",children:[e.jsx(n,{icon:"solar:videocamera-record-bold",width:24,sx:{color:"error.main"}}),"Streaming"]})]}),e.jsx(D,{variant:"contained",children:"Post"})]}),e.jsx("input",{ref:t,type:"file",style:{display:"none"}})]}),g=e.jsxs(h,{children:[e.jsx(k,{title:"Social"}),e.jsx(l,{spacing:2,sx:{p:3},children:U.map(p=>e.jsxs(l,{spacing:2,direction:"row",sx:{wordBreak:"break-all",typography:"body2"},children:[e.jsx(R,{icon:p.value}),e.jsxs(y,{color:"inherit",children:[p.value==="facebook"&&r.socialLinks.facebook,p.value==="instagram"&&r.socialLinks.instagram,p.value==="linkedin"&&r.socialLinks.linkedin,p.value==="twitter"&&r.socialLinks.twitter]})]},p.name))})]});return e.jsxs(v,{container:!0,spacing:3,children:[e.jsx(v,{xs:12,md:4,children:e.jsxs(l,{spacing:3,children:[i,a,g]})}),e.jsx(v,{xs:12,md:8,children:e.jsxs(l,{spacing:3,children:[u,s.map(p=>e.jsx(je,{post:p},p.id))]})})]})}function ge({name:r,avatarUrl:s,role:t,coverUrl:o}){const i=E();return e.jsx(d,{sx:{...V({color:`0deg, ${b(i.vars.palette.primary.darkerChannel,.8)}, ${b(i.vars.palette.primary.darkerChannel,.8)}`,imgUrl:o}),height:1,color:"common.white"},children:e.jsxs(l,{direction:{xs:"column",md:"row"},sx:{left:{md:24},bottom:{md:24},zIndex:{md:10},pt:{xs:6,md:0},position:{md:"absolute"}},children:[e.jsx(j,{alt:r,src:s,sx:{mx:"auto",width:{xs:64,md:128},height:{xs:64,md:128},border:`solid 2px ${i.vars.palette.common.white}`},children:r==null?void 0:r.charAt(0).toUpperCase()}),e.jsx(F,{sx:{mt:3,ml:{md:3},textAlign:{xs:"center",md:"unset"}},primary:r,secondary:t,primaryTypographyProps:{typography:"h4"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}})]})})}function be({friends:r,searchFriends:s,onSearchFriends:t}){const o=ve({inputData:r,query:s}),i=!o.length&&!!s;return e.jsxs(e.Fragment,{children:[e.jsxs(l,{spacing:2,justifyContent:"space-between",direction:{xs:"column",sm:"row"},sx:{my:5},children:[e.jsx(f,{variant:"h4",children:"Friends"}),e.jsx(he,{value:s,onChange:t,placeholder:"Search friends...",InputProps:{startAdornment:e.jsx(z,{position:"start",children:e.jsx(n,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,sm:260}}})]}),i?e.jsx(xe,{query:s,sx:{py:10}}):e.jsx(d,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:o.map(a=>e.jsx(fe,{item:a},a.id))})]})}function fe({item:r}){const s=K(),t=()=>{s.onClose(),console.info("DELETE",r.name)},o=()=>{s.onClose(),console.info("EDIT",r.name)};return e.jsxs(e.Fragment,{children:[e.jsxs(h,{sx:{py:5,display:"flex",position:"relative",alignItems:"center",flexDirection:"column"},children:[e.jsx(j,{alt:r.name,src:r.avatarUrl,sx:{width:64,height:64,mb:3}}),e.jsx(y,{variant:"subtitle1",color:"text.primary",children:r.name}),e.jsx(f,{variant:"body2",sx:{color:"text.secondary",mb:1,mt:.5},children:r.role}),e.jsx(l,{alignItems:"center",justifyContent:"center",direction:"row",children:U.map(i=>e.jsx(m,{children:e.jsx(R,{icon:i.name})},i.name))}),e.jsx(m,{color:s.open?"inherit":"default",onClick:s.onOpen,sx:{top:8,right:8,position:"absolute"},children:e.jsx(n,{icon:"eva:more-vertical-fill"})})]}),e.jsx(J,{open:s.open,anchorEl:s.anchorEl,onClose:s.onClose,slotProps:{arrow:{placement:"right-top"}},children:e.jsxs(Q,{children:[e.jsxs(L,{onClick:o,children:[e.jsx(n,{icon:"solar:pen-bold"}),"Edit"]}),e.jsxs(L,{onClick:t,sx:{color:"error.main"},children:[e.jsx(n,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})})]})}function ve({inputData:r,query:s}){return s?r.filter(t=>t.name.toLowerCase().indexOf(s.toLowerCase())!==-1):r}function we({gallery:r}){const s=E(),t=r.map(i=>({src:i.imageUrl})),o=me(t);return e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"h4",sx:{my:5},children:"Gallery"}),e.jsx(d,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:r.map(i=>e.jsxs(h,{sx:{cursor:"pointer",color:"common.white"},children:[e.jsx(m,{color:"inherit",sx:{position:"absolute",top:8,right:8,zIndex:9},children:e.jsx(n,{icon:"eva:more-vertical-fill"})}),e.jsx(F,{sx:{p:3,left:0,width:1,bottom:0,zIndex:9,position:"absolute"},primary:i.title,secondary:C(i.postedAt),primaryTypographyProps:{noWrap:!0,typography:"subtitle1"},secondaryTypographyProps:{mt:.5,color:"inherit",component:"span",typography:"body2",sx:{opacity:.48}}}),e.jsx(G,{alt:"gallery",ratio:"1/1",src:i.imageUrl,onClick:()=>o.onOpen(i.imageUrl),slotProps:{overlay:{background:`linear-gradient(to bottom, ${b(s.vars.palette.grey["900Channel"],0)} 0%, ${s.vars.palette.grey[900]} 75%)`}}})]},i.id))}),e.jsx(ue,{index:o.selected,slides:t,open:o.open,close:o.onClose})]})}function Ce({followers:r}){const s=r.slice(4,8).map(a=>a.id),[t,o]=x.useState(s),i=x.useCallback(a=>{const u=t.includes(a)?t.filter(g=>g!==a):[...t,a];o(u)},[t]);return e.jsxs(e.Fragment,{children:[e.jsx(f,{variant:"h4",sx:{my:5},children:"Followers"}),e.jsx(d,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:r.map(a=>e.jsx(ke,{follower:a,selected:t.includes(a.id),onSelected:()=>i(a.id)},a.id))})]})}function ke({follower:r,selected:s,onSelected:t}){const{name:o,country:i,avatarUrl:a}=r;return e.jsxs(h,{sx:{display:"flex",alignItems:"center",p:u=>u.spacing(3,2,3,3)},children:[e.jsx(j,{alt:o,src:a,sx:{width:48,height:48,mr:2}}),e.jsx(F,{primary:o,secondary:e.jsxs(e.Fragment,{children:[e.jsx(n,{icon:"mingcute:location-fill",width:16,sx:{flexShrink:0,mr:.5}}),i]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{mt:.5,noWrap:!0,display:"flex",component:"span",alignItems:"center",typography:"caption",color:"text.disabled"}}),e.jsx(D,{size:"small",variant:s?"text":"outlined",color:s?"success":"inherit",startIcon:s?e.jsx(n,{width:18,icon:"eva:checkmark-fill",sx:{mr:-.75}}):null,onClick:t,sx:{flexShrink:0,ml:1.5},children:s?"Followed":"Follow"})]})}const Fe=[{value:"profile",label:"Profile",icon:e.jsx(n,{icon:"solar:user-id-bold",width:24})},{value:"followers",label:"Followers",icon:e.jsx(n,{icon:"solar:heart-bold",width:24})},{value:"friends",label:"Friends",icon:e.jsx(n,{icon:"solar:users-group-rounded-bold",width:24})},{value:"gallery",label:"Gallery",icon:e.jsx(n,{icon:"solar:gallery-wide-bold",width:24})}];function Ie(){const{user:r}=N(),[s,t]=x.useState(""),o=ae("profile"),i=x.useCallback(a=>{t(a.target.value)},[]);return e.jsxs(X,{children:[e.jsx(ne,{heading:"Profile",links:[{name:"Dashboard",href:A.dashboard.root},{name:"User",href:A.dashboard.user.root},{name:r==null?void 0:r.displayName}],sx:{mb:{xs:3,md:5}}}),e.jsxs(h,{sx:{mb:3,height:290},children:[e.jsx(ge,{role:w.role,name:r==null?void 0:r.displayName,avatarUrl:r==null?void 0:r.photoURL,coverUrl:w.coverUrl}),e.jsx(d,{display:"flex",justifyContent:{xs:"center",md:"flex-end"},sx:{width:1,bottom:0,zIndex:9,px:{md:3},position:"absolute",bgcolor:"background.paper"},children:e.jsx(Y,{value:o.value,onChange:o.onChange,children:Fe.map(a=>e.jsx(Z,{value:a.value,icon:a.icon,label:a.label},a.value))})})]}),o.value==="profile"&&e.jsx(ye,{info:w,posts:ee}),o.value==="followers"&&e.jsx(Ce,{followers:re}),o.value==="friends"&&e.jsx(be,{friends:se,searchFriends:s,onSearchFriends:i}),o.value==="gallery"&&e.jsx(we,{gallery:oe})]})}const Pe={title:`User profile | Dashboard - ${ie.site.name}`};function vr(){return e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsxs("title",{children:[" ",Pe.title]})}),e.jsx(Ie,{})]})}export{vr as default};

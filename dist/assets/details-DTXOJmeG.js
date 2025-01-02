import{r as b,df as L,j as e,B as o,S as d,e as p,Y as M,dp as w,dq as y,dn as f,dr as v,cZ as D,I as P,d8 as C,de as q,T as N,d1 as H,dQ as R,p as j,cW as h,dU as $,H as Q,C as K}from"./index-BqQARj70.js";import{u as O,E as A}from"./error-block-Cvsq6LVS.js";import{u as z}from"./use-params-C27m3orW.js";import{C as U}from"./custom-breadcrumbs-ryDpeVg5.js";import{u as S}from"./useMutation-D9b-SBJX.js";import{g as W}from"./utils-MBUcMVfY.js";import{u as _}from"./use-table-CIIi1yXP.js";import{a as G,b as V,c as J,T as Y}from"./table-head-custom-BsfRnN01.js";import{T as Z}from"./table-pagination-custom-B8jkTEOc.js";import{T as u}from"./TableCell-BYUYO2qG.js";import{a as X,b as k,D as ee}from"./DialogContent-Bu9AzrBB.js";import{C as g}from"./CardHeader-DXB_c6fw.js";import{z as T,u as se,t as re,a as oe,F as ne}from"./form-provider-ccfU2XUN.js";import"./image-D-bc4Fg4.js";import"./editor-QJd8noTi.js";import{T as ae,t as ie,a as te,b as le,c as de,d as ce,e as me}from"./TimelineSeparator-BscZCaNm.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-Bhx6CUcB.js";import"./TablePagination-Dx3_2Y4O.js";import"./KeyboardArrowRight-CBFHahxG.js";import"./LastPage-B8ZhtlKX.js";import"./Select-BcNE4CY6.js";import"./Menu-CyG4g8V9.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-ByUog9Qa.js";import"./FormControlLabel-DYa7_yhu.js";import"./TextField-Ddc-2_B3.js";import"./FormControl-C8LIfacH.js";import"./InputLabel-Cypnw6Fi.js";import"./FormLabel-Dza6C49E.js";import"./FormHelperText-D7zaUcMu.js";import"./Rating-CRHSMtZR.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-CY1kJa8b.js";import"./RadioGroup-ChlGooHA.js";import"./FormGroup-CXDpwB7j.js";import"./utils-BkGDLkaZ.js";import"./index-ALNGUIW9.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BfS4czl_.js";import"./Autocomplete-mVzVA2ZY.js";import"./Chip-DPBTbqGw.js";import"./country-select-BdT_Z9O2.js";import"./upload-avatar-rmFzksOv.js";import"./format-number-BvEweN_e.js";import"./DatePicker-Ce3HVs4j.js";import"./ListItem-D-3kOQEW.js";import"./MobileDateTimePicker-huLGYsGv.js";import"./Tabs-CmqXMWlF.js";import"./index-3on3wy4W.js";const xe=[{id:"idx",label:"#",width:40,align:"center"},{id:"name",label:"Name"},{id:"email",label:"Email"}],pe=({users:s})=>{const r=_({defaultOrderBy:"orderNumber"}),[t,c]=b.useState(s),i=L({name:""});b.useEffect(()=>{c(s)},[s]);const a=he({inputData:t,comparator:W(r.order,r.orderBy),filters:i.state});return e.jsxs(e.Fragment,{children:[e.jsx(o,{sx:{position:"relative",borderRadius:1,overflow:"hidden",border:n=>`solid 1px ${n.vars.palette.divider}`},children:e.jsxs(G,{size:r.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(V,{headLabel:xe}),e.jsx(J,{children:a.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage).map((n,m)=>e.jsxs(Y,{children:[e.jsxs(u,{align:"center",children:[" ",m+1," "]}),e.jsxs(u,{children:[" ",n==null?void 0:n.firstName," "]}),e.jsxs(u,{children:[" ",n==null?void 0:n.email," "]})]},n==null?void 0:n.id))})]})}),e.jsx(Z,{page:r.page,dense:r.dense,count:a.length,rowsPerPage:r.rowsPerPage,onPageChange:r.onChangePage,onChangeDense:r.onChangeDense,onRowsPerPageChange:r.onChangeRowsPerPage})]})};function he({inputData:s,comparator:r,filters:t}){const{name:c}=t,i=s.map((a,n)=>[a,n]);return i.sort((a,n)=>{const m=r(a[0],n[0]);return m!==0?m:a[1]-n[1]}),s=i.map(a=>a[0]),c&&(s=s.filter(a=>a.firstName.toLowerCase().indexOf(c.toLowerCase())!==-1||a.email.toLowerCase().indexOf(c.toLowerCase())!==-1)),s}const ue=({open:s,onClose:r,handler:t})=>e.jsxs(X,{open:s,onClose:r,children:[e.jsx(k,{children:e.jsxs(d,{spacing:1,alignItems:"center",children:[e.jsx(o,{}),e.jsx("strong",{children:"Are you sure?"}),e.jsx("p",{children:"Do you want to mark seleted ticket as closed."})]})}),e.jsxs(ee,{children:[e.jsx(p,{variant:"contained",onClick:t,children:"Confirm"}),e.jsx(p,{color:"inherit",variant:"outlined",onClick:r,children:"Cancel"})]})]});function je({ticket:s}){const r=M(),t=w(),{mutate:c}=S({mutationFn:i=>y.patch(f.tickets.close+i,{status:"Closed"}),onSuccess:async()=>{v.success("Closed success!"),r.onFalse()},onSettled:async()=>{await t.invalidateQueries({queryKey:["tickets"]})},onError:i=>{}});return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[e.jsx(g,{title:"Details",action:e.jsx(o,{children:e.jsx(p,{onClick:r.onTrue,disabled:s.status==="Closed",variant:"contained",startIcon:e.jsx(P,{icon:"carbon:checkmark-filled"}),children:"Mark as Closed"})})}),e.jsxs(d,{sx:{p:3},children:[e.jsxs(d,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[e.jsxs(o,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(d,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Ticket Details"})}),e.jsxs(o,{sx:{color:"text.secondary"},children:["TICKET ID: ",s==null?void 0:s.id]}),e.jsxs(o,{sx:{color:"text.secondary"},children:["Member: ",`${s==null?void 0:s.member.firstName} ${(s==null?void 0:s.member.lastName)||""}`]}),e.jsxs(o,{sx:{color:"text.secondary"},children:["Topic: ",s==null?void 0:s.topic,"."]})]}),e.jsxs(o,{flexDirection:"column",alignItems:"center",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:i=>`dashed 2px ${i.vars.palette.background.neutral}`,borderLeft:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:[e.jsx(d,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Ticket Status"})}),e.jsx(o,{sx:{color:"text.secondary"},children:e.jsx(C,{variant:"soft",color:s.status==="Open"&&"info"||s.status==="Closed"&&"default"||"default",children:s.status})})]}),e.jsxs(o,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[e.jsx(d,{display:"flex",justifyContent:"center",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Ticket Priority"})}),e.jsx(o,{sx:{color:"text.secondary"},children:e.jsx(C,{variant:"soft",color:(s==null?void 0:s.priority)==="Low"&&"success"||(s==null?void 0:s.priority)==="Medium"&&"warning"||(s==null?void 0:s.priority)==="Hight"&&"error"||"default",children:s==null?void 0:s.priority})})]})]}),(s==null?void 0:s.description)&&e.jsx(d,{justifyContent:"space-between",sx:{typography:"body2"},children:e.jsxs(o,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(d,{sx:{typography:"subtitle2"},children:"Description:"}),e.jsx(o,{sx:{color:"text.secondary"},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:s==null?void 0:s.description}})})]})})]}),e.jsx(g,{title:"Users",sx:{mt:-4}}),e.jsx(o,{fullWidth:!0,alignItems:"center",sx:{p:3},children:e.jsx(pe,{users:s==null?void 0:s.mentions})})]}),e.jsx(ue,{open:r.value,onClose:r.onFalse,handler:()=>c(s.id)})]})}const ge=T.object({message:T.string().min(1,{message:"Name is required!"})}),ye=({ticket:s,messages:r})=>{const t={message:""},c=se({resolver:re(ge),defaultValues:t}),{reset:i,handleSubmit:a,formState:{isSubmitting:n}}=c,m=w(),{mutate:I}=S({mutationFn:l=>y.post(f.tickets.createMessage,l),onSuccess:async()=>{v.success("Message Has Been Created!"),i()},onSettled:async()=>{const{id:l}=s;await m.invalidateQueries({queryKey:["tickets"]}),await m.invalidateQueries({queryKey:["tickets",l]})},onError:l=>{}}),B=a(async l=>{try{if(s.id){const x={...l};x.ticketId=s.id,I(x)}}catch(x){console.log(x)}}),F=e.jsxs(o,{sx:{pr:4,pl:4,pb:4,pt:2},children:[e.jsx(ae,{sx:{p:0,m:0,[`& .${ie.root}:before`]:{flex:0,padding:0}},children:e.jsx(q,{fillContent:!0,sx:{height:360},children:r==null?void 0:r.map((l,x)=>{const E=x===r.length-1;return e.jsxs(te,{children:[e.jsxs(le,{children:[e.jsx(de,{color:"primary"}),E?null:e.jsx(ce,{})]}),e.jsx(me,{children:e.jsxs(o,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(o,{children:[e.jsx(N,{variant:"subtitle2",children:l.createdBy.firstName}),e.jsx(o,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:l.message})]}),e.jsx(o,{sx:{color:"text.disabled",typography:"caption"},children:H(l.createTime)})]})})]},l.id)})})}),s.status!=="Closed"&&e.jsx(oe,{methods:c,onSubmit:B,children:e.jsxs(d,{justifyContent:"flex-end",spacing:1,sx:{marginTop:1},children:[e.jsx(d,{sx:{typography:"subtitle1",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Send Reply:"})}),e.jsx(ne.Text,{label:"Enter Description",name:"message",multiline:!0,rows:3,sx:{mb:2}}),e.jsx(o,{children:e.jsx(p,{type:"submit",variant:"contained",endIcon:e.jsx(P,{icon:"iconamoon:send-fill"}),children:"Send"})})]})})]});return e.jsxs(D,{children:[e.jsx(g,{title:"Previous Messages"}),F]})};function fe({ticket:s}){return e.jsxs(R,{children:[e.jsx(U,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"Tickets",href:j.dashboard.tickets.root},{name:"Ticket Details"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:9,children:e.jsx(d,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsx(je,{ticket:s})})}),e.jsx(h,{xs:12,md:3,children:e.jsx(ye,{ticket:s,messages:s==null?void 0:s.messages})})]})]})}const be={title:`Ticket details | Dashboard - ${K.site.name}`};function bs(){const{id:s=""}=z(),r=O({queryKey:["tickets",s],queryFn:async()=>{const{data:t}=await y.get(f.tickets.details+s);return t}});return r.isPending||r.isLoading?e.jsx($,{}):r.isError?e.jsx(A,{route:j.dashboard.tickets.root}):e.jsxs(e.Fragment,{children:[e.jsx(Q,{children:e.jsxs("title",{children:[" ",be.title]})}),e.jsx(fe,{ticket:r.data})]})}export{bs as default};

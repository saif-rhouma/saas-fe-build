import{r as b,de as L,j as e,B as a,S as c,e as p,i as M,dn as w,dp as f,dm as y,dq as v,cY as D,d7 as C,I as P,dd as q,T as N,d0 as H,dP as R,p as j,cV as h,dT as $,H as K,C as O}from"./index-D6VGg1bq.js";import{u as Q,E as A}from"./error-block-Cq6e4nOB.js";import{u as z}from"./use-params-lG0ar9fI.js";import{C as V}from"./custom-breadcrumbs-C78AEP0d.js";import{u as S}from"./useMutation-Bx_IT5H7.js";import{g as G}from"./utils-MBUcMVfY.js";import{u as U}from"./use-table-DUpQjS3d.js";import{a as W,b as J,c as Y,T as _}from"./table-head-custom-BCCDj4i1.js";import{T as X}from"./table-pagination-custom-CoW7dGxp.js";import{T as u}from"./TableCell-D-t1l7iN.js";import{a as Z,b as k,D as ee}from"./DialogContent-Y80oskfE.js";import{C as g}from"./CardHeader-hK_r7mPZ.js";import{z as T,u as se,t as re,a as ae,F as oe}from"./form-provider-C6QMU8bl.js";import"./image-liNkg10u.js";import"./editor-CF2B6Kvk.js";import{T as ne,t as ie,a as te,b as le,c as de,d as ce,e as me}from"./TimelineSeparator-IrcLvdfm.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-De1TWZfp.js";import"./TablePagination-CasltQ0w.js";import"./KeyboardArrowRight-BafFncAZ.js";import"./LastPage-CN_k2t5Z.js";import"./Select-Dr18bHTG.js";import"./Menu-EDtmmCpW.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-DzpuTr-y.js";import"./FormControlLabel-BbRBNDv1.js";import"./TextField-BAzy7rvH.js";import"./FormControl-DODm1Txf.js";import"./InputLabel-cFFHQmp0.js";import"./FormLabel-C2XdbuiY.js";import"./FormHelperText-C_YYziP2.js";import"./Rating-UI7_kHEe.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-BmmR_MP6.js";import"./RadioGroup-CwkusPkZ.js";import"./FormGroup-CpuGROki.js";import"./utils-CjO9Hd85.js";import"./index-vzGRRDr6.js";import"./countries-DSLisFCy.js";import"./InputAdornment-GGI6x7r7.js";import"./Autocomplete-BOwAiV9d.js";import"./Chip-gK0i7ahF.js";import"./country-select-CMJy6pzV.js";import"./upload-avatar-DwtveIup.js";import"./format-number-C5wyMsxU.js";import"./DatePicker-DH93weYH.js";import"./ListItem-BlXNLjfP.js";import"./MobileDateTimePicker-B5mmIsTt.js";import"./Tabs-C2ogl0Yy.js";import"./index-B8NoxTvr.js";const xe=[{id:"idx",label:"#",width:40,align:"center"},{id:"name",label:"Name"},{id:"email",label:"Email"}],pe=({users:s})=>{const r=U({defaultOrderBy:"orderNumber"}),[t,d]=b.useState(s),i=L({name:""});b.useEffect(()=>{d(s)},[s]);const n=he({inputData:t,comparator:G(r.order,r.orderBy),filters:i.state});return e.jsxs(e.Fragment,{children:[e.jsx(a,{sx:{position:"relative",borderRadius:1,overflow:"hidden",border:o=>`solid 1px ${o.vars.palette.divider}`},children:e.jsxs(W,{size:r.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(J,{headLabel:xe}),e.jsx(Y,{children:n.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage).map((o,m)=>e.jsxs(_,{children:[e.jsxs(u,{align:"center",children:[" ",m+1," "]}),e.jsxs(u,{children:[" ",o==null?void 0:o.firstName," "]}),e.jsxs(u,{children:[" ",o==null?void 0:o.email," "]})]},o==null?void 0:o.id))})]})}),e.jsx(X,{page:r.page,dense:r.dense,count:n.length,rowsPerPage:r.rowsPerPage,onPageChange:r.onChangePage,onChangeDense:r.onChangeDense,onRowsPerPageChange:r.onChangeRowsPerPage})]})};function he({inputData:s,comparator:r,filters:t}){const{name:d}=t,i=s.map((n,o)=>[n,o]);return i.sort((n,o)=>{const m=r(n[0],o[0]);return m!==0?m:n[1]-o[1]}),s=i.map(n=>n[0]),d&&(s=s.filter(n=>n.firstName.toLowerCase().indexOf(d.toLowerCase())!==-1||n.email.toLowerCase().indexOf(d.toLowerCase())!==-1)),s}const ue=({open:s,onClose:r,handler:t})=>e.jsxs(Z,{open:s,onClose:r,children:[e.jsx(k,{children:e.jsxs(c,{spacing:1,alignItems:"center",children:[e.jsx(a,{}),e.jsx("strong",{children:"Are you sure?"}),e.jsx("p",{children:"Do you want to mark seleted ticket as closed."})]})}),e.jsxs(ee,{children:[e.jsx(p,{variant:"contained",onClick:t,children:"Confirm"}),e.jsx(p,{color:"inherit",variant:"outlined",onClick:r,children:"Cancel"})]})]});function je({ticket:s}){const r=M(),t=w(),{mutate:d}=S({mutationFn:i=>f.patch(y.tickets.close+i,{status:"Closed"}),onSuccess:async()=>{v.success("Closed success!"),r.onFalse()},onSettled:async()=>{await t.invalidateQueries({queryKey:["tickets"]})},onError:i=>{}});return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[e.jsx(g,{title:"Details"}),e.jsxs(c,{sx:{p:3},children:[e.jsxs(c,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[e.jsxs(a,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(c,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Ticket Details"})}),e.jsxs(a,{sx:{color:"text.secondary"},children:["TICKET ID: ",s==null?void 0:s.id]}),e.jsxs(a,{sx:{color:"text.secondary"},children:["Member: ",`${s==null?void 0:s.member.firstName} ${(s==null?void 0:s.member.lastName)||""}`]}),e.jsxs(a,{sx:{color:"text.secondary"},children:["Topic: ",s==null?void 0:s.topic,"."]})]}),e.jsxs(a,{flexDirection:"column",alignItems:"center",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:i=>`dashed 2px ${i.vars.palette.background.neutral}`,borderLeft:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:[e.jsx(c,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Ticket Status"})}),e.jsx(a,{sx:{color:"text.secondary"},children:e.jsx(C,{variant:"soft",color:s.status==="Open"&&"info"||s.status==="Closed"&&"default"||"default",children:s.status})})]}),e.jsxs(a,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[e.jsx(c,{display:"flex",justifyContent:"center",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Ticket Priority"})}),e.jsx(a,{sx:{color:"text.secondary"},children:e.jsx(C,{variant:"soft",color:(s==null?void 0:s.priority)==="Low"&&"success"||(s==null?void 0:s.priority)==="Medium"&&"warning"||(s==null?void 0:s.priority)==="Hight"&&"error"||"default",children:s==null?void 0:s.priority})})]})]}),e.jsx(a,{sx:{pt:5},children:e.jsx(p,{onClick:r.onTrue,disabled:s.status==="Closed",variant:"contained",startIcon:e.jsx(P,{icon:"carbon:checkmark-filled"}),children:"Mark as Closed"})}),e.jsx(g,{title:"Users"}),e.jsx(a,{fullWidth:!0,alignItems:"center",sx:{p:3},children:e.jsx(pe,{users:s==null?void 0:s.mentions})})]})]}),e.jsx(ue,{open:r.value,onClose:r.onFalse,handler:()=>d(s.id)})]})}const ge=T.object({message:T.string().min(1,{message:"Name is required!"})}),fe=({ticket:s,messages:r})=>{const t={message:""},d=se({resolver:re(ge),defaultValues:t}),{reset:i,handleSubmit:n,formState:{isSubmitting:o}}=d,m=w(),{mutate:I}=S({mutationFn:l=>f.post(y.tickets.createMessage,l),onSuccess:async()=>{v.success("Message Has Been Created!"),i()},onSettled:async()=>{const{id:l}=s;await m.invalidateQueries({queryKey:["tickets"]}),await m.invalidateQueries({queryKey:["tickets",l]})},onError:l=>{}}),B=n(async l=>{try{if(s.id){const x={...l};x.ticketId=s.id,I(x)}}catch(x){console.log(x)}}),F=e.jsxs(a,{sx:{pr:4,pl:4,pb:4,pt:2},children:[e.jsx(ne,{sx:{p:0,m:0,[`& .${ie.root}:before`]:{flex:0,padding:0}},children:e.jsx(q,{fillContent:!0,sx:{height:360},children:r==null?void 0:r.map((l,x)=>{const E=x===r.length-1;return e.jsxs(te,{children:[e.jsxs(le,{children:[e.jsx(de,{color:"primary"}),E?null:e.jsx(ce,{})]}),e.jsx(me,{children:e.jsxs(a,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(a,{children:[e.jsx(N,{variant:"subtitle2",children:l.createdBy.firstName}),e.jsx(a,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:l.message})]}),e.jsx(a,{sx:{color:"text.disabled",typography:"caption"},children:H(l.createTime)})]})})]},l.id)})})}),s.status!=="Closed"&&e.jsx(ae,{methods:d,onSubmit:B,children:e.jsxs(c,{justifyContent:"flex-end",spacing:1,sx:{marginTop:1},children:[e.jsx(c,{sx:{typography:"subtitle1",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Send Reply:"})}),e.jsx(oe.Text,{label:"Enter Description",name:"message",multiline:!0,rows:3,sx:{mb:2}}),e.jsx(a,{children:e.jsx(p,{type:"submit",variant:"contained",endIcon:e.jsx(P,{icon:"iconamoon:send-fill"}),children:"Send"})})]})})]});return e.jsxs(D,{children:[e.jsx(g,{title:"Previous Messages"}),F]})};function ye({ticket:s}){return e.jsxs(R,{children:[e.jsx(V,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"Tickets",href:j.dashboard.tickets.root},{name:"Ticket Details"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:9,children:e.jsx(c,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsx(je,{ticket:s})})}),e.jsx(h,{xs:12,md:3,children:e.jsx(fe,{ticket:s,messages:s==null?void 0:s.messages})})]})]})}const be={title:`Ticket details | Dashboard - ${O.site.name}`};function bs(){const{id:s=""}=z(),r=Q({queryKey:["tickets",s],queryFn:async()=>{const{data:t}=await f.get(y.tickets.details+s);return t}});return r.isPending||r.isLoading?e.jsx($,{}):r.isError?e.jsx(A,{route:j.dashboard.tickets.root}):e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsxs("title",{children:[" ",be.title]})}),e.jsx(ye,{ticket:r.data})]})}export{bs as default};

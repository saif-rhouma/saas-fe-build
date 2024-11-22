import{r as b,de as L,j as e,B as o,S as d,e as p,i as M,dn as w,dp as y,dm as f,dq as v,cY as D,I as P,d7 as C,dd as q,T as N,d0 as H,dP as R,p as j,cV as h,dT as $,H as K,C as O}from"./index-Blsk_n2J.js";import{u as Q,E as A}from"./error-block-Cp70Gs-C.js";import{u as z}from"./use-params-DwIFgDk2.js";import{C as V}from"./custom-breadcrumbs-DQl07oU5.js";import{u as S}from"./useMutation-9mDdNxrY.js";import{g as _}from"./utils-MBUcMVfY.js";import{u as G}from"./use-table-CvyqwdTr.js";import{a as U,b as W,c as J,T as Y}from"./table-head-custom-cPV8HOCy.js";import{T as X}from"./table-pagination-custom-Ceo8_zv4.js";import{T as u}from"./TableCell-pdyLDV8n.js";import{a as Z,b as k,D as ee}from"./DialogContent-CB0eeVYr.js";import{C as g}from"./CardHeader-C7t5Irc2.js";import{z as T,u as se,t as re,a as oe,F as ne}from"./form-provider-DdfiYo_S.js";import"./image-Cb1bD9tg.js";import"./editor-BNs7J7mr.js";import{T as ae,t as ie,a as te,b as le,c as de,d as ce,e as me}from"./TimelineSeparator-Chrd3odT.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-B-93dYv5.js";import"./TablePagination-DLd8oQnP.js";import"./KeyboardArrowRight-DwIijAwp.js";import"./LastPage-Bbja-U1X.js";import"./Select-ee9RPtAk.js";import"./Menu-CZN5SQuC.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-cMEccQYG.js";import"./FormControlLabel-CB8Q9wIG.js";import"./TextField-BKSxA_Cs.js";import"./FormControl-qbY7_VIN.js";import"./InputLabel-BYZCvd35.js";import"./FormLabel-Bl7YzlTQ.js";import"./FormHelperText-CHZY3fg7.js";import"./Rating-hCyG6wcZ.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-l7vrXkor.js";import"./RadioGroup-B0p7NR0g.js";import"./FormGroup-CvSak5XN.js";import"./utils-q9gw6RHQ.js";import"./index-DstcX7rq.js";import"./countries-DSLisFCy.js";import"./InputAdornment-BWmNxI1m.js";import"./Autocomplete-DNr_vrjq.js";import"./Chip-BrbLQ3s5.js";import"./country-select-DRYKmuys.js";import"./upload-avatar-Y5cPPAL9.js";import"./format-number-CrK_YprG.js";import"./DatePicker-BcikrSOj.js";import"./ListItem-D58zR2IT.js";import"./MobileDateTimePicker-Dj8bi4PE.js";import"./Tabs-JjNAVrJX.js";import"./index-FRfytyt8.js";const xe=[{id:"idx",label:"#",width:40,align:"center"},{id:"name",label:"Name"},{id:"email",label:"Email"}],pe=({users:s})=>{const r=G({defaultOrderBy:"orderNumber"}),[t,c]=b.useState(s),i=L({name:""});b.useEffect(()=>{c(s)},[s]);const a=he({inputData:t,comparator:_(r.order,r.orderBy),filters:i.state});return e.jsxs(e.Fragment,{children:[e.jsx(o,{sx:{position:"relative",borderRadius:1,overflow:"hidden",border:n=>`solid 1px ${n.vars.palette.divider}`},children:e.jsxs(U,{size:r.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(W,{headLabel:xe}),e.jsx(J,{children:a.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage).map((n,m)=>e.jsxs(Y,{children:[e.jsxs(u,{align:"center",children:[" ",m+1," "]}),e.jsxs(u,{children:[" ",n==null?void 0:n.firstName," "]}),e.jsxs(u,{children:[" ",n==null?void 0:n.email," "]})]},n==null?void 0:n.id))})]})}),e.jsx(X,{page:r.page,dense:r.dense,count:a.length,rowsPerPage:r.rowsPerPage,onPageChange:r.onChangePage,onChangeDense:r.onChangeDense,onRowsPerPageChange:r.onChangeRowsPerPage})]})};function he({inputData:s,comparator:r,filters:t}){const{name:c}=t,i=s.map((a,n)=>[a,n]);return i.sort((a,n)=>{const m=r(a[0],n[0]);return m!==0?m:a[1]-n[1]}),s=i.map(a=>a[0]),c&&(s=s.filter(a=>a.firstName.toLowerCase().indexOf(c.toLowerCase())!==-1||a.email.toLowerCase().indexOf(c.toLowerCase())!==-1)),s}const ue=({open:s,onClose:r,handler:t})=>e.jsxs(Z,{open:s,onClose:r,children:[e.jsx(k,{children:e.jsxs(d,{spacing:1,alignItems:"center",children:[e.jsx(o,{}),e.jsx("strong",{children:"Are you sure?"}),e.jsx("p",{children:"Do you want to mark seleted ticket as closed."})]})}),e.jsxs(ee,{children:[e.jsx(p,{variant:"contained",onClick:t,children:"Confirm"}),e.jsx(p,{color:"inherit",variant:"outlined",onClick:r,children:"Cancel"})]})]});function je({ticket:s}){const r=M(),t=w(),{mutate:c}=S({mutationFn:i=>y.patch(f.tickets.close+i,{status:"Closed"}),onSuccess:async()=>{v.success("Closed success!"),r.onFalse()},onSettled:async()=>{await t.invalidateQueries({queryKey:["tickets"]})},onError:i=>{}});return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[e.jsx(g,{title:"Details",action:e.jsx(o,{children:e.jsx(p,{onClick:r.onTrue,disabled:s.status==="Closed",variant:"contained",startIcon:e.jsx(P,{icon:"carbon:checkmark-filled"}),children:"Mark as Closed"})})}),e.jsxs(d,{sx:{p:3},children:[e.jsxs(d,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[e.jsxs(o,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(d,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Ticket Details"})}),e.jsxs(o,{sx:{color:"text.secondary"},children:["TICKET ID: ",s==null?void 0:s.id]}),e.jsxs(o,{sx:{color:"text.secondary"},children:["Member: ",`${s==null?void 0:s.member.firstName} ${(s==null?void 0:s.member.lastName)||""}`]}),e.jsxs(o,{sx:{color:"text.secondary"},children:["Topic: ",s==null?void 0:s.topic,"."]})]}),e.jsxs(o,{flexDirection:"column",alignItems:"center",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:i=>`dashed 2px ${i.vars.palette.background.neutral}`,borderLeft:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:[e.jsx(d,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Ticket Status"})}),e.jsx(o,{sx:{color:"text.secondary"},children:e.jsx(C,{variant:"soft",color:s.status==="Open"&&"info"||s.status==="Closed"&&"default"||"default",children:s.status})})]}),e.jsxs(o,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[e.jsx(d,{display:"flex",justifyContent:"center",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Ticket Priority"})}),e.jsx(o,{sx:{color:"text.secondary"},children:e.jsx(C,{variant:"soft",color:(s==null?void 0:s.priority)==="Low"&&"success"||(s==null?void 0:s.priority)==="Medium"&&"warning"||(s==null?void 0:s.priority)==="Hight"&&"error"||"default",children:s==null?void 0:s.priority})})]})]}),(s==null?void 0:s.description)&&e.jsx(d,{justifyContent:"space-between",sx:{typography:"body2"},children:e.jsxs(o,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(d,{sx:{typography:"subtitle2"},children:"Description:"}),e.jsx(o,{sx:{color:"text.secondary"},children:e.jsx("div",{dangerouslySetInnerHTML:{__html:s==null?void 0:s.description}})})]})})]}),e.jsx(g,{title:"Users",sx:{mt:-4}}),e.jsx(o,{fullWidth:!0,alignItems:"center",sx:{p:3},children:e.jsx(pe,{users:s==null?void 0:s.mentions})})]}),e.jsx(ue,{open:r.value,onClose:r.onFalse,handler:()=>c(s.id)})]})}const ge=T.object({message:T.string().min(1,{message:"Name is required!"})}),ye=({ticket:s,messages:r})=>{const t={message:""},c=se({resolver:re(ge),defaultValues:t}),{reset:i,handleSubmit:a,formState:{isSubmitting:n}}=c,m=w(),{mutate:I}=S({mutationFn:l=>y.post(f.tickets.createMessage,l),onSuccess:async()=>{v.success("Message Has Been Created!"),i()},onSettled:async()=>{const{id:l}=s;await m.invalidateQueries({queryKey:["tickets"]}),await m.invalidateQueries({queryKey:["tickets",l]})},onError:l=>{}}),B=a(async l=>{try{if(s.id){const x={...l};x.ticketId=s.id,I(x)}}catch(x){console.log(x)}}),F=e.jsxs(o,{sx:{pr:4,pl:4,pb:4,pt:2},children:[e.jsx(ae,{sx:{p:0,m:0,[`& .${ie.root}:before`]:{flex:0,padding:0}},children:e.jsx(q,{fillContent:!0,sx:{height:360},children:r==null?void 0:r.map((l,x)=>{const E=x===r.length-1;return e.jsxs(te,{children:[e.jsxs(le,{children:[e.jsx(de,{color:"primary"}),E?null:e.jsx(ce,{})]}),e.jsx(me,{children:e.jsxs(o,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(o,{children:[e.jsx(N,{variant:"subtitle2",children:l.createdBy.firstName}),e.jsx(o,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:l.message})]}),e.jsx(o,{sx:{color:"text.disabled",typography:"caption"},children:H(l.createTime)})]})})]},l.id)})})}),s.status!=="Closed"&&e.jsx(oe,{methods:c,onSubmit:B,children:e.jsxs(d,{justifyContent:"flex-end",spacing:1,sx:{marginTop:1},children:[e.jsx(d,{sx:{typography:"subtitle1",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Send Reply:"})}),e.jsx(ne.Text,{label:"Enter Description",name:"message",multiline:!0,rows:3,sx:{mb:2}}),e.jsx(o,{children:e.jsx(p,{type:"submit",variant:"contained",endIcon:e.jsx(P,{icon:"iconamoon:send-fill"}),children:"Send"})})]})})]});return e.jsxs(D,{children:[e.jsx(g,{title:"Previous Messages"}),F]})};function fe({ticket:s}){return e.jsxs(R,{children:[e.jsx(V,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"Tickets",href:j.dashboard.tickets.root},{name:"Ticket Details"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:9,children:e.jsx(d,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsx(je,{ticket:s})})}),e.jsx(h,{xs:12,md:3,children:e.jsx(ye,{ticket:s,messages:s==null?void 0:s.messages})})]})]})}const be={title:`Ticket details | Dashboard - ${O.site.name}`};function bs(){const{id:s=""}=z(),r=Q({queryKey:["tickets",s],queryFn:async()=>{const{data:t}=await y.get(f.tickets.details+s);return t}});return r.isPending||r.isLoading?e.jsx($,{}):r.isError?e.jsx(A,{route:j.dashboard.tickets.root}):e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsxs("title",{children:[" ",be.title]})}),e.jsx(fe,{ticket:r.data})]})}export{bs as default};
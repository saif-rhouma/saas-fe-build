import{j as e,S as c,B as a,e as p,r as b,dz as L,o as M,dI as w,dJ as f,dH as y,dK as v,aD as D,ds as C,I as P,dy as N,T as q,aJ as H,e8 as R,p as j,G as h,ec as $,H as K,C as O}from"./index-D-ZKGqTU.js";import{u as Q,E as z}from"./error-block-CQIWskvv.js";import{u as A}from"./use-params-DBj0-cxw.js";import{C as G}from"./custom-breadcrumbs-Ce0SsF19.js";import{u as I}from"./useMutation-DZH4G1UV.js";import{a as J,b as U,D as V}from"./DialogContent-CKRoYUkD.js";import{g as W}from"./utils-MBUcMVfY.js";import{u as _}from"./use-table-DeqmuJBx.js";import{a as X,b as Y,c as Z,T as k}from"./table-head-custom-COak4_H-.js";import{T as ee}from"./table-pagination-custom-DgvLjnHq.js";import{T as u}from"./TableCell-FvdEFRkr.js";import{C as g}from"./CardHeader-BKG7jGOn.js";import{z as T,u as se,t as re,a as ae,F as oe}from"./form-provider-L0KFjUTq.js";import"./image-CX1CYgjP.js";import"./editor-CzmUVphq.js";import{T as ne,t as ie,a as te,b as le,c as de,d as ce,e as me}from"./TimelineSeparator-DN8vl8ET.js";import"./utils-km2FGkQ4.js";import"./bounce-BSK3KHpz.js";import"./transition-BJzcwH5q.js";import"./Checkbox-XoXkZxXm.js";import"./TablePagination-DVtYhtU_.js";import"./KeyboardArrowRight-DzNmTPM2.js";import"./LastPage-CC1oKrM4.js";import"./Select-B6atPAS4.js";import"./Menu-BvjNAHEG.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";import"./InputBase-B9hwN3-B.js";import"./FormControlLabel-5B8r8hjw.js";import"./TextField-DhW8zjJC.js";import"./FormControl-n1s9FAXz.js";import"./InputLabel-CCRBBEhV.js";import"./FormLabel-C9Vfi2q1.js";import"./FormHelperText-BHlZRpvh.js";import"./Rating-C-gTF_lZ.js";import"./visuallyHidden-Dan1xhjv.js";import"./Slider-Buv_oatH.js";import"./RadioGroup-Bz4MgZrq.js";import"./FormGroup-CwleoAMr.js";import"./index-D0kJtIpB.js";import"./countries-DSLisFCy.js";import"./InputAdornment-B2x29rol.js";import"./Autocomplete-C74LI-Rt.js";import"./Chip-CYchvRo_.js";import"./country-select-CBbXG_H4.js";import"./upload-avatar-C3B5eTLv.js";import"./format-number-7nwGld6g.js";import"./DatePicker-BiJlOuDh.js";import"./ListItem-CbBrCKNq.js";import"./MobileDateTimePicker-CIeUS7kl.js";import"./Tabs-BAzl82ph.js";import"./index-Bb5BZvNl.js";const xe=({open:s,onClose:r,handler:t})=>e.jsxs(J,{open:s,onClose:r,children:[e.jsx(U,{children:e.jsxs(c,{spacing:1,alignItems:"center",children:[e.jsx(a,{}),e.jsx("strong",{children:"Are you sure?"}),e.jsx("p",{children:"Do you want to mark seleted ticket as closed."})]})}),e.jsxs(V,{children:[e.jsx(p,{variant:"contained",onClick:t,children:"Confirm"}),e.jsx(p,{color:"inherit",variant:"outlined",onClick:r,children:"Cancel"})]})]}),pe=[{id:"idx",label:"#",width:40,align:"center"},{id:"name",label:"Name"},{id:"email",label:"Email"}],he=({users:s})=>{const r=_({defaultOrderBy:"orderNumber"}),[t,d]=b.useState(s),i=L({name:""});b.useEffect(()=>{d(s)},[s]);const n=ue({inputData:t,comparator:W(r.order,r.orderBy),filters:i.state});return e.jsxs(e.Fragment,{children:[e.jsx(a,{sx:{position:"relative",borderRadius:1,overflow:"hidden",border:o=>`solid 1px ${o.vars.palette.divider}`},children:e.jsxs(X,{size:r.dense?"small":"medium",sx:{minWidth:960},children:[e.jsx(Y,{headLabel:pe}),e.jsx(Z,{children:n.slice(r.page*r.rowsPerPage,r.page*r.rowsPerPage+r.rowsPerPage).map((o,m)=>e.jsxs(k,{children:[e.jsxs(u,{align:"center",children:[" ",m+1," "]}),e.jsxs(u,{children:[" ",o==null?void 0:o.firstName," "]}),e.jsxs(u,{children:[" ",o==null?void 0:o.email," "]})]},o==null?void 0:o.id))})]})}),e.jsx(ee,{page:r.page,dense:r.dense,count:n.length,rowsPerPage:r.rowsPerPage,onPageChange:r.onChangePage,onChangeDense:r.onChangeDense,onRowsPerPageChange:r.onChangeRowsPerPage})]})};function ue({inputData:s,comparator:r,filters:t}){const{name:d}=t,i=s.map((n,o)=>[n,o]);return i.sort((n,o)=>{const m=r(n[0],o[0]);return m!==0?m:n[1]-o[1]}),s=i.map(n=>n[0]),d&&(s=s.filter(n=>n.firstName.toLowerCase().indexOf(d.toLowerCase())!==-1||n.email.toLowerCase().indexOf(d.toLowerCase())!==-1)),s}function je({ticket:s}){const r=M(),t=w(),{mutate:d}=I({mutationFn:i=>f.patch(y.tickets.close+i,{status:"Closed"}),onSuccess:async()=>{v.success("Closed success!"),r.onFalse()},onSettled:async()=>{await t.invalidateQueries({queryKey:["tickets"]})},onError:i=>{}});return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:[e.jsx(g,{title:"Details"}),e.jsxs(c,{sx:{p:3},children:[e.jsxs(c,{direction:"row",justifyContent:"space-between",sx:{typography:"body2"},children:[e.jsxs(a,{flexDirection:"column",sx:{display:"flex",width:"100%",p:1},children:[e.jsx(c,{direction:"row",sx:{typography:"subtitle2",marginBottom:1},children:e.jsx("div",{children:"Ticket Details"})}),e.jsxs(a,{sx:{color:"text.secondary"},children:["TICKET ID: ",s==null?void 0:s.id]}),e.jsxs(a,{sx:{color:"text.secondary"},children:["Member: ",`${s==null?void 0:s.member.firstName} ${(s==null?void 0:s.member.lastName)||""}`]}),e.jsxs(a,{sx:{color:"text.secondary"},children:["Topic: ",s==null?void 0:s.topic,"."]})]}),e.jsxs(a,{flexDirection:"column",alignItems:"center",gap:.5,sx:{display:"flex",width:"100%",p:1,borderRight:i=>`dashed 2px ${i.vars.palette.background.neutral}`,borderLeft:i=>`dashed 2px ${i.vars.palette.background.neutral}`},children:[e.jsx(c,{display:"flex",justifyContent:"center",alignItems:"center",sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Ticket Status"})}),e.jsx(a,{sx:{color:"text.secondary"},children:e.jsx(C,{variant:"soft",color:s.status==="Open"&&"info"||s.status==="Closed"&&"default"||"default",children:s.status})})]}),e.jsxs(a,{flexDirection:"column",alignItems:"center",sx:{p:1,display:"flex",width:"100%"},children:[e.jsx(c,{display:"flex",justifyContent:"center",alignItems:"center",gap:1,sx:{typography:"subtitle2",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Ticket Priority"})}),e.jsx(a,{sx:{color:"text.secondary"},children:e.jsx(C,{variant:"soft",color:(s==null?void 0:s.priority)==="Low"&&"success"||(s==null?void 0:s.priority)==="Medium"&&"warning"||(s==null?void 0:s.priority)==="Hight"&&"error"||"default",children:s==null?void 0:s.priority})})]})]}),e.jsx(a,{sx:{pt:5},children:e.jsx(p,{onClick:r.onTrue,disabled:s.status==="Closed",variant:"contained",startIcon:e.jsx(P,{icon:"carbon:checkmark-filled"}),children:"Mark as Closed"})}),e.jsx(g,{title:"Users"}),e.jsx(a,{fullWidth:!0,alignItems:"center",sx:{p:3},children:e.jsx(he,{users:s==null?void 0:s.mentions})})]})]}),e.jsx(xe,{open:r.value,onClose:r.onFalse,handler:()=>d(s.id)})]})}const ge=T.object({message:T.string().min(1,{message:"Name is required!"})}),fe=({ticket:s,messages:r})=>{const t={message:""},d=se({resolver:re(ge),defaultValues:t}),{reset:i,handleSubmit:n,formState:{isSubmitting:o}}=d,m=w(),{mutate:S}=I({mutationFn:l=>f.post(y.tickets.createMessage,l),onSuccess:async()=>{v.success("Message Has Been Created!"),i()},onSettled:async()=>{const{id:l}=s;await m.invalidateQueries({queryKey:["tickets"]}),await m.invalidateQueries({queryKey:["tickets",l]})},onError:l=>{}}),B=n(async l=>{try{if(s.id){const x={...l};x.ticketId=s.id,S(x)}}catch(x){console.log(x)}}),F=e.jsxs(a,{sx:{pr:4,pl:4,pb:4,pt:2},children:[e.jsx(ne,{sx:{p:0,m:0,[`& .${ie.root}:before`]:{flex:0,padding:0}},children:e.jsx(N,{fillContent:!0,sx:{height:360},children:r==null?void 0:r.map((l,x)=>{const E=x===r.length-1;return e.jsxs(te,{children:[e.jsxs(le,{children:[e.jsx(de,{color:"primary"}),E?null:e.jsx(ce,{})]}),e.jsx(me,{children:e.jsxs(a,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs(a,{children:[e.jsx(q,{variant:"subtitle2",children:l.createdBy.firstName}),e.jsx(a,{sx:{color:"text.disabled",typography:"caption",mt:.5},children:l.message})]}),e.jsx(a,{sx:{color:"text.disabled",typography:"caption"},children:H(l.createTime)})]})})]},l.id)})})}),e.jsx(ae,{methods:d,onSubmit:B,children:e.jsxs(c,{justifyContent:"flex-end",spacing:1,sx:{marginTop:1},children:[e.jsx(c,{sx:{typography:"subtitle1",width:"100%",marginBottom:1},children:e.jsx("div",{children:"Send Reply:"})}),e.jsx(oe.Text,{label:"Enter Description",name:"message",multiline:!0,rows:3,sx:{mb:2}}),e.jsx(a,{children:e.jsx(p,{type:"submit",variant:"contained",endIcon:e.jsx(P,{icon:"iconamoon:send-fill"}),children:"Send"})})]})})]});return e.jsxs(D,{children:[e.jsx(g,{title:"Previous Messages"}),F]})};function ye({ticket:s}){return e.jsxs(R,{children:[e.jsx(G,{links:[{name:"Dashboard",href:j.dashboard.root},{name:"Tickets",href:j.dashboard.tickets.root},{name:"Ticket Details"}],sx:{mb:{xs:3,md:5}}}),e.jsxs(h,{container:!0,spacing:3,children:[e.jsx(h,{xs:12,md:9,children:e.jsx(c,{spacing:3,direction:{xs:"column-reverse",md:"column"},children:e.jsx(je,{ticket:s})})}),e.jsx(h,{xs:12,md:3,children:e.jsx(fe,{ticket:s,messages:s==null?void 0:s.messages})})]})]})}const be={title:`Ticket details | Dashboard - ${O.site.name}`};function ys(){const{id:s=""}=A(),r=Q({queryKey:["tickets",s],queryFn:async()=>{const{data:t}=await f.get(y.tickets.details+s);return t}});return r.isPending||r.isLoading?e.jsx($,{}):r.isError?e.jsx(z,{route:j.dashboard.tickets.root}):e.jsxs(e.Fragment,{children:[e.jsx(K,{children:e.jsxs("title",{children:[" ",be.title]})}),e.jsx(ye,{ticket:r.data})]})}export{ys as default};
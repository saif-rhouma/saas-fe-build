import{r as o,dn as K,dp as y,dm as j,dq as U,j as t,dT as W,p as O,am as P,S as C,B as F,aS as d,T as G,dd as R,e as V}from"./index-BUkc7Fsf.js";import{z as l,u as J,t as T,a as X,F as r}from"./form-provider-QqBD3CGU.js";import{u as Y,E as Z}from"./error-block-BMnFuAQR.js";import{u as N}from"./useMutation-Bu3_VPGY.js";import{b as _}from"./upload-avatar-CurHEeLB.js";import"./image-CCdN6W1s.js";import"./editor-DdXAAWE4.js";import{a as k,b,D as ss}from"./DialogContent-Cp4PxtSn.js";import{D as ts}from"./DialogTitle-3bRr4EI2.js";import{C as es}from"./Chip-CIa4MnwU.js";import{L as as}from"./LoadingButton-D4ACVqvX.js";const is=l.object({topic:l.string().min(1,{message:"Topic is required!"}),description:l.string().min(1,{message:"Description is required!"}),memberId:l.number().min(1,{message:"Member is required!"}),priority:l.string().min(1,{message:"Priority is required!"}),mentions:l.any()}),js=({currentTicket:a,quotation:n,open:E,onClose:c})=>{//! Upload Logic START
const p=o.useRef(),[m,M]=o.useState([]),[q,S]=o.useState([]),[u,f]=o.useState(),I=o.useCallback(s=>{const e=s[0];f(()=>e)},[]),$=()=>{f(null)},x=K(),L={headers:{"content-type":"multipart/form-data"}};//! Upload Logic END
const{mutate:B}=N({mutationFn:s=>y.post(j.files.upload,s,L),onSuccess:async({data:s})=>{const{name:e}=s;if(e){const{current:i}=p;i.file=e,n&&(i.quotationId=n.id),await w(i)}return s},onSettled:async()=>{await x.invalidateQueries({queryKey:["tickets-images"]})},onError:s=>{console.log(s)}}),{mutate:w}=N({mutationFn:s=>y.post(j.tickets.create,s),onSuccess:async()=>{if(U.success("New Ticket Has Been Created!"),await x.invalidateQueries({queryKey:["tickets"]}),n){const{id:s}=n;await x.invalidateQueries({queryKey:["quotation",s]})}Q()},onSettled:async()=>{p.current={},f(null),c()},onError:s=>{console.log(s)}}),A=o.useMemo(()=>({topic:(a==null?void 0:a.topic)||"",description:(a==null?void 0:a.description)||"",memberId:(a==null?void 0:a.memberId)||null,priority:(a==null?void 0:a.priority)||null,multiSelect:[]}),[a]),v=J({resolver:T(is),defaultValues:A}),{reset:Q,watch:os,setValue:D,handleSubmit:z,formState:{isSubmitting:ns}}=v,H=z(async s=>{try{if(u){p.current={...s};const e=new FormData;e.append("file",u),e.append("category","Ticket"),await B(e)}else n&&(s.quotationId=n.id),await w(s)}catch(e){console.error(e)}}),h=Y({queryKey:["members"],queryFn:async()=>{const{data:s}=await y.get(j.staff.list);return M(s),S(s),s}});return h.isPending||h.isLoading?t.jsx(W,{}):h.isError?t.jsx(Z,{route:O.dashboard.staff.root}):t.jsxs(k,{fullWidth:!0,maxWidth:"md",open:E,onClose:c,children:[t.jsx(ts,{children:"Add New Ticket"}),t.jsxs(X,{methods:v,onSubmit:H,children:[t.jsxs(b,{children:[t.jsx(P,{}),t.jsxs(C,{spacing:2,sx:{pt:4,pb:1},children:[t.jsxs(F,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsx(r.Text,{fullWidth:!0,label:"Enter Topic",name:"topic",sx:{flexGrow:1}}),t.jsx(r.Text,{fullWidth:!0,label:"Description",name:"description",sx:{flexGrow:1}}),t.jsxs(r.Select,{name:"priority",label:"Select a Priority",sx:{width:420,textTransform:"capitalize"},children:[t.jsx(d,{value:"Low",children:"Low"}),t.jsx(d,{value:"Medium",children:"Medium"}),t.jsx(d,{value:"Hight",children:"Hight"})]}),t.jsx(r.Select,{name:"memberId",label:"Select a Member",sx:{width:420,textTransform:"capitalize"},onChange:s=>{const{value:e}=s.target;if(e){const i=[...m.filter(g=>g.id!==e)];S(i),D("memberId",e),D("mentions",[])}},children:m.map(s=>t.jsx(d,{value:s.id,children:`${s==null?void 0:s.firstName} ${(s==null?void 0:s.lastName)||""}`},s.id))}),t.jsx(r.Autocomplete,{name:"mentions",label:"Users",placeholder:"Add Users",multiple:!0,disableCloseOnSelect:!0,options:q.map(s=>s),getOptionLabel:s=>`${s==null?void 0:s.firstName} ${(s==null?void 0:s.lastName)||""}`,renderOption:(s,e)=>o.createElement("li",{...s,key:e.id},`${e==null?void 0:e.firstName} ${(e==null?void 0:e.lastName)||""}`),renderTags:(s,e)=>s.map((i,g)=>o.createElement(es,{...e({index:g}),key:i.id,label:`${i==null?void 0:i.firstName} ${(i==null?void 0:i.lastName)||""}`,size:"small",color:"info",variant:"soft"}))})]}),t.jsx(F,{children:t.jsxs(C,{spacing:1.5,children:[t.jsx(G,{variant:"subtitle2",children:"Attachments"}),t.jsx(R,{sx:{maxHeight:360,p:2},children:t.jsx(_,{value:u,onDrop:I,onDelete:$})})]})})]})]}),t.jsxs(ss,{children:[t.jsx(as,{type:"submit",variant:"contained",children:"Save"}),t.jsx(V,{color:"inherit",variant:"outlined",onClick:c,children:"Cancel"})]})]})]})};export{js as T};

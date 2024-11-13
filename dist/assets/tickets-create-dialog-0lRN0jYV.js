import{r as o,dn as P,dp as y,dm as j,dq as W,j as t,dT as A,p as G,am as O,S as m,B as d,aS as R,T as N,I as S,e as V}from"./index-CuWEjZ-G.js";import{z as l,u as J,t as b,a as X,F as r}from"./form-provider-C1xS_hNP.js";import{u as Y,E as Z}from"./error-block-XCP8Xdky.js";import{u as M}from"./useMutation-D-9-TWzs.js";import"./image--hG_jsIt.js";import"./editor-C8JBU4_J.js";import{U as _}from"./upload-box-ad-DkAE6uOo.js";import{a as k,b as T,D as ss}from"./DialogContent-BvQOSjqo.js";import{D as ts}from"./DialogTitle-CwCOmkp8.js";import{C as es}from"./Chip-qREBfbaX.js";import{L as as}from"./LoadingButton-DZjqLJO9.js";const is=l.object({topic:l.string().min(1,{message:"Topic is required!"}),description:l.string().min(1,{message:"Description is required!"}),memberId:l.number().min(1,{message:"Member is required!"}),priority:l.string().min(1,{message:"Priority is required!"}),mentions:l.any()}),js=({currentTicket:a,quotation:n,open:q,onClose:c})=>{//! Upload Logic START
const p=o.useRef(),[w,L]=o.useState([]),[$,C]=o.useState([]),[u,x]=o.useState(),B=o.useCallback(s=>{const e=s[0];x(()=>e)},[]),Q=()=>{x(null)},f=P(),U={headers:{"content-type":"multipart/form-data"}};//! Upload Logic END
const{mutate:z}=M({mutationFn:s=>y.post(j.files.upload,s,U),onSuccess:async({data:s})=>{const{name:e}=s;if(e){const{current:i}=p;i.file=e,n&&(i.quotationId=n.id),await v(i)}return s},onSettled:async()=>{await f.invalidateQueries({queryKey:["tickets-images"]})},onError:s=>{console.log(s)}}),{mutate:v}=M({mutationFn:s=>y.post(j.tickets.create,s),onSuccess:async()=>{if(W.success("New Ticket Has Been Created!"),await f.invalidateQueries({queryKey:["tickets"]}),n){const{id:s}=n;await f.invalidateQueries({queryKey:["quotation",s]})}I()},onSettled:async()=>{p.current={},x(null),c()},onError:s=>{console.log(s)}}),D=o.useMemo(()=>({topic:(a==null?void 0:a.topic)||"",description:(a==null?void 0:a.description)||"",memberId:(a==null?void 0:a.memberId)||null,priority:(a==null?void 0:a.priority)||"Medium",multiSelect:[]}),[a]),F=J({resolver:b(is),defaultValues:D}),{reset:I,watch:os,setValue:E,handleSubmit:H,formState:{isSubmitting:ns}}=F,K=H(async s=>{try{if(u){p.current={...s};const e=new FormData;e.append("file",u),e.append("category","Ticket"),await z(e)}else n&&(s.quotationId=n.id),await v(s)}catch(e){console.error(e)}}),h=Y({queryKey:["members"],queryFn:async()=>{const{data:s}=await y.get(j.staff.list);return L(s),C(s),s}});return h.isPending||h.isLoading?t.jsx(A,{}):h.isError?t.jsx(Z,{route:G.dashboard.staff.root}):t.jsxs(k,{fullWidth:!0,maxWidth:"md",open:q,onClose:c,children:[t.jsx(ts,{children:"New Ticket"}),t.jsxs(X,{methods:F,onSubmit:K,children:[t.jsxs(T,{children:[t.jsx(O,{}),t.jsxs(m,{spacing:2,sx:{pt:4,pb:1},children:[t.jsxs(d,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[t.jsx(r.Text,{fullWidth:!0,label:"Subject",name:"topic",sx:{flexGrow:1},placeholder:"Enter Subject",InputLabelProps:{shrink:!0}}),t.jsx(r.Select,{name:"memberId",label:"Ticket to",placeholder:"Select User",sx:{width:420,textTransform:"capitalize"},onChange:s=>{const{value:e}=s.target;if(e){const i=[...w.filter(g=>g.id!==e)];C(i),E("memberId",e),E("mentions",[])}},children:w.map(s=>t.jsx(R,{value:s.id,children:`${s==null?void 0:s.firstName} ${(s==null?void 0:s.lastName)||""}`},s.id))}),t.jsx(r.Autocomplete,{name:"mentions",label:"Sharing With",placeholder:"Search User",multiple:!0,disableCloseOnSelect:!0,options:$.map(s=>s),getOptionLabel:s=>`${s==null?void 0:s.firstName} ${(s==null?void 0:s.lastName)||""}`,renderOption:(s,e)=>o.createElement("li",{...s,key:e.id},`${e==null?void 0:e.firstName} ${(e==null?void 0:e.lastName)||""}`),renderTags:(s,e)=>s.map((i,g)=>o.createElement(es,{...e({index:g}),key:i.id,label:`${i==null?void 0:i.firstName} ${(i==null?void 0:i.lastName)||""}`,size:"small",color:"info",variant:"soft"}))}),t.jsx(m,{spacing:1.5,flexDirection:"row",sx:{height:"56px"},children:t.jsx(_,{file:u,handleDelete:Q,handleDropSingleFile:B})})]}),t.jsx(r.RadioGroup,{row:!0,name:"priority",label:t.jsx(N,{sx:{fontSize:12,pr:2,pl:2},variant:"subtitle2",children:"Priority"}),options:[{label:t.jsxs(d,{sx:{display:"flex",justifyContent:"center",gap:1},children:[t.jsx(S,{icon:"solar:double-alt-arrow-down-bold-duotone",sx:{color:"success.main"}}),"Low"]}),value:"Low"},{label:t.jsxs(d,{sx:{display:"flex",justifyContent:"center",gap:1},children:[t.jsx(S,{icon:"solar:double-alt-arrow-right-bold-duotone",sx:{color:"warning.main"}}),"Medium"]}),value:"Medium"},{label:t.jsxs(d,{sx:{display:"flex",justifyContent:"center",gap:1},children:[t.jsx(S,{icon:"solar:double-alt-arrow-up-bold-duotone",sx:{color:"error.main"}}),"Hight"]}),value:"Hight"}],sx:{gap:4,flexGrow:1,pl:2}}),t.jsxs(m,{spacing:1.5,children:[t.jsx(N,{variant:"subtitle2",children:"Description"}),t.jsx(r.Editor,{name:"description",sx:{maxHeight:480}})]})]})]}),t.jsxs(ss,{children:[t.jsx(as,{type:"submit",variant:"contained",children:"Send"}),t.jsx(V,{color:"inherit",variant:"outlined",onClick:()=>{I(D),c()},children:"Cancel"})]})]})]})};export{js as T};

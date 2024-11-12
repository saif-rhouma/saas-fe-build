import{r as l,dn as I,dp as S,dm as b,aW as o,dq as M,j as s,n as N,B as T,S as r,T as Q,e as Y}from"./index-KK-mXlr9.js";import{z as j,u as G,t as K,a as L,F as d}from"./form-provider-B-2G1ur0.js";import{u as F}from"./useMutation-BLbhE-7U.js";import{U as P}from"./upload-box-ad-DRmpCmoQ.js";import"./image-DBvfg_3r.js";import"./editor-BLpnXJL9.js";import{s as q}from"./schema-helper-ZDfKx4k_.js";import{a as U,b as V,D as _}from"./DialogContent-DEOZCbff.js";import{D as $}from"./DialogTitle-BbIsmimy.js";import{L as z}from"./LoadingButton-C_dnO_6P.js";const J=j.object({title:j.string().min(1,{message:"Title is required!"}),description:j.string().min(1,{message:"Description is required!"}),date:q.date({message:{required_error:"Date is required!"}}),time:q.date({message:{required_error:"Time is required!"}})}),de=({currentReminder:e,quotation:n,open:v,onClose:m,handler:D})=>{const c=l.useRef(e);//! Upload Logic START
const[p,x]=l.useState(),C=l.useCallback(t=>{const i=t[0];x(()=>i)},[]),E=()=>{x(null)},f=I(),k={headers:{"content-type":"multipart/form-data"}},{mutate:B}=F({mutationFn:t=>S.post(b.files.upload,t,k),onSuccess:async({data:t})=>{const{name:i}=t;if(i){const{current:a}=c;a.file=i,delete a.time,delete a.date,e?await D({id:e.id,payload:a}):await y(a)}return t},onSettled:async()=>{x(null),await f.invalidateQueries({queryKey:["reminders-images"]})},onError:t=>{console.log(t)}});//! Upload Logic END
const h=l.useMemo(()=>({title:(e==null?void 0:e.title)||"",description:(e==null?void 0:e.description)||"",date:(e==null?void 0:e.reminderDate)||o(),time:(e==null?void 0:e.reminderDate)||o().add(1,"h")}),[e]);l.useEffect(()=>{e&&u(h)},[e]);const w=G({resolver:K(J),defaultValues:h}),{mutate:y}=F({mutationFn:t=>S.post(b.reminders.create,t),onSuccess:async()=>{if(M.success("New Reminder Has Been Created!"),await f.invalidateQueries({queryKey:["reminders"]}),n){const{id:t}=n;await f.invalidateQueries({queryKey:["quotation",t]})}c.current={}},onSettled:async()=>{m()},onError:t=>{console.log(t)}}),{reset:u,watch:O,setValue:X,handleSubmit:H,formState:{isSubmitting:Z}}=w,W=H(async t=>{try{const i=o(t.date).format("YYYY-MM-DD"),a=o(t.time).format("HH:mm:ss"),A=o(`${i}T${a}`).toISOString();if(t.reminderDate=A,p){c.current={...t};const g=new FormData;g.append("file",p),g.append("category","Reminder"),await B(g)}else e?await D({id:e.id,payload:t}):(n&&(t.quotationId=n.id),await y(t));u()}catch(i){console.error(i)}});return s.jsxs(U,{fullWidth:!0,maxWidth:"md",open:v,onClose:m,children:[s.jsx($,{children:e?"Edit Reminder":"New Reminder"}),s.jsxs(L,{methods:w,onSubmit:W,children:[s.jsxs(V,{children:[s.jsxs(N,{variant:"outlined",severity:"info",children:[s.jsx(T,{component:"span",sx:{typography:"subtitle2",display:{xs:"none",sm:"inline-flex"},mr:1},children:"Note:"}),"An email will be sent to the customer with the details added in this reminder."]}),s.jsxs(r,{spacing:2,sx:{pt:4,pb:1},children:[s.jsxs(T,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[s.jsx(d.DatePicker,{fullWidth:!0,label:"Date",name:"date",sx:{flexGrow:1},minDate:o()}),s.jsx(d.TimePicker,{label:"Time",name:"time",sx:{flexGrow:1}}),s.jsx(d.Text,{fullWidth:!0,name:"title",label:"Title",sx:{flexGrow:1},placeholder:"Enter Title",InputLabelProps:{shrink:!0}}),s.jsx(r,{spacing:1.5,children:s.jsx(r,{spacing:1.5,flexDirection:"row",sx:{height:"56px"},children:s.jsx(P,{file:p,handleDelete:E,handleDropSingleFile:C})})})]}),s.jsxs(r,{spacing:1.5,children:[s.jsx(Q,{variant:"subtitle2",children:"Description"}),s.jsx(d.Editor,{name:"description",sx:{maxHeight:480}})]})]})]}),s.jsxs(_,{children:[s.jsx(z,{type:"submit",variant:"contained",children:e?"Save Changes":"Send"}),s.jsx(Y,{color:"inherit",variant:"outlined",onClick:()=>{u(h),m()},children:"Cancel"})]})]})]})};export{de as R};

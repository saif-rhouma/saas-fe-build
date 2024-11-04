import{r as o,dn as M,dp as S,dm as w,aW as l,dq as Q,j as s,am as Y,S as y,B as b,T as A,dd as I,e as K}from"./index-1iE_pzdz.js";import{z as h,u as L,t as N,a as P,F as d}from"./form-provider-Bk4GtwIc.js";import{u as v}from"./useMutation-BSVHjL8_.js";import{b as U}from"./upload-avatar-CqNbza97.js";import"./image-8x8gVsOX.js";import"./editor-DqsCUEj-.js";import{s as F}from"./schema-helper-DzP9Jl7a.js";import{a as V,b as _,D as $}from"./DialogContent-uKdN3zVH.js";import{D as z}from"./DialogTitle-Bw_E_Avm.js";import{L as J}from"./LoadingButton-Bg3a4Y8E.js";const O=h.object({title:h.string().min(1,{message:"title is required!"}),description:h.string().min(1,{message:"Description is required!"}),date:F.date({message:{required_error:"Date is required!"}}),time:F.date({message:{required_error:"Time is required!"}})}),me=({currentReminder:e,quotation:n,open:T,onClose:r,handler:m})=>{const c=o.useRef(e);//! Upload Logic START
const[p,f]=o.useState(),q=o.useCallback(t=>{const a=t[0];f(()=>a)},[]),C=()=>{f(null)},x=M(),E={headers:{"content-type":"multipart/form-data"}},{mutate:W}=v({mutationFn:t=>S.post(w.files.upload,t,E),onSuccess:async({data:t})=>{const{name:a}=t;if(a){const{current:i}=c;i.file=a,delete i.time,delete i.date,e?await m({id:e.id,payload:i}):await m(i)}return t},onSettled:async()=>{f(null),await x.invalidateQueries({queryKey:["reminders-images"]})},onError:t=>{console.log(t)}});//! Upload Logic END
const g=o.useMemo(()=>({title:(e==null?void 0:e.title)||"",description:(e==null?void 0:e.description)||"",date:(e==null?void 0:e.reminderDate)||l(),time:(e==null?void 0:e.reminderDate)||l()}),[e]);o.useEffect(()=>{e&&j(g)},[e]);const D=L({resolver:N(O),defaultValues:g}),{mutate:k}=v({mutationFn:t=>S.post(w.reminders.create,t),onSuccess:async()=>{if(Q.success("New Reminder Has Been Created!"),await x.invalidateQueries({queryKey:["reminders"]}),n){const{id:t}=n;await x.invalidateQueries({queryKey:["quotation",t]})}},onSettled:async()=>{r()},onError:t=>{console.log(t)}}),{reset:j,watch:X,setValue:Z,handleSubmit:B,formState:{isSubmitting:R}}=D,H=B(async t=>{try{const a=l(t.date).format("YYYY-MM-DD"),i=l(t.time).format("HH:mm:ss"),G=l(`${a}T${i}`).toISOString();if(t.reminderDate=G,p){c.current={...t};const u=new FormData;u.append("file",p),u.append("category","Reminder"),await W(u)}else e?await m({id:e.id,payload:t}):(n&&(t.quotationId=n.id),await k(t));r(),c.current={},j()}catch(a){console.error(a)}});return s.jsxs(V,{fullWidth:!0,maxWidth:"md",open:T,onClose:r,children:[s.jsx(z,{children:e?"Edit Reminder":"Add Reminder"}),s.jsxs(P,{methods:D,onSubmit:H,children:[s.jsxs(_,{children:[s.jsx(Y,{}),s.jsxs(y,{spacing:2,sx:{pt:4,pb:1},children:[s.jsxs(b,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[s.jsx(d.DatePicker,{fullWidth:!0,label:"Date",name:"date",sx:{flexGrow:1}}),s.jsx(d.TimePicker,{label:"Time",name:"time",sx:{flexGrow:1}}),s.jsx(d.Text,{fullWidth:!0,name:"title",label:"Title",sx:{flexGrow:1}}),s.jsx(d.Text,{fullWidth:!0,name:"description",label:"Description",sx:{flexGrow:1}})]}),s.jsx(b,{children:s.jsxs(y,{spacing:1.5,children:[s.jsx(A,{variant:"subtitle2",children:"Attachments"}),s.jsx(I,{sx:{maxHeight:360,p:2},children:s.jsx(U,{value:p,onDrop:q,onDelete:C})})]})})]})]}),s.jsxs($,{children:[s.jsx(J,{type:"submit",variant:"contained",children:e?"Save Changes":"Save"}),s.jsx(K,{color:"inherit",variant:"outlined",onClick:r,children:"Cancel"})]})]})]})};export{me as R};

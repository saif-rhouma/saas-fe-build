import{j as s,am as L,S as X,e as C,g as xe,i as Y,r as f,dm as he,dn as q,dl as N,dp as B,p as z,aB as ue,B as w,b9 as ge,I as M,C as fe,dq as V,b5 as J,T as je}from"./index-Cs0Sdxyr.js";import{z as g,u as Z,t as _,a as P,F as v}from"./form-provider-eXyauyxJ.js";import{u as G}from"./useMutation-Dzc6--kZ.js";import"./image-Cq9K1zAl.js";import"./editor-CT3ylhik.js";import{C as ve}from"./confirm-dialog-BRKbYDyG.js";import{P as be}from"./product-Item-button-PEQX2E2g.js";import{b as ye}from"./upload-avatar-BmI9utwN.js";import{a as ee,b as se,D as ae}from"./DialogContent-Crbj6g6G.js";import{D as te}from"./DialogTitle-DrSBT5S6.js";import{L as W}from"./LoadingButton-BC7HOYkj.js";import{A as Ie,a as Ae,b as Ee}from"./AccordionSummary-BakUZ8lX.js";import{F as Q}from"./FormControlLabel-nLpLCzjO.js";const we=({open:a,onClose:b,handleDrop:c,handleUpload:r,handleDelete:o,file:t})=>s.jsxs(ee,{open:a,onClose:b,children:[s.jsx(te,{children:"Upload Product Image"}),s.jsx(L,{}),s.jsx(se,{sx:{p:1},children:s.jsx(X,{spacing:1,children:s.jsx(ye,{value:t,onDrop:c,onDelete:o})})}),s.jsxs(ae,{children:[s.jsx(W,{type:"submit",variant:"contained",onClick:r,children:"Upload"}),s.jsx(C,{color:"inherit",variant:"outlined",onClick:b,children:"Cancel"})]})]}),Ce=g.object({name:g.string().min(1,{message:"Name is required!"}),price:g.number().min(1,{message:"Price should not be $0.00"}),description:g.string(),categoryId:g.number(),isActive:g.boolean()});function Qe({currentProduct:a,productsImages:b,categories:c}){const r=xe(),o=Y(),t=Y(),i=f.useMemo(()=>{var e;return{name:(a==null?void 0:a.name)||"",description:(a==null?void 0:a.description)||"",images:(a==null?void 0:a.images)||[],categoryId:((e=a==null?void 0:a.category)==null?void 0:e.id)||null,isActive:(a==null?void 0:a.isActive)===void 0?!0:a==null?void 0:a.isActive}},[a]),[n,x]=f.useState(!0),[l,m]=f.useState([]),[p,S]=f.useState(!1),[h,y]=f.useState(),[D,A]=f.useState(),j=Z({resolver:_(Ce),defaultValues:i}),{reset:d,watch:F,setValue:U,handleSubmit:H,formState:{isSubmitting:$}}=j;f.useEffect(()=>{a&&(d(i),y(a==null?void 0:a.image))},[a,i,d]);const E=H(async e=>{try{if(h&&(e.image=h),a!=null&&a.id){const{id:I}=a;await ce({id:I,payload:e})}else await re(e)}catch(I){console.error(I)}}),u=()=>{const e=new FormData;e.append("file",D),le(e)},K=f.useCallback(e=>{h===e?y():y(e)},[h]),T=f.useCallback(e=>{const I=e[0];A(I)},[]),O=()=>{A(null)},R=he(),oe={headers:{"content-type":"multipart/form-data"}},{mutate:le}=G({mutationFn:e=>q.post(N.files.upload,e,oe),onSuccess:async()=>{B.success("New Image Has Been Uploaded!")},onSettled:async()=>{await R.invalidateQueries({queryKey:["products-images"]}),A(null),t.onFalse()},onError:e=>{console.log(e)}}),{mutate:re}=G({mutationFn:e=>q.post(N.products.create,e),onSuccess:async()=>{B.success("New Product Has Been Created!"),d(),r.push(z.dashboard.product.root)},onSettled:async()=>{await R.invalidateQueries({queryKey:["products"]}),t.onFalse()},onError:e=>{console.log(e)}}),{mutate:ce}=G({mutationFn:({id:e,payload:I})=>q.patch(N.products.edit+e,I),onSuccess:async()=>{B.success("Product Has Been Modified!"),d(),r.push(z.dashboard.product.root)},onSettled:async()=>{await R.invalidateQueries({queryKey:["products"]}),t.onFalse()},onError:e=>{console.log(e)}}),me=e=>{if(l.some(k=>k===e)){const k=l.filter(pe=>pe!==e);m(k)}else{const k=[...l,e];m(k)}},{mutate:de}=G({mutationFn:e=>q.delete(N.files.deletes,e),onSuccess:async()=>{B.success(`${l.length} has been deleted!`),await R.invalidateQueries({queryKey:["products-images"]})},onSettled:()=>{o.onFalse()},onError:e=>{console.log(e)}});return s.jsxs(s.Fragment,{children:[s.jsx(ue,{children:s.jsxs(P,{methods:j,onSubmit:E,children:[s.jsxs(X,{spacing:4,sx:{p:3},display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsxs(w,{columnGap:2,rowGap:3,display:"flex",flexDirection:"column",children:[s.jsx(v.Text,{fullWidth:!0,label:"Product Name",name:"name"}),s.jsx(v.Text,{label:"Description",name:"description",multiline:!0,rows:3,inputProps:{maxLength:250}}),s.jsx(v.Text,{fullWidth:!0,type:"number",label:"Product Price",name:"price"}),(c==null?void 0:c.length)>0&&s.jsx(v.Select,{name:"categoryId",label:"Category",sx:{textTransform:"capitalize"},children:c.map(e=>s.jsx(ge,{value:e.id,children:`${e==null?void 0:e.name}`},e.id))}),a&&s.jsx(v.Switch,{name:"isActive",label:"Is Active?"})]}),s.jsx(w,{children:s.jsx(w,{sx:{borderRadius:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:s.jsxs(Ie,{defaultExpanded:a,expanded:n,onChange:()=>{x(!n)},children:[s.jsx(Ae,{expandIcon:s.jsx(M,{icon:"eva:arrow-ios-downward-fill"}),children:s.jsxs(w,{sx:{display:"flex",alignItems:"center"},children:[!p&&s.jsx(Q,{sx:{ml:1,mr:1},onClick:e=>e.stopPropagation(),onFocus:e=>e.stopPropagation(),control:s.jsx(C,{variant:"outlined",onClick:()=>{x(!0),t.onToggle()},startIcon:s.jsx(M,{icon:"eva:cloud-upload-fill"}),children:"Upload Image"})}),s.jsx(Q,{sx:{ml:1,mr:1},onClick:e=>e.stopPropagation(),onFocus:e=>e.stopPropagation(),control:s.jsx(C,{variant:"outlined",color:"error",onClick:e=>{S(!0),x(!0),l.length>0&&o.onToggle()},startIcon:s.jsx(M,{icon:"solar:trash-bin-trash-bold"}),children:p?l.length>0?`Deletes ${l.length} Images`:"Select Image(s)":"Delete"})}),p&&s.jsx(Q,{sx:{ml:1,mr:1},onClick:e=>e.stopPropagation(),onFocus:e=>e.stopPropagation(),control:s.jsx(C,{variant:"outlined",color:"warning",startIcon:s.jsx(M,{icon:"ooui:cancel"}),onClick:()=>{S(!1),m([])},children:"Cancel Deletion"})})]})}),s.jsx(L,{}),s.jsx(Ee,{children:s.jsx(w,{spacing:2,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",md:"repeat(6, 1fr)"},children:b.map(e=>s.jsx(be,{image:fe.site.serverFileHost+e.name,handleClick:K,handleDelete:me,payload:e.name,selected:e.name===h,deletedAction:p,deletedImages:l}))})})]})})})]}),s.jsx(w,{spacing:4,sx:{p:3},display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:s.jsxs(w,{display:"flex",gap:2,height:50,children:[s.jsx(W,{type:"submit",variant:"contained",children:"Save"}),s.jsx(C,{variant:"outlined",children:"Cancel"})]})})]})}),s.jsx(we,{open:t.value,onClose:t.onFalse,file:D,handleUpload:u,handleDrop:T,handleDelete:O}),s.jsx(ve,{open:o.value,onClose:o.onFalse,title:"Delete",content:`Are you sure want to delete ${l.length} Images?`,action:s.jsx(C,{variant:"contained",color:"error",onClick:()=>{de({data:{files:l}}),m([]),S(!1)},children:"Delete"})})]})}var ie={exports:{}};(function(a,b){(function(c,r){a.exports=r()})(V,()=>{return c={705:o=>{o.exports=function(t,i){const n=[];return i.length===0?n.push({text:t,highlight:!1}):i[0][0]>0&&n.push({text:t.slice(0,i[0][0]),highlight:!1}),i.forEach((x,l)=>{const m=x[0],p=x[1];n.push({text:t.slice(m,p),highlight:!0}),l===i.length-1?p<t.length&&n.push({text:t.slice(p,t.length),highlight:!1}):p<i[l+1][0]&&n.push({text:t.slice(p,i[l+1][0]),highlight:!1})}),n}}},r={},function o(t){var i=r[t];if(i!==void 0)return i.exports;var n=r[t]={exports:{}};return c[t](n,n.exports,o),n.exports}(705);var c,r})})(ie);var Se=ie.exports;const We=J(Se);var ne={exports:{}};(function(a,b){(function(c,r){a.exports=r()})(V,()=>{return c={772:(o,t,i)=>{const n=i(826).remove,x=/[.*+?^${}()|[\]\\]/g,l=/[a-z0-9_]/i,m=/\s+/;o.exports=function(p,S,h){var y,D;D={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},y=(y=h)||{},Object.keys(y).forEach(d=>{D[d]=!!y[d]}),h=D;const A=Array.from(p).map(d=>n(d));let j=A.join("");return(S=n(S)).trim().split(m).filter(d=>d.length>0).reduce((d,F)=>{const U=F.length,H=!h.insideWords&&l.test(F[0])?"\\b":"",$=new RegExp(H+F.replace(x,"\\$&"),"i");let E,u;if(E=$.exec(j),h.requireMatchAll&&E===null)return j="",[];for(;E;){u=E.index;const K=U-A.slice(u,u+U).join("").length,T=u-A.slice(0,u).join("").length,O=[u+T,u+U+T+K];if(O[0]!==O[1]&&d.push(O),j=j.slice(0,u)+new Array(U+1).join(" ")+j.slice(u+U),!h.findAllOccurrences)break;E=$.exec(j)}return d},[]).sort((d,F)=>d[0]-F[0])}},826:o=>{var t={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},i=Object.keys(t).join("|"),n=new RegExp(i,"g"),x=new RegExp(i,""),l=function(m){return m.replace(n,function(p){return t[p]})};o.exports=l,o.exports.has=function(m){return!!m.match(x)},o.exports.remove=l}},r={},function o(t){var i=r[t];if(i!==void 0)return i.exports;var n=r[t]={exports:{}};return c[t](n,n.exports,o),n.exports}(772);var c,r})})(ne);var De=ne.exports;const Ye=J(De),Fe=g.object({rating:g.number().min(1,"Rating must be greater than or equal to 1!"),name:g.string().min(1,{message:"Name is required!"}),review:g.string().min(1,{message:"Review is required!"}),email:g.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function ze({onClose:a,...b}){const c={rating:0,review:"",name:"",email:""},r=Z({mode:"all",resolver:_(Fe),defaultValues:c}),{reset:o,handleSubmit:t,formState:{isSubmitting:i}}=r,n=t(async l=>{try{await new Promise(m=>setTimeout(m,500)),o(),a(),console.info("DATA",l)}catch(m){console.error(m)}}),x=f.useCallback(()=>{a(),o()},[a,o]);return s.jsx(ee,{onClose:a,...b,children:s.jsxs(P,{methods:r,onSubmit:n,children:[s.jsx(te,{children:" Add Review "}),s.jsxs(se,{children:[s.jsxs("div",{children:[s.jsx(je,{variant:"body2",sx:{mb:1},children:"Your review about this product:"}),s.jsx(v.Rating,{name:"rating"})]}),s.jsx(v.Text,{name:"review",label:"Review *",multiline:!0,rows:3,sx:{mt:3}}),s.jsx(v.Text,{name:"name",label:"Name *",sx:{mt:3}}),s.jsx(v.Text,{name:"email",label:"Email *",sx:{mt:3}})]}),s.jsxs(ae,{children:[s.jsx(C,{color:"inherit",variant:"outlined",onClick:x,children:"Cancel"}),s.jsx(W,{type:"submit",variant:"contained",loading:i,children:"Post"})]})]})})}export{ze as P,Qe as a,Ye as m,We as p};

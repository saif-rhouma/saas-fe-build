import{j as s,am as L,S as V,e as C,g as xe,i as W,r as f,dn as he,dp as q,dm as N,dq as M,p as z,cY as ge,B as A,aS as ue,I as B,C as fe,be as X,bd as J,T as je}from"./index-CuWEjZ-G.js";import{z as j,u as Z,t as _,a as P,F as I}from"./form-provider-C1xS_hNP.js";import{u as G}from"./useMutation-D-9-TWzs.js";import"./image--hG_jsIt.js";import"./editor-C8JBU4_J.js";import{C as ve}from"./confirm-dialog-DpXOSuti.js";import{P as ye}from"./product-Item-button-DJ-p7oKr.js";import{b as be}from"./upload-avatar-ByWFD0be.js";import{a as ee,b as se,D as ae}from"./DialogContent-BvQOSjqo.js";import{D as ne}from"./DialogTitle-CwCOmkp8.js";import{L as Q}from"./LoadingButton-DZjqLJO9.js";import{A as Ie,a as Ee,b as we}from"./AccordionSummary-CXCF2GJJ.js";import{F as K}from"./FormControlLabel-QWd6EiOd.js";const Ae=({open:a,onClose:y,handleDrop:c,handleUpload:r,handleDelete:i,file:n})=>s.jsxs(ee,{open:a,onClose:y,children:[s.jsx(ne,{children:"Upload Product Image"}),s.jsx(L,{}),s.jsx(se,{sx:{p:1},children:s.jsx(V,{spacing:1,children:s.jsx(be,{value:n,onDrop:c,onDelete:i})})}),s.jsxs(ae,{children:[s.jsx(Q,{type:"submit",variant:"contained",onClick:r,children:"Upload"}),s.jsx(C,{color:"inherit",variant:"outlined",onClick:y,children:"Cancel"})]})]}),Ce=j.object({name:j.string().min(1,{message:"Name is required!"}),price:j.number().min(1,{message:"Price should not be $0.00"}),description:j.string(),categoryId:j.number().optional()});function Ke({currentProduct:a,productsImages:y,categories:c}){const r=xe(),i=W(),n=W(),t=f.useMemo(()=>{var u;const e={name:(a==null?void 0:a.name)||"",description:(a==null?void 0:a.description)||"",price:a==null?void 0:a.price,images:(a==null?void 0:a.images)||[],categoryId:(u=a==null?void 0:a.category)==null?void 0:u.id};return(a==null?void 0:a.categoryId)==null||(e.categoryId=parseInt(a==null?void 0:a.categoryId,10)),e},[a]),[o,x]=f.useState(!0),[l,m]=f.useState([]),[p,S]=f.useState(!1),[h,b]=f.useState(),[D,E]=f.useState(),v=Z({resolver:_(Ce),defaultValues:t}),{reset:d,watch:F,setValue:U,handleSubmit:H,formState:{isSubmitting:Y}}=v;f.useEffect(()=>{a&&(d(t),b(a==null?void 0:a.image))},[a,t,d]);const w=H(async e=>{try{if(h&&(e.image=h),a!=null&&a.id){const{id:u}=a;await ce({id:u,payload:e})}else await re(e)}catch(u){console.error(u)}}),g=()=>{const e=new FormData;e.append("file",D),le(e)},$=f.useCallback(e=>{h===e?b():b(e)},[h]),T=f.useCallback(e=>{const u=e[0];E(u)},[]),O=()=>{E(null)},R=he(),ie={headers:{"content-type":"multipart/form-data"}},{mutate:le}=G({mutationFn:e=>q.post(N.files.upload,e,ie),onSuccess:async()=>{M.success("New Image Has Been Uploaded!")},onSettled:async()=>{await R.invalidateQueries({queryKey:["products-images"]}),E(null),n.onFalse()},onError:e=>{console.log(e)}}),{mutate:re}=G({mutationFn:e=>q.post(N.products.create,e),onSuccess:async()=>{M.success("New Product Has Been Created!"),d(),r.push(z.dashboard.product.root)},onSettled:async()=>{await R.invalidateQueries({queryKey:["products"]}),n.onFalse()},onError:e=>{console.log(e)}}),{mutate:ce}=G({mutationFn:({id:e,payload:u})=>q.patch(N.products.edit+e,u),onSuccess:async()=>{M.success("Product Has Been Modified!"),d(),r.push(z.dashboard.product.root)},onSettled:async()=>{await R.invalidateQueries({queryKey:["products"]}),n.onFalse()},onError:e=>{console.log(e)}}),me=e=>{if(l.some(k=>k===e)){const k=l.filter(pe=>pe!==e);m(k)}else{const k=[...l,e];m(k)}},{mutate:de}=G({mutationFn:e=>q.delete(N.files.deletes,e),onSuccess:async()=>{M.success(`${l.length} has been deleted!`),await R.invalidateQueries({queryKey:["products-images"]})},onSettled:()=>{i.onFalse()},onError:e=>{console.log(e)}});return s.jsxs(s.Fragment,{children:[s.jsx(ge,{children:s.jsxs(P,{methods:v,onSubmit:w,children:[s.jsxs(V,{spacing:4,sx:{p:3},display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsxs(A,{columnGap:2,rowGap:3,display:"flex",flexDirection:"column",children:[s.jsx(I.Text,{fullWidth:!0,label:"Product Name",name:"name"}),s.jsx(I.Text,{label:"Description",name:"description",multiline:!0,rows:3,inputProps:{maxLength:250}}),s.jsx(I.Text,{fullWidth:!0,type:"number",label:"Product Price",name:"price"}),(c==null?void 0:c.length)>0&&s.jsx(I.Select,{name:"categoryId",label:"Category",sx:{textTransform:"capitalize"},children:c.map(e=>s.jsx(ue,{value:e.id,children:`${e==null?void 0:e.name}`},e.id))})]}),s.jsx(A,{children:s.jsx(A,{sx:{borderRadius:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:s.jsxs(Ie,{defaultExpanded:a,expanded:o,onChange:()=>{x(!o)},children:[s.jsx(Ee,{expandIcon:s.jsx(B,{icon:"eva:arrow-ios-downward-fill"}),children:s.jsxs(A,{sx:{display:"flex",alignItems:"center"},children:[!p&&s.jsx(K,{sx:{ml:1,mr:1},onClick:e=>e.stopPropagation(),onFocus:e=>e.stopPropagation(),control:s.jsx(C,{variant:"outlined",onClick:()=>{x(!0),n.onToggle()},startIcon:s.jsx(B,{icon:"eva:cloud-upload-fill"}),children:"Upload Image"})}),s.jsx(K,{sx:{ml:1,mr:1},onClick:e=>e.stopPropagation(),onFocus:e=>e.stopPropagation(),control:s.jsx(C,{variant:"outlined",color:"error",onClick:e=>{S(!0),x(!0),l.length>0&&i.onToggle()},startIcon:s.jsx(B,{icon:"solar:trash-bin-trash-bold"}),children:p?l.length>0?`Deletes ${l.length} Images`:"Select Image(s)":"Delete"})}),p&&s.jsx(K,{sx:{ml:1,mr:1},onClick:e=>e.stopPropagation(),onFocus:e=>e.stopPropagation(),control:s.jsx(C,{variant:"outlined",color:"warning",startIcon:s.jsx(B,{icon:"ooui:cancel"}),onClick:()=>{S(!1),m([])},children:"Cancel Deletion"})})]})}),s.jsx(L,{}),s.jsx(we,{children:s.jsx(A,{spacing:2,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",md:"repeat(6, 1fr)"},children:y.map(e=>s.jsx(ye,{image:fe.site.serverFileHost+e.name,handleClick:$,handleDelete:me,payload:e.name,selected:e.name===h,deletedAction:p,deletedImages:l}))})})]})})})]}),s.jsx(A,{spacing:4,sx:{p:3},display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:s.jsxs(A,{display:"flex",gap:2,height:50,children:[s.jsx(Q,{type:"submit",variant:"contained",children:"Save"}),s.jsx(C,{variant:"outlined",children:"Cancel"})]})})]})}),s.jsx(Ae,{open:n.value,onClose:n.onFalse,file:D,handleUpload:g,handleDrop:T,handleDelete:O}),s.jsx(ve,{open:i.value,onClose:i.onFalse,title:"Delete",content:`Are you sure want to delete ${l.length} Images?`,action:s.jsx(C,{variant:"contained",color:"error",onClick:()=>{de({data:{files:l}}),m([]),S(!1)},children:"Delete"})})]})}var te={exports:{}};(function(a,y){(function(c,r){a.exports=r()})(X,()=>{return c={705:i=>{i.exports=function(n,t){const o=[];return t.length===0?o.push({text:n,highlight:!1}):t[0][0]>0&&o.push({text:n.slice(0,t[0][0]),highlight:!1}),t.forEach((x,l)=>{const m=x[0],p=x[1];o.push({text:n.slice(m,p),highlight:!0}),l===t.length-1?p<n.length&&o.push({text:n.slice(p,n.length),highlight:!1}):p<t[l+1][0]&&o.push({text:n.slice(p,t[l+1][0]),highlight:!1})}),o}}},r={},function i(n){var t=r[n];if(t!==void 0)return t.exports;var o=r[n]={exports:{}};return c[n](o,o.exports,i),o.exports}(705);var c,r})})(te);var Se=te.exports;const Qe=J(Se);var oe={exports:{}};(function(a,y){(function(c,r){a.exports=r()})(X,()=>{return c={772:(i,n,t)=>{const o=t(826).remove,x=/[.*+?^${}()|[\]\\]/g,l=/[a-z0-9_]/i,m=/\s+/;i.exports=function(p,S,h){var b,D;D={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},b=(b=h)||{},Object.keys(b).forEach(d=>{D[d]=!!b[d]}),h=D;const E=Array.from(p).map(d=>o(d));let v=E.join("");return(S=o(S)).trim().split(m).filter(d=>d.length>0).reduce((d,F)=>{const U=F.length,H=!h.insideWords&&l.test(F[0])?"\\b":"",Y=new RegExp(H+F.replace(x,"\\$&"),"i");let w,g;if(w=Y.exec(v),h.requireMatchAll&&w===null)return v="",[];for(;w;){g=w.index;const $=U-E.slice(g,g+U).join("").length,T=g-E.slice(0,g).join("").length,O=[g+T,g+U+T+$];if(O[0]!==O[1]&&d.push(O),v=v.slice(0,g)+new Array(U+1).join(" ")+v.slice(g+U),!h.findAllOccurrences)break;w=Y.exec(v)}return d},[]).sort((d,F)=>d[0]-F[0])}},826:i=>{var n={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},t=Object.keys(n).join("|"),o=new RegExp(t,"g"),x=new RegExp(t,""),l=function(m){return m.replace(o,function(p){return n[p]})};i.exports=l,i.exports.has=function(m){return!!m.match(x)},i.exports.remove=l}},r={},function i(n){var t=r[n];if(t!==void 0)return t.exports;var o=r[n]={exports:{}};return c[n](o,o.exports,i),o.exports}(772);var c,r})})(oe);var De=oe.exports;const We=J(De),Fe=j.object({rating:j.number().min(1,"Rating must be greater than or equal to 1!"),name:j.string().min(1,{message:"Name is required!"}),review:j.string().min(1,{message:"Review is required!"}),email:j.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function ze({onClose:a,...y}){const c={rating:0,review:"",name:"",email:""},r=Z({mode:"all",resolver:_(Fe),defaultValues:c}),{reset:i,handleSubmit:n,formState:{isSubmitting:t}}=r,o=n(async l=>{try{await new Promise(m=>setTimeout(m,500)),i(),a(),console.info("DATA",l)}catch(m){console.error(m)}}),x=f.useCallback(()=>{a(),i()},[a,i]);return s.jsx(ee,{onClose:a,...y,children:s.jsxs(P,{methods:r,onSubmit:o,children:[s.jsx(ne,{children:" Add Review "}),s.jsxs(se,{children:[s.jsxs("div",{children:[s.jsx(je,{variant:"body2",sx:{mb:1},children:"Your review about this product:"}),s.jsx(I.Rating,{name:"rating"})]}),s.jsx(I.Text,{name:"review",label:"Review *",multiline:!0,rows:3,sx:{mt:3}}),s.jsx(I.Text,{name:"name",label:"Name *",sx:{mt:3}}),s.jsx(I.Text,{name:"email",label:"Email *",sx:{mt:3}})]}),s.jsxs(ae,{children:[s.jsx(C,{color:"inherit",variant:"outlined",onClick:x,children:"Cancel"}),s.jsx(Q,{type:"submit",variant:"contained",loading:t,children:"Post"})]})]})})}export{ze as P,Ke as a,We as m,Qe as p};
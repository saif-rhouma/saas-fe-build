import{br as z,j as s,a5 as L,S as X,e as S,W as ge,Y as K,r as w,dp as ue,dq as q,dn as N,dr as M,p as Q,cZ as fe,B as C,a7 as je,I as B,C as ve,av as Z,au as J,T as we}from"./index-3kUlxXkm.js";import{z as u,u as _,t as P,a as ee,F as I}from"./form-provider-Ddj1YnLe.js";import{u as $}from"./useMutation-DWyFExRk.js";import"./image-BEDFCDEn.js";import"./editor-BMX_0Xq6.js";import{C as ye}from"./confirm-dialog-DcDyWDMb.js";import{P as Ie}from"./product-Item-button-aUsvkzkp.js";import{b as be}from"./upload-avatar-BbAzKhJK.js";import{a as se,b as ae,D as ie}from"./DialogContent-BZuUPSmG.js";import{D as te}from"./DialogTitle-DD3683-9.js";import{L as Y}from"./LoadingButton-BtwwM36s.js";import{A as Ae,a as Ee,b as Ce}from"./AccordionSummary-CGy62VTu.js";import{F as W}from"./FormControlLabel-DWtRb9VA.js";const Se=({open:a,onClose:b,handleDrop:c,handleUpload:r,handleDelete:i,file:n})=>{const{t}=z("products");return s.jsxs(se,{open:a,onClose:b,children:[s.jsx(te,{children:t("createView.uploadImageDialog.title")}),s.jsx(L,{}),s.jsx(ae,{sx:{p:1},children:s.jsx(X,{spacing:1,children:s.jsx(be,{value:n,onDrop:c,onDelete:i})})}),s.jsxs(ie,{children:[s.jsx(Y,{type:"submit",variant:"contained",onClick:r,children:t("createView.uploadImageDialog.upload")}),s.jsx(S,{color:"inherit",variant:"outlined",onClick:b,children:t("createView.uploadImageDialog.cancel")})]})]})},De=u.object({name:u.string().min(1,{message:"Name is required!"}),price:u.number().min(1,{message:"Price should not be $0.00"}),description:u.string(),categoryId:u.number().optional(),isActive:u.boolean().optional()});function Ke({currentProduct:a,productsImages:b,categories:c}){const r=ge(),{t:i}=z("products"),n=K(),t=K(),o=w.useMemo(()=>{var x;const e={name:(a==null?void 0:a.name)||"",description:(a==null?void 0:a.description)||"",price:(a==null?void 0:a.price)??null,images:(a==null?void 0:a.images)||[],categoryId:(x=a==null?void 0:a.category)==null?void 0:x.id,isActive:(a==null?void 0:a.isActive)===void 0?!0:a==null?void 0:a.isActive};return(a==null?void 0:a.categoryId)==null||(e.categoryId=parseInt(a==null?void 0:a.categoryId,10)),e},[a]),[h,m]=w.useState(!0),[l,d]=w.useState([]),[A,y]=w.useState(!1),[f,E]=w.useState(),[D,j]=w.useState(),p=_({resolver:P(De),defaultValues:o}),{reset:v,watch:F,setValue:G,handleSubmit:V,formState:{isSubmitting:U}}=p;w.useEffect(()=>{a&&(v(o),E(a==null?void 0:a.image))},[a,o,v]);const g=V(async e=>{try{if(f&&(e.image=f),a!=null&&a.id){const{id:x}=a;await de({id:x,payload:e})}else await me(e)}catch(x){console.error(x)}}),H=()=>{const e=new FormData;e.append("file",D),ce(e)},k=w.useCallback(e=>{f===e?E():E(e)},[f]),O=w.useCallback(e=>{const x=e[0];j(x)},[]),le=()=>{j(null)},R=ue(),re={headers:{"content-type":"multipart/form-data"}},{mutate:ce}=$({mutationFn:e=>q.post(N.files.upload,e,re),onSuccess:async()=>{M.success("New Image Has Been Uploaded!")},onSettled:async()=>{await R.invalidateQueries({queryKey:["products-images"]}),j(null),t.onFalse()},onError:e=>{console.log(e)}}),{mutate:me}=$({mutationFn:e=>q.post(N.products.create,e),onSuccess:async()=>{M.success("New Product Has Been Created!"),v(),r.push(Q.dashboard.product.root)},onSettled:async()=>{await R.invalidateQueries({queryKey:["products"]}),t.onFalse()},onError:e=>{console.log(e)}}),{mutate:de}=$({mutationFn:({id:e,payload:x})=>q.patch(N.products.edit+e,x),onSuccess:async()=>{M.success("Product Has Been Modified!"),v(),r.push(Q.dashboard.product.root)},onSettled:async()=>{await R.invalidateQueries({queryKey:["products"]}),t.onFalse()},onError:e=>{console.log(e)}}),pe=e=>{if(l.some(T=>T===e)){const T=l.filter(he=>he!==e);d(T)}else{const T=[...l,e];d(T)}},{mutate:xe}=$({mutationFn:e=>q.delete(N.files.deletes,e),onSuccess:async()=>{M.success(`${l.length} has been deleted!`),await R.invalidateQueries({queryKey:["products-images"]})},onSettled:()=>{n.onFalse()},onError:e=>{console.log(e)}});return s.jsxs(s.Fragment,{children:[s.jsx(fe,{children:s.jsxs(ee,{methods:p,onSubmit:g,children:[s.jsxs(X,{spacing:4,sx:{p:3},display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[s.jsxs(C,{columnGap:2,rowGap:3,display:"flex",flexDirection:"column",children:[s.jsx(I.Text,{fullWidth:!0,label:i("createView.productName"),name:"name"}),s.jsx(I.Text,{label:i("createView.description"),name:"description",multiline:!0,rows:3,inputProps:{maxLength:250}}),s.jsx(I.Text,{fullWidth:!0,type:"number",label:i("createView.price"),name:"price",onChange:e=>{const{value:x}=e.target;G("price",parseInt(x,10))}}),(c==null?void 0:c.length)>0&&s.jsx(I.Select,{name:"categoryId",label:i("createView.category"),sx:{textTransform:"capitalize"},children:c.map(e=>s.jsx(je,{value:e.id,children:`${e==null?void 0:e.name}`},e.id))}),a&&s.jsx(I.Switch,{name:"isActive",label:"Is Active?"})]}),s.jsx(C,{children:s.jsx(C,{sx:{borderRadius:1,overflow:"hidden",border:e=>`solid 1px ${e.vars.palette.divider}`},children:s.jsxs(Ae,{defaultExpanded:a,expanded:h,onChange:()=>{m(!h)},children:[s.jsx(Ee,{expandIcon:s.jsx(B,{icon:"eva:arrow-ios-downward-fill"}),children:s.jsxs(C,{sx:{display:"flex",alignItems:"center"},children:[!A&&s.jsx(W,{sx:{ml:1,mr:1},onClick:e=>e.stopPropagation(),onFocus:e=>e.stopPropagation(),control:s.jsx(S,{variant:"outlined",onClick:()=>{m(!0),t.onToggle()},startIcon:s.jsx(B,{icon:"eva:cloud-upload-fill"}),children:i("createView.uploadImage")})}),s.jsx(W,{sx:{ml:1,mr:1},onClick:e=>e.stopPropagation(),onFocus:e=>e.stopPropagation(),control:s.jsx(S,{variant:"outlined",color:"error",onClick:e=>{y(!0),m(!0),l.length>0&&n.onToggle()},startIcon:s.jsx(B,{icon:"solar:trash-bin-trash-bold"}),children:A?l.length>0?`${i("createView.deletes")} ${l.length} ${i("createView.images")}`:i("createView.selectImages"):i("createView.delete")})}),A&&s.jsx(W,{sx:{ml:1,mr:1},onClick:e=>e.stopPropagation(),onFocus:e=>e.stopPropagation(),control:s.jsx(S,{variant:"outlined",color:"warning",startIcon:s.jsx(B,{icon:"ooui:cancel"}),onClick:()=>{y(!1),d([])},children:i("createView.cancelDeletion")})})]})}),s.jsx(L,{}),s.jsx(Ce,{children:s.jsx(C,{spacing:2,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",md:"repeat(6, 1fr)"},children:b.map(e=>s.jsx(Ie,{image:ve.site.serverFileHost+e.name,handleClick:k,handleDelete:pe,payload:e.name,selected:e.name===f,deletedAction:A,deletedImages:l}))})})]})})})]}),s.jsx(C,{spacing:4,sx:{p:3},display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:s.jsxs(C,{display:"flex",gap:2,height:50,children:[s.jsx(Y,{type:"submit",variant:"contained",children:i("createView.save")}),s.jsx(S,{variant:"outlined",children:i("createView.cancel")})]})})]})}),s.jsx(Se,{open:t.value,onClose:t.onFalse,file:D,handleUpload:H,handleDrop:O,handleDelete:le}),s.jsx(ye,{open:n.value,onClose:n.onFalse,title:"Delete",content:`Are you sure want to delete ${l.length} Images?`,action:s.jsx(S,{variant:"contained",color:"error",onClick:()=>{xe({data:{files:l}}),d([]),y(!1)},children:i("createView.delete")})})]})}var ne={exports:{}};(function(a,b){(function(c,r){a.exports=r()})(Z,()=>{return c={705:i=>{i.exports=function(n,t){const o=[];return t.length===0?o.push({text:n,highlight:!1}):t[0][0]>0&&o.push({text:n.slice(0,t[0][0]),highlight:!1}),t.forEach((h,m)=>{const l=h[0],d=h[1];o.push({text:n.slice(l,d),highlight:!0}),m===t.length-1?d<n.length&&o.push({text:n.slice(d,n.length),highlight:!1}):d<t[m+1][0]&&o.push({text:n.slice(d,t[m+1][0]),highlight:!1})}),o}}},r={},function i(n){var t=r[n];if(t!==void 0)return t.exports;var o=r[n]={exports:{}};return c[n](o,o.exports,i),o.exports}(705);var c,r})})(ne);var Fe=ne.exports;const Qe=J(Fe);var oe={exports:{}};(function(a,b){(function(c,r){a.exports=r()})(Z,()=>{return c={772:(i,n,t)=>{const o=t(826).remove,h=/[.*+?^${}()|[\]\\]/g,m=/[a-z0-9_]/i,l=/\s+/;i.exports=function(d,A,y){var f,E;E={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},f=(f=y)||{},Object.keys(f).forEach(p=>{E[p]=!!f[p]}),y=E;const D=Array.from(d).map(p=>o(p));let j=D.join("");return(A=o(A)).trim().split(l).filter(p=>p.length>0).reduce((p,v)=>{const F=v.length,G=!y.insideWords&&m.test(v[0])?"\\b":"",V=new RegExp(G+v.replace(h,"\\$&"),"i");let U,g;if(U=V.exec(j),y.requireMatchAll&&U===null)return j="",[];for(;U;){g=U.index;const H=F-D.slice(g,g+F).join("").length,k=g-D.slice(0,g).join("").length,O=[g+k,g+F+k+H];if(O[0]!==O[1]&&p.push(O),j=j.slice(0,g)+new Array(F+1).join(" ")+j.slice(g+F),!y.findAllOccurrences)break;U=V.exec(j)}return p},[]).sort((p,v)=>p[0]-v[0])}},826:i=>{var n={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},t=Object.keys(n).join("|"),o=new RegExp(t,"g"),h=new RegExp(t,""),m=function(l){return l.replace(o,function(d){return n[d]})};i.exports=m,i.exports.has=function(l){return!!l.match(h)},i.exports.remove=m}},r={},function i(n){var t=r[n];if(t!==void 0)return t.exports;var o=r[n]={exports:{}};return c[n](o,o.exports,i),o.exports}(772);var c,r})})(oe);var Ue=oe.exports;const ze=J(Ue),Oe=u.object({rating:u.number().min(1,"Rating must be greater than or equal to 1!"),name:u.string().min(1,{message:"Name is required!"}),review:u.string().min(1,{message:"Review is required!"}),email:u.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function Le({onClose:a,...b}){const c={rating:0,review:"",name:"",email:""},r=_({mode:"all",resolver:P(Oe),defaultValues:c}),{reset:i,handleSubmit:n,formState:{isSubmitting:t}}=r,o=n(async m=>{try{await new Promise(l=>setTimeout(l,500)),i(),a(),console.info("DATA",m)}catch(l){console.error(l)}}),h=w.useCallback(()=>{a(),i()},[a,i]);return s.jsx(se,{onClose:a,...b,children:s.jsxs(ee,{methods:r,onSubmit:o,children:[s.jsx(te,{children:" Add Review "}),s.jsxs(ae,{children:[s.jsxs("div",{children:[s.jsx(we,{variant:"body2",sx:{mb:1},children:"Your review about this product:"}),s.jsx(I.Rating,{name:"rating"})]}),s.jsx(I.Text,{name:"review",label:"Review *",multiline:!0,rows:3,sx:{mt:3}}),s.jsx(I.Text,{name:"name",label:"Name *",sx:{mt:3}}),s.jsx(I.Text,{name:"email",label:"Email *",sx:{mt:3}})]}),s.jsxs(ie,{children:[s.jsx(S,{color:"inherit",variant:"outlined",onClick:h,children:"Cancel"}),s.jsx(Y,{type:"submit",variant:"contained",loading:t,children:"Post"})]})]})})}export{Le as P,Ke as a,ze as m,Qe as p};

import{j as e,D as Q,S as W,e as M,l as ae,o as ie,r as E,dI as te,dJ as O,dH as F,dK as R,p as K,aD as ne,B as I,C as B,I as oe,T as Y,dL as X,bN as z}from"./index-MU8Aef1d.js";import{z as j,u as L,t as V,a as $,F as w}from"./form-provider-ButI2dhd.js";import{u as T}from"./useMutation-BNt8bUTF.js";import"./image-BL6GZRKO.js";import"./editor-DkQPNGFJ.js";import{P as H}from"./product-Item-button-KzXTZvtc.js";import{b as le}from"./upload-avatar-BeMZjnZ7.js";import{a as J,b as Z,D as _}from"./DialogContent-B-P_KFZo.js";import{D as P}from"./DialogTitle-DkbYXjww.js";import{L as G}from"./LoadingButton-Bo4_xExy.js";import{A as re,a as ce,b as me}from"./AccordionSummary-CzD5udgj.js";const de=({open:s,onClose:v,handleDrop:c,handleUpload:o,handleDelete:l,file:i})=>e.jsxs(J,{open:s,onClose:v,children:[e.jsx(P,{children:"Upload Product Image"}),e.jsx(Q,{}),e.jsx(Z,{sx:{p:1},children:e.jsx(W,{spacing:1,children:e.jsx(le,{value:i,onDrop:c,onDelete:l})})}),e.jsxs(_,{children:[e.jsx(G,{type:"submit",variant:"contained",onClick:o,children:"Upload"}),e.jsx(M,{color:"inherit",variant:"outlined",onClick:v,children:"Cancel"})]})]}),pe=j.object({name:j.string().min(1,{message:"Name is required!"}),price:j.number().min(1,{message:"Price should not be $0.00"}),isActive:j.boolean()});function Ce({currentProduct:s,productsImages:v}){const c=ae(),o=ie(),l=E.useMemo(()=>({name:(s==null?void 0:s.name)||"",price:(s==null?void 0:s.price)||0,images:(s==null?void 0:s.images)||[],isActive:s==null?void 0:s.isActive}),[s]),[i,t]=E.useState(),[n,p]=E.useState(),m=L({resolver:V(pe),defaultValues:l}),{reset:r,watch:u,setValue:k,handleSubmit:b,formState:{isSubmitting:S}}=m;E.useEffect(()=>{s&&(r(l),t(s==null?void 0:s.image))},[s,l,r]);const C=b(async a=>{try{if(i&&(a.image=i),s!=null&&s.id){const{id:x}=s;await h({id:x,payload:a})}else await A(a)}catch(x){console.error(x)}}),U=()=>{const a=new FormData;a.append("file",n),D(a)},f=E.useCallback(a=>{i===a?t():t(a)},[i]),d=E.useCallback(a=>{const x=a[0];p(x)},[]),y=()=>{p(null)},g=te(),N={headers:{"content-type":"multipart/form-data"}},{mutate:D}=T({mutationFn:a=>O.post(F.files.upload,a,N),onSuccess:async()=>{R.success("New Image Has Been Uploaded!")},onSettled:async()=>{await g.invalidateQueries({queryKey:["products-images"]}),p(null),o.onFalse()},onError:a=>{console.log(a)}}),{mutate:A}=T({mutationFn:a=>O.post(F.products.create,a),onSuccess:async()=>{R.success("New Product Has Been Created!"),r(),c.push(K.dashboard.product.root)},onSettled:async()=>{await g.invalidateQueries({queryKey:["products"]}),o.onFalse()},onError:a=>{console.log(a)}}),{mutate:h}=T({mutationFn:({id:a,payload:x})=>O.patch(F.products.edit+a,x),onSuccess:async()=>{R.success("Product Has Been Modified!"),r(),c.push(K.dashboard.product.root)},onSettled:async()=>{await g.invalidateQueries({queryKey:["products"]}),o.onFalse()},onError:a=>{console.log(a)}}),{mutate:q}=T({mutationFn:a=>O.delete(F.files.delete+a),onSuccess:async()=>{R.success("Image Has been Deleted!")},onSettled:async()=>{await g.invalidateQueries({queryKey:["products-images"]})},onError:a=>{console.log(a)}});return e.jsxs(e.Fragment,{children:[e.jsx(ne,{children:e.jsx($,{methods:m,onSubmit:C,children:e.jsxs(W,{spacing:4,sx:{p:3},children:[e.jsxs(I,{columnGap:2,rowGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},children:[e.jsx(w.Text,{fullWidth:!0,label:"Product Name",name:"name"}),e.jsx(w.Text,{fullWidth:!0,type:"number",label:"Product Price",name:"price"})]}),s&&s.image===i&&e.jsx(I,{spacing:2,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",md:"repeat(12, 1fr)"},children:e.jsx(H,{image:B.site.serverFileHost+s.image,handleClick:f,selected:s.image===i})}),e.jsx(I,{sx:{borderRadius:1,overflow:"hidden",border:a=>`solid 1px ${a.vars.palette.divider}`},children:e.jsxs(re,{children:[e.jsx(ce,{expandIcon:e.jsx(oe,{icon:"eva:arrow-ios-downward-fill"}),children:e.jsx(Y,{children:"Select Icon"})}),e.jsx(Q,{}),e.jsx(me,{children:e.jsxs(I,{spacing:2,gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",md:"repeat(12, 1fr)"},children:[v.map(a=>e.jsx(H,{image:B.site.serverFileHost+a.name,handleClick:f,handleDelete:q,payload:a.name,selected:a.name===i})),e.jsx(H,{image:`${B.site.basePath}/assets/upload-img.png`,handleClick:()=>o.onToggle()})]})})]})}),e.jsx(w.Switch,{name:"isActive",label:"Is Active?"}),e.jsx(I,{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",children:e.jsxs(I,{display:"flex",gap:2,height:50,children:[e.jsx(G,{type:"submit",variant:"contained",children:"Save"}),e.jsx(M,{variant:"outlined",children:"Cancel"})]})})]})})}),e.jsx(de,{open:o.value,onClose:o.onFalse,file:n,handleUpload:U,handleDrop:d,handleDelete:y})]})}var ee={exports:{}};(function(s,v){(function(c,o){s.exports=o()})(X,()=>{return c={705:l=>{l.exports=function(i,t){const n=[];return t.length===0?n.push({text:i,highlight:!1}):t[0][0]>0&&n.push({text:i.slice(0,t[0][0]),highlight:!1}),t.forEach((p,m)=>{const r=p[0],u=p[1];n.push({text:i.slice(r,u),highlight:!0}),m===t.length-1?u<i.length&&n.push({text:i.slice(u,i.length),highlight:!1}):u<t[m+1][0]&&n.push({text:i.slice(u,t[m+1][0]),highlight:!1})}),n}}},o={},function l(i){var t=o[i];if(t!==void 0)return t.exports;var n=o[i]={exports:{}};return c[i](n,n.exports,l),n.exports}(705);var c,o})})(ee);var he=ee.exports;const Ue=z(he);var se={exports:{}};(function(s,v){(function(c,o){s.exports=o()})(X,()=>{return c={772:(l,i,t)=>{const n=t(826).remove,p=/[.*+?^${}()|[\]\\]/g,m=/[a-z0-9_]/i,r=/\s+/;l.exports=function(u,k,b){var S,C;C={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},S=(S=b)||{},Object.keys(S).forEach(d=>{C[d]=!!S[d]}),b=C;const U=Array.from(u).map(d=>n(d));let f=U.join("");return(k=n(k)).trim().split(r).filter(d=>d.length>0).reduce((d,y)=>{const g=y.length,N=!b.insideWords&&m.test(y[0])?"\\b":"",D=new RegExp(N+y.replace(p,"\\$&"),"i");let A,h;if(A=D.exec(f),b.requireMatchAll&&A===null)return f="",[];for(;A;){h=A.index;const q=g-U.slice(h,h+g).join("").length,a=h-U.slice(0,h).join("").length,x=[h+a,h+g+a+q];if(x[0]!==x[1]&&d.push(x),f=f.slice(0,h)+new Array(g+1).join(" ")+f.slice(h+g),!b.findAllOccurrences)break;A=D.exec(f)}return d},[]).sort((d,y)=>d[0]-y[0])}},826:l=>{var i={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},t=Object.keys(i).join("|"),n=new RegExp(t,"g"),p=new RegExp(t,""),m=function(r){return r.replace(n,function(u){return i[u]})};l.exports=m,l.exports.has=function(r){return!!r.match(p)},l.exports.remove=m}},o={},function l(i){var t=o[i];if(t!==void 0)return t.exports;var n=o[i]={exports:{}};return c[i](n,n.exports,l),n.exports}(772);var c,o})})(se);var xe=se.exports;const De=z(xe),ue=j.object({rating:j.number().min(1,"Rating must be greater than or equal to 1!"),name:j.string().min(1,{message:"Name is required!"}),review:j.string().min(1,{message:"Review is required!"}),email:j.string().min(1,{message:"Email is required!"}).email({message:"Email must be a valid email address!"})});function Oe({onClose:s,...v}){const c={rating:0,review:"",name:"",email:""},o=L({mode:"all",resolver:V(ue),defaultValues:c}),{reset:l,handleSubmit:i,formState:{isSubmitting:t}}=o,n=i(async m=>{try{await new Promise(r=>setTimeout(r,500)),l(),s(),console.info("DATA",m)}catch(r){console.error(r)}}),p=E.useCallback(()=>{s(),l()},[s,l]);return e.jsx(J,{onClose:s,...v,children:e.jsxs($,{methods:o,onSubmit:n,children:[e.jsx(P,{children:" Add Review "}),e.jsxs(Z,{children:[e.jsxs("div",{children:[e.jsx(Y,{variant:"body2",sx:{mb:1},children:"Your review about this product:"}),e.jsx(w.Rating,{name:"rating"})]}),e.jsx(w.Text,{name:"review",label:"Review *",multiline:!0,rows:3,sx:{mt:3}}),e.jsx(w.Text,{name:"name",label:"Name *",sx:{mt:3}}),e.jsx(w.Text,{name:"email",label:"Email *",sx:{mt:3}})]}),e.jsxs(_,{children:[e.jsx(M,{color:"inherit",variant:"outlined",onClick:p,children:"Cancel"}),e.jsx(G,{type:"submit",variant:"contained",loading:t,children:"Post"})]})]})})}export{Oe as P,Ce as a,De as m,Ue as p};

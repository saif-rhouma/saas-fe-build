import{aw as G,r as J,aC as K,aD as Q,aA as o,ba as X,j as r,aE as Y,aF as Z,bc as ee}from"./index-ElVqIGcB.js";import{F as oe}from"./FormControl-T65SLQDL.js";import{I as se}from"./InputLabel-D_pXLzl4.js";import{S as te,I as le,F as re,O as ae}from"./Select-_pqpK2mU.js";import{F as ne}from"./FormHelperText-CTeFjG1s.js";const ie=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],de={standard:le,filled:re,outlined:ae},pe=i=>{const{classes:s}=i;return Z({root:["root"]},ee,s)},ue=G(oe,{name:"MuiTextField",slot:"Root",overridesResolver:(i,s)=>s.root})({}),be=J.forwardRef(function(s,x){const d=K({props:s,name:"MuiTextField"}),{autoComplete:w,autoFocus:h=!1,children:j,className:L,color:b="primary",defaultValue:S,disabled:F=!1,error:I=!1,FormHelperTextProps:E,fullWidth:p=!1,helperText:u,id:g,InputLabelProps:a,inputProps:H,InputProps:M,inputRef:N,label:t,maxRows:O,minRows:W,multiline:T=!1,name:_,onBlur:k,onChange:q,onFocus:B,placeholder:U,required:v=!1,rows:V,select:c=!1,SelectProps:m,type:$,value:P,variant:n="outlined"}=d,A=Q(d,ie),C=o({},d,{autoFocus:h,color:b,disabled:F,error:I,fullWidth:p,multiline:T,required:v,select:c,variant:n}),D=pe(C),l={};n==="outlined"&&(a&&typeof a.shrink<"u"&&(l.notched=a.shrink),l.label=t),c&&((!m||!m.native)&&(l.id=void 0),l["aria-describedby"]=void 0);const e=X(g),f=u&&e?`${e}-helper-text`:void 0,R=t&&e?`${e}-label`:void 0,z=de[n],y=r.jsx(z,o({"aria-describedby":f,autoComplete:w,autoFocus:h,defaultValue:S,fullWidth:p,multiline:T,name:_,rows:V,maxRows:O,minRows:W,type:$,value:P,id:e,inputRef:N,onBlur:k,onChange:q,onFocus:B,placeholder:U,inputProps:H},l,M));return r.jsxs(ue,o({className:Y(D.root,L),disabled:F,error:I,fullWidth:p,ref:x,required:v,color:b,variant:n,ownerState:C},A,{children:[t!=null&&t!==""&&r.jsx(se,o({htmlFor:e,id:R},a,{children:t})),c?r.jsx(te,o({"aria-describedby":f,id:e,labelId:R,value:P,input:y},m,{children:j})):y,u&&r.jsx(ne,o({id:f},E,{children:u}))]}))});export{be as T};

import{aU as D,r as G,a_ as J,a$ as K,aY as o,by as Q,j as r,b0 as X,b1 as Z,c1 as ee}from"./index-DxrsDIwY.js";import{F as oe}from"./FormControl-CC-u2HkW.js";import{I as se}from"./InputLabel-CQVMsmZY.js";import{S as te,I as le,F as re,O as ae}from"./Select-eQVewVvt.js";import{F as ne}from"./FormHelperText-DMsDqsw2.js";const ie=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],de={standard:le,filled:re,outlined:ae},pe=i=>{const{classes:s}=i;return Z({root:["root"]},ee,s)},ue=D(oe,{name:"MuiTextField",slot:"Root",overridesResolver:(i,s)=>s.root})({}),be=G.forwardRef(function(s,x){const d=J({props:s,name:"MuiTextField"}),{autoComplete:j,autoFocus:h=!1,children:w,className:L,color:b="primary",defaultValue:S,disabled:F=!1,error:I=!1,FormHelperTextProps:_,fullWidth:p=!1,helperText:u,id:g,InputLabelProps:a,inputProps:E,InputProps:H,inputRef:M,label:t,maxRows:N,minRows:O,multiline:T=!1,name:U,onBlur:W,onChange:$,onFocus:k,placeholder:q,required:v=!1,rows:B,select:c=!1,SelectProps:m,type:V,value:P,variant:n="outlined"}=d,Y=K(d,ie),y=o({},d,{autoFocus:h,color:b,disabled:F,error:I,fullWidth:p,multiline:T,required:v,select:c,variant:n}),z=pe(y),l={};n==="outlined"&&(a&&typeof a.shrink<"u"&&(l.notched=a.shrink),l.label=t),c&&((!m||!m.native)&&(l.id=void 0),l["aria-describedby"]=void 0);const e=Q(g),f=u&&e?`${e}-helper-text`:void 0,R=t&&e?`${e}-label`:void 0,A=de[n],C=r.jsx(A,o({"aria-describedby":f,autoComplete:j,autoFocus:h,defaultValue:S,fullWidth:p,multiline:T,name:U,rows:B,maxRows:N,minRows:O,type:V,value:P,id:e,inputRef:M,onBlur:W,onChange:$,onFocus:k,placeholder:q,inputProps:E},l,H));return r.jsxs(ue,o({className:X(z.root,L),disabled:F,error:I,fullWidth:p,ref:x,required:v,color:b,variant:n,ownerState:y},Y,{children:[t!=null&&t!==""&&r.jsx(se,o({htmlFor:e,id:R},a,{children:t})),c?r.jsx(te,o({"aria-describedby":f,id:e,labelId:R,value:P,input:C},m,{children:w})):C,u&&r.jsx(ne,o({id:f},_,{children:u}))]}))});export{be as T};

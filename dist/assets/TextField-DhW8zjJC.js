import{aQ as Z,r as z,aW as A,aX as D,aU as o,bF as G,j as r,aY as J,aZ as K,c5 as ee}from"./index-D-ZKGqTU.js";import{F as oe}from"./FormControl-n1s9FAXz.js";import{I as se}from"./InputLabel-CCRBBEhV.js";import{S as te,I as le,F as re,O as ae}from"./Select-B6atPAS4.js";import{F as ne}from"./FormHelperText-BHlZRpvh.js";const ie=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],de={standard:le,filled:re,outlined:ae},pe=i=>{const{classes:s}=i;return K({root:["root"]},ee,s)},ue=Z(oe,{name:"MuiTextField",slot:"Root",overridesResolver:(i,s)=>s.root})({}),Fe=z.forwardRef(function(s,x){const d=A({props:s,name:"MuiTextField"}),{autoComplete:j,autoFocus:h=!1,children:w,className:L,color:F="primary",defaultValue:S,disabled:b=!1,error:I=!1,FormHelperTextProps:W,fullWidth:p=!1,helperText:u,id:g,InputLabelProps:a,inputProps:E,InputProps:H,inputRef:M,label:t,maxRows:N,minRows:O,multiline:T=!1,name:U,onBlur:_,onChange:k,onFocus:q,placeholder:B,required:v=!1,rows:V,select:c=!1,SelectProps:m,type:$,value:P,variant:n="outlined"}=d,Q=D(d,ie),R=o({},d,{autoFocus:h,color:F,disabled:b,error:I,fullWidth:p,multiline:T,required:v,select:c,variant:n}),X=pe(R),l={};n==="outlined"&&(a&&typeof a.shrink<"u"&&(l.notched=a.shrink),l.label=t),c&&((!m||!m.native)&&(l.id=void 0),l["aria-describedby"]=void 0);const e=G(g),f=u&&e?`${e}-helper-text`:void 0,y=t&&e?`${e}-label`:void 0,Y=de[n],C=r.jsx(Y,o({"aria-describedby":f,autoComplete:j,autoFocus:h,defaultValue:S,fullWidth:p,multiline:T,name:U,rows:V,maxRows:N,minRows:O,type:$,value:P,id:e,inputRef:M,onBlur:_,onChange:k,onFocus:q,placeholder:B,inputProps:E},l,H));return r.jsxs(ue,o({className:J(X.root,L),disabled:b,error:I,fullWidth:p,ref:x,required:v,color:F,variant:n,ownerState:R},Q,{children:[t!=null&&t!==""&&r.jsx(se,o({htmlFor:e,id:y},a,{children:t})),c?r.jsx(te,o({"aria-describedby":f,id:e,labelId:y,value:P,input:C},m,{children:w})):C,u&&r.jsx(ne,o({id:f},W,{children:u}))]}))});export{Fe as T};

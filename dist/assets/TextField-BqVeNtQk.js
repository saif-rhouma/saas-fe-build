import{aO as D,r as G,aU as J,aV as K,aS as o,br as Q,j as r,aW as Y,aX as Z,bt as ee}from"./index-PcvvizaM.js";import{F as oe}from"./FormControl-BDFWwf0L.js";import{I as se}from"./InputLabel-CLgWCQLa.js";import{S as te,I as le,F as re,O as ae}from"./Select-oMu1ahJl.js";import{F as ne}from"./FormHelperText-CwIdVd83.js";const ie=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],de={standard:le,filled:re,outlined:ae},pe=i=>{const{classes:s}=i;return Z({root:["root"]},ee,s)},ue=D(oe,{name:"MuiTextField",slot:"Root",overridesResolver:(i,s)=>s.root})({}),be=G.forwardRef(function(s,x){const d=J({props:s,name:"MuiTextField"}),{autoComplete:j,autoFocus:h=!1,children:w,className:S,color:b="primary",defaultValue:L,disabled:F=!1,error:I=!1,FormHelperTextProps:O,fullWidth:p=!1,helperText:u,id:W,InputLabelProps:a,inputProps:g,InputProps:E,inputRef:H,label:t,maxRows:M,minRows:N,multiline:T=!1,name:U,onBlur:V,onChange:_,onFocus:k,placeholder:q,required:v=!1,rows:B,select:c=!1,SelectProps:m,type:$,value:P,variant:n="outlined"}=d,X=K(d,ie),R=o({},d,{autoFocus:h,color:b,disabled:F,error:I,fullWidth:p,multiline:T,required:v,select:c,variant:n}),z=pe(R),l={};n==="outlined"&&(a&&typeof a.shrink<"u"&&(l.notched=a.shrink),l.label=t),c&&((!m||!m.native)&&(l.id=void 0),l["aria-describedby"]=void 0);const e=Q(W),f=u&&e?`${e}-helper-text`:void 0,y=t&&e?`${e}-label`:void 0,A=de[n],C=r.jsx(A,o({"aria-describedby":f,autoComplete:j,autoFocus:h,defaultValue:L,fullWidth:p,multiline:T,name:U,rows:B,maxRows:M,minRows:N,type:$,value:P,id:e,inputRef:H,onBlur:V,onChange:_,onFocus:k,placeholder:q,inputProps:g},l,E));return r.jsxs(ue,o({className:Y(z.root,S),disabled:F,error:I,fullWidth:p,ref:x,required:v,color:b,variant:n,ownerState:R},X,{children:[t!=null&&t!==""&&r.jsx(se,o({htmlFor:e,id:y},a,{children:t})),c?r.jsx(te,o({"aria-describedby":f,id:e,labelId:y,value:P,input:C},m,{children:w})):C,u&&r.jsx(ne,o({id:f},O,{children:u}))]}))});export{be as T};

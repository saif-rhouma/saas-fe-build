import{bk as p,bl as f,aO as w,aS as e,r as x,aU as F,aV as d,bm as C,j as G,aW as y,aX as R}from"./index-PcvvizaM.js";import{f as U}from"./formControlState-Dq1zat_P.js";function b(o){return f("MuiFormGroup",o)}p("MuiFormGroup",["root","row","error"]);const j=["className","row"],M=o=>{const{classes:r,row:t,error:s}=o;return R({root:["root",t&&"row",s&&"error"]},b,r)},S=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),v=x.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:l=!1}=s,c=d(s,j),i=C(),m=U({props:s,muiFormControl:i,states:["error"]}),n=e({},s,{row:l,error:m.error}),u=M(n);return G.jsx(S,e({className:y(u.root,a),ownerState:n,ref:t},c))});export{v as F};

import{bt as p,bu as f,aQ as w,aU as e,r as x,aW as F,aX as d,b$ as C,j as G,aY as y,aZ as R}from"./index-D9XQ5HZn.js";import{f as U}from"./formControlState-Dq1zat_P.js";function b(o){return f("MuiFormGroup",o)}p("MuiFormGroup",["root","row","error"]);const j=["className","row"],M=o=>{const{classes:r,row:t,error:s}=o;return R({root:["root",t&&"row",s&&"error"]},b,r)},g=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),N=x.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:l=!1}=s,c=d(s,j),i=C(),u=U({props:s,muiFormControl:i,states:["error"]}),n=e({},s,{row:l,error:u.error}),m=M(n);return G.jsx(g,e({className:y(m.root,a),ownerState:n,ref:t},c))});export{N as F};

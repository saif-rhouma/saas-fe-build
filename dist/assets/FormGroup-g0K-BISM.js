import{bW as p,bV as f,aU as w,aY as e,r as x,a_ as F,a$ as d,bX as C,j as G,b0 as b,b1 as y}from"./index-BjIn7_qX.js";import{f as R}from"./formControlState-Dq1zat_P.js";function U(o){return p("MuiFormGroup",o)}f("MuiFormGroup",["root","row","error"]);const j=["className","row"],M=o=>{const{classes:r,row:t,error:s}=o;return y({root:["root",t&&"row",s&&"error"]},U,r)},_=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),v=x.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:l=!1}=s,c=d(s,j),i=C(),u=R({props:s,muiFormControl:i,states:["error"]}),n=e({},s,{row:l,error:u.error}),m=M(n);return G.jsx(_,e({className:b(m.root,a),ownerState:n,ref:t},c))});export{v as F};

import{ak as p,al as f,o as w,y as e,r as x,D as F,E as G,am as d,j as C,F as y,G as R}from"./index-88qAwG8P.js";import{f as j}from"./formControlState-Dq1zat_P.js";function M(o){return f("MuiFormGroup",o)}p("MuiFormGroup",["root","row","error"]);const U=["className","row"],g=o=>{const{classes:r,row:t,error:s}=o;return R({root:["root",t&&"row",s&&"error"]},M,r)},h=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),E=x.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:l=!1}=s,c=G(s,U),i=d(),m=j({props:s,muiFormControl:i,states:["error"]}),n=e({},s,{row:l,error:m.error}),u=g(n);return C.jsx(h,e({className:y(u.root,a),ownerState:n,ref:t},c))});export{E as F};

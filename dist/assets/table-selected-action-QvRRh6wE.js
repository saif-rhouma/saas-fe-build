import{j as e,S as u,T as f}from"./index-CwDFRBrV.js";import{T as m}from"./table-head-custom-0GEy35EZ.js";import{T as p}from"./TableCell-D5WBIyLx.js";import{C as h}from"./Checkbox-Cm203eFc.js";function b(n,r,t){return n.slice(r*t,r*t+t)}function k(n,r,t){return n?Math.max(0,(1+n)*r-t):0}function a(n,r,t){return n[t]===null?1:r[t]===null||r[t]<n[t]?-1:r[t]>n[t]?1:0}function C(n,r){return n==="desc"?(t,i)=>a(t,i,r):(t,i)=>-a(t,i,r)}function d({emptyRows:n,height:r}){return n?e.jsx(m,{sx:{...r&&{height:r*n}},children:e.jsx(p,{colSpan:9})}):null}function I({dense:n,action:r,rowCount:t,numSelected:i,onSelectAllRows:s,sx:l,...o}){return i?e.jsxs(u,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...n&&{height:38},...l},...o,children:[e.jsx(h,{indeterminate:!!i&&i<t,checked:!!t&&i===t,onChange:c=>s(c.target.checked)}),e.jsxs(f,{variant:"subtitle2",sx:{ml:2,flexGrow:1,color:"primary.main",...n&&{ml:3}},children:[i," selected"]}),r&&r]}):null}export{I as T,d as a,k as e,C as g,b as r};

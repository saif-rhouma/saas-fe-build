import{r as l,j as d,S as v,T as E}from"./index-C-IhHuTJ.js";import{T as I}from"./table-head-custom-c1vpDJbN.js";import{T as y}from"./TableCell-YKx_Gzup.js";import{C as M}from"./Checkbox-OM-b9iKh.js";function H(e,a,t){return e.slice(a*t,a*t+t)}function J(e,a,t){return e?Math.max(0,(1+e)*a-t):0}function x(e,a,t){return e[t]===null?1:a[t]===null||a[t]<e[t]?-1:a[t]>e[t]?1:0}function K(e,a){return e==="desc"?(t,c)=>x(t,c,a):(t,c)=>-x(t,c,a)}function L(e){const[a,t]=l.useState(!!(e!=null&&e.defaultDense)),[c,s]=l.useState((e==null?void 0:e.defaultCurrentPage)||0),[f,h]=l.useState((e==null?void 0:e.defaultOrderBy)||"name"),[g,C]=l.useState((e==null?void 0:e.defaultRowsPerPage)||5),[m,b]=l.useState((e==null?void 0:e.defaultOrder)||"asc"),[u,r]=l.useState((e==null?void 0:e.defaultSelected)||[]),k=l.useCallback(n=>{n!==""&&(b(f===n&&m==="asc"?"desc":"asc"),h(n))},[m,f]),S=l.useCallback(n=>{const i=u.includes(n)?u.filter(o=>o!==n):[...u,n];r(i)},[u]),P=l.useCallback(n=>{s(0),C(parseInt(n.target.value,10))},[]),w=l.useCallback(n=>{t(n.target.checked)},[]),T=l.useCallback((n,i)=>{if(n){r(i);return}r([])},[]),R=l.useCallback((n,i)=>{s(i)},[]),j=l.useCallback(()=>{s(0)},[]),D=l.useCallback(n=>{r([]),c&&n<2&&s(c-1)},[c]),A=l.useCallback(({totalRowsInPage:n,totalRowsFiltered:i})=>{const o=u.length;if(r([]),c){if(o===n)s(c-1);else if(o===i)s(0);else if(o>n){const O=Math.ceil((i-o)/g)-1;s(O)}}},[c,g,u.length]);return{dense:a,order:m,page:c,orderBy:f,rowsPerPage:g,selected:u,onSelectRow:S,onSelectAllRows:T,onSort:k,onChangePage:R,onChangeDense:w,onResetPage:j,onChangeRowsPerPage:P,onUpdatePageDeleteRow:D,onUpdatePageDeleteRows:A,setPage:s,setDense:t,setOrder:b,setOrderBy:h,setSelected:r,setRowsPerPage:C}}function N({emptyRows:e,height:a}){return e?d.jsx(I,{sx:{...a&&{height:a*e}},children:d.jsx(y,{colSpan:9})}):null}function Q({dense:e,action:a,rowCount:t,numSelected:c,onSelectAllRows:s,sx:f,...h}){return c?d.jsxs(v,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...e&&{height:38},...f},...h,children:[d.jsx(M,{indeterminate:!!c&&c<t,checked:!!t&&c===t,onChange:g=>s(g.target.checked)}),d.jsxs(E,{variant:"subtitle2",sx:{ml:2,flexGrow:1,color:"primary.main",...e&&{ml:3}},children:[c," selected"]}),a&&a]}):null}export{Q as T,N as a,J as e,K as g,H as r,L as u};
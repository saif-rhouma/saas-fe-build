import{r as a}from"./index-9WIYojXz.js";function v(t){const[i,C]=a.useState(!!(t!=null&&t.defaultDense)),[l,n]=a.useState((t==null?void 0:t.defaultCurrentPage)||0),[g,S]=a.useState((t==null?void 0:t.defaultOrderBy)||"name"),[f,o]=a.useState((t==null?void 0:t.defaultRowsPerPage)||15),[P,b]=a.useState((t==null?void 0:t.defaultOrder)||"asc"),[s,u]=a.useState((t==null?void 0:t.defaultSelected)||[]),k=a.useCallback(e=>{e!==""&&(b(g===e&&P==="asc"?"desc":"asc"),S(e))},[P,g]),w=a.useCallback(e=>{const c=s.includes(e)?s.filter(d=>d!==e):[...s,e];u(c)},[s]),h=a.useCallback(e=>{n(0),o(parseInt(e.target.value,10))},[]),R=a.useCallback(e=>{C(e.target.checked)},[]),D=a.useCallback((e,c)=>{if(e){u(c);return}u([])},[]),r=a.useCallback((e,c)=>{n(c)},[]),O=a.useCallback(()=>{n(0)},[]),m=a.useCallback(e=>{u([]),l&&e<2&&n(l-1)},[l]),y=a.useCallback(({totalRowsInPage:e,totalRowsFiltered:c})=>{const d=s.length;if(u([]),l){if(d===e)n(l-1);else if(d===c)n(0);else if(d>e){const A=Math.ceil((c-d)/f)-1;n(A)}}},[l,f,s.length]);return{dense:i,order:P,page:l,orderBy:g,rowsPerPage:f,selected:s,onSelectRow:w,onSelectAllRows:D,onSort:k,onChangePage:r,onChangeDense:R,onResetPage:O,onChangeRowsPerPage:h,onUpdatePageDeleteRow:m,onUpdatePageDeleteRows:y,setPage:n,setDense:C,setOrder:b,setOrderBy:S,setSelected:u,setRowsPerPage:o}}export{v as u};

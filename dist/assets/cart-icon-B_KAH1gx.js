import{u}from"./index-u6DYp5RP.js";import{dl as h,r as l,dm as x,j as s,cV as d,S as c,bR as m,B as j,R as w,p as f,dc as V,I as b}from"./index-DQSze1U8.js";import{S as t}from"./Skeleton-QiyMl34E.js";const p={revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1};function R(){const i=x.product.list,{data:e,isLoading:r,error:o,isValidating:n}=u(i,h,p);return l.useMemo(()=>({products:(e==null?void 0:e.products)||[],productsLoading:r,productsError:o,productsValidating:n,productsEmpty:!r&&!(e!=null&&e.products.length)}),[e==null?void 0:e.products,o,r,n])}function L(i){const e=i?[x.product.details,{params:{productId:i}}]:"",{data:r,isLoading:o,error:n,isValidating:a}=u(e,h,p);return l.useMemo(()=>({product:r==null?void 0:r.product,productLoading:o,productError:n,productValidating:a}),[r==null?void 0:r.product,n,o,a])}function k(i){const e=i?[x.product.search,{params:{query:i}}]:"",{data:r,isLoading:o,error:n,isValidating:a}=u(e,h,{...p,keepPreviousData:!0});return l.useMemo(()=>({searchResults:(r==null?void 0:r.results)||[],searchLoading:o,searchError:n,searchValidating:a,searchEmpty:!o&&!(r!=null&&r.results.length)}),[r==null?void 0:r.results,n,o,a])}function I({sx:i,amount:e=16,...r}){return[...Array(e)].map((o,n)=>s.jsxs(m,{variant:"outlined",sx:{borderRadius:2,...i},...r,children:[s.jsx(c,{sx:{p:1},children:s.jsx(t,{sx:{pt:"100%"}})}),s.jsxs(c,{spacing:2,sx:{p:3,pt:2},children:[s.jsx(t,{sx:{width:.5,height:16}}),s.jsxs(c,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[s.jsxs(c,{direction:"row",children:[s.jsx(t,{variant:"circular",sx:{width:16,height:16}}),s.jsx(t,{variant:"circular",sx:{width:16,height:16}}),s.jsx(t,{variant:"circular",sx:{width:16,height:16}})]}),s.jsx(t,{sx:{width:40,height:16}})]})]})]},n))}function P({...i}){return s.jsxs(d,{container:!0,spacing:8,...i,children:[s.jsx(d,{xs:12,md:6,lg:7,children:s.jsx(t,{sx:{pt:"100%"}})}),s.jsx(d,{xs:12,md:6,lg:5,children:s.jsxs(c,{spacing:3,children:[s.jsx(t,{sx:{height:16,width:48}}),s.jsx(t,{sx:{height:16,width:80}}),s.jsx(t,{sx:{height:16,width:.5}}),s.jsx(t,{sx:{height:16,width:.75}}),s.jsx(t,{sx:{height:120}})]})}),s.jsx(d,{xs:12,children:s.jsx(c,{direction:"row",alignItems:"center",children:[...Array(3)].map((e,r)=>s.jsxs(c,{spacing:2,alignItems:"center",justifyContent:"center",sx:{width:1},children:[s.jsx(t,{variant:"circular",sx:{width:80,height:80}}),s.jsx(t,{sx:{height:16,width:160}}),s.jsx(t,{sx:{height:16,width:80}})]},r))})})]})}function z({totalItems:i}){return s.jsx(j,{component:w,href:f.product.checkout,sx:{right:0,top:112,zIndex:999,display:"flex",cursor:"pointer",position:"fixed",color:"text.primary",borderTopLeftRadius:16,borderBottomLeftRadius:16,bgcolor:"background.paper",padding:e=>e.spacing(1,3,1,2),boxShadow:e=>e.customShadows.dropdown,transition:e=>e.transitions.create(["opacity"]),"&:hover":{opacity:.72}},children:s.jsx(V,{showZero:!0,badgeContent:i,color:"error",max:99,children:s.jsx(b,{icon:"solar:cart-3-bold",width:24})})})}export{z as C,I as P,R as a,P as b,L as c,k as u};

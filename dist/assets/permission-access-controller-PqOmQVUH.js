import{n as l,er as m,r as e,es as x,j as s}from"./index-BHptOA6I.js";const p=({permission:r,children:i})=>{const{user:t}=l(),{permissions:o}=m(),[c,n]=e.useState(!1),a=e.useCallback(u=>o.includes(u),[o]);return e.useEffect(()=>{t.roles[0]===x.STAFF?n(a(r)):n(!0)},[r,a,t.roles]),c?s.jsx(s.Fragment,{children:i}):s.jsx(s.Fragment,{})};export{p as P};

import{ax as d,ak as p,r as n,C as c,j as t,T as g,S as x,e as s,D as m,H as S}from"./index-DxrsDIwY.js";function y(){const{loginWithPopup:e,loginWithRedirect:a}=d(),i=p().get("returnTo"),o=n.useCallback(async()=>{try{await e()}catch(r){console.error(r)}},[e]),l=n.useCallback(async()=>{try{await e({authorizationParams:{screen_hint:"signup"}})}catch(r){console.error(r)}},[e]),h=n.useCallback(async()=>{try{await a({appState:{returnTo:i||c.auth.redirectPath}})}catch(r){console.error(r)}},[a,i]),u=n.useCallback(async()=>{try{await a({appState:{returnTo:i||c.auth.redirectPath},authorizationParams:{screen_hint:"signup"}})}catch(r){console.error(r)}},[a,i]);return t.jsxs(t.Fragment,{children:[t.jsx(g,{variant:"h5",sx:{mb:5,textAlign:"center"},children:"Sign in to your account"}),t.jsxs(x,{spacing:2,children:[t.jsx(s,{fullWidth:!0,color:"primary",size:"large",variant:"contained",onClick:h,children:"Sign in with Redirect"}),t.jsx(s,{fullWidth:!0,color:"primary",size:"large",variant:"soft",onClick:u,children:"Sign up with Redirect"}),t.jsx(m,{sx:{borderStyle:"dashed",my:3}}),t.jsx(s,{fullWidth:!0,color:"inherit",size:"large",variant:"contained",onClick:o,children:"Sign in with Popup"}),t.jsx(s,{fullWidth:!0,color:"inherit",size:"large",variant:"soft",onClick:l,children:"Sign up with Popup"})]})]})}const j={title:`Sign in | Auth0 - ${c.site.name}`};function k(){return t.jsxs(t.Fragment,{children:[t.jsx(S,{children:t.jsxs("title",{children:[" ",j.title]})}),t.jsx(y,{})]})}export{k as default};

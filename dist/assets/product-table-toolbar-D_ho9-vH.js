import{r,j as t,S as n,I as c}from"./index-CIoKvMHn.js";import{T as i}from"./TextField-C00rKtlH.js";import{I as l}from"./InputAdornment-Cvj5YTOu.js";function u({filters:e,onResetPage:a,options:m}){const o=r.useCallback(s=>{a(),e.setState({name:s.target.value})},[e,a]);return t.jsx(n,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:t.jsx(i,{sx:{width:420},value:e.state.name,onChange:o,placeholder:"Search by Product Name or Ref",InputProps:{startAdornment:t.jsx(l,{position:"start",children:t.jsx(c,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}export{u as P};

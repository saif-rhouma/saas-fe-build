import{r as n,j as e,S as o,I as i}from"./index-CIoKvMHn.js";import{T as c}from"./TextField-C00rKtlH.js";import{I as l}from"./InputAdornment-Cvj5YTOu.js";function d({filters:t,onResetPage:s}){const a=n.useCallback(r=>{s(),t.setState({name:r.target.value})},[t,s]);return e.jsx(o,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(c,{sx:{width:420},value:t.state.name,onChange:a,placeholder:"Search Here...",InputProps:{startAdornment:e.jsx(l,{position:"start",children:e.jsx(i,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}export{d as P};
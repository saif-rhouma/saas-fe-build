import{br as n,r as i,j as e,S as l,I as c}from"./index-3kUlxXkm.js";import{T as m}from"./TextField-Ff9PgcBD.js";import{I as p}from"./InputAdornment-Ug97Thua.js";function b({filters:s,onResetPage:t}){const{t:a}=n("setting"),r=i.useCallback(o=>{t(),s.setState({name:o.target.value})},[s,t]);return e.jsx(l,{spacing:2,justifyContent:{xs:"space-between"},alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5},children:e.jsx(m,{sx:{width:420},value:s.state.name,onChange:r,placeholder:a("permissionsGroups.table.tableToolbar.searchPlaceholder"),InputProps:{startAdornment:e.jsx(p,{position:"start",children:e.jsx(c,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}})})}export{b as P};

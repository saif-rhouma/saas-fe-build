import{j as s,r as m,aQ as i,bP as A,bV as E}from"./index-DBAnnifB.js";import{c as u}from"./countries-DSLisFCy.js";import{A as R}from"./Autocomplete-Bk7RHyx1.js";import{T as x}from"./TextField-Cnf5s-_6.js";import{I as T}from"./InputAdornment-kj6j4mRM.js";import{C as v}from"./Chip-DfL_ynnF.js";function d(n){const o=u.filter(l=>l.label===n||l.code===n)[0];return{code:o==null?void 0:o.code,label:o==null?void 0:o.label,phone:o==null?void 0:o.phone}}function F(n){return u.filter(l=>l.code===n)[0].label}function H({id:n,label:o,error:l,multiple:a,helperText:f,hiddenLabel:p,placeholder:h,getValue:b="label",...y}){const C=u.map(e=>b==="label"?e.label:e.code),g=(e,r)=>{const t=d(r);return t.label?m.createElement("li",{...e,key:t.label},s.jsx(i,{code:t.code,sx:{mr:1,width:22,height:22,borderRadius:"50%"}},t.label),t.label," (",t.code,") +",t.phone):null},j=e=>{const r=d(e.inputProps.value),t={...e,label:o,placeholder:h,helperText:f,hiddenLabel:p,error:!!l,inputProps:{...e.inputProps,autoComplete:"new-password"}};return a?s.jsx(x,{...t}):s.jsx(x,{...t,InputProps:{...e.InputProps,startAdornment:s.jsx(T,{position:"start",sx:{...!r.code&&{display:"none"}},children:s.jsx(i,{code:r.code,sx:{ml:.5,mr:-.5,width:22,height:22,borderRadius:"50%"}},r.label)})},sx:{...!p&&{[`& .${A.root}`]:{[`& .${E.root}`]:{mt:-2}}}}})},I=(e,r)=>e.map((t,w)=>{const c=d(t);return m.createElement(v,{...r({index:w}),key:c.label,label:c.label,size:"small",variant:"soft",icon:s.jsx(i,{code:c.code,sx:{width:16,height:16,borderRadius:"50%"}},c.label)})}),P=e=>b==="label"?e:F(e);return s.jsx(R,{id:`country-select-${n}`,multiple:a,options:C,autoHighlight:!a,disableCloseOnSelect:a,renderOption:g,renderInput:j,renderTags:a?I:void 0,getOptionLabel:P,...y})}export{H as C};

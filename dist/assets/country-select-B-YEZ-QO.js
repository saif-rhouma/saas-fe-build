import{j as s,r as m,bH as i,cq as v,cv as A}from"./index-DAC7DrKI.js";import{c as u}from"./countries-DSLisFCy.js";import{A as E}from"./Autocomplete-Bdm7MKsx.js";import{T as x}from"./TextField-BemIARnN.js";import{I as R}from"./InputAdornment-Coc5CotZ.js";import{C as T}from"./Chip-BV006SG6.js";function d(n){const o=u.filter(l=>l.label===n||l.code===n)[0];return{code:o==null?void 0:o.code,label:o==null?void 0:o.label,phone:o==null?void 0:o.phone}}function F(n){return u.filter(l=>l.code===n)[0].label}function z({id:n,label:o,error:l,multiple:a,helperText:f,hiddenLabel:p,placeholder:h,getValue:b="label",...y}){const C=u.map(e=>b==="label"?e.label:e.code),g=(e,r)=>{const t=d(r);return t.label?m.createElement("li",{...e,key:t.label},s.jsx(i,{code:t.code,sx:{mr:1,width:22,height:22,borderRadius:"50%"}},t.label),t.label," (",t.code,") +",t.phone):null},j=e=>{const r=d(e.inputProps.value),t={...e,label:o,placeholder:h,helperText:f,hiddenLabel:p,error:!!l,inputProps:{...e.inputProps,autoComplete:"new-password"}};return a?s.jsx(x,{...t}):s.jsx(x,{...t,InputProps:{...e.InputProps,startAdornment:s.jsx(R,{position:"start",sx:{...!r.code&&{display:"none"}},children:s.jsx(i,{code:r.code,sx:{ml:.5,mr:-.5,width:22,height:22,borderRadius:"50%"}},r.label)})},sx:{...!p&&{[`& .${v.root}`]:{[`& .${A.root}`]:{mt:-2}}}}})},I=(e,r)=>e.map((t,P)=>{const c=d(t);return m.createElement(T,{...r({index:P}),key:c.label,label:c.label,size:"small",variant:"soft",icon:s.jsx(i,{code:c.code,sx:{width:16,height:16,borderRadius:"50%"}},c.label)})}),w=e=>b==="label"?e:F(e);return s.jsx(E,{id:`country-select-${n}`,multiple:a,options:C,autoHighlight:!a,disableCloseOnSelect:a,renderOption:g,renderInput:j,renderTags:a?I:void 0,getOptionLabel:w,...y})}export{z as C};

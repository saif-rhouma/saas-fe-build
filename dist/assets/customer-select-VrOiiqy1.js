import{r as a,j as s,B as u}from"./index-DBAnnifB.js";import{A as c}from"./Autocomplete-Bk7RHyx1.js";import{T as l}from"./TextField-Cnf5s-_6.js";const h=({customers:r,onChange:i})=>{const[n,x]=a.useState(r),p=(t,{inputValue:e})=>t.filter(o=>o.name.toLowerCase().includes(e.toLowerCase())||o.phoneNumber.toLowerCase().includes(e.toLowerCase()));return s.jsx(c,{id:"customer-select",options:n,autoHighlight:!0,getOptionLabel:t=>t.name,filterOptions:p,onChange:(t,e)=>{i(e==null?void 0:e.id)},sx:{"& .MuiAutocomplete-listbox .MuiAutocomplete-option":{textTransform:"uppercase"}},renderOption:(t,e)=>{const{key:o,...m}=t;return s.jsx(u,{component:"li",sx:{"& > img":{mr:2,flexShrink:0},textTransform:"capitalize"},...m,children:e.name},o)},renderInput:t=>s.jsx(l,{...t,label:"Customer",InputLabelProps:{shrink:!0},sx:{"& .MuiInputBase-input":{textTransform:"capitalize"}},slotProps:{htmlInput:{...t.inputProps,autoComplete:"new-password"}}})})};export{h as C};

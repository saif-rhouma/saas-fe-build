import{r as o}from"./index-s58VYgz3.js";function i(){const[r,e]=o.useState(null),a=o.useCallback(async t=>{if(!(navigator!=null&&navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(n){return console.warn("Copy failed",n),e(null),!1}},[e]);return o.useMemo(()=>({copy:a,copiedText:r}),[a,r])}export{i as u};

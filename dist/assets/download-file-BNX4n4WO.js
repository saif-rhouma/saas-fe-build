import{dp as s,dm as c}from"./index-DP6a2E9k.js";const l=async n=>{const d={responseType:"blob"},{data:e}=await s.get(c.download+n,d);window.URL.createObjectURL(new Blob([e]));const t=`${n}`;if(window.navigator.msSaveBlob)window.navigator.msSaveBlob(e,t);else{const o=new FileReader;o.readAsDataURL(e),o.onloadend=()=>{const a=document.createElement("a");a.href=o.result,a.download=t,a.click()}}};export{l as d};

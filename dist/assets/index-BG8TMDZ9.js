import{j as i,p as t,e as n,dq as o,H as l,C as a}from"./index-zyulwKWD.js";import{C as d}from"./custom-breadcrumbs-DHj4Ok4N.js";import{C as m}from"./component-hero-BgKjVGLu.js";import{C as h,a as e}from"./component-block-jCYpWjeq.js";function x(){const c=async()=>{const s=new Promise(r=>setTimeout(r,3e3));try{o.promise(s,{loading:"Loading...",success:()=>"Loading success!",error:"Error",closeButton:!1}),await s}catch(r){console.error(r)}};return i.jsxs(i.Fragment,{children:[i.jsx(m,{children:i.jsx(d,{heading:"Snackbar",links:[{name:"Components",href:t.components},{name:"Snackbar"}],moreLink:["https://sonner.emilkowal.ski/"]})}),i.jsxs(h,{sx:{rowGap:5,columnGap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"}},children:[i.jsxs(e,{title:"Simple",children:[i.jsx(n,{variant:"contained",color:"inherit",onClick:()=>o("This is an default"),children:"Default"}),i.jsx(n,{variant:"contained",color:"info",onClick:()=>o.info("This is an info"),children:"Info"}),i.jsx(n,{variant:"contained",color:"success",onClick:()=>o.success("This is an success"),children:"Success"}),i.jsx(n,{variant:"contained",color:"warning",onClick:()=>o.warning("This is an warning"),children:"Warning"}),i.jsx(n,{variant:"contained",color:"error",onClick:()=>o.error("This is an error"),children:"Error"})]}),i.jsxs(e,{title:"With Action",children:[i.jsx(n,{variant:"contained",color:"inherit",onClick:()=>{o("Title",{id:"defaultId",description:"description",closeButton:!1,action:i.jsxs("div",{children:[i.jsx(n,{color:"primary",size:"small",onClick:()=>console.info("Action!"),children:"Action"}),i.jsx(n,{size:"small",onClick:()=>{console.info("Action!"),o.dismiss("defaultId")},children:"Dismiss"})]})})},children:"Default"}),i.jsx(n,{variant:"contained",color:"info",onClick:()=>{o.info("Title",{id:"infoId",description:"description",closeButton:!1,action:i.jsxs("div",{children:[i.jsx(n,{color:"info",size:"small",onClick:()=>console.info("Action!"),children:"Action"}),i.jsx(n,{size:"small",onClick:()=>{console.info("Action!"),o.dismiss("infoId")},children:"Dismiss"})]})})},children:"Info"}),i.jsx(n,{variant:"contained",color:"success",onClick:()=>{o.success("Title",{id:"successId",description:"description",closeButton:!1,action:i.jsxs("div",{children:[i.jsx(n,{color:"success",size:"small",onClick:()=>console.info("Action!"),children:"Action"}),i.jsx(n,{size:"small",onClick:()=>{console.info("Action!"),o.dismiss("successId")},children:"Dismiss"})]})})},children:"Success"}),i.jsx(n,{variant:"contained",color:"warning",onClick:()=>{o.warning("Title",{id:"warningId",description:"description",closeButton:!1,action:i.jsxs("div",{children:[i.jsx(n,{color:"warning",size:"small",onClick:()=>console.info("Action!"),children:"Action"}),i.jsx(n,{size:"small",onClick:()=>{console.info("Action!"),o.dismiss("warningId")},children:"Dismiss"})]})})},children:"Warning"}),i.jsx(n,{variant:"contained",color:"error",onClick:()=>{o.error("Error title",{id:"errorId",description:"description",closeButton:!1,action:i.jsxs("div",{children:[i.jsx(n,{color:"error",size:"small",onClick:()=>console.info("Action!"),children:"Action"}),i.jsx(n,{size:"small",onClick:()=>{console.info("Action!"),o.dismiss("errorId")},children:"Dismiss"})]})})},children:"Error"})]}),i.jsx(e,{title:"anchorOrigin",children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"].map(s=>i.jsx(n,{variant:"text",color:"inherit",onClick:()=>o(s,{position:s}),children:s},s))}),i.jsx(e,{title:"With promise",children:i.jsx(n,{variant:"outlined",onClick:c,children:"On submit"})})]})]})}const f={title:`Snackbar | Components - ${a.site.name}`};function k(){return i.jsxs(i.Fragment,{children:[i.jsx(l,{children:i.jsxs("title",{children:[" ",f.title]})}),i.jsx(x,{})]})}export{k as default};

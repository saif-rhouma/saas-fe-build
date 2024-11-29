import{_ as c,r as b,j as e,p,cY as h,B as x,S as d,aV as l,H as g,C as u}from"./index-BPWlAn8G.js";import{I as j}from"./image-D1zEO7YY.js";import{u as C,L as f}from"./use-light-box-D-7Wbinw.js";import{C as k}from"./custom-breadcrumbs-kBgUToVQ.js";import{C as F}from"./component-hero-DnB87iqg.js";import{C as w}from"./component-block-BbB0Jlyj.js";import{F as v}from"./FormControl-DwVqhaXG.js";import{F as y}from"./FormLabel-pAluAaLc.js";import{F as i}from"./FormControlLabel-7LzjaKxa.js";import"./utils-DoM3o7-Q.js";import"./formControlState-Dq1zat_P.js";const L=[...Array(4)].map((t,s)=>({src:c.image.cover(s+1),title:"Flamingo",description:`Vicko Mozara 
 Veliki zali, Dubravica, Croatia`})),r=[...L,{type:"video",width:1280,height:720,poster:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",sources:[{src:"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",type:"video/mp4"}]}];function S(){const t=C(r),[s,m]=b.useState({disableZoom:!1,disableVideo:!1,disableTotal:!1,disableCaptions:!1,disableSlideshow:!1,disableThumbnails:!1,disableFullscreen:!1}),o=a=>{m({...s,[a.target.name]:a.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsx(k,{heading:"Lightbox",links:[{name:"Components",href:p.components},{name:"Lightbox"}],moreLink:["https://www.npmjs.com/package/yet-another-react-lightbox"]})}),e.jsx(w,{children:e.jsxs(h,{sx:{display:"flex"},children:[e.jsx(x,{gap:2,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)"},sx:{p:3},children:r.map(a=>{const n=a.type==="video"?a.poster:a.src;return e.jsx(j,{alt:n,src:n,ratio:"1/1",onClick:()=>t.onOpen(`${n}`),sx:{borderRadius:1,cursor:"pointer",width:200}},n)})}),e.jsx(d,{sx:{p:2.5,width:320,flexShrink:0,borderLeft:a=>`solid 1px ${a.vars.palette.divider}`},children:e.jsx(v,{component:"fieldset",variant:"standard",children:e.jsxs(d,{spacing:2,children:[e.jsx(y,{component:"legend",sx:{typography:"body2"},children:"Controls"}),e.jsx(i,{control:e.jsx(l,{size:"small",name:"disableZoom",checked:s.disableZoom,onChange:o}),label:"Disable zoom"}),e.jsx(i,{control:e.jsx(l,{size:"small",name:"disableTotal",checked:s.disableTotal,onChange:o}),label:"Disable total"}),e.jsx(i,{control:e.jsx(l,{size:"small",name:"disableVideo",checked:s.disableVideo,onChange:o}),label:"Disable video"}),e.jsx(i,{control:e.jsx(l,{size:"small",name:"disableCaptions",checked:s.disableCaptions,onChange:o}),label:"Disable captions"}),e.jsx(i,{control:e.jsx(l,{size:"small",name:"disableSlideshow",checked:s.disableSlideshow,onChange:o}),label:"Disable slideshow"}),e.jsx(i,{control:e.jsx(l,{size:"small",name:"disableThumbnails",checked:s.disableThumbnails,onChange:o}),label:"Disable thumbnails"}),e.jsx(i,{control:e.jsx(l,{size:"small",name:"disableFullscreen",checked:s.disableFullscreen,onChange:o}),label:"Disable fullscreen"})]})})})]})}),e.jsx(f,{open:t.open,close:t.onClose,slides:r,index:t.selected,disableZoom:s.disableZoom,disableTotal:s.disableTotal,disableVideo:s.disableVideo,disableCaptions:s.disableCaptions,disableSlideshow:s.disableSlideshow,disableThumbnails:s.disableThumbnails,disableFullscreen:s.disableFullscreen})]})}const T={title:`Lightbox | Components - ${u.site.name}`};function R(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsxs("title",{children:[" ",T.title]})}),e.jsx(S,{})]})}export{R as default};

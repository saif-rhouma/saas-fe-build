import{r as o,aq as x,ar as d,as as y,at as v,au as S,av as w,j as m,B as p,m as h,u as j}from"./index-ElVqIGcB.js";import{u as V}from"./use-motion-value-FgiOJlo7.js";function R(n,a={}){const{isStatic:i}=o.useContext(x),r=o.useRef(null),t=V(d(n)?n.get():n),c=o.useRef(t.get()),u=o.useRef(()=>{}),g=()=>{const s=r.current;s&&s.time===0&&s.sample(S.delta),e(),r.current=w({keyframes:[t.get(),c.current],velocity:t.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...a,onUpdate:u.current})},e=()=>{r.current&&r.current.stop()};return o.useInsertionEffect(()=>t.attach((s,f)=>i?f(s):(c.current=s,u.current=f,y.update(g),t.get()),e),[JSON.stringify(a)]),v(()=>{if(d(n))return n.on("change",s=>t.set(parseFloat(s)))},[t]),t}function k({size:n,variant:a,progress:i,thickness:r=3.6,color:t="primary",sx:c,...u}){const g=R(i,{stiffness:100,damping:30,restDelta:.001}),e=a==="circular"?n??64:n??3,s=m.jsxs(p,{component:"svg",width:e,height:e,viewBox:`0 0 ${e} ${e}`,xmlns:"http://www.w3.org/2000/svg",sx:{width:e,height:e,transform:"rotate(-90deg)",color:l=>l.vars.palette.text.primary,...t!=="inherit"&&{color:l=>l.vars.palette[t].main},circle:{fill:"none",strokeDashoffset:0,strokeWidth:r,stroke:"currentColor"},...c},...u,children:[m.jsx(p,{component:"circle",cx:e/2,cy:e/2,r:e/2-r-4,strokeOpacity:"0.2",pathLength:"1"}),m.jsx(p,{component:h.circle,cx:e/2,cy:e/2,r:e/2-r-4,pathLength:"1",style:{pathLength:i}})]}),f=m.jsx(p,{component:h.div,sx:{top:0,left:0,right:0,zIndex:1999,height:e,transformOrigin:"0%",bgcolor:"text.primary",...t!=="inherit"&&{background:l=>`linear-gradient(135deg, ${l.vars.palette[t].light}, ${l.vars.palette[t].main})`},...c},style:{scaleX:g},...u});return m.jsx(p,{sx:{overflow:"hidden"},children:a==="circular"?s:f})}function D(n="document"){const a=o.useRef(null),i={container:a},{scrollYProgress:r,scrollXProgress:t}=j(n==="container"?i:void 0);return o.useMemo(()=>({elementRef:a,scrollXProgress:t,scrollYProgress:r}),[a,t,r])}export{k as S,D as a,R as u};

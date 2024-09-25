import{bt as M,bu as Q,aQ as C,aU as R,dh as H,r as m,aW as E,aX as U,j as e,aY as G,aZ as O,av as F,s as V,B as h,az as j,v as S,T as x,e as c,I as L,S as D,p as W,H as Y,C as _}from"./index-s58VYgz3.js";import{C as X}from"./custom-breadcrumbs-CvYJnLq0.js";import{C as Z}from"./component-hero-tNsOm2aC.js";import{a as I}from"./component-block-DG_amQxD.js";import{e as q,f as J,S as z,s as p,a as y,b as k,c as w}from"./Stepper-mz7yAgLv.js";import{S as K}from"./component-template-7Tk9tSBt.js";import"./CardHeader-D1mBolA2.js";import"./CardContent-sogQDHWz.js";function ee(t){return Q("MuiStepContent",t)}M("MuiStepContent",["root","last","transition"]);const te=["children","className","TransitionComponent","transitionDuration","TransitionProps"],ne=t=>{const{classes:s,last:r}=t;return O({root:["root",r&&"last"],transition:["transition"]},ee,s)},se=C("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:r}=t;return[s.root,r.last&&s.last]}})(({ownerState:t,theme:s})=>R({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:s.vars?`1px solid ${s.vars.palette.StepContent.border}`:`1px solid ${s.palette.mode==="light"?s.palette.grey[400]:s.palette.grey[600]}`},t.last&&{borderLeft:"none"})),oe=C(H,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,s)=>s.transition})({}),re=m.forwardRef(function(s,r){const a=E({props:s,name:"MuiStepContent"}),{children:l,className:o,TransitionComponent:d=H,transitionDuration:v="auto",TransitionProps:f}=a,b=U(a,te);m.useContext(q);const{active:n,last:i,expanded:g}=m.useContext(J),u=R({},a,{last:i}),B=ne(u);let P=v;return v==="auto"&&!d.muiSupportAuto&&(P=void 0),e.jsx(se,R({className:G(B.root,o),ref:r,ownerState:u},b,{children:e.jsx(oe,R({as:d,in:n||g,className:B.transition,ownerState:u,timeout:P,unmountOnExit:!0},f,{children:l}))}))}),$=["Select campaign settings","Create an ad group","Create an ad"],ae=C(z)(({theme:t})=>({[`&.${p.alternativeLabel}`]:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},[`&.${p.active}`]:{[`& .${p.line}`]:{borderColor:t.vars.palette.success.main}},[`&.${p.completed}`]:{[`& .${p.line}`]:{borderColor:t.vars.palette.success.main}},[`& .${p.line}`]:{borderRadius:1,borderTopWidth:3,borderColor:t.vars.palette.divider}})),ie=C("div")(({theme:t,ownerState:s})=>({height:22,display:"flex",alignItems:"center",color:t.vars.palette.text.disabled,...s.active&&{color:t.vars.palette.success.main},"& .QontoStepIcon-completedIcon":{zIndex:1,fontSize:18,color:t.vars.palette.success.main},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}}));function le(t){const{active:s,completed:r,className:a}=t;return e.jsx(ie,{ownerState:{active:s},className:a,children:r?e.jsx(L,{icon:"eva:checkmark-fill",className:"QontoStepIcon-completedIcon",width:24,height:24}):e.jsx("div",{className:"QontoStepIcon-circle"})})}const ce=C(z)(({theme:t})=>({[`&.${p.alternativeLabel}`]:{top:22},[`&.${p.active}`]:{[`& .${p.line}`]:{...F({color:`0deg, ${t.vars.palette.error.light}, ${t.vars.palette.error.main}`})}},[`&.${p.completed}`]:{[`& .${p.line}`]:{...F({color:`0deg, ${t.vars.palette.error.light}, ${t.vars.palette.error.main}`})}},[`& .${p.line}`]:{height:3,border:0,borderRadius:1,backgroundColor:t.vars.palette.divider}})),pe=C("div")(({theme:t,ownerState:s})=>({zIndex:1,width:50,height:50,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:t.vars.palette.text.disabled,backgroundColor:t.vars.palette.grey[300],[V.dark]:{backgroundColor:t.vars.palette.grey[700]},...s.active&&{...F({color:`0deg, ${t.vars.palette.error.light}, ${t.vars.palette.error.main}`}),color:t.vars.palette.common.white,boxShadow:"0 4px 10px 0 rgba(0,0,0,0.25)"},...s.completed&&{color:t.vars.palette.common.white,...F({color:`0deg, ${t.vars.palette.error.light}, ${t.vars.palette.error.main}`})}}));function de(t){const{active:s,completed:r,className:a,icon:l}=t,o={1:e.jsx(L,{icon:"eva:settings-2-outline",width:24}),2:e.jsx(L,{icon:"eva:person-add-outline",width:24}),3:e.jsx(L,{icon:"eva:monitor-outline",width:24})};return e.jsx(pe,{ownerState:{completed:r,active:s},className:a,children:o[String(l)]})}function he(t){switch(t){case 0:return"Select campaign settings...";case 1:return"What is an ad group anyways?";case 2:return"This is the bit I really care about!";default:return"Unknown step"}}function xe(){const[t,s]=m.useState(0),r=()=>{s(o=>o+1)},a=()=>{s(o=>o-1)},l=()=>{s(0)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{alternativeLabel:!0,activeStep:t,connector:e.jsx(ae,{}),children:$.map(o=>e.jsx(k,{children:e.jsx(w,{StepIconComponent:le,children:o})},o))}),e.jsx(h,{sx:{mb:5}}),e.jsx(y,{alternativeLabel:!0,activeStep:t,connector:e.jsx(ce,{}),children:$.map(o=>e.jsx(k,{children:e.jsx(w,{StepIconComponent:de,children:o})},o))}),t===$.length?e.jsxs(e.Fragment,{children:[e.jsx(j,{sx:{p:3,my:3,minHeight:120,bgcolor:o=>S(o.vars.palette.grey["500Channel"],.12)},children:e.jsx(x,{sx:{my:1},children:"All steps completed - you're finished"})}),e.jsx(c,{color:"inherit",onClick:l,sx:{mr:"auto"},children:"Reset"})]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{sx:{p:3,my:3,minHeight:120,bgcolor:o=>S(o.vars.palette.grey["500Channel"],.12)},children:e.jsx(x,{sx:{my:1},children:he(t)})}),e.jsxs(h,{sx:{textAlign:"right"},children:[e.jsx(c,{disabled:t===0,onClick:a,sx:{mr:1},children:"Back"}),e.jsx(c,{variant:"contained",onClick:r,sx:{mr:1},children:t===$.length-1?"Finish":"Next"})]})]})]})}const N=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];function me(){const[t,s]=m.useState(0),r=()=>{s(o=>o+1)},a=()=>{s(o=>o-1)},l=()=>{s(0)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{activeStep:t,orientation:"vertical",children:N.map((o,d)=>e.jsxs(k,{children:[e.jsx(w,{optional:d===2?e.jsx(x,{variant:"caption",children:"Last step"}):null,children:o.label}),e.jsxs(re,{children:[e.jsx(x,{children:o.description}),e.jsxs(h,{sx:{mt:3},children:[e.jsx(c,{variant:"contained",onClick:r,children:d===N.length-1?"Finish":"Continue"}),e.jsx(c,{disabled:d===0,onClick:a,children:"Back"})]})]})]},o.label))}),t===N.length&&e.jsxs(j,{sx:{p:3,mt:3,bgcolor:o=>S(o.vars.palette.grey["500Channel"],.12)},children:[e.jsx(x,{sx:{mb:2},children:"All steps completed - you're finished"}),e.jsx(c,{onClick:l,children:"Reset"})]})]})}const T=["Select campaign settings","Create an ad group","Create an ad"];function ue(){const[t,s]=m.useState(0),[r,a]=m.useState(new Set),l=n=>n===1,o=n=>r.has(n),d=()=>{let n=r;o(t)&&(n=new Set(n.values()),n.delete(t)),s(i=>i+1),a(n)},v=()=>{s(n=>n-1)},f=()=>{if(!l(t))throw new Error("You can't skip a step that isn't optional.");s(n=>n+1),a(n=>{const i=new Set(n.values());return i.add(t),i})},b=()=>{s(0)};return e.jsxs(h,{sx:{width:1},children:[e.jsx(y,{activeStep:t,children:T.map((n,i)=>{const g={},u={};return l(i)&&(u.optional=e.jsx(x,{variant:"caption",children:"Optional"})),o(i)&&(g.completed=!1),e.jsx(k,{...g,children:e.jsx(w,{...u,children:n})},n)})}),t===T.length?e.jsxs(e.Fragment,{children:[e.jsx(j,{sx:{p:3,my:3,minHeight:120,bgcolor:n=>S(n.vars.palette.grey["500Channel"],.12)},children:e.jsx(x,{sx:{my:1},children:"All steps completed - you're finished"})}),e.jsxs(h,{sx:{display:"flex"},children:[e.jsx(h,{sx:{flexGrow:1}}),e.jsx(c,{onClick:b,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{sx:{p:3,my:3,minHeight:120,bgcolor:n=>S(n.vars.palette.grey["500Channel"],.12)},children:e.jsxs(x,{sx:{my:1},children:[" Step ",t+1]})}),e.jsxs(D,{direction:"row",children:[e.jsx(c,{color:"inherit",disabled:t===0,onClick:v,sx:{mr:1},children:"Back"}),e.jsx(h,{sx:{flexGrow:1}}),l(t)&&e.jsx(c,{color:"inherit",onClick:f,sx:{mr:1},children:"Skip"}),e.jsx(c,{variant:"contained",onClick:d,children:t===T.length-1?"Finish":"Next"})]})]})]})}const A=["Select campaign settings","Create an ad group","Create an ad"];function ge(){const[t,s]=m.useState(0),[r,a]=m.useState(new Set),l=n=>n===1,o=n=>r.has(n),d=()=>{let n=r;o(t)&&(n=new Set(n.values()),n.delete(t)),s(i=>i+1),a(n)},v=()=>{s(n=>n-1)},f=()=>{if(!l(t))throw new Error("You can't skip a step that isn't optional.");s(n=>n+1),a(n=>{const i=new Set(n.values());return i.add(t),i})},b=()=>{s(0)};return e.jsxs(e.Fragment,{children:[e.jsx(y,{activeStep:t,alternativeLabel:!0,children:A.map((n,i)=>{const g={},u={};return o(i)&&(g.completed=!1),e.jsx(k,{...g,children:e.jsx(w,{...u,children:n})},n)})}),t===A.length?e.jsxs(e.Fragment,{children:[e.jsx(j,{sx:{p:3,my:3,minHeight:120,bgcolor:n=>S(n.vars.palette.grey["500Channel"],.12)},children:e.jsx(x,{sx:{my:1},children:"All steps completed - you're finished"})}),e.jsxs(h,{sx:{display:"flex"},children:[e.jsx(h,{sx:{flexGrow:1}}),e.jsx(c,{onClick:b,children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{sx:{p:3,my:3,minHeight:120,bgcolor:n=>S(n.vars.palette.grey["500Channel"],.12)},children:e.jsxs(x,{sx:{my:1},children:[" Step ",t+1]})}),e.jsxs(D,{direction:"row",children:[e.jsx(c,{color:"inherit",disabled:t===0,onClick:v,sx:{mr:1},children:"Back"}),e.jsx(h,{sx:{flexGrow:1}}),l(t)&&e.jsx(c,{color:"inherit",onClick:f,sx:{mr:1},children:"Skip"}),e.jsx(c,{variant:"contained",onClick:d,children:t===A.length-1?"Finish":"Next"})]})]})]})}function je(){const t=[{name:"Horizontal linear stepper",component:e.jsx(I,{sx:{flexDirection:"column",alignItems:"unset"},children:e.jsx(ue,{})})},{name:"Linear alternative label",component:e.jsx(I,{sx:{flexDirection:"column",alignItems:"unset"},children:e.jsx(ge,{})})},{name:"Vertical linear stepper",component:e.jsx(I,{sx:{flexDirection:"column",alignItems:"unset"},children:e.jsx(me,{})})},{name:"Customized stepper",component:e.jsx(I,{sx:{flexDirection:"column",alignItems:"unset"},children:e.jsx(xe,{})})}];return e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:e.jsx(X,{heading:"Stepper",links:[{name:"Components",href:W.components},{name:"Stepper"}],moreLink:["https://mui.com/components/steppers"]})}),e.jsx(K,{data:t})]})}const Se={title:`Stepper | MUI - ${_.site.name}`};function $e(){return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsxs("title",{children:[" ",Se.title]})}),e.jsx(je,{})]})}export{$e as default};

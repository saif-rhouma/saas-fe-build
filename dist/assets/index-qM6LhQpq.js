import{r as m,j as e,p as x,I as a,B as j,H as p,C as f}from"./index-Cb6aSJqI.js";import{C as h}from"./custom-breadcrumbs-k2LFOW06.js";import{C as g}from"./component-hero-BZXVmynV.js";import{a as s}from"./component-block-O3tX8buv.js";import{S as C}from"./component-template-JdAFoJkb.js";import{R as n}from"./Rating-DQIiPGvY.js";import"./CardHeader-iu_IfPM-.js";import"./CardContent-BWgIRLWZ.js";import"./visuallyHidden-Dan1xhjv.js";const b={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"},c={1:{icon:e.jsx(a,{icon:"ic:round-sentiment-very-dissatisfied"}),label:"Very Dissatisfied"},2:{icon:e.jsx(a,{icon:"ic:round-sentiment-dissatisfied"}),label:"Dissatisfied"},3:{icon:e.jsx(a,{icon:"ic:round-sentiment-neutral"}),label:"Neutral"},4:{icon:e.jsx(a,{icon:"ic:round-sentiment-satisfied"}),label:"Satisfied"},5:{icon:e.jsx(a,{icon:"ic:round-sentiment-very-satisfied"}),label:"Very Satisfied"}};function v(){const[o,l]=m.useState(2),[r,d]=m.useState(-1),u=[{name:"Controlled",component:e.jsx(s,{children:e.jsx(n,{name:"simple-controlled",value:o,onChange:(t,i)=>{l(i)}})})},{name:"Read only",component:e.jsx(s,{children:e.jsx(n,{name:"read-only",value:o,readOnly:!0})})},{name:"Disabled",component:e.jsx(s,{children:e.jsx(n,{name:"disabled",value:o,disabled:!0})})},{name:"Pristine",component:e.jsx(s,{children:e.jsx(n,{name:"pristine",value:null})})},{name:"Custom empty icon",component:e.jsx(s,{children:e.jsx(n,{name:"customized-empty",defaultValue:2,precision:.5})})},{name:"Custom icon and color",component:e.jsx(s,{children:e.jsx(n,{name:"customized-color",defaultValue:2,getLabelText:t=>`${t} Heart${t!==1?"s":""}`,precision:.5,icon:e.jsx(a,{icon:"solar:heart-bold"}),emptyIcon:e.jsx(a,{icon:"solar:heart-bold"}),sx:{color:"info.main","&:hover":{color:"info.dark"}}})})},{name:"10 stars",component:e.jsx(s,{children:e.jsx(n,{name:"customized-10",defaultValue:2,max:10})})},{name:"Custom icon set",component:e.jsx(s,{children:e.jsx(n,{name:"customized-icons",defaultValue:2,getLabelText:t=>c[t].label,IconContainerComponent:V})})},{name:"Hover feedback",component:e.jsxs(s,{children:[e.jsx(n,{name:"hover-feedback",value:o,precision:.5,onChange:(t,i)=>{l(i)},onChangeActive:(t,i)=>{d(i)}}),o!==null&&e.jsx(j,{sx:{ml:2},children:b[r!==-1?r:o]})]})},{name:"Half ratings",component:e.jsxs(s,{children:[e.jsx(n,{name:"half-rating",defaultValue:2.5,precision:.5}),e.jsx(n,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]})},{name:"Sizes",component:e.jsxs(s,{children:[e.jsx(n,{name:"size-small",defaultValue:2,size:"small"}),e.jsx(n,{name:"size-medium",defaultValue:2}),e.jsx(n,{name:"size-large",defaultValue:2,size:"large"})]})}];return e.jsxs(e.Fragment,{children:[e.jsx(g,{children:e.jsx(h,{heading:"Rating",links:[{name:"Components",href:x.components},{name:"Rating"}],moreLink:["https://mui.com/components/rating"]})}),e.jsx(C,{data:u})]})}function V(o){const{value:l,...r}=o;return e.jsx("span",{...r,children:c[l].icon})}const y={title:`Rating | MUI - ${f.site.name}`};function D(){return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs("title",{children:[" ",y.title]})}),e.jsx(v,{})]})}export{D as default};

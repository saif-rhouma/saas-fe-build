import{aw as ae,aD as E,aA as c,j as t,co as ne,aE as V,r as h,bm as re,am as ee,cp as Y,aC as ie,cj as le,aW as b,S as g,e1 as ce,e2 as de,ec as $,c as ue,bR as U,e as W,L as me,d0 as O,p as pe,H as he,C as fe}from"./index-CeoumMXa.js";import{C as be}from"./custom-breadcrumbs-ngxVXzzx.js";import{a as x}from"./component-block-BrE1jzNC.js";import{V as xe,W as je,X as De,Y as ge,U as C,s as L,v as ye,Z as ke,_ as Ce,$ as F,a0 as Pe,a as Te,u as ve,a1 as we,G as Se,H as Oe,I as Fe,a2 as Re,L as G,E as R,K as We,a3 as Ae,a4 as Me,D as y,a5 as Q}from"./DatePicker-UmXUWr0U.js";import{P as e}from"./index-DetNUK_X.js";import{u as Ve,r as A,v as Ie,a as Ee,b as Le,c as q,d as Ne,D as Be,e as He,m as K,f as _e,g as ze,h as Ye,M as te,T as M,i as $e,j as Ue}from"./MobileDateTimePicker-bh-hYpGs.js";import{C as Ge}from"./component-hero-l5ma9eZu.js";import{a as Qe,b as qe,D as Ke}from"./DialogContent-lL6v-LR1.js";import{D as Ze}from"./DialogTitle-DLappBwE.js";import{F as Je}from"./FormHelperText-NhuMVC6U.js";import{S as Xe}from"./component-template-DRC92Zde.js";import"./FormControl-BFUuTpvQ.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-BN-i6Vxq.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-D-qsWjCe.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-z3Q2rwEm.js";import"./Select-DbrC784k.js";import"./Menu-CT9abzpD.js";import"./InputBase-BzFRFGp-.js";import"./InputAdornment-C38_n1P8.js";import"./ListItem-B8kaKgTM.js";import"./Chip-CvED2Eee.js";import"./Tabs-JWaOApeP.js";import"./KeyboardArrowRight-PHQ94moU.js";import"./CardHeader-27cH_-2i.js";import"./CardContent-BfyJFKse.js";const et=["props","ref"],tt=ae(xe)(({theme:a})=>({overflow:"hidden",minWidth:je,backgroundColor:(a.vars||a).palette.background.paper})),oe=a=>{let{props:s,ref:o}=a,r=E(a,et);const{localeText:l,slots:n,slotProps:i,className:u,sx:d,displayStaticWrapperAs:p,autoFocus:m}=s,{layoutProps:f,renderCurrentView:D}=De(c({},r,{props:s,autoFocusView:m??!1,fieldRef:void 0,additionalViewProps:{},wrapperVariant:p})),k=(n==null?void 0:n.layout)??tt;return{renderPicker:()=>{var w,P,S;return t.jsx(ne,{localeText:l,children:t.jsx(k,c({},f,i==null?void 0:i.layout,{slots:n,slotProps:i,sx:[...Array.isArray(d)?d:[d],...Array.isArray((w=i==null?void 0:i.layout)==null?void 0:w.sx)?i.layout.sx:[(P=i==null?void 0:i.layout)==null?void 0:P.sx]],className:V(u,(S=i==null?void 0:i.layout)==null?void 0:S.className),ref:o,children:D()}))})}}},se=h.forwardRef(function(s,o){var d;const r=ge(s,"MuiStaticDatePicker"),l=r.displayStaticWrapperAs??"mobile",n=c({day:C,month:C,year:C},r.viewRenderers),i=c({},r,{viewRenderers:n,displayStaticWrapperAs:l,yearsPerRow:r.yearsPerRow??(l==="mobile"?3:4),slotProps:c({},r.slotProps,{toolbar:c({hidden:l==="desktop"},(d=r.slotProps)==null?void 0:d.toolbar)})}),{renderPicker:u}=oe({props:i,valueManager:L,valueType:"date",validator:ye,ref:o});return u()});se.propTypes={autoFocus:e.bool,className:e.string,dayOfWeekFormatter:e.func,defaultValue:e.object,disabled:e.bool,disableFuture:e.bool,disableHighlightToday:e.bool,disablePast:e.bool,displayStaticWrapperAs:e.oneOf(["desktop","mobile"]),displayWeekNumber:e.bool,fixedWeekNumber:e.number,loading:e.bool,localeText:e.object,maxDate:e.object,minDate:e.object,monthsPerRow:e.oneOf([3,4]),onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onMonthChange:e.func,onViewChange:e.func,onYearChange:e.func,openTo:e.oneOf(["day","month","year"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,referenceDate:e.object,renderLoading:e.func,shouldDisableDate:e.func,shouldDisableMonth:e.func,shouldDisableYear:e.func,showDaysOutsideCurrentMonth:e.bool,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),timezone:e.string,value:e.object,view:e.oneOf(["day","month","year"]),viewRenderers:e.shape({day:e.func,month:e.func,year:e.func}),views:e.arrayOf(e.oneOf(["day","month","year"]).isRequired),yearsPerRow:e.oneOf([3,4])};const I=h.forwardRef(function(s,o){var p;const r=Ve(s,"MuiStaticTimePicker"),l=r.displayStaticWrapperAs??"mobile",n=r.ampmInClock??l==="desktop",i=c({hours:A,minutes:A,seconds:A},r.viewRenderers),u=c({},r,{viewRenderers:i,displayStaticWrapperAs:l,ampmInClock:n,slotProps:c({},r.slotProps,{toolbar:c({hidden:l==="desktop",ampmInClock:n},(p=r.slotProps)==null?void 0:p.toolbar)})}),{renderPicker:d}=oe({props:u,valueManager:L,valueType:"time",validator:Ie,ref:o});return d()});I.propTypes={ampm:e.bool,ampmInClock:e.bool,autoFocus:e.bool,className:e.string,defaultValue:e.object,disabled:e.bool,disableFuture:e.bool,disableIgnoringDatePartForTimeValidation:e.bool,disablePast:e.bool,displayStaticWrapperAs:e.oneOf(["desktop","mobile"]),localeText:e.object,maxTime:e.object,minTime:e.object,minutesStep:e.number,onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onViewChange:e.func,openTo:e.oneOf(["hours","minutes","seconds"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,referenceDate:e.object,shouldDisableTime:e.func,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),timezone:e.string,value:e.object,view:e.oneOf(["hours","minutes","seconds"]),viewRenderers:e.shape({hours:e.func,minutes:e.func,seconds:e.func}),views:e.arrayOf(e.oneOf(["hours","minutes","seconds"]).isRequired)};function ot(a){var j;const s=re(),{toolbar:o,tabs:r,content:l,actionBar:n,shortcuts:i}=ke(a),{sx:u,className:d,isLandscape:p,ref:m,classes:f}=a,D=n&&(((j=n.props.actions)==null?void 0:j.length)??0)>0,k=c({},a,{isRtl:s});return t.jsxs(Ce,{ref:m,className:V(d,F.root,f==null?void 0:f.root),sx:[{[`& .${F.tabs}`]:{gridRow:4,gridColumn:"1 / 4"},[`& .${F.actionBar}`]:{gridRow:5}},...Array.isArray(u)?u:[u]],ownerState:k,children:[p?i:o,p?o:i,t.jsxs(Pe,{className:V(F.contentWrapper,f==null?void 0:f.contentWrapper),sx:{display:"grid"},children:[l,r,D&&t.jsx(ee,{sx:{gridRow:3,gridColumn:"1 / 4"}})]}),n]})}const st=["openTo","focusedView","timeViewsCount"],at=function(s,o,r){var m,f;const{openTo:l,focusedView:n,timeViewsCount:i}=r,u=E(r,st),d=c({},u,{focusedView:null,sx:[{[`&.${K.root}`]:{borderBottom:0},[`&.${K.root}, .${_e.root}, &.${ze.root}`]:{maxHeight:Re}}]}),p=R(o);return t.jsxs(h.Fragment,{children:[(m=s[p?"day":o])==null?void 0:m.call(s,c({},r,{view:p?"day":o,focusedView:n&&G(n)?n:null,views:r.views.filter(G),sx:[{gridColumn:1},...d.sx]})),i>0&&t.jsxs(h.Fragment,{children:[t.jsx(ee,{orientation:"vertical",sx:{gridColumn:2}}),(f=s[p?o:"hours"])==null?void 0:f.call(s,c({},d,{view:p?o:"hours",focusedView:n&&R(n)?n:null,openTo:R(l)?l:"hours",views:r.views.filter(R),sx:[{gridColumn:3},...d.sx]}))]})]})},N=h.forwardRef(function(s,o){var B,H,_,z;const r=Te(),l=ve(),n=Ee(s,"MuiDesktopDateTimePicker"),{shouldRenderTimeInASingleColumn:i,thresholdToRenderTimeInASingleColumn:u,views:d,timeSteps:p}=Le(n),m=i?Ye:q,f=c({day:C,month:C,year:C,hours:m,minutes:m,seconds:m,meridiem:m},n.viewRenderers),D=n.ampmInClock??!0,j=((B=f.hours)==null?void 0:B.name)===q.name?d:d.filter(T=>T!=="meridiem"),w=i?[]:["accept"],P=c({},n,{viewRenderers:f,format:Ne(l,n),views:j,yearsPerRow:n.yearsPerRow??4,ampmInClock:D,timeSteps:p,thresholdToRenderTimeInASingleColumn:u,shouldRenderTimeInASingleColumn:i,slots:c({field:Be,layout:ot,openPickerIcon:we},n.slots),slotProps:c({},n.slotProps,{field:T=>{var v;return c({},Y((v=n.slotProps)==null?void 0:v.field,T),Se(n),{ref:o})},toolbar:c({hidden:!0,ampmInClock:D,toolbarVariant:"desktop"},(H=n.slotProps)==null?void 0:H.toolbar),tabs:c({hidden:!0},(_=n.slotProps)==null?void 0:_.tabs),actionBar:T=>{var v;return c({actions:w},Y((v=n.slotProps)==null?void 0:v.actionBar,T))}})}),{renderPicker:S}=Oe({props:P,valueManager:L,valueType:"date-time",getOpenDialogAriaText:((z=P.localeText)==null?void 0:z.openDatePickerDialogue)??r.openDatePickerDialogue,validator:He,rendererInterceptor:at});return S()});N.propTypes={ampm:e.bool,ampmInClock:e.bool,autoFocus:e.bool,className:e.string,closeOnSelect:e.bool,dayOfWeekFormatter:e.func,defaultValue:e.object,disabled:e.bool,disableFuture:e.bool,disableHighlightToday:e.bool,disableIgnoringDatePartForTimeValidation:e.bool,disableOpenPicker:e.bool,disablePast:e.bool,displayWeekNumber:e.bool,enableAccessibleFieldDOMStructure:e.any,fixedWeekNumber:e.number,format:e.string,formatDensity:e.oneOf(["dense","spacious"]),inputRef:Fe,label:e.node,loading:e.bool,localeText:e.object,maxDate:e.object,maxDateTime:e.object,maxTime:e.object,minDate:e.object,minDateTime:e.object,minTime:e.object,minutesStep:e.number,monthsPerRow:e.oneOf([3,4]),name:e.string,onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onMonthChange:e.func,onOpen:e.func,onSelectedSectionsChange:e.func,onViewChange:e.func,onYearChange:e.func,open:e.bool,openTo:e.oneOf(["day","hours","meridiem","minutes","month","seconds","year"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,referenceDate:e.object,renderLoading:e.func,selectedSections:e.oneOfType([e.oneOf(["all","day","empty","hours","meridiem","minutes","month","seconds","weekDay","year"]),e.number]),shouldDisableDate:e.func,shouldDisableMonth:e.func,shouldDisableTime:e.func,shouldDisableYear:e.func,showDaysOutsideCurrentMonth:e.bool,skipDisabled:e.bool,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),thresholdToRenderTimeInASingleColumn:e.number,timeSteps:e.shape({hours:e.number,minutes:e.number,seconds:e.number}),timezone:e.string,value:e.object,view:e.oneOf(["day","hours","meridiem","minutes","month","seconds","year"]),viewRenderers:e.shape({day:e.func,hours:e.func,meridiem:e.func,minutes:e.func,month:e.func,seconds:e.func,year:e.func}),views:e.arrayOf(e.oneOf(["day","hours","minutes","month","seconds","year"]).isRequired),yearsPerRow:e.oneOf([3,4])};const nt=["desktopModeMediaQuery"],Z=h.forwardRef(function(s,o){const r=ie({props:s,name:"MuiDateTimePicker"}),{desktopModeMediaQuery:l=We}=r,n=E(r,nt);return le(l,{defaultMatches:!0})?t.jsx(N,c({ref:o},n)):t.jsx(te,c({ref:o},n))});function rt(){const[a,s]=h.useState(b(new Date));return t.jsxs(g,{spacing:5,children:[t.jsxs(x,{title:"Basic",children:[t.jsx(Ae,{label:"For desktop",value:a,minDate:b("2017-01-01"),onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(Me,{orientation:"portrait",label:"For mobile",value:a,onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}})]}),t.jsxs(x,{title:"Views playground",children:[t.jsx(y,{views:["year"],label:"Year only",value:a,onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(y,{views:["year","month"],label:"Year and Month",minDate:b("2012-03-01"),maxDate:b("2023-06-01"),value:a,onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(y,{openTo:"year",views:["year","month","day"],label:"Year, month and date",value:a,onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(y,{views:["day","month","year"],label:"Invert the order of views",value:a,onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(y,{views:["day"],label:"Just date",value:a,onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}})]}),t.jsx(x,{title:"Static mode",children:t.jsx(ce,{children:t.jsx(se,{orientation:"landscape",value:a,onChange:o=>{s(o)}})})})]})}function it(){const[a,s]=h.useState(b(new Date));return t.jsxs(g,{spacing:3,children:[t.jsxs(x,{title:"Basic",children:[t.jsx(M,{label:"12 hours",value:a,onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(M,{ampm:!1,label:"24 hours",value:a,onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}})]}),t.jsxs(x,{title:"Responsiveness",children:[t.jsx($e,{orientation:"portrait",label:"For mobile",value:a,onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(Ue,{label:"For desktop",value:a,onChange:o=>{s(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(M,{value:a,onChange:s,slotProps:{textField:{fullWidth:!0}}})]}),t.jsxs(x,{title:"Static mode",children:[t.jsx(I,{orientation:"portrait",value:a,onChange:o=>{s(o)}}),t.jsx(I,{ampm:!0,orientation:"landscape",openTo:"minutes",value:a,onChange:o=>{s(o)}})]})]})}function lt(){const[a,s]=h.useState(b(new Date)),[o,r]=h.useState(b("2018-01-01T00:00:00.000Z"));return t.jsxs(g,{spacing:5,children:[t.jsx(x,{title:"Basic",children:t.jsx(Z,{label:"DateTimePicker",value:a,onChange:s,slotProps:{textField:{fullWidth:!0}}})}),t.jsxs(x,{title:"Responsiveness",children:[t.jsx(te,{value:o,onChange:l=>{r(l)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(N,{value:o,onChange:l=>{r(l)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(Z,{value:o,onChange:l=>{r(l)},slotProps:{textField:{fullWidth:!0}}})]})]})}function J(a,s){const[o,r]=h.useState(!1),[l,n]=h.useState(s),[i,u]=h.useState(a),d=de(i,l),p=h.useCallback(()=>{r(!0)},[]),m=h.useCallback(()=>{r(!1)},[]),f=h.useCallback(j=>{u(j)},[]),D=h.useCallback(j=>{d&&n(null),n(j)},[d]),k=h.useCallback(()=>{u(null),n(null)},[]);return{startDate:i,endDate:l,onChangeStartDate:f,onChangeEndDate:D,open:o,onOpen:p,onClose:m,onReset:k,selected:!!i&&!!l,error:d,label:$(i,l,!0),shortLabel:$(i,l),setStartDate:u,setEndDate:n}}function X({open:a,error:s,endDate:o,onClose:r,startDate:l,onChangeEndDate:n,variant:i="input",onChangeStartDate:u,title:d="Select date range"}){const p=ue("up","md"),m=i==="calendar";return t.jsxs(Qe,{fullWidth:!0,maxWidth:m?!1:"xs",open:a,onClose:r,PaperProps:{sx:{...m&&{maxWidth:720}}},children:[t.jsx(Ze,{sx:{pb:2},children:d}),t.jsxs(qe,{sx:{...m&&p&&{overflow:"unset"}},children:[t.jsx(g,{justifyContent:"center",spacing:m?3:2,direction:m&&p?"row":"column",sx:{pt:1},children:m?t.jsxs(t.Fragment,{children:[t.jsx(U,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:t.jsx(Q,{value:l,onChange:u})}),t.jsx(U,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:t.jsx(Q,{value:o,onChange:n})})]}):t.jsxs(t.Fragment,{children:[t.jsx(y,{label:"Start date",value:l,onChange:u}),t.jsx(y,{label:"End date",value:o,onChange:n})]})}),s&&t.jsx(Je,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),t.jsxs(Ke,{children:[t.jsx(W,{variant:"outlined",color:"inherit",onClick:r,children:"Cancel"}),t.jsx(W,{disabled:s,variant:"contained",onClick:r,children:"Apply"})]})]})}function ct(){const a=J(b(),b()),s=J(b(new Date("2024/08/08")),null);return t.jsxs(t.Fragment,{children:[t.jsxs(g,{sx:{typography:"body2",mb:3,color:"text.secondary"},children:[t.jsx("div",{children:"This is the custom component from minimal."}),t.jsx("div",{children:"You can use more advanced components by MUI."}),t.jsx(me,{href:"https://mui.com/x/react-date-pickers/date-range-picker/",children:"https://mui.com/x/react-date-pickers/date-range-picker/"})]}),t.jsxs(g,{spacing:3,direction:{xs:"column",md:"row"},children:[t.jsxs(x,{title:"Input",sx:{flexDirection:"column"},children:[t.jsx(W,{variant:"contained",onClick:a.onOpen,children:"Click me!"}),t.jsxs(g,{sx:{typography:"body2",mt:3},children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Start:"})," ",O(a.startDate)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"End:"})," ",O(a.endDate)]})]}),t.jsx(X,{open:a.open,startDate:a.startDate,endDate:a.endDate,onChangeStartDate:a.onChangeStartDate,onChangeEndDate:a.onChangeEndDate,onClose:a.onClose,error:a.error})]}),t.jsxs(x,{title:"Calendar",sx:{flexDirection:"column"},children:[t.jsx(W,{variant:"contained",onClick:s.onOpen,children:"Click me!"}),t.jsxs(g,{sx:{typography:"body2",mt:3},children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Start:"})," ",O(s.startDate)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"End:"})," ",O(s.endDate)]})]}),t.jsx(X,{variant:"calendar",open:s.open,startDate:s.startDate,endDate:s.endDate,onChangeStartDate:s.onChangeStartDate,onChangeEndDate:s.onChangeEndDate,onClose:s.onClose,error:s.error})]})]})]})}function dt(){const a=[{name:"Date",component:t.jsx(rt,{})},{name:"DateTime",component:t.jsx(lt,{})},{name:"Time",component:t.jsx(it,{})},{name:"Range",component:t.jsx(ct,{})}];return t.jsxs(t.Fragment,{children:[t.jsx(Ge,{children:t.jsx(be,{heading:"Date Time Pickers",links:[{name:"Components",href:pe.components},{name:"Date Time Pickers"}],moreLink:["https://mui.com/components/pickers","https://mui.com/x/react-date-pickers/getting-started/"]})}),t.jsx(Xe,{data:a})]})}const ut={title:`Date picker | MUI - ${fe.site.name}`};function Bt(){return t.jsxs(t.Fragment,{children:[t.jsx(he,{children:t.jsxs("title",{children:[" ",ut.title]})}),t.jsx(dt,{})]})}export{Bt as default};

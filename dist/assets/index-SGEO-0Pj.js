import{aO as se,aV as E,aS as c,j as t,cC as ne,aW as V,r as h,bD as re,am as ee,cD as Y,aU as ie,cx as le,bb as b,S as j,e1 as ce,ec as de,eb as $,c as ue,au as U,e as W,L as me,aH as O,p as pe,H as he,C as fe}from"./index-PcvvizaM.js";import{C as be}from"./custom-breadcrumbs-CveB5zSd.js";import{a as x}from"./component-block-lv1a7XGG.js";import{V as xe,W as De,X as ge,Y as je,U as C,s as L,v as ye,Z as ke,_ as Ce,$ as F,a0 as Pe,a as Te,u as ve,a1 as we,G as Se,H as Oe,I as Fe,a2 as Re,L as G,E as R,K as We,a3 as Me,a4 as Ae,D as y,a5 as Q}from"./DatePicker-BpnHzDBD.js";import{P as e}from"./index-2WdDYItv.js";import{u as Ve,r as M,v as Ie,a as Ee,b as Le,c as q,d as Ne,D as He,e as Be,m as K,f as _e,g as ze,h as Ye,M as te,T as A,i as $e,j as Ue}from"./MobileDateTimePicker-m0xyb1Je.js";import{C as Ge}from"./component-hero-Cdp5ZZpi.js";import{a as Qe,b as qe,D as Ke}from"./DialogContent-BNlapGc3.js";import{D as Ze}from"./DialogTitle-AFLXDAx8.js";import{F as Je}from"./FormHelperText-CwIdVd83.js";import{S as Xe}from"./component-template-AOA7DcI1.js";import"./FormControl-BDFWwf0L.js";import"./utils-DoM3o7-Q.js";import"./InputLabel-CLgWCQLa.js";import"./formControlState-Dq1zat_P.js";import"./FormLabel-COKH-IDU.js";import"./visuallyHidden-Dan1xhjv.js";import"./TextField-BqVeNtQk.js";import"./Select-oMu1ahJl.js";import"./Menu-DUpb5sCU.js";import"./InputBase-Dg_k17pz.js";import"./InputAdornment-9Wd2PMBY.js";import"./ListItem-27j6jDo_.js";import"./Chip-CIfpjv01.js";import"./Tabs-CZPaKkdi.js";import"./KeyboardArrowRight-DC977Fth.js";import"./CardHeader-DGEZ_Ma0.js";import"./CardContent-BYZ9hWXW.js";const et=["props","ref"],tt=se(xe)(({theme:s})=>({overflow:"hidden",minWidth:De,backgroundColor:(s.vars||s).palette.background.paper})),oe=s=>{let{props:a,ref:o}=s,r=E(s,et);const{localeText:l,slots:n,slotProps:i,className:u,sx:d,displayStaticWrapperAs:p,autoFocus:m}=a,{layoutProps:f,renderCurrentView:g}=ge(c({},r,{props:a,autoFocusView:m??!1,fieldRef:void 0,additionalViewProps:{},wrapperVariant:p})),k=(n==null?void 0:n.layout)??tt;return{renderPicker:()=>{var w,P,S;return t.jsx(ne,{localeText:l,children:t.jsx(k,c({},f,i==null?void 0:i.layout,{slots:n,slotProps:i,sx:[...Array.isArray(d)?d:[d],...Array.isArray((w=i==null?void 0:i.layout)==null?void 0:w.sx)?i.layout.sx:[(P=i==null?void 0:i.layout)==null?void 0:P.sx]],className:V(u,(S=i==null?void 0:i.layout)==null?void 0:S.className),ref:o,children:g()}))})}}},ae=h.forwardRef(function(a,o){var d;const r=je(a,"MuiStaticDatePicker"),l=r.displayStaticWrapperAs??"mobile",n=c({day:C,month:C,year:C},r.viewRenderers),i=c({},r,{viewRenderers:n,displayStaticWrapperAs:l,yearsPerRow:r.yearsPerRow??(l==="mobile"?3:4),slotProps:c({},r.slotProps,{toolbar:c({hidden:l==="desktop"},(d=r.slotProps)==null?void 0:d.toolbar)})}),{renderPicker:u}=oe({props:i,valueManager:L,valueType:"date",validator:ye,ref:o});return u()});ae.propTypes={autoFocus:e.bool,className:e.string,dayOfWeekFormatter:e.func,defaultValue:e.object,disabled:e.bool,disableFuture:e.bool,disableHighlightToday:e.bool,disablePast:e.bool,displayStaticWrapperAs:e.oneOf(["desktop","mobile"]),displayWeekNumber:e.bool,fixedWeekNumber:e.number,loading:e.bool,localeText:e.object,maxDate:e.object,minDate:e.object,monthsPerRow:e.oneOf([3,4]),onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onMonthChange:e.func,onViewChange:e.func,onYearChange:e.func,openTo:e.oneOf(["day","month","year"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,referenceDate:e.object,renderLoading:e.func,shouldDisableDate:e.func,shouldDisableMonth:e.func,shouldDisableYear:e.func,showDaysOutsideCurrentMonth:e.bool,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),timezone:e.string,value:e.object,view:e.oneOf(["day","month","year"]),viewRenderers:e.shape({day:e.func,month:e.func,year:e.func}),views:e.arrayOf(e.oneOf(["day","month","year"]).isRequired),yearsPerRow:e.oneOf([3,4])};const I=h.forwardRef(function(a,o){var p;const r=Ve(a,"MuiStaticTimePicker"),l=r.displayStaticWrapperAs??"mobile",n=r.ampmInClock??l==="desktop",i=c({hours:M,minutes:M,seconds:M},r.viewRenderers),u=c({},r,{viewRenderers:i,displayStaticWrapperAs:l,ampmInClock:n,slotProps:c({},r.slotProps,{toolbar:c({hidden:l==="desktop",ampmInClock:n},(p=r.slotProps)==null?void 0:p.toolbar)})}),{renderPicker:d}=oe({props:u,valueManager:L,valueType:"time",validator:Ie,ref:o});return d()});I.propTypes={ampm:e.bool,ampmInClock:e.bool,autoFocus:e.bool,className:e.string,defaultValue:e.object,disabled:e.bool,disableFuture:e.bool,disableIgnoringDatePartForTimeValidation:e.bool,disablePast:e.bool,displayStaticWrapperAs:e.oneOf(["desktop","mobile"]),localeText:e.object,maxTime:e.object,minTime:e.object,minutesStep:e.number,onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onViewChange:e.func,openTo:e.oneOf(["hours","minutes","seconds"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,referenceDate:e.object,shouldDisableTime:e.func,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),timezone:e.string,value:e.object,view:e.oneOf(["hours","minutes","seconds"]),viewRenderers:e.shape({hours:e.func,minutes:e.func,seconds:e.func}),views:e.arrayOf(e.oneOf(["hours","minutes","seconds"]).isRequired)};function ot(s){var D;const a=re(),{toolbar:o,tabs:r,content:l,actionBar:n,shortcuts:i}=ke(s),{sx:u,className:d,isLandscape:p,ref:m,classes:f}=s,g=n&&(((D=n.props.actions)==null?void 0:D.length)??0)>0,k=c({},s,{isRtl:a});return t.jsxs(Ce,{ref:m,className:V(d,F.root,f==null?void 0:f.root),sx:[{[`& .${F.tabs}`]:{gridRow:4,gridColumn:"1 / 4"},[`& .${F.actionBar}`]:{gridRow:5}},...Array.isArray(u)?u:[u]],ownerState:k,children:[p?i:o,p?o:i,t.jsxs(Pe,{className:V(F.contentWrapper,f==null?void 0:f.contentWrapper),sx:{display:"grid"},children:[l,r,g&&t.jsx(ee,{sx:{gridRow:3,gridColumn:"1 / 4"}})]}),n]})}const at=["openTo","focusedView","timeViewsCount"],st=function(a,o,r){var m,f;const{openTo:l,focusedView:n,timeViewsCount:i}=r,u=E(r,at),d=c({},u,{focusedView:null,sx:[{[`&.${K.root}`]:{borderBottom:0},[`&.${K.root}, .${_e.root}, &.${ze.root}`]:{maxHeight:Re}}]}),p=R(o);return t.jsxs(h.Fragment,{children:[(m=a[p?"day":o])==null?void 0:m.call(a,c({},r,{view:p?"day":o,focusedView:n&&G(n)?n:null,views:r.views.filter(G),sx:[{gridColumn:1},...d.sx]})),i>0&&t.jsxs(h.Fragment,{children:[t.jsx(ee,{orientation:"vertical",sx:{gridColumn:2}}),(f=a[p?o:"hours"])==null?void 0:f.call(a,c({},d,{view:p?o:"hours",focusedView:n&&R(n)?n:null,openTo:R(l)?l:"hours",views:r.views.filter(R),sx:[{gridColumn:3},...d.sx]}))]})]})},N=h.forwardRef(function(a,o){var H,B,_,z;const r=Te(),l=ve(),n=Ee(a,"MuiDesktopDateTimePicker"),{shouldRenderTimeInASingleColumn:i,thresholdToRenderTimeInASingleColumn:u,views:d,timeSteps:p}=Le(n),m=i?Ye:q,f=c({day:C,month:C,year:C,hours:m,minutes:m,seconds:m,meridiem:m},n.viewRenderers),g=n.ampmInClock??!0,D=((H=f.hours)==null?void 0:H.name)===q.name?d:d.filter(T=>T!=="meridiem"),w=i?[]:["accept"],P=c({},n,{viewRenderers:f,format:Ne(l,n),views:D,yearsPerRow:n.yearsPerRow??4,ampmInClock:g,timeSteps:p,thresholdToRenderTimeInASingleColumn:u,shouldRenderTimeInASingleColumn:i,slots:c({field:He,layout:ot,openPickerIcon:we},n.slots),slotProps:c({},n.slotProps,{field:T=>{var v;return c({},Y((v=n.slotProps)==null?void 0:v.field,T),Se(n),{ref:o})},toolbar:c({hidden:!0,ampmInClock:g,toolbarVariant:"desktop"},(B=n.slotProps)==null?void 0:B.toolbar),tabs:c({hidden:!0},(_=n.slotProps)==null?void 0:_.tabs),actionBar:T=>{var v;return c({actions:w},Y((v=n.slotProps)==null?void 0:v.actionBar,T))}})}),{renderPicker:S}=Oe({props:P,valueManager:L,valueType:"date-time",getOpenDialogAriaText:((z=P.localeText)==null?void 0:z.openDatePickerDialogue)??r.openDatePickerDialogue,validator:Be,rendererInterceptor:st});return S()});N.propTypes={ampm:e.bool,ampmInClock:e.bool,autoFocus:e.bool,className:e.string,closeOnSelect:e.bool,dayOfWeekFormatter:e.func,defaultValue:e.object,disabled:e.bool,disableFuture:e.bool,disableHighlightToday:e.bool,disableIgnoringDatePartForTimeValidation:e.bool,disableOpenPicker:e.bool,disablePast:e.bool,displayWeekNumber:e.bool,enableAccessibleFieldDOMStructure:e.any,fixedWeekNumber:e.number,format:e.string,formatDensity:e.oneOf(["dense","spacious"]),inputRef:Fe,label:e.node,loading:e.bool,localeText:e.object,maxDate:e.object,maxDateTime:e.object,maxTime:e.object,minDate:e.object,minDateTime:e.object,minTime:e.object,minutesStep:e.number,monthsPerRow:e.oneOf([3,4]),name:e.string,onAccept:e.func,onChange:e.func,onClose:e.func,onError:e.func,onMonthChange:e.func,onOpen:e.func,onSelectedSectionsChange:e.func,onViewChange:e.func,onYearChange:e.func,open:e.bool,openTo:e.oneOf(["day","hours","meridiem","minutes","month","seconds","year"]),orientation:e.oneOf(["landscape","portrait"]),readOnly:e.bool,reduceAnimations:e.bool,referenceDate:e.object,renderLoading:e.func,selectedSections:e.oneOfType([e.oneOf(["all","day","empty","hours","meridiem","minutes","month","seconds","weekDay","year"]),e.number]),shouldDisableDate:e.func,shouldDisableMonth:e.func,shouldDisableTime:e.func,shouldDisableYear:e.func,showDaysOutsideCurrentMonth:e.bool,skipDisabled:e.bool,slotProps:e.object,slots:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),thresholdToRenderTimeInASingleColumn:e.number,timeSteps:e.shape({hours:e.number,minutes:e.number,seconds:e.number}),timezone:e.string,value:e.object,view:e.oneOf(["day","hours","meridiem","minutes","month","seconds","year"]),viewRenderers:e.shape({day:e.func,hours:e.func,meridiem:e.func,minutes:e.func,month:e.func,seconds:e.func,year:e.func}),views:e.arrayOf(e.oneOf(["day","hours","minutes","month","seconds","year"]).isRequired),yearsPerRow:e.oneOf([3,4])};const nt=["desktopModeMediaQuery"],Z=h.forwardRef(function(a,o){const r=ie({props:a,name:"MuiDateTimePicker"}),{desktopModeMediaQuery:l=We}=r,n=E(r,nt);return le(l,{defaultMatches:!0})?t.jsx(N,c({ref:o},n)):t.jsx(te,c({ref:o},n))});function rt(){const[s,a]=h.useState(b(new Date));return t.jsxs(j,{spacing:5,children:[t.jsxs(x,{title:"Basic",children:[t.jsx(Me,{label:"For desktop",value:s,minDate:b("2017-01-01"),onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(Ae,{orientation:"portrait",label:"For mobile",value:s,onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}})]}),t.jsxs(x,{title:"Views playground",children:[t.jsx(y,{views:["year"],label:"Year only",value:s,onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(y,{views:["year","month"],label:"Year and Month",minDate:b("2012-03-01"),maxDate:b("2023-06-01"),value:s,onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(y,{openTo:"year",views:["year","month","day"],label:"Year, month and date",value:s,onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(y,{views:["day","month","year"],label:"Invert the order of views",value:s,onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(y,{views:["day"],label:"Just date",value:s,onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}})]}),t.jsx(x,{title:"Static mode",children:t.jsx(ce,{children:t.jsx(ae,{orientation:"landscape",value:s,onChange:o=>{a(o)}})})})]})}function it(){const[s,a]=h.useState(b(new Date));return t.jsxs(j,{spacing:3,children:[t.jsxs(x,{title:"Basic",children:[t.jsx(A,{label:"12 hours",value:s,onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(A,{ampm:!1,label:"24 hours",value:s,onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}})]}),t.jsxs(x,{title:"Responsiveness",children:[t.jsx($e,{orientation:"portrait",label:"For mobile",value:s,onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(Ue,{label:"For desktop",value:s,onChange:o=>{a(o)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(A,{value:s,onChange:a,slotProps:{textField:{fullWidth:!0}}})]}),t.jsxs(x,{title:"Static mode",children:[t.jsx(I,{orientation:"portrait",value:s,onChange:o=>{a(o)}}),t.jsx(I,{ampm:!0,orientation:"landscape",openTo:"minutes",value:s,onChange:o=>{a(o)}})]})]})}function lt(){const[s,a]=h.useState(b(new Date)),[o,r]=h.useState(b("2018-01-01T00:00:00.000Z"));return t.jsxs(j,{spacing:5,children:[t.jsx(x,{title:"Basic",children:t.jsx(Z,{label:"DateTimePicker",value:s,onChange:a,slotProps:{textField:{fullWidth:!0}}})}),t.jsxs(x,{title:"Responsiveness",children:[t.jsx(te,{value:o,onChange:l=>{r(l)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(N,{value:o,onChange:l=>{r(l)},slotProps:{textField:{fullWidth:!0}}}),t.jsx(Z,{value:o,onChange:l=>{r(l)},slotProps:{textField:{fullWidth:!0}}})]})]})}function J(s,a){const[o,r]=h.useState(!1),[l,n]=h.useState(a),[i,u]=h.useState(s),d=de(i,l),p=h.useCallback(()=>{r(!0)},[]),m=h.useCallback(()=>{r(!1)},[]),f=h.useCallback(D=>{u(D)},[]),g=h.useCallback(D=>{d&&n(null),n(D)},[d]),k=h.useCallback(()=>{u(null),n(null)},[]);return{startDate:i,endDate:l,onChangeStartDate:f,onChangeEndDate:g,open:o,onOpen:p,onClose:m,onReset:k,selected:!!i&&!!l,error:d,label:$(i,l,!0),shortLabel:$(i,l),setStartDate:u,setEndDate:n}}function X({open:s,error:a,endDate:o,onClose:r,startDate:l,onChangeEndDate:n,variant:i="input",onChangeStartDate:u,title:d="Select date range"}){const p=ue("up","md"),m=i==="calendar";return t.jsxs(Qe,{fullWidth:!0,maxWidth:m?!1:"xs",open:s,onClose:r,PaperProps:{sx:{...m&&{maxWidth:720}}},children:[t.jsx(Ze,{sx:{pb:2},children:d}),t.jsxs(qe,{sx:{...m&&p&&{overflow:"unset"}},children:[t.jsx(j,{justifyContent:"center",spacing:m?3:2,direction:m&&p?"row":"column",sx:{pt:1},children:m?t.jsxs(t.Fragment,{children:[t.jsx(U,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:t.jsx(Q,{value:l,onChange:u})}),t.jsx(U,{variant:"outlined",sx:{borderRadius:2,borderColor:"divider",borderStyle:"dashed"},children:t.jsx(Q,{value:o,onChange:n})})]}):t.jsxs(t.Fragment,{children:[t.jsx(y,{label:"Start date",value:l,onChange:u}),t.jsx(y,{label:"End date",value:o,onChange:n})]})}),a&&t.jsx(Je,{error:!0,sx:{px:2},children:"End date must be later than start date"})]}),t.jsxs(Ke,{children:[t.jsx(W,{variant:"outlined",color:"inherit",onClick:r,children:"Cancel"}),t.jsx(W,{disabled:a,variant:"contained",onClick:r,children:"Apply"})]})]})}function ct(){const s=J(b(),b()),a=J(b(new Date("2024/08/08")),null);return t.jsxs(t.Fragment,{children:[t.jsxs(j,{sx:{typography:"body2",mb:3,color:"text.secondary"},children:[t.jsx("div",{children:"This is the custom component from minimal."}),t.jsx("div",{children:"You can use more advanced components by MUI."}),t.jsx(me,{href:"https://mui.com/x/react-date-pickers/date-range-picker/",children:"https://mui.com/x/react-date-pickers/date-range-picker/"})]}),t.jsxs(j,{spacing:3,direction:{xs:"column",md:"row"},children:[t.jsxs(x,{title:"Input",sx:{flexDirection:"column"},children:[t.jsx(W,{variant:"contained",onClick:s.onOpen,children:"Click me!"}),t.jsxs(j,{sx:{typography:"body2",mt:3},children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Start:"})," ",O(s.startDate)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"End:"})," ",O(s.endDate)]})]}),t.jsx(X,{open:s.open,startDate:s.startDate,endDate:s.endDate,onChangeStartDate:s.onChangeStartDate,onChangeEndDate:s.onChangeEndDate,onClose:s.onClose,error:s.error})]}),t.jsxs(x,{title:"Calendar",sx:{flexDirection:"column"},children:[t.jsx(W,{variant:"contained",onClick:a.onOpen,children:"Click me!"}),t.jsxs(j,{sx:{typography:"body2",mt:3},children:[t.jsxs("div",{children:[t.jsx("strong",{children:"Start:"})," ",O(a.startDate)]}),t.jsxs("div",{children:[t.jsx("strong",{children:"End:"})," ",O(a.endDate)]})]}),t.jsx(X,{variant:"calendar",open:a.open,startDate:a.startDate,endDate:a.endDate,onChangeStartDate:a.onChangeStartDate,onChangeEndDate:a.onChangeEndDate,onClose:a.onClose,error:a.error})]})]})]})}function dt(){const s=[{name:"Date",component:t.jsx(rt,{})},{name:"DateTime",component:t.jsx(lt,{})},{name:"Time",component:t.jsx(it,{})},{name:"Range",component:t.jsx(ct,{})}];return t.jsxs(t.Fragment,{children:[t.jsx(Ge,{children:t.jsx(be,{heading:"Date Time Pickers",links:[{name:"Components",href:pe.components},{name:"Date Time Pickers"}],moreLink:["https://mui.com/components/pickers","https://mui.com/x/react-date-pickers/getting-started/"]})}),t.jsx(Xe,{data:s})]})}const ut={title:`Date picker | MUI - ${fe.site.name}`};function Ht(){return t.jsxs(t.Fragment,{children:[t.jsx(he,{children:t.jsxs("title",{children:[" ",ut.title]})}),t.jsx(dt,{})]})}export{Ht as default};

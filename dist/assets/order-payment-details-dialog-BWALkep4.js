import{r as we,bO as Fe,dO as Ie,dL as qe,dM as Ge,dK as Le,es as We,j as l,D as xe,S as he,B as $,T as O,aL as Ae,bJ as je,e as Be}from"./index-DAC7DrKI.js";import{z as Se,u as Ne,t as ze,F as He}from"./form-provider-w6GRwc9n.js";import{u as Ve}from"./useMutation-Ds6FyOSf.js";import{b as Te}from"./format-number-BqWqqWdN.js";import{b as Ke}from"./upload-avatar-CXZ0NYIu.js";import"./image-uXppHbLd.js";import{F as Ce}from"./fields-D3apoPNI.js";import"./editor-DHP9j2dL.js";import{s as Ue}from"./schema-helper-D1xNGTQ3.js";import{a as Ye,b as Qe,D as Je}from"./DialogContent-CNnwUfBT.js";import{D as Xe}from"./DialogTitle-BHD_nV8d.js";import{L as Ze}from"./LoadingButton-CI8i-ssx.js";var De={exports:{}};(function(F,Ee){(function(me,ie){F.exports=ie(we,Fe)})(typeof self<"u"?self:Ie,function(me,ie){return function(){var ge={328:function(y,d,h){Object.defineProperty(d,"__esModule",{value:!0}),d.PrintContextConsumer=d.PrintContext=void 0;var v=h(496),_=Object.prototype.hasOwnProperty.call(v,"createContext");d.PrintContext=_?v.createContext({}):null,d.PrintContextConsumer=d.PrintContext?d.PrintContext.Consumer:function(){return null}},428:function(y,d,h){Object.defineProperty(d,"__esModule",{value:!0}),d.ReactToPrint=void 0;var v=h(316),_=h(496),N=h(190),I=h(328),q=h(940),V=function(R){function G(){var a=R.apply(this,v.__spreadArray([],v.__read(arguments),!1))||this;return a.startPrint=function(c){var f=a.props,w=f.onAfterPrint,A=f.onPrintError,E=f.print,P=f.documentTitle;setTimeout(function(){var L,D;if(c.contentWindow)if(c.contentWindow.focus(),E)E(c).then(function(){return w==null?void 0:w()}).then(function(){return a.handleRemoveIframe()}).catch(function(U){A?A("print",U):a.logMessages(["An error was thrown by the specified `print` function"])});else{if(c.contentWindow.print){var K=(D=(L=c.contentDocument)===null||L===void 0?void 0:L.title)!==null&&D!==void 0?D:"",b=c.ownerDocument.title;P&&(c.ownerDocument.title=P,c.contentDocument&&(c.contentDocument.title=P)),c.contentWindow.print(),P&&(c.ownerDocument.title=b,c.contentDocument&&(c.contentDocument.title=K))}else a.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);w==null||w(),a.handleRemoveIframe()}else a.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])},500)},a.triggerPrint=function(c){var f=a.props,w=f.onBeforePrint,A=f.onPrintError;if(w){var E=w();E&&typeof E.then=="function"?E.then(function(){a.startPrint(c)}).catch(function(P){A&&A("onBeforePrint",P)}):a.startPrint(c)}else a.startPrint(c)},a.handlePrint=function(c){var f=a.props,w=f.bodyClass,A=f.content,E=f.copyStyles,P=f.fonts,L=f.pageStyle,D=f.nonce,K=typeof c=="function"?c():null;if(K&&typeof A=="function"&&a.logMessages(['"react-to-print" received a `content` prop and a content param passed the callback return by `useReactToPrint. The `content` prop will be ignored.'],"warning"),K||typeof A!="function"||(K=A()),K!==void 0)if(K!==null){var b=document.createElement("iframe");b.width="".concat(document.documentElement.clientWidth,"px"),b.height="".concat(document.documentElement.clientHeight,"px"),b.style.position="absolute",b.style.top="-".concat(document.documentElement.clientHeight+100,"px"),b.style.left="-".concat(document.documentElement.clientWidth+100,"px"),b.id="printWindow",b.srcdoc="<!DOCTYPE html>";var U=(0,N.findDOMNode)(K);if(U){var Y=U.cloneNode(!0),ne=Y instanceof Text,ve=document.querySelectorAll("link[rel~='stylesheet'], link[as='style']"),le=ne?[]:Y.querySelectorAll("img"),ce=ne?[]:Y.querySelectorAll("video"),_e=P?P.length:0;a.numResourcesToLoad=ve.length+le.length+ce.length+_e,a.resourcesLoaded=[],a.resourcesErrored=[];var j=function(X,ee){a.resourcesLoaded.includes(X)?a.logMessages(["Tried to mark a resource that has already been handled",X],"debug"):(ee?(a.logMessages(v.__spreadArray(['"react-to-print" was unable to load a resource but will continue attempting to print the page'],v.__read(ee),!1)),a.resourcesErrored.push(X)):a.resourcesLoaded.push(X),a.resourcesLoaded.length+a.resourcesErrored.length===a.numResourcesToLoad&&a.triggerPrint(b))};b.onload=function(){var X,ee,ue,de;b.onload=null;var S=b.contentDocument||((ee=b.contentWindow)===null||ee===void 0?void 0:ee.document);if(S){S.body.appendChild(Y),P&&(!((ue=b.contentDocument)===null||ue===void 0)&&ue.fonts&&(!((de=b.contentWindow)===null||de===void 0)&&de.FontFace)?P.forEach(function(B){var g=new FontFace(B.family,B.source,{weight:B.weight,style:B.style});b.contentDocument.fonts.add(g),g.loaded.then(function(){j(g)}).catch(function(x){j(g,["Failed loading the font:",g,"Load error:",x])})}):(P.forEach(function(B){return j(B)}),a.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API but will continue attempting to print the page'])));var pe=typeof L=="function"?L():L;if(typeof pe!="string")a.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof pe,'". Styles from `pageStyle` will not be applied.')]);else{var fe=S.createElement("style");D&&(fe.setAttribute("nonce",D),S.head.setAttribute("nonce",D)),fe.appendChild(S.createTextNode(pe)),S.head.appendChild(fe)}if(w&&(X=S.body.classList).add.apply(X,v.__spreadArray([],v.__read(w.split(" ")),!1)),!ne){for(var e=ne?[]:U.querySelectorAll("canvas"),t=S.querySelectorAll("canvas"),r=0;r<e.length;++r){var n=e[r],o=t[r].getContext("2d");o&&o.drawImage(n,0,0)}var u=function(B){var g=le[B],x=g.getAttribute("src");if(x){var H=new Image;H.onload=function(){return j(g)},H.onerror=function(ae,ye,be,J,M){return j(g,["Error loading <img>",g,"Error",M])},H.src=x}else j(g,['Found an <img> tag with an empty "src" attribute. This prevents pre-loading it. The <img> is:',g])};for(r=0;r<le.length;r++)u(r);var i=function(B){var g=ce[B];g.preload="auto";var x=g.getAttribute("poster");if(x){var H=new Image;H.onload=function(){return j(g)},H.onerror=function(ae,ye,be,J,M){return j(g,["Error loading video poster",x,"for video",g,"Error:",M])},H.src=x}else g.readyState>=2?j(g):(g.onloadeddata=function(){return j(g)},g.onerror=function(ae,ye,be,J,M){return j(g,["Error loading video",g,"Error",M])},g.onstalled=function(){return j(g,["Loading video stalled, skipping",g])})};for(r=0;r<ce.length;r++)i(r);var p="input",T=U.querySelectorAll(p),C=S.querySelectorAll(p);for(r=0;r<T.length;r++)C[r].value=T[r].value;var s="input[type=checkbox],input[type=radio]",m=U.querySelectorAll(s),W=S.querySelectorAll(s);for(r=0;r<m.length;r++)W[r].checked=m[r].checked;var z="select",Q=U.querySelectorAll(z),te=S.querySelectorAll(z);for(r=0;r<Q.length;r++)te[r].value=Q[r].value}if(E)for(var Z=document.querySelectorAll("style, link[rel~='stylesheet'], link[as='style']"),oe=function(B,g){var x=Z[B];if(x.tagName.toLowerCase()==="style"){var H=S.createElement(x.tagName),ae=x.sheet;if(ae){var ye="";try{for(var be=ae.cssRules.length,J=0;J<be;++J)typeof ae.cssRules[J].cssText=="string"&&(ye+="".concat(ae.cssRules[J].cssText,`\r
`))}catch{a.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",x],"warning")}H.setAttribute("id","react-to-print-".concat(B)),D&&H.setAttribute("nonce",D),H.appendChild(S.createTextNode(ye)),S.head.appendChild(H)}}else if(x.getAttribute("href"))if(x.hasAttribute("disabled"))a.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:",x],"warning"),j(x);else{for(var M=S.createElement(x.tagName),ke=(J=0,x.attributes.length);J<ke;++J){var Pe=x.attributes[J];Pe&&M.setAttribute(Pe.nodeName,Pe.nodeValue||"")}M.onload=function(){return j(M)},M.onerror=function(Re,et,tt,rt,Me){return j(M,["Failed to load",M,"Error:",Me])},D&&M.setAttribute("nonce",D),S.head.appendChild(M)}else a.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",x],"warning"),j(x)},Oe=(r=0,Z.length);r<Oe;++r)oe(r)}a.numResourcesToLoad!==0&&E||a.triggerPrint(b)},a.handleRemoveIframe(!0),document.body.appendChild(b)}else a.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else a.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else a.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},a.handleRemoveIframe=function(c){var f=a.props.removeAfterPrint;if(c||f){var w=document.getElementById("printWindow");w&&document.body.removeChild(w)}},a.logMessages=function(c,f){f===void 0&&(f="error"),a.props.suppressErrors||(f==="error"?console.error(c):f==="warning"?console.warn(c):f==="debug"&&console.debug(c))},a}return v.__extends(G,R),G.prototype.handleClick=function(a,c){var f=this,w=this.props,A=w.onBeforeGetContent,E=w.onPrintError;if(A){var P=A();P&&typeof P.then=="function"?P.then(function(){return f.handlePrint(c)}).catch(function(L){E&&E("onBeforeGetContent",L)}):this.handlePrint(c)}else this.handlePrint(c)},G.prototype.render=function(){var a=this.props,c=a.children,f=a.trigger;if(f)return _.cloneElement(f(),{onClick:this.handleClick.bind(this)});if(!I.PrintContext)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var w={handlePrint:this.handleClick.bind(this)};return _.createElement(I.PrintContext.Provider,{value:w},c)},G.defaultProps=q.defaultProps,G}(_.Component);d.ReactToPrint=V},940:function(y,d){Object.defineProperty(d,"__esModule",{value:!0}),d.defaultProps=void 0,d.defaultProps={copyStyles:!0,pageStyle:`
        @page {
            /* Remove browser default header (title) and footer (url) */
            margin: 0;
        }
        @media print {
            body {
                /* Tell browsers to print background colors */
                -webkit-print-color-adjust: exact; /* Chrome/Safari/Edge/Opera */
                color-adjust: exact; /* Firefox */
            }
        }
    `,removeAfterPrint:!1,suppressErrors:!1}},892:function(y,d,h){Object.defineProperty(d,"__esModule",{value:!0}),d.useReactToPrint=void 0;var v=h(316),_=h(496),N=h(428),I=h(940),q=h(860),V=Object.prototype.hasOwnProperty.call(_,"useMemo")&&Object.prototype.hasOwnProperty.call(_,"useCallback");d.useReactToPrint=function(R){if(!V)return R.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var G=_.useMemo(function(){return new N.ReactToPrint(v.__assign(v.__assign({},I.defaultProps),R))},[R]);return _.useCallback(function(a,c){return(0,q.wrapCallbackWithArgs)(G,G.handleClick,c)(a)},[G])}},860:function(y,d,h){Object.defineProperty(d,"__esModule",{value:!0}),d.wrapCallbackWithArgs=void 0;var v=h(316);d.wrapCallbackWithArgs=function(_,N){for(var I=[],q=2;q<arguments.length;q++)I[q-2]=arguments[q];return function(){for(var V=[],R=0;R<arguments.length;R++)V[R]=arguments[R];return N.apply(_,v.__spreadArray(v.__spreadArray([],v.__read(V),!1),v.__read(I),!1))}}},496:function(y){y.exports=me},190:function(y){y.exports=ie},316:function(y,d,h){h.r(d),h.d(d,{__addDisposableResource:function(){return S},__assign:function(){return N},__asyncDelegator:function(){return ve},__asyncGenerator:function(){return ne},__asyncValues:function(){return le},__await:function(){return Y},__awaiter:function(){return w},__classPrivateFieldGet:function(){return ee},__classPrivateFieldIn:function(){return de},__classPrivateFieldSet:function(){return ue},__createBinding:function(){return E},__decorate:function(){return q},__disposeResources:function(){return fe},__esDecorate:function(){return R},__exportStar:function(){return P},__extends:function(){return _},__generator:function(){return A},__importDefault:function(){return X},__importStar:function(){return j},__makeTemplateObject:function(){return ce},__metadata:function(){return f},__param:function(){return V},__propKey:function(){return a},__read:function(){return D},__rest:function(){return I},__runInitializers:function(){return G},__setFunctionName:function(){return c},__spread:function(){return K},__spreadArray:function(){return U},__spreadArrays:function(){return b},__values:function(){return L}});var v=function(e,t){return v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])},v(e,t)};function _(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}v(e,t),e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var N=function(){return N=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},N.apply(this,arguments)};function I(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function q(e,t,r,n){var o,u=arguments.length,i=u<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(i=(u<3?o(i):u>3?o(t,r,i):o(t,r))||i);return u>3&&i&&Object.defineProperty(t,r,i),i}function V(e,t){return function(r,n){t(r,n,e)}}function R(e,t,r,n,o,u){function i(oe){if(oe!==void 0&&typeof oe!="function")throw new TypeError("Function expected");return oe}for(var p,T=n.kind,C=T==="getter"?"get":T==="setter"?"set":"value",s=!t&&e?n.static?e:e.prototype:null,m=t||(s?Object.getOwnPropertyDescriptor(s,n.name):{}),W=!1,z=r.length-1;z>=0;z--){var Q={};for(var te in n)Q[te]=te==="access"?{}:n[te];for(var te in n.access)Q.access[te]=n.access[te];Q.addInitializer=function(oe){if(W)throw new TypeError("Cannot add initializers after decoration has completed");u.push(i(oe||null))};var Z=(0,r[z])(T==="accessor"?{get:m.get,set:m.set}:m[C],Q);if(T==="accessor"){if(Z===void 0)continue;if(Z===null||typeof Z!="object")throw new TypeError("Object expected");(p=i(Z.get))&&(m.get=p),(p=i(Z.set))&&(m.set=p),(p=i(Z.init))&&o.unshift(p)}else(p=i(Z))&&(T==="field"?o.unshift(p):m[C]=p)}s&&Object.defineProperty(s,n.name,m),W=!0}function G(e,t,r){for(var n=arguments.length>2,o=0;o<t.length;o++)r=n?t[o].call(e,r):t[o].call(e);return n?r:void 0}function a(e){return typeof e=="symbol"?e:"".concat(e)}function c(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function f(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function w(e,t,r,n){return new(r||(r=Promise))(function(o,u){function i(C){try{T(n.next(C))}catch(s){u(s)}}function p(C){try{T(n.throw(C))}catch(s){u(s)}}function T(C){var s;C.done?o(C.value):(s=C.value,s instanceof r?s:new r(function(m){m(s)})).then(i,p)}T((n=n.apply(e,t||[])).next())})}function A(e,t){var r,n,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function p(T){return function(C){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;u&&(u=0,s[0]&&(i=0)),i;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||s[0]!==6&&s[0]!==2)){i=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(s[0]===6&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(m){s=[6,m],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([T,C])}}}var E=Object.create?function(e,t,r,n){n===void 0&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]};function P(e,t){for(var r in e)r==="default"||Object.prototype.hasOwnProperty.call(t,r)||E(t,e,r)}function L(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function D(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n,o,u=r.call(e),i=[];try{for(;(t===void 0||t-- >0)&&!(n=u.next()).done;)i.push(n.value)}catch(p){o={error:p}}finally{try{n&&!n.done&&(r=u.return)&&r.call(u)}finally{if(o)throw o.error}}return i}function K(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(D(arguments[t]));return e}function b(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var u=arguments[t],i=0,p=u.length;i<p;i++,o++)n[o]=u[i];return n}function U(e,t,r){if(r||arguments.length===2)for(var n,o=0,u=t.length;o<u;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}function Y(e){return this instanceof Y?(this.v=e,this):new Y(e)}function ne(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),u=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(m){o[m]&&(n[m]=function(W){return new Promise(function(z,Q){u.push([m,W,z,Q])>1||p(m,W)})})}function p(m,W){try{(z=o[m](W)).value instanceof Y?Promise.resolve(z.value.v).then(T,C):s(u[0][2],z)}catch(Q){s(u[0][3],Q)}var z}function T(m){p("next",m)}function C(m){p("throw",m)}function s(m,W){m(W),u.shift(),u.length&&p(u[0][0],u[0][1])}}function ve(e){var t,r;return t={},n("next"),n("throw",function(o){throw o}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(o,u){t[o]=e[o]?function(i){return(r=!r)?{value:Y(e[o](i)),done:!1}:u?u(i):i}:u}}function le(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=L(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(o){t[o]=e[o]&&function(u){return new Promise(function(i,p){(function(T,C,s,m){Promise.resolve(m).then(function(W){T({value:W,done:s})},C)})(i,p,(u=e[o](u)).done,u.value)})}}}function ce(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var _e=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function j(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&E(t,e,r);return _e(t,e),t}function X(e){return e&&e.__esModule?e:{default:e}}function ee(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}function ue(e,t,r,n,o){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!o)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?o.call(e,r):o?o.value=r:t.set(e,r),r}function de(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function S(e,t,r){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if(typeof n!="function")throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var pe=typeof SuppressedError=="function"?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function fe(e){function t(r){e.error=e.hasError?new pe(r,e.error,"An error was suppressed during disposal."):r,e.hasError=!0}return function r(){for(;e.stack.length;){var n=e.stack.pop();try{var o=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(o).then(r,function(u){return t(u),r()})}catch(u){t(u)}}if(e.hasError)throw e.error}()}d.default={__extends:_,__assign:N,__rest:I,__decorate:q,__param:V,__metadata:f,__awaiter:w,__generator:A,__createBinding:E,__exportStar:P,__values:L,__read:D,__spread:K,__spreadArrays:b,__spreadArray:U,__await:Y,__asyncGenerator:ne,__asyncDelegator:ve,__asyncValues:le,__makeTemplateObject:ce,__importStar:j,__importDefault:X,__classPrivateFieldGet:ee,__classPrivateFieldSet:ue,__classPrivateFieldIn:de,__addDisposableResource:S,__disposeResources:fe}}},se={};function k(y){var d=se[y];if(d!==void 0)return d.exports;var h=se[y]={exports:{}};return ge[y](h,h.exports,k),h.exports}k.d=function(y,d){for(var h in d)k.o(d,h)&&!k.o(y,h)&&Object.defineProperty(y,h,{enumerable:!0,get:d[h]})},k.o=function(y,d){return Object.prototype.hasOwnProperty.call(y,d)},k.r=function(y){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})};var re={};return function(){var y=re;Object.defineProperty(y,"__esModule",{value:!0}),y.useReactToPrint=y.ReactToPrint=y.PrintContextConsumer=void 0;var d=k(328);Object.defineProperty(y,"PrintContextConsumer",{enumerable:!0,get:function(){return d.PrintContextConsumer}});var h=k(428);Object.defineProperty(y,"ReactToPrint",{enumerable:!0,get:function(){return h.ReactToPrint}});var v=k(892);Object.defineProperty(y,"useReactToPrint",{enumerable:!0,get:function(){return v.useReactToPrint}});var _=k(428);y.default=_.ReactToPrint}(),re}()})})(De);var ht=De.exports;const $e=Se.object({amount:Se.number().min(1,{message:"Amount is required!"}),paymentDate:Ue.date({message:{required_error:"Start date is required!"}}),paymentType:Se.string().min(1,{message:"Payment Type is required!"})}),mt=({order:F,payment:Ee,open:me,onClose:ie,handler:ge})=>{const se=we.useRef(Ee),[k,re]=we.useState(),y=we.useCallback(a=>{const c=a[0];re(()=>c)},[]),d=()=>{re(null)},h=qe(),v={headers:{"content-type":"multipart/form-data"}},{mutate:_}=Ve({mutationFn:a=>Ge.post(Le.files.upload,a,v),onSuccess:async({data:a})=>{const{name:c}=a;if(c){const{current:f}=se;f.attachments=c,await ge(f)}return a},onSettled:async()=>{re(null),se.current={},await h.invalidateQueries({queryKey:["payments-images"]})},onError:a=>{console.log(a)}}),N={amount:0,paymentType:"",paymentDate:We()},I=Ne({resolver:ze($e),defaultValues:N}),{reset:q,handleSubmit:V,formState:{isSubmitting:R}}=I,G=V(async a=>{try{const c={...a,orderId:F.id,customerId:F.customer.id};if(k){se.current={...c};const f=new FormData;f.append("file",k),f.append("category","Payment"),await _(f)}else await ge(c);q()}catch(c){console.log(c)}});return l.jsxs(Ye,{fullWidth:!0,maxWidth:"lg",open:me,onClose:ie,children:[l.jsx(Xe,{children:"Payment Details"}),l.jsxs(He,{methods:I,onSubmit:G,children:[l.jsxs(Qe,{children:[l.jsx(xe,{}),l.jsxs(he,{spacing:1,sx:{pt:1,pb:1},children:[l.jsxs($,{display:"flex",children:[l.jsx(O,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Customer Name:"}),l.jsx(O,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:F.customer.name})]}),l.jsxs($,{display:"flex",children:[l.jsx(O,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order ID:"}),l.jsxs(O,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["ORD-",F.id]})]}),l.jsxs($,{display:"flex",children:[l.jsx(O,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Date:"}),l.jsx(O,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:Ae(F.orderDate)})]}),l.jsxs($,{display:"flex",children:[l.jsx(O,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Delivery Date:"}),l.jsx(O,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:F.deliveryDate?Ae(F.deliveryDate):l.jsx("span",{children:" - "})})]})]}),l.jsx(xe,{}),l.jsxs(he,{spacing:1,sx:{pt:1,pb:1},children:[l.jsxs($,{display:"flex",children:[l.jsx(O,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Order Amount:"}),l.jsx(O,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:Te(F.totalOrderAmount)||"-"})]}),l.jsxs($,{display:"flex",children:[l.jsx(O,{component:"span",variant:"body2",sx:{flexGrow:1,color:"text.secondary"},children:"Paid Amount:"}),l.jsx(O,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:Te(F.orderPaymentAmount)||"-"})]})]}),l.jsx(xe,{}),l.jsx(he,{spacing:1,sx:{pt:2,pb:2},children:l.jsxs($,{display:"flex",children:[l.jsx(O,{component:"span",variant:"subtitle1",sx:{flexGrow:1},children:"Balance:"}),l.jsx(O,{component:"span",variant:"subtitle1",children:Te(F.totalOrderAmount-F.orderPaymentAmount)})]})}),l.jsx(xe,{}),l.jsxs(he,{spacing:2,sx:{pt:4,pb:1},children:[l.jsxs($,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[l.jsx(Ce.Text,{type:"number",name:"amount",label:"Paid Amount",sx:{flexGrow:1}}),l.jsx(Ce.DatePicker,{name:"paymentDate",label:"Date",sx:{flexGrow:1}})]}),l.jsxs($,{display:"grid",gap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(2, 1fr)"},children:[l.jsx($,{children:l.jsxs(Ce.Select,{name:"paymentType",label:"Payment Type",children:[l.jsx(je,{value:"Cash",children:"Cash"}),l.jsx(je,{value:"Transfer",children:"Transfer"}),l.jsx(je,{value:"Card",children:"Card"})]})}),l.jsxs(he,{spacing:1.5,children:[l.jsx(O,{variant:"subtitle2",children:"Attachments"}),l.jsx(Ke,{value:k,onDrop:y,onDelete:d})]})]})]})]}),l.jsxs(Je,{children:[l.jsx(Ze,{type:"submit",variant:"contained",children:"Save"}),l.jsx(Be,{color:"inherit",variant:"outlined",onClick:()=>{ie(),re(null)},children:"Cancel"})]})]})]})};export{mt as O,ht as l};

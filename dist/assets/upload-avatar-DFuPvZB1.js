import{c3 as H,c4 as N,c5 as Ve,c6 as qe,r as p,aO as Fr,j as s,B as y,c7 as Er,S as Te,C as Cr,b as Rr,ax as Tr,c8 as Ir,v as x,I as B,l as Ie,c9 as kr,bR as Sr,T as ke,aT as Pr,e as Xe}from"./index-DMR9Maie.js";import{f as cr}from"./format-number-vxMLQ75Z.js";import{F as zr}from"./FormHelperText-DEevnlmG.js";import{P as d}from"./index-Bj7PJKGj.js";import{I as Mr}from"./image-CDdYtbMq.js";var Lr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Q(e,r){var t=Br(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Br(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),o=Lr.get(n);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var $r=[".DS_Store","Thumbs.db"];function Ur(e){return H(this,void 0,void 0,function(){return N(this,function(r){return le(e)&&Kr(e.dataTransfer)?[2,Gr(e.dataTransfer,e.type)]:Wr(e)?[2,Hr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Nr(e)]:[2,[]]})})}function Kr(e){return le(e)}function Wr(e){return le(e)&&le(e.target)}function le(e){return typeof e=="object"&&e!==null}function Hr(e){return _e(e.target.files).map(function(r){return Q(r)})}function Nr(e){return H(this,void 0,void 0,function(){var r;return N(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return Q(n)})]}})})}function Gr(e,r){return H(this,void 0,void 0,function(){var t,n;return N(this,function(o){switch(o.label){case 0:return e.items?(t=_e(e.items).filter(function(i){return i.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Yr))]):[3,2];case 1:return n=o.sent(),[2,Je(lr(n))];case 2:return[2,Je(_e(e.files).map(function(i){return Q(i)}))]}})})}function Je(e){return e.filter(function(r){return $r.indexOf(r.name)===-1})}function _e(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Yr(e){if(typeof e.webkitGetAsEntry!="function")return Ze(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?ur(r):Ze(e)}function lr(e){return e.reduce(function(r,t){return Ve(Ve([],qe(r),!1),qe(Array.isArray(t)?lr(t):[t]),!1)},[])}function Ze(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=Q(r);return Promise.resolve(t)}function Vr(e){return H(this,void 0,void 0,function(){return N(this,function(r){return[2,e.isDirectory?ur(e):qr(e)]})})}function ur(e){var r=e.createReader();return new Promise(function(t,n){var o=[];function i(){var u=this;r.readEntries(function(l){return H(u,void 0,void 0,function(){var f,g,m;return N(this,function(h){switch(h.label){case 0:if(l.length)return[3,5];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return f=h.sent(),t(f),[3,4];case 3:return g=h.sent(),n(g),[3,4];case 4:return[3,6];case 5:m=Promise.all(l.map(Vr)),o.push(m),i(),h.label=6;case 6:return[2]}})})},function(l){n(l)})}i()})}function qr(e){return H(this,void 0,void 0,function(){return N(this,function(r){return[2,new Promise(function(t,n){e.file(function(o){var i=Q(o,e.fullPath);t(i)},function(o){n(o)})})]})})}var Xr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some(function(u){var l=u.trim().toLowerCase();return l.charAt(0)==="."?n.toLowerCase().endsWith(l):l.endsWith("/*")?i===l.replace(/\/.*$/,""):o===l})}return!0};function Qe(e){return Qr(e)||Zr(e)||fr(e)||Jr()}function Jr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qr(e){if(Array.isArray(e))return Oe(e)}function er(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function rr(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?er(Object(t),!0).forEach(function(n){pr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):er(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function pr(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Z(e,r){return tt(e)||rt(e,r)||fr(e,r)||et()}function et(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fr(e,r){if(e){if(typeof e=="string")return Oe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Oe(e,r)}}function Oe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function rt(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,i=!1,u,l;try{for(t=t.call(e);!(o=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));o=!0);}catch(f){i=!0,l=f}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw l}}return n}}function tt(e){if(Array.isArray(e))return e}var nt="file-invalid-type",ot="file-too-large",it="file-too-small",at="too-many-files",st=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:nt,message:"File type must be ".concat(t)}},tr=function(r){return{code:ot,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},nr=function(r){return{code:it,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},ct={code:at,message:"Too many files"};function dr(e,r){var t=e.type==="application/x-moz-file"||Xr(e,r);return[t,t?null:st(r)]}function mr(e,r,t){if(L(e.size))if(L(r)&&L(t)){if(e.size>t)return[!1,tr(t)];if(e.size<r)return[!1,nr(r)]}else{if(L(r)&&e.size<r)return[!1,nr(r)];if(L(t)&&e.size>t)return[!1,tr(t)]}return[!0,null]}function L(e){return e!=null}function lt(e){var r=e.files,t=e.accept,n=e.minSize,o=e.maxSize,i=e.multiple,u=e.maxFiles,l=e.validator;return!i&&r.length>1||i&&u>=1&&r.length>u?!1:r.every(function(f){var g=dr(f,t),m=Z(g,1),h=m[0],D=mr(f,n,o),R=Z(D,1),_=R[0],k=l?l(f):null;return h&&_&&!k})}function ue(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ce(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function or(e){e.preventDefault()}function ut(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function pt(e){return e.indexOf("Edge/")!==-1}function ft(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return ut(e)||pt(e)}function I(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var o=arguments.length,i=new Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];return r.some(function(l){return!ue(n)&&l&&l.apply(void 0,[n].concat(i)),ue(n)})}}function dt(){return"showOpenFilePicker"in window}function mt(e){if(L(e)){var r=Object.entries(e).filter(function(t){var n=Z(t,2),o=n[0],i=n[1],u=!0;return gr(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),u=!1),(!Array.isArray(i)||!i.every(hr))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),u=!1),u}).reduce(function(t,n){var o=Z(n,2),i=o[0],u=o[1];return rr(rr({},t),{},pr({},i,u))},{});return[{description:"Files",accept:r}]}return e}function gt(e){if(L(e))return Object.entries(e).reduce(function(r,t){var n=Z(t,2),o=n[0],i=n[1];return[].concat(Qe(r),[o],Qe(i))},[]).filter(function(r){return gr(r)||hr(r)}).join(",")}function ht(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function vt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function gr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function hr(e){return/^.*\.[\w]+$/.test(e)}var yt=["children"],bt=["open"],xt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],wt=["refKey","onChange","onClick"];function Dt(e){return _t(e)||At(e)||vr(e)||jt()}function jt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function _t(e){if(Array.isArray(e))return Fe(e)}function Ae(e,r){return Et(e)||Ft(e,r)||vr(e,r)||Ot()}function Ot(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vr(e,r){if(e){if(typeof e=="string")return Fe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fe(e,r)}}function Fe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Ft(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,i=!1,u,l;try{for(t=t.call(e);!(o=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));o=!0);}catch(f){i=!0,l=f}finally{try{!o&&t.return!=null&&t.return()}finally{if(i)throw l}}return n}}function Et(e){if(Array.isArray(e))return e}function ir(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?ir(Object(t),!0).forEach(function(n){Ee(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ir(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ee(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function pe(e,r){if(e==null)return{};var t=Ct(e,r),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function Ct(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Se=p.forwardRef(function(e,r){var t=e.children,n=pe(e,yt),o=fe(n),i=o.open,u=pe(o,bt);return p.useImperativeHandle(r,function(){return{open:i}},[i]),Fr.createElement(p.Fragment,null,t(v(v({},u),{},{open:i})))});Se.displayName="Dropzone";var yr={disabled:!1,getFilesFromEvent:Ur,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Se.defaultProps=yr;Se.propTypes={children:d.func,accept:d.objectOf(d.arrayOf(d.string)),multiple:d.bool,preventDropOnDocument:d.bool,noClick:d.bool,noKeyboard:d.bool,noDrag:d.bool,noDragEventsBubbling:d.bool,minSize:d.number,maxSize:d.number,maxFiles:d.number,disabled:d.bool,getFilesFromEvent:d.func,onFileDialogCancel:d.func,onFileDialogOpen:d.func,useFsAccessApi:d.bool,autoFocus:d.bool,onDragEnter:d.func,onDragLeave:d.func,onDragOver:d.func,onDrop:d.func,onDropAccepted:d.func,onDropRejected:d.func,onError:d.func,validator:d.func};var Ce={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function fe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=v(v({},yr),e),t=r.accept,n=r.disabled,o=r.getFilesFromEvent,i=r.maxSize,u=r.minSize,l=r.multiple,f=r.maxFiles,g=r.onDragEnter,m=r.onDragLeave,h=r.onDragOver,D=r.onDrop,R=r.onDropAccepted,_=r.onDropRejected,k=r.onFileDialogCancel,S=r.onFileDialogOpen,P=r.useFsAccessApi,w=r.autoFocus,G=r.preventDropOnDocument,ee=r.noClick,Y=r.noKeyboard,T=r.noDrag,z=r.noDragEventsBubbling,de=r.onError,V=r.validator,q=p.useMemo(function(){return gt(t)},[t]),ze=p.useMemo(function(){return mt(t)},[t]),me=p.useMemo(function(){return typeof S=="function"?S:ar},[S]),re=p.useMemo(function(){return typeof k=="function"?k:ar},[k]),A=p.useRef(null),C=p.useRef(null),wr=p.useReducer(Rt,Ce),Me=Ae(wr,2),ge=Me[0],O=Me[1],Dr=ge.isFocused,Le=ge.isFileDialogActive,te=p.useRef(typeof window<"u"&&window.isSecureContext&&P&&dt()),Be=function(){!te.current&&Le&&setTimeout(function(){if(C.current){var c=C.current.files;c.length||(O({type:"closeDialog"}),re())}},300)};p.useEffect(function(){return window.addEventListener("focus",Be,!1),function(){window.removeEventListener("focus",Be,!1)}},[C,Le,re,te]);var $=p.useRef([]),$e=function(c){A.current&&A.current.contains(c.target)||(c.preventDefault(),$.current=[])};p.useEffect(function(){return G&&(document.addEventListener("dragover",or,!1),document.addEventListener("drop",$e,!1)),function(){G&&(document.removeEventListener("dragover",or),document.removeEventListener("drop",$e))}},[A,G]),p.useEffect(function(){return!n&&w&&A.current&&A.current.focus(),function(){}},[A,w,n]);var M=p.useCallback(function(a){de?de(a):console.error(a)},[de]),Ue=p.useCallback(function(a){a.preventDefault(),a.persist(),ae(a),$.current=[].concat(Dt($.current),[a.target]),ce(a)&&Promise.resolve(o(a)).then(function(c){if(!(ue(a)&&!z)){var b=c.length,j=b>0&&lt({files:c,accept:q,minSize:u,maxSize:i,multiple:l,maxFiles:f,validator:V}),F=b>0&&!j;O({isDragAccept:j,isDragReject:F,isDragActive:!0,type:"setDraggedFiles"}),g&&g(a)}}).catch(function(c){return M(c)})},[o,g,M,z,q,u,i,l,f,V]),Ke=p.useCallback(function(a){a.preventDefault(),a.persist(),ae(a);var c=ce(a);if(c&&a.dataTransfer)try{a.dataTransfer.dropEffect="copy"}catch{}return c&&h&&h(a),!1},[h,z]),We=p.useCallback(function(a){a.preventDefault(),a.persist(),ae(a);var c=$.current.filter(function(j){return A.current&&A.current.contains(j)}),b=c.indexOf(a.target);b!==-1&&c.splice(b,1),$.current=c,!(c.length>0)&&(O({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ce(a)&&m&&m(a))},[A,m,z]),ne=p.useCallback(function(a,c){var b=[],j=[];a.forEach(function(F){var X=dr(F,q),W=Ae(X,2),ve=W[0],ye=W[1],be=mr(F,u,i),se=Ae(be,2),xe=se[0],we=se[1],De=V?V(F):null;if(ve&&xe&&!De)b.push(F);else{var je=[ye,we];De&&(je=je.concat(De)),j.push({file:F,errors:je.filter(function(Or){return Or})})}}),(!l&&b.length>1||l&&f>=1&&b.length>f)&&(b.forEach(function(F){j.push({file:F,errors:[ct]})}),b.splice(0)),O({acceptedFiles:b,fileRejections:j,type:"setFiles"}),D&&D(b,j,c),j.length>0&&_&&_(j,c),b.length>0&&R&&R(b,c)},[O,l,q,u,i,f,D,R,_,V]),oe=p.useCallback(function(a){a.preventDefault(),a.persist(),ae(a),$.current=[],ce(a)&&Promise.resolve(o(a)).then(function(c){ue(a)&&!z||ne(c,a)}).catch(function(c){return M(c)}),O({type:"reset"})},[o,ne,M,z]),U=p.useCallback(function(){if(te.current){O({type:"openDialog"}),me();var a={multiple:l,types:ze};window.showOpenFilePicker(a).then(function(c){return o(c)}).then(function(c){ne(c,null),O({type:"closeDialog"})}).catch(function(c){ht(c)?(re(c),O({type:"closeDialog"})):vt(c)?(te.current=!1,C.current?(C.current.value=null,C.current.click()):M(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):M(c)});return}C.current&&(O({type:"openDialog"}),me(),C.current.value=null,C.current.click())},[O,me,re,P,ne,M,ze,l]),He=p.useCallback(function(a){!A.current||!A.current.isEqualNode(a.target)||(a.key===" "||a.key==="Enter"||a.keyCode===32||a.keyCode===13)&&(a.preventDefault(),U())},[A,U]),Ne=p.useCallback(function(){O({type:"focus"})},[]),Ge=p.useCallback(function(){O({type:"blur"})},[]),Ye=p.useCallback(function(){ee||(ft()?setTimeout(U,0):U())},[ee,U]),K=function(c){return n?null:c},he=function(c){return Y?null:K(c)},ie=function(c){return T?null:K(c)},ae=function(c){z&&c.stopPropagation()},jr=p.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=a.refKey,b=c===void 0?"ref":c,j=a.role,F=a.onKeyDown,X=a.onFocus,W=a.onBlur,ve=a.onClick,ye=a.onDragEnter,be=a.onDragOver,se=a.onDragLeave,xe=a.onDrop,we=pe(a,xt);return v(v(Ee({onKeyDown:he(I(F,He)),onFocus:he(I(X,Ne)),onBlur:he(I(W,Ge)),onClick:K(I(ve,Ye)),onDragEnter:ie(I(ye,Ue)),onDragOver:ie(I(be,Ke)),onDragLeave:ie(I(se,We)),onDrop:ie(I(xe,oe)),role:typeof j=="string"&&j!==""?j:"presentation"},b,A),!n&&!Y?{tabIndex:0}:{}),we)}},[A,He,Ne,Ge,Ye,Ue,Ke,We,oe,Y,T,n]),Ar=p.useCallback(function(a){a.stopPropagation()},[]),_r=p.useMemo(function(){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=a.refKey,b=c===void 0?"ref":c,j=a.onChange,F=a.onClick,X=pe(a,wt),W=Ee({accept:q,multiple:l,type:"file",style:{display:"none"},onChange:K(I(j,oe)),onClick:K(I(F,Ar)),tabIndex:-1},b,C);return v(v({},W),X)}},[C,t,l,oe,n]);return v(v({},ge),{},{isFocused:Dr&&!n,getRootProps:jr,getInputProps:_r,rootRef:A,inputRef:C,open:K(U)})}function Rt(e,r){switch(r.type){case"focus":return v(v({},e),{},{isFocused:!0});case"blur":return v(v({},e),{},{isFocused:!1});case"openDialog":return v(v({},Ce),{},{isFileDialogActive:!0});case"closeDialog":return v(v({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return v(v({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return v(v({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return v({},Ce);default:return e}}function ar(){}function Tt({...e}){return s.jsxs(y,{sx:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},...e,children:[s.jsx(Er,{hideBackground:!0,sx:{width:200}}),s.jsxs(Te,{spacing:1,sx:{textAlign:"center"},children:[s.jsx(y,{sx:{typography:"h6"},children:"Drop or select file"}),s.jsxs(y,{sx:{typography:"body2",color:"text.secondary"},children:["Drop files here or click to",s.jsx(y,{component:"span",sx:{mx:.5,color:"primary.main",textDecoration:"underline"},children:"browse"}),"through your machine."]})]})]})}const It=["pdf"],kt=["txt"],St=["psd"],Pt=["doc","docx"],zt=["xls","xlsx"],Mt=["zip","rar","iso"],Lt=["ai","esp"],Bt=["ppt","pptx"],$t=["wav","aif","mp3","aac"],Ut=["jpg","jpeg","gif","bmp","png","svg","webp"],Kt=["m4v","avi","mpg","mp4","webm"],E=e=>`${Cr.site.basePath}/assets/icons/files/${e}.svg`;function br(e){let r;const t=Re(e);switch(e.includes(t)){case kt.includes(t):r="txt";break;case Mt.includes(t):r="zip";break;case $t.includes(t):r="audio";break;case Ut.includes(t):r="image";break;case Kt.includes(t):r="video";break;case Pt.includes(t):r="word";break;case zt.includes(t):r="excel";break;case Bt.includes(t):r="powerpoint";break;case It.includes(t):r="pdf";break;case St.includes(t):r="photoshop";break;case Lt.includes(t):r="illustrator";break;default:r=Re(e)}return r}function Wt(e){let r;switch(br(e)){case"folder":r=E("ic-folder");break;case"txt":r=E("ic-txt");break;case"zip":r=E("ic-zip");break;case"audio":r=E("ic-audio");break;case"video":r=E("ic-video");break;case"word":r=E("ic-word");break;case"excel":r=E("ic-excel");break;case"powerpoint":r=E("ic-power_point");break;case"pdf":r=E("ic-pdf");break;case"photoshop":r=E("ic-pts");break;case"illustrator":r=E("ic-ai");break;case"image":r=E("ic-img");break;default:r=E("ic-file")}return r}function Re(e){return e&&e.split(".").pop()||""}function Ht(e){return e.split("/").pop()}function Pe(e){return typeof e=="string"?{preview:e,name:Ht(e),type:Re(e),size:void 0,path:e,lastModified:void 0,lastModifiedDate:void 0}:{name:e.name,size:e.size,path:e.path,type:e.type,preview:e.preview,lastModified:e.lastModified,lastModifiedDate:e.lastModifiedDate}}function Nt({sx:e,...r}){const t=Rr();return s.jsx(Tr,{sx:{p:0,top:0,right:0,width:1,height:1,zIndex:9,opacity:0,position:"absolute",color:"common.white",borderRadius:"inherit",transition:t.transitions.create(["opacity"]),"&:hover":{...Ir({color:x(t.vars.palette.grey["900Channel"],.64)}),opacity:1},...e},...r,children:s.jsx(B,{icon:"eva:arrow-circle-down-fill",width:24})})}function Gt({sx:e,...r}){return s.jsx(Ie,{size:"small",sx:{p:.35,top:4,right:4,position:"absolute",color:"common.white",bgcolor:t=>x(t.vars.palette.grey["900Channel"],.48),"&:hover":{bgcolor:t=>x(t.vars.palette.grey["900Channel"],.72)},...e},...r,children:s.jsx(B,{icon:"mingcute:close-line",width:12})})}const J={root:"mnl__file__thumbnail__root",img:"mnl__file__thumbnail__img",icon:"mnl__file__thumbnail__icon",removeBtn:"mnl__file__thumbnail__remove__button",downloadBtn:"mnl__file__thumbnail__download__button"};function sr({sx:e,file:r,tooltip:t,onRemove:n,imageView:o,slotProps:i,onDownload:u,...l}){const f=typeof r=="string"?r:URL.createObjectURL(r),{name:g,path:m}=Pe(r),h=br(m||f),D=s.jsx(y,{component:"img",src:f,className:J.img,sx:{width:1,height:1,objectFit:"cover",borderRadius:"inherit",...i==null?void 0:i.img}}),R=s.jsx(y,{component:"img",src:Wt(h),className:J.icon,sx:{width:1,height:1,...i==null?void 0:i.icon}}),_=s.jsxs(Te,{component:"span",className:J.root,sx:{width:36,height:36,flexShrink:0,borderRadius:1.25,alignItems:"center",position:"relative",display:"inline-flex",justifyContent:"center",...e},...l,children:[h==="image"&&o?D:R,n&&s.jsx(Gt,{onClick:n,className:J.removeBtn,sx:i==null?void 0:i.removeBtn}),u&&s.jsx(Nt,{onClick:u,className:J.downloadBtn,sx:i==null?void 0:i.downloadBtn})]});return t?s.jsx(kr,{arrow:!0,title:g,slotProps:{popper:{modifiers:[{name:"offset",options:{offset:[0,-12]}}]}},children:_}):_}function xr({files:e}){return e.length?s.jsx(Sr,{variant:"outlined",sx:{py:1,px:2,mt:3,textAlign:"left",borderStyle:"dashed",borderColor:"error.main",bgcolor:r=>x(r.vars.palette.error.mainChannel,.08)},children:e.map(({file:r,errors:t})=>{const{path:n,size:o}=Pe(r);return s.jsxs(y,{sx:{my:1},children:[s.jsxs(ke,{variant:"subtitle2",noWrap:!0,children:[n," - ",o?cr(o):""]}),t.map(i=>s.jsxs(y,{component:"span",sx:{typography:"caption"},children:["- ",i.message]},i.code))]},n)})}):null}function Yt({sx:e,onRemove:r,lastNode:t,thumbnail:n,slotProps:o,firstNode:i,files:u=[]}){const l=i&&s.jsx(y,{component:"li",sx:{...n&&{width:"auto",display:"inline-flex"}},children:i}),f=t&&s.jsx(y,{component:"li",sx:{...n&&{width:"auto",display:"inline-flex"}},children:t});return s.jsxs(y,{component:"ul",sx:{gap:1,display:"flex",flexDirection:"column",...n&&{flexWrap:"wrap",flexDirection:"row"},...e},children:[l,u.map(g=>{const{name:m,size:h}=Pe(g);return n?s.jsx(y,{component:"li",sx:{display:"inline-flex"},children:s.jsx(sr,{tooltip:!0,imageView:!0,file:g,onRemove:()=>r==null?void 0:r(g),sx:{width:80,height:80,border:D=>`solid 1px ${x(D.vars.palette.grey["500Channel"],.16)}`},slotProps:{icon:{width:36,height:36}},...o==null?void 0:o.thumbnail})},m):s.jsxs(y,{component:"li",sx:{py:1,pr:1,pl:1.5,gap:1.5,display:"flex",borderRadius:1,alignItems:"center",border:D=>`solid 1px ${x(D.vars.palette.grey["500Channel"],.16)}`},children:[s.jsx(sr,{file:g,...o==null?void 0:o.thumbnail}),s.jsx(Pr,{primary:m,secondary:cr(h),secondaryTypographyProps:{component:"span",typography:"caption"}}),r&&s.jsx(Ie,{size:"small",onClick:()=>r(g),children:s.jsx(B,{icon:"mingcute:close-line",width:16})})]},m)}),f]})}function Vt({file:e}){const r=typeof e=="string"?e:e.name,t=typeof e=="string"?e:URL.createObjectURL(e);return s.jsx(y,{sx:{p:1,top:0,left:0,width:1,height:1,position:"absolute"},children:s.jsx(y,{component:"img",alt:r,src:t,sx:{width:1,height:1,borderRadius:1,objectFit:"cover"}})})}function qt({sx:e,...r}){return s.jsx(Ie,{size:"small",sx:{top:16,right:16,zIndex:9,position:"absolute",color:t=>x(t.vars.palette.common.whiteChannel,.8),bgcolor:t=>x(t.vars.palette.grey["900Channel"],.72),"&:hover":{bgcolor:t=>x(t.vars.palette.grey["900Channel"],.48)},...e},...r,children:s.jsx(B,{icon:"mingcute:close-line",width:18})})}function rn({sx:e,value:r,error:t,disabled:n,onDelete:o,onUpload:i,onRemove:u,thumbnail:l,helperText:f,onRemoveAll:g,multiple:m=!1,...h}){const{getRootProps:D,getInputProps:R,isDragActive:_,isDragReject:k,fileRejections:S}=fe({multiple:m,disabled:n,...h}),P=Array.isArray(r)&&m,w=!P&&!!r,G=P&&!!r.length,ee=k||!!t,Y=G&&s.jsxs(s.Fragment,{children:[s.jsx(Yt,{files:r,thumbnail:l,onRemove:u,sx:{my:3}}),(g||i)&&s.jsxs(Te,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[g&&s.jsx(Xe,{color:"inherit",variant:"outlined",size:"small",onClick:g,children:"Remove all"}),i&&s.jsx(Xe,{size:"small",variant:"contained",onClick:i,startIcon:s.jsx(B,{icon:"eva:cloud-upload-fill"}),children:"Upload"})]})]});return s.jsxs(y,{sx:{width:1,position:"relative",...e},children:[s.jsxs(y,{...D(),sx:{p:5,outline:"none",borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",bgcolor:T=>x(T.vars.palette.grey["500Channel"],.08),border:T=>`1px dashed ${x(T.vars.palette.grey["500Channel"],.2)}`,transition:T=>T.transitions.create(["opacity","padding"]),"&:hover":{opacity:.72},..._&&{opacity:.72},...n&&{opacity:.48,pointerEvents:"none"},...ee&&{color:"error.main",borderColor:"error.main",bgcolor:T=>x(T.vars.palette.error.mainChannel,.08)},...w&&{padding:"28% 0"}},children:[s.jsx("input",{...R()}),w?s.jsx(Vt,{file:r}):s.jsx(Tt,{})]}),w&&s.jsx(qt,{onClick:o}),f&&s.jsx(zr,{error:!!t,sx:{px:2},children:f}),s.jsx(xr,{files:S}),Y]})}function tn({placeholder:e,error:r,disabled:t,sx:n,...o}){const{getRootProps:i,getInputProps:u,isDragActive:l,isDragReject:f}=fe({disabled:t,...o}),g=f||r;return s.jsxs(y,{...i(),sx:{width:64,height:64,flexShrink:0,display:"flex",borderRadius:1,cursor:"pointer",alignItems:"center",color:"text.disabled",justifyContent:"center",bgcolor:m=>x(m.vars.palette.grey["500Channel"],.08),border:m=>`dashed 1px ${x(m.vars.palette.grey["500Channel"],.16)}`,...l&&{opacity:.72},...t&&{opacity:.48,pointerEvents:"none"},...g&&{color:"error.main",borderColor:"error.main",bgcolor:m=>x(m.vars.palette.error.mainChannel,.08)},"&:hover":{opacity:.72},...n},children:[s.jsx("input",{...u()}),e||s.jsxs(y,{display:"flex",alignItems:"center",gap:1,children:[s.jsx(B,{icon:"eva:cloud-upload-fill",width:28}),s.jsx(ke,{variant:"subtitle2",children:"Attachments"})]})]})}function nn({sx:e,error:r,value:t,disabled:n,helperText:o,...i}){const{getRootProps:u,getInputProps:l,isDragActive:f,isDragReject:g,fileRejections:m}=fe({multiple:!1,disabled:n,accept:{"image/*":[]},...i}),h=!!t,D=g||!!r,[R,_]=p.useState("");p.useEffect(()=>{typeof t=="string"?_(t):t instanceof File&&_(URL.createObjectURL(t))},[t]);const k=h&&s.jsx(Mr,{alt:"avatar",src:R,sx:{width:1,height:1,borderRadius:"50%"}}),S=s.jsxs(y,{className:"upload-placeholder",sx:{top:0,gap:1,left:0,width:1,height:1,zIndex:9,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",color:"text.disabled",flexDirection:"column",justifyContent:"center",bgcolor:w=>x(w.vars.palette.grey["500Channel"],.08),transition:w=>w.transitions.create(["opacity"],{duration:w.transitions.duration.shorter}),"&:hover":{opacity:.72},...D&&{color:"error.main",bgcolor:w=>x(w.vars.palette.error.mainChannel,.08)},...h&&{zIndex:9,opacity:0,color:"common.white",bgcolor:w=>x(w.vars.palette.grey["900Channel"],.64)}},children:[s.jsx(B,{icon:"solar:camera-add-bold",width:32}),s.jsx(ke,{variant:"caption",children:h?"Update photo":"Upload photo"})]}),P=s.jsxs(y,{sx:{width:1,height:1,overflow:"hidden",borderRadius:"50%",position:"relative"},children:[k,S]});return s.jsxs(s.Fragment,{children:[s.jsxs(y,{...u(),sx:{p:1,m:"auto",width:144,height:144,cursor:"pointer",overflow:"hidden",borderRadius:"50%",border:w=>`1px dashed ${x(w.vars.palette.grey["500Channel"],.2)}`,...f&&{opacity:.72},...n&&{opacity:.48,pointerEvents:"none"},...D&&{borderColor:"error.main"},...h&&{...D&&{bgcolor:w=>x(w.vars.palette.error.mainChannel,.08)},"&:hover .upload-placeholder":{opacity:1}},...e},children:[s.jsx("input",{...l()}),P]}),o&&o,s.jsx(xr,{files:m})]})}export{Vt as S,nn as U,tn as a,rn as b,Pe as f};

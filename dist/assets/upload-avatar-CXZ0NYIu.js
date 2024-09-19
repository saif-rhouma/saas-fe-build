import{cF as U,cG as H,cH as Be,cI as Ue,r as p,bE as wr,j as s,B as x,cJ as Ar,S as rr,aB as Er,v as j,cK as tr,T as nr,cL as He,aK as Fr,y as or,I as V,e as We}from"./index-DAC7DrKI.js";import{a as ir}from"./format-number-BqWqqWdN.js";import{F as Or}from"./FormHelperText-DDJizVQ2.js";import{P as f}from"./index-F5Z3hI1r.js";import{I as Cr}from"./image-uXppHbLd.js";var _r=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Q(e,r){var t=Ir(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Ir(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),o=_r.get(n);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var Pr=[".DS_Store","Thumbs.db"];function Rr(e){return U(this,void 0,void 0,function(){return H(this,function(r){return se(e)&&Sr(e.dataTransfer)?[2,Lr(e.dataTransfer,e.type)]:Tr(e)?[2,kr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,zr(e)]:[2,[]]})})}function Sr(e){return se(e)}function Tr(e){return se(e)&&se(e.target)}function se(e){return typeof e=="object"&&e!==null}function kr(e){return we(e.target.files).map(function(r){return Q(r)})}function zr(e){return U(this,void 0,void 0,function(){var r;return H(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return Q(n)})]}})})}function Lr(e,r){return U(this,void 0,void 0,function(){var t,n;return H(this,function(o){switch(o.label){case 0:return e.items?(t=we(e.items).filter(function(a){return a.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Mr))]):[3,2];case 1:return n=o.sent(),[2,Ne(ar(n))];case 2:return[2,Ne(we(e.files).map(function(a){return Q(a)}))]}})})}function Ne(e){return e.filter(function(r){return Pr.indexOf(r.name)===-1})}function we(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function Mr(e){if(typeof e.webkitGetAsEntry!="function")return Ge(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?sr(r):Ge(e)}function ar(e){return e.reduce(function(r,t){return Be(Be([],Ue(r),!1),Ue(Array.isArray(t)?ar(t):[t]),!1)},[])}function Ge(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=Q(r);return Promise.resolve(t)}function $r(e){return U(this,void 0,void 0,function(){return H(this,function(r){return[2,e.isDirectory?sr(e):Kr(e)]})})}function sr(e){var r=e.createReader();return new Promise(function(t,n){var o=[];function a(){var u=this;r.readEntries(function(l){return U(u,void 0,void 0,function(){var d,h,g;return H(this,function(y){switch(y.label){case 0:if(l.length)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return d=y.sent(),t(d),[3,4];case 3:return h=y.sent(),n(h),[3,4];case 4:return[3,6];case 5:g=Promise.all(l.map($r)),o.push(g),a(),y.label=6;case 6:return[2]}})})},function(l){n(l)})}a()})}function Kr(e){return U(this,void 0,void 0,function(){return H(this,function(r){return[2,new Promise(function(t,n){e.file(function(o){var a=Q(o,e.fullPath);t(a)},function(o){n(o)})})]})})}var Br=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),a=o.replace(/\/.*$/,"");return t.some(function(u){var l=u.trim().toLowerCase();return l.charAt(0)==="."?n.toLowerCase().endsWith(l):l.endsWith("/*")?a===l.replace(/\/.*$/,""):o===l})}return!0};function Ye(e){return Wr(e)||Hr(e)||lr(e)||Ur()}function Ur(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wr(e){if(Array.isArray(e))return Ae(e)}function qe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function Je(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?qe(Object(t),!0).forEach(function(n){cr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):qe(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function cr(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function J(e,r){return Yr(e)||Gr(e,r)||lr(e,r)||Nr()}function Nr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function lr(e,r){if(e){if(typeof e=="string")return Ae(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ae(e,r)}}function Ae(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Gr(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,u,l;try{for(t=t.call(e);!(o=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));o=!0);}catch(d){a=!0,l=d}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw l}}return n}}function Yr(e){if(Array.isArray(e))return e}var qr="file-invalid-type",Jr="file-too-large",Vr="file-too-small",Qr="too-many-files",Xr=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:qr,message:"File type must be ".concat(t)}},Ve=function(r){return{code:Jr,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Qe=function(r){return{code:Vr,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Zr={code:Qr,message:"Too many files"};function ur(e,r){var t=e.type==="application/x-moz-file"||Br(e,r);return[t,t?null:Xr(r)]}function pr(e,r,t){if(L(e.size))if(L(r)&&L(t)){if(e.size>t)return[!1,Ve(t)];if(e.size<r)return[!1,Qe(r)]}else{if(L(r)&&e.size<r)return[!1,Qe(r)];if(L(t)&&e.size>t)return[!1,Ve(t)]}return[!0,null]}function L(e){return e!=null}function et(e){var r=e.files,t=e.accept,n=e.minSize,o=e.maxSize,a=e.multiple,u=e.maxFiles,l=e.validator;return!a&&r.length>1||a&&u>=1&&r.length>u?!1:r.every(function(d){var h=ur(d,t),g=J(h,1),y=g[0],w=pr(d,n,o),P=J(w,1),C=P[0],R=l?l(d):null;return y&&C&&!R})}function ce(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ae(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Xe(e){e.preventDefault()}function rt(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function tt(e){return e.indexOf("Edge/")!==-1}function nt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return rt(e)||tt(e)}function I(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];return r.some(function(l){return!ce(n)&&l&&l.apply(void 0,[n].concat(a)),ce(n)})}}function ot(){return"showOpenFilePicker"in window}function it(e){if(L(e)){var r=Object.entries(e).filter(function(t){var n=J(t,2),o=n[0],a=n[1],u=!0;return fr(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),u=!1),(!Array.isArray(a)||!a.every(dr))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),u=!1),u}).reduce(function(t,n){var o=J(n,2),a=o[0],u=o[1];return Je(Je({},t),{},cr({},a,u))},{});return[{description:"Files",accept:r}]}return e}function at(e){if(L(e))return Object.entries(e).reduce(function(r,t){var n=J(t,2),o=n[0],a=n[1];return[].concat(Ye(r),[o],Ye(a))},[]).filter(function(r){return fr(r)||dr(r)}).join(",")}function st(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function ct(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function fr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function dr(e){return/^.*\.[\w]+$/.test(e)}var lt=["children"],ut=["open"],pt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],ft=["refKey","onChange","onClick"];function dt(e){return ht(e)||mt(e)||gr(e)||gt()}function gt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ht(e){if(Array.isArray(e))return Ee(e)}function je(e,r){return bt(e)||vt(e,r)||gr(e,r)||yt()}function yt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gr(e,r){if(e){if(typeof e=="string")return Ee(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ee(e,r)}}function Ee(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function vt(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,u,l;try{for(t=t.call(e);!(o=(u=t.next()).done)&&(n.push(u.value),!(r&&n.length===r));o=!0);}catch(d){a=!0,l=d}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw l}}return n}}function bt(e){if(Array.isArray(e))return e}function Ze(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Ze(Object(t),!0).forEach(function(n){Fe(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ze(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Fe(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function le(e,r){if(e==null)return{};var t=xt(e,r),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function xt(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}var Ce=p.forwardRef(function(e,r){var t=e.children,n=le(e,lt),o=ue(n),a=o.open,u=le(o,ut);return p.useImperativeHandle(r,function(){return{open:a}},[a]),wr.createElement(p.Fragment,null,t(m(m({},u),{},{open:a})))});Ce.displayName="Dropzone";var mr={disabled:!1,getFilesFromEvent:Rr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};Ce.defaultProps=mr;Ce.propTypes={children:f.func,accept:f.objectOf(f.arrayOf(f.string)),multiple:f.bool,preventDropOnDocument:f.bool,noClick:f.bool,noKeyboard:f.bool,noDrag:f.bool,noDragEventsBubbling:f.bool,minSize:f.number,maxSize:f.number,maxFiles:f.number,disabled:f.bool,getFilesFromEvent:f.func,onFileDialogCancel:f.func,onFileDialogOpen:f.func,useFsAccessApi:f.bool,autoFocus:f.bool,onDragEnter:f.func,onDragLeave:f.func,onDragOver:f.func,onDrop:f.func,onDropAccepted:f.func,onDropRejected:f.func,onError:f.func,validator:f.func};var Oe={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function ue(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=m(m({},mr),e),t=r.accept,n=r.disabled,o=r.getFilesFromEvent,a=r.maxSize,u=r.minSize,l=r.multiple,d=r.maxFiles,h=r.onDragEnter,g=r.onDragLeave,y=r.onDragOver,w=r.onDrop,P=r.onDropAccepted,C=r.onDropRejected,R=r.onFileDialogCancel,S=r.onFileDialogOpen,T=r.useFsAccessApi,b=r.autoFocus,W=r.preventDropOnDocument,X=r.noClick,N=r.noKeyboard,_=r.noDrag,k=r.noDragEventsBubbling,pe=r.onError,G=r.validator,Y=p.useMemo(function(){return at(t)},[t]),_e=p.useMemo(function(){return it(t)},[t]),fe=p.useMemo(function(){return typeof S=="function"?S:er},[S]),Z=p.useMemo(function(){return typeof R=="function"?R:er},[R]),A=p.useRef(null),O=p.useRef(null),yr=p.useReducer(Dt,Oe),Ie=je(yr,2),de=Ie[0],E=Ie[1],vr=de.isFocused,Pe=de.isFileDialogActive,ee=p.useRef(typeof window<"u"&&window.isSecureContext&&T&&ot()),Re=function(){!ee.current&&Pe&&setTimeout(function(){if(O.current){var c=O.current.files;c.length||(E({type:"closeDialog"}),Z())}},300)};p.useEffect(function(){return window.addEventListener("focus",Re,!1),function(){window.removeEventListener("focus",Re,!1)}},[O,Pe,Z,ee]);var M=p.useRef([]),Se=function(c){A.current&&A.current.contains(c.target)||(c.preventDefault(),M.current=[])};p.useEffect(function(){return W&&(document.addEventListener("dragover",Xe,!1),document.addEventListener("drop",Se,!1)),function(){W&&(document.removeEventListener("dragover",Xe),document.removeEventListener("drop",Se))}},[A,W]),p.useEffect(function(){return!n&&b&&A.current&&A.current.focus(),function(){}},[A,b,n]);var z=p.useCallback(function(i){pe?pe(i):console.error(i)},[pe]),Te=p.useCallback(function(i){i.preventDefault(),i.persist(),oe(i),M.current=[].concat(dt(M.current),[i.target]),ae(i)&&Promise.resolve(o(i)).then(function(c){if(!(ce(i)&&!k)){var v=c.length,D=v>0&&et({files:c,accept:Y,minSize:u,maxSize:a,multiple:l,maxFiles:d,validator:G}),F=v>0&&!D;E({isDragAccept:D,isDragReject:F,isDragActive:!0,type:"setDraggedFiles"}),h&&h(i)}}).catch(function(c){return z(c)})},[o,h,z,k,Y,u,a,l,d,G]),ke=p.useCallback(function(i){i.preventDefault(),i.persist(),oe(i);var c=ae(i);if(c&&i.dataTransfer)try{i.dataTransfer.dropEffect="copy"}catch{}return c&&y&&y(i),!1},[y,k]),ze=p.useCallback(function(i){i.preventDefault(),i.persist(),oe(i);var c=M.current.filter(function(D){return A.current&&A.current.contains(D)}),v=c.indexOf(i.target);v!==-1&&c.splice(v,1),M.current=c,!(c.length>0)&&(E({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ae(i)&&g&&g(i))},[A,g,k]),re=p.useCallback(function(i,c){var v=[],D=[];i.forEach(function(F){var q=ur(F,Y),B=je(q,2),me=B[0],he=B[1],ye=pr(F,u,a),ie=je(ye,2),ve=ie[0],be=ie[1],xe=G?G(F):null;if(me&&ve&&!xe)v.push(F);else{var De=[he,be];xe&&(De=De.concat(xe)),D.push({file:F,errors:De.filter(function(jr){return jr})})}}),(!l&&v.length>1||l&&d>=1&&v.length>d)&&(v.forEach(function(F){D.push({file:F,errors:[Zr]})}),v.splice(0)),E({acceptedFiles:v,fileRejections:D,type:"setFiles"}),w&&w(v,D,c),D.length>0&&C&&C(D,c),v.length>0&&P&&P(v,c)},[E,l,Y,u,a,d,w,P,C,G]),te=p.useCallback(function(i){i.preventDefault(),i.persist(),oe(i),M.current=[],ae(i)&&Promise.resolve(o(i)).then(function(c){ce(i)&&!k||re(c,i)}).catch(function(c){return z(c)}),E({type:"reset"})},[o,re,z,k]),$=p.useCallback(function(){if(ee.current){E({type:"openDialog"}),fe();var i={multiple:l,types:_e};window.showOpenFilePicker(i).then(function(c){return o(c)}).then(function(c){re(c,null),E({type:"closeDialog"})}).catch(function(c){st(c)?(Z(c),E({type:"closeDialog"})):ct(c)?(ee.current=!1,O.current?(O.current.value=null,O.current.click()):z(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):z(c)});return}O.current&&(E({type:"openDialog"}),fe(),O.current.value=null,O.current.click())},[E,fe,Z,T,re,z,_e,l]),Le=p.useCallback(function(i){!A.current||!A.current.isEqualNode(i.target)||(i.key===" "||i.key==="Enter"||i.keyCode===32||i.keyCode===13)&&(i.preventDefault(),$())},[A,$]),Me=p.useCallback(function(){E({type:"focus"})},[]),$e=p.useCallback(function(){E({type:"blur"})},[]),Ke=p.useCallback(function(){X||(nt()?setTimeout($,0):$())},[X,$]),K=function(c){return n?null:c},ge=function(c){return N?null:K(c)},ne=function(c){return _?null:K(c)},oe=function(c){k&&c.stopPropagation()},br=p.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=i.refKey,v=c===void 0?"ref":c,D=i.role,F=i.onKeyDown,q=i.onFocus,B=i.onBlur,me=i.onClick,he=i.onDragEnter,ye=i.onDragOver,ie=i.onDragLeave,ve=i.onDrop,be=le(i,pt);return m(m(Fe({onKeyDown:ge(I(F,Le)),onFocus:ge(I(q,Me)),onBlur:ge(I(B,$e)),onClick:K(I(me,Ke)),onDragEnter:ne(I(he,Te)),onDragOver:ne(I(ye,ke)),onDragLeave:ne(I(ie,ze)),onDrop:ne(I(ve,te)),role:typeof D=="string"&&D!==""?D:"presentation"},v,A),!n&&!N?{tabIndex:0}:{}),be)}},[A,Le,Me,$e,Ke,Te,ke,ze,te,N,_,n]),xr=p.useCallback(function(i){i.stopPropagation()},[]),Dr=p.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=i.refKey,v=c===void 0?"ref":c,D=i.onChange,F=i.onClick,q=le(i,ft),B=Fe({accept:Y,multiple:l,type:"file",style:{display:"none"},onChange:K(I(D,te)),onClick:K(I(F,xr)),tabIndex:-1},v,O);return m(m({},B),q)}},[O,t,l,te,n]);return m(m({},de),{},{isFocused:vr&&!n,getRootProps:br,getInputProps:Dr,rootRef:A,inputRef:O,open:K($)})}function Dt(e,r){switch(r.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},Oe),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return m(m({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return m(m({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return m({},Oe);default:return e}}function er(){}function jt({...e}){return s.jsxs(x,{sx:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},...e,children:[s.jsx(Ar,{hideBackground:!0,sx:{width:200}}),s.jsxs(rr,{spacing:1,sx:{textAlign:"center"},children:[s.jsx(x,{sx:{typography:"h6"},children:"Drop or select file"}),s.jsxs(x,{sx:{typography:"body2",color:"text.secondary"},children:["Drop files here or click to",s.jsx(x,{component:"span",sx:{mx:.5,color:"primary.main",textDecoration:"underline"},children:"browse"}),"through your machine."]})]})]})}function hr({files:e}){return e.length?s.jsx(Er,{variant:"outlined",sx:{py:1,px:2,mt:3,textAlign:"left",borderStyle:"dashed",borderColor:"error.main",bgcolor:r=>j(r.vars.palette.error.mainChannel,.08)},children:e.map(({file:r,errors:t})=>{const{path:n,size:o}=tr(r);return s.jsxs(x,{sx:{my:1},children:[s.jsxs(nr,{variant:"subtitle2",noWrap:!0,children:[n," - ",o?ir(o):""]}),t.map(a=>s.jsxs(x,{component:"span",sx:{typography:"caption"},children:["- ",a.message]},a.code))]},n)})}):null}function wt({sx:e,onRemove:r,lastNode:t,thumbnail:n,slotProps:o,firstNode:a,files:u=[]}){const l=a&&s.jsx(x,{component:"li",sx:{...n&&{width:"auto",display:"inline-flex"}},children:a}),d=t&&s.jsx(x,{component:"li",sx:{...n&&{width:"auto",display:"inline-flex"}},children:t});return s.jsxs(x,{component:"ul",sx:{gap:1,display:"flex",flexDirection:"column",...n&&{flexWrap:"wrap",flexDirection:"row"},...e},children:[l,u.map(h=>{const{name:g,size:y}=tr(h);return n?s.jsx(x,{component:"li",sx:{display:"inline-flex"},children:s.jsx(He,{tooltip:!0,imageView:!0,file:h,onRemove:()=>r==null?void 0:r(h),sx:{width:80,height:80,border:w=>`solid 1px ${j(w.vars.palette.grey["500Channel"],.16)}`},slotProps:{icon:{width:36,height:36}},...o==null?void 0:o.thumbnail})},g):s.jsxs(x,{component:"li",sx:{py:1,pr:1,pl:1.5,gap:1.5,display:"flex",borderRadius:1,alignItems:"center",border:w=>`solid 1px ${j(w.vars.palette.grey["500Channel"],.16)}`},children:[s.jsx(He,{file:h,...o==null?void 0:o.thumbnail}),s.jsx(Fr,{primary:g,secondary:ir(y),secondaryTypographyProps:{component:"span",typography:"caption"}}),r&&s.jsx(or,{size:"small",onClick:()=>r(h),children:s.jsx(V,{icon:"mingcute:close-line",width:16})})]},g)}),d]})}function At({file:e}){const r=typeof e=="string"?e:e.name,t=typeof e=="string"?e:URL.createObjectURL(e);return s.jsx(x,{sx:{p:1,top:0,left:0,width:1,height:1,position:"absolute"},children:s.jsx(x,{component:"img",alt:r,src:t,sx:{width:1,height:1,borderRadius:1,objectFit:"cover"}})})}function Et({sx:e,...r}){return s.jsx(or,{size:"small",sx:{top:16,right:16,zIndex:9,position:"absolute",color:t=>j(t.vars.palette.common.whiteChannel,.8),bgcolor:t=>j(t.vars.palette.grey["900Channel"],.72),"&:hover":{bgcolor:t=>j(t.vars.palette.grey["900Channel"],.48)},...e},...r,children:s.jsx(V,{icon:"mingcute:close-line",width:18})})}function Pt({sx:e,value:r,error:t,disabled:n,onDelete:o,onUpload:a,onRemove:u,thumbnail:l,helperText:d,onRemoveAll:h,multiple:g=!1,...y}){const{getRootProps:w,getInputProps:P,isDragActive:C,isDragReject:R,fileRejections:S}=ue({multiple:g,disabled:n,...y}),T=Array.isArray(r)&&g,b=!T&&!!r,W=T&&!!r.length,X=R||!!t,N=W&&s.jsxs(s.Fragment,{children:[s.jsx(wt,{files:r,thumbnail:l,onRemove:u,sx:{my:3}}),(h||a)&&s.jsxs(rr,{direction:"row",justifyContent:"flex-end",spacing:1.5,children:[h&&s.jsx(We,{color:"inherit",variant:"outlined",size:"small",onClick:h,children:"Remove all"}),a&&s.jsx(We,{size:"small",variant:"contained",onClick:a,startIcon:s.jsx(V,{icon:"eva:cloud-upload-fill"}),children:"Upload"})]})]});return s.jsxs(x,{sx:{width:1,position:"relative",...e},children:[s.jsxs(x,{...w(),sx:{p:5,outline:"none",borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",bgcolor:_=>j(_.vars.palette.grey["500Channel"],.08),border:_=>`1px dashed ${j(_.vars.palette.grey["500Channel"],.2)}`,transition:_=>_.transitions.create(["opacity","padding"]),"&:hover":{opacity:.72},...C&&{opacity:.72},...n&&{opacity:.48,pointerEvents:"none"},...X&&{color:"error.main",borderColor:"error.main",bgcolor:_=>j(_.vars.palette.error.mainChannel,.08)},...b&&{padding:"28% 0"}},children:[s.jsx("input",{...P()}),b?s.jsx(At,{file:r}):s.jsx(jt,{})]}),b&&s.jsx(Et,{onClick:o}),d&&s.jsx(Or,{error:!!t,sx:{px:2},children:d}),s.jsx(hr,{files:S}),N]})}function Rt({placeholder:e,error:r,disabled:t,sx:n,...o}){const{getRootProps:a,getInputProps:u,isDragActive:l,isDragReject:d}=ue({disabled:t,...o}),h=d||r;return s.jsxs(x,{...a(),sx:{width:64,height:64,flexShrink:0,display:"flex",borderRadius:1,cursor:"pointer",alignItems:"center",color:"text.disabled",justifyContent:"center",bgcolor:g=>j(g.vars.palette.grey["500Channel"],.08),border:g=>`dashed 1px ${j(g.vars.palette.grey["500Channel"],.16)}`,...l&&{opacity:.72},...t&&{opacity:.48,pointerEvents:"none"},...h&&{color:"error.main",borderColor:"error.main",bgcolor:g=>j(g.vars.palette.error.mainChannel,.08)},"&:hover":{opacity:.72},...n},children:[s.jsx("input",{...u()}),e||s.jsx(V,{icon:"eva:cloud-upload-fill",width:28})]})}function St({sx:e,error:r,value:t,disabled:n,helperText:o,...a}){const{getRootProps:u,getInputProps:l,isDragActive:d,isDragReject:h,fileRejections:g}=ue({multiple:!1,disabled:n,accept:{"image/*":[]},...a}),y=!!t,w=h||!!r,[P,C]=p.useState("");p.useEffect(()=>{typeof t=="string"?C(t):t instanceof File&&C(URL.createObjectURL(t))},[t]);const R=y&&s.jsx(Cr,{alt:"avatar",src:P,sx:{width:1,height:1,borderRadius:"50%"}}),S=s.jsxs(x,{className:"upload-placeholder",sx:{top:0,gap:1,left:0,width:1,height:1,zIndex:9,display:"flex",borderRadius:"50%",position:"absolute",alignItems:"center",color:"text.disabled",flexDirection:"column",justifyContent:"center",bgcolor:b=>j(b.vars.palette.grey["500Channel"],.08),transition:b=>b.transitions.create(["opacity"],{duration:b.transitions.duration.shorter}),"&:hover":{opacity:.72},...w&&{color:"error.main",bgcolor:b=>j(b.vars.palette.error.mainChannel,.08)},...y&&{zIndex:9,opacity:0,color:"common.white",bgcolor:b=>j(b.vars.palette.grey["900Channel"],.64)}},children:[s.jsx(V,{icon:"solar:camera-add-bold",width:32}),s.jsx(nr,{variant:"caption",children:y?"Update photo":"Upload photo"})]}),T=s.jsxs(x,{sx:{width:1,height:1,overflow:"hidden",borderRadius:"50%",position:"relative"},children:[R,S]});return s.jsxs(s.Fragment,{children:[s.jsxs(x,{...u(),sx:{p:1,m:"auto",width:144,height:144,cursor:"pointer",overflow:"hidden",borderRadius:"50%",border:b=>`1px dashed ${j(b.vars.palette.grey["500Channel"],.2)}`,...d&&{opacity:.72},...n&&{opacity:.48,pointerEvents:"none"},...w&&{borderColor:"error.main"},...y&&{...w&&{bgcolor:b=>j(b.vars.palette.error.mainChannel,.08)},"&:hover .upload-placeholder":{opacity:1}},...e},children:[s.jsx("input",{...l()}),T]}),o&&o,s.jsx(hr,{files:g})]})}export{St as U,Rt as a,Pt as b};

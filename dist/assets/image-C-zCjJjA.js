import{r as ke,aW as ze,au as De,B as Ce,j as Te,C as Re}from"./index-BEaGYMEI.js";var Ne={exports:{}};(()=>{var be={296:(b,d,u)=>{var ne=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,m=/^0o[0-7]+$/i,k=parseInt,H=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g,ie=typeof self=="object"&&self&&self.Object===Object&&self,oe=H||ie||Function("return this")(),W=Object.prototype.toString,Z=Math.max,se=Math.min,Y=function(){return oe.Date.now()};function z(h){var P=typeof h;return!!h&&(P=="object"||P=="function")}function ae(h){if(typeof h=="number")return h;if(function(f){return typeof f=="symbol"||function(T){return!!T&&typeof T=="object"}(f)&&W.call(f)=="[object Symbol]"}(h))return NaN;if(z(h)){var P=typeof h.valueOf=="function"?h.valueOf():h;h=z(P)?P+"":P}if(typeof h!="string")return h===0?h:+h;h=h.replace(ne,"");var $=K.test(h);return $||m.test(h)?k(h.slice(2),$?2:8):A.test(h)?NaN:+h}b.exports=function(h,P,$){var f,T,D,S,E,F,C=0,X=!1,U=!1,Q=!0;if(typeof h!="function")throw new TypeError("Expected a function");function G(I){var L=f,M=T;return f=T=void 0,C=I,S=h.apply(M,L)}function ee(I){var L=I-F;return F===void 0||L>=P||L<0||U&&I-C>=D}function _(){var I=Y();if(ee(I))return J(I);E=setTimeout(_,function(L){var M=P-(L-F);return U?se(M,D-(L-C)):M}(I))}function J(I){return E=void 0,Q&&f?G(I):(f=T=void 0,S)}function N(){var I=Y(),L=ee(I);if(f=arguments,T=this,F=I,L){if(E===void 0)return function(M){return C=M,E=setTimeout(_,P),X?G(M):S}(F);if(U)return E=setTimeout(_,P),G(F)}return E===void 0&&(E=setTimeout(_,P)),S}return P=ae(P)||0,z($)&&(X=!!$.leading,D=(U="maxWait"in $)?Z(ae($.maxWait)||0,P):D,Q="trailing"in $?!!$.trailing:Q),N.cancel=function(){E!==void 0&&clearTimeout(E),C=0,f=F=T=E=void 0},N.flush=function(){return E===void 0?S:J(Y())},N}},96:(b,d,u)=>{var ne="Expected a function",A=NaN,K="[object Symbol]",m=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,H=/^0b[01]+$/i,ie=/^0o[0-7]+$/i,oe=parseInt,W=typeof u.g=="object"&&u.g&&u.g.Object===Object&&u.g,Z=typeof self=="object"&&self&&self.Object===Object&&self,se=W||Z||Function("return this")(),Y=Object.prototype.toString,z=Math.max,ae=Math.min,h=function(){return se.Date.now()};function P(f){var T=typeof f;return!!f&&(T=="object"||T=="function")}function $(f){if(typeof f=="number")return f;if(function(S){return typeof S=="symbol"||function(E){return!!E&&typeof E=="object"}(S)&&Y.call(S)==K}(f))return A;if(P(f)){var T=typeof f.valueOf=="function"?f.valueOf():f;f=P(T)?T+"":T}if(typeof f!="string")return f===0?f:+f;f=f.replace(m,"");var D=H.test(f);return D||ie.test(f)?oe(f.slice(2),D?2:8):k.test(f)?A:+f}b.exports=function(f,T,D){var S=!0,E=!0;if(typeof f!="function")throw new TypeError(ne);return P(D)&&(S="leading"in D?!!D.leading:S,E="trailing"in D?!!D.trailing:E),function(F,C,X){var U,Q,G,ee,_,J,N=0,I=!1,L=!1,M=!0;if(typeof F!="function")throw new TypeError(ne);function de(B){var q=U,re=Q;return U=Q=void 0,N=B,ee=F.apply(re,q)}function he(B){var q=B-J;return J===void 0||q>=C||q<0||L&&B-N>=G}function te(){var B=h();if(he(B))return ve(B);_=setTimeout(te,function(q){var re=C-(q-J);return L?ae(re,G-(q-N)):re}(B))}function ve(B){return _=void 0,M&&U?de(B):(U=Q=void 0,ee)}function ce(){var B=h(),q=he(B);if(U=arguments,Q=this,J=B,q){if(_===void 0)return function(re){return N=re,_=setTimeout(te,C),I?de(re):ee}(J);if(L)return _=setTimeout(te,C),de(J)}return _===void 0&&(_=setTimeout(te,C)),ee}return C=$(C)||0,P(X)&&(I=!!X.leading,G=(L="maxWait"in X)?z($(X.maxWait)||0,C):G,M="trailing"in X?!!X.trailing:M),ce.cancel=function(){_!==void 0&&clearTimeout(_),N=0,U=J=Q=_=void 0},ce.flush=function(){return _===void 0?ee:ve(h())},ce}(f,T,{leading:S,maxWait:T,trailing:E})}},703:(b,d,u)=>{var ne=u(414);function A(){}function K(){}K.resetWarningCache=A,b.exports=function(){function m(ie,oe,W,Z,se,Y){if(Y!==ne){var z=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw z.name="Invariant Violation",z}}function k(){return m}m.isRequired=m;var H={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:k,element:m,elementType:m,instanceOf:k,node:m,objectOf:k,oneOf:k,oneOfType:k,shape:k,exact:k,checkPropTypes:K,resetWarningCache:A};return H.PropTypes=H,H}},697:(b,d,u)=>{b.exports=u(703)()},414:b=>{b.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},pe={};function j(b){var d=pe[b];if(d!==void 0)return d.exports;var u=pe[b]={exports:{}};return be[b](u,u.exports,j),u.exports}j.n=b=>{var d=b&&b.__esModule?()=>b.default:()=>b;return j.d(d,{a:d}),d},j.d=(b,d)=>{for(var u in d)j.o(d,u)&&!j.o(b,u)&&Object.defineProperty(b,u,{enumerable:!0,get:d[u]})},j.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),j.o=(b,d)=>Object.prototype.hasOwnProperty.call(b,d),j.r=b=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})};var ye={};(()=>{j.r(ye),j.d(ye,{LazyLoadComponent:()=>Se,LazyLoadImage:()=>We,trackWindowScroll:()=>J});const b=ke;var d=j.n(b),u=j(697);const ne=ze;var A=j.n(ne);function K(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function m(n){return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(n)}function k(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),o.push.apply(o,i)}return o}function H(n,e,o){return(e=oe(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function ie(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,oe(i.key),i)}}function oe(n){var e=function(o,i){if(m(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var p=l.call(o,"string");if(m(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return m(e)==="symbol"?e:String(e)}function W(n,e){return W=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},W(n,e)}function Z(n){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(n)}var se=function(n){n.forEach(function(e){e.isIntersecting&&e.target.onVisible()})},Y={},z=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&W(t,r)})(v,n);var e,o,i,l,p=(i=v,l=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=Z(i);if(l){var c=Z(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return function(a,s){if(s&&(m(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}(a)}(this,t)});function v(t){var r;if(function(a,s){if(!(a instanceof s))throw new TypeError("Cannot call a class as a function")}(this,v),(r=p.call(this,t)).supportsObserver=!t.scrollPosition&&t.useIntersectionObserver&&K(),r.supportsObserver){var c=t.threshold;r.observer=function(a){return Y[a]=Y[a]||new IntersectionObserver(se,{rootMargin:a+"px"}),Y[a]}(c)}return r}return e=v,o=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,r=this.placeholder.getBoundingClientRect(),c=A().findDOMNode(this.placeholder).style,a=parseInt(c.getPropertyValue("margin-left"),10)||0,s=parseInt(c.getPropertyValue("margin-top"),10)||0;return{bottom:t.y+r.bottom+s,left:t.x+r.left+a,right:t.x+r.right+a,top:t.y+r.top+s}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var t=this.props,r=t.scrollPosition,c=t.threshold,a=this.getPlaceholderBoundingBox(r),s=r.y+window.innerHeight,y=r.x,O=r.x+window.innerWidth,w=r.y;return w-c<=a.bottom&&s+c>=a.top&&y-c<=a.right&&O+c>=a.left}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var t=this,r=this.props,c=r.className,a=r.height,s=r.placeholder,y=r.style,O=r.width;if(s&&typeof s.type!="function")return d().cloneElement(s,{ref:function(g){return t.placeholder=g}});var w=function(g){for(var R=1;R<arguments.length;R++){var x=arguments[R]!=null?arguments[R]:{};R%2?k(Object(x),!0).forEach(function(V){H(g,V,x[V])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(x)):k(Object(x)).forEach(function(V){Object.defineProperty(g,V,Object.getOwnPropertyDescriptor(x,V))})}return g}({display:"inline-block"},y);return O!==void 0&&(w.width=O),a!==void 0&&(w.height=a),d().createElement("span",{className:c,ref:function(g){return t.placeholder=g},style:w},s)}}],o&&ie(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(d().Component);z.propTypes={onVisible:u.PropTypes.func.isRequired,className:u.PropTypes.string,height:u.PropTypes.oneOfType([u.PropTypes.number,u.PropTypes.string]),placeholder:u.PropTypes.element,threshold:u.PropTypes.number,useIntersectionObserver:u.PropTypes.bool,scrollPosition:u.PropTypes.shape({x:u.PropTypes.number.isRequired,y:u.PropTypes.number.isRequired}),width:u.PropTypes.oneOfType([u.PropTypes.number,u.PropTypes.string])},z.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const ae=z;var h=j(296),P=j.n(h),$=j(96),f=j.n($),T=function(n){var e=getComputedStyle(n,null);return e.getPropertyValue("overflow")+e.getPropertyValue("overflow-y")+e.getPropertyValue("overflow-x")};const D=function(n){if(!(n instanceof HTMLElement))return window;for(var e=n;e&&e instanceof HTMLElement;){if(/(scroll|auto)/.test(T(e)))return e;e=e.parentNode}return window};function S(n){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(n)}var E=["delayMethod","delayTime"];function F(){return F=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},F.apply(this,arguments)}function C(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(l=function(p,v){if(S(p)!=="object"||p===null)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,"string");if(S(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}(i.key),S(l)==="symbol"?l:String(l)),i)}var l}function X(n,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},X(n,e)}function U(n,e){if(e&&(S(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Q(n)}function Q(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function G(n){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},G(n)}var ee=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},_=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const J=function(n){var e=function(o){(function(c,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(a&&a.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),Object.defineProperty(c,"prototype",{writable:!1}),a&&X(c,a)})(r,o);var i,l,p,v,t=(p=r,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var c,a=G(p);if(v){var s=G(this).constructor;c=Reflect.construct(a,arguments,s)}else c=a.apply(this,arguments);return U(this,c)});function r(c){var a;if(function(y,O){if(!(y instanceof O))throw new TypeError("Cannot call a class as a function")}(this,r),(a=t.call(this,c)).useIntersectionObserver=c.useIntersectionObserver&&K(),a.useIntersectionObserver)return U(a);var s=a.onChangeScroll.bind(Q(a));return c.delayMethod==="debounce"?a.delayedScroll=P()(s,c.delayTime):c.delayMethod==="throttle"&&(a.delayedScroll=f()(s,c.delayTime)),a.state={scrollPosition:{x:ee(),y:_()}},a.baseComponentRef=d().createRef(),a}return i=r,(l=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||D(A().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=D(A().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:ee(),y:_()}})}},{key:"render",value:function(){var c=this.props,a=(c.delayMethod,c.delayTime,function(y,O){if(y==null)return{};var w,g,R=function(V,fe){if(V==null)return{};var ue,Oe,Ie={},Le=Object.keys(V);for(Oe=0;Oe<Le.length;Oe++)ue=Le[Oe],fe.indexOf(ue)>=0||(Ie[ue]=V[ue]);return Ie}(y,O);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(y);for(g=0;g<x.length;g++)w=x[g],O.indexOf(w)>=0||Object.prototype.propertyIsEnumerable.call(y,w)&&(R[w]=y[w])}return R}(c,E)),s=this.useIntersectionObserver?null:this.state.scrollPosition;return d().createElement(n,F({forwardRef:this.baseComponentRef,scrollPosition:s},a))}}])&&C(i.prototype,l),Object.defineProperty(i,"prototype",{writable:!1}),r}(d().Component);return e.propTypes={delayMethod:u.PropTypes.oneOf(["debounce","throttle"]),delayTime:u.PropTypes.number,useIntersectionObserver:u.PropTypes.bool},e.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},e};function N(n){return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(n)}function I(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(l=function(p,v){if(N(p)!=="object"||p===null)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,"string");if(N(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}(i.key),N(l)==="symbol"?l:String(l)),i)}var l}function L(n,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},L(n,e)}function M(n){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(n)}var de=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&L(t,r)})(v,n);var e,o,i,l,p=(i=v,l=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=M(i);if(l){var c=M(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return function(a,s){if(s&&(N(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}(a)}(this,t)});function v(t){return function(r,c){if(!(r instanceof c))throw new TypeError("Cannot call a class as a function")}(this,v),p.call(this,t)}return e=v,(o=[{key:"render",value:function(){return d().createElement(ae,this.props)}}])&&I(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(d().Component);const he=J(de);function te(n){return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te(n)}function ve(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(l=function(p,v){if(te(p)!=="object"||p===null)return p;var t=p[Symbol.toPrimitive];if(t!==void 0){var r=t.call(p,"string");if(te(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}(i.key),te(l)==="symbol"?l:String(l)),i)}var l}function ce(n,e){return ce=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},ce(n,e)}function B(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function q(n){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(n)}var re=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&ce(t,r)})(v,n);var e,o,i,l,p=(i=v,l=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=q(i);if(l){var c=q(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return function(a,s){if(s&&(te(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return B(a)}(this,t)});function v(t){var r;(function(O,w){if(!(O instanceof w))throw new TypeError("Cannot call a class as a function")})(this,v),r=p.call(this,t);var c=t.afterLoad,a=t.beforeLoad,s=t.scrollPosition,y=t.visibleByDefault;return r.state={visible:y},y&&(a(),c()),r.onVisible=r.onVisible.bind(B(r)),r.isScrollTracked=!!(s&&Number.isFinite(s.x)&&s.x>=0&&Number.isFinite(s.y)&&s.y>=0),r}return e=v,(o=[{key:"componentDidUpdate",value:function(t,r){r.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var t=this.props,r=t.className,c=t.delayMethod,a=t.delayTime,s=t.height,y=t.placeholder,O=t.scrollPosition,w=t.style,g=t.threshold,R=t.useIntersectionObserver,x=t.width;return this.isScrollTracked||R&&K()?d().createElement(ae,{className:r,height:s,onVisible:this.onVisible,placeholder:y,scrollPosition:O,style:w,threshold:g,useIntersectionObserver:R,width:x}):d().createElement(he,{className:r,delayMethod:c,delayTime:a,height:s,onVisible:this.onVisible,placeholder:y,style:w,threshold:g,width:x})}}])&&ve(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(d().Component);re.propTypes={afterLoad:u.PropTypes.func,beforeLoad:u.PropTypes.func,useIntersectionObserver:u.PropTypes.bool,visibleByDefault:u.PropTypes.bool},re.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Se=re;function le(n){return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(n)}var Me=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function Ee(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),o.push.apply(o,i)}return o}function xe(n){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?Ee(Object(o),!0).forEach(function(i){Be(n,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Ee(Object(o)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(o,i))})}return n}function Be(n,e,o){return(e=_e(e))in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function me(){return me=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},me.apply(this,arguments)}function Ve(n,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,_e(i.key),i)}}function _e(n){var e=function(o,i){if(le(o)!=="object"||o===null)return o;var l=o[Symbol.toPrimitive];if(l!==void 0){var p=l.call(o,"string");if(le(p)!=="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(n);return le(e)==="symbol"?e:String(e)}function Pe(n,e){return Pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},Pe(n,e)}function ge(n){return ge=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ge(n)}var je=function(n){(function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Pe(t,r)})(v,n);var e,o,i,l,p=(i=v,l=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,r=ge(i);if(l){var c=ge(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return function(a,s){if(s&&(le(s)==="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}(a)}(this,t)});function v(t){var r;return function(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}(this,v),(r=p.call(this,t)).state={loaded:!1},r}return e=v,(o=[{key:"onImageLoad",value:function(){var t=this;return this.state.loaded?null:function(r){t.props.onLoad(r),t.props.afterLoad(),t.setState({loaded:!0})}}},{key:"getImg",value:function(){var t=this.props,r=(t.afterLoad,t.beforeLoad,t.delayMethod,t.delayTime,t.effect,t.placeholder,t.placeholderSrc,t.scrollPosition,t.threshold,t.useIntersectionObserver,t.visibleByDefault,t.wrapperClassName,t.wrapperProps,function(c,a){if(c==null)return{};var s,y,O=function(g,R){if(g==null)return{};var x,V,fe={},ue=Object.keys(g);for(V=0;V<ue.length;V++)x=ue[V],R.indexOf(x)>=0||(fe[x]=g[x]);return fe}(c,a);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(c);for(y=0;y<w.length;y++)s=w[y],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(c,s)&&(O[s]=c[s])}return O}(t,Me));return d().createElement("img",me({},r,{onLoad:this.onImageLoad()}))}},{key:"getLazyLoadImage",value:function(){var t=this.props,r=t.beforeLoad,c=t.className,a=t.delayMethod,s=t.delayTime,y=t.height,O=t.placeholder,w=t.scrollPosition,g=t.style,R=t.threshold,x=t.useIntersectionObserver,V=t.visibleByDefault,fe=t.width;return d().createElement(Se,{beforeLoad:r,className:c,delayMethod:a,delayTime:s,height:y,placeholder:O,scrollPosition:w,style:g,threshold:R,useIntersectionObserver:x,visibleByDefault:V,width:fe},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(t){var r=this.props,c=r.effect,a=r.height,s=r.placeholderSrc,y=r.width,O=r.wrapperClassName,w=r.wrapperProps,g=this.state.loaded,R=g?" lazy-load-image-loaded":"",x=g||!s?{}:{backgroundImage:"url(".concat(s,")"),backgroundSize:"100% 100%"};return d().createElement("span",me({className:O+" lazy-load-image-background "+c+R,style:xe(xe({},x),{},{color:"transparent",display:"inline-block",height:a,width:y})},w),t)}},{key:"render",value:function(){var t=this.props,r=t.effect,c=t.placeholderSrc,a=t.visibleByDefault,s=t.wrapperClassName,y=t.wrapperProps,O=this.getLazyLoadImage();return(r||c)&&!a||s||y?this.getWrappedLazyLoadImage(O):O}}])&&Ve(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),v}(d().Component);je.propTypes={onLoad:u.PropTypes.func,afterLoad:u.PropTypes.func,beforeLoad:u.PropTypes.func,delayMethod:u.PropTypes.string,delayTime:u.PropTypes.number,effect:u.PropTypes.string,placeholderSrc:u.PropTypes.string,threshold:u.PropTypes.number,useIntersectionObserver:u.PropTypes.bool,visibleByDefault:u.PropTypes.bool,wrapperClassName:u.PropTypes.string,wrapperProps:u.PropTypes.object},je.defaultProps={onLoad:function(){},afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const We=je})(),Ne.exports=ye})();var $e=Ne.exports;const we={root:"mnl__image__root",wrapper:"mnl__image__wrapper",overlay:"mnl__image__overlay"},Fe=De(Ce)({overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block",[`& .${we.wrapper}`]:{width:"100%",height:"100%",verticalAlign:"bottom",backgroundSize:"cover !important"}}),Ue=De("span")({top:0,left:0,zIndex:1,width:"100%",height:"100%",position:"absolute"}),Ae=ke.forwardRef(({ratio:be,disabledEffect:pe=!1,alt:j,src:ye,delayTime:b,threshold:d,beforeLoad:u,delayMethod:ne,placeholder:A,wrapperProps:K,scrollPosition:m,effect:k="blur",visibleByDefault:H,wrapperClassName:ie,useIntersectionObserver:oe,slotProps:W,sx:Z,...se},Y)=>{const z=Te.jsx(Ce,{component:$e.LazyLoadImage,alt:j,src:ye,delayTime:b,threshold:d,beforeLoad:u,delayMethod:ne,placeholder:A,wrapperProps:K,scrollPosition:m,visibleByDefault:H,effect:H||pe?void 0:k,useIntersectionObserver:oe,wrapperClassName:ie||we.wrapper,placeholderSrc:H||pe?`${Re.site.basePath}/assets/transparent.png`:`${Re.site.basePath}/assets/placeholder.svg`,sx:{width:1,height:1,objectFit:"cover",verticalAlign:"bottom",aspectRatio:be}});return Te.jsxs(Fe,{ref:Y,component:"span",className:we.root,sx:{...!!be&&{width:1},...Z},...se,children:[(W==null?void 0:W.overlay)&&Te.jsx(Ue,{className:we.overlay,sx:W==null?void 0:W.overlay}),z]})});export{Ae as I,we as i};

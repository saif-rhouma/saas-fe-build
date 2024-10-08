import{r as E}from"./index-yGbCRgTb.js";function Wt(t){return Object.prototype.toString.call(t)==="[object Object]"}function Bt(t){return Wt(t)||Array.isArray(t)}function At(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function It(t,e){const r=Object.keys(t),s=Object.keys(e);if(r.length!==s.length)return!1;const u=JSON.stringify(Object.keys(t.breakpoints||{})),n=JSON.stringify(Object.keys(e.breakpoints||{}));return u!==n?!1:r.every(o=>{const i=t[o],c=e[o];return typeof i=="function"?`${i}`==`${c}`:!Bt(i)||!Bt(c)?i===c:It(i,c)})}function zt(t){return t.concat().sort((e,r)=>e.name>r.name?1:-1).map(e=>e.options)}function te(t,e){if(t.length!==e.length)return!1;const r=zt(t),s=zt(e);return r.every((u,n)=>{const o=s[n];return It(u,o)})}function Pt(t){return typeof t=="number"}function Et(t){return typeof t=="string"}function vt(t){return typeof t=="boolean"}function jt(t){return Object.prototype.toString.call(t)==="[object Object]"}function D(t){return Math.abs(t)}function kt(t){return Math.sign(t)}function it(t,e){return D(t-e)}function ee(t,e){if(t===0||e===0||D(t)<=D(e))return 0;const r=it(D(t),D(e));return D(r/t)}function ut(t){return lt(t).map(Number)}function q(t){return t[at(t)]}function at(t){return Math.max(0,t.length-1)}function Tt(t,e){return e===at(t)}function Rt(t,e=0){return Array.from(Array(t),(r,s)=>e+s)}function lt(t){return Object.keys(t)}function Ht(t,e){return[t,e].reduce((r,s)=>(lt(s).forEach(u=>{const n=r[u],o=s[u],i=jt(n)&&jt(o);r[u]=i?Ht(n,o):o}),r),{})}function Ct(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function ne(t,e){const r={start:s,center:u,end:n};function s(){return 0}function u(c){return n(c)/2}function n(c){return e-c}function o(c,l){return Et(t)?r[t](c):t(e,c,l)}return{measure:o}}function ft(){let t=[];function e(u,n,o,i={passive:!0}){let c;if("addEventListener"in u)u.addEventListener(n,o,i),c=()=>u.removeEventListener(n,o,i);else{const l=u;l.addListener(o),c=()=>l.removeListener(o)}return t.push(c),s}function r(){t=t.filter(u=>u())}const s={add:e,clear:r};return s}function oe(t,e,r,s){const u=ft(),n=1e3/60;let o=null,i=0,c=0;function l(){u.add(t,"visibilitychange",()=>{t.hidden&&a()})}function g(){m(),u.clear()}function f(h){if(!c)return;o||(o=h);const d=h-o;for(o=h,i+=d;i>=n;)r(),i-=n;const y=D(i/n);s(y),c&&e.requestAnimationFrame(f)}function S(){c||(c=e.requestAnimationFrame(f))}function m(){e.cancelAnimationFrame(c),o=null,i=0,c=0}function a(){o=null,i=0}return{init:l,destroy:g,start:S,stop:m,update:r,render:s}}function se(t,e){const r=e==="rtl",s=t==="y",u=s?"y":"x",n=s?"x":"y",o=!s&&r?-1:1,i=g(),c=f();function l(a){const{height:p,width:h}=a;return s?p:h}function g(){return s?"top":r?"right":"left"}function f(){return s?"bottom":r?"left":"right"}function S(a){return a*o}return{scroll:u,cross:n,startEdge:i,endEdge:c,measureSize:l,direction:S}}function nt(t=0,e=0){const r=D(t-e);function s(l){return l<t}function u(l){return l>e}function n(l){return s(l)||u(l)}function o(l){return n(l)?s(l)?t:e:l}function i(l){return r?l-r*Math.ceil((l-e)/r):l}return{length:r,max:e,min:t,constrain:o,reachedAny:n,reachedMax:u,reachedMin:s,removeOffset:i}}function Gt(t,e,r){const{constrain:s}=nt(0,t),u=t+1;let n=o(e);function o(S){return r?D((u+S)%u):s(S)}function i(){return n}function c(S){return n=o(S),f}function l(S){return g().set(i()+S)}function g(){return Gt(t,i(),r)}const f={get:i,set:c,add:l,clone:g};return f}function re(t,e,r,s,u,n,o,i,c,l,g,f,S,m,a,p,h,d,y){const{cross:x,direction:I}=t,P=["INPUT","SELECT","TEXTAREA"],L={passive:!1},C=ft(),v=ft(),T=nt(50,225).constrain(m.measure(20)),O={mouse:300,touch:400},M={mouse:500,touch:600},B=a?43:25;let Y=!1,j=0,U=0,W=!1,K=!1,Z=!1,Q=!1;function A(b){if(!y)return;function k(N){(vt(y)||y(b,N))&&z(N)}const F=e;C.add(F,"dragstart",N=>N.preventDefault(),L).add(F,"touchmove",()=>{},L).add(F,"touchend",()=>{}).add(F,"touchstart",k).add(F,"mousedown",k).add(F,"touchcancel",V).add(F,"contextmenu",V).add(F,"click",st,!0)}function X(){C.clear(),v.clear()}function ot(){const b=Q?r:e;v.add(b,"touchmove",$,L).add(b,"touchend",V).add(b,"mousemove",$,L).add(b,"mouseup",V)}function J(b){const k=b.nodeName||"";return P.includes(k)}function rt(){return(a?M:O)[Q?"mouse":"touch"]}function ct(b,k){const F=f.add(kt(b)*-1),N=g.byDistance(b,!a).distance;return a||D(b)<T?N:h&&k?N*.5:g.byIndex(F.get(),0).distance}function z(b){const k=Ct(b,s);Q=k,Z=a&&k&&!b.buttons&&Y,Y=it(u.get(),o.get())>=2,!(k&&b.button!==0)&&(J(b.target)||(W=!0,n.pointerDown(b),l.useFriction(0).useDuration(0),u.set(o),ot(),j=n.readPoint(b),U=n.readPoint(b,x),S.emit("pointerDown")))}function $(b){if(!Ct(b,s)&&b.touches.length>=2)return V(b);const F=n.readPoint(b),N=n.readPoint(b,x),_=it(F,j),H=it(N,U);if(!K&&!Q&&(!b.cancelable||(K=_>H,!K)))return V(b);const G=n.pointerMove(b);_>p&&(Z=!0),l.useFriction(.3).useDuration(.75),i.start(),u.add(I(G)),b.preventDefault()}function V(b){const F=g.byDistance(0,!1).index!==f.get(),N=n.pointerUp(b)*rt(),_=ct(I(N),F),H=ee(N,_),G=B-10*H,tt=d+H/50;K=!1,W=!1,v.clear(),l.useDuration(G).useFriction(tt),c.distance(_,!a),Q=!1,S.emit("pointerUp")}function st(b){Z&&(b.stopPropagation(),b.preventDefault(),Z=!1)}function R(){return W}return{init:A,destroy:X,pointerDown:R}}function ce(t,e){let s,u;function n(f){return f.timeStamp}function o(f,S){const a=`client${(S||t.scroll)==="x"?"X":"Y"}`;return(Ct(f,e)?f:f.touches[0])[a]}function i(f){return s=f,u=f,o(f)}function c(f){const S=o(f)-o(u),m=n(f)-n(s)>170;return u=f,m&&(s=f),S}function l(f){if(!s||!u)return 0;const S=o(u)-o(s),m=n(f)-n(s),a=n(f)-n(u)>170,p=S/m;return m&&!a&&D(p)>.1?p:0}return{pointerDown:i,pointerMove:c,pointerUp:l,readPoint:o}}function ie(){function t(r){const{offsetTop:s,offsetLeft:u,offsetWidth:n,offsetHeight:o}=r;return{top:s,right:u+n,bottom:s+o,left:u,width:n,height:o}}return{measure:t}}function ue(t){function e(s){return t*(s/100)}return{measure:e}}function le(t,e,r,s,u,n,o){let i,c,l=[],g=!1;function f(p){return u.measureSize(o.measure(p))}function S(p){if(!n)return;c=f(t),l=s.map(f);function h(y){for(const x of y){const I=x.target===t,P=s.indexOf(x.target),L=I?c:l[P],C=f(I?t:s[P]);if(D(C-L)>=.5){r.requestAnimationFrame(()=>{p.reInit(),e.emit("resize")});break}}}i=new ResizeObserver(y=>{g||(vt(n)||n(p,y))&&h(y)}),[t].concat(s).forEach(y=>i.observe(y))}function m(){i&&i.disconnect(),g=!0}return{init:S,destroy:m}}function fe(t,e,r,s,u){let n=0,o=0,i=s,c=u,l=t.get(),g=0;function f(){const P=r.get()-t.get(),L=!i;let C=0;return L?(n=0,t.set(r),C=P):(n+=P/i,n*=c,l+=n,t.add(n),C=l-g),o=kt(C),g=l,I}function S(){const P=r.get()-e.get();return D(P)<.001}function m(){return i}function a(){return o}function p(){return n}function h(){return y(s)}function d(){return x(u)}function y(P){return i=P,I}function x(P){return c=P,I}const I={direction:a,duration:m,velocity:p,seek:f,settled:S,useBaseFriction:d,useBaseDuration:h,useFriction:x,useDuration:y};return I}function ae(t,e,r,s,u){const n=u.measure(10),o=u.measure(50),i=nt(.1,.99);let c=!1;function l(){return!(c||!t.reachedAny(r.get())||!t.reachedAny(e.get()))}function g(m){if(!l())return;const a=t.reachedMin(e.get())?"min":"max",p=D(t[a]-e.get()),h=r.get()-e.get(),d=i.constrain(p/o);r.subtract(h*d),!m&&D(h)<n&&(r.set(t.constrain(r.get())),s.useDuration(25).useBaseFriction())}function f(m){c=!m}return{shouldConstrain:l,constrain:g,toggleActive:f}}function de(t,e,r,s,u){const n=nt(-e+t,0),o=f(),i=g(),c=S();function l(a,p){return it(a,p)<1}function g(){const a=o[0],p=q(o),h=o.lastIndexOf(a),d=o.indexOf(p)+1;return nt(h,d)}function f(){return r.map((a,p)=>{const{min:h,max:d}=n,y=n.constrain(a),x=!p,I=Tt(r,p);return x?d:I||l(h,y)?h:l(d,y)?d:y}).map(a=>parseFloat(a.toFixed(3)))}function S(){if(e<=t+u)return[n.max];if(s==="keepSnaps")return o;const{min:a,max:p}=i;return o.slice(a,p)}return{snapsContained:c,scrollContainLimit:i}}function ge(t,e,r){const s=e[0],u=r?s-t:q(e);return{limit:nt(u,s)}}function pe(t,e,r,s){const n=e.min+.1,o=e.max+.1,{reachedMin:i,reachedMax:c}=nt(n,o);function l(S){return S===1?c(r.get()):S===-1?i(r.get()):!1}function g(S){if(!l(S))return;const m=t*(S*-1);s.forEach(a=>a.add(m))}return{loop:g}}function Se(t){const{max:e,length:r}=t;function s(n){const o=n-e;return r?o/-r:0}return{get:s}}function ye(t,e,r,s,u){const{startEdge:n,endEdge:o}=t,{groupSlides:i}=u,c=f().map(e.measure),l=S(),g=m();function f(){return i(s).map(p=>q(p)[o]-p[0][n]).map(D)}function S(){return s.map(p=>r[n]-p[n]).map(p=>-D(p))}function m(){return i(l).map(p=>p[0]).map((p,h)=>p+c[h])}return{snaps:l,snapsAligned:g}}function he(t,e,r,s,u,n){const{groupSlides:o}=u,{min:i,max:c}=s,l=g();function g(){const S=o(n),m=!t||e==="keepSnaps";return r.length===1?[n]:m?S:S.slice(i,c).map((a,p,h)=>{const d=!p,y=Tt(h,p);if(d){const x=q(h[0])+1;return Rt(x)}if(y){const x=at(n)-q(h)[0]+1;return Rt(x,q(h)[0])}return a})}return{slideRegistry:l}}function be(t,e,r,s,u){const{reachedAny:n,removeOffset:o,constrain:i}=s;function c(a){return a.concat().sort((p,h)=>D(p)-D(h))[0]}function l(a){const p=t?o(a):i(a),h=e.map((y,x)=>({diff:g(y-p,0),index:x})).sort((y,x)=>D(y.diff)-D(x.diff)),{index:d}=h[0];return{index:d,distance:p}}function g(a,p){const h=[a,a+r,a-r];if(!t)return a;if(!p)return c(h);const d=h.filter(y=>kt(y)===p);return d.length?c(d):q(h)-r}function f(a,p){const h=e[a]-u.get(),d=g(h,p);return{index:a,distance:d}}function S(a,p){const h=u.get()+a,{index:d,distance:y}=l(h),x=!t&&n(h);if(!p||x)return{index:d,distance:a};const I=e[d]-y,P=a+g(I,0);return{index:d,distance:P}}return{byDistance:S,byIndex:f,shortcut:g}}function me(t,e,r,s,u,n,o){function i(f){const S=f.distance,m=f.index!==e.get();n.add(S),S&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),m&&(r.set(e.get()),e.set(f.index),o.emit("select"))}function c(f,S){const m=u.byDistance(f,S);i(m)}function l(f,S){const m=e.clone().set(f),a=u.byIndex(m.get(),S);i(a)}return{distance:c,index:l}}function xe(t,e,r,s,u,n,o){let i=0;function c(){n.add(document,"keydown",l,!1),e.forEach(g)}function l(S){S.code==="Tab"&&(i=new Date().getTime())}function g(S){const m=()=>{if(new Date().getTime()-i>10)return;t.scrollLeft=0;const h=e.indexOf(S),d=r.findIndex(y=>y.includes(h));Pt(d)&&(u.useDuration(0),s.index(d,0),o.emit("slideFocus"))};n.add(S,"focus",m,{passive:!0,capture:!0})}return{init:c}}function gt(t){let e=t;function r(){return e}function s(c){e=o(c)}function u(c){e+=o(c)}function n(c){e-=o(c)}function o(c){return Pt(c)?c:c.get()}return{get:r,set:s,add:u,subtract:n}}function qt(t,e){const r=t.scroll==="x"?n:o,s=e.style;let u=!1;function n(f){return`translate3d(${f}px,0px,0px)`}function o(f){return`translate3d(0px,${f}px,0px)`}function i(f){u||(s.transform=r(t.direction(f)))}function c(f){u=!f}function l(){u||(s.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:l,to:i,toggleActive:c}}function Ee(t,e,r,s,u,n,o,i,c){const g=ut(u),f=ut(u).reverse(),S=d().concat(y());function m(C,v){return C.reduce((T,O)=>T-u[O],v)}function a(C,v){return C.reduce((T,O)=>m(T,v)>0?T.concat([O]):T,[])}function p(C){return n.map((v,T)=>({start:v-s[T]+.5+C,end:v+e-.5+C}))}function h(C,v,T){const O=p(v);return C.map(M=>{const B=T?0:-r,Y=T?r:0,j=T?"end":"start",U=O[M][j];return{index:M,loopPoint:U,slideLocation:gt(-1),translate:qt(t,c[M]),target:()=>i.get()>U?B:Y}})}function d(){const C=o[0],v=a(f,C);return h(v,r,!1)}function y(){const C=e-o[0]-1,v=a(g,C);return h(v,-r,!0)}function x(){return S.every(({index:C})=>{const v=g.filter(T=>T!==C);return m(v,e)<=.1})}function I(){S.forEach(C=>{const{target:v,translate:T,slideLocation:O}=C,M=v();M!==O.get()&&(T.to(M),O.set(M))})}function P(){S.forEach(C=>C.translate.clear())}return{canLoop:x,clear:P,loop:I,loopPoints:S}}function Ce(t,e,r){let s,u=!1;function n(c){if(!r)return;function l(g){for(const f of g)if(f.type==="childList"){c.reInit(),e.emit("slidesChanged");break}}s=new MutationObserver(g=>{u||(vt(r)||r(c,g))&&l(g)}),s.observe(t,{childList:!0})}function o(){s&&s.disconnect(),u=!0}return{init:n,destroy:o}}function Ie(t,e,r,s){const u={};let n=null,o=null,i,c=!1;function l(){i=new IntersectionObserver(a=>{c||(a.forEach(p=>{const h=e.indexOf(p.target);u[h]=p}),n=null,o=null,r.emit("slidesInView"))},{root:t.parentElement,threshold:s}),e.forEach(a=>i.observe(a))}function g(){i&&i.disconnect(),c=!0}function f(a){return lt(u).reduce((p,h)=>{const d=parseInt(h),{isIntersecting:y}=u[d];return(a&&y||!a&&!y)&&p.push(d),p},[])}function S(a=!0){if(a&&n)return n;if(!a&&o)return o;const p=f(a);return a&&(n=p),a||(o=p),p}return{init:l,destroy:g,get:S}}function Pe(t,e,r,s,u,n){const{measureSize:o,startEdge:i,endEdge:c}=t,l=r[0]&&u,g=a(),f=p(),S=r.map(o),m=h();function a(){if(!l)return 0;const y=r[0];return D(e[i]-y[i])}function p(){if(!l)return 0;const y=n.getComputedStyle(q(s));return parseFloat(y.getPropertyValue(`margin-${c}`))}function h(){return r.map((y,x,I)=>{const P=!x,L=Tt(I,x);return P?S[x]+g:L?S[x]+f:I[x+1][i]-y[i]}).map(D)}return{slideSizes:S,slideSizesWithGaps:m,startGap:g,endGap:f}}function ve(t,e,r,s,u,n,o,i,c){const{startEdge:l,endEdge:g,direction:f}=t,S=Pt(r);function m(d,y){return ut(d).filter(x=>x%y===0).map(x=>d.slice(x,x+y))}function a(d){return d.length?ut(d).reduce((y,x,I)=>{const P=q(y)||0,L=P===0,C=x===at(d),v=u[l]-n[P][l],T=u[l]-n[x][g],O=!s&&L?f(o):0,M=!s&&C?f(i):0,B=D(T-M-(v+O));return I&&B>e+c&&y.push(x),C&&y.push(d.length),y},[]).map((y,x,I)=>{const P=Math.max(I[x-1]||0);return d.slice(P,y)}):[]}function p(d){return S?m(d,r):a(d)}return{groupSlides:p}}function ke(t,e,r,s,u,n,o){const{align:i,axis:c,direction:l,startIndex:g,loop:f,duration:S,dragFree:m,dragThreshold:a,inViewThreshold:p,slidesToScroll:h,skipSnaps:d,containScroll:y,watchResize:x,watchSlides:I,watchDrag:P}=n,L=2,C=ie(),v=C.measure(e),T=r.map(C.measure),O=se(c,l),M=O.measureSize(v),B=ue(M),Y=ne(i,M),j=!f&&!!y,U=f||!!y,{slideSizes:W,slideSizesWithGaps:K,startGap:Z,endGap:Q}=Pe(O,v,T,r,U,u),A=ve(O,M,h,f,v,T,Z,Q,L),{snaps:X,snapsAligned:ot}=ye(O,Y,v,T,A),J=-q(X)+q(K),{snapsContained:rt,scrollContainLimit:ct}=de(M,J,ot,y,L),z=j?rt:ot,{limit:$}=ge(J,z,f),V=Gt(at(z),g,f),st=V.clone(),R=ut(r),w=({dragHandler:et,scrollBody:mt,scrollBounds:xt,options:{loop:dt}})=>{dt||xt.constrain(et.pointerDown()),mt.seek()},b=({scrollBody:et,translate:mt,location:xt,offsetLocation:dt,scrollLooper:Ut,slideLooper:Kt,dragHandler:Qt,animation:Xt,eventHandler:wt,scrollBounds:Jt,options:{loop:Mt}},Yt)=>{const Ft=et.velocity(),Nt=et.settled(),Zt=!Jt.shouldConstrain(),Vt=Mt?Nt:Nt&&Zt;Vt&&!Qt.pointerDown()&&(Xt.stop(),wt.emit("settle")),Vt||wt.emit("scroll"),dt.set(xt.get()-Ft+Ft*Yt),Mt&&(Ut.loop(et.direction()),Kt.loop()),mt.to(dt.get())},k=oe(s,u,()=>w(bt),et=>b(bt,et)),F=.68,N=z[V.get()],_=gt(N),H=gt(N),G=gt(N),tt=fe(_,H,G,S,F),yt=be(f,z,J,$,G),ht=me(k,V,st,tt,yt,G,o),Lt=Se($),Ot=ft(),$t=Ie(e,r,o,p),{slideRegistry:Dt}=he(j,y,z,ct,A,R),_t=xe(t,r,Dt,ht,tt,Ot,o),bt={ownerDocument:s,ownerWindow:u,eventHandler:o,containerRect:v,slideRects:T,animation:k,axis:O,dragHandler:re(O,t,s,u,G,ce(O,u),_,k,ht,tt,yt,V,o,B,m,a,d,F,P),eventStore:Ot,percentOfView:B,index:V,indexPrevious:st,limit:$,location:_,offsetLocation:H,options:n,resizeHandler:le(e,o,u,r,O,x,C),scrollBody:tt,scrollBounds:ae($,H,G,tt,B),scrollLooper:pe(J,$,H,[_,H,G]),scrollProgress:Lt,scrollSnapList:z.map(Lt.get),scrollSnaps:z,scrollTarget:yt,scrollTo:ht,slideLooper:Ee(O,M,J,W,K,X,z,H,r),slideFocus:_t,slidesHandler:Ce(e,o,I),slidesInView:$t,slideIndexes:R,slideRegistry:Dt,slidesToScroll:A,target:G,translate:qt(O,e)};return bt}function Te(){let t={},e;function r(l){e=l}function s(l){return t[l]||[]}function u(l){return s(l).forEach(g=>g(e,l)),c}function n(l,g){return t[l]=s(l).concat([g]),c}function o(l,g){return t[l]=s(l).filter(f=>f!==g),c}function i(){t={}}const c={init:r,emit:u,off:o,on:n,clear:i};return c}const Le={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function Oe(t){function e(n,o){return Ht(n,o||{})}function r(n){const o=n.breakpoints||{},i=lt(o).filter(c=>t.matchMedia(c).matches).map(c=>o[c]).reduce((c,l)=>e(c,l),{});return e(n,i)}function s(n){return n.map(o=>lt(o.breakpoints||{})).reduce((o,i)=>o.concat(i),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:r,optionsMediaQueries:s}}function De(t){let e=[];function r(n,o){return e=o.filter(({options:i})=>t.optionsAtMedia(i).active!==!1),e.forEach(i=>i.init(n,t)),o.reduce((i,c)=>Object.assign(i,{[c.name]:c}),{})}function s(){e=e.filter(n=>n.destroy())}return{init:r,destroy:s}}function pt(t,e,r){const s=t.ownerDocument,u=s.defaultView,n=Oe(u),o=De(n),i=ft(),c=Te(),{mergeOptions:l,optionsAtMedia:g,optionsMediaQueries:f}=n,{on:S,off:m,emit:a}=c,p=M;let h=!1,d,y=l(Le,pt.globalOptions),x=l(y),I=[],P,L,C;function v(){const{container:w,slides:b}=x;L=(Et(w)?t.querySelector(w):w)||t.children[0];const F=Et(b)?L.querySelectorAll(b):b;C=[].slice.call(F||L.children)}function T(w){const b=ke(t,L,C,s,u,w,c);if(w.loop&&!b.slideLooper.canLoop()){const k=Object.assign({},w,{loop:!1});return T(k)}return b}function O(w,b){h||(y=l(y,w),x=g(y),I=b||I,v(),d=T(x),f([y,...I.map(({options:k})=>k)]).forEach(k=>i.add(k,"change",M)),x.active&&(d.translate.to(d.location.get()),d.animation.init(),d.slidesInView.init(),d.slideFocus.init(),d.eventHandler.init(R),d.resizeHandler.init(R),d.slidesHandler.init(R),d.options.loop&&d.slideLooper.loop(),L.offsetParent&&C.length&&d.dragHandler.init(R),P=o.init(R,I)))}function M(w,b){const k=X();B(),O(l({startIndex:k},w),b),c.emit("reInit")}function B(){d.dragHandler.destroy(),d.eventStore.clear(),d.translate.clear(),d.slideLooper.clear(),d.resizeHandler.destroy(),d.slidesHandler.destroy(),d.slidesInView.destroy(),d.animation.destroy(),o.destroy(),i.clear()}function Y(){h||(h=!0,i.clear(),B(),c.emit("destroy"),c.clear())}function j(w,b,k){!x.active||h||(d.scrollBody.useBaseFriction().useDuration(b===!0?0:x.duration),d.scrollTo.index(w,k||0))}function U(w){const b=d.index.add(1).get();j(b,w,-1)}function W(w){const b=d.index.add(-1).get();j(b,w,1)}function K(){return d.index.add(1).get()!==X()}function Z(){return d.index.add(-1).get()!==X()}function Q(){return d.scrollSnapList}function A(){return d.scrollProgress.get(d.location.get())}function X(){return d.index.get()}function ot(){return d.indexPrevious.get()}function J(){return d.slidesInView.get()}function rt(){return d.slidesInView.get(!1)}function ct(){return P}function z(){return d}function $(){return t}function V(){return L}function st(){return C}const R={canScrollNext:K,canScrollPrev:Z,containerNode:V,internalEngine:z,destroy:Y,off:m,on:S,emit:a,plugins:ct,previousScrollSnap:ot,reInit:p,rootNode:$,scrollNext:U,scrollPrev:W,scrollProgress:A,scrollSnapList:Q,scrollTo:j,selectedScrollSnap:X,slideNodes:st,slidesInView:J,slidesNotInView:rt};return O(e,r),setTimeout(()=>c.emit("init"),0),R}pt.globalOptions=void 0;function St(t={},e=[]){const r=E.useRef(t),s=E.useRef(e),[u,n]=E.useState(),[o,i]=E.useState(),c=E.useCallback(()=>{u&&u.reInit(r.current,s.current)},[u]);return E.useEffect(()=>{if(At()&&o){pt.globalOptions=St.globalOptions;const l=pt(o,r.current,s.current);return n(l),()=>l.destroy()}else n(void 0)},[o,n]),E.useEffect(()=>{It(r.current,t)||(r.current=t,c())},[t,c]),E.useEffect(()=>{te(s.current,e)||(s.current=e,c())},[e,c]),[i,u]}St.globalOptions=void 0;function we(t,e){const[r,s]=St({containScroll:"keepSnaps",dragFree:!0,...e}),[u,n]=E.useState(0),o=E.useCallback(c=>{!t||!s||t.scrollTo(c)},[t,s]),i=E.useCallback(()=>{!t||!s||(n(t.selectedScrollSnap()),s.scrollTo(t.selectedScrollSnap()))},[t,s,n]);return E.useEffect(()=>{t&&(i(),t.on("select",i),t.on("reInit",i))},[t,i]),{onClickThumb:o,thumbsRef:r,thumbsApi:s,selectedIndex:u}}function Me(t){const[e,r]=E.useState(0),[s,u]=E.useState(0),[n,o]=E.useState([]),i=E.useCallback(g=>{t&&t.scrollTo(g)},[t]),c=E.useCallback(g=>{o(g.scrollSnapList())},[]),l=E.useCallback(g=>{u(g.selectedScrollSnap()),r(g.scrollSnapList().length)},[]);return E.useEffect(()=>{t&&(c(t),l(t),t.on("reInit",c),t.on("reInit",l),t.on("select",l))},[t,c,l]),{dotCount:e,scrollSnaps:n,selectedIndex:s,onClickDot:i}}function Fe(t,e){const r=E.useRef(0),s=E.useRef([]),u=typeof e=="number"?e:.24,n=E.useCallback(c=>{s.current=c.slideNodes().map(l=>l.querySelector(".slide__parallax__layer"))},[]),o=E.useCallback(c=>{r.current=u*c.scrollSnapList().length},[u]),i=E.useCallback((c,l)=>{const g=c.internalEngine(),f=c.scrollProgress(),S=c.slidesInView(),m=l==="scroll";c.scrollSnapList().forEach((a,p)=>{let h=a-f;g.slideRegistry[p].forEach(y=>{if(m&&!S.includes(y))return;g.options.loop&&g.slideLooper.loopPoints.forEach(P=>{const L=P.target();if(y===P.index&&L!==0){const C=Math.sign(L);C===-1&&(h=a-(1+f)),C===1&&(h=a+(1-f))}});const x=h*(-1*r.current)*100,I=s.current[y];I&&(I.style.transform=`translateX(${x}%)`)})})},[]);return E.useEffect(()=>{!t||!e||(n(t),o(t),i(t),t.on("reInit",n).on("reInit",o).on("reInit",i).on("scroll",i))},[t,i]),null}const Ne=t=>{const[e,r]=E.useState(!0),[s,u]=E.useState(!0),n=E.useCallback(()=>{t&&t.scrollPrev()},[t]),o=E.useCallback(()=>{t&&t.scrollNext()},[t]),i=E.useCallback(c=>{r(!c.canScrollPrev()),u(!c.canScrollNext())},[]);return E.useEffect(()=>{t&&(i(t),t.on("reInit",i),t.on("select",i))},[t,i]),{disablePrev:e,disableNext:s,onClickPrev:n,onClickNext:o}};function Ve(t){const[e,r]=E.useState(0),s=E.useCallback(u=>{const n=Math.max(0,Math.min(1,u.scrollProgress()));r(n*100)},[]);return E.useEffect(()=>{t&&(s(t),t.on("reInit",s),t.on("scroll",s))},[t,s]),{value:e}}function Be(t){const[e,r]=E.useState(!1),s=E.useCallback(n=>{var c;const o=(c=t==null?void 0:t.plugins())==null?void 0:c.autoplay;if(!o)return;(o.options.stopOnInteraction===!1?o.reset:o.stop)(),n()},[t]),u=E.useCallback(()=>{var i;const n=(i=t==null?void 0:t.plugins())==null?void 0:i.autoplay;if(!n)return;(n.isPlaying()?n.stop:n.play)()},[t]);return E.useEffect(()=>{var o;const n=(o=t==null?void 0:t.plugins())==null?void 0:o.autoplay;n&&(r(n.isPlaying()),t.on("autoplay:play",()=>r(!0)).on("autoplay:stop",()=>r(!1)).on("reInit",()=>r(!1)))},[t]),{isPlaying:e,onTogglePlay:u,onClickAutoplay:s}}function ze(t){const[e,r]=E.useState(!1),s=E.useCallback(n=>{var c;const o=(c=t==null?void 0:t.plugins())==null?void 0:c.autoScroll;if(!o)return;(o.options.stopOnInteraction===!1?o.reset:o.stop)(),n()},[t]),u=E.useCallback(()=>{var i;const n=(i=t==null?void 0:t.plugins())==null?void 0:i.autoScroll;if(!n)return;(n.isPlaying()?n.stop:n.play)()},[t]);return E.useEffect(()=>{var o;const n=(o=t==null?void 0:t.plugins())==null?void 0:o.autoScroll;n&&(r(n.isPlaying()),t.on("autoScroll:play",()=>r(!0)).on("autoScroll:stop",()=>r(!1)).on("reInit",()=>r(!1)))},[t]),{isPlaying:e,onTogglePlay:u,onClickAutoplay:s}}const Re=(t,e)=>{const[r,s]=St(t,e),{disablePrev:u,disableNext:n,onClickPrev:o,onClickNext:i}=Ne(s),c=e==null?void 0:e.map(p=>p.name),l=Me(s),g=Be(s),f=ze(s),S=Ve(s),m=we(s,t==null?void 0:t.thumbs);Fe(s,t==null?void 0:t.parallax);const a=E.useMemo(()=>c!=null&&c.includes("autoplay")?{onClickPrev:()=>g.onClickAutoplay(o),onClickNext:()=>g.onClickAutoplay(i)}:c!=null&&c.includes("autoScroll")?{onClickPrev:()=>f.onClickAutoplay(o),onClickNext:()=>f.onClickAutoplay(i)}:{onClickPrev:o,onClickNext:i},[f,g,i,o,c]);return{options:{...t,...s==null?void 0:s.internalEngine().options},pluginNames:c,mainRef:r,mainApi:s,arrows:{disablePrev:u,disableNext:n,onClickPrev:a.onClickPrev,onClickNext:a.onClickNext},dots:l,thumbs:m,progress:S,autoplay:g,autoScroll:f}};export{Re as u};

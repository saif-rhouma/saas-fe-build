import{r as I,b as he,j as o,fu as Ke,aP as Oe,S as q,A as Ue,cY as Pe,l as Re,I as T,B as _e,T as B,d7 as Ze,db as Ge,aR as Le,aS as ee,dq as re,v as ne,s as Ie,_ as s,p as Qe,H as Xe,C as er}from"./index-D6VGg1bq.js";import{C as rr}from"./custom-breadcrumbs-C78AEP0d.js";import{C as nr}from"./component-hero-gEbui6mZ.js";import{C as tr,a as le}from"./component-block-CBnC1rOz.js";function V(e,r){return r||(r=e.slice(0)),e.raw=r,e}var ar=function(){function e(t){var n=this;this._insertTag=function(a){n.container.insertBefore(a,n.tags.length===0?n.insertionPoint?n.insertionPoint.nextSibling:n.prepend?n.container.firstChild:n.before:n.tags[n.tags.length-1].nextSibling),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(t){t.forEach(this._insertTag)},r.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(i){var l=document.createElement("style");return l.setAttribute("data-emotion",i.key),i.nonce!==void 0&&l.setAttribute("nonce",i.nonce),l.appendChild(document.createTextNode("")),l.setAttribute("data-s",""),l}(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var a=function(i){if(i.sheet)return i.sheet;for(var l=0;l<document.styleSheets.length;l++)if(document.styleSheets[l].ownerNode===i)return document.styleSheets[l]}(n);try{a.insertRule(t,a.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(t));this.ctr++},r.flush=function(){this.tags.forEach(function(t){return t.parentNode&&t.parentNode.removeChild(t)}),this.tags=[],this.ctr=0},e}(),$="-ms-",b="-webkit-",ir=Math.abs,ae=String.fromCharCode,or=Object.assign;function Te(e){return e.trim()}function g(e,r,t){return e.replace(r,t)}function fe(e,r){return e.indexOf(r)}function A(e,r){return 0|e.charCodeAt(r)}function D(e,r,t){return e.slice(r,t)}function P(e){return e.length}function me(e){return e.length}function K(e,r){return r.push(e),e}var ie=1,F=1,We=0,S=0,C=0,M="";function oe(e,r,t,n,a,i,l){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:ie,column:F,length:l,return:""}}function H(e,r){return or(oe("",null,null,"",null,null,0),e,{length:-e.length},r)}function sr(){return C=S>0?A(M,--S):0,F--,C===10&&(F=1,ie--),C}function E(){return C=S<We?A(M,S++):0,F++,C===10&&(F=1,ie++),C}function R(){return A(M,S)}function Z(){return S}function J(e,r){return D(M,e,r)}function Y(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Be(e){return ie=F=1,We=P(M=e),S=0,[]}function Fe(e){return M="",e}function Q(e){return Te(J(S-1,pe(e===91?e+2:e===40?e+1:e)))}function lr(e){for(;(C=R())&&C<33;)E();return Y(e)>2||Y(C)>3?"":" "}function cr(e,r){for(;--r&&E()&&!(C<48||C>102||C>57&&C<65||C>70&&C<97););return J(e,Z()+(r<6&&R()==32&&E()==32))}function pe(e){for(;E();)switch(C){case e:return S;case 34:case 39:e!==34&&e!==39&&pe(C);break;case 40:e===41&&pe(e);break;case 92:E()}return S}function dr(e,r){for(;E()&&e+C!==57&&(e+C!==84||R()!==47););return"/*"+J(r,S-1)+"*"+ae(e===47?e:E())}function ur(e){for(;!Y(R());)E();return J(e,S)}function fr(e){return Fe(X("",null,null,null,[""],e=Be(e),0,[0],e))}function X(e,r,t,n,a,i,l,d,p){for(var x=0,v=0,u=l,c=0,m=0,h=0,k=1,O=1,f=1,w=0,j="",G=a,_=i,U=n,y=j;O;)switch(h=w,w=E()){case 40:if(h!=108&&y.charCodeAt(u-1)==58){fe(y+=g(Q(w),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:y+=Q(w);break;case 9:case 10:case 13:case 32:y+=lr(h);break;case 92:y+=cr(Z()-1,7);continue;case 47:switch(R()){case 42:case 47:K(pr(dr(E(),Z()),r,t),p);break;default:y+="/"}break;case 123*k:d[x++]=P(y)*f;case 125*k:case 59:case 0:switch(w){case 0:case 125:O=0;case 59+v:m>0&&P(y)-u&&K(m>32?ge(y+";",n,t,u-1):ge(g(y," ","")+";",n,t,u-2),p);break;case 59:y+=";";default:if(K(U=ve(y,r,t,x,v,a,d,j,G=[],_=[],u),i),w===123)if(v===0)X(y,r,U,U,G,i,u,d,_);else switch(c){case 100:case 109:case 115:X(e,U,U,n&&K(ve(e,U,U,0,0,a,d,j,a,G=[],u),_),a,_,u,d,n?G:_);break;default:X(y,U,U,U,[""],_,0,d,_)}}x=v=m=0,k=f=1,j=y="",u=l;break;case 58:u=1+P(y),m=h;default:if(k<1){if(w==123)--k;else if(w==125&&k++==0&&sr()==125)continue}switch(y+=ae(w),w*k){case 38:f=v>0?1:(y+="\f",-1);break;case 44:d[x++]=(P(y)-1)*f,f=1;break;case 64:R()===45&&(y+=Q(E())),c=R(),v=u=P(j=y+=ur(Z())),w++;break;case 45:h===45&&P(y)==2&&(k=0)}}return i}function ve(e,r,t,n,a,i,l,d,p,x,v){for(var u=a-1,c=a===0?i:[""],m=me(c),h=0,k=0,O=0;h<n;++h)for(var f=0,w=D(e,u+1,u=ir(k=l[h])),j=e;f<m;++f)(j=Te(k>0?c[f]+" "+w:g(w,/&\f/g,c[f])))&&(p[O++]=j);return oe(e,r,t,a===0?"rule":d,p,x,v)}function pr(e,r,t){return oe(e,r,t,"comm",ae(C),D(e,2,-2),0)}function ge(e,r,t,n){return oe(e,r,t,"decl",D(e,0,n),D(e,n+1,-1),n)}function Me(e,r){switch(function(t,n){return(((n<<2^A(t,0))<<2^A(t,1))<<2^A(t,2))<<2^A(t,3)}(e,r)){case 5103:return b+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return b+e+"-moz-"+e+$+e+e;case 6828:case 4268:return b+e+$+e+e;case 6165:return b+e+$+"flex-"+e+e;case 5187:return b+e+g(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return b+e+$+"flex-item-"+g(e,/flex-|-self/,"")+e;case 4675:return b+e+$+"flex-line-pack"+g(e,/align-content|flex-|-self/,"")+e;case 5548:return b+e+$+g(e,"shrink","negative")+e;case 5292:return b+e+$+g(e,"basis","preferred-size")+e;case 6060:return b+"box-"+g(e,"-grow","")+b+e+$+g(e,"grow","positive")+e;case 4554:return b+g(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return g(g(g(e,/(zoom-|grab)/,b+"$1"),/(image-set)/,b+"$1"),e,"")+e;case 5495:case 3959:return g(e,/(image-set\([^]*)/,b+"$1$`$1");case 4968:return g(g(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+b+e+e;case 4095:case 3583:case 4068:case 2532:return g(e,/(.+)-inline(.+)/,b+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-r>6)switch(A(e,r+1)){case 109:if(A(e,r+4)!==45)break;case 102:return g(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1-moz-"+(A(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~fe(e,"stretch")?Me(g(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(A(e,r+1)!==115)break;case 6444:switch(A(e,P(e)-3-(~fe(e,"!important")&&10))){case 107:return g(e,":",":"+b)+e;case 101:return g(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+b+(A(e,14)===45?"inline-":"")+"box$3$1"+b+"$2$3$1"+$+"$2box$3")+e}break;case 5936:switch(A(e,r+11)){case 114:return b+e+$+g(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return b+e+$+g(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return b+e+$+g(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return b+e+$+e+e}return e}function W(e,r){for(var t="",n=me(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function hr(e,r,t,n){switch(e.type){case"@import":case"decl":return e.return=e.return||e.value;case"comm":return"";case"@keyframes":return e.return=e.value+"{"+W(e.children,n)+"}";case"rule":e.value=e.props.join(",")}return P(t=W(e.children,n))?e.return=e.value+"{"+t+"}":""}function mr(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var vr=function(e,r,t){for(var n=0,a=0;n=a,a=R(),n===38&&a===12&&(r[t]=1),!Y(a);)E();return J(e,S)},xe=new WeakMap,gr=function(e){if(e.type==="rule"&&e.parent&&!(e.length<1)){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;t.type!=="rule";)if(!(t=t.parent))return;if((e.props.length!==1||r.charCodeAt(0)===58||xe.get(t))&&!n){xe.set(e,!0);for(var a=[],i=function(v,u){return Fe(function(c,m){var h=-1,k=44;do switch(Y(k)){case 0:k===38&&R()===12&&(m[h]=1),c[h]+=vr(S-1,m,h);break;case 2:c[h]+=Q(k);break;case 4:if(k===44){c[++h]=R()===58?"&\f":"",m[h]=c[h].length;break}default:c[h]+=ae(k)}while(k=E());return c}(Be(v),u))}(r,a),l=t.props,d=0,p=0;d<i.length;d++)for(var x=0;x<l.length;x++,p++)e.props[p]=a[d]?i[d].replace(/&\f/g,l[x]):l[x]+" "+i[d]}}},xr=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}},br=[function(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case"decl":e.return=Me(e.value,e.length);break;case"@keyframes":return W([H(e,{value:g(e.value,"@","@"+b)})],n);case"rule":if(e.length)return function(a,i){return a.map(i).join("")}(e.props,function(a){switch(function(i,l){return(i=/(::plac\w+|:read-\w+)/.exec(i))?i[0]:i}(a)){case":read-only":case":read-write":return W([H(e,{props:[g(a,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return W([H(e,{props:[g(a,/:(plac\w+)/,":-webkit-input-$1")]}),H(e,{props:[g(a,/:(plac\w+)/,":-moz-$1")]}),H(e,{props:[g(a,/:(plac\w+)/,$+"input-$1")]})],n)}return""})}}],yr={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kr=/[A-Z]|^ms/g,wr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,He=function(e){return e.charCodeAt(1)===45},be=function(e){return e!=null&&typeof e!="boolean"},ce=mr(function(e){return He(e)?e:e.replace(kr,"-$&").toLowerCase()}),ye=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(wr,function(t,n,a){return L={name:n,styles:a,next:L},n})}return yr[e]===1||He(e)||typeof r!="number"||r===0?r:r+"px"};function te(e,r,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":if(t.anim===1)return L={name:t.name,styles:t.styles,next:L},t.name;if(t.styles!==void 0){var n=t.next;if(n!==void 0)for(;n!==void 0;)L={name:n.name,styles:n.styles,next:L},n=n.next;var a=t.styles+";";return a}return function(l,d,p){var x="";if(Array.isArray(p))for(var v=0;v<p.length;v++)x+=te(l,d,p[v])+";";else for(var u in p){var c=p[u];if(typeof c!="object")d!=null&&d[c]!==void 0?x+=u+"{"+d[c]+"}":be(c)&&(x+=ce(u)+":"+ye(u,c)+";");else if(!Array.isArray(c)||typeof c[0]!="string"||d!=null&&d[c[0]]!==void 0){var m=te(l,d,c);switch(u){case"animation":case"animationName":x+=ce(u)+":"+m+";";break;default:x+=u+"{"+m+"}"}}else for(var h=0;h<c.length;h++)be(c[h])&&(x+=ce(u)+":"+ye(u,c[h])+";")}return x}(e,r,t)}if(r==null)return t;var i=r[t];return i!==void 0?i:t}var L,ke=/label:\s*([^\s;\n{]+)\s*(;|$)/g,de=function(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";L=void 0;var i=e[0];i==null||i.raw===void 0?(n=!1,a+=te(t,r,i)):a+=i[0];for(var l=1;l<e.length;l++)a+=te(t,r,e[l]),n&&(a+=i[l]);ke.lastIndex=0;for(var d,p="";(d=ke.exec(a))!==null;)p+="-"+d[1];var x=function(v){for(var u,c=0,m=0,h=v.length;h>=4;++m,h-=4)u=1540483477*(65535&(u=255&v.charCodeAt(m)|(255&v.charCodeAt(++m))<<8|(255&v.charCodeAt(++m))<<16|(255&v.charCodeAt(++m))<<24))+(59797*(u>>>16)<<16),c=1540483477*(65535&(u^=u>>>24))+(59797*(u>>>16)<<16)^1540483477*(65535&c)+(59797*(c>>>16)<<16);switch(h){case 3:c^=(255&v.charCodeAt(m+2))<<16;case 2:c^=(255&v.charCodeAt(m+1))<<8;case 1:c=1540483477*(65535&(c^=255&v.charCodeAt(m)))+(59797*(c>>>16)<<16)}return(((c=1540483477*(65535&(c^=c>>>13))+(59797*(c>>>16)<<16))^c>>>15)>>>0).toString(36)}(a)+p;return{name:x,styles:a,next:L}};function qe(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Cr=function(e,r,t){(function(i,l,d){var p=i.key+"-"+l.name;i.registered[p]===void 0&&(i.registered[p]=l.styles)})(e,r);var n=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var a=r;do e.insert(r===a?"."+n:"",a,e.sheet,!0),a=a.next;while(a!==void 0)}};function we(e,r){if(e.inserted[r.name]===void 0)return e.insert("",r,e.sheet,!0)}function Ce(e,r,t){var n=[],a=qe(e,n,t);return n.length<2?t:a+r(n)}var je,Ne,$e,Ae,Se,jr=function e(r){for(var t="",n=0;n<r.length;n++){var a=r[n];if(a!=null){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=e(a);else for(var l in i="",a)a[l]&&l&&(i&&(i+=" "),i+=l);break;default:i=a}i&&(t&&(t+=" "),t+=i)}}return t},De=function(e){var r=function(n){var a=n.key;if(a==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(f){f.getAttribute("data-emotion").indexOf(" ")!==-1&&(document.head.appendChild(f),f.setAttribute("data-s",""))})}var l=n.stylisPlugins||br,d,p,x={},v=[];d=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),function(f){for(var w=f.getAttribute("data-emotion").split(" "),j=1;j<w.length;j++)x[w[j]]=!0;v.push(f)});var u=[gr,xr],c,m,h=[hr,(m=function(f){c.insert(f)},function(f){f.root||(f=f.return)&&m(f)})],k=function(f){var w=me(f);return function(j,G,_,U){for(var y="",se=0;se<w;se++)y+=f[se](j,G,_,U)||"";return y}}(u.concat(l,h));p=function(f,w,j,G){c=j,W(fr(f?f+"{"+w.styles+"}":w.styles),k),G&&(O.inserted[w.name]=!0)};var O={key:a,sheet:new ar({key:a,container:d,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:x,registered:{},insert:p};return O.sheet.hydrate(v),O}({key:"css"});r.sheet.speedy=function(n){this.isSpeedy=n},r.compat=!0;var t=function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var l=de(a,r.registered,void 0);return Cr(r,l),r.key+"-"+l.name};return{css:t,cx:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return Ce(r.registered,t,jr(a))},injectGlobal:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var l=de(a,r.registered);we(r,l)},keyframes:function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var l=de(a,r.registered),d="animation-"+l.name;return we(r,{name:l.name,styles:"@keyframes "+d+"{"+l.styles+"}"}),d},hydrate:function(n){n.forEach(function(a){r.inserted[a]=!0})},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:qe.bind(null,r.registered),merge:Ce.bind(null,r.registered,t)}}(),Nr=De.cx,z=De.css,Ye=z(je||(je=V([`
  content: '';
  position: absolute;
  top: 0;
  height: var(--tree-line-height);
  box-sizing: border-box;
`]))),$r=z(Ne||(Ne=V([`
  display: flex;
  padding-inline-start: 0;
  margin: 0;
  padding-top: var(--tree-line-height);
  position: relative;

  ::before {
    `,`;
    left: calc(50% - var(--tree-line-width) / 2);
    width: 0;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
`])),Ye),Ar=z($e||($e=V([`
  flex: auto;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: var(--tree-line-height) var(--tree-node-padding) 0
    var(--tree-node-padding);
`]))),Sr=z(Ae||(Ae=V([`
  ::before,
  ::after {
    `,`;
    right: 50%;
    width: 50%;
    border-top: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }
  ::after {
    left: 50%;
    border-left: var(--tree-line-width) var(--tree-node-line-style)
      var(--tree-line-color);
  }

  :only-of-type {
    padding: 0;
    ::after,
    :before {
      display: none;
    }
  }

  :first-of-type {
    ::before {
      border: 0 none;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
    }
  }

  :last-of-type {
    ::before {
      border-right: var(--tree-line-width) var(--tree-node-line-style)
        var(--tree-line-color);
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`])),Ye);function Ve(e){var r=e.children,t=e.label;return I.createElement("li",{className:Nr(Ar,Sr,e.className)},t,I.Children.count(r)>0&&I.createElement("ul",{className:$r},r))}function Er(e){var r=e.children,t=e.label,n=e.lineHeight,a=n===void 0?"20px":n,i=e.lineWidth,l=i===void 0?"1px":i,d=e.lineColor,p=d===void 0?"black":d,x=e.nodePadding,v=x===void 0?"5px":x,u=e.lineStyle,c=u===void 0?"solid":u,m=e.lineBorderRadius,h=m===void 0?"5px":m;return I.createElement("ul",{className:z(Se||(Se=V([`
        padding-inline-start: 0;
        margin: 0;
        display: flex;

        --line-height: `,`;
        --line-width: `,`;
        --line-color: `,`;
        --line-border-radius: `,`;
        --line-style: `,`;
        --node-padding: `,`;

        --tree-line-height: var(--line-height, 20px);
        --tree-line-width: var(--line-width, 1px);
        --tree-line-color: var(--line-color, black);
        --tree-line-border-radius: var(--line-border-radius, 5px);
        --tree-node-line-style: var(--line-style, solid);
        --tree-node-padding: var(--node-padding, 5px);
      `])),a,l,p,h,c,v)},I.createElement(Ve,{label:t},r))}function ue({data:e,nodeItem:r,...t}){const n=he(),i=(l=>I.cloneElement(r(l)))({...e});return o.jsx(Er,{lineWidth:"1.5px",nodePadding:"4px",lineBorderRadius:"24px",lineColor:n.vars.palette.divider,label:i,...t,children:e.children.map((l,d)=>o.jsx(Je,{depth:1,data:l,nodeItem:r},d))})}function Je({data:e,depth:r,nodeItem:t}){var d;const n=e.children,a=p=>I.cloneElement(t(p)),i=n?(d=Ke(n))==null?void 0:d.length:0,l=a({...e,depth:r,totalChildren:i});return o.jsx(Ve,{label:l,children:n&&o.jsx(Or,{data:n,depth:r,nodeItem:t})})}function Or({data:e,depth:r,nodeItem:t}){return o.jsx(o.Fragment,{children:e.map((n,a)=>o.jsx(Je,{data:n,depth:r+1,nodeItem:t},a))})}function Ur({sx:e,name:r,role:t,depth:n,group:a,avatarUrl:i,totalChildren:l}){const d=he(),p=Oe(),x=()=>{p.onClose(),re.warning(`onDelete: ${r}`)},v=()=>{p.onClose(),re.info(`onEdit: ${r}`)},u=f=>({color:d.vars.palette[f].darker,bgcolor:ne(d.vars.palette[f].mainChannel,.08),border:`solid 1px ${ne(d.vars.palette[f].mainChannel,.24)}`,[Ie.dark]:{color:d.vars.palette[f].lighter}}),c=n===1,m=a==="root",h=a==="product design",k=a==="development",O=a==="marketing";return o.jsxs(o.Fragment,{children:[o.jsxs(q,{sx:{position:"relative",display:"inline-flex"},alignItems:"center",children:[!c&&o.jsx(Ue,{alt:r,src:i??"",sx:{mt:-3.5,zIndex:9,width:56,height:56,position:"absolute",border:`solid 4px ${d.vars.palette.background.paper}`}}),o.jsxs(Pe,{sx:{pt:5,pb:3,minWidth:200,borderRadius:1.5,...c&&{py:2},...c&&h&&u("primary"),...c&&k&&u("info"),...c&&O&&u("warning"),...e},children:[o.jsx(Re,{disabled:m,color:p.open?"inherit":"default",onClick:p.onOpen,sx:{top:8,right:8,position:"absolute",...c&&{display:"none"}},children:o.jsx(T,{icon:"eva:more-horizontal-fill"})}),n!==1&&!m&&o.jsx(_e,{sx:{top:0,left:0,width:1,height:4,position:"absolute",borderRadius:1.5,...h&&{bgcolor:"primary.light"},...k&&{bgcolor:"info.light"},...O&&{bgcolor:"warning.light"}}}),o.jsxs(B,{variant:c?"subtitle1":"subtitle2",noWrap:!0,children:[r,c&&o.jsx(Ze,{color:k&&"info"||O&&"warning"||"primary",sx:{ml:1},children:l})]}),!c&&o.jsx(B,{noWrap:!0,component:"div",variant:"caption",sx:{mt:.5,color:"text.secondary"},children:t})]})]}),o.jsx(Ge,{open:p.open,anchorEl:p.anchorEl,onClose:p.onClose,slotProps:{arrow:{placement:"left-center"}},children:o.jsxs(Le,{children:[o.jsxs(ee,{onClick:v,children:[o.jsx(T,{icon:"solar:pen-bold"}),"Edit"]}),o.jsxs(ee,{onClick:x,sx:{color:"error.main"},children:[o.jsx(T,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})})]})}function Pr({name:e,role:r,sx:t}){return o.jsxs(_e,{gap:.5,display:"inline-flex",flexDirection:"column",onClick:()=>console.info(e),sx:{p:2,borderRadius:1.5,cursor:"pointer",color:"primary.darker",bgcolor:n=>ne(n.vars.palette.primary.mainChannel,.08),border:n=>`1px solid ${ne(n.vars.palette.primary.mainChannel,.24)}`,[Ie.dark]:{color:"primary.lighter"},...t},children:[o.jsx(B,{variant:"subtitle2",children:e}),o.jsx(B,{variant:"caption",sx:{opacity:.48},children:r})]})}function Rr({name:e,avatarUrl:r,role:t,sx:n}){const a=Oe(),i=()=>{a.onClose(),re.warning(`onDelete: ${e}`)},l=()=>{a.onClose(),re.info(`onEdit: ${e}`)};return o.jsxs(o.Fragment,{children:[o.jsxs(Pe,{sx:{p:2,minWidth:200,borderRadius:1.5,textAlign:"left",position:"relative",display:"inline-flex",flexDirection:"column",...n},children:[o.jsx(Re,{color:a.open?"inherit":"default",onClick:a.onOpen,sx:{position:"absolute",top:8,right:8},children:o.jsx(T,{icon:"eva:more-horizontal-fill"})}),o.jsx(Ue,{alt:e,src:r,sx:{mr:2,mb:2,width:48,height:48}}),o.jsx(B,{variant:"subtitle2",noWrap:!0,sx:{mb:.5},children:e}),o.jsx(B,{variant:"caption",component:"div",noWrap:!0,sx:{color:"text.secondary"},children:t})]}),o.jsx(Ge,{open:a.open,anchorEl:a.anchorEl,onClose:a.onClose,slotProps:{arrow:{placement:"left-center"}},children:o.jsxs(Le,{children:[o.jsxs(ee,{onClick:l,children:[o.jsx(T,{icon:"solar:pen-bold"}),"Edit"]}),o.jsxs(ee,{onClick:i,sx:{color:"error.main"},children:[o.jsx(T,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]})})]})}const ze={group:"root",role:"ceo, co-founder",name:s.fullName(1),avatarUrl:s.image.avatar(1)},N={product:"product design",development:"development",marketing:"marketing"},Ee={...ze,children:[{role:"Lead",id:s.id(2),name:s.fullName(2),avatarUrl:s.image.avatar(2),children:[{role:"Senior",id:s.id(3),name:s.fullName(3),avatarUrl:s.image.avatar(3)}]},{role:"Lead",id:s.id(4),name:s.fullName(4),avatarUrl:s.image.avatar(4),children:[{role:"Senior",id:s.id(5),name:s.fullName(5),avatarUrl:s.image.avatar(5),children:[{role:"Back end developer",id:s.id(6),name:s.fullName(6),avatarUrl:s.image.avatar(6),children:[{role:"Back end developer",id:s.id(7),name:s.fullName(7),avatarUrl:s.image.avatar(7)}]},{role:"Front end",id:s.id(8),name:s.fullName(8),avatarUrl:s.image.avatar(8)}]}]},{role:"Lead",id:s.id(9),name:s.fullName(9),avatarUrl:s.image.avatar(9),children:[{role:"Support",id:s.id(10),name:s.fullName(10),avatarUrl:s.image.avatar(10)},{role:"Content writer",id:s.id(11),name:s.fullName(11),avatarUrl:s.image.avatar(11)}]}]},_r={...ze,children:[{name:N.product,group:N.product,children:[{group:N.product,role:"Lead",id:s.id(2),name:s.fullName(2),avatarUrl:s.image.avatar(2),children:[{group:N.product,role:"Senior",id:s.id(3),name:s.fullName(3),avatarUrl:s.image.avatar(3)}]}]},{name:N.development,group:N.development,children:[{group:N.development,role:"Lead",id:s.id(4),name:s.fullName(4),avatarUrl:s.image.avatar(4),children:[{group:N.development,role:"Senior",id:s.id(5),name:s.fullName(5),avatarUrl:s.image.avatar(5),children:[{group:N.development,role:"Back end developer",id:s.id(6),name:s.fullName(6),avatarUrl:s.image.avatar(6),children:[{group:N.development,role:"Back end developer",id:s.id(7),name:s.fullName(7),avatarUrl:s.image.avatar(7)}]},{group:N.development,role:"Front end",id:s.id(8),name:s.fullName(8),avatarUrl:s.image.avatar(8)}]}]}]},{name:N.marketing,group:N.marketing,children:[{group:N.marketing,role:"Lead",id:s.id(9),name:s.fullName(9),avatarUrl:s.image.avatar(9),children:[{group:N.marketing,role:"Lead",id:s.id(10),name:s.fullName(10),avatarUrl:s.image.avatar(10)},{group:N.marketing,role:"Content writer",id:s.id(11),name:s.fullName(11),avatarUrl:s.image.avatar(11)}]}]}]};function Gr(){const e=he();return o.jsxs(o.Fragment,{children:[o.jsx(nr,{children:o.jsx(rr,{heading:"Organizational chart",links:[{name:"Components",href:Qe.components},{name:"Organizational chart"}],moreLink:["https://www.npmjs.com/package/react-organizational-chart","https://daniel-hauser.github.io/react-organizational-chart/?path=/story/example-tree--basic"]})}),o.jsx(tr,{children:o.jsxs(q,{spacing:5,children:[o.jsx(le,{title:"Simple",children:o.jsx(q,{sx:{overflowY:"auto",py:10},children:o.jsx(ue,{data:Ee,lineColor:e.vars.palette.primary.light,nodeItem:r=>o.jsx(Pr,{sx:{},...r})})})}),o.jsx(le,{title:"Standard",children:o.jsx(q,{sx:{overflowY:"auto",py:10},children:o.jsx(ue,{lineHeight:"40px",data:Ee,nodeItem:r=>o.jsx(Rr,{sx:{},...r})})})}),o.jsx(le,{title:"Group",children:o.jsx(q,{sx:{overflowY:"auto",py:10},children:o.jsx(ue,{lineHeight:"64px",data:_r,nodeItem:r=>o.jsx(Ur,{sx:{},...r})})})})]})})]})}const Lr={title:`Organizational chart | Components - ${er.site.name}`};function Fr(){return o.jsxs(o.Fragment,{children:[o.jsx(Xe,{children:o.jsxs("title",{children:[" ",Lr.title]})}),o.jsx(Gr,{})]})}export{Fr as default};

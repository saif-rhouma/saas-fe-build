const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mapbox-gl-DSg4GjIt.js","assets/index-dnffYGPF.js","assets/index-BfT5e6xn.css"])))=>i.map(i=>d[i]);
import{r as s,aY as D,d6 as B,j as _,C as $,B as H}from"./index-dnffYGPF.js";const V=s.createContext(null);function q(t,e){const n=Array.isArray(t)?t[0]:t?t.x:0,o=Array.isArray(t)?t[1]:t?t.y:0,r=Array.isArray(e)?e[0]:e?e.x:0,i=Array.isArray(e)?e[1]:e?e.y:0;return n===r&&o===i}function h(t,e){if(t===e)return!0;if(!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!h(t[n],e[n]))return!1;return!0}else if(Array.isArray(e))return!1;if(typeof t=="object"&&typeof e=="object"){const n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(const r of n)if(!e.hasOwnProperty(r)||!h(t[r],e[r]))return!1;return!0}return!1}function W(t){const e=t.clone();return e.pixelsToGLUnits=t.pixelsToGLUnits,e}function z(t,e){if(!t.getProjection)return;const n=t.getProjection(),o=e.getProjection();h(n,o)||e.setProjection(n)}function A(t){return{longitude:t.center.lng,latitude:t.center.lat,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,padding:t.padding}}function j(t,e){const n=e.viewState||e;let o=!1;if("longitude"in n&&"latitude"in n){const r=t.center;t.center=new r.constructor(n.longitude,n.latitude),o=o||r!==t.center}if("zoom"in n){const r=t.zoom;t.zoom=n.zoom,o=o||r!==t.zoom}if("bearing"in n){const r=t.bearing;t.bearing=n.bearing,o=o||r!==t.bearing}if("pitch"in n){const r=t.pitch;t.pitch=n.pitch,o=o||r!==t.pitch}return n.padding&&!t.isPaddingEqual(n.padding)&&(o=!0,t.padding=n.padding),o}const G=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function P(t){if(!t)return null;if(typeof t=="string"||("toJS"in t&&(t=t.toJS()),!t.layers))return t;const e={};for(const o of t.layers)e[o.id]=o;const n=t.layers.map(o=>{let r=null;"interactive"in o&&(r=Object.assign({},o),delete r.interactive);const i=e[o.ref];if(i){r=r||Object.assign({},o),delete r.ref;for(const a of G)a in i&&(r[a]=i[a])}return r||o});return{...t,layers:n}}var O={};const N={version:8,sources:{},layers:[]},F={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},T={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},I={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},K=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],Q=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class b{constructor(e,n,o){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=r=>{const i=this.props[I[r.type]];i?i(r):r.type==="error"&&console.error(r.error)},this._onPointerEvent=r=>{(r.type==="mousemove"||r.type==="mouseout")&&this._updateHover(r);const i=this.props[F[r.type]];i&&(this.props.interactiveLayerIds&&r.type!=="mouseover"&&r.type!=="mouseout"&&(r.features=this._hoveredFeatures||this._queryRenderedFeatures(r.point)),i(r),delete r.features)},this._onCameraEvent=r=>{if(!this._internalUpdate){const i=this.props[T[r.type]];i&&i(r)}r.type in this._deferredEvents&&(this._deferredEvents[r.type]=!1)},this._MapClass=e,this.props=n,this._initialize(o)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){const n=this.props;this.props=e;const o=this._updateSettings(e,n);o&&this._createShadowTransform(this._map);const r=this._updateSize(e),i=this._updateViewState(e,!0);this._updateStyle(e,n),this._updateStyleComponents(e,n),this._updateHandlers(e,n),(o||r||i&&!this._map.isMoving())&&this.redraw()}static reuse(e,n){const o=b.savedMaps.pop();if(!o)return null;const r=o.map,i=r.getContainer();for(n.className=i.className;i.childNodes.length>0;)n.appendChild(i.childNodes[0]);r._container=n;const a=r._resizeObserver;a&&(a.disconnect(),a.observe(n)),o.setProps({...e,styleDiffing:!1}),r.resize();const{initialViewState:c}=e;return c&&(c.bounds?r.fitBounds(c.bounds,{...c.fitBoundsOptions,duration:0}):o._updateViewState(c,!1)),r.isStyleLoaded()?r.fire("load"):r.once("styledata",()=>r.fire("load")),r._update(),o}_initialize(e){const{props:n}=this,{mapStyle:o=N}=n,r={...n,...n.initialViewState,accessToken:n.mapboxAccessToken||Y()||null,container:e,style:P(o)},i=r.initialViewState||r.viewState||r;if(Object.assign(r,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),n.gl){const f=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=f,n.gl)}const a=new this._MapClass(r);i.padding&&a.setPadding(i.padding),n.cursor&&(a.getCanvas().style.cursor=n.cursor),this._createShadowTransform(a);const c=a._render;a._render=f=>{this._inRender=!0,c.call(a,f),this._inRender=!1};const u=a._renderTaskQueue.run;a._renderTaskQueue.run=f=>{u.call(a._renderTaskQueue,f),this._onBeforeRepaint()},a.on("render",()=>this._onAfterRepaint());const l=a.fire;a.fire=this._fireEvent.bind(this,l),a.on("resize",()=>{this._renderTransform.resize(a.transform.width,a.transform.height)}),a.on("styledata",()=>{this._updateStyleComponents(this.props,{}),z(a.transform,this._renderTransform)}),a.on("sourcedata",()=>this._updateStyleComponents(this.props,{}));for(const f in F)a.on(f,this._onPointerEvent);for(const f in T)a.on(f,this._onCameraEvent);for(const f in I)a.on(f,this._onEvent);this._map=a}recycle(){const n=this.map.getContainer().querySelector("[mapboxgl-children]");n==null||n.remove(),b.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){const n=W(e.transform);e.painter.transform=n,this._renderTransform=n}_updateSize(e){const{viewState:n}=e;if(n){const o=this._map;if(n.width!==o.transform.width||n.height!==o.transform.height)return o.resize(),!0}return!1}_updateViewState(e,n){if(this._internalUpdate)return!1;const o=this._map,r=this._renderTransform,{zoom:i,pitch:a,bearing:c}=r,u=o.isMoving();u&&(r.cameraElevationReference="sea");const l=j(r,{...A(o.transform),...e});if(u&&(r.cameraElevationReference="ground"),l&&n){const f=this._deferredEvents;f.move=!0,f.zoom||(f.zoom=i!==r.zoom),f.rotate||(f.rotate=c!==r.bearing),f.pitch||(f.pitch=a!==r.pitch)}return u||j(o.transform,e),l}_updateSettings(e,n){const o=this._map;let r=!1;for(const i of K)if(i in e&&!h(e[i],n[i])){r=!0;const a=o[`set${i[0].toUpperCase()}${i.slice(1)}`];a==null||a.call(o,e[i])}return r}_updateStyle(e,n){if(e.cursor!==n.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==n.mapStyle){const{mapStyle:o=N,styleDiffing:r=!0}=e,i={diff:r};return"localIdeographFontFamily"in e&&(i.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(P(o),i),!0}return!1}_updateStyleComponents(e,n){const o=this._map;let r=!1;return o.isStyleLoaded()&&("light"in e&&o.setLight&&!h(e.light,n.light)&&(r=!0,o.setLight(e.light)),"fog"in e&&o.setFog&&!h(e.fog,n.fog)&&(r=!0,o.setFog(e.fog)),"terrain"in e&&o.setTerrain&&!h(e.terrain,n.terrain)&&(!e.terrain||o.getSource(e.terrain.source))&&(r=!0,o.setTerrain(e.terrain))),r}_updateHandlers(e,n){var o,r;const i=this._map;let a=!1;for(const c of Q){const u=(o=e[c])!==null&&o!==void 0?o:!0,l=(r=n[c])!==null&&r!==void 0?r:!0;h(u,l)||(a=!0,u?i[c].enable(u):i[c].disable())}return a}_queryRenderedFeatures(e){const n=this._map,o=n.transform,{interactiveLayerIds:r=[]}=this.props;try{return n.transform=this._renderTransform,n.queryRenderedFeatures(e,{layers:r.filter(n.getLayer.bind(n))})}catch{return[]}finally{n.transform=o}}_updateHover(e){var n;const{props:o}=this;if(o.interactiveLayerIds&&(o.onMouseMove||o.onMouseEnter||o.onMouseLeave)){const i=e.type,a=((n=this._hoveredFeatures)===null||n===void 0?void 0:n.length)>0,c=this._queryRenderedFeatures(e.point),u=c.length>0;!u&&a&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=c,u&&!a&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=i}else this._hoveredFeatures=null}_fireEvent(e,n,o){const r=this._map,i=r.transform,a=typeof n=="string"?n:n.type;return a==="move"&&this._updateViewState(this.props,!1),a in T&&(typeof n=="object"&&(n.viewState=A(i)),this._map.isMoving())?(r.transform=this._renderTransform,e.call(r,n,o),r.transform=i,r):(e.call(r,n,o),r)}_onBeforeRepaint(){const e=this._map;this._internalUpdate=!0;for(const o in this._deferredEvents)this._deferredEvents[o]&&e.fire(o);this._internalUpdate=!1;const n=this._map.transform;e.transform=this._renderTransform,this._onAfterRepaint=()=>{z(this._renderTransform,n),e.transform=n}}}b.savedMaps=[];function Y(){let t=null;if(typeof location<"u"){const e=/access_token=([^&\/]*)/.exec(location.search);t=e&&e[1]}try{t=t||O.MapboxAccessToken}catch{}try{t=t||O.REACT_APP_MAPBOX_ACCESS_TOKEN}catch{}return t}const J=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function X(t){if(!t)return null;const e=t.map,n={getMap:()=>e,getCenter:()=>t.transform.center,getZoom:()=>t.transform.zoom,getBearing:()=>t.transform.bearing,getPitch:()=>t.transform.pitch,getPadding:()=>t.transform.padding,getBounds:()=>t.transform.getBounds(),project:o=>{const r=e.transform;e.transform=t.transform;const i=e.project(o);return e.transform=r,i},unproject:o=>{const r=e.transform;e.transform=t.transform;const i=e.unproject(o);return e.transform=r,i},queryTerrainElevation:(o,r)=>{const i=e.transform;e.transform=t.transform;const a=e.queryTerrainElevation(o,r);return e.transform=i,a},queryRenderedFeatures:(o,r)=>{const i=e.transform;e.transform=t.transform;const a=e.queryRenderedFeatures(o,r);return e.transform=i,a}};for(const o of ee(e))!(o in n)&&!J.includes(o)&&(n[o]=e[o].bind(e));return n}function ee(t){const e=new Set;let n=t;for(;n;){for(const o of Object.getOwnPropertyNames(n))o[0]!=="_"&&typeof t[o]=="function"&&o!=="fire"&&o!=="setEventedParent"&&e.add(o);n=Object.getPrototypeOf(n)}return Array.from(e)}const te=typeof document<"u"?s.useLayoutEffect:s.useEffect,ne=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function oe(t,e){for(const o of ne)o in e&&(t[o]=e[o]);const{RTLTextPlugin:n="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=e;n&&t.getRTLTextPluginStatus&&t.getRTLTextPluginStatus()==="unavailable"&&t.setRTLTextPlugin(n,o=>{o&&console.error(o)},!0)}const M=s.createContext(null);function re(t,e,n){const o=s.useContext(V),[r,i]=s.useState(null),a=s.useRef(),{current:c}=s.useRef({mapLib:null,map:null});s.useEffect(()=>{const f=t.mapLib;let d=!0,y;return Promise.resolve(f||n).then(p=>{if(!d)return;if(!p)throw new Error("Invalid mapLib");const g="Map"in p?p:p.default;if(!g.Map)throw new Error("Invalid mapLib");if(oe(g,t),!g.supported||g.supported(t))t.reuseMaps&&(y=b.reuse(t,a.current)),y||(y=new b(g.Map,t,a.current)),c.map=X(y),c.mapLib=g,i(y),o==null||o.onMapMount(c.map,t.id);else throw new Error("Map is not supported by this browser")}).catch(p=>{const{onError:g}=t;g?g({type:"error",target:null,originalEvent:null,error:p}):console.error(p)}),()=>{d=!1,y&&(o==null||o.onMapUnmount(t.id),t.reuseMaps?y.recycle():y.destroy())}},[]),te(()=>{r&&r.setProps(t)}),s.useImperativeHandle(e,()=>c.map,[r]);const u=s.useMemo(()=>({position:"relative",width:"100%",height:"100%",...t.style}),[t.style]),l={height:"100%"};return s.createElement("div",{id:t.id,ref:a,style:u},r&&s.createElement(M.Provider,{value:c},s.createElement("div",{"mapboxgl-children":"",style:l},t.children)))}const ie=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function S(t,e){if(!t||!e)return;const n=t.style;for(const o in e){const r=e[o];Number.isFinite(r)&&!ie.test(o)?n[o]=`${r}px`:n[o]=r}}function ae(t,e){const{map:n,mapLib:o}=s.useContext(M),r=s.useRef({props:t});r.current.props=t;const i=s.useMemo(()=>{let k=!1;s.Children.forEach(t.children,C=>{C&&(k=!0)});const Z={...t,element:k?document.createElement("div"):null},L=new o.Marker(Z);return L.setLngLat([t.longitude,t.latitude]),L.getElement().addEventListener("click",C=>{var v,m;(m=(v=r.current.props).onClick)===null||m===void 0||m.call(v,{type:"click",target:L,originalEvent:C})}),L.on("dragstart",C=>{var v,m;const E=C;E.lngLat=i.getLngLat(),(m=(v=r.current.props).onDragStart)===null||m===void 0||m.call(v,E)}),L.on("drag",C=>{var v,m;const E=C;E.lngLat=i.getLngLat(),(m=(v=r.current.props).onDrag)===null||m===void 0||m.call(v,E)}),L.on("dragend",C=>{var v,m;const E=C;E.lngLat=i.getLngLat(),(m=(v=r.current.props).onDragEnd)===null||m===void 0||m.call(v,E)}),L},[]);s.useEffect(()=>(i.addTo(n.getMap()),()=>{i.remove()}),[]);const{longitude:a,latitude:c,offset:u,style:l,draggable:f=!1,popup:d=null,rotation:y=0,rotationAlignment:p="auto",pitchAlignment:g="auto"}=t;return s.useEffect(()=>{S(i.getElement(),l)},[l]),s.useImperativeHandle(e,()=>i,[]),(i.getLngLat().lng!==a||i.getLngLat().lat!==c)&&i.setLngLat([a,c]),u&&!q(i.getOffset(),u)&&i.setOffset(u),i.isDraggable()!==f&&i.setDraggable(f),i.getRotation()!==y&&i.setRotation(y),i.getRotationAlignment()!==p&&i.setRotationAlignment(p),i.getPitchAlignment()!==g&&i.setPitchAlignment(g),i.getPopup()!==d&&i.setPopup(d),D.createPortal(t.children,i.getElement())}const se=s.memo(s.forwardRef(ae));function U(t){return new Set(t?t.trim().split(/\s+/):[])}function ce(t,e){const{map:n,mapLib:o}=s.useContext(M),r=s.useMemo(()=>document.createElement("div"),[]),i=s.useRef({props:t});i.current.props=t;const a=s.useMemo(()=>{const c={...t},u=new o.Popup(c);return u.setLngLat([t.longitude,t.latitude]),u.once("open",l=>{var f,d;(d=(f=i.current.props).onOpen)===null||d===void 0||d.call(f,l)}),u},[]);if(s.useEffect(()=>{const c=u=>{var l,f;(f=(l=i.current.props).onClose)===null||f===void 0||f.call(l,u)};return a.on("close",c),a.setDOMContent(r).addTo(n.getMap()),()=>{a.off("close",c),a.isOpen()&&a.remove()}},[]),s.useEffect(()=>{S(a.getElement(),t.style)},[t.style]),s.useImperativeHandle(e,()=>a,[]),a.isOpen()&&((a.getLngLat().lng!==t.longitude||a.getLngLat().lat!==t.latitude)&&a.setLngLat([t.longitude,t.latitude]),t.offset&&!h(a.options.offset,t.offset)&&a.setOffset(t.offset),(a.options.anchor!==t.anchor||a.options.maxWidth!==t.maxWidth)&&(a.options.anchor=t.anchor,a.setMaxWidth(t.maxWidth)),a.options.className!==t.className)){const c=U(a.options.className),u=U(t.className);for(const l of c)u.has(l)||a.removeClassName(l);for(const l of u)c.has(l)||a.addClassName(l);a.options.className=t.className}return D.createPortal(t.children,r)}const le=s.memo(s.forwardRef(ce));function x(t,e,n,o){const r=s.useContext(M),i=s.useMemo(()=>t(r),[]);return s.useEffect(()=>{const a=e,c=typeof e=="function"&&typeof n=="function"?e:null,u=typeof e=="function"?e:null,{map:l}=r;return l.hasControl(i)||(l.addControl(i,a==null?void 0:a.position),c&&c(r)),()=>{u&&u(r),l.hasControl(i)&&l.removeControl(i)}},[]),i}function ue(t){const e=x(({mapLib:n})=>new n.AttributionControl(t),{position:t.position});return s.useEffect(()=>{S(e._container,t.style)},[t.style]),null}s.memo(ue);function fe(t){const e=x(({mapLib:n})=>new n.FullscreenControl({container:t.containerId&&document.getElementById(t.containerId)}),{position:t.position});return s.useEffect(()=>{S(e._controlContainer,t.style)},[t.style]),null}const de=s.memo(fe);function me(t,e){const n=s.useRef({props:t}),o=x(({mapLib:r})=>{const i=new r.GeolocateControl(t),a=i._setupUI;return i._setupUI=c=>{i._container.hasChildNodes()||a(c)},i.on("geolocate",c=>{var u,l;(l=(u=n.current.props).onGeolocate)===null||l===void 0||l.call(u,c)}),i.on("error",c=>{var u,l;(l=(u=n.current.props).onError)===null||l===void 0||l.call(u,c)}),i.on("outofmaxbounds",c=>{var u,l;(l=(u=n.current.props).onOutOfMaxBounds)===null||l===void 0||l.call(u,c)}),i.on("trackuserlocationstart",c=>{var u,l;(l=(u=n.current.props).onTrackUserLocationStart)===null||l===void 0||l.call(u,c)}),i.on("trackuserlocationend",c=>{var u,l;(l=(u=n.current.props).onTrackUserLocationEnd)===null||l===void 0||l.call(u,c)}),i},{position:t.position});return n.current.props=t,s.useImperativeHandle(e,()=>o,[]),s.useEffect(()=>{S(o._container,t.style)},[t.style]),null}const he=s.memo(s.forwardRef(me));function ge(t){const e=x(({mapLib:n})=>new n.NavigationControl(t),{position:t.position});return s.useEffect(()=>{S(e._container,t.style)},[t.style]),null}const ye=s.memo(ge);function ve(t){const e=x(({mapLib:i})=>new i.ScaleControl(t),{position:t.position}),n=s.useRef(t),o=n.current;n.current=t;const{style:r}=t;return t.maxWidth!==void 0&&t.maxWidth!==o.maxWidth&&(e.options.maxWidth=t.maxWidth),t.unit!==void 0&&t.unit!==o.unit&&e.setUnit(t.unit),s.useEffect(()=>{S(e._container,r)},[r]),null}const _e=s.memo(ve);function w(t,e){if(!t)throw new Error(e)}function pe(t,e,n,o){if(w(n.id===o.id,"layer id changed"),w(n.type===o.type,"layer type changed"),n.type==="custom"||o.type==="custom")return;const{layout:r={},paint:i={},filter:a,minzoom:c,maxzoom:u,beforeId:l}=n;if(l!==o.beforeId&&t.moveLayer(e,l),r!==o.layout){const f=o.layout||{};for(const d in r)h(r[d],f[d])||t.setLayoutProperty(e,d,r[d]);for(const d in f)r.hasOwnProperty(d)||t.setLayoutProperty(e,d,void 0)}if(i!==o.paint){const f=o.paint||{};for(const d in i)h(i[d],f[d])||t.setPaintProperty(e,d,i[d]);for(const d in f)i.hasOwnProperty(d)||t.setPaintProperty(e,d,void 0)}h(a,o.filter)||t.setFilter(e,a),(c!==o.minzoom||u!==o.maxzoom)&&t.setLayerZoomRange(e,c,u)}function Ce(t,e,n){if(t.style&&t.style._loaded&&(!("source"in n)||t.getSource(n.source))){const o={...n,id:e};delete o.beforeId,t.addLayer(o,n.beforeId)}}let Ee=0;function Le(t){const e=s.useContext(M).map.getMap(),n=s.useRef(t),[,o]=s.useState(0),r=s.useMemo(()=>t.id||`jsx-layer-${Ee++}`,[]);if(s.useEffect(()=>{if(e){const a=()=>o(c=>c+1);return e.on("styledata",a),a(),()=>{e.off("styledata",a),e.style&&e.style._loaded&&e.getLayer(r)&&e.removeLayer(r)}}},[e]),e&&e.style&&e.getLayer(r))try{pe(e,r,t,n.current)}catch(a){console.warn(a)}else Ce(e,r,t);return n.current=t,null}let Se=0;function be(t,e,n){if(t.style&&t.style._loaded){const o={...n};return delete o.id,delete o.children,t.addSource(e,o),t.getSource(e)}return null}function Me(t,e,n){w(e.id===n.id,"source id changed"),w(e.type===n.type,"source type changed");let o="",r=0;for(const a in e)a!=="children"&&a!=="id"&&!h(n[a],e[a])&&(o=a,r++);if(!r)return;const i=e.type;if(i==="geojson")t.setData(e.data);else if(i==="image")t.updateImage({url:e.url,coordinates:e.coordinates});else if("setCoordinates"in t&&r===1&&o==="coordinates")t.setCoordinates(e.coordinates);else if("setUrl"in t)switch(o){case"url":t.setUrl(e.url);break;case"tiles":t.setTiles(e.tiles);break}else console.warn(`Unable to update <Source> prop: ${o}`)}function xe(t){const e=s.useContext(M).map.getMap(),n=s.useRef(t),[,o]=s.useState(0),r=s.useMemo(()=>t.id||`jsx-source-${Se++}`,[]);s.useEffect(()=>{if(e){const a=()=>setTimeout(()=>o(c=>c+1),0);return e.on("styledata",a),a(),()=>{var c;if(e.off("styledata",a),e.style&&e.style._loaded&&e.getSource(r)){const u=(c=e.getStyle())===null||c===void 0?void 0:c.layers;if(u)for(const l of u)l.source===r&&e.removeLayer(l.id);e.removeSource(r)}}}},[e]);let i=e&&e.style&&e.getSource(r);return i?Me(i,t,n.current):i=be(e,r,t),n.current=t,i&&s.Children.map(t.children,a=>a&&s.cloneElement(a,{source:r}))||null}const we=B(()=>import("./mapbox-gl-DSg4GjIt.js").then(t=>t.m),__vite__mapDeps([0,1,2])),Te=s.forwardRef(function(e,n){return re(e,n,we)}),Re=se,ke=le,ze=de,Ae=ye,je=he,Pe=_e,Fe=Le,Ie=xe,Ue=s.forwardRef(({...t},e)=>_.jsx(Te,{ref:e,mapLib:B(()=>import("./mapbox-gl-DSg4GjIt.js").then(n=>n.m),__vite__mapDeps([0,1,2])),mapboxAccessToken:$.mapbox.apiKey,...t}));function De({sx:t,children:e,...n}){return _.jsx(H,{component:ke,anchor:"bottom",sx:t,...n,children:e})}const R=20,Oe=`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;function Be({...t}){return _.jsx(Re,{...t,children:_.jsx(H,{component:"svg",viewBox:"0 0 24 24",sx:{height:R,stroke:"none",cursor:"pointer",fill:e=>e.vars.palette.error.main,transform:`translate(${-R/2}px, ${-R}px)`},children:_.jsx("path",{d:Oe})})})}function He({hideScale:t,hideGeolocate:e,hideFullscreen:n,hideNavigation:o}){return _.jsxs(_.Fragment,{children:[!e&&_.jsx(je,{position:"top-left",positionOptions:{enableHighAccuracy:!0}}),!n&&_.jsx(ze,{position:"top-left"}),!t&&_.jsx(Pe,{position:"bottom-left"}),!o&&_.jsx(Ae,{position:"bottom-left"})]})}export{Fe as L,Ue as M,Ie as S,He as a,Be as b,De as c};

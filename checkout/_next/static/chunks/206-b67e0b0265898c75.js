"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[206],{413:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let r=n(1024),i=n(8533),o=i._(n(2265)),u=r._(n(4887)),l=r._(n(5793)),a=n(7929),s=n(5751),c=n(7327);n(2637);let f=n(6304),d=r._(n(9950)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/checkout/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(e,t,n,r,i,o){let u=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===u)return;e["data-loaded-src"]=u;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function getDynamicProps(e){let[t,n]=o.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,o.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:u,width:l,decoding:a,className:s,style:c,fetchPriority:f,placeholder:d,loading:p,unoptimized:h,fill:y,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:b,setShowAltText:v,onLoad:w,onError:E,...C}=e;return o.default.createElement("img",{...C,...getDynamicProps(f),loading:p,width:l,height:u,decoding:a,"data-nimg":y?"fill":"1",className:s,style:c,sizes:i,srcSet:r,src:n,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&handleLoading(e,d,m,g,b,h))},[n,d,m,g,b,E,h,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,d,m,g,b,h)},onError:e=>{v(!0),"empty"!==d&&b(!0),E&&E(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...getDynamicProps(n.fetchPriority)};return t&&u.default.preload?(u.default.preload(n.src,r),null):o.default.createElement(l.default,null,o.default.createElement("link",{key:"__nimg-"+n.src+n.srcSet+n.sizes,rel:"preload",href:n.srcSet?void 0:n.src,...r}))}let y=(0,o.forwardRef)((e,t)=>{let n=(0,o.useContext)(f.RouterContext),r=(0,o.useContext)(c.ImageConfigContext),i=(0,o.useMemo)(()=>{let e=p||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:u,onLoadingComplete:l}=e,y=(0,o.useRef)(u);(0,o.useEffect)(()=>{y.current=u},[u]);let m=(0,o.useRef)(l);(0,o.useEffect)(()=>{m.current=l},[l]);let[g,b]=(0,o.useState)(!1),[v,w]=(0,o.useState)(!1),{props:E,meta:C}=(0,a.getImgProps)(e,{defaultLoader:d.default,imgConf:i,blurComplete:g,showAltText:v});return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,{...E,unoptimized:C.unoptimized,placeholder:C.placeholder,fill:C.fill,onLoadRef:y,onLoadingCompleteRef:m,setBlurComplete:b,setShowAltText:w,ref:t}),C.priority?o.default.createElement(ImagePreload,{isAppRouter:!n,imgAttributes:E}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8569:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return o}});let r=n(1024),i=r._(n(2265)),o=i.default.createContext({})},4472:function(e,t){function isInAmpMode(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},7929:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),n(2637);let r=n(1511),i=n(5751);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var n;let o,u,l,{src:a,sizes:s,unoptimized:c=!1,priority:f=!1,loading:d,className:p,quality:h,width:y,height:m,fill:g=!1,style:b,onLoad:v,onLoadingComplete:w,placeholder:E="empty",blurDataURL:C,fetchPriority:_,layout:P,objectFit:S,objectPosition:O,lazyBoundary:j,lazyRoot:x,...M}=e,{imgConf:A,showAltText:k,blurComplete:F,defaultLoader:I}=t,R=A||i.imageConfigDefault;if("allSizes"in R)o=R;else{let e=[...R.deviceSizes,...R.imageSizes].sort((e,t)=>e-t),t=R.deviceSizes.sort((e,t)=>e-t);o={...R,allSizes:e,deviceSizes:t}}let L=M.loader||I;delete M.loader,delete M.srcSet;let D="__next_img_default"in L;if(D){if("custom"===o.loader)throw Error('Image with src "'+a+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:n,...r}=t;return e(r)}}if(P){"fill"===P&&(g=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!s&&(s=t)}let z="",Q=getInt(y),K=getInt(m);if("object"==typeof(n=a)&&(isStaticRequire(n)||void 0!==n.src)){let e=isStaticRequire(a)?a.default:a;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,l=e.blurHeight,C=C||e.blurDataURL,z=e.src,!g){if(Q||K){if(Q&&!K){let t=Q/e.width;K=Math.round(e.height*t)}else if(!Q&&K){let t=K/e.height;Q=Math.round(e.width*t)}}else Q=e.width,K=e.height}}let N=!f&&("lazy"===d||void 0===d);(!(a="string"==typeof a?a:z)||a.startsWith("data:")||a.startsWith("blob:"))&&(c=!0,N=!1),o.unoptimized&&(c=!0),D&&a.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(c=!0),f&&(_="high");let U=getInt(h),B=Object.assign(g?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:O}:{},k?{}:{color:"transparent"},b),T=F||"empty"===E?null:"blur"===E?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:Q,heightInt:K,blurWidth:u,blurHeight:l,blurDataURL:C||"",objectFit:B.objectFit})+'")':'url("'+E+'")',G=T?{backgroundSize:B.objectFit||"cover",backgroundPosition:B.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:T}:{},H=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:u,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,u),c=a.length-1;return{sizes:u||"w"!==s?u:"100vw",srcSet:a.map((e,r)=>l({config:t,src:n,quality:o,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:l({config:t,src:n,quality:o,width:a[c]})}}({config:o,src:a,unoptimized:c,width:Q,quality:U,sizes:s,loader:L}),V={...M,loading:N?"lazy":d,fetchPriority:_,width:Q,height:K,decoding:"async",className:p,style:{...B,...G},sizes:H.sizes,srcSet:H.srcSet,src:H.src},W={unoptimized:c,priority:f,placeholder:E,fill:g};return{props:V,meta:W}}},5793:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return defaultHead},default:function(){return _default}});let r=n(1024),i=n(8533),o=i._(n(2265)),u=r._(n(110)),l=n(8569),a=n(1852),s=n(4472);function defaultHead(e){void 0===e&&(e=!1);let t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2637);let c=["name","httpEquiv","charSet","itemProp"];function reduceComponents(e,t){let{inAmpMode:n}=t;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,u=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){u=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!u)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,o.default.cloneElement(e,t)}return o.default.cloneElement(e,{key:r})})}let _default=function(e){let{children:t}=e,n=(0,o.useContext)(l.AmpStateContext),r=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(u.default,{reduceComponentsToState:reduceComponents,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1511:function(e,t){function getImageBlurSvg(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:u}=e,l=r?40*r:t,a=i?40*i:n,s=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},7327:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return u}});let r=n(1024),i=r._(n(2265)),o=n(5751),u=i.default.createContext(o.imageConfigDefault)},5751:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9950:function(e,t){function defaultLoader(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),defaultLoader.__next_img_default=!0;let n=defaultLoader},6304:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return o}});let r=n(1024),i=r._(n(2265)),o=i.default.createContext(null)},110:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});let r=n(2265),i=r.useLayoutEffect,o=r.useEffect;function SideEffect(e){let{headManager:t,reduceComponentsToState:n}=e;function emitChange(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=emitChange),()=>{t&&(t._pendingUpdate=emitChange)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},2637:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},622:function(e,t,n){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,o={},s=null,c=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(c=t.ref),t)u.call(t,r)&&!a.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:s,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},7437:function(e,t,n){e.exports=n(622)},8202:function(e,t,n){n.d(t,{j:function(){return o}});var r=n(9492),i=n(6504);let FocusManager=class FocusManager extends r.l{constructor(){super(),this.setup=e=>{if(!i.sk&&window.addEventListener){let listener=()=>e();return window.addEventListener("visibilitychange",listener,!1),window.addEventListener("focus",listener,!1),()=>{window.removeEventListener("visibilitychange",listener),window.removeEventListener("focus",listener)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){let t=this.focused!==e;t&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}};let o=new FocusManager},7156:function(e,t,n){n.d(t,{V:function(){return i}});var r=n(6504);let i=function(){let e=[],t=0,notifyFn=e=>{e()},batchNotifyFn=e=>{e()},schedule=n=>{t?e.push(n):(0,r.A4)(()=>{notifyFn(n)})},flush=()=>{let t=e;e=[],t.length&&(0,r.A4)(()=>{batchNotifyFn(()=>{t.forEach(e=>{notifyFn(e)})})})};return{batch:e=>{let n;t++;try{n=e()}finally{--t||flush()}return n},batchCalls:e=>(...t)=>{schedule(()=>{e(...t)})},schedule,setNotifyFunction:e=>{notifyFn=e},setBatchNotifyFunction:e=>{batchNotifyFn=e}}}()},3864:function(e,t,n){n.d(t,{N:function(){return u}});var r=n(9492),i=n(6504);let o=["online","offline"];let OnlineManager=class OnlineManager extends r.l{constructor(){super(),this.setup=e=>{if(!i.sk&&window.addEventListener){let listener=()=>e();return o.forEach(e=>{window.addEventListener(e,listener,!1)}),()=>{o.forEach(e=>{window.removeEventListener(e,listener)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){let t=this.online!==e;t&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};let u=new OnlineManager},3238:function(e,t,n){n.d(t,{DV:function(){return isCancelledError},Kw:function(){return canFetch},Mz:function(){return createRetryer}});var r=n(8202),i=n(3864),o=n(6504);function defaultRetryDelay(e){return Math.min(1e3*2**e,3e4)}function canFetch(e){return(null!=e?e:"online")!=="online"||i.N.isOnline()}let CancelledError=class CancelledError{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}};function isCancelledError(e){return e instanceof CancelledError}function createRetryer(e){let t,n,u,l=!1,a=0,s=!1,c=new Promise((e,t)=>{n=e,u=t}),shouldPause=()=>!r.j.isFocused()||"always"!==e.networkMode&&!i.N.isOnline(),resolve=r=>{s||(s=!0,null==e.onSuccess||e.onSuccess(r),null==t||t(),n(r))},reject=n=>{s||(s=!0,null==e.onError||e.onError(n),null==t||t(),u(n))},pause=()=>new Promise(n=>{t=e=>{let t=s||!shouldPause();return t&&n(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,s||null==e.onContinue||e.onContinue()}),run=()=>{let t;if(!s){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(resolve).catch(t=>{var n,r;if(s)return;let i=null!=(n=e.retry)?n:3,u=null!=(r=e.retryDelay)?r:defaultRetryDelay,c="function"==typeof u?u(a,t):u,f=!0===i||"number"==typeof i&&a<i||"function"==typeof i&&i(a,t);if(l||!f){reject(t);return}a++,null==e.onFail||e.onFail(a,t),(0,o.Gh)(c).then(()=>{if(shouldPause())return pause()}).then(()=>{l?reject(t):run()})})}};return canFetch(e.networkMode)?run():pause().then(run),{promise:c,cancel:t=>{s||(reject(new CancelledError(t)),null==e.abort||e.abort())},continue:()=>{let e=null==t?void 0:t();return e?c:Promise.resolve()},cancelRetry:()=>{l=!0},continueRetry:()=>{l=!1}}}},9492:function(e,t,n){n.d(t,{l:function(){return Subscribable}});let Subscribable=class Subscribable{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){let t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},6504:function(e,t,n){n.d(t,{A4:function(){return scheduleMicrotask},G9:function(){return getAbortController},Gh:function(){return sleep},I6:function(){return parseFilterArgs},Kp:function(){return timeUntilStale},PN:function(){return isValidTimeout},Rm:function(){return hashQueryKeyByOptions},SE:function(){return functionalUpdate},VS:function(){return shallowEqualObjects},X7:function(){return matchMutation},ZT:function(){return noop},_v:function(){return parseQueryArgs},_x:function(){return matchQuery},lV:function(){return parseMutationArgs},oE:function(){return replaceData},sk:function(){return r},to:function(){return partialMatchKey},yF:function(){return hashQueryKey}});let r="undefined"==typeof window||"Deno"in window;function noop(){}function functionalUpdate(e,t){return"function"==typeof e?e(t):e}function isValidTimeout(e){return"number"==typeof e&&e>=0&&e!==1/0}function timeUntilStale(e,t){return Math.max(e+(t||0)-Date.now(),0)}function parseQueryArgs(e,t,n){return isQueryKey(e)?"function"==typeof t?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function parseMutationArgs(e,t,n){return isQueryKey(e)?"function"==typeof t?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function parseFilterArgs(e,t,n){return isQueryKey(e)?[{...t,queryKey:e},n]:[e||{},t]}function matchQuery(e,t){let{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:u,stale:l}=e;if(isQueryKey(u)){if(r){if(t.queryHash!==hashQueryKeyByOptions(u,t.options))return!1}else{if(!partialDeepEqual(t.queryKey,u))return!1}}if("all"!==n){let e=t.isActive();if("active"===n&&!e||"inactive"===n&&e)return!1}return("boolean"!=typeof l||t.isStale()===l)&&(void 0===i||i===t.state.fetchStatus)&&(!o||!!o(t))}function matchMutation(e,t){let{exact:n,fetching:r,predicate:i,mutationKey:o}=e;if(isQueryKey(o)){if(!t.options.mutationKey)return!1;if(n){if(hashQueryKey(t.options.mutationKey)!==hashQueryKey(o))return!1}else{if(!partialDeepEqual(t.options.mutationKey,o))return!1}}return("boolean"!=typeof r||"loading"===t.state.status===r)&&(!i||!!i(t))}function hashQueryKeyByOptions(e,t){let n=(null==t?void 0:t.queryKeyHashFn)||hashQueryKey;return n(e)}function hashQueryKey(e){return JSON.stringify(e,(e,t)=>isPlainObject(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function partialMatchKey(e,t){return partialDeepEqual(e,t)}function partialDeepEqual(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(n=>!partialDeepEqual(e[n],t[n]))}function shallowEqualObjects(e,t){if(e&&!t||t&&!e)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function isPlainArray(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function isPlainObject(e){if(!hasObjectPrototype(e))return!1;let t=e.constructor;if(void 0===t)return!0;let n=t.prototype;return!!(hasObjectPrototype(n)&&n.hasOwnProperty("isPrototypeOf"))}function hasObjectPrototype(e){return"[object Object]"===Object.prototype.toString.call(e)}function isQueryKey(e){return Array.isArray(e)}function sleep(e){return new Promise(t=>{setTimeout(t,e)})}function scheduleMicrotask(e){sleep(0).then(e)}function getAbortController(){if("function"==typeof AbortController)return new AbortController}function replaceData(e,t,n){return null!=n.isDataEqual&&n.isDataEqual(e,t)?e:"function"==typeof n.structuralSharing?n.structuralSharing(e,t):!1!==n.structuralSharing?function replaceEqualDeep(e,t){if(e===t)return e;let n=isPlainArray(e)&&isPlainArray(t);if(n||isPlainObject(e)&&isPlainObject(t)){let r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,u=n?[]:{},l=0;for(let r=0;r<o;r++){let o=n?r:i[r];u[o]=replaceEqualDeep(e[o],t[o]),u[o]===e[o]&&l++}return r===o&&l===r?e:u}return t}(e,t):t}},165:function(e,t,n){n.d(t,{NL:function(){return useQueryClient},aH:function(){return QueryClientProvider}});var r=n(2265);let i=r.createContext(void 0),o=r.createContext(!1);function getQueryClientContext(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=i),window.ReactQueryClientContext):i)}let useQueryClient=({context:e}={})=>{let t=r.useContext(getQueryClientContext(e,r.useContext(o)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},QueryClientProvider=({client:e,children:t,context:n,contextSharing:i=!1})=>{r.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let u=getQueryClientContext(n,i);return r.createElement(o.Provider,{value:!n&&i},r.createElement(u.Provider,{value:e},t))}}}]);
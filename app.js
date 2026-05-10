(()=>{var Yb=Object.create;var r0=Object.defineProperty;var Zb=Object.getOwnPropertyDescriptor;var Jb=Object.getOwnPropertyNames;var Kb=Object.getPrototypeOf,Qb=Object.prototype.hasOwnProperty;var o0=(e,t)=>()=>(e&&(t=e(e=0)),t);var Xi=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var jb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Jb(t))!Qb.call(e,s)&&s!==n&&r0(e,s,{get:()=>t[s],enumerable:!(i=Zb(t,s))||i.enumerable});return e};var l0=(e,t,n)=>(n=e!=null?Yb(Kb(e)):{},jb(t||!e||!e.__esModule?r0(n,"default",{value:e,enumerable:!0}):n,e));var y0=Xi(It=>{"use strict";var zf=Symbol.for("react.transitional.element"),$b=Symbol.for("react.portal"),tM=Symbol.for("react.fragment"),eM=Symbol.for("react.strict_mode"),nM=Symbol.for("react.profiler"),iM=Symbol.for("react.consumer"),sM=Symbol.for("react.context"),aM=Symbol.for("react.forward_ref"),rM=Symbol.for("react.suspense"),oM=Symbol.for("react.memo"),d0=Symbol.for("react.lazy"),lM=Symbol.for("react.activity"),c0=Symbol.iterator;function cM(e){return e===null||typeof e!="object"?null:(e=c0&&e[c0]||e["@@iterator"],typeof e=="function"?e:null)}var p0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m0=Object.assign,g0={};function nr(e,t,n){this.props=e,this.context=t,this.refs=g0,this.updater=n||p0}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function v0(){}v0.prototype=nr.prototype;function Ff(e,t,n){this.props=e,this.context=t,this.refs=g0,this.updater=n||p0}var Vf=Ff.prototype=new v0;Vf.constructor=Ff;m0(Vf,nr.prototype);Vf.isPureReactComponent=!0;var u0=Array.isArray;function Bf(){}var Se={H:null,A:null,T:null,S:null},_0=Object.prototype.hasOwnProperty;function Gf(e,t,n){var i=n.ref;return{$$typeof:zf,type:e,key:t,ref:i!==void 0?i:null,props:n}}function uM(e,t){return Gf(e.type,t,e.props)}function Hf(e){return typeof e=="object"&&e!==null&&e.$$typeof===zf}function hM(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var h0=/\/+/g;function Pf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hM(""+e.key):t.toString(36)}function fM(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Bf,Bf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function er(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case zf:case $b:r=!0;break;case d0:return r=e._init,er(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Pf(e,0):i,u0(s)?(n="",r!=null&&(n=r.replace(h0,"$&/")+"/"),er(s,t,n,"",function(c){return c})):s!=null&&(Hf(s)&&(s=uM(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(h0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(u0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Pf(i,l),r+=er(i,t,n,a,s);else if(l=cM(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Pf(i,l++),r+=er(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return er(fM(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function ic(e,t,n){if(e==null)return e;var i=[],s=0;return er(e,i,"","",function(a){return t.call(n,a,s++)}),i}function dM(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var f0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pM={map:ic,forEach:function(e,t,n){ic(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ic(e,function(){t++}),t},toArray:function(e){return ic(e,function(t){return t})||[]},only:function(e){if(!Hf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};It.Activity=lM;It.Children=pM;It.Component=nr;It.Fragment=tM;It.Profiler=nM;It.PureComponent=Ff;It.StrictMode=eM;It.Suspense=rM;It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Se;It.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Se.H.useMemoCache(e)}};It.cache=function(e){return function(){return e.apply(null,arguments)}};It.cacheSignal=function(){return null};It.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=m0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!_0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Gf(e.type,s,i)};It.createContext=function(e){return e={$$typeof:sM,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:iM,_context:e},e};It.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)_0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Gf(e,a,s)};It.createRef=function(){return{current:null}};It.forwardRef=function(e){return{$$typeof:aM,render:e}};It.isValidElement=Hf;It.lazy=function(e){return{$$typeof:d0,_payload:{_status:-1,_result:e},_init:dM}};It.memo=function(e,t){return{$$typeof:oM,type:e,compare:t===void 0?null:t}};It.startTransition=function(e){var t=Se.T,n={};Se.T=n;try{var i=e(),s=Se.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Bf,f0)}catch(a){f0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Se.T=t}};It.unstable_useCacheRefresh=function(){return Se.H.useCacheRefresh()};It.use=function(e){return Se.H.use(e)};It.useActionState=function(e,t,n){return Se.H.useActionState(e,t,n)};It.useCallback=function(e,t){return Se.H.useCallback(e,t)};It.useContext=function(e){return Se.H.useContext(e)};It.useDebugValue=function(){};It.useDeferredValue=function(e,t){return Se.H.useDeferredValue(e,t)};It.useEffect=function(e,t){return Se.H.useEffect(e,t)};It.useEffectEvent=function(e){return Se.H.useEffectEvent(e)};It.useId=function(){return Se.H.useId()};It.useImperativeHandle=function(e,t,n){return Se.H.useImperativeHandle(e,t,n)};It.useInsertionEffect=function(e,t){return Se.H.useInsertionEffect(e,t)};It.useLayoutEffect=function(e,t){return Se.H.useLayoutEffect(e,t)};It.useMemo=function(e,t){return Se.H.useMemo(e,t)};It.useOptimistic=function(e,t){return Se.H.useOptimistic(e,t)};It.useReducer=function(e,t,n){return Se.H.useReducer(e,t,n)};It.useRef=function(e){return Se.H.useRef(e)};It.useState=function(e){return Se.H.useState(e)};It.useSyncExternalStore=function(e,t,n){return Se.H.useSyncExternalStore(e,t,n)};It.useTransition=function(){return Se.H.useTransition()};It.version="19.2.6"});var sc=Xi((G3,x0)=>{"use strict";x0.exports=y0()});var D0=Xi(Ae=>{"use strict";function qf(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<ac(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ei(e){return e.length===0?null:e[0]}function oc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>ac(o,n))l<s&&0>ac(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>ac(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function ac(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ae.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(S0=performance,Ae.unstable_now=function(){return S0.now()}):(kf=Date,b0=kf.now(),Ae.unstable_now=function(){return kf.now()-b0});var S0,kf,b0,qi=[],Ts=[],mM=1,jn=null,hn=3,Yf=!1,yo=!1,xo=!1,Zf=!1,E0=typeof setTimeout=="function"?setTimeout:null,A0=typeof clearTimeout=="function"?clearTimeout:null,M0=typeof setImmediate<"u"?setImmediate:null;function rc(e){for(var t=Ei(Ts);t!==null;){if(t.callback===null)oc(Ts);else if(t.startTime<=e)oc(Ts),t.sortIndex=t.expirationTime,qf(qi,t);else break;t=Ei(Ts)}}function Jf(e){if(xo=!1,rc(e),!yo)if(Ei(qi)!==null)yo=!0,sr||(sr=!0,ir());else{var t=Ei(Ts);t!==null&&Kf(Jf,t.startTime-e)}}var sr=!1,So=-1,w0=5,C0=-1;function R0(){return Zf?!0:!(Ae.unstable_now()-C0<w0)}function Wf(){if(Zf=!1,sr){var e=Ae.unstable_now();C0=e;var t=!0;try{t:{yo=!1,xo&&(xo=!1,A0(So),So=-1),Yf=!0;var n=hn;try{e:{for(rc(e),jn=Ei(qi);jn!==null&&!(jn.expirationTime>e&&R0());){var i=jn.callback;if(typeof i=="function"){jn.callback=null,hn=jn.priorityLevel;var s=i(jn.expirationTime<=e);if(e=Ae.unstable_now(),typeof s=="function"){jn.callback=s,rc(e),t=!0;break e}jn===Ei(qi)&&oc(qi),rc(e)}else oc(qi);jn=Ei(qi)}if(jn!==null)t=!0;else{var a=Ei(Ts);a!==null&&Kf(Jf,a.startTime-e),t=!1}}break t}finally{jn=null,hn=n,Yf=!1}t=void 0}}finally{t?ir():sr=!1}}}var ir;typeof M0=="function"?ir=function(){M0(Wf)}:typeof MessageChannel<"u"?(Xf=new MessageChannel,T0=Xf.port2,Xf.port1.onmessage=Wf,ir=function(){T0.postMessage(null)}):ir=function(){E0(Wf,0)};var Xf,T0;function Kf(e,t){So=E0(function(){e(Ae.unstable_now())},t)}Ae.unstable_IdlePriority=5;Ae.unstable_ImmediatePriority=1;Ae.unstable_LowPriority=4;Ae.unstable_NormalPriority=3;Ae.unstable_Profiling=null;Ae.unstable_UserBlockingPriority=2;Ae.unstable_cancelCallback=function(e){e.callback=null};Ae.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w0=0<e?Math.floor(1e3/e):5};Ae.unstable_getCurrentPriorityLevel=function(){return hn};Ae.unstable_next=function(e){switch(hn){case 1:case 2:case 3:var t=3;break;default:t=hn}var n=hn;hn=t;try{return e()}finally{hn=n}};Ae.unstable_requestPaint=function(){Zf=!0};Ae.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=hn;hn=e;try{return t()}finally{hn=n}};Ae.unstable_scheduleCallback=function(e,t,n){var i=Ae.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:mM++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,qf(Ts,e),Ei(qi)===null&&e===Ei(Ts)&&(xo?(A0(So),So=-1):xo=!0,Kf(Jf,n-i))):(e.sortIndex=s,qf(qi,e),yo||Yf||(yo=!0,sr||(sr=!0,ir()))),e};Ae.unstable_shouldYield=R0;Ae.unstable_wrapCallback=function(e){var t=hn;return function(){var n=hn;hn=t;try{return e.apply(this,arguments)}finally{hn=n}}}});var U0=Xi((k3,N0)=>{"use strict";N0.exports=D0()});var I0=Xi(gn=>{"use strict";var gM=sc();function L0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Es(){}var mn={d:{f:Es,r:function(){throw Error(L0(522))},D:Es,C:Es,L:Es,m:Es,X:Es,S:Es,M:Es},p:0,findDOMNode:null},vM=Symbol.for("react.portal");function _M(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vM,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var bo=gM.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function lc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}gn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=mn;gn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(L0(299));return _M(e,t,null,n)};gn.flushSync=function(e){var t=bo.T,n=mn.p;try{if(bo.T=null,mn.p=2,e)return e()}finally{bo.T=t,mn.p=n,mn.d.f()}};gn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,mn.d.C(e,t))};gn.prefetchDNS=function(e){typeof e=="string"&&mn.d.D(e)};gn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=lc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&mn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};gn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=lc(t.as,t.crossOrigin);mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&mn.d.M(e)};gn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=lc(n,t.crossOrigin);mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};gn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=lc(t.as,t.crossOrigin);mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else mn.d.m(e)};gn.requestFormReset=function(e){mn.d.r(e)};gn.unstable_batchedUpdates=function(e,t){return e(t)};gn.useFormState=function(e,t,n){return bo.H.useFormState(e,t,n)};gn.useFormStatus=function(){return bo.H.useHostTransitionStatus()};gn.version="19.2.6"});var B0=Xi((X3,P0)=>{"use strict";function O0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O0)}catch(e){console.error(e)}}O0(),P0.exports=I0()});var Jx=Xi(Lu=>{"use strict";var Je=U0(),c_=sc(),yM=B0();function J(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u_(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ll(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h_(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f_(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function z0(e){if(ll(e)!==e)throw Error(J(188))}function xM(e){var t=e.alternate;if(!t){if(t=ll(e),t===null)throw Error(J(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return z0(s),e;if(a===i)return z0(s),t;a=a.sibling}throw Error(J(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?e:t}function d_(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d_(e),t!==null)return t;e=e.sibling}return null}var Te=Object.assign,SM=Symbol.for("react.element"),cc=Symbol.for("react.transitional.element"),Do=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),p_=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),m_=Symbol.for("react.consumer"),ts=Symbol.for("react.context"),Ep=Symbol.for("react.forward_ref"),Nd=Symbol.for("react.suspense"),Ud=Symbol.for("react.suspense_list"),Ap=Symbol.for("react.memo"),As=Symbol.for("react.lazy"),Ld=Symbol.for("react.activity"),bM=Symbol.for("react.memo_cache_sentinel"),F0=Symbol.iterator;function Mo(e){return e===null||typeof e!="object"?null:(e=F0&&e[F0]||e["@@iterator"],typeof e=="function"?e:null)}var MM=Symbol.for("react.client.reference");function Id(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===MM?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case Dd:return"Profiler";case p_:return"StrictMode";case Nd:return"Suspense";case Ud:return"SuspenseList";case Ld:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Do:return"Portal";case ts:return e.displayName||"Context";case m_:return(e._context.displayName||"Context")+".Consumer";case Ep:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ap:return t=e.displayName||null,t!==null?t:Id(e.type)||"Memo";case As:t=e._payload,e=e._init;try{return Id(e(t))}catch{}}return null}var No=Array.isArray,Dt=c_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=yM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ta={pending:!1,data:null,method:null,action:null},Od=[],hr=-1;function Di(e){return{current:e}}function tn(e){0>hr||(e.current=Od[hr],Od[hr]=null,hr--)}function ye(e,t){hr++,Od[hr]=e.current,e.current=t}var Ri=Di(null),Zo=Di(null),Bs=Di(null),Hc=Di(null);function kc(e,t){switch(ye(Bs,t),ye(Zo,e),ye(Ri,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qv(t),e=Ox(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tn(Ri),ye(Ri,e)}function Rr(){tn(Ri),tn(Zo),tn(Bs)}function Pd(e){e.memoizedState!==null&&ye(Hc,e);var t=Ri.current,n=Ox(t,e.type);t!==n&&(ye(Zo,e),ye(Ri,n))}function Wc(e){Zo.current===e&&(tn(Ri),tn(Zo)),Hc.current===e&&(tn(Hc),al._currentValue=Ta)}var Qf,V0;function xa(e){if(Qf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qf=t&&t[1]||"",V0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qf+e+V0}var jf=!1;function $f(e,t){if(!e||jf)return"";jf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(d){var u=d}Reflect.construct(e,[],p)}else{try{p.call()}catch(d){u=d}e.call(p.prototype)}}else{try{throw Error()}catch(d){u=d}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(d){if(d&&u&&typeof d.stack=="string")return[d.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{jf=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?xa(n):""}function TM(e,t){switch(e.tag){case 26:case 27:case 5:return xa(e.type);case 16:return xa("Lazy");case 13:return e.child!==t&&t!==null?xa("Suspense Fallback"):xa("Suspense");case 19:return xa("SuspenseList");case 0:case 15:return $f(e.type,!1);case 11:return $f(e.type.render,!1);case 1:return $f(e.type,!0);case 31:return xa("Activity");default:return""}}function G0(e){try{var t="",n=null;do t+=TM(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Bd=Object.prototype.hasOwnProperty,wp=Je.unstable_scheduleCallback,td=Je.unstable_cancelCallback,EM=Je.unstable_shouldYield,AM=Je.unstable_requestPaint,Bn=Je.unstable_now,wM=Je.unstable_getCurrentPriorityLevel,g_=Je.unstable_ImmediatePriority,v_=Je.unstable_UserBlockingPriority,Xc=Je.unstable_NormalPriority,CM=Je.unstable_LowPriority,__=Je.unstable_IdlePriority,RM=Je.log,DM=Je.unstable_setDisableYieldValue,cl=null,zn=null;function Us(e){if(typeof RM=="function"&&DM(e),zn&&typeof zn.setStrictMode=="function")try{zn.setStrictMode(cl,e)}catch{}}var Fn=Math.clz32?Math.clz32:LM,NM=Math.log,UM=Math.LN2;function LM(e){return e>>>=0,e===0?32:31-(NM(e)/UM|0)|0}var uc=256,hc=262144,fc=4194304;function Sa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Sa(i):(r&=o,r!==0?s=Sa(r):n||(n=o&~e,n!==0&&(s=Sa(n))))):(o=i&~a,o!==0?s=Sa(o):r!==0?s=Sa(r):n||(n=i&~e,n!==0&&(s=Sa(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function ul(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function IM(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y_(){var e=fc;return fc<<=1,(fc&62914560)===0&&(fc=4194304),e}function ed(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function OM(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Fn(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&x_(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function x_(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Fn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function S_(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Fn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function b_(e,t){var n=t&-t;return n=(n&42)!==0?1:Cp(n),(n&(e.suspendedLanes|t))!==0?0:n}function Cp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function M_(){var e=ne.p;return e!==0?e:(e=window.event,e===void 0?32:qx(e.type))}function H0(e,t){var n=ne.p;try{return ne.p=e,t()}finally{ne.p=n}}var Ks=Math.random().toString(36).slice(2),an="__reactFiber$"+Ks,En="__reactProps$"+Ks,Vr="__reactContainer$"+Ks,zd="__reactEvents$"+Ks,PM="__reactListeners$"+Ks,BM="__reactHandles$"+Ks,k0="__reactResources$"+Ks,fl="__reactMarker$"+Ks;function Dp(e){delete e[an],delete e[En],delete e[zd],delete e[PM],delete e[BM]}function fr(e){var t=e[an];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vr]||n[an]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qv(e);e!==null;){if(n=e[an])return n;e=Qv(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){if(e=e[an]||e[Vr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Uo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(J(33))}function br(e){var t=e[k0];return t||(t=e[k0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $e(e){e[fl]=!0}var T_=new Set,E_={};function Ia(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(E_[e]=t,e=0;e<t.length;e++)T_.add(t[e])}var zM=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),W0={},X0={};function FM(e){return Bd.call(X0,e)?!0:Bd.call(W0,e)?!1:zM.test(e)?X0[e]=!0:(W0[e]=!0,!1)}function wc(e,t,n){if(FM(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function dc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Yi(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ti(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function A_(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function VM(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fd(e){if(!e._valueTracker){var t=A_(e)?"checked":"value";e._valueTracker=VM(e,t,""+e[t])}}function w_(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=A_(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function qc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var GM=/[\n"\\]/g;function ii(e){return e.replace(GM,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Vd(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ti(t)):e.value!==""+ti(t)&&(e.value=""+ti(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Gd(e,r,ti(t)):n!=null?Gd(e,r,ti(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ti(o):e.removeAttribute("name")}function C_(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Fd(e);return}n=n!=null?""+ti(n):"",t=t!=null?""+ti(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Fd(e)}function Gd(e,t,n){t==="number"&&qc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Mr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ti(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function R_(e,t,n){if(t!=null&&(t=""+ti(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ti(n):""}function D_(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(J(92));if(No(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ti(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Fd(e)}function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var HM=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function q0(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||HM.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function N_(e,t,n){if(t!=null&&typeof t!="object")throw Error(J(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&q0(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&q0(e,a,t[a])}function Np(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),WM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cc(e){return WM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function es(){}var Hd=null;function Up(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,Tr=null;function Y0(e){var t=Gr(e);if(t&&(e=t.stateNode)){var n=e[En]||null;t:switch(e=t.stateNode,t.type){case"input":if(Vd(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ii(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[En]||null;if(!s)throw Error(J(90));Vd(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&w_(i)}break t;case"textarea":R_(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}}}var nd=!1;function U_(e,t,n){if(nd)return e(t,n);nd=!0;try{var i=e(t);return i}finally{if(nd=!1,(dr!==null||Tr!==null)&&(Ru(),dr&&(t=dr,e=Tr,Tr=dr=null,Y0(t),e)))for(t=0;t<e.length;t++)Y0(e[t])}}function Jo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[En]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(J(231,t,typeof n));return n}var rs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kd=!1;if(rs)try{ar={},Object.defineProperty(ar,"passive",{get:function(){kd=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{kd=!1}var ar,Ls=null,Lp=null,Rc=null;function L_(){if(Rc)return Rc;var e,t=Lp,n=t.length,i,s="value"in Ls?Ls.value:Ls.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Rc=s.slice(e,1<i?1-i:void 0)}function Dc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pc(){return!0}function Z0(){return!1}function An(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?pc:Z0,this.isPropagationStopped=Z0,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pc)},persist:function(){},isPersistent:pc}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=An(Oa),dl=Te({},Oa,{view:0,detail:0}),XM=An(dl),id,sd,To,yu=Te({},dl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ip,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(id=e.screenX-To.screenX,sd=e.screenY-To.screenY):sd=id=0,To=e),id)},movementY:function(e){return"movementY"in e?e.movementY:sd}}),J0=An(yu),qM=Te({},yu,{dataTransfer:0}),YM=An(qM),ZM=Te({},dl,{relatedTarget:0}),ad=An(ZM),JM=Te({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),KM=An(JM),QM=Te({},Oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jM=An(QM),$M=Te({},Oa,{data:0}),K0=An($M),t1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=n1[e])?!!t[e]:!1}function Ip(){return i1}var s1=Te({},dl,{key:function(e){if(e.key){var t=t1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ip,charCode:function(e){return e.type==="keypress"?Dc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),a1=An(s1),r1=Te({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Q0=An(r1),o1=Te({},dl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ip}),l1=An(o1),c1=Te({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),u1=An(c1),h1=Te({},yu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f1=An(h1),d1=Te({},Oa,{newState:0,oldState:0}),p1=An(d1),m1=[9,13,27,32],Op=rs&&"CompositionEvent"in window,Oo=null;rs&&"documentMode"in document&&(Oo=document.documentMode);var g1=rs&&"TextEvent"in window&&!Oo,I_=rs&&(!Op||Oo&&8<Oo&&11>=Oo),j0=" ",$0=!1;function O_(e,t){switch(e){case"keyup":return m1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function v1(e,t){switch(e){case"compositionend":return P_(t);case"keypress":return t.which!==32?null:($0=!0,j0);case"textInput":return e=t.data,e===j0&&$0?null:e;default:return null}}function _1(e,t){if(pr)return e==="compositionend"||!Op&&O_(e,t)?(e=L_(),Rc=Lp=Ls=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return I_&&t.locale!=="ko"?null:t.data;default:return null}}var y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!y1[e.type]:t==="textarea"}function B_(e,t,n,i){dr?Tr?Tr.push(i):Tr=[i]:dr=i,t=uu(t,"onChange"),0<t.length&&(n=new _u("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Po=null,Ko=null;function x1(e){Ux(e,0)}function xu(e){var t=Uo(e);if(w_(t))return e}function ev(e,t){if(e==="change")return t}var z_=!1;rs&&(rs?(gc="oninput"in document,gc||(rd=document.createElement("div"),rd.setAttribute("oninput","return;"),gc=typeof rd.oninput=="function"),mc=gc):mc=!1,z_=mc&&(!document.documentMode||9<document.documentMode));var mc,gc,rd;function nv(){Po&&(Po.detachEvent("onpropertychange",F_),Ko=Po=null)}function F_(e){if(e.propertyName==="value"&&xu(Ko)){var t=[];B_(t,Ko,e,Up(e)),U_(x1,t)}}function S1(e,t,n){e==="focusin"?(nv(),Po=t,Ko=n,Po.attachEvent("onpropertychange",F_)):e==="focusout"&&nv()}function b1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xu(Ko)}function M1(e,t){if(e==="click")return xu(t)}function T1(e,t){if(e==="input"||e==="change")return xu(t)}function E1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gn=typeof Object.is=="function"?Object.is:E1;function Qo(e,t){if(Gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Bd.call(t,s)||!Gn(e[s],t[s]))return!1}return!0}function iv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sv(e,t){var n=iv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=iv(n)}}function V_(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?V_(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function G_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qc(e.document)}return t}function Pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var A1=rs&&"documentMode"in document&&11>=document.documentMode,mr=null,Wd=null,Bo=null,Xd=!1;function av(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xd||mr==null||mr!==qc(i)||(i=mr,"selectionStart"in i&&Pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bo&&Qo(Bo,i)||(Bo=i,i=uu(Wd,"onSelect"),0<i.length&&(t=new _u("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=mr)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionrun:ya("Transition","TransitionRun"),transitionstart:ya("Transition","TransitionStart"),transitioncancel:ya("Transition","TransitionCancel"),transitionend:ya("Transition","TransitionEnd")},od={},H_={};rs&&(H_=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Pa(e){if(od[e])return od[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in H_)return od[e]=t[n];return e}var k_=Pa("animationend"),W_=Pa("animationiteration"),X_=Pa("animationstart"),w1=Pa("transitionrun"),C1=Pa("transitionstart"),R1=Pa("transitioncancel"),q_=Pa("transitionend"),Y_=new Map,qd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qd.push("scrollEnd");function mi(e,t){Y_.set(e,t),Ia(t,[e])}var Yc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$n=[],vr=0,Bp=0;function Su(){for(var e=vr,t=Bp=vr=0;t<e;){var n=$n[t];$n[t++]=null;var i=$n[t];$n[t++]=null;var s=$n[t];$n[t++]=null;var a=$n[t];if($n[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Z_(n,s,a)}}function bu(e,t,n,i){$n[vr++]=e,$n[vr++]=t,$n[vr++]=n,$n[vr++]=i,Bp|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function zp(e,t,n,i){return bu(e,t,n,i),Zc(e)}function Ba(e,t){return bu(e,null,null,t),Zc(e)}function Z_(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Fn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Zc(e){if(50<qo)throw qo=0,dp=null,Error(J(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _r={};function D1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(e,t,n,i){return new D1(e,t,n,i)}function Fp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function is(e,t){var n=e.alternate;return n===null?(n=On(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function J_(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Nc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Fp(e)&&(r=1);else if(typeof e=="string")r=LT(e,n,Ri.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Ld:return e=On(31,n,t,s),e.elementType=Ld,e.lanes=a,e;case ur:return Ea(n.children,s,a,t);case p_:r=8,s|=24;break;case Dd:return e=On(12,n,t,s|2),e.elementType=Dd,e.lanes=a,e;case Nd:return e=On(13,n,t,s),e.elementType=Nd,e.lanes=a,e;case Ud:return e=On(19,n,t,s),e.elementType=Ud,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ts:r=10;break t;case m_:r=9;break t;case Ep:r=11;break t;case Ap:r=14;break t;case As:r=16,i=null;break t}r=29,n=Error(J(130,e===null?"null":typeof e,"")),i=null}return t=On(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ea(e,t,n,i){return e=On(7,e,i,t),e.lanes=n,e}function ld(e,t,n){return e=On(6,e,null,t),e.lanes=n,e}function K_(e){var t=On(18,null,null,0);return t.stateNode=e,t}function cd(e,t,n){return t=On(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rv=new WeakMap;function si(e,t){if(typeof e=="object"&&e!==null){var n=rv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:G0(t)},rv.set(e,t),t)}return{value:e,source:t,stack:G0(t)}}var yr=[],xr=0,Jc=null,jo=0,ei=[],ni=0,qs=null,Ai=1,wi="";function ji(e,t){yr[xr++]=jo,yr[xr++]=Jc,Jc=e,jo=t}function Q_(e,t,n){ei[ni++]=Ai,ei[ni++]=wi,ei[ni++]=qs,qs=e;var i=Ai;e=wi;var s=32-Fn(i)-1;i&=~(1<<s),n+=1;var a=32-Fn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ai=1<<32-Fn(t)+s|n<<s|i,wi=a+e}else Ai=1<<a|n<<s|i,wi=e}function Vp(e){e.return!==null&&(ji(e,1),Q_(e,1,0))}function Gp(e){for(;e===Jc;)Jc=yr[--xr],yr[xr]=null,jo=yr[--xr],yr[xr]=null;for(;e===qs;)qs=ei[--ni],ei[ni]=null,wi=ei[--ni],ei[ni]=null,Ai=ei[--ni],ei[ni]=null}function j_(e,t){ei[ni++]=Ai,ei[ni++]=wi,ei[ni++]=qs,Ai=t.id,wi=t.overflow,qs=e}var rn=null,Me=null,Kt=!1,zs=null,ai=!1,Yd=Error(J(519));function Ys(e){var t=Error(J(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $o(si(t,e)),Yd}function ov(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[an]=e,t[En]=i,n){case"dialog":Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":case"embed":Wt("load",t);break;case"video":case"audio":for(n=0;n<il.length;n++)Wt(il[n],t);break;case"source":Wt("error",t);break;case"img":case"image":case"link":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"input":Wt("invalid",t),C_(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Wt("invalid",t);break;case"textarea":Wt("invalid",t),D_(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Ix(t.textContent,n)?(i.popover!=null&&(Wt("beforetoggle",t),Wt("toggle",t)),i.onScroll!=null&&Wt("scroll",t),i.onScrollEnd!=null&&Wt("scrollend",t),i.onClick!=null&&(t.onclick=es),t=!0):t=!1,t||Ys(e,!0)}function lv(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:rn=rn.return}}function rr(e){if(e!==rn)return!1;if(!Kt)return lv(e),Kt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||_p(e.type,e.memoizedProps)),n=!n),n&&Me&&Ys(e),lv(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Me=Kv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(317));Me=Kv(e)}else t===27?(t=Me,Qs(e.type)?(e=bp,bp=null,Me=e):Me=t):Me=rn?oi(e.stateNode.nextSibling):null;return!0}function Ra(){Me=rn=null,Kt=!1}function ud(){var e=zs;return e!==null&&(Mn===null?Mn=e:Mn.push.apply(Mn,e),zs=null),e}function $o(e){zs===null?zs=[e]:zs.push(e)}var Zd=Di(null),za=null,ns=null;function Cs(e,t,n){ye(Zd,t._currentValue),t._currentValue=n}function ss(e){e._currentValue=Zd.current,tn(Zd)}function Jd(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Kd(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Jd(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(J(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Jd(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Hr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=s.type;Gn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Hc.current){if(r=s.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(al):e=[al])}s=s.return}e!==null&&Kd(t,e,n,i),t.flags|=262144}function Kc(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){za=e,ns=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function on(e){return $_(za,e)}function vc(e,t){return za===null&&Da(e),$_(e,t)}function $_(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ns===null){if(e===null)throw Error(J(308));ns=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ns=ns.next=t;return n}var N1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},U1=Je.unstable_scheduleCallback,L1=Je.unstable_NormalPriority,He={$$typeof:ts,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hp(){return{controller:new N1,data:new Map,refCount:0}}function pl(e){e.refCount--,e.refCount===0&&U1(L1,function(){e.controller.abort()})}var zo=null,Qd=0,Ur=0,Er=null;function I1(e,t){if(zo===null){var n=zo=[];Qd=0,Ur=dm(),Er={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Qd++,t.then(cv,cv),t}function cv(){if(--Qd===0&&zo!==null){Er!==null&&(Er.status="fulfilled");var e=zo;zo=null,Ur=0,Er=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function O1(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var uv=Dt.S;Dt.S=function(e,t){dx=Bn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&I1(e,t),uv!==null&&uv(e,t)};var Aa=Di(null);function kp(){var e=Aa.current;return e!==null?e:ge.pooledCache}function Uc(e,t){t===null?ye(Aa,Aa.current):ye(Aa,t.pool)}function ty(){var e=kp();return e===null?null:{parent:He._currentValue,pool:e}}var kr=Error(J(460)),Wp=Error(J(474)),Mu=Error(J(542)),Qc={then:function(){}};function hv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ey(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(es,es),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dv(e),e;default:if(typeof t.status=="string")t.then(es,es);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(J(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dv(e),e}throw wa=t,kr}}function ba(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(wa=n,kr):n}}var wa=null;function fv(){if(wa===null)throw Error(J(459));var e=wa;return wa=null,e}function dv(e){if(e===kr||e===Mu)throw Error(J(483))}var Ar=null,tl=0;function _c(e){var t=tl;return tl+=1,Ar===null&&(Ar=[]),ey(Ar,e,t)}function Eo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function yc(e,t){throw t.$$typeof===SM?Error(J(525)):(e=Object.prototype.toString.call(t),Error(J(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ny(e){function t(f,m){if(e){var x=f.deletions;x===null?(f.deletions=[m],f.flags|=16):x.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function s(f,m){return f=is(f,m),f.index=0,f.sibling=null,f}function a(f,m,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<m?(f.flags|=67108866,m):x):(f.flags|=67108866,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,m,x,b){return m===null||m.tag!==6?(m=ld(x,f.mode,b),m.return=f,m):(m=s(m,x),m.return=f,m)}function l(f,m,x,b){var R=x.type;return R===ur?h(f,m,x.props.children,b,x.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===As&&ba(R)===m.type)?(m=s(m,x.props),Eo(m,x),m.return=f,m):(m=Nc(x.type,x.key,x.props,null,f.mode,b),Eo(m,x),m.return=f,m)}function c(f,m,x,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=cd(x,f.mode,b),m.return=f,m):(m=s(m,x.children||[]),m.return=f,m)}function h(f,m,x,b,R){return m===null||m.tag!==7?(m=Ea(x,f.mode,b,R),m.return=f,m):(m=s(m,x),m.return=f,m)}function p(f,m,x){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=ld(""+m,f.mode,x),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cc:return x=Nc(m.type,m.key,m.props,null,f.mode,x),Eo(x,m),x.return=f,x;case Do:return m=cd(m,f.mode,x),m.return=f,m;case As:return m=ba(m),p(f,m,x)}if(No(m)||Mo(m))return m=Ea(m,f.mode,x,null),m.return=f,m;if(typeof m.then=="function")return p(f,_c(m),x);if(m.$$typeof===ts)return p(f,vc(f,m),x);yc(f,m)}return null}function u(f,m,x,b){var R=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return R!==null?null:o(f,m,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case cc:return x.key===R?l(f,m,x,b):null;case Do:return x.key===R?c(f,m,x,b):null;case As:return x=ba(x),u(f,m,x,b)}if(No(x)||Mo(x))return R!==null?null:h(f,m,x,b,null);if(typeof x.then=="function")return u(f,m,_c(x),b);if(x.$$typeof===ts)return u(f,m,vc(f,x),b);yc(f,x)}return null}function d(f,m,x,b,R){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return f=f.get(x)||null,o(m,f,""+b,R);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case cc:return f=f.get(b.key===null?x:b.key)||null,l(m,f,b,R);case Do:return f=f.get(b.key===null?x:b.key)||null,c(m,f,b,R);case As:return b=ba(b),d(f,m,x,b,R)}if(No(b)||Mo(b))return f=f.get(x)||null,h(m,f,b,R,null);if(typeof b.then=="function")return d(f,m,x,_c(b),R);if(b.$$typeof===ts)return d(f,m,x,vc(m,b),R);yc(m,b)}return null}function _(f,m,x,b){for(var R=null,E=null,C=m,S=m=0,w=null;C!==null&&S<x.length;S++){C.index>S?(w=C,C=null):w=C.sibling;var N=u(f,C,x[S],b);if(N===null){C===null&&(C=w);break}e&&C&&N.alternate===null&&t(f,C),m=a(N,m,S),E===null?R=N:E.sibling=N,E=N,C=w}if(S===x.length)return n(f,C),Kt&&ji(f,S),R;if(C===null){for(;S<x.length;S++)C=p(f,x[S],b),C!==null&&(m=a(C,m,S),E===null?R=C:E.sibling=C,E=C);return Kt&&ji(f,S),R}for(C=i(C);S<x.length;S++)w=d(C,f,S,x[S],b),w!==null&&(e&&w.alternate!==null&&C.delete(w.key===null?S:w.key),m=a(w,m,S),E===null?R=w:E.sibling=w,E=w);return e&&C.forEach(function(D){return t(f,D)}),Kt&&ji(f,S),R}function T(f,m,x,b){if(x==null)throw Error(J(151));for(var R=null,E=null,C=m,S=m=0,w=null,N=x.next();C!==null&&!N.done;S++,N=x.next()){C.index>S?(w=C,C=null):w=C.sibling;var D=u(f,C,N.value,b);if(D===null){C===null&&(C=w);break}e&&C&&D.alternate===null&&t(f,C),m=a(D,m,S),E===null?R=D:E.sibling=D,E=D,C=w}if(N.done)return n(f,C),Kt&&ji(f,S),R;if(C===null){for(;!N.done;S++,N=x.next())N=p(f,N.value,b),N!==null&&(m=a(N,m,S),E===null?R=N:E.sibling=N,E=N);return Kt&&ji(f,S),R}for(C=i(C);!N.done;S++,N=x.next())N=d(C,f,S,N.value,b),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?S:N.key),m=a(N,m,S),E===null?R=N:E.sibling=N,E=N);return e&&C.forEach(function(B){return t(f,B)}),Kt&&ji(f,S),R}function g(f,m,x,b){if(typeof x=="object"&&x!==null&&x.type===ur&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case cc:t:{for(var R=x.key;m!==null;){if(m.key===R){if(R=x.type,R===ur){if(m.tag===7){n(f,m.sibling),b=s(m,x.props.children),b.return=f,f=b;break t}}else if(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===As&&ba(R)===m.type){n(f,m.sibling),b=s(m,x.props),Eo(b,x),b.return=f,f=b;break t}n(f,m);break}else t(f,m);m=m.sibling}x.type===ur?(b=Ea(x.props.children,f.mode,b,x.key),b.return=f,f=b):(b=Nc(x.type,x.key,x.props,null,f.mode,b),Eo(b,x),b.return=f,f=b)}return r(f);case Do:t:{for(R=x.key;m!==null;){if(m.key===R)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(f,m.sibling),b=s(m,x.children||[]),b.return=f,f=b;break t}else{n(f,m);break}else t(f,m);m=m.sibling}b=cd(x,f.mode,b),b.return=f,f=b}return r(f);case As:return x=ba(x),g(f,m,x,b)}if(No(x))return _(f,m,x,b);if(Mo(x)){if(R=Mo(x),typeof R!="function")throw Error(J(150));return x=R.call(x),T(f,m,x,b)}if(typeof x.then=="function")return g(f,m,_c(x),b);if(x.$$typeof===ts)return g(f,m,vc(f,x),b);yc(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,m!==null&&m.tag===6?(n(f,m.sibling),b=s(m,x),b.return=f,f=b):(n(f,m),b=ld(x,f.mode,b),b.return=f,f=b),r(f)):n(f,m)}return function(f,m,x,b){try{tl=0;var R=g(f,m,x,b);return Ar=null,R}catch(C){if(C===kr||C===Mu)throw C;var E=On(29,C,null,f.mode);return E.lanes=b,E.return=f,E}}}var Na=ny(!0),iy=ny(!1),ws=!1;function Xp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ee&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Zc(e),Z_(e,null,n),t}return bu(e,i,t,n),Zc(e)}function Fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,S_(e,n)}}function hd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $d=!1;function Vo(){if($d){var e=Er;if(e!==null)throw e}}function Go(e,t,n,i){$d=!1;var s=e.updateQueue;ws=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Zt&u)===u:(i&u)===u){u!==0&&u===Ur&&($d=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,T=o;u=t;var g=n;switch(T.tag){case 1:if(_=T.payload,typeof _=="function"){p=_.call(g,p,u);break t}p=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=T.payload,u=typeof _=="function"?_.call(g,p,u):_,u==null)break t;p=Te({},p,u);break t;case 2:ws=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);h===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),Js|=r,e.lanes=r,e.memoizedState=p}}function sy(e,t){if(typeof e!="function")throw Error(J(191,e));e.call(t)}function ay(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)sy(n[e],t)}var Lr=Di(null),jc=Di(0);function pv(e,t){e=us,ye(jc,e),ye(Lr,t),us=e|t.baseLanes}function tp(){ye(jc,us),ye(Lr,Lr.current)}function qp(){us=jc.current,tn(Lr),tn(jc)}var Hn=Di(null),ri=null;function Rs(e){var t=e.alternate;ye(ze,ze.current&1),ye(Hn,e),ri===null&&(t===null||Lr.current!==null||t.memoizedState!==null)&&(ri=e)}function ep(e){ye(ze,ze.current),ye(Hn,e),ri===null&&(ri=e)}function ry(e){e.tag===22?(ye(ze,ze.current),ye(Hn,e),ri===null&&(ri=e)):Ds(e)}function Ds(){ye(ze,ze.current),ye(Hn,Hn.current)}function In(e){tn(Hn),ri===e&&(ri=null),tn(ze)}var ze=Di(0);function $c(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||xp(n)||Sp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var os=0,Bt=null,de=null,Ve=null,tu=!1,wr=!1,Ua=!1,eu=0,el=0,Cr=null,P1=0;function Ue(){throw Error(J(321))}function Yp(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Zp(e,t,n,i,s,a){return os=a,Bt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dt.H=e===null||e.memoizedState===null?By:am,Ua=!1,a=n(i,s),Ua=!1,wr&&(a=ly(t,n,i,s)),oy(e),a}function oy(e){Dt.H=nl;var t=de!==null&&de.next!==null;if(os=0,Ve=de=Bt=null,tu=!1,el=0,Cr=null,t)throw Error(J(300));e===null||ke||(e=e.dependencies,e!==null&&Kc(e)&&(ke=!0))}function ly(e,t,n,i){Bt=e;var s=0;do{if(wr&&(Cr=null),el=0,wr=!1,25<=s)throw Error(J(301));if(s+=1,Ve=de=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Dt.H=zy,a=t(n,i)}while(wr);return a}function B1(){var e=Dt.H,t=e.useState()[0];return t=typeof t.then=="function"?ml(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Bt.flags|=1024),t}function Jp(){var e=eu!==0;return eu=0,e}function Kp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Qp(e){if(tu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}tu=!1}os=0,Ve=de=Bt=null,wr=!1,el=eu=0,Cr=null}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Bt.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function Fe(){if(de===null){var e=Bt.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Ve===null?Bt.memoizedState:Ve.next;if(t!==null)Ve=t,de=e;else{if(e===null)throw Bt.alternate===null?Error(J(467)):Error(J(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Ve===null?Bt.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ml(e){var t=el;return el+=1,Cr===null&&(Cr=[]),e=ey(Cr,e,t),t=Bt,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,Dt.H=t===null||t.memoizedState===null?By:am),e}function Eu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ml(e);if(e.$$typeof===ts)return on(e)}throw Error(J(438,String(e)))}function jp(e){var t=null,n=Bt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Bt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Tu(),Bt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=bM;return t.index++,n}function ls(e,t){return typeof t=="function"?t(e):t}function Lc(e){var t=Fe();return $p(t,de,e)}function $p(e,t,n){var i=e.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Zt&p)===p:(os&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===Ur&&(h=!0);else if((os&u)===u){c=c.next,u===Ur&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Bt.lanes|=u,Js|=u;p=c.action,Ua&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Bt.lanes|=p,Js|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Gn(a,e.memoizedState)&&(ke=!0,h&&(n=Er,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function fd(e){var t=Fe(),n=t.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Gn(a,t.memoizedState)||(ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function cy(e,t,n){var i=Bt,s=Fe(),a=Kt;if(a){if(n===void 0)throw Error(J(407));n=n()}else n=t();var r=!Gn((de||s).memoizedState,n);if(r&&(s.memoizedState=n,ke=!0),s=s.queue,tm(fy.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||Ve!==null&&Ve.memoizedState.tag&1){if(i.flags|=2048,Ir(9,{destroy:void 0},hy.bind(null,i,s,n,t),null),ge===null)throw Error(J(349));a||(os&127)!==0||uy(i,t,n)}return n}function uy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Bt.updateQueue,t===null?(t=Tu(),Bt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hy(e,t,n,i){t.value=n,t.getSnapshot=i,dy(t)&&py(e)}function fy(e,t,n){return n(function(){dy(t)&&py(e)})}function dy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch{return!0}}function py(e){var t=Ba(e,2);t!==null&&Tn(t,e,2)}function np(e){var t=vn();if(typeof e=="function"){var n=e;if(e=n(),Ua){Us(!0);try{n()}finally{Us(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:e},t}function my(e,t,n,i){return e.baseState=n,$p(e,de,typeof i=="function"?i:ls)}function z1(e,t,n,i,s){if(wu(e))throw Error(J(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Dt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,gy(t,a)):(a.next=n.next,t.pending=n.next=a)}}function gy(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Dt.T,r={};Dt.T=r;try{var o=n(s,i),l=Dt.S;l!==null&&l(r,o),mv(e,t,o)}catch(c){ip(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Dt.T=a}}else try{a=n(s,i),mv(e,t,a)}catch(c){ip(e,t,c)}}function mv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){gv(e,t,i)},function(i){return ip(e,t,i)}):gv(e,t,n)}function gv(e,t,n){t.status="fulfilled",t.value=n,vy(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,gy(e,n)))}function ip(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,vy(t),t=t.next;while(t!==i)}e.action=null}function vy(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function _y(e,t){return t}function vv(e,t){if(Kt){var n=ge.formState;if(n!==null){t:{var i=Bt;if(Kt){if(Me){e:{for(var s=Me,a=ai;s.nodeType!==8;){if(!a){s=null;break e}if(s=oi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Me=oi(s.nextSibling),i=s.data==="F!";break t}}Ys(i)}i=!1}i&&(t=n[0])}}return n=vn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_y,lastRenderedState:t},n.queue=i,n=Iy.bind(null,Bt,i),i.dispatch=n,i=np(!1),a=sm.bind(null,Bt,!1,i.queue),i=vn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=z1.bind(null,Bt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function _v(e){var t=Fe();return yy(t,de,e)}function yy(e,t,n){if(t=$p(e,t,_y)[0],e=Lc(ls)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ml(t)}catch(r){throw r===kr?Mu:r}else i=t;t=Fe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Bt.flags|=2048,Ir(9,{destroy:void 0},F1.bind(null,s,n),null)),[i,a,e]}function F1(e,t){e.action=t}function yv(e){var t=Fe(),n=de;if(n!==null)return yy(t,n,e);Fe(),t=t.memoizedState,n=Fe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ir(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Bt.updateQueue,t===null&&(t=Tu(),Bt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function xy(){return Fe().memoizedState}function Ic(e,t,n,i){var s=vn();Bt.flags|=e,s.memoizedState=Ir(1|t,{destroy:void 0},n,i===void 0?null:i)}function Au(e,t,n,i){var s=Fe();i=i===void 0?null:i;var a=s.memoizedState.inst;de!==null&&i!==null&&Yp(i,de.memoizedState.deps)?s.memoizedState=Ir(t,a,n,i):(Bt.flags|=e,s.memoizedState=Ir(1|t,a,n,i))}function xv(e,t){Ic(8390656,8,e,t)}function tm(e,t){Au(2048,8,e,t)}function V1(e){Bt.flags|=4;var t=Bt.updateQueue;if(t===null)t=Tu(),Bt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Sy(e){var t=Fe().memoizedState;return V1({ref:t,nextImpl:e}),function(){if((ee&2)!==0)throw Error(J(440));return t.impl.apply(void 0,arguments)}}function by(e,t){return Au(4,2,e,t)}function My(e,t){return Au(4,4,e,t)}function Ty(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ey(e,t,n){n=n!=null?n.concat([e]):null,Au(4,4,Ty.bind(null,t,e),n)}function em(){}function Ay(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Yp(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function wy(e,t){var n=Fe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Yp(t,i[1]))return i[0];if(i=e(),Ua){Us(!0);try{e()}finally{Us(!1)}}return n.memoizedState=[i,t],i}function nm(e,t,n){return n===void 0||(os&1073741824)!==0&&(Zt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=mx(),Bt.lanes|=e,Js|=e,n)}function Cy(e,t,n,i){return Gn(n,t)?n:Lr.current!==null?(e=nm(e,n,i),Gn(e,t)||(ke=!0),e):(os&42)===0||(os&1073741824)!==0&&(Zt&261930)===0?(ke=!0,e.memoizedState=n):(e=mx(),Bt.lanes|=e,Js|=e,t)}function Ry(e,t,n,i,s){var a=ne.p;ne.p=a!==0&&8>a?a:8;var r=Dt.T,o={};Dt.T=o,sm(e,!1,t,n);try{var l=s(),c=Dt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=O1(l,i);Ho(e,t,h,Vn(e))}else Ho(e,t,i,Vn(e))}catch(p){Ho(e,t,{then:function(){},status:"rejected",reason:p},Vn())}finally{ne.p=a,r!==null&&o.types!==null&&(r.types=o.types),Dt.T=r}}function G1(){}function sp(e,t,n,i){if(e.tag!==5)throw Error(J(476));var s=Dy(e).queue;Ry(e,s,t,Ta,n===null?G1:function(){return Ny(e),n(i)})}function Dy(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ta,baseState:Ta,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:Ta},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ny(e){var t=Dy(e);t.next===null&&(t=e.alternate.memoizedState),Ho(e,t.next.queue,{},Vn())}function im(){return on(al)}function Uy(){return Fe().memoizedState}function Ly(){return Fe().memoizedState}function H1(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Vn();e=Fs(n);var i=Vs(t,e,n);i!==null&&(Tn(i,t,n),Fo(i,t,n)),t={cache:Hp()},e.payload=t;return}t=t.return}}function k1(e,t,n){var i=Vn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},wu(e)?Oy(t,n):(n=zp(e,t,n,i),n!==null&&(Tn(n,e,i),Py(n,t,i)))}function Iy(e,t,n){var i=Vn();Ho(e,t,n,i)}function Ho(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(wu(e))Oy(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Gn(o,r))return bu(e,t,s,0),ge===null&&Su(),!1}catch{}if(n=zp(e,t,s,i),n!==null)return Tn(n,e,i),Py(n,t,i),!0}return!1}function sm(e,t,n,i){if(i={lane:2,revertLane:dm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},wu(e)){if(t)throw Error(J(479))}else t=zp(e,n,i,2),t!==null&&Tn(t,e,2)}function wu(e){var t=e.alternate;return e===Bt||t!==null&&t===Bt}function Oy(e,t){wr=tu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Py(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,S_(e,n)}}var nl={readContext:on,use:Eu,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue};nl.useEffectEvent=Ue;var By={readContext:on,use:Eu,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:on,useEffect:xv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ic(4194308,4,Ty.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ic(4194308,4,e,t)},useInsertionEffect:function(e,t){Ic(4,2,e,t)},useMemo:function(e,t){var n=vn();t=t===void 0?null:t;var i=e();if(Ua){Us(!0);try{e()}finally{Us(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=vn();if(n!==void 0){var s=n(t);if(Ua){Us(!0);try{n(t)}finally{Us(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=k1.bind(null,Bt,e),[i.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:function(e){e=np(e);var t=e.queue,n=Iy.bind(null,Bt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:em,useDeferredValue:function(e,t){var n=vn();return nm(n,e,t)},useTransition:function(){var e=np(!1);return e=Ry.bind(null,Bt,e.queue,!0,!1),vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Bt,s=vn();if(Kt){if(n===void 0)throw Error(J(407));n=n()}else{if(n=t(),ge===null)throw Error(J(349));(Zt&127)!==0||uy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,xv(fy.bind(null,i,a,e),[e]),i.flags|=2048,Ir(9,{destroy:void 0},hy.bind(null,i,a,n,t),null),n},useId:function(){var e=vn(),t=ge.identifierPrefix;if(Kt){var n=wi,i=Ai;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=eu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=P1++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:im,useFormState:vv,useActionState:vv,useOptimistic:function(e){var t=vn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=sm.bind(null,Bt,!0,n),n.dispatch=t,[e,t]},useMemoCache:jp,useCacheRefresh:function(){return vn().memoizedState=H1.bind(null,Bt)},useEffectEvent:function(e){var t=vn(),n={impl:e};return t.memoizedState=n,function(){if((ee&2)!==0)throw Error(J(440));return n.impl.apply(void 0,arguments)}}},am={readContext:on,use:Eu,useCallback:Ay,useContext:on,useEffect:tm,useImperativeHandle:Ey,useInsertionEffect:by,useLayoutEffect:My,useMemo:wy,useReducer:Lc,useRef:xy,useState:function(){return Lc(ls)},useDebugValue:em,useDeferredValue:function(e,t){var n=Fe();return Cy(n,de.memoizedState,e,t)},useTransition:function(){var e=Lc(ls)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:ml(e),t]},useSyncExternalStore:cy,useId:Uy,useHostTransitionStatus:im,useFormState:_v,useActionState:_v,useOptimistic:function(e,t){var n=Fe();return my(n,de,e,t)},useMemoCache:jp,useCacheRefresh:Ly};am.useEffectEvent=Sy;var zy={readContext:on,use:Eu,useCallback:Ay,useContext:on,useEffect:tm,useImperativeHandle:Ey,useInsertionEffect:by,useLayoutEffect:My,useMemo:wy,useReducer:fd,useRef:xy,useState:function(){return fd(ls)},useDebugValue:em,useDeferredValue:function(e,t){var n=Fe();return de===null?nm(n,e,t):Cy(n,de.memoizedState,e,t)},useTransition:function(){var e=fd(ls)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:ml(e),t]},useSyncExternalStore:cy,useId:Uy,useHostTransitionStatus:im,useFormState:yv,useActionState:yv,useOptimistic:function(e,t){var n=Fe();return de!==null?my(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:jp,useCacheRefresh:Ly};zy.useEffectEvent=Sy;function dd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ap={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Vn(),s=Fs(i);s.payload=t,n!=null&&(s.callback=n),t=Vs(e,s,i),t!==null&&(Tn(t,e,i),Fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Vn(),s=Fs(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Vs(e,s,i),t!==null&&(Tn(t,e,i),Fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Vn(),i=Fs(n);i.tag=2,t!=null&&(i.callback=t),t=Vs(e,i,n),t!==null&&(Tn(t,e,n),Fo(t,e,n))}};function Sv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Qo(n,i)||!Qo(s,a):!0}function bv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&ap.enqueueReplaceState(t,t.state,null)}function La(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Te({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Fy(e){Yc(e)}function Vy(e){console.error(e)}function Gy(e){Yc(e)}function nu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Mv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function rp(e,t,n){return n=Fs(n),n.tag=3,n.payload={element:null},n.callback=function(){nu(e,t)},n}function Hy(e){return e=Fs(e),e.tag=3,e}function ky(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){Mv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Mv(t,n,i),typeof s!="function"&&(Gs===null?Gs=new Set([this]):Gs.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function W1(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Hr(t,n,s,!0),n=Hn.current,n!==null){switch(n.tag){case 31:case 13:return ri===null?ou():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Qc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Td(e,i,s)),!1;case 22:return n.flags|=65536,i===Qc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Td(e,i,s)),!1}throw Error(J(435,n.tag))}return Td(e,i,s),ou(),!1}if(Kt)return t=Hn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==Yd&&(e=Error(J(422),{cause:i}),$o(si(e,n)))):(i!==Yd&&(t=Error(J(423),{cause:i}),$o(si(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=si(i,n),s=rp(e.stateNode,i,s),hd(e,s),Le!==4&&(Le=2)),!1;var a=Error(J(520),{cause:i});if(a=si(a,n),Xo===null?Xo=[a]:Xo.push(a),Le!==4&&(Le=2),t===null)return!0;i=si(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=rp(n.stateNode,i,e),hd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Gs===null||!Gs.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Hy(s),ky(s,e,n,i),hd(n,s),!1}n=n.return}while(n!==null);return!1}var rm=Error(J(461)),ke=!1;function sn(e,t,n,i){t.child=e===null?iy(t,null,n,i):Na(t,e.child,n,i)}function Tv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Da(t),i=Zp(e,t,n,r,a,s),o=Jp(),e!==null&&!ke?(Kp(e,t,s),cs(e,t,s)):(Kt&&o&&Vp(t),t.flags|=1,sn(e,t,i,s),t.child)}function Ev(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Fp(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Wy(e,t,a,i,s)):(e=Nc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!om(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Qo,n(r,i)&&e.ref===t.ref)return cs(e,t,s)}return t.flags|=1,e=is(a,i),e.ref=t.ref,e.return=t,t.child=e}function Wy(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Qo(a,i)&&e.ref===t.ref)if(ke=!1,t.pendingProps=i=a,om(e,s))(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,cs(e,t,s)}return op(e,t,n,i,s)}function Xy(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Av(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uc(t,a!==null?a.cachePool:null),a!==null?pv(t,a):tp(),ry(t);else return i=t.lanes=536870912,Av(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Uc(t,a.cachePool),pv(t,a),Ds(t),t.memoizedState=null):(e!==null&&Uc(t,null),tp(),Ds(t));return sn(e,t,s,n),t.child}function Lo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Av(e,t,n,i,s){var a=kp();return a=a===null?null:{parent:He._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Uc(t,null),tp(),ry(t),e!==null&&Hr(e,t,i,!0),t.childLanes=s,null}function Oc(e,t){return t=iu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function wv(e,t,n){return Na(t,e.child,null,n),e=Oc(t,t.pendingProps),e.flags|=2,In(t),t.memoizedState=null,e}function X1(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Kt){if(i.mode==="hidden")return e=Oc(t,i),t.lanes=536870912,Lo(null,e);if(ep(t),(e=Me)?(e=Bx(e,ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qs!==null?{id:Ai,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},n=K_(e),n.return=t,t.child=n,rn=t,Me=null)):e=null,e===null)throw Ys(t);return t.lanes=536870912,null}return Oc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(ep(t),s)if(t.flags&256)t.flags&=-257,t=wv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(J(558));else if(ke||Hr(e,t,n,!1),s=(n&e.childLanes)!==0,ke||s){if(i=ge,i!==null&&(r=b_(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Ba(e,r),Tn(i,e,r),rm;ou(),t=wv(e,t,n)}else e=a.treeContext,Me=oi(r.nextSibling),rn=t,Kt=!0,zs=null,ai=!1,e!==null&&j_(t,e),t=Oc(t,i),t.flags|=4096;return t}return e=is(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function op(e,t,n,i,s){return Da(t),n=Zp(e,t,n,i,void 0,s),i=Jp(),e!==null&&!ke?(Kp(e,t,s),cs(e,t,s)):(Kt&&i&&Vp(t),t.flags|=1,sn(e,t,n,s),t.child)}function Cv(e,t,n,i,s,a){return Da(t),t.updateQueue=null,n=ly(t,i,n,s),oy(e),i=Jp(),e!==null&&!ke?(Kp(e,t,a),cs(e,t,a)):(Kt&&i&&Vp(t),t.flags|=1,sn(e,t,n,a),t.child)}function Rv(e,t,n,i,s){if(Da(t),t.stateNode===null){var a=_r,r=n.contextType;typeof r=="object"&&r!==null&&(a=on(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=ap,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Xp(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?on(r):_r,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(dd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&ap.enqueueReplaceState(a,a.state,null),Go(t,i,a,s),Vo(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=La(n,o);a.props=l;var c=a.context,h=n.contextType;r=_r,typeof h=="object"&&h!==null&&(r=on(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&bv(t,a,i,r),ws=!1;var u=t.memoizedState;a.state=u,Go(t,i,a,s),Vo(),c=t.memoizedState,o||u!==c||ws?(typeof p=="function"&&(dd(t,n,p,i),c=t.memoizedState),(l=ws||Sv(t,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,jd(e,t),r=t.memoizedProps,h=La(n,r),a.props=h,p=t.pendingProps,u=a.context,c=n.contextType,l=_r,typeof c=="object"&&c!==null&&(l=on(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&bv(t,a,i,l),ws=!1,u=t.memoizedState,a.state=u,Go(t,i,a,s),Vo();var d=t.memoizedState;r!==p||u!==d||ws||e!==null&&e.dependencies!==null&&Kc(e.dependencies)?(typeof o=="function"&&(dd(t,n,o,i),d=t.memoizedState),(h=ws||Sv(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&Kc(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Pc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Na(t,e.child,null,s),t.child=Na(t,null,n,s)):sn(e,t,n,s),t.memoizedState=a.state,e=t.child):e=cs(e,t,s),e}function Dv(e,t,n,i){return Ra(),t.flags|=256,sn(e,t,n,i),t.child}var pd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function md(e){return{baseLanes:e,cachePool:ty()}}function gd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Pn),e}function qy(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Kt){if(s?Rs(t):Ds(t),(e=Me)?(e=Bx(e,ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:qs!==null?{id:Ai,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},n=K_(e),n.return=t,t.child=n,rn=t,Me=null)):e=null,e===null)throw Ys(t);return Sp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Ds(t),s=t.mode,o=iu({mode:"hidden",children:o},s),i=Ea(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=md(n),i.childLanes=gd(e,r,n),t.memoizedState=pd,Lo(null,i)):(Rs(t),lp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Rs(t),t.flags&=-257,t=vd(e,t,n)):t.memoizedState!==null?(Ds(t),t.child=e.child,t.flags|=128,t=null):(Ds(t),o=i.fallback,s=t.mode,i=iu({mode:"visible",children:i.children},s),o=Ea(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Na(t,e.child,null,n),i=t.child,i.memoizedState=md(n),i.childLanes=gd(e,r,n),t.memoizedState=pd,t=Lo(null,i));else if(Rs(t),Sp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,$o({value:i,source:null,stack:null}),t=vd(e,t,n)}else if(ke||Hr(e,t,n,!1),r=(n&e.childLanes)!==0,ke||r){if(r=ge,r!==null&&(i=b_(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Ba(e,i),Tn(r,e,i),rm;xp(o)||ou(),t=vd(e,t,n)}else xp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Me=oi(o.nextSibling),rn=t,Kt=!0,zs=null,ai=!1,e!==null&&j_(t,e),t=lp(t,i.children),t.flags|=4096);return t}return s?(Ds(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=is(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=is(c,o):(o=Ea(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Lo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=md(n):(s=o.cachePool,s!==null?(l=He._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=ty(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=gd(e,r,n),t.memoizedState=pd,Lo(e.child,i)):(Rs(t),n=e.child,e=n.sibling,n=is(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function lp(e,t){return t=iu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function iu(e,t){return e=On(22,e,null,t),e.lanes=0,e}function vd(e,t,n){return Na(t,e.child,null,n),e=lp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Jd(e.return,t,n)}function _d(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Yy(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=ze.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ye(ze,r),sn(e,t,i,n),i=Kt?jo:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nv(e,n,t);else if(e.tag===19)Nv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&$c(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),_d(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&$c(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}_d(t,!0,n,null,a,i);break;case"together":_d(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function cs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Js|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Hr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(J(153));if(t.child!==null){for(e=t.child,n=is(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=is(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function om(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Kc(e)))}function q1(e,t,n){switch(t.tag){case 3:kc(t,t.stateNode.containerInfo),Cs(t,He,e.memoizedState.cache),Ra();break;case 27:case 5:Pd(t);break;case 4:kc(t,t.stateNode.containerInfo);break;case 10:Cs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ep(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Rs(t),t.flags|=128,null):(n&t.child.childLanes)!==0?qy(e,t,n):(Rs(t),e=cs(e,t,n),e!==null?e.sibling:null);Rs(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Hr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Yy(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(ze,ze.current),i)break;return null;case 22:return t.lanes=0,Xy(e,t,n,t.pendingProps);case 24:Cs(t,He,e.memoizedState.cache)}return cs(e,t,n)}function Zy(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ke=!0;else{if(!om(e,n)&&(t.flags&128)===0)return ke=!1,q1(e,t,n);ke=(e.flags&131072)!==0}else ke=!1,Kt&&(t.flags&1048576)!==0&&Q_(t,jo,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ba(t.elementType),t.type=e,typeof e=="function")Fp(e)?(i=La(e,i),t.tag=1,t=Rv(null,t,e,i,n)):(t.tag=0,t=op(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Ep){t.tag=11,t=Tv(null,t,e,i,n);break t}else if(s===Ap){t.tag=14,t=Ev(null,t,e,i,n);break t}}throw t=Id(e)||e,Error(J(306,t,""))}}return t;case 0:return op(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=La(i,t.pendingProps),Rv(e,t,i,s,n);case 3:t:{if(kc(t,t.stateNode.containerInfo),e===null)throw Error(J(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,jd(e,t),Go(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Cs(t,He,i),i!==a.cache&&Kd(t,[He],n,!0),Vo(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Dv(e,t,i,n);break t}else if(i!==s){s=si(Error(J(424)),t),$o(s),t=Dv(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Me=oi(e.firstChild),rn=t,Kt=!0,zs=null,ai=!0,n=iy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ra(),i===s){t=cs(e,t,n);break t}sn(e,t,i,n)}t=t.child}return t;case 26:return Pc(e,t),e===null?(n=$v(t.type,null,t.pendingProps,null))?t.memoizedState=n:Kt||(n=t.type,e=t.pendingProps,i=hu(Bs.current).createElement(n),i[an]=t,i[En]=e,ln(i,n,e),$e(i),t.stateNode=i):t.memoizedState=$v(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pd(t),e===null&&Kt&&(i=t.stateNode=zx(t.type,t.pendingProps,Bs.current),rn=t,ai=!0,s=Me,Qs(t.type)?(bp=s,Me=oi(i.firstChild)):Me=s),sn(e,t,t.pendingProps.children,n),Pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Kt&&((s=i=Me)&&(i=xT(i,t.type,t.pendingProps,ai),i!==null?(t.stateNode=i,rn=t,Me=oi(i.firstChild),ai=!1,s=!0):s=!1),s||Ys(t)),Pd(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,_p(s,a)?i=null:r!==null&&_p(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Zp(e,t,B1,null,null,n),al._currentValue=s),Pc(e,t),sn(e,t,i,n),t.child;case 6:return e===null&&Kt&&((e=n=Me)&&(n=ST(n,t.pendingProps,ai),n!==null?(t.stateNode=n,rn=t,Me=null,e=!0):e=!1),e||Ys(t)),null;case 13:return qy(e,t,n);case 4:return kc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Na(t,null,i,n):sn(e,t,i,n),t.child;case 11:return Tv(e,t,t.type,t.pendingProps,n);case 7:return sn(e,t,t.pendingProps,n),t.child;case 8:return sn(e,t,t.pendingProps.children,n),t.child;case 12:return sn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Cs(t,t.type,i.value),sn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Da(t),s=on(s),i=i(s),t.flags|=1,sn(e,t,i,n),t.child;case 14:return Ev(e,t,t.type,t.pendingProps,n);case 15:return Wy(e,t,t.type,t.pendingProps,n);case 19:return Yy(e,t,n);case 31:return X1(e,t,n);case 22:return Xy(e,t,n,t.pendingProps);case 24:return Da(t),i=on(He),e===null?(s=kp(),s===null&&(s=ge,a=Hp(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Xp(t),Cs(t,He,s)):((e.lanes&n)!==0&&(jd(e,t),Go(t,null,null,n),Vo()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Cs(t,He,i)):(i=a.cache,Cs(t,He,i),i!==s.cache&&Kd(t,[He],n,!0))),sn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(J(156,t.tag))}function Zi(e){e.flags|=4}function yd(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(_x())e.flags|=8192;else throw wa=Qc,Wp}else e.flags&=-16777217}function Uv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gx(t))if(_x())e.flags|=8192;else throw wa=Qc,Wp}function xc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?y_():536870912,e.lanes|=t,Or|=t)}function Ao(e,t){if(!Kt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Y1(e,t,n){var i=t.pendingProps;switch(Gp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return be(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ss(He),Rr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(rr(t)?Zi(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ud())),be(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Zi(t),a!==null?(be(t),Uv(t,a)):(be(t),yd(t,s,null,i,n))):a?a!==e.memoizedState?(Zi(t),be(t),Uv(t,a)):(be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Zi(t),be(t),yd(t,s,e,i,n)),null;case 27:if(Wc(t),n=Bs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Zi(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return be(t),null}e=Ri.current,rr(t)?ov(t,e):(e=zx(s,i,n),t.stateNode=e,Zi(t))}return be(t),null;case 5:if(Wc(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Zi(t);else{if(!i){if(t.stateNode===null)throw Error(J(166));return be(t),null}if(a=Ri.current,rr(t))ov(t,a);else{var r=hu(Bs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[an]=t,a[En]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(ln(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Zi(t)}}return be(t),yd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Zi(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(J(166));if(e=Bs.current,rr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=rn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[an]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Ix(e.nodeValue,n)),e||Ys(t,!0)}else e=hu(e).createTextNode(i),e[an]=t,t.stateNode=e}return be(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=rr(t),n!==null){if(e===null){if(!i)throw Error(J(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(J(557));e[an]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),e=!1}else n=ud(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(In(t),t):(In(t),null);if((t.flags&128)!==0)throw Error(J(558))}return be(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=rr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(J(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[an]=t}else Ra(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),s=!1}else s=ud(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(In(t),t):(In(t),null)}return In(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xc(t,t.updateQueue),be(t),null);case 4:return Rr(),e===null&&pm(t.stateNode.containerInfo),be(t),null;case 10:return ss(t.type),be(t),null;case 19:if(tn(ze),i=t.memoizedState,i===null)return be(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Ao(i,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=$c(e),a!==null){for(t.flags|=128,Ao(i,!1),e=a.updateQueue,t.updateQueue=e,xc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)J_(n,e),n=n.sibling;return ye(ze,ze.current&1|2),Kt&&ji(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Bn()>au&&(t.flags|=128,s=!0,Ao(i,!1),t.lanes=4194304)}else{if(!s)if(e=$c(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,xc(t,e),Ao(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Kt)return be(t),null}else 2*Bn()-i.renderingStartTime>au&&n!==536870912&&(t.flags|=128,s=!0,Ao(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Bn(),e.sibling=null,n=ze.current,ye(ze,s?n&1|2:n&1),Kt&&ji(t,i.treeForkCount),e):(be(t),null);case 22:case 23:return In(t),qp(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),n=t.updateQueue,n!==null&&xc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&tn(Aa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ss(He),be(t),null;case 25:return null;case 30:return null}throw Error(J(156,t.tag))}function Z1(e,t){switch(Gp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ss(He),Rr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Wc(t),null;case 31:if(t.memoizedState!==null){if(In(t),t.alternate===null)throw Error(J(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(In(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(J(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return tn(ze),null;case 4:return Rr(),null;case 10:return ss(t.type),null;case 22:case 23:return In(t),qp(),e!==null&&tn(Aa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ss(He),null;case 25:return null;default:return null}}function Jy(e,t){switch(Gp(t),t.tag){case 3:ss(He),Rr();break;case 26:case 27:case 5:Wc(t);break;case 4:Rr();break;case 31:t.memoizedState!==null&&In(t);break;case 13:In(t);break;case 19:tn(ze);break;case 10:ss(t.type);break;case 22:case 23:In(t),qp(),e!==null&&tn(Aa);break;case 24:ss(He)}}function gl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){oe(t,t.return,o)}}function Zs(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){oe(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){oe(t,t.return,h)}}function Ky(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ay(t,n)}catch(i){oe(e,e.return,i)}}}function Qy(e,t,n){n.props=La(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){oe(e,t,i)}}function ko(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){oe(e,t,s)}}function Ci(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){oe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){oe(e,t,s)}else n.current=null}function jy(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){oe(e,e.return,s)}}function xd(e,t,n){try{var i=e.stateNode;pT(i,e.type,n,t),i[En]=t}catch(s){oe(e,e.return,s)}}function $y(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qs(e.type)||e.tag===4}function Sd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||$y(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cp(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=es));else if(i!==4&&(i===27&&Qs(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(cp(e,t,n),e=e.sibling;e!==null;)cp(e,t,n),e=e.sibling}function su(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&Qs(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(su(e,t,n),e=e.sibling;e!==null;)su(e,t,n),e=e.sibling}function tx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ln(t,i,n),t[an]=e,t[En]=n}catch(a){oe(e,e.return,a)}}var $i=!1,Ge=!1,bd=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,je=null;function J1(e,t){if(e=e.containerInfo,gp=mu,e=G_(e),Pp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,p=e,u=null;e:for(;;){for(var d;p!==n||s!==0&&p.nodeType!==3||(o=r+s),p!==a||i!==0&&p.nodeType!==3||(l=r+i),p.nodeType===3&&(r+=p.nodeValue.length),(d=p.firstChild)!==null;)u=p,p=d;for(;;){if(p===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++h===i&&(l=r),(d=p.nextSibling)!==null)break;p=u,u=p.parentNode}p=d}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vp={focusedElem:e,selectionRange:n},mu=!1,je=t;je!==null;)if(t=je,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,je=e;else for(;je!==null;){switch(t=je,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=La(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(T){oe(n,n.return,T)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)yp(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(J(163))}if(e=t.sibling,e!==null){e.return=t.return,je=e;break}je=t.return}}function ex(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ki(e,n),i&4&&gl(5,n);break;case 1:if(Ki(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){oe(n,n.return,r)}else{var s=La(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){oe(n,n.return,r)}}i&64&&Ky(n),i&512&&ko(n,n.return);break;case 3:if(Ki(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ay(e,t)}catch(r){oe(n,n.return,r)}}break;case 27:t===null&&i&4&&tx(n);case 26:case 5:Ki(e,n),t===null&&i&4&&jy(n),i&512&&ko(n,n.return);break;case 12:Ki(e,n);break;case 31:Ki(e,n),i&4&&sx(e,n);break;case 13:Ki(e,n),i&4&&ax(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=sT.bind(null,n),bT(e,n))));break;case 22:if(i=n.memoizedState!==null||$i,!i){t=t!==null&&t.memoizedState!==null||Ge,s=$i;var a=Ge;$i=i,(Ge=t)&&!a?Qi(e,n,(n.subtreeFlags&8772)!==0):Ki(e,n),$i=s,Ge=a}break;case 30:break;default:Ki(e,n)}}function nx(e){var t=e.alternate;t!==null&&(e.alternate=null,nx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Dp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,bn=!1;function Ji(e,t,n){for(n=n.child;n!==null;)ix(e,t,n),n=n.sibling}function ix(e,t,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 26:Ge||Ci(n,t),Ji(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ge||Ci(n,t);var i=we,s=bn;Qs(n.type)&&(we=n.stateNode,bn=!1),Ji(e,t,n),Yo(n.stateNode),we=i,bn=s;break;case 5:Ge||Ci(n,t);case 6:if(i=we,s=bn,we=null,Ji(e,t,n),we=i,bn=s,we!==null)if(bn)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode)}catch(a){oe(n,t,a)}else try{we.removeChild(n.stateNode)}catch(a){oe(n,t,a)}break;case 18:we!==null&&(bn?(e=we,Zv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fr(e)):Zv(we,n.stateNode));break;case 4:i=we,s=bn,we=n.stateNode.containerInfo,bn=!0,Ji(e,t,n),we=i,bn=s;break;case 0:case 11:case 14:case 15:Zs(2,n,t),Ge||Zs(4,n,t),Ji(e,t,n);break;case 1:Ge||(Ci(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Qy(n,t,i)),Ji(e,t,n);break;case 21:Ji(e,t,n);break;case 22:Ge=(i=Ge)||n.memoizedState!==null,Ji(e,t,n),Ge=i;break;default:Ji(e,t,n)}}function sx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fr(e)}catch(n){oe(t,t.return,n)}}}function ax(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fr(e)}catch(n){oe(t,t.return,n)}}function K1(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Lv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Lv),t;default:throw Error(J(435,e.tag))}}function Sc(e,t){var n=K1(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=aT.bind(null,e,i);i.then(s,s)}})}function xn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(Qs(o.type)){we=o.stateNode,bn=!1;break t}break;case 5:we=o.stateNode,bn=!1;break t;case 3:case 4:we=o.stateNode.containerInfo,bn=!0;break t}o=o.return}if(we===null)throw Error(J(160));ix(a,r,s),we=null,bn=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)rx(t,e),t=t.sibling}var pi=null;function rx(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xn(t,e),Sn(e),i&4&&(Zs(3,e,e.return),gl(3,e),Zs(5,e,e.return));break;case 1:xn(t,e),Sn(e),i&512&&(Ge||n===null||Ci(n,n.return)),i&64&&$i&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=pi;if(xn(t,e),Sn(e),i&512&&(Ge||n===null||Ci(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[fl]||a[an]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),ln(a,i,n),a[an]=e,$e(a),i=a;break t;case"link":var r=e_("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),ln(a,i,n),s.head.appendChild(a);break;case"meta":if(r=e_("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),ln(a,i,n),s.head.appendChild(a);break;default:throw Error(J(468,i))}a[an]=e,$e(a),i=a}e.stateNode=i}else n_(s,e.type,e.stateNode);else e.stateNode=t_(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?n_(s,e.type,e.stateNode):t_(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&xd(e,e.memoizedProps,n.memoizedProps)}break;case 27:xn(t,e),Sn(e),i&512&&(Ge||n===null||Ci(n,n.return)),n!==null&&i&4&&xd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(xn(t,e),Sn(e),i&512&&(Ge||n===null||Ci(n,n.return)),e.flags&32){s=e.stateNode;try{Nr(s,"")}catch(_){oe(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,xd(e,s,n!==null?n.memoizedProps:s)),i&1024&&(bd=!0);break;case 6:if(xn(t,e),Sn(e),i&4){if(e.stateNode===null)throw Error(J(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){oe(e,e.return,_)}}break;case 3:if(Fc=null,s=pi,pi=fu(t.containerInfo),xn(t,e),pi=s,Sn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(_){oe(e,e.return,_)}bd&&(bd=!1,ox(e));break;case 4:i=pi,pi=fu(e.stateNode.containerInfo),xn(t,e),Sn(e),pi=i;break;case 12:xn(t,e),Sn(e);break;case 31:xn(t,e),Sn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Sc(e,i)));break;case 13:xn(t,e),Sn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Cu=Bn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Sc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=$i,h=Ge;if($i=c||s,Ge=h||l,xn(t,e),Ge=h,$i=c,Sn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||$i||Ge||Ma(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,u=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){oe(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){oe(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var d=l.stateNode;s?Jv(d,!0):Jv(l.stateNode,!1)}catch(_){oe(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Sc(e,n))));break;case 19:xn(t,e),Sn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Sc(e,i)));break;case 30:break;case 21:break;default:xn(t,e),Sn(e)}}function Sn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if($y(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var s=n.stateNode,a=Sd(e);su(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Nr(r,""),n.flags&=-33);var o=Sd(e);su(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Sd(e);cp(e,c,l);break;default:throw Error(J(161))}}catch(h){oe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ox(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ox(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ki(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ex(e,t.alternate,t),t=t.sibling}function Ma(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zs(4,t,t.return),Ma(t);break;case 1:Ci(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Qy(t,t.return,n),Ma(t);break;case 27:Yo(t.stateNode);case 26:case 5:Ci(t,t.return),Ma(t);break;case 22:t.memoizedState===null&&Ma(t);break;case 30:Ma(t);break;default:Ma(t)}e=e.sibling}}function Qi(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(s,a,n),gl(4,a);break;case 1:if(Qi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){oe(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)sy(l[s],o)}catch(c){oe(i,i.return,c)}}n&&r&64&&Ky(a),ko(a,a.return);break;case 27:tx(a);case 26:case 5:Qi(s,a,n),n&&i===null&&r&4&&jy(a),ko(a,a.return);break;case 12:Qi(s,a,n);break;case 31:Qi(s,a,n),n&&r&4&&sx(s,a);break;case 13:Qi(s,a,n),n&&r&4&&ax(s,a);break;case 22:a.memoizedState===null&&Qi(s,a,n),ko(a,a.return);break;case 30:break;default:Qi(s,a,n)}t=t.sibling}}function lm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pl(n))}function cm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e))}function di(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)lx(e,t,n,i),t=t.sibling}function lx(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:di(e,t,n,i),s&2048&&gl(9,t);break;case 1:di(e,t,n,i);break;case 3:di(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e)));break;case 12:if(s&2048){di(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){oe(t,t.return,l)}}else di(e,t,n,i);break;case 31:di(e,t,n,i);break;case 13:di(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?di(e,t,n,i):Wo(e,t):a._visibility&2?di(e,t,n,i):(a._visibility|=2,lr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&lm(r,t);break;case 24:di(e,t,n,i),s&2048&&cm(t.alternate,t);break;default:di(e,t,n,i)}}function lr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:lr(a,r,o,l,s),gl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?lr(a,r,o,l,s):Wo(a,r):(h._visibility|=2,lr(a,r,o,l,s)),s&&c&2048&&lm(r.alternate,r);break;case 24:lr(a,r,o,l,s),s&&c&2048&&cm(r.alternate,r);break;default:lr(a,r,o,l,s)}t=t.sibling}}function Wo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Wo(n,i),s&2048&&lm(i.alternate,i);break;case 24:Wo(n,i),s&2048&&cm(i.alternate,i);break;default:Wo(n,i)}t=t.sibling}}var Io=8192;function or(e,t,n){if(e.subtreeFlags&Io)for(e=e.child;e!==null;)cx(e,t,n),e=e.sibling}function cx(e,t,n){switch(e.tag){case 26:or(e,t,n),e.flags&Io&&e.memoizedState!==null&&IT(n,pi,e.memoizedState,e.memoizedProps);break;case 5:or(e,t,n);break;case 3:case 4:var i=pi;pi=fu(e.stateNode.containerInfo),or(e,t,n),pi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Io,Io=16777216,or(e,t,n),Io=i):or(e,t,n));break;default:or(e,t,n)}}function ux(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function wo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];je=i,fx(i,e)}ux(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hx(e),e=e.sibling}function hx(e){switch(e.tag){case 0:case 11:case 15:wo(e),e.flags&2048&&Zs(9,e,e.return);break;case 3:wo(e);break;case 12:wo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bc(e)):wo(e);break;default:wo(e)}}function Bc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];je=i,fx(i,e)}ux(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zs(8,t,t.return),Bc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bc(t));break;default:Bc(t)}e=e.sibling}}function fx(e,t){for(;je!==null;){var n=je;switch(n.tag){case 0:case 11:case 15:Zs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,je=i;else t:for(n=e;je!==null;){i=je;var s=i.sibling,a=i.return;if(nx(i),i===n){je=null;break t}if(s!==null){s.return=a,je=s;break t}je=a}}}var Q1={getCacheForType:function(e){var t=on(He),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return on(He).controller.signal}},j1=typeof WeakMap=="function"?WeakMap:Map,ee=0,ge=null,Xt=null,Zt=0,re=0,Ln=null,Is=!1,Wr=!1,um=!1,us=0,Le=0,Js=0,Ca=0,hm=0,Pn=0,Or=0,Xo=null,Mn=null,up=!1,Cu=0,dx=0,au=1/0,ru=null,Gs=null,Ze=0,Hs=null,Pr=null,as=0,hp=0,fp=null,px=null,qo=0,dp=null;function Vn(){return(ee&2)!==0&&Zt!==0?Zt&-Zt:Dt.T!==null?dm():M_()}function mx(){if(Pn===0)if((Zt&536870912)===0||Kt){var e=hc;hc<<=1,(hc&3932160)===0&&(hc=262144),Pn=e}else Pn=536870912;return e=Hn.current,e!==null&&(e.flags|=32),Pn}function Tn(e,t,n){(e===ge&&(re===2||re===9)||e.cancelPendingCommit!==null)&&(Br(e,0),Os(e,Zt,Pn,!1)),hl(e,n),((ee&2)===0||e!==ge)&&(e===ge&&((ee&2)===0&&(Ca|=n),Le===4&&Os(e,Zt,Pn,!1)),Ni(e))}function gx(e,t,n){if((ee&6)!==0)throw Error(J(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ul(e,t),s=i?eT(e,t):Md(e,t,!0),a=i;do{if(s===0){Wr&&!i&&Os(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!$1(n)){s=Md(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Xo;var l=o.current.memoizedState.isDehydrated;if(l&&(Br(o,r).flags|=256),r=Md(o,r,!1),r!==2){if(um&&!l){o.errorRecoveryDisabledLanes|=a,Ca|=a,s=4;break t}a=Mn,Mn=s,a!==null&&(Mn===null?Mn=a:Mn.push.apply(Mn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Br(e,0),Os(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(J(345));case 4:if((t&4194048)!==t)break;case 6:Os(i,t,Pn,!Is);break t;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((t&62914560)===t&&(s=Cu+300-Bn(),10<s)){if(Os(i,t,Pn,!Is),vu(i,0,!0)!==0)break t;as=t,i.timeoutHandle=Px(Iv.bind(null,i,n,Mn,ru,up,t,Pn,Ca,Or,Is,a,"Throttled",-0,0),s);break t}Iv(i,n,Mn,ru,up,t,Pn,Ca,Or,Is,a,null,-0,0)}}break}while(!0);Ni(e)}function Iv(e,t,n,i,s,a,r,o,l,c,h,p,u,d){if(e.timeoutHandle=-1,p=t.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:es},cx(t,a,p);var _=(a&62914560)===a?Cu-Bn():(a&4194048)===a?dx-Bn():0;if(_=OT(p,_),_!==null){as=a,e.cancelPendingCommit=_(Pv.bind(null,e,t,a,n,i,s,r,o,l,h,p,null,u,d)),Os(e,a,r,!c);return}}Pv(e,t,a,n,i,s,r,o,l)}function $1(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Gn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Os(e,t,n,i){t&=~hm,t&=~Ca,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Fn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&x_(e,n,t)}function Ru(){return(ee&6)===0?(vl(0,!1),!1):!0}function fm(){if(Xt!==null){if(re===0)var e=Xt.return;else e=Xt,ns=za=null,Qp(e),Ar=null,tl=0,e=Xt;for(;e!==null;)Jy(e.alternate,e),e=e.return;Xt=null}}function Br(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,vT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),as=0,fm(),ge=e,Xt=n=is(e.current,null),Zt=t,re=0,Ln=null,Is=!1,Wr=ul(e,t),um=!1,Or=Pn=hm=Ca=Js=Le=0,Mn=Xo=null,up=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Fn(i),a=1<<s;t|=e[s],i&=~a}return us=t,Su(),n}function vx(e,t){Bt=null,Dt.H=nl,t===kr||t===Mu?(t=fv(),re=3):t===Wp?(t=fv(),re=4):re=t===rm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ln=t,Xt===null&&(Le=1,nu(e,si(t,e.current)))}function _x(){var e=Hn.current;return e===null?!0:(Zt&4194048)===Zt?ri===null:(Zt&62914560)===Zt||(Zt&536870912)!==0?e===ri:!1}function yx(){var e=Dt.H;return Dt.H=nl,e===null?nl:e}function xx(){var e=Dt.A;return Dt.A=Q1,e}function ou(){Le=4,Is||(Zt&4194048)!==Zt&&Hn.current!==null||(Wr=!0),(Js&134217727)===0&&(Ca&134217727)===0||ge===null||Os(ge,Zt,Pn,!1)}function Md(e,t,n){var i=ee;ee|=2;var s=yx(),a=xx();(ge!==e||Zt!==t)&&(ru=null,Br(e,t)),t=!1;var r=Le;t:do try{if(re!==0&&Xt!==null){var o=Xt,l=Ln;switch(re){case 8:fm(),r=6;break t;case 3:case 2:case 9:case 6:Hn.current===null&&(t=!0);var c=re;if(re=0,Ln=null,Sr(e,o,l,c),n&&Wr){r=0;break t}break;default:c=re,re=0,Ln=null,Sr(e,o,l,c)}}tT(),r=Le;break}catch(h){vx(e,h)}while(!0);return t&&e.shellSuspendCounter++,ns=za=null,ee=i,Dt.H=s,Dt.A=a,Xt===null&&(ge=null,Zt=0,Su()),r}function tT(){for(;Xt!==null;)Sx(Xt)}function eT(e,t){var n=ee;ee|=2;var i=yx(),s=xx();ge!==e||Zt!==t?(ru=null,au=Bn()+500,Br(e,t)):Wr=ul(e,t);t:do try{if(re!==0&&Xt!==null){t=Xt;var a=Ln;e:switch(re){case 1:re=0,Ln=null,Sr(e,t,a,1);break;case 2:case 9:if(hv(a)){re=0,Ln=null,Ov(t);break}t=function(){re!==2&&re!==9||ge!==e||(re=7),Ni(e)},a.then(t,t);break t;case 3:re=7;break t;case 4:re=5;break t;case 7:hv(a)?(re=0,Ln=null,Ov(t)):(re=0,Ln=null,Sr(e,t,a,7));break;case 5:var r=null;switch(Xt.tag){case 26:r=Xt.memoizedState;case 5:case 27:var o=Xt;if(r?Gx(r):o.stateNode.complete){re=0,Ln=null;var l=o.sibling;if(l!==null)Xt=l;else{var c=o.return;c!==null?(Xt=c,Du(c)):Xt=null}break e}}re=0,Ln=null,Sr(e,t,a,5);break;case 6:re=0,Ln=null,Sr(e,t,a,6);break;case 8:fm(),Le=6;break t;default:throw Error(J(462))}}nT();break}catch(h){vx(e,h)}while(!0);return ns=za=null,Dt.H=i,Dt.A=s,ee=n,Xt!==null?0:(ge=null,Zt=0,Su(),Le)}function nT(){for(;Xt!==null&&!EM();)Sx(Xt)}function Sx(e){var t=Zy(e.alternate,e,us);e.memoizedProps=e.pendingProps,t===null?Du(e):Xt=t}function Ov(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Cv(n,t,t.pendingProps,t.type,void 0,Zt);break;case 11:t=Cv(n,t,t.pendingProps,t.type.render,t.ref,Zt);break;case 5:Qp(t);default:Jy(n,t),t=Xt=J_(t,us),t=Zy(n,t,us)}e.memoizedProps=e.pendingProps,t===null?Du(e):Xt=t}function Sr(e,t,n,i){ns=za=null,Qp(t),Ar=null,tl=0;var s=t.return;try{if(W1(e,s,t,n,Zt)){Le=1,nu(e,si(n,e.current)),Xt=null;return}}catch(a){if(s!==null)throw Xt=s,a;Le=1,nu(e,si(n,e.current)),Xt=null;return}t.flags&32768?(Kt||i===1?e=!0:Wr||(Zt&536870912)!==0?e=!1:(Is=e=!0,(i===2||i===9||i===3||i===6)&&(i=Hn.current,i!==null&&i.tag===13&&(i.flags|=16384))),bx(t,e)):Du(t)}function Du(e){var t=e;do{if((t.flags&32768)!==0){bx(t,Is);return}e=t.return;var n=Y1(t.alternate,t,us);if(n!==null){Xt=n;return}if(t=t.sibling,t!==null){Xt=t;return}Xt=t=e}while(t!==null);Le===0&&(Le=5)}function bx(e,t){do{var n=Z1(e.alternate,e);if(n!==null){n.flags&=32767,Xt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xt=e;return}Xt=e=n}while(e!==null);Le=6,Xt=null}function Pv(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do Nu();while(Ze!==0);if((ee&6)!==0)throw Error(J(327));if(t!==null){if(t===e.current)throw Error(J(177));if(a=t.lanes|t.childLanes,a|=Bp,OM(e,n,a,r,o,l),e===ge&&(Xt=ge=null,Zt=0),Pr=t,Hs=e,as=n,hp=a,fp=s,px=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rT(Xc,function(){return wx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null,s=ne.p,ne.p=2,r=ee,ee|=4;try{J1(e,t,n)}finally{ee=r,ne.p=s,Dt.T=i}}Ze=1,Mx(),Tx(),Ex()}}function Mx(){if(Ze===1){Ze=0;var e=Hs,t=Pr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Dt.T,Dt.T=null;var i=ne.p;ne.p=2;var s=ee;ee|=4;try{rx(t,e);var a=vp,r=G_(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&V_(o.ownerDocument.documentElement,o)){if(l!==null&&Pp(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),_=o.textContent.length,T=Math.min(l.start,_),g=l.end===void 0?T:Math.min(l.end,_);!d.extend&&T>g&&(r=g,g=T,T=r);var f=sv(o,T),m=sv(o,g);if(f&&m&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var x=p.createRange();x.setStart(f.node,f.offset),d.removeAllRanges(),T>g?(d.addRange(x),d.extend(m.node,m.offset)):(x.setEnd(m.node,m.offset),d.addRange(x))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var b=p[o];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}mu=!!gp,vp=gp=null}finally{ee=s,ne.p=i,Dt.T=n}}e.current=t,Ze=2}}function Tx(){if(Ze===2){Ze=0;var e=Hs,t=Pr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Dt.T,Dt.T=null;var i=ne.p;ne.p=2;var s=ee;ee|=4;try{ex(e,t.alternate,t)}finally{ee=s,ne.p=i,Dt.T=n}}Ze=3}}function Ex(){if(Ze===4||Ze===3){Ze=0,AM();var e=Hs,t=Pr,n=as,i=px;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ze=5:(Ze=0,Pr=Hs=null,Ax(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Gs=null),Rp(n),t=t.stateNode,zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Dt.T,s=ne.p,ne.p=2,Dt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Dt.T=t,ne.p=s}}(as&3)!==0&&Nu(),Ni(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===dp?qo++:(qo=0,dp=e):qo=0,vl(0,!1)}}function Ax(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pl(t)))}function Nu(){return Mx(),Tx(),Ex(),wx()}function wx(){if(Ze!==5)return!1;var e=Hs,t=hp;hp=0;var n=Rp(as),i=Dt.T,s=ne.p;try{ne.p=32>n?32:n,Dt.T=null,n=fp,fp=null;var a=Hs,r=as;if(Ze=0,Pr=Hs=null,as=0,(ee&6)!==0)throw Error(J(331));var o=ee;if(ee|=4,hx(a.current),lx(a,a.current,r,n),ee=o,vl(0,!1),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(cl,a)}catch{}return!0}finally{ne.p=s,Dt.T=i,Ax(e,t)}}function Bv(e,t,n){t=si(n,t),t=rp(e.stateNode,t,2),e=Vs(e,t,2),e!==null&&(hl(e,2),Ni(e))}function oe(e,t,n){if(e.tag===3)Bv(e,e,n);else for(;t!==null;){if(t.tag===3){Bv(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gs===null||!Gs.has(i))){e=si(n,e),n=Hy(2),i=Vs(t,n,2),i!==null&&(ky(n,i,t,e),hl(i,2),Ni(i));break}}t=t.return}}function Td(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new j1;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(um=!0,s.add(n),e=iT.bind(null,e,t,n),t.then(e,e))}function iT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ge===e&&(Zt&n)===n&&(Le===4||Le===3&&(Zt&62914560)===Zt&&300>Bn()-Cu?(ee&2)===0&&Br(e,0):hm|=n,Or===Zt&&(Or=0)),Ni(e)}function Cx(e,t){t===0&&(t=y_()),e=Ba(e,t),e!==null&&(hl(e,t),Ni(e))}function sT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cx(e,n)}function aT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(t),Cx(e,n)}function rT(e,t){return wp(e,t)}var lu=null,cr=null,pp=!1,cu=!1,Ed=!1,Ps=0;function Ni(e){e!==cr&&e.next===null&&(cr===null?lu=cr=e:cr=cr.next=e),cu=!0,pp||(pp=!0,lT())}function vl(e,t){if(!Ed&&cu){Ed=!0;do for(var n=!1,i=lu;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Fn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,zv(i,a))}else a=Zt,a=vu(i,i===ge?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||ul(i,a)||(n=!0,zv(i,a));i=i.next}while(n);Ed=!1}}function oT(){Rx()}function Rx(){cu=pp=!1;var e=0;Ps!==0&&gT()&&(e=Ps);for(var t=Bn(),n=null,i=lu;i!==null;){var s=i.next,a=Dx(i,t);a===0?(i.next=null,n===null?lu=s:n.next=s,s===null&&(cr=n)):(n=i,(e!==0||(a&3)!==0)&&(cu=!0)),i=s}Ze!==0&&Ze!==5||vl(e,!1),Ps!==0&&(Ps=0)}function Dx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Fn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=IM(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ge,n=Zt,n=vu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(re===2||re===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&td(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ul(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&td(i),Rp(n)){case 2:case 8:n=v_;break;case 32:n=Xc;break;case 268435456:n=__;break;default:n=Xc}return i=Nx.bind(null,e),n=wp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&td(i),e.callbackPriority=2,e.callbackNode=null,2}function Nx(e,t){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Nu()&&e.callbackNode!==n)return null;var i=Zt;return i=vu(e,e===ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(gx(e,i,t),Dx(e,Bn()),e.callbackNode!=null&&e.callbackNode===n?Nx.bind(null,e):null)}function zv(e,t){if(Nu())return null;gx(e,t,!0)}function lT(){_T(function(){(ee&6)!==0?wp(g_,oT):Rx()})}function dm(){if(Ps===0){var e=Ur;e===0&&(e=uc,uc<<=1,(uc&261888)===0&&(uc=256)),Ps=e}return Ps}function Fv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Cc(""+e)}function Vv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function cT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Fv((s[En]||null).action),r=i.submitter;r&&(t=(t=r[En]||null)?Fv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new _u("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ps!==0){var l=r?Vv(s,r):new FormData(s);sp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?Vv(s,r):new FormData(s),sp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(bc=0;bc<qd.length;bc++)Mc=qd[bc],Gv=Mc.toLowerCase(),Hv=Mc[0].toUpperCase()+Mc.slice(1),mi(Gv,"on"+Hv);var Mc,Gv,Hv,bc;mi(k_,"onAnimationEnd");mi(W_,"onAnimationIteration");mi(X_,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(w1,"onTransitionRun");mi(C1,"onTransitionStart");mi(R1,"onTransitionCancel");mi(q_,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);Ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ia("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(il));function Ux(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Yc(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){Yc(h)}s.currentTarget=null,a=l}}}}function Wt(e,t){var n=t[zd];n===void 0&&(n=t[zd]=new Set);var i=e+"__bubble";n.has(i)||(Lx(t,e,2,!1),n.add(i))}function Ad(e,t,n){var i=0;t&&(i|=4),Lx(n,e,i,t)}var Tc="_reactListening"+Math.random().toString(36).slice(2);function pm(e){if(!e[Tc]){e[Tc]=!0,T_.forEach(function(n){n!=="selectionchange"&&(uT.has(n)||Ad(n,!1,e),Ad(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Tc]||(t[Tc]=!0,Ad("selectionchange",!1,t))}}function Lx(e,t,n,i){switch(qx(t)){case 2:var s=zT;break;case 8:s=FT;break;default:s=_m}n=s.bind(null,t,n,e),s=void 0,!kd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function wd(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=fr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}U_(function(){var c=a,h=Up(n),p=[];t:{var u=Y_.get(e);if(u!==void 0){var d=_u,_=e;switch(e){case"keypress":if(Dc(n)===0)break t;case"keydown":case"keyup":d=a1;break;case"focusin":_="focus",d=ad;break;case"focusout":_="blur",d=ad;break;case"beforeblur":case"afterblur":d=ad;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=J0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=YM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=l1;break;case k_:case W_:case X_:d=KM;break;case q_:d=u1;break;case"scroll":case"scrollend":d=XM;break;case"wheel":d=f1;break;case"copy":case"cut":case"paste":d=jM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Q0;break;case"toggle":case"beforetoggle":d=p1}var T=(t&4)!==0,g=!T&&(e==="scroll"||e==="scrollend"),f=T?u!==null?u+"Capture":null:u;T=[];for(var m=c,x;m!==null;){var b=m;if(x=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||x===null||f===null||(b=Jo(m,f),b!=null&&T.push(sl(m,b,x))),g)break;m=m.return}0<T.length&&(u=new d(u,_,null,n,h),p.push({event:u,listeners:T}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",u&&n!==Hd&&(_=n.relatedTarget||n.fromElement)&&(fr(_)||_[Vr]))break t;if((d||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,d?(_=n.relatedTarget||n.toElement,d=c,_=_?fr(_):null,_!==null&&(g=ll(_),T=_.tag,_!==g||T!==5&&T!==27&&T!==6)&&(_=null)):(d=null,_=c),d!==_)){if(T=J0,b="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(T=Q0,b="onPointerLeave",f="onPointerEnter",m="pointer"),g=d==null?u:Uo(d),x=_==null?u:Uo(_),u=new T(b,m+"leave",d,n,h),u.target=g,u.relatedTarget=x,b=null,fr(h)===c&&(T=new T(f,m+"enter",_,n,h),T.target=x,T.relatedTarget=g,b=T),g=b,d&&_)e:{for(T=hT,f=d,m=_,x=0,b=f;b;b=T(b))x++;b=0;for(var R=m;R;R=T(R))b++;for(;0<x-b;)f=T(f),x--;for(;0<b-x;)m=T(m),b--;for(;x--;){if(f===m||m!==null&&f===m.alternate){T=f;break e}f=T(f),m=T(m)}T=null}else T=null;d!==null&&kv(p,u,d,T,!1),_!==null&&g!==null&&kv(p,g,_,T,!0)}}t:{if(u=c?Uo(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var E=ev;else if(tv(u))if(z_)E=T1;else{E=b1;var C=S1}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Np(c.elementType)&&(E=ev):E=M1;if(E&&(E=E(e,c))){B_(p,E,n,h);break t}C&&C(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&Gd(u,"number",u.value)}switch(C=c?Uo(c):window,e){case"focusin":(tv(C)||C.contentEditable==="true")&&(mr=C,Wd=c,Bo=null);break;case"focusout":Bo=Wd=mr=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,av(p,n,h);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":av(p,n,h)}var S;if(Op)t:{switch(e){case"compositionstart":var w="onCompositionStart";break t;case"compositionend":w="onCompositionEnd";break t;case"compositionupdate":w="onCompositionUpdate";break t}w=void 0}else pr?O_(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(I_&&n.locale!=="ko"&&(pr||w!=="onCompositionStart"?w==="onCompositionEnd"&&pr&&(S=L_()):(Ls=h,Lp="value"in Ls?Ls.value:Ls.textContent,pr=!0)),C=uu(c,w),0<C.length&&(w=new K0(w,e,null,n,h),p.push({event:w,listeners:C}),S?w.data=S:(S=P_(n),S!==null&&(w.data=S)))),(S=g1?v1(e,n):_1(e,n))&&(w=uu(c,"onBeforeInput"),0<w.length&&(C=new K0("onBeforeInput","beforeinput",null,n,h),p.push({event:C,listeners:w}),C.data=S)),cT(p,e,c,n,h)}Ux(p,t)})}function sl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function uu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Jo(e,n),s!=null&&i.unshift(sl(e,s,a)),s=Jo(e,t),s!=null&&i.push(sl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function hT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Jo(n,a),c!=null&&r.unshift(sl(n,c,l))):s||(c=Jo(n,a),c!=null&&r.push(sl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var fT=/\r\n?/g,dT=/\u0000|\uFFFD/g;function Wv(e){return(typeof e=="string"?e:""+e).replace(fT,`
`).replace(dT,"")}function Ix(e,t){return t=Wv(t),Wv(e)===t}function fe(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Nr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Nr(e,""+i);break;case"className":dc(e,"class",i);break;case"tabIndex":dc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":dc(e,n,i);break;case"style":N_(e,i,a);break;case"data":if(t!=="object"){dc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Cc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&fe(e,t,"name",s.name,s,null),fe(e,t,"formEncType",s.formEncType,s,null),fe(e,t,"formMethod",s.formMethod,s,null),fe(e,t,"formTarget",s.formTarget,s,null)):(fe(e,t,"encType",s.encType,s,null),fe(e,t,"method",s.method,s,null),fe(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Cc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=es);break;case"onScroll":i!=null&&Wt("scroll",e);break;case"onScrollEnd":i!=null&&Wt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Cc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Wt("beforetoggle",e),Wt("toggle",e),wc(e,"popover",i);break;case"xlinkActuate":Yi(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Yi(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Yi(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Yi(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Yi(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Yi(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Yi(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Yi(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Yi(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":wc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=kM.get(n)||n,wc(e,n,i))}}function mp(e,t,n,i,s,a){switch(n){case"style":N_(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(J(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Nr(e,i):(typeof i=="number"||typeof i=="bigint")&&Nr(e,""+i);break;case"onScroll":i!=null&&Wt("scroll",e);break;case"onScrollEnd":i!=null&&Wt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=es);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!E_.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[En]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):wc(e,n,i)}}}function ln(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",e),Wt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:fe(e,t,a,r,n,null)}}s&&fe(e,t,"srcSet",n.srcSet,n,null),i&&fe(e,t,"src",n.src,n,null);return;case"input":Wt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,t));break;default:fe(e,t,i,h,n,null)}}C_(e,a,o,l,c,r,s,!1);return;case"select":Wt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:fe(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Mr(e,!!i,t,!1):n!=null&&Mr(e,!!i,n,!0);return;case"textarea":Wt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:fe(e,t,r,o,n,null)}D_(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":fe(e,t,l,i,n,null));return;case"dialog":Wt("beforetoggle",e),Wt("toggle",e),Wt("cancel",e),Wt("close",e);break;case"iframe":case"object":Wt("load",e);break;case"video":case"audio":for(i=0;i<il.length;i++)Wt(il[i],e);break;case"image":Wt("error",e),Wt("load",e);break;case"details":Wt("toggle",e);break;case"embed":case"source":case"link":Wt("error",e),Wt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,t));default:fe(e,t,c,i,n,null)}return;default:if(Np(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&mp(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&fe(e,t,o,i,n,null))}function pT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||fe(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":a=d;break;case"name":s=d;break;case"checked":c=d;break;case"defaultChecked":h=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(J(137,t));break;default:d!==p&&fe(e,t,u,d,i,p)}}Vd(e,r,o,l,c,h,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||fe(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&fe(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?Mr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Mr(e,!!n,t,!0):Mr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:fe(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(J(91));break;default:s!==a&&fe(e,t,r,s,i,a)}R_(e,u,d);return;case"option":for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:fe(e,t,_,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":fe(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in n)u=n[T],n.hasOwnProperty(T)&&u!=null&&!i.hasOwnProperty(T)&&fe(e,t,T,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(J(137,t));break;default:fe(e,t,c,u,i,d)}return;default:if(Np(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&mp(e,t,g,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||mp(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&fe(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||fe(e,t,p,u,i,d)}function Xv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Xv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&Xv(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gp=null,vp=null;function hu(e){return e.nodeType===9?e:e.ownerDocument}function qv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ox(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _p(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cd=null;function gT(){var e=window.event;return e&&e.type==="popstate"?e===Cd?!1:(Cd=e,!0):(Cd=null,!1)}var Px=typeof setTimeout=="function"?setTimeout:void 0,vT=typeof clearTimeout=="function"?clearTimeout:void 0,Yv=typeof Promise=="function"?Promise:void 0,_T=typeof queueMicrotask=="function"?queueMicrotask:typeof Yv<"u"?function(e){return Yv.resolve(null).then(e).catch(yT)}:Px;function yT(e){setTimeout(function(){throw e})}function Qs(e){return e==="head"}function Zv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Fr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Yo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Yo(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[fl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Yo(e.ownerDocument.body);n=s}while(n);Fr(t)}function Jv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function yp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yp(n),Dp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function xT(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[fl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=oi(e.nextSibling),e===null)break}return null}function ST(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oi(e.nextSibling),e===null))return null;return e}function Bx(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=oi(e.nextSibling),e===null))return null;return e}function xp(e){return e.data==="$?"||e.data==="$~"}function Sp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bT(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function oi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var bp=null;function Kv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return oi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Qv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function zx(e,t,n){switch(t=hu(n),e){case"html":if(e=t.documentElement,!e)throw Error(J(452));return e;case"head":if(e=t.head,!e)throw Error(J(453));return e;case"body":if(e=t.body,!e)throw Error(J(454));return e;default:throw Error(J(451))}}function Yo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Dp(e)}var li=new Map,jv=new Set;function fu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var hs=ne.d;ne.d={f:MT,r:TT,D:ET,C:AT,L:wT,m:CT,X:DT,S:RT,M:NT};function MT(){var e=hs.f(),t=Ru();return e||t}function TT(e){var t=Gr(e);t!==null&&t.tag===5&&t.type==="form"?Ny(t):hs.r(e)}var Xr=typeof document>"u"?null:document;function Fx(e,t,n){var i=Xr;if(i&&typeof t=="string"&&t){var s=ii(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),jv.has(s)||(jv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),ln(t,"link",e),$e(t),i.head.appendChild(t)))}}function ET(e){hs.D(e),Fx("dns-prefetch",e,null)}function AT(e,t){hs.C(e,t),Fx("preconnect",e,t)}function wT(e,t,n){hs.L(e,t,n);var i=Xr;if(i&&e&&t){var s='link[rel="preload"][as="'+ii(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ii(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ii(n.imageSizes)+'"]')):s+='[href="'+ii(e)+'"]';var a=s;switch(t){case"style":a=zr(e);break;case"script":a=qr(e)}li.has(a)||(e=Te({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),li.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(_l(a))||t==="script"&&i.querySelector(yl(a))||(t=i.createElement("link"),ln(t,"link",e),$e(t),i.head.appendChild(t)))}}function CT(e,t){hs.m(e,t);var n=Xr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ii(i)+'"][href="'+ii(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=qr(e)}if(!li.has(a)&&(e=Te({rel:"modulepreload",href:e},t),li.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(yl(a)))return}i=n.createElement("link"),ln(i,"link",e),$e(i),n.head.appendChild(i)}}}function RT(e,t,n){hs.S(e,t,n);var i=Xr;if(i&&e){var s=br(i).hoistableStyles,a=zr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(_l(a)))o.loading=5;else{e=Te({rel:"stylesheet",href:e,"data-precedence":t},n),(n=li.get(a))&&mm(e,n);var l=r=i.createElement("link");$e(l),ln(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,zc(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function DT(e,t){hs.X(e,t);var n=Xr;if(n&&e){var i=br(n).hoistableScripts,s=qr(e),a=i.get(s);a||(a=n.querySelector(yl(s)),a||(e=Te({src:e,async:!0},t),(t=li.get(s))&&gm(e,t),a=n.createElement("script"),$e(a),ln(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function NT(e,t){hs.M(e,t);var n=Xr;if(n&&e){var i=br(n).hoistableScripts,s=qr(e),a=i.get(s);a||(a=n.querySelector(yl(s)),a||(e=Te({src:e,async:!0,type:"module"},t),(t=li.get(s))&&gm(e,t),a=n.createElement("script"),$e(a),ln(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function $v(e,t,n,i){var s=(s=Bs.current)?fu(s):null;if(!s)throw Error(J(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=zr(n.href),n=br(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zr(n.href);var a=br(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(_l(e)))&&!a._p&&(r.instance=a,r.state.loading=5),li.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},li.set(e,n),a||UT(s,e,n,r.state))),t&&i===null)throw Error(J(528,""));return r}if(t&&i!==null)throw Error(J(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qr(n),n=br(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,e))}}function zr(e){return'href="'+ii(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function Vx(e){return Te({},e,{"data-precedence":e.precedence,precedence:null})}function UT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ln(t,"link",n),$e(t),e.head.appendChild(t))}function qr(e){return'[src="'+ii(e)+'"]'}function yl(e){return"script[async]"+e}function t_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ii(n.href)+'"]');if(i)return t.instance=i,$e(i),i;var s=Te({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),$e(i),ln(i,"style",s),zc(i,n.precedence,e),t.instance=i;case"stylesheet":s=zr(n.href);var a=e.querySelector(_l(s));if(a)return t.state.loading|=4,t.instance=a,$e(a),a;i=Vx(n),(s=li.get(s))&&mm(i,s),a=(e.ownerDocument||e).createElement("link"),$e(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(a,"link",i),t.state.loading|=4,zc(a,n.precedence,e),t.instance=a;case"script":return a=qr(n.src),(s=e.querySelector(yl(a)))?(t.instance=s,$e(s),s):(i=n,(s=li.get(a))&&(i=Te({},n),gm(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),$e(s),ln(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(J(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,zc(i,n.precedence,e));return t.instance}function zc(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function mm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Fc=null;function e_(e,t,n){if(Fc===null){var i=new Map,s=Fc=new Map;s.set(n,i)}else s=Fc,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[fl]||a[an]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function n_(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function LT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function IT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=zr(i.href),a=t.querySelector(_l(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=du.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,$e(a);return}a=t.ownerDocument||t,i=Vx(i),(s=li.get(s))&&mm(i,s),a=a.createElement("link"),$e(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),ln(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=du.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Rd=0;function OT(e,t){return e.stylesheets&&e.count===0&&Vc(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Rd===0&&(Rd=62500*mT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vc(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Rd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function du(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pu=null;function Vc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pu=new Map,t.forEach(PT,e),pu=null,du.call(e))}function PT(e,t){if(!(t.state.loading&4)){var n=pu.get(e);if(n)var i=n.get(null);else{n=new Map,pu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=du.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var al={$$typeof:ts,Provider:null,Consumer:null,_currentValue:Ta,_currentValue2:Ta,_threadCount:0};function BT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ed(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ed(0),this.hiddenUpdates=ed(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Hx(e,t,n,i,s,a,r,o,l,c,h,p){return e=new BT(e,t,n,r,l,c,h,p,o),t=1,a===!0&&(t|=24),a=On(3,null,null,t),e.current=a,a.stateNode=e,t=Hp(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Xp(a),e}function kx(e){return e?(e=_r,e):_r}function Wx(e,t,n,i,s,a){s=kx(s),i.context===null?i.context=s:i.pendingContext=s,i=Fs(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Vs(e,i,t),n!==null&&(Tn(n,e,t),Fo(n,e,t))}function i_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vm(e,t){i_(e,t),(e=e.alternate)&&i_(e,t)}function Xx(e){if(e.tag===13||e.tag===31){var t=Ba(e,67108864);t!==null&&Tn(t,e,67108864),vm(e,67108864)}}function s_(e){if(e.tag===13||e.tag===31){var t=Vn();t=Cp(t);var n=Ba(e,t);n!==null&&Tn(n,e,t),vm(e,t)}}var mu=!0;function zT(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ne.p;try{ne.p=2,_m(e,t,n,i)}finally{ne.p=a,Dt.T=s}}function FT(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ne.p;try{ne.p=8,_m(e,t,n,i)}finally{ne.p=a,Dt.T=s}}function _m(e,t,n,i){if(mu){var s=Mp(i);if(s===null)wd(e,t,i,gu,n),a_(e,i);else if(GT(s,e,t,n,i))i.stopPropagation();else if(a_(e,i),t&4&&-1<VT.indexOf(e)){for(;s!==null;){var a=Gr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Sa(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Fn(r);o.entanglements[1]|=l,r&=~l}Ni(a),(ee&6)===0&&(au=Bn()+500,vl(0,!1))}}break;case 31:case 13:o=Ba(a,2),o!==null&&Tn(o,a,2),Ru(),vm(a,2)}if(a=Mp(i),a===null&&wd(e,t,i,gu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else wd(e,t,i,null,n)}}function Mp(e){return e=Up(e),ym(e)}var gu=null;function ym(e){if(gu=null,e=fr(e),e!==null){var t=ll(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h_(t),e!==null)return e;e=null}else if(n===31){if(e=f_(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return gu=e,null}function qx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wM()){case g_:return 2;case v_:return 8;case Xc:case CM:return 32;case __:return 268435456;default:return 32}default:return 32}}var Tp=!1,ks=null,Ws=null,Xs=null,rl=new Map,ol=new Map,Ns=[],VT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(e,t){switch(e){case"focusin":case"focusout":ks=null;break;case"dragenter":case"dragleave":Ws=null;break;case"mouseover":case"mouseout":Xs=null;break;case"pointerover":case"pointerout":rl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(t.pointerId)}}function Co(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Gr(t),t!==null&&Xx(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function GT(e,t,n,i,s){switch(t){case"focusin":return ks=Co(ks,e,t,n,i,s),!0;case"dragenter":return Ws=Co(Ws,e,t,n,i,s),!0;case"mouseover":return Xs=Co(Xs,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return rl.set(a,Co(rl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,ol.set(a,Co(ol.get(a)||null,e,t,n,i,s)),!0}return!1}function Yx(e){var t=fr(e.target);if(t!==null){var n=ll(t);if(n!==null){if(t=n.tag,t===13){if(t=h_(n),t!==null){e.blockedOn=t,H0(e.priority,function(){s_(n)});return}}else if(t===31){if(t=f_(n),t!==null){e.blockedOn=t,H0(e.priority,function(){s_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Mp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Hd=i,n.target.dispatchEvent(i),Hd=null}else return t=Gr(n),t!==null&&Xx(t),e.blockedOn=n,!1;t.shift()}return!0}function r_(e,t,n){Gc(e)&&n.delete(t)}function HT(){Tp=!1,ks!==null&&Gc(ks)&&(ks=null),Ws!==null&&Gc(Ws)&&(Ws=null),Xs!==null&&Gc(Xs)&&(Xs=null),rl.forEach(r_),ol.forEach(r_)}function Ec(e,t){e.blockedOn===t&&(e.blockedOn=null,Tp||(Tp=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,HT)))}var Ac=null;function o_(e){Ac!==e&&(Ac=e,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,function(){Ac===e&&(Ac=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(ym(i||n)===null)continue;break}var a=Gr(n);a!==null&&(e.splice(t,3),t-=3,sp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Fr(e){function t(l){return Ec(l,e)}ks!==null&&Ec(ks,e),Ws!==null&&Ec(Ws,e),Xs!==null&&Ec(Xs,e),rl.forEach(t),ol.forEach(t);for(var n=0;n<Ns.length;n++){var i=Ns[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ns.length&&(n=Ns[0],n.blockedOn===null);)Yx(n),n.blockedOn===null&&Ns.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[En]||null;if(typeof a=="function")r||o_(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[En]||null)o=r.formAction;else if(ym(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),o_(n)}}}function Zx(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function xm(e){this._internalRoot=e}Uu.prototype.render=xm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(J(409));var n=t.current,i=Vn();Wx(n,i,e,t,null,null)};Uu.prototype.unmount=xm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wx(e.current,2,null,e,null,null),Ru(),t[Vr]=null}};function Uu(e){this._internalRoot=e}Uu.prototype.unstable_scheduleHydration=function(e){if(e){var t=M_();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ns.length&&t!==0&&t<Ns[n].priority;n++);Ns.splice(n,0,e),n===0&&Yx(e)}};var l_=c_.version;if(l_!=="19.2.6")throw Error(J(527,l_,"19.2.6"));ne.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(J(188)):(e=Object.keys(e).join(","),Error(J(268,e)));return e=xM(t),e=e!==null?d_(e):null,e=e===null?null:e.stateNode,e};var kT={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:Dt,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ro.isDisabled&&Ro.supportsFiber))try{cl=Ro.inject(kT),zn=Ro}catch{}var Ro;Lu.createRoot=function(e,t){if(!u_(e))throw Error(J(299));var n=!1,i="",s=Fy,a=Vy,r=Gy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Hx(e,1,!1,null,null,n,i,null,s,a,r,Zx),e[Vr]=t.current,pm(e),new xm(t)};Lu.hydrateRoot=function(e,t,n){if(!u_(e))throw Error(J(299));var i=!1,s="",a=Fy,r=Vy,o=Gy,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Hx(e,1,!0,t,n??null,i,s,l,a,r,o,Zx),t.context=kx(null),n=t.current,i=Vn(),i=Cp(i),s=Fs(i),s.callback=null,Vs(n,s,i),n=i,t.current.lanes=n,hl(t,n),Ni(t),e[Vr]=t.current,pm(e),new Uu(t)};Lu.version="19.2.6"});var jx=Xi((Y3,Qx)=>{"use strict";function Kx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kx)}catch(e){console.error(e)}}Kx(),Qx.exports=Jx()});function WT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function XT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Rl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function JS(){let e=Rl("canvas");return e.style.display="block",e}function xg(...e){let t="THREE."+e.shift();ro?ro("log",t,...e):console.log(t,...e)}function KS(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function At(...e){e=KS(e);let t="THREE."+e.shift();if(ro)ro("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ct(...e){e=KS(e);let t="THREE."+e.shift();if(ro)ro("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function dh(...e){let t=e.join(" ");t in $x||($x[t]=!0,At(...e))}function QS(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}function Ql(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[e&255]+fn[e>>8&255]+fn[e>>16&255]+fn[e>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function Qt(e,t,n){return Math.max(t,Math.min(n,e))}function qT(e,t){return(e%t+t)%t}function bm(e,t,n){return(1-n)*e+n*t}function xl(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function wn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}function YT(){let e={enabled:!0,workingColorSpace:Al,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ae&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ae&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xs?wl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return dh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return dh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Al]:{primaries:t,whitePoint:i,transfer:wl,toXYZ:eS,fromXYZ:nS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:eS,fromXYZ:nS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),e}function vs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ao(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function Em(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?mh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(At("Texture: Unable to serialize Texture."),{})}function Cm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Pm(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Va.fromArray(e,a);let o=s.x*Math.abs(Va.x)+s.y*Math.abs(Va.y)+s.z*Math.abs(Va.z),l=t.dot(Va),c=n.dot(Va),h=i.dot(Va);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function oE(e,t,n,i,s,a,r,o){let l;if(t.side===yn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===_s,o),l===null)return null;Zu.copy(o),Zu.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Zu);return c<n.near||c>n.far?null:{distance:c,point:Zu.clone(),object:e}}function Ju(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Wu),e.getVertexPosition(l,Xu),e.getVertexPosition(c,qu);let h=oE(e,t,n,i,Wu,Xu,qu,dS);if(h){let p=new V;sa.getBarycoord(dS,Wu,Xu,qu,p),s&&(h.uv=sa.getInterpolatedAttribute(s,o,l,c,p,new ie)),a&&(h.uv1=sa.getInterpolatedAttribute(a,o,l,c,p,new ie)),r&&(h.normal=sa.getInterpolatedAttribute(r,o,l,c,p,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new V,materialIndex:0};sa.getNormal(Wu,Xu,qu,u.normal),h.face=u,h.barycoord=p}return h}function Qa(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(pS(s))s.isRenderTargetTexture?(At("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(pS(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function pn(e){let t={};for(let n=0;n<e.length;n++){let i=Qa(e[n]);for(let s in i)t[s]=i[s]}return t}function pS(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function hE(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Sg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}function Qu(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Tg(e,t,n,i){let s=bE(i);switch(n){case mg:return e*t;case vg:return e*t/s.components*s.byteLength;case kh:return e*t/s.components*s.byteLength;case pa:return e*t*2/s.components*s.byteLength;case Wh:return e*t*2/s.components*s.byteLength;case gg:return e*t*3/s.components*s.byteLength;case fi:return e*t*4/s.components*s.byteLength;case Xh:return e*t*4/s.components*s.byteLength;case Xl:case ql:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Yl:case Zl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Yh:case Jh:return Math.max(e,16)*Math.max(t,8)/4;case qh:case Zh:return Math.max(e,8)*Math.max(t,8)/2;case Kh:case Qh:case $h:case tf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case jh:case Jl:case ef:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case nf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case sf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case af:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case rf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case of:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case lf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case cf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case uf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case hf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ff:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case df:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case pf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case mf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case gf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case vf:case _f:case yf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case xf:case Sf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Kl:case bf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bE(e){switch(e){case Jn:case hg:return{byteLength:1,components:1};case fo:case fg:case Gi:return{byteLength:2,components:1};case Gh:case Hh:return{byteLength:2,components:4};case Si:case Vh:case bi:return{byteLength:4,components:1};case dg:case pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}var vS,jm,_S,Hl,yS,ho,_s,yn,Fi,Vi,Xa,$m,tg,eg,xS,aa,SS,bS,MS,TS,ES,AS,wS,CS,eh,nh,RS,DS,NS,US,LS,IS,OS,PS,BS,ih,sh,ah,qa,rh,oh,lh,ch,ng,zS,FS,xi,ig,sg,ag,rg,og,lg,cg,ug,ha,Ka,Bh,zh,kl,uh,Ii,hh,nn,VS,Wl,cn,Fh,fa,Jn,hg,fg,fo,Vh,Si,bi,Gi,Gh,Hh,po,dg,pg,mg,gg,fi,Oi,da,vg,kh,pa,Wh,Xh,Xl,ql,Yl,Zl,qh,Yh,Zh,Jh,Kh,Qh,jh,$h,tf,Jl,ef,nf,sf,af,rf,of,lf,cf,uf,hf,ff,df,pf,mf,gf,vf,_f,yf,xf,Sf,Kl,bf,El,fh,th,Wm,Xm,qm,Ym,GS,_g,HS,xs,Xn,Al,wl,ae,ka,Zm,kS,WS,XS,Mf,qS,YS,Tf,ZS,Jm,yg,yi,Cl,$x,ro,jS,Pi,fn,Sm,ph,Eg,ie,Bi,Ag,V,Mm,tS,wg,Ut,Tm,eS,nS,Jt,Yr,mh,ZT,oo,JT,Am,Rn,Cg,Ie,gh,Yn,Dl,vh,Ph,Xe,Zr,gi,KT,QT,js,Iu,kn,iS,sS,ra,Nl,jT,aS,Jr,fs,Ou,Sl,$T,tE,rS,oS,lS,cS,eE,Kr,wm,hi,Wa,nE,lo,$S,$s,Pu,se,dn,Ul,vi,ds,Rm,ps,Qr,jr,uS,Dm,Nm,Um,Lm,Im,Om,sa,oa,ms,_i,Bu,$r,to,eo,ta,ea,Fa,bl,zu,Fu,Va,We,Vu,iE,qn,Ll,Il,ui,sE,Ml,Bm,co,aE,ci,zm,no,Wn,Tl,en,zi,rE,Ya,gs,Fm,Gu,na,Vm,Hu,Gm,_h,Ol,hS,Ga,ku,fS,Wu,Xu,qu,Hm,Yu,dS,Zu,Dn,yh,km,lE,cE,Li,Ha,uE,Ku,Pl,Bl,ys,xh,zl,uo,Za,tb,fE,dE,_n,Sh,bh,Mh,la,Th,Eh,Ah,wh,Zn,ca,Ch,Rh,Dh,Fl,ua,Nh,Uh,eb,Lh,ju,$u,Ui,Vl,ia,mS,gS,Cn,Ja,io,so,Ih,Oh,bg,pE,Mg,mE,gE,vE,_E,yE,xE,SE,Km,Ee,Z3,Gl,Rg,Qm,Dg=o0(()=>{vS=0,jm=1,_S=2,Hl=1,yS=2,ho=3,_s=0,yn=1,Fi=2,Vi=0,Xa=1,$m=2,tg=3,eg=4,xS=5,aa=100,SS=101,bS=102,MS=103,TS=104,ES=200,AS=201,wS=202,CS=203,eh=204,nh=205,RS=206,DS=207,NS=208,US=209,LS=210,IS=211,OS=212,PS=213,BS=214,ih=0,sh=1,ah=2,qa=3,rh=4,oh=5,lh=6,ch=7,ng=0,zS=1,FS=2,xi=0,ig=1,sg=2,ag=3,rg=4,og=5,lg=6,cg=7,ug=300,ha=301,Ka=302,Bh=303,zh=304,kl=306,uh=1e3,Ii=1001,hh=1002,nn=1003,VS=1004,Wl=1005,cn=1006,Fh=1007,fa=1008,Jn=1009,hg=1010,fg=1011,fo=1012,Vh=1013,Si=1014,bi=1015,Gi=1016,Gh=1017,Hh=1018,po=1020,dg=35902,pg=35899,mg=1021,gg=1022,fi=1023,Oi=1026,da=1027,vg=1028,kh=1029,pa=1030,Wh=1031,Xh=1033,Xl=33776,ql=33777,Yl=33778,Zl=33779,qh=35840,Yh=35841,Zh=35842,Jh=35843,Kh=36196,Qh=37492,jh=37496,$h=37488,tf=37489,Jl=37490,ef=37491,nf=37808,sf=37809,af=37810,rf=37811,of=37812,lf=37813,cf=37814,uf=37815,hf=37816,ff=37817,df=37818,pf=37819,mf=37820,gf=37821,vf=36492,_f=36494,yf=36495,xf=36283,Sf=36284,Kl=36285,bf=36286,El=2300,fh=2301,th=2302,Wm=2303,Xm=2400,qm=2401,Ym=2402,GS=3200,_g=0,HS=1,xs="",Xn="srgb",Al="srgb-linear",wl="linear",ae="srgb",ka=7680,Zm=519,kS=512,WS=513,XS=514,Mf=515,qS=516,YS=517,Tf=518,ZS=519,Jm=35044,yg="300 es",yi=2e3,Cl=2001;$x={},ro=null;jS={[ih]:sh,[ah]:lh,[rh]:ch,[qa]:oh,[sh]:ih,[lh]:ah,[ch]:rh,[oh]:qa},Pi=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sm=Math.PI/180,ph=180/Math.PI;Eg=class Eg{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Eg.prototype.isVector2=!0;ie=Eg,Bi=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],_=a[r+2],T=a[r+3];if(p!==T||l!==u||c!==d||h!==_){let g=l*u+c*d+h*_+p*T;g<0&&(u=-u,d=-d,_=-_,T=-T,g=-g);let f=1-o;if(g<.9995){let m=Math.acos(g),x=Math.sin(m);f=Math.sin(f*m)/x,o=Math.sin(o*m)/x,l=l*f+u*o,c=c*f+d*o,h=h*f+_*o,p=p*f+T*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+_*o,p=p*f+T*o;let m=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=m,c*=m,h*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=a[r],u=a[r+1],d=a[r+2],_=a[r+3];return t[n]=o*_+h*p+l*d-c*u,t[n+1]=l*_+h*u+c*p-o*d,t[n+2]=c*_+h*d+o*u-l*p,t[n+3]=h*_-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=u*h*p+c*d*_,this._y=c*d*p-u*h*_,this._z=c*h*_+u*d*p,this._w=c*h*p-u*d*_;break;case"YXZ":this._x=u*h*p+c*d*_,this._y=c*d*p-u*h*_,this._z=c*h*_-u*d*p,this._w=c*h*p+u*d*_;break;case"ZXY":this._x=u*h*p-c*d*_,this._y=c*d*p+u*h*_,this._z=c*h*_+u*d*p,this._w=c*h*p-u*d*_;break;case"ZYX":this._x=u*h*p-c*d*_,this._y=c*d*p+u*h*_,this._z=c*h*_-u*d*p,this._w=c*h*p+u*d*_;break;case"YZX":this._x=u*h*p+c*d*_,this._y=c*d*p+u*h*_,this._z=c*h*_-u*d*p,this._w=c*h*p-u*d*_;break;case"XZY":this._x=u*h*p-c*d*_,this._y=c*d*p-u*h*_,this._z=c*h*_+u*d*p,this._w=c*h*p+u*d*_;break;default:At("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ag=class Ag{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(tS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(tS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Mm.copy(this).projectOnVector(t),this.sub(Mm)}reflect(t){return this.sub(Mm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ag.prototype.isVector3=!0;V=Ag,Mm=new V,tS=new Bi,wg=class wg{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],_=i[8],T=s[0],g=s[3],f=s[6],m=s[1],x=s[4],b=s[7],R=s[2],E=s[5],C=s[8];return a[0]=r*T+o*m+l*R,a[3]=r*g+o*x+l*E,a[6]=r*f+o*b+l*C,a[1]=c*T+h*m+p*R,a[4]=c*g+h*x+p*E,a[7]=c*f+h*b+p*C,a[2]=u*T+d*m+_*R,a[5]=u*g+d*x+_*E,a[8]=u*f+d*b+_*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*a,d=c*a-r*l,_=n*p+i*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/_;return t[0]=p*T,t[1]=(s*c-h*i)*T,t[2]=(o*i-s*r)*T,t[3]=u*T,t[4]=(h*n-s*l)*T,t[5]=(s*a-o*n)*T,t[6]=d*T,t[7]=(i*l-c*n)*T,t[8]=(r*n-i*a)*T,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Tm.makeScale(t,n)),this}rotate(t){return this.premultiply(Tm.makeRotation(-t)),this}translate(t,n){return this.premultiply(Tm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wg.prototype.isMatrix3=!0;Ut=wg,Tm=new Ut,eS=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nS=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt=YT();mh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Yr===void 0&&(Yr=Rl("canvas")),Yr.width=t.width,Yr.height=t.height;let s=Yr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Yr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Rl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=vs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vs(n[i]/255)*255):n[i]=vs(n[i]);return{data:n,width:t.width,height:t.height}}else return At("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ZT=0,oo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=Ql(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Em(s[r].image)):a.push(Em(s[r]))}else a=Em(s);i.url=a}return n||(t.images[this.uuid]=i),i}};JT=0,Am=new V,Rn=class e extends Pi{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ii,s=Ii,a=cn,r=fa,o=fi,l=Jn,c=e.DEFAULT_ANISOTROPY,h=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=Ql(),this.name="",this.source=new oo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Am).x}get height(){return this.source.getSize(Am).y}get depth(){return this.source.getSize(Am).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){At(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){At(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ug)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uh:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case hh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uh:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case hh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=ug;Rn.DEFAULT_ANISOTROPY=1;Cg=class Cg{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],_=l[9],T=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-T)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+T)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,b=(d+1)/2,R=(f+1)/2,E=(h+u)/4,C=(p+T)/4,S=(_+g)/4;return x>b&&x>R?x<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(x),s=E/i,a=C/i):b>R?b<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),i=E/s,a=S/s):R<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),i=C/a,s=S/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-_)*(g-_)+(p-T)*(p-T)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(p-T)/m,this.z=(u-h)/m,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Qt(this.x,t.x,n.x),this.y=Qt(this.y,t.y,n.y),this.z=Qt(this.z,t.z,n.z),this.w=Qt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Qt(this.x,t,n),this.y=Qt(this.y,t,n),this.z=Qt(this.z,t,n),this.w=Qt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cg.prototype.isVector4=!0;Ie=Cg,gh=class extends Pi{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ie(0,0,t,n),this.scissorTest=!1,this.viewport=new Ie(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Rn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new oo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends gh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Dl=class extends Rn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},vh=class extends Rn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ph=class Ph{constructor(t,n,i,s,a,r,o,l,c,h,p,u,d,_,T,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,p,u,d,_,T,g)}set(t,n,i,s,a,r,o,l,c,h,p,u,d,_,T,g){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=_,f[11]=T,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ph().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Zr.setFromMatrixColumn(t,0).length(),a=1/Zr.setFromMatrixColumn(t,1).length(),r=1/Zr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*h,d=r*p,_=o*h,T=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+_*c,n[5]=u-T*c,n[9]=-o*l,n[2]=T-u*c,n[6]=_+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,d=l*p,_=c*h,T=c*p;n[0]=u+T*o,n[4]=_*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-_,n[6]=T+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,d=l*p,_=c*h,T=c*p;n[0]=u-T*o,n[4]=-r*p,n[8]=_+d*o,n[1]=d+_*o,n[5]=r*h,n[9]=T-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,d=r*p,_=o*h,T=o*p;n[0]=l*h,n[4]=_*c-d,n[8]=u*c+T,n[1]=l*p,n[5]=T*c+u,n[9]=d*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,_=o*l,T=o*c;n[0]=l*h,n[4]=T-u*p,n[8]=_*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+_,n[10]=u-T*p}else if(t.order==="XZY"){let u=r*l,d=r*c,_=o*l,T=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+T,n[5]=r*h,n[9]=d*p-_,n[2]=_*p-d,n[6]=o*h,n[10]=T*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KT,t,QT)}lookAt(t,n,i){let s=this.elements;return kn.subVectors(t,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),js.crossVectors(i,kn),js.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),js.crossVectors(i,kn)),js.normalize(),Iu.crossVectors(kn,js),s[0]=js.x,s[4]=Iu.x,s[8]=kn.x,s[1]=js.y,s[5]=Iu.y,s[9]=kn.y,s[2]=js.z,s[6]=Iu.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],_=i[2],T=i[6],g=i[10],f=i[14],m=i[3],x=i[7],b=i[11],R=i[15],E=s[0],C=s[4],S=s[8],w=s[12],N=s[1],D=s[5],B=s[9],X=s[13],q=s[2],O=s[6],G=s[10],k=s[14],tt=s[3],et=s[7],ht=s[11],xt=s[15];return a[0]=r*E+o*N+l*q+c*tt,a[4]=r*C+o*D+l*O+c*et,a[8]=r*S+o*B+l*G+c*ht,a[12]=r*w+o*X+l*k+c*xt,a[1]=h*E+p*N+u*q+d*tt,a[5]=h*C+p*D+u*O+d*et,a[9]=h*S+p*B+u*G+d*ht,a[13]=h*w+p*X+u*k+d*xt,a[2]=_*E+T*N+g*q+f*tt,a[6]=_*C+T*D+g*O+f*et,a[10]=_*S+T*B+g*G+f*ht,a[14]=_*w+T*X+g*k+f*xt,a[3]=m*E+x*N+b*q+R*tt,a[7]=m*C+x*D+b*O+R*et,a[11]=m*S+x*B+b*G+R*ht,a[15]=m*w+x*X+b*k+R*xt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],_=t[3],T=t[7],g=t[11],f=t[15],m=l*d-c*u,x=o*d-c*p,b=o*u-l*p,R=r*d-c*h,E=r*u-l*h,C=r*p-o*h;return n*(T*m-g*x+f*b)-i*(_*m-g*R+f*E)+s*(_*x-T*R+f*C)-a*(_*b-T*E+g*C)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],_=t[12],T=t[13],g=t[14],f=t[15],m=n*o-i*r,x=n*l-s*r,b=n*c-a*r,R=i*l-s*o,E=i*c-a*o,C=s*c-a*l,S=h*T-p*_,w=h*g-u*_,N=h*f-d*_,D=p*g-u*T,B=p*f-d*T,X=u*f-d*g,q=m*X-x*B+b*D+R*N-E*w+C*S;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/q;return t[0]=(o*X-l*B+c*D)*O,t[1]=(s*B-i*X-a*D)*O,t[2]=(T*C-g*E+f*R)*O,t[3]=(u*E-p*C-d*R)*O,t[4]=(l*N-r*X-c*w)*O,t[5]=(n*X-s*N+a*w)*O,t[6]=(g*b-_*C-f*x)*O,t[7]=(h*C-u*b+d*x)*O,t[8]=(r*B-o*N+c*S)*O,t[9]=(i*N-n*B-a*S)*O,t[10]=(_*E-T*b+f*m)*O,t[11]=(p*b-h*E-d*m)*O,t[12]=(o*w-r*D-l*S)*O,t[13]=(n*D-i*w+s*S)*O,t[14]=(T*x-_*R-g*m)*O,t[15]=(h*R-p*x+u*m)*O,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,p=o+o,u=a*c,d=a*h,_=a*p,T=r*h,g=r*p,f=o*p,m=l*c,x=l*h,b=l*p,R=i.x,E=i.y,C=i.z;return s[0]=(1-(T+f))*R,s[1]=(d+b)*R,s[2]=(_-x)*R,s[3]=0,s[4]=(d-b)*E,s[5]=(1-(u+f))*E,s[6]=(g+m)*E,s[7]=0,s[8]=(_+x)*C,s[9]=(g-m)*C,s[10]=(1-(u+T))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinant();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Zr.set(s[0],s[1],s[2]).length(),o=Zr.set(s[4],s[5],s[6]).length(),l=Zr.set(s[8],s[9],s[10]).length();a<0&&(r=-r),gi.copy(this);let c=1/r,h=1/o,p=1/l;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=p,gi.elements[9]*=p,gi.elements[10]*=p,n.setFromRotationMatrix(gi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=yi,l=!1){let c=this.elements,h=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),_,T;if(l)_=a/(r-a),T=r*a/(r-a);else if(o===yi)_=-(r+a)/(r-a),T=-2*r*a/(r-a);else if(o===Cl)_=-r/(r-a),T=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=yi,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),_,T;if(l)_=1/(r-a),T=r/(r-a);else if(o===yi)_=-2/(r-a),T=-(r+a)/(r-a);else if(o===Cl)_=-1/(r-a),T=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Ph.prototype.isMatrix4=!0;Xe=Ph,Zr=new V,gi=new Xe,KT=new V(0,0,0),QT=new V(1,1,1),js=new V,Iu=new V,kn=new V,iS=new Xe,sS=new Bi,ra=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:At("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return iS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return sS.setFromEuler(this),this.setFromQuaternion(sS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ra.DEFAULT_ORDER="XYZ";Nl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jT=0,aS=new V,Jr=new Bi,fs=new Xe,Ou=new V,Sl=new V,$T=new V,tE=new Bi,rS=new V(1,0,0),oS=new V(0,1,0),lS=new V(0,0,1),cS={type:"added"},eE={type:"removed"},Kr={type:"childadded",child:null},wm={type:"childremoved",child:null},hi=class e extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=Ql(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new ra,i=new Bi,s=new V(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ut}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,n){return Jr.setFromAxisAngle(t,n),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(rS,t)}rotateY(t){return this.rotateOnAxis(oS,t)}rotateZ(t){return this.rotateOnAxis(lS,t)}translateOnAxis(t,n){return aS.copy(t).applyQuaternion(this.quaternion),this.position.add(aS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(rS,t)}translateY(t){return this.translateOnAxis(oS,t)}translateZ(t){return this.translateOnAxis(lS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ou.copy(t):Ou.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fs.lookAt(Sl,Ou,this.up):fs.lookAt(Ou,Sl,this.up),this.quaternion.setFromRotationMatrix(fs),s&&(fs.extractRotation(s.matrixWorld),Jr.setFromRotationMatrix(fs),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ct("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cS),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eE),wm.child=t,this.dispatchEvent(wm),wm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fs.multiply(t.parent.matrixWorld)),t.applyMatrix4(fs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cS),Kr.child=t,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,t,$T),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,tE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};hi.DEFAULT_UP=new V(0,1,0);hi.DEFAULT_MATRIX_AUTO_UPDATE=!0;hi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Wa=class extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}},nE={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let T of t.hand.values()){let g=n.getJointPose(T,i),f=this._getHandJoint(c,T);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nE)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Wa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},$S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},Pu={h:0,s:0,l:0};se=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=qT(t,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Cm(r,a,t+1/3),this.g=Cm(r,a,t),this.b=Cm(r,a,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,n=Xn){function i(a){a!==void 0&&parseFloat(a)<1&&At("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:At("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);At("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Xn){let i=$S[t.toLowerCase()];return i!==void 0?this.setHex(i,n):At("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return Jt.workingToColorSpace(dn.copy(this),t),Math.round(Qt(dn.r*255,0,255))*65536+Math.round(Qt(dn.g*255,0,255))*256+Math.round(Qt(dn.b*255,0,255))}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(dn.copy(this),n);let i=dn.r,s=dn.g,a=dn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(dn.copy(this),n),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Xn){Jt.workingToColorSpace(dn.copy(this),t);let n=dn.r,i=dn.g,s=dn.b;return t!==Xn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL($s),this.setHSL($s.h+t,$s.s+n,$s.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL($s),t.getHSL(Pu);let i=bm($s.h,Pu.h,n),s=bm($s.s,Pu.s,n),a=bm($s.l,Pu.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new se;se.NAMES=$S;Ul=class extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ra,this.environmentIntensity=1,this.environmentRotation=new ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},vi=new V,ds=new V,Rm=new V,ps=new V,Qr=new V,jr=new V,uS=new V,Dm=new V,Nm=new V,Um=new V,Lm=new Ie,Im=new Ie,Om=new Ie,sa=class e{constructor(t=new V,n=new V,i=new V){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),vi.subVectors(t,n),s.cross(vi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){vi.subVectors(s,n),ds.subVectors(i,n),Rm.subVectors(t,n);let r=vi.dot(vi),o=vi.dot(ds),l=vi.dot(Rm),c=ds.dot(ds),h=ds.dot(Rm),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,_=(r*h-o*l)*u;return a.set(1-d-_,_,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ps)===null?!1:ps.x>=0&&ps.y>=0&&ps.x+ps.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,ps)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ps.x),l.addScaledVector(r,ps.y),l.addScaledVector(o,ps.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Lm.setScalar(0),Im.setScalar(0),Om.setScalar(0),Lm.fromBufferAttribute(t,n),Im.fromBufferAttribute(t,i),Om.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Lm,a.x),r.addScaledVector(Im,a.y),r.addScaledVector(Om,a.z),r}static isFrontFacing(t,n,i,s){return vi.subVectors(i,n),ds.subVectors(t,n),vi.cross(ds).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ds.subVectors(this.a,this.b),vi.cross(ds).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Qr.subVectors(s,i),jr.subVectors(a,i),Dm.subVectors(t,i);let l=Qr.dot(Dm),c=jr.dot(Dm);if(l<=0&&c<=0)return n.copy(i);Nm.subVectors(t,s);let h=Qr.dot(Nm),p=jr.dot(Nm);if(h>=0&&p<=h)return n.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(Qr,r);Um.subVectors(t,a);let d=Qr.dot(Um),_=jr.dot(Um);if(_>=0&&d<=_)return n.copy(a);let T=d*c-l*_;if(T<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(jr,o);let g=h*_-d*p;if(g<=0&&p-h>=0&&d-_>=0)return uS.subVectors(a,s),o=(p-h)/(p-h+(d-_)),n.copy(s).addScaledVector(uS,o);let f=1/(g+T+u);return r=T*f,o=u*f,n.copy(i).addScaledVector(Qr,r).addScaledVector(jr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oa=class{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(_i.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(_i.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=_i.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,_i):_i.fromBufferAttribute(a,r),_i.applyMatrix4(t.matrixWorld),this.expandByPoint(_i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bu.copy(i.boundingBox)),Bu.applyMatrix4(t.matrixWorld),this.union(Bu)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_i),_i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bl),zu.subVectors(this.max,bl),$r.subVectors(t.a,bl),to.subVectors(t.b,bl),eo.subVectors(t.c,bl),ta.subVectors(to,$r),ea.subVectors(eo,to),Fa.subVectors($r,eo);let n=[0,-ta.z,ta.y,0,-ea.z,ea.y,0,-Fa.z,Fa.y,ta.z,0,-ta.x,ea.z,0,-ea.x,Fa.z,0,-Fa.x,-ta.y,ta.x,0,-ea.y,ea.x,0,-Fa.y,Fa.x,0];return!Pm(n,$r,to,eo,zu)||(n=[1,0,0,0,1,0,0,0,1],!Pm(n,$r,to,eo,zu))?!1:(Fu.crossVectors(ta,ea),n=[Fu.x,Fu.y,Fu.z],Pm(n,$r,to,eo,zu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ms),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ms=[new V,new V,new V,new V,new V,new V,new V,new V],_i=new V,Bu=new oa,$r=new V,to=new V,eo=new V,ta=new V,ea=new V,Fa=new V,bl=new V,zu=new V,Fu=new V,Va=new V;We=new V,Vu=new ie,iE=0,qn=class extends Pi{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iE++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Jm,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Vu.fromBufferAttribute(this,n),Vu.applyMatrix3(t),this.setXY(n,Vu.x,Vu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix3(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix4(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyNormalMatrix(t),this.setXYZ(n,We.x,We.y,We.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.transformDirection(t),this.setXYZ(n,We.x,We.y,We.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=xl(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=xl(n,this.array)),n}setX(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=xl(n,this.array)),n}setY(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=xl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=xl(n,this.array)),n}setW(t,n){return this.normalized&&(n=wn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array),a=wn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jm&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},Ll=class extends qn{constructor(t,n,i){super(new Uint16Array(t),n,i)}},Il=class extends qn{constructor(t,n,i){super(new Uint32Array(t),n,i)}},ui=class extends qn{constructor(t,n,i){super(new Float32Array(t),n,i)}},sE=new oa,Ml=new V,Bm=new V,co=class{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):sE.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ml.subVectors(t,this.center);let n=Ml.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ml,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ml.copy(t.center).add(Bm)),this.expandByPoint(Ml.copy(t.center).sub(Bm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},aE=0,ci=new Xe,zm=new hi,no=new V,Wn=new oa,Tl=new oa,en=new V,zi=class e extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Ql(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(WT(t)?Il:Ll)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ut().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,n,i){return ci.makeTranslation(t,n,i),this.applyMatrix4(ci),this}scale(t,n,i){return ci.makeScale(t,n,i),this.applyMatrix4(ci),this}lookAt(t){return zm.lookAt(t),zm.updateMatrix(),this.applyMatrix4(zm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ui(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&At("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Wn.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Tl.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Wn.min,Tl.min),Wn.expandByPoint(en),en.addVectors(Wn.max,Tl.max),Wn.expandByPoint(en)):(Wn.expandByPoint(Tl.min),Wn.expandByPoint(Tl.max))}Wn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)en.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(en));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)en.fromBufferAttribute(o,c),l&&(no.fromBufferAttribute(t,c),en.add(no)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new V,l[S]=new V;let c=new V,h=new V,p=new V,u=new ie,d=new ie,_=new ie,T=new V,g=new V;function f(S,w,N){c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),p.fromBufferAttribute(i,N),u.fromBufferAttribute(a,S),d.fromBufferAttribute(a,w),_.fromBufferAttribute(a,N),h.sub(c),p.sub(c),d.sub(u),_.sub(u);let D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(T.copy(h).multiplyScalar(_.y).addScaledVector(p,-d.y).multiplyScalar(D),g.copy(p).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(D),o[S].add(T),o[w].add(T),o[N].add(T),l[S].add(g),l[w].add(g),l[N].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let S=0,w=m.length;S<w;++S){let N=m[S],D=N.start,B=N.count;for(let X=D,q=D+B;X<q;X+=3)f(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let x=new V,b=new V,R=new V,E=new V;function C(S){R.fromBufferAttribute(s,S),E.copy(R);let w=o[S];x.copy(w),x.sub(R.multiplyScalar(R.dot(w))).normalize(),b.crossVectors(E,w);let D=b.dot(l[S])<0?-1:1;r.setXYZW(S,x.x,x.y,x.z,D)}for(let S=0,w=m.length;S<w;++S){let N=m[S],D=N.start,B=N.count;for(let X=D,q=D+B;X<q;X+=3)C(t.getX(X+0)),C(t.getX(X+1)),C(t.getX(X+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new V,a=new V,r=new V,o=new V,l=new V,c=new V,h=new V,p=new V;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),T=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,T),r.fromBufferAttribute(n,g),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)en.fromBufferAttribute(t,n),en.normalize(),t.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,_=0;for(let T=0,g=l.length;T<g;T++){o.isInterleavedBufferAttribute?d=l[T]*o.data.stride+o.offset:d=l[T]*h;for(let f=0;f<h;f++)u[_++]=c[d++]}return new qn(u,h,p)}if(this.index===null)return At("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],p=a[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rE=0,Ya=class extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Ql(),this.name="",this.type="Material",this.blending=Xa,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=nh,this.blendEquation=aa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){At(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){At(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xa&&(i.blending=this.blending),this.side!==_s&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eh&&(i.blendSrc=this.blendSrc),this.blendDst!==nh&&(i.blendDst=this.blendDst),this.blendEquation!==aa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ka&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ka&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ka&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gs=new V,Fm=new V,Gu=new V,na=new V,Vm=new V,Hu=new V,Gm=new V,_h=class{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=gs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(gs.copy(this.origin).addScaledVector(this.direction,n),gs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Fm.copy(t).add(n).multiplyScalar(.5),Gu.copy(n).sub(t).normalize(),na.copy(this.origin).sub(Fm);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Gu),o=na.dot(this.direction),l=-na.dot(Gu),c=na.lengthSq(),h=Math.abs(1-r*r),p,u,d,_;if(h>0)if(p=r*l-o,u=r*o-l,_=a*h,p>=0)if(u>=-_)if(u<=_){let T=1/h;p*=T,u*=T,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Fm).addScaledVector(Gu,u),d}intersectSphere(t,n){gs.subVectors(t.center,this.origin);let i=gs.dot(this.direction),s=gs.dot(gs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,gs)!==null}intersectTriangle(t,n,i,s,a){Vm.subVectors(n,t),Hu.subVectors(i,t),Gm.crossVectors(Vm,Hu);let r=this.direction.dot(Gm),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;na.subVectors(this.origin,t);let l=o*this.direction.dot(Hu.crossVectors(na,Hu));if(l<0)return null;let c=o*this.direction.dot(Vm.cross(na));if(c<0||l+c>r)return null;let h=-o*na.dot(Gm);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ol=class extends Ya{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ra,this.combine=ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},hS=new Xe,Ga=new _h,ku=new co,fS=new V,Wu=new V,Xu=new V,qu=new V,Hm=new V,Yu=new V,dS=new V,Zu=new V,Dn=class extends hi{constructor(t=new zi,n=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Yu.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],p=a[l];h!==0&&(Hm.fromBufferAttribute(p,t),r?Yu.addScaledVector(Hm,h):Yu.addScaledVector(Hm.sub(n),h))}n.add(Yu)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ku.copy(i.boundingSphere),ku.applyMatrix4(a),Ga.copy(t.ray).recast(t.near),!(ku.containsPoint(Ga.origin)===!1&&(Ga.intersectSphere(ku,fS)===null||Ga.origin.distanceToSquared(fS)>(t.far-t.near)**2))&&(hS.copy(a).invert(),Ga.copy(t.ray).applyMatrix4(hS),!(i.boundingBox!==null&&Ga.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ga)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,T=u.length;_<T;_++){let g=u[_],f=r[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let b=m,R=x;b<R;b+=3){let E=o.getX(b),C=o.getX(b+1),S=o.getX(b+2);s=Ju(this,f,t,i,c,h,p,E,C,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),T=Math.min(o.count,d.start+d.count);for(let g=_,f=T;g<f;g+=3){let m=o.getX(g),x=o.getX(g+1),b=o.getX(g+2);s=Ju(this,r,t,i,c,h,p,m,x,b),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,T=u.length;_<T;_++){let g=u[_],f=r[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=m,R=x;b<R;b+=3){let E=b,C=b+1,S=b+2;s=Ju(this,f,t,i,c,h,p,E,C,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),T=Math.min(l.count,d.start+d.count);for(let g=_,f=T;g<f;g+=3){let m=g,x=g+1,b=g+2;s=Ju(this,r,t,i,c,h,p,m,x,b),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};yh=class extends Rn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=nn,h=nn,p,u){super(null,r,o,l,c,h,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},km=new V,lE=new V,cE=new Ut,Li=class{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=km.subVectors(i,n).cross(lE.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(km),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||cE.getNormalMatrix(t),s=this.coplanarPoint(km).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ha=new co,uE=new ie(.5,.5),Ku=new V,Pl=class{constructor(t=new Li,n=new Li,i=new Li,s=new Li,a=new Li,r=new Li){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=yi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],d=a[7],_=a[8],T=a[9],g=a[10],f=a[11],m=a[12],x=a[13],b=a[14],R=a[15];if(s[0].setComponents(c-r,d-h,f-_,R-m).normalize(),s[1].setComponents(c+r,d+h,f+_,R+m).normalize(),s[2].setComponents(c+o,d+p,f+T,R+x).normalize(),s[3].setComponents(c-o,d-p,f-T,R-x).normalize(),i)s[4].setComponents(l,u,g,b).normalize(),s[5].setComponents(c-l,d-u,f-g,R-b).normalize();else if(s[4].setComponents(c-l,d-u,f-g,R-b).normalize(),n===yi)s[5].setComponents(c+l,d+u,f+g,R+b).normalize();else if(n===Cl)s[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ha.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ha)}intersectsSprite(t){Ha.center.set(0,0,0);let n=uE.distanceTo(t.center);return Ha.radius=.7071067811865476+n,Ha.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ha)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ku.x=s.normal.x>0?t.max.x:t.min.x,Ku.y=s.normal.y>0?t.max.y:t.min.y,Ku.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ku)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bl=class extends Rn{constructor(t=[],n=ha,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ys=class extends Rn{constructor(t,n,i=Si,s,a,r,o=nn,l=nn,c,h=Oi,p=1){if(h!==Oi&&h!==da)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new oo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},xh=class extends ys{constructor(t,n=Si,i=ha,s,a,r=nn,o=nn,l,c=Oi){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},zl=class extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},uo=class e extends zi{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],p=[],u=0,d=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ui(c,3)),this.setAttribute("normal",new ui(h,3)),this.setAttribute("uv",new ui(p,2));function _(T,g,f,m,x,b,R,E,C,S,w){let N=b/C,D=R/S,B=b/2,X=R/2,q=E/2,O=C+1,G=S+1,k=0,tt=0,et=new V;for(let ht=0;ht<G;ht++){let xt=ht*D-X;for(let Tt=0;Tt<O;Tt++){let jt=Tt*N-B;et[T]=jt*m,et[g]=xt*x,et[f]=q,c.push(et.x,et.y,et.z),et[T]=0,et[g]=0,et[f]=E>0?1:-1,h.push(et.x,et.y,et.z),p.push(Tt/C),p.push(1-ht/S),k+=1}}for(let ht=0;ht<S;ht++)for(let xt=0;xt<C;xt++){let Tt=u+xt+O*ht,jt=u+xt+O*(ht+1),le=u+(xt+1)+O*(ht+1),zt=u+(xt+1)+O*ht;l.push(Tt,jt,zt),l.push(jt,le,zt),tt+=6}o.addGroup(d,tt,w),d+=tt,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Za=class e extends zi{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=n/l,d=[],_=[],T=[],g=[];for(let f=0;f<h;f++){let m=f*u-r;for(let x=0;x<c;x++){let b=x*p-a;_.push(b,-m,0),T.push(0,0,1),g.push(x/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){let x=m+c*f,b=m+c*(f+1),R=m+1+c*(f+1),E=m+1+c*f;d.push(x,b,E),d.push(b,R,E)}this.setIndex(d),this.setAttribute("position",new ui(_,3)),this.setAttribute("normal",new ui(T,3)),this.setAttribute("uv",new ui(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};tb={clone:Qa,merge:pn},fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends Ya{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=dE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qa(t.uniforms),this.uniformsGroups=hE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Sh=class extends _n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bh=class extends Ya{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mh=class extends Ya{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};la=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Th=class extends la{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xm,endingEnd:Xm}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case qm:a=t,o=2*n-i;break;case Ym:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qm:r=t,l=2*i-n;break;case Ym:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(i-n)/(s-n),T=_*_,g=T*_,f=-u*g+2*u*T-u*_,m=(1+u)*g+(-1.5-2*u)*T+(-.5+u)*_+1,x=(-1-d)*g+(1.5+d)*T+.5*_,b=d*g-d*T;for(let R=0;R!==o;++R)a[R]=f*r[h+R]+m*r[c+R]+x*r[l+R]+b*r[p+R];return a}},Eh=class extends la{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),p=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*h;return a}},Ah=class extends la{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wh=class extends la{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.settings||this.DefaultSettings_,p=h.inTangents,u=h.outTangents;if(!p||!u){let T=(i-n)/(s-n),g=1-T;for(let f=0;f!==o;++f)a[f]=r[c+f]*g+r[l+f]*T;return a}let d=o*2,_=t-1;for(let T=0;T!==o;++T){let g=r[c+T],f=r[l+T],m=_*d+T*2,x=u[m],b=u[m+1],R=t*d+T*2,E=p[R],C=p[R+1],S=(i-n)/(s-n),w,N,D,B,X;for(let q=0;q<8;q++){w=S*S,N=w*S,D=1-S,B=D*D,X=B*D;let G=X*n+3*B*S*x+3*D*w*E+N*s-i;if(Math.abs(G)<1e-10)break;let k=3*B*(x-n)+6*D*S*(E-x)+3*w*(s-E);if(Math.abs(k)<1e-10)break;S=S-G/k,S=Math.max(0,Math.min(1,S))}a[T]=X*g+3*B*S*b+3*D*w*C+N*f}return a}},Zn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qu(n,this.TimeBufferType),this.values=Qu(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Qu(t.times,Array),values:Qu(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ah(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Th(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new wh(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.settings=this.settings),n}setInterpolation(t){let n;switch(t){case El:n=this.InterpolantFactoryMethodDiscrete;break;case fh:n=this.InterpolantFactoryMethodLinear;break;case th:n=this.InterpolantFactoryMethodSmooth;break;case Wm:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return At("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return El;case this.InterpolantFactoryMethodLinear:return fh;case this.InterpolantFactoryMethodSmooth:return th;case this.InterpolantFactoryMethodBezier:return Wm}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ct("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ct("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ct("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ct("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&XT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ct("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===th,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let _=0;_!==i;++_){let T=n[p+_];if(T!==n[u+_]||T!==n[d+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=fh;ca=class extends Zn{constructor(t,n,i){super(t,n,i)}};ca.prototype.ValueTypeName="bool";ca.prototype.ValueBufferType=Array;ca.prototype.DefaultInterpolation=El;ca.prototype.InterpolantFactoryMethodLinear=void 0;ca.prototype.InterpolantFactoryMethodSmooth=void 0;Ch=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Ch.prototype.ValueTypeName="color";Rh=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Rh.prototype.ValueTypeName="number";Dh=class extends la{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)Bi.slerpFlat(a,0,r,c-o,r,c,l);return a}},Fl=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Dh(this.times,this.values,this.getValueSize(),t)}};Fl.prototype.ValueTypeName="quaternion";Fl.prototype.InterpolantFactoryMethodSmooth=void 0;ua=class extends Zn{constructor(t,n,i){super(t,n,i)}};ua.prototype.ValueTypeName="string";ua.prototype.ValueBufferType=Array;ua.prototype.DefaultInterpolation=El;ua.prototype.InterpolantFactoryMethodLinear=void 0;ua.prototype.InterpolantFactoryMethodSmooth=void 0;Nh=class extends Zn{constructor(t,n,i,s){super(t,n,i,s)}};Nh.prototype.ValueTypeName="vector";Uh=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],_=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},eb=new Uh,Lh=class{constructor(t){this.manager=t!==void 0?t:eb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Lh.DEFAULT_MATERIAL_NAME="__DEFAULT";ju=new V,$u=new Bi,Ui=new V,Vl=class extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ju,$u,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ju,$u,Ui.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(ju,$u,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ju,$u,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ia=new V,mS=new ie,gS=new ie,Cn=class extends Vl{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=ph*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sm*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ph*2*Math.atan(Math.tan(Sm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ia.x,ia.y).multiplyScalar(-t/ia.z),ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ia.x,ia.y).multiplyScalar(-t/ia.z)}getViewSize(t,n){return this.getViewBounds(t,mS,gS),n.subVectors(gS,mS)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Sm*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Ja=class extends Vl{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},io=-90,so=1,Ih=class extends hi{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Cn(io,so,t,n);s.layers=this.layers,this.add(s);let a=new Cn(io,so,t,n);a.layers=this.layers,this.add(a);let r=new Cn(io,so,t,n);r.layers=this.layers,this.add(r);let o=new Cn(io,so,t,n);o.layers=this.layers,this.add(o);let l=new Cn(io,so,t,n);l.layers=this.layers,this.add(l);let c=new Cn(io,so,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=T,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Oh=class extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},bg="\\[\\]\\.:\\/",pE=new RegExp("["+bg+"]","g"),Mg="[^"+bg+"]",mE="[^"+bg.replace("\\.","")+"]",gE=/((?:WC+[\/:])*)/.source.replace("WC",Mg),vE=/(WCOD+)?/.source.replace("WCOD",mE),_E=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mg),yE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mg),xE=new RegExp("^"+gE+vE+_E+yE+"$"),SE=["material","materials","bones","map"],Km=class{constructor(t,n,i){let s=i||Ee.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ee=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pE,"")}static parseTrackName(t){let n=xE.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);SE.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){At("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ct("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ct("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ct("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ct("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ct("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ct("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Ct("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ct("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Km;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Z3=new Float32Array(1),Gl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,At("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}},Rg=class Rg{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};Rg.prototype.isMatrix2=!0;Qm=Rg;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?At("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184")});function Tb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function TE(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<p.length;d++){let _=p[u],T=p[d];T.start<=_.start+_.count+1?_.count=Math.max(_.count,T.start+T.count-_.start):(++u,p[u]=T)}p.length=u+1;for(let d=0,_=p.length;d<_;d++){let T=p[d];e.bufferSubData(c,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}function r2(e,t,n,i,s,a){let r=new se(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let b=m.backgroundBlurriness>0;x=t.get(x,b)}return x}function _(m){let x=!1,b=d(m);b===null?g(r,o):b&&b.isColor&&(g(b,1),x=!0);let R=e.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function T(m,x){let b=d(x);b&&(b.isCubeTexture||b.mapping===kl)?(c===void 0&&(c=new Dn(new uo(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Qa(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a2.makeRotationFromEuler(x.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eb),c.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ae,(h!==b||p!==b.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=b,p=b.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Dn(new Za(2,2),new _n({name:"BackgroundMaterial",uniforms:Qa(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(b.colorSpace)!==ae,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(Ef,Sg(e)),n.buffers.color.setClear(Ef.r,Ef.g,Ef.b,x,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,x=1){r.set(m),o=x,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:_,addToRenderList:T,dispose:f}}function o2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(D,B,X,q,O){let G=!1,k=p(D,q,X,B);a!==k&&(a=k,c(a.object)),G=d(D,q,X,O),G&&_(D,q,X,O),O!==null&&t.update(O,e.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,b(D,B,X,q),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function h(D){return e.deleteVertexArray(D)}function p(D,B,X,q){let O=q.wireframe===!0,G=i[B.id];G===void 0&&(G={},i[B.id]=G);let k=D.isInstancedMesh===!0?D.id:0,tt=G[k];tt===void 0&&(tt={},G[k]=tt);let et=tt[X.id];et===void 0&&(et={},tt[X.id]=et);let ht=et[O];return ht===void 0&&(ht=u(l()),et[O]=ht),ht}function u(D){let B=[],X=[],q=[];for(let O=0;O<n;O++)B[O]=0,X[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:q,object:D,attributes:{},index:null}}function d(D,B,X,q){let O=a.attributes,G=B.attributes,k=0,tt=X.getAttributes();for(let et in tt)if(tt[et].location>=0){let xt=O[et],Tt=G[et];if(Tt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(Tt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(Tt=D.instanceColor)),xt===void 0||xt.attribute!==Tt||Tt&&xt.data!==Tt.data)return!0;k++}return a.attributesNum!==k||a.index!==q}function _(D,B,X,q){let O={},G=B.attributes,k=0,tt=X.getAttributes();for(let et in tt)if(tt[et].location>=0){let xt=G[et];xt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(xt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(xt=D.instanceColor));let Tt={};Tt.attribute=xt,xt&&xt.data&&(Tt.data=xt.data),O[et]=Tt,k++}a.attributes=O,a.attributesNum=k,a.index=q}function T(){let D=a.newAttributes;for(let B=0,X=D.length;B<X;B++)D[B]=0}function g(D){f(D,0)}function f(D,B){let X=a.newAttributes,q=a.enabledAttributes,O=a.attributeDivisors;X[D]=1,q[D]===0&&(e.enableVertexAttribArray(D),q[D]=1),O[D]!==B&&(e.vertexAttribDivisor(D,B),O[D]=B)}function m(){let D=a.newAttributes,B=a.enabledAttributes;for(let X=0,q=B.length;X<q;X++)B[X]!==D[X]&&(e.disableVertexAttribArray(X),B[X]=0)}function x(D,B,X,q,O,G,k){k===!0?e.vertexAttribIPointer(D,B,X,O,G):e.vertexAttribPointer(D,B,X,q,O,G)}function b(D,B,X,q){T();let O=q.attributes,G=X.getAttributes(),k=B.defaultAttributeValues;for(let tt in G){let et=G[tt];if(et.location>=0){let ht=O[tt];if(ht===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(ht=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(ht=D.instanceColor)),ht!==void 0){let xt=ht.normalized,Tt=ht.itemSize,jt=t.get(ht);if(jt===void 0)continue;let le=jt.buffer,zt=jt.type,Q=jt.bytesPerElement,pt=zt===e.INT||zt===e.UNSIGNED_INT||ht.gpuType===Vh;if(ht.isInterleavedBufferAttribute){let at=ht.data,wt=at.stride,Lt=ht.offset;if(at.isInstancedInterleavedBuffer){for(let Rt=0;Rt<et.locationSize;Rt++)f(et.location+Rt,at.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Rt=0;Rt<et.locationSize;Rt++)g(et.location+Rt);e.bindBuffer(e.ARRAY_BUFFER,le);for(let Rt=0;Rt<et.locationSize;Rt++)x(et.location+Rt,Tt/et.locationSize,zt,xt,wt*Q,(Lt+Tt/et.locationSize*Rt)*Q,pt)}else{if(ht.isInstancedBufferAttribute){for(let at=0;at<et.locationSize;at++)f(et.location+at,ht.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let at=0;at<et.locationSize;at++)g(et.location+at);e.bindBuffer(e.ARRAY_BUFFER,le);for(let at=0;at<et.locationSize;at++)x(et.location+at,Tt/et.locationSize,zt,xt,Tt*Q,Tt/et.locationSize*at*Q,pt)}}else if(k!==void 0){let xt=k[tt];if(xt!==void 0)switch(xt.length){case 2:e.vertexAttrib2fv(et.location,xt);break;case 3:e.vertexAttrib3fv(et.location,xt);break;case 4:e.vertexAttrib4fv(et.location,xt);break;default:e.vertexAttrib1fv(et.location,xt)}}}}m()}function R(){w();for(let D in i){let B=i[D];for(let X in B){let q=B[X];for(let O in q){let G=q[O];for(let k in G)h(G[k].object),delete G[k];delete q[O]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let B=i[D.id];for(let X in B){let q=B[X];for(let O in q){let G=q[O];for(let k in G)h(G[k].object),delete G[k];delete q[O]}}delete i[D.id]}function C(D){for(let B in i){let X=i[B];for(let q in X){let O=X[q];if(O[D.id]===void 0)continue;let G=O[D.id];for(let k in G)h(G[k].object),delete G[k];delete O[D.id]}}}function S(D){for(let B in i){let X=i[B],q=D.isInstancedMesh===!0?D.id:0,O=X[q];if(O!==void 0){for(let G in O){let k=O[G];for(let tt in k)h(k[tt].object),delete k[tt];delete O[G]}delete X[q],Object.keys(X).length===0&&delete i[B]}}}function w(){N(),r=!0,a!==s&&(a=s,c(a.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:N,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:T,enableAttribute:g,disableUnusedAttributes:m}}function l2(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function c2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==fi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let S=C===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Jn&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bi&&!S)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(At("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&At("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),R=e.getParameter(e.MAX_SAMPLES),E=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:T,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:b,maxSamples:R,samples:E}}function u2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Li,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){let _=p.clippingPlanes,T=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!s||_===null||_.length===0||a&&!g)a?h(null):c();else{let m=a?0:i,x=m*4,b=f.clippingState||null;l.value=b,b=h(_,u,x,d);for(let R=0;R!==x;++R)b[R]=n[R];f.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,_){let T=p!==null?p.length:0,g=null;if(T!==0){if(g=l.value,_!==!0||g===null){let f=d+T*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let x=0,b=d;x!==T;++x,b+=4)r.copy(p[x]).applyMatrix4(m,o),r.normal.toArray(g,b),g[b+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,g}}function d2(e){let t=[],n=[],i=[],s=e,a=e-ma+1+nb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-ma?l=nb[r-e+ma-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,p=1+c,u=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,_=6,T=3,g=2,f=1,m=new Float32Array(T*_*d),x=new Float32Array(g*_*d),b=new Float32Array(f*_*d);for(let E=0;E<d;E++){let C=E%3*2/3-1,S=E>2?0:-1,w=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];m.set(w,T*_*E),x.set(u,g*_*E);let N=[E,E,E,E,E,E];b.set(N,f*_*E)}let R=new zi;R.setAttribute("position",new qn(m,T)),R.setAttribute("uv",new qn(x,g)),R.setAttribute("faceIndex",new qn(b,f)),i.push(new Dn(R,null)),s>ma&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function sb(e,t,n){let i=new Yn(e,t,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function p2(e,t,n){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Df(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function m2(e,t,n){let i=new Float32Array(ja),s=new V(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:ja,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ab(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function rb(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Bh||d===zh)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let T=new Cf(_.height);return T.fromEquirectangularTexture(e,u),t.set(u,T),u.addEventListener("dispose",c),o(T.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let d=u.mapping,_=d===Bh||d===zh,T=d===ha||d===Ka;if(_||T){let g=n.get(u),f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new wf(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return _&&m&&m.height>0||T&&m&&l(m)?(i===null&&(i=new wf(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Bh?u.mapping=ha:d===zh&&(u.mapping=Ka),u}function l(u){let d=0,_=6;for(let T=0;T<_;T++)u[T]!==void 0&&d++;return d===_}function c(u){let d=u.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function v2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&dh("WebGLRenderer: "+i+" extension not supported."),s}}}function _2(e,t,n,i){let s={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete s[u.id];let d=a.get(u);d&&(t.remove(d),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(p){let u=p.attributes;for(let d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(p){let u=[],d=p.index,_=p.attributes.position,T=0;if(_===void 0)return;if(d!==null){let m=d.array;T=d.version;for(let x=0,b=m.length;x<b;x+=3){let R=m[x+0],E=m[x+1],C=m[x+2];u.push(R,E,E,C,C,R)}}else{let m=_.array;T=_.version;for(let x=0,b=m.length/3-1;x<b;x+=3){let R=x+0,E=x+1,C=x+2;u.push(R,E,E,C,C,R)}}let g=new(_.count>=65535?Il:Ll)(u,1);g.version=T;let f=a.get(p);f&&t.remove(f),a.set(p,g)}function h(p){let u=a.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&c(p)}else c(p);return a.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function y2(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let T=0;for(let g=0;g<d;g++)T+=u[g];n.update(T,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function x2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Ct("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function S2(e,t,n){let i=new WeakMap,s=new Ie;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let w=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;d===!0&&(x=1),_===!0&&(x=2),T===!0&&(x=3);let b=o.attributes.position.count*x,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let E=new Float32Array(b*R*4*p),C=new Dl(E,b,R,p);C.type=bi,C.needsUpdate=!0;let S=x*4;for(let N=0;N<p;N++){let D=g[N],B=f[N],X=m[N],q=b*R*4*N;for(let O=0;O<D.count;O++){let G=O*S;d===!0&&(s.fromBufferAttribute(D,O),E[q+G+0]=s.x,E[q+G+1]=s.y,E[q+G+2]=s.z,E[q+G+3]=0),_===!0&&(s.fromBufferAttribute(B,O),E[q+G+4]=s.x,E[q+G+5]=s.y,E[q+G+6]=s.z,E[q+G+7]=0),T===!0&&(s.fromBufferAttribute(X,O),E[q+G+8]=s.x,E[q+G+9]=s.y,E[q+G+10]=s.z,E[q+G+11]=X.itemSize===4?s.w:1)}}u={count:p,texture:C,size:new ie(b,R)},i.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let T=0;T<c.length;T++)d+=c[T];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function b2(e,t,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}function T2(e,t,n,i,s){let a=new Yn(t,n,{type:e,depthBuffer:i,stencilBuffer:s,depthTexture:i?new ys(t,n):void 0}),r=new Yn(t,n,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),o=new zi;o.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ui([0,2,0,0,2,0],2));let l=new Sh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Dn(o,l),h=new Ja(-1,1,1,-1,0,1),p=null,u=null,d=!1,_,T=null,g=[],f=!1;this.setSize=function(m,x){a.setSize(m,x),r.setSize(m,x);for(let b=0;b<g.length;b++){let R=g[b];R.setSize&&R.setSize(m,x)}},this.setEffects=function(m){g=m,f=g.length>0&&g[0].isRenderPass===!0;let x=a.width,b=a.height;for(let R=0;R<g.length;R++){let E=g[R];E.setSize&&E.setSize(x,b)}},this.begin=function(m,x){if(d||m.toneMapping===xi&&g.length===0)return!1;if(T=x,x!==null){let b=x.width,R=x.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return f===!1&&m.setRenderTarget(a),_=m.toneMapping,m.toneMapping=xi,!0},this.hasRenderPass=function(){return f},this.end=function(m,x){m.toneMapping=_,d=!0;let b=a,R=r;for(let E=0;E<g.length;E++){let C=g[E];if(C.enabled!==!1&&(C.render(m,R,b,x),C.needsSwap!==!1)){let S=b;b=R,R=S}}if(p!==m.outputColorSpace||u!==m.toneMapping){p=m.outputColorSpace,u=m.toneMapping,l.defines={},Jt.getTransfer(p)===ae&&(l.defines.SRGB_TRANSFER="");let E=M2[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,m.setRenderTarget(T),m.render(c,h),T=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),r.dispose(),o.dispose(),l.dispose()}}function vo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=ob[s];if(a===void 0&&(a=new Float32Array(s),ob[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ke(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Nf(e,t){let n=lb[t];n===void 0&&(n=new Int32Array(t),lb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function E2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function A2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2fv(this.addr,t),Qe(n,t)}}function w2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ke(n,t))return;e.uniform3fv(this.addr,t),Qe(n,t)}}function C2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4fv(this.addr,t),Qe(n,t)}}function R2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;hb.set(i),e.uniformMatrix2fv(this.addr,!1,hb),Qe(n,i)}}function D2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;ub.set(i),e.uniformMatrix3fv(this.addr,!1,ub),Qe(n,i)}}function N2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qe(n,t)}else{if(Ke(n,i))return;cb.set(i),e.uniformMatrix4fv(this.addr,!1,cb),Qe(n,i)}}function U2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function L2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2iv(this.addr,t),Qe(n,t)}}function I2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ke(n,t))return;e.uniform3iv(this.addr,t),Qe(n,t)}}function O2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4iv(this.addr,t),Qe(n,t)}}function P2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function B2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2uiv(this.addr,t),Qe(n,t)}}function z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ke(n,t))return;e.uniform3uiv(this.addr,t),Qe(n,t)}}function F2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4uiv(this.addr,t),Qe(n,t)}}function V2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Bg.compareFunction=n.isReversedDepthBuffer()?Tf:Mf,a=Bg):a=Ab,n.setTexture2D(t||a,s)}function G2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Cb,s)}function H2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Rb,s)}function k2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||wb,s)}function W2(e){switch(e){case 5126:return E2;case 35664:return A2;case 35665:return w2;case 35666:return C2;case 35674:return R2;case 35675:return D2;case 35676:return N2;case 5124:case 35670:return U2;case 35667:case 35671:return L2;case 35668:case 35672:return I2;case 35669:case 35673:return O2;case 5125:return P2;case 36294:return B2;case 36295:return z2;case 36296:return F2;case 35678:case 36198:case 36298:case 36306:case 35682:return V2;case 35679:case 36299:case 36307:return G2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return k2}}function X2(e,t){e.uniform1fv(this.addr,t)}function q2(e,t){let n=vo(t,this.size,2);e.uniform2fv(this.addr,n)}function Y2(e,t){let n=vo(t,this.size,3);e.uniform3fv(this.addr,n)}function Z2(e,t){let n=vo(t,this.size,4);e.uniform4fv(this.addr,n)}function J2(e,t){let n=vo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function K2(e,t){let n=vo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Q2(e,t){let n=vo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function j2(e,t){e.uniform1iv(this.addr,t)}function $2(e,t){e.uniform2iv(this.addr,t)}function tC(e,t){e.uniform3iv(this.addr,t)}function eC(e,t){e.uniform4iv(this.addr,t)}function nC(e,t){e.uniform1uiv(this.addr,t)}function iC(e,t){e.uniform2uiv(this.addr,t)}function sC(e,t){e.uniform3uiv(this.addr,t)}function aC(e,t){e.uniform4uiv(this.addr,t)}function rC(e,t,n){let i=this.cache,s=t.length,a=Nf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Bg:r=Ab;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function oC(e,t,n){let i=this.cache,s=t.length,a=Nf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Cb,a[r])}function lC(e,t,n){let i=this.cache,s=t.length,a=Nf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||Rb,a[r])}function cC(e,t,n){let i=this.cache,s=t.length,a=Nf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Qe(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||wb,a[r])}function uC(e){switch(e){case 5126:return X2;case 35664:return q2;case 35665:return Y2;case 35666:return Z2;case 35674:return J2;case 35675:return K2;case 35676:return Q2;case 5124:case 35670:return j2;case 35667:case 35671:return $2;case 35668:case 35672:return tC;case 35669:case 35673:return eC;case 5125:return nC;case 36294:return iC;case 36295:return sC;case 36296:return aC;case 35678:case 36198:case 36298:case 36306:case 35682:return rC;case 35679:case 36299:case 36307:return oC;case 35680:case 36300:case 36308:case 36293:return lC;case 36289:case 36303:case 36311:case 36292:return cC}}function fb(e,t){e.seq.push(t),e.map[t.id]=t}function hC(e,t,n){let i=e.name,s=i.length;for(Og.lastIndex=0;;){let a=Og.exec(i),r=Og.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){fb(n,c===void 0?new zg(o,e,t):new Fg(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new Vg(o),fb(n,p)),n=p}}}function db(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}function pC(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}function mC(e){Jt._getMatrix(pb,Jt.workingColorSpace,e);let t=`mat3( ${pb.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case wl:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return At("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function mb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+pC(e.getShaderSource(t),o)}else return a}function gC(e,t){let n=mC(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function _C(e,t){let n=vC[t];return n===void 0?(At("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function yC(){Jt.getLuminanceCoefficients(Af);let e=Af.x.toFixed(4),t=Af.y.toFixed(4),n=Af.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xC(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tc).join(`
`)}function SC(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function bC(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function tc(e){return e!==""}function gb(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Gg(e){return e.replace(MC,EC)}function EC(e,t){let n=Vt[t];if(n===void 0){let i=TC.get(t);if(i!==void 0)n=Vt[i],At('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Gg(n)}function _b(e){return e.replace(AC,wC)}function wC(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function yb(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function RC(e){return CC[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function NC(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":DC[e.envMapMode]||"ENVMAP_TYPE_CUBE"}function LC(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":UC[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function OC(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":IC[e.combine]||"ENVMAP_BLENDING_NONE"}function PC(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function BC(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=RC(n),c=NC(n),h=LC(n),p=OC(n),u=PC(n),d=xC(n),_=SC(a),T=s.createProgram(),g,f,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(tc).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(tc).join(`
`),f.length>0&&(f+=`
`)):(g=[yb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tc).join(`
`),f=[yb(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?Vt.tonemapping_pars_fragment:"",n.toneMapping!==xi?_C("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,gC("linearToOutputTexel",n.outputColorSpace),yC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(tc).join(`
`)),r=Gg(r),r=gb(r,n),r=vb(r,n),o=Gg(o),o=gb(o,n),o=vb(o,n),r=_b(r),o=_b(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let x=m+g+r,b=m+f+o,R=db(s,s.VERTEX_SHADER,x),E=db(s,s.FRAGMENT_SHADER,b);s.attachShader(T,R),s.attachShader(T,E),n.index0AttributeName!==void 0?s.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function C(D){if(e.debug.checkShaderErrors){let B=s.getProgramInfoLog(T)||"",X=s.getShaderInfoLog(R)||"",q=s.getShaderInfoLog(E)||"",O=B.trim(),G=X.trim(),k=q.trim(),tt=!0,et=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(tt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,T,R,E);else{let ht=mb(s,R,"vertex"),xt=mb(s,E,"fragment");Ct("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+ht+`
`+xt)}else O!==""?At("WebGLProgram: Program Info Log:",O):(G===""||k==="")&&(et=!1);et&&(D.diagnostics={runnable:tt,programLog:O,vertexShader:{log:G,prefix:g},fragmentShader:{log:k,prefix:f}})}s.deleteShader(R),s.deleteShader(E),S=new go(s,T),w=bC(s,T)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(T,fC)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dC++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=R,this.fragmentShader=E,this}function FC(e){return e===pa||e===Jl||e===Kl}function VC(e,t,n,i,s,a){let r=new Nl,o=new Hg,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function T(S,w,N,D,B,X){let q=D.fog,O=B.geometry,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?D.environment:null,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,tt=t.get(S.envMap||G,k),et=tt&&tt.mapping===kl?tt.image.height:null,ht=d[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&At("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let xt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Tt=xt!==void 0?xt.length:0,jt=0;O.morphAttributes.position!==void 0&&(jt=1),O.morphAttributes.normal!==void 0&&(jt=2),O.morphAttributes.color!==void 0&&(jt=3);let le,zt,Q,pt;if(ht){let Ot=ki[ht];le=Ot.vertexShader,zt=Ot.fragmentShader}else le=S.vertexShader,zt=S.fragmentShader,o.update(S),Q=o.getVertexShaderID(S),pt=o.getFragmentShaderID(S);let at=e.getRenderTarget(),wt=e.state.buffers.depth.getReversed(),Lt=B.isInstancedMesh===!0,Rt=B.isBatchedMesh===!0,Ce=!!S.map,qt=!!S.matcap,ce=!!tt,xe=!!S.aoMap,kt=!!S.lightMap,qe=!!S.bumpMap,Re=!!S.normalMap,Nn=!!S.displacementMap,L=!!S.emissiveMap,Ye=!!S.metalnessMap,Yt=!!S.roughnessMap,ve=S.anisotropy>0,ct=S.clearcoat>0,De=S.dispersion>0,A=S.iridescence>0,y=S.sheen>0,P=S.transmission>0,Z=ve&&!!S.anisotropyMap,$=ct&&!!S.clearcoatMap,nt=ct&&!!S.clearcoatNormalMap,lt=ct&&!!S.clearcoatRoughnessMap,W=A&&!!S.iridescenceMap,K=A&&!!S.iridescenceThicknessMap,mt=y&&!!S.sheenColorMap,_t=y&&!!S.sheenRoughnessMap,rt=!!S.specularMap,it=!!S.specularColorMap,Nt=!!S.specularIntensityMap,Ft=P&&!!S.transmissionMap,te=P&&!!S.thicknessMap,U=!!S.gradientMap,st=!!S.alphaMap,Y=S.alphaTest>0,gt=!!S.alphaHash,ot=!!S.extensions,j=xi;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(j=e.toneMapping);let bt={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:le,fragmentShader:zt,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:pt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&B._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&B.instanceColor!==null,instancingMorph:Lt&&B.morphTexture!==null,outputColorSpace:at===null?e.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ce,matcap:qt,envMap:ce,envMapMode:ce&&tt.mapping,envMapCubeUVHeight:et,aoMap:xe,lightMap:kt,bumpMap:qe,normalMap:Re,displacementMap:Nn,emissiveMap:L,normalMapObjectSpace:Re&&S.normalMapType===HS,normalMapTangentSpace:Re&&S.normalMapType===_g,packedNormalMap:Re&&S.normalMapType===_g&&FC(S.normalMap.format),metalnessMap:Ye,roughnessMap:Yt,anisotropy:ve,anisotropyMap:Z,clearcoat:ct,clearcoatMap:$,clearcoatNormalMap:nt,clearcoatRoughnessMap:lt,dispersion:De,iridescence:A,iridescenceMap:W,iridescenceThicknessMap:K,sheen:y,sheenColorMap:mt,sheenRoughnessMap:_t,specularMap:rt,specularColorMap:it,specularIntensityMap:Nt,transmission:P,transmissionMap:Ft,thicknessMap:te,gradientMap:U,opaque:S.transparent===!1&&S.blending===Xa&&S.alphaToCoverage===!1,alphaMap:st,alphaTest:Y,alphaHash:gt,combine:S.combine,mapUv:Ce&&_(S.map.channel),aoMapUv:xe&&_(S.aoMap.channel),lightMapUv:kt&&_(S.lightMap.channel),bumpMapUv:qe&&_(S.bumpMap.channel),normalMapUv:Re&&_(S.normalMap.channel),displacementMapUv:Nn&&_(S.displacementMap.channel),emissiveMapUv:L&&_(S.emissiveMap.channel),metalnessMapUv:Ye&&_(S.metalnessMap.channel),roughnessMapUv:Yt&&_(S.roughnessMap.channel),anisotropyMapUv:Z&&_(S.anisotropyMap.channel),clearcoatMapUv:$&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:W&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:K&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(S.sheenRoughnessMap.channel),specularMapUv:rt&&_(S.specularMap.channel),specularColorMapUv:it&&_(S.specularColorMap.channel),specularIntensityMapUv:Nt&&_(S.specularIntensityMap.channel),transmissionMapUv:Ft&&_(S.transmissionMap.channel),thicknessMapUv:te&&_(S.thicknessMap.channel),alphaMapUv:st&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Re||ve),vertexNormals:!!O.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Ce||st),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||O.attributes.normal===void 0&&Re===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:wt,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:jt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:j,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:L&&S.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fi,flipSided:S.side===yn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ot&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&S.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function g(S){let w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)w.push(N),w.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(f(w,S),m(w,S),w.push(e.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function f(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function m(S,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),S.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),S.push(r.mask)}function x(S){let w=d[S.type],N;if(w){let D=ki[w];N=tb.clone(D.uniforms)}else N=S.uniforms;return N}function b(S,w){let N=h.get(w);return N!==void 0?++N.usedTimes:(N=new BC(e,w,S,s),c.push(N),h.set(w,N)),N}function R(S){if(--S.usedTimes===0){let w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function E(S){o.remove(S)}function C(){o.dispose()}return{getParameters:T,getProgramCacheKey:g,getUniforms:x,acquireProgram:b,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:C}}function GC(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function HC(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function xb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Sb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,T,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:_,materialVariant:r(u),groupOrder:T,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=_,m.materialVariant=r(u),m.groupOrder=T,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,d,_,T,g,f){let m=o(u,d,_,T,g,f);_.transmission>0?i.push(m):_.transparent===!0?s.push(m):n.push(m)}function c(u,d,_,T,g,f){let m=o(u,d,_,T,g,f);_.transmission>0?i.unshift(m):_.transparent===!0?s.unshift(m):n.unshift(m)}function h(u,d){n.length>1&&n.sort(u||HC),i.length>1&&i.sort(d||xb),s.length>1&&s.sort(d||xb)}function p(){for(let u=t,d=e.length;u<d;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:h}}function kC(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new Sb,e.set(i,[r])):s>=a.length?(r=new Sb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function WC(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new V,color:new se};break;case"SpotLight":n={position:new V,direction:new V,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function XC(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}function YC(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ZC(e){let t=new WC,n=XC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,a=new Xe,r=new Xe;function o(c){let h=0,p=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,_=0,T=0,g=0,f=0,m=0,x=0,b=0,R=0,E=0,C=0;c.sort(YC);for(let w=0,N=c.length;w<N;w++){let D=c[w],B=D.color,X=D.intensity,q=D.distance,O=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===pa?O=D.shadow.map.texture:O=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*X,p+=B.g*X,u+=B.b*X;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],X);C++}else if(D.isDirectionalLight){let G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let k=D.shadow,tt=n.get(D);tt.shadowIntensity=k.intensity,tt.shadowBias=k.bias,tt.shadowNormalBias=k.normalBias,tt.shadowRadius=k.radius,tt.shadowMapSize=k.mapSize,i.directionalShadow[d]=tt,i.directionalShadowMap[d]=O,i.directionalShadowMatrix[d]=D.shadow.matrix,m++}i.directional[d]=G,d++}else if(D.isSpotLight){let G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(B).multiplyScalar(X),G.distance=q,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[T]=G;let k=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,k.updateMatrices(D),D.castShadow&&E++),i.spotLightMatrix[T]=k.matrix,D.castShadow){let tt=n.get(D);tt.shadowIntensity=k.intensity,tt.shadowBias=k.bias,tt.shadowNormalBias=k.normalBias,tt.shadowRadius=k.radius,tt.shadowMapSize=k.mapSize,i.spotShadow[T]=tt,i.spotShadowMap[T]=O,b++}T++}else if(D.isRectAreaLight){let G=t.get(D);G.color.copy(B).multiplyScalar(X),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=G,g++}else if(D.isPointLight){let G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let k=D.shadow,tt=n.get(D);tt.shadowIntensity=k.intensity,tt.shadowBias=k.bias,tt.shadowNormalBias=k.normalBias,tt.shadowRadius=k.radius,tt.shadowMapSize=k.mapSize,tt.shadowCameraNear=k.camera.near,tt.shadowCameraFar=k.camera.far,i.pointShadow[_]=tt,i.pointShadowMap[_]=O,i.pointShadowMatrix[_]=D.shadow.matrix,x++}i.point[_]=G,_++}else if(D.isHemisphereLight){let G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(X),G.groundColor.copy(D.groundColor).multiplyScalar(X),i.hemi[f]=G,f++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let S=i.hash;(S.directionalLength!==d||S.pointLength!==_||S.spotLength!==T||S.rectAreaLength!==g||S.hemiLength!==f||S.numDirectionalShadows!==m||S.numPointShadows!==x||S.numSpotShadows!==b||S.numSpotMaps!==R||S.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=T,i.rectArea.length=g,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=b+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,S.directionalLength=d,S.pointLength=_,S.spotLength=T,S.rectAreaLength=g,S.hemiLength=f,S.numDirectionalShadows=m,S.numPointShadows=x,S.numSpotShadows=b,S.numSpotMaps=R,S.numLightProbes=C,i.version=qC++)}function l(c,h){let p=0,u=0,d=0,_=0,T=0,g=h.matrixWorldInverse;for(let f=0,m=c.length;f<m;f++){let x=c[f];if(x.isDirectionalLight){let b=i.directional[p];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(x.isSpotLight){let b=i.spot[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),d++}else if(x.isRectAreaLight){let b=i.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),r.identity(),a.copy(x.matrixWorld),a.premultiply(g),r.extractRotation(a),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),_++}else if(x.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(g),u++}else if(x.isHemisphereLight){let b=i.hemi[T];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(g),T++}}}return{setup:o,setupView:l,state:i}}function bb(e){let t=new ZC(e),n=[],i=[],s=[];function a(u){p.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}let p={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:p,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function JC(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new bb(e),t.set(s,[o])):a>=r.length?(o=new bb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}function t3(e,t,n){let i=new Pl,s=new ie,a=new ie,r=new Ie,o=new bh,l=new Mh,c={},h=n.maxTextureSize,p={[_s]:yn,[yn]:_s,[Fi]:Fi},u=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:KC,fragmentShader:QC}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new zi;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Dn(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let f=this.type;this.render=function(E,C,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===yS&&(At("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hl);let w=e.getRenderTarget(),N=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Vi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let X=f!==this.type;X&&C.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(O=>O.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,O=E.length;q<O;q++){let G=E[q],k=G.shadow;if(k===void 0){At("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let tt=k.getFrameExtents();s.multiply(tt),a.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/tt.x),s.x=a.x*tt.x,k.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/tt.y),s.y=a.y*tt.y,k.mapSize.y=a.y));let et=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=et,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ho){if(G.isPointLight){At("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Yn(s.x,s.y,{format:pa,type:Gi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new ys(s.x,s.y,bi),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=Oi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn}else G.isPointLight?(k.map=new Cf(s.x),k.map.depthTexture=new xh(s.x,Si)):(k.map=new Yn(s.x,s.y),k.map.depthTexture=new ys(s.x,s.y,Si)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=Oi,this.type===Hl?(k.map.depthTexture.compareFunction=et?Tf:Mf,k.map.depthTexture.minFilter=cn,k.map.depthTexture.magFilter=cn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn);k.camera.updateProjectionMatrix()}let ht=k.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<ht;xt++){if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,xt),e.clear();else{xt===0&&(e.setRenderTarget(k.map),e.clear());let Tt=k.getViewport(xt);r.set(a.x*Tt.x,a.y*Tt.y,a.x*Tt.z,a.y*Tt.w),B.viewport(r)}if(G.isPointLight){let Tt=k.camera,jt=k.matrix,le=G.distance||Tt.far;le!==Tt.far&&(Tt.far=le,Tt.updateProjectionMatrix()),$l.setFromMatrixPosition(G.matrixWorld),Tt.position.copy($l),Pg.copy(Tt.position),Pg.add(jC[xt]),Tt.up.copy($C[xt]),Tt.lookAt(Pg),Tt.updateMatrixWorld(),jt.makeTranslation(-$l.x,-$l.y,-$l.z),Mb.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Mb,Tt.coordinateSystem,Tt.reversedDepth)}else k.updateMatrices(G);i=k.getFrustum(),b(C,S,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===ho&&m(k,S),k.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(w,N,D)};function m(E,C){let S=t.update(T);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Yn(s.x,s.y,{format:pa,type:Gi})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,e.setRenderTarget(E.mapPass),e.clear(),e.renderBufferDirect(C,null,S,u,T,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,e.setRenderTarget(E.map),e.clear(),e.renderBufferDirect(C,null,S,d,T,null)}function x(E,C,S,w){let N=null,D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)N=D;else if(N=S.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=N.uuid,X=C.uuid,q=c[B];q===void 0&&(q={},c[B]=q);let O=q[X];O===void 0&&(O=N.clone(),q[X]=O,C.addEventListener("dispose",R)),N=O}if(N.visible=C.visible,N.wireframe=C.wireframe,w===ho?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:p[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let B=e.properties.get(N);B.light=S}return N}function b(E,C,S,w,N){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===ho)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let X=t.update(E),q=E.material;if(Array.isArray(q)){let O=X.groups;for(let G=0,k=O.length;G<k;G++){let tt=O[G],et=q[tt.materialIndex];if(et&&et.visible){let ht=x(E,et,w,N);E.onBeforeShadow(e,E,C,S,X,ht,tt),e.renderBufferDirect(S,null,X,ht,E,tt),E.onAfterShadow(e,E,C,S,X,ht,tt)}}}else if(q.visible){let O=x(E,q,w,N);E.onBeforeShadow(e,E,C,S,X,O,null),e.renderBufferDirect(S,null,X,O,E,null),E.onAfterShadow(e,E,C,S,X,O,null)}}let B=E.children;for(let X=0,q=B.length;X<q;X++)b(B[X],C,S,w,N)}function R(E){E.target.removeEventListener("dispose",R);for(let S in c){let w=c[S],N=E.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function e3(e,t){function n(){let U=!1,st=new Ie,Y=null,gt=new Ie(0,0,0,0);return{setMask:function(ot){Y!==ot&&!U&&(e.colorMask(ot,ot,ot,ot),Y=ot)},setLocked:function(ot){U=ot},setClear:function(ot,j,bt,Ot,Oe){Oe===!0&&(ot*=Ot,j*=Ot,bt*=Ot),st.set(ot,j,bt,Ot),gt.equals(st)===!1&&(e.clearColor(ot,j,bt,Ot),gt.copy(st))},reset:function(){U=!1,Y=null,gt.set(-1,0,0,0)}}}function i(){let U=!1,st=!1,Y=null,gt=null,ot=null;return{setReversed:function(j){if(st!==j){let bt=t.get("EXT_clip_control");j?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),st=j;let Ot=ot;ot=null,this.setClear(Ot)}},getReversed:function(){return st},setTest:function(j){j?at(e.DEPTH_TEST):wt(e.DEPTH_TEST)},setMask:function(j){Y!==j&&!U&&(e.depthMask(j),Y=j)},setFunc:function(j){if(st&&(j=jS[j]),gt!==j){switch(j){case ih:e.depthFunc(e.NEVER);break;case sh:e.depthFunc(e.ALWAYS);break;case ah:e.depthFunc(e.LESS);break;case qa:e.depthFunc(e.LEQUAL);break;case rh:e.depthFunc(e.EQUAL);break;case oh:e.depthFunc(e.GEQUAL);break;case lh:e.depthFunc(e.GREATER);break;case ch:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}gt=j}},setLocked:function(j){U=j},setClear:function(j){ot!==j&&(ot=j,st&&(j=1-j),e.clearDepth(j))},reset:function(){U=!1,Y=null,gt=null,ot=null,st=!1}}}function s(){let U=!1,st=null,Y=null,gt=null,ot=null,j=null,bt=null,Ot=null,Oe=null;return{setTest:function(ue){U||(ue?at(e.STENCIL_TEST):wt(e.STENCIL_TEST))},setMask:function(ue){st!==ue&&!U&&(e.stencilMask(ue),st=ue)},setFunc:function(ue,Wi,Mi){(Y!==ue||gt!==Wi||ot!==Mi)&&(e.stencilFunc(ue,Wi,Mi),Y=ue,gt=Wi,ot=Mi)},setOp:function(ue,Wi,Mi){(j!==ue||bt!==Wi||Ot!==Mi)&&(e.stencilOp(ue,Wi,Mi),j=ue,bt=Wi,Ot=Mi)},setLocked:function(ue){U=ue},setClear:function(ue){Oe!==ue&&(e.clearStencil(ue),Oe=ue)},reset:function(){U=!1,st=null,Y=null,gt=null,ot=null,j=null,bt=null,Ot=null,Oe=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},d=new WeakMap,_=[],T=null,g=!1,f=null,m=null,x=null,b=null,R=null,E=null,C=null,S=new se(0,0,0),w=0,N=!1,D=null,B=null,X=null,q=null,O=null,G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,tt=0,et=e.getParameter(e.VERSION);et.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(et)[1]),k=tt>=1):et.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),k=tt>=2);let ht=null,xt={},Tt=e.getParameter(e.SCISSOR_BOX),jt=e.getParameter(e.VIEWPORT),le=new Ie().fromArray(Tt),zt=new Ie().fromArray(jt);function Q(U,st,Y,gt){let ot=new Uint8Array(4),j=e.createTexture();e.bindTexture(U,j),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let bt=0;bt<Y;bt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,gt,0,e.RGBA,e.UNSIGNED_BYTE,ot):e.texImage2D(st+bt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ot);return j}let pt={};pt[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),pt[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pt[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(e.DEPTH_TEST),r.setFunc(qa),qe(!1),Re(jm),at(e.CULL_FACE),xe(Vi);function at(U){h[U]!==!0&&(e.enable(U),h[U]=!0)}function wt(U){h[U]!==!1&&(e.disable(U),h[U]=!1)}function Lt(U,st){return u[U]!==st?(e.bindFramebuffer(U,st),u[U]=st,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=st),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=st),!0):!1}function Rt(U,st){let Y=_,gt=!1;if(U){Y=d.get(st),Y===void 0&&(Y=[],d.set(st,Y));let ot=U.textures;if(Y.length!==ot.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let j=0,bt=ot.length;j<bt;j++)Y[j]=e.COLOR_ATTACHMENT0+j;Y.length=ot.length,gt=!0}}else Y[0]!==e.BACK&&(Y[0]=e.BACK,gt=!0);gt&&e.drawBuffers(Y)}function Ce(U){return T!==U?(e.useProgram(U),T=U,!0):!1}let qt={[aa]:e.FUNC_ADD,[SS]:e.FUNC_SUBTRACT,[bS]:e.FUNC_REVERSE_SUBTRACT};qt[MS]=e.MIN,qt[TS]=e.MAX;let ce={[ES]:e.ZERO,[AS]:e.ONE,[wS]:e.SRC_COLOR,[eh]:e.SRC_ALPHA,[LS]:e.SRC_ALPHA_SATURATE,[NS]:e.DST_COLOR,[RS]:e.DST_ALPHA,[CS]:e.ONE_MINUS_SRC_COLOR,[nh]:e.ONE_MINUS_SRC_ALPHA,[US]:e.ONE_MINUS_DST_COLOR,[DS]:e.ONE_MINUS_DST_ALPHA,[IS]:e.CONSTANT_COLOR,[OS]:e.ONE_MINUS_CONSTANT_COLOR,[PS]:e.CONSTANT_ALPHA,[BS]:e.ONE_MINUS_CONSTANT_ALPHA};function xe(U,st,Y,gt,ot,j,bt,Ot,Oe,ue){if(U===Vi){g===!0&&(wt(e.BLEND),g=!1);return}if(g===!1&&(at(e.BLEND),g=!0),U!==xS){if(U!==f||ue!==N){if((m!==aa||R!==aa)&&(e.blendEquation(e.FUNC_ADD),m=aa,R=aa),ue)switch(U){case Xa:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $m:e.blendFunc(e.ONE,e.ONE);break;case tg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case eg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ct("WebGLState: Invalid blending: ",U);break}else switch(U){case Xa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $m:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case tg:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eg:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",U);break}x=null,b=null,E=null,C=null,S.set(0,0,0),w=0,f=U,N=ue}return}ot=ot||st,j=j||Y,bt=bt||gt,(st!==m||ot!==R)&&(e.blendEquationSeparate(qt[st],qt[ot]),m=st,R=ot),(Y!==x||gt!==b||j!==E||bt!==C)&&(e.blendFuncSeparate(ce[Y],ce[gt],ce[j],ce[bt]),x=Y,b=gt,E=j,C=bt),(Ot.equals(S)===!1||Oe!==w)&&(e.blendColor(Ot.r,Ot.g,Ot.b,Oe),S.copy(Ot),w=Oe),f=U,N=!1}function kt(U,st){U.side===Fi?wt(e.CULL_FACE):at(e.CULL_FACE);let Y=U.side===yn;st&&(Y=!Y),qe(Y),U.blending===Xa&&U.transparent===!1?xe(Vi):xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let gt=U.stencilWrite;o.setTest(gt),gt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),L(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?at(e.SAMPLE_ALPHA_TO_COVERAGE):wt(e.SAMPLE_ALPHA_TO_COVERAGE)}function qe(U){D!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),D=U)}function Re(U){U!==vS?(at(e.CULL_FACE),U!==B&&(U===jm?e.cullFace(e.BACK):U===_S?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):wt(e.CULL_FACE),B=U}function Nn(U){U!==X&&(k&&e.lineWidth(U),X=U)}function L(U,st,Y){U?(at(e.POLYGON_OFFSET_FILL),(q!==st||O!==Y)&&(q=st,O=Y,r.getReversed()&&(st=-st),e.polygonOffset(st,Y))):wt(e.POLYGON_OFFSET_FILL)}function Ye(U){U?at(e.SCISSOR_TEST):wt(e.SCISSOR_TEST)}function Yt(U){U===void 0&&(U=e.TEXTURE0+G-1),ht!==U&&(e.activeTexture(U),ht=U)}function ve(U,st,Y){Y===void 0&&(ht===null?Y=e.TEXTURE0+G-1:Y=ht);let gt=xt[Y];gt===void 0&&(gt={type:void 0,texture:void 0},xt[Y]=gt),(gt.type!==U||gt.texture!==st)&&(ht!==Y&&(e.activeTexture(Y),ht=Y),e.bindTexture(U,st||pt[U]),gt.type=U,gt.texture=st)}function ct(){let U=xt[ht];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(U){Ct("WebGLState:",U)}}function A(){try{e.compressedTexImage3D(...arguments)}catch(U){Ct("WebGLState:",U)}}function y(){try{e.texSubImage2D(...arguments)}catch(U){Ct("WebGLState:",U)}}function P(){try{e.texSubImage3D(...arguments)}catch(U){Ct("WebGLState:",U)}}function Z(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Ct("WebGLState:",U)}}function $(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Ct("WebGLState:",U)}}function nt(){try{e.texStorage2D(...arguments)}catch(U){Ct("WebGLState:",U)}}function lt(){try{e.texStorage3D(...arguments)}catch(U){Ct("WebGLState:",U)}}function W(){try{e.texImage2D(...arguments)}catch(U){Ct("WebGLState:",U)}}function K(){try{e.texImage3D(...arguments)}catch(U){Ct("WebGLState:",U)}}function mt(U){return p[U]!==void 0?p[U]:e.getParameter(U)}function _t(U,st){p[U]!==st&&(e.pixelStorei(U,st),p[U]=st)}function rt(U){le.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),le.copy(U))}function it(U){zt.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),zt.copy(U))}function Nt(U,st){let Y=c.get(st);Y===void 0&&(Y=new WeakMap,c.set(st,Y));let gt=Y.get(U);gt===void 0&&(gt=e.getUniformBlockIndex(st,U.name),Y.set(U,gt))}function Ft(U,st){let gt=c.get(st).get(U);l.get(st)!==gt&&(e.uniformBlockBinding(st,gt,U.__bindingPointIndex),l.set(st,gt))}function te(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},ht=null,xt={},u={},d=new WeakMap,_=[],T=null,g=!1,f=null,m=null,x=null,b=null,R=null,E=null,C=null,S=new se(0,0,0),w=0,N=!1,D=null,B=null,X=null,q=null,O=null,le.set(0,0,e.canvas.width,e.canvas.height),zt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:at,disable:wt,bindFramebuffer:Lt,drawBuffers:Rt,useProgram:Ce,setBlending:xe,setMaterial:kt,setFlipSided:qe,setCullFace:Re,setLineWidth:Nn,setPolygonOffset:L,setScissorTest:Ye,activeTexture:Yt,bindTexture:ve,unbindTexture:ct,compressedTexImage2D:De,compressedTexImage3D:A,texImage2D:W,texImage3D:K,pixelStorei:_t,getParameter:mt,updateUBOMapping:Nt,uniformBlockBinding:Ft,texStorage2D:nt,texStorage3D:lt,texSubImage2D:y,texSubImage3D:P,compressedTexSubImage2D:Z,compressedTexSubImage3D:$,scissor:rt,viewport:it,reset:te}}function n3(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,p=new Set,u,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(A,y){return _?new OffscreenCanvas(A,y):Rl("canvas")}function g(A,y,P){let Z=1,$=De(A);if(($.width>P||$.height>P)&&(Z=P/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let nt=Math.floor(Z*$.width),lt=Math.floor(Z*$.height);u===void 0&&(u=T(nt,lt));let W=y?T(nt,lt):u;return W.width=nt,W.height=lt,W.getContext("2d").drawImage(A,0,0,nt,lt),At("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+nt+"x"+lt+")."),W}else return"data"in A&&At("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function f(A){return A.generateMipmaps}function m(A){e.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(A,y,P,Z,$,nt=!1){if(A!==null){if(e[A]!==void 0)return e[A];At("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let lt;Z&&(lt=t.get("EXT_texture_norm16"),lt||At("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=y;if(y===e.RED&&(P===e.FLOAT&&(W=e.R32F),P===e.HALF_FLOAT&&(W=e.R16F),P===e.UNSIGNED_BYTE&&(W=e.R8),P===e.UNSIGNED_SHORT&&lt&&(W=lt.R16_EXT),P===e.SHORT&&lt&&(W=lt.R16_SNORM_EXT)),y===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.R8UI),P===e.UNSIGNED_SHORT&&(W=e.R16UI),P===e.UNSIGNED_INT&&(W=e.R32UI),P===e.BYTE&&(W=e.R8I),P===e.SHORT&&(W=e.R16I),P===e.INT&&(W=e.R32I)),y===e.RG&&(P===e.FLOAT&&(W=e.RG32F),P===e.HALF_FLOAT&&(W=e.RG16F),P===e.UNSIGNED_BYTE&&(W=e.RG8),P===e.UNSIGNED_SHORT&&lt&&(W=lt.RG16_EXT),P===e.SHORT&&lt&&(W=lt.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.RG8UI),P===e.UNSIGNED_SHORT&&(W=e.RG16UI),P===e.UNSIGNED_INT&&(W=e.RG32UI),P===e.BYTE&&(W=e.RG8I),P===e.SHORT&&(W=e.RG16I),P===e.INT&&(W=e.RG32I)),y===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.RGB8UI),P===e.UNSIGNED_SHORT&&(W=e.RGB16UI),P===e.UNSIGNED_INT&&(W=e.RGB32UI),P===e.BYTE&&(W=e.RGB8I),P===e.SHORT&&(W=e.RGB16I),P===e.INT&&(W=e.RGB32I)),y===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),P===e.UNSIGNED_INT&&(W=e.RGBA32UI),P===e.BYTE&&(W=e.RGBA8I),P===e.SHORT&&(W=e.RGBA16I),P===e.INT&&(W=e.RGBA32I)),y===e.RGB&&(P===e.UNSIGNED_SHORT&&lt&&(W=lt.RGB16_EXT),P===e.SHORT&&lt&&(W=lt.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(W=e.R11F_G11F_B10F)),y===e.RGBA){let K=nt?wl:Jt.getTransfer($);P===e.FLOAT&&(W=e.RGBA32F),P===e.HALF_FLOAT&&(W=e.RGBA16F),P===e.UNSIGNED_BYTE&&(W=K===ae?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&lt&&(W=lt.RGBA16_EXT),P===e.SHORT&&lt&&(W=lt.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function R(A,y){let P;return A?y===null||y===Si||y===po?P=e.DEPTH24_STENCIL8:y===bi?P=e.DEPTH32F_STENCIL8:y===fo&&(P=e.DEPTH24_STENCIL8,At("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Si||y===po?P=e.DEPTH_COMPONENT24:y===bi?P=e.DEPTH_COMPONENT32F:y===fo&&(P=e.DEPTH_COMPONENT16),P}function E(A,y){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==cn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function C(A){let y=A.target;y.removeEventListener("dispose",C),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function S(A){let y=A.target;y.removeEventListener("dispose",S),D(y)}function w(A){let y=i.get(A);if(y.__webglInit===void 0)return;let P=A.source,Z=d.get(P);if(Z){let $=Z[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&N(A),Object.keys(Z).length===0&&d.delete(P)}i.remove(A)}function N(A){let y=i.get(A);e.deleteTexture(y.__webglTexture);let P=A.source,Z=d.get(P);delete Z[y.__cacheKey],r.memory.textures--}function D(A){let y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let $=0;$<y.__webglFramebuffer[Z].length;$++)e.deleteFramebuffer(y.__webglFramebuffer[Z][$]);else e.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)e.deleteFramebuffer(y.__webglFramebuffer[Z]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let P=A.textures;for(let Z=0,$=P.length;Z<$;Z++){let nt=i.get(P[Z]);nt.__webglTexture&&(e.deleteTexture(nt.__webglTexture),r.memory.textures--),i.remove(P[Z])}i.remove(A)}let B=0;function X(){B=0}function q(){return B}function O(A){B=A}function G(){let A=B;return A>=s.maxTextures&&At("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),B+=1,A}function k(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function tt(A,y){let P=i.get(A);if(A.isVideoTexture&&ve(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&P.__version!==A.version){let Z=A.image;if(Z===null)At("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)At("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(P,A,y);return}}else A.isExternalTexture&&(P.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+y)}function et(A,y){let P=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&P.__version!==A.version){wt(P,A,y);return}else A.isExternalTexture&&(P.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+y)}function ht(A,y){let P=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&P.__version!==A.version){wt(P,A,y);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+y)}function xt(A,y){let P=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&P.__version!==A.version){Lt(P,A,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+y)}let Tt={[uh]:e.REPEAT,[Ii]:e.CLAMP_TO_EDGE,[hh]:e.MIRRORED_REPEAT},jt={[nn]:e.NEAREST,[VS]:e.NEAREST_MIPMAP_NEAREST,[Wl]:e.NEAREST_MIPMAP_LINEAR,[cn]:e.LINEAR,[Fh]:e.LINEAR_MIPMAP_NEAREST,[fa]:e.LINEAR_MIPMAP_LINEAR},le={[kS]:e.NEVER,[ZS]:e.ALWAYS,[WS]:e.LESS,[Mf]:e.LEQUAL,[XS]:e.EQUAL,[Tf]:e.GEQUAL,[qS]:e.GREATER,[YS]:e.NOTEQUAL};function zt(A,y){if(y.type===bi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===cn||y.magFilter===Fh||y.magFilter===Wl||y.magFilter===fa||y.minFilter===cn||y.minFilter===Fh||y.minFilter===Wl||y.minFilter===fa)&&At("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Tt[y.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Tt[y.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Tt[y.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,jt[y.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,jt[y.minFilter]),y.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,le[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nn||y.minFilter!==Wl&&y.minFilter!==fa||y.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Q(A,y){let P=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",C));let Z=y.source,$=d.get(Z);$===void 0&&($={},d.set(Z,$));let nt=k(y);if(nt!==A.__cacheKey){$[nt]===void 0&&($[nt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),$[nt].usedTimes++;let lt=$[A.__cacheKey];lt!==void 0&&($[A.__cacheKey].usedTimes--,lt.usedTimes===0&&N(y)),A.__cacheKey=nt,A.__webglTexture=$[nt].texture}return P}function pt(A,y,P){return Math.floor(Math.floor(A/P)/y)}function at(A,y,P,Z){let nt=A.updateRanges;if(nt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,P,Z,y.data);else{nt.sort((_t,rt)=>_t.start-rt.start);let lt=0;for(let _t=1;_t<nt.length;_t++){let rt=nt[lt],it=nt[_t],Nt=rt.start+rt.count,Ft=pt(it.start,y.width,4),te=pt(rt.start,y.width,4);it.start<=Nt+1&&Ft===te&&pt(it.start+it.count-1,y.width,4)===Ft?rt.count=Math.max(rt.count,it.start+it.count-rt.start):(++lt,nt[lt]=it)}nt.length=lt+1;let W=n.getParameter(e.UNPACK_ROW_LENGTH),K=n.getParameter(e.UNPACK_SKIP_PIXELS),mt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let _t=0,rt=nt.length;_t<rt;_t++){let it=nt[_t],Nt=Math.floor(it.start/4),Ft=Math.ceil(it.count/4),te=Nt%y.width,U=Math.floor(Nt/y.width),st=Ft,Y=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,te),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,te,U,st,Y,P,Z,y.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,W),n.pixelStorei(e.UNPACK_SKIP_PIXELS,K),n.pixelStorei(e.UNPACK_SKIP_ROWS,mt)}}function wt(A,y,P){let Z=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=e.TEXTURE_3D);let $=Q(A,y),nt=y.source;n.bindTexture(Z,A.__webglTexture,e.TEXTURE0+P);let lt=i.get(nt);if(nt.version!==lt.__version||$===!0){if(n.activeTexture(e.TEXTURE0+P),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Y=Jt.getPrimaries(Jt.workingColorSpace),gt=y.colorSpace===xs?null:Jt.getPrimaries(y.colorSpace),ot=y.colorSpace===xs||Y===gt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let K=g(y.image,!1,s.maxTextureSize);K=ct(y,K);let mt=a.convert(y.format,y.colorSpace),_t=a.convert(y.type),rt=b(y.internalFormat,mt,_t,y.normalized,y.colorSpace,y.isVideoTexture);zt(Z,y);let it,Nt=y.mipmaps,Ft=y.isVideoTexture!==!0,te=lt.__version===void 0||$===!0,U=nt.dataReady,st=E(y,K);if(y.isDepthTexture)rt=R(y.format===da,y.type),te&&(Ft?n.texStorage2D(e.TEXTURE_2D,1,rt,K.width,K.height):n.texImage2D(e.TEXTURE_2D,0,rt,K.width,K.height,0,mt,_t,null));else if(y.isDataTexture)if(Nt.length>0){Ft&&te&&n.texStorage2D(e.TEXTURE_2D,st,rt,Nt[0].width,Nt[0].height);for(let Y=0,gt=Nt.length;Y<gt;Y++)it=Nt[Y],Ft?U&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,it.width,it.height,mt,_t,it.data):n.texImage2D(e.TEXTURE_2D,Y,rt,it.width,it.height,0,mt,_t,it.data);y.generateMipmaps=!1}else Ft?(te&&n.texStorage2D(e.TEXTURE_2D,st,rt,K.width,K.height),U&&at(y,K,mt,_t)):n.texImage2D(e.TEXTURE_2D,0,rt,K.width,K.height,0,mt,_t,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&te&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,rt,Nt[0].width,Nt[0].height,K.depth);for(let Y=0,gt=Nt.length;Y<gt;Y++)if(it=Nt[Y],y.format!==fi)if(mt!==null)if(Ft){if(U)if(y.layerUpdates.size>0){let ot=Tg(it.width,it.height,y.format,y.type);for(let j of y.layerUpdates){let bt=it.data.subarray(j*ot/it.data.BYTES_PER_ELEMENT,(j+1)*ot/it.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,j,it.width,it.height,1,mt,bt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,it.width,it.height,K.depth,mt,it.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Y,rt,it.width,it.height,K.depth,0,it.data,0,0);else At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,it.width,it.height,K.depth,mt,_t,it.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Y,rt,it.width,it.height,K.depth,0,mt,_t,it.data)}else{Ft&&te&&n.texStorage2D(e.TEXTURE_2D,st,rt,Nt[0].width,Nt[0].height);for(let Y=0,gt=Nt.length;Y<gt;Y++)it=Nt[Y],y.format!==fi?mt!==null?Ft?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,Y,0,0,it.width,it.height,mt,it.data):n.compressedTexImage2D(e.TEXTURE_2D,Y,rt,it.width,it.height,0,it.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?U&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,it.width,it.height,mt,_t,it.data):n.texImage2D(e.TEXTURE_2D,Y,rt,it.width,it.height,0,mt,_t,it.data)}else if(y.isDataArrayTexture)if(Ft){if(te&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,rt,K.width,K.height,K.depth),U)if(y.layerUpdates.size>0){let Y=Tg(K.width,K.height,y.format,y.type);for(let gt of y.layerUpdates){let ot=K.data.subarray(gt*Y/K.data.BYTES_PER_ELEMENT,(gt+1)*Y/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,gt,K.width,K.height,1,mt,_t,ot)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,mt,_t,K.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,rt,K.width,K.height,K.depth,0,mt,_t,K.data);else if(y.isData3DTexture)Ft?(te&&n.texStorage3D(e.TEXTURE_3D,st,rt,K.width,K.height,K.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,mt,_t,K.data)):n.texImage3D(e.TEXTURE_3D,0,rt,K.width,K.height,K.depth,0,mt,_t,K.data);else if(y.isFramebufferTexture){if(te)if(Ft)n.texStorage2D(e.TEXTURE_2D,st,rt,K.width,K.height);else{let Y=K.width,gt=K.height;for(let ot=0;ot<st;ot++)n.texImage2D(e.TEXTURE_2D,ot,rt,Y,gt,0,mt,_t,null),Y>>=1,gt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let Y=e.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),K.parentNode!==Y){Y.appendChild(K),p.add(y),Y.onpaint=Ot=>{let Oe=Ot.changedElements;for(let ue of p)Oe.includes(ue.image)&&(ue.needsUpdate=!0)},Y.requestPaint();return}let gt=0,ot=e.RGBA,j=e.RGBA,bt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,gt,ot,j,bt,K),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Ft&&te){let Y=De(Nt[0]);n.texStorage2D(e.TEXTURE_2D,st,rt,Y.width,Y.height)}for(let Y=0,gt=Nt.length;Y<gt;Y++)it=Nt[Y],Ft?U&&n.texSubImage2D(e.TEXTURE_2D,Y,0,0,mt,_t,it):n.texImage2D(e.TEXTURE_2D,Y,rt,mt,_t,it);y.generateMipmaps=!1}else if(Ft){if(te){let Y=De(K);n.texStorage2D(e.TEXTURE_2D,st,rt,Y.width,Y.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,mt,_t,K)}else n.texImage2D(e.TEXTURE_2D,0,rt,mt,_t,K);f(y)&&m(Z),lt.__version=nt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Lt(A,y,P){if(y.image.length!==6)return;let Z=Q(A,y),$=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+P);let nt=i.get($);if($.version!==nt.__version||Z===!0){n.activeTexture(e.TEXTURE0+P);let lt=Jt.getPrimaries(Jt.workingColorSpace),W=y.colorSpace===xs?null:Jt.getPrimaries(y.colorSpace),K=y.colorSpace===xs||lt===W?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let mt=y.isCompressedTexture||y.image[0].isCompressedTexture,_t=y.image[0]&&y.image[0].isDataTexture,rt=[];for(let j=0;j<6;j++)!mt&&!_t?rt[j]=g(y.image[j],!0,s.maxCubemapSize):rt[j]=_t?y.image[j].image:y.image[j],rt[j]=ct(y,rt[j]);let it=rt[0],Nt=a.convert(y.format,y.colorSpace),Ft=a.convert(y.type),te=b(y.internalFormat,Nt,Ft,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,st=nt.__version===void 0||Z===!0,Y=$.dataReady,gt=E(y,it);zt(e.TEXTURE_CUBE_MAP,y);let ot;if(mt){U&&st&&n.texStorage2D(e.TEXTURE_CUBE_MAP,gt,te,it.width,it.height);for(let j=0;j<6;j++){ot=rt[j].mipmaps;for(let bt=0;bt<ot.length;bt++){let Ot=ot[bt];y.format!==fi?Nt!==null?U?Y&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,0,0,Ot.width,Ot.height,Nt,Ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,te,Ot.width,Ot.height,0,Ot.data):At("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,0,0,Ot.width,Ot.height,Nt,Ft,Ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,te,Ot.width,Ot.height,0,Nt,Ft,Ot.data)}}}else{if(ot=y.mipmaps,U&&st){ot.length>0&&gt++;let j=De(rt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,gt,te,j.width,j.height)}for(let j=0;j<6;j++)if(_t){U?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,rt[j].width,rt[j].height,Nt,Ft,rt[j].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,rt[j].width,rt[j].height,0,Nt,Ft,rt[j].data);for(let bt=0;bt<ot.length;bt++){let Oe=ot[bt].image[j].image;U?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,0,0,Oe.width,Oe.height,Nt,Ft,Oe.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,te,Oe.width,Oe.height,0,Nt,Ft,Oe.data)}}else{U?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Nt,Ft,rt[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,te,Nt,Ft,rt[j]);for(let bt=0;bt<ot.length;bt++){let Ot=ot[bt];U?Y&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,0,0,Nt,Ft,Ot.image[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,te,Nt,Ft,Ot.image[j])}}}f(y)&&m(e.TEXTURE_CUBE_MAP),nt.__version=$.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Rt(A,y,P,Z,$,nt){let lt=a.convert(P.format,P.colorSpace),W=a.convert(P.type),K=b(P.internalFormat,lt,W,P.normalized,P.colorSpace),mt=i.get(y),_t=i.get(P);if(_t.__renderTarget=y,!mt.__hasExternalTextures){let rt=Math.max(1,y.width>>nt),it=Math.max(1,y.height>>nt);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,nt,K,rt,it,y.depth,0,lt,W,null):n.texImage2D($,nt,K,rt,it,0,lt,W,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),Yt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Z,$,_t.__webglTexture,0,Ye(y)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Z,$,_t.__webglTexture,nt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(A,y,P){if(e.bindRenderbuffer(e.RENDERBUFFER,A),y.depthBuffer){let Z=y.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,nt=R(y.stencilBuffer,$),lt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Yt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye(y),nt,y.width,y.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye(y),nt,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,nt,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,lt,e.RENDERBUFFER,A)}else{let Z=y.textures;for(let $=0;$<Z.length;$++){let nt=Z[$],lt=a.convert(nt.format,nt.colorSpace),W=a.convert(nt.type),K=b(nt.internalFormat,lt,W,nt.normalized,nt.colorSpace);Yt(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye(y),K,y.width,y.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye(y),K,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,K,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function qt(A,y,P){let Z=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=i.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),zt(e.TEXTURE_CUBE_MAP,y.depthTexture);let mt=a.convert(y.depthTexture.format),_t=a.convert(y.depthTexture.type),rt;y.depthTexture.format===Oi?rt=e.DEPTH_COMPONENT24:y.depthTexture.format===da&&(rt=e.DEPTH24_STENCIL8);for(let it=0;it<6;it++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,rt,y.width,y.height,0,mt,_t,null)}}else tt(y.depthTexture,0);let nt=$.__webglTexture,lt=Ye(y),W=Z?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,K=y.depthTexture.format===da?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===Oi)Yt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,W,nt,0,lt):e.framebufferTexture2D(e.FRAMEBUFFER,K,W,nt,0);else if(y.depthTexture.format===da)Yt(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,W,nt,0,lt):e.framebufferTexture2D(e.FRAMEBUFFER,K,W,nt,0);else throw new Error("Unknown depthTexture format")}function ce(A){let y=i.get(A),P=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=Z}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(P)for(let Z=0;Z<6;Z++)qt(y.__webglFramebuffer[Z],A,Z);else{let Z=A.texture.mipmaps;Z&&Z.length>0?qt(y.__webglFramebuffer[0],A,0):qt(y.__webglFramebuffer,A,0)}else if(P){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=e.createRenderbuffer(),Ce(y.__webglDepthbuffer[Z],A,!1);else{let $=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer[Z];e.bindRenderbuffer(e.RENDERBUFFER,nt),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,nt)}}else{let Z=A.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Ce(y.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,nt),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,nt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(A,y,P){let Z=i.get(A);y!==void 0&&Rt(Z.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&ce(A)}function kt(A){let y=A.texture,P=i.get(A),Z=i.get(y);A.addEventListener("dispose",S);let $=A.textures,nt=A.isWebGLCubeRenderTarget===!0,lt=$.length>1;if(lt||(Z.__webglTexture===void 0&&(Z.__webglTexture=e.createTexture()),Z.__version=y.version,r.memory.textures++),nt){P.__webglFramebuffer=[];for(let W=0;W<6;W++)if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer[W]=[];for(let K=0;K<y.mipmaps.length;K++)P.__webglFramebuffer[W][K]=e.createFramebuffer()}else P.__webglFramebuffer[W]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer=[];for(let W=0;W<y.mipmaps.length;W++)P.__webglFramebuffer[W]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(lt)for(let W=0,K=$.length;W<K;W++){let mt=i.get($[W]);mt.__webglTexture===void 0&&(mt.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&Yt(A)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let W=0;W<$.length;W++){let K=$[W];P.__webglColorRenderbuffer[W]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[W]);let mt=a.convert(K.format,K.colorSpace),_t=a.convert(K.type),rt=b(K.internalFormat,mt,_t,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),it=Ye(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,it,rt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+W,e.RENDERBUFFER,P.__webglColorRenderbuffer[W])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(P.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(nt){n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),zt(e.TEXTURE_CUBE_MAP,y);for(let W=0;W<6;W++)if(y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)Rt(P.__webglFramebuffer[W][K],A,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,K);else Rt(P.__webglFramebuffer[W],A,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);f(y)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(lt){for(let W=0,K=$.length;W<K;W++){let mt=$[W],_t=i.get(mt),rt=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(rt,_t.__webglTexture),zt(rt,mt),Rt(P.__webglFramebuffer,A,mt,e.COLOR_ATTACHMENT0+W,rt,0),f(mt)&&m(rt)}n.unbindTexture()}else{let W=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(W=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(W,Z.__webglTexture),zt(W,y),y.mipmaps&&y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)Rt(P.__webglFramebuffer[K],A,y,e.COLOR_ATTACHMENT0,W,K);else Rt(P.__webglFramebuffer,A,y,e.COLOR_ATTACHMENT0,W,0);f(y)&&m(W),n.unbindTexture()}A.depthBuffer&&ce(A)}function qe(A){let y=A.textures;for(let P=0,Z=y.length;P<Z;P++){let $=y[P];if(f($)){let nt=x(A),lt=i.get($).__webglTexture;n.bindTexture(nt,lt),m(nt),n.unbindTexture()}}}let Re=[],Nn=[];function L(A){if(A.samples>0){if(Yt(A)===!1){let y=A.textures,P=A.width,Z=A.height,$=e.COLOR_BUFFER_BIT,nt=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=i.get(A),W=y.length>1;if(W)for(let mt=0;mt<y.length;mt++)n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let K=A.texture.mipmaps;K&&K.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),W){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,lt.__webglColorRenderbuffer[mt]);let _t=i.get(y[mt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,_t,0)}e.blitFramebuffer(0,0,P,Z,0,0,P,Z,$,e.NEAREST),l===!0&&(Re.length=0,Nn.length=0,Re.push(e.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Re.push(nt),Nn.push(nt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Nn)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),W)for(let mt=0;mt<y.length;mt++){n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.RENDERBUFFER,lt.__webglColorRenderbuffer[mt]);let _t=i.get(y[mt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,lt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+mt,e.TEXTURE_2D,_t,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let y=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Ye(A){return Math.min(s.maxSamples,A.samples)}function Yt(A){let y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ve(A){let y=r.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function ct(A,y){let P=A.colorSpace,Z=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||P!==Al&&P!==xs&&(Jt.getTransfer(P)===ae?(Z!==fi||$!==Jn)&&At("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",P)),y}function De(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.getTextureUnits=q,this.setTextureUnits=O,this.setTexture2D=tt,this.setTexture2DArray=et,this.setTexture3D=ht,this.setTextureCube=xt,this.rebindTextures=xe,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function i3(e,t){function n(i,s=xs){let a,r=Jt.getTransfer(s);if(i===Jn)return e.UNSIGNED_BYTE;if(i===Gh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Hh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===dg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===pg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===hg)return e.BYTE;if(i===fg)return e.SHORT;if(i===fo)return e.UNSIGNED_SHORT;if(i===Vh)return e.INT;if(i===Si)return e.UNSIGNED_INT;if(i===bi)return e.FLOAT;if(i===Gi)return e.HALF_FLOAT;if(i===mg)return e.ALPHA;if(i===gg)return e.RGB;if(i===fi)return e.RGBA;if(i===Oi)return e.DEPTH_COMPONENT;if(i===da)return e.DEPTH_STENCIL;if(i===vg)return e.RED;if(i===kh)return e.RED_INTEGER;if(i===pa)return e.RG;if(i===Wh)return e.RG_INTEGER;if(i===Xh)return e.RGBA_INTEGER;if(i===Xl||i===ql||i===Yl||i===Zl)if(r===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Xl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Xl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qh||i===Yh||i===Zh||i===Jh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===qh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kh||i===Qh||i===jh||i===$h||i===tf||i===Jl||i===ef)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Kh||i===Qh)return r===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===jh)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===$h)return a.COMPRESSED_R11_EAC;if(i===tf)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Jl)return a.COMPRESSED_RG11_EAC;if(i===ef)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nf||i===sf||i===af||i===rf||i===of||i===lf||i===cf||i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===nf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===af)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===of)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ff)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===df)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gf)return r===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vf||i===_f||i===yf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===vf)return r===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_f)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xf||i===Sf||i===Kl||i===bf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===xf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Sf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===po?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}function o3(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Sg(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,m,x,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(g,f):f.isMeshLambertMaterial?(a(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(g,f),p(g,f)):f.isMeshPhongMaterial?(a(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(g,f),u(g,f),f.isMeshPhysicalMaterial&&d(g,f,b)):f.isMeshMatcapMaterial?(a(g,f),_(g,f)):f.isMeshDepthMaterial?a(g,f):f.isMeshDistanceMaterial?(a(g,f),T(g,f)):f.isMeshNormalMaterial?a(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,x):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===yn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===yn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let m=t.get(f),x=m.envMap,b=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(r3.makeRotationFromEuler(b)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Db),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,x){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=x*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,m){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function T(g,f){let m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function l3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,x){let b=x.program;i.uniformBlockBinding(m,b)}function c(m,x){let b=s[m.id];b===void 0&&(_(m),b=h(m),s[m.id]=b,m.addEventListener("dispose",g));let R=x.program;i.updateUBOMapping(m,R);let E=t.render.frame;a[m.id]!==E&&(u(m),a[m.id]=E)}function h(m){let x=p();m.__bindingPointIndex=x;let b=e.createBuffer(),R=m.__size,E=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,R,E),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,b),b}function p(){for(let m=0;m<o;m++)if(r.indexOf(m)===-1)return r.push(m),m;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){let x=s[m.id],b=m.uniforms,R=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let E=0,C=b.length;E<C;E++){let S=Array.isArray(b[E])?b[E]:[b[E]];for(let w=0,N=S.length;w<N;w++){let D=S[w];if(d(D,E,w,R)===!0){let B=D.__offset,X=Array.isArray(D.value)?D.value:[D.value],q=0;for(let O=0;O<X.length;O++){let G=X[O],k=T(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,B+q,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):ArrayBuffer.isView(G)?D.__data.set(new G.constructor(G.buffer,G.byteOffset,D.__data.length)):(G.toArray(D.__data,q),q+=k.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,D.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(m,x,b,R){let E=m.value,C=x+"_"+b;if(R[C]===void 0)return typeof E=="number"||typeof E=="boolean"?R[C]=E:ArrayBuffer.isView(E)?R[C]=E.slice():R[C]=E.clone(),!0;{let S=R[C];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return R[C]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(S.equals(E)===!1)return S.copy(E),!0}}return!1}function _(m){let x=m.uniforms,b=0,R=16;for(let C=0,S=x.length;C<S;C++){let w=Array.isArray(x[C])?x[C]:[x[C]];for(let N=0,D=w.length;N<D;N++){let B=w[N],X=Array.isArray(B.value)?B.value:[B.value];for(let q=0,O=X.length;q<O;q++){let G=X[q],k=T(G),tt=b%R,et=tt%k.boundary,ht=tt+et;b+=et,ht!==0&&R-ht<k.storage&&(b+=R-ht),B.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=k.storage}}}let E=b%R;return E>0&&(b+=R-E),m.__size=b,m.__cache={},this}function T(m){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?At("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):At("WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){let x=m.target;x.removeEventListener("dispose",g);let b=r.indexOf(x.__bindingPointIndex);r.splice(b,1),e.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function f(){for(let m in s)e.deleteBuffer(s[m]);r=[],s={},a={}}return{bind:l,update:c,dispose:f}}function u3(){return Hi===null&&(Hi=new yh(c3,16,16,pa,Gi),Hi.name="DFG_LUT",Hi.minFilter=cn,Hi.magFilter=cn,Hi.wrapS=Ii,Hi.wrapT=Ii,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var EE,AE,wE,CE,RE,DE,NE,UE,LE,IE,OE,PE,BE,zE,FE,VE,GE,HE,kE,WE,XE,qE,YE,ZE,JE,KE,QE,jE,$E,tA,eA,nA,iA,sA,aA,rA,oA,lA,cA,uA,hA,fA,dA,pA,mA,gA,vA,_A,yA,xA,SA,bA,MA,TA,EA,AA,wA,CA,RA,DA,NA,UA,LA,IA,OA,PA,BA,zA,FA,VA,GA,HA,kA,WA,XA,qA,YA,ZA,JA,KA,QA,jA,$A,tw,ew,nw,iw,sw,aw,rw,ow,lw,cw,uw,hw,fw,dw,pw,mw,gw,vw,_w,yw,xw,Sw,bw,Mw,Tw,Ew,Aw,ww,Cw,Rw,Dw,Nw,Uw,Lw,Iw,Ow,Pw,Bw,zw,Fw,Vw,Gw,Hw,kw,Ww,Xw,qw,Yw,Zw,Jw,Kw,Qw,jw,$w,t2,e2,n2,i2,s2,Vt,ut,ki,Ef,a2,Eb,ma,nb,ja,h2,jl,ib,Ng,Ug,Lg,Ig,f2,wf,Cf,M2,Ab,Bg,wb,Cb,Rb,ob,lb,cb,ub,hb,zg,Fg,Vg,Og,go,fC,dC,pb,vC,Af,MC,TC,AC,CC,DC,UC,IC,zC,Hg,kg,qC,KC,QC,jC,$C,Mb,$l,Pg,s3,a3,Wg,Xg,r3,Db,c3,Hi,Rf,Nb=o0(()=>{Dg();Dg();EE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,IE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ZE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,QE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eA="gl_FragColor = linearToOutputTexel( gl_FragColor );",nA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,aA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_A=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,CA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$A=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ew=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Iw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ww=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:EE,alphahash_pars_fragment:AE,alphamap_fragment:wE,alphamap_pars_fragment:CE,alphatest_fragment:RE,alphatest_pars_fragment:DE,aomap_fragment:NE,aomap_pars_fragment:UE,batching_pars_vertex:LE,batching_vertex:IE,begin_vertex:OE,beginnormal_vertex:PE,bsdfs:BE,iridescence_fragment:zE,bumpmap_pars_fragment:FE,clipping_planes_fragment:VE,clipping_planes_pars_fragment:GE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:kE,color_fragment:WE,color_pars_fragment:XE,color_pars_vertex:qE,color_vertex:YE,common:ZE,cube_uv_reflection_fragment:JE,defaultnormal_vertex:KE,displacementmap_pars_vertex:QE,displacementmap_vertex:jE,emissivemap_fragment:$E,emissivemap_pars_fragment:tA,colorspace_fragment:eA,colorspace_pars_fragment:nA,envmap_fragment:iA,envmap_common_pars_fragment:sA,envmap_pars_fragment:aA,envmap_pars_vertex:rA,envmap_physical_pars_fragment:vA,envmap_vertex:oA,fog_vertex:lA,fog_pars_vertex:cA,fog_fragment:uA,fog_pars_fragment:hA,gradientmap_pars_fragment:fA,lightmap_pars_fragment:dA,lights_lambert_fragment:pA,lights_lambert_pars_fragment:mA,lights_pars_begin:gA,lights_toon_fragment:_A,lights_toon_pars_fragment:yA,lights_phong_fragment:xA,lights_phong_pars_fragment:SA,lights_physical_fragment:bA,lights_physical_pars_fragment:MA,lights_fragment_begin:TA,lights_fragment_maps:EA,lights_fragment_end:AA,lightprobes_pars_fragment:wA,logdepthbuf_fragment:CA,logdepthbuf_pars_fragment:RA,logdepthbuf_pars_vertex:DA,logdepthbuf_vertex:NA,map_fragment:UA,map_pars_fragment:LA,map_particle_fragment:IA,map_particle_pars_fragment:OA,metalnessmap_fragment:PA,metalnessmap_pars_fragment:BA,morphinstance_vertex:zA,morphcolor_vertex:FA,morphnormal_vertex:VA,morphtarget_pars_vertex:GA,morphtarget_vertex:HA,normal_fragment_begin:kA,normal_fragment_maps:WA,normal_pars_fragment:XA,normal_pars_vertex:qA,normal_vertex:YA,normalmap_pars_fragment:ZA,clearcoat_normal_fragment_begin:JA,clearcoat_normal_fragment_maps:KA,clearcoat_pars_fragment:QA,iridescence_pars_fragment:jA,opaque_fragment:$A,packing:tw,premultiplied_alpha_fragment:ew,project_vertex:nw,dithering_fragment:iw,dithering_pars_fragment:sw,roughnessmap_fragment:aw,roughnessmap_pars_fragment:rw,shadowmap_pars_fragment:ow,shadowmap_pars_vertex:lw,shadowmap_vertex:cw,shadowmask_pars_fragment:uw,skinbase_vertex:hw,skinning_pars_vertex:fw,skinning_vertex:dw,skinnormal_vertex:pw,specularmap_fragment:mw,specularmap_pars_fragment:gw,tonemapping_fragment:vw,tonemapping_pars_fragment:_w,transmission_fragment:yw,transmission_pars_fragment:xw,uv_pars_fragment:Sw,uv_pars_vertex:bw,uv_vertex:Mw,worldpos_vertex:Tw,background_vert:Ew,background_frag:Aw,backgroundCube_vert:ww,backgroundCube_frag:Cw,cube_vert:Rw,cube_frag:Dw,depth_vert:Nw,depth_frag:Uw,distance_vert:Lw,distance_frag:Iw,equirect_vert:Ow,equirect_frag:Pw,linedashed_vert:Bw,linedashed_frag:zw,meshbasic_vert:Fw,meshbasic_frag:Vw,meshlambert_vert:Gw,meshlambert_frag:Hw,meshmatcap_vert:kw,meshmatcap_frag:Ww,meshnormal_vert:Xw,meshnormal_frag:qw,meshphong_vert:Yw,meshphong_frag:Zw,meshphysical_vert:Jw,meshphysical_frag:Kw,meshtoon_vert:Qw,meshtoon_frag:jw,points_vert:$w,points_frag:t2,shadow_vert:e2,shadow_frag:n2,sprite_vert:i2,sprite_frag:s2},ut={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},ki={basic:{uniforms:pn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:pn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:pn([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:pn([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:pn([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new se(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:pn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:pn([ut.points,ut.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:pn([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:pn([ut.common,ut.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:pn([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:pn([ut.sprite,ut.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:pn([ut.common,ut.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:pn([ut.lights,ut.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ki.physical={uniforms:pn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};Ef={r:0,b:0,g:0},a2=new Xe,Eb=new Ut;Eb.set(-1,0,0,0,1,0,0,0,1);ma=4,nb=[.125,.215,.35,.446,.526,.582],ja=20,h2=256,jl=new Ja,ib=new se,Ng=null,Ug=0,Lg=0,Ig=!1,f2=new V,wf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=f2}=a;Ng=this._renderer.getRenderTarget(),Ug=this._renderer.getActiveCubeFace(),Lg=this._renderer.getActiveMipmapLevel(),Ig=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ab(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ng,Ug,Lg),this._renderer.xr.enabled=Ig,t.scissorTest=!1,mo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ha||t.mapping===Ka?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ng=this._renderer.getRenderTarget(),Ug=this._renderer.getActiveCubeFace(),Lg=this._renderer.getActiveMipmapLevel(),Ig=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Gi,format:fi,colorSpace:Al,depthBuffer:!1},s=sb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sb(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=d2(a)),this._blurMaterial=m2(a,t,n),this._ggxMaterial=p2(a,t,n)}return s}_compileMaterial(t){let n=new Dn(new zi,t);this._renderer.compile(n,jl)}_sceneToCubeUV(t,n,i,s,a){let l=new Cn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(ib),p.toneMapping=xi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dn(new uo,new Ol({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,g=T.material,f=!1,m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,f=!0):(g.color.copy(ib),f=!0);for(let x=0;x<6;x++){let b=x%3;b===0?(l.up.set(0,c[x],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[x],a.y,a.z)):b===1?(l.up.set(0,0,c[x]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[x],a.z)):(l.up.set(0,c[x],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[x]));let R=this._cubeSize;mo(s,b*R,x>2?R:0,R,R),p.setRenderTarget(s),f&&p.render(T,l),p.render(t,l)}p.toneMapping=d,p.autoClear=u,t.background=m}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===ha||t.mapping===Ka;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ab());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;mo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,jl)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=0+c*1.25,d=p*u,{_lodMax:_}=this,T=this._sizeLods[i],g=3*T*(i>_-ma?i-_+ma:0),f=4*(this._cubeSize-T);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-n,mo(a,g,f,3*T,2*T),s.setRenderTarget(a),s.render(o,jl),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,mo(t,g,f,3*T,2*T),s.setRenderTarget(t),s.render(o,jl)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");let h=3,p=this._lodMeshes[s];p.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*ja-1),T=a/_,g=isFinite(a)?1+Math.floor(h*T):ja;g>ja&&At(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ja}`);let f=[],m=0;for(let C=0;C<ja;++C){let S=C/T,w=Math.exp(-S*S/2);f.push(w),C===0?m+=w:C<g&&(m+=2*w)}for(let C=0;C<f.length;C++)f[C]=f[C]/m;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=_,u.mipInt.value=x-i;let b=this._sizeLods[s],R=3*b*(s>x-ma?s-x+ma:0),E=4*(this._cubeSize-b);mo(n,R,E,3*b,2*b),l.setRenderTarget(n),l.render(p,jl)}};Cf=class extends Yn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Bl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new uo(5,5,5),a=new _n({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:Vi});a.uniforms.tEquirect.value=n;let r=new Dn(s,a),o=n.minFilter;return n.minFilter===fa&&(n.minFilter=cn),new Ih(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};M2={[ig]:"LINEAR_TONE_MAPPING",[sg]:"REINHARD_TONE_MAPPING",[ag]:"CINEON_TONE_MAPPING",[rg]:"ACES_FILMIC_TONE_MAPPING",[lg]:"AGX_TONE_MAPPING",[cg]:"NEUTRAL_TONE_MAPPING",[og]:"CUSTOM_TONE_MAPPING"};Ab=new Rn,Bg=new ys(1,1),wb=new Dl,Cb=new vh,Rb=new Bl,ob=[],lb=[],cb=new Float32Array(16),ub=new Float32Array(9),hb=new Float32Array(4);zg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=W2(n.type)}},Fg=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uC(n.type)}},Vg=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Og=/(\w+)(\])?(\[|\.)?/g;go=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);hC(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};fC=37297,dC=0;pb=new Ut;vC={[ig]:"Linear",[sg]:"Reinhard",[ag]:"Cineon",[rg]:"ACESFilmic",[lg]:"AgX",[cg]:"Neutral",[og]:"Custom"};Af=new V;MC=/^[ \t]*#include +<([\w\d./]+)>/gm;TC=new Map;AC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;CC={[Hl]:"SHADOWMAP_TYPE_PCF",[ho]:"SHADOWMAP_TYPE_VSM"};DC={[ha]:"ENVMAP_TYPE_CUBE",[Ka]:"ENVMAP_TYPE_CUBE",[kl]:"ENVMAP_TYPE_CUBE_UV"};UC={[Ka]:"ENVMAP_MODE_REFRACTION"};IC={[ng]:"ENVMAP_BLENDING_MULTIPLY",[zS]:"ENVMAP_BLENDING_MIX",[FS]:"ENVMAP_BLENDING_ADD"};zC=0,Hg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new kg(t),n.set(t,i)),i}},kg=class{constructor(t){this.id=zC++,this.code=t,this.usedTimes=0}};qC=0;KC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jC=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],$C=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Mb=new Xe,$l=new V,Pg=new V;s3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Wg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new zl(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new _n({vertexShader:s3,fragmentShader:a3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dn(new Za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xg=class extends Pi{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,_=null,T=typeof XRWebGLBinding<"u",g=new Wg,f={},m=n.getContextAttributes(),x=null,b=null,R=[],E=[],C=new ie,S=null,w=new Cn;w.viewport=new Ie;let N=new Cn;N.viewport=new Ie;let D=[w,N],B=new Oh,X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=R[Q];return pt===void 0&&(pt=new lo,R[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=R[Q];return pt===void 0&&(pt=new lo,R[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=R[Q];return pt===void 0&&(pt=new lo,R[Q]=pt),pt.getHandSpace()};function O(Q){let pt=E.indexOf(Q.inputSource);if(pt===-1)return;let at=R[pt];at!==void 0&&(at.update(Q.inputSource,Q.frame,c||r),at.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",k);for(let Q=0;Q<R.length;Q++){let pt=E[Q];pt!==null&&(E[Q]=null,R[Q].disconnect(pt))}X=null,q=null,g.reset();for(let Q in f)delete f[Q];t.setRenderTarget(x),d=null,u=null,p=null,s=null,b=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&At("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&At("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await n.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(C),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,wt=null,Lt=null;m.depth&&(Lt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,at=m.stencil?da:Oi,wt=m.stencil?po:Si);let Rt={colorFormat:n.RGBA8,depthFormat:Lt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new Yn(u.textureWidth,u.textureHeight,{format:fi,type:Jn,depthTexture:new ys(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Yn(d.framebufferWidth,d.framebufferHeight,{format:fi,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(Q){for(let pt=0;pt<Q.removed.length;pt++){let at=Q.removed[pt],wt=E.indexOf(at);wt>=0&&(E[wt]=null,R[wt].disconnect(at))}for(let pt=0;pt<Q.added.length;pt++){let at=Q.added[pt],wt=E.indexOf(at);if(wt===-1){for(let Rt=0;Rt<R.length;Rt++)if(Rt>=E.length){E.push(at),wt=Rt;break}else if(E[Rt]===null){E[Rt]=at,wt=Rt;break}if(wt===-1)break}let Lt=R[wt];Lt&&Lt.connect(at)}}let tt=new V,et=new V;function ht(Q,pt,at){tt.setFromMatrixPosition(pt.matrixWorld),et.setFromMatrixPosition(at.matrixWorld);let wt=tt.distanceTo(et),Lt=pt.projectionMatrix.elements,Rt=at.projectionMatrix.elements,Ce=Lt[14]/(Lt[10]-1),qt=Lt[14]/(Lt[10]+1),ce=(Lt[9]+1)/Lt[5],xe=(Lt[9]-1)/Lt[5],kt=(Lt[8]-1)/Lt[0],qe=(Rt[8]+1)/Rt[0],Re=Ce*kt,Nn=Ce*qe,L=wt/(-kt+qe),Ye=L*-kt;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ye),Q.translateZ(L),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Lt[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{let Yt=Ce+L,ve=qt+L,ct=Re-Ye,De=Nn+(wt-Ye),A=ce*qt/ve*Yt,y=xe*qt/ve*Yt;Q.projectionMatrix.makePerspective(ct,De,A,y,Yt,ve),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function xt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let pt=Q.near,at=Q.far;g.texture!==null&&(g.depthNear>0&&(pt=g.depthNear),g.depthFar>0&&(at=g.depthFar)),B.near=N.near=w.near=pt,B.far=N.far=w.far=at,(X!==B.near||q!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,q=B.far),B.layers.mask=Q.layers.mask|6,w.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let wt=Q.parent,Lt=B.cameras;xt(B,wt);for(let Rt=0;Rt<Lt.length;Rt++)xt(Lt[Rt],wt);Lt.length===2?ht(B,w,N):B.projectionMatrix.copy(w.projectionMatrix),Tt(Q,B,wt)};function Tt(Q,pt,at){at===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(at.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ph*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Q){return f[Q]};let jt=null;function le(Q,pt){if(h=pt.getViewerPose(c||r),_=pt,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let wt=!1;at.length!==B.cameras.length&&(B.cameras.length=0,wt=!0);for(let qt=0;qt<at.length;qt++){let ce=at[qt],xe=null;if(d!==null)xe=d.getViewport(ce);else{let qe=p.getViewSubImage(u,ce);xe=qe.viewport,qt===0&&(t.setRenderTargetTextures(b,qe.colorTexture,qe.depthStencilTexture),t.setRenderTarget(b))}let kt=D[qt];kt===void 0&&(kt=new Cn,kt.layers.enable(qt),kt.viewport=new Ie,D[qt]=kt),kt.matrix.fromArray(ce.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(ce.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(xe.x,xe.y,xe.width,xe.height),qt===0&&(B.matrix.copy(kt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),wt===!0&&B.cameras.push(kt)}let Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){p=i.getBinding();let qt=p.getDepthInformation(at[0]);qt&&qt.isValid&&qt.texture&&g.init(qt,s.renderState)}if(Lt&&Lt.includes("camera-access")&&T){t.state.unbindTexture(),p=i.getBinding();for(let qt=0;qt<at.length;qt++){let ce=at[qt].camera;if(ce){let xe=f[ce];xe||(xe=new zl,f[ce]=xe);let kt=p.getCameraImage(ce);xe.sourceTexture=kt}}}}for(let at=0;at<R.length;at++){let wt=E[at],Lt=R[at];wt!==null&&Lt!==void 0&&Lt.update(wt,pt,c||r)}jt&&jt(Q,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),_=null}let zt=new Tb;zt.setAnimationLoop(le),this.setAnimationLoop=function(Q){jt=Q},this.dispose=function(){}}},r3=new Xe,Db=new Ut;Db.set(-1,0,0,0,1,0,0,0,1);c3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;Rf=class{constructor(t={}){let{canvas:n=JS(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Jn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;let T=d,g=new Set([Xh,Wh,kh]),f=new Set([Jn,Si,fo,po,Gh,Hh]),m=new Uint32Array(4),x=new Int32Array(4),b=new V,R=null,E=null,C=[],S=[],w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,D=!1,B=null;this._outputColorSpace=Xn;let X=0,q=0,O=null,G=-1,k=null,tt=new Ie,et=new Ie,ht=null,xt=new se(0),Tt=0,jt=n.width,le=n.height,zt=1,Q=null,pt=null,at=new Ie(0,0,jt,le),wt=new Ie(0,0,jt,le),Lt=!1,Rt=new Pl,Ce=!1,qt=!1,ce=new Xe,xe=new V,kt=new Ie,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Nn(){return O===null?zt:1}let L=i;function Ye(M,I){return n.getContext(M,I)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"184"}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",bt,!1),n.addEventListener("webglcontextcreationerror",Ot,!1),L===null){let I="webgl2";if(L=Ye(I,M),L===null)throw Ye(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ct("WebGLRenderer: "+M.message),M}let Yt,ve,ct,De,A,y,P,Z,$,nt,lt,W,K,mt,_t,rt,it,Nt,Ft,te,U,st,Y;function gt(){Yt=new v2(L),Yt.init(),U=new i3(L,Yt),ve=new c2(L,Yt,t,U),ct=new e3(L,Yt),ve.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),De=new x2(L),A=new GC,y=new n3(L,Yt,ct,A,ve,U,De),P=new g2(N),Z=new TE(L),st=new o2(L,Z),$=new _2(L,Z,De,st),nt=new b2(L,$,Z,st,De),Nt=new S2(L,ve,y),_t=new u2(A),lt=new VC(N,P,Yt,ve,st,_t),W=new o3(N,A),K=new kC,mt=new JC(Yt),it=new r2(N,P,ct,nt,_,l),rt=new t3(N,nt,ve),Y=new l3(L,De,ve,ct),Ft=new l2(L,Yt,De),te=new y2(L,Yt,De),De.programs=lt.programs,N.capabilities=ve,N.extensions=Yt,N.properties=A,N.renderLists=K,N.shadowMap=rt,N.state=ct,N.info=De}gt(),T!==Jn&&(w=new T2(T,n.width,n.height,s,a));let ot=new Xg(N,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=Yt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Yt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return zt},this.setPixelRatio=function(M){M!==void 0&&(zt=M,this.setSize(jt,le,!1))},this.getSize=function(M){return M.set(jt,le)},this.setSize=function(M,I,H=!0){if(ot.isPresenting){At("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=M,le=I,n.width=Math.floor(M*zt),n.height=Math.floor(I*zt),H===!0&&(n.style.width=M+"px",n.style.height=I+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(jt*zt,le*zt).floor()},this.setDrawingBufferSize=function(M,I,H){jt=M,le=I,zt=H,n.width=Math.floor(M*H),n.height=Math.floor(I*H),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(T===Jn){Ct("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){At("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(tt)},this.getViewport=function(M){return M.copy(at)},this.setViewport=function(M,I,H,z){M.isVector4?at.set(M.x,M.y,M.z,M.w):at.set(M,I,H,z),ct.viewport(tt.copy(at).multiplyScalar(zt).round())},this.getScissor=function(M){return M.copy(wt)},this.setScissor=function(M,I,H,z){M.isVector4?wt.set(M.x,M.y,M.z,M.w):wt.set(M,I,H,z),ct.scissor(et.copy(wt).multiplyScalar(zt).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(M){ct.setScissorTest(Lt=M)},this.setOpaqueSort=function(M){Q=M},this.setTransparentSort=function(M){pt=M},this.getClearColor=function(M){return M.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,H=!0){let z=0;if(M){let F=!1;if(O!==null){let dt=O.texture.format;F=g.has(dt)}if(F){let dt=O.texture.type,yt=f.has(dt),ft=it.getClearColor(),St=it.getClearAlpha(),Mt=ft.r,Pt=ft.g,Gt=ft.b;yt?(m[0]=Mt,m[1]=Pt,m[2]=Gt,m[3]=St,L.clearBufferuiv(L.COLOR,0,m)):(x[0]=Mt,x[1]=Pt,x[2]=Gt,x[3]=St,L.clearBufferiv(L.COLOR,0,x))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",Ot,!1),it.dispose(),K.dispose(),mt.dispose(),A.dispose(),P.dispose(),nt.dispose(),st.dispose(),Y.dispose(),lt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",jg),ot.removeEventListener("sessionend",$g),_a.stop()};function j(M){M.preventDefault(),xg("WebGLRenderer: Context Lost."),D=!0}function bt(){xg("WebGLRenderer: Context Restored."),D=!1;let M=De.autoReset,I=rt.enabled,H=rt.autoUpdate,z=rt.needsUpdate,F=rt.type;gt(),De.autoReset=M,rt.enabled=I,rt.autoUpdate=H,rt.needsUpdate=z,rt.type=F}function Ot(M){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Oe(M){let I=M.target;I.removeEventListener("dispose",Oe),ue(I)}function ue(M){Wi(M),A.remove(M)}function Wi(M){let I=A.get(M).programs;I!==void 0&&(I.forEach(function(H){lt.releaseProgram(H)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,H,z,F,dt){I===null&&(I=qe);let yt=F.isMesh&&F.matrixWorld.determinant()<0,ft=Gb(M,I,H,z,F);ct.setMaterial(z,yt);let St=H.index,Mt=1;if(z.wireframe===!0){if(St=$.getWireframeAttribute(H),St===void 0)return;Mt=2}let Pt=H.drawRange,Gt=H.attributes.position,Et=Pt.start*Mt,he=(Pt.start+Pt.count)*Mt;dt!==null&&(Et=Math.max(Et,dt.start*Mt),he=Math.min(he,(dt.start+dt.count)*Mt)),St!==null?(Et=Math.max(Et,0),he=Math.min(he,St.count)):Gt!=null&&(Et=Math.max(Et,0),he=Math.min(he,Gt.count));let Pe=he-Et;if(Pe<0||Pe===1/0)return;st.setup(F,z,ft,H,St);let Ne,pe=Ft;if(St!==null&&(Ne=Z.get(St),pe=te,pe.setIndex(Ne)),F.isMesh)z.wireframe===!0?(ct.setLineWidth(z.wireframeLinewidth*Nn()),pe.setMode(L.LINES)):pe.setMode(L.TRIANGLES);else if(F.isLine){let un=z.linewidth;un===void 0&&(un=1),ct.setLineWidth(un*Nn()),F.isLineSegments?pe.setMode(L.LINES):F.isLineLoop?pe.setMode(L.LINE_LOOP):pe.setMode(L.LINE_STRIP)}else F.isPoints?pe.setMode(L.POINTS):F.isSprite&&pe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))pe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let un=F._multiDrawStarts,vt=F._multiDrawCounts,Un=F._multiDrawCount,$t=St?Z.get(St).bytesPerElement:1,Qn=A.get(z).currentProgram.getUniforms();for(let Ti=0;Ti<Un;Ti++)Qn.setValue(L,"_gl_DrawID",Ti),pe.render(un[Ti]/$t,vt[Ti])}else if(F.isInstancedMesh)pe.renderInstances(Et,Pe,F.count);else if(H.isInstancedBufferGeometry){let un=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,vt=Math.min(H.instanceCount,un);pe.renderInstances(Et,Pe,vt)}else pe.render(Et,Pe)};function Mi(M,I,H){M.transparent===!0&&M.side===Fi&&M.forceSinglePass===!1?(M.side=yn,M.needsUpdate=!0,nc(M,I,H),M.side=_s,M.needsUpdate=!0,nc(M,I,H),M.side=Fi):nc(M,I,H)}this.compile=function(M,I,H=null){H===null&&(H=M),E=mt.get(H),E.init(I),S.push(E),H.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(E.pushLight(F),F.castShadow&&E.pushShadow(F))}),M!==H&&M.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(E.pushLight(F),F.castShadow&&E.pushShadow(F))}),E.setupLights();let z=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let dt=F.material;if(dt)if(Array.isArray(dt))for(let yt=0;yt<dt.length;yt++){let ft=dt[yt];Mi(ft,H,F),z.add(ft)}else Mi(dt,H,F),z.add(dt)}),E=S.pop(),z},this.compileAsync=function(M,I,H=null){let z=this.compile(M,I,H);return new Promise(F=>{function dt(){if(z.forEach(function(yt){A.get(yt).currentProgram.isReady()&&z.delete(yt)}),z.size===0){F(M);return}setTimeout(dt,10)}Yt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let If=null;function Fb(M){If&&If(M)}function jg(){_a.stop()}function $g(){_a.start()}let _a=new Tb;_a.setAnimationLoop(Fb),typeof self<"u"&&_a.setContext(self),this.setAnimationLoop=function(M){If=M,ot.setAnimationLoop(M),M===null?_a.stop():_a.start()},ot.addEventListener("sessionstart",jg),ot.addEventListener("sessionend",$g),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(M,I);let H=ot.enabled===!0&&ot.isPresenting===!0,z=w!==null&&(O===null||H)&&w.begin(N,O);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(I),I=ot.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,I,O),E=mt.get(M,S.length),E.init(I),E.state.textureUnits=y.getTextureUnits(),S.push(E),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Rt.setFromProjectionMatrix(ce,yi,I.reversedDepth),qt=this.localClippingEnabled,Ce=_t.init(this.clippingPlanes,qt),R=K.get(M,C.length),R.init(),C.push(R),ot.enabled===!0&&ot.isPresenting===!0){let yt=N.xr.getDepthSensingMesh();yt!==null&&Of(yt,I,-1/0,N.sortObjects)}Of(M,I,0,N.sortObjects),R.finish(),N.sortObjects===!0&&R.sort(Q,pt),Re=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Re&&it.addToRenderList(R,M),this.info.render.frame++,Ce===!0&&_t.beginShadows();let F=E.state.shadowsArray;if(rt.render(F,M,I),Ce===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&w.hasRenderPass())===!1){let yt=R.opaque,ft=R.transmissive;if(E.setupLights(),I.isArrayCamera){let St=I.cameras;if(ft.length>0)for(let Mt=0,Pt=St.length;Mt<Pt;Mt++){let Gt=St[Mt];e0(yt,ft,M,Gt)}Re&&it.render(M);for(let Mt=0,Pt=St.length;Mt<Pt;Mt++){let Gt=St[Mt];t0(R,M,Gt,Gt.viewport)}}else ft.length>0&&e0(yt,ft,M,I),Re&&it.render(M),t0(R,M,I)}O!==null&&q===0&&(y.updateMultisampleRenderTarget(O),y.updateRenderTargetMipmap(O)),z&&w.end(N),M.isScene===!0&&M.onAfterRender(N,M,I),st.resetDefaultState(),G=-1,k=null,S.pop(),S.length>0?(E=S[S.length-1],y.setTextureUnits(E.state.textureUnits),Ce===!0&&_t.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,B!==null&&B.renderEnd()};function Of(M,I,H,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Rt.intersectsSprite(M)){z&&kt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ce);let yt=nt.update(M),ft=M.material;ft.visible&&R.push(M,yt,ft,H,kt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Rt.intersectsObject(M))){let yt=nt.update(M),ft=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),kt.copy(M.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),kt.copy(yt.boundingSphere.center)),kt.applyMatrix4(M.matrixWorld).applyMatrix4(ce)),Array.isArray(ft)){let St=yt.groups;for(let Mt=0,Pt=St.length;Mt<Pt;Mt++){let Gt=St[Mt],Et=ft[Gt.materialIndex];Et&&Et.visible&&R.push(M,yt,Et,H,kt.z,Gt)}}else ft.visible&&R.push(M,yt,ft,H,kt.z,null)}}let dt=M.children;for(let yt=0,ft=dt.length;yt<ft;yt++)Of(dt[yt],I,H,z)}function t0(M,I,H,z){let{opaque:F,transmissive:dt,transparent:yt}=M;E.setupLightsView(H),Ce===!0&&_t.setGlobalState(N.clippingPlanes,H),z&&ct.viewport(tt.copy(z)),F.length>0&&ec(F,I,H),dt.length>0&&ec(dt,I,H),yt.length>0&&ec(yt,I,H),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function e0(M,I,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Et=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new Yn(1,1,{generateMipmaps:!0,type:Et?Gi:Jn,minFilter:fa,samples:Math.max(4,ve.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let dt=E.state.transmissionRenderTarget[z.id],yt=z.viewport||tt;dt.setSize(yt.z*N.transmissionResolutionScale,yt.w*N.transmissionResolutionScale);let ft=N.getRenderTarget(),St=N.getActiveCubeFace(),Mt=N.getActiveMipmapLevel();N.setRenderTarget(dt),N.getClearColor(xt),Tt=N.getClearAlpha(),Tt<1&&N.setClearColor(16777215,.5),N.clear(),Re&&it.render(H);let Pt=N.toneMapping;N.toneMapping=xi;let Gt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),Ce===!0&&_t.setGlobalState(N.clippingPlanes,z),ec(M,H,z),y.updateMultisampleRenderTarget(dt),y.updateRenderTargetMipmap(dt),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let he=0,Pe=I.length;he<Pe;he++){let Ne=I[he],{object:pe,geometry:un,material:vt,group:Un}=Ne;if(vt.side===Fi&&pe.layers.test(z.layers)){let $t=vt.side;vt.side=yn,vt.needsUpdate=!0,n0(pe,H,z,un,vt,Un),vt.side=$t,vt.needsUpdate=!0,Et=!0}}Et===!0&&(y.updateMultisampleRenderTarget(dt),y.updateRenderTargetMipmap(dt))}N.setRenderTarget(ft,St,Mt),N.setClearColor(xt,Tt),Gt!==void 0&&(z.viewport=Gt),N.toneMapping=Pt}function ec(M,I,H){let z=I.isScene===!0?I.overrideMaterial:null;for(let F=0,dt=M.length;F<dt;F++){let yt=M[F],{object:ft,geometry:St,group:Mt}=yt,Pt=yt.material;Pt.allowOverride===!0&&z!==null&&(Pt=z),ft.layers.test(H.layers)&&n0(ft,I,H,St,Pt,Mt)}}function n0(M,I,H,z,F,dt){M.onBeforeRender(N,I,H,z,F,dt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(N,I,H,z,M,dt),F.transparent===!0&&F.side===Fi&&F.forceSinglePass===!1?(F.side=yn,F.needsUpdate=!0,N.renderBufferDirect(H,I,z,F,M,dt),F.side=_s,F.needsUpdate=!0,N.renderBufferDirect(H,I,z,F,M,dt),F.side=Fi):N.renderBufferDirect(H,I,z,F,M,dt),M.onAfterRender(N,I,H,z,F,dt)}function nc(M,I,H){I.isScene!==!0&&(I=qe);let z=A.get(M),F=E.state.lights,dt=E.state.shadowsArray,yt=F.state.version,ft=lt.getParameters(M,F.state,dt,I,H,E.state.lightProbeGridArray),St=lt.getProgramCacheKey(ft),Mt=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;let Pt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=P.get(M.envMap||z.environment,Pt),z.envMapRotation=z.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Mt===void 0&&(M.addEventListener("dispose",Oe),Mt=new Map,z.programs=Mt);let Gt=Mt.get(St);if(Gt!==void 0){if(z.currentProgram===Gt&&z.lightsStateVersion===yt)return s0(M,ft),Gt}else ft.uniforms=lt.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,H,ft),M.onBeforeCompile(ft,N),Gt=lt.acquireProgram(ft,St),Mt.set(St,Gt),z.uniforms=ft.uniforms;let Et=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=_t.uniform),s0(M,ft),z.needsLights=kb(M),z.lightsStateVersion=yt,z.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=Gt,z.uniformsList=null,Gt}function i0(M){if(M.uniformsList===null){let I=M.currentProgram.getUniforms();M.uniformsList=go.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function s0(M,I){let H=A.get(M);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function Vb(M,I){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;b.setFromMatrixPosition(I.matrixWorld);for(let H=0,z=M.length;H<z;H++){let F=M[H];if(F.texture!==null&&F.boundingBox.containsPoint(b))return F}return null}function Gb(M,I,H,z,F){I.isScene!==!0&&(I=qe),y.resetTextureUnits();let dt=I.fog,yt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,ft=O===null?N.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Jt.workingColorSpace,St=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Mt=P.get(z.envMap||yt,St),Pt=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!H.morphAttributes.position,he=!!H.morphAttributes.normal,Pe=!!H.morphAttributes.color,Ne=xi;z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ne=N.toneMapping);let pe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,un=pe!==void 0?pe.length:0,vt=A.get(z),Un=E.state.lights;if(Ce===!0&&(qt===!0||M!==k)){let _e=M===k&&z.id===G;_t.setState(z,M,_e)}let $t=!1;z.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Un.state.version||vt.outputColorSpace!==ft||F.isBatchedMesh&&vt.batching===!1||!F.isBatchedMesh&&vt.batching===!0||F.isBatchedMesh&&vt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&vt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&vt.instancing===!1||!F.isInstancedMesh&&vt.instancing===!0||F.isSkinnedMesh&&vt.skinning===!1||!F.isSkinnedMesh&&vt.skinning===!0||F.isInstancedMesh&&vt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&vt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&vt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&vt.instancingMorph===!1&&F.morphTexture!==null||vt.envMap!==Mt||z.fog===!0&&vt.fog!==dt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==_t.numPlanes||vt.numIntersection!==_t.numIntersection)||vt.vertexAlphas!==Pt||vt.vertexTangents!==Gt||vt.morphTargets!==Et||vt.morphNormals!==he||vt.morphColors!==Pe||vt.toneMapping!==Ne||vt.morphTargetsCount!==un||!!vt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&($t=!0):($t=!0,vt.__version=z.version);let Qn=vt.currentProgram;$t===!0&&(Qn=nc(z,I,F),B&&z.isNodeMaterial&&B.onUpdateProgram(z,Qn,vt));let Ti=!1,Ss=!1,$a=!1,me=Qn.getUniforms(),Be=vt.uniforms;if(ct.useProgram(Qn.program)&&(Ti=!0,Ss=!0,$a=!0),z.id!==G&&(G=z.id,Ss=!0),vt.needsLights){let _e=Vb(E.state.lightProbeGridArray,F);vt.lightProbeGrid!==_e&&(vt.lightProbeGrid=_e,Ss=!0)}if(Ti||k!==M){ct.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),me.setValue(L,"projectionMatrix",M.projectionMatrix),me.setValue(L,"viewMatrix",M.matrixWorldInverse);let Ms=me.map.cameraPosition;Ms!==void 0&&Ms.setValue(L,xe.setFromMatrixPosition(M.matrixWorld)),ve.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&me.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),k!==M&&(k=M,Ss=!0,$a=!0)}if(vt.needsLights&&(Un.state.directionalShadowMap.length>0&&me.setValue(L,"directionalShadowMap",Un.state.directionalShadowMap,y),Un.state.spotShadowMap.length>0&&me.setValue(L,"spotShadowMap",Un.state.spotShadowMap,y),Un.state.pointShadowMap.length>0&&me.setValue(L,"pointShadowMap",Un.state.pointShadowMap,y)),F.isSkinnedMesh){me.setOptional(L,F,"bindMatrix"),me.setOptional(L,F,"bindMatrixInverse");let _e=F.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),me.setValue(L,"boneTexture",_e.boneTexture,y))}F.isBatchedMesh&&(me.setOptional(L,F,"batchingTexture"),me.setValue(L,"batchingTexture",F._matricesTexture,y),me.setOptional(L,F,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",F._indirectTexture,y),me.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",F._colorsTexture,y));let bs=H.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0)&&Nt.update(F,H,Qn),(Ss||vt.receiveShadow!==F.receiveShadow)&&(vt.receiveShadow=F.receiveShadow,me.setValue(L,"receiveShadow",F.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Be.envMapIntensity.value=I.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=u3()),Ss){if(me.setValue(L,"toneMappingExposure",N.toneMappingExposure),vt.needsLights&&Hb(Be,$a),dt&&z.fog===!0&&W.refreshFogUniforms(Be,dt),W.refreshMaterialUniforms(Be,z,zt,le,E.state.transmissionRenderTarget[M.id]),vt.needsLights&&vt.lightProbeGrid){let _e=vt.lightProbeGrid;Be.probesSH.value=_e.texture,Be.probesMin.value.copy(_e.boundingBox.min),Be.probesMax.value.copy(_e.boundingBox.max),Be.probesResolution.value.copy(_e.resolution)}go.upload(L,i0(vt),Be,y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(go.upload(L,i0(vt),Be,y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&me.setValue(L,"center",F.center),me.setValue(L,"modelViewMatrix",F.modelViewMatrix),me.setValue(L,"normalMatrix",F.normalMatrix),me.setValue(L,"modelMatrix",F.matrixWorld),z.uniformsGroups!==void 0){let _e=z.uniformsGroups;for(let Ms=0,tr=_e.length;Ms<tr;Ms++){let a0=_e[Ms];Y.update(a0,Qn),Y.bind(a0,Qn)}}return Qn}function Hb(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function kb(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,I,H){let z=A.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),A.get(M.texture).__webglTexture=I,A.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){let H=A.get(M);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0};let Wb=L.createFramebuffer();this.setRenderTarget=function(M,I=0,H=0){O=M,X=I,q=H;let z=null,F=!1,dt=!1;if(M){let ft=A.get(M);if(ft.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(L.FRAMEBUFFER,ft.__webglFramebuffer),tt.copy(M.viewport),et.copy(M.scissor),ht=M.scissorTest,ct.viewport(tt),ct.scissor(et),ct.setScissorTest(ht),G=-1;return}else if(ft.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(ft.__hasExternalTextures)y.rebindTextures(M,A.get(M.texture).__webglTexture,A.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Pt=M.depthTexture;if(ft.__boundDepthTexture!==Pt){if(Pt!==null&&A.has(Pt)&&(M.width!==Pt.image.width||M.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}let St=M.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(dt=!0);let Mt=A.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Mt[I])?z=Mt[I][H]:z=Mt[I],F=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?z=A.get(M).__webglMultisampledFramebuffer:Array.isArray(Mt)?z=Mt[H]:z=Mt,tt.copy(M.viewport),et.copy(M.scissor),ht=M.scissorTest}else tt.copy(at).multiplyScalar(zt).floor(),et.copy(wt).multiplyScalar(zt).floor(),ht=Lt;if(H!==0&&(z=Wb),ct.bindFramebuffer(L.FRAMEBUFFER,z)&&ct.drawBuffers(M,z),ct.viewport(tt),ct.scissor(et),ct.setScissorTest(ht),F){let ft=A.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ft.__webglTexture,H)}else if(dt){let ft=I;for(let St=0;St<M.textures.length;St++){let Mt=A.get(M.textures[St]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+St,Mt.__webglTexture,H,ft)}}else if(M!==null&&H!==0){let ft=A.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,H)}G=-1},this.readRenderTargetPixels=function(M,I,H,z,F,dt,yt,ft=0){if(!(M&&M.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){ct.bindFramebuffer(L.FRAMEBUFFER,St);try{let Mt=M.textures[ft],Pt=Mt.format,Gt=Mt.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),!ve.textureFormatReadable(Pt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Gt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&H>=0&&H<=M.height-F&&L.readPixels(I,H,z,F,U.convert(Pt),U.convert(Gt),dt)}finally{let Mt=O!==null?A.get(O).__webglFramebuffer:null;ct.bindFramebuffer(L.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(M,I,H,z,F,dt,yt,ft=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=A.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St)if(I>=0&&I<=M.width-z&&H>=0&&H<=M.height-F){ct.bindFramebuffer(L.FRAMEBUFFER,St);let Mt=M.textures[ft],Pt=Mt.format,Gt=Mt.type;if(M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),!ve.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(I,H,z,F,U.convert(Pt),U.convert(Gt),0);let he=O!==null?A.get(O).__webglFramebuffer:null;ct.bindFramebuffer(L.FRAMEBUFFER,he);let Pe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await QS(L,Pe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.deleteBuffer(Et),L.deleteSync(Pe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,H=0){let z=Math.pow(2,-H),F=Math.floor(M.image.width*z),dt=Math.floor(M.image.height*z),yt=I!==null?I.x:0,ft=I!==null?I.y:0;y.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,yt,ft,F,dt),ct.unbindTexture()};let Xb=L.createFramebuffer(),qb=L.createFramebuffer();this.copyTextureToTexture=function(M,I,H=null,z=null,F=0,dt=0){let yt,ft,St,Mt,Pt,Gt,Et,he,Pe,Ne=M.isCompressedTexture?M.mipmaps[dt]:M.image;if(H!==null)yt=H.max.x-H.min.x,ft=H.max.y-H.min.y,St=H.isBox3?H.max.z-H.min.z:1,Mt=H.min.x,Pt=H.min.y,Gt=H.isBox3?H.min.z:0;else{let Be=Math.pow(2,-F);yt=Math.floor(Ne.width*Be),ft=Math.floor(Ne.height*Be),M.isDataArrayTexture?St=Ne.depth:M.isData3DTexture?St=Math.floor(Ne.depth*Be):St=1,Mt=0,Pt=0,Gt=0}z!==null?(Et=z.x,he=z.y,Pe=z.z):(Et=0,he=0,Pe=0);let pe=U.convert(I.format),un=U.convert(I.type),vt;I.isData3DTexture?(y.setTexture3D(I,0),vt=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(y.setTexture2DArray(I,0),vt=L.TEXTURE_2D_ARRAY):(y.setTexture2D(I,0),vt=L.TEXTURE_2D),ct.activeTexture(L.TEXTURE0),ct.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),ct.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ct.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let Un=ct.getParameter(L.UNPACK_ROW_LENGTH),$t=ct.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=ct.getParameter(L.UNPACK_SKIP_PIXELS),Ti=ct.getParameter(L.UNPACK_SKIP_ROWS),Ss=ct.getParameter(L.UNPACK_SKIP_IMAGES);ct.pixelStorei(L.UNPACK_ROW_LENGTH,Ne.width),ct.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne.height),ct.pixelStorei(L.UNPACK_SKIP_PIXELS,Mt),ct.pixelStorei(L.UNPACK_SKIP_ROWS,Pt),ct.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);let $a=M.isDataArrayTexture||M.isData3DTexture,me=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){let Be=A.get(M),bs=A.get(I),_e=A.get(Be.__renderTarget),Ms=A.get(bs.__renderTarget);ct.bindFramebuffer(L.READ_FRAMEBUFFER,_e.__webglFramebuffer),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ms.__webglFramebuffer);for(let tr=0;tr<St;tr++)$a&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(M).__webglTexture,F,Gt+tr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,A.get(I).__webglTexture,dt,Pe+tr)),L.blitFramebuffer(Mt,Pt,yt,ft,Et,he,yt,ft,L.DEPTH_BUFFER_BIT,L.NEAREST);ct.bindFramebuffer(L.READ_FRAMEBUFFER,null),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||A.has(M)){let Be=A.get(M),bs=A.get(I);ct.bindFramebuffer(L.READ_FRAMEBUFFER,Xb),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,qb);for(let _e=0;_e<St;_e++)$a?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,F,Gt+_e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Be.__webglTexture,F),me?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,bs.__webglTexture,dt,Pe+_e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,bs.__webglTexture,dt),F!==0?L.blitFramebuffer(Mt,Pt,yt,ft,Et,he,yt,ft,L.COLOR_BUFFER_BIT,L.NEAREST):me?L.copyTexSubImage3D(vt,dt,Et,he,Pe+_e,Mt,Pt,yt,ft):L.copyTexSubImage2D(vt,dt,Et,he,Mt,Pt,yt,ft);ct.bindFramebuffer(L.READ_FRAMEBUFFER,null),ct.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else me?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(vt,dt,Et,he,Pe,yt,ft,St,pe,un,Ne.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,dt,Et,he,Pe,yt,ft,St,pe,Ne.data):L.texSubImage3D(vt,dt,Et,he,Pe,yt,ft,St,pe,un,Ne):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,dt,Et,he,yt,ft,pe,un,Ne.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,dt,Et,he,Ne.width,Ne.height,pe,Ne.data):L.texSubImage2D(L.TEXTURE_2D,dt,Et,he,yt,ft,pe,un,Ne);ct.pixelStorei(L.UNPACK_ROW_LENGTH,Un),ct.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t),ct.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),ct.pixelStorei(L.UNPACK_SKIP_ROWS,Ti),ct.pixelStorei(L.UNPACK_SKIP_IMAGES,Ss),dt===0&&I.generateMipmaps&&L.generateMipmap(vt),ct.unbindTexture()},this.initRenderTarget=function(M){A.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),ct.unbindTexture()},this.resetState=function(){X=0,q=0,O=null,ct.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}}});var z3=Xi(()=>{var v=l0(sc()),Pb=l0(jx());Nb();function f3(e){let[t,n]=v.default.useState(e),i=v.default.useCallback((s,a)=>{let r=typeof s=="object"&&s!==null?s:{[s]:a};n(o=>({...o,...r})),window.dispatchEvent(new CustomEvent("tweakchange",{detail:r}))},[]);return[t,i]}function d3({title:e="Tweaks",children:t}){let[n,i]=v.default.useState(!1),s=v.default.useRef(null),a=v.default.useRef({x:16,y:16}),r=16,o=v.default.useCallback(()=>{let h=s.current;if(!h)return;let p=h.offsetWidth,u=h.offsetHeight,d=Math.max(r,window.innerWidth-p-r),_=Math.max(r,window.innerHeight-u-r);a.current={x:Math.min(d,Math.max(r,a.current.x)),y:Math.min(_,Math.max(r,a.current.y))},h.style.right=a.current.x+"px",h.style.bottom=a.current.y+"px"},[]);v.default.useEffect(()=>{if(!n)return;o();let h=typeof ResizeObserver<"u"?new ResizeObserver(o):null;return h?(h.observe(document.documentElement),()=>h.disconnect()):(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o))},[n,o]),v.default.useEffect(()=>{let h=p=>{let u=p?.data?.type;u==="__activate_edit_mode"?i(!0):u==="__deactivate_edit_mode"&&i(!1)};return window.addEventListener("message",h),()=>window.removeEventListener("message",h)},[]);let l=()=>{i(!1)},c=h=>{let p=s.current;if(!p)return;let u=p.getBoundingClientRect(),d=h.clientX,_=h.clientY,T=window.innerWidth-u.right,g=window.innerHeight-u.bottom,f=x=>{a.current={x:T-(x.clientX-d),y:g-(x.clientY-_)},o()},m=()=>{window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m)};window.addEventListener("mousemove",f),window.addEventListener("mouseup",m)};return n?v.default.createElement("div",{ref:s,className:"twk-panel",style:{right:a.current.x,bottom:a.current.y}},v.default.createElement("div",{className:"twk-hd",onMouseDown:c},v.default.createElement("b",null,e),v.default.createElement("button",{className:"twk-x","aria-label":"Close tweaks",onMouseDown:h=>h.stopPropagation(),onClick:l},"\u2715")),v.default.createElement("div",{className:"twk-body"},t)):null}function Uf({label:e,children:t}){return v.default.createElement(v.default.Fragment,null,v.default.createElement("div",{className:"twk-sect"},e),t)}function Bb({label:e,value:t,children:n,inline:i=!1}){return v.default.createElement("div",{className:i?"twk-row twk-row-h":"twk-row"},v.default.createElement("div",{className:"twk-lbl"},v.default.createElement("span",null,e),t!=null&&v.default.createElement("span",{className:"twk-val"},t)),n)}function Ub({label:e,value:t,onChange:n}){return v.default.createElement("div",{className:"twk-row twk-row-h"},v.default.createElement("div",{className:"twk-lbl"},v.default.createElement("span",null,e)),v.default.createElement("button",{type:"button",className:"twk-toggle","data-on":t?"1":"0",role:"switch","aria-checked":!!t,onClick:()=>n(!t)},v.default.createElement("i",null)))}function ga({label:e,value:t,placeholder:n,onChange:i}){return v.default.createElement(Bb,{label:e},v.default.createElement("input",{className:"twk-field",type:"text",value:t,placeholder:n,onChange:s=>i(s.target.value)}))}function p3(e){let t=String(e).replace("#",""),n=t.length===3?t.replace(/./g,o=>o+o):t.padEnd(6,"0"),i=parseInt(n.slice(0,6),16);if(Number.isNaN(i))return!0;let s=i>>16&255,a=i>>8&255,r=i&255;return s*299+a*587+r*114>148e3}var m3=({light:e})=>v.default.createElement("svg",{viewBox:"0 0 14 14","aria-hidden":"true"},v.default.createElement("path",{d:"M3 7.2 5.8 10 11 4.2",fill:"none",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",stroke:e?"rgba(0,0,0,.78)":"#fff"}));function g3({label:e,value:t,options:n,onChange:i}){if(!n||!n.length)return v.default.createElement("div",{className:"twk-row twk-row-h"},v.default.createElement("div",{className:"twk-lbl"},v.default.createElement("span",null,e)),v.default.createElement("input",{type:"color",className:"twk-swatch",value:t,onChange:r=>i(r.target.value)}));let s=r=>String(JSON.stringify(r)).toLowerCase(),a=s(t);return v.default.createElement(Bb,{label:e},v.default.createElement("div",{className:"twk-chips",role:"radiogroup"},n.map((r,o)=>{let l=Array.isArray(r)?r:[r],[c,...h]=l,p=h.slice(0,4),u=s(r)===a;return v.default.createElement("button",{key:o,type:"button",className:"twk-chip",role:"radio","aria-checked":u,"data-on":u?"1":"0","aria-label":l.join(", "),title:l.join(" \xB7 "),style:{background:c},onClick:()=>i(r)},p.length>0&&v.default.createElement("span",null,p.map((d,_)=>v.default.createElement("i",{key:_,style:{background:d}}))),u&&v.default.createElement(m3,{light:p3(c)}))})))}var{useState:Kn,useEffect:_o,useMemo:Lb,useRef:zb,useCallback:v3}=v.default,_3={primaryColor:"#2563EB",headlineLine1:"LOOK SHARP.",headlineLine2:"FEEL DIFFERENT.",heroSub:"Know what you're getting before you walk in. Browse services, pick your slot, and confirm on WhatsApp \u2014 no calls, no waiting.",phone:"+91 94378 50989",whatsappNumber:"919437850989",address:"Pathan Street",city:"Nabarangpur, Odisha 764059 \xB7 India",hours:"07:00 \u2014 21:00 (Thu till 13:00)",showTicker:!0,showGallery:!0},Ib=["DIFFERENT.","CONFIDENT.","SHARP.","FRESH.","READY."];function y3(){let[e,t]=Kn(0),[n,i]=Kn("in");_o(()=>{let r=setInterval(()=>{i("out"),setTimeout(()=>{t(o=>(o+1)%Ib.length),i("in")},400)},2800);return()=>clearInterval(r)},[]);let s=Ib[e];return v.default.createElement("em",{className:n==="in"?"rot-word rot-in":"rot-word rot-out",key:e+n},s)}function Qg(e={}){let{threshold:t=.15,once:n=!0}=e,i=zb(null),[s,a]=Kn(!1);return _o(()=>{let r=i.current;if(!r)return;let o=new IntersectionObserver(([l])=>{l.isIntersecting?(a(!0),n&&o.disconnect()):n||a(!1)},{threshold:t});return o.observe(r),()=>o.disconnect()},[t,n]),[i,s]}function va({children:e,className:t="",style:n,delay:i=0,variant:s=""}){let[a,r]=Qg({threshold:.1});return v.default.createElement("div",{ref:a,className:`reveal ${s} ${r?"is-visible":""} ${t}`,style:{transitionDelay:`${i}s`,...n}},e)}var Ht={WhatsApp:({size:e=18})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},v.default.createElement("path",{d:"M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.4-.3.3-1 .9-1 2.3 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"}),v.default.createElement("path",{d:"M20.5 3.5C18.3 1.2 15.3 0 12.1 0 5.5 0 .2 5.4.2 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.4-8.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9-.1 5.4-4.5 9.8-9.8 9.8z"})),Phone:({size:e=18})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"})),Arrow:({size:e=16,rotate:t=0})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{transform:`rotate(${t}deg)`}},v.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),v.default.createElement("polyline",{points:"12 5 19 12 12 19"})),Plus:({size:e=14})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"},v.default.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),v.default.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"})),Check:({size:e=14})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("polyline",{points:"20 6 9 17 4 12"})),Pin:({size:e=16})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),v.default.createElement("circle",{cx:"12",cy:"10",r:"3"})),Clock:({size:e=16})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2"},v.default.createElement("circle",{cx:"12",cy:"12",r:"10"}),v.default.createElement("polyline",{points:"12 6 12 12 16 14",strokeLinecap:"round",strokeLinejoin:"round"})),Star:({size:e=14})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor"},v.default.createElement("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})),Sparkle:({size:e=18})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7"},v.default.createElement("path",{d:"M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"})),Razor:({size:e=22})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("path",{d:"M14 4l6 6-9 9H5v-6z"}),v.default.createElement("path",{d:"M11 7l6 6"})),Scissors:({size:e=22})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("circle",{cx:"6",cy:"6",r:"3"}),v.default.createElement("circle",{cx:"6",cy:"18",r:"3"}),v.default.createElement("line",{x1:"20",y1:"4",x2:"8.12",y2:"15.88"}),v.default.createElement("line",{x1:"14.47",y1:"14.48",x2:"20",y2:"20"}),v.default.createElement("line",{x1:"8.12",y1:"8.12",x2:"12",y2:"12"})),Drop:({size:e=22})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("path",{d:"M12 2.5s7 8 7 12a7 7 0 0 1-14 0c0-4 7-12 7-12z"})),Shield:({size:e=22})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})),Heart:({size:e=22})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})),Bolt:({size:e=22})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})),Crown:({size:e=22})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("path",{d:"M3 18h18M3 7l4 5 5-7 5 7 4-5v11H3z"})),Instagram:({size:e=18})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7"},v.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"5"}),v.default.createElement("circle",{cx:"12",cy:"12",r:"4"}),v.default.createElement("circle",{cx:"17.5",cy:"6.5",r:"1",fill:"currentColor"})),Google:({size:e=18})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"currentColor"},v.default.createElement("path",{d:"M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.3-1 2.4-2 3.1v2.6h3.3c1.9-1.7 3-4.3 3-7.5z"}),v.default.createElement("path",{d:"M12 22c2.7 0 5-1 6.7-2.4l-3.3-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3v2.6C4.7 19.9 8.1 22 12 22z"}),v.default.createElement("path",{d:"M6.4 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.5H3C2.4 8.9 2 10.4 2 12s.4 3.1 1 4.5l3.4-2.6z"}),v.default.createElement("path",{d:"M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9C16.9 3 14.7 2 12 2 8.1 2 4.7 4.1 3 7.5l3.4 2.6c.8-2.4 3-4.2 5.6-4.2z"})),Map:({size:e=18})=>v.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"},v.default.createElement("polygon",{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}),v.default.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"18"}),v.default.createElement("line",{x1:"16",y1:"6",x2:"16",y2:"22"}))};function Lf({tone:e="default",label:t,glyph:n=null,style:i,src:s,eager:a}){if(s)return v.default.createElement("img",{src:s,alt:t||"",className:"photo",style:{objectFit:"cover",width:"100%",height:"100%",...i},loading:a?"eager":"lazy",decoding:"async"});let r="photo "+(e!=="default"?e:"");return v.default.createElement("div",{className:r,style:i},n&&v.default.createElement("div",{className:"glyph"},n),t&&v.default.createElement("span",{className:"label"},t))}function x3(){let[e,t]=v.default.useState(!1),n=a=>{a.preventDefault(),t(!1),window.scrollTo({top:0,behavior:"smooth"})};v.default.useEffect(()=>{if(!e)return;let a=r=>{r.key==="Escape"&&t(!1)};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[e]);let i=["services","gallery","book","visit"],s=()=>t(!1);return v.default.createElement("nav",{className:"topnav "+(e?"is-menu-open":"")},v.default.createElement("div",{className:"container row"},v.default.createElement("a",{href:"#",onClick:n,className:"logo-mark",style:{textDecoration:"none"}},v.default.createElement("img",{src:"logo.webp",alt:"SMART Men's Salon",className:"logo-img",style:{height:"60px"}})),v.default.createElement("div",{className:"links"},i.map(a=>v.default.createElement("a",{key:a,href:`#${a}`},a[0].toUpperCase()+a.slice(1)))),v.default.createElement("div",{className:"nav-actions"},v.default.createElement("a",{href:"#book",className:"btn btn-dark btn-sm",style:{height:40,color:"#fff"},onClick:s},v.default.createElement(Ht.WhatsApp,{size:14})," Book Now"),v.default.createElement("button",{type:"button",className:"menu-toggle","aria-label":e?"Close menu":"Open menu","aria-expanded":e,"aria-controls":"mobile-menu",onClick:()=>t(a=>!a)},v.default.createElement("span",{"aria-hidden":"true"},e?"\u2715":"\u2630")))),v.default.createElement("div",{id:"mobile-menu",className:"mobile-menu",hidden:!e},i.map(a=>v.default.createElement("a",{key:a,href:`#${a}`,onClick:s},a[0].toUpperCase()+a.slice(1)))))}var S3=()=>{let e=v.default.useRef(null);return v.default.useEffect(()=>{let t=e.current;if(!t)return;let n;try{n=new Rf({antialias:!0,alpha:!0}),n.setPixelRatio(window.devicePixelRatio),t.appendChild(n.domElement)}catch(d){console.error("WebGL not supported",d),t.innerHTML='<p style="color:white;text-align:center;">Sorry, WebGL isn\u2019t available.</p>';return}let i=new Ul,s=new Ja(-1,1,1,-1,0,1),a=new Gl,r=`
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,o=`
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;

      float noise(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 6; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);
        float t = iTime * 1.5;
        float radius = length(uv);
        float angle  = atan(uv.y, uv.x);

        float petals     = 5.0;
        float bloomShape = sin(angle * petals + t);
        float distorted  = radius + bloomShape * 0.1 * fbm(uv * 3.0 + t * 0.1);

        vec3 deepSpace = vec3(0.0, 0.0, 0.0);
        vec3 nebula    = vec3(0.15, 0.8, 0.4); // Emerald/Green glow
        vec3 star      = vec3(1.0, 1.0, 1.0);

        float mixVal  = smoothstep(0.1, 0.6, distorted);
        vec3  color   = mix(nebula, deepSpace, mixVal);

        float coreGlow = smoothstep(0.1, 0.0, radius);
        color = mix(color, star, coreGlow);

        float twinkle = smoothstep(0.98, 0.99, fbm(uv * 10.0));
        color = mix(color, star, twinkle * (1.0 - coreGlow));

        gl_FragColor = vec4(color, 1.0 - smoothstep(0.4, 0.8, length(uv)));
      }
    `,l={iTime:{value:0},iResolution:{value:new ie}},c=new _n({vertexShader:r,fragmentShader:o,uniforms:l,transparent:!0}),h=new Za(2,2),p=new Dn(h,c);i.add(p);let u=()=>{let d=t.clientWidth,_=t.clientHeight;n.setSize(d,_),l.iResolution.value.set(d,_)};return window.addEventListener("resize",u),u(),n.setAnimationLoop(()=>{l.iTime.value=a.getElapsedTime(),n.render(i,s)}),()=>{window.removeEventListener("resize",u),n.setAnimationLoop(null);let d=n.domElement;d&&d.parentNode&&d.parentNode.removeChild(d),c.dispose(),h.dispose(),n.dispose()}},[]),v.default.createElement("div",{ref:e,style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"500px",height:"500px",zIndex:-1,pointerEvents:"none",opacity:.8},"aria-label":"Celestial Bloom animated background"})};function b3({t:e}){let[t,n]=v.default.useState(0),i=["images/hero.webp","images/Salon Exterior.webp"];return v.default.useEffect(()=>{let s=setInterval(()=>{n(a=>(a+1)%i.length)},5e3);return()=>clearInterval(s)},[]),v.default.createElement("header",{className:"hero"},v.default.createElement("div",{className:"bg"},i.map((s,a)=>v.default.createElement(Lf,{key:s,src:s,eager:a===0,tone:"warm",label:`HERO \xB7 IMAGE ${a+1}`,style:{position:"absolute",inset:0,opacity:t===a?1:0,transition:"opacity 1s ease-in-out",objectPosition:s==="images/Salon Exterior.webp"?"center 70%":s==="images/hero.webp"?"right center":"center"}}))),v.default.createElement(x3,null),v.default.createElement("div",{className:"container content"},v.default.createElement("div",{className:"eyebrow",style:{color:"rgba(255,255,255,.55)",marginBottom:18}},v.default.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:8}},v.default.createElement("span",{style:{width:6,height:6,borderRadius:99,background:"#25D366",boxShadow:"0 0 0 4px rgba(37,211,102,.18)"}}),"OPEN TODAY \xB7 ",e.hours)),v.default.createElement("div",{style:{position:"relative",width:"360px",height:"144px",marginBottom:16}},v.default.createElement(S3,null),v.default.createElement("div",{style:{width:"360px",height:"144px",overflow:"hidden",position:"relative"}},v.default.createElement("img",{src:"images/logo-large.webp",alt:"Smart Men's Salon",style:{width:"360px",position:"absolute",top:"-192px"}}))),v.default.createElement("h1",{className:"display",style:{marginBottom:24}},v.default.createElement("span",{className:"h-line"},e.headlineLine1),v.default.createElement("span",{className:"h-line"},"FEEL ",v.default.createElement(y3,null))),v.default.createElement("div",{className:"ctas"},v.default.createElement("a",{href:"#book",className:"btn btn-wa"},v.default.createElement(Ht.WhatsApp,{size:16})," Book on WhatsApp"),v.default.createElement("a",{href:`tel:${e.phone.replace(/\s/g,"")}`,className:"btn btn-ghost-dark"},v.default.createElement(Ht.Phone,{size:15})," Call Now")),v.default.createElement("div",{className:"meta-row"},v.default.createElement("span",null,v.default.createElement("span",{className:"dot",style:{display:"inline-block",marginRight:8,verticalAlign:"middle"}}),"Premium men's grooming \xB7 Nabarangpur"),v.default.createElement("span",{style:{opacity:.4}},"\u2014"),v.default.createElement("span",null,"Walk-ins welcome"),v.default.createElement("span",{style:{opacity:.4}},"\u2014"),v.default.createElement("span",null,"Durga Rao \xB7 Nabarangpur"))),e.showTicker&&v.default.createElement("div",{className:"ticker"},v.default.createElement("div",{className:"ticker-track"},Array(2).fill(0).map((s,a)=>v.default.createElement(v.default.Fragment,{key:a},v.default.createElement("span",null,"HAIRCUT"),v.default.createElement("span",{className:"star"},"\u2726"),v.default.createElement("span",null,"BEARD STYLING"),v.default.createElement("span",{className:"star"},"\u2726"),v.default.createElement("span",null,"CLEAN UP"),v.default.createElement("span",{className:"star"},"\u2726"),v.default.createElement("span",null,"FACIAL"),v.default.createElement("span",{className:"star"},"\u2726"),v.default.createElement("span",null,"HAIR STRAIGHTENING"),v.default.createElement("span",{className:"star"},"\u2726"),v.default.createElement("span",null,"WEDDING GROOM PACKAGE"),v.default.createElement("span",{className:"star"},"\u2726"),v.default.createElement("span",null,"HAIR TREATMENT"),v.default.createElement("span",{className:"star"},"\u2726"))))))}var qg={hair:{label:"Hair",blurb:"Cuts, colour-safe styling, and treatments that hold their shape long after you leave the chair.",items:[{src:"images/hair.webp",name:"Haircut",sub:"Classic, fade, taper, scissor",tone:"steel",glyph:v.default.createElement(Ht.Scissors,{size:42})},{src:"images/hair-styling.webp",name:"Hair Styling",sub:"Wash, blow-dry & finish",tone:"cool",glyph:v.default.createElement(Ht.Sparkle,{size:42})},{src:"images/hair-straightening.webp",name:"Hair Straightening",sub:"Smoothening & keratin",tone:"default",glyph:v.default.createElement(Ht.Bolt,{size:42})},{src:"images/hair-treatment.webp",name:"Hair Treatment",sub:"Scalp & dandruff therapy",tone:"warm",glyph:v.default.createElement(Ht.Drop,{size:42})}]},beard:{label:"Beard",blurb:"Sculpted edges, smooth finishes, and shapes tailored to your face \u2014 every time.",items:[{src:"images/beard.webp",name:"Beard Trim",sub:"Maintain your shape",tone:"amber",glyph:v.default.createElement(Ht.Razor,{size:42})},{src:"images/beard-shaping.webp",name:"Beard Shaping",sub:"Sculpt & line-up",tone:"warm",glyph:v.default.createElement(Ht.Scissors,{size:42})},{src:"images/clean-shave.webp",name:"Clean Shave",sub:"Smooth finish",tone:"steel",glyph:v.default.createElement(Ht.Razor,{size:42})}]},skin:{label:"Skin",blurb:"Quick, no-fuss skincare for men \u2014 designed to look natural, never overdone.",items:[{src:"images/skin.webp",name:"Clean Up",sub:"Refresh & deep cleanse",tone:"cool",glyph:v.default.createElement(Ht.Drop,{size:42})},{src:"images/skin.webp",name:"Skin Brightening",sub:"Even tone, healthy glow",tone:"default",glyph:v.default.createElement(Ht.Sparkle,{size:42})},{src:"images/skin.webp",name:"Facial",sub:"Massage, mask, finish",tone:"warm",glyph:v.default.createElement(Ht.Heart,{size:42})}]},packages:{label:"Packages",blurb:"Full-service grooming sessions for the days that matter most.",items:[{src:"images/package.webp",name:"Groom Package",sub:"Hair \xB7 Beard \xB7 Clean Up",tone:"amber",glyph:v.default.createElement(Ht.Crown,{size:42})},{src:"images/package.webp",name:"Wedding Groom Package",sub:"Full-day premium experience",tone:"warm",glyph:v.default.createElement(Ht.Crown,{size:42})}]}};function M3({onBookService:e}){let[t,n]=Kn("hair"),i=Object.keys(qg),s=zb({}),[a,r]=Kn({left:0,width:0});_o(()=>{let h=s.current[t];if(h&&h.parentElement){let p=h.parentElement.getBoundingClientRect(),u=h.getBoundingClientRect();r({transform:`translateX(${u.left-p.left-6}px)`,width:u.width})}},[t]);let o=qg[t],[l,c]=Qg({threshold:.05});return v.default.createElement("section",{className:"section showcase",id:"services"},v.default.createElement("div",{className:"container"},v.default.createElement(va,null,v.default.createElement("div",{className:"sec-head"},v.default.createElement("div",null,v.default.createElement("div",{className:"eyebrow",style:{marginBottom:14}},"02 \u2014 SERVICES"),v.default.createElement("h2",null,"Pick what you need.",v.default.createElement("br",null),v.default.createElement("em",null,"See it before you walk in."))),v.default.createElement("div",{className:"right"},"Tap a category. Imagery, services, and the booking message update instantly."))),v.default.createElement("div",{className:"cat-bar no-scrollbar"},v.default.createElement("div",{className:"indicator",style:a}),i.map((h,p)=>v.default.createElement("button",{key:h,ref:u=>s.current[h]=u,className:"cat-tab "+(t===h?"is-active":""),onClick:()=>n(h)},qg[h].label,v.default.createElement("span",{className:"count"},"0",p+1)))),v.default.createElement("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:16,margin:"24px 0 24px"}},v.default.createElement("p",{style:{margin:0,color:"var(--ink-soft)",maxWidth:520,fontSize:15}},o.blurb),v.default.createElement("div",{className:"eyebrow"},o.items.length," SERVICES IN ",o.label.toUpperCase())),v.default.createElement("div",{ref:l,key:t,className:`tab-content-enter stagger-grid ${c?"is-visible":""}`,style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:16}},o.items.map((h,p)=>v.default.createElement("button",{key:h.name,className:"service-tile",style:{animationDelay:`${p*60}ms`},onClick:()=>e(h.name)},v.default.createElement(Lf,{src:h.src,tone:h.tone,label:h.name.toUpperCase().replace(/\s/g,"\xB7"),glyph:h.glyph}),v.default.createElement("div",{className:"overlay"}),v.default.createElement("span",{className:"num"},"0",p+1),v.default.createElement("span",{className:"arrow"},v.default.createElement(Ht.Arrow,{size:16,rotate:-45})),v.default.createElement("div",{className:"meta"},v.default.createElement("div",{className:"name"},h.name),v.default.createElement("div",{className:"sub"},h.sub),v.default.createElement("div",{style:{marginTop:14,display:"inline-flex",alignItems:"center",gap:6,fontSize:12,color:"#25D366",fontWeight:600}},v.default.createElement(Ht.WhatsApp,{size:12})," Add & continue")))))))}var Ob=[{src:"images/gallery1.webp",tone:"warm",small:"FADE / 02",caption:"Mid-fade, scissor finish"},{src:"images/gallery2.webp",tone:"steel",small:"BEARD / 01",caption:"Beard line-up"},{src:"images/gallery3.webp",tone:"amber",small:"INTERIOR",caption:"Studio chair \xB7 03"},{src:"images/skin.webp",tone:"cool",small:"FACIAL / 04",caption:"Clean up + glow"},{src:"images/hair-styling.webp",tone:"default",small:"WASH",caption:"Wash & blow-dry"},{src:"images/package.webp",tone:"warm",small:"BEFORE / AFTER",caption:"Wedding groom"},{src:"images/hair-styling.webp",tone:"steel",small:"DETAIL",caption:"Smooth finish"},{src:"images/hair-straightening.webp",tone:"amber",small:"STYLE",caption:"Side-part finish"},{src:"images/Salon Exterior.webp",tone:"cool",small:"INTERIOR / 02",caption:"Mirror wall"},{src:"images/clean-shave.webp",tone:"default",small:"PROCESS",caption:"Clipper detail"}];function T3({t:e}){return e&&!e.showGallery?null:v.default.createElement("section",{className:"section section-tight",id:"gallery",style:{background:"#0A0A0B",color:"#fff"}},v.default.createElement("div",{className:"container"},v.default.createElement(va,null,v.default.createElement("div",{className:"sec-head",style:{alignItems:"flex-end"}},v.default.createElement("div",null,v.default.createElement("div",{className:"eyebrow",style:{color:"rgba(255,255,255,.5)",marginBottom:14}},"03 \u2014 GALLERY"),v.default.createElement("h2",{style:{color:"#fff"}},"The chair.",v.default.createElement("br",null),v.default.createElement("em",{style:{color:"var(--blue)"}},"The work."))),v.default.createElement("div",{className:"right",style:{color:"rgba(255,255,255,.6)"}},"Real cuts, real customers. Scroll, swipe, or just let it move.")))),v.default.createElement("div",{style:{overflow:"hidden",maskImage:"linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",WebkitMaskImage:"linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)"}},v.default.createElement("div",{className:"gallery-track"},[...Ob,...Ob].map((t,n)=>v.default.createElement("div",{key:n,className:"gallery-card"},v.default.createElement(Lf,{src:t.src,tone:t.tone,style:{position:"absolute",inset:0}}),v.default.createElement("div",{className:"scrim"}),v.default.createElement("div",{className:"caption"},v.default.createElement("small",null,t.small),t.caption))))))}var E3=["Haircut","Beard Trim","Clean Shave","Hair Styling","Hair Straightening","Hair Treatment","Beard Shaping","Clean Up","Skin Brightening","Facial","Groom Package","Wedding Groom Package"],Kg=["10:00 AM","12:00 PM","02:00 PM","04:00 PM","06:00 PM","08:00 PM"];function A3(e){let[t,n]=e.split(" "),[i]=t.split(":").map(Number);return n==="AM"?i===12?0:i:i===12?12:i+12}function w3(e){return new Date(e).getDay()===4?13:21}function Yg(e){let t=w3(e);return Kg.filter(n=>A3(n)<t)}function C3(e=7){let t=[],n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],i=new Date;for(let s=0;s<e;s++){let a=new Date(i);a.setDate(i.getDate()+s),t.push({iso:a.toISOString().slice(0,10),dom:a.getDate(),dow:s===0?"Today":n[a.getDay()]})}return t}function R3({preselectedService:e,onClearPreselect:t,t:n}){let i=Lb(()=>C3(8),[]),[s,a]=Kn(""),[r,o]=Kn(""),[l,c]=Kn([]),[h,p]=Kn(i[0].iso),[u,d]=Kn(()=>Yg(i[0].iso)[0]??Kg[0]),_=v3(E=>{p(E);let C=Yg(E);d(S=>C.includes(S)?S:C[0]??Kg[0])},[]),[T,g]=Kn("");_o(()=>{if(e&&!l.includes(e)){c(C=>[...C,e]),t&&t();let E=document.getElementById("book");E&&E.scrollIntoView({behavior:"smooth",block:"start"})}},[e]);let f=E=>c(C=>C.includes(E)?C.filter(S=>S!==E):[...C,E]),m=Lb(()=>{let E=i.find(C=>C.iso===h);return E?E.dow==="Today"?"Today":`${E.dow} ${E.dom}`:""},[h,i]),x=`Hi SMART Men's Salon,

I'd like to book a session.

Name: ${s||"\u2014"}
Phone: ${r||"\u2014"}

Selected Service:
${l.length?l.join(" + "):"\u2014"}

Preferred Date:
${m}

Preferred Time:
${u}

Additional Notes:
${T||"\u2014"}`,b=`https://wa.me/${n.whatsappNumber}?text=${encodeURIComponent(x)}`,R=s&&r&&l.length;return v.default.createElement("section",{className:"section",id:"book",style:{background:"var(--bg-soft)"}},v.default.createElement("div",{className:"container"},v.default.createElement(va,null,v.default.createElement("div",{className:"sec-head"},v.default.createElement("div",null,v.default.createElement("div",{className:"eyebrow",style:{marginBottom:14}},"04 \u2014 BOOK"),v.default.createElement("h2",null,"Three steps.",v.default.createElement("br",null),v.default.createElement("em",null,"Confirm on WhatsApp."))),v.default.createElement("div",{className:"right"},"We'll never ask for payment online. Your slot is confirmed by our team within minutes on WhatsApp."))),v.default.createElement(va,{delay:.1,variant:"from-scale"},v.default.createElement("div",{className:"booking-card"},v.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:28}},v.default.createElement("div",null,v.default.createElement(Zg,{n:1,title:"Who's coming in?"}),v.default.createElement("div",{className:"booking-grid two"},v.default.createElement("div",{className:"field"},v.default.createElement("label",null,"Name"),v.default.createElement("input",{className:"input",type:"text",minLength:"2",placeholder:"Your name",value:s,onChange:E=>a(E.target.value)})),v.default.createElement("div",{className:"field"},v.default.createElement("label",null,"Phone"),v.default.createElement("input",{className:"input",type:"tel",pattern:"[0-9]{10}",placeholder:"98XXXXXXXX",value:r,onChange:E=>o(E.target.value)})))),v.default.createElement("div",null,v.default.createElement(Zg,{n:2,title:"What do you need?",hint:l.length?`${l.length} selected`:"Tap to select"}),v.default.createElement("div",{style:{display:"flex",flexWrap:"wrap",gap:8}},E3.map(E=>v.default.createElement("button",{key:E,className:"chip "+(l.includes(E)?"is-active":""),onClick:()=>f(E),type:"button"},v.default.createElement("span",{className:"dot"}),E,l.includes(E)?v.default.createElement(Ht.Check,{size:12}):v.default.createElement(Ht.Plus,{size:12}))))),v.default.createElement("div",null,v.default.createElement(Zg,{n:3,title:"When works for you?"}),v.default.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16}},v.default.createElement("div",{className:"scroll-x no-scrollbar"},i.map(E=>v.default.createElement("button",{key:E.iso,type:"button",className:"day-pill "+(h===E.iso?"is-active":""),onClick:()=>_(E.iso)},v.default.createElement("span",{className:"dom"},E.dom),v.default.createElement("span",{className:"dow"},E.dow)))),v.default.createElement("div",{className:"scroll-x no-scrollbar"},Yg(h).map(E=>v.default.createElement("button",{key:E,type:"button",className:"time-pill "+(u===E?"is-active":""),onClick:()=>d(E)},E))))),v.default.createElement("div",{className:"field"},v.default.createElement("label",null,"Notes (optional)"),v.default.createElement("textarea",{className:"textarea",placeholder:"e.g. Low fade haircut, keep beard medium length.",value:T,onChange:E=>g(E.target.value)})),v.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:20}},v.default.createElement("a",{href:R?b:"#",onClick:E=>{R||E.preventDefault()},target:"_blank",rel:"noopener",className:"btn btn-wa",style:{height:60,fontSize:16,opacity:R?1:.55,cursor:R?"pointer":"not-allowed"}},v.default.createElement(Ht.WhatsApp,{size:18}),"Continue on WhatsApp",v.default.createElement(Ht.Arrow,{size:16})),v.default.createElement("p",{style:{margin:0,fontSize:12,color:"var(--muted)",textAlign:"center"}},R?"Opens WhatsApp with your booking message ready to send.":"Fill in name, phone, and at least one service to continue.")))))))}function Zg({n:e,title:t,hint:n}){return v.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,gap:16}},v.default.createElement("div",{style:{display:"flex",alignItems:"center",gap:14}},v.default.createElement("span",{style:{width:28,height:28,borderRadius:999,background:"var(--ink)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"JetBrains Mono, monospace",fontSize:12,fontWeight:600}},e),v.default.createElement("div",{style:{fontFamily:"Inter Tight, sans-serif",fontWeight:700,fontSize:22,letterSpacing:"-0.02em"}},t)),n&&v.default.createElement("span",{className:"eyebrow"},n))}var D3=[{ico:v.default.createElement(Ht.Scissors,{size:22}),title:"Skilled Grooming",sub:"Senior stylists, 5+ years on the chair."},{ico:v.default.createElement(Ht.Sparkle,{size:22}),title:"Clean Environment",sub:"Sanitised tools after every customer."},{ico:v.default.createElement(Ht.Heart,{size:22}),title:"Friendly Service",sub:"We listen. No upsell, no pressure."},{ico:v.default.createElement(Ht.Shield,{size:22}),title:"Hygiene First",sub:"Single-use blades. Fresh towels, always."},{ico:v.default.createElement(Ht.Bolt,{size:22}),title:"Modern Techniques",sub:"From skin fades to smoothening."},{ico:v.default.createElement(Ht.Clock,{size:22}),title:"Quick Service",sub:"On time. In and out, sharp."}];function N3(){return v.default.createElement("section",{className:"section"},v.default.createElement("div",{className:"container"},v.default.createElement(va,null,v.default.createElement("div",{className:"sec-head"},v.default.createElement("div",null,v.default.createElement("div",{className:"eyebrow",style:{marginBottom:14}},"05 \u2014 WHY SMART"),v.default.createElement("h2",null,"The basics, ",v.default.createElement("em",null,"done right."))),v.default.createElement("div",{className:"right"},"We keep things simple \u2014 clean chair, clean tools, real grooming. The same standard, every visit."))),v.default.createElement(U3,null)))}function U3(){let[e,t]=Qg({threshold:.05});return v.default.createElement("div",{ref:e,className:`stagger-grid ${t?"is-visible":""}`,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:16}},D3.map((n,i)=>v.default.createElement("div",{className:"trust-item",key:n.title},v.default.createElement("div",{className:"ico",style:{color:"var(--blue)"}},n.ico),v.default.createElement("div",null,v.default.createElement("div",{style:{fontFamily:"Inter Tight, sans-serif",fontWeight:700,fontSize:19,letterSpacing:"-0.02em"}},n.title),v.default.createElement("div",{style:{color:"var(--muted)",fontSize:14,marginTop:6}},n.sub)),v.default.createElement("div",{style:{marginTop:"auto",color:"var(--muted)",fontFamily:"JetBrains Mono, monospace",fontSize:11,letterSpacing:".1em"}},"0",i+1," / 06"))))}function L3({t:e}){return v.default.createElement("section",{className:"section",id:"visit",style:{background:"var(--bg-soft)"}},v.default.createElement("div",{className:"container"},v.default.createElement(va,null,v.default.createElement("div",{className:"sec-head"},v.default.createElement("div",null,v.default.createElement("div",{className:"eyebrow",style:{marginBottom:14}},"06 \u2014 VISIT US"),v.default.createElement("h2",null,"Walk in.",v.default.createElement("br",null),v.default.createElement("em",null,"Or message first."))))),v.default.createElement(va,{delay:.1},v.default.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:24},className:"visit-grid"},v.default.createElement("div",{className:"map"},v.default.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.803144638959!2d82.5467622695607!3d19.22956506515561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3ab7601520592f%3A0x2a3ffec6d1d73529!2sSmart%20Saloon!5e0!3m2!1sen!2sin!4v1778342471075!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"SMART Men's Salon \u2014 Google Maps location"})),v.default.createElement("div",{style:{display:"flex",flexDirection:"column",gap:16}},v.default.createElement(Jg,{icon:v.default.createElement(Ht.Pin,null),label:"Address",value:e.address,caption:e.city}),v.default.createElement(Jg,{icon:v.default.createElement(Ht.Clock,null),label:"Open Hours",value:e.hours,caption:"Last booking 30 mins before close"}),v.default.createElement(Jg,{icon:v.default.createElement(Ht.Phone,null),label:"Phone",value:e.phone,caption:"Call or WhatsApp"}),v.default.createElement("div",{style:{display:"flex",gap:10,flexWrap:"wrap",marginTop:6}},v.default.createElement("a",{href:`https://wa.me/${e.whatsappNumber}`,target:"_blank",rel:"noopener",className:"btn btn-wa"},v.default.createElement(Ht.WhatsApp,{size:16})," WhatsApp Us"),v.default.createElement("a",{href:"https://www.google.com/maps/dir/?api=1&destination=Smart+Saloon,+Pathan+Street,+Nabarangpur,+Odisha",target:"_blank",rel:"noopener",className:"btn btn-light"},v.default.createElement(Ht.Map,{size:15})," Get Directions"),v.default.createElement("a",{href:"https://www.instagram.com/smartmenssalon",target:"_blank",rel:"noopener",className:"btn btn-light"},v.default.createElement(Ht.Instagram,{size:15})," Instagram"),v.default.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=SMART+Men%27s+Salon+Nabarangpur",target:"_blank",rel:"noopener",className:"btn btn-light"},v.default.createElement(Ht.Google,{size:15})," Reviews")))))),v.default.createElement("style",null,`
        @media (min-width: 880px) {
          .visit-grid { grid-template-columns: 1.2fr 1fr !important; gap: 40px !important; }
        }
      `))}function Jg({icon:e,label:t,value:n,caption:i}){return v.default.createElement("div",{style:{background:"#fff",border:"1px solid var(--line)",borderRadius:18,padding:"20px 22px",display:"flex",gap:16,alignItems:"flex-start"}},v.default.createElement("div",{style:{width:40,height:40,borderRadius:12,background:"var(--bg-soft)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--blue)",flexShrink:0}},e),v.default.createElement("div",null,v.default.createElement("div",{className:"eyebrow"},t),v.default.createElement("div",{style:{fontFamily:"Inter Tight, sans-serif",fontWeight:600,fontSize:18,marginTop:4,letterSpacing:"-0.01em"}},n),v.default.createElement("div",{style:{color:"var(--muted)",fontSize:13,marginTop:2}},i)))}function I3({t:e}){return v.default.createElement("section",{className:"final-cta"},v.default.createElement("div",{className:"bg"},v.default.createElement(Lf,{src:"images/gallery1.webp",tone:"warm",style:{position:"absolute",inset:0}})),v.default.createElement(va,null,v.default.createElement("div",{className:"container inner"},v.default.createElement("div",{className:"eyebrow",style:{color:"rgba(255,255,255,.55)",marginBottom:22}},"07 \u2014 VISIT US"),v.default.createElement("h2",null,"WALK IN ",v.default.createElement("em",null,"NORMAL."),v.default.createElement("br",null),"WALK OUT ",v.default.createElement("em",null,"SHARP.")),v.default.createElement("p",{className:"sub"},"It takes 30 seconds to book. The transformation takes a little longer."),v.default.createElement("div",{className:"cta"},v.default.createElement("a",{href:"#book",className:"btn btn-wa",style:{height:60,padding:"0 30px",fontSize:16}},v.default.createElement(Ht.WhatsApp,{size:18})," Book on WhatsApp",v.default.createElement(Ht.Arrow,{size:16}))))))}function O3({t:e}){return v.default.createElement("footer",{className:"footer"},v.default.createElement("div",{className:"container"},v.default.createElement("div",{className:"grid"},v.default.createElement("div",null,v.default.createElement("div",{className:"logo-mark",style:{marginBottom:18}},v.default.createElement("img",{src:"logo.webp",alt:"SMART Men's Salon",className:"logo-img"})),v.default.createElement("p",{style:{maxWidth:380,color:"rgba(255,255,255,.55)",fontSize:14,margin:0}},"A modern grooming studio for men. Cuts, beards, skin and packages \u2014 booked on WhatsApp, done in the chair.")),v.default.createElement("div",null,v.default.createElement("h4",null,"Services"),v.default.createElement("ul",null,v.default.createElement("li",null,v.default.createElement("a",{href:"#services"},"Hair")),v.default.createElement("li",null,v.default.createElement("a",{href:"#services"},"Beard")),v.default.createElement("li",null,v.default.createElement("a",{href:"#services"},"Skin")),v.default.createElement("li",null,v.default.createElement("a",{href:"#services"},"Packages")))),v.default.createElement("div",null,v.default.createElement("h4",null,"Visit"),v.default.createElement("ul",null,v.default.createElement("li",null,v.default.createElement("a",{href:"#visit"},e.address,", Nabarangpur")),v.default.createElement("li",null,v.default.createElement("a",{href:"#visit"},e.hours)),v.default.createElement("li",null,v.default.createElement("a",{href:`tel:${e.phone.replace(/\s/g,"")}`},e.phone)))),v.default.createElement("div",null,v.default.createElement("h4",null,"Follow"),v.default.createElement("ul",null,v.default.createElement("li",null,v.default.createElement("a",{href:"https://www.instagram.com/smartmenssalon",target:"_blank",rel:"noopener"},"Instagram")),v.default.createElement("li",null,v.default.createElement("a",{href:"https://www.google.com/maps/search/?api=1&query=SMART+Men%27s+Salon",target:"_blank",rel:"noopener"},"Google Reviews")),v.default.createElement("li",null,v.default.createElement("a",{href:`https://wa.me/${e.whatsappNumber}`,target:"_blank",rel:"noopener"},"WhatsApp"))))),v.default.createElement("div",{className:"bottom"},v.default.createElement("span",null,"\xA9 ",new Date().getFullYear()," SMART Men's Salon \xB7 smartsalon.co.in"),v.default.createElement("span",null,"Designed for the chair"))))}function P3({t:e}){let[t,n]=Kn(!1);return _o(()=>{let i=()=>{n(window.scrollY>300)};return window.addEventListener("scroll",i,{passive:!0}),i(),()=>window.removeEventListener("scroll",i)},[]),v.default.createElement("div",{style:{opacity:t?1:0,transition:"opacity 0.3s ease",pointerEvents:t?"auto":"none"}},v.default.createElement("a",{href:"#book",className:"fab","aria-label":"Book on WhatsApp"},v.default.createElement(Ht.WhatsApp,{size:26})),v.default.createElement("div",{className:"mobile-cta"},v.default.createElement("a",{href:`tel:${e.phone.replace(/\s/g,"")}`,className:"btn btn-dark",style:{background:"rgba(10,10,11,.85)",color:"#fff",border:"none"}},v.default.createElement(Ht.Phone,{size:15})," Call"),v.default.createElement("a",{href:"#book",className:"btn btn-wa"},v.default.createElement(Ht.WhatsApp,{size:16})," Book on WhatsApp")))}function B3(){let[e,t]=f3(_3),[n,i]=Kn(null);return _o(()=>{document.documentElement.style.setProperty("--blue",e.primaryColor),document.documentElement.style.setProperty("--blue-700",e.primaryColor)},[e.primaryColor]),v.default.createElement(v.default.Fragment,null,v.default.createElement(b3,{t:e}),v.default.createElement(M3,{onBookService:i}),v.default.createElement(T3,{t:e}),v.default.createElement(R3,{t:e,preselectedService:n,onClearPreselect:()=>i(null)}),v.default.createElement(N3,null),v.default.createElement(L3,{t:e}),v.default.createElement(I3,{t:e}),v.default.createElement(O3,{t:e}),v.default.createElement(P3,{t:e}),new URLSearchParams(window.location.search).has("tweaks")&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&v.default.createElement(d3,null,v.default.createElement(Uf,{label:"Brand"}),v.default.createElement(g3,{label:"Primary color",value:e.primaryColor,options:["#2563EB","#0A0A0B","#C2410C","#15803D","#7C3AED"],onChange:s=>t("primaryColor",s)}),v.default.createElement(Uf,{label:"Hero copy"}),v.default.createElement(ga,{label:"Headline \xB7 line 1",value:e.headlineLine1,onChange:s=>t("headlineLine1",s)}),v.default.createElement(ga,{label:"Headline \xB7 line 2",value:e.headlineLine2,onChange:s=>t("headlineLine2",s)}),v.default.createElement(ga,{label:"Hero subtext",value:e.heroSub,onChange:s=>t("heroSub",s)}),v.default.createElement(Uf,{label:"Contact"}),v.default.createElement(ga,{label:"Phone (display)",value:e.phone,onChange:s=>t("phone",s)}),v.default.createElement(ga,{label:"WhatsApp number",value:e.whatsappNumber,onChange:s=>t("whatsappNumber",s)}),v.default.createElement(ga,{label:"Address",value:e.address,onChange:s=>t("address",s)}),v.default.createElement(ga,{label:"City",value:e.city,onChange:s=>t("city",s)}),v.default.createElement(ga,{label:"Hours",value:e.hours,onChange:s=>t("hours",s)}),v.default.createElement(Uf,{label:"Sections"}),v.default.createElement(Ub,{label:"Hero ticker",value:e.showTicker,onChange:s=>t("showTicker",s)}),v.default.createElement(Ub,{label:"Gallery section",value:e.showGallery,onChange:s=>t("showGallery",s)})))}(0,Pb.createRoot)(document.getElementById("root")).render(v.default.createElement(B3,null))});z3();})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

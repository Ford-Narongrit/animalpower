(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function I6(c,a){const e=Object.create(null),s=c.split(",");for(let r=0;r<s.length;r++)e[s[r]]=!0;return a?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const mo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Co=I6(mo);function Y0(c){return!!c||c===""}function g4(c){if(O(c)){const a={};for(let e=0;e<c.length;e++){const s=c[e],r=z1(s)?ho(s):g4(s);if(r)for(const i in r)a[i]=r[i]}return a}else{if(z1(c))return c;if(r1(c))return c}}const zo=/;(?![^(]*\))/g,vo=/:(.+)/;function ho(c){const a={};return c.split(zo).forEach(e=>{if(e){const s=e.split(vo);s.length>1&&(a[s[0].trim()]=s[1].trim())}}),a}function G6(c){let a="";if(z1(c))a=c;else if(O(c))for(let e=0;e<c.length;e++){const s=G6(c[e]);s&&(a+=s+" ")}else if(r1(c))for(const e in c)c[e]&&(a+=e+" ");return a.trim()}const t3=c=>z1(c)?c:c==null?"":O(c)||r1(c)&&(c.toString===c7||!$(c.toString))?JSON.stringify(c,X0,2):String(c),X0=(c,a)=>a&&a.__v_isRef?X0(c,a.value):U2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((e,[s,r])=>(e[`${s} =>`]=r,e),{})}:Q0(a)?{[`Set(${a.size})`]:[...a.values()]}:r1(a)&&!O(a)&&!a7(a)?String(a):a,Q={},$2=[],q1=()=>{},Ho=()=>!1,uo=/^on[^a-z]/,x4=c=>uo.test(c),W6=c=>c.startsWith("onUpdate:"),d1=Object.assign,Z6=(c,a)=>{const e=c.indexOf(a);e>-1&&c.splice(e,1)},Mo=Object.prototype.hasOwnProperty,G=(c,a)=>Mo.call(c,a),O=Array.isArray,U2=c=>b4(c)==="[object Map]",Q0=c=>b4(c)==="[object Set]",$=c=>typeof c=="function",z1=c=>typeof c=="string",j6=c=>typeof c=="symbol",r1=c=>c!==null&&typeof c=="object",J0=c=>r1(c)&&$(c.then)&&$(c.catch),c7=Object.prototype.toString,b4=c=>c7.call(c),Vo=c=>b4(c).slice(8,-1),a7=c=>b4(c)==="[object Object]",K6=c=>z1(c)&&c!=="NaN"&&c[0]!=="-"&&""+parseInt(c,10)===c,s4=I6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),S4=c=>{const a=Object.create(null);return e=>a[e]||(a[e]=c(e))},po=/-(\w)/g,K1=S4(c=>c.replace(po,(a,e)=>e?e.toUpperCase():"")),Lo=/\B([A-Z])/g,c3=S4(c=>c.replace(Lo,"-$1").toLowerCase()),N4=S4(c=>c.charAt(0).toUpperCase()+c.slice(1)),i6=S4(c=>c?`on${N4(c)}`:""),V3=(c,a)=>!Object.is(c,a),r4=(c,a)=>{for(let e=0;e<c.length;e++)c[e](a)},t4=(c,a,e)=>{Object.defineProperty(c,a,{configurable:!0,enumerable:!1,value:e})},H6=c=>{const a=parseFloat(c);return isNaN(a)?c:a};let k5;const go=()=>k5||(k5=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let G1;class xo{constructor(a=!1){this.detached=a,this.active=!0,this.effects=[],this.cleanups=[],this.parent=G1,!a&&G1&&(this.index=(G1.scopes||(G1.scopes=[])).push(this)-1)}run(a){if(this.active){const e=G1;try{return G1=this,a()}finally{G1=e}}}on(){G1=this}off(){G1=this.parent}stop(a){if(this.active){let e,s;for(e=0,s=this.effects.length;e<s;e++)this.effects[e].stop();for(e=0,s=this.cleanups.length;e<s;e++)this.cleanups[e]();if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!a){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function bo(c,a=G1){a&&a.active&&a.effects.push(c)}const Y6=c=>{const a=new Set(c);return a.w=0,a.n=0,a},e7=c=>(c.w&z2)>0,s7=c=>(c.n&z2)>0,So=({deps:c})=>{if(c.length)for(let a=0;a<c.length;a++)c[a].w|=z2},No=c=>{const{deps:a}=c;if(a.length){let e=0;for(let s=0;s<a.length;s++){const r=a[s];e7(r)&&!s7(r)?r.delete(c):a[e++]=r,r.w&=~z2,r.n&=~z2}a.length=e}},u6=new WeakMap;let l3=0,z2=1;const M6=30;let B1;const y2=Symbol(""),V6=Symbol("");class X6{constructor(a,e=null,s){this.fn=a,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,bo(this,s)}run(){if(!this.active)return this.fn();let a=B1,e=t2;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=B1,B1=this,t2=!0,z2=1<<++l3,l3<=M6?So(this):A5(this),this.fn()}finally{l3<=M6&&No(this),z2=1<<--l3,B1=this.parent,t2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){B1===this?this.deferStop=!0:this.active&&(A5(this),this.onStop&&this.onStop(),this.active=!1)}}function A5(c){const{deps:a}=c;if(a.length){for(let e=0;e<a.length;e++)a[e].delete(c);a.length=0}}let t2=!0;const r7=[];function a3(){r7.push(t2),t2=!1}function e3(){const c=r7.pop();t2=c===void 0?!0:c}function w1(c,a,e){if(t2&&B1){let s=u6.get(c);s||u6.set(c,s=new Map);let r=s.get(e);r||s.set(e,r=Y6()),i7(r)}}function i7(c,a){let e=!1;l3<=M6?s7(c)||(c.n|=z2,e=!e7(c)):e=!c.has(B1),e&&(c.add(B1),B1.deps.push(c))}function Q1(c,a,e,s,r,i){const n=u6.get(c);if(!n)return;let f=[];if(a==="clear")f=[...n.values()];else if(e==="length"&&O(c))n.forEach((l,t)=>{(t==="length"||t>=s)&&f.push(l)});else switch(e!==void 0&&f.push(n.get(e)),a){case"add":O(c)?K6(e)&&f.push(n.get("length")):(f.push(n.get(y2)),U2(c)&&f.push(n.get(V6)));break;case"delete":O(c)||(f.push(n.get(y2)),U2(c)&&f.push(n.get(V6)));break;case"set":U2(c)&&f.push(n.get(y2));break}if(f.length===1)f[0]&&p6(f[0]);else{const l=[];for(const t of f)t&&l.push(...t);p6(Y6(l))}}function p6(c,a){const e=O(c)?c:[...c];for(const s of e)s.computed&&P5(s);for(const s of e)s.computed||P5(s)}function P5(c,a){(c!==B1||c.allowRecurse)&&(c.scheduler?c.scheduler():c.run())}const wo=I6("__proto__,__v_isRef,__isVue"),n7=new Set(Object.getOwnPropertyNames(Symbol).filter(c=>c!=="arguments"&&c!=="caller").map(c=>Symbol[c]).filter(j6)),yo=Q6(),ko=Q6(!1,!0),Ao=Q6(!0),T5=Po();function Po(){const c={};return["includes","indexOf","lastIndexOf"].forEach(a=>{c[a]=function(...e){const s=j(this);for(let i=0,n=this.length;i<n;i++)w1(s,"get",i+"");const r=s[a](...e);return r===-1||r===!1?s[a](...e.map(j)):r}}),["push","pop","shift","unshift","splice"].forEach(a=>{c[a]=function(...e){a3();const s=j(this)[a].apply(this,e);return e3(),s}}),c}function Q6(c=!1,a=!1){return function(s,r,i){if(r==="__v_isReactive")return!c;if(r==="__v_isReadonly")return c;if(r==="__v_isShallow")return a;if(r==="__v_raw"&&i===(c?a?jo:m7:a?t7:o7).get(s))return s;const n=O(s);if(!c&&n&&G(T5,r))return Reflect.get(T5,r,i);const f=Reflect.get(s,r,i);return(j6(r)?n7.has(r):wo(r))||(c||w1(s,"get",r),a)?f:u1(f)?n&&K6(r)?f:f.value:r1(f)?c?C7(f):P3(f):f}}const To=f7(),Fo=f7(!0);function f7(c=!1){return function(e,s,r,i){let n=e[s];if(j2(n)&&u1(n)&&!u1(r))return!1;if(!c&&(!m4(r)&&!j2(r)&&(n=j(n),r=j(r)),!O(e)&&u1(n)&&!u1(r)))return n.value=r,!0;const f=O(e)&&K6(s)?Number(s)<e.length:G(e,s),l=Reflect.set(e,s,r,i);return e===j(i)&&(f?V3(r,n)&&Q1(e,"set",s,r):Q1(e,"add",s,r)),l}}function Bo(c,a){const e=G(c,a);c[a];const s=Reflect.deleteProperty(c,a);return s&&e&&Q1(c,"delete",a,void 0),s}function Ro(c,a){const e=Reflect.has(c,a);return(!j6(a)||!n7.has(a))&&w1(c,"has",a),e}function Eo(c){return w1(c,"iterate",O(c)?"length":y2),Reflect.ownKeys(c)}const l7={get:yo,set:To,deleteProperty:Bo,has:Ro,ownKeys:Eo},Do={get:Ao,set(c,a){return!0},deleteProperty(c,a){return!0}},qo=d1({},l7,{get:ko,set:Fo}),J6=c=>c,w4=c=>Reflect.getPrototypeOf(c);function U3(c,a,e=!1,s=!1){c=c.__v_raw;const r=j(c),i=j(a);e||(a!==i&&w1(r,"get",a),w1(r,"get",i));const{has:n}=w4(r),f=s?J6:e?e8:p3;if(n.call(r,a))return f(c.get(a));if(n.call(r,i))return f(c.get(i));c!==r&&c.get(a)}function I3(c,a=!1){const e=this.__v_raw,s=j(e),r=j(c);return a||(c!==r&&w1(s,"has",c),w1(s,"has",r)),c===r?e.has(c):e.has(c)||e.has(r)}function G3(c,a=!1){return c=c.__v_raw,!a&&w1(j(c),"iterate",y2),Reflect.get(c,"size",c)}function F5(c){c=j(c);const a=j(this);return w4(a).has.call(a,c)||(a.add(c),Q1(a,"add",c,c)),this}function B5(c,a){a=j(a);const e=j(this),{has:s,get:r}=w4(e);let i=s.call(e,c);i||(c=j(c),i=s.call(e,c));const n=r.call(e,c);return e.set(c,a),i?V3(a,n)&&Q1(e,"set",c,a):Q1(e,"add",c,a),this}function R5(c){const a=j(this),{has:e,get:s}=w4(a);let r=e.call(a,c);r||(c=j(c),r=e.call(a,c)),s&&s.call(a,c);const i=a.delete(c);return r&&Q1(a,"delete",c,void 0),i}function E5(){const c=j(this),a=c.size!==0,e=c.clear();return a&&Q1(c,"clear",void 0,void 0),e}function W3(c,a){return function(s,r){const i=this,n=i.__v_raw,f=j(n),l=a?J6:c?e8:p3;return!c&&w1(f,"iterate",y2),n.forEach((t,o)=>s.call(r,l(t),l(o),i))}}function Z3(c,a,e){return function(...s){const r=this.__v_raw,i=j(r),n=U2(i),f=c==="entries"||c===Symbol.iterator&&n,l=c==="keys"&&n,t=r[c](...s),o=e?J6:a?e8:p3;return!a&&w1(i,"iterate",l?V6:y2),{next(){const{value:C,done:v}=t.next();return v?{value:C,done:v}:{value:f?[o(C[0]),o(C[1])]:o(C),done:v}},[Symbol.iterator](){return this}}}}function i2(c){return function(...a){return c==="delete"?!1:this}}function _o(){const c={get(i){return U3(this,i)},get size(){return G3(this)},has:I3,add:F5,set:B5,delete:R5,clear:E5,forEach:W3(!1,!1)},a={get(i){return U3(this,i,!1,!0)},get size(){return G3(this)},has:I3,add:F5,set:B5,delete:R5,clear:E5,forEach:W3(!1,!0)},e={get(i){return U3(this,i,!0)},get size(){return G3(this,!0)},has(i){return I3.call(this,i,!0)},add:i2("add"),set:i2("set"),delete:i2("delete"),clear:i2("clear"),forEach:W3(!0,!1)},s={get(i){return U3(this,i,!0,!0)},get size(){return G3(this,!0)},has(i){return I3.call(this,i,!0)},add:i2("add"),set:i2("set"),delete:i2("delete"),clear:i2("clear"),forEach:W3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{c[i]=Z3(i,!1,!1),e[i]=Z3(i,!0,!1),a[i]=Z3(i,!1,!0),s[i]=Z3(i,!0,!0)}),[c,e,a,s]}const[Oo,$o,Uo,Io]=_o();function c8(c,a){const e=a?c?Io:Uo:c?$o:Oo;return(s,r,i)=>r==="__v_isReactive"?!c:r==="__v_isReadonly"?c:r==="__v_raw"?s:Reflect.get(G(e,r)&&r in s?e:s,r,i)}const Go={get:c8(!1,!1)},Wo={get:c8(!1,!0)},Zo={get:c8(!0,!1)},o7=new WeakMap,t7=new WeakMap,m7=new WeakMap,jo=new WeakMap;function Ko(c){switch(c){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yo(c){return c.__v_skip||!Object.isExtensible(c)?0:Ko(Vo(c))}function P3(c){return j2(c)?c:a8(c,!1,l7,Go,o7)}function Xo(c){return a8(c,!1,qo,Wo,t7)}function C7(c){return a8(c,!0,Do,Zo,m7)}function a8(c,a,e,s,r){if(!r1(c)||c.__v_raw&&!(a&&c.__v_isReactive))return c;const i=r.get(c);if(i)return i;const n=Yo(c);if(n===0)return c;const f=new Proxy(c,n===2?s:e);return r.set(c,f),f}function I2(c){return j2(c)?I2(c.__v_raw):!!(c&&c.__v_isReactive)}function j2(c){return!!(c&&c.__v_isReadonly)}function m4(c){return!!(c&&c.__v_isShallow)}function z7(c){return I2(c)||j2(c)}function j(c){const a=c&&c.__v_raw;return a?j(a):c}function v7(c){return t4(c,"__v_skip",!0),c}const p3=c=>r1(c)?P3(c):c,e8=c=>r1(c)?C7(c):c;function h7(c){t2&&B1&&(c=j(c),i7(c.dep||(c.dep=Y6())))}function H7(c,a){c=j(c),c.dep&&p6(c.dep)}function u1(c){return!!(c&&c.__v_isRef===!0)}function Qo(c){return u7(c,!1)}function Jo(c){return u7(c,!0)}function u7(c,a){return u1(c)?c:new ct(c,a)}class ct{constructor(a,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?a:j(a),this._value=e?a:p3(a)}get value(){return h7(this),this._value}set value(a){const e=this.__v_isShallow||m4(a)||j2(a);a=e?a:j(a),V3(a,this._rawValue)&&(this._rawValue=a,this._value=e?a:p3(a),H7(this))}}function G2(c){return u1(c)?c.value:c}const at={get:(c,a,e)=>G2(Reflect.get(c,a,e)),set:(c,a,e,s)=>{const r=c[a];return u1(r)&&!u1(e)?(r.value=e,!0):Reflect.set(c,a,e,s)}};function M7(c){return I2(c)?c:new Proxy(c,at)}var V7;class et{constructor(a,e,s,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[V7]=!1,this._dirty=!0,this.effect=new X6(a,()=>{this._dirty||(this._dirty=!0,H7(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const a=j(this);return h7(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}V7="__v_isReadonly";function st(c,a,e=!1){let s,r;const i=$(c);return i?(s=c,r=q1):(s=c.get,r=c.set),new et(s,r,i||!r,e)}function m2(c,a,e,s){let r;try{r=s?c(...s):c()}catch(i){y4(i,a,e)}return r}function _1(c,a,e,s){if($(c)){const i=m2(c,a,e,s);return i&&J0(i)&&i.catch(n=>{y4(n,a,e)}),i}const r=[];for(let i=0;i<c.length;i++)r.push(_1(c[i],a,e,s));return r}function y4(c,a,e,s=!0){const r=a?a.vnode:null;if(a){let i=a.parent;const n=a.proxy,f=e;for(;i;){const t=i.ec;if(t){for(let o=0;o<t.length;o++)if(t[o](c,n,f)===!1)return}i=i.parent}const l=a.appContext.config.errorHandler;if(l){m2(l,null,10,[c,n,f]);return}}rt(c,e,r,s)}function rt(c,a,e,s=!0){console.error(c)}let d3=!1,d6=!1;const H1=[];let Z1=0;const W2=[];let X1=null,x2=0;const p7=Promise.resolve();let s8=null;function d7(c){const a=s8||p7;return c?a.then(this?c.bind(this):c):a}function it(c){let a=Z1+1,e=H1.length;for(;a<e;){const s=a+e>>>1;L3(H1[s])<c?a=s+1:e=s}return a}function r8(c){(!H1.length||!H1.includes(c,d3&&c.allowRecurse?Z1+1:Z1))&&(c.id==null?H1.push(c):H1.splice(it(c.id),0,c),L7())}function L7(){!d3&&!d6&&(d6=!0,s8=p7.then(x7))}function nt(c){const a=H1.indexOf(c);a>Z1&&H1.splice(a,1)}function ft(c){O(c)?W2.push(...c):(!X1||!X1.includes(c,c.allowRecurse?x2+1:x2))&&W2.push(c),L7()}function D5(c,a=d3?Z1+1:0){for(;a<H1.length;a++){const e=H1[a];e&&e.pre&&(H1.splice(a,1),a--,e())}}function g7(c){if(W2.length){const a=[...new Set(W2)];if(W2.length=0,X1){X1.push(...a);return}for(X1=a,X1.sort((e,s)=>L3(e)-L3(s)),x2=0;x2<X1.length;x2++)X1[x2]();X1=null,x2=0}}const L3=c=>c.id==null?1/0:c.id,lt=(c,a)=>{const e=L3(c)-L3(a);if(e===0){if(c.pre&&!a.pre)return-1;if(a.pre&&!c.pre)return 1}return e};function x7(c){d6=!1,d3=!0,H1.sort(lt);const a=q1;try{for(Z1=0;Z1<H1.length;Z1++){const e=H1[Z1];e&&e.active!==!1&&m2(e,null,14)}}finally{Z1=0,H1.length=0,g7(),d3=!1,s8=null,(H1.length||W2.length)&&x7()}}function ot(c,a,...e){if(c.isUnmounted)return;const s=c.vnode.props||Q;let r=e;const i=a.startsWith("update:"),n=i&&a.slice(7);if(n&&n in s){const o=`${n==="modelValue"?"model":n}Modifiers`,{number:C,trim:v}=s[o]||Q;v&&(r=e.map(H=>H.trim())),C&&(r=e.map(H6))}let f,l=s[f=i6(a)]||s[f=i6(K1(a))];!l&&i&&(l=s[f=i6(c3(a))]),l&&_1(l,c,6,r);const t=s[f+"Once"];if(t){if(!c.emitted)c.emitted={};else if(c.emitted[f])return;c.emitted[f]=!0,_1(t,c,6,r)}}function b7(c,a,e=!1){const s=a.emitsCache,r=s.get(c);if(r!==void 0)return r;const i=c.emits;let n={},f=!1;if(!$(c)){const l=t=>{const o=b7(t,a,!0);o&&(f=!0,d1(n,o))};!e&&a.mixins.length&&a.mixins.forEach(l),c.extends&&l(c.extends),c.mixins&&c.mixins.forEach(l)}return!i&&!f?(r1(c)&&s.set(c,null),null):(O(i)?i.forEach(l=>n[l]=null):d1(n,i),r1(c)&&s.set(c,n),n)}function k4(c,a){return!c||!x4(a)?!1:(a=a.slice(2).replace(/Once$/,""),G(c,a[0].toLowerCase()+a.slice(1))||G(c,c3(a))||G(c,a))}let p1=null,S7=null;function C4(c){const a=p1;return p1=c,S7=c&&c.type.__scopeId||null,a}function z4(c,a=p1,e){if(!a||c._n)return c;const s=(...r)=>{s._d&&j5(-1);const i=C4(a);let n;try{n=c(...r)}finally{C4(i),s._d&&j5(1)}return n};return s._n=!0,s._c=!0,s._d=!0,s}function n6(c){const{type:a,vnode:e,proxy:s,withProxy:r,props:i,propsOptions:[n],slots:f,attrs:l,emit:t,render:o,renderCache:C,data:v,setupState:H,ctx:b,inheritAttrs:y}=c;let P,u;const L=C4(c);try{if(e.shapeFlag&4){const q=r||s;P=W1(o.call(q,q,C,i,H,v,b)),u=l}else{const q=a;P=W1(q.length>1?q(i,{attrs:l,slots:f,emit:t}):q(i,null)),u=a.props?l:tt(l)}}catch(q){z3.length=0,y4(q,c,1),P=o1(v2)}let B=P;if(u&&y!==!1){const q=Object.keys(u),{shapeFlag:W}=B;q.length&&W&7&&(n&&q.some(W6)&&(u=mt(u,n)),B=K2(B,u))}return e.dirs&&(B=K2(B),B.dirs=B.dirs?B.dirs.concat(e.dirs):e.dirs),e.transition&&(B.transition=e.transition),P=B,C4(L),P}const tt=c=>{let a;for(const e in c)(e==="class"||e==="style"||x4(e))&&((a||(a={}))[e]=c[e]);return a},mt=(c,a)=>{const e={};for(const s in c)(!W6(s)||!(s.slice(9)in a))&&(e[s]=c[s]);return e};function Ct(c,a,e){const{props:s,children:r,component:i}=c,{props:n,children:f,patchFlag:l}=a,t=i.emitsOptions;if(a.dirs||a.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return s?q5(s,n,t):!!n;if(l&8){const o=a.dynamicProps;for(let C=0;C<o.length;C++){const v=o[C];if(n[v]!==s[v]&&!k4(t,v))return!0}}}else return(r||f)&&(!f||!f.$stable)?!0:s===n?!1:s?n?q5(s,n,t):!0:!!n;return!1}function q5(c,a,e){const s=Object.keys(a);if(s.length!==Object.keys(c).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(a[i]!==c[i]&&!k4(e,i))return!0}return!1}function zt({vnode:c,parent:a},e){for(;a&&a.subTree===c;)(c=a.vnode).el=e,a=a.parent}const vt=c=>c.__isSuspense;function ht(c,a){a&&a.pendingBranch?O(c)?a.effects.push(...c):a.effects.push(c):ft(c)}function i4(c,a){if(h1){let e=h1.provides;const s=h1.parent&&h1.parent.provides;s===e&&(e=h1.provides=Object.create(s)),e[c]=a}}function C2(c,a,e=!1){const s=h1||p1;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&c in r)return r[c];if(arguments.length>1)return e&&$(a)?a.call(s.proxy):a}}const _5={};function m3(c,a,e){return N7(c,a,e)}function N7(c,a,{immediate:e,deep:s,flush:r,onTrack:i,onTrigger:n}=Q){const f=h1;let l,t=!1,o=!1;if(u1(c)?(l=()=>c.value,t=m4(c)):I2(c)?(l=()=>c,s=!0):O(c)?(o=!0,t=c.some(u=>I2(u)||m4(u)),l=()=>c.map(u=>{if(u1(u))return u.value;if(I2(u))return S2(u);if($(u))return m2(u,f,2)})):$(c)?a?l=()=>m2(c,f,2):l=()=>{if(!(f&&f.isUnmounted))return C&&C(),_1(c,f,3,[v])}:l=q1,a&&s){const u=l;l=()=>S2(u())}let C,v=u=>{C=P.onStop=()=>{m2(u,f,4)}};if(b3)return v=q1,a?e&&_1(a,f,3,[l(),o?[]:void 0,v]):l(),q1;let H=o?[]:_5;const b=()=>{if(!!P.active)if(a){const u=P.run();(s||t||(o?u.some((L,B)=>V3(L,H[B])):V3(u,H)))&&(C&&C(),_1(a,f,3,[u,H===_5?void 0:H,v]),H=u)}else P.run()};b.allowRecurse=!!a;let y;r==="sync"?y=b:r==="post"?y=()=>x1(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),y=()=>r8(b));const P=new X6(l,y);return a?e?b():H=P.run():r==="post"?x1(P.run.bind(P),f&&f.suspense):P.run(),()=>{P.stop(),f&&f.scope&&Z6(f.scope.effects,P)}}function Ht(c,a,e){const s=this.proxy,r=z1(c)?c.includes(".")?w7(s,c):()=>s[c]:c.bind(s,s);let i;$(a)?i=a:(i=a.handler,e=a);const n=h1;Y2(this);const f=N7(r,i.bind(s),e);return n?Y2(n):k2(),f}function w7(c,a){const e=a.split(".");return()=>{let s=c;for(let r=0;r<e.length&&s;r++)s=s[e[r]];return s}}function S2(c,a){if(!r1(c)||c.__v_skip||(a=a||new Set,a.has(c)))return c;if(a.add(c),u1(c))S2(c.value,a);else if(O(c))for(let e=0;e<c.length;e++)S2(c[e],a);else if(Q0(c)||U2(c))c.forEach(e=>{S2(e,a)});else if(a7(c))for(const e in c)S2(c[e],a);return c}function T3(c){return $(c)?{setup:c,name:c.name}:c}const C3=c=>!!c.type.__asyncLoader,y7=c=>c.type.__isKeepAlive;function ut(c,a){k7(c,"a",a)}function Mt(c,a){k7(c,"da",a)}function k7(c,a,e=h1){const s=c.__wdc||(c.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return c()});if(A4(a,s,e),e){let r=e.parent;for(;r&&r.parent;)y7(r.parent.vnode)&&Vt(s,a,e,r),r=r.parent}}function Vt(c,a,e,s){const r=A4(a,c,s,!0);A7(()=>{Z6(s[a],r)},e)}function A4(c,a,e=h1,s=!1){if(e){const r=e[c]||(e[c]=[]),i=a.__weh||(a.__weh=(...n)=>{if(e.isUnmounted)return;a3(),Y2(e);const f=_1(a,e,c,n);return k2(),e3(),f});return s?r.unshift(i):r.push(i),i}}const e2=c=>(a,e=h1)=>(!b3||c==="sp")&&A4(c,(...s)=>a(...s),e),pt=e2("bm"),dt=e2("m"),Lt=e2("bu"),gt=e2("u"),xt=e2("bum"),A7=e2("um"),bt=e2("sp"),St=e2("rtg"),Nt=e2("rtc");function wt(c,a=h1){A4("ec",c,a)}function yt(c,a){const e=p1;if(e===null)return c;const s=B4(e)||e.proxy,r=c.dirs||(c.dirs=[]);for(let i=0;i<a.length;i++){let[n,f,l,t=Q]=a[i];$(n)&&(n={mounted:n,updated:n}),n.deep&&S2(f),r.push({dir:n,instance:s,value:f,oldValue:void 0,arg:l,modifiers:t})}return c}function d2(c,a,e,s){const r=c.dirs,i=a&&a.dirs;for(let n=0;n<r.length;n++){const f=r[n];i&&(f.oldValue=i[n].value);let l=f.dir[s];l&&(a3(),_1(l,e,8,[c.el,f,c,a]),e3())}}const i8="components";function P4(c,a){return T7(i8,c,!0,a)||c}const P7=Symbol();function kt(c){return z1(c)?T7(i8,c,!1)||c:c||P7}function T7(c,a,e=!0,s=!1){const r=p1||h1;if(r){const i=r.type;if(c===i8){const f=lm(i,!1);if(f&&(f===a||f===K1(a)||f===N4(K1(a))))return i}const n=O5(r[c]||i[c],a)||O5(r.appContext[c],a);return!n&&s?i:n}}function O5(c,a){return c&&(c[a]||c[K1(a)]||c[N4(K1(a))])}function At(c,a,e,s){let r;const i=e&&e[s];if(O(c)||z1(c)){r=new Array(c.length);for(let n=0,f=c.length;n<f;n++)r[n]=a(c[n],n,void 0,i&&i[n])}else if(typeof c=="number"){r=new Array(c);for(let n=0;n<c;n++)r[n]=a(n+1,n,void 0,i&&i[n])}else if(r1(c))if(c[Symbol.iterator])r=Array.from(c,(n,f)=>a(n,f,void 0,i&&i[f]));else{const n=Object.keys(c);r=new Array(n.length);for(let f=0,l=n.length;f<l;f++){const t=n[f];r[f]=a(c[t],t,f,i&&i[f])}}else r=[];return e&&(e[s]=r),r}function F7(c,a,e={},s,r){if(p1.isCE||p1.parent&&C3(p1.parent)&&p1.parent.isCE)return o1("slot",a==="default"?null:{name:a},s&&s());let i=c[a];i&&i._c&&(i._d=!1),A1();const n=i&&B7(i(e)),f=T4(N1,{key:e.key||n&&n.key||`_${a}`},n||(s?s():[]),n&&c._===1?64:-2);return!r&&f.scopeId&&(f.slotScopeIds=[f.scopeId+"-s"]),i&&i._c&&(i._d=!0),f}function B7(c){return c.some(a=>H4(a)?!(a.type===v2||a.type===N1&&!B7(a.children)):!0)?c:null}const L6=c=>c?W7(c)?B4(c)||c.proxy:L6(c.parent):null,v4=d1(Object.create(null),{$:c=>c,$el:c=>c.vnode.el,$data:c=>c.data,$props:c=>c.props,$attrs:c=>c.attrs,$slots:c=>c.slots,$refs:c=>c.refs,$parent:c=>L6(c.parent),$root:c=>L6(c.root),$emit:c=>c.emit,$options:c=>n8(c),$forceUpdate:c=>c.f||(c.f=()=>r8(c.update)),$nextTick:c=>c.n||(c.n=d7.bind(c.proxy)),$watch:c=>Ht.bind(c)}),Pt={get({_:c},a){const{ctx:e,setupState:s,data:r,props:i,accessCache:n,type:f,appContext:l}=c;let t;if(a[0]!=="$"){const H=n[a];if(H!==void 0)switch(H){case 1:return s[a];case 2:return r[a];case 4:return e[a];case 3:return i[a]}else{if(s!==Q&&G(s,a))return n[a]=1,s[a];if(r!==Q&&G(r,a))return n[a]=2,r[a];if((t=c.propsOptions[0])&&G(t,a))return n[a]=3,i[a];if(e!==Q&&G(e,a))return n[a]=4,e[a];g6&&(n[a]=0)}}const o=v4[a];let C,v;if(o)return a==="$attrs"&&w1(c,"get",a),o(c);if((C=f.__cssModules)&&(C=C[a]))return C;if(e!==Q&&G(e,a))return n[a]=4,e[a];if(v=l.config.globalProperties,G(v,a))return v[a]},set({_:c},a,e){const{data:s,setupState:r,ctx:i}=c;return r!==Q&&G(r,a)?(r[a]=e,!0):s!==Q&&G(s,a)?(s[a]=e,!0):G(c.props,a)||a[0]==="$"&&a.slice(1)in c?!1:(i[a]=e,!0)},has({_:{data:c,setupState:a,accessCache:e,ctx:s,appContext:r,propsOptions:i}},n){let f;return!!e[n]||c!==Q&&G(c,n)||a!==Q&&G(a,n)||(f=i[0])&&G(f,n)||G(s,n)||G(v4,n)||G(r.config.globalProperties,n)},defineProperty(c,a,e){return e.get!=null?c._.accessCache[a]=0:G(e,"value")&&this.set(c,a,e.value,null),Reflect.defineProperty(c,a,e)}};let g6=!0;function Tt(c){const a=n8(c),e=c.proxy,s=c.ctx;g6=!1,a.beforeCreate&&$5(a.beforeCreate,c,"bc");const{data:r,computed:i,methods:n,watch:f,provide:l,inject:t,created:o,beforeMount:C,mounted:v,beforeUpdate:H,updated:b,activated:y,deactivated:P,beforeDestroy:u,beforeUnmount:L,destroyed:B,unmounted:q,render:W,renderTracked:s1,renderTriggered:f1,errorCaptured:b1,serverPrefetch:M1,expose:k1,inheritAttrs:r2,components:$1,directives:F2,filters:V2}=a;if(t&&Ft(t,s,null,c.appContext.config.unwrapInjectedRef),n)for(const J in n){const Y=n[J];$(Y)&&(s[J]=Y.bind(e))}if(r){const J=r.call(e,e);r1(J)&&(c.data=P3(J))}if(g6=!0,i)for(const J in i){const Y=i[J],P1=$(Y)?Y.bind(e,e):$(Y.get)?Y.get.bind(e,e):q1,p2=!$(Y)&&$(Y.set)?Y.set.bind(e):q1,T1=n1({get:P1,set:p2});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>T1.value,set:L1=>T1.value=L1})}if(f)for(const J in f)R7(f[J],s,e,J);if(l){const J=$(l)?l.call(e):l;Reflect.ownKeys(J).forEach(Y=>{i4(Y,J[Y])})}o&&$5(o,c,"c");function t1(J,Y){O(Y)?Y.forEach(P1=>J(P1.bind(e))):Y&&J(Y.bind(e))}if(t1(pt,C),t1(dt,v),t1(Lt,H),t1(gt,b),t1(ut,y),t1(Mt,P),t1(wt,b1),t1(Nt,s1),t1(St,f1),t1(xt,L),t1(A7,q),t1(bt,M1),O(k1))if(k1.length){const J=c.exposed||(c.exposed={});k1.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>e[Y],set:P1=>e[Y]=P1})})}else c.exposed||(c.exposed={});W&&c.render===q1&&(c.render=W),r2!=null&&(c.inheritAttrs=r2),$1&&(c.components=$1),F2&&(c.directives=F2)}function Ft(c,a,e=q1,s=!1){O(c)&&(c=x6(c));for(const r in c){const i=c[r];let n;r1(i)?"default"in i?n=C2(i.from||r,i.default,!0):n=C2(i.from||r):n=C2(i),u1(n)&&s?Object.defineProperty(a,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:f=>n.value=f}):a[r]=n}}function $5(c,a,e){_1(O(c)?c.map(s=>s.bind(a.proxy)):c.bind(a.proxy),a,e)}function R7(c,a,e,s){const r=s.includes(".")?w7(e,s):()=>e[s];if(z1(c)){const i=a[c];$(i)&&m3(r,i)}else if($(c))m3(r,c.bind(e));else if(r1(c))if(O(c))c.forEach(i=>R7(i,a,e,s));else{const i=$(c.handler)?c.handler.bind(e):a[c.handler];$(i)&&m3(r,i,c)}}function n8(c){const a=c.type,{mixins:e,extends:s}=a,{mixins:r,optionsCache:i,config:{optionMergeStrategies:n}}=c.appContext,f=i.get(a);let l;return f?l=f:!r.length&&!e&&!s?l=a:(l={},r.length&&r.forEach(t=>h4(l,t,n,!0)),h4(l,a,n)),r1(a)&&i.set(a,l),l}function h4(c,a,e,s=!1){const{mixins:r,extends:i}=a;i&&h4(c,i,e,!0),r&&r.forEach(n=>h4(c,n,e,!0));for(const n in a)if(!(s&&n==="expose")){const f=Bt[n]||e&&e[n];c[n]=f?f(c[n],a[n]):a[n]}return c}const Bt={data:U5,props:g2,emits:g2,methods:g2,computed:g2,beforeCreate:V1,created:V1,beforeMount:V1,mounted:V1,beforeUpdate:V1,updated:V1,beforeDestroy:V1,beforeUnmount:V1,destroyed:V1,unmounted:V1,activated:V1,deactivated:V1,errorCaptured:V1,serverPrefetch:V1,components:g2,directives:g2,watch:Et,provide:U5,inject:Rt};function U5(c,a){return a?c?function(){return d1($(c)?c.call(this,this):c,$(a)?a.call(this,this):a)}:a:c}function Rt(c,a){return g2(x6(c),x6(a))}function x6(c){if(O(c)){const a={};for(let e=0;e<c.length;e++)a[c[e]]=c[e];return a}return c}function V1(c,a){return c?[...new Set([].concat(c,a))]:a}function g2(c,a){return c?d1(d1(Object.create(null),c),a):a}function Et(c,a){if(!c)return a;if(!a)return c;const e=d1(Object.create(null),c);for(const s in a)e[s]=V1(c[s],a[s]);return e}function Dt(c,a,e,s=!1){const r={},i={};t4(i,F4,1),c.propsDefaults=Object.create(null),E7(c,a,r,i);for(const n in c.propsOptions[0])n in r||(r[n]=void 0);e?c.props=s?r:Xo(r):c.type.props?c.props=r:c.props=i,c.attrs=i}function qt(c,a,e,s){const{props:r,attrs:i,vnode:{patchFlag:n}}=c,f=j(r),[l]=c.propsOptions;let t=!1;if((s||n>0)&&!(n&16)){if(n&8){const o=c.vnode.dynamicProps;for(let C=0;C<o.length;C++){let v=o[C];if(k4(c.emitsOptions,v))continue;const H=a[v];if(l)if(G(i,v))H!==i[v]&&(i[v]=H,t=!0);else{const b=K1(v);r[b]=b6(l,f,b,H,c,!1)}else H!==i[v]&&(i[v]=H,t=!0)}}}else{E7(c,a,r,i)&&(t=!0);let o;for(const C in f)(!a||!G(a,C)&&((o=c3(C))===C||!G(a,o)))&&(l?e&&(e[C]!==void 0||e[o]!==void 0)&&(r[C]=b6(l,f,C,void 0,c,!0)):delete r[C]);if(i!==f)for(const C in i)(!a||!G(a,C)&&!0)&&(delete i[C],t=!0)}t&&Q1(c,"set","$attrs")}function E7(c,a,e,s){const[r,i]=c.propsOptions;let n=!1,f;if(a)for(let l in a){if(s4(l))continue;const t=a[l];let o;r&&G(r,o=K1(l))?!i||!i.includes(o)?e[o]=t:(f||(f={}))[o]=t:k4(c.emitsOptions,l)||(!(l in s)||t!==s[l])&&(s[l]=t,n=!0)}if(i){const l=j(e),t=f||Q;for(let o=0;o<i.length;o++){const C=i[o];e[C]=b6(r,l,C,t[C],c,!G(t,C))}}return n}function b6(c,a,e,s,r,i){const n=c[e];if(n!=null){const f=G(n,"default");if(f&&s===void 0){const l=n.default;if(n.type!==Function&&$(l)){const{propsDefaults:t}=r;e in t?s=t[e]:(Y2(r),s=t[e]=l.call(null,a),k2())}else s=l}n[0]&&(i&&!f?s=!1:n[1]&&(s===""||s===c3(e))&&(s=!0))}return s}function D7(c,a,e=!1){const s=a.propsCache,r=s.get(c);if(r)return r;const i=c.props,n={},f=[];let l=!1;if(!$(c)){const o=C=>{l=!0;const[v,H]=D7(C,a,!0);d1(n,v),H&&f.push(...H)};!e&&a.mixins.length&&a.mixins.forEach(o),c.extends&&o(c.extends),c.mixins&&c.mixins.forEach(o)}if(!i&&!l)return r1(c)&&s.set(c,$2),$2;if(O(i))for(let o=0;o<i.length;o++){const C=K1(i[o]);I5(C)&&(n[C]=Q)}else if(i)for(const o in i){const C=K1(o);if(I5(C)){const v=i[o],H=n[C]=O(v)||$(v)?{type:v}:v;if(H){const b=Z5(Boolean,H.type),y=Z5(String,H.type);H[0]=b>-1,H[1]=y<0||b<y,(b>-1||G(H,"default"))&&f.push(C)}}}const t=[n,f];return r1(c)&&s.set(c,t),t}function I5(c){return c[0]!=="$"}function G5(c){const a=c&&c.toString().match(/^\s*function (\w+)/);return a?a[1]:c===null?"null":""}function W5(c,a){return G5(c)===G5(a)}function Z5(c,a){return O(a)?a.findIndex(e=>W5(e,c)):$(a)&&W5(a,c)?0:-1}const q7=c=>c[0]==="_"||c==="$stable",f8=c=>O(c)?c.map(W1):[W1(c)],_t=(c,a,e)=>{if(a._n)return a;const s=z4((...r)=>f8(a(...r)),e);return s._c=!1,s},_7=(c,a,e)=>{const s=c._ctx;for(const r in c){if(q7(r))continue;const i=c[r];if($(i))a[r]=_t(r,i,s);else if(i!=null){const n=f8(i);a[r]=()=>n}}},O7=(c,a)=>{const e=f8(a);c.slots.default=()=>e},Ot=(c,a)=>{if(c.vnode.shapeFlag&32){const e=a._;e?(c.slots=j(a),t4(a,"_",e)):_7(a,c.slots={})}else c.slots={},a&&O7(c,a);t4(c.slots,F4,1)},$t=(c,a,e)=>{const{vnode:s,slots:r}=c;let i=!0,n=Q;if(s.shapeFlag&32){const f=a._;f?e&&f===1?i=!1:(d1(r,a),!e&&f===1&&delete r._):(i=!a.$stable,_7(a,r)),n=a}else a&&(O7(c,a),n={default:1});if(i)for(const f in r)!q7(f)&&!(f in n)&&delete r[f]};function $7(){return{app:null,config:{isNativeTag:Ho,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ut=0;function It(c,a){return function(s,r=null){$(s)||(s=Object.assign({},s)),r!=null&&!r1(r)&&(r=null);const i=$7(),n=new Set;let f=!1;const l=i.app={_uid:Ut++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:tm,get config(){return i.config},set config(t){},use(t,...o){return n.has(t)||(t&&$(t.install)?(n.add(t),t.install(l,...o)):$(t)&&(n.add(t),t(l,...o))),l},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),l},component(t,o){return o?(i.components[t]=o,l):i.components[t]},directive(t,o){return o?(i.directives[t]=o,l):i.directives[t]},mount(t,o,C){if(!f){const v=o1(s,r);return v.appContext=i,o&&a?a(v,t):c(v,t,C),f=!0,l._container=t,t.__vue_app__=l,B4(v.component)||v.component.proxy}},unmount(){f&&(c(null,l._container),delete l._container.__vue_app__)},provide(t,o){return i.provides[t]=o,l}};return l}}function S6(c,a,e,s,r=!1){if(O(c)){c.forEach((v,H)=>S6(v,a&&(O(a)?a[H]:a),e,s,r));return}if(C3(s)&&!r)return;const i=s.shapeFlag&4?B4(s.component)||s.component.proxy:s.el,n=r?null:i,{i:f,r:l}=c,t=a&&a.r,o=f.refs===Q?f.refs={}:f.refs,C=f.setupState;if(t!=null&&t!==l&&(z1(t)?(o[t]=null,G(C,t)&&(C[t]=null)):u1(t)&&(t.value=null)),$(l))m2(l,f,12,[n,o]);else{const v=z1(l),H=u1(l);if(v||H){const b=()=>{if(c.f){const y=v?G(C,l)?C[l]:o[l]:l.value;r?O(y)&&Z6(y,i):O(y)?y.includes(i)||y.push(i):v?(o[l]=[i],G(C,l)&&(C[l]=o[l])):(l.value=[i],c.k&&(o[c.k]=l.value))}else v?(o[l]=n,G(C,l)&&(C[l]=n)):H&&(l.value=n,c.k&&(o[c.k]=n))};n?(b.id=-1,x1(b,e)):b()}}}const x1=ht;function Gt(c){return Wt(c)}function Wt(c,a){const e=go();e.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:n,createText:f,createComment:l,setText:t,setElementText:o,parentNode:C,nextSibling:v,setScopeId:H=q1,insertStaticContent:b}=c,y=(m,z,h,M=null,p=null,x=null,w=!1,g=null,S=!!z.dynamicChildren)=>{if(m===z)return;m&&!n3(m,z)&&(M=N(m),L1(m,p,x,!0),m=null),z.patchFlag===-2&&(S=!1,z.dynamicChildren=null);const{type:d,ref:E,shapeFlag:T}=z;switch(d){case l8:P(m,z,h,M);break;case v2:u(m,z,h,M);break;case n4:m==null&&L(z,h,M,w);break;case N1:$1(m,z,h,M,p,x,w,g,S);break;default:T&1?W(m,z,h,M,p,x,w,g,S):T&6?F2(m,z,h,M,p,x,w,g,S):(T&64||T&128)&&d.process(m,z,h,M,p,x,w,g,S,Z)}E!=null&&p&&S6(E,m&&m.ref,x,z||m,!z)},P=(m,z,h,M)=>{if(m==null)s(z.el=f(z.children),h,M);else{const p=z.el=m.el;z.children!==m.children&&t(p,z.children)}},u=(m,z,h,M)=>{m==null?s(z.el=l(z.children||""),h,M):z.el=m.el},L=(m,z,h,M)=>{[m.el,m.anchor]=b(m.children,z,h,M,m.el,m.anchor)},B=({el:m,anchor:z},h,M)=>{let p;for(;m&&m!==z;)p=v(m),s(m,h,M),m=p;s(z,h,M)},q=({el:m,anchor:z})=>{let h;for(;m&&m!==z;)h=v(m),r(m),m=h;r(z)},W=(m,z,h,M,p,x,w,g,S)=>{w=w||z.type==="svg",m==null?s1(z,h,M,p,x,w,g,S):M1(m,z,p,x,w,g,S)},s1=(m,z,h,M,p,x,w,g)=>{let S,d;const{type:E,props:T,shapeFlag:D,transition:_,dirs:I}=m;if(S=m.el=n(m.type,x,T&&T.is,T),D&8?o(S,m.children):D&16&&b1(m.children,S,null,M,p,x&&E!=="foreignObject",w,g),I&&d2(m,null,M,"created"),T){for(const X in T)X!=="value"&&!s4(X)&&i(S,X,null,T[X],x,m.children,M,p,k);"value"in T&&i(S,"value",null,T.value),(d=T.onVnodeBeforeMount)&&I1(d,M,m)}f1(S,m,m.scopeId,w,M),I&&d2(m,null,M,"beforeMount");const c1=(!p||p&&!p.pendingBranch)&&_&&!_.persisted;c1&&_.beforeEnter(S),s(S,z,h),((d=T&&T.onVnodeMounted)||c1||I)&&x1(()=>{d&&I1(d,M,m),c1&&_.enter(S),I&&d2(m,null,M,"mounted")},p)},f1=(m,z,h,M,p)=>{if(h&&H(m,h),M)for(let x=0;x<M.length;x++)H(m,M[x]);if(p){let x=p.subTree;if(z===x){const w=p.vnode;f1(m,w,w.scopeId,w.slotScopeIds,p.parent)}}},b1=(m,z,h,M,p,x,w,g,S=0)=>{for(let d=S;d<m.length;d++){const E=m[d]=g?l2(m[d]):W1(m[d]);y(null,E,z,h,M,p,x,w,g)}},M1=(m,z,h,M,p,x,w)=>{const g=z.el=m.el;let{patchFlag:S,dynamicChildren:d,dirs:E}=z;S|=m.patchFlag&16;const T=m.props||Q,D=z.props||Q;let _;h&&L2(h,!1),(_=D.onVnodeBeforeUpdate)&&I1(_,h,z,m),E&&d2(z,m,h,"beforeUpdate"),h&&L2(h,!0);const I=p&&z.type!=="foreignObject";if(d?k1(m.dynamicChildren,d,g,h,M,I,x):w||Y(m,z,g,null,h,M,I,x,!1),S>0){if(S&16)r2(g,z,T,D,h,M,p);else if(S&2&&T.class!==D.class&&i(g,"class",null,D.class,p),S&4&&i(g,"style",T.style,D.style,p),S&8){const c1=z.dynamicProps;for(let X=0;X<c1.length;X++){const m1=c1[X],F1=T[m1],R2=D[m1];(R2!==F1||m1==="value")&&i(g,m1,F1,R2,p,m.children,h,M,k)}}S&1&&m.children!==z.children&&o(g,z.children)}else!w&&d==null&&r2(g,z,T,D,h,M,p);((_=D.onVnodeUpdated)||E)&&x1(()=>{_&&I1(_,h,z,m),E&&d2(z,m,h,"updated")},M)},k1=(m,z,h,M,p,x,w)=>{for(let g=0;g<z.length;g++){const S=m[g],d=z[g],E=S.el&&(S.type===N1||!n3(S,d)||S.shapeFlag&70)?C(S.el):h;y(S,d,E,null,M,p,x,w,!0)}},r2=(m,z,h,M,p,x,w)=>{if(h!==M){if(h!==Q)for(const g in h)!s4(g)&&!(g in M)&&i(m,g,h[g],null,w,z.children,p,x,k);for(const g in M){if(s4(g))continue;const S=M[g],d=h[g];S!==d&&g!=="value"&&i(m,g,d,S,w,z.children,p,x,k)}"value"in M&&i(m,"value",h.value,M.value)}},$1=(m,z,h,M,p,x,w,g,S)=>{const d=z.el=m?m.el:f(""),E=z.anchor=m?m.anchor:f("");let{patchFlag:T,dynamicChildren:D,slotScopeIds:_}=z;_&&(g=g?g.concat(_):_),m==null?(s(d,h,M),s(E,h,M),b1(z.children,h,E,p,x,w,g,S)):T>0&&T&64&&D&&m.dynamicChildren?(k1(m.dynamicChildren,D,h,p,x,w,g),(z.key!=null||p&&z===p.subTree)&&U7(m,z,!0)):Y(m,z,h,E,p,x,w,g,S)},F2=(m,z,h,M,p,x,w,g,S)=>{z.slotScopeIds=g,m==null?z.shapeFlag&512?p.ctx.activate(z,h,M,w,S):V2(z,h,M,p,x,w,S):r3(m,z,S)},V2=(m,z,h,M,p,x,w)=>{const g=m.component=sm(m,M,p);if(y7(m)&&(g.ctx.renderer=Z),rm(g),g.asyncDep){if(p&&p.registerDep(g,t1),!m.el){const S=g.subTree=o1(v2);u(null,S,z,h)}return}t1(g,m,z,h,p,x,w)},r3=(m,z,h)=>{const M=z.component=m.component;if(Ct(m,z,h))if(M.asyncDep&&!M.asyncResolved){J(M,z,h);return}else M.next=z,nt(M.update),M.update();else z.el=m.el,M.vnode=z},t1=(m,z,h,M,p,x,w)=>{const g=()=>{if(m.isMounted){let{next:E,bu:T,u:D,parent:_,vnode:I}=m,c1=E,X;L2(m,!1),E?(E.el=I.el,J(m,E,w)):E=I,T&&r4(T),(X=E.props&&E.props.onVnodeBeforeUpdate)&&I1(X,_,E,I),L2(m,!0);const m1=n6(m),F1=m.subTree;m.subTree=m1,y(F1,m1,C(F1.el),N(F1),m,p,x),E.el=m1.el,c1===null&&zt(m,m1.el),D&&x1(D,p),(X=E.props&&E.props.onVnodeUpdated)&&x1(()=>I1(X,_,E,I),p)}else{let E;const{el:T,props:D}=z,{bm:_,m:I,parent:c1}=m,X=C3(z);if(L2(m,!1),_&&r4(_),!X&&(E=D&&D.onVnodeBeforeMount)&&I1(E,c1,z),L2(m,!0),T&&U){const m1=()=>{m.subTree=n6(m),U(T,m.subTree,m,p,null)};X?z.type.__asyncLoader().then(()=>!m.isUnmounted&&m1()):m1()}else{const m1=m.subTree=n6(m);y(null,m1,h,M,m,p,x),z.el=m1.el}if(I&&x1(I,p),!X&&(E=D&&D.onVnodeMounted)){const m1=z;x1(()=>I1(E,c1,m1),p)}(z.shapeFlag&256||c1&&C3(c1.vnode)&&c1.vnode.shapeFlag&256)&&m.a&&x1(m.a,p),m.isMounted=!0,z=h=M=null}},S=m.effect=new X6(g,()=>r8(d),m.scope),d=m.update=()=>S.run();d.id=m.uid,L2(m,!0),d()},J=(m,z,h)=>{z.component=m;const M=m.vnode.props;m.vnode=z,m.next=null,qt(m,z.props,M,h),$t(m,z.children,h),a3(),D5(),e3()},Y=(m,z,h,M,p,x,w,g,S=!1)=>{const d=m&&m.children,E=m?m.shapeFlag:0,T=z.children,{patchFlag:D,shapeFlag:_}=z;if(D>0){if(D&128){p2(d,T,h,M,p,x,w,g,S);return}else if(D&256){P1(d,T,h,M,p,x,w,g,S);return}}_&8?(E&16&&k(d,p,x),T!==d&&o(h,T)):E&16?_&16?p2(d,T,h,M,p,x,w,g,S):k(d,p,x,!0):(E&8&&o(h,""),_&16&&b1(T,h,M,p,x,w,g,S))},P1=(m,z,h,M,p,x,w,g,S)=>{m=m||$2,z=z||$2;const d=m.length,E=z.length,T=Math.min(d,E);let D;for(D=0;D<T;D++){const _=z[D]=S?l2(z[D]):W1(z[D]);y(m[D],_,h,null,p,x,w,g,S)}d>E?k(m,p,x,!0,!1,T):b1(z,h,M,p,x,w,g,S,T)},p2=(m,z,h,M,p,x,w,g,S)=>{let d=0;const E=z.length;let T=m.length-1,D=E-1;for(;d<=T&&d<=D;){const _=m[d],I=z[d]=S?l2(z[d]):W1(z[d]);if(n3(_,I))y(_,I,h,null,p,x,w,g,S);else break;d++}for(;d<=T&&d<=D;){const _=m[T],I=z[D]=S?l2(z[D]):W1(z[D]);if(n3(_,I))y(_,I,h,null,p,x,w,g,S);else break;T--,D--}if(d>T){if(d<=D){const _=D+1,I=_<E?z[_].el:M;for(;d<=D;)y(null,z[d]=S?l2(z[d]):W1(z[d]),h,I,p,x,w,g,S),d++}}else if(d>D)for(;d<=T;)L1(m[d],p,x,!0),d++;else{const _=d,I=d,c1=new Map;for(d=I;d<=D;d++){const S1=z[d]=S?l2(z[d]):W1(z[d]);S1.key!=null&&c1.set(S1.key,d)}let X,m1=0;const F1=D-I+1;let R2=!1,N5=0;const i3=new Array(F1);for(d=0;d<F1;d++)i3[d]=0;for(d=_;d<=T;d++){const S1=m[d];if(m1>=F1){L1(S1,p,x,!0);continue}let U1;if(S1.key!=null)U1=c1.get(S1.key);else for(X=I;X<=D;X++)if(i3[X-I]===0&&n3(S1,z[X])){U1=X;break}U1===void 0?L1(S1,p,x,!0):(i3[U1-I]=d+1,U1>=N5?N5=U1:R2=!0,y(S1,z[U1],h,null,p,x,w,g,S),m1++)}const w5=R2?Zt(i3):$2;for(X=w5.length-1,d=F1-1;d>=0;d--){const S1=I+d,U1=z[S1],y5=S1+1<E?z[S1+1].el:M;i3[d]===0?y(null,U1,h,y5,p,x,w,g,S):R2&&(X<0||d!==w5[X]?T1(U1,h,y5,2):X--)}}},T1=(m,z,h,M,p=null)=>{const{el:x,type:w,transition:g,children:S,shapeFlag:d}=m;if(d&6){T1(m.component.subTree,z,h,M);return}if(d&128){m.suspense.move(z,h,M);return}if(d&64){w.move(m,z,h,Z);return}if(w===N1){s(x,z,h);for(let T=0;T<S.length;T++)T1(S[T],z,h,M);s(m.anchor,z,h);return}if(w===n4){B(m,z,h);return}if(M!==2&&d&1&&g)if(M===0)g.beforeEnter(x),s(x,z,h),x1(()=>g.enter(x),p);else{const{leave:T,delayLeave:D,afterLeave:_}=g,I=()=>s(x,z,h),c1=()=>{T(x,()=>{I(),_&&_()})};D?D(x,I,c1):c1()}else s(x,z,h)},L1=(m,z,h,M=!1,p=!1)=>{const{type:x,props:w,ref:g,children:S,dynamicChildren:d,shapeFlag:E,patchFlag:T,dirs:D}=m;if(g!=null&&S6(g,null,h,m,!0),E&256){z.ctx.deactivate(m);return}const _=E&1&&D,I=!C3(m);let c1;if(I&&(c1=w&&w.onVnodeBeforeUnmount)&&I1(c1,z,m),E&6)V(m.component,h,M);else{if(E&128){m.suspense.unmount(h,M);return}_&&d2(m,null,z,"beforeUnmount"),E&64?m.type.remove(m,z,h,p,Z,M):d&&(x!==N1||T>0&&T&64)?k(d,z,h,!1,!0):(x===N1&&T&384||!p&&E&16)&&k(S,z,h),M&&B2(m)}(I&&(c1=w&&w.onVnodeUnmounted)||_)&&x1(()=>{c1&&I1(c1,z,m),_&&d2(m,null,z,"unmounted")},h)},B2=m=>{const{type:z,el:h,anchor:M,transition:p}=m;if(z===N1){$3(h,M);return}if(z===n4){q(m);return}const x=()=>{r(h),p&&!p.persisted&&p.afterLeave&&p.afterLeave()};if(m.shapeFlag&1&&p&&!p.persisted){const{leave:w,delayLeave:g}=p,S=()=>w(h,x);g?g(m.el,x,S):S()}else x()},$3=(m,z)=>{let h;for(;m!==z;)h=v(m),r(m),m=h;r(z)},V=(m,z,h)=>{const{bum:M,scope:p,update:x,subTree:w,um:g}=m;M&&r4(M),p.stop(),x&&(x.active=!1,L1(w,m,z,h)),g&&x1(g,z),x1(()=>{m.isUnmounted=!0},z),z&&z.pendingBranch&&!z.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===z.pendingId&&(z.deps--,z.deps===0&&z.resolve())},k=(m,z,h,M=!1,p=!1,x=0)=>{for(let w=x;w<m.length;w++)L1(m[w],z,h,M,p)},N=m=>m.shapeFlag&6?N(m.component.subTree):m.shapeFlag&128?m.suspense.next():v(m.anchor||m.el),R=(m,z,h)=>{m==null?z._vnode&&L1(z._vnode,null,null,!0):y(z._vnode||null,m,z,null,null,null,h),D5(),g7(),z._vnode=m},Z={p:y,um:L1,m:T1,r:B2,mt:V2,mc:b1,pc:Y,pbc:k1,n:N,o:c};let i1,U;return a&&([i1,U]=a(Z)),{render:R,hydrate:i1,createApp:It(R,i1)}}function L2({effect:c,update:a},e){c.allowRecurse=a.allowRecurse=e}function U7(c,a,e=!1){const s=c.children,r=a.children;if(O(s)&&O(r))for(let i=0;i<s.length;i++){const n=s[i];let f=r[i];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=r[i]=l2(r[i]),f.el=n.el),e||U7(n,f))}}function Zt(c){const a=c.slice(),e=[0];let s,r,i,n,f;const l=c.length;for(s=0;s<l;s++){const t=c[s];if(t!==0){if(r=e[e.length-1],c[r]<t){a[s]=r,e.push(s);continue}for(i=0,n=e.length-1;i<n;)f=i+n>>1,c[e[f]]<t?i=f+1:n=f;t<c[e[i]]&&(i>0&&(a[s]=e[i-1]),e[i]=s)}}for(i=e.length,n=e[i-1];i-- >0;)e[i]=n,n=a[n];return e}const jt=c=>c.__isTeleport,N1=Symbol(void 0),l8=Symbol(void 0),v2=Symbol(void 0),n4=Symbol(void 0),z3=[];let E1=null;function A1(c=!1){z3.push(E1=c?null:[])}function Kt(){z3.pop(),E1=z3[z3.length-1]||null}let g3=1;function j5(c){g3+=c}function I7(c){return c.dynamicChildren=g3>0?E1||$2:null,Kt(),g3>0&&E1&&E1.push(c),c}function h2(c,a,e,s,r,i){return I7(C1(c,a,e,s,r,i,!0))}function T4(c,a,e,s,r){return I7(o1(c,a,e,s,r,!0))}function H4(c){return c?c.__v_isVNode===!0:!1}function n3(c,a){return c.type===a.type&&c.key===a.key}const F4="__vInternal",G7=({key:c})=>c!=null?c:null,f4=({ref:c,ref_key:a,ref_for:e})=>c!=null?z1(c)||u1(c)||$(c)?{i:p1,r:c,k:a,f:!!e}:c:null;function C1(c,a=null,e=null,s=0,r=null,i=c===N1?0:1,n=!1,f=!1){const l={__v_isVNode:!0,__v_skip:!0,type:c,props:a,key:a&&G7(a),ref:a&&f4(a),scopeId:S7,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return f?(o8(l,e),i&128&&c.normalize(l)):e&&(l.shapeFlag|=z1(e)?8:16),g3>0&&!n&&E1&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&E1.push(l),l}const o1=Yt;function Yt(c,a=null,e=null,s=0,r=null,i=!1){if((!c||c===P7)&&(c=v2),H4(c)){const f=K2(c,a,!0);return e&&o8(f,e),g3>0&&!i&&E1&&(f.shapeFlag&6?E1[E1.indexOf(c)]=f:E1.push(f)),f.patchFlag|=-2,f}if(om(c)&&(c=c.__vccOpts),a){a=Xt(a);let{class:f,style:l}=a;f&&!z1(f)&&(a.class=G6(f)),r1(l)&&(z7(l)&&!O(l)&&(l=d1({},l)),a.style=g4(l))}const n=z1(c)?1:vt(c)?128:jt(c)?64:r1(c)?4:$(c)?2:0;return C1(c,a,e,s,r,n,i,!0)}function Xt(c){return c?z7(c)||F4 in c?d1({},c):c:null}function K2(c,a,e=!1){const{props:s,ref:r,patchFlag:i,children:n}=c,f=a?cm(s||{},a):s;return{__v_isVNode:!0,__v_skip:!0,type:c.type,props:f,key:f&&G7(f),ref:a&&a.ref?e&&r?O(r)?r.concat(f4(a)):[r,f4(a)]:f4(a):r,scopeId:c.scopeId,slotScopeIds:c.slotScopeIds,children:n,target:c.target,targetAnchor:c.targetAnchor,staticCount:c.staticCount,shapeFlag:c.shapeFlag,patchFlag:a&&c.type!==N1?i===-1?16:i|16:i,dynamicProps:c.dynamicProps,dynamicChildren:c.dynamicChildren,appContext:c.appContext,dirs:c.dirs,transition:c.transition,component:c.component,suspense:c.suspense,ssContent:c.ssContent&&K2(c.ssContent),ssFallback:c.ssFallback&&K2(c.ssFallback),el:c.el,anchor:c.anchor}}function x3(c=" ",a=0){return o1(l8,null,c,a)}function Qt(c,a){const e=o1(n4,null,c);return e.staticCount=a,e}function Jt(c="",a=!1){return a?(A1(),T4(v2,null,c)):o1(v2,null,c)}function W1(c){return c==null||typeof c=="boolean"?o1(v2):O(c)?o1(N1,null,c.slice()):typeof c=="object"?l2(c):o1(l8,null,String(c))}function l2(c){return c.el===null&&c.patchFlag!==-1||c.memo?c:K2(c)}function o8(c,a){let e=0;const{shapeFlag:s}=c;if(a==null)a=null;else if(O(a))e=16;else if(typeof a=="object")if(s&65){const r=a.default;r&&(r._c&&(r._d=!1),o8(c,r()),r._c&&(r._d=!0));return}else{e=32;const r=a._;!r&&!(F4 in a)?a._ctx=p1:r===3&&p1&&(p1.slots._===1?a._=1:(a._=2,c.patchFlag|=1024))}else $(a)?(a={default:a,_ctx:p1},e=32):(a=String(a),s&64?(e=16,a=[x3(a)]):e=8);c.children=a,c.shapeFlag|=e}function cm(...c){const a={};for(let e=0;e<c.length;e++){const s=c[e];for(const r in s)if(r==="class")a.class!==s.class&&(a.class=G6([a.class,s.class]));else if(r==="style")a.style=g4([a.style,s.style]);else if(x4(r)){const i=a[r],n=s[r];n&&i!==n&&!(O(i)&&i.includes(n))&&(a[r]=i?[].concat(i,n):n)}else r!==""&&(a[r]=s[r])}return a}function I1(c,a,e,s=null){_1(c,a,7,[e,s])}const am=$7();let em=0;function sm(c,a,e){const s=c.type,r=(a?a.appContext:c.appContext)||am,i={uid:em++,vnode:c,type:s,parent:a,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new xo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:D7(s,r),emitsOptions:b7(s,r),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:s.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=a?a.root:i,i.emit=ot.bind(null,i),c.ce&&c.ce(i),i}let h1=null;const Y2=c=>{h1=c,c.scope.on()},k2=()=>{h1&&h1.scope.off(),h1=null};function W7(c){return c.vnode.shapeFlag&4}let b3=!1;function rm(c,a=!1){b3=a;const{props:e,children:s}=c.vnode,r=W7(c);Dt(c,e,r,a),Ot(c,s);const i=r?im(c,a):void 0;return b3=!1,i}function im(c,a){const e=c.type;c.accessCache=Object.create(null),c.proxy=v7(new Proxy(c.ctx,Pt));const{setup:s}=e;if(s){const r=c.setupContext=s.length>1?fm(c):null;Y2(c),a3();const i=m2(s,c,0,[c.props,r]);if(e3(),k2(),J0(i)){if(i.then(k2,k2),a)return i.then(n=>{K5(c,n,a)}).catch(n=>{y4(n,c,0)});c.asyncDep=i}else K5(c,i,a)}else Z7(c,a)}function K5(c,a,e){$(a)?c.type.__ssrInlineRender?c.ssrRender=a:c.render=a:r1(a)&&(c.setupState=M7(a)),Z7(c,e)}let Y5;function Z7(c,a,e){const s=c.type;if(!c.render){if(!a&&Y5&&!s.render){const r=s.template||n8(c).template;if(r){const{isCustomElement:i,compilerOptions:n}=c.appContext.config,{delimiters:f,compilerOptions:l}=s,t=d1(d1({isCustomElement:i,delimiters:f},n),l);s.render=Y5(r,t)}}c.render=s.render||q1}Y2(c),a3(),Tt(c),e3(),k2()}function nm(c){return new Proxy(c.attrs,{get(a,e){return w1(c,"get","$attrs"),a[e]}})}function fm(c){const a=s=>{c.exposed=s||{}};let e;return{get attrs(){return e||(e=nm(c))},slots:c.slots,emit:c.emit,expose:a}}function B4(c){if(c.exposed)return c.exposeProxy||(c.exposeProxy=new Proxy(M7(v7(c.exposed)),{get(a,e){if(e in a)return a[e];if(e in v4)return v4[e](c)}}))}function lm(c,a=!0){return $(c)?c.displayName||c.name:c.name||a&&c.__name}function om(c){return $(c)&&"__vccOpts"in c}const n1=(c,a)=>st(c,a,b3);function R4(c,a,e){const s=arguments.length;return s===2?r1(a)&&!O(a)?H4(a)?o1(c,null,[a]):o1(c,a):o1(c,null,a):(s>3?e=Array.prototype.slice.call(arguments,2):s===3&&H4(e)&&(e=[e]),o1(c,a,e))}const tm="3.2.41",mm="http://www.w3.org/2000/svg",b2=typeof document<"u"?document:null,X5=b2&&b2.createElement("template"),Cm={insert:(c,a,e)=>{a.insertBefore(c,e||null)},remove:c=>{const a=c.parentNode;a&&a.removeChild(c)},createElement:(c,a,e,s)=>{const r=a?b2.createElementNS(mm,c):b2.createElement(c,e?{is:e}:void 0);return c==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:c=>b2.createTextNode(c),createComment:c=>b2.createComment(c),setText:(c,a)=>{c.nodeValue=a},setElementText:(c,a)=>{c.textContent=a},parentNode:c=>c.parentNode,nextSibling:c=>c.nextSibling,querySelector:c=>b2.querySelector(c),setScopeId(c,a){c.setAttribute(a,"")},insertStaticContent(c,a,e,s,r,i){const n=e?e.previousSibling:a.lastChild;if(r&&(r===i||r.nextSibling))for(;a.insertBefore(r.cloneNode(!0),e),!(r===i||!(r=r.nextSibling)););else{X5.innerHTML=s?`<svg>${c}</svg>`:c;const f=X5.content;if(s){const l=f.firstChild;for(;l.firstChild;)f.appendChild(l.firstChild);f.removeChild(l)}a.insertBefore(f,e)}return[n?n.nextSibling:a.firstChild,e?e.previousSibling:a.lastChild]}};function zm(c,a,e){const s=c._vtc;s&&(a=(a?[a,...s]:[...s]).join(" ")),a==null?c.removeAttribute("class"):e?c.setAttribute("class",a):c.className=a}function vm(c,a,e){const s=c.style,r=z1(e);if(e&&!r){for(const i in e)N6(s,i,e[i]);if(a&&!z1(a))for(const i in a)e[i]==null&&N6(s,i,"")}else{const i=s.display;r?a!==e&&(s.cssText=e):a&&c.removeAttribute("style"),"_vod"in c&&(s.display=i)}}const Q5=/\s*!important$/;function N6(c,a,e){if(O(e))e.forEach(s=>N6(c,a,s));else if(e==null&&(e=""),a.startsWith("--"))c.setProperty(a,e);else{const s=hm(c,a);Q5.test(e)?c.setProperty(c3(s),e.replace(Q5,""),"important"):c[s]=e}}const J5=["Webkit","Moz","ms"],f6={};function hm(c,a){const e=f6[a];if(e)return e;let s=K1(a);if(s!=="filter"&&s in c)return f6[a]=s;s=N4(s);for(let r=0;r<J5.length;r++){const i=J5[r]+s;if(i in c)return f6[a]=i}return a}const c0="http://www.w3.org/1999/xlink";function Hm(c,a,e,s,r){if(s&&a.startsWith("xlink:"))e==null?c.removeAttributeNS(c0,a.slice(6,a.length)):c.setAttributeNS(c0,a,e);else{const i=Co(a);e==null||i&&!Y0(e)?c.removeAttribute(a):c.setAttribute(a,i?"":e)}}function um(c,a,e,s,r,i,n){if(a==="innerHTML"||a==="textContent"){s&&n(s,r,i),c[a]=e==null?"":e;return}if(a==="value"&&c.tagName!=="PROGRESS"&&!c.tagName.includes("-")){c._value=e;const l=e==null?"":e;(c.value!==l||c.tagName==="OPTION")&&(c.value=l),e==null&&c.removeAttribute(a);return}let f=!1;if(e===""||e==null){const l=typeof c[a];l==="boolean"?e=Y0(e):e==null&&l==="string"?(e="",f=!0):l==="number"&&(e=0,f=!0)}try{c[a]=e}catch{}f&&c.removeAttribute(a)}function D2(c,a,e,s){c.addEventListener(a,e,s)}function Mm(c,a,e,s){c.removeEventListener(a,e,s)}function Vm(c,a,e,s,r=null){const i=c._vei||(c._vei={}),n=i[a];if(s&&n)n.value=s;else{const[f,l]=pm(a);if(s){const t=i[a]=gm(s,r);D2(c,f,t,l)}else n&&(Mm(c,f,n,l),i[a]=void 0)}}const a0=/(?:Once|Passive|Capture)$/;function pm(c){let a;if(a0.test(c)){a={};let s;for(;s=c.match(a0);)c=c.slice(0,c.length-s[0].length),a[s[0].toLowerCase()]=!0}return[c[2]===":"?c.slice(3):c3(c.slice(2)),a]}let l6=0;const dm=Promise.resolve(),Lm=()=>l6||(dm.then(()=>l6=0),l6=Date.now());function gm(c,a){const e=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=e.attached)return;_1(xm(s,e.value),a,5,[s])};return e.value=c,e.attached=Lm(),e}function xm(c,a){if(O(a)){const e=c.stopImmediatePropagation;return c.stopImmediatePropagation=()=>{e.call(c),c._stopped=!0},a.map(s=>r=>!r._stopped&&s&&s(r))}else return a}const e0=/^on[a-z]/,bm=(c,a,e,s,r=!1,i,n,f,l)=>{a==="class"?zm(c,s,r):a==="style"?vm(c,e,s):x4(a)?W6(a)||Vm(c,a,e,s,n):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Sm(c,a,s,r))?um(c,a,s,i,n,f,l):(a==="true-value"?c._trueValue=s:a==="false-value"&&(c._falseValue=s),Hm(c,a,s,r))};function Sm(c,a,e,s){return s?!!(a==="innerHTML"||a==="textContent"||a in c&&e0.test(a)&&$(e)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&c.tagName==="INPUT"||a==="type"&&c.tagName==="TEXTAREA"||e0.test(a)&&z1(e)?!1:a in c}const s0=c=>{const a=c.props["onUpdate:modelValue"]||!1;return O(a)?e=>r4(a,e):a};function Nm(c){c.target.composing=!0}function r0(c){const a=c.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const wm={created(c,{modifiers:{lazy:a,trim:e,number:s}},r){c._assign=s0(r);const i=s||r.props&&r.props.type==="number";D2(c,a?"change":"input",n=>{if(n.target.composing)return;let f=c.value;e&&(f=f.trim()),i&&(f=H6(f)),c._assign(f)}),e&&D2(c,"change",()=>{c.value=c.value.trim()}),a||(D2(c,"compositionstart",Nm),D2(c,"compositionend",r0),D2(c,"change",r0))},mounted(c,{value:a}){c.value=a==null?"":a},beforeUpdate(c,{value:a,modifiers:{lazy:e,trim:s,number:r}},i){if(c._assign=s0(i),c.composing||document.activeElement===c&&c.type!=="range"&&(e||s&&c.value.trim()===a||(r||c.type==="number")&&H6(c.value)===a))return;const n=a==null?"":a;c.value!==n&&(c.value=n)}},ym=d1({patchProp:bm},Cm);let i0;function km(){return i0||(i0=Gt(ym))}const Am=(...c)=>{const a=km().createApp(...c),{mount:e}=a;return a.mount=s=>{const r=Pm(s);if(!r)return;const i=a._component;!$(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const n=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),n},a};function Pm(c){return z1(c)?document.querySelector(c):c}const T2=(c,a)=>{const e=c.__vccOpts||c;for(const[s,r]of a)e[s]=r;return e},Tm={},Fm={id:"background",class:"min-h-screen"},Bm={class:"sticky top-0 flex justify-end bg-gradient-to-r from-transparent via-transparent to-teal-800 px-4 py-5 space-x-2"},Rm={class:"container mx-auto"};function Em(c,a,e,s,r,i){const n=P4("router-link");return A1(),h2("div",Fm,[C1("div",Bm,[o1(n,{to:"/",class:"bg-teal-500 rounded-lg p-2 font-itim text-lg text-black hover:bg-teal-600"},{default:z4(()=>[x3("Home")]),_:1}),o1(n,{to:"/profile",class:"bg-teal-500 rounded-lg p-2 font-itim text-lg text-black hover:bg-teal-600"},{default:z4(()=>[x3("Profile")]),_:1})]),C1("div",Rm,[F7(c.$slots,"default")])])}const Dm=T2(Tm,[["render",Em]]),qm={};function _m(c,a,e,s,r,i){return A1(),h2(N1,null,[x3(" this is default layout "),C1("div",null,[F7(c.$slots,"default")])],64)}const n0=T2(qm,[["render",_m]]),Om={components:{Main:Dm,Default:n0},computed:{layout(){return console.log(this.$route.meta),this.$route.meta.layout||n0}}};function $m(c,a,e,s,r,i){const n=P4("RouterView");return A1(),T4(kt(i.layout),null,{default:z4(()=>[o1(n)]),_:1})}const Um=T2(Om,[["render",$m]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const q2=typeof window<"u";function Im(c){return c.__esModule||c[Symbol.toStringTag]==="Module"}const K=Object.assign;function o6(c,a){const e={};for(const s in a){const r=a[s];e[s]=O1(r)?r.map(c):c(r)}return e}const v3=()=>{},O1=Array.isArray,Gm=/\/$/,Wm=c=>c.replace(Gm,"");function t6(c,a,e="/"){let s,r={},i="",n="";const f=a.indexOf("#");let l=a.indexOf("?");return f<l&&f>=0&&(l=-1),l>-1&&(s=a.slice(0,l),i=a.slice(l+1,f>-1?f:a.length),r=c(i)),f>-1&&(s=s||a.slice(0,f),n=a.slice(f,a.length)),s=Ym(s!=null?s:a,e),{fullPath:s+(i&&"?")+i+n,path:s,query:r,hash:n}}function Zm(c,a){const e=a.query?c(a.query):"";return a.path+(e&&"?")+e+(a.hash||"")}function f0(c,a){return!a||!c.toLowerCase().startsWith(a.toLowerCase())?c:c.slice(a.length)||"/"}function jm(c,a,e){const s=a.matched.length-1,r=e.matched.length-1;return s>-1&&s===r&&X2(a.matched[s],e.matched[r])&&j7(a.params,e.params)&&c(a.query)===c(e.query)&&a.hash===e.hash}function X2(c,a){return(c.aliasOf||c)===(a.aliasOf||a)}function j7(c,a){if(Object.keys(c).length!==Object.keys(a).length)return!1;for(const e in c)if(!Km(c[e],a[e]))return!1;return!0}function Km(c,a){return O1(c)?l0(c,a):O1(a)?l0(a,c):c===a}function l0(c,a){return O1(a)?c.length===a.length&&c.every((e,s)=>e===a[s]):c.length===1&&c[0]===a}function Ym(c,a){if(c.startsWith("/"))return c;if(!c)return a;const e=a.split("/"),s=c.split("/");let r=e.length-1,i,n;for(i=0;i<s.length;i++)if(n=s[i],n!==".")if(n==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var S3;(function(c){c.pop="pop",c.push="push"})(S3||(S3={}));var h3;(function(c){c.back="back",c.forward="forward",c.unknown=""})(h3||(h3={}));function Xm(c){if(!c)if(q2){const a=document.querySelector("base");c=a&&a.getAttribute("href")||"/",c=c.replace(/^\w+:\/\/[^\/]+/,"")}else c="/";return c[0]!=="/"&&c[0]!=="#"&&(c="/"+c),Wm(c)}const Qm=/^[^#]+#/;function Jm(c,a){return c.replace(Qm,"#")+a}function cC(c,a){const e=document.documentElement.getBoundingClientRect(),s=c.getBoundingClientRect();return{behavior:a.behavior,left:s.left-e.left-(a.left||0),top:s.top-e.top-(a.top||0)}}const E4=()=>({left:window.pageXOffset,top:window.pageYOffset});function aC(c){let a;if("el"in c){const e=c.el,s=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?s?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;a=cC(r,c)}else a=c;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function o0(c,a){return(history.state?history.state.position-a:-1)+c}const w6=new Map;function eC(c,a){w6.set(c,a)}function sC(c){const a=w6.get(c);return w6.delete(c),a}let rC=()=>location.protocol+"//"+location.host;function K7(c,a){const{pathname:e,search:s,hash:r}=a,i=c.indexOf("#");if(i>-1){let f=r.includes(c.slice(i))?c.slice(i).length:1,l=r.slice(f);return l[0]!=="/"&&(l="/"+l),f0(l,"")}return f0(e,c)+s+r}function iC(c,a,e,s){let r=[],i=[],n=null;const f=({state:v})=>{const H=K7(c,location),b=e.value,y=a.value;let P=0;if(v){if(e.value=H,a.value=v,n&&n===b){n=null;return}P=y?v.position-y.position:0}else s(H);r.forEach(u=>{u(e.value,b,{delta:P,type:S3.pop,direction:P?P>0?h3.forward:h3.back:h3.unknown})})};function l(){n=e.value}function t(v){r.push(v);const H=()=>{const b=r.indexOf(v);b>-1&&r.splice(b,1)};return i.push(H),H}function o(){const{history:v}=window;!v.state||v.replaceState(K({},v.state,{scroll:E4()}),"")}function C(){for(const v of i)v();i=[],window.removeEventListener("popstate",f),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",f),window.addEventListener("beforeunload",o),{pauseListeners:l,listen:t,destroy:C}}function t0(c,a,e,s=!1,r=!1){return{back:c,current:a,forward:e,replaced:s,position:window.history.length,scroll:r?E4():null}}function nC(c){const{history:a,location:e}=window,s={value:K7(c,e)},r={value:a.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function i(l,t,o){const C=c.indexOf("#"),v=C>-1?(e.host&&document.querySelector("base")?c:c.slice(C))+l:rC()+c+l;try{a[o?"replaceState":"pushState"](t,"",v),r.value=t}catch(H){console.error(H),e[o?"replace":"assign"](v)}}function n(l,t){const o=K({},a.state,t0(r.value.back,l,r.value.forward,!0),t,{position:r.value.position});i(l,o,!0),s.value=l}function f(l,t){const o=K({},r.value,a.state,{forward:l,scroll:E4()});i(o.current,o,!0);const C=K({},t0(s.value,l,null),{position:o.position+1},t);i(l,C,!1),s.value=l}return{location:s,state:r,push:f,replace:n}}function fC(c){c=Xm(c);const a=nC(c),e=iC(c,a.state,a.location,a.replace);function s(i,n=!0){n||e.pauseListeners(),history.go(i)}const r=K({location:"",base:c,go:s,createHref:Jm.bind(null,c)},a,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>a.state.value}),r}function lC(c){return typeof c=="string"||c&&typeof c=="object"}function Y7(c){return typeof c=="string"||typeof c=="symbol"}const n2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},X7=Symbol("");var m0;(function(c){c[c.aborted=4]="aborted",c[c.cancelled=8]="cancelled",c[c.duplicated=16]="duplicated"})(m0||(m0={}));function Q2(c,a){return K(new Error,{type:c,[X7]:!0},a)}function Y1(c,a){return c instanceof Error&&X7 in c&&(a==null||!!(c.type&a))}const C0="[^/]+?",oC={sensitive:!1,strict:!1,start:!0,end:!0},tC=/[.+*?^${}()[\]/\\]/g;function mC(c,a){const e=K({},oC,a),s=[];let r=e.start?"^":"";const i=[];for(const t of c){const o=t.length?[]:[90];e.strict&&!t.length&&(r+="/");for(let C=0;C<t.length;C++){const v=t[C];let H=40+(e.sensitive?.25:0);if(v.type===0)C||(r+="/"),r+=v.value.replace(tC,"\\$&"),H+=40;else if(v.type===1){const{value:b,repeatable:y,optional:P,regexp:u}=v;i.push({name:b,repeatable:y,optional:P});const L=u||C0;if(L!==C0){H+=10;try{new RegExp(`(${L})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${b}" (${L}): `+q.message)}}let B=y?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;C||(B=P&&t.length<2?`(?:/${B})`:"/"+B),P&&(B+="?"),r+=B,H+=20,P&&(H+=-8),y&&(H+=-20),L===".*"&&(H+=-50)}o.push(H)}s.push(o)}if(e.strict&&e.end){const t=s.length-1;s[t][s[t].length-1]+=.7000000000000001}e.strict||(r+="/?"),e.end?r+="$":e.strict&&(r+="(?:/|$)");const n=new RegExp(r,e.sensitive?"":"i");function f(t){const o=t.match(n),C={};if(!o)return null;for(let v=1;v<o.length;v++){const H=o[v]||"",b=i[v-1];C[b.name]=H&&b.repeatable?H.split("/"):H}return C}function l(t){let o="",C=!1;for(const v of c){(!C||!o.endsWith("/"))&&(o+="/"),C=!1;for(const H of v)if(H.type===0)o+=H.value;else if(H.type===1){const{value:b,repeatable:y,optional:P}=H,u=b in t?t[b]:"";if(O1(u)&&!y)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const L=O1(u)?u.join("/"):u;if(!L)if(P)v.length<2&&(o.endsWith("/")?o=o.slice(0,-1):C=!0);else throw new Error(`Missing required param "${b}"`);o+=L}}return o||"/"}return{re:n,score:s,keys:i,parse:f,stringify:l}}function CC(c,a){let e=0;for(;e<c.length&&e<a.length;){const s=a[e]-c[e];if(s)return s;e++}return c.length<a.length?c.length===1&&c[0]===40+40?-1:1:c.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function zC(c,a){let e=0;const s=c.score,r=a.score;for(;e<s.length&&e<r.length;){const i=CC(s[e],r[e]);if(i)return i;e++}if(Math.abs(r.length-s.length)===1){if(z0(s))return 1;if(z0(r))return-1}return r.length-s.length}function z0(c){const a=c[c.length-1];return c.length>0&&a[a.length-1]<0}const vC={type:0,value:""},hC=/[a-zA-Z0-9_]/;function HC(c){if(!c)return[[]];if(c==="/")return[[vC]];if(!c.startsWith("/"))throw new Error(`Invalid path "${c}"`);function a(H){throw new Error(`ERR (${e})/"${t}": ${H}`)}let e=0,s=e;const r=[];let i;function n(){i&&r.push(i),i=[]}let f=0,l,t="",o="";function C(){!t||(e===0?i.push({type:0,value:t}):e===1||e===2||e===3?(i.length>1&&(l==="*"||l==="+")&&a(`A repeatable param (${t}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:t,regexp:o,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):a("Invalid state to consume buffer"),t="")}function v(){t+=l}for(;f<c.length;){if(l=c[f++],l==="\\"&&e!==2){s=e,e=4;continue}switch(e){case 0:l==="/"?(t&&C(),n()):l===":"?(C(),e=1):v();break;case 4:v(),e=s;break;case 1:l==="("?e=2:hC.test(l)?v():(C(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--);break;case 2:l===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+l:e=3:o+=l;break;case 3:C(),e=0,l!=="*"&&l!=="?"&&l!=="+"&&f--,o="";break;default:a("Unknown state");break}}return e===2&&a(`Unfinished custom RegExp for param "${t}"`),C(),n(),r}function uC(c,a,e){const s=mC(HC(c.path),e),r=K(s,{record:c,parent:a,children:[],alias:[]});return a&&!r.record.aliasOf==!a.record.aliasOf&&a.children.push(r),r}function MC(c,a){const e=[],s=new Map;a=H0({strict:!1,end:!0,sensitive:!1},a);function r(o){return s.get(o)}function i(o,C,v){const H=!v,b=VC(o);b.aliasOf=v&&v.record;const y=H0(a,o),P=[b];if("alias"in o){const B=typeof o.alias=="string"?[o.alias]:o.alias;for(const q of B)P.push(K({},b,{components:v?v.record.components:b.components,path:q,aliasOf:v?v.record:b}))}let u,L;for(const B of P){const{path:q}=B;if(C&&q[0]!=="/"){const W=C.record.path,s1=W[W.length-1]==="/"?"":"/";B.path=C.record.path+(q&&s1+q)}if(u=uC(B,C,y),v?v.alias.push(u):(L=L||u,L!==u&&L.alias.push(u),H&&o.name&&!h0(u)&&n(o.name)),b.children){const W=b.children;for(let s1=0;s1<W.length;s1++)i(W[s1],u,v&&v.children[s1])}v=v||u,(u.record.components&&Object.keys(u.record.components).length||u.record.name||u.record.redirect)&&l(u)}return L?()=>{n(L)}:v3}function n(o){if(Y7(o)){const C=s.get(o);C&&(s.delete(o),e.splice(e.indexOf(C),1),C.children.forEach(n),C.alias.forEach(n))}else{const C=e.indexOf(o);C>-1&&(e.splice(C,1),o.record.name&&s.delete(o.record.name),o.children.forEach(n),o.alias.forEach(n))}}function f(){return e}function l(o){let C=0;for(;C<e.length&&zC(o,e[C])>=0&&(o.record.path!==e[C].record.path||!Q7(o,e[C]));)C++;e.splice(C,0,o),o.record.name&&!h0(o)&&s.set(o.record.name,o)}function t(o,C){let v,H={},b,y;if("name"in o&&o.name){if(v=s.get(o.name),!v)throw Q2(1,{location:o});y=v.record.name,H=K(v0(C.params,v.keys.filter(L=>!L.optional).map(L=>L.name)),o.params&&v0(o.params,v.keys.map(L=>L.name))),b=v.stringify(H)}else if("path"in o)b=o.path,v=e.find(L=>L.re.test(b)),v&&(H=v.parse(b),y=v.record.name);else{if(v=C.name?s.get(C.name):e.find(L=>L.re.test(C.path)),!v)throw Q2(1,{location:o,currentLocation:C});y=v.record.name,H=K({},C.params,o.params),b=v.stringify(H)}const P=[];let u=v;for(;u;)P.unshift(u.record),u=u.parent;return{name:y,path:b,params:H,matched:P,meta:dC(P)}}return c.forEach(o=>i(o)),{addRoute:i,resolve:t,removeRoute:n,getRoutes:f,getRecordMatcher:r}}function v0(c,a){const e={};for(const s of a)s in c&&(e[s]=c[s]);return e}function VC(c){return{path:c.path,redirect:c.redirect,name:c.name,meta:c.meta||{},aliasOf:void 0,beforeEnter:c.beforeEnter,props:pC(c),children:c.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in c?c.components||null:c.component&&{default:c.component}}}function pC(c){const a={},e=c.props||!1;if("component"in c)a.default=e;else for(const s in c.components)a[s]=typeof e=="boolean"?e:e[s];return a}function h0(c){for(;c;){if(c.record.aliasOf)return!0;c=c.parent}return!1}function dC(c){return c.reduce((a,e)=>K(a,e.meta),{})}function H0(c,a){const e={};for(const s in c)e[s]=s in a?a[s]:c[s];return e}function Q7(c,a){return a.children.some(e=>e===c||Q7(c,e))}const J7=/#/g,LC=/&/g,gC=/\//g,xC=/=/g,bC=/\?/g,c9=/\+/g,SC=/%5B/g,NC=/%5D/g,a9=/%5E/g,wC=/%60/g,e9=/%7B/g,yC=/%7C/g,s9=/%7D/g,kC=/%20/g;function t8(c){return encodeURI(""+c).replace(yC,"|").replace(SC,"[").replace(NC,"]")}function AC(c){return t8(c).replace(e9,"{").replace(s9,"}").replace(a9,"^")}function y6(c){return t8(c).replace(c9,"%2B").replace(kC,"+").replace(J7,"%23").replace(LC,"%26").replace(wC,"`").replace(e9,"{").replace(s9,"}").replace(a9,"^")}function PC(c){return y6(c).replace(xC,"%3D")}function TC(c){return t8(c).replace(J7,"%23").replace(bC,"%3F")}function FC(c){return c==null?"":TC(c).replace(gC,"%2F")}function u4(c){try{return decodeURIComponent(""+c)}catch{}return""+c}function BC(c){const a={};if(c===""||c==="?")return a;const s=(c[0]==="?"?c.slice(1):c).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(c9," "),n=i.indexOf("="),f=u4(n<0?i:i.slice(0,n)),l=n<0?null:u4(i.slice(n+1));if(f in a){let t=a[f];O1(t)||(t=a[f]=[t]),t.push(l)}else a[f]=l}return a}function u0(c){let a="";for(let e in c){const s=c[e];if(e=PC(e),s==null){s!==void 0&&(a+=(a.length?"&":"")+e);continue}(O1(s)?s.map(i=>i&&y6(i)):[s&&y6(s)]).forEach(i=>{i!==void 0&&(a+=(a.length?"&":"")+e,i!=null&&(a+="="+i))})}return a}function RC(c){const a={};for(const e in c){const s=c[e];s!==void 0&&(a[e]=O1(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return a}const EC=Symbol(""),M0=Symbol(""),m8=Symbol(""),r9=Symbol(""),k6=Symbol("");function f3(){let c=[];function a(s){return c.push(s),()=>{const r=c.indexOf(s);r>-1&&c.splice(r,1)}}function e(){c=[]}return{add:a,list:()=>c,reset:e}}function o2(c,a,e,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((n,f)=>{const l=C=>{C===!1?f(Q2(4,{from:e,to:a})):C instanceof Error?f(C):lC(C)?f(Q2(2,{from:a,to:C})):(i&&s.enterCallbacks[r]===i&&typeof C=="function"&&i.push(C),n())},t=c.call(s&&s.instances[r],a,e,l);let o=Promise.resolve(t);c.length<3&&(o=o.then(l)),o.catch(C=>f(C))})}function m6(c,a,e,s){const r=[];for(const i of c)for(const n in i.components){let f=i.components[n];if(!(a!=="beforeRouteEnter"&&!i.instances[n]))if(DC(f)){const t=(f.__vccOpts||f)[a];t&&r.push(o2(t,e,s,i,n))}else{let l=f();r.push(()=>l.then(t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${i.path}"`));const o=Im(t)?t.default:t;i.components[n]=o;const v=(o.__vccOpts||o)[a];return v&&o2(v,e,s,i,n)()}))}}return r}function DC(c){return typeof c=="object"||"displayName"in c||"props"in c||"__vccOpts"in c}function V0(c){const a=C2(m8),e=C2(r9),s=n1(()=>a.resolve(G2(c.to))),r=n1(()=>{const{matched:l}=s.value,{length:t}=l,o=l[t-1],C=e.matched;if(!o||!C.length)return-1;const v=C.findIndex(X2.bind(null,o));if(v>-1)return v;const H=p0(l[t-2]);return t>1&&p0(o)===H&&C[C.length-1].path!==H?C.findIndex(X2.bind(null,l[t-2])):v}),i=n1(()=>r.value>-1&&$C(e.params,s.value.params)),n=n1(()=>r.value>-1&&r.value===e.matched.length-1&&j7(e.params,s.value.params));function f(l={}){return OC(l)?a[G2(c.replace)?"replace":"push"](G2(c.to)).catch(v3):Promise.resolve()}return{route:s,href:n1(()=>s.value.href),isActive:i,isExactActive:n,navigate:f}}const qC=T3({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:V0,setup(c,{slots:a}){const e=P3(V0(c)),{options:s}=C2(m8),r=n1(()=>({[d0(c.activeClass,s.linkActiveClass,"router-link-active")]:e.isActive,[d0(c.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=a.default&&a.default(e);return c.custom?i:R4("a",{"aria-current":e.isExactActive?c.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},i)}}}),_C=qC;function OC(c){if(!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)&&!c.defaultPrevented&&!(c.button!==void 0&&c.button!==0)){if(c.currentTarget&&c.currentTarget.getAttribute){const a=c.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return c.preventDefault&&c.preventDefault(),!0}}function $C(c,a){for(const e in a){const s=a[e],r=c[e];if(typeof s=="string"){if(s!==r)return!1}else if(!O1(r)||r.length!==s.length||s.some((i,n)=>i!==r[n]))return!1}return!0}function p0(c){return c?c.aliasOf?c.aliasOf.path:c.path:""}const d0=(c,a,e)=>c!=null?c:a!=null?a:e,UC=T3({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(c,{attrs:a,slots:e}){const s=C2(k6),r=n1(()=>c.route||s.value),i=C2(M0,0),n=n1(()=>{let t=G2(i);const{matched:o}=r.value;let C;for(;(C=o[t])&&!C.components;)t++;return t}),f=n1(()=>r.value.matched[n.value]);i4(M0,n1(()=>n.value+1)),i4(EC,f),i4(k6,r);const l=Qo();return m3(()=>[l.value,f.value,c.name],([t,o,C],[v,H,b])=>{o&&(o.instances[C]=t,H&&H!==o&&t&&t===v&&(o.leaveGuards.size||(o.leaveGuards=H.leaveGuards),o.updateGuards.size||(o.updateGuards=H.updateGuards))),t&&o&&(!H||!X2(o,H)||!v)&&(o.enterCallbacks[C]||[]).forEach(y=>y(t))},{flush:"post"}),()=>{const t=r.value,o=c.name,C=f.value,v=C&&C.components[o];if(!v)return L0(e.default,{Component:v,route:t});const H=C.props[o],b=H?H===!0?t.params:typeof H=="function"?H(t):H:null,P=R4(v,K({},b,a,{onVnodeUnmounted:u=>{u.component.isUnmounted&&(C.instances[o]=null)},ref:l}));return L0(e.default,{Component:P,route:t})||P}}});function L0(c,a){if(!c)return null;const e=c(a);return e.length===1?e[0]:e}const IC=UC;function GC(c){const a=MC(c.routes,c),e=c.parseQuery||BC,s=c.stringifyQuery||u0,r=c.history,i=f3(),n=f3(),f=f3(),l=Jo(n2);let t=n2;q2&&c.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=o6.bind(null,V=>""+V),C=o6.bind(null,FC),v=o6.bind(null,u4);function H(V,k){let N,R;return Y7(V)?(N=a.getRecordMatcher(V),R=k):R=V,a.addRoute(R,N)}function b(V){const k=a.getRecordMatcher(V);k&&a.removeRoute(k)}function y(){return a.getRoutes().map(V=>V.record)}function P(V){return!!a.getRecordMatcher(V)}function u(V,k){if(k=K({},k||l.value),typeof V=="string"){const m=t6(e,V,k.path),z=a.resolve({path:m.path},k),h=r.createHref(m.fullPath);return K(m,z,{params:v(z.params),hash:u4(m.hash),redirectedFrom:void 0,href:h})}let N;if("path"in V)N=K({},V,{path:t6(e,V.path,k.path).path});else{const m=K({},V.params);for(const z in m)m[z]==null&&delete m[z];N=K({},V,{params:C(V.params)}),k.params=C(k.params)}const R=a.resolve(N,k),Z=V.hash||"";R.params=o(v(R.params));const i1=Zm(s,K({},V,{hash:AC(Z),path:R.path})),U=r.createHref(i1);return K({fullPath:i1,hash:Z,query:s===u0?RC(V.query):V.query||{}},R,{redirectedFrom:void 0,href:U})}function L(V){return typeof V=="string"?t6(e,V,l.value.path):K({},V)}function B(V,k){if(t!==V)return Q2(8,{from:k,to:V})}function q(V){return f1(V)}function W(V){return q(K(L(V),{replace:!0}))}function s1(V){const k=V.matched[V.matched.length-1];if(k&&k.redirect){const{redirect:N}=k;let R=typeof N=="function"?N(V):N;return typeof R=="string"&&(R=R.includes("?")||R.includes("#")?R=L(R):{path:R},R.params={}),K({query:V.query,hash:V.hash,params:"path"in R?{}:V.params},R)}}function f1(V,k){const N=t=u(V),R=l.value,Z=V.state,i1=V.force,U=V.replace===!0,m=s1(N);if(m)return f1(K(L(m),{state:typeof m=="object"?K({},Z,m.state):Z,force:i1,replace:U}),k||N);const z=N;z.redirectedFrom=k;let h;return!i1&&jm(s,R,N)&&(h=Q2(16,{to:z,from:R}),p2(R,R,!0,!1)),(h?Promise.resolve(h):M1(z,R)).catch(M=>Y1(M)?Y1(M,2)?M:P1(M):J(M,z,R)).then(M=>{if(M){if(Y1(M,2))return f1(K({replace:U},L(M.to),{state:typeof M.to=="object"?K({},Z,M.to.state):Z,force:i1}),k||z)}else M=r2(z,R,!0,U,Z);return k1(z,R,M),M})}function b1(V,k){const N=B(V,k);return N?Promise.reject(N):Promise.resolve()}function M1(V,k){let N;const[R,Z,i1]=WC(V,k);N=m6(R.reverse(),"beforeRouteLeave",V,k);for(const m of R)m.leaveGuards.forEach(z=>{N.push(o2(z,V,k))});const U=b1.bind(null,V,k);return N.push(U),E2(N).then(()=>{N=[];for(const m of i.list())N.push(o2(m,V,k));return N.push(U),E2(N)}).then(()=>{N=m6(Z,"beforeRouteUpdate",V,k);for(const m of Z)m.updateGuards.forEach(z=>{N.push(o2(z,V,k))});return N.push(U),E2(N)}).then(()=>{N=[];for(const m of V.matched)if(m.beforeEnter&&!k.matched.includes(m))if(O1(m.beforeEnter))for(const z of m.beforeEnter)N.push(o2(z,V,k));else N.push(o2(m.beforeEnter,V,k));return N.push(U),E2(N)}).then(()=>(V.matched.forEach(m=>m.enterCallbacks={}),N=m6(i1,"beforeRouteEnter",V,k),N.push(U),E2(N))).then(()=>{N=[];for(const m of n.list())N.push(o2(m,V,k));return N.push(U),E2(N)}).catch(m=>Y1(m,8)?m:Promise.reject(m))}function k1(V,k,N){for(const R of f.list())R(V,k,N)}function r2(V,k,N,R,Z){const i1=B(V,k);if(i1)return i1;const U=k===n2,m=q2?history.state:{};N&&(R||U?r.replace(V.fullPath,K({scroll:U&&m&&m.scroll},Z)):r.push(V.fullPath,Z)),l.value=V,p2(V,k,N,U),P1()}let $1;function F2(){$1||($1=r.listen((V,k,N)=>{if(!$3.listening)return;const R=u(V),Z=s1(R);if(Z){f1(K(Z,{replace:!0}),R).catch(v3);return}t=R;const i1=l.value;q2&&eC(o0(i1.fullPath,N.delta),E4()),M1(R,i1).catch(U=>Y1(U,12)?U:Y1(U,2)?(f1(U.to,R).then(m=>{Y1(m,20)&&!N.delta&&N.type===S3.pop&&r.go(-1,!1)}).catch(v3),Promise.reject()):(N.delta&&r.go(-N.delta,!1),J(U,R,i1))).then(U=>{U=U||r2(R,i1,!1),U&&(N.delta&&!Y1(U,8)?r.go(-N.delta,!1):N.type===S3.pop&&Y1(U,20)&&r.go(-1,!1)),k1(R,i1,U)}).catch(v3)}))}let V2=f3(),r3=f3(),t1;function J(V,k,N){P1(V);const R=r3.list();return R.length?R.forEach(Z=>Z(V,k,N)):console.error(V),Promise.reject(V)}function Y(){return t1&&l.value!==n2?Promise.resolve():new Promise((V,k)=>{V2.add([V,k])})}function P1(V){return t1||(t1=!V,F2(),V2.list().forEach(([k,N])=>V?N(V):k()),V2.reset()),V}function p2(V,k,N,R){const{scrollBehavior:Z}=c;if(!q2||!Z)return Promise.resolve();const i1=!N&&sC(o0(V.fullPath,0))||(R||!N)&&history.state&&history.state.scroll||null;return d7().then(()=>Z(V,k,i1)).then(U=>U&&aC(U)).catch(U=>J(U,V,k))}const T1=V=>r.go(V);let L1;const B2=new Set,$3={currentRoute:l,listening:!0,addRoute:H,removeRoute:b,hasRoute:P,getRoutes:y,resolve:u,options:c,push:q,replace:W,go:T1,back:()=>T1(-1),forward:()=>T1(1),beforeEach:i.add,beforeResolve:n.add,afterEach:f.add,onError:r3.add,isReady:Y,install(V){const k=this;V.component("RouterLink",_C),V.component("RouterView",IC),V.config.globalProperties.$router=k,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>G2(l)}),q2&&!L1&&l.value===n2&&(L1=!0,q(r.location).catch(Z=>{}));const N={};for(const Z in n2)N[Z]=n1(()=>l.value[Z]);V.provide(m8,k),V.provide(r9,P3(N)),V.provide(k6,l);const R=V.unmount;B2.add(V),V.unmount=function(){B2.delete(V),B2.size<1&&(t=n2,$1&&$1(),$1=null,l.value=n2,L1=!1,t1=!1),R()}}};return $3}function E2(c){return c.reduce((a,e)=>a.then(()=>e()),Promise.resolve())}function WC(c,a){const e=[],s=[],r=[],i=Math.max(a.matched.length,c.matched.length);for(let n=0;n<i;n++){const f=a.matched[n];f&&(c.matched.find(t=>X2(t,f))?s.push(f):e.push(f));const l=c.matched[n];l&&(a.matched.find(t=>X2(t,l))||r.push(l))}return[e,s,r]}const ZC={},jC={class:"flex justify-center items-center min-h-screen"},KC=Qt('<div class="w-1/2 text-center px-5 py-9 backdrop-blur-sm bg-gray-800/40 rounded-lg animate-fadeIn"><div class="text-5xl font-Titan text-white"> Animal Power </div><div class="text-4xl font-bold font-itim text-white"> \u0E1E\u0E27\u0E01\u0E40\u0E23\u0E32\u0E1E\u0E25\u0E31\u0E07\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E1B\u0E48\u0E32 </div><div class="mt-10 text-xl font-itim w-2/3 mx-auto text-white"> \u0E1E\u0E27\u0E01\u0E40\u0E23\u0E32\u0E01\u0E25\u0E38\u0E48\u0E21\u0E1E\u0E25\u0E31\u0E07\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E1B\u0E48\u0E32 \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E33\u0E07\u0E32\u0E19\u0E44\u0E14\u0E49\u0E17\u0E19\u0E17\u0E32\u0E19\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E0A\u0E49\u0E32\u0E07 \u0E07\u0E32\u0E19\u0E0A\u0E49\u0E32\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E40\u0E15\u0E48\u0E32 \u0E21\u0E35\u0E40\u0E02\u0E32\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E04\u0E27\u0E32\u0E22 \u0E15\u0E32\u0E25\u0E32\u0E22\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E22\u0E38\u0E07 \u0E17\u0E33\u0E07\u0E32\u0E19\u0E2B\u0E32\u0E21\u0E23\u0E38\u0E48\u0E07 \u0E21\u0E38\u0E48\u0E07\u0E2A\u0E39\u0E48\u0E19\u0E01\u0E2E\u0E39\u0E01 </div><div class="mt-4"><button class="text-xl font-bold text-white font-itim p-3 rounded-lg bg-purple-500 shadow-xl shadow-purple-400/50 transition ease-in-out delay-100 hover:bg-purple-600 hover:shadow-purple-500/50"> \u0E14\u0E39\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2A\u0E31\u0E15\u0E27\u0E4C\u0E1B\u0E48\u0E32 </button></div></div>',1),YC=[KC];function XC(c,a){return A1(),h2("div",jC,YC)}const QC=T2(ZC,[["render",XC]]),JC={props:{name:{type:String,default:"A B"},birthday:{type:String,default:"01 September 1000"},work:{type:String,default:"at home"},content:{type:String,default:""},image:{type:String,default:"/assets/images/profile.jpg"}},methods:{getUrlImage(c){return{"background-image":'url("./src/'+c+'")'}}}},cz={class:"rounded-lg border-2 py-6 shadow-lg backdrop-blur-2xl bg-white/50 transition duration-300 ease-in-out hover:bg-teal-700 hover:scale-105"},az={class:"relative h-60 w-60 rounded-full overflow-hidden bg-white mx-auto border-gray-700 border-2"},ez={class:"w-2/3 mx-auto"},sz={class:"text-xl font-bold"},rz={class:"text-lg"},iz={class:"text-lg font-normal"},nz={class:"w-2/3 mx-auto text-right space-x-3 border-t-2 p-2 mt-5"};function fz(c,a,e,s,r,i){const n=P4("font-awesome-icon");return A1(),h2("div",cz,[C1("div",az,[C1("div",{class:"h-full bg-cover bg-center bg-no-repeat",style:g4(i.getUrlImage(e.image))},null,4),x3(" /> ")]),C1("div",ez,[C1("div",sz,t3(e.name),1),C1("div",rz,t3(e.birthday),1),C1("div",iz,t3(e.content),1)]),C1("div",nz,[o1(n,{icon:"fa-brands fa-twitter",class:"text-2xl"}),o1(n,{icon:"fa-brands fa-facebook",class:"text-2xl"}),o1(n,{icon:"fa-brands fa-github",class:"text-2xl"})])])}const lz=T2(JC,[["render",fz]]),oz={data(){return{members:[{name:"Narongrit thammapalo",birthday:"25 September 2022",work:"work at CNC",content:"KU79",image:"/assets/images/profile.jpg",isMember:!0,score:12},{name:"Patwo thammapalo",birthday:"20 September 2021",work:"work at CNC",content:"KU80",image:"/assets/images/profile2.jpg",isMember:!0,score:100},{name:"Tirion Fording",birthday:"14 September 2000",work:"work at KU",content:"KU99",image:"/assets/images/profile3.jpg",isMember:!0,score:100}]}},components:{profileCard:lz}},tz={class:"flex items-center justify-center space-x-5 h-screen"};function mz(c,a,e,s,r,i){const n=P4("profile-card");return A1(),h2("div",tz,[(A1(!0),h2(N1,null,At(r.members,f=>(A1(),T4(n,{class:"w-1/4",key:f,name:f.name,work:f.work,birthday:f.birthday,content:f.content,image:f.image},null,8,["name","work","birthday","content","image"]))),128))])}const Cz=T2(oz,[["render",mz]]),zz={data(){return{count:0,dropdown:!1,name:"ford"}}},vz=C1("div",null,"this is onclick dropdown",-1),hz={key:0,class:"rounded-lg bg-red-400 animate-fadeIn"},Hz=C1("div",null,"this is onchange",-1),uz=C1("div",null,"this is v-model",-1);function Mz(c,a,e,s,r,i){return A1(),h2("div",null,[vz,C1("button",{class:"p-2 bg-slate-400",onClick:a[0]||(a[0]=n=>r.dropdown=!r.dropdown)},"menu"),r.dropdown?(A1(),h2("div",hz," this is dropdown ")):Jt("",!0),Hz,C1("input",{class:"p-2 border-2",type:"text",onChange:a[1]||(a[1]=n=>r.count++)},null,32),C1("div",null," count is "+t3(r.count),1),uz,yt(C1("input",{"onUpdate:modelValue":a[2]||(a[2]=n=>r.name=n)},null,512),[[wm,r.name]]),C1("div",null,t3(r.name),1)])}const Vz=T2(zz,[["render",Mz]]),pz=GC({history:fC("/Devcamp-vue-101/"),routes:[{path:"/",name:"home",component:QC,meta:{layout:"Main"}},{path:"/profile",name:"profile",component:Cz,meta:{layout:"Main"}},{path:"/form",name:"form",component:Vz,meta:{layout:"Main"}}]});function g0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function A(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?g0(Object(e),!0).forEach(function(s){v1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):g0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function M4(c){return M4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},M4(c)}function dz(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function x0(c,a){for(var e=0;e<a.length;e++){var s=a[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(c,s.key,s)}}function Lz(c,a,e){return a&&x0(c.prototype,a),e&&x0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function v1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function C8(c,a){return xz(c)||Sz(c,a)||i9(c,a)||wz()}function F3(c){return gz(c)||bz(c)||i9(c)||Nz()}function gz(c){if(Array.isArray(c))return A6(c)}function xz(c){if(Array.isArray(c))return c}function bz(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Sz(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var s=[],r=!0,i=!1,n,f;try{for(e=e.call(c);!(r=(n=e.next()).done)&&(s.push(n.value),!(a&&s.length===a));r=!0);}catch(l){i=!0,f=l}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw f}}return s}}function i9(c,a){if(!!c){if(typeof c=="string")return A6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return A6(c,a)}}function A6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function Nz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b0=function(){},z8={},n9={},f9=null,l9={mark:b0,measure:b0};try{typeof window<"u"&&(z8=window),typeof document<"u"&&(n9=document),typeof MutationObserver<"u"&&(f9=MutationObserver),typeof performance<"u"&&(l9=performance)}catch{}var yz=z8.navigator||{},S0=yz.userAgent,N0=S0===void 0?"":S0,H2=z8,e1=n9,w0=f9,j3=l9;H2.document;var s2=!!e1.documentElement&&!!e1.head&&typeof e1.addEventListener=="function"&&typeof e1.createElement=="function",o9=~N0.indexOf("MSIE")||~N0.indexOf("Trident/"),K3,Y3,X3,Q3,J3,J1="___FONT_AWESOME___",P6=16,t9="fa",m9="svg-inline--fa",A2="data-fa-i2svg",T6="data-fa-pseudo-element",kz="data-fa-pseudo-element-pending",v8="data-prefix",h8="data-icon",y0="fontawesome-i2svg",Az="async",Pz=["HTML","HEAD","STYLE","SCRIPT"],C9=function(){try{return!0}catch{return!1}}(),a1="classic",l1="sharp",H8=[a1,l1];function B3(c){return new Proxy(c,{get:function(e,s){return s in e?e[s]:e[a1]}})}var N3=B3((K3={},v1(K3,a1,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),v1(K3,l1,{fa:"solid",fass:"solid","fa-solid":"solid"}),K3)),w3=B3((Y3={},v1(Y3,a1,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),v1(Y3,l1,{solid:"fass"}),Y3)),y3=B3((X3={},v1(X3,a1,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),v1(X3,l1,{fass:"fa-solid"}),X3)),Tz=B3((Q3={},v1(Q3,a1,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),v1(Q3,l1,{"fa-solid":"fass"}),Q3)),Fz=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,z9="fa-layers-text",Bz=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Rz=B3((J3={},v1(J3,a1,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),v1(J3,l1,{900:"fass"}),J3)),v9=[1,2,3,4,5,6,7,8,9,10],Ez=v9.concat([11,12,13,14,15,16,17,18,19,20]),Dz=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],N2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},k3=new Set;Object.keys(w3[a1]).map(k3.add.bind(k3));Object.keys(w3[l1]).map(k3.add.bind(k3));var qz=[].concat(H8,F3(k3),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",N2.GROUP,N2.SWAP_OPACITY,N2.PRIMARY,N2.SECONDARY]).concat(v9.map(function(c){return"".concat(c,"x")})).concat(Ez.map(function(c){return"w-".concat(c)})),H3=H2.FontAwesomeConfig||{};function _z(c){var a=e1.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Oz(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(e1&&typeof e1.querySelector=="function"){var $z=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];$z.forEach(function(c){var a=C8(c,2),e=a[0],s=a[1],r=Oz(_z(e));r!=null&&(H3[s]=r)})}var h9={styleDefault:"solid",familyDefault:"classic",cssPrefix:t9,replacementClass:m9,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};H3.familyPrefix&&(H3.cssPrefix=H3.familyPrefix);var J2=A(A({},h9),H3);J2.autoReplaceSvg||(J2.observeMutations=!1);var F={};Object.keys(h9).forEach(function(c){Object.defineProperty(F,c,{enumerable:!0,set:function(e){J2[c]=e,u3.forEach(function(s){return s(F)})},get:function(){return J2[c]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(a){J2.cssPrefix=a,u3.forEach(function(e){return e(F)})},get:function(){return J2.cssPrefix}});H2.FontAwesomeConfig=F;var u3=[];function Uz(c){return u3.push(c),function(){u3.splice(u3.indexOf(c),1)}}var f2=P6,j1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Iz(c){if(!(!c||!s2)){var a=e1.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=e1.head.childNodes,s=null,r=e.length-1;r>-1;r--){var i=e[r],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(s=i)}return e1.head.insertBefore(a,s),c}}var Gz="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function A3(){for(var c=12,a="";c-- >0;)a+=Gz[Math.random()*62|0];return a}function s3(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function u8(c){return c.classList?s3(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function H9(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wz(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(H9(c[e]),'" ')},"").trim()}function D4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function M8(c){return c.size!==j1.size||c.x!==j1.x||c.y!==j1.y||c.rotate!==j1.rotate||c.flipX||c.flipY}function Zz(c){var a=c.transform,e=c.containerWidth,s=c.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},t={transform:"translate(".concat(s/2*-1," -256)")};return{outer:r,inner:l,path:t}}function jz(c){var a=c.transform,e=c.width,s=e===void 0?P6:e,r=c.height,i=r===void 0?P6:r,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&o9?l+="translate(".concat(a.x/f2-s/2,"em, ").concat(a.y/f2-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/f2,"em), calc(-50% + ").concat(a.y/f2,"em)) "):l+="translate(".concat(a.x/f2,"em, ").concat(a.y/f2,"em) "),l+="scale(".concat(a.size/f2*(a.flipX?-1:1),", ").concat(a.size/f2*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var Kz=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function u9(){var c=t9,a=m9,e=F.cssPrefix,s=F.replacementClass,r=Kz;if(e!==c||s!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");r=r.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(s))}return r}var k0=!1;function C6(){F.autoAddCss&&!k0&&(Iz(u9()),k0=!0)}var Yz={mixout:function(){return{dom:{css:u9,insertCss:C6}}},hooks:function(){return{beforeDOMElementCreation:function(){C6()},beforeI2svg:function(){C6()}}}},c2=H2||{};c2[J1]||(c2[J1]={});c2[J1].styles||(c2[J1].styles={});c2[J1].hooks||(c2[J1].hooks={});c2[J1].shims||(c2[J1].shims=[]);var D1=c2[J1],M9=[],Xz=function c(){e1.removeEventListener("DOMContentLoaded",c),V4=1,M9.map(function(a){return a()})},V4=!1;s2&&(V4=(e1.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(e1.readyState),V4||e1.addEventListener("DOMContentLoaded",Xz));function Qz(c){!s2||(V4?setTimeout(c,0):M9.push(c))}function R3(c){var a=c.tag,e=c.attributes,s=e===void 0?{}:e,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?H9(c):"<".concat(a," ").concat(Wz(s),">").concat(i.map(R3).join(""),"</").concat(a,">")}function A0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Jz=function(a,e){return function(s,r,i,n){return a.call(e,s,r,i,n)}},z6=function(a,e,s,r){var i=Object.keys(a),n=i.length,f=r!==void 0?Jz(e,r):e,l,t,o;for(s===void 0?(l=1,o=a[i[0]]):(l=0,o=s);l<n;l++)t=i[l],o=f(o,a[t],t,a);return o};function cv(c){for(var a=[],e=0,s=c.length;e<s;){var r=c.charCodeAt(e++);if(r>=55296&&r<=56319&&e<s){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((r&1023)<<10)+(i&1023)+65536):(a.push(r),e--)}else a.push(r)}return a}function F6(c){var a=cv(c);return a.length===1?a[0].toString(16):null}function av(c,a){var e=c.length,s=c.charCodeAt(a),r;return s>=55296&&s<=56319&&e>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(s-55296)*1024+r-56320+65536:s}function P0(c){return Object.keys(c).reduce(function(a,e){var s=c[e],r=!!s.icon;return r?a[s.iconName]=s.icon:a[e]=s,a},{})}function B6(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=e.skipHooks,r=s===void 0?!1:s,i=P0(a);typeof D1.hooks.addPack=="function"&&!r?D1.hooks.addPack(c,P0(a)):D1.styles[c]=A(A({},D1.styles[c]||{}),i),c==="fas"&&B6("fa",a)}var c4,a4,e4,_2=D1.styles,ev=D1.shims,sv=(c4={},v1(c4,a1,Object.values(y3[a1])),v1(c4,l1,Object.values(y3[l1])),c4),V8=null,V9={},p9={},d9={},L9={},g9={},rv=(a4={},v1(a4,a1,Object.keys(N3[a1])),v1(a4,l1,Object.keys(N3[l1])),a4);function iv(c){return~qz.indexOf(c)}function nv(c,a){var e=a.split("-"),s=e[0],r=e.slice(1).join("-");return s===c&&r!==""&&!iv(r)?r:null}var x9=function(){var a=function(i){return z6(_2,function(n,f,l){return n[l]=z6(f,i,{}),n},{})};V9=a(function(r,i,n){if(i[3]&&(r[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){r[l.toString(16)]=n})}return r}),p9=a(function(r,i,n){if(r[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){r[l]=n})}return r}),g9=a(function(r,i,n){var f=i[2];return r[n]=n,f.forEach(function(l){r[l]=n}),r});var e="far"in _2||F.autoFetchSvg,s=z6(ev,function(r,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(r.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:f,iconName:l}),r},{names:{},unicodes:{}});d9=s.names,L9=s.unicodes,V8=q4(F.styleDefault,{family:F.familyDefault})};Uz(function(c){V8=q4(c.styleDefault,{family:F.familyDefault})});x9();function p8(c,a){return(V9[c]||{})[a]}function fv(c,a){return(p9[c]||{})[a]}function w2(c,a){return(g9[c]||{})[a]}function b9(c){return d9[c]||{prefix:null,iconName:null}}function lv(c){var a=L9[c],e=p8("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function u2(){return V8}var d8=function(){return{prefix:null,iconName:null,rest:[]}};function q4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,s=e===void 0?a1:e,r=N3[s][c],i=w3[s][c]||w3[s][r],n=c in D1.styles?c:null;return i||n||null}var T0=(e4={},v1(e4,a1,Object.keys(y3[a1])),v1(e4,l1,Object.keys(y3[l1])),e4);function _4(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.skipLookups,r=s===void 0?!1:s,i=(a={},v1(a,a1,"".concat(F.cssPrefix,"-").concat(a1)),v1(a,l1,"".concat(F.cssPrefix,"-").concat(l1)),a),n=null,f=a1;(c.includes(i[a1])||c.some(function(t){return T0[a1].includes(t)}))&&(f=a1),(c.includes(i[l1])||c.some(function(t){return T0[l1].includes(t)}))&&(f=l1);var l=c.reduce(function(t,o){var C=nv(F.cssPrefix,o);if(_2[o]?(o=sv[f].includes(o)?Tz[f][o]:o,n=o,t.prefix=o):rv[f].indexOf(o)>-1?(n=o,t.prefix=q4(o,{family:f})):C?t.iconName=C:o!==F.replacementClass&&o!==i[a1]&&o!==i[l1]&&t.rest.push(o),!r&&t.prefix&&t.iconName){var v=n==="fa"?b9(t.iconName):{},H=w2(t.prefix,t.iconName);v.prefix&&(n=null),t.iconName=v.iconName||H||t.iconName,t.prefix=v.prefix||t.prefix,t.prefix==="far"&&!_2.far&&_2.fas&&!F.autoFetchSvg&&(t.prefix="fas")}return t},d8());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===l1&&(_2.fass||F.autoFetchSvg)&&(l.prefix="fass",l.iconName=w2(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=u2()||"fas"),l}var ov=function(){function c(){dz(this,c),this.definitions={}}return Lz(c,[{key:"add",value:function(){for(var e=this,s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=A(A({},e.definitions[f]||{}),n[f]),B6(f,n[f]);var l=y3[a1][f];l&&B6(l,n[f]),x9()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,s){var r=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(r).map(function(i){var n=r[i],f=n.prefix,l=n.iconName,t=n.icon,o=t[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(C){typeof C=="string"&&(e[f][C]=t)}),e[f][l]=t}),e}}]),c}(),F0=[],O2={},Z2={},tv=Object.keys(Z2);function mv(c,a){var e=a.mixoutsTo;return F0=c,O2={},Object.keys(Z2).forEach(function(s){tv.indexOf(s)===-1&&delete Z2[s]}),F0.forEach(function(s){var r=s.mixout?s.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(e[n]=r[n]),M4(r[n])==="object"&&Object.keys(r[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=r[n][f]})}),s.hooks){var i=s.hooks();Object.keys(i).forEach(function(n){O2[n]||(O2[n]=[]),O2[n].push(i[n])})}s.provides&&s.provides(Z2)}),e}function R6(c,a){for(var e=arguments.length,s=new Array(e>2?e-2:0),r=2;r<e;r++)s[r-2]=arguments[r];var i=O2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(s))}),a}function P2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),s=1;s<a;s++)e[s-1]=arguments[s];var r=O2[c]||[];r.forEach(function(i){i.apply(null,e)})}function a2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Z2[c]?Z2[c].apply(null,a):void 0}function E6(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||u2();if(!!a)return a=w2(e,a)||a,A0(S9.definitions,e,a)||A0(D1.styles,e,a)}var S9=new ov,Cv=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,P2("noAuto")},zv={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return s2?(P2("beforeI2svg",a),a2("pseudoElements2svg",a),a2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Qz(function(){hv({autoReplaceSvgRoot:e}),P2("watch",a)})}},vv={icon:function(a){if(a===null)return null;if(M4(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:w2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],s=q4(a[0]);return{prefix:s,iconName:w2(s,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(F.cssPrefix,"-"))>-1||a.match(Fz))){var r=_4(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||u2(),iconName:w2(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var i=u2();return{prefix:i,iconName:w2(i,a)||a}}}},y1={noAuto:Cv,config:F,dom:zv,parse:vv,library:S9,findIconDefinition:E6,toHtml:R3},hv=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,s=e===void 0?e1:e;(Object.keys(D1.styles).length>0||F.autoFetchSvg)&&s2&&F.autoReplaceSvg&&y1.dom.i2svg({node:s})};function O4(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(s){return R3(s)})}}),Object.defineProperty(c,"node",{get:function(){if(!!s2){var s=e1.createElement("div");return s.innerHTML=c.html,s.children}}}),c}function Hv(c){var a=c.children,e=c.main,s=c.mask,r=c.attributes,i=c.styles,n=c.transform;if(M8(n)&&e.found&&!s.found){var f=e.width,l=e.height,t={x:f/l/2,y:.5};r.style=D4(A(A({},i),{},{"transform-origin":"".concat(t.x+n.x/16,"em ").concat(t.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function uv(c){var a=c.prefix,e=c.iconName,s=c.children,r=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(F.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},r),{},{id:n}),children:s}]}]}function L8(c){var a=c.icons,e=a.main,s=a.mask,r=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,t=c.maskId,o=c.titleId,C=c.extra,v=c.watchable,H=v===void 0?!1:v,b=s.found?s:e,y=b.width,P=b.height,u=r==="fak",L=[F.replacementClass,i?"".concat(F.cssPrefix,"-").concat(i):""].filter(function(M1){return C.classes.indexOf(M1)===-1}).filter(function(M1){return M1!==""||!!M1}).concat(C.classes).join(" "),B={children:[],attributes:A(A({},C.attributes),{},{"data-prefix":r,"data-icon":i,class:L,role:C.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(P)})},q=u&&!~C.classes.indexOf("fa-fw")?{width:"".concat(y/P*16*.0625,"em")}:{};H&&(B.attributes[A2]=""),l&&(B.children.push({tag:"title",attributes:{id:B.attributes["aria-labelledby"]||"title-".concat(o||A3())},children:[l]}),delete B.attributes.title);var W=A(A({},B),{},{prefix:r,iconName:i,main:e,mask:s,maskId:t,transform:n,symbol:f,styles:A(A({},q),C.styles)}),s1=s.found&&e.found?a2("generateAbstractMask",W)||{children:[],attributes:{}}:a2("generateAbstractIcon",W)||{children:[],attributes:{}},f1=s1.children,b1=s1.attributes;return W.children=f1,W.attributes=b1,f?uv(W):Hv(W)}function B0(c){var a=c.content,e=c.width,s=c.height,r=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,t=A(A(A({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(t[A2]="");var o=A({},n.styles);M8(r)&&(o.transform=jz({transform:r,startCentered:!0,width:e,height:s}),o["-webkit-transform"]=o.transform);var C=D4(o);C.length>0&&(t.style=C);var v=[];return v.push({tag:"span",attributes:t,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Mv(c){var a=c.content,e=c.title,s=c.extra,r=A(A(A({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),i=D4(s.styles);i.length>0&&(r.style=i);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var v6=D1.styles;function D6(c){var a=c[0],e=c[1],s=c.slice(4),r=C8(s,1),i=r[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(N2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(N2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(N2.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var Vv={found:!1,width:512,height:512};function pv(c,a){!C9&&!F.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function q6(c,a){var e=a;return a==="fa"&&F.styleDefault!==null&&(a=u2()),new Promise(function(s,r){if(a2("missingIconAbstract"),e==="fa"){var i=b9(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&v6[a]&&v6[a][c]){var n=v6[a][c];return s(D6(n))}pv(c,a),s(A(A({},Vv),{},{icon:F.showMissingIcons&&c?a2("missingIconAbstract")||{}:{}}))})}var R0=function(){},_6=F.measurePerformance&&j3&&j3.mark&&j3.measure?j3:{mark:R0,measure:R0},o3='FA "6.2.0"',dv=function(a){return _6.mark("".concat(o3," ").concat(a," begins")),function(){return N9(a)}},N9=function(a){_6.mark("".concat(o3," ").concat(a," ends")),_6.measure("".concat(o3," ").concat(a),"".concat(o3," ").concat(a," begins"),"".concat(o3," ").concat(a," ends"))},g8={begin:dv,end:N9},l4=function(){};function E0(c){var a=c.getAttribute?c.getAttribute(A2):null;return typeof a=="string"}function Lv(c){var a=c.getAttribute?c.getAttribute(v8):null,e=c.getAttribute?c.getAttribute(h8):null;return a&&e}function gv(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(F.replacementClass)}function xv(){if(F.autoReplaceSvg===!0)return o4.replace;var c=o4[F.autoReplaceSvg];return c||o4.replace}function bv(c){return e1.createElementNS("http://www.w3.org/2000/svg",c)}function Sv(c){return e1.createElement(c)}function w9(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,s=e===void 0?c.tag==="svg"?bv:Sv:e;if(typeof c=="string")return e1.createTextNode(c);var r=s(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){r.appendChild(w9(n,{ceFn:s}))}),r}function Nv(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var o4={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(r){e.parentNode.insertBefore(w9(r),e)}),e.getAttribute(A2)===null&&F.keepOriginalSource){var s=e1.createComment(Nv(e));e.parentNode.replaceChild(s,e)}else e.remove()},nest:function(a){var e=a[0],s=a[1];if(~u8(e).indexOf(F.replacementClass))return o4.replace(a);var r=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var i=s[0].attributes.class.split(" ").reduce(function(f,l){return l===F.replacementClass||l.match(r)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});s[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=s.map(function(f){return R3(f)}).join(`
`);e.setAttribute(A2,""),e.innerHTML=n}};function D0(c){c()}function y9(c,a){var e=typeof a=="function"?a:l4;if(c.length===0)e();else{var s=D0;F.mutateApproach===Az&&(s=H2.requestAnimationFrame||D0),s(function(){var r=xv(),i=g8.begin("mutate");c.map(r),i(),e()})}}var x8=!1;function k9(){x8=!0}function O6(){x8=!1}var p4=null;function q0(c){if(!!w0&&!!F.observeMutations){var a=c.treeCallback,e=a===void 0?l4:a,s=c.nodeCallback,r=s===void 0?l4:s,i=c.pseudoElementsCallback,n=i===void 0?l4:i,f=c.observeMutationsRoot,l=f===void 0?e1:f;p4=new w0(function(t){if(!x8){var o=u2();s3(t).forEach(function(C){if(C.type==="childList"&&C.addedNodes.length>0&&!E0(C.addedNodes[0])&&(F.searchPseudoElements&&n(C.target),e(C.target)),C.type==="attributes"&&C.target.parentNode&&F.searchPseudoElements&&n(C.target.parentNode),C.type==="attributes"&&E0(C.target)&&~Dz.indexOf(C.attributeName))if(C.attributeName==="class"&&Lv(C.target)){var v=_4(u8(C.target)),H=v.prefix,b=v.iconName;C.target.setAttribute(v8,H||o),b&&C.target.setAttribute(h8,b)}else gv(C.target)&&r(C.target)})}}),s2&&p4.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wv(){!p4||p4.disconnect()}function yv(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(s,r){var i=r.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(s[n]=f.join(":").trim()),s},{})),e}function kv(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",r=_4(u8(c));return r.prefix||(r.prefix=u2()),a&&e&&(r.prefix=a,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&s.length>0&&(r.iconName=fv(r.prefix,c.innerText)||p8(r.prefix,F6(c.innerText))),!r.iconName&&F.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function Av(c){var a=s3(c.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return F.autoA11y&&(e?a["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(s||A3()):(a["aria-hidden"]="true",a.focusable="false")),a}function Pv(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=kv(c),s=e.iconName,r=e.prefix,i=e.rest,n=Av(c),f=R6("parseNodeAttributes",{},c),l=a.styleParser?yv(c):[];return A({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:j1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var Tv=D1.styles;function A9(c){var a=F.autoReplaceSvg==="nest"?_0(c,{styleParser:!1}):_0(c);return~a.extra.classes.indexOf(z9)?a2("generateLayersText",c,a):a2("generateSvgReplacementMutation",c,a)}var M2=new Set;H8.map(function(c){M2.add("fa-".concat(c))});Object.keys(N3[a1]).map(M2.add.bind(M2));Object.keys(N3[l1]).map(M2.add.bind(M2));M2=F3(M2);function O0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!s2)return Promise.resolve();var e=e1.documentElement.classList,s=function(C){return e.add("".concat(y0,"-").concat(C))},r=function(C){return e.remove("".concat(y0,"-").concat(C))},i=F.autoFetchSvg?M2:H8.map(function(o){return"fa-".concat(o)}).concat(Object.keys(Tv));i.includes("fa")||i.push("fa");var n=[".".concat(z9,":not([").concat(A2,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(A2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=s3(c.querySelectorAll(n))}catch{}if(f.length>0)s("pending"),r("complete");else return Promise.resolve();var l=g8.begin("onTree"),t=f.reduce(function(o,C){try{var v=A9(C);v&&o.push(v)}catch(H){C9||H.name==="MissingIcon"&&console.error(H)}return o},[]);return new Promise(function(o,C){Promise.all(t).then(function(v){y9(v,function(){s("active"),s("complete"),r("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),C(v)})})}function Fv(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;A9(c).then(function(e){e&&y9([e],a)})}function Bv(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(a||{}).icon?a:E6(a||{}),r=e.mask;return r&&(r=(r||{}).icon?r:E6(r||{})),c(s,A(A({},e),{},{mask:r}))}}var Rv=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,r=s===void 0?j1:s,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,t=e.maskId,o=t===void 0?null:t,C=e.title,v=C===void 0?null:C,H=e.titleId,b=H===void 0?null:H,y=e.classes,P=y===void 0?[]:y,u=e.attributes,L=u===void 0?{}:u,B=e.styles,q=B===void 0?{}:B;if(!!a){var W=a.prefix,s1=a.iconName,f1=a.icon;return O4(A({type:"icon"},a),function(){return P2("beforeDOMElementCreation",{iconDefinition:a,params:e}),F.autoA11y&&(v?L["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(b||A3()):(L["aria-hidden"]="true",L.focusable="false")),L8({icons:{main:D6(f1),mask:l?D6(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:s1,transform:A(A({},j1),r),symbol:n,title:v,maskId:o,titleId:b,extra:{attributes:L,styles:q,classes:P}})})}},Ev={mixout:function(){return{icon:Bv(Rv)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=O0,e.nodeCallback=Fv,e}}},provides:function(a){a.i2svg=function(e){var s=e.node,r=s===void 0?e1:s,i=e.callback,n=i===void 0?function(){}:i;return O0(r,n)},a.generateSvgReplacementMutation=function(e,s){var r=s.iconName,i=s.title,n=s.titleId,f=s.prefix,l=s.transform,t=s.symbol,o=s.mask,C=s.maskId,v=s.extra;return new Promise(function(H,b){Promise.all([q6(r,f),o.iconName?q6(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var P=C8(y,2),u=P[0],L=P[1];H([e,L8({icons:{main:u,mask:L},prefix:f,iconName:r,transform:l,symbol:t,maskId:C,title:i,titleId:n,extra:v,watchable:!0})])}).catch(b)})},a.generateAbstractIcon=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.transform,f=e.styles,l=D4(f);l.length>0&&(r.style=l);var t;return M8(n)&&(t=a2("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),s.push(t||i.icon),{children:s,attributes:r}}}},Dv={mixout:function(){return{layer:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.classes,i=r===void 0?[]:r;return O4({type:"layer"},function(){P2("beforeDOMElementCreation",{assembler:e,params:s});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(F3(i)).join(" ")},children:n}]})}}}},qv={mixout:function(){return{counter:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.title,i=r===void 0?null:r,n=s.classes,f=n===void 0?[]:n,l=s.attributes,t=l===void 0?{}:l,o=s.styles,C=o===void 0?{}:o;return O4({type:"counter",content:e},function(){return P2("beforeDOMElementCreation",{content:e,params:s}),Mv({content:e.toString(),title:i,extra:{attributes:t,styles:C,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(F3(f))}})})}}}},_v={mixout:function(){return{text:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=s.transform,i=r===void 0?j1:r,n=s.title,f=n===void 0?null:n,l=s.classes,t=l===void 0?[]:l,o=s.attributes,C=o===void 0?{}:o,v=s.styles,H=v===void 0?{}:v;return O4({type:"text",content:e},function(){return P2("beforeDOMElementCreation",{content:e,params:s}),B0({content:e,transform:A(A({},j1),i),title:f,extra:{attributes:C,styles:H,classes:["".concat(F.cssPrefix,"-layers-text")].concat(F3(t))}})})}}},provides:function(a){a.generateLayersText=function(e,s){var r=s.title,i=s.transform,n=s.extra,f=null,l=null;if(o9){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/t,l=o.height/t}return F.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,B0({content:e.innerHTML,width:f,height:l,transform:i,title:r,extra:n,watchable:!0})])}}},Ov=new RegExp('"',"ug"),$0=[1105920,1112319];function $v(c){var a=c.replace(Ov,""),e=av(a,0),s=e>=$0[0]&&e<=$0[1],r=a.length===2?a[0]===a[1]:!1;return{value:F6(r?a[0]:a),isSecondary:s||r}}function U0(c,a){var e="".concat(kz).concat(a.replace(":","-"));return new Promise(function(s,r){if(c.getAttribute(e)!==null)return s();var i=s3(c.children),n=i.filter(function(f1){return f1.getAttribute(T6)===a})[0],f=H2.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(Bz),t=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),s();if(l&&o!=="none"&&o!==""){var C=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?l1:a1,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?w3[v][l[2].toLowerCase()]:Rz[v][t],b=$v(C),y=b.value,P=b.isSecondary,u=l[0].startsWith("FontAwesome"),L=p8(H,y),B=L;if(u){var q=lv(y);q.iconName&&q.prefix&&(L=q.iconName,H=q.prefix)}if(L&&!P&&(!n||n.getAttribute(v8)!==H||n.getAttribute(h8)!==B)){c.setAttribute(e,B),n&&c.removeChild(n);var W=Pv(),s1=W.extra;s1.attributes[T6]=a,q6(L,H).then(function(f1){var b1=L8(A(A({},W),{},{icons:{main:f1,mask:d8()},prefix:H,iconName:B,extra:s1,watchable:!0})),M1=e1.createElement("svg");a==="::before"?c.insertBefore(M1,c.firstChild):c.appendChild(M1),M1.outerHTML=b1.map(function(k1){return R3(k1)}).join(`
`),c.removeAttribute(e),s()}).catch(r)}else s()}else s()})}function Uv(c){return Promise.all([U0(c,"::before"),U0(c,"::after")])}function Iv(c){return c.parentNode!==document.head&&!~Pz.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(T6)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function I0(c){if(!!s2)return new Promise(function(a,e){var s=s3(c.querySelectorAll("*")).filter(Iv).map(Uv),r=g8.begin("searchPseudoElements");k9(),Promise.all(s).then(function(){r(),O6(),a()}).catch(function(){r(),O6(),e()})})}var Gv={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=I0,e}}},provides:function(a){a.pseudoElements2svg=function(e){var s=e.node,r=s===void 0?e1:s;F.searchPseudoElements&&I0(r)}}},G0=!1,Wv={mixout:function(){return{dom:{unwatch:function(){k9(),G0=!0}}}},hooks:function(){return{bootstrap:function(){q0(R6("mutationObserverCallbacks",{}))},noAuto:function(){wv()},watch:function(e){var s=e.observeMutationsRoot;G0?O6():q0(R6("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},W0=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(s,r){var i=r.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return s.flipX=!0,s;if(n&&f==="v")return s.flipY=!0,s;if(f=parseFloat(f),isNaN(f))return s;switch(n){case"grow":s.size=s.size+f;break;case"shrink":s.size=s.size-f;break;case"left":s.x=s.x-f;break;case"right":s.x=s.x+f;break;case"up":s.y=s.y-f;break;case"down":s.y=s.y+f;break;case"rotate":s.rotate=s.rotate+f;break}return s},e)},Zv={mixout:function(){return{parse:{transform:function(e){return W0(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-transform");return r&&(e.transform=W0(r)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var s=e.main,r=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),o="rotate(".concat(r.rotate," 0 0)"),C={transform:"".concat(l," ").concat(t," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},H={outer:f,inner:C,path:v};return{tag:"g",attributes:A({},H.outer),children:[{tag:"g",attributes:A({},H.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:A(A({},s.icon.attributes),H.path)}]}]}}}},h6={x:0,y:0,width:"100%",height:"100%"};function Z0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function jv(c){return c.tag==="g"?c.children:[c]}var Kv={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-mask"),i=r?_4(r.split(" ").map(function(n){return n.trim()})):d8();return i.prefix||(i.prefix=u2()),e.mask=i,e.maskId=s.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var s=e.children,r=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,t=i.width,o=i.icon,C=n.width,v=n.icon,H=Zz({transform:l,containerWidth:C,iconWidth:t}),b={tag:"rect",attributes:A(A({},h6),{},{fill:"white"})},y=o.children?{children:o.children.map(Z0)}:{},P={tag:"g",attributes:A({},H.inner),children:[Z0(A({tag:o.tag,attributes:A(A({},o.attributes),H.path)},y))]},u={tag:"g",attributes:A({},H.outer),children:[P]},L="mask-".concat(f||A3()),B="clip-".concat(f||A3()),q={tag:"mask",attributes:A(A({},h6),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,u]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:jv(v)},q]};return s.push(W,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat(L,")")},h6)}),{children:s,attributes:r}}}},Yv={provides:function(a){var e=!1;H2.matchMedia&&(e=H2.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var s=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:A(A({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=A(A({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:A(A({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(f),s.push({tag:"path",attributes:A(A({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:A(A({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||s.push({tag:"path",attributes:A(A({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},Xv={hooks:function(){return{parseNodeAttributes:function(e,s){var r=s.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Qv=[Yz,Ev,Dv,qv,_v,Gv,Wv,Zv,Kv,Yv,Xv];mv(Qv,{mixoutsTo:y1});y1.noAuto;var P9=y1.config,b8=y1.library;y1.dom;var d4=y1.parse;y1.findIconDefinition;y1.toHtml;var Jv=y1.icon;y1.layer;var ch=y1.text;y1.counter;function j0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);a&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),e.push.apply(e,s)}return e}function R1(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?j0(Object(e),!0).forEach(function(s){g1(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):j0(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function L4(c){return L4=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},L4(c)}function g1(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function ah(c,a){if(c==null)return{};var e={},s=Object.keys(c),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(e[r]=c[r]);return e}function eh(c,a){if(c==null)return{};var e=ah(c,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(c,s)||(e[s]=c[s]))}return e}function $6(c){return sh(c)||rh(c)||ih(c)||nh()}function sh(c){if(Array.isArray(c))return U6(c)}function rh(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function ih(c,a){if(!!c){if(typeof c=="string")return U6(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return U6(c,a)}}function U6(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,s=new Array(a);e<a;e++)s[e]=c[e];return s}function nh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
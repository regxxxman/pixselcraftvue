var a7=Object.defineProperty,l7=Object.defineProperties;var c7=Object.getOwnPropertyDescriptors;var Xh=Object.getOwnPropertySymbols;var u7=Object.prototype.hasOwnProperty,f7=Object.prototype.propertyIsEnumerable;var jh=(i,e,t)=>e in i?a7(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,m0=(i,e)=>{for(var t in e||(e={}))u7.call(e,t)&&jh(i,t,e[t]);if(Xh)for(var t of Xh(e))f7.call(e,t)&&jh(i,t,e[t]);return i},No=(i,e)=>l7(i,c7(e));const h7=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};h7();function jf(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const d7="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p7=jf(d7);function n4(i){return!!i||i===""}function Qc(i){if(Ne(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Yt(n)?v7(n):Qc(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Yt(i))return i;if(Bt(i))return i}}const m7=/;(?![^(]*\))/g,g7=/:(.+)/;function v7(i){const e={};return i.split(m7).forEach(t=>{if(t){const n=t.split(g7);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Yf(i){let e="";if(Yt(i))e=i;else if(Ne(i))for(let t=0;t<i.length;t++){const n=Yf(i[t]);n&&(e+=n+" ")}else if(Bt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Oo=i=>Yt(i)?i:i==null?"":Ne(i)||Bt(i)&&(i.toString===o4||!ze(i.toString))?JSON.stringify(i,i4,2):String(i),i4=(i,e)=>e&&e.__v_isRef?i4(i,e.value):Is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:r4(e)?{[`Set(${e.size})`]:[...e.values()]}:Bt(e)&&!Ne(e)&&!a4(e)?String(e):e,ut={},Fs=[],pn=()=>{},x7=()=>!1,y7=/^on[^a-z]/,Zc=i=>y7.test(i),qf=i=>i.startsWith("onUpdate:"),h0=Object.assign,Qf=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},_7=Object.prototype.hasOwnProperty,We=(i,e)=>_7.call(i,e),Ne=Array.isArray,Is=i=>Kc(i)==="[object Map]",r4=i=>Kc(i)==="[object Set]",ze=i=>typeof i=="function",Yt=i=>typeof i=="string",Zf=i=>typeof i=="symbol",Bt=i=>i!==null&&typeof i=="object",s4=i=>Bt(i)&&ze(i.then)&&ze(i.catch),o4=Object.prototype.toString,Kc=i=>o4.call(i),b7=i=>Kc(i).slice(8,-1),a4=i=>Kc(i)==="[object Object]",Kf=i=>Yt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,sc=jf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jc=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},S7=/-(\w)/g,Ln=Jc(i=>i.replace(S7,(e,t)=>t?t.toUpperCase():"")),w7=/\B([A-Z])/g,uo=Jc(i=>i.replace(w7,"-$1").toLowerCase()),$c=Jc(i=>i.charAt(0).toUpperCase()+i.slice(1)),C1=Jc(i=>i?`on${$c(i)}`:""),wa=(i,e)=>!Object.is(i,e),R1=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},xc=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},M7=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Yh;const T7=()=>Yh||(Yh=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let bn;class A7{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&bn&&(this.parent=bn,this.index=(bn.scopes||(bn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=bn;try{return bn=this,e()}finally{bn=t}}}on(){bn=this}off(){bn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function E7(i,e=bn){e&&e.active&&e.effects.push(i)}const Jf=i=>{const e=new Set(i);return e.w=0,e.n=0,e},l4=i=>(i.w&Hi)>0,c4=i=>(i.n&Hi)>0,P7=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Hi},L7=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];l4(r)&&!c4(r)?r.delete(i):e[t++]=r,r.w&=~Hi,r.n&=~Hi}e.length=t}},Gu=new WeakMap;let ta=0,Hi=1;const Hu=30;let cn;const Er=Symbol(""),Vu=Symbol("");class $f{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,E7(this,n)}run(){if(!this.active)return this.fn();let e=cn,t=Ii;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=cn,cn=this,Ii=!0,Hi=1<<++ta,ta<=Hu?P7(this):qh(this),this.fn()}finally{ta<=Hu&&L7(this),Hi=1<<--ta,cn=this.parent,Ii=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cn===this?this.deferStop=!0:this.active&&(qh(this),this.onStop&&this.onStop(),this.active=!1)}}function qh(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Ii=!0;const u4=[];function fo(){u4.push(Ii),Ii=!1}function ho(){const i=u4.pop();Ii=i===void 0?!0:i}function z0(i,e,t){if(Ii&&cn){let n=Gu.get(i);n||Gu.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Jf()),f4(r)}}function f4(i,e){let t=!1;ta<=Hu?c4(i)||(i.n|=Hi,t=!l4(i)):t=!i.has(cn),t&&(i.add(cn),cn.deps.push(i))}function ei(i,e,t,n,r,s){const o=Gu.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(i)?Kf(t)&&a.push(o.get("length")):(a.push(o.get(Er)),Is(i)&&a.push(o.get(Vu)));break;case"delete":Ne(i)||(a.push(o.get(Er)),Is(i)&&a.push(o.get(Vu)));break;case"set":Is(i)&&a.push(o.get(Er));break}if(a.length===1)a[0]&&Wu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Wu(Jf(l))}}function Wu(i,e){for(const t of Ne(i)?i:[...i])(t!==cn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const C7=jf("__proto__,__v_isRef,__isVue"),h4=new Set(Object.getOwnPropertyNames(Symbol).map(i=>Symbol[i]).filter(Zf)),R7=e9(),F7=e9(!1,!0),I7=e9(!0),Qh=D7();function D7(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=et(this);for(let s=0,o=this.length;s<o;s++)z0(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(et)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){fo();const n=et(this)[e].apply(this,t);return ho(),n}}),i}function e9(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Z7:v4:e?g4:m4).get(n))return n;const o=Ne(n);if(!i&&o&&We(Qh,r))return Reflect.get(Qh,r,s);const a=Reflect.get(n,r,s);return(Zf(r)?h4.has(r):C7(r))||(i||z0(n,"get",r),e)?a:Wt(a)?!o||!Kf(r)?a.value:a:Bt(a)?i?x4(a):tl(a):a}}const N7=d4(),O7=d4(!0);function d4(i=!1){return function(t,n,r,s){let o=t[n];if(Ma(o)&&Wt(o)&&!Wt(r))return!1;if(!i&&!Ma(r)&&(y4(r)||(r=et(r),o=et(o)),!Ne(t)&&Wt(o)&&!Wt(r)))return o.value=r,!0;const a=Ne(t)&&Kf(n)?Number(n)<t.length:We(t,n),l=Reflect.set(t,n,r,s);return t===et(s)&&(a?wa(r,o)&&ei(t,"set",n,r):ei(t,"add",n,r)),l}}function z7(i,e){const t=We(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&ei(i,"delete",e,void 0),n}function B7(i,e){const t=Reflect.has(i,e);return(!Zf(e)||!h4.has(e))&&z0(i,"has",e),t}function U7(i){return z0(i,"iterate",Ne(i)?"length":Er),Reflect.ownKeys(i)}const p4={get:R7,set:N7,deleteProperty:z7,has:B7,ownKeys:U7},k7={get:I7,set(i,e){return!0},deleteProperty(i,e){return!0}},G7=h0({},p4,{get:F7,set:O7}),t9=i=>i,e1=i=>Reflect.getPrototypeOf(i);function dl(i,e,t=!1,n=!1){i=i.__v_raw;const r=et(i),s=et(e);e!==s&&!t&&z0(r,"get",e),!t&&z0(r,"get",s);const{has:o}=e1(r),a=n?t9:t?r9:Ta;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function pl(i,e=!1){const t=this.__v_raw,n=et(t),r=et(i);return i!==r&&!e&&z0(n,"has",i),!e&&z0(n,"has",r),i===r?t.has(i):t.has(i)||t.has(r)}function ml(i,e=!1){return i=i.__v_raw,!e&&z0(et(i),"iterate",Er),Reflect.get(i,"size",i)}function Zh(i){i=et(i);const e=et(this);return e1(e).has.call(e,i)||(e.add(i),ei(e,"add",i,i)),this}function Kh(i,e){e=et(e);const t=et(this),{has:n,get:r}=e1(t);let s=n.call(t,i);s||(i=et(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?wa(e,o)&&ei(t,"set",i,e):ei(t,"add",i,e),this}function Jh(i){const e=et(this),{has:t,get:n}=e1(e);let r=t.call(e,i);r||(i=et(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&ei(e,"delete",i,void 0),s}function $h(){const i=et(this),e=i.size!==0,t=i.clear();return e&&ei(i,"clear",void 0,void 0),t}function gl(i,e){return function(n,r){const s=this,o=s.__v_raw,a=et(o),l=e?t9:i?r9:Ta;return!i&&z0(a,"iterate",Er),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function vl(i,e,t){return function(...n){const r=this.__v_raw,s=et(r),o=Is(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?t9:e?r9:Ta;return!e&&z0(s,"iterate",l?Vu:Er),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function hi(i){return function(...e){return i==="delete"?!1:this}}function H7(){const i={get(s){return dl(this,s)},get size(){return ml(this)},has:pl,add:Zh,set:Kh,delete:Jh,clear:$h,forEach:gl(!1,!1)},e={get(s){return dl(this,s,!1,!0)},get size(){return ml(this)},has:pl,add:Zh,set:Kh,delete:Jh,clear:$h,forEach:gl(!1,!0)},t={get(s){return dl(this,s,!0)},get size(){return ml(this,!0)},has(s){return pl.call(this,s,!0)},add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear"),forEach:gl(!0,!1)},n={get(s){return dl(this,s,!0,!0)},get size(){return ml(this,!0)},has(s){return pl.call(this,s,!0)},add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear"),forEach:gl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=vl(s,!1,!1),t[s]=vl(s,!0,!1),e[s]=vl(s,!1,!0),n[s]=vl(s,!0,!0)}),[i,t,e,n]}const[V7,W7,X7,j7]=H7();function n9(i,e){const t=e?i?j7:X7:i?W7:V7;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(We(t,r)&&r in n?t:n,r,s)}const Y7={get:n9(!1,!1)},q7={get:n9(!1,!0)},Q7={get:n9(!0,!1)},m4=new WeakMap,g4=new WeakMap,v4=new WeakMap,Z7=new WeakMap;function K7(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function J7(i){return i.__v_skip||!Object.isExtensible(i)?0:K7(b7(i))}function tl(i){return Ma(i)?i:i9(i,!1,p4,Y7,m4)}function $7(i){return i9(i,!1,G7,q7,g4)}function x4(i){return i9(i,!0,k7,Q7,v4)}function i9(i,e,t,n,r){if(!Bt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=J7(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function Ds(i){return Ma(i)?Ds(i.__v_raw):!!(i&&i.__v_isReactive)}function Ma(i){return!!(i&&i.__v_isReadonly)}function y4(i){return!!(i&&i.__v_isShallow)}function _4(i){return Ds(i)||Ma(i)}function et(i){const e=i&&i.__v_raw;return e?et(e):i}function b4(i){return xc(i,"__v_skip",!0),i}const Ta=i=>Bt(i)?tl(i):i,r9=i=>Bt(i)?x4(i):i;function S4(i){Ii&&cn&&(i=et(i),f4(i.dep||(i.dep=Jf())))}function w4(i,e){i=et(i),i.dep&&Wu(i.dep)}function Wt(i){return!!(i&&i.__v_isRef===!0)}function n0(i){return M4(i,!1)}function em(i){return M4(i,!0)}function M4(i,e){return Wt(i)?i:new tm(i,e)}class tm{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:et(e),this._value=t?e:Ta(e)}get value(){return S4(this),this._value}set value(e){e=this.__v_isShallow?e:et(e),wa(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Ta(e),w4(this))}}function W0(i){return Wt(i)?i.value:i}const nm={get:(i,e,t)=>W0(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Wt(r)&&!Wt(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function T4(i){return Ds(i)?i:new Proxy(i,nm)}class im{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function A4(i,e,t){const n=i[e];return Wt(n)?n:new im(i,e,t)}class rm{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new $f(e,()=>{this._dirty||(this._dirty=!0,w4(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=et(this);return S4(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sm(i,e,t=!1){let n,r;const s=ze(i);return s?(n=i,r=pn):(n=i.get,r=i.set),new rm(n,r,s||!r,t)}function Di(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){t1(s,e,t)}return r}function mn(i,e,t,n){if(ze(i)){const s=Di(i,e,t,n);return s&&s4(s)&&s.catch(o=>{t1(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(mn(i[s],e,t,n));return r}function t1(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Di(l,null,10,[i,o,a]);return}}om(i,t,r,n)}function om(i,e,t,n=!0){console.error(i)}let yc=!1,Xu=!1;const D0=[];let Qn=0;const aa=[];let na=null,_s=0;const la=[];let Mi=null,bs=0;const E4=Promise.resolve();let s9=null,ju=null;function o9(i){const e=s9||E4;return i?e.then(this?i.bind(this):i):e}function am(i){let e=Qn+1,t=D0.length;for(;e<t;){const n=e+t>>>1;Aa(D0[n])<i?e=n+1:t=n}return e}function P4(i){(!D0.length||!D0.includes(i,yc&&i.allowRecurse?Qn+1:Qn))&&i!==ju&&(i.id==null?D0.push(i):D0.splice(am(i.id),0,i),L4())}function L4(){!yc&&!Xu&&(Xu=!0,s9=E4.then(F4))}function lm(i){const e=D0.indexOf(i);e>Qn&&D0.splice(e,1)}function C4(i,e,t,n){Ne(i)?t.push(...i):(!e||!e.includes(i,i.allowRecurse?n+1:n))&&t.push(i),L4()}function cm(i){C4(i,na,aa,_s)}function um(i){C4(i,Mi,la,bs)}function a9(i,e=null){if(aa.length){for(ju=e,na=[...new Set(aa)],aa.length=0,_s=0;_s<na.length;_s++)na[_s]();na=null,_s=0,ju=null,a9(i,e)}}function R4(i){if(la.length){const e=[...new Set(la)];if(la.length=0,Mi){Mi.push(...e);return}for(Mi=e,Mi.sort((t,n)=>Aa(t)-Aa(n)),bs=0;bs<Mi.length;bs++)Mi[bs]();Mi=null,bs=0}}const Aa=i=>i.id==null?1/0:i.id;function F4(i){Xu=!1,yc=!0,a9(i),D0.sort((t,n)=>Aa(t)-Aa(n));const e=pn;try{for(Qn=0;Qn<D0.length;Qn++){const t=D0[Qn];t&&t.active!==!1&&Di(t,null,14)}}finally{Qn=0,D0.length=0,R4(),yc=!1,s9=null,(D0.length||aa.length||la.length)&&F4(i)}}function fm(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||ut;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||ut;h?r=t.map(d=>d.trim()):f&&(r=t.map(M7))}let a,l=n[a=C1(e)]||n[a=C1(Ln(e))];!l&&s&&(l=n[a=C1(uo(e))]),l&&mn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,mn(c,i,6,r)}}function I4(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!ze(i)){const l=c=>{const u=I4(c,e,!0);u&&(a=!0,h0(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(n.set(i,null),null):(Ne(s)?s.forEach(l=>o[l]=null):h0(o,s),n.set(i,o),o)}function n1(i,e){return!i||!Zc(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(i,e[0].toLowerCase()+e.slice(1))||We(i,uo(e))||We(i,e))}let fn=null,i1=null;function _c(i){const e=fn;return fn=i,i1=i&&i.type.__scopeId||null,e}function hm(i){i1=i}function dm(){i1=null}function Gt(i,e=fn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&c2(-1);const s=_c(e),o=i(...r);return _c(s),n._d&&c2(1),o};return n._n=!0,n._c=!0,n._d=!0,n}function F1(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:g,inheritAttrs:v}=i;let x,p;const m=_c(i);try{if(t.shapeFlag&4){const _=r||n;x=Mn(u.call(_,_,f,s,d,h,g)),p=l}else{const _=e;x=Mn(_.length>1?_(s,{attrs:l,slots:a,emit:c}):_(s,null)),p=e.props?l:pm(l)}}catch(_){ca.length=0,t1(_,i,1),x=De(Ea)}let y=x;if(p&&v!==!1){const _=Object.keys(p),{shapeFlag:b}=y;_.length&&b&7&&(o&&_.some(qf)&&(p=mm(p,o)),y=Pa(y,p))}return t.dirs&&(y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),x=y,_c(m),x}const pm=i=>{let e;for(const t in i)(t==="class"||t==="style"||Zc(t))&&((e||(e={}))[t]=i[t]);return e},mm=(i,e)=>{const t={};for(const n in i)(!qf(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function gm(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?e2(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!n1(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?e2(n,o,c):!0:!!o;return!1}function e2(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!n1(t,s))return!0}return!1}function vm({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const xm=i=>i.__isSuspense;function ym(i,e){e&&e.pendingBranch?Ne(i)?e.effects.push(...i):e.effects.push(i):um(i)}function Pr(i,e){if(Ht){let t=Ht.provides;const n=Ht.parent&&Ht.parent.provides;n===t&&(t=Ht.provides=Object.create(n)),t[i]=e}}function b0(i,e,t=!1){const n=Ht||fn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&ze(e)?e.call(n.proxy):e}}function _m(i,e){return l9(i,null,e)}const t2={};function je(i,e,t){return l9(i,e,t)}function l9(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=ut){const a=Ht;let l,c=!1,u=!1;if(Wt(i)?(l=()=>i.value,c=y4(i)):Ds(i)?(l=()=>i,n=!0):Ne(i)?(u=!0,c=i.some(Ds),l=()=>i.map(p=>{if(Wt(p))return p.value;if(Ds(p))return Ts(p);if(ze(p))return Di(p,a,2)})):ze(i)?e?l=()=>Di(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),mn(i,a,3,[h])}:l=pn,e&&n){const p=l;l=()=>Ts(p())}let f,h=p=>{f=x.onStop=()=>{Di(p,a,4)}};if(La)return h=pn,e?t&&mn(e,a,3,[l(),u?[]:void 0,h]):l(),pn;let d=u?[]:t2;const g=()=>{if(!!x.active)if(e){const p=x.run();(n||c||(u?p.some((m,y)=>wa(m,d[y])):wa(p,d)))&&(f&&f(),mn(e,a,3,[p,d===t2?void 0:d,h]),d=p)}else x.run()};g.allowRecurse=!!e;let v;r==="sync"?v=g:r==="post"?v=()=>v0(g,a&&a.suspense):v=()=>{!a||a.isMounted?cm(g):g()};const x=new $f(l,v);return e?t?g():d=x.run():r==="post"?v0(x.run.bind(x),a&&a.suspense):x.run(),()=>{x.stop(),a&&a.scope&&Qf(a.scope.effects,x)}}function bm(i,e,t){const n=this.proxy,r=Yt(i)?i.includes(".")?D4(n,i):()=>n[i]:i.bind(n,n);let s;ze(e)?s=e:(s=e.handler,t=e);const o=Ht;Gs(this);const a=l9(r,s.bind(n),t);return o?Gs(o):Rr(),a}function D4(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Ts(i,e){if(!Bt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),Wt(i))Ts(i.value,e);else if(Ne(i))for(let t=0;t<i.length;t++)Ts(i[t],e);else if(r4(i)||Is(i))i.forEach(t=>{Ts(t,e)});else if(a4(i))for(const t in i)Ts(i[t],e);return i}function Ae(i){return ze(i)?{setup:i,name:i.name}:i}const Yu=i=>!!i.type.__asyncLoader,N4=i=>i.type.__isKeepAlive;function Sm(i,e){O4(i,"a",e)}function wm(i,e){O4(i,"da",e)}function O4(i,e,t=Ht){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(r1(e,n,t),t){let r=t.parent;for(;r&&r.parent;)N4(r.parent.vnode)&&Mm(n,e,t,r),r=r.parent}}function Mm(i,e,t,n){const r=r1(e,i,n,!0);f9(()=>{Qf(n[e],r)},t)}function r1(i,e,t=Ht,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;fo(),Gs(t);const a=mn(e,t,i,o);return Rr(),ho(),a});return n?r.unshift(s):r.push(s),s}}const ai=i=>(e,t=Ht)=>(!La||i==="sp")&&r1(i,e,t),Tm=ai("bm"),nl=ai("m"),z4=ai("bu"),c9=ai("u"),u9=ai("bum"),f9=ai("um"),Am=ai("sp"),Em=ai("rtg"),Pm=ai("rtc");function Lm(i,e=Ht){r1("ec",i,e)}let qu=!0;function Cm(i){const e=U4(i),t=i.proxy,n=i.ctx;qu=!1,e.beforeCreate&&n2(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:v,deactivated:x,beforeDestroy:p,beforeUnmount:m,destroyed:y,unmounted:_,render:b,renderTracked:w,renderTriggered:S,errorCaptured:M,serverPrefetch:P,expose:F,inheritAttrs:T,components:D,directives:A,filters:R}=e;if(c&&Rm(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const U in o){const j=o[U];ze(j)&&(n[U]=j.bind(t))}if(r){const U=r.call(t,t);Bt(U)&&(i.data=tl(U))}if(qu=!0,s)for(const U in s){const j=s[U],ie=ze(j)?j.bind(t,t):ze(j.get)?j.get.bind(t,t):pn,ue=!ze(j)&&ze(j.set)?j.set.bind(t):pn,oe=un({get:ie,set:ue});Object.defineProperty(n,U,{enumerable:!0,configurable:!0,get:()=>oe.value,set:xe=>oe.value=xe})}if(a)for(const U in a)B4(a[U],n,t,U);if(l){const U=ze(l)?l.call(t):l;Reflect.ownKeys(U).forEach(j=>{Pr(j,U[j])})}u&&n2(u,i,"c");function z(U,j){Ne(j)?j.forEach(ie=>U(ie.bind(t))):j&&U(j.bind(t))}if(z(Tm,f),z(nl,h),z(z4,d),z(c9,g),z(Sm,v),z(wm,x),z(Lm,M),z(Pm,w),z(Em,S),z(u9,m),z(f9,_),z(Am,P),Ne(F))if(F.length){const U=i.exposed||(i.exposed={});F.forEach(j=>{Object.defineProperty(U,j,{get:()=>t[j],set:ie=>t[j]=ie})})}else i.exposed||(i.exposed={});b&&i.render===pn&&(i.render=b),T!=null&&(i.inheritAttrs=T),D&&(i.components=D),A&&(i.directives=A)}function Rm(i,e,t=pn,n=!1){Ne(i)&&(i=Qu(i));for(const r in i){const s=i[r];let o;Bt(s)?"default"in s?o=b0(s.from||r,s.default,!0):o=b0(s.from||r):o=b0(s),Wt(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function n2(i,e,t){mn(Ne(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function B4(i,e,t,n){const r=n.includes(".")?D4(t,n):()=>t[n];if(Yt(i)){const s=e[i];ze(s)&&je(r,s)}else if(ze(i))je(r,i.bind(t));else if(Bt(i))if(Ne(i))i.forEach(s=>B4(s,e,t,n));else{const s=ze(i.handler)?i.handler.bind(t):e[i.handler];ze(s)&&je(r,s,i)}}function U4(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>bc(l,c,o,!0)),bc(l,e,o)),s.set(e,l),l}function bc(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&bc(i,s,t,!0),r&&r.forEach(o=>bc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Fm[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Fm={data:i2,props:yr,emits:yr,methods:yr,computed:yr,beforeCreate:u0,created:u0,beforeMount:u0,mounted:u0,beforeUpdate:u0,updated:u0,beforeDestroy:u0,beforeUnmount:u0,destroyed:u0,unmounted:u0,activated:u0,deactivated:u0,errorCaptured:u0,serverPrefetch:u0,components:yr,directives:yr,watch:Dm,provide:i2,inject:Im};function i2(i,e){return e?i?function(){return h0(ze(i)?i.call(this,this):i,ze(e)?e.call(this,this):e)}:e:i}function Im(i,e){return yr(Qu(i),Qu(e))}function Qu(i){if(Ne(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function u0(i,e){return i?[...new Set([].concat(i,e))]:e}function yr(i,e){return i?h0(h0(Object.create(null),i),e):e}function Dm(i,e){if(!i)return e;if(!e)return i;const t=h0(Object.create(null),i);for(const n in e)t[n]=u0(i[n],e[n]);return t}function Nm(i,e,t,n=!1){const r={},s={};xc(s,s1,1),i.propsDefaults=Object.create(null),k4(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:$7(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Om(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=et(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(n1(i.emitsOptions,h))continue;const d=e[h];if(l)if(We(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Ln(h);r[g]=Zu(l,a,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{k4(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!We(e,f)&&((u=uo(f))===f||!We(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Zu(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!We(e,f)&&!0)&&(delete s[f],c=!0)}c&&ei(i,"set","$attrs")}function k4(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(sc(l))continue;const c=e[l];let u;r&&We(r,u=Ln(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:n1(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=et(t),c=a||ut;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Zu(r,l,f,c[f],i,!We(c,f))}}return o}function Zu(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=We(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&ze(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Gs(r),n=c[t]=l.call(null,e),Rr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===uo(t))&&(n=!0))}return n}function G4(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!ze(i)){const u=f=>{l=!0;const[h,d]=G4(f,e,!0);h0(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return n.set(i,Fs),Fs;if(Ne(s))for(let u=0;u<s.length;u++){const f=Ln(s[u]);r2(f)&&(o[f]=ut)}else if(s)for(const u in s){const f=Ln(u);if(r2(f)){const h=s[u],d=o[f]=Ne(h)||ze(h)?{type:h}:h;if(d){const g=a2(Boolean,d.type),v=a2(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||We(d,"default"))&&a.push(f)}}}const c=[o,a];return n.set(i,c),c}function r2(i){return i[0]!=="$"}function s2(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function o2(i,e){return s2(i)===s2(e)}function a2(i,e){return Ne(e)?e.findIndex(t=>o2(t,i)):ze(e)&&o2(e,i)?0:-1}const H4=i=>i[0]==="_"||i==="$stable",h9=i=>Ne(i)?i.map(Mn):[Mn(i)],zm=(i,e,t)=>{const n=Gt((...r)=>h9(e(...r)),t);return n._c=!1,n},V4=(i,e,t)=>{const n=i._ctx;for(const r in i){if(H4(r))continue;const s=i[r];if(ze(s))e[r]=zm(r,s,n);else if(s!=null){const o=h9(s);e[r]=()=>o}}},W4=(i,e)=>{const t=h9(e);i.slots.default=()=>t},Bm=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=et(e),xc(e,"_",t)):V4(e,i.slots={})}else i.slots={},e&&W4(i,e);xc(i.slots,s1,1)},Um=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=ut;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(h0(r,e),!t&&a===1&&delete r._):(s=!e.$stable,V4(e,r)),o=e}else e&&(W4(i,e),o={default:1});if(s)for(const a in r)!H4(a)&&!(a in o)&&delete r[a]};function fr(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(fo(),mn(l,t,8,[i.el,a,i,e]),ho())}}function X4(){return{app:null,config:{isNativeTag:x7,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let km=0;function Gm(i,e){return function(n,r=null){ze(n)||(n=Object.assign({},n)),r!=null&&!Bt(r)&&(r=null);const s=X4(),o=new Set;let a=!1;const l=s.app={_uid:km++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:fg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ze(c.install)?(o.add(c),c.install(l,...u)):ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=De(n,r);return h.appContext=s,u&&e?e(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,m9(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Ku(i,e,t,n,r=!1){if(Ne(i)){i.forEach((h,d)=>Ku(h,e&&(Ne(e)?e[d]:e),t,n,r));return}if(Yu(n)&&!r)return;const s=n.shapeFlag&4?m9(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Yt(c)?(u[c]=null,We(f,c)&&(f[c]=null)):Wt(c)&&(c.value=null)),ze(l))Di(l,a,12,[o,u]);else{const h=Yt(l),d=Wt(l);if(h||d){const g=()=>{if(i.f){const v=h?u[l]:l.value;r?Ne(v)&&Qf(v,s):Ne(v)?v.includes(s)||v.push(s):h?(u[l]=[s],We(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,We(f,l)&&(f[l]=o)):Wt(l)&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,v0(g,t)):g()}}}const v0=ym;function Hm(i){return Vm(i)}function Vm(i,e){const t=T7();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=pn,cloneNode:g,insertStaticContent:v}=i,x=(C,N,V,Y=null,L=null,E=null,W=!1,q=null,Q=!!N.dynamicChildren)=>{if(C===N)return;C&&!zo(C,N)&&(Y=ae(C),$(C,L,E,!0),C=null),N.patchFlag===-2&&(Q=!1,N.dynamicChildren=null);const{type:K,ref:he,shapeFlag:le}=N;switch(K){case d9:p(C,N,V,Y);break;case Ea:m(C,N,V,Y);break;case oc:C==null&&y(N,V,Y,W);break;case F0:A(C,N,V,Y,L,E,W,q,Q);break;default:le&1?w(C,N,V,Y,L,E,W,q,Q):le&6?R(C,N,V,Y,L,E,W,q,Q):(le&64||le&128)&&K.process(C,N,V,Y,L,E,W,q,Q,ve)}he!=null&&L&&Ku(he,C&&C.ref,E,N||C,!N)},p=(C,N,V,Y)=>{if(C==null)n(N.el=a(N.children),V,Y);else{const L=N.el=C.el;N.children!==C.children&&c(L,N.children)}},m=(C,N,V,Y)=>{C==null?n(N.el=l(N.children||""),V,Y):N.el=C.el},y=(C,N,V,Y)=>{[C.el,C.anchor]=v(C.children,N,V,Y,C.el,C.anchor)},_=({el:C,anchor:N},V,Y)=>{let L;for(;C&&C!==N;)L=h(C),n(C,V,Y),C=L;n(N,V,Y)},b=({el:C,anchor:N})=>{let V;for(;C&&C!==N;)V=h(C),r(C),C=V;r(N)},w=(C,N,V,Y,L,E,W,q,Q)=>{W=W||N.type==="svg",C==null?S(N,V,Y,L,E,W,q,Q):F(C,N,L,E,W,q,Q)},S=(C,N,V,Y,L,E,W,q)=>{let Q,K;const{type:he,props:le,shapeFlag:pe,transition:fe,patchFlag:G,dirs:ge}=C;if(C.el&&g!==void 0&&G===-1)Q=C.el=g(C.el);else{if(Q=C.el=o(C.type,E,le&&le.is,le),pe&8?u(Q,C.children):pe&16&&P(C.children,Q,null,Y,L,E&&he!=="foreignObject",W,q),ge&&fr(C,null,Y,"created"),le){for(const _e in le)_e!=="value"&&!sc(_e)&&s(Q,_e,null,le[_e],E,C.children,Y,L,J);"value"in le&&s(Q,"value",null,le.value),(K=le.onVnodeBeforeMount)&&_n(K,Y,C)}M(Q,C,C.scopeId,W,Y)}ge&&fr(C,null,Y,"beforeMount");const te=(!L||L&&!L.pendingBranch)&&fe&&!fe.persisted;te&&fe.beforeEnter(Q),n(Q,N,V),((K=le&&le.onVnodeMounted)||te||ge)&&v0(()=>{K&&_n(K,Y,C),te&&fe.enter(Q),ge&&fr(C,null,Y,"mounted")},L)},M=(C,N,V,Y,L)=>{if(V&&d(C,V),Y)for(let E=0;E<Y.length;E++)d(C,Y[E]);if(L){let E=L.subTree;if(N===E){const W=L.vnode;M(C,W,W.scopeId,W.slotScopeIds,L.parent)}}},P=(C,N,V,Y,L,E,W,q,Q=0)=>{for(let K=Q;K<C.length;K++){const he=C[K]=q?Ti(C[K]):Mn(C[K]);x(null,he,N,V,Y,L,E,W,q)}},F=(C,N,V,Y,L,E,W)=>{const q=N.el=C.el;let{patchFlag:Q,dynamicChildren:K,dirs:he}=N;Q|=C.patchFlag&16;const le=C.props||ut,pe=N.props||ut;let fe;V&&hr(V,!1),(fe=pe.onVnodeBeforeUpdate)&&_n(fe,V,N,C),he&&fr(N,C,V,"beforeUpdate"),V&&hr(V,!0);const G=L&&N.type!=="foreignObject";if(K?T(C.dynamicChildren,K,q,V,Y,G,E):W||ie(C,N,q,null,V,Y,G,E,!1),Q>0){if(Q&16)D(q,N,le,pe,V,Y,L);else if(Q&2&&le.class!==pe.class&&s(q,"class",null,pe.class,L),Q&4&&s(q,"style",le.style,pe.style,L),Q&8){const ge=N.dynamicProps;for(let te=0;te<ge.length;te++){const _e=ge[te],k=le[_e],ye=pe[_e];(ye!==k||_e==="value")&&s(q,_e,k,ye,L,C.children,V,Y,J)}}Q&1&&C.children!==N.children&&u(q,N.children)}else!W&&K==null&&D(q,N,le,pe,V,Y,L);((fe=pe.onVnodeUpdated)||he)&&v0(()=>{fe&&_n(fe,V,N,C),he&&fr(N,C,V,"updated")},Y)},T=(C,N,V,Y,L,E,W)=>{for(let q=0;q<N.length;q++){const Q=C[q],K=N[q],he=Q.el&&(Q.type===F0||!zo(Q,K)||Q.shapeFlag&70)?f(Q.el):V;x(Q,K,he,null,Y,L,E,W,!0)}},D=(C,N,V,Y,L,E,W)=>{if(V!==Y){for(const q in Y){if(sc(q))continue;const Q=Y[q],K=V[q];Q!==K&&q!=="value"&&s(C,q,K,Q,W,N.children,L,E,J)}if(V!==ut)for(const q in V)!sc(q)&&!(q in Y)&&s(C,q,V[q],null,W,N.children,L,E,J);"value"in Y&&s(C,"value",V.value,Y.value)}},A=(C,N,V,Y,L,E,W,q,Q)=>{const K=N.el=C?C.el:a(""),he=N.anchor=C?C.anchor:a("");let{patchFlag:le,dynamicChildren:pe,slotScopeIds:fe}=N;fe&&(q=q?q.concat(fe):fe),C==null?(n(K,V,Y),n(he,V,Y),P(N.children,V,he,L,E,W,q,Q)):le>0&&le&64&&pe&&C.dynamicChildren?(T(C.dynamicChildren,pe,V,L,E,W,q),(N.key!=null||L&&N===L.subTree)&&j4(C,N,!0)):ie(C,N,V,he,L,E,W,q,Q)},R=(C,N,V,Y,L,E,W,q,Q)=>{N.slotScopeIds=q,C==null?N.shapeFlag&512?L.ctx.activate(N,V,Y,W,Q):O(N,V,Y,L,E,W,Q):z(C,N,Q)},O=(C,N,V,Y,L,E,W)=>{const q=C.component=ig(C,Y,L);if(N4(C)&&(q.ctx.renderer=ve),sg(q),q.asyncDep){if(L&&L.registerDep(q,U),!C.el){const Q=q.subTree=De(Ea);m(null,Q,N,V)}return}U(q,C,N,V,L,E,W)},z=(C,N,V)=>{const Y=N.component=C.component;if(gm(C,N,V))if(Y.asyncDep&&!Y.asyncResolved){j(Y,N,V);return}else Y.next=N,lm(Y.update),Y.update();else N.component=C.component,N.el=C.el,Y.vnode=N},U=(C,N,V,Y,L,E,W)=>{const q=()=>{if(C.isMounted){let{next:he,bu:le,u:pe,parent:fe,vnode:G}=C,ge=he,te;hr(C,!1),he?(he.el=G.el,j(C,he,W)):he=G,le&&R1(le),(te=he.props&&he.props.onVnodeBeforeUpdate)&&_n(te,fe,he,G),hr(C,!0);const _e=F1(C),k=C.subTree;C.subTree=_e,x(k,_e,f(k.el),ae(k),C,L,E),he.el=_e.el,ge===null&&vm(C,_e.el),pe&&v0(pe,L),(te=he.props&&he.props.onVnodeUpdated)&&v0(()=>_n(te,fe,he,G),L)}else{let he;const{el:le,props:pe}=N,{bm:fe,m:G,parent:ge}=C,te=Yu(N);if(hr(C,!1),fe&&R1(fe),!te&&(he=pe&&pe.onVnodeBeforeMount)&&_n(he,ge,N),hr(C,!0),le&&Z){const _e=()=>{C.subTree=F1(C),Z(le,C.subTree,C,L,null)};te?N.type.__asyncLoader().then(()=>!C.isUnmounted&&_e()):_e()}else{const _e=C.subTree=F1(C);x(null,_e,V,Y,C,L,E),N.el=_e.el}if(G&&v0(G,L),!te&&(he=pe&&pe.onVnodeMounted)){const _e=N;v0(()=>_n(he,ge,_e),L)}N.shapeFlag&256&&C.a&&v0(C.a,L),C.isMounted=!0,N=V=Y=null}},Q=C.effect=new $f(q,()=>P4(C.update),C.scope),K=C.update=Q.run.bind(Q);K.id=C.uid,hr(C,!0),K()},j=(C,N,V)=>{N.component=C;const Y=C.vnode.props;C.vnode=N,C.next=null,Om(C,N.props,Y,V),Um(C,N.children,V),fo(),a9(void 0,C.update),ho()},ie=(C,N,V,Y,L,E,W,q,Q=!1)=>{const K=C&&C.children,he=C?C.shapeFlag:0,le=N.children,{patchFlag:pe,shapeFlag:fe}=N;if(pe>0){if(pe&128){oe(K,le,V,Y,L,E,W,q,Q);return}else if(pe&256){ue(K,le,V,Y,L,E,W,q,Q);return}}fe&8?(he&16&&J(K,L,E),le!==K&&u(V,le)):he&16?fe&16?oe(K,le,V,Y,L,E,W,q,Q):J(K,L,E,!0):(he&8&&u(V,""),fe&16&&P(le,V,Y,L,E,W,q,Q))},ue=(C,N,V,Y,L,E,W,q,Q)=>{C=C||Fs,N=N||Fs;const K=C.length,he=N.length,le=Math.min(K,he);let pe;for(pe=0;pe<le;pe++){const fe=N[pe]=Q?Ti(N[pe]):Mn(N[pe]);x(C[pe],fe,V,null,L,E,W,q,Q)}K>he?J(C,L,E,!0,!1,le):P(N,V,Y,L,E,W,q,Q,le)},oe=(C,N,V,Y,L,E,W,q,Q)=>{let K=0;const he=N.length;let le=C.length-1,pe=he-1;for(;K<=le&&K<=pe;){const fe=C[K],G=N[K]=Q?Ti(N[K]):Mn(N[K]);if(zo(fe,G))x(fe,G,V,null,L,E,W,q,Q);else break;K++}for(;K<=le&&K<=pe;){const fe=C[le],G=N[pe]=Q?Ti(N[pe]):Mn(N[pe]);if(zo(fe,G))x(fe,G,V,null,L,E,W,q,Q);else break;le--,pe--}if(K>le){if(K<=pe){const fe=pe+1,G=fe<he?N[fe].el:Y;for(;K<=pe;)x(null,N[K]=Q?Ti(N[K]):Mn(N[K]),V,G,L,E,W,q,Q),K++}}else if(K>pe)for(;K<=le;)$(C[K],L,E,!0),K++;else{const fe=K,G=K,ge=new Map;for(K=G;K<=pe;K++){const Le=N[K]=Q?Ti(N[K]):Mn(N[K]);Le.key!=null&&ge.set(Le.key,K)}let te,_e=0;const k=pe-G+1;let ye=!1,Oe=0;const Ie=new Array(k);for(K=0;K<k;K++)Ie[K]=0;for(K=fe;K<=le;K++){const Le=C[K];if(_e>=k){$(Le,L,E,!0);continue}let Ze;if(Le.key!=null)Ze=ge.get(Le.key);else for(te=G;te<=pe;te++)if(Ie[te-G]===0&&zo(Le,N[te])){Ze=te;break}Ze===void 0?$(Le,L,E,!0):(Ie[Ze-G]=K+1,Ze>=Oe?Oe=Ze:ye=!0,x(Le,N[Ze],V,null,L,E,W,q,Q),_e++)}const ht=ye?Wm(Ie):Fs;for(te=ht.length-1,K=k-1;K>=0;K--){const Le=G+K,Ze=N[Le],xt=Le+1<he?N[Le+1].el:Y;Ie[K]===0?x(null,Ze,V,xt,L,E,W,q,Q):ye&&(te<0||K!==ht[te]?xe(Ze,V,xt,2):te--)}}},xe=(C,N,V,Y,L=null)=>{const{el:E,type:W,transition:q,children:Q,shapeFlag:K}=C;if(K&6){xe(C.component.subTree,N,V,Y);return}if(K&128){C.suspense.move(N,V,Y);return}if(K&64){W.move(C,N,V,ve);return}if(W===F0){n(E,N,V);for(let le=0;le<Q.length;le++)xe(Q[le],N,V,Y);n(C.anchor,N,V);return}if(W===oc){_(C,N,V);return}if(Y!==2&&K&1&&q)if(Y===0)q.beforeEnter(E),n(E,N,V),v0(()=>q.enter(E),L);else{const{leave:le,delayLeave:pe,afterLeave:fe}=q,G=()=>n(E,N,V),ge=()=>{le(E,()=>{G(),fe&&fe()})};pe?pe(E,G,ge):ge()}else n(E,N,V)},$=(C,N,V,Y=!1,L=!1)=>{const{type:E,props:W,ref:q,children:Q,dynamicChildren:K,shapeFlag:he,patchFlag:le,dirs:pe}=C;if(q!=null&&Ku(q,null,V,C,!0),he&256){N.ctx.deactivate(C);return}const fe=he&1&&pe,G=!Yu(C);let ge;if(G&&(ge=W&&W.onVnodeBeforeUnmount)&&_n(ge,N,C),he&6)X(C.component,V,Y);else{if(he&128){C.suspense.unmount(V,Y);return}fe&&fr(C,null,N,"beforeUnmount"),he&64?C.type.remove(C,N,V,L,ve,Y):K&&(E!==F0||le>0&&le&64)?J(K,N,V,!1,!0):(E===F0&&le&384||!L&&he&16)&&J(Q,N,V),Y&&re(C)}(G&&(ge=W&&W.onVnodeUnmounted)||fe)&&v0(()=>{ge&&_n(ge,N,C),fe&&fr(C,null,N,"unmounted")},V)},re=C=>{const{type:N,el:V,anchor:Y,transition:L}=C;if(N===F0){H(V,Y);return}if(N===oc){b(C);return}const E=()=>{r(V),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(C.shapeFlag&1&&L&&!L.persisted){const{leave:W,delayLeave:q}=L,Q=()=>W(V,E);q?q(C.el,E,Q):Q()}else E()},H=(C,N)=>{let V;for(;C!==N;)V=h(C),r(C),C=V;r(N)},X=(C,N,V)=>{const{bum:Y,scope:L,update:E,subTree:W,um:q}=C;Y&&R1(Y),L.stop(),E&&(E.active=!1,$(W,C,N,V)),q&&v0(q,N),v0(()=>{C.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},J=(C,N,V,Y=!1,L=!1,E=0)=>{for(let W=E;W<C.length;W++)$(C[W],N,V,Y,L)},ae=C=>C.shapeFlag&6?ae(C.component.subTree):C.shapeFlag&128?C.suspense.next():h(C.anchor||C.el),de=(C,N,V)=>{C==null?N._vnode&&$(N._vnode,null,null,!0):x(N._vnode||null,C,N,null,null,null,V),R4(),N._vnode=C},ve={p:x,um:$,m:xe,r:re,mt:O,mc:P,pc:ie,pbc:T,n:ae,o:i};let be,Z;return e&&([be,Z]=e(ve)),{render:de,hydrate:be,createApp:Gm(de,be)}}function hr({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function j4(i,e,t=!1){const n=i.children,r=e.children;if(Ne(n)&&Ne(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ti(r[s]),a.el=o.el),t||j4(o,a))}}function Wm(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Xm=i=>i.__isTeleport,Y4="components";function Xn(i,e){return Ym(Y4,i,!0,e)||i}const jm=Symbol();function Ym(i,e,t=!0,n=!1){const r=fn||Ht;if(r){const s=r.type;if(i===Y4){const a=cg(s);if(a&&(a===e||a===Ln(e)||a===$c(Ln(e))))return s}const o=l2(r[i]||s[i],e)||l2(r.appContext[i],e);return!o&&n?s:o}}function l2(i,e){return i&&(i[e]||i[Ln(e)]||i[$c(Ln(e))])}const F0=Symbol(void 0),d9=Symbol(void 0),Ea=Symbol(void 0),oc=Symbol(void 0),ca=[];let Lr=null;function Cr(i=!1){ca.push(Lr=i?null:[])}function qm(){ca.pop(),Lr=ca[ca.length-1]||null}let Sc=1;function c2(i){Sc+=i}function q4(i){return i.dynamicChildren=Sc>0?Lr||Fs:null,qm(),Sc>0&&Lr&&Lr.push(i),i}function Ns(i,e,t,n,r,s){return q4(Qe(i,e,t,n,r,s,!0))}function Qm(i,e,t,n,r){return q4(De(i,e,t,n,r,!0))}function Ju(i){return i?i.__v_isVNode===!0:!1}function zo(i,e){return i.type===e.type&&i.key===e.key}const s1="__vInternal",Q4=({key:i})=>i!=null?i:null,ac=({ref:i,ref_key:e,ref_for:t})=>i!=null?Yt(i)||Wt(i)||ze(i)?{i:fn,r:i,k:e,f:!!t}:i:null;function Qe(i,e=null,t=null,n=0,r=null,s=i===F0?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Q4(e),ref:e&&ac(e),scopeId:i1,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(p9(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Yt(t)?8:16),Sc>0&&!o&&Lr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Lr.push(l),l}const De=Zm;function Zm(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===jm)&&(i=Ea),Ju(i)){const a=Pa(i,e,!0);return t&&p9(a,t),a}if(ug(i)&&(i=i.__vccOpts),e){e=Km(e);let{class:a,style:l}=e;a&&!Yt(a)&&(e.class=Yf(a)),Bt(l)&&(_4(l)&&!Ne(l)&&(l=h0({},l)),e.style=Qc(l))}const o=Yt(i)?1:xm(i)?128:Xm(i)?64:Bt(i)?4:ze(i)?2:0;return Qe(i,e,t,n,r,o,s,!0)}function Km(i){return i?_4(i)||s1 in i?h0({},i):i:null}function Pa(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Jm(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Q4(a),ref:e&&e.ref?t&&r?Ne(r)?r.concat(ac(e)):[r,ac(e)]:ac(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==F0?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Pa(i.ssContent),ssFallback:i.ssFallback&&Pa(i.ssFallback),el:i.el,anchor:i.anchor}}function li(i=" ",e=0){return De(d9,null,i,e)}function Z4(i,e){const t=De(oc,null,i);return t.staticCount=e,t}function Mn(i){return i==null||typeof i=="boolean"?De(Ea):Ne(i)?De(F0,null,i.slice()):typeof i=="object"?Ti(i):De(d9,null,String(i))}function Ti(i){return i.el===null||i.memo?i:Pa(i)}function p9(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),p9(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(s1 in e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:fn},t=32):(e=String(e),n&64?(t=16,e=[li(e)]):t=8);i.children=e,i.shapeFlag|=t}function Jm(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Yf([e.class,n.class]));else if(r==="style")e.style=Qc([e.style,n.style]);else if(Zc(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function _n(i,e,t,n=null){mn(i,e,7,[t,n])}function $m(i,e,t,n){let r;const s=t&&t[n];if(Ne(i)||Yt(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(Bt(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}const $u=i=>i?K4(i)?m9(i)||i.proxy:$u(i.parent):null,wc=h0(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>$u(i.parent),$root:i=>$u(i.root),$emit:i=>i.emit,$options:i=>U4(i),$forceUpdate:i=>()=>P4(i.update),$nextTick:i=>o9.bind(i.proxy),$watch:i=>bm.bind(i)}),eg={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==ut&&We(n,e))return o[e]=1,n[e];if(r!==ut&&We(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&We(c,e))return o[e]=3,s[e];if(t!==ut&&We(t,e))return o[e]=4,t[e];qu&&(o[e]=0)}}const u=wc[e];let f,h;if(u)return e==="$attrs"&&z0(i,"get",e),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ut&&We(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,We(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==ut&&We(r,e)?(r[e]=t,!0):n!==ut&&We(n,e)?(n[e]=t,!0):We(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==ut&&We(i,o)||e!==ut&&We(e,o)||(a=s[0])&&We(a,o)||We(n,o)||We(wc,o)||We(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:We(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}},tg=X4();let ng=0;function ig(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||tg,s={uid:ng++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new A7(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:G4(n,r),emitsOptions:I4(n,r),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:n.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=fm.bind(null,s),i.ce&&i.ce(s),s}let Ht=null;const rg=()=>Ht||fn,Gs=i=>{Ht=i,i.scope.on()},Rr=()=>{Ht&&Ht.scope.off(),Ht=null};function K4(i){return i.vnode.shapeFlag&4}let La=!1;function sg(i,e=!1){La=e;const{props:t,children:n}=i.vnode,r=K4(i);Nm(i,t,r,e),Bm(i,n);const s=r?og(i,e):void 0;return La=!1,s}function og(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=b4(new Proxy(i.ctx,eg));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?lg(i):null;Gs(i),fo();const s=Di(n,i,0,[i.props,r]);if(ho(),Rr(),s4(s)){if(s.then(Rr,Rr),e)return s.then(o=>{u2(i,o,e)}).catch(o=>{t1(o,i,0)});i.asyncDep=s}else u2(i,s,e)}else J4(i,e)}function u2(i,e,t){ze(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Bt(e)&&(i.setupState=T4(e)),J4(i,t)}let f2;function J4(i,e,t){const n=i.type;if(!i.render){if(!e&&f2&&!n.render){const r=n.template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=h0(h0({isCustomElement:s,delimiters:a},o),l);n.render=f2(r,c)}}i.render=n.render||pn}Gs(i),fo(),Cm(i),ho(),Rr()}function ag(i){return new Proxy(i.attrs,{get(e,t){return z0(i,"get","$attrs"),e[t]}})}function lg(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=ag(i))},slots:i.slots,emit:i.emit,expose:e}}function m9(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(T4(b4(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in wc)return wc[t](i)}}))}function cg(i){return ze(i)&&i.displayName||i.name}function ug(i){return ze(i)&&"__vccOpts"in i}const un=(i,e)=>sm(i,e,La);function I0(i,e,t){const n=arguments.length;return n===2?Bt(e)&&!Ne(e)?Ju(e)?De(i,null,[e]):De(i,e):De(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Ju(t)&&(t=[t]),De(i,e,t))}const fg="3.2.33",hg="http://www.w3.org/2000/svg",wr=typeof document!="undefined"?document:null,h2=wr&&wr.createElement("template"),dg={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?wr.createElementNS(hg,i):wr.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>wr.createTextNode(i),createComment:i=>wr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>wr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},cloneNode(i){const e=i.cloneNode(!0);return"_value"in i&&(e._value=i._value),e},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{h2.innerHTML=n?`<svg>${i}</svg>`:i;const a=h2.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function pg(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function mg(i,e,t){const n=i.style,r=Yt(t);if(t&&!r){for(const s in t)ef(n,s,t[s]);if(e&&!Yt(e))for(const s in e)t[s]==null&&ef(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const d2=/\s*!important$/;function ef(i,e,t){if(Ne(t))t.forEach(n=>ef(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=gg(i,e);d2.test(t)?i.setProperty(uo(n),t.replace(d2,""),"important"):i[n]=t}}const p2=["Webkit","Moz","ms"],I1={};function gg(i,e){const t=I1[e];if(t)return t;let n=Ln(e);if(n!=="filter"&&n in i)return I1[e]=n;n=$c(n);for(let r=0;r<p2.length;r++){const s=p2[r]+n;if(s in i)return I1[e]=s}return e}const m2="http://www.w3.org/1999/xlink";function vg(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(m2,e.slice(6,e.length)):i.setAttributeNS(m2,e,t);else{const s=p7(e);t==null||s&&!n4(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function xg(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=n4(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}const[$4,yg]=(()=>{let i=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(i=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(t&&Number(t[1])<=53)}return[i,e]})();let tf=0;const _g=Promise.resolve(),bg=()=>{tf=0},Sg=()=>tf||(_g.then(bg),tf=$4());function wg(i,e,t,n){i.addEventListener(e,t,n)}function Mg(i,e,t,n){i.removeEventListener(e,t,n)}function Tg(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Ag(e);if(n){const c=s[e]=Eg(n,r);wg(i,a,c,l)}else o&&(Mg(i,a,o,l),s[e]=void 0)}}const g2=/(?:Once|Passive|Capture)$/;function Ag(i){let e;if(g2.test(i)){e={};let t;for(;t=i.match(g2);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[uo(i.slice(2)),e]}function Eg(i,e){const t=n=>{const r=n.timeStamp||$4();(yg||r>=t.attached-1)&&mn(Pg(n,t.value),e,5,[n])};return t.value=i,t.attached=Sg(),t}function Pg(i,e){if(Ne(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const v2=/^on[a-z]/,Lg=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?pg(i,n,r):e==="style"?mg(i,t,n):Zc(e)?qf(e)||Tg(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cg(i,e,n,r))?xg(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),vg(i,e,n,r))};function Cg(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&v2.test(e)&&ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||v2.test(e)&&Yt(t)?!1:e in i}const Rg=h0({patchProp:Lg},dg);let x2;function Fg(){return x2||(x2=Hm(Rg))}const Ig=(...i)=>{const e=Fg().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Dg(n);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Dg(i){return Yt(i)?document.querySelector(i):i}const Ng={class:"header fixed w-full p-3 bg-gray-500/25 backdrop-blur-xl rounded-b-2xl z-50"},Og={class:"flex"},zg=Qe("div",{class:"flex-1 sm:text-3xl text-2xl sm:py-0 py-1 pl-5 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"},[Qe("a",{href:""},"PixselCraft")],-1),Bg={class:"list text-gray-400 py-2 lg:visible sm:block hidden"},Ug={class:"flex"},kg={class:"lg:px-9 sm:px-3 px-1 hover:text-gray-300"},Gg=li(" \u0413\u043B\u0430\u0432\u043D\u0430\u044F "),Hg={class:"lg:px-9 sm:px-3 px-1 hover:text-gray-300"},Vg=li(" \u041E \u043D\u0430\u0441"),Wg={class:"lg:px-9 sm:px-3 px-1 hover:text-gray-300"},Xg=li(" \u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0430\u0442\u044C"),jg=Z4('<div class="sm:flex hidden"><a class="btn text-white bg-cyan-500/30 hover:bg-cyan-500/50 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl"> \u0412\u043E\u0439\u0442\u0438</a><a class="btn text-cyan-500 bg-cyan-900/30 hover:bg-cyan-900/50 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl"> \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</a></div><div class="sm:hidden flex"><a class="btn animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 hover:scale-110 ease-out transition p-2 px-5 mx-1 rounded-xl"><span class="material-symbols-outlined text-white align-top"> menu </span></a></div>',2),Yg={setup(i){return nl(()=>{let e=0;const t=200,n="-translate-y-16",r=document.querySelector(".header"),s=()=>window.pageYOffset||document.documentElement.scrollTop,o=()=>r.classList.contains(n);window.addEventListener("scroll",()=>{s()>e&&!o()&&s()>t?r.classList.add(n):s()<e&&o()&&r.classList.remove(n),e=s()})}),(e,t)=>{const n=Xn("router-link");return Cr(),Ns("div",Ng,[Qe("div",Og,[zg,Qe("div",Bg,[Qe("ul",Ug,[Qe("li",kg,[De(n,{to:"/"},{default:Gt(()=>[Gg]),_:1})]),Qe("li",Hg,[De(n,{to:"/about"},{default:Gt(()=>[Vg]),_:1})]),Qe("li",Wg,[De(n,{to:"/contact"},{default:Gt(()=>[Xg]),_:1})])])]),jg])])}}},qg={setup(i){return(e,t)=>{const n=Xn("router-view");return Cr(),Ns(F0,null,[De(Yg),Qe("main",null,[De(n)])],64)}}},Qg="modulepreload",y2={},Zg="/regxxxman.github.io/pixselcraftvue/",_2=function(e,t){return!t||t.length===0?e():Promise.all(t.map(n=>{if(n=`${Zg}${n}`,n in y2)return;y2[n]=!0;const r=n.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Qg,r||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),r)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const e5=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",po=i=>e5?Symbol(i):"_vr_"+i,Kg=po("rvlm"),b2=po("rvd"),g9=po("r"),t5=po("rl"),nf=po("rvl"),Ss=typeof window!="undefined";function Jg(i){return i.__esModule||e5&&i[Symbol.toStringTag]==="Module"}const ot=Object.assign;function D1(i,e){const t={};for(const n in e){const r=e[n];t[n]=Array.isArray(r)?r.map(i):i(r)}return t}const ua=()=>{},$g=/\/$/,ev=i=>i.replace($g,"");function N1(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("?"),l=e.indexOf("#",a>-1?a:0);return a>-1&&(n=e.slice(0,a),s=e.slice(a+1,l>-1?l:e.length),r=i(s)),l>-1&&(n=n||e.slice(0,l),o=e.slice(l,e.length)),n=rv(n!=null?n:e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function tv(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function S2(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function nv(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&Hs(e.matched[n],t.matched[r])&&n5(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Hs(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function n5(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!iv(i[t],e[t]))return!1;return!0}function iv(i,e){return Array.isArray(i)?w2(i,e):Array.isArray(e)?w2(e,i):i===e}function w2(i,e){return Array.isArray(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function rv(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let r=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],!(r===1||o==="."))if(o==="..")r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var Ca;(function(i){i.pop="pop",i.push="push"})(Ca||(Ca={}));var fa;(function(i){i.back="back",i.forward="forward",i.unknown=""})(fa||(fa={}));function sv(i){if(!i)if(Ss){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),ev(i)}const ov=/^[^#]+#/;function av(i,e){return i.replace(ov,"#")+e}function lv(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const o1=()=>({left:window.pageXOffset,top:window.pageYOffset});function cv(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=lv(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function M2(i,e){return(history.state?history.state.position-e:-1)+i}const rf=new Map;function uv(i,e){rf.set(i,e)}function fv(i){const e=rf.get(i);return rf.delete(i),e}let hv=()=>location.protocol+"//"+location.host;function i5(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),S2(l,"")}return S2(t,i)+n+r}function dv(i,e,t,n){let r=[],s=[],o=null;const a=({state:h})=>{const d=i5(i,location),g=t.value,v=e.value;let x=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}x=v?h.position-v.position:0}else n(d);r.forEach(p=>{p(t.value,g,{delta:x,type:Ca.pop,direction:x?x>0?fa.forward:fa.back:fa.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;!h.state||h.replaceState(ot({},h.state,{scroll:o1()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function T2(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?o1():null}}function pv(i){const{history:e,location:t}=window,n={value:i5(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=i.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?i:i.slice(f))+l:hv()+i+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=ot({},e.state,T2(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:o1()});s(u.current,u,!0);const f=ot({},T2(n.value,l,null),{position:u.position+1},c);s(l,f,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function mv(i){i=sv(i);const e=pv(i),t=dv(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=ot({location:"",base:i,go:n,createHref:av.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function gv(i){return typeof i=="string"||i&&typeof i=="object"}function r5(i){return typeof i=="string"||typeof i=="symbol"}const di={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},s5=po("nf");var A2;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(A2||(A2={}));function Vs(i,e){return ot(new Error,{type:i,[s5]:!0},e)}function dr(i,e){return i instanceof Error&&s5 in i&&(e==null||!!(i.type&e))}const E2="[^/]+?",vv={sensitive:!1,strict:!1,start:!0,end:!0},xv=/[.+*?^${}()[\]/\\]/g;function yv(i,e){const t=ot({},vv,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(xv,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:v,optional:x,regexp:p}=h;s.push({name:g,repeatable:v,optional:x});const m=p||E2;if(m!==E2){d+=10;try{new RegExp(`(${m})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${g}" (${m}): `+_.message)}}let y=v?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;f||(y=x&&c.length<2?`(?:/${y})`:"/"+y),x&&(y+="?"),r+=y,d+=20,x&&(d+=-8),v&&(d+=-20),m===".*"&&(d+=-50)}u.push(d)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of i){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:v,optional:x}=d,p=g in c?c[g]:"";if(Array.isArray(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const m=Array.isArray(p)?p.join("/"):p;if(!m)if(x)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=m}}return u}return{re:o,score:n,keys:s,parse:a,stringify:l}}function _v(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function bv(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=_v(n[t],r[t]);if(s)return s;t++}return r.length-n.length}const Sv={type:0,value:""},wv=/[a-zA-Z0-9_]/;function Mv(i){if(!i)return[[]];if(i==="/")return[[Sv]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){!c||(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=n;break;case 1:l==="("?t=2:wv.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function Tv(i,e,t){const n=yv(Mv(i.path),t),r=ot(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Av(i,e){const t=[],n=new Map;e=L2({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,f,h){const d=!h,g=Pv(u);g.aliasOf=h&&h.record;const v=L2(e,u),x=[g];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const _ of y)x.push(ot({},g,{components:h?h.record.components:g.components,path:_,aliasOf:h?h.record:g}))}let p,m;for(const y of x){const{path:_}=y;if(f&&_[0]!=="/"){const b=f.record.path,w=b[b.length-1]==="/"?"":"/";y.path=f.record.path+(_&&w+_)}if(p=Tv(y,f,v),h?h.alias.push(p):(m=m||p,m!==p&&m.alias.push(p),d&&u.name&&!P2(p)&&o(u.name)),"children"in g){const b=g.children;for(let w=0;w<b.length;w++)s(b[w],p,h&&h.children[w])}h=h||p,l(p)}return m?()=>{o(m)}:ua}function o(u){if(r5(u)){const f=n.get(u);f&&(n.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&bv(u,t[f])>=0;)f++;t.splice(f,0,u),u.record.name&&!P2(u)&&n.set(u.record.name,u)}function c(u,f){let h,d={},g,v;if("name"in u&&u.name){if(h=n.get(u.name),!h)throw Vs(1,{location:u});v=h.record.name,d=ot(Ev(f.params,h.keys.filter(m=>!m.optional).map(m=>m.name)),u.params),g=h.stringify(d)}else if("path"in u)g=u.path,h=t.find(m=>m.re.test(g)),h&&(d=h.parse(g),v=h.record.name);else{if(h=f.name?n.get(f.name):t.find(m=>m.re.test(f.path)),!h)throw Vs(1,{location:u,currentLocation:f});v=h.record.name,d=ot({},f.params,u.params),g=h.stringify(d)}const x=[];let p=h;for(;p;)x.unshift(p.record),p=p.parent;return{name:v,path:g,params:d,matched:x,meta:Cv(x)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ev(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function Pv(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:Lv(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||{}:{default:i.component}}}function Lv(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function P2(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function Cv(i){return i.reduce((e,t)=>ot(e,t.meta),{})}function L2(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}const o5=/#/g,Rv=/&/g,Fv=/\//g,Iv=/=/g,Dv=/\?/g,a5=/\+/g,Nv=/%5B/g,Ov=/%5D/g,l5=/%5E/g,zv=/%60/g,c5=/%7B/g,Bv=/%7C/g,u5=/%7D/g,Uv=/%20/g;function v9(i){return encodeURI(""+i).replace(Bv,"|").replace(Nv,"[").replace(Ov,"]")}function kv(i){return v9(i).replace(c5,"{").replace(u5,"}").replace(l5,"^")}function sf(i){return v9(i).replace(a5,"%2B").replace(Uv,"+").replace(o5,"%23").replace(Rv,"%26").replace(zv,"`").replace(c5,"{").replace(u5,"}").replace(l5,"^")}function Gv(i){return sf(i).replace(Iv,"%3D")}function Hv(i){return v9(i).replace(o5,"%23").replace(Dv,"%3F")}function Vv(i){return i==null?"":Hv(i).replace(Fv,"%2F")}function Mc(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function Wv(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(a5," "),o=s.indexOf("="),a=Mc(o<0?s:s.slice(0,o)),l=o<0?null:Mc(s.slice(o+1));if(a in e){let c=e[a];Array.isArray(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function C2(i){let e="";for(let t in i){const n=i[t];if(t=Gv(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Array.isArray(n)?n.map(s=>s&&sf(s)):[n&&sf(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Xv(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=Array.isArray(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}function Bo(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function Ai(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Vs(4,{from:t,to:e})):f instanceof Error?a(f):gv(f)?a(Vs(2,{from:e,to:f})):(s&&n.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function O1(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(jv(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Ai(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Jg(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&Ai(h,t,n,s,o)()}))}}return r}function jv(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function R2(i){const e=b0(g9),t=b0(t5),n=un(()=>e.resolve(W0(i.to))),r=un(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Hs.bind(null,u));if(h>-1)return h;const d=F2(l[c-2]);return c>1&&F2(u)===d&&f[f.length-1].path!==d?f.findIndex(Hs.bind(null,l[c-2])):h}),s=un(()=>r.value>-1&&Zv(t.params,n.value.params)),o=un(()=>r.value>-1&&r.value===t.matched.length-1&&n5(t.params,n.value.params));function a(l={}){return Qv(l)?e[W0(i.replace)?"replace":"push"](W0(i.to)).catch(ua):Promise.resolve()}return{route:n,href:un(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const Yv=Ae({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:R2,setup(i,{slots:e}){const t=tl(R2(i)),{options:n}=b0(g9),r=un(()=>({[I2(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[I2(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:I0("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),qv=Yv;function Qv(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function Zv(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!Array.isArray(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function F2(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const I2=(i,e,t)=>i!=null?i:e!=null?e:t,Kv=Ae({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(i,{attrs:e,slots:t}){const n=b0(nf),r=un(()=>i.route||n.value),s=b0(b2,0),o=un(()=>r.value.matched[s]);Pr(b2,s+1),Pr(Kg,o),Pr(nf,r);const a=n0();return je(()=>[a.value,o.value,i.name],([l,c,u],[f,h,d])=>{c&&(c.instances[u]=l,h&&h!==c&&l&&l===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!Hs(c,h)||!f)&&(c.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,c=o.value,u=c&&c.components[i.name],f=i.name;if(!u)return D2(t.default,{Component:u,route:l});const h=c.props[i.name],d=h?h===!0?l.params:typeof h=="function"?h(l):h:null,v=I0(u,ot({},d,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(c.instances[f]=null)},ref:a}));return D2(t.default,{Component:v,route:l})||v}}});function D2(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const Jv=Kv;function $v(i){const e=Av(i.routes,i),t=i.parseQuery||Wv,n=i.stringifyQuery||C2,r=i.history,s=Bo(),o=Bo(),a=Bo(),l=em(di);let c=di;Ss&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=D1.bind(null,H=>""+H),f=D1.bind(null,Vv),h=D1.bind(null,Mc);function d(H,X){let J,ae;return r5(H)?(J=e.getRecordMatcher(H),ae=X):ae=H,e.addRoute(ae,J)}function g(H){const X=e.getRecordMatcher(H);X&&e.removeRoute(X)}function v(){return e.getRoutes().map(H=>H.record)}function x(H){return!!e.getRecordMatcher(H)}function p(H,X){if(X=ot({},X||l.value),typeof H=="string"){const Z=N1(t,H,X.path),C=e.resolve({path:Z.path},X),N=r.createHref(Z.fullPath);return ot(Z,C,{params:h(C.params),hash:Mc(Z.hash),redirectedFrom:void 0,href:N})}let J;if("path"in H)J=ot({},H,{path:N1(t,H.path,X.path).path});else{const Z=ot({},H.params);for(const C in Z)Z[C]==null&&delete Z[C];J=ot({},H,{params:f(H.params)}),X.params=f(X.params)}const ae=e.resolve(J,X),de=H.hash||"";ae.params=u(h(ae.params));const ve=tv(n,ot({},H,{hash:kv(de),path:ae.path})),be=r.createHref(ve);return ot({fullPath:ve,hash:de,query:n===C2?Xv(H.query):H.query||{}},ae,{redirectedFrom:void 0,href:be})}function m(H){return typeof H=="string"?N1(t,H,l.value.path):ot({},H)}function y(H,X){if(c!==H)return Vs(8,{from:X,to:H})}function _(H){return S(H)}function b(H){return _(ot(m(H),{replace:!0}))}function w(H){const X=H.matched[H.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let ae=typeof J=="function"?J(H):J;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=m(ae):{path:ae},ae.params={}),ot({query:H.query,hash:H.hash,params:H.params},ae)}}function S(H,X){const J=c=p(H),ae=l.value,de=H.state,ve=H.force,be=H.replace===!0,Z=w(J);if(Z)return S(ot(m(Z),{state:de,force:ve,replace:be}),X||J);const C=J;C.redirectedFrom=X;let N;return!ve&&nv(n,ae,J)&&(N=Vs(16,{to:C,from:ae}),ue(ae,ae,!0,!1)),(N?Promise.resolve(N):P(C,ae)).catch(V=>dr(V)?V:U(V,C,ae)).then(V=>{if(V){if(dr(V,2))return S(ot(m(V.to),{state:de,force:ve,replace:be}),X||C)}else V=T(C,ae,!0,be,de);return F(C,ae,V),V})}function M(H,X){const J=y(H,X);return J?Promise.reject(J):Promise.resolve()}function P(H,X){let J;const[ae,de,ve]=ex(H,X);J=O1(ae.reverse(),"beforeRouteLeave",H,X);for(const Z of ae)Z.leaveGuards.forEach(C=>{J.push(Ai(C,H,X))});const be=M.bind(null,H,X);return J.push(be),Zr(J).then(()=>{J=[];for(const Z of s.list())J.push(Ai(Z,H,X));return J.push(be),Zr(J)}).then(()=>{J=O1(de,"beforeRouteUpdate",H,X);for(const Z of de)Z.updateGuards.forEach(C=>{J.push(Ai(C,H,X))});return J.push(be),Zr(J)}).then(()=>{J=[];for(const Z of H.matched)if(Z.beforeEnter&&!X.matched.includes(Z))if(Array.isArray(Z.beforeEnter))for(const C of Z.beforeEnter)J.push(Ai(C,H,X));else J.push(Ai(Z.beforeEnter,H,X));return J.push(be),Zr(J)}).then(()=>(H.matched.forEach(Z=>Z.enterCallbacks={}),J=O1(ve,"beforeRouteEnter",H,X),J.push(be),Zr(J))).then(()=>{J=[];for(const Z of o.list())J.push(Ai(Z,H,X));return J.push(be),Zr(J)}).catch(Z=>dr(Z,8)?Z:Promise.reject(Z))}function F(H,X,J){for(const ae of a.list())ae(H,X,J)}function T(H,X,J,ae,de){const ve=y(H,X);if(ve)return ve;const be=X===di,Z=Ss?history.state:{};J&&(ae||be?r.replace(H.fullPath,ot({scroll:be&&Z&&Z.scroll},de)):r.push(H.fullPath,de)),l.value=H,ue(H,X,J,be),ie()}let D;function A(){D=r.listen((H,X,J)=>{const ae=p(H),de=w(ae);if(de){S(ot(de,{replace:!0}),ae).catch(ua);return}c=ae;const ve=l.value;Ss&&uv(M2(ve.fullPath,J.delta),o1()),P(ae,ve).catch(be=>dr(be,12)?be:dr(be,2)?(S(be.to,ae).then(Z=>{dr(Z,20)&&!J.delta&&J.type===Ca.pop&&r.go(-1,!1)}).catch(ua),Promise.reject()):(J.delta&&r.go(-J.delta,!1),U(be,ae,ve))).then(be=>{be=be||T(ae,ve,!1),be&&(J.delta?r.go(-J.delta,!1):J.type===Ca.pop&&dr(be,20)&&r.go(-1,!1)),F(ae,ve,be)}).catch(ua)})}let R=Bo(),O=Bo(),z;function U(H,X,J){ie(H);const ae=O.list();return ae.length?ae.forEach(de=>de(H,X,J)):console.error(H),Promise.reject(H)}function j(){return z&&l.value!==di?Promise.resolve():new Promise((H,X)=>{R.add([H,X])})}function ie(H){z||(z=!0,A(),R.list().forEach(([X,J])=>H?J(H):X()),R.reset())}function ue(H,X,J,ae){const{scrollBehavior:de}=i;if(!Ss||!de)return Promise.resolve();const ve=!J&&fv(M2(H.fullPath,0))||(ae||!J)&&history.state&&history.state.scroll||null;return o9().then(()=>de(H,X,ve)).then(be=>be&&cv(be)).catch(be=>U(be,H,X))}const oe=H=>r.go(H);let xe;const $=new Set;return{currentRoute:l,addRoute:d,removeRoute:g,hasRoute:x,getRoutes:v,resolve:p,options:i,push:_,replace:b,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:O.add,isReady:j,install(H){const X=this;H.component("RouterLink",qv),H.component("RouterView",Jv),H.config.globalProperties.$router=X,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>W0(l)}),Ss&&!xe&&l.value===di&&(xe=!0,_(r.location).catch(de=>{}));const J={};for(const de in di)J[de]=un(()=>l.value[de]);H.provide(g9,X),H.provide(t5,tl(J)),H.provide(nf,l);const ae=H.unmount;$.add(H),H.unmount=function(){$.delete(H),$.size<1&&(c=di,D&&D(),l.value=di,xe=!1,z=!1),ae()}}}}function Zr(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function ex(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>Hs(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Hs(c,l))||r.push(l))}return[t,n,r]}function jn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function f5(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var O0={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ws={duration:.5,overwrite:!1,delay:0},x9,o0,Ft,Y0=1e8,at=1/Y0,of=Math.PI*2,tx=of/4,nx=0,h5=Math.sqrt,ix=Math.cos,rx=Math.sin,qt=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},ti=function(e){return typeof e=="number"},y9=function(e){return typeof e=="undefined"},Cn=function(e){return typeof e=="object"},S0=function(e){return e!==!1},d5=function(){return typeof window!="undefined"},xl=function(e){return Mt(e)||qt(e)},p5=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},a0=Array.isArray,af=/(?:-?\.?\d|\.)+/gi,m5=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,As=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,z1=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,g5=/[+-]=-?[.\d]+/,v5=/[^,'"\[\]\s]+/gi,sx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,V0,lf,_9,B0={},Tc={},x5,y5=function(e){return(Tc=zr(e,B0))&&U0},b9=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ac=function(e,t){return!t&&console.warn(e)},_5=function(e,t){return e&&(B0[e]=t)&&Tc&&(Tc[e]=t)||B0},Ra=function(){return 0},ox={suppressEvents:!0,isStart:!0,kill:!1},lc={suppressEvents:!0,kill:!1},ax={suppressEvents:!0},S9={},Ni=[],cf={},b5,C0={},B1={},N2=30,cc=[],w9="",M9=function(e){var t=e[0],n,r;if(Cn(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=cc.length;r--&&!cc[r].targetTest(t););n=cc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new V5(e[r],n)))||e.splice(r,1);return e},Fr=function(e){return e._gsap||M9(q0(e))[0]._gsap},S5=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():y9(n)&&e.getAttribute&&e.getAttribute(t)||n},w0=function(e,t){return(e=e.split(",")).forEach(t)||e},Pt=function(e){return Math.round(e*1e5)/1e5||0},Jt=function(e){return Math.round(e*1e7)/1e7||0},Os=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},lx=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Ec=function(){var e=Ni.length,t=Ni.slice(0),n,r;for(cf={},Ni.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},w5=function(e,t,n,r){Ni.length&&!o0&&Ec(),e.render(t,n,r||o0&&t<0&&(e._initted||e._startAt)),Ni.length&&!o0&&Ec()},M5=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(v5).length<2?t:qt(e)?e.trim():e},T5=function(e){return e},en=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cx=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},zr=function(e,t){for(var n in t)e[n]=t[n];return e},O2=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Cn(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Pc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ha=function(e){var t=e.parent||yt,n=e.keyframes?cx(a0(e.keyframes)):en;if(S0(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ux=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},A5=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},a1=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Vi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ir=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},fx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},uf=function(e,t,n,r){return e._startAt&&(o0?e._startAt.revert(lc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},hx=function i(e){return!e||e._ts&&i(e.parent)},z2=function(e){return e._repeat?Xs(e._tTime,e=e.duration()+e._rDelay)*e:0},Xs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Lc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},l1=function(e){return e._end=Jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||at)||0))},c1=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Jt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),l1(e),n._dirty||Ir(n,e)),e},E5=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Lc(e.rawTime(),t),(!t._dur||il(0,t.totalDuration(),n)-t._tTime>at)&&t.render(n,!0)),Ir(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-at}},An=function(e,t,n,r){return t.parent&&Vi(t),t._start=Jt((ti(n)?n:n||e!==yt?H0(e,n,t):e._time)+t._delay),t._end=Jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),A5(e,t,"_first","_last",e._sort?"_start":0),ff(t)||(e._recent=t),r||E5(e,t),e._ts<0&&c1(e,e._tTime),e},P5=function(e,t){return(B0.ScrollTrigger||b9("scrollTrigger",t))&&B0.ScrollTrigger.create(t,e)},L5=function(e,t,n,r,s){if(A9(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!o0&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&b5!==N0.frame)return Ni.push(e),e._lazy=[s,r],1},dx=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},ff=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},px=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&dx(e)&&!(!e._initted&&ff(e))||(e._ts<0||e._dp._ts<0)&&!ff(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=il(0,e._tDur,t),u=Xs(l,a),e._yoyo&&u&1&&(o=1-o),u!==Xs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||o0||r||e._zTime===at||!t&&e._zTime){if(!e._initted&&L5(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?at:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&uf(e,t,n,!0),e._onUpdate&&!n&&Q0(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Q0(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vi(e,1),!n&&!o0&&(Q0(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},mx=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},js=function(e,t,n,r){var s=e._repeat,o=Jt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&c1(e,e._tTime=e._tDur*a),e.parent&&l1(e),n||Ir(e.parent,e),e},B2=function(e){return e instanceof y0?Ir(e):js(e,e._dur)},gx={_start:0,endTime:Ra,totalDuration:Ra},H0=function i(e,t,n){var r=e.labels,s=e._recent||gx,o=e.duration()>=Y0?s.endTime(!1):e._dur,a,l,c;return qt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(a0(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},da=function(e,t,n){var r=ti(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=S0(l.vars.inherit)&&l.parent;o.immediateRender=S0(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Nt(t[0],o,t[s+1])},Ki=function(e,t){return e||e===0?t(e):t},il=function(e,t,n){return n<e?e:n>t?t:n},r0=function(e,t){return!qt(e)||!(t=sx.exec(e))?"":t[1]},vx=function(e,t,n){return Ki(n,function(r){return il(e,t,r)})},hf=[].slice,C5=function(e,t){return e&&Cn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Cn(e[0]))&&!e.nodeType&&e!==V0},xx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return qt(r)&&!t||C5(r,1)?(s=n).push.apply(s,q0(r)):n.push(r)})||n},q0=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):qt(e)&&!n&&(lf||!Ys())?hf.call((t||_9).querySelectorAll(e),0):a0(e)?xx(e,n):C5(e)?hf.call(e,0):e?[e]:[]},df=function(e){return e=q0(e)[0]||Ac("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return q0(t,n.querySelectorAll?n:n===e?Ac("Invalid scope")||_9.createElement("div"):e)}},R5=function(e){return e.sort(function(){return .5-Math.random()})},F5=function(e){if(Mt(e))return e;var t=Cn(e)?e:{each:e},n=Dr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return qt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var v=(g||t).length,x=o[v],p,m,y,_,b,w,S,M,P;if(!x){if(P=t.grid==="auto"?0:(t.grid||[1,Y0])[1],!P){for(S=-Y0;S<(S=g[P++].getBoundingClientRect().left)&&P<v;);P--}for(x=o[v]=[],p=l?Math.min(P,v)*u-.5:r%P,m=P===Y0?0:l?v*f/P-.5:r/P|0,S=0,M=Y0,w=0;w<v;w++)y=w%P-p,_=m-(w/P|0),x[w]=b=c?Math.abs(c==="y"?_:y):h5(y*y+_*_),b>S&&(S=b),b<M&&(M=b);r==="random"&&R5(x),x.max=S-M,x.min=M,x.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(P>v?v-1:c?c==="y"?v/P:P:Math.max(P,v/P))||0)*(r==="edges"?-1:1),x.b=v<0?s-v:s,x.u=r0(t.amount||t.each)||0,n=n&&v<0?k5(n):n}return v=(x[h]-x.min)/x.max||0,Jt(x.b+(n?n(v):v)*x.v)+x.u}},pf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Jt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ti(n)?0:r0(n))}},I5=function(e,t){var n=a0(e),r,s;return!n&&Cn(e)&&(r=n=e.radius||Y0,e.values?(e=q0(e.values),(s=!ti(e[0]))&&(r*=r)):e=pf(e.increment)),Ki(t,n?Mt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Y0,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||ti(o)?u:u+r0(o)}:pf(e))},D5=function(e,t,n,r){return Ki(a0(e)?!t:n===!0?!!(n=0):!r,function(){return a0(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},yx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},_x=function(e,t){return function(n){return e(parseFloat(n))+(t||r0(n))}},bx=function(e,t,n){return O5(e,t,0,1,n)},N5=function(e,t,n){return Ki(n,function(r){return e[~~t(r)]})},Sx=function i(e,t,n){var r=t-e;return a0(e)?N5(e,i(0,e.length),t):Ki(n,function(s){return(r+(s-e)%r)%r+e})},wx=function i(e,t,n){var r=t-e,s=r*2;return a0(e)?N5(e,i(0,e.length-1),t):Ki(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Fa=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?v5:af),n+=e.substr(t,r-t)+D5(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},O5=function(e,t,n,r,s){var o=t-e,a=r-n;return Ki(s,function(l){return n+((l-e)/o*a||0)})},Mx=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=qt(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(a0(e)&&!a0(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var v=Math.min(h,~~g);return u[v](g-v)},n=t}else r||(e=zr(a0(e)?[]:{},e));if(!u){for(l in t)T9.call(a,e,l,"get",t[l]);s=function(g){return L9(g,a)||(o?e.p:e)}}}return Ki(n,s)},U2=function(e,t,n){var r=e.labels,s=Y0,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Q0=function(e,t,n){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,c,u;if(!!s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Ni.length&&Ec(),a&&(Ft=a),u=l?s.apply(c,l):s.call(c),Ft=o,u},ia=function(e){return Vi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!o0),e.progress()<1&&Q0(e,"onInterrupt"),e},Es,Tx=function(e){e=!e.name&&e.default||e;var t=e.name,n=Mt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ra,render:L9,add:T9,kill:Gx,modifier:kx,rawVars:0},o={targetTest:0,get:0,getSetter:P9,aliases:{},register:0};if(Ys(),e!==r){if(C0[t])return;en(r,en(Pc(e,s),o)),zr(r.prototype,zr(s,Pc(e,o))),C0[r.prop=t]=r,e.targetTest&&(cc.push(r),S9[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_5(t,r),e.register&&e.register(U0,r,M0)},st=255,ra={aqua:[0,st,st],lime:[0,st,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,st],navy:[0,0,128],white:[st,st,st],olive:[128,128,0],yellow:[st,st,0],orange:[st,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[st,0,0],pink:[st,192,203],cyan:[0,st,st],transparent:[st,st,st,0]},U1=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*st+.5|0},z5=function(e,t,n){var r=e?ti(e)?[e>>16,e>>8&st,e&st]:0:ra.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ra[e])r=ra[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&st,r&st,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&st,e&st]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(af),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=U1(l+1/3,s,o),r[1]=U1(l,s,o),r[2]=U1(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(m5),n&&r.length<4&&(r[3]=1),r}else r=e.match(af)||ra.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/st,o=r[1]/st,a=r[2]/st,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},B5=function(e){var t=[],n=[],r=-1;return e.split(Oi).forEach(function(s){var o=s.match(As)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},k2=function(e,t,n){var r="",s=(e+r).match(Oi),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=z5(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=B5(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Oi,"1").split(As),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Oi),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Oi=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ra)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Ax=/hsl[a]?\(/,U5=function(e){var t=e.join(" "),n;if(Oi.lastIndex=0,Oi.test(t))return n=Ax.test(t),e[1]=k2(e[1],n),e[0]=k2(e[0],n,B5(e[1])),!0},Ia,N0=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function v(x){var p=i()-r,m=x===!0,y,_,b,w;if(p>e&&(n+=p-t),r+=p,b=r-n,y=b-o,(y>0||m)&&(w=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,o+=y+(y>=s?4:s-y),_=1),m||(l=c(v)),_)for(d=0;d<a.length;d++)a[d](b,h,w,x)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(x){return h/(1e3/(x||60))},wake:function(){x5&&(!lf&&d5()&&(V0=lf=window,_9=V0.document||{},B0.gsap=U0,(V0.gsapVersions||(V0.gsapVersions=[])).push(U0.version),y5(Tc||V0.GreenSockGlobals||!V0.gsap&&V0||{}),u=V0.requestAnimationFrame),l&&f.sleep(),c=u||function(x){return setTimeout(x,o-f.time*1e3+1|0)},Ia=1,g(2))},sleep:function(){(u?V0.cancelAnimationFrame:clearTimeout)(l),Ia=0,c=Ra},lagSmoothing:function(x,p){e=x||1/0,t=Math.min(p||33,e)},fps:function(x){s=1e3/(x||240),o=f.time*1e3+s},add:function(x,p,m){var y=p?function(_,b,w,S){x(_,b,w,S),f.remove(y)}:x;return f.remove(x),a[m?"unshift":"push"](y),Ys(),y},remove:function(x,p){~(p=a.indexOf(x))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),Ys=function(){return!Ia&&N0.wake()},Ve={},Ex=/^[\d.\-M][\d.\-,\s]/,Px=/["']/g,Lx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(Px,"").trim():+c,r=l.substr(a+1).trim();return t},Cx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Rx=function(e){var t=(e+"").split("("),n=Ve[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Lx(t[1])]:Cx(e).split(",").map(M5)):Ve._CE&&Ex.test(e)?Ve._CE("",e):n},k5=function(e){return function(t){return 1-e(1-t)}},G5=function i(e,t){for(var n=e._first,r;n;)n instanceof y0?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Dr=function(e,t){return e&&(Mt(e)?e:Ve[e]||Rx(e))||t},Gr=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return w0(e,function(a){Ve[a]=B0[a]=s,Ve[o=a.toLowerCase()]=n;for(var l in s)Ve[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[a+"."+l]=s[l]}),s},H5=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},k1=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/of*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*rx((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:H5(a);return s=of/s,l.config=function(c,u){return i(e,c,u)},l},G1=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:H5(n);return r.config=function(s){return i(e,s)},r};w0("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Gr(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;Gr("Elastic",k1("in"),k1("out"),k1());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Gr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Gr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Gr("Circ",function(i){return-(h5(1-i*i)-1)});Gr("Sine",function(i){return i===1?1:-ix(i*tx)+1});Gr("Back",G1("in"),G1("out"),G1());Ve.SteppedEase=Ve.steps=B0.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-at;return function(a){return((r*il(0,o,a)|0)+s)*n}}};Ws.ease=Ve["quad.out"];w0("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return w9+=i+","+i+"Params,"});var V5=function(e,t){this.id=nx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:S5,this.set=t?t.getSetter:P9},qs=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,js(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),Ia||N0.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(c1(this,n),!s._dp||s.parent||E5(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&An(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===at||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),w5(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+z2(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+z2(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Xs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-at?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Lc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-at?0:this._rts,this.totalTime(il(-this._delay,this._tDur,r),!0),l1(this),fx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==at&&(this._tTime-=at)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&An(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(S0(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ax);var r=o0;return o0=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),o0=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,B2(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,B2(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(H0(this,n),S0(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,S0(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-at:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-at,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-at)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Mt(n)?n:T5,a=function(){var c=r.then;r.then=null,Mt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ia(this)},i}();en(qs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-at,_prom:0,_ps:!1,_rts:1});var y0=function(i){f5(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=S0(n.sortChildren),yt&&An(n.parent||yt,jn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&P5(jn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return da(0,arguments,this),this},t.from=function(r,s,o){return da(1,arguments,this),this},t.fromTo=function(r,s,o,a){return da(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ha(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Nt(r,s,H0(this,o),1),this},t.call=function(r,s,o){return An(this,Nt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Nt(r,o,H0(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,ha(o).immediateRender=S0(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,ha(a).immediateRender=S0(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Jt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,v,x,p,m,y,_,b,w,S;if(this!==yt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,_=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,x=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,s,o);if(h=Jt(u%x),u===l?(v=this._repeat,h=c):(v=~~(u/x),v&&v===u/x&&(h=c,v--),h>c&&(h=c)),b=Xs(this._tTime,x),!a&&this._tTime&&b!==v&&(b=v),w&&v&1&&(h=c-h,S=1),v!==b&&!this._lock){var M=w&&b&1,P=M===(w&&v&1);if(v<b&&(M=!M),a=M?0:c,this._lock=1,this.render(a||(S?0:Jt(v*x)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Q0(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=M?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;G5(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=mx(this,Jt(a),Jt(h)),m&&(u-=h-(h=m._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&(Q0(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&m!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){m=0,g&&(u+=this._zTime=-at);break}}d=g}else{d=this._last;for(var F=r<0?r:h;d;){if(g=d._prev,(d._act||F<=d._end)&&d._ts&&m!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(F-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(F-d._start)*d._ts,s,o||o0&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){m=0,g&&(u+=this._zTime=F?-at:at);break}}d=g}}if(m&&!s&&(this.pause(),m.render(h>=a?0:-at)._zTime=h>=a?1:-1,this._ts))return this._start=_,l1(this),this.render(r,s,o);this._onUpdate&&!s&&Q0(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(_===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vi(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Q0(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ti(s)||(s=H0(this,s,r)),!(r instanceof qs)){if(a0(r))return r.forEach(function(a){return o.add(a,s)}),this;if(qt(r))return this.addLabel(r,s);if(Mt(r))r=Nt.delayedCall(0,r);else return this}return this!==r?An(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Y0);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Nt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return qt(r)?this.removeLabel(r):Mt(r)?this.killTweensOf(r):(a1(this,r),r===this._recent&&(this._recent=this._last),Ir(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(N0.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=H0(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Nt.delayedCall(0,s||Ra,o);return a.data="isPause",this._hasPause=1,An(this,a,H0(this,r))},t.removePause=function(r){var s=this._first;for(r=H0(this,r);s;)s._start===r&&s.data==="isPause"&&Vi(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Pi!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=q0(r),l=this._first,c=ti(s),u;l;)l instanceof Nt?lx(l._targets,a)&&(c?(!Pi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=H0(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Nt.to(o,en({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||at,onStart:function(){if(o.pause(),!d){var x=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==x&&js(g,x,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,en({startAt:{time:H0(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),U2(this,H0(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),U2(this,H0(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+at)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ir(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ir(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Y0,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,An(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;js(o,o===yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(yt._ts&&(w5(yt,Lc(r,yt)),b5=N0.frame),N0.frame>=N2){N2+=O0.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&O0.autoSleep&&N0._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||N0.sleep()}}},e}(qs);en(y0.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fx=function(e,t,n,r,s,o,a){var l=new M0(this._pt,e,t,0,1,Q5,null,s),c=0,u=0,f,h,d,g,v,x,p,m;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Fa(r)),o&&(m=[n,r],o(m,e,t),n=m[0],r=m[1]),h=n.match(z1)||[];f=z1.exec(r);)g=f[0],v=r.substring(c,f.index),d?d=(d+1)%5:v.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(x=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:x,c:g.charAt(1)==="="?Os(x,g)-x:parseFloat(g)-x,m:d&&d<4?Math.round:0},c=z1.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(g5.test(r)||p)&&(l.e=0),this._pt=l,l},T9=function(e,t,n,r,s,o,a,l,c,u){Mt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:Mt(f)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Mt(f)?c?zx:Y5:E9,g;if(qt(r)&&(~r.indexOf("random(")&&(r=Fa(r)),r.charAt(1)==="="&&(g=Os(h,r)+(r0(h)||0),(g||g===0)&&(r=g))),!u||h!==r||mf)return!isNaN(h*r)&&r!==""?(g=new M0(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?Ux:q5,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&b9(t,r),Fx.call(this,e,t,h,r,d,l||O0.stringFilter,c))},Ix=function(e,t,n,r,s){if(Mt(e)&&(e=pa(e,s,t,n,r)),!Cn(e)||e.style&&e.nodeType||a0(e)||p5(e))return qt(e)?pa(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=pa(e[a],s,t,n,r);return o},W5=function(e,t,n,r,s,o){var a,l,c,u;if(C0[e]&&(a=new C0[e]).init(s,a.rawVars?t[e]:Ix(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new M0(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Es))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Pi,mf,A9=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,f=r.callbackScope,h=r.runBackwards,d=r.yoyoEase,g=r.keyframes,v=r.autoRevert,x=e._dur,p=e._startAt,m=e._targets,y=e.parent,_=y&&y.data==="nested"?y.vars.targets:m,b=e._overwrite==="auto"&&!x9,w=e.timeline,S,M,P,F,T,D,A,R,O,z,U,j,ie;if(w&&(!g||!s)&&(s="none"),e._ease=Dr(s,Ws.ease),e._yEase=d?k5(Dr(d===!0?s:d,Ws.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!w&&!!r.runBackwards,!w||g&&!r.stagger){if(R=m[0]?Fr(m[0]).harness:0,j=R&&r[R.prop],S=Pc(r,S9),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!v?p.render(-1,!0):p.revert(h&&x?lc:ox),p._lazy=0),o){if(Vi(e._startAt=Nt.set(m,en({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!p&&S0(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(o0||!a&&!v)&&e._startAt.revert(lc),a&&x&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&x&&!p){if(t&&(a=!1),P=en({overwrite:!1,data:"isFromStart",lazy:a&&!p&&S0(l),immediateRender:a,stagger:0,parent:y},S),j&&(P[R.prop]=j),Vi(e._startAt=Nt.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(o0?e._startAt.revert(lc):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,at,at);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&S0(l)||l&&!x,M=0;M<m.length;M++){if(T=m[M],A=T._gsap||M9(m)[M]._gsap,e._ptLookup[M]=z={},cf[A.id]&&Ni.length&&Ec(),U=_===m?M:_.indexOf(T),R&&(O=new R).init(T,j||S,e,U,_)!==!1&&(e._pt=F=new M0(e._pt,T,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(ue){z[ue]=F}),O.priority&&(D=1)),!R||j)for(P in S)C0[P]&&(O=W5(P,S,e,U,T,_))?O.priority&&(D=1):z[P]=F=T9.call(e,T,P,"get",S[P],U,_,0,r.stringFilter);e._op&&e._op[M]&&e.kill(T,e._op[M]),b&&e._pt&&(Pi=e,yt.killTweensOf(T,z,e.globalTime(t)),ie=!e.parent,Pi=0),e._pt&&l&&(cf[A.id]=1)}D&&Z5(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!ie,g&&t<=0&&w.render(Y0,!0,!0)},Dx=function(e,t,n,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return mf=1,e.vars[t]="+=0",A9(e,a),mf=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=Pt(n)+r0(u.e)),u.b&&(u.b=c.s+r0(u.b))},Nx=function(e,t){var n=e[0]?Fr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=zr({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ox=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(a0(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pa=function(e,t,n,r,s){return Mt(e)?e.call(t,n,r,s):qt(e)&&~e.indexOf("random(")?Fa(e):e},X5=w9+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",j5={};w0(X5+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return j5[i]=1});var Nt=function(i){f5(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:ha(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,v=l.defaults,x=l.scrollTrigger,p=l.yoyoEase,m=r.parent||yt,y=(a0(n)||p5(n)?ti(n[0]):"length"in r)?[n]:q0(n),_,b,w,S,M,P,F,T;if(a._targets=y.length?M9(y):Ac("GSAP target "+n+" not found. https://greensock.com",!O0.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||xl(c)||xl(u)){if(r=a.vars,_=a.timeline=new y0({data:"nested",defaults:v||{},targets:m&&m.data==="nested"?m.vars.targets:y}),_.kill(),_.parent=_._dp=jn(a),_._start=0,h||xl(c)||xl(u)){if(S=y.length,F=h&&F5(h),Cn(h))for(M in h)~X5.indexOf(M)&&(T||(T={}),T[M]=h[M]);for(b=0;b<S;b++)w=Pc(r,j5),w.stagger=0,p&&(w.yoyoEase=p),T&&zr(w,T),P=y[b],w.duration=+pa(c,jn(a),b,P,y),w.delay=(+pa(u,jn(a),b,P,y)||0)-a._delay,!h&&S===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),_.to(P,w,F?F(b,P,y):0),_._ease=Ve.none;_.duration()?c=u=0:a.timeline=0}else if(g){ha(en(_.vars.defaults,{ease:"none"})),_._ease=Dr(g.ease||r.ease||"none");var D=0,A,R,O;if(a0(g))g.forEach(function(z){return _.to(y,z,">")}),_.duration();else{w={};for(M in g)M==="ease"||M==="easeEach"||Ox(M,g[M],w,g.easeEach);for(M in w)for(A=w[M].sort(function(z,U){return z.t-U.t}),D=0,b=0;b<A.length;b++)R=A[b],O={ease:R.e,duration:(R.t-(b?A[b-1].t:0))/100*c},O[M]=R.v,_.to(y,O,D),D+=O.duration;_.duration()<c&&_.to({},{duration:c-_.duration()})}}c||a.duration(c=_.duration())}else a.timeline=0;return d===!0&&!x9&&(Pi=jn(a),yt.killTweensOf(y),Pi=0),An(m,jn(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Jt(m._time)&&S0(f)&&hx(jn(a))&&m.data!=="nested")&&(a._tTime=-at,a.render(Math.max(0,-u)||0)),x&&P5(jn(a),x),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-at&&!u?l:r<at?0:r,h,d,g,v,x,p,m,y,_;if(!c)px(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,y=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+r,s,o);if(h=Jt(f%v),f===l?(g=this._repeat,h=c):(g=~~(f/v),g&&g===f/v&&(h=c,g--),h>c&&(h=c)),p=this._yoyo&&g&1,p&&(_=this._yEase,h=c-h),x=Xs(this._tTime,v),h===a&&!o&&this._initted)return this._tTime=f,this;g!==x&&(y&&this._yEase&&G5(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render(Jt(v*g),!0).invalidate()._lock=0))}if(!this._initted){if(L5(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(_||this._ease)(h/c),this._from&&(this.ratio=m=1-m),h&&!a&&!s&&(Q0(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(m,d.d),d=d._next;y&&y.render(r<0?r:!h&&p?-at:y._dur*y._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&uf(this,r,s,o),Q0(this,"onUpdate")),this._repeat&&g!==x&&this.vars.onRepeat&&!s&&this.parent&&Q0(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&uf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Vi(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Q0(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Ia||N0.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||A9(this,l),c=this._ease(l/this._dur),Dx(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(c1(this,0),this.parent||A5(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Pi&&Pi.vars.overwrite!==!0)._first||ia(this),this.parent&&o!==this.timeline.totalDuration()&&js(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?q0(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,v,x,p;if((!s||s==="all")&&ux(a,l))return s==="all"&&(this._pt=0),ia(this);for(f=this._op=this._op||[],s!=="all"&&(qt(s)&&(v={},w0(s,function(m){return v[m]=1}),s=v),s=Nx(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(v in g)x=h&&h[v],x&&((!("kill"in x.d)||x.d.kill(v)===!0)&&a1(this,x,"_pt"),delete h[v]),d!=="all"&&(d[v]=1)}return this._initted&&!this._pt&&u&&ia(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return da(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return da(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return yt.killTweensOf(r,s,o)},e}(qs);en(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});w0("staggerTo,staggerFrom,staggerFromTo",function(i){Nt[i]=function(){var e=new y0,t=hf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var E9=function(e,t,n){return e[t]=n},Y5=function(e,t,n){return e[t](n)},zx=function(e,t,n,r){return e[t](r.fp,n)},Bx=function(e,t,n){return e.setAttribute(t,n)},P9=function(e,t){return Mt(e[t])?Y5:y9(e[t])&&e.setAttribute?Bx:E9},q5=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ux=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Q5=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},L9=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},kx=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Gx=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?a1(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Hx=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Z5=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},M0=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||q5,this.d=l||this,this.set=c||E9,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Hx,this.m=n,this.mt=s,this.tween=r},i}();w0(w9+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return S9[i]=1});B0.TweenMax=B0.TweenLite=Nt;B0.TimelineLite=B0.TimelineMax=y0;yt=new y0({sortChildren:!1,defaults:Ws,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});O0.stringFilter=U5;var Qs=[],uc={},Vx=[],G2=0,H1=function(e){return(uc[e]||Vx).map(function(t){return t()})},gf=function(){var e=Date.now(),t=[];e-G2>2&&(H1("matchMediaInit"),Qs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=V0.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),H1("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),G2=e,H1("matchMedia"))},K5=function(){function i(t,n){this.selector=n&&df(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Mt(n)&&(s=r,r=n,n=Mt);var o=this,a=function(){var c=Ft,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=df(s)),Ft=o,f=r.apply(o,arguments),Mt(f)&&o._r.push(f),Ft=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Mt?a(o):n?o[n]=a:a},e.ignore=function(n){var r=Ft;Ft=null,n(this),Ft=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Nt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof qs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=Qs.indexOf(this);~a&&Qs.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),Wx=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){Cn(n)||(n={matches:n});var o=new K5(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=V0.matchMedia(n[c]),l&&(Qs.indexOf(o)<0&&Qs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(gf):l.addEventListener("change",gf)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Cc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Tx(r)})},timeline:function(e){return new y0(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,r){qt(e)&&(e=q0(e)[0]);var s=Fr(e||{}).get,o=n?T5:M5;return n==="native"&&(n=""),e&&(t?o((C0[t]&&C0[t].get||s)(e,t,n,r)):function(a,l,c){return o((C0[a]&&C0[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=q0(e),e.length>1){var r=e.map(function(u){return U0.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=C0[t],a=Fr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Es._pt=0,f.init(e,n?u+n:u,Es,0,[e]),f.render(1,f),Es._pt&&L9(1,Es)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=U0.to(e,zr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Dr(e.ease,Ws.ease)),O2(Ws,e||{})},config:function(e){return O2(O0,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!C0[a]&&!B0[a]&&Ac(t+" effect requires "+a+" plugin.")}),B1[t]=function(a,l,c){return n(q0(a),en(l||{},s),c)},o&&(y0.prototype[t]=function(a,l,c){return this.add(B1[t](a,Cn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ve[e]=Dr(t)},parseEase:function(e,t){return arguments.length?Dr(e,t):Ve},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new y0(e),r,s;for(n.smoothChildTiming=S0(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,r=yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Nt&&r.vars.onComplete===r._targets[0]))&&An(n,r,r._start-r._delay),r=s;return An(yt,n,0),n},context:function(e,t){return e?new K5(e,t):Ft},matchMedia:function(e){return new Wx(e)},matchMediaRefresh:function(){return Qs.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||gf()},addEventListener:function(e,t){var n=uc[e]||(uc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=uc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Sx,wrapYoyo:wx,distribute:F5,random:D5,snap:I5,normalize:bx,getUnit:r0,clamp:vx,splitColor:z5,toArray:q0,selector:df,mapRange:O5,pipe:yx,unitize:_x,interpolate:Mx,shuffle:R5},install:y5,effects:B1,ticker:N0,updateRoot:y0.updateRoot,plugins:C0,globalTimeline:yt,core:{PropTween:M0,globals:_5,Tween:Nt,Timeline:y0,Animation:qs,getCache:Fr,_removeLinkedListItem:a1,reverting:function(){return o0},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return x9=e}}};w0("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Cc[i]=Nt[i]});N0.add(y0.updateRoot);Es=Cc.to({},{duration:0});var Xx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},jx=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=Xx(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},V1=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(qt(s)&&(l={},w0(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}jx(a,s)}}}},U0=Cc.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)o0?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},V1("roundProps",pf),V1("modifiers"),V1("snap",I5))||Cc;Nt.version=y0.version=U0.version="3.11.4";x5=1;d5()&&Ys();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var H2,Li,zs,C9,Tr,V2,R9,Yx=function(){return typeof window!="undefined"},ni={},_r=180/Math.PI,Bs=Math.PI/180,Kr=Math.atan2,W2=1e8,F9=/([A-Z])/g,qx=/(left|right|width|margin|padding|x)/i,Qx=/[\s,\(]\S/,Zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Kx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},J5=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},$5=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$x=function(e,t,n){return e.style[t]=n},ey=function(e,t,n){return e.style.setProperty(t,n)},ty=function(e,t,n){return e._gsap[t]=n},ny=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},iy=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},ry=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},_t="transform",gn=_t+"Origin",sy=function(e,t){var n=this,r=this.target,s=r.style;if(e in ni){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Zn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Yn(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Yn(r,e)),this.props.indexOf(_t)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(gn,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},e8=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},oy=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(F9,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=R9(),s&&!s.isStart&&!n[_t]&&(e8(n),r.uncache=1)}},t8=function(e,t){var n={target:e,props:[],revert:oy,save:sy};return t&&t.split(",").forEach(function(r){return n.save(r)}),n},n8,xf=function(e,t){var n=Li.createElementNS?Li.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Li.createElement(e);return n.style?n:Li.createElement(e)},En=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(F9,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Zs(t)||t,1)||""},X2="O,Moz,ms,Ms,Webkit".split(","),Zs=function(e,t,n){var r=t||Tr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(X2[o]+e in s););return o<0?null:(o===3?"ms":o>=0?X2[o]:"")+e},yf=function(){Yx()&&window.document&&(H2=window,Li=H2.document,zs=Li.documentElement,Tr=xf("div")||{style:{}},xf("div"),_t=Zs(_t),gn=_t+"Origin",Tr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",n8=!!Zs("perspective"),R9=U0.core.reverting,C9=1)},W1=function i(e){var t=xf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(zs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),zs.removeChild(t),this.style.cssText=s,o},j2=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},i8=function(e){var t;try{t=e.getBBox()}catch{t=W1.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===W1||(t=W1.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+j2(e,["x","cx","x1"])||0,y:+j2(e,["y","cy","y1"])||0,width:0,height:0}:t},r8=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&i8(e))},Da=function(e,t){if(t){var n=e.style;t in ni&&t!==gn&&(t=_t),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(F9,"-$1").toLowerCase())):n.removeAttribute(t)}},Ci=function(e,t,n,r,s,o){var a=new M0(e._pt,t,n,0,1,o?$5:J5);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Y2={deg:1,rad:1,turn:1},ay={grid:1,flex:1},Wi=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Tr.style,l=qx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,v,x,p;return r===o||!s||Y2[r]||Y2[o]?s:(o!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&r8(e),(d||o==="%")&&(ni[t]||~t.indexOf("adius"))?(g=p?e.getBBox()[l?"width":"height"]:e[u],Pt(d?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(h?o:r),v=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Li||!v.appendChild)&&(v=Li.body),x=v._gsap,x&&d&&x.width&&l&&x.time===N0.time&&!x.uncache?Pt(s/x.width*f):((d||o==="%")&&!ay[En(v,"display")]&&(a.position=En(e,"position")),v===e&&(a.position="static"),v.appendChild(Tr),g=Tr[u],v.removeChild(Tr),a.position="absolute",l&&d&&(x=Fr(v),x.time=N0.time,x.width=v[u]),Pt(h?g*s/f:g&&s?f/g*s:0))))},Yn=function(e,t,n,r){var s;return C9||yf(),t in Zn&&t!=="transform"&&(t=Zn[t],~t.indexOf(",")&&(t=t.split(",")[0])),ni[t]&&t!=="transform"?(s=Oa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Fc(En(e,gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Rc[t]&&Rc[t](e,t,n)||En(e,t)||S5(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Wi(e,t,s,n)+n:s},ly=function(e,t,n,r){if(!n||n==="none"){var s=Zs(t,e,1),o=s&&En(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=En(e,"borderTopColor"))}var a=new M0(this._pt,e.style,t,0,1,Q5),l=0,c=0,u,f,h,d,g,v,x,p,m,y,_,b;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=En(e,t)||r,e.style[t]=n),u=[n,r],U5(u),n=u[0],r=u[1],h=n.match(As)||[],b=r.match(As)||[],b.length){for(;f=As.exec(r);)x=f[0],m=r.substring(l,f.index),g?g=(g+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(g=1),x!==(v=h[c++]||"")&&(d=parseFloat(v)||0,_=v.substr((d+"").length),x.charAt(1)==="="&&(x=Os(d,x)+_),p=parseFloat(x),y=x.substr((p+"").length),l=As.lastIndex-y.length,y||(y=y||O0.units[t]||_,l===r.length&&(r+=y,a.e+=y)),_!==y&&(d=Wi(e,t,v,y)||0),a._pt={_next:a._pt,p:m||c===1?m:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?$5:J5;return g5.test(r)&&(a.e=0),this._pt=a,a},q2={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cy=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=q2[n]||n,t[1]=q2[r]||r,t.join(" ")},uy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ni[a]&&(l=1,a=a==="transformOrigin"?gn:_t),Da(n,a);l&&(Da(n,_t),o&&(o.svg&&n.removeAttribute("transform"),Oa(n,1),o.uncache=1,e8(r)))}},Rc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new M0(e._pt,t,n,0,0,uy);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Na=[1,0,0,1,0,0],s8={},o8=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Q2=function(e){var t=En(e,_t);return o8(t)?Na:t.substr(7).match(m5).map(Pt)},I9=function(e,t){var n=e._gsap||Fr(e),r=e.style,s=Q2(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Na:s):(s===Na&&!e.offsetParent&&e!==zs&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,zs.appendChild(e)),s=Q2(e),l?r.display=l:Da(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):zs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},_f=function(e,t,n,r,s,o){var a=e._gsap,l=s||I9(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],v=l[2],x=l[3],p=l[4],m=l[5],y=t.split(" "),_=parseFloat(y[0])||0,b=parseFloat(y[1])||0,w,S,M,P;n?l!==Na&&(S=d*x-g*v)&&(M=_*(x/S)+b*(-v/S)+(v*m-x*p)/S,P=_*(-g/S)+b*(d/S)-(d*m-g*p)/S,_=M,b=P):(w=i8(e),_=w.x+(~y[0].indexOf("%")?_/100*w.width:_),b=w.y+(~(y[1]||y[0]).indexOf("%")?b/100*w.height:b)),r||r!==!1&&a.smooth?(p=_-c,m=b-u,a.xOffset=f+(p*d+m*v)-p,a.yOffset=h+(p*g+m*x)-m):a.xOffset=a.yOffset=0,a.xOrigin=_,a.yOrigin=b,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[gn]="0px 0px",o&&(Ci(o,a,"xOrigin",c,_),Ci(o,a,"yOrigin",u,b),Ci(o,a,"xOffset",f,a.xOffset),Ci(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",_+" "+b)},Oa=function(e,t){var n=e._gsap||new V5(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=En(e,gn)||"0",u,f,h,d,g,v,x,p,m,y,_,b,w,S,M,P,F,T,D,A,R,O,z,U,j,ie,ue,oe,xe,$,re,H;return u=f=h=v=x=p=m=y=_=0,d=g=1,n.svg=!!(e.getCTM&&r8(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[_t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_t]!=="none"?l[_t]:"")),r.scale=r.rotate=r.translate="none"),S=I9(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",U=""):U=!t&&e.getAttribute("data-svg-origin"),_f(e,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,w=n.yOrigin||0,S!==Na&&(T=S[0],D=S[1],A=S[2],R=S[3],u=O=S[4],f=z=S[5],S.length===6?(d=Math.sqrt(T*T+D*D),g=Math.sqrt(R*R+A*A),v=T||D?Kr(D,T)*_r:0,m=A||R?Kr(A,R)*_r+v:0,m&&(g*=Math.abs(Math.cos(m*Bs))),n.svg&&(u-=b-(b*T+w*A),f-=w-(b*D+w*R))):(H=S[6],$=S[7],ue=S[8],oe=S[9],xe=S[10],re=S[11],u=S[12],f=S[13],h=S[14],M=Kr(H,xe),x=M*_r,M&&(P=Math.cos(-M),F=Math.sin(-M),U=O*P+ue*F,j=z*P+oe*F,ie=H*P+xe*F,ue=O*-F+ue*P,oe=z*-F+oe*P,xe=H*-F+xe*P,re=$*-F+re*P,O=U,z=j,H=ie),M=Kr(-A,xe),p=M*_r,M&&(P=Math.cos(-M),F=Math.sin(-M),U=T*P-ue*F,j=D*P-oe*F,ie=A*P-xe*F,re=R*F+re*P,T=U,D=j,A=ie),M=Kr(D,T),v=M*_r,M&&(P=Math.cos(M),F=Math.sin(M),U=T*P+D*F,j=O*P+z*F,D=D*P-T*F,z=z*P-O*F,T=U,O=j),x&&Math.abs(x)+Math.abs(v)>359.9&&(x=v=0,p=180-p),d=Pt(Math.sqrt(T*T+D*D+A*A)),g=Pt(Math.sqrt(z*z+H*H)),M=Kr(O,z),m=Math.abs(M)>2e-4?M*_r:0,_=re?1/(re<0?-re:re):0),n.svg&&(U=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!o8(En(e,_t)),U&&e.setAttribute("transform",U))),Math.abs(m)>90&&Math.abs(m)<270&&(s?(d*=-1,m+=v<=0?180:-180,v+=v<=0?180:-180):(g*=-1,m+=m<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Pt(d),n.scaleY=Pt(g),n.rotation=Pt(v)+a,n.rotationX=Pt(x)+a,n.rotationY=Pt(p)+a,n.skewX=m+a,n.skewY=y+a,n.transformPerspective=_+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[gn]=Fc(c)),n.xOffset=n.yOffset=0,n.force3D=O0.force3D,n.renderTransform=n.svg?hy:n8?a8:fy,n.uncache=0,n},Fc=function(e){return(e=e.split(" "))[0]+" "+e[1]},X1=function(e,t,n){var r=r0(t);return Pt(parseFloat(t)+parseFloat(Wi(e,"x",n+"px",r)))+r},fy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,a8(e,t)},pr="0deg",Uo="0px",mr=") ",a8=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,v=n.scaleY,x=n.transformPerspective,p=n.force3D,m=n.target,y=n.zOrigin,_="",b=p==="auto"&&e&&e!==1||p===!0;if(y&&(f!==pr||u!==pr)){var w=parseFloat(u)*Bs,S=Math.sin(w),M=Math.cos(w),P;w=parseFloat(f)*Bs,P=Math.cos(w),o=X1(m,o,S*P*-y),a=X1(m,a,-Math.sin(w)*-y),l=X1(m,l,M*P*-y+y)}x!==Uo&&(_+="perspective("+x+mr),(r||s)&&(_+="translate("+r+"%, "+s+"%) "),(b||o!==Uo||a!==Uo||l!==Uo)&&(_+=l!==Uo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+mr),c!==pr&&(_+="rotate("+c+mr),u!==pr&&(_+="rotateY("+u+mr),f!==pr&&(_+="rotateX("+f+mr),(h!==pr||d!==pr)&&(_+="skew("+h+", "+d+mr),(g!==1||v!==1)&&(_+="scale("+g+", "+v+mr),m.style[_t]=_||"translate(0, 0)"},hy=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,v=n.yOrigin,x=n.xOffset,p=n.yOffset,m=n.forceCSS,y=parseFloat(o),_=parseFloat(a),b,w,S,M,P;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Bs,c*=Bs,b=Math.cos(l)*f,w=Math.sin(l)*f,S=Math.sin(l-c)*-h,M=Math.cos(l-c)*h,c&&(u*=Bs,P=Math.tan(c-u),P=Math.sqrt(1+P*P),S*=P,M*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),b*=P,w*=P)),b=Pt(b),w=Pt(w),S=Pt(S),M=Pt(M)):(b=f,M=h,w=S=0),(y&&!~(o+"").indexOf("px")||_&&!~(a+"").indexOf("px"))&&(y=Wi(d,"x",o,"px"),_=Wi(d,"y",a,"px")),(g||v||x||p)&&(y=Pt(y+g-(g*b+v*S)+x),_=Pt(_+v-(g*w+v*M)+p)),(r||s)&&(P=d.getBBox(),y=Pt(y+r/100*P.width),_=Pt(_+s/100*P.height)),P="matrix("+b+","+w+","+S+","+M+","+y+","+_+")",d.setAttribute("transform",P),m&&(d.style[_t]=P)},dy=function(e,t,n,r,s){var o=360,a=qt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?_r:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*W2)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*W2)%o-~~(c/o)*o)),e._pt=h=new M0(e._pt,t,n,r,c,Zx),h.e=u,h.u="deg",e._props.push(n),h},Z2=function(e,t){for(var n in t)e[n]=t[n];return e},py=function(e,t,n){var r=Z2({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[_t]=t,a=Oa(n,1),Da(n,_t),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_t],o[_t]=t,a=Oa(n,1),o[_t]=c);for(l in ni)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=r0(c),g=r0(u),f=d!==g?Wi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new M0(e._pt,a,l,f,h-f,vf),e._pt.u=g||0,e._props.push(l));Z2(a,r)};w0("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Rc[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Yn(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,v){return d[g]=h[v]=h[v]||h[(v-1)/2|0]}),a.init(l,d,f)}});var l8={name:"css",register:yf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,v,x,p,m,y,_,b,w,S,M;C9||yf(),this.styles=this.styles||t8(e),M=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(u=t[v],!(C0[v]&&W5(v,t,n,r,e,s)))){if(d=typeof u,g=Rc[v],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Fa(u)),g)g(this,e,v,u,n)&&(S=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",Oi.lastIndex=0,Oi.test(c)||(x=r0(c),p=r0(u)),p?x!==p&&(c=Wi(e,v,c,p)+p):x&&(u+=x),this.add(a,"setProperty",c,u,r,s,0,0,v),o.push(v),M.push(v,0,a[v]);else if(d!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,r,e,s):l[v],qt(c)&&~c.indexOf("random(")&&(c=Fa(c)),r0(c+"")||(c+=O0.units[v]||r0(Yn(e,v))||""),(c+"").charAt(1)==="="&&(c=Yn(e,v))):c=Yn(e,v),h=parseFloat(c),m=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),m&&(u=u.substr(2)),f=parseFloat(u),v in Zn&&(v==="autoAlpha"&&(h===1&&Yn(e,"visibility")==="hidden"&&f&&(h=0),M.push("visibility",0,a.visibility),Ci(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),v!=="scale"&&v!=="transform"&&(v=Zn[v],~v.indexOf(",")&&(v=v.split(",")[0]))),y=v in ni,y){if(this.styles.save(v),_||(b=e._gsap,b.renderTransform&&!t.parseTransform||Oa(e,t.parseTransform),w=t.smoothOrigin!==!1&&b.smooth,_=this._pt=new M0(this._pt,a,_t,0,1,b.renderTransform,b,0,-1),_.dep=1),v==="scale")this._pt=new M0(this._pt,b,"scaleY",b.scaleY,(m?Os(b.scaleY,m+f):f)-b.scaleY||0,vf),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){M.push(gn,0,a[gn]),u=cy(u),b.svg?_f(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&Ci(this,b,"zOrigin",b.zOrigin,p),Ci(this,a,v,Fc(c),Fc(u)));continue}else if(v==="svgOrigin"){_f(e,u,1,w,0,this);continue}else if(v in s8){dy(this,b,v,h,m?Os(h,m+u):u);continue}else if(v==="smoothOrigin"){Ci(this,b,"smooth",b.smooth,u);continue}else if(v==="force3D"){b[v]=u;continue}else if(v==="transform"){py(this,u,e);continue}}else v in a||(v=Zs(v)||v);if(y||(f||f===0)&&(h||h===0)&&!Qx.test(u)&&v in a)x=(c+"").substr((h+"").length),f||(f=0),p=r0(u)||(v in O0.units?O0.units[v]:x),x!==p&&(h=Wi(e,v,c,p)),this._pt=new M0(this._pt,y?b:a,v,h,(m?Os(h,m+f):f)-h,!y&&(p==="px"||v==="zIndex")&&t.autoRound!==!1?Jx:vf),this._pt.u=p||0,x!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Kx);else if(v in a)ly.call(this,e,v,c,m?m+u:u);else if(v in e)this.add(e,v,c||e[v],m?m+u:u,r,s);else if(v!=="parseTransform"){b9(v,u);continue}y||(v in a?M.push(v,0,a[v]):M.push(v,1,c||e[v])),o.push(v)}}S&&Z5(this)},render:function(e,t){if(t.tween._time||!R9())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Yn,aliases:Zn,getSetter:function(e,t,n){var r=Zn[t];return r&&r.indexOf(",")<0&&(t=r),t in ni&&t!==gn&&(e._gsap.x||Yn(e,"x"))?n&&V2===n?t==="scale"?ny:ty:(V2=n||{})&&(t==="scale"?iy:ry):e.style&&!y9(e.style[t])?$x:~t.indexOf("-")?ey:P9(e,t)},core:{_removeProperty:Da,_getMatrix:I9}};U0.utils.checkPrefix=Zs;U0.core.getStyleSaver=t8;(function(i,e,t,n){var r=w0(i+","+e+","+t,function(s){ni[s]=1});w0(e,function(s){O0.units[s]="deg",s8[s]=1}),Zn[r[13]]=i+","+e,w0(n,function(s){var o=s.split(":");Zn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");w0("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){O0.units[i]="px"});U0.registerPlugin(l8);var fc=U0.registerPlugin(l8)||U0;fc.core.Tween;const my=Qe("div",{id:"cursor"},null,-1),gy=Qe("div",{id:"aura"},null,-1),vy={setup(i){return nl(()=>{const e=document.querySelector("body");e.addEventListener("mousemove",d=>{d.pageX,d.pageY,f(d),t.classList.remove("hiddenCursor"),n.classList.remove("hiddenCursor")});const t=document.getElementById("cursor"),n=document.getElementById("aura"),r=document.getElementsByTagName("a"),s=document.getElementsByTagName("p"),o=document.getElementsByTagName("h1");let a=0,l=0,c=0,u=0;function f(d){a=d.pageX,l=d.pageY}fc.to({},.01,{repeat:-1,onRepeat:()=>{c+=(a-c)/5,u+=(l-u)/5,fc.set(t,{css:{left:a,top:l}}),fc.set(n,{css:{left:c-24,top:u-24}})}});for(let d=0;d<r.length;d++)r[d].addEventListener("mouseover",g=>{t.classList.add("active"),n.classList.add("active")}),r[d].addEventListener("mouseout",g=>{t.classList.remove("active"),n.classList.remove("active")});let h=(d,g)=>{for(let v=0;v<d.length;v++)d[v].addEventListener("mouseover",x=>{t.classList.add(g),n.classList.add(g)}),d[v].addEventListener("mouseout",x=>{t.classList.remove(g),n.classList.remove(g)})};h(s,"text"),h(o,"text"),e.addEventListener("mouseout",d=>{t.classList.add("hiddenCursor"),n.classList.add("hiddenCursor")})}),(e,t)=>(Cr(),Ns(F0,null,[my,gy],64))}};var c8=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t};const xy={data(){return{fov:window.innerWidth<=700?100:60}},mounted(){const i=this.$refs.renderer,e=this.$refs.box.mesh,t=this.$refs.box2.mesh,n=this.$refs.box3.mesh,r=this.$refs.box4.mesh,s=this.$refs.camera.camera;i.onBeforeRender(()=>{e.rotation.y+=.005,t.rotation.y+=.005,n.rotation.y-=.005,r.rotation.y-=.005}),window.addEventListener("resize",()=>{this.resize(s)}),this.resize(s)},methods:{resize(i){window.innerWidth<=700?this.fov=100:this.fov=60}}};function yy(i,e,t,n,r,s){const o=Xn("Camera"),a=Xn("PointLight"),l=Xn("Texture"),c=Xn("PhongMaterial"),u=Xn("Box"),f=Xn("Scene"),h=Xn("Renderer");return Cr(),Qm(h,{ref:"renderer",resize:"true",alpha:!0,background:"red"},{default:Gt(()=>[De(o,{ref:"camera",position:{z:5},fov:r.fov},null,8,["fov"]),De(f,null,{default:Gt(()=>[De(a,{color:"blue",intensity:.6,position:{y:50,z:50,x:-50}},null,8,["intensity"]),De(a,{color:"red",intensity:.6,position:{y:50,z:50,x:50}},null,8,["intensity"]),De(a,{color:"white",intensity:.3,position:{y:-50,z:50}},null,8,["intensity"]),De(a,{intensity:1,position:{y:50,z:50}}),De(u,{ref:"box",position:{x:-1,y:1.2,z:2},rotation:{y:Math.PI/2,z:Math.PI+.2}},{default:Gt(()=>[De(c,null,{default:Gt(()=>[De(l,{src:"./src/assets/dirt.jpg"})]),_:1})]),_:1},8,["position","rotation"]),De(u,{ref:"box2",position:{x:-2,y:-.5,z:2},rotation:{y:Math.PI/4,z:Math.PI+.2}},{default:Gt(()=>[De(c,null,{default:Gt(()=>[De(l,{src:"./src/assets/dirt.jpg"})]),_:1})]),_:1},8,["position","rotation"]),De(u,{ref:"box3",position:{x:2,y:1,z:2},rotation:{y:Math.PI/4,z:Math.PI+.2}},{default:Gt(()=>[De(c,null,{default:Gt(()=>[De(l,{src:"./src/assets/dirt.jpg"})]),_:1})]),_:1},8,["rotation"]),De(u,{ref:"box4",position:{x:1.5,y:-.7,z:2},rotation:{y:Math.PI/4,z:Math.PI+.2}},{default:Gt(()=>[De(c,null,{default:Gt(()=>[De(l,{src:"./src/assets/dirt.jpg"})]),_:1})]),_:1},8,["position","rotation"])]),_:1})]),_:1},512)}var _y=c8(xy,[["render",yy]]);function K2(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function D9(i={},e={}){Object.keys(e).forEach(t=>{typeof i[t]=="undefined"?i[t]=e[t]:K2(e[t])&&K2(i[t])&&Object.keys(e[t]).length>0&&D9(i[t],e[t])})}const u8={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ci(){const i=typeof document!="undefined"?document:{};return D9(i,u8),i}const by={document:u8,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout=="undefined"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout!="undefined"&&clearTimeout(i)}};function E0(){const i=typeof window!="undefined"?window:{};return D9(i,by),i}function Sy(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Ic(i,e=0){return setTimeout(i,e)}function za(){return Date.now()}function wy(i){const e=E0();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function My(i,e="x"){const t=E0();let n,r,s;const o=wy(i);return t.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(a=>a.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:n.length===16?r=parseFloat(n[12]):r=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:n.length===16?r=parseFloat(n[13]):r=parseFloat(n[5])),r||0}function yl(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function Ty(i){return typeof window!="undefined"&&typeof window.HTMLElement!="undefined"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function R0(...i){const e=Object(i[0]),t=["__proto__","constructor","prototype"];for(let n=1;n<i.length;n+=1){const r=i[n];if(r!=null&&!Ty(r)){const s=Object.keys(Object(r)).filter(o=>t.indexOf(o)<0);for(let o=0,a=s.length;o<a;o+=1){const l=s[o],c=Object.getOwnPropertyDescriptor(r,l);c!==void 0&&c.enumerable&&(yl(e[l])&&yl(r[l])?r[l].__swiper__?e[l]=r[l]:R0(e[l],r[l]):!yl(e[l])&&yl(r[l])?(e[l]={},r[l].__swiper__?e[l]=r[l]:R0(e[l],r[l])):e[l]=r[l])}}}return e}function _l(i,e,t){i.style.setProperty(e,t)}function f8({swiper:i,targetPosition:e,side:t}){const n=E0(),r=-i.translate;let s=null,o;const a=i.params.speed;i.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(i.cssModeFrameID);const l=e>r?"next":"prev",c=(f,h)=>l==="next"&&f>=h||l==="prev"&&f<=h,u=()=>{o=new Date().getTime(),s===null&&(s=o);const f=Math.max(Math.min((o-s)/a,1),0),h=.5-Math.cos(f*Math.PI)/2;let d=r+h*(e-r);if(c(d,e)&&(d=e),i.wrapperEl.scrollTo({[t]:d}),c(d,e)){i.wrapperEl.style.overflow="hidden",i.wrapperEl.style.scrollSnapType="",setTimeout(()=>{i.wrapperEl.style.overflow="",i.wrapperEl.scrollTo({[t]:d})}),n.cancelAnimationFrame(i.cssModeFrameID);return}i.cssModeFrameID=n.requestAnimationFrame(u)};u()}function Jn(i,e=""){return[...i.children].filter(t=>t.matches(e))}function u1(i,e=[]){const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:[e]),t}function Ay(i){const e=E0(),t=ci(),n=i.getBoundingClientRect(),r=t.body,s=i.clientTop||r.clientTop||0,o=i.clientLeft||r.clientLeft||0,a=i===e?e.scrollY:i.scrollTop,l=i===e?e.scrollX:i.scrollLeft;return{top:n.top+a-s,left:n.left+l-o}}function Ey(i,e){const t=[];for(;i.previousElementSibling;){const n=i.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function Py(i,e){const t=[];for(;i.nextElementSibling;){const n=i.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function Ri(i,e){return E0().getComputedStyle(i,null).getPropertyValue(e)}function ii(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function h8(i,e){const t=[];let n=i.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function bf(i,e,t){const n=E0();return t?i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):i.offsetWidth}let j1;function Ly(){const i=E0(),e=ci();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function d8(){return j1||(j1=Ly()),j1}let Y1;function Cy({userAgent:i}={}){const e=d8(),t=E0(),n=t.navigator.platform,r=i||t.navigator.userAgent,s={ios:!1,android:!1},o=t.screen.width,a=t.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/);let c=r.match(/(iPad).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),f=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=n==="Win32";let d=n==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&d&&e.touch&&g.indexOf(`${o}x${a}`)>=0&&(c=r.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),d=!1),l&&!h&&(s.os="android",s.android=!0),(c||f||u)&&(s.os="ios",s.ios=!0),s}function Ry(i={}){return Y1||(Y1=Cy(i)),Y1}let q1;function Fy(){const i=E0();let e=!1;function t(){const n=i.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}if(t()){const n=String(i.navigator.userAgent);if(n.includes("Version/")){const[r,s]=n.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));e=r<16||r===16&&s<2}}return{isSafari:e||t(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)}}function Iy(){return q1||(q1=Fy()),q1}function Dy({swiper:i,on:e,emit:t}){const n=E0();let r=null,s=null;const o=()=>{!i||i.destroyed||!i.initialized||(t("beforeResize"),t("resize"))},a=()=>{!i||i.destroyed||!i.initialized||(r=new ResizeObserver(u=>{s=n.requestAnimationFrame(()=>{const{width:f,height:h}=i;let d=f,g=h;u.forEach(({contentBoxSize:v,contentRect:x,target:p})=>{p&&p!==i.el||(d=x?x.width:(v[0]||v).inlineSize,g=x?x.height:(v[0]||v).blockSize)}),(d!==f||g!==h)&&o()})}),r.observe(i.el))},l=()=>{s&&n.cancelAnimationFrame(s),r&&r.unobserve&&i.el&&(r.unobserve(i.el),r=null)},c=()=>{!i||i.destroyed||!i.initialized||t("orientationchange")};e("init",()=>{if(i.params.resizeObserver&&typeof n.ResizeObserver!="undefined"){a();return}n.addEventListener("resize",o),n.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),n.removeEventListener("resize",o),n.removeEventListener("orientationchange",c)})}function Ny({swiper:i,extendParams:e,on:t,emit:n}){const r=[],s=E0(),o=(c,u={})=>{const f=s.MutationObserver||s.WebkitMutationObserver,h=new f(d=>{if(d.length===1){n("observerUpdate",d[0]);return}const g=function(){n("observerUpdate",d[0])};s.requestAnimationFrame?s.requestAnimationFrame(g):s.setTimeout(g,0)});h.observe(c,{attributes:typeof u.attributes=="undefined"?!0:u.attributes,childList:typeof u.childList=="undefined"?!0:u.childList,characterData:typeof u.characterData=="undefined"?!0:u.characterData}),r.push(h)},a=()=>{if(!!i.params.observer){if(i.params.observeParents){const c=h8(i.el);for(let u=0;u<c.length;u+=1)o(c[u])}o(i.el,{childList:i.params.observeSlideChildren}),o(i.wrapperEl,{attributes:!1})}},l=()=>{r.forEach(c=>{c.disconnect()}),r.splice(0,r.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),t("init",a),t("destroy",l)}var Oy={on(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return i.split(" ").forEach(s=>{n.eventsListeners[s]||(n.eventsListeners[s]=[]),n.eventsListeners[s][r](e)}),n},once(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function r(...s){n.off(i,r),r.__emitterProxy&&delete r.__emitterProxy,e.apply(n,s)}return r.__emitterProxy=e,n.on(i,r,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[n](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(n=>{typeof e=="undefined"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[n].splice(s,1)})}),t},emit(...i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;return typeof i[0]=="string"||Array.isArray(i[0])?(t=i[0],n=i.slice(1,i.length),r=e):(t=i[0].events,n=i[0].data,r=i[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(o=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(a=>{a.apply(r,[o,...n])}),e.eventsListeners&&e.eventsListeners[o]&&e.eventsListeners[o].forEach(a=>{a.apply(r,n)})}),e}};function zy(){const i=this;let e,t;const n=i.el;typeof i.params.width!="undefined"&&i.params.width!==null?e=i.params.width:e=n.clientWidth,typeof i.params.height!="undefined"&&i.params.height!==null?t=i.params.height:t=n.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(Ri(n,"padding-left")||0,10)-parseInt(Ri(n,"padding-right")||0,10),t=t-parseInt(Ri(n,"padding-top")||0,10)-parseInt(Ri(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function By(){const i=this;function e(T){return i.isHorizontal()?T:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[T]}function t(T,D){return parseFloat(T.getPropertyValue(e(D))||0)}const n=i.params,{wrapperEl:r,slidesEl:s,size:o,rtlTranslate:a,wrongRTL:l}=i,c=i.virtual&&n.virtual.enabled,u=c?i.virtual.slides.length:i.slides.length,f=Jn(s,`.${i.params.slideClass}, swiper-slide`),h=c?i.virtual.slides.length:f.length;let d=[];const g=[],v=[];let x=n.slidesOffsetBefore;typeof x=="function"&&(x=n.slidesOffsetBefore.call(i));let p=n.slidesOffsetAfter;typeof p=="function"&&(p=n.slidesOffsetAfter.call(i));const m=i.snapGrid.length,y=i.slidesGrid.length;let _=n.spaceBetween,b=-x,w=0,S=0;if(typeof o=="undefined")return;typeof _=="string"&&_.indexOf("%")>=0&&(_=parseFloat(_.replace("%",""))/100*o),i.virtualSize=-_,f.forEach(T=>{a?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),n.centeredSlides&&n.cssMode&&(_l(r,"--swiper-centered-offset-before",""),_l(r,"--swiper-centered-offset-after",""));const M=n.grid&&n.grid.rows>1&&i.grid;M&&i.grid.initSlides(h);let P;const F=n.slidesPerView==="auto"&&n.breakpoints&&Object.keys(n.breakpoints).filter(T=>typeof n.breakpoints[T].slidesPerView!="undefined").length>0;for(let T=0;T<h;T+=1){P=0;let D;if(f[T]&&(D=f[T]),M&&i.grid.updateSlide(T,D,h,e),!(f[T]&&Ri(D,"display")==="none")){if(n.slidesPerView==="auto"){F&&(f[T].style[e("width")]="");const A=getComputedStyle(D),R=D.style.transform,O=D.style.webkitTransform;if(R&&(D.style.transform="none"),O&&(D.style.webkitTransform="none"),n.roundLengths)P=i.isHorizontal()?bf(D,"width",!0):bf(D,"height",!0);else{const z=t(A,"width"),U=t(A,"padding-left"),j=t(A,"padding-right"),ie=t(A,"margin-left"),ue=t(A,"margin-right"),oe=A.getPropertyValue("box-sizing");if(oe&&oe==="border-box")P=z+ie+ue;else{const{clientWidth:xe,offsetWidth:$}=D;P=z+U+j+ie+ue+($-xe)}}R&&(D.style.transform=R),O&&(D.style.webkitTransform=O),n.roundLengths&&(P=Math.floor(P))}else P=(o-(n.slidesPerView-1)*_)/n.slidesPerView,n.roundLengths&&(P=Math.floor(P)),f[T]&&(f[T].style[e("width")]=`${P}px`);f[T]&&(f[T].swiperSlideSize=P),v.push(P),n.centeredSlides?(b=b+P/2+w/2+_,w===0&&T!==0&&(b=b-o/2-_),T===0&&(b=b-o/2-_),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),S%n.slidesPerGroup===0&&d.push(b),g.push(b)):(n.roundLengths&&(b=Math.floor(b)),(S-Math.min(i.params.slidesPerGroupSkip,S))%i.params.slidesPerGroup===0&&d.push(b),g.push(b),b=b+P+_),i.virtualSize+=P+_,w=P,S+=1}}if(i.virtualSize=Math.max(i.virtualSize,o)+p,a&&l&&(n.effect==="slide"||n.effect==="coverflow")&&(r.style.width=`${i.virtualSize+n.spaceBetween}px`),n.setWrapperSize&&(r.style[e("width")]=`${i.virtualSize+n.spaceBetween}px`),M&&i.grid.updateWrapperSize(P,d,e),!n.centeredSlides){const T=[];for(let D=0;D<d.length;D+=1){let A=d[D];n.roundLengths&&(A=Math.floor(A)),d[D]<=i.virtualSize-o&&T.push(A)}d=T,Math.floor(i.virtualSize-o)-Math.floor(d[d.length-1])>1&&d.push(i.virtualSize-o)}if(c&&n.loop){const T=v[0]+_;if(n.slidesPerGroup>1){const D=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/n.slidesPerGroup),A=T*n.slidesPerGroup;for(let R=0;R<D;R+=1)d.push(d[d.length-1]+A)}for(let D=0;D<i.virtual.slidesBefore+i.virtual.slidesAfter;D+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+T),g.push(g[g.length-1]+T),i.virtualSize+=T}if(d.length===0&&(d=[0]),n.spaceBetween!==0){const T=i.isHorizontal()&&a?"marginLeft":e("marginRight");f.filter((D,A)=>!n.cssMode||n.loop?!0:A!==f.length-1).forEach(D=>{D.style[T]=`${_}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let T=0;v.forEach(A=>{T+=A+(n.spaceBetween?n.spaceBetween:0)}),T-=n.spaceBetween;const D=T-o;d=d.map(A=>A<0?-x:A>D?D+p:A)}if(n.centerInsufficientSlides){let T=0;if(v.forEach(D=>{T+=D+(n.spaceBetween?n.spaceBetween:0)}),T-=n.spaceBetween,T<o){const D=(o-T)/2;d.forEach((A,R)=>{d[R]=A-D}),g.forEach((A,R)=>{g[R]=A+D})}}if(Object.assign(i,{slides:f,snapGrid:d,slidesGrid:g,slidesSizesGrid:v}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){_l(r,"--swiper-centered-offset-before",`${-d[0]}px`),_l(r,"--swiper-centered-offset-after",`${i.size/2-v[v.length-1]/2}px`);const T=-i.snapGrid[0],D=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(A=>A+T),i.slidesGrid=i.slidesGrid.map(A=>A+D)}if(h!==u&&i.emit("slidesLengthChange"),d.length!==m&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),g.length!==y&&i.emit("slidesGridLengthChange"),n.watchSlidesProgress&&i.updateSlidesOffset(),!c&&!n.cssMode&&(n.effect==="slide"||n.effect==="fade")){const T=`${n.containerModifierClass}backface-hidden`,D=i.el.classList.contains(T);h<=n.maxBackfaceHiddenSlides?D||i.el.classList.add(T):D&&i.el.classList.remove(T)}}function Uy(i){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const o=a=>n?e.slides.filter(l=>parseInt(l.getAttribute("data-swiper-slide-index"),10)===a)[0]:e.slides[a];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(a=>{t.push(a)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const a=e.activeIndex+s;if(a>e.slides.length&&!n)break;t.push(o(a))}else t.push(o(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]!="undefined"){const a=t[s].offsetHeight;r=a>r?a:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function ky(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(i.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t}function Gy(i=this&&this.translate||0){const e=this,t=e.params,{slides:n,rtlTranslate:r,snapGrid:s}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset=="undefined"&&e.updateSlidesOffset();let o=-i;r&&(o=i),n.forEach(a=>{a.classList.remove(t.slideVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];for(let a=0;a<n.length;a+=1){const l=n[a];let c=l.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(c-=n[0].swiperSlideOffset);const u=(o+(t.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+t.spaceBetween),f=(o-s[0]+(t.centeredSlides?e.minTranslate():0)-c)/(l.swiperSlideSize+t.spaceBetween),h=-(o-c),d=h+e.slidesSizesGrid[a];(h>=0&&h<e.size-1||d>1&&d<=e.size||h<=0&&d>=e.size)&&(e.visibleSlides.push(l),e.visibleSlidesIndexes.push(a),n[a].classList.add(t.slideVisibleClass)),l.progress=r?-u:u,l.originalProgress=r?-f:f}}function Hy(i){const e=this;if(typeof i=="undefined"){const u=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*u||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:o,progressLoop:a}=e;const l=s,c=o;if(n===0)r=0,s=!0,o=!0;else{r=(i-e.minTranslate())/n;const u=Math.abs(i-e.minTranslate())<1,f=Math.abs(i-e.maxTranslate())<1;s=u||r<=0,o=f||r>=1,u&&(r=0),f&&(r=1)}if(t.loop){const u=ii(e.slides.filter(x=>x.getAttribute("data-swiper-slide-index")==="0")[0]),f=ii(e.slides.filter(x=>x.getAttribute("data-swiper-slide-index")*1===e.slides.length-1)[0]),h=e.slidesGrid[u],d=e.slidesGrid[f],g=e.slidesGrid[e.slidesGrid.length-1],v=Math.abs(i);v>=h?a=(v-h)/g:a=(v+g-d)/g,a>1&&(a-=1)}Object.assign(e,{progress:r,progressLoop:a,isBeginning:s,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),s&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&e.emit("fromEdge"),e.emit("progress",r)}function Vy(){const i=this,{slides:e,params:t,slidesEl:n,activeIndex:r}=i,s=i.virtual&&t.virtual.enabled,o=l=>Jn(n,`.${t.slideClass}${l}, swiper-slide${l}`)[0];e.forEach(l=>{l.classList.remove(t.slideActiveClass,t.slideNextClass,t.slidePrevClass)});let a;if(s)if(t.loop){let l=r-i.virtual.slidesBefore;l<0&&(l=i.virtual.slides.length+l),l>=i.virtual.slides.length&&(l-=i.virtual.slides.length),a=o(`[data-swiper-slide-index="${l}"]`)}else a=o(`[data-swiper-slide-index="${r}"]`);else a=e[r];if(a){a.classList.add(t.slideActiveClass);let l=Py(a,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!l&&(l=e[0]),l&&l.classList.add(t.slideNextClass);let c=Ey(a,`.${t.slideClass}, swiper-slide`)[0];t.loop&&!c===0&&(c=e[e.length-1]),c&&c.classList.add(t.slidePrevClass)}i.emitSlidesClasses()}function Wy(i){const{slidesGrid:e,params:t}=i,n=i.rtlTranslate?i.translate:-i.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]!="undefined"?n>=e[s]&&n<e[s+1]-(e[s+1]-e[s])/2?r=s:n>=e[s]&&n<e[s+1]&&(r=s+1):n>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r=="undefined")&&(r=0),r}function Xy(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:r,activeIndex:s,realIndex:o,snapIndex:a}=e;let l=i,c;const u=h=>{let d=h-e.virtual.slidesBefore;return d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),d};if(typeof l=="undefined"&&(l=Wy(e)),n.indexOf(t)>=0)c=n.indexOf(t);else{const h=Math.min(r.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/r.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===s){c!==a&&(e.snapIndex=c,e.emit("snapIndexChange")),e.params.loop&&e.virtual&&e.params.virtual.enabled&&(e.realIndex=u(l));return}let f;e.virtual&&r.virtual.enabled&&r.loop?f=u(l):e.slides[l]?f=parseInt(e.slides[l].getAttribute("data-swiper-slide-index")||l,10):f=l,Object.assign(e,{snapIndex:c,realIndex:f,previousIndex:s,activeIndex:l}),e.emit("activeIndexChange"),e.emit("snapIndexChange"),o!==f&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}function jy(i){const e=this,t=e.params,n=i.closest(`.${t.slideClass}, swiper-slide`);let r=!1,s;if(n){for(let o=0;o<e.slides.length;o+=1)if(e.slides[o]===n){r=!0,s=o;break}}if(n&&r)e.clickedSlide=n,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=s;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}t.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}var Yy={updateSize:zy,updateSlides:By,updateAutoHeight:Uy,updateSlidesOffset:ky,updateSlidesProgress:Gy,updateProgress:Hy,updateSlidesClasses:Vy,updateActiveIndex:Xy,updateClickedSlide:jy};function qy(i=this.isHorizontal()?"x":"y"){const e=this,{params:t,rtlTranslate:n,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let o=My(s,i);return n&&(o=-o),o||0}function Qy(i,e){const t=this,{rtlTranslate:n,params:r,wrapperEl:s,progress:o}=t;let a=0,l=0;const c=0;t.isHorizontal()?a=n?-i:i:l=i,r.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-a:-l:r.virtualTranslate||(s.style.transform=`translate3d(${a}px, ${l}px, ${c}px)`),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?a:l;let u;const f=t.maxTranslate()-t.minTranslate();f===0?u=0:u=(i-t.minTranslate())/f,u!==o&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function Zy(){return-this.snapGrid[0]}function Ky(){return-this.snapGrid[this.snapGrid.length-1]}function Jy(i=0,e=this.params.speed,t=!0,n=!0,r){const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(n&&i>l?u=l:n&&i<c?u=c:u=i,s.updateProgress(u),o.cssMode){const f=s.isHorizontal();if(e===0)a[f?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return f8({swiper:s,targetPosition:-u,side:f?"left":"top"}),!0;a.scrollTo({[f?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(u),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(h){!s||s.destroyed||h.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var $y={getTranslate:qy,setTranslate:Qy,minTranslate:Zy,maxTranslate:Ky,translateTo:Jy};function e_(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`),t.emit("setTransition",i,e)}function p8({swiper:i,runCallbacks:e,direction:t,step:n}){const{activeIndex:r,previousIndex:s}=i;let o=t;if(o||(r>s?o="next":r<s?o="prev":o="reset"),i.emit(`transition${n}`),e&&r!==s){if(o==="reset"){i.emit(`slideResetTransition${n}`);return}i.emit(`slideChangeTransition${n}`),o==="next"?i.emit(`slideNextTransition${n}`):i.emit(`slidePrevTransition${n}`)}}function t_(i=!0,e){const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),p8({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function n_(i=!0,e){const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),p8({swiper:t,runCallbacks:i,direction:e,step:"End"}))}var i_={setTransition:e_,transitionStart:t_,transitionEnd:n_};function r_(i=0,e=this.params.speed,t=!0,n,r){typeof i=="string"&&(i=parseInt(i,10));const s=this;let o=i;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:f,rtlTranslate:h,wrapperEl:d,enabled:g}=s;if(s.animating&&a.preventInteractionOnTransition||!g&&!n&&!r)return!1;const v=Math.min(s.params.slidesPerGroupSkip,o);let x=v+Math.floor((o-v)/s.params.slidesPerGroup);x>=l.length&&(x=l.length-1);const p=-l[x];if(a.normalizeSlideIndex)for(let y=0;y<c.length;y+=1){const _=-Math.floor(p*100),b=Math.floor(c[y]*100),w=Math.floor(c[y+1]*100);typeof c[y+1]!="undefined"?_>=b&&_<w-(w-b)/2?o=y:_>=b&&_<w&&(o=y+1):_>=b&&(o=y)}if(s.initialized&&o!==f&&(!s.allowSlideNext&&p<s.translate&&p<s.minTranslate()||!s.allowSlidePrev&&p>s.translate&&p>s.maxTranslate()&&(f||0)!==o))return!1;o!==(u||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(p);let m;if(o>f?m="next":o<f?m="prev":m="reset",h&&-p===s.translate||!h&&p===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),a.effect!=="slide"&&s.setTranslate(p),m!=="reset"&&(s.transitionStart(t,m),s.transitionEnd(t,m)),!1;if(a.cssMode){const y=s.isHorizontal(),_=h?p:-p;if(e===0){const b=s.virtual&&s.params.virtual.enabled;b&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),b&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{d[y?"scrollLeft":"scrollTop"]=_})):d[y?"scrollLeft":"scrollTop"]=_,b&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return f8({swiper:s,targetPosition:_,side:y?"left":"top"}),!0;d.scrollTo({[y?"left":"top"]:_,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(p),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,n),s.transitionStart(t,m),e===0?s.transitionEnd(t,m):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(_){!s||s.destroyed||_.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,m))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function s_(i=0,e=this.params.speed,t=!0,n){typeof i=="string"&&(i=parseInt(i,10));const r=this;let s=i;return r.params.loop&&(r.virtual&&r.params.virtual.enabled?s=s+r.virtual.slidesBefore:s=ii(r.slides.filter(o=>o.getAttribute("data-swiper-slide-index")*1===s)[0])),r.slideTo(s,e,t,n)}function o_(i=this.params.speed,e=!0,t){const n=this,{enabled:r,params:s,animating:o}=n;if(!r)return n;let a=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(a=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<s.slidesPerGroupSkip?1:a,c=n.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft}return s.rewind&&n.isEnd?n.slideTo(0,i,e,t):n.slideTo(n.activeIndex+l,i,e,t)}function a_(i=this.params.speed,e=!0,t){const n=this,{params:r,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=n;if(!l)return n;const u=n.virtual&&r.virtual.enabled;if(r.loop){if(c&&!u&&r.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const f=a?n.translate:-n.translate;function h(p){return p<0?-Math.floor(Math.abs(p)):Math.floor(p)}const d=h(f),g=s.map(p=>h(p));let v=s[g.indexOf(d)-1];if(typeof v=="undefined"&&r.cssMode){let p;s.forEach((m,y)=>{d>=m&&(p=y)}),typeof p!="undefined"&&(v=s[p>0?p-1:p])}let x=0;if(typeof v!="undefined"&&(x=o.indexOf(v),x<0&&(x=n.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(x=x-n.slidesPerViewDynamic("previous",!0)+1,x=Math.max(x,0))),r.rewind&&n.isBeginning){const p=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(p,i,e,t)}return n.slideTo(x,i,e,t)}function l_(i=this.params.speed,e=!0,t){const n=this;return n.slideTo(n.activeIndex,i,e,t)}function c_(i=this.params.speed,e=!0,t,n=.5){const r=this;let s=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[a]){const c=r.snapGrid[a],u=r.snapGrid[a+1];l-c>(u-c)*n&&(s+=r.params.slidesPerGroup)}else{const c=r.snapGrid[a-1],u=r.snapGrid[a];l-c<=(u-c)*n&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,i,e,t)}function u_(){const i=this,{params:e,slidesEl:t}=i,n=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let r=i.clickedIndex,s;const o=i.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(i.animating)return;s=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<i.loopedSlides-n/2||r>i.slides.length-i.loopedSlides+n/2?(i.loopFix(),r=ii(Jn(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ic(()=>{i.slideTo(r)})):i.slideTo(r):r>i.slides.length-n?(i.loopFix(),r=ii(Jn(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Ic(()=>{i.slideTo(r)})):i.slideTo(r)}else i.slideTo(r)}var f_={slideTo:r_,slideToLoop:s_,slideNext:o_,slidePrev:a_,slideReset:l_,slideToClosest:c_,slideToClickedSlide:u_};function h_(i){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;Jn(n,`.${t.slideClass}, swiper-slide`).forEach((s,o)=>{s.setAttribute("data-swiper-slide-index",o)}),e.loopFix({slideRealIndex:i,direction:t.centeredSlides?void 0:"next"})}function d_({slideRealIndex:i,slideTo:e=!0,direction:t,setTranslate:n,activeSlideIndex:r,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:f,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled){e&&(!h.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,a.emit("loopFix");return}const d=h.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let g=h.loopedSlides||d;g%h.slidesPerGroup!==0&&(g+=h.slidesPerGroup-g%h.slidesPerGroup),a.loopedSlides=g;const v=[],x=[];let p=a.activeIndex;typeof r=="undefined"?r=ii(a.slides.filter(w=>w.classList.contains("swiper-slide-active"))[0]):p=r;const m=t==="next"||!t,y=t==="prev"||!t;let _=0,b=0;if(r<g){_=g-r;for(let w=0;w<g-r;w+=1){const S=w-Math.floor(w/l.length)*l.length;v.push(l.length-S-1)}}else if(r>a.slides.length-g*2){b=r-(a.slides.length-g*2);for(let w=0;w<b;w+=1){const S=w-Math.floor(w/l.length)*l.length;x.push(S)}}if(y&&v.forEach(w=>{f.prepend(a.slides[w])}),m&&x.forEach(w=>{f.append(a.slides[w])}),a.recalcSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),e){if(v.length>0&&y)if(typeof i=="undefined"){const w=a.slidesGrid[p],M=a.slidesGrid[p+_]-w;o?a.setTranslate(a.translate-M):(a.slideTo(p+_,0,!1,!0),n&&(a.touches[a.isHorizontal()?"startX":"startY"]+=M))}else n&&a.slideToLoop(i,0,!1,!0);else if(x.length>0&&m)if(typeof i=="undefined"){const w=a.slidesGrid[p],M=a.slidesGrid[p-b]-w;o?a.setTranslate(a.translate-M):(a.slideTo(p-b,0,!1,!0),n&&(a.touches[a.isHorizontal()?"startX":"startY"]+=M))}else a.slideToLoop(i,0,!1,!0)}if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!s){const w={slideRealIndex:i,slideTo:!1,direction:t,setTranslate:n,activeSlideIndex:r,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(S=>{S.params.loop&&S.loopFix(w)}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(w)}a.emit("loopFix")}function p_(){const i=this,{slides:e,params:t,slidesEl:n}=i;if(!t.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const r=[];e.forEach(s=>{const o=typeof s.swiperSlideIndex=="undefined"?s.getAttribute("data-swiper-slide-index")*1:s.swiperSlideIndex;r[o]=s}),e.forEach(s=>{s.removeAttribute("data-swiper-slide-index")}),r.forEach(s=>{n.append(s)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var m_={loopCreate:h_,loopFix:d_,loopDestroy:p_};function g_(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;t.style.cursor="move",t.style.cursor=i?"grabbing":"grab"}function v_(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}var x_={setGrabCursor:g_,unsetGrabCursor:v_};function y_(i,e=this){function t(n){if(!n||n===ci()||n===E0())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(i);return!r&&!n.getRootNode?null:r||t(n.getRootNode().host)}return t(e)}function __(i){const e=this,t=ci(),n=E0(),r=e.touchEventsData;r.evCache.push(i);const{params:s,touches:o,enabled:a}=e;if(!a||!s.simulateTouch&&i.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=i;l.originalEvent&&(l=l.originalEvent);let c=l.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(c)||"which"in l&&l.which===3||"button"in l&&l.button>0||r.isTouched&&r.isMoved)return;const u=!!s.noSwipingClass&&s.noSwipingClass!=="",f=i.composedPath?i.composedPath():i.path;u&&l.target&&l.target.shadowRoot&&f&&(c=f[0]);const h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,d=!!(l.target&&l.target.shadowRoot);if(s.noSwiping&&(d?y_(h,c):c.closest(h))){e.allowClick=!0;return}if(s.swipeHandler&&!c.closest(s.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const g=o.currentX,v=o.currentY,x=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,p=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(x&&(g<=p||g>=n.innerWidth-p))if(x==="prevent")i.preventDefault();else return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=v,r.touchStartTime=za(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let m=!0;c.matches(r.focusableElements)&&(m=!1,c.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==c&&t.activeElement.blur();const y=m&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||y)&&!c.isContentEditable&&l.preventDefault(),e.params.freeMode&&e.params.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",l)}function b_(i){const e=ci(),t=this,n=t.touchEventsData,{params:r,touches:s,rtlTranslate:o,enabled:a}=t;if(!a||!r.simulateTouch&&i.pointerType==="mouse")return;let l=i;if(l.originalEvent&&(l=l.originalEvent),!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const c=n.evCache.findIndex(w=>w.pointerId===l.pointerId);c>=0&&(n.evCache[c]=l);const u=n.evCache.length>1?n.evCache[0]:l,f=u.pageX,h=u.pageY;if(l.preventedByNestedSwiper){s.startX=f,s.startY=h;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(s,{startX:f,startY:h,prevX:t.touches.currentX,prevY:t.touches.currentY,currentX:f,currentY:h}),n.touchStartTime=za());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(h<s.startY&&t.translate<=t.maxTranslate()||h>s.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(f<s.startX&&t.translate<=t.maxTranslate()||f>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}if(n.allowTouchCallbacks&&t.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;s.currentX=f,s.currentY=h;const d=s.currentX-s.startX,g=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(d**2+g**2)<t.params.threshold)return;if(typeof n.isScrolling=="undefined"){let w;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:d*d+g*g>=25&&(w=Math.atan2(Math.abs(g),Math.abs(d))*180/Math.PI,n.isScrolling=t.isHorizontal()?w>r.touchAngle:90-w>r.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving=="undefined"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(n.startMoving=!0),n.isScrolling||t.zoom&&t.params.zoom&&t.params.zoom.enabled&&n.evCache.length>1){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let v=t.isHorizontal()?d:g,x=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(v=Math.abs(v)*(o?1:-1),x=Math.abs(x)*(o?1:-1)),s.diff=v,v*=r.touchRatio,o&&(v=-v,x=-x);const p=t.touchesDirection;t.swipeDirection=v>0?"prev":"next",t.touchesDirection=x>0?"prev":"next";const m=t.params.loop&&!r.cssMode;if(!n.isMoved){if(m&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const w=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(w)}n.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}let y;n.isMoved&&p!==t.touchesDirection&&m&&Math.abs(v)>=1&&(t.loopFix({direction:t.swipeDirection,setTranslate:!0}),y=!0),t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=v+n.startTranslate;let _=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0?(m&&!y&&n.currentTranslate>(r.centeredSlides?t.minTranslate()-t.size/2:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(_=!1,r.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+v)**b))):v<0&&(m&&!y&&n.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.size/2:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(_=!1,r.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-v)**b))),_&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),r.threshold>0)if(Math.abs(v)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{n.currentTranslate=n.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),t.params.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function S_(i){const e=this,t=e.touchEventsData,n=t.evCache.findIndex(y=>y.pointerId===i.pointerId);if(n>=0&&t.evCache.splice(n,1),["pointercancel","pointerout","pointerleave"].includes(i.type))return;const{params:r,touches:s,rtlTranslate:o,slidesGrid:a,enabled:l}=e;if(!l||!r.simulateTouch&&i.pointerType==="mouse")return;let c=i;if(c.originalEvent&&(c=c.originalEvent),t.allowTouchCallbacks&&e.emit("touchEnd",c),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&r.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}r.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=za(),f=u-t.touchStartTime;if(e.allowClick){const y=c.path||c.composedPath&&c.composedPath();e.updateClickedSlide(y&&y[0]||c.target),e.emit("tap click",c),f<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",c)}if(t.lastClickTime=za(),Ic(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||s.diff===0||t.currentTranslate===t.startTranslate){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(r.followFinger?h=o?e.translate:-e.translate:h=-t.currentTranslate,r.cssMode)return;if(e.params.freeMode&&r.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}let d=0,g=e.slidesSizesGrid[0];for(let y=0;y<a.length;y+=y<r.slidesPerGroupSkip?1:r.slidesPerGroup){const _=y<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof a[y+_]!="undefined"?h>=a[y]&&h<a[y+_]&&(d=y,g=a[y+_]-a[y]):h>=a[y]&&(d=y,g=a[a.length-1]-a[a.length-2])}let v=null,x=null;r.rewind&&(e.isBeginning?x=e.params.virtual&&e.params.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(v=0));const p=(h-a[d])/g,m=d<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(f>r.longSwipesMs){if(!r.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(p>=r.longSwipesRatio?e.slideTo(r.rewind&&e.isEnd?v:d+m):e.slideTo(d)),e.swipeDirection==="prev"&&(p>1-r.longSwipesRatio?e.slideTo(d+m):x!==null&&p<0&&Math.abs(p)>r.longSwipesRatio?e.slideTo(x):e.slideTo(d))}else{if(!r.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(c.target===e.navigation.nextEl||c.target===e.navigation.prevEl)?c.target===e.navigation.nextEl?e.slideTo(d+m):e.slideTo(d):(e.swipeDirection==="next"&&e.slideTo(v!==null?v:d+m),e.swipeDirection==="prev"&&e.slideTo(x!==null?x:d))}}let J2;function $2(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:r,snapGrid:s}=i,o=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const a=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!a?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!o?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(J2),J2=setTimeout(()=>{i.autoplay.resume()},500)),i.allowSlidePrev=r,i.allowSlideNext=n,i.params.watchOverflow&&s!==i.snapGrid&&i.checkOverflow()}function w_(i){const e=this;!e.enabled||e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation()))}function M_(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=i;if(!n)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let r;const s=i.maxTranslate()-i.minTranslate();s===0?r=0:r=(i.translate-i.minTranslate())/s,r!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}const hc=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,n=e.closest(t());if(n){const r=n.querySelector(`.${i.params.lazyPreloaderClass}`);r&&r.remove()}};function T_(i){const e=this;hc(e,i.target),e.update()}let ed=!1;function A_(){}const m8=(i,e)=>{const t=ci(),{params:n,el:r,wrapperEl:s,device:o}=i,a=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;r[l]("pointerdown",i.onTouchStart,{passive:!1}),t[l]("pointermove",i.onTouchMove,{passive:!1,capture:a}),t[l]("pointerup",i.onTouchEnd,{passive:!0}),t[l]("pointercancel",i.onTouchEnd,{passive:!0}),t[l]("pointerout",i.onTouchEnd,{passive:!0}),t[l]("pointerleave",i.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[l]("click",i.onClick,!0),n.cssMode&&s[l]("scroll",i.onScroll),n.updateOnWindowResize?i[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",$2,!0):i[c]("observerUpdate",$2,!0),r[l]("load",i.onLoad,{capture:!0})};function E_(){const i=this,e=ci(),{params:t}=i;i.onTouchStart=__.bind(i),i.onTouchMove=b_.bind(i),i.onTouchEnd=S_.bind(i),t.cssMode&&(i.onScroll=M_.bind(i)),i.onClick=w_.bind(i),i.onLoad=T_.bind(i),ed||(e.addEventListener("touchstart",A_),ed=!0),m8(i,"on")}function P_(){m8(this,"off")}var L_={attachEvents:E_,detachEvents:P_};const td=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function C_(){const i=this,{realIndex:e,initialized:t,params:n,el:r}=i,s=n.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=i.getBreakpoint(s,i.params.breakpointsBase,i.el);if(!o||i.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||i.originalParams,c=td(i,n),u=td(i,l),f=n.enabled;c&&!u?(r.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),i.emitContainerClasses()):!c&&u&&(r.classList.add(`${n.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&n.grid.fill==="column")&&r.classList.add(`${n.containerModifierClass}grid-column`),i.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(v=>{const x=n[v]&&n[v].enabled,p=l[v]&&l[v].enabled;x&&!p&&i[v].disable(),!x&&p&&i[v].enable()});const h=l.direction&&l.direction!==n.direction,d=n.loop&&(l.slidesPerView!==n.slidesPerView||h);h&&t&&i.changeDirection(),R0(i.params,l);const g=i.params.enabled;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),f&&!g?i.disable():!f&&g&&i.enable(),i.currentBreakpoint=o,i.emit("_beforeBreakpoint",l),d&&t&&(i.loopDestroy(),i.loopCreate(e),i.updateSlides()),i.emit("breakpoint",l)}function R_(i,e="window",t){if(!i||e==="container"&&!t)return;let n=!1;const r=E0(),s=e==="window"?r.innerHeight:t.clientHeight,o=Object.keys(i).map(a=>{if(typeof a=="string"&&a.indexOf("@")===0){const l=parseFloat(a.substr(1));return{value:s*l,point:a}}return{value:a,point:a}});o.sort((a,l)=>parseInt(a.value,10)-parseInt(l.value,10));for(let a=0;a<o.length;a+=1){const{point:l,value:c}=o[a];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=t.clientWidth&&(n=l)}return n||"max"}var F_={setBreakpoint:C_,getBreakpoint:R_};function I_(i,e){const t=[];return i.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(r=>{n[r]&&t.push(e+r)}):typeof n=="string"&&t.push(e+n)}),t}function D_(){const i=this,{classNames:e,params:t,rtl:n,el:r,device:s}=i,o=I_(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),r.classList.add(...e),i.emitContainerClasses()}function N_(){const i=this,{el:e,classNames:t}=i;e.classList.remove(...t),i.emitContainerClasses()}var O_={addClasses:D_,removeClasses:N_};function z_(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:n}=t;if(n){const r=i.slides.length-1,s=i.slidesGrid[r]+i.slidesSizesGrid[r]+n*2;i.isLocked=i.size>s}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var B_={checkOverflow:z_},nd={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",runCallbacksOnInit:!0,_emitClasses:!1};function U_(i,e){return function(n={}){const r=Object.keys(n)[0],s=n[r];if(typeof s!="object"||s===null){R0(e,n);return}if(["navigation","pagination","scrollbar"].indexOf(r)>=0&&i[r]===!0&&(i[r]={auto:!0}),!(r in i&&"enabled"in s)){R0(e,n);return}i[r]===!0&&(i[r]={enabled:!0}),typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),R0(e,n)}}const Q1={eventsEmitter:Oy,update:Yy,translate:$y,transition:i_,slide:f_,loop:m_,grabCursor:x_,events:L_,breakpoints:F_,checkOverflow:B_,classes:O_},Z1={};class x0{constructor(...e){let t,n;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?n=e[0]:[t,n]=e,n||(n={}),n=R0({},n),t&&!n.el&&(n.el=t);const r=ci();if(n.el&&typeof n.el=="string"&&r.querySelectorAll(n.el).length>1){const l=[];return r.querySelectorAll(n.el).forEach(c=>{const u=R0({},n,{el:c});l.push(new x0(u))}),l}const s=this;s.__swiper__=!0,s.support=d8(),s.device=Ry({userAgent:n.userAgent}),s.browser=Iy(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const o={};s.modules.forEach(l=>{l({params:n,swiper:s,extendParams:U_(n,o),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})});const a=R0({},nd,o);return s.params=R0({},a,Z1,n),s.originalParams=R0({},s.params),s.passedParams=R0({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach(l=>{s.on(l,s.params.on[l])}),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return s.params.direction==="horizontal"},isVertical(){return s.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:za(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=Jn(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;!e.enabled||(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),o=(n.maxTranslate()-r)*e+r;n.translateTo(o,typeof t=="undefined"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const n=this,{params:r,slides:s,slidesGrid:o,slidesSizesGrid:a,size:l,activeIndex:c}=n;let u=1;if(r.centeredSlides){let f=s[c].swiperSlideSize,h;for(let d=c+1;d<s.length;d+=1)s[d]&&!h&&(f+=s[d].swiperSlideSize,u+=1,f>l&&(h=!0));for(let d=c-1;d>=0;d-=1)s[d]&&!h&&(f+=s[d].swiperSlideSize,u+=1,f>l&&(h=!0))}else if(e==="current")for(let f=c+1;f<s.length;f+=1)(t?o[f]+a[f]-o[c]<l:o[f]-o[c]<l)&&(u+=1);else for(let f=c-1;f>=0;f-=1)o[c]-o[f]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&hc(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const o=e.rtlTranslate?e.translate*-1:e.translate,a=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(a),e.updateActiveIndex(),e.updateSlidesClasses()}let s;e.params.freeMode&&e.params.freeMode.enabled?(r(),e.params.autoHeight&&e.updateAutoHeight()):((e.params.slidesPerView==="auto"||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?s=e.slideTo(e.slides.length-1,0,!1,!0):s=e.slideTo(e.activeIndex,0,!1,!0),s||r()),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,r=n.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=(()=>n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):Jn(n,r())[0])();return!o&&t.params.createElements&&(o=u1("div",t.params.wrapperClass),n.append(o),Jn(n,`.${t.params.slideClass}`).forEach(a=>{o.append(a)})),Object.assign(t,{el:n,wrapperEl:o,slidesEl:t.isElement?n:o,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Ri(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Ri(n,"direction")==="rtl"),wrongRTL:Ri(o,"display")==="-webkit-box"}),!0}init(e){const t=this;return t.initialized||t.mount(e)===!1||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{r.complete?hc(t,r):r.addEventListener("load",s=>{hc(t,s.target)})}),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:r,el:s,wrapperEl:o,slides:a}=n;return typeof n.params=="undefined"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),o.removeAttribute("style"),a&&a.length&&a.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el.swiper=null,Sy(n)),n.destroyed=!0),null}static extendDefaults(e){R0(Z1,e)}static get extendedDefaults(){return Z1}static get defaults(){return nd}static installModule(e){x0.prototype.__modules__||(x0.prototype.__modules__=[]);const t=x0.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>x0.installModule(t)),x0):(x0.installModule(e),x0)}}Object.keys(Q1).forEach(i=>{Object.keys(Q1[i]).forEach(e=>{x0.prototype[e]=Q1[i][e]})});x0.use([Dy,Ny]);function N9(i,e,t,n){return i.params.createElements&&Object.keys(n).forEach(r=>{if(!t[r]&&t.auto===!0){let s=Jn(i.el,`.${n[r]}`)[0];s||(s=u1("div",n[r]),s.className=n[r],i.el.append(s)),t[r]=s,e[r]=s}}),t}function k_({swiper:i,extendParams:e,on:t,emit:n}){e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),i.navigation={nextEl:null,prevEl:null};const r=g=>(Array.isArray(g)||(g=[g].filter(v=>!!v)),g);function s(g){let v;return g&&typeof g=="string"&&i.isElement&&(v=i.el.shadowRoot.querySelector(g),v)?v:(g&&(typeof g=="string"&&(v=[...document.querySelectorAll(g)]),i.params.uniqueNavElements&&typeof g=="string"&&v.length>1&&i.el.querySelectorAll(g).length===1&&(v=i.el.querySelector(g))),g&&!v?g:v)}function o(g,v){const x=i.params.navigation;g=r(g),g.forEach(p=>{p&&(p.classList[v?"add":"remove"](...x.disabledClass.split(" ")),p.tagName==="BUTTON"&&(p.disabled=v),i.params.watchOverflow&&i.enabled&&p.classList[i.isLocked?"add":"remove"](x.lockClass))})}function a(){const{nextEl:g,prevEl:v}=i.navigation;if(i.params.loop){o(v,!1),o(g,!1);return}o(v,i.isBeginning&&!i.params.rewind),o(g,i.isEnd&&!i.params.rewind)}function l(g){g.preventDefault(),!(i.isBeginning&&!i.params.loop&&!i.params.rewind)&&(i.slidePrev(),n("navigationPrev"))}function c(g){g.preventDefault(),!(i.isEnd&&!i.params.loop&&!i.params.rewind)&&(i.slideNext(),n("navigationNext"))}function u(){const g=i.params.navigation;if(i.params.navigation=N9(i,i.originalParams.navigation,i.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(g.nextEl||g.prevEl))return;let v=s(g.nextEl),x=s(g.prevEl);Object.assign(i.navigation,{nextEl:v,prevEl:x}),v=r(v),x=r(x);const p=(m,y)=>{m&&m.addEventListener("click",y==="next"?c:l),!i.enabled&&m&&m.classList.add(...g.lockClass.split(" "))};v.forEach(m=>p(m,"next")),x.forEach(m=>p(m,"prev"))}function f(){let{nextEl:g,prevEl:v}=i.navigation;g=r(g),v=r(v);const x=(p,m)=>{p.removeEventListener("click",m==="next"?c:l),p.classList.remove(...i.params.navigation.disabledClass.split(" "))};g.forEach(p=>x(p,"next")),v.forEach(p=>x(p,"prev"))}t("init",()=>{i.params.navigation.enabled===!1?d():(u(),a())}),t("toEdge fromEdge lock unlock",()=>{a()}),t("destroy",()=>{f()}),t("enable disable",()=>{let{nextEl:g,prevEl:v}=i.navigation;g=r(g),v=r(v),[...g,...v].filter(x=>!!x).forEach(x=>x.classList[i.enabled?"remove":"add"](i.params.navigation.lockClass))}),t("click",(g,v)=>{let{nextEl:x,prevEl:p}=i.navigation;x=r(x),p=r(p);const m=v.target;if(i.params.navigation.hideOnClick&&!p.includes(m)&&!x.includes(m)){if(i.pagination&&i.params.pagination&&i.params.pagination.clickable&&(i.pagination.el===m||i.pagination.el.contains(m)))return;let y;x.length?y=x[0].classList.contains(i.params.navigation.hiddenClass):p.length&&(y=p[0].classList.contains(i.params.navigation.hiddenClass)),n(y===!0?"navigationShow":"navigationHide"),[...x,...p].filter(_=>!!_).forEach(_=>_.classList.toggle(i.params.navigation.hiddenClass))}});const h=()=>{i.el.classList.remove(...i.params.navigation.navigationDisabledClass.split(" ")),u(),a()},d=()=>{i.el.classList.add(...i.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(i.navigation,{enable:h,disable:d,update:a,init:u,destroy:f})}function Mr(i=""){return`.${i.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function G_({swiper:i,extendParams:e,on:t,emit:n}){const r="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:p=>p,formatFractionTotal:p=>p,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),i.pagination={el:null,bullets:[]};let s,o=0;const a=p=>(Array.isArray(p)||(p=[p].filter(m=>!!m)),p);function l(){return!i.params.pagination.el||!i.pagination.el||Array.isArray(i.pagination.el)&&i.pagination.el.length===0}function c(p,m){const{bulletActiveClass:y}=i.params.pagination;!p||(p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&(p.classList.add(`${y}-${m}`),p=p[`${m==="prev"?"previous":"next"}ElementSibling`],p&&p.classList.add(`${y}-${m}-${m}`)))}function u(p){const m=p.target.closest(Mr(i.params.pagination.bulletClass));if(!m)return;p.preventDefault();const y=ii(m)*i.params.slidesPerGroup;i.params.loop?i.slideToLoop(y):i.slideTo(y)}function f(){const p=i.rtl,m=i.params.pagination;if(l())return;let y=i.pagination.el;y=a(y);let _;const b=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:i.slides.length,w=i.params.loop?Math.ceil(b/i.params.slidesPerGroup):i.snapGrid.length;if(i.params.loop?_=i.params.slidesPerGroup>1?Math.floor(i.realIndex/i.params.slidesPerGroup):i.realIndex:typeof i.snapIndex!="undefined"?_=i.snapIndex:_=i.activeIndex||0,m.type==="bullets"&&i.pagination.bullets&&i.pagination.bullets.length>0){const S=i.pagination.bullets;let M,P,F;if(m.dynamicBullets&&(s=bf(S[0],i.isHorizontal()?"width":"height",!0),y.forEach(T=>{T.style[i.isHorizontal()?"width":"height"]=`${s*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&i.previousIndex!==void 0&&(o+=_-(i.previousIndex||0),o>m.dynamicMainBullets-1?o=m.dynamicMainBullets-1:o<0&&(o=0)),M=Math.max(_-o,0),P=M+(Math.min(S.length,m.dynamicMainBullets)-1),F=(P+M)/2),S.forEach(T=>{T.classList.remove(...["","-next","-next-next","-prev","-prev-prev","-main"].map(D=>`${m.bulletActiveClass}${D}`))}),y.length>1)S.forEach(T=>{const D=ii(T);D===_&&T.classList.add(m.bulletActiveClass),m.dynamicBullets&&(D>=M&&D<=P&&T.classList.add(`${m.bulletActiveClass}-main`),D===M&&c(T,"prev"),D===P&&c(T,"next"))});else{const T=S[_];if(T&&T.classList.add(m.bulletActiveClass),m.dynamicBullets){const D=S[M],A=S[P];for(let R=M;R<=P;R+=1)S[R].classList.add(`${m.bulletActiveClass}-main`);c(D,"prev"),c(A,"next")}}if(m.dynamicBullets){const T=Math.min(S.length,m.dynamicMainBullets+4),D=(s*T-s)/2-F*s,A=p?"right":"left";S.forEach(R=>{R.style[i.isHorizontal()?A:"top"]=`${D}px`})}}y.forEach((S,M)=>{if(m.type==="fraction"&&(S.querySelectorAll(Mr(m.currentClass)).forEach(P=>{P.textContent=m.formatFractionCurrent(_+1)}),S.querySelectorAll(Mr(m.totalClass)).forEach(P=>{P.textContent=m.formatFractionTotal(w)})),m.type==="progressbar"){let P;m.progressbarOpposite?P=i.isHorizontal()?"vertical":"horizontal":P=i.isHorizontal()?"horizontal":"vertical";const F=(_+1)/w;let T=1,D=1;P==="horizontal"?T=F:D=F,S.querySelectorAll(Mr(m.progressbarFillClass)).forEach(A=>{A.style.transform=`translate3d(0,0,0) scaleX(${T}) scaleY(${D})`,A.style.transitionDuration=`${i.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(S.innerHTML=m.renderCustom(i,_+1,w),M===0&&n("paginationRender",S)):(M===0&&n("paginationRender",S),n("paginationUpdate",S)),i.params.watchOverflow&&i.enabled&&S.classList[i.isLocked?"add":"remove"](m.lockClass)})}function h(){const p=i.params.pagination;if(l())return;const m=i.virtual&&i.params.virtual.enabled?i.virtual.slides.length:i.slides.length;let y=i.pagination.el;y=a(y);let _="";if(p.type==="bullets"){let b=i.params.loop?Math.ceil(m/i.params.slidesPerGroup):i.snapGrid.length;i.params.freeMode&&i.params.freeMode.enabled&&b>m&&(b=m);for(let w=0;w<b;w+=1)p.renderBullet?_+=p.renderBullet.call(i,w,p.bulletClass):_+=`<${p.bulletElement} class="${p.bulletClass}"></${p.bulletElement}>`}p.type==="fraction"&&(p.renderFraction?_=p.renderFraction.call(i,p.currentClass,p.totalClass):_=`<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`),p.type==="progressbar"&&(p.renderProgressbar?_=p.renderProgressbar.call(i,p.progressbarFillClass):_=`<span class="${p.progressbarFillClass}"></span>`),y.forEach(b=>{p.type!=="custom"&&(b.innerHTML=_||""),p.type==="bullets"&&(i.pagination.bullets=[...b.querySelectorAll(Mr(p.bulletClass))])}),p.type!=="custom"&&n("paginationRender",y[0])}function d(){i.params.pagination=N9(i,i.originalParams.pagination,i.params.pagination,{el:"swiper-pagination"});const p=i.params.pagination;if(!p.el)return;let m;typeof p.el=="string"&&i.isElement&&(m=i.el.shadowRoot.querySelector(p.el)),!m&&typeof p.el=="string"&&(m=[...document.querySelectorAll(p.el)]),m||(m=p.el),!(!m||m.length===0)&&(i.params.uniqueNavElements&&typeof p.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...i.el.querySelectorAll(p.el)],m.length>1&&(m=m.filter(y=>h8(y,".swiper")[0]===i.el)[0])),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(i.pagination,{el:m}),m=a(m),m.forEach(y=>{p.type==="bullets"&&p.clickable&&y.classList.add(p.clickableClass),y.classList.add(p.modifierClass+p.type),y.classList.add(i.isHorizontal()?p.horizontalClass:p.verticalClass),p.type==="bullets"&&p.dynamicBullets&&(y.classList.add(`${p.modifierClass}${p.type}-dynamic`),o=0,p.dynamicMainBullets<1&&(p.dynamicMainBullets=1)),p.type==="progressbar"&&p.progressbarOpposite&&y.classList.add(p.progressbarOppositeClass),p.clickable&&y.addEventListener("click",u),i.enabled||y.classList.add(p.lockClass)}))}function g(){const p=i.params.pagination;if(l())return;let m=i.pagination.el;m&&(m=a(m),m.forEach(y=>{y.classList.remove(p.hiddenClass),y.classList.remove(p.modifierClass+p.type),y.classList.remove(i.isHorizontal()?p.horizontalClass:p.verticalClass),p.clickable&&y.removeEventListener("click",u)})),i.pagination.bullets&&i.pagination.bullets.forEach(y=>y.classList.remove(p.bulletActiveClass))}t("init",()=>{i.params.pagination.enabled===!1?x():(d(),h(),f())}),t("activeIndexChange",()=>{typeof i.snapIndex=="undefined"&&f()}),t("snapIndexChange",()=>{f()}),t("snapGridLengthChange",()=>{h(),f()}),t("destroy",()=>{g()}),t("enable disable",()=>{let{el:p}=i.pagination;p&&(p=a(p),p.forEach(m=>m.classList[i.enabled?"remove":"add"](i.params.pagination.lockClass)))}),t("lock unlock",()=>{f()}),t("click",(p,m)=>{const y=m.target;let{el:_}=i.pagination;if(Array.isArray(_)||(_=[_].filter(b=>!!b)),i.params.pagination.el&&i.params.pagination.hideOnClick&&_&&_.length>0&&!y.classList.contains(i.params.pagination.bulletClass)){if(i.navigation&&(i.navigation.nextEl&&y===i.navigation.nextEl||i.navigation.prevEl&&y===i.navigation.prevEl))return;const b=_[0].classList.contains(i.params.pagination.hiddenClass);n(b===!0?"paginationShow":"paginationHide"),_.forEach(w=>w.classList.toggle(i.params.pagination.hiddenClass))}});const v=()=>{i.el.classList.remove(i.params.pagination.paginationDisabledClass);let{el:p}=i.pagination;p&&(p=a(p),p.forEach(m=>m.classList.remove(i.params.pagination.paginationDisabledClass))),d(),h(),f()},x=()=>{i.el.classList.add(i.params.pagination.paginationDisabledClass);let{el:p}=i.pagination;p&&(p=a(p),p.forEach(m=>m.classList.add(i.params.pagination.paginationDisabledClass))),g()};Object.assign(i.pagination,{enable:v,disable:x,render:h,update:f,init:d,destroy:g})}function H_({swiper:i,extendParams:e,on:t,emit:n}){const r=ci();let s=!1,o=null,a=null,l,c,u,f;e({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),i.scrollbar={el:null,dragEl:null};function h(){if(!i.params.scrollbar.el||!i.scrollbar.el)return;const{scrollbar:T,rtlTranslate:D}=i,{dragEl:A,el:R}=T,O=i.params.scrollbar,z=i.params.loop?i.progressLoop:i.progress;let U=c,j=(u-c)*z;D?(j=-j,j>0?(U=c-j,j=0):-j+c>u&&(U=u+j)):j<0?(U=c+j,j=0):j+c>u&&(U=u-j),i.isHorizontal()?(A.style.transform=`translate3d(${j}px, 0, 0)`,A.style.width=`${U}px`):(A.style.transform=`translate3d(0px, ${j}px, 0)`,A.style.height=`${U}px`),O.hide&&(clearTimeout(o),R.style.opacity=1,o=setTimeout(()=>{R.style.opacity=0,R.style.transitionDuration="400ms"},1e3))}function d(T){!i.params.scrollbar.el||!i.scrollbar.el||(i.scrollbar.dragEl.style.transitionDuration=`${T}ms`)}function g(){if(!i.params.scrollbar.el||!i.scrollbar.el)return;const{scrollbar:T}=i,{dragEl:D,el:A}=T;D.style.width="",D.style.height="",u=i.isHorizontal()?A.offsetWidth:A.offsetHeight,f=i.size/(i.virtualSize+i.params.slidesOffsetBefore-(i.params.centeredSlides?i.snapGrid[0]:0)),i.params.scrollbar.dragSize==="auto"?c=u*f:c=parseInt(i.params.scrollbar.dragSize,10),i.isHorizontal()?D.style.width=`${c}px`:D.style.height=`${c}px`,f>=1?A.style.display="none":A.style.display="",i.params.scrollbar.hide&&(A.style.opacity=0),i.params.watchOverflow&&i.enabled&&T.el.classList[i.isLocked?"add":"remove"](i.params.scrollbar.lockClass)}function v(T){return i.isHorizontal()?T.clientX:T.clientY}function x(T){const{scrollbar:D,rtlTranslate:A}=i,{el:R}=D;let O;O=(v(T)-Ay(R)[i.isHorizontal()?"left":"top"]-(l!==null?l:c/2))/(u-c),O=Math.max(Math.min(O,1),0),A&&(O=1-O);const z=i.minTranslate()+(i.maxTranslate()-i.minTranslate())*O;i.updateProgress(z),i.setTranslate(z),i.updateActiveIndex(),i.updateSlidesClasses()}function p(T){const D=i.params.scrollbar,{scrollbar:A,wrapperEl:R}=i,{el:O,dragEl:z}=A;s=!0,l=T.target===z?v(T)-T.target.getBoundingClientRect()[i.isHorizontal()?"left":"top"]:null,T.preventDefault(),T.stopPropagation(),R.style.transitionDuration="100ms",z.style.transitionDuration="100ms",x(T),clearTimeout(a),O.style.transitionDuration="0ms",D.hide&&(O.style.opacity=1),i.params.cssMode&&(i.wrapperEl.style["scroll-snap-type"]="none"),n("scrollbarDragStart",T)}function m(T){const{scrollbar:D,wrapperEl:A}=i,{el:R,dragEl:O}=D;!s||(T.preventDefault?T.preventDefault():T.returnValue=!1,x(T),A.style.transitionDuration="0ms",R.style.transitionDuration="0ms",O.style.transitionDuration="0ms",n("scrollbarDragMove",T))}function y(T){const D=i.params.scrollbar,{scrollbar:A,wrapperEl:R}=i,{el:O}=A;!s||(s=!1,i.params.cssMode&&(i.wrapperEl.style["scroll-snap-type"]="",R.style.transitionDuration=""),D.hide&&(clearTimeout(a),a=Ic(()=>{O.style.opacity=0,O.style.transitionDuration="400ms"},1e3)),n("scrollbarDragEnd",T),D.snapOnRelease&&i.slideToClosest())}function _(T){const{scrollbar:D,params:A}=i,R=D.el;if(!R)return;const O=R,z=A.passiveListeners?{passive:!1,capture:!1}:!1,U=A.passiveListeners?{passive:!0,capture:!1}:!1;if(!O)return;const j=T==="on"?"addEventListener":"removeEventListener";O[j]("pointerdown",p,z),r[j]("pointermove",m,z),r[j]("pointerup",y,U)}function b(){!i.params.scrollbar.el||!i.scrollbar.el||_("on")}function w(){!i.params.scrollbar.el||!i.scrollbar.el||_("off")}function S(){const{scrollbar:T,el:D}=i;i.params.scrollbar=N9(i,i.originalParams.scrollbar,i.params.scrollbar,{el:"swiper-scrollbar"});const A=i.params.scrollbar;if(!A.el)return;let R;typeof A.el=="string"&&i.isElement&&(R=i.el.shadowRoot.querySelector(A.el)),!R&&typeof A.el=="string"?R=r.querySelectorAll(A.el):R||(R=A.el),i.params.uniqueNavElements&&typeof A.el=="string"&&R.length>1&&D.querySelectorAll(A.el).length===1&&(R=D.querySelector(A.el)),R.length>0&&(R=R[0]),R.classList.add(i.isHorizontal()?A.horizontalClass:A.verticalClass);let O;R&&(R.querySelector(`.${i.params.scrollbar.dragClass}`),O||(O=u1("div",i.params.scrollbar.dragClass),R.append(O))),Object.assign(T,{el:R,dragEl:O}),A.draggable&&b(),R&&R.classList[i.enabled?"remove":"add"](i.params.scrollbar.lockClass)}function M(){const T=i.params.scrollbar,D=i.scrollbar.el;D&&D.classList.remove(i.isHorizontal()?T.horizontalClass:T.verticalClass),w()}t("init",()=>{i.params.scrollbar.enabled===!1?F():(S(),g(),h())}),t("update resize observerUpdate lock unlock",()=>{g()}),t("setTranslate",()=>{h()}),t("setTransition",(T,D)=>{d(D)}),t("enable disable",()=>{const{el:T}=i.scrollbar;T&&T.classList[i.enabled?"remove":"add"](i.params.scrollbar.lockClass)}),t("destroy",()=>{M()});const P=()=>{i.el.classList.remove(i.params.scrollbar.scrollbarDisabledClass),i.scrollbar.el&&i.scrollbar.el.classList.remove(i.params.scrollbar.scrollbarDisabledClass),S(),g(),h()},F=()=>{i.el.classList.add(i.params.scrollbar.scrollbarDisabledClass),i.scrollbar.el&&i.scrollbar.el.classList.add(i.params.scrollbar.scrollbarDisabledClass),M()};Object.assign(i.scrollbar,{enable:P,disable:F,updateSize:g,setTranslate:h,init:S,destroy:M})}function V_({swiper:i,extendParams:e,on:t}){e({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),i.a11y={clicked:!1};let n=null;function r(A){const R=n;R.length!==0&&(R.innerHTML="",R.innerHTML=A)}const s=A=>(Array.isArray(A)||(A=[A].filter(R=>!!R)),A);function o(A=16){const R=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(A).replace(/x/g,R)}function a(A){A=s(A),A.forEach(R=>{R.setAttribute("tabIndex","0")})}function l(A){A=s(A),A.forEach(R=>{R.setAttribute("tabIndex","-1")})}function c(A,R){A=s(A),A.forEach(O=>{O.setAttribute("role",R)})}function u(A,R){A=s(A),A.forEach(O=>{O.setAttribute("aria-roledescription",R)})}function f(A,R){A=s(A),A.forEach(O=>{O.setAttribute("aria-controls",R)})}function h(A,R){A=s(A),A.forEach(O=>{O.setAttribute("aria-label",R)})}function d(A,R){A=s(A),A.forEach(O=>{O.setAttribute("id",R)})}function g(A,R){A=s(A),A.forEach(O=>{O.setAttribute("aria-live",R)})}function v(A){A=s(A),A.forEach(R=>{R.setAttribute("aria-disabled",!0)})}function x(A){A=s(A),A.forEach(R=>{R.setAttribute("aria-disabled",!1)})}function p(A){if(A.keyCode!==13&&A.keyCode!==32)return;const R=i.params.a11y,O=A.target;i.pagination&&i.pagination.el&&(O===i.pagination.el||i.pagination.el.contains(A.target))&&!A.target.matches(Mr(i.params.pagination.bulletClass))||(i.navigation&&i.navigation.nextEl&&O===i.navigation.nextEl&&(i.isEnd&&!i.params.loop||i.slideNext(),i.isEnd?r(R.lastSlideMessage):r(R.nextSlideMessage)),i.navigation&&i.navigation.prevEl&&O===i.navigation.prevEl&&(i.isBeginning&&!i.params.loop||i.slidePrev(),i.isBeginning?r(R.firstSlideMessage):r(R.prevSlideMessage)),i.pagination&&O.matches(Mr(i.params.pagination.bulletClass))&&O.click())}function m(){if(i.params.loop||i.params.rewind||!i.navigation)return;const{nextEl:A,prevEl:R}=i.navigation;R&&(i.isBeginning?(v(R),l(R)):(x(R),a(R))),A&&(i.isEnd?(v(A),l(A)):(x(A),a(A)))}function y(){return i.pagination&&i.pagination.bullets&&i.pagination.bullets.length}function _(){return y()&&i.params.pagination.clickable}function b(){const A=i.params.a11y;!y()||i.pagination.bullets.forEach(R=>{i.params.pagination.clickable&&(a(R),i.params.pagination.renderBullet||(c(R,"button"),h(R,A.paginationBulletMessage.replace(/\{\{index\}\}/,ii(R)+1)))),R.matches(`.${i.params.pagination.bulletActiveClass}`)?R.setAttribute("aria-current","true"):R.removeAttribute("aria-current")})}const w=(A,R,O)=>{a(A),A.tagName!=="BUTTON"&&(c(A,"button"),A.addEventListener("keydown",p)),h(A,O),f(A,R)},S=()=>{i.a11y.clicked=!0},M=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.destroyed||(i.a11y.clicked=!1)})})},P=A=>{if(i.a11y.clicked)return;const R=A.target.closest(`.${i.params.slideClass}, swiper-slide`);if(!R||!i.slides.includes(R))return;const O=i.slides.indexOf(R)===i.activeIndex,z=i.params.watchSlidesProgress&&i.visibleSlides&&i.visibleSlides.includes(R);O||z||A.sourceCapabilities&&A.sourceCapabilities.firesTouchEvents||(i.isHorizontal()?i.el.scrollLeft=0:i.el.scrollTop=0,i.slideTo(i.slides.indexOf(R),0))},F=()=>{const A=i.params.a11y;A.itemRoleDescriptionMessage&&u(i.slides,A.itemRoleDescriptionMessage),A.slideRole&&c(i.slides,A.slideRole);const R=i.slides.length;A.slideLabelMessage&&i.slides.forEach((O,z)=>{const U=i.params.loop?parseInt(O.getAttribute("data-swiper-slide-index"),10):z,j=A.slideLabelMessage.replace(/\{\{index\}\}/,U+1).replace(/\{\{slidesLength\}\}/,R);h(O,j)})},T=()=>{const A=i.params.a11y;i.el.append(n);const R=i.el;A.containerRoleDescriptionMessage&&u(R,A.containerRoleDescriptionMessage),A.containerMessage&&h(R,A.containerMessage);const O=i.wrapperEl,z=A.id||O.getAttribute("id")||`swiper-wrapper-${o(16)}`,U=i.params.autoplay&&i.params.autoplay.enabled?"off":"polite";d(O,z),g(O,U),F();let{nextEl:j,prevEl:ie}=i.navigation?i.navigation:{};j=s(j),ie=s(ie),j&&j.forEach(ue=>w(ue,z,A.nextSlideMessage)),ie&&ie.forEach(ue=>w(ue,z,A.prevSlideMessage)),_()&&(Array.isArray(i.pagination.el)?i.pagination.el:[i.pagination.el]).forEach(oe=>{oe.addEventListener("keydown",p)}),i.el.addEventListener("focus",P,!0),i.el.addEventListener("pointerdown",S,!0),i.el.addEventListener("pointerup",M,!0)};function D(){n&&n.length>0&&n.remove();let{nextEl:A,prevEl:R}=i.navigation?i.navigation:{};A=s(A),R=s(R),A&&A.forEach(O=>O.removeEventListener("keydown",p)),R&&R.forEach(O=>O.removeEventListener("keydown",p)),_()&&(Array.isArray(i.pagination.el)?i.pagination.el:[i.pagination.el]).forEach(z=>{z.removeEventListener("keydown",p)}),i.el.removeEventListener("focus",P,!0),i.el.removeEventListener("pointerdown",S,!0),i.el.removeEventListener("pointerup",M,!0)}t("beforeInit",()=>{n=u1("span",i.params.a11y.notificationClass),n.setAttribute("aria-live","assertive"),n.setAttribute("aria-atomic","true"),i.isElement&&n.setAttribute("slot","container-end")}),t("afterInit",()=>{!i.params.a11y.enabled||T()}),t("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{!i.params.a11y.enabled||F()}),t("fromEdge toEdge afterInit lock unlock",()=>{!i.params.a11y.enabled||m()}),t("paginationUpdate",()=>{!i.params.a11y.enabled||b()}),t("destroy",()=>{!i.params.a11y.enabled||D()})}function Br(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function Fi(i,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof i[n]=="undefined"?i[n]=e[n]:Br(e[n])&&Br(i[n])&&Object.keys(e[n]).length>0?e[n].__swiper__?i[n]=e[n]:Fi(i[n],e[n]):i[n]=e[n]})}function g8(i={}){return i.navigation&&typeof i.navigation.nextEl=="undefined"&&typeof i.navigation.prevEl=="undefined"}function v8(i={}){return i.pagination&&typeof i.pagination.el=="undefined"}function x8(i={}){return i.scrollbar&&typeof i.scrollbar.el=="undefined"}function y8(i=""){const e=i.split(" ").map(n=>n.trim()).filter(n=>!!n),t=[];return e.forEach(n=>{t.indexOf(n)<0&&t.push(n)}),t.join(" ")}function W_(i=""){return i?i.includes("swiper-wrapper")?i:`swiper-wrapper ${i}`:"swiper-wrapper"}const _8=["modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopedSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideNextClass","slidePrevClass","wrapperClass","lazyPreloaderClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control","injectStyles","injectStylesUrls"];function id(i={},e=!0){const t={on:{}},n={},r={};Fi(t,x0.defaults),Fi(t,x0.extendedDefaults),t._emitClasses=!0,t.init=!1;const s={},o=_8.map(l=>l.replace(/_/,"")),a=Object.assign({},i);return Object.keys(a).forEach(l=>{typeof i[l]!="undefined"&&(o.indexOf(l)>=0?Br(i[l])?(t[l]={},r[l]={},Fi(t[l],i[l]),Fi(r[l],i[l])):(t[l]=i[l],r[l]=i[l]):l.search(/on[A-Z]/)===0&&typeof i[l]=="function"?e?n[`${l[2].toLowerCase()}${l.substr(3)}`]=i[l]:t.on[`${l[2].toLowerCase()}${l.substr(3)}`]=i[l]:s[l]=i[l])}),["navigation","pagination","scrollbar"].forEach(l=>{t[l]===!0&&(t[l]={}),t[l]===!1&&delete t[l]}),{params:t,passedParams:r,rest:s,events:n}}function X_({el:i,nextEl:e,prevEl:t,paginationEl:n,scrollbarEl:r,swiper:s},o){g8(o)&&e&&t&&(s.params.navigation.nextEl=e,s.originalParams.navigation.nextEl=e,s.params.navigation.prevEl=t,s.originalParams.navigation.prevEl=t),v8(o)&&n&&(s.params.pagination.el=n,s.originalParams.pagination.el=n),x8(o)&&r&&(s.params.scrollbar.el=r,s.originalParams.scrollbar.el=r),s.init(i)}function j_(i,e,t,n,r){const s=[];if(!e)return s;const o=l=>{s.indexOf(l)<0&&s.push(l)};if(t&&n){const l=n.map(r),c=t.map(r);l.join("")!==c.join("")&&o("children"),n.length!==t.length&&o("children")}return _8.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in i&&l in e)if(Br(i[l])&&Br(e[l])){const c=Object.keys(i[l]),u=Object.keys(e[l]);c.length!==u.length?o(l):(c.forEach(f=>{i[l][f]!==e[l][f]&&o(l)}),u.forEach(f=>{i[l][f]!==e[l][f]&&o(l)}))}else i[l]!==e[l]&&o(l)}),s}function K1(i,e,t){i===void 0&&(i={});const n=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},s=(o,a)=>{!Array.isArray(o)||o.forEach(l=>{const c=typeof l.type=="symbol";a==="default"&&(a="container-end"),c&&l.children?s(l.children,"default"):l.type&&(l.type.name==="SwiperSlide"||l.type.name==="AsyncComponentWrapper")?n.push(l):r[a]&&r[a].push(l)})};return Object.keys(i).forEach(o=>{if(typeof i[o]!="function")return;const a=i[o]();s(a,o)}),t.value=e.value,e.value=n,{slides:n,slots:r}}function Y_({swiper:i,slides:e,passedParams:t,changedParams:n,nextEl:r,prevEl:s,scrollbarEl:o,paginationEl:a}){const l=n.filter(M=>M!=="children"&&M!=="direction"&&M!=="wrapperClass"),{params:c,pagination:u,navigation:f,scrollbar:h,virtual:d,thumbs:g}=i;let v,x,p,m,y,_,b,w;n.includes("thumbs")&&t.thumbs&&t.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(v=!0),n.includes("controller")&&t.controller&&t.controller.control&&c.controller&&!c.controller.control&&(x=!0),n.includes("pagination")&&t.pagination&&(t.pagination.el||a)&&(c.pagination||c.pagination===!1)&&u&&!u.el&&(p=!0),n.includes("scrollbar")&&t.scrollbar&&(t.scrollbar.el||o)&&(c.scrollbar||c.scrollbar===!1)&&h&&!h.el&&(m=!0),n.includes("navigation")&&t.navigation&&(t.navigation.prevEl||s)&&(t.navigation.nextEl||r)&&(c.navigation||c.navigation===!1)&&f&&!f.prevEl&&!f.nextEl&&(y=!0);const S=M=>{!i[M]||(i[M].destroy(),M==="navigation"?(i.isElement&&(i[M].prevEl.remove(),i[M].nextEl.remove()),c[M].prevEl=void 0,c[M].nextEl=void 0,i[M].prevEl=void 0,i[M].nextEl=void 0):(i.isElement&&i[M].el.remove(),c[M].el=void 0,i[M].el=void 0))};n.includes("loop")&&i.isElement&&(c.loop&&!t.loop?_=!0:!c.loop&&t.loop?b=!0:w=!0),l.forEach(M=>{if(Br(c[M])&&Br(t[M]))Fi(c[M],t[M]);else{const P=t[M];(P===!0||P===!1)&&(M==="navigation"||M==="pagination"||M==="scrollbar")?P===!1&&S(M):c[M]=t[M]}}),l.includes("controller")&&!x&&i.controller&&i.controller.control&&c.controller&&c.controller.control&&(i.controller.control=c.controller.control),n.includes("children")&&e&&d&&c.virtual.enabled&&(d.slides=e,d.update(!0)),n.includes("children")&&e&&c.loop&&(w=!0),v&&g.init()&&g.update(!0),x&&(i.controller.control=c.controller.control),p&&(i.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),i.el.shadowEl.appendChild(a)),a&&(c.pagination.el=a),u.init(),u.render(),u.update()),m&&(i.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),i.el.shadowEl.appendChild(o)),o&&(c.scrollbar.el=o),h.init(),h.updateSize(),h.setTranslate()),y&&(i.isElement&&((!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-button-next"),i.el.shadowEl.appendChild(r)),(!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-prev"),i.el.shadowEl.appendChild(s))),r&&(c.navigation.nextEl=r),s&&(c.navigation.prevEl=s),f.init(),f.update()),n.includes("allowSlideNext")&&(i.allowSlideNext=t.allowSlideNext),n.includes("allowSlidePrev")&&(i.allowSlidePrev=t.allowSlidePrev),n.includes("direction")&&i.changeDirection(t.direction,!1),(_||w)&&i.loopDestroy(),(b||w)&&i.loopCreate(),i.update()}function q_(i,e,t){if(!t)return null;const n=u=>{let f=u;return u<0?f=e.length+u:f>=e.length&&(f=f-e.length),f},r=i.value.isHorizontal()?{[i.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:s,to:o}=t,a=i.value.params.loop?-e.length:0,l=i.value.params.loop?e.length*2:e.length,c=[];for(let u=a;u<l;u+=1)u>=s&&u<=o&&c.push(e[n(u)]);return c.map(u=>(u.props||(u.props={}),u.props.style||(u.props.style={}),u.props.swiperRef=i,u.props.style=r,I0(u.type,m0({},u.props),u.children)))}const Q_=i=>{!i||i.destroyed||!i.params.virtual||i.params.virtual&&!i.params.virtual.enabled||(i.updateSlides(),i.updateProgress(),i.updateSlidesClasses(),i.parallax&&i.params.parallax&&i.params.parallax.enabled&&i.parallax.setTranslate())},b8={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(i,e){let{slots:t,emit:n}=e;const{tag:r,wrapperTag:s}=i,o=n0("swiper"),a=n0(null),l=n0(!1),c=n0(!1),u=n0(null),f=n0(null),h=n0(null),d={value:[]},g={value:[]},v=n0(null),x=n0(null),p=n0(null),m=n0(null),{params:y,passedParams:_}=id(i,!1);K1(t,d,g),h.value=_,g.value=d.value;const b=()=>{K1(t,d,g),l.value=!0};y.onAny=function(M){for(var P=arguments.length,F=new Array(P>1?P-1:0),T=1;T<P;T++)F[T-1]=arguments[T];n(M,...F)},Object.assign(y.on,{_beforeBreakpoint:b,_containerClasses(M,P){o.value=P}});const w=m0({},y);if(delete w.wrapperClass,f.value=new x0(w),f.value.virtual&&f.value.params.virtual.enabled){f.value.virtual.slides=d.value;const M={cache:!1,slides:d.value,renderExternal:P=>{a.value=P},renderExternalUpdate:!1};Fi(f.value.params.virtual,M),Fi(f.value.originalParams.virtual,M)}c9(()=>{!c.value&&f.value&&(f.value.emitSlidesClasses(),c.value=!0);const{passedParams:M}=id(i,!1),P=j_(M,h.value,d.value,g.value,F=>F.props&&F.props.key);h.value=M,(P.length||l.value)&&f.value&&!f.value.destroyed&&Y_({swiper:f.value,slides:d.value,passedParams:M,changedParams:P,nextEl:v.value,prevEl:x.value,scrollbarEl:m.value,paginationEl:p.value}),l.value=!1}),Pr("swiper",f),je(a,()=>{o9(()=>{Q_(f.value)})}),nl(()=>{!u.value||(X_({el:u.value,nextEl:v.value,prevEl:x.value,paginationEl:p.value,scrollbarEl:m.value,swiper:f.value},y),n("swiper",f.value))}),u9(()=>{f.value&&!f.value.destroyed&&f.value.destroy(!0,!1)});function S(M){return y.virtual?q_(f,M,a.value):(M.forEach((P,F)=>{P.props||(P.props={}),P.props.swiperRef=f,P.props.swiperSlideIndex=F}),M)}return()=>{const{slides:M,slots:P}=K1(t,d,g);return I0(r,{ref:u,class:y8(o.value)},[P["container-start"],I0(s,{class:W_(y.wrapperClass)},[P["wrapper-start"],S(M),P["wrapper-end"]]),g8(i)&&[I0("div",{ref:x,class:"swiper-button-prev"}),I0("div",{ref:v,class:"swiper-button-next"})],x8(i)&&I0("div",{ref:m,class:"swiper-scrollbar"}),v8(i)&&I0("div",{ref:p,class:"swiper-pagination"}),P["container-end"]])}}},dc={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(i,e){let{slots:t}=e,n=!1;const{swiperRef:r}=i,s=n0(null),o=n0("swiper-slide"),a=n0(!1);function l(f,h,d){h===s.value&&(o.value=d)}nl(()=>{!r||!r.value||(r.value.on("_slideClass",l),n=!0)}),z4(()=>{n||!r||!r.value||(r.value.on("_slideClass",l),n=!0)}),c9(()=>{!s.value||!r||!r.value||(typeof i.swiperSlideIndex!="undefined"&&(s.value.swiperSlideIndex=i.swiperSlideIndex),r.value.destroyed&&o.value!=="swiper-slide"&&(o.value="swiper-slide"))}),u9(()=>{!r||!r.value||r.value.off("_slideClass",l)});const c=un(()=>({isActive:o.value.indexOf("swiper-slide-active")>=0,isVisible:o.value.indexOf("swiper-slide-visible")>=0,isPrev:o.value.indexOf("swiper-slide-prev")>=0,isNext:o.value.indexOf("swiper-slide-next")>=0}));Pr("swiperSlide",c);const u=()=>{a.value=!0};return()=>I0(i.tag,{class:y8(`${o.value}`),ref:s,"data-swiper-slide-index":typeof i.virtualIndex=="undefined"&&r&&r.value&&r.value.params.loop?i.swiperSlideIndex:i.virtualIndex,onLoadCapture:u},i.zoom?I0("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof i.zoom=="number"?i.zoom:void 0},[t.default&&t.default(c.value),i.lazy&&!a.value&&I0("div",{class:"swiper-lazy-preloader"})]):[t.default&&t.default(c.value),i.lazy&&!a.value&&I0("div",{class:"swiper-lazy-preloader"})])}};const O9=i=>(hm("data-v-56130a80"),i=i(),dm(),i),Z_={class:"bg flex flex-col min-h-screen"},K_={class:"flex flex-col lg:flex-row mx-5 lg:space-x-4 pt-16 text-gray-200 my-auto justify-center"},J_=Z4('<div class="basis-1/4" data-v-56130a80><div class="mt-5 p-3 bg-gray-500/25 backdrop-blur-xl rounded-md" data-v-56130a80><h1 class="font-bold text-2xl" data-v-56130a80><span class="text-red-500" data-v-56130a80>PixselCraft</span> - \u0438\u0433\u0440\u043E\u0432\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 Minecraft. </h1><p class="text-gray-300 pt-1" data-v-56130a80>\u041A\u0430\u0436\u0434\u044B\u0439 \u0438\u0433\u0440\u043E\u043A \u0438\u0449\u0435\u0442 \u0443\u044E\u0442\u043D\u0443\u044E \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443 \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0439 \u0433\u0435\u0439\u043C\u043F\u043B\u0435\u0439, \u043E\u0442\u0437\u044B\u0432\u0447\u0438\u0432\u0443\u044E \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E \u0438 \u0431\u0430\u043B\u0430\u043D\u0441 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. <br data-v-56130a80> \u0412\u0441\u0451 \u044D\u0442\u043E \u0435\u0441\u0442\u044C \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0435 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F - PixselCraft! </p></div><div class="flex justify-center pt-2" data-v-56130a80><a class="btn w-full text-center text-white bg-cyan-500/25 hover:bg-cyan-500/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 mr-1 rounded-xl" data-v-56130a80> \u0412\u043E\u0439\u0442\u0438 </a><a class="btn w-full text-center text-cyan-500 bg-cyan-900/25 hover:bg-cyan-900/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 ml-1 rounded-xl" data-v-56130a80> \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F </a></div></div>',1),$_={class:"basis-1/2 my-auto flex flex-col space-y-3 pt-5 w-full"},eb=O9(()=>Qe("h1",{class:"font-bold text-2xl bg-gray-500/25 backdrop-blur-xl rounded-md p-3"},[Qe("span",{class:"text-orange-500"},"\u041E\u043D\u043B\u0430\u0439\u043D"),li(" \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445 "),Qe("p",{class:"text-base text-left font-light"}," \u0423 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u0432 \u0440\u0430\u0437\u043D\u044B\u0435 \u043D\u0430\u0431\u043E\u0440\u044B \u043C\u043E\u0434\u043E\u0432 \u0438 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0443 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 ")],-1)),tb={class:"pb-1 flex flex-col sm:flex-row sm:space-x-2"},nb={class:"font-bold text-xl z-10"},ib={class:"text-red-500"},rb={class:"flex space-x-2"},sb={class:"py-0.5 px-2 bg-gray-500/25 backdrop-blur-xl rounded-xl hover:underline decoration-cyan-500"},ob={href:""},ab={class:"py-0.5 px-2 bg-gray-500/25 backdrop-blur-xl rounded-xl hover:underline decoration-cyan-500"},lb={href:""},cb=O9(()=>Qe("span",{class:"py-0.5 px-2 bg-gray-500/25 backdrop-blur-xl rounded-xl hover:underline decoration-cyan-500"},"...",-1)),ub={class:"w-full bg-gray-500/40 backdrop-blur-xl rounded-full p-1 mt-0.5"},fb=li("Slide 1"),hb=li("Slide 2"),db=li("Slide 3"),pb=O9(()=>Qe("div",{class:"text-white min-h-screen bg2"},[Qe("h1",null,"\u041D\u043E\u0432\u043E\u0441\u0442\u0438")],-1)),mb={components:{Swiper:b8,SwiperSlide:dc},setup(){return{onSwiper:t=>{console.log(t)},onSlideChange:()=>{console.log("slide change")},modules:[k_,G_,H_,V_]}},data(){return{servers:[{Name:"HiTech",online:35,mods:["AE2","IndustrialCraft 2"]},{Name:"DarkSide",online:10,mods:["zalupa","IndustrialCraft 2"]}]}},onMounted(){}},gb=Object.assign(mb,{setup(i){return(e,t)=>(Cr(),Ns(F0,null,[De(vy),Qe("div",Z_,[De(_y,{class:"absolute"}),Qe("div",K_,[J_,Qe("div",$_,[eb,(Cr(!0),Ns(F0,null,$m(e.servers,n=>(Cr(),Ns("div",{key:n.Name,class:"pt-2"},[Qe("div",tb,[Qe("p",nb,[Qe("span",ib,Oo(n.Name),1),li(" "+Oo(n.online)+" \u0438\u0437 100",1)]),Qe("div",rb,[Qe("span",sb,[Qe("a",ob,Oo(n.mods[0]),1)]),Qe("span",ab,[Qe("a",lb,Oo(n.mods[1]),1)]),cb])]),Qe("div",ub,[Qe("div",{class:"bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 animate-text p-2 backdrop-blur-xl text-base font-light text-blue-100 text-center leading-none rounded-full",style:Qc("width:"+n.online+"%")},Oo(n.online)+"%",5)])]))),128))])])]),De(W0(b8),{class:"h-96",modules:W0(modules),"slides-per-view":1,"space-between":50,navigation:"",pagination:!0,scrollbar:{draggable:!0},onSwiper:W0(onSwiper),onSlideChange:W0(onSlideChange)},{default:Gt(()=>[De(W0(dc),null,{default:Gt(()=>[fb]),_:1}),De(W0(dc),null,{default:Gt(()=>[hb]),_:1}),De(W0(dc),null,{default:Gt(()=>[db]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"]),pb],64))}});var vb=c8(gb,[["__scopeId","data-v-56130a80"]]),xb=$v({history:mv(),routes:[{path:"/",component:vb},{path:"/about",component:()=>_2(()=>import("./About.c7d3d61d.js"),["assets/About.c7d3d61d.js","assets/About.09c41865.css"])},{path:"/contact",component:()=>_2(()=>import("./Contact.7d5cdaaa.js"),[])}]});/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const S8="134",Jr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},$r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yb=0,rd=1,_b=2,w8=1,bb=2,sa=3,Ks=0,Rt=1,Xi=2,M8=1,Kt=0,ma=1,Sf=2,sd=3,od=4,T8=5,Ei=100,Sb=101,wb=102,ad=103,ld=104,wf=200,Mb=201,Tb=202,Ab=203,A8=204,E8=205,P8=206,Eb=207,L8=208,Pb=209,Lb=210,Cb=0,Rb=1,Fb=2,Mf=3,Ib=4,Db=5,Nb=6,Ob=7,f1=0,zb=1,Bb=2,Nr=0,Ub=1,kb=2,Gb=3,Hb=4,Vb=5,Ps=300,mo=301,rl=302,Dc=303,Tf=304,h1=306,z9=307,Rn=1e3,gt=1001,Nc=1002,nt=1003,Af=1004,Ef=1005,it=1006,C8=1007,Hr=1008,ji=1009,Wb=1010,Xb=1011,Ba=1012,jb=1013,pc=1014,X0=1015,zi=1016,Yb=1017,qb=1018,Qb=1019,ga=1020,Zb=1021,Pn=1022,lt=1023,Kb=1024,Jb=1025,$b=lt,Us=1026,Ua=1027,eS=1028,tS=1029,nS=1030,iS=1031,rS=1032,sS=1033,cd=33776,ud=33777,fd=33778,hd=33779,dd=35840,pd=35841,md=35842,gd=35843,oS=36196,vd=37492,xd=37496,aS=37808,lS=37809,cS=37810,uS=37811,fS=37812,hS=37813,dS=37814,pS=37815,mS=37816,gS=37817,vS=37818,xS=37819,yS=37820,_S=37821,bS=36492,SS=37840,wS=37841,MS=37842,TS=37843,AS=37844,ES=37845,PS=37846,LS=37847,CS=37848,RS=37849,FS=37850,IS=37851,DS=37852,NS=37853,OS=2200,zS=2201,BS=2202,ka=2300,Js=2301,J1=2302,Ls=2400,Cs=2401,Oc=2402,B9=2500,R8=2501,US=0,kS=1,F8=2,l0=3e3,_0=3001,U9=3007,k9=3002,GS=3003,I8=3004,D8=3005,N8=3006,HS=3200,O8=3201,Vr=0,VS=1,$1=7680,WS=519,Ga=35044,zc=35048,yd="300 es";class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}let bl=1234567;const va=Math.PI/180,Ha=180/Math.PI,Zt=[];for(let i=0;i<256;i++)Zt[i]=(i<16?"0":"")+i.toString(16);const XS=typeof crypto!="undefined"&&"randomUUID"in crypto;function K0(){if(XS)return crypto.randomUUID().toUpperCase();const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toUpperCase()}function i0(i,e,t){return Math.max(e,Math.min(t,i))}function G9(i,e){return(i%e+e)%e}function jS(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function YS(i,e,t){return i!==e?(t-i)/(e-i):0}function xa(i,e,t){return(1-t)*i+t*e}function qS(i,e,t,n){return xa(i,e,1-Math.exp(-t*n))}function QS(i,e=1){return e-Math.abs(G9(i,e*2)-e)}function ZS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function KS(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function JS(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $S(i,e){return i+Math.random()*(e-i)}function ew(i){return i*(.5-Math.random())}function tw(i){return i!==void 0&&(bl=i%2147483647),bl=bl*16807%2147483647,(bl-1)/2147483646}function nw(i){return i*va}function iw(i){return i*Ha}function Pf(i){return(i&i-1)===0&&i!==0}function z8(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function B8(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rw(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}var j0=Object.freeze({__proto__:null,DEG2RAD:va,RAD2DEG:Ha,generateUUID:K0,clamp:i0,euclideanModulo:G9,mapLinear:jS,inverseLerp:YS,lerp:xa,damp:qS,pingpong:QS,smoothstep:ZS,smootherstep:KS,randInt:JS,randFloat:$S,randFloatSpread:ew,seededRandom:tw,degToRad:nw,radToDeg:iw,isPowerOfTwo:Pf,ceilPowerOfTwo:z8,floorPowerOfTwo:B8,setQuaternionFromProperEuler:rw});class ne{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}ne.prototype.isVector2=!0;class Xt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],v=r[0],x=r[3],p=r[6],m=r[1],y=r[4],_=r[7],b=r[2],w=r[5],S=r[8];return s[0]=o*v+a*m+l*b,s[3]=o*x+a*y+l*w,s[6]=o*p+a*_+l*S,s[1]=c*v+u*m+f*b,s[4]=c*x+u*y+f*w,s[7]=c*p+u*_+f*S,s[2]=h*v+d*m+g*b,s[5]=h*x+d*y+g*w,s[8]=h*p+d*_+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Xt.prototype.isMatrix3=!0;function U8(i){if(i.length===0)return-1/0;let e=i[0];for(let t=1,n=i.length;t<n;++t)i[t]>e&&(e=i[t]);return e}function d1(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _d(i,e=0){let t=3735928559^e,n=1103547991^e;for(let r=0,s;r<i.length;r++)s=i.charCodeAt(r),t=Math.imul(t^s,2654435761),n=Math.imul(n^s,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&n)+(t>>>0)}let es;class go{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{es===void 0&&(es=d1("canvas")),es.width=e.width,es.height=e.height;const n=es.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let sw=0;class vt extends Ji{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=gt,r=gt,s=it,o=Hr,a=lt,l=ji,c=1,u=l0){super(),Object.defineProperty(this,"id",{value:sw++}),this.uuid=K0(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=K0()),!t&&e.images[r.uuid]===void 0){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(eu(r[o].image)):s.push(eu(r[o]))}else s=eu(r);e.images[r.uuid]={uuid:r.uuid,url:s}}n.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ps)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rn:e.x=e.x-Math.floor(e.x);break;case gt:e.x=e.x<0?0:1;break;case Nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rn:e.y=e.y-Math.floor(e.y);break;case gt:e.y=e.y<0?0:1;break;case Nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}vt.DEFAULT_IMAGE=void 0;vt.DEFAULT_MAPPING=Ps;vt.prototype.isTexture=!0;function eu(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?go.getDataURL(i):i.data?{data:Array.prototype.slice.call(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class Je{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],x=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(d+1)/2,b=(p+1)/2,w=(u+h)/4,S=(f+v)/4,M=(g+x)/4;return y>_&&y>b?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=S/n):_>b?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=w/r,s=M/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=S/s,r=M/s),this.set(n,r,s,t),this}let m=Math.sqrt((x-g)*(x-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(m)<.001&&(m=1),this.x=(x-g)/m,this.y=(f-v)/m,this.z=(h-u)/m,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}Je.prototype.isVector4=!0;class Dt extends Ji{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t),this.texture=new vt(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:it,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=m0({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.prototype.isWebGLRenderTarget=!0;class ow extends Dt{constructor(e,t,n){super(e,t);const r=this.texture;this.texture=[];for(let s=0;s<n;s++)this.texture[s]=r.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}ow.prototype.isWebGLMultipleRenderTargets=!0;class k8 extends Dt{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}k8.prototype.isWebGLMultisampleRenderTarget=!0;class Ct{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==h||c!==d||u!==g){let x=1-a;const p=l*h+c*d+u*g+f*v,m=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),w=Math.atan2(b,p*m);x=Math.sin(x*w)/b,a=Math.sin(a*w)/b}const _=a*m;if(l=l*x+h*_,c=c*x+d*_,u=u*x+g*_,f=f*x+v*_,x===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(i0(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Ct.prototype.isQuaternion=!0;class I{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,f=l*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(i0(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}I.prototype.isVector3=!0;const tu=new I,bd=new Ct;class nn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ko.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),nu.copy(t.boundingBox),nu.applyMatrix4(e.matrixWorld),this.union(nu));const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ko),ko.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),Sl.subVectors(this.max,Go),ts.subVectors(e.a,Go),ns.subVectors(e.b,Go),is.subVectors(e.c,Go),pi.subVectors(ns,ts),mi.subVectors(is,ns),gr.subVectors(ts,is);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-gr.z,gr.y,pi.z,0,-pi.x,mi.z,0,-mi.x,gr.z,0,-gr.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-gr.y,gr.x,0];return!iu(t,ts,ns,is,Sl)||(t=[1,0,0,0,1,0,0,0,1],!iu(t,ts,ns,is,Sl))?!1:(wl.crossVectors(pi,mi),t=[wl.x,wl.y,wl.z],iu(t,ts,ns,is,Sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ko.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ko).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}nn.prototype.isBox3=!0;const Bn=[new I,new I,new I,new I,new I,new I,new I,new I],ko=new I,nu=new nn,ts=new I,ns=new I,is=new I,pi=new I,mi=new I,gr=new I,Go=new I,Sl=new I,wl=new I,vr=new I;function iu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vr.fromArray(i,s);const a=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=t.dot(vr),u=n.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const aw=new nn,Sd=new I,ru=new I,su=new I;class Wr{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):aw.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){su.subVectors(e,this.center);const t=su.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(su.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return ru.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Sd.copy(e.center).add(ru)),this.expandByPoint(Sd.copy(e.center).sub(ru)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new I,ou=new I,Ml=new I,gi=new I,au=new I,Tl=new I,lu=new I;class Xr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.direction).multiplyScalar(t).add(this.origin),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ou.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(ou);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ml),a=gi.dot(this.direction),l=-gi.dot(Ml),c=gi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Ml).multiplyScalar(h).add(ou),d}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){au.subVectors(t,e),Tl.subVectors(n,e),lu.crossVectors(au,Tl);let o=this.direction.dot(lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(Tl.crossVectors(gi,Tl));if(l<0)return null;const c=a*this.direction.dot(au.cross(gi));if(c<0||l+c>o)return null;const u=-a*gi.dot(lu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,v,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,v=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lw,e,cw)}lookAt(e,t,n){const r=this.elements;return P0.subVectors(e,t),P0.lengthSq()===0&&(P0.z=1),P0.normalize(),vi.crossVectors(n,P0),vi.lengthSq()===0&&(Math.abs(n.z)===1?P0.x+=1e-4:P0.z+=1e-4,P0.normalize(),vi.crossVectors(n,P0)),vi.normalize(),Al.crossVectors(P0,vi),r[0]=vi.x,r[4]=Al.x,r[8]=P0.x,r[1]=vi.y,r[5]=Al.y,r[9]=P0.y,r[2]=vi.z,r[6]=Al.z,r[10]=P0.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],v=n[6],x=n[10],p=n[14],m=n[3],y=n[7],_=n[11],b=n[15],w=r[0],S=r[4],M=r[8],P=r[12],F=r[1],T=r[5],D=r[9],A=r[13],R=r[2],O=r[6],z=r[10],U=r[14],j=r[3],ie=r[7],ue=r[11],oe=r[15];return s[0]=o*w+a*F+l*R+c*j,s[4]=o*S+a*T+l*O+c*ie,s[8]=o*M+a*D+l*z+c*ue,s[12]=o*P+a*A+l*U+c*oe,s[1]=u*w+f*F+h*R+d*j,s[5]=u*S+f*T+h*O+d*ie,s[9]=u*M+f*D+h*z+d*ue,s[13]=u*P+f*A+h*U+d*oe,s[2]=g*w+v*F+x*R+p*j,s[6]=g*S+v*T+x*O+p*ie,s[10]=g*M+v*D+x*z+p*ue,s[14]=g*P+v*A+x*U+p*oe,s[3]=m*w+y*F+_*R+b*j,s[7]=m*S+y*T+_*O+b*ie,s[11]=m*M+y*D+_*z+b*ue,s[15]=m*P+y*A+_*U+b*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],x=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+v*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+x*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],x=e[14],p=e[15],m=f*x*c-v*h*c+v*l*d-a*x*d-f*l*p+a*h*p,y=g*h*c-u*x*c-g*l*d+o*x*d+u*l*p-o*h*p,_=u*v*c-g*f*c+g*a*d-o*v*d-u*a*p+o*f*p,b=g*f*l-u*v*l-g*a*h+o*v*h+u*a*x-o*f*x,w=t*m+n*y+r*_+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=m*S,e[1]=(v*h*s-f*x*s-v*r*d+n*x*d+f*r*p-n*h*p)*S,e[2]=(a*x*s-v*l*s+v*r*c-n*x*c-a*r*p+n*l*p)*S,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*S,e[4]=y*S,e[5]=(u*x*s-g*h*s+g*r*d-t*x*d-u*r*p+t*h*p)*S,e[6]=(g*l*s-o*x*s-g*r*c+t*x*c+o*r*p-t*l*p)*S,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*S,e[8]=_*S,e[9]=(g*f*s-u*v*s-g*n*d+t*v*d+u*n*p-t*f*p)*S,e[10]=(o*v*s-g*a*s+g*n*c-t*v*c-o*n*p+t*a*p)*S,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*S,e[12]=b*S,e[13]=(u*v*r-g*f*r+g*n*h-t*v*h-u*n*x+t*f*x)*S,e[14]=(g*a*r-o*v*r-g*n*l+t*v*l+o*n*x-t*a*x)*S,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*S,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,v=o*u,x=o*f,p=a*f,m=l*c,y=l*u,_=l*f,b=n.x,w=n.y,S=n.z;return r[0]=(1-(v+p))*b,r[1]=(d+_)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(d-_)*w,r[5]=(1-(h+p))*w,r[6]=(x+m)*w,r[7]=0,r[8]=(g+y)*S,r[9]=(x-m)*S,r[10]=(1-(h+v))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),a=rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/o,f=1/a;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),f=(t+e)*l,h=(n+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}we.prototype.isMatrix4=!0;const rs=new I,sn=new we,lw=new I(0,0,0),cw=new I(1,1,1),vi=new I,Al=new I,P0=new I,wd=new we,Md=new Ct;class hn{constructor(e=0,t=0,n=0,r=hn.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(i0(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-i0(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(i0(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-i0(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(i0(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-i0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Md.setFromEuler(this),this.setFromQuaternion(Md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new I(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}hn.prototype.isEuler=!0;hn.DefaultOrder="XYZ";hn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class G8{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let uw=0;const Td=new I,ss=new Ct,kn=new we,El=new I,Ho=new I,fw=new I,hw=new Ct,Ad=new I(1,0,0),Ed=new I(0,1,0),Pd=new I(0,0,1),dw={type:"added"},Ld={type:"removed"};class Ye extends Ji{constructor(){super(),Object.defineProperty(this,"id",{value:uw++}),this.uuid=K0(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DefaultUp.clone();const e=new I,t=new hn,n=new Ct,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new Xt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Ye.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new G8,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Ad,e)}rotateY(e){return this.rotateOnAxis(Ed,e)}rotateZ(e){return this.rotateOnAxis(Pd,e)}translateOnAxis(e,t){return Td.copy(e).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ad,e)}translateY(e){return this.translateOnAxis(Ed,e)}translateZ(e){return this.translateOnAxis(Pd,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?El.copy(e):El.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ho,El,this.up):kn.lookAt(El,Ho,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(kn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(dw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ld)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,fw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,hw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ye.DefaultUp=new I(0,1,0);Ye.DefaultMatrixAutoUpdate=!0;Ye.prototype.isObject3D=!0;const on=new I,Gn=new I,cu=new I,Hn=new I,os=new I,as=new I,Cd=new I,uu=new I,fu=new I,hu=new I;class It{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){on.subVectors(r,t),Gn.subVectors(n,t),cu.subVectors(e,t);const o=on.dot(on),a=on.dot(Gn),l=on.dot(cu),c=Gn.dot(Gn),u=Gn.dot(cu),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn),Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Hn),l.set(0,0),l.addScaledVector(s,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l}static isFrontFacing(e,t,n,r){return on.subVectors(n,t),Gn.subVectors(e,t),on.cross(Gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),on.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return It.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return It.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return It.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return It.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return It.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;os.subVectors(r,n),as.subVectors(s,n),uu.subVectors(e,n);const l=os.dot(uu),c=as.dot(uu);if(l<=0&&c<=0)return t.copy(n);fu.subVectors(e,r);const u=os.dot(fu),f=as.dot(fu);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(os,o);hu.subVectors(e,s);const d=os.dot(hu),g=as.dot(hu);if(g>=0&&d<=g)return t.copy(s);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(as,a);const x=u*g-d*f;if(x<=0&&f-u>=0&&d-g>=0)return Cd.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Cd,a);const p=1/(x+v+h);return o=v*p,a=h*p,t.copy(n).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let pw=0;class zt extends Ji{constructor(){super(),Object.defineProperty(this,"id",{value:pw++}),this.uuid=K0(),this.name="",this.type="Material",this.fog=!0,this.blending=ma,this.side=Ks,this.vertexColors=!1,this.opacity=1,this.format=lt,this.transparent=!1,this.blendSrc=A8,this.blendDst=E8,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Mf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=WS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$1,this.stencilZFail=$1,this.stencilZPass=$1,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===M8;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ma&&(n.blending=this.blending),this.side!==Ks&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==lt&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}zt.prototype.isMaterial=!0;const H8={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function du(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function pu(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}class Se{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=G9(e,1),t=i0(t,0,1),n=i0(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=du(s,r,e+1/3),this.g=du(s,r,e),this.b=du(s,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=H8[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=pu(e.r),this.g=pu(e.g),this.b=pu(e.b),this}copyLinearToSRGB(e){return this.r=mu(e.r),this.g=mu(e.g),this.b=mu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,r=this.b,s=Math.max(t,n,r),o=Math.min(t,n,r);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const u=s-o;switch(l=c<=.5?u/(s+o):u/(2-s-o),s){case t:a=(n-r)/u+(n<r?6:0);break;case n:a=(r-t)/u+2;break;case r:a=(t-n)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Pl);const n=xa(an.h,Pl.h,t),r=xa(an.s,Pl.s,t),s=xa(an.l,Pl.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Se.NAMES=H8;Se.prototype.isColor=!0;Se.prototype.r=1;Se.prototype.g=1;Se.prototype.b=1;class Z0 extends zt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=f1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Z0.prototype.isMeshBasicMaterial=!0;const ct=new I,Ll=new ne;class Tt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ga,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Se),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new ne),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new I),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new Je),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.x=this.getX(t),ct.y=this.getY(t),ct.z=this.getZ(t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.x=this.getX(t),ct.y=this.getY(t),ct.z=this.getZ(t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.x=this.getX(t),ct.y=this.getY(t),ct.z=this.getZ(t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Tt.prototype.isBufferAttribute=!0;class H9 extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class V8 extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mw extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}mw.prototype.isFloat16BufferAttribute=!0;class Te extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gw=0;const k0=new we,gu=new Ye,ls=new I,L0=new nn,Vo=new nn,kt=new I;class Re extends Ji{constructor(){super(),Object.defineProperty(this,"id",{value:gw++}),this.uuid=K0(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U8(e)>65535?V8:H9)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return k0.makeRotationFromQuaternion(e),this.applyMatrix4(k0),this}rotateX(e){return k0.makeRotationX(e),this.applyMatrix4(k0),this}rotateY(e){return k0.makeRotationY(e),this.applyMatrix4(k0),this}rotateZ(e){return k0.makeRotationZ(e),this.applyMatrix4(k0),this}translate(e,t,n){return k0.makeTranslation(e,t,n),this.applyMatrix4(k0),this}scale(e,t,n){return k0.makeScale(e,t,n),this.applyMatrix4(k0),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Te(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];L0.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,L0.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,L0.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(L0.min),this.boundingBox.expandByPoint(L0.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(L0.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(L0.min,Vo.min),L0.expandByPoint(kt),kt.addVectors(L0.max,Vo.max),L0.expandByPoint(kt)):(L0.expandByPoint(Vo.min),L0.expandByPoint(Vo.max))}L0.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),kt.add(ls)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Tt(new Float32Array(4*a),4));const l=t.tangent.array,c=[],u=[];for(let F=0;F<a;F++)c[F]=new I,u[F]=new I;const f=new I,h=new I,d=new I,g=new ne,v=new ne,x=new ne,p=new I,m=new I;function y(F,T,D){f.fromArray(r,F*3),h.fromArray(r,T*3),d.fromArray(r,D*3),g.fromArray(o,F*2),v.fromArray(o,T*2),x.fromArray(o,D*2),h.sub(f),d.sub(f),v.sub(g),x.sub(g);const A=1/(v.x*x.y-x.x*v.y);!isFinite(A)||(p.copy(h).multiplyScalar(x.y).addScaledVector(d,-v.y).multiplyScalar(A),m.copy(d).multiplyScalar(v.x).addScaledVector(h,-x.x).multiplyScalar(A),c[F].add(p),c[T].add(p),c[D].add(p),u[F].add(m),u[T].add(m),u[D].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let F=0,T=_.length;F<T;++F){const D=_[F],A=D.start,R=D.count;for(let O=A,z=A+R;O<z;O+=3)y(n[O+0],n[O+1],n[O+2])}const b=new I,w=new I,S=new I,M=new I;function P(F){S.fromArray(s,F*3),M.copy(S);const T=c[F];b.copy(T),b.sub(S.multiplyScalar(S.dot(T))).normalize(),w.crossVectors(M,T);const A=w.dot(u[F])<0?-1:1;l[F*4]=b.x,l[F*4+1]=b.y,l[F*4+2]=b.z,l[F*4+3]=A}for(let F=0,T=_.length;F<T;++F){const D=_[F],A=D.start,R=D.count;for(let O=A,z=A+R;O<z;O+=3)P(n[O+0]),P(n[O+1]),P(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),v=e.getX(h+1),x=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const r in n){if(e.attributes[r]===void 0)continue;const o=n[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let f=0,h=c;f<u;f++,h++)o[h]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Tt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Re,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Re.prototype.isBufferGeometry=!0;const Rd=new we,cs=new Xr,vu=new Wr,xi=new I,yi=new I,_i=new I,xu=new I,yu=new I,_u=new I,Cl=new I,Rl=new I,Fl=new I,Il=new ne,Dl=new ne,Nl=new ne,bu=new I,Ol=new I;class Ot extends Ye{constructor(e=new Re,t=new Z0){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),vu.copy(n.boundingSphere),vu.applyMatrix4(s),e.ray.intersectsSphere(vu)===!1)||(Rd.copy(s).invert(),cs.copy(e.ray).applyMatrix4(Rd),n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const p=d[v],m=r[p.materialIndex],y=Math.max(p.start,g.start),_=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let b=y,w=_;b<w;b+=3){const S=a.getX(b),M=a.getX(b+1),P=a.getX(b+2);o=zl(this,m,e,cs,l,c,u,f,h,S,M,P),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const v=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let p=v,m=x;p<m;p+=3){const y=a.getX(p),_=a.getX(p+1),b=a.getX(p+2);o=zl(this,r,e,cs,l,c,u,f,h,y,_,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=d.length;v<x;v++){const p=d[v],m=r[p.materialIndex],y=Math.max(p.start,g.start),_=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let b=y,w=_;b<w;b+=3){const S=b,M=b+1,P=b+2;o=zl(this,m,e,cs,l,c,u,f,h,S,M,P),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let p=v,m=x;p<m;p+=3){const y=p,_=p+1,b=p+2;o=zl(this,r,e,cs,l,c,u,f,h,y,_,b),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Ot.prototype.isMesh=!0;function vw(i,e,t,n,r,s,o,a){let l;if(e.side===Rt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==Xi,a),l===null)return null;Ol.copy(a),Ol.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ol);return c<t.near||c>t.far?null:{distance:c,point:Ol.clone(),object:i}}function zl(i,e,t,n,r,s,o,a,l,c,u,f){xi.fromBufferAttribute(r,c),yi.fromBufferAttribute(r,u),_i.fromBufferAttribute(r,f);const h=i.morphTargetInfluences;if(s&&h){Cl.set(0,0,0),Rl.set(0,0,0),Fl.set(0,0,0);for(let g=0,v=s.length;g<v;g++){const x=h[g],p=s[g];x!==0&&(xu.fromBufferAttribute(p,c),yu.fromBufferAttribute(p,u),_u.fromBufferAttribute(p,f),o?(Cl.addScaledVector(xu,x),Rl.addScaledVector(yu,x),Fl.addScaledVector(_u,x)):(Cl.addScaledVector(xu.sub(xi),x),Rl.addScaledVector(yu.sub(yi),x),Fl.addScaledVector(_u.sub(_i),x)))}xi.add(Cl),yi.add(Rl),_i.add(Fl)}i.isSkinnedMesh&&(i.boneTransform(c,xi),i.boneTransform(u,yi),i.boneTransform(f,_i));const d=vw(i,e,t,n,xi,yi,_i,bu);if(d){a&&(Il.fromBufferAttribute(a,c),Dl.fromBufferAttribute(a,u),Nl.fromBufferAttribute(a,f),d.uv=It.getUV(bu,xi,yi,_i,Il,Dl,Nl,new ne)),l&&(Il.fromBufferAttribute(l,c),Dl.fromBufferAttribute(l,u),Nl.fromBufferAttribute(l,f),d.uv2=It.getUV(bu,xi,yi,_i,Il,Dl,Nl,new ne));const g={a:c,b:u,c:f,normal:new I,materialIndex:0};It.getNormal(xi,yi,_i,g.normal),d.face=g}return d}class Ur extends Re{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(u,3)),this.setAttribute("uv",new Te(f,2));function g(v,x,p,m,y,_,b,w,S,M,P){const F=_/S,T=b/M,D=_/2,A=b/2,R=w/2,O=S+1,z=M+1;let U=0,j=0;const ie=new I;for(let ue=0;ue<z;ue++){const oe=ue*T-A;for(let xe=0;xe<O;xe++){const $=xe*F-D;ie[v]=$*m,ie[x]=oe*y,ie[p]=R,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[x]=0,ie[p]=w>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(xe/S),f.push(1-ue/M),U+=1}}for(let ue=0;ue<M;ue++)for(let oe=0;oe<S;oe++){const xe=h+oe+O*ue,$=h+oe+O*(ue+1),re=h+(oe+1)+O*(ue+1),H=h+(oe+1)+O*ue;l.push(xe,$,H),l.push($,re,H),j+=6}a.addGroup(d,j,P),d+=j,h+=U}}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function t0(i){const e={};for(let t=0;t<i.length;t++){const n=$s(i[t]);for(const r in n)e[r]=n[r]}return e}const s0={clone:$s,merge:t0};var xw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ft extends zt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=xw,this.fragmentShader=yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}ft.prototype.isShaderMaterial=!0;class V9 extends Ye{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}V9.prototype.isCamera=!0;class $t extends V9{constructor(e=50,t=1,n=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}$t.prototype.isPerspectiveCamera=!0;const us=90,fs=1;class p1 extends Ye{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const r=new $t(us,fs,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new I(1,0,0)),this.add(r);const s=new $t(us,fs,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new I(-1,0,0)),this.add(s);const o=new $t(us,fs,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new I(0,1,0)),this.add(o);const a=new $t(us,fs,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new I(0,-1,0)),this.add(a);const l=new $t(us,fs,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new I(0,0,1)),this.add(l);const c=new $t(us,fs,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new I(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.xr.enabled,f=e.getRenderTarget();e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(f),e.xr.enabled=u}}class m1 extends vt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:mo,super(e,t,n,r,s,o,a,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}m1.prototype.isCubeTexture=!0;class W9 extends Dt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new m1(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:it,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=lt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ur(5,5,5),s=new ft({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Kt});s.uniforms.tEquirect.value=t;const o=new Ot(r,s),a=t.minFilter;return t.minFilter===Hr&&(t.minFilter=it),new p1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}W9.prototype.isWebGLCubeRenderTarget=!0;const Su=new I,_w=new I,bw=new Xt;class Tn{constructor(e=new I(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Su.subVectors(n,t).cross(_w.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Su),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bw.getNormalMatrix(e),r=this.coplanarPoint(Su).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Tn.prototype.isPlane=!0;const hs=new Wr,Bl=new I;class g1{constructor(e=new Tn,t=new Tn,n=new Tn,r=new Tn,s=new Tn,o=new Tn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],g=n[10],v=n[11],x=n[12],p=n[13],m=n[14],y=n[15];return t[0].setComponents(a-r,f-l,v-h,y-x).normalize(),t[1].setComponents(a+r,f+l,v+h,y+x).normalize(),t[2].setComponents(a+s,f+c,v+d,y+p).normalize(),t[3].setComponents(a-s,f-c,v-d,y-p).normalize(),t[4].setComponents(a-o,f-u,v-g,y-m).normalize(),t[5].setComponents(a+o,f+u,v+g,y+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSprite(e){return hs.center.set(0,0,0),hs.radius=.7071067811865476,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Bl.x=r.normal.x>0?e.max.x:e.min.x,Bl.y=r.normal.y>0?e.max.y:e.min.y,Bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W8(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Sw(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,f,h),c.onUploadCallback();let g=5126;return f instanceof Float32Array?g=5126:f instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):f instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:f instanceof Int16Array?g=5122:f instanceof Uint32Array?g=5125:f instanceof Int32Array?g=5124:f instanceof Int8Array?g=5120:(f instanceof Uint8Array||f instanceof Uint8ClampedArray)&&(g=5121),{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;i.bindBuffer(f,c),d.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class sl extends Re{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],v=[],x=[];for(let p=0;p<u;p++){const m=p*h-o;for(let y=0;y<c;y++){const _=y*f-s;g.push(_,-m,0),v.push(0,0,1),x.push(y/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<a;m++){const y=m+c*p,_=m+c*(p+1),b=m+1+c*(p+1),w=m+1+c*p;d.push(y,_,w),d.push(_,b,w)}this.setIndex(d),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(x,2))}static fromJSON(e){return new sl(e.width,e.height,e.widthSegments,e.heightSegments)}}var ww=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Mw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Aw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ew=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Pw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lw="vec3 transformed = vec3( position );",Cw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rw=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Fw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Dw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gw=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Hw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Vw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ww=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,jw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qw=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Zw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$w=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,oM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,aM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lM=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,cM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,uM=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,fM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,dM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,mM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,gM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,_M=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,MM=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,TM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,EM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,RM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,FM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,IM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,DM=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,UM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,kM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,GM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,WM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,KM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JM=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,$M=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,cT=`#ifdef USE_TRANSMISSION
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
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uT=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,fT=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,hT=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,dT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,pT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,mT=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,gT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xT=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bT=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,ST=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,MT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ET=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LT=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,DT=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,zT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,BT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,kT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,HT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,WT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,YT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,qT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:ww,alphamap_pars_fragment:Mw,alphatest_fragment:Tw,alphatest_pars_fragment:Aw,aomap_fragment:Ew,aomap_pars_fragment:Pw,begin_vertex:Lw,beginnormal_vertex:Cw,bsdfs:Rw,bumpmap_pars_fragment:Fw,clipping_planes_fragment:Iw,clipping_planes_pars_fragment:Dw,clipping_planes_pars_vertex:Nw,clipping_planes_vertex:Ow,color_fragment:zw,color_pars_fragment:Bw,color_pars_vertex:Uw,color_vertex:kw,common:Gw,cube_uv_reflection_fragment:Hw,defaultnormal_vertex:Vw,displacementmap_pars_vertex:Ww,displacementmap_vertex:Xw,emissivemap_fragment:jw,emissivemap_pars_fragment:Yw,encodings_fragment:qw,encodings_pars_fragment:Qw,envmap_fragment:Zw,envmap_common_pars_fragment:Kw,envmap_pars_fragment:Jw,envmap_pars_vertex:$w,envmap_physical_pars_fragment:uM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:rM,gradientmap_pars_fragment:sM,lightmap_fragment:oM,lightmap_pars_fragment:aM,lights_lambert_vertex:lM,lights_pars_begin:cM,lights_toon_fragment:fM,lights_toon_pars_fragment:hM,lights_phong_fragment:dM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:vM,lights_fragment_maps:xM,lights_fragment_end:yM,logdepthbuf_fragment:_M,logdepthbuf_pars_fragment:bM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:wM,map_fragment:MM,map_pars_fragment:TM,map_particle_fragment:AM,map_particle_pars_fragment:EM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:LM,morphnormal_vertex:CM,morphtarget_pars_vertex:RM,morphtarget_vertex:FM,normal_fragment_begin:IM,normal_fragment_maps:DM,normal_pars_fragment:NM,normal_pars_vertex:OM,normal_vertex:zM,normalmap_pars_fragment:BM,clearcoat_normal_fragment_begin:UM,clearcoat_normal_fragment_maps:kM,clearcoat_pars_fragment:GM,output_fragment:HM,packing:VM,premultiplied_alpha_fragment:WM,project_vertex:XM,dithering_fragment:jM,dithering_pars_fragment:YM,roughnessmap_fragment:qM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:KM,shadowmap_vertex:JM,shadowmask_pars_fragment:$M,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:rT,specularmap_pars_fragment:sT,tonemapping_fragment:oT,tonemapping_pars_fragment:aT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:fT,uv_vertex:hT,uv2_pars_fragment:dT,uv2_pars_vertex:pT,uv2_vertex:mT,worldpos_vertex:gT,background_vert:vT,background_frag:xT,cube_vert:yT,cube_frag:_T,depth_vert:bT,depth_frag:ST,distanceRGBA_vert:wT,distanceRGBA_frag:MT,equirect_vert:TT,equirect_frag:AT,linedashed_vert:ET,linedashed_frag:PT,meshbasic_vert:LT,meshbasic_frag:CT,meshlambert_vert:RT,meshlambert_frag:FT,meshmatcap_vert:IT,meshmatcap_frag:DT,meshnormal_vert:NT,meshnormal_frag:OT,meshphong_vert:zT,meshphong_frag:BT,meshphysical_vert:UT,meshphysical_frag:kT,meshtoon_vert:GT,meshtoon_frag:HT,points_vert:VT,points_frag:WT,shadow_vert:XT,shadow_frag:jT,sprite_vert:YT,sprite_frag:qT},Me={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xt},uv2Transform:{value:new Xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}}},ln={basic:{uniforms:t0([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:t0([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.fog,Me.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:t0([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:t0([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:t0([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:t0([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:t0([Me.points,Me.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:t0([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:t0([Me.common,Me.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:t0([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:t0([Me.sprite,Me.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:t0([Me.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:t0([Me.common,Me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:t0([Me.lights,Me.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ln.physical={uniforms:t0([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ne(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function QT(i,e,t,n,r){const s=new Se(0);let o=0,a,l,c=null,u=0,f=null;function h(g,v){let x=!1,p=v.isScene===!0?v.background:null;p&&p.isTexture&&(p=e.get(p));const m=i.xr,y=m.getSession&&m.getSession();y&&y.environmentBlendMode==="additive"&&(p=null),p===null?d(s,o):p&&p.isColor&&(d(p,1),x=!0),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),p&&(p.isCubeTexture||p.mapping===h1)?(l===void 0&&(l=new Ot(new Ur(1,1,1),new ft({name:"BackgroundCubeMaterial",uniforms:$s(ln.cube.uniforms),vertexShader:ln.cube.vertexShader,fragmentShader:ln.cube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(_,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||u!==p.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,c=p,u=p.version,f=i.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new Ot(new sl(2,2),new ft({name:"BackgroundMaterial",uniforms:$s(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Ks,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||u!==p.version||f!==i.toneMapping)&&(a.material.needsUpdate=!0,c=p,u=p.version,f=i.toneMapping),g.unshift(a,a.geometry,a.material,0,0,null))}function d(g,v){t.buffers.color.setClear(g.r,g.g,g.b,v,r)}return{getClearColor:function(){return s},setClearColor:function(g,v=1){s.set(g),o=v,d(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,d(s,o)},render:h}}function ZT(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=v(null);let c=l;function u(A,R,O,z,U){let j=!1;if(o){const ie=g(z,O,R);c!==ie&&(c=ie,h(c.object)),j=x(z,U),j&&p(z,U)}else{const ie=R.wireframe===!0;(c.geometry!==z.id||c.program!==O.id||c.wireframe!==ie)&&(c.geometry=z.id,c.program=O.id,c.wireframe=ie,j=!0)}A.isInstancedMesh===!0&&(j=!0),U!==null&&t.update(U,34963),j&&(S(A,R,O,z),U!==null&&i.bindBuffer(34963,t.get(U).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function h(A){return n.isWebGL2?i.bindVertexArray(A):s.bindVertexArrayOES(A)}function d(A){return n.isWebGL2?i.deleteVertexArray(A):s.deleteVertexArrayOES(A)}function g(A,R,O){const z=O.wireframe===!0;let U=a[A.id];U===void 0&&(U={},a[A.id]=U);let j=U[R.id];j===void 0&&(j={},U[R.id]=j);let ie=j[z];return ie===void 0&&(ie=v(f()),j[z]=ie),ie}function v(A){const R=[],O=[],z=[];for(let U=0;U<r;U++)R[U]=0,O[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:z,object:A,attributes:{},index:null}}function x(A,R){const O=c.attributes,z=A.attributes;let U=0;for(const j in z){const ie=O[j],ue=z[j];if(ie===void 0||ie.attribute!==ue||ie.data!==ue.data)return!0;U++}return c.attributesNum!==U||c.index!==R}function p(A,R){const O={},z=A.attributes;let U=0;for(const j in z){const ie=z[j],ue={};ue.attribute=ie,ie.data&&(ue.data=ie.data),O[j]=ue,U++}c.attributes=O,c.attributesNum=U,c.index=R}function m(){const A=c.newAttributes;for(let R=0,O=A.length;R<O;R++)A[R]=0}function y(A){_(A,0)}function _(A,R){const O=c.newAttributes,z=c.enabledAttributes,U=c.attributeDivisors;O[A]=1,z[A]===0&&(i.enableVertexAttribArray(A),z[A]=1),U[A]!==R&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](A,R),U[A]=R)}function b(){const A=c.newAttributes,R=c.enabledAttributes;for(let O=0,z=R.length;O<z;O++)R[O]!==A[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function w(A,R,O,z,U,j){n.isWebGL2===!0&&(O===5124||O===5125)?i.vertexAttribIPointer(A,R,O,U,j):i.vertexAttribPointer(A,R,O,z,U,j)}function S(A,R,O,z){if(n.isWebGL2===!1&&(A.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const U=z.attributes,j=O.getAttributes(),ie=R.defaultAttributeValues;for(const ue in j){const oe=j[ue];if(oe.location>=0){let xe=U[ue];if(xe===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(xe=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(xe=A.instanceColor)),xe!==void 0){const $=xe.normalized,re=xe.itemSize,H=t.get(xe);if(H===void 0)continue;const X=H.buffer,J=H.type,ae=H.bytesPerElement;if(xe.isInterleavedBufferAttribute){const de=xe.data,ve=de.stride,be=xe.offset;if(de&&de.isInstancedInterleavedBuffer){for(let Z=0;Z<oe.locationSize;Z++)_(oe.location+Z,de.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Z=0;Z<oe.locationSize;Z++)y(oe.location+Z);i.bindBuffer(34962,X);for(let Z=0;Z<oe.locationSize;Z++)w(oe.location+Z,re/oe.locationSize,J,$,ve*ae,(be+re/oe.locationSize*Z)*ae)}else{if(xe.isInstancedBufferAttribute){for(let de=0;de<oe.locationSize;de++)_(oe.location+de,xe.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let de=0;de<oe.locationSize;de++)y(oe.location+de);i.bindBuffer(34962,X);for(let de=0;de<oe.locationSize;de++)w(oe.location+de,re/oe.locationSize,J,$,re*ae,re/oe.locationSize*de*ae)}}else if(ie!==void 0){const $=ie[ue];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(oe.location,$);break;case 3:i.vertexAttrib3fv(oe.location,$);break;case 4:i.vertexAttrib4fv(oe.location,$);break;default:i.vertexAttrib1fv(oe.location,$)}}}}b()}function M(){T();for(const A in a){const R=a[A];for(const O in R){const z=R[O];for(const U in z)d(z[U].object),delete z[U];delete R[O]}delete a[A]}}function P(A){if(a[A.id]===void 0)return;const R=a[A.id];for(const O in R){const z=R[O];for(const U in z)d(z[U].object),delete z[U];delete R[O]}delete a[A.id]}function F(A){for(const R in a){const O=a[R];if(O[A.id]===void 0)continue;const z=O[A.id];for(const U in z)d(z[U].object),delete z[U];delete O[A.id]}}function T(){D(),c!==l&&(c=l,h(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:T,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:P,releaseStatesOfProgram:F,initAttributes:m,enableAttribute:y,disableUnusedAttributes:b}}function KT(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=i,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function JT(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),v=i.getParameter(34921),x=i.getParameter(36347),p=i.getParameter(36348),m=i.getParameter(36349),y=h>0,_=o||e.has("OES_texture_float"),b=y&&_,w=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:y,floatFragmentTextures:_,floatVertexTextures:b,maxSamples:w}}function $T(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Tn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const g=f.length!==0||h||n!==0||r;return r=h,t=u(f,d,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,h,d){const g=f.clippingPlanes,v=f.clipIntersection,x=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!x)s?u(null):c();else{const m=s?0:n,y=m*4;let _=p.clippingState||null;l.value=_,_=u(g,h,y,d);for(let b=0;b!==y;++b)_[b]=t[b];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const v=f!==null?f.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const p=d+v*4,m=h.matrixWorldInverse;a.getNormalMatrix(m),(x===null||x.length<p)&&(x=new Float32Array(p));for(let y=0,_=d;y!==v;++y,_+=4)o.copy(f[y]).applyMatrix4(m,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function eA(i){let e=new WeakMap;function t(o,a){return a===Dc?o.mapping=mo:a===Tf&&(o.mapping=rl),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Dc||a===Tf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=i.getRenderTarget(),u=new W9(l.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),i.setRenderTarget(c),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class $i extends V9{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}$i.prototype.isOrthographicCamera=!0;class v1 extends ft{constructor(e){super(e),this.type="RawShaderMaterial"}}v1.prototype.isRawShaderMaterial=!0;const ks=4,Bi=8,wn=Math.pow(2,Bi),X8=[.125,.215,.35,.446,.526,.582],j8=Bi-ks+1+X8.length,ds=20,Yi={[l0]:0,[_0]:1,[k9]:2,[I8]:3,[D8]:4,[N8]:5,[U9]:6},wu=new $i,{_lodPlanes:Wo,_sizeLods:Fd,_sigmas:Ul}=iA(),Id=new Se;let Mu=null;const br=(1+Math.sqrt(5))/2,ps=1/br,Dd=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,br,ps),new I(0,br,-ps),new I(ps,0,br),new I(-ps,0,br),new I(br,ps,0),new I(-br,ps,0)];class tA{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=rA(ds),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Mu=this._renderer.getRenderTarget();const s=this._allocateTargets();return this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=zd(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Od(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Wo.length;e++)Wo[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Mu),e.scissorTest=!1,kl(e,0,0,e.width,e.height)}_fromTexture(e){Mu=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:nt,minFilter:nt,generateMipmaps:!1,type:ji,format:$b,encoding:nA(e)?e.encoding:k9,depthBuffer:!1},n=Nd(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Nd(t),n}_compileMaterial(e){const t=new Ot(Wo[0],e);this._renderer.compile(t,wu)}_sceneToCubeUV(e,t,n,r){const a=new $t(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.outputEncoding,d=u.toneMapping;u.getClearColor(Id),u.toneMapping=Nr,u.outputEncoding=l0,u.autoClear=!1;const g=new Z0({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),v=new Ot(new Ur,g);let x=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,x=!0):(g.color.copy(Id),x=!0);for(let m=0;m<6;m++){const y=m%3;y==0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y==1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m])),kl(r,y*wn,m>2?wn:0,wn,wn),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.outputEncoding=h,u.autoClear=f,e.background=p}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===lt&&t.type===ji&&t.encoding===_0?e.value=Yi[l0]:e.value=Yi[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===mo||e.mapping===rl;r?this._cubemapShader==null&&(this._cubemapShader=zd()):this._equirectShader==null&&(this._equirectShader=Od());const s=r?this._cubemapShader:this._equirectShader,o=new Ot(Wo[0],s),a=s.uniforms;a.envMap.value=e,r||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),this._setEncoding(a.outputEncoding,t.texture),kl(t,0,0,3*wn,2*wn),n.setRenderTarget(t),n.render(o,wu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<j8;r++){const s=Math.sqrt(Ul[r]*Ul[r]-Ul[r-1]*Ul[r-1]),o=Dd[(r-1)%Dd.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ot(Wo[r],c),h=c.uniforms,d=Fd[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ds-1),v=s/g,x=isFinite(s)?1+Math.floor(u*v):ds;x>ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ds}`);const p=[];let m=0;for(let w=0;w<ds;++w){const S=w/v,M=Math.exp(-S*S/2);p.push(M),w==0?m+=M:w<x&&(m+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/m;h.envMap.value=e.texture,h.samples.value=x,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a),h.dTheta.value=g,h.mipInt.value=Bi-n,this._setEncoding(h.inputEncoding,e.texture),this._setEncoding(h.outputEncoding,e.texture);const y=Fd[r],_=3*Math.max(0,wn-2*y),b=(r===0?0:2*wn)+2*y*(r>Bi-ks?r-Bi+ks:0);kl(t,_,b,3*y,2*y),l.setRenderTarget(t),l.render(f,wu)}}function nA(i){return i===void 0||i.type!==ji?!1:i.encoding===l0||i.encoding===_0||i.encoding===U9}function iA(){const i=[],e=[],t=[];let n=Bi;for(let r=0;r<j8;r++){const s=Math.pow(2,n);e.push(s);let o=1/s;r>Bi-ks?o=X8[r-Bi+ks-1]:r==0&&(o=0),t.push(o);const a=1/(s-1),l=-a/2,c=1+a/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=2,v=1,x=new Float32Array(d*h*f),p=new Float32Array(g*h*f),m=new Float32Array(v*h*f);for(let _=0;_<f;_++){const b=_%3*2/3-1,w=_>2?0:-1,S=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];x.set(S,d*h*_),p.set(u,g*h*_);const M=[_,_,_,_,_,_];m.set(M,v*h*_)}const y=new Re;y.setAttribute("position",new Tt(x,d)),y.setAttribute("uv",new Tt(p,g)),y.setAttribute("faceIndex",new Tt(m,v)),i.push(y),n>ks&&n--}return{_lodPlanes:i,_sizeLods:e,_sigmas:t}}function Nd(i){const e=new Dt(3*wn,3*wn,i);return e.texture.mapping=h1,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function kl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function rA(i){const e=new Float32Array(i),t=new I(0,1,0);return new v1({name:"SphericalGaussianBlur",defines:{n:i},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Yi[l0]},outputEncoding:{value:Yi[l0]}},vertexShader:X9(),fragmentShader:`

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

			${j9()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function Od(){const i=new ne(1,1);return new v1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:i},inputEncoding:{value:Yi[l0]},outputEncoding:{value:Yi[l0]}},vertexShader:X9(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${j9()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function zd(){return new v1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Yi[l0]},outputEncoding:{value:Yi[l0]}},vertexShader:X9(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${j9()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:Kt,depthTest:!1,depthWrite:!1})}function X9(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function j9(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function sA(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===Dc||l===Tf,u=l===mo||l===rl;if(c||u){if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){const h=i.getRenderTarget();t===null&&(t=new tA(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),i.setRenderTarget(h),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function oA(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function aA(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const v=d[g];for(let x=0,p=v.length;x<p;x++)e.update(v[x],34962)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let v=0;if(d!==null){const m=d.array;v=d.version;for(let y=0,_=m.length;y<_;y+=3){const b=m[y+0],w=m[y+1],S=m[y+2];h.push(b,w,w,S,S,b)}}else{const m=g.array;v=g.version;for(let y=0,_=m.length/3-1;y<_;y+=3){const b=y+0,w=y+1,S=y+2;h.push(b,w,w,S,S,b)}}const x=new(U8(h)>65535?V8:H9)(h,1);x.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,x)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function lA(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){i.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let v,x;if(r)v=i,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](s,d,a,h*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function cA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}class Y9 extends vt{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=nt,this.minFilter=nt,this.wrapR=gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Y9.prototype.isDataTexture2DArray=!0;function uA(i,e){return i[0]-e[0]}function fA(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Bd(i,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),i.divideScalar(t)}function hA(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new I,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let v=s.get(u);if(v===void 0||v.count!==g){v!==void 0&&v.texture.dispose();const m=u.morphAttributes.normal!==void 0,y=u.morphAttributes.position,_=u.morphAttributes.normal||[],b=u.attributes.position.count,w=m===!0?2:1;let S=b*w,M=1;S>e.maxTextureSize&&(M=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*M*4*g),F=new Y9(P,S,M,g);F.format=lt,F.type=X0;const T=w*4;for(let D=0;D<g;D++){const A=y[D],R=_[D],O=S*M*4*D;for(let z=0;z<A.count;z++){o.fromBufferAttribute(A,z),A.normalized===!0&&Bd(o,A);const U=z*T;P[O+U+0]=o.x,P[O+U+1]=o.y,P[O+U+2]=o.z,P[O+U+3]=0,m===!0&&(o.fromBufferAttribute(R,z),R.normalized===!0&&Bd(o,R),P[O+U+4]=o.x,P[O+U+5]=o.y,P[O+U+6]=o.z,P[O+U+7]=0)}}v={count:g,texture:F,size:new ne(S,M)},s.set(u,v)}let x=0;for(let m=0;m<d.length;m++)x+=d[m];const p=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const g=d===void 0?0:d.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let _=0;_<g;_++)v[_]=[_,0];n[u.id]=v}for(let _=0;_<g;_++){const b=v[_];b[0]=_,b[1]=d[_]}v.sort(fA);for(let _=0;_<8;_++)_<g&&v[_][1]?(a[_][0]=v[_][0],a[_][1]=v[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(uA);const x=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let _=0;_<8;_++){const b=a[_],w=b[0],S=b[1];w!==Number.MAX_SAFE_INTEGER&&S?(x&&u.getAttribute("morphTarget"+_)!==x[w]&&u.setAttribute("morphTarget"+_,x[w]),p&&u.getAttribute("morphNormal"+_)!==p[w]&&u.setAttribute("morphNormal"+_,p[w]),r[_]=S,m+=S):(x&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),p&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const y=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function dA(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Y8 extends vt{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=nt,this.minFilter=nt,this.wrapR=gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Y8.prototype.isDataTexture3D=!0;const q8=new vt,pA=new Y9,mA=new Y8,Q8=new m1,Ud=[],kd=[],Gd=new Float32Array(16),Hd=new Float32Array(9),Vd=new Float32Array(4);function vo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ud[r];if(s===void 0&&(s=new Float32Array(r),Ud[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function d0(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function c0(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Z8(i,e){let t=kd[e];t===void 0&&(t=new Int32Array(e),kd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(d0(t,e))return;i.uniform2fv(this.addr,e),c0(t,e)}}function xA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(d0(t,e))return;i.uniform3fv(this.addr,e),c0(t,e)}}function yA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(d0(t,e))return;i.uniform4fv(this.addr,e),c0(t,e)}}function _A(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(d0(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),c0(t,e)}else{if(d0(t,n))return;Vd.set(n),i.uniformMatrix2fv(this.addr,!1,Vd),c0(t,n)}}function bA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(d0(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),c0(t,e)}else{if(d0(t,n))return;Hd.set(n),i.uniformMatrix3fv(this.addr,!1,Hd),c0(t,n)}}function SA(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(d0(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),c0(t,e)}else{if(d0(t,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),c0(t,n)}}function wA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function MA(i,e){const t=this.cache;d0(t,e)||(i.uniform2iv(this.addr,e),c0(t,e))}function TA(i,e){const t=this.cache;d0(t,e)||(i.uniform3iv(this.addr,e),c0(t,e))}function AA(i,e){const t=this.cache;d0(t,e)||(i.uniform4iv(this.addr,e),c0(t,e))}function EA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function PA(i,e){const t=this.cache;d0(t,e)||(i.uniform2uiv(this.addr,e),c0(t,e))}function LA(i,e){const t=this.cache;d0(t,e)||(i.uniform3uiv(this.addr,e),c0(t,e))}function CA(i,e){const t=this.cache;d0(t,e)||(i.uniform4uiv(this.addr,e),c0(t,e))}function RA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTexture2D(e||q8,r)}function FA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||mA,r)}function IA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.safeSetTextureCube(e||Q8,r)}function DA(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||pA,r)}function NA(i){switch(i){case 5126:return gA;case 35664:return vA;case 35665:return xA;case 35666:return yA;case 35674:return _A;case 35675:return bA;case 35676:return SA;case 5124:case 35670:return wA;case 35667:case 35671:return MA;case 35668:case 35672:return TA;case 35669:case 35673:return AA;case 5125:return EA;case 36294:return PA;case 36295:return LA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return DA}}function OA(i,e){i.uniform1fv(this.addr,e)}function zA(i,e){const t=vo(e,this.size,2);i.uniform2fv(this.addr,t)}function BA(i,e){const t=vo(e,this.size,3);i.uniform3fv(this.addr,t)}function UA(i,e){const t=vo(e,this.size,4);i.uniform4fv(this.addr,t)}function kA(i,e){const t=vo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function GA(i,e){const t=vo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function HA(i,e){const t=vo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function VA(i,e){i.uniform1iv(this.addr,e)}function WA(i,e){i.uniform2iv(this.addr,e)}function XA(i,e){i.uniform3iv(this.addr,e)}function jA(i,e){i.uniform4iv(this.addr,e)}function YA(i,e){i.uniform1uiv(this.addr,e)}function qA(i,e){i.uniform2uiv(this.addr,e)}function QA(i,e){i.uniform3uiv(this.addr,e)}function ZA(i,e){i.uniform4uiv(this.addr,e)}function KA(i,e,t){const n=e.length,r=Z8(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTexture2D(e[s]||q8,r[s])}function JA(i,e,t){const n=e.length,r=Z8(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.safeSetTextureCube(e[s]||Q8,r[s])}function $A(i){switch(i){case 5126:return OA;case 35664:return zA;case 35665:return BA;case 35666:return UA;case 35674:return kA;case 35675:return GA;case 35676:return HA;case 5124:case 35670:return VA;case 35667:case 35671:return WA;case 35668:case 35672:return XA;case 35669:case 35673:return jA;case 5125:return YA;case 36294:return qA;case 36295:return QA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35680:case 36300:case 36308:case 36293:return JA}}function eE(i,e,t){this.id=i,this.addr=t,this.cache=[],this.setValue=NA(e.type)}function K8(i,e,t){this.id=i,this.addr=t,this.cache=[],this.size=e.size,this.setValue=$A(e.type)}K8.prototype.updateCache=function(i){const e=this.cache;i instanceof Float32Array&&e.length!==i.length&&(this.cache=new Float32Array(i.length)),c0(e,i)};function J8(i){this.id=i,this.seq=[],this.map={}}J8.prototype.setValue=function(i,e,t){const n=this.seq;for(let r=0,s=n.length;r!==s;++r){const o=n[r];o.setValue(i,e[o.id],t)}};const Tu=/(\w+)(\])?(\[|\.)?/g;function Wd(i,e){i.seq.push(e),i.map[e.id]=e}function tE(i,e,t){const n=i.name,r=n.length;for(Tu.lastIndex=0;;){const s=Tu.exec(n),o=Tu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wd(t,c===void 0?new eE(a,i,e):new K8(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new J8(a),Wd(t,f)),t=f}}}function Ui(i,e){this.seq=[],this.map={};const t=i.getProgramParameter(e,35718);for(let n=0;n<t;++n){const r=i.getActiveUniform(e,n),s=i.getUniformLocation(e,r.name);tE(r,s,this)}}Ui.prototype.setValue=function(i,e,t,n){const r=this.map[e];r!==void 0&&r.setValue(i,t,n)};Ui.prototype.setOptional=function(i,e,t){const n=e[t];n!==void 0&&this.setValue(i,t,n)};Ui.upload=function(i,e,t,n){for(let r=0,s=e.length;r!==s;++r){const o=e[r],a=t[o.id];a.needsUpdate!==!1&&o.setValue(i,a.value,n)}};Ui.seqWithValue=function(i,e){const t=[];for(let n=0,r=i.length;n!==r;++n){const s=i[n];s.id in e&&t.push(s)}return t};function Xd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let nE=0;function iE(i){const e=i.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function $8(i){switch(i){case l0:return["Linear","( value )"];case _0:return["sRGB","( value )"];case k9:return["RGBE","( value )"];case I8:return["RGBM","( value, 7.0 )"];case D8:return["RGBM","( value, 16.0 )"];case N8:return["RGBD","( value, 256.0 )"];case U9:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case GS:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function jd(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();return n&&r===""?"":t.toUpperCase()+`

`+r+`

`+iE(i.getShaderSource(e))}function xr(i,e){const t=$8(e);return"vec4 "+i+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function rE(i,e){const t=$8(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sE(i,e){let t;switch(e){case Ub:t="Linear";break;case kb:t="Reinhard";break;case Gb:t="OptimizedCineon";break;case Hb:t="ACESFilmic";break;case Vb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oE(i){return[i.extensionDerivatives||i.envMapCubeUV||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oa).join(`
`)}function aE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lE(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function oa(i){return i!==""}function Yd(i,e){return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(i){return i.replace(cE,uE)}function uE(i,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Lf(t)}const fE=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,hE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(i){return i.replace(hE,ep).replace(fE,dE)}function dE(i,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ep(i,e,t,n)}function ep(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===w8?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bb?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function mE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mo:case rl:e="ENVMAP_TYPE_CUBE";break;case h1:case z9:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rl:case z9:e="ENVMAP_MODE_REFRACTION";break}return e}function vE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case f1:e="ENVMAP_BLENDING_MULTIPLY";break;case zb:e="ENVMAP_BLENDING_MIX";break;case Bb:e="ENVMAP_BLENDING_ADD";break}return e}function xE(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pE(t),c=mE(t),u=gE(t),f=vE(t),h=i.gammaFactor>0?i.gammaFactor:1,d=t.isWebGL2?"":oE(t),g=aE(s),v=r.createProgram();let x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[g].filter(oa).join(`
`),x.length>0&&(x+=`
`),p=[d,g].filter(oa).join(`
`),p.length>0&&(p+=`
`)):(x=[Zd(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),p=[d,Zd(t),"#define SHADER_NAME "+t.shaderName,g,"#define GAMMA_FACTOR "+h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?Fe.tonemapping_pars_fragment:"",t.toneMapping!==Nr?sE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Pn?"#define OPAQUE":"",Fe.encodings_pars_fragment,t.map?xr("mapTexelToLinear",t.mapEncoding):"",t.matcap?xr("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?xr("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?xr("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?xr("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?xr("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?xr("lightMapTexelToLinear",t.lightMapEncoding):"",rE("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oa).join(`
`)),o=Lf(o),o=Yd(o,t),o=qd(o,t),a=Lf(a),a=Yd(a,t),a=qd(a,t),o=Qd(o),a=Qd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===yd?"":"out highp vec4 pc_fragColor;",t.glslVersion===yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=m+x+o,_=m+p+a,b=Xd(r,35633,y),w=Xd(r,35632,_);if(r.attachShader(v,b),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),i.debug.checkShaderErrors){const P=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(b).trim(),T=r.getShaderInfoLog(w).trim();let D=!0,A=!0;if(r.getProgramParameter(v,35714)===!1){D=!1;const R=jd(r,b,"vertex"),O=jd(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,35715)+`

Program Info Log: `+P+`
`+R+`
`+O)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(F===""||T==="")&&(A=!1);A&&(this.diagnostics={runnable:D,programLog:P,vertexShader:{log:F,prefix:x},fragmentShader:{log:T,prefix:p}})}r.deleteShader(b),r.deleteShader(w);let S;this.getUniforms=function(){return S===void 0&&(S=new Ui(r,v)),S};let M;return this.getAttributes=function(){return M===void 0&&(M=lE(r,v)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=nE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=w,this}function yE(i,e,t,n,r,s,o){const a=[],l=r.isWebGL2,c=r.logarithmicDepthBuffer,u=r.floatVertexTextures,f=r.maxVertexUniforms,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function x(S){const P=S.skeleton.bones;if(u)return 1024;{const T=Math.floor((f-20)/4),D=Math.min(T,P.length);return D<P.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+P.length+" bones. This GPU supports "+D+"."),0):D}}function p(S){let M;return S&&S.isTexture?M=S.encoding:S&&S.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),M=S.texture.encoding):M=l0,l&&S&&S.isTexture&&S.format===lt&&S.type===ji&&S.encoding===_0&&(M=l0),M}function m(S,M,P,F,T){const D=F.fog,A=S.isMeshStandardMaterial?F.environment:null,R=(S.isMeshStandardMaterial?t:e).get(S.envMap||A),O=g[S.type],z=T.isSkinnedMesh?x(T):0;S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let U,j;if(O){const $=ln[O];U=$.vertexShader,j=$.fragmentShader}else U=S.vertexShader,j=S.fragmentShader;const ie=i.getRenderTarget(),ue=S.alphaTest>0,oe=S.clearcoat>0;return{isWebGL2:l,shaderID:O,shaderName:S.type,vertexShader:U,fragmentShader:j,defines:S.defines,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:T.isInstancedMesh===!0,instancingColor:T.isInstancedMesh===!0&&T.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ie!==null?p(ie.texture):i.outputEncoding,map:!!S.map,mapEncoding:p(S.map),matcap:!!S.matcap,matcapEncoding:p(S.matcap),envMap:!!R,envMapMode:R&&R.mapping,envMapEncoding:p(R),envMapCubeUV:!!R&&(R.mapping===h1||R.mapping===z9),lightMap:!!S.lightMap,lightMapEncoding:p(S.lightMap),aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,emissiveMapEncoding:p(S.emissiveMap),bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===VS,tangentSpaceNormalMap:S.normalMapType===Vr,clearcoat:oe,clearcoatMap:oe&&!!S.clearcoatMap,clearcoatRoughnessMap:oe&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:oe&&!!S.clearcoatNormalMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,specularColorMapEncoding:p(S.specularColorMap),alphaMap:!!S.alphaMap,alphaTest:ue,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenColorMapEncoding:p(S.sheenColorMap),sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!T.geometry&&!!T.geometry.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!T.geometry&&!!T.geometry.attributes.color&&T.geometry.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!D,useFog:S.fog,fogExp2:D&&D.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:c,skinning:T.isSkinnedMesh===!0&&z>0,maxBones:z,useVertexTexture:u,morphTargets:!!T.geometry&&!!T.geometry.morphAttributes.position,morphNormals:!!T.geometry&&!!T.geometry.morphAttributes.normal,morphTargetsCount:!!T.geometry&&!!T.geometry.morphAttributes.position?T.geometry.morphAttributes.position.length:0,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:S.format,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:S.toneMapped?i.toneMapping:Nr,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xi,flipSided:S.side===Rt,depthPacking:S.depthPacking!==void 0?S.depthPacking:!1,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function y(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(_d(S.fragmentShader)),M.push(_d(S.vertexShader))),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);if(S.isRawShaderMaterial===!1){for(let P=0;P<v.length;P++)M.push(S[v[P]]);M.push(i.outputEncoding),M.push(i.gammaFactor)}return M.push(S.customProgramCacheKey),M.join()}function _(S){const M=g[S.type];let P;if(M){const F=ln[M];P=s0.clone(F.uniforms)}else P=S.uniforms;return P}function b(S,M){let P;for(let F=0,T=a.length;F<T;F++){const D=a[F];if(D.cacheKey===M){P=D,++P.usedTimes;break}}return P===void 0&&(P=new xE(i,M,S,s),a.push(P)),P}function w(S){if(--S.usedTimes===0){const M=a.indexOf(S);a[M]=a[a.length-1],a.pop(),S.destroy()}}return{getParameters:m,getProgramCacheKey:y,getUniforms:_,acquireProgram:b,releaseProgram:w,programs:a}}function _E(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function bE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.program!==e.program?i.program.id-e.program.id:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jd(i){const e=[];let t=0;const n=[],r=[],s=[],o={id:-1};function a(){t=0,n.length=0,r.length=0,s.length=0}function l(d,g,v,x,p,m){let y=e[t];const _=i.get(v);return y===void 0?(y={id:d.id,object:d,geometry:g,material:v,program:_.program||o,groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},e[t]=y):(y.id=d.id,y.object=d,y.geometry=g,y.material=v,y.program=_.program||o,y.groupOrder=x,y.renderOrder=d.renderOrder,y.z=p,y.group=m),t++,y}function c(d,g,v,x,p,m){const y=l(d,g,v,x,p,m);v.transmission>0?r.push(y):v.transparent===!0?s.push(y):n.push(y)}function u(d,g,v,x,p,m){const y=l(d,g,v,x,p,m);v.transmission>0?r.unshift(y):v.transparent===!0?s.unshift(y):n.unshift(y)}function f(d,g){n.length>1&&n.sort(d||bE),r.length>1&&r.sort(g||Kd),s.length>1&&s.sort(g||Kd)}function h(){for(let d=t,g=e.length;d<g;d++){const v=e[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:n,transmissive:r,transparent:s,init:a,push:c,unshift:u,finish:h,sort:f}}function SE(i){let e=new WeakMap;function t(r,s){let o;return e.has(r)===!1?(o=new Jd(i),e.set(r,[o])):s>=e.get(r).length?(o=new Jd(i),e.get(r).push(o)):o=e.get(r)[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function wE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Se};break;case"SpotLight":t={position:new I,direction:new I,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function ME(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let TE=0;function AE(i,e){return(e.castShadow?1:0)-(i.castShadow?1:0)}function EE(i,e){const t=new wE,n=ME(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new we,a=new we;function l(u,f){let h=0,d=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let v=0,x=0,p=0,m=0,y=0,_=0,b=0,w=0;u.sort(AE);const S=f!==!0?Math.PI:1;for(let P=0,F=u.length;P<F;P++){const T=u[P],D=T.color,A=T.intensity,R=T.distance,O=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=D.r*A*S,d+=D.g*A*S,g+=D.b*A*S;else if(T.isLightProbe)for(let z=0;z<9;z++)r.probe[z].addScaledVector(T.sh.coefficients[z],A);else if(T.isDirectionalLight){const z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity*S),T.castShadow){const U=T.shadow,j=n.get(T);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,r.directionalShadow[v]=j,r.directionalShadowMap[v]=O,r.directionalShadowMatrix[v]=T.shadow.matrix,_++}r.directional[v]=z,v++}else if(T.isSpotLight){const z=t.get(T);if(z.position.setFromMatrixPosition(T.matrixWorld),z.color.copy(D).multiplyScalar(A*S),z.distance=R,z.coneCos=Math.cos(T.angle),z.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),z.decay=T.decay,T.castShadow){const U=T.shadow,j=n.get(T);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,r.spotShadow[p]=j,r.spotShadowMap[p]=O,r.spotShadowMatrix[p]=T.shadow.matrix,w++}r.spot[p]=z,p++}else if(T.isRectAreaLight){const z=t.get(T);z.color.copy(D).multiplyScalar(A),z.halfWidth.set(T.width*.5,0,0),z.halfHeight.set(0,T.height*.5,0),r.rectArea[m]=z,m++}else if(T.isPointLight){const z=t.get(T);if(z.color.copy(T.color).multiplyScalar(T.intensity*S),z.distance=T.distance,z.decay=T.decay,T.castShadow){const U=T.shadow,j=n.get(T);j.shadowBias=U.bias,j.shadowNormalBias=U.normalBias,j.shadowRadius=U.radius,j.shadowMapSize=U.mapSize,j.shadowCameraNear=U.camera.near,j.shadowCameraFar=U.camera.far,r.pointShadow[x]=j,r.pointShadowMap[x]=O,r.pointShadowMatrix[x]=T.shadow.matrix,b++}r.point[x]=z,x++}else if(T.isHemisphereLight){const z=t.get(T);z.skyColor.copy(T.color).multiplyScalar(A*S),z.groundColor.copy(T.groundColor).multiplyScalar(A*S),r.hemi[y]=z,y++}}m>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==v||M.pointLength!==x||M.spotLength!==p||M.rectAreaLength!==m||M.hemiLength!==y||M.numDirectionalShadows!==_||M.numPointShadows!==b||M.numSpotShadows!==w)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=m,r.point.length=x,r.hemi.length=y,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=b,r.spotShadowMatrix.length=w,M.directionalLength=v,M.pointLength=x,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=y,M.numDirectionalShadows=_,M.numPointShadows=b,M.numSpotShadows=w,r.version=TE++)}function c(u,f){let h=0,d=0,g=0,v=0,x=0;const p=f.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){const _=u[m];if(_.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(_.isSpotLight){const b=r.spot[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(_.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(_.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const b=r.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const b=r.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),b.direction.normalize(),x++}}}return{setup:l,setupView:c,state:r}}function $d(i,e){const t=new EE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function PE(i,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new $d(i,e),t.set(s,[a])):o>=t.get(s).length?(a=new $d(i,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:n,dispose:r}}class q9 extends zt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}q9.prototype.isMeshDepthMaterial=!0;class tp extends zt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}tp.prototype.isMeshDistanceMaterial=!0;const LE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`)a=0,l-=s;else{const f=iL(u,r,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function iL(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new QP;let a,l,c,u,f,h,d,g;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let x=0,p=v.length;x<p;)switch(v[x++]){case"m":a=v[x++]*e+t,l=v[x++]*e+n,o.moveTo(a,l);break;case"l":a=v[x++]*e+t,l=v[x++]*e+n,o.lineTo(a,l);break;case"q":c=v[x++]*e+t,u=v[x++]*e+n,f=v[x++]*e+t,h=v[x++]*e+n,o.quadraticCurveTo(f,h,c,u);break;case"b":c=v[x++]*e+t,u=v[x++]*e+n,f=v[x++]*e+t,h=v[x++]*e+n,d=v[x++]*e+t,g=v[x++]*e+n,o.bezierCurveTo(f,h,d,g,c,u);break}}return{offsetX:s.ha*e,path:o}}Rp.prototype.isFont=!0;class rL extends xn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lL(t)}),this.register(function(t){return new pL(t)}),this.register(function(t){return new mL(t)}),this.register(function(t){return new cL(t)}),this.register(function(t){return new uL(t)}),this.register(function(t){return new fL(t)}),this.register(function(t){return new hL(t)}),this.register(function(t){return new dL(t)}),this.register(function(t){return new oL(t)}),this.register(function(t){return new gL(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=vn.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ol(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={};if(typeof e=="string")s=e;else if(vn.decodeText(new Uint8Array(e,0,4))===Fp){try{o[He.KHR_BINARY_GLTF]=new vL(e)}catch(f){r&&r(f);return}s=o[He.KHR_BINARY_GLTF].content}else s=vn.decodeText(new Uint8Array(e));const l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new LL(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){const f=l.extensionsUsed[u],h=l.extensionsRequired||[];switch(f){case He.KHR_MATERIALS_UNLIT:o[f]=new aL;break;case He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[f]=new _L;break;case He.KHR_DRACO_MESH_COMPRESSION:o[f]=new xL(l,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:o[f]=new yL;break;case He.KHR_MESH_QUANTIZATION:o[f]=new bL;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}}function sL(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class oL{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Se(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new so(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ya(u),c.distance=f;break;case"spot":c=new ro(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class aL{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Z0}extendParams(e,t,n){const r=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(r)}}class lL{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ne(a,a)}return Promise.all(s)}}class cL{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class uL{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class fL{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se(a[0],a[1],a[2]),Promise.all(s)}}class hL{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class dL{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nr}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture).then(function(l){l.encoding=_0})),Promise.all(s)}}class pL{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=n.images[s.source],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o,a)}}class mL{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gL{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,o.ready]).then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,h=new ArrayBuffer(u*f),d=new Uint8Array(a[0],l,c);return o.decodeGltfBuffer(new Uint8Array(h),u,f,d,r.mode,r.filter),h})}else return null}}const Fp="glTF",Zo=12,L3={JSON:1313821514,BIN:5130562};class vL{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zo);if(this.header={magic:vn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Zo,r=new DataView(e,Zo);let s=0;for(;s<n;){const o=r.getUint32(s,!0);s+=4;const a=r.getUint32(s,!0);if(s+=4,a===L3.JSON){const l=new Uint8Array(e,Zo+s,o);this.content=vn.decodeText(l)}else if(a===L3.BIN){const l=Zo+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class xL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Of[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Of[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=qa[h.componentType];c[f]=d,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(h){for(const d in h.attributes){const g=h.attributes[d],v=l[d];v!==void 0&&(g.normalized=v)}f(h)},a,c)})})}}class yL{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Nf extends _o{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Se().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class _L{constructor(){this.name=He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return Nf}extendParams(e,t,n){const r=t.extensions[this.name];e.color=new Se(1,1,1),e.opacity=1;const s=[];if(Array.isArray(r.diffuseFactor)){const o=r.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(r.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",r.diffuseTexture)),e.emissive=new Se(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new Se(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const o=r.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",o)),s.push(n.assignTexture(e,"specularMap",o))}return Promise.all(s)}createMaterial(e){const t=new Nf(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Vr,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class bL{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class kr extends ri{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}}kr.prototype.beforeStart_=kr.prototype.copySampleValue_;kr.prototype.afterEnd_=kr.prototype.copySampleValue_;kr.prototype.interpolate_=function(i,e,t,n){const r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,c=n-e,u=(t-e)/c,f=u*u,h=f*u,d=i*l,g=d-l,v=-2*h+3*f,x=h-f,p=1-v,m=x-f+u;for(let y=0;y!==o;y++){const _=s[g+y+o],b=s[g+y+a]*c,w=s[d+y+o],S=s[d+y]*c;r[y]=p*_+m*b+v*w+x*S}return r};const SL=new Ct;class wL extends kr{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return SL.fromArray(s).normalize().toArray(s),s}}const Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},C3={9728:nt,9729:it,9984:Af,9985:C8,9986:Ef,9987:Hr},R3={33071:gt,33648:Nc,10497:Rn},F3={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Of={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ML={CUBICSPLINE:void 0,LINEAR:Js,STEP:ka},Ou={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function TL(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new _o({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ks})),i.DefaultMaterial}function Ko(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Sr(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function AL(i,e,t){let n=!1,r=!1;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(r=!0),n&&r)break}if(!n&&!r)return Promise.resolve(i);const s=[],o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];if(n){const u=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):i.attributes.position;s.push(u)}if(r){const u=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):i.attributes.normal;o.push(u)}}return Promise.all([Promise.all(s),Promise.all(o)]).then(function(a){const l=a[0],c=a[1];return n&&(i.morphAttributes.position=l),r&&(i.morphAttributes.normal=c),i.morphTargetsRelative=!0,i})}function EL(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function PL(i){const e=i.extensions&&i.extensions[He.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+I3(e.attributes):t=i.indices+":"+I3(i.attributes)+":"+i.mode,t}function I3(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function zf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class LL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sL,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new Pp(this.options.manager):this.textureLoader=new Yr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ol(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};Ko(s,a,r),Sr(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this.loadAnimation(t);break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(vn.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=F3[r.type],c=qa[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,x;if(d&&d!==f){const p=Math.floor(h/d),m="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=t.cache.get(m);y||(v=new c(a,p*d,r.count*d/u),y=new xo(v,d/u),t.cache.add(m,y)),x=new eo(y,l,h%d/u,g)}else a===null?v=new c(r.count*l):v=new c(a,h,r.count*l),x=new Tt(v,l,g);if(r.sparse!==void 0){const p=F3.SCALAR,m=qa[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,b=new m(o[1],y,r.sparse.count*p),w=new c(o[2],_,r.sparse.count*l);a!==null&&(x=new Tt(x.array.slice(),x.itemSize,x.normalized));for(let S=0,M=b.length;S<M;S++){const P=b[S];if(x.setX(P,w[S*l]),l>=2&&x.setY(P,w[S*l+1]),l>=3&&x.setZ(P,w[S*l+2]),l>=4&&x.setW(P,w[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e],s=t.images[r.source];let o=this.textureLoader;if(s.uri){const a=n.manager.getHandler(s.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,o=this.options,a=s.textures[e],l=(t.uri||t.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let u=t.uri||"",f=!1;if(t.bufferView!==void 0)u=r.getDependency("bufferView",t.bufferView).then(function(d){f=!0;const g=new Blob([d],{type:t.mimeType});return u=c.createObjectURL(g),u});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(u).then(function(d){return new Promise(function(g,v){let x=g;n.isImageBitmapLoader===!0&&(x=function(p){const m=new vt(p);m.needsUpdate=!0,g(m)}),n.load(vn.resolveURL(d,o.path),x,void 0,v)})}).then(function(d){f===!0&&c.revokeObjectURL(u),d.flipY=!1,a.name&&(d.name=a.name);const v=(s.samplers||{})[a.sampler]||{};return d.magFilter=C3[v.magFilter]||it,d.minFilter=C3[v.minFilter]||Hr,d.wrapS=R3[v.wrapS]||Rn,d.wrapT=R3[v.wrapT]||Rn,r.associations.set(d,{textures:e}),d}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",u),null});return this.textureCache[l]=h,h}assignTexture(e,t,n){const r=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[He.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=r.associations.get(s);s=r.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,a)}}return e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new b1,zt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new er,zt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return _o}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const f=r[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else if(l[He.KHR_MATERIALS_UNLIT]){const f=r[He.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Xi);const u=s.alphaMode||Ou.OPAQUE;if(u===Ou.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.format=Pn,a.transparent=!1,u===Ou.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Z0&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ne(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&o!==Z0&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Z0&&(a.emissive=new Se().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==Z0&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let f;return o===Nf?f=r[He.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):f=new o(a),s.name&&(f.name=s.name),f.map&&(f.map.encoding=_0),f.emissiveMap&&(f.emissiveMap.encoding=_0),Sr(f,s),t.associations.set(f,{materials:e}),s.extensions&&Ko(r,f,s),f})}createUniqueName(e){const t=Xe.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return D3(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=PL(c),f=r[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=D3(new Re,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?TL(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,g=u.length;d<g;d++){const v=u[d],x=o[d];let p;const m=c[d];if(x.mode===Wn.TRIANGLES||x.mode===Wn.TRIANGLE_STRIP||x.mode===Wn.TRIANGLE_FAN||x.mode===void 0)p=s.isSkinnedMesh===!0?new x1(v,m):new Ot(v,m),p.isSkinnedMesh===!0&&!p.geometry.attributes.skinWeight.normalized&&p.normalizeSkinWeights(),x.mode===Wn.TRIANGLE_STRIP?p.geometry=N3(p.geometry,kS):x.mode===Wn.TRIANGLE_FAN&&(p.geometry=N3(p.geometry,F8));else if(x.mode===Wn.LINES)p=new _1(v,m);else if(x.mode===Wn.LINE_STRIP)p=new yo(v,m);else if(x.mode===Wn.LINE_LOOP)p=new op(v,m);else if(x.mode===Wn.POINTS)p=new K9(v,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&EL(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Sr(p,s),x.extensions&&Ko(r,p,x),t.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return f[0];const h=new dn;t.associations.set(h,{meshes:e});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new $t(j0.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new $i(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Sr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return n.inverseBindMatrices=r,n})}loadAnimation(e){const n=this.json.animations[e],r=[],s=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const f=n.channels[c],h=n.samplers[f.sampler],d=f.target,g=d.node!==void 0?d.node:d.id,v=n.parameters!==void 0?n.parameters[h.input]:h.input,x=n.parameters!==void 0?n.parameters[h.output]:h.output;r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",v)),o.push(this.getDependency("accessor",x)),a.push(h),l.push(d)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],d=c[3],g=c[4],v=[];for(let p=0,m=u.length;p<m;p++){const y=u[p],_=f[p],b=h[p],w=d[p],S=g[p];if(y===void 0)continue;y.updateMatrix(),y.matrixAutoUpdate=!0;let M;switch(Si[S.path]){case Si.weights:M=to;break;case Si.rotation:M=Qi;break;case Si.position:case Si.scale:default:M=no;break}const P=y.name?y.name:y.uuid,F=w.interpolation!==void 0?ML[w.interpolation]:Js,T=[];Si[S.path]===Si.weights?y.traverse(function(A){A.isMesh===!0&&A.morphTargetInfluences&&T.push(A.name?A.name:A.uuid)}):T.push(P);let D=b.array;if(b.normalized){const A=zf(D.constructor),R=new Float32Array(D.length);for(let O=0,z=D.length;O<z;O++)R[O]=D[O]*A;D=R}for(let A=0,R=T.length;A<R;A++){const O=new M(T[A]+"."+Si[S.path],_.array,D,F);w.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(U){const j=this instanceof Qi?wL:kr;return new j(this.times,this.values,this.getValueSize()/3,U)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),v.push(O)}}const x=n.name?n.name:"animation_"+e;return new kc(x,void 0,v)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,r=this,s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"";return function(){const a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(s.isBone===!0?l=new Va:a.length>1?l=new dn:a.length===1?l=a[0]:l=new Ye,l!==a[0])for(let c=0,u=a.length;c<u;c++)l.add(a[c]);if(s.name&&(l.userData.name=s.name,l.name=o),Sr(l,s),s.extensions&&Ko(n,l,s),s.matrix!==void 0){const c=new we;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return r.associations.has(l)||r.associations.set(l,{}),r.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,r=this.json.scenes[e],s=this,o=new dn;r.name&&(o.name=s.createUniqueName(r.name)),Sr(o,r),r.extensions&&Ko(n,o,r);const a=r.nodes||[],l=[];for(let c=0,u=a.length;c<u;c++)l.push(Ip(a[c],o,t,s));return Promise.all(l).then(function(){const c=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof zt||h instanceof vt)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(o),o})}}function Ip(i,e,t,n){const r=t.nodes[i];return n.getDependency("node",i).then(function(s){if(r.skin===void 0)return s;let o;return n.getDependency("skin",r.skin).then(function(a){o=a;const l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(a){return s.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let f=0,h=a.length;f<h;f++){const d=a[f];if(d){c.push(d);const g=new we;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,f*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[f])}l.bind(new y1(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(r.children){const a=r.children;for(let l=0,c=a.length;l<c;l++){const u=a[l];o.push(Ip(u,s,t,n))}}return Promise.all(o)})}function CL(i,e,t){const n=e.attributes,r=new nn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){const u=zf(qa[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new I,l=new I;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const v=zf(qa[h.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Wr;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function D3(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Of[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return Sr(i,e),CL(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?AL(i,e.targets,t):i})}function N3(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===F8)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var O3={},Bf=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))},Dp=function(i){return new Worker(i)};try{URL.revokeObjectURL(Bf(""))}catch{Bf=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},Dp=function(e){return new Worker(e,{type:"module"})}}var RL=function(i,e,t,n,r){var s=Dp(O3[e]||(O3[e]=Bf(i)));return s.onerror=function(o){return r(o.error,null)},s.onmessage=function(o){return r(null,o.data)},s.postMessage(t,n),s},ke=Uint8Array,jt=Uint16Array,si=Uint32Array,wo=new ke([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Mo=new ke([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Qa=new ke([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Np=function(i,e){for(var t=new jt(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new si(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},Op=Np(wo,2),Sh=Op[0],Gc=Op[1];Sh[28]=258,Gc[258]=28;var zp=Np(Mo,0),Bp=zp[0],Uf=zp[1],Za=new jt(32768);for(var pt=0;pt<32768;++pt){var wi=(pt&43690)>>>1|(pt&21845)<<1;wi=(wi&52428)>>>2|(wi&13107)<<2,wi=(wi&61680)>>>4|(wi&3855)<<4,Za[pt]=((wi&65280)>>>8|(wi&255)<<8)>>>1}var J0=function(i,e,t){for(var n=i.length,r=0,s=new jt(e);r<n;++r)++s[i[r]-1];var o=new jt(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new jt(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],f=o[i[r]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)a[Za[f]>>>l]=c}else for(a=new jt(n),r=0;r<n;++r)i[r]&&(a[r]=Za[o[i[r]-1]++]>>>15-i[r]);return a},oi=new ke(288);for(var pt=0;pt<144;++pt)oi[pt]=8;for(var pt=144;pt<256;++pt)oi[pt]=9;for(var pt=256;pt<280;++pt)oi[pt]=7;for(var pt=280;pt<288;++pt)oi[pt]=8;var oo=new ke(32);for(var pt=0;pt<32;++pt)oo[pt]=5;var Up=J0(oi,9,0),kp=J0(oi,9,1),Gp=J0(oo,5,0),Hp=J0(oo,5,1),mc=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},G0=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},gc=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},al=function(i){return(i/8|0)+(i&7&&1)},$0=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof jt?jt:i instanceof si?si:ke)(t-e);return n.set(i.subarray(e,t)),n},ll=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new ke(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new ke(n*3));var o=function(X){var J=e.length;if(X>J){var ae=new ke(Math.max(J*2,X));ae.set(e),e=ae}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,f=t.d,h=t.m,d=t.n,g=n*8;do{if(!u){t.f=a=G0(i,l,1);var v=G0(i,l+1,3);if(l+=3,v)if(v==1)u=kp,f=Hp,h=9,d=5;else if(v==2){var y=G0(i,l,31)+257,_=G0(i,l+10,15)+4,b=y+G0(i,l+5,31)+1;l+=14;for(var w=new ke(b),S=new ke(19),M=0;M<_;++M)S[Qa[M]]=G0(i,l+M*3,7);l+=_*3;for(var P=mc(S),F=(1<<P)-1,T=J0(S,P,1),M=0;M<b;){var D=T[G0(i,l,F)];l+=D&15;var x=D>>>4;if(x<16)w[M++]=x;else{var A=0,R=0;for(x==16?(R=3+G0(i,l,3),l+=2,A=w[M-1]):x==17?(R=3+G0(i,l,7),l+=3):x==18&&(R=11+G0(i,l,127),l+=7);R--;)w[M++]=A}}var O=w.subarray(0,y),z=w.subarray(y);h=mc(O),d=mc(z),u=J0(O,h,1),f=J0(z,d,1)}else throw"invalid block type";else{var x=al(l)+4,p=i[x-4]|i[x-3]<<8,m=x+p;if(m>n){if(s)throw"unexpected EOF";break}r&&o(c+p),e.set(i.subarray(x,m),c),t.b=c+=p,t.p=l=m*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}r&&o(c+131072);for(var U=(1<<h)-1,j=(1<<d)-1,ie=l;;ie=l){var A=u[gc(i,l)&U],ue=A>>>4;if(l+=A&15,l>g){if(s)throw"unexpected EOF";break}if(!A)throw"invalid length/literal";if(ue<256)e[c++]=ue;else if(ue==256){ie=l,u=null;break}else{var oe=ue-254;if(ue>264){var M=ue-257,xe=wo[M];oe=G0(i,l,(1<<xe)-1)+Sh[M],l+=xe}var $=f[gc(i,l)&j],re=$>>>4;if(!$)throw"invalid distance";l+=$&15;var z=Bp[re];if(re>3){var xe=Mo[re];z+=gc(i,l)&(1<<xe)-1,l+=xe}if(l>g){if(s)throw"unexpected EOF";break}r&&o(c+131072);for(var H=c+oe;c<H;c+=4)e[c]=e[c-z],e[c+1]=e[c+1-z],e[c+2]=e[c+2-z],e[c+3]=e[c+3-z];c=H}}t.l=u,t.p=ie,t.b=c,u&&(a=1,t.m=h,t.d=f,t.n=d)}while(!a);return c==e.length?e:$0(e,0,c)},Sn=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8},ws=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8,i[n+2]|=t>>>16},vc=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return[Kn,0];if(r==1){var o=new ke(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(b,w){return b.f-w.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,f=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=t[t[c].f<t[f].f?c++:f++],l=t[c!=u&&t[c].f<t[f].f?c++:f++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var h=s[0].s,n=1;n<r;++n)s[n].s>h&&(h=s[n].s);var d=new jt(h+1),g=Hc(t[u-1],d,0);if(g>e){var n=0,v=0,x=g-e,p=1<<x;for(s.sort(function(w,S){return d[S.s]-d[w.s]||w.f-S.f});n<r;++n){var m=s[n].s;if(d[m]>e)v+=p-(1<<g-d[m]),d[m]=e;else break}for(v>>>=x;v>0;){var y=s[n].s;d[y]<e?v-=1<<e-d[y]++-1:++n}for(;n>=0&&v;--n){var _=s[n].s;d[_]==e&&(--d[_],++v)}g=e}return[new ke(d),g]},Hc=function(i,e,t){return i.s==-1?Math.max(Hc(i.l,e,t+1),Hc(i.r,e,t+1)):e[i.s]=t},kf=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new jt(++e),n=0,r=i[0],s=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=i[a]}return[t.subarray(0,n),e]},Ms=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Sa=function(i,e,t){var n=t.length,r=al(e+2);i[r]=n&255,i[r+1]=n>>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Gf=function(i,e,t,n,r,s,o,a,l,c,u){Sn(e,u++,t),++r[256];for(var f=vc(r,15),h=f[0],d=f[1],g=vc(s,15),v=g[0],x=g[1],p=kf(h),m=p[0],y=p[1],_=kf(v),b=_[0],w=_[1],S=new jt(19),M=0;M<m.length;++M)S[m[M]&31]++;for(var M=0;M<b.length;++M)S[b[M]&31]++;for(var P=vc(S,7),F=P[0],T=P[1],D=19;D>4&&!F[Qa[D-1]];--D);var A=c+5<<3,R=Ms(r,oi)+Ms(s,oo)+o,O=Ms(r,h)+Ms(s,v)+o+14+3*D+Ms(S,F)+(2*S[16]+3*S[17]+7*S[18]);if(A<=R&&A<=O)return Sa(e,u,i.subarray(l,l+c));var z,U,j,ie;if(Sn(e,u,1+(O<R)),u+=2,O<R){z=J0(h,d,0),U=h,j=J0(v,x,0),ie=v;var ue=J0(F,T,0);Sn(e,u,y-257),Sn(e,u+5,w-1),Sn(e,u+10,D-4),u+=14;for(var M=0;M<D;++M)Sn(e,u+3*M,F[Qa[M]]);u+=3*D;for(var oe=[m,b],xe=0;xe<2;++xe)for(var $=oe[xe],M=0;M<$.length;++M){var re=$[M]&31;Sn(e,u,ue[re]),u+=F[re],re>15&&(Sn(e,u,$[M]>>>5&127),u+=$[M]>>>12)}}else z=Up,U=oi,j=Gp,ie=oo;for(var M=0;M<a;++M)if(n[M]>255){var re=n[M]>>>18&31;ws(e,u,z[re+257]),u+=U[re+257],re>7&&(Sn(e,u,n[M]>>>23&31),u+=wo[re]);var H=n[M]&31;ws(e,u,j[H]),u+=ie[H],H>3&&(ws(e,u,n[M]>>>5&8191),u+=Mo[H])}else ws(e,u,z[n[M]]),u+=U[n[M]];return ws(e,u,z[256]),u+U[256]},Vp=new si([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Kn=new ke(0),Wp=function(i,e,t,n,r,s){var o=i.length,a=new ke(n+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(n,a.length-r),c=0;if(!e||o<8)for(var u=0;u<=o;u+=65535){var f=u+65535;f<o?c=Sa(l,c,i.subarray(u,f)):(l[u]=s,c=Sa(l,c,i.subarray(u,o)))}else{for(var h=Vp[e-1],d=h>>>13,g=h&8191,v=(1<<t)-1,x=new jt(32768),p=new jt(v+1),m=Math.ceil(t/3),y=2*m,_=function(N){return(i[N]^i[N+1]<<m^i[N+2]<<y)&v},b=new si(25e3),w=new jt(288),S=new jt(32),M=0,P=0,u=0,F=0,T=0,D=0;u<o;++u){var A=_(u),R=u&32767,O=p[A];if(x[R]=O,p[A]=R,T<=u){var z=o-u;if((M>7e3||F>24576)&&z>423){c=Gf(i,l,0,b,w,S,P,F,D,u-D,c),F=M=P=0,D=u;for(var U=0;U<286;++U)w[U]=0;for(var U=0;U<30;++U)S[U]=0}var j=2,ie=0,ue=g,oe=R-O&32767;if(z>2&&A==_(u-oe))for(var xe=Math.min(d,z)-1,$=Math.min(32767,u),re=Math.min(258,z);oe<=$&&--ue&&R!=O;){if(i[u+j]==i[u+j-oe]){for(var H=0;H<re&&i[u+H]==i[u+H-oe];++H);if(H>j){if(j=H,ie=oe,H>xe)break;for(var X=Math.min(oe,H-2),J=0,U=0;U<X;++U){var ae=u-oe+U+32768&32767,de=x[ae],ve=ae-de+32768&32767;ve>J&&(J=ve,O=ae)}}}R=O,O=x[R],oe+=R-O+32768&32767}if(ie){b[F++]=268435456|Gc[j]<<18|Uf[ie];var be=Gc[j]&31,Z=Uf[ie]&31;P+=wo[be]+Mo[Z],++w[257+be],++S[Z],T=u+j,++M}else b[F++]=i[u],++w[i[u]]}}c=Gf(i,l,s,b,w,S,P,F,D,u-D,c),!s&&c&7&&(c=Sa(l,c+1,Kn))}return $0(a,0,n+al(c)+r)},Xp=function(){for(var i=new si(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;i[e]=t}return i}(),To=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Xp[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},wh=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)r+=n+=t[o];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|i>>>8<<16|(e&255)<<8|e>>>8}}},qr=function(i,e,t,n,r){return Wp(i,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+e.mem,t,n,!r)},cl=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},z3=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/ /g,"").split(","),o=0;o<n.length;++o){var a=n[o],l=s[o];if(typeof a=="function"){e+=";"+l+"=";var c=a.toString();if(a.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var f in a.prototype)e+=";"+l+".prototype."+f+"="+a.prototype[f].toString()}else e+=c}else t[l]=a}return[e,t]},$l=[],FL=function(i){var e=[];for(var t in i)(i[t]instanceof ke||i[t]instanceof jt||i[t]instanceof si)&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},jp=function(i,e,t,n){var r;if(!$l[t]){for(var s="",o={},a=i.length-1,l=0;l<a;++l)r=z3(i[l],s,o),s=r[0],o=r[1];$l[t]=z3(i[a],s,o)}var c=cl({},$l[t][1]);return RL($l[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,FL(c),n)},Ao=function(){return[ke,jt,si,wo,Mo,Qa,Sh,Bp,kp,Hp,Za,J0,mc,G0,gc,al,$0,ll,Co,ir,Mh]},Eo=function(){return[ke,jt,si,wo,Mo,Qa,Gc,Uf,Up,oi,Gp,oo,Za,Vp,Kn,J0,Sn,ws,vc,Hc,kf,Ms,Sa,Gf,al,$0,Wp,qr,ul,ir]},Yp=function(){return[Th,Eh,$e,To,Xp]},qp=function(){return[Ah,Kp]},Qp=function(){return[Ph,$e,wh]},Zp=function(){return[Jp]},ir=function(i){return postMessage(i,[i.buffer])},Mh=function(i){return i&&i.size&&new ke(i.size)},Po=function(i,e,t,n,r,s){var o=jp(t,n,r,function(a,l){o.terminate(),s(a,l)});return o.postMessage([i,e],e.consume?[i.buffer]:[]),function(){o.terminate()}},tn=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return i.push(e.data[0],e.data[1])}},Lo=function(i,e,t,n,r){var s,o=jp(i,n,r,function(a,l){a?(o.terminate(),e.ondata.call(e,a)):(l[1]&&o.terminate(),e.ondata.call(e,a,l[0],l[1]))});o.postMessage(t),e.push=function(a,l){if(s)throw"stream finished";if(!e.ondata)throw"no stream handler";o.postMessage([a,s=l],[a.buffer])},e.terminate=function(){o.terminate()}},f0=function(i,e){return i[e]|i[e+1]<<8},Lt=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},zu=function(i,e){return Lt(i,e)+Lt(i,e+4)*4294967296},$e=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},Th=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&$e(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},Ah=function(i){if(i[0]!=31||i[1]!=139||i[2]!=8)throw"invalid gzip data";var e=i[3],t=10;e&4&&(t+=i[10]|(i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Kp=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},Eh=function(i){return 10+(i.filename&&i.filename.length+1||0)},Ph=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;i[0]=120,i[1]=n<<6|(n?32-2*n:1)},Jp=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Lh(i,e){return!e&&typeof i=="function"&&(e=i,i={}),this.ondata=e,i}var In=function(){function i(e,t){!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{}}return i.prototype.p=function(e,t){this.ondata(qr(e,this.o,0,0,!t),t)},i.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},i}(),$p=function(){function i(e,t){Lo([Eo,function(){return[tn,In]}],this,Lh.call(this,e,t),function(n){var r=new In(n.data);onmessage=tn(r)},6)}return i}();function e6(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Po(i,e,[Eo],function(n){return ir(ul(n.data[0],n.data[1]))},0,t)}function ul(i,e){return qr(i,e||{},0,0)}var T0=function(){function i(e){this.s={},this.p=new ke(0),this.ondata=e}return i.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,n=new ke(t+e.length);n.set(this.p),n.set(e,t),this.p=n},i.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,n=ll(this.p,this.o,this.s);this.ondata($0(n,t,this.s.b),this.d),this.o=$0(n,this.s.b-32768),this.s.b=this.o.length,this.p=$0(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i}(),Ch=function(){function i(e){this.ondata=e,Lo([Ao,function(){return[tn,T0]}],this,0,function(){var t=new T0;onmessage=tn(t)},7)}return i}();function Rh(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Po(i,e,[Ao],function(n){return ir(Co(n.data[0],Mh(n.data[1])))},1,t)}function Co(i,e){return ll(i,e)}var Vc=function(){function i(e,t){this.c=To(),this.l=0,this.v=1,In.call(this,e,t)}return i.prototype.push=function(e,t){In.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var n=qr(e,this.o,this.v&&Eh(this.o),t&&8,!t);this.v&&(Th(n,this.o),this.v=0),t&&($e(n,n.length-8,this.c.d()),$e(n,n.length-4,this.l)),this.ondata(n,t)},i}(),B3=function(){function i(e,t){Lo([Eo,Yp,function(){return[tn,In,Vc]}],this,Lh.call(this,e,t),function(n){var r=new Vc(n.data);onmessage=tn(r)},8)}return i}();function U3(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Po(i,e,[Eo,Yp,function(){return[Wc]}],function(n){return ir(Wc(n.data[0],n.data[1]))},2,t)}function Wc(i,e){e||(e={});var t=To(),n=i.length;t.p(i);var r=qr(i,e,Eh(e),8),s=r.length;return Th(r,e),$e(r,s-8,t.d()),$e(r,s-4,n),r}var Xc=function(){function i(e){this.v=1,T0.call(this,e)}return i.prototype.push=function(e,t){if(T0.prototype.e.call(this,e),this.v){var n=this.p.length>3?Ah(this.p):4;if(n>=this.p.length&&!t)return;this.p=this.p.subarray(n),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}T0.prototype.c.call(this,t)},i}(),t6=function(){function i(e){this.ondata=e,Lo([Ao,qp,function(){return[tn,T0,Xc]}],this,0,function(){var t=new Xc;onmessage=tn(t)},9)}return i}();function n6(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Po(i,e,[Ao,qp,function(){return[jc]}],function(n){return ir(jc(n.data[0]))},3,t)}function jc(i,e){return ll(i.subarray(Ah(i),-8),e||new ke(Kp(i)))}var Hf=function(){function i(e,t){this.c=wh(),this.v=1,In.call(this,e,t)}return i.prototype.push=function(e,t){In.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){this.c.p(e);var n=qr(e,this.o,this.v&&2,t&&4,!t);this.v&&(Ph(n,this.o),this.v=0),t&&$e(n,n.length-4,this.c.d()),this.ondata(n,t)},i}(),IL=function(){function i(e,t){Lo([Eo,Qp,function(){return[tn,In,Hf]}],this,Lh.call(this,e,t),function(n){var r=new Hf(n.data);onmessage=tn(r)},10)}return i}();function DL(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Po(i,e,[Eo,Qp,function(){return[Vf]}],function(n){return ir(Vf(n.data[0],n.data[1]))},4,t)}function Vf(i,e){e||(e={});var t=wh();t.p(i);var n=qr(i,e,2,4);return Ph(n,e),$e(n,n.length-4,t.d()),n}var Yc=function(){function i(e){this.v=1,T0.call(this,e)}return i.prototype.push=function(e,t){if(T0.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}T0.prototype.c.call(this,t)},i}(),i6=function(){function i(e){this.ondata=e,Lo([Ao,Zp,function(){return[tn,T0,Yc]}],this,0,function(){var t=new Yc;onmessage=tn(t)},11)}return i}();function r6(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Po(i,e,[Ao,Zp,function(){return[Ka]}],function(n){return ir(Ka(n.data[0],Mh(n.data[1])))},5,t)}function Ka(i,e){return ll((Jp(i),i.subarray(2,-4)),e)}var s6=function(){function i(e){this.G=Xc,this.I=T0,this.Z=Yc,this.ondata=e}return i.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new ke(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var r=this,s=function(){r.ondata.apply(r,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(s):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(s):new this.Z(s),this.s.push(this.p,t),this.p=null}}},i}(),NL=function(){function i(e){this.G=t6,this.I=Ch,this.Z=i6,this.ondata=e}return i.prototype.push=function(e,t){s6.prototype.push.call(this,e,t)},i}();function OL(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return i[0]==31&&i[1]==139&&i[2]==8?n6(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Rh(i,e,t):r6(i,e,t)}function zL(i,e){return i[0]==31&&i[1]==139&&i[2]==8?jc(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Co(i,e):Ka(i,e)}var Fh=function(i,e,t,n){for(var r in i){var s=i[r],o=e+r;s instanceof ke?t[o]=[s,n]:Array.isArray(s)?t[o]=[s[0],cl(n,s[1])]:Fh(s,o+"/",t,n)}},k3=typeof TextEncoder!="undefined"&&new TextEncoder,Wf=typeof TextDecoder!="undefined"&&new TextDecoder,o6=0;try{Wf.decode(Kn,{stream:!0}),o6=1}catch{}var a6=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return[e,$0(i,t-1)];r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},BL=function(){function i(e){this.ondata=e,o6?this.t=new TextDecoder:this.p=Kn}return i.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var n=new ke(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=a6(n),s=r[0],o=r[1];if(t){if(o.length)throw"invalid utf-8 data";this.p=null}else this.p=o;this.ondata(s,t)},i}(),UL=function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(Zi(e),this.d=t||!1)},i}();function Zi(i,e){if(e){for(var t=new ke(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(k3)return k3.encode(i);for(var r=i.length,s=new ke(i.length+(i.length>>1)),o=0,a=function(u){s[o++]=u},n=0;n<r;++n){if(o+5>s.length){var l=new ke(o+8+(r-n<<1));l.set(s),s=l}var c=i.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1023<<10)|i.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return $0(s,0,o)}function Ih(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Wf)return Wf.decode(i);var r=a6(i),s=r[0],o=r[1];if(o.length)throw"invalid utf-8 data";return s}}var l6=function(i){return i==1?3:i<6?2:i==9?1:0},c6=function(i,e){return e+30+f0(i,e+26)+f0(i,e+28)},u6=function(i,e,t){var n=f0(i,e+28),r=Ih(i.subarray(e+46,e+46+n),!(f0(i,e+8)&2048)),s=e+46+n,o=Lt(i,e+20),a=t&&o==4294967295?f6(i,s):[o,Lt(i,e+24),Lt(i,e+42)],l=a[0],c=a[1],u=a[2];return[f0(i,e+10),l,c,r,s+f0(i,e+30)+f0(i,e+32),u]},f6=function(i,e){for(;f0(i,e)!=1;e+=4+f0(i,e+2));return[zu(i,e+12),zu(i,e+4),zu(i,e+20)]},Gi=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},ao=function(i,e,t,n,r,s,o,a){var l=n.length,c=t.extra,u=a&&a.length,f=Gi(c);$e(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s==null&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var h=new Date(t.mtime==null?Date.now():t.mtime),d=h.getFullYear()-1980;if(d<0||d>119)throw"date not in range 1980-2099";if($e(i,e,d<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>>1),e+=4,s!=null&&($e(i,e,t.crc),$e(i,e+4,s),$e(i,e+8,t.size)),$e(i,e+12,l),$e(i,e+14,f),e+=16,o!=null&&($e(i,e,u),$e(i,e+6,t.attrs),$e(i,e+10,o),e+=14),i.set(n,e),e+=l,f)for(var g in c){var v=c[g],x=v.length;$e(i,e,+g),$e(i,e+2,x),i.set(v,e+4),e+=4+x}return u&&(i.set(a,e),e+=u),e},Dh=function(i,e,t,n,r){$e(i,e,101010256),$e(i,e+8,t),$e(i,e+10,t),$e(i,e+12,n),$e(i,e+16,r)},Ja=function(){function i(e){this.filename=e,this.c=To(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i}(),kL=function(){function i(e,t){var n=this;t||(t={}),Ja.call(this,e),this.d=new In(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=l6(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){Ja.prototype.push.call(this,e,t)},i}(),GL=function(){function i(e,t){var n=this;t||(t={}),Ja.call(this,e),this.d=new $p(t,function(r,s,o){n.ondata(r,s,o)}),this.compression=8,this.flag=l6(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){Ja.prototype.push.call(this,e,t)},i}(),HL=function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.d&2)throw"stream finished";var n=Zi(e.filename),r=n.length,s=e.comment,o=s&&Zi(s),a=r!=e.filename.length||o&&s.length!=o.length,l=r+Gi(e.extra)+30;if(r>65535)throw"filename too long";var c=new ke(l);ao(c,0,e,n,a);var u=[c],f=function(){for(var x=0,p=u;x<p.length;x++){var m=p[x];t.ondata(null,m,!1)}u=[]},h=this.d;this.d=0;var d=this.u.length,g=cl(e,{f:n,u:a,o,t:function(){e.terminate&&e.terminate()},r:function(){if(f(),h){var x=t.u[d+1];x?x.r():t.d=1}h=1}}),v=0;e.ondata=function(x,p,m){if(x)t.ondata(x,p,m),t.terminate();else if(v+=p.length,u.push(p),m){var y=new ke(16);$e(y,0,134695760),$e(y,4,e.crc),$e(y,8,v),$e(y,12,e.size),u.push(y),g.c=v,g.b=l+v+16,g.crc=e.crc,g.size=e.size,h&&g.r(),h=1}else h&&f()},this.u.push(g)},i.prototype.end=function(){var e=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){!(e.d&1)||(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var o=s[r];n+=46+o.f.length+Gi(o.extra)+(o.o?o.o.length:0)}for(var a=new ke(n+22),l=0,c=this.u;l<c.length;l++){var o=c[l];ao(a,e,o,o.f,o.u,o.c,t,o.o),e+=46+o.f.length+Gi(o.extra)+(o.o?o.o.length:0),t+=o.b}Dh(a,e,this.u.length,n,t),this.ondata(null,a,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i}();function VL(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";var n={};Fh(i,"",n,e);var r=Object.keys(n),s=r.length,o=0,a=0,l=s,c=new Array(s),u=[],f=function(){for(var v=0;v<u.length;++v)u[v]()},h=function(){var v=new ke(a+22),x=o,p=a-o;a=0;for(var m=0;m<l;++m){var y=c[m];try{var _=y.c.length;ao(v,a,y,y.f,y.u,_);var b=30+y.f.length+Gi(y.extra),w=a+b;v.set(y.c,w),ao(v,o,y,y.f,y.u,_,a,y.m),o+=16+b+(y.m?y.m.length:0),a=w+_}catch(S){return t(S,null)}}Dh(v,o,c.length,p,x),t(null,v)};s||h();for(var d=function(v){var x=r[v],p=n[x],m=p[0],y=p[1],_=To(),b=m.length;_.p(m);var w=Zi(x),S=w.length,M=y.comment,P=M&&Zi(M),F=P&&P.length,T=Gi(y.extra),D=y.level==0?0:8,A=function(R,O){if(R)f(),t(R,null);else{var z=O.length;c[v]=cl(y,{size:b,crc:_.d(),c:O,f:w,m:P,u:S!=x.length||P&&M.length!=F,compression:D}),o+=30+S+T+z,a+=76+2*(S+T)+(F||0)+z,--s||h()}};if(S>65535&&A("filename too long",null),!D)A(null,m);else if(b<16e4)try{A(null,ul(m,y))}catch(R){A(R,null)}else u.push(e6(m,y,A))},g=0;g<l;++g)d(g);return f}function WL(i,e){e||(e={});var t={},n=[];Fh(i,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,f=Zi(o),h=f.length,d=c.comment,g=d&&Zi(d),v=g&&g.length,x=Gi(c.extra);if(h>65535)throw"filename too long";var p=u?ul(l,c):l,m=p.length,y=To();y.p(l),n.push(cl(c,{size:l.length,crc:y.d(),c:p,f,m:g,u:h!=o.length||g&&d.length!=v,o:r,compression:u})),r+=30+h+x+m,s+=76+2*(h+x)+(v||0)+m}for(var _=new ke(s+22),b=r,w=s-r,S=0;S<n.length;++S){var f=n[S];ao(_,f.o,f,f.f,f.u,f.c.length);var M=30+f.f.length+Gi(f.extra);_.set(f.c,f.o+M),ao(_,r,f,f.f,f.u,f.c.length,f.o,f.m),r+=16+M+(f.m?f.m.length:0)}return Dh(_,r,n.length,w,b),_}var h6=function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i}(),XL=function(){function i(){var e=this;this.i=new T0(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,e,t)}},i.compression=8,i}(),jL=function(){function i(e,t){var n=this;t<32e4?this.i=new T0(function(r,s){n.ondata(null,r,s)}):(this.i=new Ch(function(r,s,o){n.ondata(r,s,o)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=$0(e,0)),this.i.push(e,t)},i.compression=8,i}(),YL=function(){function i(e){this.onfile=e,this.k=[],this.o={0:h6},this.p=Kn}return i.prototype.push=function(e,t){var n=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var o=0,a=0,l=void 0,c=void 0;this.p.length?e.length?(c=new ke(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var u=c.length,f=this.c,h=f&&this.d,d=function(){var p,m=Lt(c,a);if(m==67324752){o=1,l=a,g.d=null,g.c=0;var y=f0(c,a+6),_=f0(c,a+8),b=y&2048,w=y&8,S=f0(c,a+26),M=f0(c,a+28);if(u>a+30+S+M){var P=[];g.k.unshift(P),o=2;var F=Lt(c,a+18),T=Lt(c,a+22),D=Ih(c.subarray(a+30,a+=30+S),!b);F==4294967295?(p=w?[-2]:f6(c,a),F=p[0],T=p[1]):w&&(F=-1),a+=M,g.c=F;var A,R={name:D,compression:_,start:function(){if(!R.ondata)throw"no callback";if(!F)R.ondata(null,Kn,!0);else{var O=n.o[_];if(!O)throw"unknown compression type "+_;A=F<0?new O(D):new O(D,F,T),A.ondata=function(ie,ue,oe){R.ondata(ie,ue,oe)};for(var z=0,U=P;z<U.length;z++){var j=U[z];A.push(j,!1)}n.k[0]==P&&n.c?n.d=A:A.push(Kn,!0)}},terminate:function(){A&&A.terminate&&A.terminate()}};F>=0&&(R.size=F,R.originalSize=T),g.onfile(R)}return"break"}else if(f){if(m==134695760)return l=a+=12+(f==-2&&8),o=3,g.c=0,"break";if(m==33639248)return l=a-=4,o=3,g.c=0,"break"}},g=this;a<u-4;++a){var v=d();if(v==="break")break}if(this.p=Kn,f<0){var x=o?c.subarray(0,l-12-(f==-2&&8)-(Lt(c,l-16)==134695760&&4)):c.subarray(0,a);h?h.push(x,!!o):this.k[+(o==2)].push(x)}if(o&2)return this.push(c.subarray(a),t);this.p=c.subarray(a)}if(t){if(this.c)throw"invalid zip file";this.p=null}},i.prototype.register=function(e){this.o[e.compression]=e},i}();function qL(i,e){if(typeof e!="function")throw"no callback";for(var t=[],n=function(){for(var h=0;h<t.length;++h)t[h]()},r={},s=i.length-22;Lt(i,s)!=101010256;--s)if(!s||i.length-s>65558){e("invalid zip file",null);return}var o=f0(i,s+8);o||e(null,{});var a=o,l=Lt(i,s+16),c=l==4294967295;if(c){if(s=Lt(i,s-12),Lt(i,s)!=101075792){e("invalid zip file",null);return}a=o=Lt(i,s+32),l=Lt(i,s+48)}for(var u=function(h){var d=u6(i,l,c),g=d[0],v=d[1],x=d[2],p=d[3],m=d[4],y=d[5],_=c6(i,y);l=m;var b=function(S,M){S?(n(),e(S,null)):(r[p]=M,--o||e(null,r))};if(!g)b(null,$0(i,_,_+v));else if(g==8){var w=i.subarray(_,_+v);if(v<32e4)try{b(null,Co(w,new ke(x)))}catch(S){b(S,null)}else t.push(Rh(w,{size:x},b))}else b("unknown compression type "+g,null)},f=0;f<a;++f)u();return n}function QL(i){for(var e={},t=i.length-22;Lt(i,t)!=101010256;--t)if(!t||i.length-t>65558)throw"invalid zip file";var n=f0(i,t+8);if(!n)return{};var r=Lt(i,t+16),s=r==4294967295;if(s){if(t=Lt(i,t-12),Lt(i,t)!=101075792)throw"invalid zip file";n=Lt(i,t+32),r=Lt(i,t+48)}for(var o=0;o<n;++o){var a=u6(i,r,s),l=a[0],c=a[1],u=a[2],f=a[3],h=a[4],d=a[5],g=c6(i,d);if(r=h,!l)e[f]=$0(i,g,g+c);else if(l==8)e[f]=Co(i.subarray(g,g+c),new ke(u));else throw"unknown compression type "+l}return e}var ZL=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Deflate:In,AsyncDeflate:$p,deflate:e6,deflateSync:ul,Inflate:T0,AsyncInflate:Ch,inflate:Rh,inflateSync:Co,Gzip:Vc,AsyncGzip:B3,gzip:U3,gzipSync:Wc,Gunzip:Xc,AsyncGunzip:t6,gunzip:n6,gunzipSync:jc,Zlib:Hf,AsyncZlib:IL,zlib:DL,zlibSync:Vf,Unzlib:Yc,AsyncUnzlib:i6,unzlib:r6,unzlibSync:Ka,compress:U3,AsyncCompress:B3,compressSync:Wc,Compress:Vc,Decompress:s6,AsyncDecompress:NL,decompress:OL,decompressSync:zL,DecodeUTF8:BL,EncodeUTF8:UL,strToU8:Zi,strFromU8:Ih,ZipPassThrough:Ja,ZipDeflate:kL,AsyncZipDeflate:GL,Zip:HL,zip:VL,zipSync:WL,UnzipPassThrough:h6,UnzipInflate:XL,AsyncUnzipInflate:jL,Unzip:YL,unzip:qL,unzipSync:QL});function d6(i,e,t){const n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let r=i,s=n,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function KL(i,e,t,n){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],f=s[a-c],h=r[c]/(u+f);r[c]=l+u*h,l=f*h}r[a]=l}return r}function JL(i,e,t,n){const r=d6(i,n,e),s=KL(r,n,i,e),o=new Je(0,0,0,0);for(let a=0;a<=i;++a){const l=t[r-i+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function $L(i,e,t,n,r){const s=[];for(let f=0;f<=t;++f)s[f]=0;const o=[];for(let f=0;f<=n;++f)o[f]=s.slice(0);const a=[];for(let f=0;f<=t;++f)a[f]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let f=1;f<=t;++f){l[f]=e-r[i+1-f],c[f]=r[i+f]-e;let h=0;for(let d=0;d<f;++d){const g=c[d+1],v=l[f-d];a[f][d]=g+v;const x=a[d][f-1]/a[f][d];a[d][f]=h+g*x,h=v*x}a[f][f]=h}for(let f=0;f<=t;++f)o[0][f]=a[f][t];for(let f=0;f<=t;++f){let h=0,d=1;const g=[];for(let v=0;v<=t;++v)g[v]=s.slice(0);g[0][0]=1;for(let v=1;v<=n;++v){let x=0;const p=f-v,m=t-v;f>=v&&(g[d][0]=g[h][0]/a[m+1][p],x=g[d][0]*a[p][m]);const y=p>=-1?1:-p,_=f-1<=m?v-1:t-f;for(let w=y;w<=_;++w)g[d][w]=(g[h][w]-g[h][w-1])/a[m+1][p+w],x+=g[d][w]*a[p+w][m];f<=m&&(g[d][v]=-g[h][v-1]/a[m+1][f],x+=g[d][v]*a[f][m]),o[v][f]=x;const b=h;h=d,d=b}}let u=t;for(let f=1;f<=n;++f){for(let h=0;h<=t;++h)o[f][h]*=u;u*=t-f}return o}function eC(i,e,t,n,r){const s=r<i?r:i,o=[],a=d6(i,n,e),l=$L(a,n,i,s,e),c=[];for(let u=0;u<t.length;++u){const f=t[u].clone(),h=f.w;f.x*=h,f.y*=h,f.z*=h,c[u]=f}for(let u=0;u<=s;++u){const f=c[a-i].clone().multiplyScalar(l[u][0]);for(let h=1;h<=i;++h)f.add(c[a-i+h].clone().multiplyScalar(l[u][h]));o[u]=f}for(let u=s+1;u<=r+1;++u)o[u]=new Je(0,0,0);return o}function tC(i,e){let t=1;for(let r=2;r<=i;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=i-e;++r)n*=r;return t/n}function nC(i){const e=i.length,t=[],n=[];for(let s=0;s<e;++s){const o=i[s];t[s]=new I(o.x,o.y,o.z),n[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(tC(s,a)*n[a]));r[s]=o.divideScalar(n[0])}return r}function iC(i,e,t,n,r){const s=eC(i,e,t,n,r);return nC(s)}class G3 extends A0{constructor(e,t,n,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Je(a.x,a.y,a.z,a.w)}}getPoint(e,t=new I){const n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=JL(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new I){const n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=iC(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}}let Ue,Et,g0;class rC extends xn{constructor(e){super(e)}load(e,t,n,r){const s=this,o=s.path===""?vn.extractUrlBase(e):s.path,a=new ol(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e,t){if(uC(e))Ue=new cC().parse(e);else{const r=v6(e);if(!fC(r))throw new Error("THREE.FBXLoader: Unknown format.");if(V3(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+V3(r));Ue=new lC().parse(r)}const n=new Yr(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new sC(n,this.manager).parse(Ue)}}class sC{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Et=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),s=new oC().parse(r);return this.parseScene(r,s,n),g0}parseConnections(){const e=new Map;return"Connections"in Ue&&Ue.Connections.connections.forEach(function(n){const r=n[0],s=n[1],o=n[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Ue.Objects){const n=Ue.Objects.Video;for(const r in n){const s=n[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Ue.Objects){const n=Ue.Objects.Texture;for(const r in n){const s=this.parseTexture(n[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?Rn:gt,n.wrapT=a===0?Rn:gt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}return n}loadTexture(e,t){let n;const r=this.textureLoader.path,s=Et.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new vt):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new vt):o=this.textureLoader.load(n);return this.textureLoader.setPath(r),o}parseMaterials(e){const t=new Map;if("Material"in Ue.Objects){const n=Ue.Objects.Material;for(const r in n){const s=this.parseMaterial(n[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const n=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Et.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new ba;break;case"lambert":a=new gh;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new ba;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,n){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Se().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Se().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Se().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Se().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Se().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Se().fromArray(e.SpecularColor.value));const s=this;return Et.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.encoding=_0);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.encoding=_0);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=Dc,r.envMap.encoding=_0);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.encoding=_0);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in Ue.Objects&&t in Ue.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Et.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Ue.Objects){const n=Ue.Objects.Deformer;for(const r in n){const s=n[r],o=Et.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,n),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new we().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Et.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){g0=new dn;const r=this.parseModels(e.skeletons,t,n),s=Ue.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),Et.get(l.ID).parents.forEach(function(f){const h=r.get(f.ID);h!==void 0&&h.add(l)}),l.parent===null&&g0.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),g0.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=m6(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new aC().parse();g0.children.length===1&&g0.children[0].isGroup&&(g0.children[0].animations=a,g0=g0.children[0]),g0.animations=a}parseModels(e,t,n){const r=new Map,s=Ue.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=Et.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Va;break;case"Null":default:u=new dn;break}u.name=l.attrName?Xe.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,t,n,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const f=s;s=new Va,s.matrixWorld.copy(c.transformLink),s.name=r?Xe.sanitizeNodeName(r):"",s.ID=n,l.bones[u]=s,f!==null&&s.add(f)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(r){const s=Ue.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new Ye;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const f=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new $t(u,c,s,o),f!==null&&t.setFocalLength(f);break;case 1:t=new $i(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new Ye;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){const s=Ue.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new Ye;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Se().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new Ya(s,o,a,l);break;case 1:t=new so(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=j0.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=j0.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new ro(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Ya(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new ba({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new x1(s,o),r.normalizeSkinWeights()):r=new Ot(s,o),r}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new er({color:3342591,linewidth:1});return new yo(n,r)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=g6(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Et.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=Ue.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),g0.add(e.target)):e.lookAt(new I().fromArray(o))}}})}bindSkeleton(e,t,n){const r=this.parsePoseNodes();for(const s in e){const o=e[s];Et.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Et.get(c).parents.forEach(function(f){n.has(f.ID)&&n.get(f.ID).bind(new y1(o.bones),r[f.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Ue.Objects){const t=Ue.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new we().fromArray(s.Matrix.a)}):e[r.Node]=new we().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in Ue&&"AmbientColor"in Ue.GlobalSettings){const e=Ue.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){const s=new Se(t,n,r);g0.add(new xh(s,1))}}}}class oC{parse(e){const t=new Map;if("Geometry"in Ue.Objects){const n=Ue.Objects.Geometry;for(const r in n){const s=Et.get(parseInt(r)),o=this.parseGeometry(s,n[r],e);t.set(parseInt(r),o)}}return t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const r=n.skeletons,s=[],o=e.parents.map(function(f){return Ue.Objects.Model[f.ID]});if(o.length===0)return;const a=e.children.reduce(function(f,h){return r[h.ID]!==void 0&&(f=r[h.ID]),f},null);e.children.forEach(function(f){n.morphTargets[f.ID]!==void 0&&s.push(n.morphTargets[f.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=g6(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=m6(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,n,r){const s=new Re;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Te(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Te(a.colors,3)),t&&(s.setAttribute("skinIndex",new H9(a.weightsIndices,4)),s.setAttribute("skinWeight",new Te(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new Xt().getNormalMatrix(r),u=new Te(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let f="uv"+(u+1).toString();u===0&&(f="uv"),s.setAttribute(f,new Te(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(f,h){f!==c&&(s.addGroup(u,h-u,c),c=f,u=h)}),s.groups.length>0){const f=s.groups[s.groups.length-1],h=f.start+f.count;h!==a.materialIndex.length&&s.addGroup(h,a.materialIndex.length-h,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,r),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:r.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],f=[];const h=this;return e.vertexIndices.forEach(function(d,g){let v,x=!1;d<0&&(d=d^-1,x=!0);let p=[],m=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const y=ec(g,n,d,e.color);l.push(y[0],y[1],y[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(y){m.push(y.weight),p.push(y.id)}),m.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const y=[0,0,0,0],_=[0,0,0,0];m.forEach(function(b,w){let S=b,M=p[w];_.forEach(function(P,F,T){if(S>P){T[F]=S,S=P;const D=y[F];y[F]=M,M=D}})}),p=y,m=_}for(;m.length<4;)m.push(0),p.push(0);for(let y=0;y<4;++y)u.push(m[y]),f.push(p[y])}if(e.normal){const y=ec(g,n,d,e.normal);a.push(y[0],y[1],y[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=ec(g,n,d,e.material)[0]),e.uv&&e.uv.forEach(function(y,_){const b=ec(g,n,d,y);c[_]===void 0&&(c[_]=[]),c[_].push(b[0]),c[_].push(b[1])}),r++,x&&(h.genFace(t,e,o,v,a,l,c,u,f,r),n++,r=0,o=[],a=[],l=[],c=[],u=[],f=[])}),t}genFace(e,t,n,r,s,o,a,l,c,u){for(let f=2;f<u;f++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(f-1)*3]]),e.vertex.push(t.vertexPositions[n[(f-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(f-1)*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(f-1)*4]),e.vertexWeights.push(l[(f-1)*4+1]),e.vertexWeights.push(l[(f-1)*4+2]),e.vertexWeights.push(l[(f-1)*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(f-1)*4]),e.weightsIndices.push(c[(f-1)*4+1]),e.weightsIndices.push(c[(f-1)*4+2]),e.weightsIndices.push(c[(f-1)*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(f-1)*3]),e.colors.push(o[(f-1)*3+1]),e.colors.push(o[(f-1)*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(f-1)*3]),e.normal.push(s[(f-1)*3+1]),e.normal.push(s[(f-1)*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2])),t.uv&&t.uv.forEach(function(h,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(f-1)*2]),e.uvs[d].push(a[d][(f-1)*2+1]),e.uvs[d].push(a[d][f*2]),e.uvs[d].push(a[d][f*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Ue.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,n,r,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const v=l[g]*3;u[v]=a[g*3],u[v+1]=a[g*3+1],u[v+2]=a[g*3+2]}const f={vertexIndices:o,vertexPositions:u},h=this.genBuffers(f),d=new Te(h.vertex,3);d.name=s||n.attrName,d.applyMatrix4(r),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){if(G3===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new Re;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Re;const n=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let f=0,h=o.length;f<h;f+=4)s.push(new Je().fromArray(o,f));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=r.length-1-a;for(let f=0;f<n;++f)s.push(s[f])}const u=new G3(n,r,s,a,l).getPoints(s.length*12);return new Re().setFromPoints(u)}}class aC{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const r=t[n],s=this.addClip(r);e.push(s)}return e}parseClips(){if(Ue.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Ue.Objects.AnimationCurveNode,t=new Map;for(const n in e){const r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Ue.Objects.AnimationCurve;for(const n in t){const r={id:t[n].id,times:t[n].KeyTime.a.map(hC),values:t[n].KeyValueFloat.a},s=Et.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=Ue.Objects.AnimationLayer,n=new Map;for(const r in t){const s=[],o=Et.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const f=Et.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(f!==void 0){const h=Ue.Objects.Model[f.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:h.attrName?Xe.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};g0.traverse(function(g){g.ID===h.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new we),"PreRotation"in h&&(d.preRotation=h.PreRotation.value),"PostRotation"in h&&(d.postRotation=h.PostRotation.value),s[c]=d}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const f=Et.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,h=Et.get(f).parents[0].ID,d=Et.get(h).parents[0].ID,g=Et.get(d).parents[0].ID,v=Ue.Objects.Model[g],x={modelName:v.attrName?Xe.sanitizeNodeName(v.attrName):"",morphName:Ue.Objects.Deformer[f].attrName};s[c]=x}s[c][u.attr]=u}}}),n.set(parseInt(r),s))}return n}parseAnimStacks(e){const t=Ue.Objects.AnimationStack,n={};for(const r in t){const s=Et.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[r]={name:t[r].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),new kc(e.name,-1,t)}generateTracks(e){const t=[];let n=new I,r=new Ct,s=new I;if(e.transform&&e.transform.decompose(n,r,s),n=n.toArray(),r=new hn().setFromQuaternion(r,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new no(e+"."+r,s,o)}generateRotationTrack(e,t,n,r,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(j0.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(j0.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(j0.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);r!==void 0&&(r=r.map(j0.degToRad),r.push(o),r=new hn().fromArray(r),r=new Ct().setFromEuler(r)),s!==void 0&&(s=s.map(j0.degToRad),s.push(o),s=new hn().fromArray(s),s=new Ct().setFromEuler(s).invert());const c=new Ct,u=new hn,f=[];for(let h=0;h<l.length;h+=3)u.set(l[h],l[h+1],l[h+2],o),c.setFromEuler(u),r!==void 0&&c.premultiply(r),s!==void 0&&c.multiply(s),c.toArray(f,h/3*4);return new Qi(e+".quaternion",a,f)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),r=g0.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new to(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[n]=o,r=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const r=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){const u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],r=e.values[t]-n,s=Math.abs(r);if(s>=180){const o=s/180,a=r/o;let l=n+a;const c=e.times[t-1],f=(e.times[t]-c)/o;let h=c+f;const d=[],g=[];for(;h<e.times[t];)d.push(h),h+=f,g.push(l),l+=a;e.times=W3(e.times,t,d),e.values=W3(e.values,t,g)}}}}class lC{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new p6,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,n[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let f=s.split(",").slice(3);f=f.map(function(h){return h.trim().replace(/^"/,"")}),r="connections",s=[c,u],pC(s,f),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=Uu(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Uu(t.a))}parseNodeSpecialProperty(e,t,n){const r=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Uu(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class cC{parse(e){const t=new H3(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const r=new p6;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let h=0;h<s;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",f=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(a,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),f!==""&&(n.attrType=f),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){const r=[];n.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}typeof ZL=="undefined"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const a=Ka(new Uint8Array(e.getArrayBuffer(o))),l=new H3(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class H3{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let r=0;r<e;r++)t[r]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),vn.decodeText(new Uint8Array(t))}}class p6{add(e,t){this[e]=t}}function uC(i){const e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===v6(i,0,e.length)}function fC(i){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(r){const s=i[r-1];return i=i.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function V3(i){const e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function hC(i){return i/46186158e3}const dC=[];function ec(i,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=i;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);const s=r*n.dataSize,o=s+n.dataSize;return mC(dC,n.buffer,s,o)}const Bu=new hn,ys=new I;function m6(i){const e=new we,t=new we,n=new we,r=new we,s=new we,o=new we,a=new we,l=new we,c=new we,u=new we,f=new we,h=new we,d=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(ys.fromArray(i.translation)),i.preRotation){const F=i.preRotation.map(j0.degToRad);F.push(i.eulerOrder),t.makeRotationFromEuler(Bu.fromArray(F))}if(i.rotation){const F=i.rotation.map(j0.degToRad);F.push(i.eulerOrder),n.makeRotationFromEuler(Bu.fromArray(F))}if(i.postRotation){const F=i.postRotation.map(j0.degToRad);F.push(i.eulerOrder),r.makeRotationFromEuler(Bu.fromArray(F)),r.invert()}i.scale&&s.scale(ys.fromArray(i.scale)),i.scalingOffset&&a.setPosition(ys.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(ys.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(ys.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(ys.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(f.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));const g=t.clone().multiply(n).multiply(r),v=new we;v.extractRotation(u);const x=new we;x.copyPosition(u);const p=x.clone().invert().multiply(u),m=v.clone().invert().multiply(p),y=s,_=new we;if(d===0)_.copy(v).multiply(g).multiply(m).multiply(y);else if(d===1)_.copy(v).multiply(m).multiply(g).multiply(y);else{const T=new we().scale(new I().setFromMatrixScale(f)).clone().invert(),D=m.clone().multiply(T);_.copy(v).multiply(g).multiply(D).multiply(y)}const b=c.clone().invert(),w=o.clone().invert();let S=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(b).multiply(a).multiply(o).multiply(s).multiply(w);const M=new we().copyPosition(S),P=u.clone().multiply(M);return h.copyPosition(P),S=h.clone().multiply(_),S.premultiply(u.invert()),S}function g6(i){i=i||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function Uu(i){return i.split(",").map(function(t){return parseFloat(t)})}function v6(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),vn.decodeText(new Uint8Array(i,e,t))}function pC(i,e){for(let t=0,n=i.length,r=e.length;t<r;t++,n++)i[n]=e[t]}function mC(i,e,t,n){for(let r=t,s=0;r<n;r++,s++)i[s]=e[r];return i}function W3(i,e,t){return i.slice(0,e).concat(t).concat(i.slice(e))}var Or={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class Nn{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const gC=new $i(-1,1,1,-1,0,1),Nh=new Re;Nh.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3));Nh.setAttribute("uv",new Te([0,2,0,0,2,0],2));class Qr{constructor(e){this._mesh=new Ot(Nh,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,gC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lo extends Nn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ft?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=s0.clone(e.uniforms),this.material=new ft({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class X3 extends Nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class vC extends Nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class xC{constructor(e,t){if(this.renderer=e,t===void 0){const n={minFilter:it,magFilter:it,format:lt},r=e.getSize(new ne);this._pixelRatio=e.getPixelRatio(),this._width=r.width,this._height=r.height,t=new Dt(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Or===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),lo===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new lo(Or),this.clock=new RP}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}X3!==void 0&&(o instanceof X3?n=!0:o instanceof vC&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new $i(-1,1,1,-1,0,1);const x6=new Re;x6.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3));x6.setAttribute("uv",new Te([0,2,0,0,2,0],2));class yC extends Nn{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const j3={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class _C extends Nn{constructor(e,t,n){super(),this.scene=e,this.camera=t;const r=n.focus!==void 0?n.focus:1,s=n.aspect!==void 0?n.aspect:t.aspect,o=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1,l=n.width||window.innerWidth||1,c=n.height||window.innerHeight||1;this.renderTargetDepth=new Dt(l,c,{minFilter:nt,magFilter:nt}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new q9,this.materialDepth.depthPacking=O8,this.materialDepth.blending=Kt,j3===void 0&&console.error("THREE.BokehPass relies on BokehShader");const u=j3,f=s0.clone(u.uniforms);f.tDepth.value=this.renderTargetDepth.texture,f.focus.value=r,f.aspect.value=s,f.aperture.value=o,f.maxblur.value=a,f.nearClip.value=t.near,f.farClip.value=t.far,this.materialBokeh=new ft({defines:Object.assign({},u.defines),uniforms:f,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.uniforms=f,this.needsSwap=!1,this.fsQuad=new Qr(this.materialBokeh),this._oldClearColor=new Se}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}}const Y3={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

		// sample the source
			vec4 cTextureScreen = texture2D( tDiffuse, vUv );

		// make some noise
			float dx = rand( vUv + time );

		// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

		// get us a sine and cosine
			vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );

		// add scanlines
			cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;

		// interpolate between source and result by intensity
			cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );

		// convert to grayscale if desired
			if( grayscale ) {

				cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );

			}

			gl_FragColor =  vec4( cResult, cTextureScreen.a );

		}`};class bC extends Nn{constructor(e,t,n,r){super(),Y3===void 0&&console.error("THREE.FilmPass relies on FilmShader");const s=Y3;this.uniforms=s0.clone(s.uniforms),this.material=new ft({uniforms:this.uniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),r!==void 0&&(this.uniforms.grayscale.value=r),e!==void 0&&(this.uniforms.nIntensity.value=e),t!==void 0&&(this.uniforms.sIntensity.value=t),n!==void 0&&(this.uniforms.sCount.value=n),this.fsQuad=new Qr(this.material)}render(e,t,n,r){this.uniforms.tDiffuse.value=n.texture,this.uniforms.time.value+=r,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}}const SC={uniforms:{tDiffuse:{value:null},resolution:{value:new ne(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		#define FXAA_PC 1
		#define FXAA_GLSL_100 1
		#define FXAA_QUALITY_PRESET 12

		#define FXAA_GREEN_AS_LUMA 1

		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_PC_CONSOLE
				//
				// The console algorithm for PC is included
				// for developers targeting really low spec machines.
				// Likely better to just run FXAA_PC, and use a really low preset.
				//
				#define FXAA_PC_CONSOLE 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_120
				#define FXAA_GLSL_120 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GLSL_130
				#define FXAA_GLSL_130 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_3
				#define FXAA_HLSL_3 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_4
				#define FXAA_HLSL_4 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_HLSL_5
				#define FXAA_HLSL_5 0
		#endif
		/*==========================================================================*/
		#ifndef FXAA_GREEN_AS_LUMA
				//
				// For those using non-linear color,
				// and either not able to get luma in alpha, or not wanting to,
				// this enables FXAA to run using green as a proxy for luma.
				// So with this enabled, no need to pack luma in alpha.
				//
				// This will turn off AA on anything which lacks some amount of green.
				// Pure red and blue or combination of only R and B, will get no AA.
				//
				// Might want to lower the settings for both,
				//		fxaaConsoleEdgeThresholdMin
				//		fxaaQualityEdgeThresholdMin
				// In order to insure AA does not get turned off on colors
				// which contain a minor amount of green.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_GREEN_AS_LUMA 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_EARLY_EXIT
				//
				// Controls algorithm's early exit path.
				// On PS3 turning this ON adds 2 cycles to the shader.
				// On 360 turning this OFF adds 10ths of a millisecond to the shader.
				// Turning this off on console will result in a more blurry image.
				// So this defaults to on.
				//
				// 1 = On.
				// 0 = Off.
				//
				#define FXAA_EARLY_EXIT 1
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_DISCARD
				//
				// Only valid for PC OpenGL currently.
				// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
				//
				// 1 = Use discard on pixels which don't need AA.
				//		 For APIs which enable concurrent TEX+ROP from same surface.
				// 0 = Return unchanged color on pixels which don't need AA.
				//
				#define FXAA_DISCARD 0
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_FAST_PIXEL_OFFSET
				//
				// Used for GLSL 120 only.
				//
				// 1 = GL API supports fast pixel offsets
				// 0 = do not use fast pixel offsets
				//
				#ifdef GL_EXT_gpu_shader4
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_FAST_PIXEL_OFFSET 1
				#endif
				#ifndef FXAA_FAST_PIXEL_OFFSET
						#define FXAA_FAST_PIXEL_OFFSET 0
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#ifndef FXAA_GATHER4_ALPHA
				//
				// 1 = API supports gather4 on alpha channel.
				// 0 = API does not support gather4 on alpha channel.
				//
				#if (FXAA_HLSL_5 == 1)
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_ARB_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifdef GL_NV_gpu_shader5
						#define FXAA_GATHER4_ALPHA 1
				#endif
				#ifndef FXAA_GATHER4_ALPHA
						#define FXAA_GATHER4_ALPHA 0
				#endif
		#endif


		/*============================================================================
														FXAA QUALITY - TUNING KNOBS
		------------------------------------------------------------------------------
		NOTE the other tuning knobs are now in the shader function inputs!
		============================================================================*/
		#ifndef FXAA_QUALITY_PRESET
				//
				// Choose the quality preset.
				// This needs to be compiled into the shader as it effects code.
				// Best option to include multiple presets is to
				// in each shader define the preset, then include this file.
				//
				// OPTIONS
				// -----------------------------------------------------------------------
				// 10 to 15 - default medium dither (10=fastest, 15=highest quality)
				// 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
				// 39			 - no dither, very expensive
				//
				// NOTES
				// -----------------------------------------------------------------------
				// 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
				// 13 = about same speed as FXAA 3.9 and better than 12
				// 23 = closest to FXAA 3.9 visually and performance wise
				//	_ = the lowest digit is directly related to performance
				// _	= the highest digit is directly related to style
				//
				#define FXAA_QUALITY_PRESET 12
		#endif


		/*============================================================================

															 FXAA QUALITY - PRESETS

		============================================================================*/

		/*============================================================================
												 FXAA QUALITY - MEDIUM DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 10)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 3.0
				#define FXAA_QUALITY_P2 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 11)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 3.0
				#define FXAA_QUALITY_P3 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 12)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 4.0
				#define FXAA_QUALITY_P4 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 13)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 4.0
				#define FXAA_QUALITY_P5 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 14)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 4.0
				#define FXAA_QUALITY_P6 12.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 15)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 12.0
		#endif

		/*============================================================================
												 FXAA QUALITY - LOW DITHER PRESETS
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 20)
				#define FXAA_QUALITY_PS 3
				#define FXAA_QUALITY_P0 1.5
				#define FXAA_QUALITY_P1 2.0
				#define FXAA_QUALITY_P2 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 21)
				#define FXAA_QUALITY_PS 4
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 22)
				#define FXAA_QUALITY_PS 5
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 23)
				#define FXAA_QUALITY_PS 6
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 24)
				#define FXAA_QUALITY_PS 7
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 3.0
				#define FXAA_QUALITY_P6 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 25)
				#define FXAA_QUALITY_PS 8
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 4.0
				#define FXAA_QUALITY_P7 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 26)
				#define FXAA_QUALITY_PS 9
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 4.0
				#define FXAA_QUALITY_P8 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 27)
				#define FXAA_QUALITY_PS 10
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 4.0
				#define FXAA_QUALITY_P9 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 28)
				#define FXAA_QUALITY_PS 11
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 4.0
				#define FXAA_QUALITY_P10 8.0
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_QUALITY_PRESET == 29)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.5
				#define FXAA_QUALITY_P2 2.0
				#define FXAA_QUALITY_P3 2.0
				#define FXAA_QUALITY_P4 2.0
				#define FXAA_QUALITY_P5 2.0
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif

		/*============================================================================
												 FXAA QUALITY - EXTREME QUALITY
		============================================================================*/
		#if (FXAA_QUALITY_PRESET == 39)
				#define FXAA_QUALITY_PS 12
				#define FXAA_QUALITY_P0 1.0
				#define FXAA_QUALITY_P1 1.0
				#define FXAA_QUALITY_P2 1.0
				#define FXAA_QUALITY_P3 1.0
				#define FXAA_QUALITY_P4 1.0
				#define FXAA_QUALITY_P5 1.5
				#define FXAA_QUALITY_P6 2.0
				#define FXAA_QUALITY_P7 2.0
				#define FXAA_QUALITY_P8 2.0
				#define FXAA_QUALITY_P9 2.0
				#define FXAA_QUALITY_P10 4.0
				#define FXAA_QUALITY_P11 8.0
		#endif



		/*============================================================================

																		API PORTING

		============================================================================*/
		#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
				#define FxaaBool bool
				#define FxaaDiscard discard
				#define FxaaFloat float
				#define FxaaFloat2 vec2
				#define FxaaFloat3 vec3
				#define FxaaFloat4 vec4
				#define FxaaHalf float
				#define FxaaHalf2 vec2
				#define FxaaHalf3 vec3
				#define FxaaHalf4 vec4
				#define FxaaInt2 ivec2
				#define FxaaSat(x) clamp(x, 0.0, 1.0)
				#define FxaaTex sampler2D
		#else
				#define FxaaBool bool
				#define FxaaDiscard clip(-1)
				#define FxaaFloat float
				#define FxaaFloat2 float2
				#define FxaaFloat3 float3
				#define FxaaFloat4 float4
				#define FxaaHalf half
				#define FxaaHalf2 half2
				#define FxaaHalf3 half3
				#define FxaaHalf4 half4
				#define FxaaSat(x) saturate(x)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_100 == 1)
			#define FxaaTexTop(t, p) texture2D(t, p, 0.0)
			#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_120 == 1)
				// Requires,
				//	#version 120
				// And at least,
				//	#extension GL_EXT_gpu_shader4 : enable
				//	(or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
				#define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)
				#if (FXAA_FAST_PIXEL_OFFSET == 1)
						#define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)
				#else
						#define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)
				#endif
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_GLSL_130 == 1)
				// Requires "#version 130" or better
				#define FxaaTexTop(t, p) textureLod(t, p, 0.0)
				#define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
				#if (FXAA_GATHER4_ALPHA == 1)
						// use #extension GL_ARB_gpu_shader5 : enable
						#define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
						#define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
						#define FxaaTexGreen4(t, p) textureGather(t, p, 1)
						#define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
				#endif
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_3 == 1)
				#define FxaaInt2 float2
				#define FxaaTex sampler2D
				#define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
				#define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_4 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
		#endif
		/*--------------------------------------------------------------------------*/
		#if (FXAA_HLSL_5 == 1)
				#define FxaaInt2 int2
				struct FxaaTex { SamplerState smpl; Texture2D tex; };
				#define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
				#define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
				#define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
				#define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
				#define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
				#define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
		#endif


		/*============================================================================
											 GREEN AS LUMA OPTION SUPPORT FUNCTION
		============================================================================*/
		#if (FXAA_GREEN_AS_LUMA == 0)
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
		#else
				FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
		#endif




		/*============================================================================

																 FXAA3 QUALITY - PC

		============================================================================*/
		#if (FXAA_PC == 1)
		/*--------------------------------------------------------------------------*/
		FxaaFloat4 FxaaPixelShader(
				//
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy} = center of pixel
				FxaaFloat2 pos,
				//
				// Used only for FXAA Console, and not used on the 360 version.
				// Use noperspective interpolation here (turn off perspective interpolation).
				// {xy_} = upper left of pixel
				// {_zw} = lower right of pixel
				FxaaFloat4 fxaaConsolePosPos,
				//
				// Input color texture.
				// {rgb_} = color in linear or perceptual color space
				// if (FXAA_GREEN_AS_LUMA == 0)
				//		 {__a} = luma in perceptual color space (not linear)
				FxaaTex tex,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 2nd sampler.
				// This sampler needs to have an exponent bias of -1.
				FxaaTex fxaaConsole360TexExpBiasNegOne,
				//
				// Only used on the optimized 360 version of FXAA Console.
				// For everything but 360, just use the same input here as for "tex".
				// For 360, same texture, just alias with a 3nd sampler.
				// This sampler needs to have an exponent bias of -2.
				FxaaTex fxaaConsole360TexExpBiasNegTwo,
				//
				// Only used on FXAA Quality.
				// This must be from a constant/uniform.
				// {x_} = 1.0/screenWidthInPixels
				// {_y} = 1.0/screenHeightInPixels
				FxaaFloat2 fxaaQualityRcpFrame,
				//
				// Only used on FXAA Console.
				// This must be from a constant/uniform.
				// This effects sub-pixel AA quality and inversely sharpness.
				//	 Where N ranges between,
				//		 N = 0.50 (default)
				//		 N = 0.33 (sharper)
				// {x__} = -N/screenWidthInPixels
				// {_y_} = -N/screenHeightInPixels
				// {_z_} =	N/screenWidthInPixels
				// {__w} =	N/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt,
				//
				// Only used on FXAA Console.
				// Not used on 360, but used on PS3 and PC.
				// This must be from a constant/uniform.
				// {x__} = -2.0/screenWidthInPixels
				// {_y_} = -2.0/screenHeightInPixels
				// {_z_} =	2.0/screenWidthInPixels
				// {__w} =	2.0/screenHeightInPixels
				FxaaFloat4 fxaaConsoleRcpFrameOpt2,
				//
				// Only used on FXAA Console.
				// Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
				// This must be from a constant/uniform.
				// {x__} =	8.0/screenWidthInPixels
				// {_y_} =	8.0/screenHeightInPixels
				// {_z_} = -4.0/screenWidthInPixels
				// {__w} = -4.0/screenHeightInPixels
				FxaaFloat4 fxaaConsole360RcpFrameOpt2,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_SUBPIX define.
				// It is here now to allow easier tuning.
				// Choose the amount of sub-pixel aliasing removal.
				// This can effect sharpness.
				//	 1.00 - upper limit (softer)
				//	 0.75 - default amount of filtering
				//	 0.50 - lower limit (sharper, less sub-pixel aliasing removal)
				//	 0.25 - almost off
				//	 0.00 - completely off
				FxaaFloat fxaaQualitySubpix,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// The minimum amount of local contrast required to apply algorithm.
				//	 0.333 - too little (faster)
				//	 0.250 - low quality
				//	 0.166 - default
				//	 0.125 - high quality
				//	 0.063 - overkill (slower)
				FxaaFloat fxaaQualityEdgeThreshold,
				//
				// Only used on FXAA Quality.
				// This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				//	 0.0833 - upper limit (default, the start of visible unfiltered edges)
				//	 0.0625 - high quality (faster)
				//	 0.0312 - visible limit (slower)
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaQualityEdgeThresholdMin,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only three safe values here: 2 and 4 and 8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// For all other platforms can be a non-power of two.
				//	 8.0 is sharper (default!!!)
				//	 4.0 is softer
				//	 2.0 is really soft (good only for vector graphics inputs)
				FxaaFloat fxaaConsoleEdgeSharpness,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
				// It is here now to allow easier tuning.
				// This does not effect PS3, as this needs to be compiled in.
				//	 Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
				//	 Due to the PS3 being ALU bound,
				//	 there are only two safe values here: 1/4 and 1/8.
				//	 These options use the shaders ability to a free *|/ by 2|4|8.
				// The console setting has a different mapping than the quality setting.
				// Other platforms can use other values.
				//	 0.125 leaves less aliasing, but is softer (default!!!)
				//	 0.25 leaves more aliasing, and is sharper
				FxaaFloat fxaaConsoleEdgeThreshold,
				//
				// Only used on FXAA Console.
				// This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
				// It is here now to allow easier tuning.
				// Trims the algorithm from processing darks.
				// The console setting has a different mapping than the quality setting.
				// This only applies when FXAA_EARLY_EXIT is 1.
				// This does not apply to PS3,
				// PS3 was simplified to avoid more shader instructions.
				//	 0.06 - faster but more aliasing in darks
				//	 0.05 - default
				//	 0.04 - slower and less aliasing in darks
				// Special notes when using FXAA_GREEN_AS_LUMA,
				//	 Likely want to set this to zero.
				//	 As colors that are mostly not-green
				//	 will appear very dark in the green channel!
				//	 Tune by looking at mostly non-green content,
				//	 then start at zero and increase until aliasing is a problem.
				FxaaFloat fxaaConsoleEdgeThresholdMin,
				//
				// Extra constants for 360 FXAA Console only.
				// Use zeros or anything else for other platforms.
				// These must be in physical constant registers and NOT immediates.
				// Immediates will result in compiler un-optimizing.
				// {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
				FxaaFloat4 fxaaConsole360ConstDir
		) {
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posM;
				posM.x = pos.x;
				posM.y = pos.y;
				#if (FXAA_GATHER4_ALPHA == 1)
						#if (FXAA_DISCARD == 0)
								FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
								#if (FXAA_GREEN_AS_LUMA == 0)
										#define lumaM rgbyM.w
								#else
										#define lumaM rgbyM.y
								#endif
						#endif
						#if (FXAA_GREEN_AS_LUMA == 0)
								FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
						#else
								FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
								FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
						#endif
						#if (FXAA_DISCARD == 1)
								#define lumaM luma4A.w
						#endif
						#define lumaE luma4A.z
						#define lumaS luma4A.x
						#define lumaSE luma4A.y
						#define lumaNW luma4B.w
						#define lumaN luma4B.z
						#define lumaW luma4B.x
				#else
						FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
						#if (FXAA_GREEN_AS_LUMA == 0)
								#define lumaM rgbyM.w
						#else
								#define lumaM rgbyM.y
						#endif
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
						#endif
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat maxSM = max(lumaS, lumaM);
				FxaaFloat minSM = min(lumaS, lumaM);
				FxaaFloat maxESM = max(lumaE, maxSM);
				FxaaFloat minESM = min(lumaE, minSM);
				FxaaFloat maxWN = max(lumaN, lumaW);
				FxaaFloat minWN = min(lumaN, lumaW);
				FxaaFloat rangeMax = max(maxWN, maxESM);
				FxaaFloat rangeMin = min(minWN, minESM);
				FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
				FxaaFloat range = rangeMax - rangeMin;
				FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
				FxaaBool earlyExit = range < rangeMaxClamped;
		/*--------------------------------------------------------------------------*/
				if(earlyExit)
						#if (FXAA_DISCARD == 1)
								FxaaDiscard;
						#else
								return rgbyM;
						#endif
		/*--------------------------------------------------------------------------*/
				#if (FXAA_GATHER4_ALPHA == 0)
						#if (FXAA_GLSL_100 == 1)
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
						#else
							FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
							FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
						#endif
				#else
						FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
						FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
				#endif
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNS = lumaN + lumaS;
				FxaaFloat lumaWE = lumaW + lumaE;
				FxaaFloat subpixRcpRange = 1.0/range;
				FxaaFloat subpixNSWE = lumaNS + lumaWE;
				FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
				FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNESE = lumaNE + lumaSE;
				FxaaFloat lumaNWNE = lumaNW + lumaNE;
				FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
				FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
		/*--------------------------------------------------------------------------*/
				FxaaFloat lumaNWSW = lumaNW + lumaSW;
				FxaaFloat lumaSWSE = lumaSW + lumaSE;
				FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
				FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
				FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
				FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
				FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
				FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
		/*--------------------------------------------------------------------------*/
				FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
				FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
				FxaaBool horzSpan = edgeHorz >= edgeVert;
				FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
		/*--------------------------------------------------------------------------*/
				if(!horzSpan) lumaN = lumaW;
				if(!horzSpan) lumaS = lumaE;
				if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
				FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
		/*--------------------------------------------------------------------------*/
				FxaaFloat gradientN = lumaN - lumaM;
				FxaaFloat gradientS = lumaS - lumaM;
				FxaaFloat lumaNN = lumaN + lumaM;
				FxaaFloat lumaSS = lumaS + lumaM;
				FxaaBool pairN = abs(gradientN) >= abs(gradientS);
				FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
				if(pairN) lengthSign = -lengthSign;
				FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posB;
				posB.x = posM.x;
				posB.y = posM.y;
				FxaaFloat2 offNP;
				offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
				offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
				if(!horzSpan) posB.x += lengthSign * 0.5;
				if( horzSpan) posB.y += lengthSign * 0.5;
		/*--------------------------------------------------------------------------*/
				FxaaFloat2 posN;
				posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
				posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
				FxaaFloat2 posP;
				posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
				posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
				FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
				FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
				FxaaFloat subpixE = subpixC * subpixC;
				FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
		/*--------------------------------------------------------------------------*/
				if(!pairN) lumaNN = lumaSS;
				FxaaFloat gradientScaled = gradient * 1.0/4.0;
				FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
				FxaaFloat subpixF = subpixD * subpixE;
				FxaaBool lumaMLTZero = lumaMM < 0.0;
		/*--------------------------------------------------------------------------*/
				lumaEndN -= lumaNN * 0.5;
				lumaEndP -= lumaNN * 0.5;
				FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
				FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
				if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
				if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
				FxaaBool doneNP = (!doneN) || (!doneP);
				if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
				if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
		/*--------------------------------------------------------------------------*/
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 3)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 4)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 5)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 6)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
		/*--------------------------------------------------------------------------*/
														#if (FXAA_QUALITY_PS > 7)
														if(doneNP) {
																if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
																if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
																if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
																if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
																doneN = abs(lumaEndN) >= gradientScaled;
																doneP = abs(lumaEndP) >= gradientScaled;
																if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
																if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
																doneNP = (!doneN) || (!doneP);
																if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
																if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
		/*--------------------------------------------------------------------------*/
				#if (FXAA_QUALITY_PS > 8)
				if(doneNP) {
						if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
						if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
						if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
						if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
						doneN = abs(lumaEndN) >= gradientScaled;
						doneP = abs(lumaEndP) >= gradientScaled;
						if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
						if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
						doneNP = (!doneN) || (!doneP);
						if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
						if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
		/*--------------------------------------------------------------------------*/
						#if (FXAA_QUALITY_PS > 9)
						if(doneNP) {
								if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
								if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
								if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
								if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
								doneN = abs(lumaEndN) >= gradientScaled;
								doneP = abs(lumaEndP) >= gradientScaled;
								if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
								if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
								doneNP = (!doneN) || (!doneP);
								if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
								if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
		/*--------------------------------------------------------------------------*/
								#if (FXAA_QUALITY_PS > 10)
								if(doneNP) {
										if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
										if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
										if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
										if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
										doneN = abs(lumaEndN) >= gradientScaled;
										doneP = abs(lumaEndP) >= gradientScaled;
										if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
										if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
										doneNP = (!doneN) || (!doneP);
										if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
										if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
		/*--------------------------------------------------------------------------*/
										#if (FXAA_QUALITY_PS > 11)
										if(doneNP) {
												if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
												if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
												if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
												if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
												doneN = abs(lumaEndN) >= gradientScaled;
												doneP = abs(lumaEndP) >= gradientScaled;
												if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
												if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
												doneNP = (!doneN) || (!doneP);
												if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
												if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
		/*--------------------------------------------------------------------------*/
												#if (FXAA_QUALITY_PS > 12)
												if(doneNP) {
														if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
														if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
														if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
														if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
														doneN = abs(lumaEndN) >= gradientScaled;
														doneP = abs(lumaEndP) >= gradientScaled;
														if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
														if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
														doneNP = (!doneN) || (!doneP);
														if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
														if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
				#endif
		/*--------------------------------------------------------------------------*/
														}
														#endif
		/*--------------------------------------------------------------------------*/
												}
												#endif
		/*--------------------------------------------------------------------------*/
										}
										#endif
		/*--------------------------------------------------------------------------*/
								}
								#endif
		/*--------------------------------------------------------------------------*/
						}
						#endif
		/*--------------------------------------------------------------------------*/
				}
		/*--------------------------------------------------------------------------*/
				FxaaFloat dstN = posM.x - posN.x;
				FxaaFloat dstP = posP.x - posM.x;
				if(!horzSpan) dstN = posM.y - posN.y;
				if(!horzSpan) dstP = posP.y - posM.y;
		/*--------------------------------------------------------------------------*/
				FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
				FxaaFloat spanLength = (dstP + dstN);
				FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
				FxaaFloat spanLengthRcp = 1.0/spanLength;
		/*--------------------------------------------------------------------------*/
				FxaaBool directionN = dstN < dstP;
				FxaaFloat dst = min(dstN, dstP);
				FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
				FxaaFloat subpixG = subpixF * subpixF;
				FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
				FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
		/*--------------------------------------------------------------------------*/
				FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
				FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
				if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
				if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
				#if (FXAA_DISCARD == 1)
						return FxaaTexTop(tex, posM);
				#else
						return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
				#endif
		}
		/*==========================================================================*/
		#endif

		void main() {
			gl_FragColor = FxaaPixelShader(
				vUv,
				vec4(0.0),
				tDiffuse,
				tDiffuse,
				tDiffuse,
				resolution,
				vec4(0.0),
				vec4(0.0),
				vec4(0.0),
				0.75,
				0.166,
				0.0833,
				0.0,
				0.0,
				0.0,
				vec4(0.0)
			);

			// TODO avoid querying texture twice for same texel
			gl_FragColor.a = texture2D(tDiffuse, vUv).a;
		}`},tc={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;

		void main() {

			vUV = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			float dist = radius * 0.66;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height );
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				r = blendColour( r, colour.r, blending );
				g = blendColour( g, colour.g, blending );
				b = blendColour( b, colour.b, blending );

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				gl_FragColor = vec4( r, g, b, 1.0 );

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`};class wC extends Nn{constructor(e,t,n){super(),tc===void 0&&console.error("THREE.HalftonePass requires HalftoneShader"),this.uniforms=s0.clone(tc.uniforms),this.material=new ft({uniforms:this.uniforms,fragmentShader:tc.fragmentShader,vertexShader:tc.vertexShader}),this.uniforms.width.value=e,this.uniforms.height.value=t;for(const r in n)n.hasOwnProperty(r)&&this.uniforms.hasOwnProperty(r)&&(this.uniforms[r].value=n[r]);this.fsQuad=new Qr(this.material)}render(e,t,n){this.material.uniforms.tDiffuse.value=n.texture,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.uniforms.width.value=e,this.uniforms.height.value=t}}const Jo={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ne(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},nc={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ne(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},ku={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ne(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class MC extends Nn{constructor(e,t){super(),this.edgesRT=new Dt(e,t,{depthBuffer:!1,generateMipmaps:!1,minFilter:it,format:Pn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Dt(e,t,{depthBuffer:!1,generateMipmaps:!1,minFilter:it,format:lt}),this.weightsRT.texture.name="SMAAPass.weights";const n=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new vt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.format=Pn,this.areaTexture.minFilter=it,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new vt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=nt,this.searchTexture.minFilter=nt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,Jo===void 0&&console.error("THREE.SMAAPass relies on SMAAShader"),this.uniformsEdges=s0.clone(Jo.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new ft({defines:Object.assign({},Jo.defines),uniforms:this.uniformsEdges,vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader}),this.uniformsWeights=s0.clone(nc.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new ft({defines:Object.assign({},nc.defines),uniforms:this.uniformsWeights,vertexShader:nc.vertexShader,fragmentShader:nc.fragmentShader}),this.uniformsBlend=s0.clone(ku.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new ft({uniforms:this.uniformsBlend,vertexShader:ku.vertexShader,fragmentShader:ku.fragmentShader}),this.needsSwap=!1,this.fsQuad=new Qr(null)}render(e,t,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}class q3{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}dot4(e,t,n,r,s){return e[0]*t+e[1]*n+e[2]*r+e[3]*s}noise(e,t){let n,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,f=(l+c)*u,h=l-f,d=c-f,g=e-h,v=t-d;let x,p;g>v?(x=1,p=0):(x=0,p=1);const m=g-x+u,y=v-p+u,_=g-1+2*u,b=v-1+2*u,w=l&255,S=c&255,M=this.perm[w+this.perm[S]]%12,P=this.perm[w+x+this.perm[S+p]]%12,F=this.perm[w+1+this.perm[S+1]]%12;let T=.5-g*g-v*v;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[M],g,v));let D=.5-m*m-y*y;D<0?r=0:(D*=D,r=D*D*this.dot(this.grad3[P],m,y));let A=.5-_*_-b*b;return A<0?s=0:(A*=A,s=A*A*this.dot(this.grad3[F],_,b)),70*(n+r+s)}noise3d(e,t,n){let r,s,o,a;const l=.3333333333333333,c=(e+t+n)*l,u=Math.floor(e+c),f=Math.floor(t+c),h=Math.floor(n+c),d=1/6,g=(u+f+h)*d,v=u-g,x=f-g,p=h-g,m=e-v,y=t-x,_=n-p;let b,w,S,M,P,F;m>=y?y>=_?(b=1,w=0,S=0,M=1,P=1,F=0):m>=_?(b=1,w=0,S=0,M=1,P=0,F=1):(b=0,w=0,S=1,M=1,P=0,F=1):y<_?(b=0,w=0,S=1,M=0,P=1,F=1):m<_?(b=0,w=1,S=0,M=0,P=1,F=1):(b=0,w=1,S=0,M=1,P=1,F=0);const T=m-b+d,D=y-w+d,A=_-S+d,R=m-M+2*d,O=y-P+2*d,z=_-F+2*d,U=m-1+3*d,j=y-1+3*d,ie=_-1+3*d,ue=u&255,oe=f&255,xe=h&255,$=this.perm[ue+this.perm[oe+this.perm[xe]]]%12,re=this.perm[ue+b+this.perm[oe+w+this.perm[xe+S]]]%12,H=this.perm[ue+M+this.perm[oe+P+this.perm[xe+F]]]%12,X=this.perm[ue+1+this.perm[oe+1+this.perm[xe+1]]]%12;let J=.6-m*m-y*y-_*_;J<0?r=0:(J*=J,r=J*J*this.dot3(this.grad3[$],m,y,_));let ae=.6-T*T-D*D-A*A;ae<0?s=0:(ae*=ae,s=ae*ae*this.dot3(this.grad3[re],T,D,A));let de=.6-R*R-O*O-z*z;de<0?o=0:(de*=de,o=de*de*this.dot3(this.grad3[H],R,O,z));let ve=.6-U*U-j*j-ie*ie;return ve<0?a=0:(ve*=ve,a=ve*ve*this.dot3(this.grad3[X],U,j,ie)),32*(r+s+o+a)}noise4d(e,t,n,r){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,f,h,d,g;const v=(e+t+n+r)*l,x=Math.floor(e+v),p=Math.floor(t+v),m=Math.floor(n+v),y=Math.floor(r+v),_=(x+p+m+y)*c,b=x-_,w=p-_,S=m-_,M=y-_,P=e-b,F=t-w,T=n-S,D=r-M,A=P>F?32:0,R=P>T?16:0,O=F>T?8:0,z=P>D?4:0,U=F>D?2:0,j=T>D?1:0,ie=A+R+O+z+U+j,ue=o[ie][0]>=3?1:0,oe=o[ie][1]>=3?1:0,xe=o[ie][2]>=3?1:0,$=o[ie][3]>=3?1:0,re=o[ie][0]>=2?1:0,H=o[ie][1]>=2?1:0,X=o[ie][2]>=2?1:0,J=o[ie][3]>=2?1:0,ae=o[ie][0]>=1?1:0,de=o[ie][1]>=1?1:0,ve=o[ie][2]>=1?1:0,be=o[ie][3]>=1?1:0,Z=P-ue+c,C=F-oe+c,N=T-xe+c,V=D-$+c,Y=P-re+2*c,L=F-H+2*c,E=T-X+2*c,W=D-J+2*c,q=P-ae+3*c,Q=F-de+3*c,K=T-ve+3*c,he=D-be+3*c,le=P-1+4*c,pe=F-1+4*c,fe=T-1+4*c,G=D-1+4*c,ge=x&255,te=p&255,_e=m&255,k=y&255,ye=a[ge+a[te+a[_e+a[k]]]]%32,Oe=a[ge+ue+a[te+oe+a[_e+xe+a[k+$]]]]%32,Ie=a[ge+re+a[te+H+a[_e+X+a[k+J]]]]%32,ht=a[ge+ae+a[te+de+a[_e+ve+a[k+be]]]]%32,Le=a[ge+1+a[te+1+a[_e+1+a[k+1]]]]%32;let Ze=.6-P*P-F*F-T*T-D*D;Ze<0?u=0:(Ze*=Ze,u=Ze*Ze*this.dot4(s[ye],P,F,T,D));let xt=.6-Z*Z-C*C-N*N-V*V;xt<0?f=0:(xt*=xt,f=xt*xt*this.dot4(s[Oe],Z,C,N,V));let Qt=.6-Y*Y-L*L-E*E-W*W;Qt<0?h=0:(Qt*=Qt,h=Qt*Qt*this.dot4(s[Ie],Y,L,E,W));let Ut=.6-q*q-Q*Q-K*K-he*he;Ut<0?d=0:(Ut*=Ut,d=Ut*Ut*this.dot4(s[ht],q,Q,K,he));let ui=.6-le*le-pe*pe-fe*fe-G*G;return ui<0?g=0:(ui*=ui,g=ui*ui*this.dot4(s[Le],le,pe,fe,G)),27*(u+f+h+d+g)}}const $o={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new ne},cameraProjectionMatrix:{value:new we},cameraInverseProjectionMatrix:{value:new we},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );

			vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
			vec3 viewNormal = getViewNormal( vUv );

			vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
			vec3 random = texture2D( tNoise, vUv * noiseScale ).xyz;

			// compute matrix used to reorient a kernel vector

			vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
			vec3 bitangent = cross( viewNormal, tangent );
			mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

		 float occlusion = 0.0;

		 for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

				vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
				vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

				vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
				samplePointNDC /= samplePointNDC.w;

				vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

				float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
				float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
				float delta = sampleDepth - realDepth;

				if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

					occlusion += 1.0;

				}

			}

			occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

			gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

		}`},ic={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},rc={uniforms:{tDiffuse:{value:null},resolution:{value:new ne}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class qn extends Nn{constructor(e,t,n,r){super(),this.width=n!==void 0?n:512,this.height=r!==void 0?r:512,this.clear=!0,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernelSize=32,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=new Map,this.generateSampleKernel(),this.generateRandomKernelRotations();const s=new lp;s.type=Ba,this.beautyRenderTarget=new Dt(this.width,this.height,{minFilter:it,magFilter:it,format:lt}),this.normalRenderTarget=new Dt(this.width,this.height,{minFilter:nt,magFilter:nt,format:lt,depthTexture:s}),this.ssaoRenderTarget=new Dt(this.width,this.height,{minFilter:it,magFilter:it,format:lt}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),$o===void 0&&console.error("THREE.SSAOPass: The pass relies on SSAOShader."),this.ssaoMaterial=new ft({defines:Object.assign({},$o.defines),uniforms:s0.clone($o.uniforms),vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader,blending:Kt}),this.ssaoMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new gp,this.normalMaterial.blending=Kt,this.blurMaterial=new ft({defines:Object.assign({},rc.defines),uniforms:s0.clone(rc.uniforms),vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new ft({defines:Object.assign({},ic.defines),uniforms:s0.clone(ic.uniforms),vertexShader:ic.vertexShader,fragmentShader:ic.fragmentShader,blending:Kt}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ft({uniforms:s0.clone(Or.uniforms),vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:L8,blendDst:wf,blendEquation:Ei,blendSrcAlpha:P8,blendDstAlpha:wf,blendEquationAlpha:Ei}),this.fsQuad=new Qr(null),this.originalClearColor=new Se}dispose(){this.beautyRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),e.render(this.scene,this.camera),this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this.renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case qn.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case qn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=Kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=T8,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}renderPass(e,t,n,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,r,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,s=t.clearAlpha||s,r!=null&&(e.setClearColor(r),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.beautyRenderTarget.setSize(e,t),this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}generateSampleKernel(){const e=this.kernelSize,t=this.kernel;for(let n=0;n<e;n++){const r=new I;r.x=Math.random()*2-1,r.y=Math.random()*2-1,r.z=Math.random(),r.normalize();let s=n/e;s=j0.lerp(.1,1,s*s),r.multiplyScalar(s),t.push(r)}}generateRandomKernelRotations(){q3===void 0&&console.error("THREE.SSAOPass: The pass relies on SimplexNoise.");const n=new q3,r=4*4,s=new Float32Array(r*4);for(let o=0;o<r;o++){const a=o*4,l=Math.random()*2-1,c=Math.random()*2-1,u=0,f=n.noise3d(l,c,u);s[a]=f,s[a+1]=f,s[a+2]=f,s[a+3]=1}this.noiseTexture=new Ar(s,4,4,lt,X0),this.noiseTexture.wrapS=Rn,this.noiseTexture.wrapT=Rn}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const r=t.get(n);n.visible=r}),t.clear()}}qn.OUTPUT={Default:0,SSAO:1,Blur:2,Beauty:3,Depth:4,Normal:5};const Q3={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class co extends Nn{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new Se(0,0,0);const s={minFilter:it,magFilter:it,format:lt};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Dt(o,a,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Dt(o,a,s);d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const g=new Dt(o,a,s);g.texture.name="UnrealBloomPass.v"+h,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),o=Math.round(o/2),a=Math.round(a/2)}Q3===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=Q3;this.highPassUniforms=s0.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ft({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new ne(o,a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Or===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const f=Or;this.copyUniforms=s0.clone(f.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new ft({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Sf,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Se,this.oldClearAlpha=1,this.basic=new Z0,this.fsQuad=new Qr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.texSize.value=new ne(n,r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=co.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=co.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new ft({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ft({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}co.BlurDirectionX=new ne(1,0);co.BlurDirectionY=new ne(0,1);function $a(i,e,t){e instanceof Object&&Object.entries(e).forEach(([n,r])=>{t?t(i,n,r):i[n]=r})}function rr(i,e,t,n=!0,r){n&&$a(t,i[e],r);const s=A4(i,e);return je(s,o=>{$a(t,o,r)})}function TC(i,e,t=!0,n){t&&$a(e,i,n);const r=n0(i);return je(r,s=>{$a(e,s,n)},{deep:!0})}function el(i,e){e instanceof Object&&Object.entries(e).forEach(([t,n])=>{i[t]=n})}function AC(i,e,t){e.forEach(n=>{Vt(i,n,t,n)})}function Vt(i,e,t,n){const r=n||e,s=A4(i,e);s.value instanceof Object?(el(t[r],s.value),je(s,o=>{el(t[r],o)},{deep:!0})):(s.value!==void 0&&(t[r]=i[e]),je(s,o=>{t[r]=o}))}function P1(i,e=[]){const t={};return Object.entries(i).forEach(([n,r])=>{(!e||!e.includes(n))&&(t[n]=r)}),t}function EC(i,e,t){return t=t<0?0:t,t=t>1?1:t,i+(e-i)*t}function PC(i,e,t){return i<e?e:i>t?t:i}const LC="https://rawcdn.githack.com/emmelleppi/matcaps/9b36ccaaf0a24881a39062d05566c9e92be4aa0d",CC="0404E8_0404B5_0404CB_3333FC";function y6(i=CC,e=1024){const t=`${i}${RC(e)}.png`;return`${LC}/${e}/${t}`}function RC(i){switch(i){case 64:return"-64px";case 128:return"-128px";case 256:return"-256px";case 512:return"-512px";default:return""}}function FC(i){const{camera:e,resetPosition:t=new I(0,0,0)}=i,n=new jP,r=t.clone(),s=new Tn(new I(0,0,1),0);return{position:r,updatePosition:l=>{n.setFromCamera(l,e),e.getWorldDirection(s.normal),n.ray.intersectPlane(s,r)},intersect:(l,c,u=!1)=>(n.setFromCamera(l,e),n.intersectObjects(c,u))}}function _6(i){const{camera:e,domElement:t,intersectObjects:n,intersectRecursive:r=!1,touch:s=!0,resetOnEnd:o=!1,onEnter:a=()=>{},onMove:l=()=>{},onLeave:c=()=>{},onClick:u=()=>{},onIntersectEnter:f=()=>{},onIntersectOver:h=()=>{},onIntersectMove:d=()=>{},onIntersectLeave:g=()=>{},onIntersectClick:v=()=>{}}=i,x=new ne(0,0),p=new ne(0,0),m=FC({camera:e}),y=m.position,_={position:x,positionN:p,positionV3:y,intersectObjects:n,listeners:!1,addListeners:R,removeListeners:O,intersect:S};return _;function b(){x.set(0,0),p.set(0,0),y.set(0,0,0)}function w(z){let U,j;z.touches&&z.touches.length>0?(U=z.touches[0].clientX,j=z.touches[0].clientY):(U=z.clientX,j=z.clientY);const ie=t.getBoundingClientRect();x.x=U-ie.left,x.y=j-ie.top,p.x=x.x/ie.width*2-1,p.y=-(x.y/ie.height)*2+1,m.updatePosition(p)}function S(){const z=A();if(z.length){const U=m.intersect(p,z,r),j=[...z],ie=[];U.forEach(ue=>{var oe,xe,$;const{object:re}=ue,H=D(re);if(re instanceof Bc){if(ie.indexOf(re)!==-1)return;ie.push(re)}if(!re.userData.over){re.userData.over=!0;const J={type:"pointerover",over:!0,component:H,intersect:ue},ae=No(m0({},J),{type:"pointerenter"});h(J),f(ae),(oe=H==null?void 0:H.onPointerOver)==null||oe.call(H,J),(xe=H==null?void 0:H.onPointerEnter)==null||xe.call(H,ae)}const X={type:"pointermove",component:H,intersect:ue};d(X),($=H==null?void 0:H.onPointerMove)==null||$.call(H,X),j.splice(j.indexOf(re),1)}),j.forEach(ue=>{var oe,xe;const $=D(ue);if(ue.userData.over){ue.userData.over=!1;const re={type:"pointerover",over:!1,component:$},H=No(m0({},re),{type:"pointerleave"});h(re),g(H),(oe=$==null?void 0:$.onPointerOver)==null||oe.call($,re),(xe=$==null?void 0:$.onPointerLeave)==null||xe.call($,H)}})}}function M(z){w(z),a({type:"pointerenter",position:x,positionN:p,positionV3:y})}function P(z){w(z),l({type:"pointermove",position:x,positionN:p,positionV3:y}),S()}function F(z){w(z);const U=A();if(U.length){const j=m.intersect(p,U,r),ie=[];j.forEach(ue=>{var oe;const{object:xe}=ue,$=D(xe);if(xe instanceof Bc){if(ie.indexOf(xe)!==-1)return;ie.push(xe)}const re={type:"click",component:$,intersect:ue};v(re),(oe=$==null?void 0:$.onClick)==null||oe.call($,re)})}u({type:"click",position:x,positionN:p,positionV3:y})}function T(){o&&b(),c({type:"pointerleave"})}function D(z){if(z.userData.component)return z.userData.component;let U=z.parent;for(;U;){if(U.userData.component)return U.userData.component;U=U.parent}}function A(){return typeof n=="function"?n():n}function R(){t.addEventListener("mouseenter",M),t.addEventListener("mousemove",P),t.addEventListener("mouseleave",T),t.addEventListener("click",F),s&&(t.addEventListener("touchstart",M),t.addEventListener("touchmove",P),t.addEventListener("touchend",T)),_.listeners=!0}function O(){t.removeEventListener("mouseenter",M),t.removeEventListener("mousemove",P),t.removeEventListener("mouseleave",T),t.removeEventListener("click",F),t.removeEventListener("touchstart",M),t.removeEventListener("touchmove",P),t.removeEventListener("touchend",T),_.listeners=!1}}function IC(i){const e={antialias:!0,alpha:!1,autoClear:!0,orbitCtrl:!1,pointer:!1,resize:!1,width:300,height:150};i&&Object.entries(i).forEach(([y,_])=>{e[y]=_});const t={width:1,height:1,wWidth:1,wHeight:1,ratio:1},n=[],r=[],s=a(),o={config:e,renderer:s,size:t,init:l,dispose:v,render:f,renderC:h,setSize:p,addIntersectObject:d,removeIntersectObject:g};return o;function a(){const y=new rt(m0({canvas:e.canvas,antialias:e.antialias,alpha:e.alpha},e.params));return y.autoClear=e.autoClear,y}function l(){if(!o.scene)return console.error("Missing Scene"),!1;if(!o.camera)return console.error("Missing Camera"),!1;if(e.resize?(x(),window.addEventListener("resize",x)):e.width&&e.height&&p(e.width,e.height),c(),e.orbitCtrl){const y=new KP(o.camera,o.renderer.domElement);e.orbitCtrl instanceof Object&&Object.entries(e.orbitCtrl).forEach(([_,b])=>{y[_]=b}),u(()=>{y.update()}),o.cameraCtrl=y}return!0}function c(){let y={camera:o.camera,domElement:o.renderer.domElement,intersectObjects:r};e.pointer&&e.pointer instanceof Object&&(y=m0(m0({},y),e.pointer));const _=o.pointer=_6(y);(e.pointer||r.length)&&(_.addListeners(),y.intersectMode==="frame"&&u(_.intersect))}function u(y){n.push(y)}function f(){n.forEach(y=>y()),o.renderer.render(o.scene,o.camera)}function h(){n.forEach(y=>y()),o.composer.render()}function d(y){r.indexOf(y)===-1&&r.push(y),o.pointer&&!o.pointer.listeners&&o.pointer.addListeners()}function g(y){const _=r.indexOf(y);_!==-1&&r.splice(_,1),o.pointer&&!e.pointer&&r.length===0&&o.pointer.removeListeners()}function v(){window.removeEventListener("resize",x),o.pointer&&o.pointer.removeListeners(),o.cameraCtrl&&o.cameraCtrl.dispose(),o.renderer&&o.renderer.dispose()}function x(){var y;if(e.resize==="window")p(window.innerWidth,window.innerHeight);else{const _=o.renderer.domElement.parentNode;_&&p(_.clientWidth,_.clientHeight)}(y=e.onResize)==null||y.call(e,t)}function p(y,_){t.width=y,t.height=_,t.ratio=y/_,o.renderer.setSize(y,_,!1);const b=o.camera;if(b.type==="PerspectiveCamera"){const w=b;w.aspect=t.ratio,w.updateProjectionMatrix()}if(b.type==="OrthographicCamera"){const w=b;t.wWidth=w.right-w.left,t.wHeight=w.top-w.bottom}else{const w=m();t.wWidth=w[0],t.wHeight=w[1]}}function m(){const y=o.camera,_=y.fov*Math.PI/180,b=2*Math.tan(_/2)*Math.abs(y.position.z);return[b*y.aspect,b]}}const On=Symbol("Renderer");var DC=Ae({name:"Renderer",props:{params:{type:Object,default:()=>({})},antialias:Boolean,alpha:Boolean,autoClear:{type:Boolean,default:!0},orbitCtrl:{type:[Boolean,Object],default:!1},pointer:{type:[Boolean,Object],default:!1},resize:{type:[Boolean,String],default:!1},shadow:Boolean,width:String,height:String,pixelRatio:Number,xr:Boolean,props:{type:Object,default:()=>({})},onReady:Function},inheritAttrs:!1,setup(i,{attrs:e}){const t=[],n=[],r=[],s=[],o=[],a=document.createElement("canvas");Object.entries(e).forEach(([f,h])=>{const d=f.match(/^on([A-Z][a-zA-Z]*)$/);d?a.addEventListener(d[1].toLowerCase(),h):a.setAttribute(f,h)});const l={canvas:a,params:i.params,antialias:i.antialias,alpha:i.alpha,autoClear:i.autoClear,orbitCtrl:i.orbitCtrl,pointer:i.pointer,resize:i.resize};i.width&&(l.width=parseInt(i.width)),i.height&&(l.height=parseInt(i.height));const c=IC(l);rr(i,"props",c.renderer),_m(()=>{i.pixelRatio&&c.renderer.setPixelRatio(i.pixelRatio)});const u=()=>{};return{canvas:a,three:c,renderer:c.renderer,size:c.size,renderFn:u,raf:!0,initCallbacks:t,mountedCallbacks:n,beforeRenderCallbacks:r,afterRenderCallbacks:s,resizeCallbacks:o}},computed:{camera:{get:function(){return this.three.camera},set:function(i){this.three.camera=i}},scene:{get:function(){return this.three.scene},set:function(i){this.three.scene=i}},composer:{get:function(){return this.three.composer},set:function(i){this.three.composer=i}}},provide(){return{[On]:this}},mounted(){var i;this.$el.parentNode.insertBefore(this.canvas,this.$el),this.three.init()&&(this.three.pointer&&(this.$pointer=this.three.pointer),this.three.config.onResize=e=>{this.resizeCallbacks.forEach(t=>t({type:"resize",renderer:this,size:e}))},this.shadow&&(this.renderer.shadowMap.enabled=!0),this.renderFn=this.three.composer?this.three.renderC:this.three.render,this.initCallbacks.forEach(e=>e({type:"init",renderer:this})),(i=this.onReady)==null||i.call(this,this),this.xr?(this.renderer.xr.enabled=!0,this.renderer.setAnimationLoop(this.render)):requestAnimationFrame(this.renderLoop)),this.mountedCallbacks.forEach(e=>e({type:"mounted",renderer:this}))},beforeUnmount(){this.canvas.remove(),this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[],this.raf=!1,this.three.dispose()},methods:{onInit(i){this.addListener("init",i)},onMounted(i){this.addListener("mounted",i)},onBeforeRender(i){this.addListener("beforerender",i)},offBeforeRender(i){this.removeListener("beforerender",i)},onAfterRender(i){this.addListener("afterrender",i)},offAfterRender(i){this.removeListener("afterrender",i)},onResize(i){this.addListener("resize",i)},offResize(i){this.removeListener("resize",i)},addListener(i,e){this.getCallbacks(i).push(e)},removeListener(i,e){const t=this.getCallbacks(i),n=t.indexOf(e);n!==-1&&t.splice(n,1)},getCallbacks(i){return i==="init"?this.initCallbacks:i==="mounted"?this.mountedCallbacks:i==="beforerender"?this.beforeRenderCallbacks:i==="afterrender"?this.afterRenderCallbacks:this.resizeCallbacks},render(i){this.beforeRenderCallbacks.forEach(e=>e({type:"beforerender",renderer:this,time:i})),this.renderFn({renderer:this,time:i}),this.afterRenderCallbacks.forEach(e=>e({type:"afterrender",renderer:this,time:i}))},renderLoop(i){this.raf&&requestAnimationFrame(this.renderLoop),this.render(i)}},render(){return this.$slots.default?this.$slots.default():[]},__hmrId:"Renderer"}),b6=Ae({props:{props:{type:Object,default:()=>({})}},render(){return this.$slots.default?this.$slots.default():[]}});function qc(i,e,t,n=!0){i[e]=t,n&&i.updateProjectionMatrix()}var NC=Ae({extends:b6,name:"OrthographicCamera",props:{left:{type:Number,default:-1},right:{type:Number,default:1},top:{type:Number,default:1},bottom:{type:Number,default:-1},near:{type:Number,default:.1},far:{type:Number,default:2e3},zoom:{type:Number,default:1},position:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(i){const e=b0(On);if(!e){console.error("Renderer not found");return}const t=new $i(i.left,i.right,i.top,i.bottom,i.near,i.far);return e.camera=t,Vt(i,"position",t),rr(i,"props",t,!0,qc),["left","right","top","bottom","near","far","zoom"].forEach(n=>{je(()=>i[n],r=>{qc(t,n,r)})}),{renderer:e,camera:t}},__hmrId:"OrthographicCamera"}),Z3=Ae({extends:b6,name:"PerspectiveCamera",props:{aspect:{type:Number,default:1},far:{type:Number,default:2e3},fov:{type:Number,default:50},near:{type:Number,default:.1},position:{type:Object,default:()=>({x:0,y:0,z:0})},lookAt:{type:Object,default:null}},setup(i){var e;const t=b0(On);if(!t){console.error("Renderer not found");return}const n=new $t(i.fov,i.aspect,i.near,i.far);return t.camera=n,Vt(i,"position",n),i.lookAt&&n.lookAt((e=i.lookAt.x)!=null?e:0,i.lookAt.y,i.lookAt.z),je(()=>i.lookAt,r=>{var s;n.lookAt((s=r.x)!=null?s:0,r.y,r.z)},{deep:!0}),rr(i,"props",n,!0,qc),["aspect","far","fov","near"].forEach(r=>{je(()=>i[r],s=>{qc(n,r,s)})}),{renderer:t,camera:n}},__hmrId:"PerspectiveCamera"});const Oh=Symbol("Scene");var OC=Ae({name:"Scene",props:{background:[String,Number,Object]},setup(i){const e=b0(On),t=new Q9;if(!e){console.error("Renderer not found");return}e.scene=t,Pr(Oh,t);const n=o=>{!o||(typeof o=="string"||typeof o=="number"?t.background instanceof Se?t.background.set(o):t.background=new Se(o):o instanceof vt&&(t.background=o))};return n(i.background),je(()=>i.background,n),{scene:t,add:o=>{t.add(o)},remove:o=>{t.remove(o)}}},render(){return this.$slots.default?this.$slots.default():[]},__hmrId:"Scene"});const zC={onPointerEnter:Function,onPointerOver:Function,onPointerMove:Function,onPointerLeave:Function,onPointerDown:Function,onPointerUp:Function,onClick:Function};var sr=Ae({name:"Object3D",inject:{renderer:On,scene:Oh},emits:["created","ready"],props:m0({position:{type:Object,default:()=>({x:0,y:0,z:0})},rotation:{type:Object,default:()=>({x:0,y:0,z:0})},scale:{type:Object,default:()=>({x:1,y:1,z:1,order:"XYZ"})},lookAt:{type:Object,default:null},userData:{type:Object,default:()=>({})},visible:{type:Boolean,default:!0},props:{type:Object,default:()=>({})},disableAdd:{type:Boolean,default:!1},disableRemove:{type:Boolean,default:!1}},zC),setup(){return{}},created(){this.renderer||console.error("Missing parent Renderer"),this.scene||console.error("Missing parent Scene")},unmounted(){this.disableRemove||this.removeFromParent(),this.o3d&&this.renderer&&this.renderer.three.removeIntersectObject(this.o3d)},methods:{initObject3D(i){var e;this.o3d=i,i.userData.component=this,(this.onPointerEnter||this.onPointerOver||this.onPointerMove||this.onPointerLeave||this.onPointerDown||this.onPointerUp||this.onClick)&&this.renderer&&this.renderer.three.addIntersectObject(i),Vt(this,"position",i),Vt(this,"rotation",i),Vt(this,"scale",i),Vt(this,"userData",i.userData),Vt(this,"visible",i),rr(this,"props",i),this.$emit("created",i),this.lookAt&&i.lookAt((e=this.lookAt.x)!=null?e:0,this.lookAt.y,this.lookAt.z),je(()=>this.lookAt,t=>{var n;i.lookAt((n=t.x)!=null?n:0,t.y,t.z)},{deep:!0}),this.parent=this.getParent(),this.disableAdd||(this.addToParent()?this.$emit("ready",this):console.error("Missing parent (Scene, Group...)"))},getParent(){let i=this.$parent;if(!i){const e=rg();e&&e.parent&&(i=e.parent.ctx)}for(;i;){if(i.add)return i;i=i.$parent}},addToParent(i){const e=i||this.o3d;return this.parent?(this.parent.add(e),!0):!1},removeFromParent(i){const e=i||this.o3d;return this.parent?(this.parent.remove(e),!0):!1},add(i){var e;(e=this.o3d)==null||e.add(i)},remove(i){var e;(e=this.o3d)==null||e.remove(i)}},render(){return this.$slots.default?this.$slots.default():[]},__hmrId:"Object3D"}),BC=Ae({name:"Group",extends:sr,setup(){return{group:new dn}},created(){this.initObject3D(this.group)},__hmrId:"Group"});const ea=()=>{};var UC=Ae({name:"Raycaster",props:{onPointerEnter:{type:Function,default:ea},onPointerOver:{type:Function,default:ea},onPointerMove:{type:Function,default:ea},onPointerLeave:{type:Function,default:ea},onClick:{type:Function,default:ea},intersectMode:{type:String,default:"move"},intersectRecursive:{type:Boolean,default:!1}},setup(){return{renderer:b0(On)}},mounted(){if(!this.renderer){console.error("Renderer not found");return}const i=this.renderer;this.renderer.onMounted(()=>{!i.camera||(this.pointer=_6({camera:i.camera,domElement:i.canvas,intersectObjects:()=>i.scene?i.scene.children:[],intersectRecursive:this.intersectRecursive,onIntersectEnter:this.onPointerEnter,onIntersectOver:this.onPointerOver,onIntersectMove:this.onPointerMove,onIntersectLeave:this.onPointerLeave,onIntersectClick:this.onClick}),this.pointer.addListeners(),this.intersectMode==="frame"&&i.onBeforeRender(this.pointer.intersect))})},unmounted(){var i;this.pointer&&(this.pointer.removeListeners(),(i=this.renderer)==null||i.offBeforeRender(this.pointer.intersect))},render(){return[]},__hmrId:"Raycaster"}),kC=Ae({extends:sr,props:{cubeRTSize:{type:Number,default:256},cubeCameraNear:{type:Number,default:.1},cubeCameraFar:{type:Number,default:2e3},autoUpdate:Boolean,hideMeshes:{type:Array,default:()=>[]}},setup(i){const e=b0(On);if(!e||!e.scene)return console.error("Missing Renderer / Scene"),{};const t=e.renderer,n=e.scene,r=new W9(i.cubeRTSize,{format:Pn,generateMipmaps:!0,minFilter:Hr}),s=new p1(i.cubeCameraNear,i.cubeCameraFar,r),o=()=>{i.hideMeshes.forEach(a=>{a.visible=!1}),s.update(t,n),i.hideMeshes.forEach(a=>{a.visible=!0})};return i.autoUpdate?(e.onBeforeRender(o),f9(()=>{e.offBeforeRender(o)})):e.onMounted(o),{cubeRT:r,cubeCamera:s,updateRT:o}},created(){this.cubeCamera&&this.initObject3D(this.cubeCamera)},render(){return[]},__hmrId:"CubeCamera"});const fl=Symbol("Mesh"),Ro=Ae({name:"Mesh",extends:sr,props:{castShadow:Boolean,receiveShadow:Boolean},setup(){return{}},provide(){return{[fl]:this}},mounted(){!this.mesh&&!this.loading&&this.initMesh()},methods:{initMesh(){const i=new Ot(this.geometry,this.material);Vt(this,"castShadow",i),Vt(this,"receiveShadow",i),this.mesh=i,this.initObject3D(i)},createGeometry(){},addGeometryWatchers(i){Object.keys(i).forEach(e=>{je(()=>this[e],()=>{this.refreshGeometry()})})},setGeometry(i){this.geometry=i,this.mesh&&(this.mesh.geometry=i)},setMaterial(i){this.material=i,this.mesh&&(this.mesh.material=i)},refreshGeometry(){const i=this.geometry;this.createGeometry(),this.mesh&&this.geometry&&(this.mesh.geometry=this.geometry),i==null||i.dispose()}},unmounted(){this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose()},__hmrId:"Mesh"});function p0(i,e,t){return Ae({name:i,extends:Ro,props:e,created(){this.createGeometry(),this.addGeometryWatchers(e)},methods:{createGeometry(){this.geometry=t(this)}}})}const zh=Ae({emits:["created"],props:{rotateX:Number,rotateY:Number,rotateZ:Number,attributes:{type:Array,default:()=>[]}},inject:{mesh:fl},setup(){return{}},created(){if(!this.mesh){console.error("Missing parent Mesh");return}this.createGeometry(),this.rotateGeometry(),this.geometry&&this.mesh.setGeometry(this.geometry),Object.keys(this.$props).forEach(i=>{je(()=>this[i],this.refreshGeometry)})},unmounted(){var i;(i=this.geometry)==null||i.dispose()},methods:{createGeometry(){const i={},e=new Re;this.attributes.forEach(t=>{if(t.name&&t.itemSize&&t.array){const n=i[t.name]=new Tt(t.array,t.itemSize,t.normalized);e.setAttribute(t.name,n)}}),e.computeBoundingBox(),e.userData.component=this,this.geometry=e,this.$emit("created",e)},rotateGeometry(){!this.geometry||(this.rotateX&&this.geometry.rotateX(this.rotateX),this.rotateY&&this.geometry.rotateY(this.rotateY),this.rotateZ&&this.geometry.rotateZ(this.rotateZ))},refreshGeometry(){const i=this.geometry;this.createGeometry(),this.rotateGeometry(),this.geometry&&this.mesh&&this.mesh.setGeometry(this.geometry),i==null||i.dispose()}},render(){return[]}});function e0(i,e,t){return Ae({name:i,extends:zh,props:e,methods:{createGeometry(){this.geometry=t(this),this.geometry.userData.component=this,this.$emit("created",this.geometry)}}})}const S6={size:Number,width:{type:Number,default:1},height:{type:Number,default:1},depth:{type:Number,default:1},widthSegments:{type:Number,default:1},heightSegments:{type:Number,default:1},depthSegments:{type:Number,default:1}};function w6(i){return i.size?new Ur(i.size,i.size,i.size,i.widthSegments,i.heightSegments,i.depthSegments):new Ur(i.width,i.height,i.depth,i.widthSegments,i.heightSegments,i.depthSegments)}var GC=e0("BoxGeometry",S6,w6);const M6={radius:{type:Number,default:1},segments:{type:Number,default:8},thetaStart:{type:Number,default:0},thetaLength:{type:Number,default:Math.PI*2}};function T6(i){return new J9(i.radius,i.segments,i.thetaStart,i.thetaLength)}var HC=e0("CircleGeometry",M6,T6);const A6={radius:{type:Number,default:1},height:{type:Number,default:1},radialSegments:{type:Number,default:8},heightSegments:{type:Number,default:1},openEnded:{type:Boolean,default:!1},thetaStart:{type:Number,default:0},thetaLength:{type:Number,default:Math.PI*2}};function E6(i){return new $9(i.radius,i.height,i.radialSegments,i.heightSegments,i.openEnded,i.thetaStart,i.thetaLength)}var VC=e0("ConeGeometry",A6,E6);const P6={radiusTop:{type:Number,default:1},radiusBottom:{type:Number,default:1},height:{type:Number,default:1},radialSegments:{type:Number,default:8},heightSegments:{type:Number,default:1},openEnded:{type:Boolean,default:!1},thetaStart:{type:Number,default:0},thetaLength:{type:Number,default:Math.PI*2}};function L6(i){return new S1(i.radiusTop,i.radiusBottom,i.height,i.radialSegments,i.heightSegments,i.openEnded,i.thetaStart,i.thetaLength)}var WC=e0("CylinderGeometry",P6,L6);const C6={radius:{type:Number,default:1},detail:{type:Number,default:0}};function R6(i){return new eh(i.radius,i.detail)}var XC=e0("DodecahedronGeometry",C6,R6);const jC={shapes:{type:[Object,Array]},options:{type:Object}};function YC(i){return new tr(i.shapes,i.options)}var qC=e0("ExtrudeGeometry",jC,YC);const F6={radius:{type:Number,default:1},detail:{type:Number,default:0}};function I6(i){return new ah(i.radius,i.detail)}var QC=e0("IcosahedronGeometry",F6,I6);const D6={points:Array,segments:{type:Number,default:12},phiStart:{type:Number,default:0},phiLength:{type:Number,default:Math.PI*2}};function N6(i){return new lh(i.points,i.segments,i.phiStart,i.phiLength)}var ZC=e0("LatheGeometry",D6,N6);const O6={radius:{type:Number,default:1},detail:{type:Number,default:0}};function z6(i){return new ch(i.radius,i.detail)}var KC=e0("OctahedronGeometry",O6,z6);const B6={width:{type:Number,default:1},height:{type:Number,default:1},widthSegments:{type:Number,default:1},heightSegments:{type:Number,default:1}};function U6(i){return new sl(i.width,i.height,i.widthSegments,i.heightSegments)}var JC=e0("PlaneGeometry",B6,U6);const k6={vertices:Array,indices:Array,radius:{type:Number,default:1},detail:{type:Number,default:0}};function G6(i){return new jr(i.vertices,i.indices,i.radius,i.detail)}var $C=e0("PolyhedronGeometry",k6,G6);const H6={innerRadius:{type:Number,default:.5},outerRadius:{type:Number,default:1},thetaSegments:{type:Number,default:8},phiSegments:{type:Number,default:1},thetaStart:{type:Number,default:0},thetaLength:{type:Number,default:Math.PI*2}};function V6(i){return new uh(i.innerRadius,i.outerRadius,i.thetaSegments,i.phiSegments,i.thetaStart,i.thetaLength)}var eR=e0("RingGeometry",H6,V6);const W6={radius:{type:Number,default:1},widthSegments:{type:Number,default:12},heightSegments:{type:Number,default:12},phiStart:{type:Number,default:0},phiLength:{type:Number,default:Math.PI*2},thetaStart:{type:Number,default:0},thetaLength:{type:Number,default:Math.PI}};function X6(i){return new fh(i.radius,i.widthSegments,i.heightSegments,i.phiStart,i.phiLength,i.thetaStart,i.thetaLength)}var tR=e0("SphereGeometry",W6,X6);const nR={shapes:{type:[Object,Array]},curveSegments:{type:Number}};function iR(i){return new E1(i.shapes,i.curveSegments)}var rR=e0("ShapeGeometry",nR,iR);const j6={radius:{type:Number,default:1},detail:{type:Number,default:0}};function Y6(i){return new hh(i.radius,i.detail)}var sR=e0("TetrahedronGeometry",j6,Y6);const q6={radius:{type:Number,default:1},tube:{type:Number,default:.4},radialSegments:{type:Number,default:8},tubularSegments:{type:Number,default:6},arc:{type:Number,default:Math.PI*2}};function Q6(i){return new dh(i.radius,i.tube,i.radialSegments,i.tubularSegments,i.arc)}var oR=e0("TorusGeometry",q6,Q6);const Z6={radius:{type:Number,default:1},tube:{type:Number,default:.4},tubularSegments:{type:Number,default:64},radialSegments:{type:Number,default:8},p:{type:Number,default:2},q:{type:Number,default:3}};function K6(i){return new ph(i.radius,i.tube,i.tubularSegments,i.radialSegments,i.p,i.q)}var aR=e0("TorusKnotGeometry",Z6,K6);const Xf={points:Array,path:A0,tubularSegments:{type:Number,default:64},radius:{type:Number,default:1},radialSegments:{type:Number,default:8},closed:{type:Boolean,default:!1}};function J6(i){let e;return i.points?e=new M1(i.points):i.path?e=i.path:console.error("Missing path curve or points."),new mh(e,i.tubularSegments,i.radius,i.radiusSegments,i.closed)}var lR=Ae({extends:zh,props:Xf,methods:{createGeometry(){this.geometry=J6(this)},updatePoints(i){$6(this.geometry,i)}}});function $6(i,e){const t=new M1(e),{radialSegments:n,radius:r,tubularSegments:s,closed:o}=i.parameters,a=t.computeFrenetFrames(s,o);i.tangents=a.tangents,i.normals=a.normals,i.binormals=a.binormals,i.parameters.path=t;const l=i.getAttribute("position"),c=i.getAttribute("normal"),u=new I,f=new I;for(let d=0;d<s;d++)h(d);h(s),i.attributes.position.needsUpdate=!0,i.attributes.normal.needsUpdate=!0;function h(d){t.getPointAt(d/s,f);const g=a.normals[d],v=a.binormals[d];for(let x=0;x<=n;x++){const p=x/n*Math.PI*2,m=Math.sin(p),y=-Math.cos(p);u.x=y*g.x+m*v.x,u.y=y*g.y+m*v.y,u.z=y*g.z+m*v.z,u.normalize();const _=d*(n+1)+x;c.setXYZ(_,u.x,u.y,u.z),l.setXYZ(_,f.x+r*u.x,f.y+r*u.y,f.z+r*u.z)}}}var Fo=Ae({extends:sr,name:"Light",props:{color:{type:String,default:"#ffffff"},intensity:{type:Number,default:1},castShadow:{type:Boolean,default:!1},shadowMapSize:{type:Object,default:()=>({x:512,y:512})},shadowCamera:{type:Object,default:()=>({})}},setup(){return{}},unmounted(){(this.light instanceof ro||this.light instanceof so)&&this.removeFromParent(this.light.target)},methods:{initLight(i){this.light=i,i.shadow&&(i.castShadow=this.castShadow,el(i.shadow.mapSize,this.shadowMapSize),el(i.shadow.camera,this.shadowCamera)),["color","intensity","castShadow"].forEach(e=>{je(()=>this[e],t=>{e==="color"?i.color.set(t):i[e]=t})}),this.initObject3D(i),(i instanceof ro||i instanceof so)&&(Vt(this,"target",i.target,"position"),this.addToParent(i.target))}},__hmrId:"Light"}),cR=Ae({extends:Fo,created(){this.initLight(new xh(this.color,this.intensity))},__hmrId:"AmbientLight"}),uR=Ae({extends:Fo,props:{target:{type:Object,default:()=>({x:0,y:0,z:0})}},created(){this.initLight(new so(this.color,this.intensity))},__hmrId:"DirectionalLight"}),fR=Ae({extends:Fo,props:{groundColor:{type:String,default:"#444444"}},created(){const i=new Sp(this.color,this.groundColor,this.intensity);je(()=>this.groundColor,e=>{i.groundColor.set(e)}),this.initLight(i)},__hmrId:"HemisphereLight"}),hR=Ae({extends:Fo,props:{distance:{type:Number,default:0},decay:{type:Number,default:1}},created(){this.initLight(new Ya(this.color,this.intensity,this.distance,this.decay))},__hmrId:"PointLight"}),dR=Ae({extends:Fo,props:{width:{type:Number,default:10},height:{type:Number,default:10},helper:Boolean},created(){JP.init();const i=new Ap(this.color,this.intensity,this.width,this.height);if(["width","height"].forEach(t=>{je(()=>this[t],n=>{i[t]=n})}),this.helper){const t=new $P(i);i.add(t)}this.initLight(i)},__hmrId:"RectAreaLight"}),pR=Ae({extends:Fo,props:{angle:{type:Number,default:Math.PI/3},decay:{type:Number,default:1},distance:{type:Number,default:0},penumbra:{type:Number,default:0},target:Object},created(){const i=new ro(this.color,this.intensity,this.distance,this.angle,this.penumbra,this.decay);["angle","decay","distance","penumbra"].forEach(t=>{je(()=>this[t],n=>{i[t]=n})}),this.initLight(i)},__hmrId:"SpotLight"});const Bh=Symbol("Material"),Uh=Ae({emits:["created"],props:{color:{type:String,default:"#ffffff"},props:{type:Object,default:()=>({})}},inject:{mesh:fl},setup(){return{}},provide(){return{[Bh]:this}},created(){if(!this.mesh){console.error("Missing parent Mesh");return}if(this.createMaterial){const i=this.material=this.createMaterial();je(()=>this.color,e=>{i.color.set(e)}),rr(this,"props",i,!1,this.setProp),this.$emit("created",i),this.mesh.setMaterial(i)}},unmounted(){var i;(i=this.material)==null||i.dispose()},methods:{getMaterialParams(){return m0(m0({},P1(this.$props,["props"])),this.props)},setProp(i,e,t,n=!1){const r=i[e];r instanceof Se?r.set(t):i[e]=t,i.needsUpdate=n},setTexture(i,e="map"){this.setProp(this.material,e,i,!0)}},render(){return this.$slots.default?this.$slots.default():[]},__hmrId:"Material"});function zn(i,e,t){return Ae({name:i,extends:Uh,props:e,methods:{createMaterial(){return t(this.getMaterialParams())}}})}const mR=zn("BasicMaterial",{props:{type:Object,default:()=>({})}},i=>new Z0(i)),gR=zn("LambertMaterial",{props:{type:Object,default:()=>({})}},i=>new gh(i)),vR=zn("PhongMaterial",{props:{type:Object,default:()=>({})}},i=>new ba(i)),xR=zn("PhysicalMaterial",{props:{type:Object,default:()=>({})}},i=>new nr(i)),yR=zn("PointsMaterial",{props:{type:Object,default:()=>({})}},i=>new b1(i)),_R=zn("ShadowMaterial",{color:{type:String,default:"#000000"},props:{type:Object,default:()=>({})}},i=>new pp(i)),bR=zn("StandardMaterial",{props:{type:Object,default:()=>({})}},i=>new _o(i)),SR=zn("ToonMaterial",{props:{type:Object,default:()=>({})}},i=>new mp(i));var wR=zn("MatcapMaterial",{src:String,name:{type:String,default:"0404E8_0404B5_0404CB_3333FC"}},i=>{const e=i.src?i.src:y6(i.name),t=P1(i,["src","name"]);return t.matcap=new Yr().load(e),new vp(t)});const MR=`
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`,TR=`
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(vUv.x, vUv.y, 0., 1.0);
  }
`;var AR=zn("ShaderMaterial",{props:{type:Object,default:()=>({uniforms:{},vertexShader:MR,fragmentShader:TR})}},i=>new ft(P1(i,["color"])));function ER(i,e,t){return i.split(e).join(t)}const PR=Fe.meshphong_frag.slice(0,Fe.meshphong_frag.indexOf("void main() {")),LR=Fe.meshphong_frag.slice(Fe.meshphong_frag.indexOf("void main() {")),CR={uniforms:s0.merge([ln.phong.uniforms,{thicknessColor:{value:new Se(16777215)},thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}}]),vertexShader:`
    #define USE_UV
    ${Fe.meshphong_vert}
  `,fragmentShader:`
    #define USE_UV
    #define SUBSURFACE

    ${PR}

    uniform float thicknessPower;
    uniform float thicknessScale;
    uniform float thicknessDistortion;
    uniform float thicknessAmbient;
    uniform float thicknessAttenuation;
    uniform vec3 thicknessColor;

    void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in GeometricContext geometry, inout ReflectedLight reflectedLight) {
      #ifdef USE_COLOR
        vec3 thickness = vColor * thicknessColor;
      #else
        vec3 thickness = thicknessColor;
      #endif
      vec3 scatteringHalf = normalize(directLight.direction + (geometry.normal * thicknessDistortion));
      float scatteringDot = pow(saturate(dot(geometry.viewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
      vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * thickness;
      reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
    }
  `+LR.replace("#include <lights_fragment_begin>",ER(Fe.lights_fragment_begin,"RE_Direct( directLight, geometry, material, reflectedLight );",`
        RE_Direct( directLight, geometry, material, reflectedLight );
        #if defined( SUBSURFACE ) && defined( USE_UV )
          RE_Direct_Scattering(directLight, vUv, geometry, reflectedLight);
        #endif
      `))};var RR=Ae({extends:Uh,props:{uniforms:{type:Object,default:()=>({diffuse:"#ffffff",thicknessColor:"#ffffff",thicknessDistortion:.4,thicknessAmbient:.01,thicknessAttenuation:.7,thicknessPower:2,thicknessScale:4})}},methods:{createMaterial(){const i=CR,e=s0.clone(i.uniforms);return rr(this,"uniforms",e,!0,(n,r,s)=>{const o=n[r].value;o instanceof Se?o.set(s):n[r].value=s}),new ft(No(m0(No(m0({},i),{lights:!0}),this.props),{uniforms:e}))}}}),kh=Ae({inject:{material:Bh},props:{name:{type:String,default:"map"},uniform:String,src:String,onLoad:Function,onProgress:Function,onError:Function,props:{type:Object,default:()=>({})}},setup(){return{}},created(){this.refreshTexture(),je(()=>this.src,this.refreshTexture)},unmounted(){var i,e;(i=this.material)==null||i.setTexture(null,this.name),(e=this.texture)==null||e.dispose()},methods:{createTexture(){if(!!this.src)return new Yr().load(this.src,this.onLoaded,this.onProgress,this.onError)},initTexture(){!this.texture||(rr(this,"props",this.texture),this.material&&(this.material.setTexture(this.texture,this.name),this.material.material instanceof ft&&this.uniform&&(this.material.material.uniforms[this.uniform]={value:this.texture})))},refreshTexture(){var i;(i=this.texture)==null||i.dispose(),this.texture=this.createTexture(),this.initTexture()},onLoaded(i){var e;(e=this.onLoad)==null||e.call(this,i)}},render(){return[]}}),FR=Ae({extends:kh,props:{name:{type:String,default:"envMap"},path:{type:String,required:!0},urls:{type:Array,default:()=>["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]},props:{type:Object,default:()=>({mapping:mo})}},created(){je(()=>this.path,this.refreshTexture),je(()=>this.urls,this.refreshTexture)},methods:{createTexture(){return new bp().setPath(this.path).load(this.urls,this.onLoaded,this.onProgress,this.onError)}}}),IR=Ae({extends:kh,props:{videoId:{type:String,required:!0}},created(){je(()=>this.videoId,this.refreshTexture)},methods:{createTexture(){const i=document.getElementById(this.videoId);return new ap(i)}}}),DR=p0("Box",S6,w6),NR=p0("Circle",M6,T6),OR=p0("Cone",A6,E6),zR=p0("Cylinder",P6,L6),BR=p0("Dodecahedron",C6,R6),UR=p0("Icosahedron",F6,I6),kR=p0("Lathe",D6,N6),GR=p0("Octahedron",O6,z6),HR=p0("Plane",B6,U6),VR=p0("Polyhedron",k6,G6),WR=p0("Ring",H6,V6),XR=p0("Sphere",W6,X6),jR=p0("Tetrahedron",j6,Y6);const YR={text:{type:String,required:!0,default:"Text"},fontSrc:{type:String,required:!0},size:{type:Number,default:80},height:{type:Number,default:5},depth:{type:Number,default:1},curveSegments:{type:Number,default:12},bevelEnabled:{type:Boolean,default:!1},bevelThickness:{type:Number,default:10},bevelSize:{type:Number,default:8},bevelOffset:{type:Number,default:0},bevelSegments:{type:Number,default:5},align:{type:[Boolean,String],default:!1}};var qR=Ae({extends:Ro,props:YR,setup(){return{}},created(){if(!this.fontSrc){console.error('Missing required prop: "font-src"');return}["text","size","height","curveSegments","bevelEnabled","bevelThickness","bevelSize","bevelOffset","bevelSegments","align"].forEach(t=>{je(()=>this[t],()=>{this.font&&this.refreshGeometry()})});const e=new tL;this.loading=!0,e.load(this.fontSrc,t=>{this.loading=!1,this.font=t,this.createGeometry(),this.initMesh()})},methods:{createGeometry(){this.geometry=new eL(this.text,{font:this.font,size:this.size,height:this.height,depth:this.depth,curveSegments:this.curveSegments,bevelEnabled:this.bevelEnabled,bevelThickness:this.bevelThickness,bevelSize:this.bevelSize,bevelOffset:this.bevelOffset,bevelSegments:this.bevelSegments}),this.align==="center"&&this.geometry.center()}}}),QR=p0("Torus",q6,Q6),ZR=p0("TorusKnot",Z6,K6),KR=Ae({extends:Ro,props:Xf,created(){this.createGeometry(),this.addGeometryWatchers(Xf)},methods:{createGeometry(){this.geometry=J6(this)},updatePoints(i){$6(this.geometry,i)}},__hmrId:"Tube"}),JR=Ae({emits:["loaded"],extends:Ro,props:{src:{type:String,required:!0},width:Number,height:Number,widthSegments:{type:Number,default:1},heightSegments:{type:Number,default:1},keepSize:Boolean},setup(){return{}},created(){!this.renderer||(this.geometry=new sl(1,1,this.widthSegments,this.heightSegments),this.material=new Z0({side:Xi,map:this.loadTexture()}),je(()=>this.src,this.refreshTexture),["width","height"].forEach(i=>{je(()=>this[i],this.resize)}),this.resize(),this.keepSize&&this.renderer.onResize(this.resize))},unmounted(){var i;(i=this.renderer)==null||i.offResize(this.resize)},methods:{loadTexture(){return new Yr().load(this.src,this.onLoaded)},refreshTexture(){var i;(i=this.texture)==null||i.dispose(),this.material&&(this.material.map=this.loadTexture(),this.material.needsUpdate=!0)},onLoaded(i){this.texture=i,this.resize(),this.$emit("loaded",i)},resize(){if(!this.renderer||!this.texture)return;const i=this.renderer.size,e=this.texture.image.width,t=this.texture.image.height,n=e/t;let r=1,s=1;this.width&&this.height?(r=this.width*i.wWidth/i.width,s=this.height*i.wHeight/i.height):this.width?(r=this.width*i.wWidth/i.width,s=r/n):this.height?(s=this.height*i.wHeight/i.height,r=s*n):n>1?r=s*n:s=r/n,this.mesh&&(this.mesh.scale.x=r,this.mesh.scale.y=s)}},__hmrId:"Image"}),$R=Ae({extends:Ro,props:{count:{type:Number,required:!0}},methods:{initMesh(){if(!!this.renderer){if(!this.geometry||!this.material)return console.error("Missing geometry and/or material"),!1;this.mesh=new Bc(this.geometry,this.material,this.count),this.mesh.userData.component=this,Vt(this,"castShadow",this.mesh),Vt(this,"receiveShadow",this.mesh),(this.onPointerEnter||this.onPointerOver||this.onPointerMove||this.onPointerLeave||this.onPointerDown||this.onPointerUp||this.onClick)&&this.renderer.three.addIntersectObject(this.mesh),this.initObject3D(this.mesh)}}},__hmrId:"InstancedMesh"}),eF=Ae({extends:sr,emits:["loaded"],props:{src:{type:String,required:!0}},setup(){return{}},created(){this.texture=new Yr().load(this.src,this.onLoaded),this.material=new Z9({map:this.texture}),this.sprite=new sp(this.material),this.initObject3D(this.sprite)},unmounted(){var i,e;(i=this.texture)==null||i.dispose(),(e=this.material)==null||e.dispose()},methods:{onLoaded(){this.updateUV(),this.$emit("loaded")},updateUV(){if(!this.texture||!this.sprite)return;const i=this.texture.image.width,e=this.texture.image.height,t=i/e;let n=.5,r=.5;t>1?n=.5*t:r=.5/t;const s=this.sprite.geometry.attributes.position.array;s[0]=-n,s[1]=-r,s[5]=n,s[6]=-r,s[10]=n,s[11]=r,s[15]=-n,s[16]=r,this.sprite.geometry.attributes.position.needsUpdate=!0}},__hmrId:"Sprite"}),tF=Ae({extends:sr,setup(){return{}},provide(){return{[fl]:this}},mounted(){this.mesh=this.points=new K9(this.geometry,this.material),this.initObject3D(this.mesh)},methods:{setGeometry(i){this.geometry=i,this.mesh&&(this.mesh.geometry=i)},setMaterial(i){this.material=i,this.mesh&&(this.mesh.material=i)}}}),e7=Ae({extends:sr,emits:["before-load","load","progress","error"],props:{src:{type:String,required:!0}},data(){return{progress:0}},methods:{onLoad(i){this.$emit("load",i)},onProgress(i){this.progress=i.loaded/i.total,this.$emit("progress",i)},onError(i){this.$emit("error",i)}}}),nF=Ae({extends:e7,created(){const i=new rL;this.$emit("before-load",i),i.load(this.src,e=>{this.onLoad(e),this.initObject3D(e.scene)},this.onProgress,this.onError)}}),iF=Ae({extends:e7,created(){const i=new rC;this.$emit("before-load",i),i.load(this.src,e=>{this.onLoad(e),this.initObject3D(e)},this.onProgress,this.onError)}});const Gh=Symbol("Composer");var rF=Ae({setup(){return{renderer:b0(On)}},provide(){return{[Gh]:this}},created(){if(!this.renderer){console.error("Renderer not found");return}const i=this.renderer,e=new xC(this.renderer.renderer);this.composer=e,this.renderer.composer=e,i.addListener("init",()=>{i.renderer.autoClear=!1,this.resize(),i.addListener("resize",this.resize)})},unmounted(){var i;(i=this.renderer)==null||i.removeListener("resize",this.resize)},methods:{addPass(i){var e;(e=this.composer)==null||e.addPass(i)},removePass(i){var e;(e=this.composer)==null||e.removePass(i)},resize(){this.composer&&this.renderer&&this.composer.setSize(this.renderer.size.width,this.renderer.size.height)}},render(){return this.$slots.default?this.$slots.default():[]},__hmrId:"EffectComposer"}),yn=Ae({inject:{renderer:On,composer:Gh},emits:["ready"],setup(){return{}},created(){this.composer||console.error("Missing parent EffectComposer"),this.renderer||console.error("Missing parent Renderer")},unmounted(){var i,e,t;this.pass&&((i=this.composer)==null||i.removePass(this.pass),(t=(e=this.pass).dispose)==null||t.call(e))},methods:{initEffectPass(i){var e;this.pass=i,(e=this.composer)==null||e.addPass(i),this.$emit("ready",i)}},render(){return[]},__hmrId:"EffectPass"}),sF=Ae({extends:yn,created(){if(!this.renderer)return;if(!this.renderer.scene){console.error("Missing Scene");return}if(!this.renderer.camera){console.error("Missing Camera");return}const i=new yC(this.renderer.scene,this.renderer.camera);this.initEffectPass(i)},__hmrId:"RenderPass"});const K3={focus:{type:Number,default:1},aperture:{type:Number,default:.025},maxblur:{type:Number,default:.01}};var oF=Ae({extends:yn,props:K3,created(){if(!this.renderer)return;if(!this.renderer.scene){console.error("Missing Scene");return}if(!this.renderer.camera){console.error("Missing Camera");return}const i={focus:this.focus,aperture:this.aperture,maxblur:this.maxblur,width:this.renderer.size.width,height:this.renderer.size.height},e=new _C(this.renderer.scene,this.renderer.camera,i);Object.keys(K3).forEach(t=>{je(()=>this[t],n=>{e.uniforms[t].value=n})}),this.initEffectPass(e)},__hmrId:"BokehPass"});const J3={noiseIntensity:{type:Number,default:.5},scanlinesIntensity:{type:Number,default:.05},scanlinesCount:{type:Number,default:4096},grayscale:{type:Number,default:0}};var aF=Ae({extends:yn,props:J3,created(){const i=new bC(this.noiseIntensity,this.scanlinesIntensity,this.scanlinesCount,this.grayscale);Object.keys(J3).forEach(e=>{je(()=>this[e],t=>{i.uniforms[e].value=t})}),this.initEffectPass(i)},__hmrId:"FilmPass"}),lF=Ae({extends:yn,created(){var i;const e=new lo(SC);(i=this.renderer)==null||i.addListener("resize",this.resize),this.initEffectPass(e)},unmounted(){var i;(i=this.renderer)==null||i.removeListener("resize",this.resize)},methods:{resize({size:i}){if(this.pass){const{resolution:e}=this.pass.material.uniforms;e.value.x=1/i.width,e.value.y=1/i.height}}},__hmrId:"FXAAPass"});const $3={shape:{type:Number,default:1},radius:{type:Number,default:4},rotateR:{type:Number,default:Math.PI/12*1},rotateG:{type:Number,default:Math.PI/12*2},rotateB:{type:Number,default:Math.PI/12*3},scatter:{type:Number,default:0}};var cF=Ae({extends:yn,props:$3,created(){if(!this.renderer)return;const i=new wC(this.renderer.size.width,this.renderer.size.height,{});Object.keys($3).forEach(e=>{i.uniforms[e].value=this[e],je(()=>this[e],t=>{i.uniforms[e].value=t})}),this.initEffectPass(i)},__hmrId:"HalftonePass"}),uF=Ae({extends:yn,created(){if(!this.renderer)return;const i=new MC(this.renderer.size.width,this.renderer.size.height);this.initEffectPass(i)},__hmrId:"SMAAPass"}),fF=Ae({extends:yn,props:{options:{type:Object,default:()=>({})}},created(){if(!this.renderer)return;if(!this.renderer.scene){console.error("Missing Scene");return}if(!this.renderer.camera){console.error("Missing Camera");return}const i=new qn(this.renderer.scene,this.renderer.camera,this.renderer.size.width,this.renderer.size.height);Object.keys(this.options).forEach(e=>{i[e]=this.options[e]}),this.initEffectPass(i)},__hmrId:"SSAOPass"}),t7={uniforms:{},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `},e4={uniforms:{tDiffuse:{value:null},blurRadius:{value:0},gradientRadius:{value:0},start:{value:new ne},end:{value:new ne},delta:{value:new ne},texSize:{value:new ne}},vertexShader:t7.vertexShader,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float blurRadius;
    uniform float gradientRadius;
    uniform vec2 start;
    uniform vec2 end;
    uniform vec2 delta;
    uniform vec2 texSize;
    varying vec2 vUv;

    float random(vec3 scale, float seed) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    void main() {
      vec4 color = vec4(0.0);
      float total = 0.0;

      /* randomize the lookup values to hide the fixed number of samples */
      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);

      vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
      float radius = smoothstep(0.0, 1.0, abs(dot(vUv * texSize - start, normal)) / gradientRadius) * blurRadius;
      for (float t = -30.0; t <= 30.0; t++) {
          float percent = (t + offset - 0.5) / 30.0;
          float weight = 1.0 - abs(percent);
          vec4 texel = texture2D(tDiffuse, vUv + delta / texSize * percent * radius);
          // vec4 texel2 = texture2D(tDiffuse, vUv + vec2(-delta.y, delta.x) / texSize * percent * radius);

          /* switch to pre-multiplied alpha to correctly blur transparent images */
          texel.rgb *= texel.a;
          // texel2.rgb *= texel2.a;

          color += texel * weight;
          total += 2.0 * weight;
      }

      gl_FragColor = color / total;

      /* switch back from pre-multiplied alpha */
      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;
    }
  `};const hF={blurRadius:{type:Number,default:10},gradientRadius:{type:Number,default:100},start:{type:Object,default:()=>({x:0,y:100})},end:{type:Object,default:()=>({x:10,y:100})}};var dF=Ae({extends:yn,props:hF,setup(){return{uniforms1:{},uniforms2:{}}},created(){if(!this.composer)return;this.pass1=new lo(e4),this.pass2=new lo(e4);const i=this.uniforms1=this.pass1.uniforms,e=this.uniforms2=this.pass2.uniforms;e.blurRadius=i.blurRadius,e.gradientRadius=i.gradientRadius,e.start=i.start,e.end=i.end,e.texSize=i.texSize,Vt(this,"blurRadius",i.blurRadius,"value"),Vt(this,"gradientRadius",i.gradientRadius,"value"),this.updateFocusLine(),["start","end"].forEach(t=>{je(()=>this[t],this.updateFocusLine,{deep:!0})}),this.pass1.setSize=(t,n)=>{i.texSize.value.set(t,n)},this.initEffectPass(this.pass1),this.composer.addPass(this.pass2)},unmounted(){this.composer&&this.pass2&&this.composer.removePass(this.pass2)},methods:{updateFocusLine(){this.uniforms1.start.value.copy(this.start),this.uniforms1.end.value.copy(this.end);const i=new ne().copy(this.end).sub(this.start).normalize();this.uniforms1.delta.value.copy(i),this.uniforms2.delta.value.set(-i.y,i.x)}},__hmrId:"TiltShiftPass"});const t4={strength:{type:Number,default:1.5},radius:{type:Number,default:0},threshold:{type:Number,default:0}};var pF=Ae({extends:yn,props:t4,created(){if(!this.renderer)return;const i=new ne(this.renderer.size.width,this.renderer.size.height),e=new co(i,this.strength,this.radius,this.threshold);Object.keys(t4).forEach(t=>{je(()=>this[t],n=>{e.uniforms[t].value=n})}),this.initEffectPass(e)},__hmrId:"UnrealBloomPass"}),mF={uniforms:{tDiffuse:{value:null},center:{value:new ne(.5,.5)},strength:{value:0}},vertexShader:t7.vertexShader,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 center;
    uniform float strength;
    varying vec2 vUv;

    float random(vec3 scale, float seed) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }
    
    void main() {
      vec4 color = vec4(0.0);
      float total = 0.0;
      vec2 toCenter = center - vUv;
      
      /* randomize the lookup values to hide the fixed number of samples */
      float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
      
      for (float t = 0.0; t <= 40.0; t++) {
        float percent = (t + offset) / 40.0;
        float weight = 4.0 * (percent - percent * percent);
        vec4 texel = texture2D(tDiffuse, vUv + toCenter * percent * strength);

        /* switch to pre-multiplied alpha to correctly blur transparent images */
        texel.rgb *= texel.a;

        color += texel * weight;
        total += weight;
      }

      gl_FragColor = color / total;

      /* switch back from pre-multiplied alpha */
      gl_FragColor.rgb /= gl_FragColor.a + 0.00001;
    }
  `},gF=Ae({extends:yn,props:{center:{type:Object,default:()=>({x:.5,y:.5})},strength:{type:Number,default:.5}},created(){const i=new lo(mF);Vt(this,"center",i.uniforms.center,"value"),Vt(this,"strength",i.uniforms.strength,"value"),this.initEffectPass(i)},__hmrId:"ZoomBlurPass"}),vF=Object.freeze({__proto__:null,Renderer:DC,RendererInjectionKey:On,OrthographicCamera:NC,PerspectiveCamera:Z3,Camera:Z3,Group:BC,Scene:OC,SceneInjectionKey:Oh,Object3D:sr,Raycaster:UC,CubeCamera:kC,BufferGeometry:zh,BoxGeometry:GC,CircleGeometry:HC,ConeGeometry:VC,CylinderGeometry:WC,DodecahedronGeometry:XC,ExtrudeGeometry:qC,IcosahedronGeometry:QC,LatheGeometry:ZC,OctahedronGeometry:KC,PlaneGeometry:JC,PolyhedronGeometry:$C,RingGeometry:eR,SphereGeometry:tR,ShapeGeometry:rR,TetrahedronGeometry:sR,TorusGeometry:oR,TorusKnotGeometry:aR,TubeGeometry:lR,AmbientLight:cR,DirectionalLight:uR,HemisphereLight:fR,PointLight:hR,RectAreaLight:dR,SpotLight:pR,Material:Uh,BasicMaterial:mR,LambertMaterial:gR,PhongMaterial:vR,PhysicalMaterial:xR,PointsMaterial:yR,ShadowMaterial:_R,StandardMaterial:bR,ToonMaterial:SR,MaterialInjectionKey:Bh,MatcapMaterial:wR,ShaderMaterial:AR,SubSurfaceMaterial:RR,Texture:kh,CubeTexture:FR,VideoTexture:IR,Mesh:Ro,MeshInjectionKey:fl,Box:DR,Circle:NR,Cone:OR,Cylinder:zR,Dodecahedron:BR,Icosahedron:UR,Lathe:kR,Octahedron:GR,Plane:HR,Polyhedron:VR,Ring:WR,Sphere:XR,Tetrahedron:jR,Text:qR,Torus:QR,TorusKnot:ZR,Tube:KR,Image:JR,InstancedMesh:$R,Sprite:eF,Points:tF,GltfModel:nF,FbxModel:iF,EffectComposer:rF,ComposerInjectionKey:Gh,RenderPass:sF,EffectPass:yn,BokehPass:oF,FilmPass:aF,FXAAPass:lF,HalftonePass:cF,SMAAPass:uF,SSAOPass:fF,TiltShiftPass:dF,UnrealBloomPass:pF,ZoomBlurPass:gF,applyObjectProps:$a,bindObjectProp:rr,bindObjectProps:TC,setFromProp:el,bindProps:AC,bindProp:Vt,propsValues:P1,lerp:EC,limit:PC,getMatcapUrl:y6});const xF={install(i){["Camera","OrthographicCamera","PerspectiveCamera","Raycaster","Renderer","Scene","Group","CubeCamera","AmbientLight","DirectionalLight","HemisphereLight","PointLight","RectAreaLight","SpotLight","BasicMaterial","LambertMaterial","MatcapMaterial","PhongMaterial","PhysicalMaterial","PointsMaterial","ShaderMaterial","StandardMaterial","SubSurfaceMaterial","ToonMaterial","Texture","CubeTexture","BufferGeometry","Mesh","Box","BoxGeometry","Circle","CircleGeometry","Cone","ConeGeometry","Cylinder","CylinderGeometry","Dodecahedron","DodecahedronGeometry","Icosahedron","IcosahedronGeometry","Lathe","LatheGeometry","Octahedron","OctahedronGeometry","Plane","PlaneGeometry","Polyhedron","PolyhedronGeometry","Ring","RingGeometry","Sphere","SphereGeometry","Tetrahedron","TetrahedronGeometry","Text","Torus","TorusGeometry","TorusKnot","TorusKnotGeometry","Tube","TubeGeometry","Image","InstancedMesh","Points","Sprite","FbxModel","GltfModel","BokehPass","EffectComposer","FilmPass","FXAAPass","HalftonePass","RenderPass","SAOPass","SMAAPass","SSAOPass","TiltShiftPass","UnrealBloomPass","ZoomBlurPass"].forEach(t=>{i.component(t,vF[t])})}};Ig(qg).use(xb).use(xF).mount("#app");export{F0 as F,c8 as _,De as a,vy as b,Ns as c,dm as d,Qe as e,Cr as o,hm as p};
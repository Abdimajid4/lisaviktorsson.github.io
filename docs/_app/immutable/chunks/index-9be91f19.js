function x(){}const X=t=>t;function pt(t,e){for(const n in e)t[n]=e[n];return t}function Y(t){return t()}function J(){return Object.create(null)}function b(t){t.forEach(Y)}function L(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Ft(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function yt(t){return Object.keys(t).length===0}function gt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(gt(e,n))}function Wt(t,e,n,r){if(t){const i=Z(t,e,n,r);return t[0](i)}}function Z(t,e,n,r){return t[1]&&r?pt(n.ctx.slice(),t[1](r(e))):n.ctx}function It(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(e.dirty.length,i.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|i[u];return o}return e.dirty|i}return e.dirty}function Jt(t,e,n,r,i,o){if(i){const s=Z(e,n,r,o);t.p(s,i)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function Qt(t,e,n){return t.set(n),e}const tt=typeof window<"u";let et=tt?()=>window.performance.now():()=>Date.now(),z=tt?t=>requestAnimationFrame(t):x;const $=new Set;function nt(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&z(nt)}function it(t){let e;return $.size===0&&z(nt),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let R=!1;function xt(){R=!0}function $t(){R=!1}function bt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(i>0&&e[n[i]].claim_order<=c?i+1:bt(1,i,_=>e[n[_]].claim_order,c))-1;r[l]=n[f]+1;const a=f+1;n[a]=l,i=Math.max(a,i)}const o=[],s=[];let u=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(o.push(e[l-1]);u>=l;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<s.length;l++){for(;c<o.length&&s[l].claim_order>=o[c].claim_order;)c++;const f=c<o.length?o[c]:null;t.insertBefore(s[l],f)}}function vt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=F("style");return Nt(rt(t),e),e.sheet}function Nt(t,e){return vt(t.head||t,e),e.sheet}function At(t,e){if(R){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){t.insertBefore(e,n||null)}function St(t,e,n){R&&!n?At(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function Ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function st(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Vt(){return G(" ")}function Xt(){return G("")}function Yt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,r,i=!1){ot(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,i||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const l=n(u);return l===void 0?t.splice(s,1):t[s]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function lt(t,e,n,r){return ct(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const u=i.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function te(t,e,n){return lt(t,e,n,F)}function ee(t,e,n){return lt(t,e,n,st)}function Ct(t,e){return ct(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>G(e),!0)}function ne(t){return Ct(t," ")}function K(t,e,n){for(let r=n;r<t.length;r+=1){const i=t[r];if(i.nodeType===8&&i.textContent.trim()===e)return r}return t.length}function ie(t,e){const n=K(t,"HTML_TAG_START",0),r=K(t,"HTML_TAG_END",n);if(n===r)return new Q(void 0,e);ot(t);const i=t.splice(n,r-n+1);N(i[0]),N(i[i.length-1]);const o=i.slice(1,i.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Q(o,e)}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e){t.value=e??""}function oe(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Dt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function ce(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}class Ht{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,r=null){this.e||(this.is_svg?this.e=st(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class Q extends Ht{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)St(this.t,this.n[n],e)}}function le(t,e){return new t(e)}const H=new Map;let M=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:Et(e),rules:{}};return H.set(t,n),n}function ut(t,e,n,r,i,o,s,u=0){const l=16.666/r;let c=`{
`;for(let m=0;m<=1;m+=l){const p=e+(n-e)*o(m);c+=m*100+`%{${s(p,1-p)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Mt(f)}_${u}`,_=rt(t),{stylesheet:d,rules:h}=H.get(_)||jt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${r}ms linear ${i}ms 1 both`,M+=1,a}function q(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),M-=i,M||Lt())}function Lt(){z(()=>{M||(H.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),H.clear())})}let A;function E(t){A=t}function W(){if(!A)throw new Error("Function called outside component initialization");return A}function ue(t){W().$$.on_mount.push(t)}function ae(t){W().$$.after_update.push(t)}function fe(t){W().$$.on_destroy.push(t)}const v=[],U=[],C=[],V=[],at=Promise.resolve();let B=!1;function ft(){B||(B=!0,at.then(_t))}function _e(){return ft(),at}function T(t){C.push(t)}const P=new Set;let k=0;function _t(){const t=A;do{for(;k<v.length;){const e=v[k];k++,E(e),Rt(e.$$)}for(E(null),v.length=0,k=0;U.length;)U.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];P.has(n)||(P.add(n),n())}C.length=0}while(v.length);for(;V.length;)V.pop()();B=!1,P.clear(),E(t)}function Rt(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let w;function dt(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function j(t,e,n){t.dispatchEvent(Dt(`${e?"intro":"outro"}${n}`))}const D=new Set;let g;function de(){g={r:0,c:[],p:g}}function he(){g.r||b(g.c),g=g.p}function Ot(t,e){t&&t.i&&(D.delete(t),t.i(e))}function me(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),g.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const ht={duration:0};function pe(t,e,n){const r={direction:"in"};let i=e(t,n,r),o=!1,s,u,l=0;function c(){s&&q(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=X,tick:y=x,css:m}=i||ht;m&&(s=ut(t,0,1,d,_,h,m,l++)),y(0,1);const p=et()+_,mt=p+d;u&&u.abort(),o=!0,T(()=>j(t,!0,"start")),u=it(O=>{if(o){if(O>=mt)return y(1,0),j(t,!0,"end"),c(),o=!1;if(O>=p){const I=h((O-p)/d);y(I,1-I)}}return o})}let a=!1;return{start(){a||(a=!0,q(t),L(i)?(i=i(r),dt().then(f)):f())},invalidate(){a=!1},end(){o&&(c(),o=!1)}}}function ye(t,e,n){const r={direction:"out"};let i=e(t,n,r),o=!0,s;const u=g;u.r+=1;function l(){const{delay:c=0,duration:f=300,easing:a=X,tick:_=x,css:d}=i||ht;d&&(s=ut(t,1,0,f,c,a,d));const h=et()+c,y=h+f;T(()=>j(t,!1,"start")),it(m=>{if(o){if(m>=y)return _(0,1),j(t,!1,"end"),--u.r||b(u.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return o})}return L(i)?dt().then(()=>{i=i(r),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),o&&(s&&q(t,s),o=!1)}}}function ge(t){t&&t.c()}function xe(t,e){t&&t.l(e)}function Pt(t,e,n,r){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),r||T(()=>{const s=t.$$.on_mount.map(Y).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...s):b(s),t.$$.on_mount=[]}),o.forEach(T)}function qt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,r,i,o,s,u=[-1]){const l=A;E(t);const c=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:i,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:J(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&i(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Bt(t,a)),_}):[],c.update(),f=!0,b(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){xt();const a=kt(e.target);c.fragment&&c.fragment.l(a),a.forEach(N)}else c.fragment&&c.fragment.c();e.intro&&Ot(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),$t(),_t()}E(l)}class be{$destroy(){qt(this,1),this.$destroy=x}$on(e,n){if(!L(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{_e as A,x as B,Wt as C,At as D,Jt as E,Kt as F,It as G,Gt as H,ce as I,Ut as J,st as K,ee as L,Yt as M,b as N,se as O,fe as P,Ft as Q,T as R,be as S,pe as T,ye as U,X as V,Qt as W,Q as X,ie as Y,Vt as a,St as b,ne as c,he as d,Xt as e,Ot as f,de as g,N as h,$e as i,ae as j,F as k,te as l,kt as m,Zt as n,ue as o,oe as p,G as q,Ct as r,zt as s,me as t,re as u,le as v,ge as w,xe as x,Pt as y,qt as z};

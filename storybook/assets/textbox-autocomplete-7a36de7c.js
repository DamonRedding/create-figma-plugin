import{_ as $,h as O,T as d}from"./hooks.module-6e460002.js";import{u as ae,m as h}from"./use-mouse-down-outside-a27f62ba.js";import{I as de}from"./icon-menu-checkmark-checked-16-63abc2a0.js";import{c as L}from"./create-class-name-71c46838.js";import{g as T}from"./get-current-from-ref-47f174f6.js";import{c as W}from"./compute-next-value-3d847061.js";import{i as he}from"./is-keycode-character-generating-0746a523.js";import{s as p}from"./textbox.module-9ea46353.js";import{o as f}from"./jsxRuntime.module-893eb125.js";const pe="_top_3lpap_1",me="_bottom_3lpap_5",q={top:pe,bottom:me},E="",a=null,A="data-textbox-autocomplete-item-id",Y=16;function _e({disabled:e=!1,filter:n=!1,icon:o,name:u,onInput:i=function(){},onValueInput:x=function(){},placeholder:ne,propagateEscapeKeyDown:P=!0,revertOnEscapeKeyDown:F=!1,spellCheck:re=!1,strict:y=!1,top:D=!1,value:g,variant:M,..._}){if(typeof o=="string"&&o.length!==1)throw new Error(`String \`icon\` must be a single character: ${o}`);const B=$(null),R=$(null),S=$(null),[k,U]=O(!1),[b,w]=O(a),[N,G]=O(E),[V,H]=O(g);let s=ge(_.options);n===!0&&(s=we(s,g,V));const I=d(function(){U(!1),G(E),H(E),w(a),T(R).blur()},[]),v=d(function(t){const r=T(S);if(t===a){r.scrollTop=0;return}const c=r.querySelector(`[${A}='${t}']`);if(c===null)throw new Error("Invariant violation");const l=c.getBoundingClientRect().y-r.getBoundingClientRect().y;if(l<r.scrollTop){r.scrollTop=l;return}const m=l+c.offsetHeight;m>r.scrollTop+r.offsetHeight&&(r.scrollTop=m-r.offsetHeight)},[]),C=d(function(t){const r=Z(s,t);if(r===a){H(t),w(a),v(a);return}H(E),w(r),v(r)},[s,v]),oe=d(function(t){U(!0),ve(T(B),T(S),D),G(g),C(g);const r=t.currentTarget;r.focus(),r.select()},[D,C,g]),ue=d(function(t){const r=t.currentTarget.value;C(r),x(r,u),i(t)},[u,i,x,C]),ie=d(function(t){const r=t.currentTarget,c=t.key;if(c==="ArrowUp"||c==="ArrowDown"){if(t.preventDefault(),s.length===0)return;const l=c==="ArrowUp"?Ee(s,b):be(s,b);if(l===a){w(a),r.value=V,x(V,u),i(t),v(a);return}w(l),v(l);const m=J(s,l);if(m===null)throw new Error("Invariant violation");const K=m.value;r.value=K,x(K,u),i(t),r.select();return}if(c==="Enter"||c==="Escape"||c==="Tab"){if(t.preventDefault(),P===!1&&t.stopPropagation(),c==="Escape"&&F===!0){r.value=N;const l=document.createEvent("Event");l.initEvent("input",!0,!0),r.dispatchEvent(l)}I();return}if(y!==!1&&!(t.ctrlKey===!0||t.metaKey===!0)&&he(t.keyCode)===!0){const l=W(r,t.key);z(s,l)===!1&&t.preventDefault()}},[V,u,i,x,s,N,P,F,b,y,I,v]),le=d(function(t){if(y===!1)return;if(t.clipboardData===null)throw new Error("`event.clipboardData` is `null`");const r=W(t.currentTarget,t.clipboardData.getData("Text"));z(s,r)===!1&&t.preventDefault()},[s,y]),se=d(function(t){const r=t.currentTarget.getAttribute(A);w(r);const c=J(s,r);if(c===null)throw new Error("Invariant violation");const l=T(R);l.value=c.value;const m=document.createEvent("Event");m.initEvent("input",!0,!0),l.dispatchEvent(m),I()},[s,I]),ce=d(function(t){const r=t.currentTarget.getAttribute(A);r!==b&&w(r)},[b]),fe=d(function(){k!==!1&&I()},[k,I]);return ae({onMouseDownOutside:fe,ref:B}),f("div",{ref:B,class:L([p.textbox,typeof M>"u"?null:M==="border"?p.hasBorder:null,typeof o>"u"?null:p.hasIcon,e===!0?p.disabled:null]),children:f("div",{class:p.inner,children:[f("input",{..._,ref:R,class:p.input,disabled:e===!0,name:u,onFocus:oe,onInput:ue,onKeyDown:ie,onPaste:le,placeholder:ne,tabIndex:e===!0?-1:0,type:"text",value:g}),typeof o>"u"?null:f("div",{class:p.icon,children:o}),f("div",{class:p.border}),M==="underline"?f("div",{class:p.underline}):null,f("div",{ref:S,class:L([h.menu,e===!0||k===!1?h.hidden:null,D===!0?q.top:q.bottom]),children:s.map(function(t,r){return"separator"in t?f("hr",{class:h.optionSeparator},r):"header"in t?f("h1",{class:h.optionHeader,children:t.header},r):f("label",{class:L([h.optionValue,t.disabled===!0?h.optionValueDisabled:null,t.disabled!==!0&&t.id===b?h.optionValueSelected:null]),children:[f("input",{..._,checked:g===t.value,class:h.input,disabled:t.disabled===!0,name:u,onChange:se,onMouseMove:ce,spellcheck:re,tabIndex:-1,type:"radio",value:`${t.value}`,[A]:t.id}),t.value===N?f("div",{class:h.checkIcon,children:f(de,{})}):null,t.value]},r)})})]})})}function ge(e){return e.map(function(n,o){return"value"in n?{...n,id:`${o}`}:n})}function we(e,n,o){return n===E?e:Z(e,n)===a?e.filter(function(i){return"value"in i?j(i.value,n)===!0:!1}):o===E?e:e.filter(function(i){return"value"in i?j(i.value,o)===!0:!1})}function j(e,n){return e.toLowerCase().indexOf(n.toLowerCase())!==-1}function Z(e,n){for(const o of e)if("value"in o&&o.value===n)return o.id;return a}function z(e,n){if(n===E)return!0;for(const o of e)if("value"in o&&o.value.toLowerCase().indexOf(n.toLowerCase())===0)return!0;return!1}function J(e,n){for(const o of e)if("id"in o&&o.id===n)return o;return null}function ee(e,n){let o=0;for(const u of e){if("id"in u&&u.id===n)return o;o+=1}return-1}function Ee(e,n){if(n===a){const i=Q(e,e.length-1);return i===null?null:i.id}const o=ee(e,n);if(o===-1)throw new Error(`No option with \`id\` ${n}`);if(o===0)return null;const u=Q(e,o-1);return u===null?null:u.id}function be(e,n){if(n===a){const i=X(e,0);return i===null?null:i.id}const o=ee(e,n);if(o===-1)throw new Error(`No option with \`id\` ${n}`);if(o===e.length-1)return null;const u=X(e,o+1);return u===null?null:u.id}function Q(e,n){if(n<0)throw new Error("`index` < 0");if(n>e.length-1)throw new Error("`index` > `options.length` - 1");return Ie(e.slice(0,n+1))}function X(e,n){if(n<0)throw new Error("`index` < 0");if(n>e.length-1)throw new Error("`index` > `options.length` - 1");return te(e.slice(n))}function te(e){for(const n of e)if("id"in n&&n.disabled!==!0)return n;return null}function Ie(e){return te(e.slice().reverse())}function ve(e,n,o){const u=e.getBoundingClientRect().top,i=o===!0?u-Y:window.innerHeight-u-e.offsetHeight-Y;n.style.maxHeight=`${i}px`}export{_e as T};
//# sourceMappingURL=textbox-autocomplete-7a36de7c.js.map
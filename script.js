(()=>{var f=960;function a(e){if(e===document.body)return null;if(e.tagName!=="A")return a(e.parentElement);let t=e.getAttribute("href");return t===null||t[0]!=="#"?null:t.slice(1)}var S=".menu",g=".menu-toggle-button",E="--menu-visible";function h(){let e=document.querySelector(S),t=document.querySelector(g);function r(){document.body.classList.contains(E)===!0?document.body.classList.remove(E):document.body.classList.add(E),t.setAttribute("aria-expanded",t.getAttribute("aria-expanded")==="true"?"false":"true")}function i(n){window.innerWidth<f&&e.contains(n.target)&&a(n.target)!==null&&r()}e.addEventListener("click",i);function l(){r()}t.addEventListener("click",l);function u(n){document.body.classList.contains(E)===!1||t===n.target||e.contains(n.target)===!0||r()}window.addEventListener("click",u)}var y=".menu__toc",m="menu__active",N="h2[id], h3[id], h4[id]";function T(){window.history.scrollRestoration="manual";let e=document.querySelector(y);if(e===null)return;let t=L();function r(o,{pushState:c}){let s=t.find(function(_){return _.id===o});if(typeof s=="undefined")return i(),!1;let w={scrollY:s.scrollY};return c===!0?history.pushState(w,null,`#${o}`):history.replaceState(w,null,`#${o}`),window.scrollTo({top:s.scrollY}),i(),!0}function i(){let o=e.querySelector(`.${m}`);o!==null&&o.classList.remove(m);let c=A(t);if(c===null)return;let s=e.querySelector(`[href="#${c}"]`);s!==null&&s.classList.add(m)}function l(o){if(o.metaKey===!0||o.shiftKey===!0||window.innerWidth<f)return;let c=a(o.target);c!==null&&r(c,{pushState:!0})===!0&&o.preventDefault()}window.addEventListener("click",l);function u(o){if(o.preventDefault(),o.state===null){window.scrollTo({top:0});return}window.scrollTo({top:o.state.scrollY})}window.addEventListener("popstate",u);function n(){t=L(),d()}window.addEventListener("resize",n);function d(){i(),history.replaceState({scrollY:window.scrollY},null,window.location.hash)}window.addEventListener("scroll",d);let p=window.location.hash.slice(1);p!==""&&r(p,{pushState:!1})}function L(){let e=Array.prototype.slice.call(document.body.querySelectorAll(N)),t=[];for(let n of e)t.push({id:n.getAttribute("id"),scrollY:n.offsetTop});let r=document.documentElement.offsetHeight-window.innerHeight,i=t[t.length-1].scrollY;if(i<=r)return t;let l=r-window.innerHeight,u=window.innerHeight/(i-l);return t.map(function(n,d){return n.scrollY<=l?n:d===t.length-1?{...n,scrollY:r}:{...n,scrollY:Math.round(l+(n.scrollY-l)*u)}})}function A(e){for(let t of e.slice().reverse())if(t.scrollY<=window.scrollY)return t.id;return null}function M(){h(),T()}M();})();
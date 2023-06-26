(()=>{"use strict";var e={606:(e,t,c)=>{c.d(t,{Z:()=>o});const o=()=>{const e=document.querySelectorAll(".PromocodeSwitcher");e[0]&&e.forEach((e=>{const t=e.querySelectorAll("button"),c=e.querySelector("input");t.forEach(((e,t,o)=>{e.addEventListener("click",(()=>{for(let e of o)e.classList.remove("active");e.classList.add("active"),console.log(c.dataset.value),c.setAttribute("placeholder",e.dataset.value)}))}))}))}},368:(e,t,c)=>{var o=c(606);document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".catalog button");e[0]&&e.forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active")}))}));const t=document.querySelectorAll(".open-info-block"),c=document.querySelectorAll(".info");t[0]&&c[0]&&t.forEach(((e,t)=>{e.addEventListener("click",(function(){e.classList.toggle("active"),c[t].classList.toggle("active")}))}));const l=document.querySelectorAll(".accordion__details");l[0]&&l.forEach((function(e){e.addEventListener("click",(function(){this.nextElementSibling.classList.toggle("active"),this.querySelector("svg").classList.toggle("active"),this.classList.toggle("active")}))}));const s=document.querySelectorAll(".catalog-cards__menu"),n=document.querySelectorAll(".catalog-cards__details");s[0]&&n[0]&&s.forEach((function(e){const t=e.nextElementSibling,c=t.querySelectorAll(".cardBtn");e.addEventListener("click",(()=>{for(let e of n)e.classList.remove("active");t.classList.add("active")})),c.forEach((e=>{e.addEventListener("click",(()=>{t.classList.remove("active")}))})),document.addEventListener("click",(e=>{e.target.closest(".catalog-cards__menu")||e.target.closest(".cardBtn")||t.classList.remove("active")}))}));const r=document.querySelectorAll(".toggleColors");r[0]&&r.forEach((e=>{const t=e.querySelectorAll(".activeBtn");t.forEach((e=>{e.addEventListener("click",(function(){t.forEach((e=>{e.classList.remove("color--active")})),this.classList.add("color--active")}))}))}));const a=document.querySelectorAll(".order-details"),i=["Детали заказа","Скрыть детали"];a[0]&&a.forEach((e=>{const t=e.querySelector(".orderDetailButton");t.addEventListener("click",(()=>{e.classList.toggle("active"),e.classList.contains("active")?t.querySelector("span").textContent=i[1]:t.querySelector("span").textContent=i[0]}))}));const d=document.querySelectorAll(".data-accordion-btn"),u=document.querySelectorAll(".contactForm");d[0]&&d.forEach(((e,t)=>{e.addEventListener("click",(()=>{e.classList.toggle("active"),u[t].classList.toggle("active")}))})),document.querySelectorAll(".concept-accordion-btn").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active");const t=e.nextElementSibling;t&&t.classList.toggle("active");const c=e.nextElementSibling.nextElementSibling;c&&c.classList.toggle("active")}))}));const v=document.querySelector(".SelectAllBtn"),m=document.querySelectorAll(".CartItemSelect .input-checkbox input"),L=["Выбрать все","Убрать все"];console.log(m),v&&v.addEventListener("click",(()=>{if(v.textContent.trim()===L[0]){v.querySelector("span").textContent=L[1];for(let e of m)e.setAttribute("checked","checked")}else{v.querySelector("span").textContent=L[0];for(let e of m)e.removeAttribute("checked")}}));const g=document.querySelectorAll(".btnLike");g[0]&&g.forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active")}))}));const E=document.querySelectorAll(".favorite"),S=["В любимое","В любимом"];E[0]&&E.forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active"),e.querySelector("p").textContent===S[0]?e.querySelector("p").textContent=S[1]:e.querySelector("p").textContent=S[0]}))}));const f=document.querySelectorAll(".deliveryBtn");f[0]&&f.forEach((e=>{const t=e.nextElementSibling,c=e.nextElementSibling.querySelector(".tooltip__close");e.addEventListener("click",(()=>{t.classList.toggle("active"),e.classList.toggle("active")})),c.addEventListener("click",(()=>{t.classList.remove("active"),e.classList.remove("active")})),document.addEventListener("click",(c=>{c.target.closest(".tooltip__close")||c.target.closest(".deliveryBtn")||c.target.closest(".tooltip")||(t.classList.remove("active"),e.classList.remove("active"))}))}));const y=document.querySelector(".product-panel");if(y){const e=y.querySelector(".product-panel__btn");let t=0;const c=()=>{0===t&&y.classList.add("active-1"),1===t&&y.classList.add("active-2"),2===t&&(y.classList.remove("active-1"),y.classList.remove("active-2"),t=-1),t<=2&&t++};let o,l;e.addEventListener("click",c),e.addEventListener("touchstart",(function(e){o=e.changedTouches[0].clientY}),!1),e.addEventListener("touchend",(function(e){l=e.changedTouches[0].clientY;let t=o-l;Math.abs(t)>25&&c()}),!1)}const q=document.querySelector(".ContentBtn");q&&q.addEventListener("click",(()=>{q.classList.toggle("active")}));const h=document.querySelectorAll(".menu__nav button");h[0]&&h.forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active"),e.classList.contains("btn-menu")||e.parentElement.classList.toggle("active")}))}));const b=document.querySelectorAll(".filter__nav button");b[0]&&b.forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("active"),e.classList.contains("btn-menu")||e.parentElement.classList.toggle("active")}))}));const k=document.querySelectorAll(".catalog-cards");k[0]&&k.forEach(((e,t)=>{e.querySelectorAll(".color").forEach(((e,c,o)=>{e.addEventListener("click",(()=>{for(let e of o)e.classList.remove("color--active");e.classList.add("color--active"),catalogImageSlider[t].slideTo(c)}))}))}));const p=document.querySelectorAll(".mood-item button");p[0]&&p.forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".mood-item"),c=t.classList.contains("active");document.querySelectorAll(".mood-item").forEach((e=>{e.classList.remove("active")})),c||t.classList.add("active")})),document.addEventListener("click",(e=>{e.target.closest(".mood-item button")||document.querySelectorAll(".mood-item").forEach((e=>{e.classList.remove("active")}))}))}));const A=document.querySelectorAll(".search-star-btn"),x=document.querySelector(".dropdown-search"),_=document.querySelector(".star-title");A[0]&&A.forEach((e=>{e.addEventListener("click",(()=>{x.classList.toggle("active"),x.classList.contains("active")?_.style.display="none":_.style.display="flex"}))}));const C=document.querySelectorAll(".video");C[0]&&C.forEach((e=>{e.nextElementSibling.addEventListener("click",(()=>{e.setAttribute("controls","true"),e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),document.addEventListener("fullscreenchange",(function(){document.fullscreenElement||(e.removeAttribute("controls"),e.pause(),e.currentTime=0,e.load())}))}))})),(0,o.Z)()}))}},t={};function c(o){var l=t[o];if(void 0!==l)return l.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,c),s.exports}c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c(368),c(606)})();
import{i as a,S as c,N as l,K as d}from"./assets/vendor-DkzXOxGX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p=({author:s,avatar_url:t,review:i})=>`
  <li class="swiper-slide">
    <p class="swiper-description" tabindex="-1">${i}</p>
    <div class="swiper-user-info">
      <img
        class="swiper-user-img"
        src="${t}"
        alt="${s}"
        width="40"
        height="40"
      />
      <h3 class="swiper-user-name">${s}</h3>
    </div>
  </li>`,u=s=>{const t=s.map(i=>p(i)).join("");refs.list.insertAdjacentHTML("beforeend",t)},f=()=>{new c(".swiper",{modules:[l,d],spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:1}},allowSlideNext:!0})},g=async()=>{try{const s=await getData();if(!s.length){refs.buttons.classList.add("is-hidden"),refs.errorMsg.classList.remove("is-hidden");return}u(s),f()}catch{a.error({position:"topRight",progressBarColor:"#B51B1B",message:"Something went wrong while loading review",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),refs.buttons.classList.add("is-hidden"),refs.errorMsg.classList.remove("is-hidden")}};g();
//# sourceMappingURL=index.js.map

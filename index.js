import{a as p,i as u,S as v,N as j,K as h}from"./assets/vendor-DNXP8-Ag.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const s={projectsList:document.querySelector(".projects-list"),loadMoreBtn:document.querySelector("#loadMoreBtn"),contactForm:document.querySelector(".contact-form"),list:document.querySelector(".swiper-wrapper"),buttons:document.querySelector(".swiper-buttons"),errorMsg:document.querySelector(".review-not-found")},f=({author:e,avatar_url:i,review:o})=>`
  <li class="swiper-slide">
    <p class="swiper-description" tabindex="-1">${o}</p>
    <div class="swiper-user-info">
      <img
        class="swiper-user-img"
        src="${i}"
        alt="${e}"
        width="40"
        height="40"
      />
      <h3 class="swiper-user-name">${e}</h3>
    </div>
  </li>`,w=({title:e,url1:i,url2:o,technologies:c})=>`
    <li class="projects-list-item">
      <img class="projects-img" src="${i}" alt="${e}" srcset="${i} 1x, ${o} 2x" loading="lazy">
      <p class="projects-technologies">${c}</p>
      <div class="projects-container">
        <h3 class="projects-name">${e}</h3>
        <div class="projects-link-wrapper">
          <a href="#" class="projects-visit-link">visit
            <svg class="projects-visit-svg">
              <use href="./img/icons.svg#visit-arrow"></use>
            </svg>
          </a>
        </div>
      </div>
    </li>
  `,y=e=>{const i=e.map(f).join("");s.list.insertAdjacentHTML("beforeend",i)},d=e=>{const i=e.map(w).join("");s.projectsList.insertAdjacentHTML("beforeend",i)},l=[{title:"Wallet webservice",url1:"./img/projectimages/manage-finances@1x.jpg",url2:"./img/projectimages/manage-finances@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Green harvest webservice",url1:"./img/projectimages/organic-vegetables@1x.jpg",url2:"./img/projectimages/organic-vegetables@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"English Exellence webservice",url1:"./img/projectimages/discover@1x.jpg",url2:"./img/projectimages/discover@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Power pulse webservice",url1:"./img/projectimages/transforming@1x.jpg",url2:"./img/projectimages/transforming@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Mimino website",url1:"./img/projectimages/mimino@@1x.jpg",url2:"./img/projectimages/mimino@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Vyshyvanka vibes Landing Page",url1:"./img/projectimages/reviving-traditions@1x.jpg",url2:"./img/projectimages/reviving-traditions@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Chego jewelry website",url1:"./img/projectimages/a-brand@1x.jpg",url2:"./img/projectimages/a-brand@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Energy flow webservice",url1:"./img/projectimages/bodyshape@1x.jpg",url2:"./img/projectimages/bodyshape@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"fruitbox online store",url1:"./img/projectimages/fresh-harvest@1x.jpg",url2:"./img/projectimages/fresh-harvest@2x.jpg",technologies:"React, JavaScript, Node JS, Git"},{title:"Starlight studio landing page",url1:"./img/projectimages/turn-on@1x.jpg",url2:"./img/projectimages/turn-on@2x.jpg",technologies:"React, JavaScript, Node JS, Git"}];let g=0,n=3;const S=()=>{n=3,d(l.slice(g,n))},m=e=>{g+=3,n+=3,d(l.slice(g,n));const i=document.querySelector(".projects-list-item").getBoundingClientRect();window.scrollBy({top:i.height,behavior:"smooth"}),n>=l.length&&(e.currentTarget.style.display="none",s.loadMoreBtn.removeEventListener("click",m))};s.loadMoreBtn.addEventListener("click",m);p.defaults.baseURL="https://portfolio-js.b.goit.study/api";const b=async()=>{try{return(await p.get("/reviews/")).data}catch(e){throw console.log("Something went wrong with receiving feedback"),e}},x=()=>{new v(".swiper",{modules:[j,h],spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:1}},allowSlideNext:!0})},L=async()=>{try{const e=await b();if(!e.length){s.buttons.classList.add("is-hidden"),s.errorMsg.classList.remove("is-hidden");return}y(e),x()}catch{u.error({position:"topRight",progressBarColor:"#B51B1B",message:"Something went wrong while loading review",messageColor:"#FAFAFB",backgroundColor:"#EF4040"}),s.buttons.classList.add("is-hidden"),s.errorMsg.classList.remove("is-hidden")}},J=()=>{document.querySelectorAll(".faq-list-item").forEach(i=>{i.addEventListener("click",({target:o})=>{const c=o.closest("li"),t=document.querySelector(".is-active");c.classList.toggle("is-active"),t&&t.classList.remove("is-active")})})};document.addEventListener("DOMContentLoaded",()=>{S(),L(),J()});
//# sourceMappingURL=index.js.map

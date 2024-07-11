(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("Hello Vite!")});document.addEventListener("DOMContentLoaded",function(){const i=document.getElementById("menuToggle"),e=document.getElementById("menu"),t=document.querySelector(".open-icon"),n=document.querySelector(".close-icon"),o=document.querySelector("body"),r=document.querySelector(".header-content__main");i.addEventListener("click",function(a){a.preventDefault(),e.classList.contains("menu--open")?(e.classList.remove("menu--open"),t.style.display="block",n.style.display="none",r.style.opacity="1"):(e.classList.add("menu--open"),t.style.display="none",n.style.display="block",r.style.opacity="0")}),e.addEventListener("click",function(a){a.target===e&&(e.classList.remove("menu--open"),t.style.display="block",n.style.display="none",o.classList.remove("no-scroll"),r.style.opacity="1")})});$(document).ready(function(){$(".team-slider").slick({arrows:!0,dots:!0,infinite:!1,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"20px",responsive:[{breakpoint:1280,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1,centerPadding:"0px"}}]}).slick("slickGoTo",2);function i(e){var t=e.slick("getSlick");t.currentSlide===0?$(".prev-slide").css("opacity",".5").prop("disabled",!0):$(".prev-slide").css("opacity","").prop("disabled",!1),t.currentSlide>=t.slideCount-1?$(".next-slide").css("opacity",".5").prop("disabled",!0):$(".next-slide").css("opacity","").prop("disabled",!1)}i($(".team-slider")),$(".prev-slide").click(function(){var e=$(".active-slider");e.slick("slickPrev"),i(e)}),$(".next-slide").click(function(){var e=$(".active-slider");e.slick("slickNext"),i(e)}),$(".team-slider").on("afterChange",function(e,t,n){i($(this))}),$(".team-slider__slide").hover(function(){$(this).find(".slide-hover-content").fadeIn()},function(){$(this).find(".slide-hover-content").fadeOut()}),$(".open-modal-btn").click(function(){$("#myModal").fadeIn(),$("#overlay").fadeIn()}),$(".close-modal-btn, #overlay").click(function(){$("#myModal").fadeOut(),$("#overlay").fadeOut()}),$(".team-block__radio-button").on("change",function(){$(this).data("team"),$(".team-block__radio").removeClass("team-block__radio--active"),$(this).parent("label").addClass("team-block__radio--active")}),$('input[data-team="1"]').prop("checked",!0).parent("label").addClass("team-block__radio--active"),$('input[data-team!="1"]').prop("checked",!1),$("#team1-slider").addClass("active-slider").slick("slickGoTo",2),$(".team-block__radio-button").on("change",function(){var e=$(this).data("team");$(".team-slider").removeClass("active-slider").hide(),$("#team"+e+"-slider").addClass("active-slider").show(),$("#team"+e+"-slider").slick("slickGoTo",2),i($("#team"+e+"-slider")),$(".team-block__radio-button").not(this).prop("checked",!1)}),$(document).on("click",function(e){($(e.target).is("#overlay")||$(e.target).closest("#myModal").length>0)&&($("#myModal").fadeOut(),$("#overlay").fadeOut())})});$(document).ready(function(){var i=$("#job-type"),e=i.parent("label"),t=$('<span class="contact-form__select-arrow"></span>');e.append(t),i.on("focus",function(){t.addClass("contact-form__select-arrow--active")}),i.on("blur",function(){t.removeClass("contact-form__select-arrow--active contact-form__select-arrow--selected")}),i.on("change",function(){$(this).find("option:selected"),e.addClass("contact-form__label--selected"),t.addClass("contact-form__select-arrow--selected")}),$("#myForm").on("submit",function(n){return n.preventDefault(),$("#myModalBlock").fadeIn(),$("#overlayForm").fadeIn(),$(this).trigger("reset"),!1}),$(".myModal-close").on("click",function(){$("#myModalBlock").fadeOut(),$("#overlayForm").fadeOut()}),$(document).on("click",function(n){$(n.target).closest(".modal-content").length||($("#myModalBlock").fadeOut(),$("#overlayForm").fadeOut())})});document.addEventListener("DOMContentLoaded",function(){const i=document.getElementById("partner-name"),e=document.getElementById("partner-job"),t=document.getElementById("partner-description"),n=document.getElementById("partners-logo");i.textContent="Tom Dou",e.textContent="Front-End",t.textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."',document.querySelectorAll(".partners-content__cards-item").forEach(r=>{r.addEventListener("click",()=>{switch(r.getAttribute("data-partner")){case"STU PARTNERS":n.src="public/image/Avatar.svg",i.textContent="STU PARTNERS",e.textContent="Back-End",t.textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';break;case"Breck Partners":n.src="public/image/Avatar.svg",i.textContent="Breck Partners",e.textContent="ML Specialist",t.textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';break;case"SUNSTONE PARTNERS":n.src="public/image/Avatar.svg",i.textContent="SUNSTONE PARTNERS",e.textContent="Full-stack",t.textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';break;case"THE ATHENA CONSULTANTS":n.src="public/image/Avatar.svg",i.textContent="THE ATHENA CONSULTANTS",e.textContent="Java Developer",t.textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';break;case"CHORD freshly COMPANY":n.src="public/image/Avatar.svg",i.textContent="CHORD freshly COMPANY",e.textContent="Team-lead",t.textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';break;default:n.src="public/image/Avatar.svg",i.textContent="Tom Dou",e.textContent="Front-End",t.textContent='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium. At pretium id viverra interdum nam odio ultricies. Diam leo, sed neque dui pulvinar condimentum pretium."';break}})})});
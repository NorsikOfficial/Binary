(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();let n=[];function a(e,r,c){return new Function("x","y","return "+e)(r,c)}class g{constructor(r,c){this.x=r,this.y=c}calculateColor(){this.color=[Math.abs(this.x-this.y)%255,40,Math.sin(this.x*this.y)*255]}drawPoint(){m.fillStyle=`rgb(${this.color[0]},${this.color[1]},${this.color[2]})`,m.fillRect(this.x,this.y,1,1)}}const l=document.getElementById("maincanvas"),p=document.querySelector(".generate-button");let i=document.querySelector(".width-enter"),u=document.querySelector(".height-enter"),h=document.querySelector(".red-enter"),f=document.querySelector(".green-enter"),y=document.querySelector(".blue-enter");l.setAttribute("height",u.value);l.setAttribute("width",i.value);const m=l.getContext("2d"),b=()=>{n=[],i=document.querySelector(".width-enter").value,u=document.querySelector(".height-enter").value,h=document.querySelector(".red-enter").value,f=document.querySelector(".green-enter").value,y=document.querySelector(".blue-enter").value,l.setAttribute("height",u),l.setAttribute("width",i);for(let e=0;e<=i;e++)for(let r=0;r<=u;r++)n.push(new g(e,r));for(let e=0;e<=u*i;e++)n[e].color=[a(h,n[e].x,n[e].y),a(f,n[e].x,n[e].y),a(y,n[e].x,n[e].y)],n[e].drawPoint()};p.addEventListener("click",b);
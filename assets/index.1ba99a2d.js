var v=Object.defineProperty,b=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var _=(s,t,r)=>t in s?v(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r,m=(s,t)=>{for(var r in t||(t={}))N.call(t,r)&&_(s,r,t[r]);if(p)for(var r of p(t))x.call(t,r)&&_(s,r,t[r]);return s},g=(s,t)=>b(s,f(t));import{j as i,a as e,B as L,b as k,c as y,r as u,A as S,d as w,e as U,R as E,f as T,F as I,g as j,V as A,h as C,i as M,S as q,P as B,k as F,M as D,l as P,m as R,n as O,o as W,p as H,q as G,s as K,t as V}from"./vendor.fffd77cd.js";const Y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerpolicy&&(l.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?l.credentials="include":c.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(c){if(c.ep)return;c.ep=!0;const l=r(c);fetch(c.href,l)}};Y();const J=()=>i("div",{className:"header__socials",children:[e("a",{href:"https://linkedin.com",target:"_blank",children:e(L,{})}),e("a",{href:"https://github.com",target:"_blank",children:e(k,{})}),e("a",{href:"https://discord.com",target:"_blank",children:e(y,{})})]});function X(){return i("div",{className:"header__buttons",children:[e("a",{href:"/assets/cv.pdf",download:!0,className:"btn",children:"Download CV"}),e("a",{href:"#contact",className:"btn btn-primary",children:"Let's Talk"})]})}const z=()=>e("header",{children:i("div",{className:"container header__container",children:[e("h5",{children:"Hello I'm"}),e("h1",{children:"u-03c9"}),e("h5",{className:"text-light",children:"Web Developer"}),e(X,{}),e(J,{}),e("div",{className:"header__profile_pic",children:e("img",{src:"assets/me.png",alt:""})}),e("a",{href:"#contact",className:"header__scroll_down",children:"Scroll Down"})]})});const $=()=>{const[s,t]=u.exports.useState("#"),r=o=>s===o?"active":"";return i("nav",{children:[e("a",{href:"#",className:r("#"),onClick:()=>t("#"),children:e(S,{})}),e("a",{href:"#about",className:r("#about"),onClick:()=>t("#about"),children:e(w,{})}),e("a",{href:"#experiences",className:r("#experiences"),onClick:()=>t("#experiences"),children:e(U,{})}),e("a",{href:"#services",className:r("#services"),onClick:()=>t("#services"),children:e(E,{})}),e("a",{href:"#contact",className:r("#contact"),onClick:()=>t("#contact"),children:e(T,{})})]})};const Q=()=>i("section",{id:"about",children:[e("h5",{children:"Get To Know"}),e("h2",{children:"About me"}),i("div",{className:"container about__container",children:[e("div",{className:"about__profile",children:e("div",{className:"about__profile__pic_container",children:e("img",{src:"assets/me-about.jpg",alt:""})})}),i("div",{className:"about__content",children:[i("div",{className:"about__cards",children:[i("article",{className:"about__card",children:[e(I,{className:"about__icon"}),e("h5",{children:"Experience"}),e("small",{children:"3+ Years Working"})]}),i("article",{className:"about__card",children:[e(j,{className:"about__icon"}),e("h5",{children:"Clients"}),e("small",{children:"200+ Worldwide"})]}),i("article",{className:"about__card",children:[e(A,{className:"about__icon"}),e("h5",{children:"Projects"}),e("small",{children:"80+ Completed"})]})]}),e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptates inventore commodi explicabo nesciunt ratione vitae nostrum! Sed, dolorem saepe? Accusamus accusantium assumenda doloribus totam necessitatibus blanditiis nam veniam ex."}),e("a",{href:"#contact",className:"btn btn-primary",children:"Let's Talk"})]})]})]});const n=({title:s,subtitle:t})=>i("article",{className:"experiences__details",children:[e(C,{className:"icon"}),i("div",{children:[e("h4",{children:s}),e("small",{className:"text-light",children:t})]})]}),Z=()=>i("section",{id:"experiences",children:[e("h5",{children:"The Skills I Have"}),e("h2",{children:"My Experiences"}),i("div",{className:"container experiences__cards",children:[i("div",{className:"experiences__card",children:[e("h3",{children:"Frontend Development"}),i("div",{className:"experiences__content",children:[e(n,{title:"HTML",subtitle:"Experienced"}),e(n,{title:"CSS",subtitle:"Intermediate"}),e(n,{title:"Javascript",subtitle:"Experienced"}),e(n,{title:"Bootstrap",subtitle:"Experienced"}),e(n,{title:"Tailwind",subtitle:"Experienced"}),e(n,{title:"Vue",subtitle:"Intermediate"}),e(n,{title:"React",subtitle:"Intermediate"})]})]}),i("div",{className:"experiences__card",children:[e("h3",{children:"Backend Development"}),i("div",{className:"experiences__content",children:[e(n,{title:"MongoDB",subtitle:"Experienced"}),e(n,{title:"Go",subtitle:"Intermediate"}),e(n,{title:"Postgresql",subtitle:"Experienced"}),e(n,{title:"Python",subtitle:"Experienced"}),e(n,{title:"Rust",subtitle:"Experienced"})]})]})]})]});function h({title:s,children:t}){return i("article",{className:"service",children:[e("div",{className:"service__head",children:e("h3",{children:s})}),e("ul",{className:"service__list",children:t})]})}const a=({description:s})=>i("li",{children:[e(M,{className:"icon"}),e("p",{children:s})]});const ee=()=>i("section",{id:"services",children:[e("h5",{children:"What I Offer"}),e("h2",{children:"Services"}),i("div",{className:"container services__container",children:[i(h,{title:"UI/UX design",children:[e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})]}),i(h,{title:"Web Development",children:[e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})]}),i(h,{title:"Content Creation",children:[e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),e(a,{description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})]})]})]});function ie({title:s,imageUrl:t,githubUrl:r,url:o}){return i("div",{className:"portfolio__item",children:[e("div",{className:"image",children:e("img",{src:t,alt:s})}),e("h3",{children:s}),i("div",{className:"buttons",children:[e("a",{href:r,className:"btn",target:"_blank",children:"Github"}),e("a",{href:o,className:"btn btn-primary",target:"_blank",children:"Live Demo"})]})]})}const te=()=>i("section",{id:"portfolio",children:[e("h5",{children:"My Recent Work"}),e("h2",{children:"Portfolio"}),e("div",{className:"container portfolio__container",children:[{id:0,title:"This is the title",imageUrl:"assets/portfolio1.jpg",githubUrl:"https://github.com",url:"https://vercel.com"},{id:1,title:"This is the title",imageUrl:"assets/portfolio2.jpg",githubUrl:"https://github.com",url:"https://vercel.com"},{id:2,title:"This is the title",imageUrl:"assets/portfolio3.jpg",githubUrl:"https://github.com",url:"https://vercel.com"},{id:3,title:"This is the title",imageUrl:"assets/portfolio4.jpg",githubUrl:"https://github.com",url:"https://vercel.com"},{id:4,title:"This is the title",imageUrl:"assets/portfolio5.png",githubUrl:"https://github.com",url:"https://vercel.com"},{id:5,title:"This is the title",imageUrl:"assets/portfolio6.jpg",githubUrl:"https://github.com",url:"https://vercel.com"}].map(t=>u.exports.createElement(ie,g(m({},t),{key:t.imageUrl})))})]});const se=({imageUrl:s,name:t,review:r})=>i("div",{className:"testimonial_item",children:[e("div",{className:"testimonial_item__avatar",children:e("img",{src:s,alt:""})}),e("h5",{className:"testimonial_item__name",children:t}),e("small",{className:"testimonial_item__review",children:r})]});const re=()=>i("section",{id:"testimonials",children:[e("h5",{children:"Review from clients"}),e("h2",{children:"Testimonials"}),e("div",{className:"container testimonials__container",children:e(q,{modules:[B],spaceBetween:40,slidesPerView:1,pagination:{clickable:!0},children:[{imageUrl:"assets/avatar1.jpg",name:"Tina Snow",review:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nesciunt ea, odio id dolore
        ipsum consectetur maxime, qui aspernatur exercitationem obcaecati cumque porro? Sunt
        placeat, nostrum eum et laudantium illo.`},{imageUrl:"assets/avatar2.jpg",name:"Shatta Wale",review:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nesciunt ea, odio id dolore
        ipsum consectetur maxime, qui aspernatur exercitationem obcaecati cumque porro? Sunt
        placeat, nostrum eum et laudantium illo.`},{imageUrl:"assets/avatar3.jpg",name:"Kuame Despite",review:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nesciunt ea, odio id dolore
        ipsum consectetur maxime, qui aspernatur exercitationem obcaecati cumque porro? Sunt
        placeat, nostrum eum et laudantium illo.`},{imageUrl:"assets/avatar4.jpg",name:"Amal Mahmoud",review:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nesciunt ea, odio id dolore
        ipsum consectetur maxime, qui aspernatur exercitationem obcaecati cumque porro? Sunt
        placeat, nostrum eum et laudantium illo.`}].map(t=>e(F,{children:e(se,m({},t))},t.name))})})]});const ae=()=>{const s=u.exports.useRef();return i("section",{id:"contact",children:[e("h5",{children:"Get In Touch"}),e("h2",{children:"Contact Me"}),i("div",{className:"container contact__container",children:[i("div",{className:"contact__options",children:[i("div",{className:"contact__option",children:[e(D,{className:"icon"}),e("h4",{children:"Email"}),e("h5",{children:"test@test.com"}),e("a",{href:"mailto:test@gmail.com",target:"_blank",children:"Send a message"})]}),i("div",{className:"contact__option",children:[e(P,{className:"icon"}),e("h4",{children:"Messenger"}),e("h5",{children:"Profile Name"}),e("a",{href:"https://m.me/profileId",target:"_blank",children:"Send a message"})]}),i("div",{className:"contact__option",children:[e(R,{className:"icon"}),e("h4",{children:"Whatsapp"}),e("h5",{children:"+20 0010 010 1010"}),e("a",{href:"https://api.whatsapp.com/send?phone=+2000100101010",target:"_blank",children:"Send a message"})]})]}),i("form",{ref:s,onSubmit:r=>{r.preventDefault(),O.sendForm("service_9ma0sjw","template_b6k301o",s.current,"h_v6hFfnl1qXzKkMD").then(o=>{console.log(o.text)},o=>{console.log(o.text)}),r.target.reset()},children:[e("input",{type:"text",name:"name",placeholder:"Your Full Name",required:!0}),e("input",{type:"email",name:"email",placeholder:"Your Email",required:!0}),e("textarea",{name:"message",rows:"7",placeholder:"Your message",required:!0}),e("button",{type:"submit",className:"btn btn-primary",children:"Send Message"})]})]})]})};const ce=()=>i("footer",{children:[e("a",{href:"#",className:"footer__logo",children:"u03c9"}),i("ul",{className:"permalinks",children:[e("a",{href:"#",children:"Home"}),e("a",{href:"#about",children:"About"}),e("a",{href:"#experience",children:"Experience"}),e("a",{href:"#testimonials",children:"Testimonials"}),e("a",{href:"#contact",children:"Contact"})]}),i("div",{className:"footer__socials",children:[e("a",{href:"https://facebook.com",target:"_blank",children:e(W,{})}),e("a",{href:"https://instagram.com",target:"_blank",children:e(H,{})}),e("a",{href:"https://twitter.com",target:"_blank",children:e(G,{})})]}),e("div",{className:"footer__copyrights",children:e("small",{children:"\xA9 Just Kidding"})})]});function ne(){return i("div",{className:"App",children:[e(z,{}),e($,{}),e(Q,{}),e(Z,{}),e(ee,{}),e(te,{}),e(re,{}),e(ae,{}),e(ce,{})]})}K.render(e(V.StrictMode,{children:e(ne,{})}),document.getElementById("root"));

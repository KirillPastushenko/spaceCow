if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise((async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},i=(i,n)=>{Promise.all(i.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(i)};self.define=(i,r,a)=>{n[i]||(n[i]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return n;case"module":return c;default:return e(i)}}))).then((e=>{const i=a(...e);return n.default||(n.default=i),n}))})))}}define("./service-worker.js",["./workbox-15dd0bab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/./index.html",revision:"1d9fdce9e2f71346a42931061d3fd521"},{url:"/android-icon-144x144.png",revision:"2062a0c481a6070a046136d2a474f63f"},{url:"/android-icon-192x192.png",revision:"c052203cd98d2377174d3a6258bbc6bd"},{url:"/android-icon-36x36.png",revision:"86c3de31921a724e6cd29748ada0eabe"},{url:"/android-icon-48x48.png",revision:"3e7c0e9851034dadfb57b6a2f0b4f892"},{url:"/android-icon-72x72.png",revision:"b995238e7cdb5ff27c1eb5b2203597a3"},{url:"/android-icon-96x96.png",revision:"181d68820a025077934b2e4564e2b1ae"},{url:"/apple-icon-114x114.png",revision:"4c779bb2da18a19d94da8323eab1a0b6"},{url:"/apple-icon-120x120.png",revision:"a1d614551d3dde1ad617e97d12e949ec"},{url:"/apple-icon-144x144.png",revision:"2062a0c481a6070a046136d2a474f63f"},{url:"/apple-icon-152x152.png",revision:"f2613130e2197a29d414571b5518c173"},{url:"/apple-icon-180x180.png",revision:"9ea101a0f8cfd625cc7323354c86af7c"},{url:"/apple-icon-57x57.png",revision:"b5c9805cda602f8cb719e798d4b217ca"},{url:"/apple-icon-60x60.png",revision:"89325344d83a9b59ce8b2acbc0957a79"},{url:"/apple-icon-72x72.png",revision:"b995238e7cdb5ff27c1eb5b2203597a3"},{url:"/apple-icon-76x76.png",revision:"16d6a3a0e45fb494f6618e17b64aa011"},{url:"/apple-icon-precomposed.png",revision:"267ad7ebabbb48a13c89c81d06379e03"},{url:"/apple-icon.png",revision:"267ad7ebabbb48a13c89c81d06379e03"},{url:"/assets/css/app.5826e4bb70549e7d6b9e.css",revision:null},{url:"/assets/img/img1.png",revision:"71ccc5cb953ce3e01f4fc5721a5a7f76"},{url:"/assets/js/app.5826e4bb70549e7d6b9e.js",revision:null},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"3f13445cd92901f1c33e389512d1b4ba"},{url:"/favicon-32x32.png",revision:"b50fe6c449486d44b3c25b4c808efef5"},{url:"/favicon-512x512.png",revision:"a37f7957a6a6ed3b77d6b3915cc67933"},{url:"/favicon-96x96.png",revision:"181d68820a025077934b2e4564e2b1ae"},{url:"/favicon.ico",revision:"89dd80e5278a6b4325f9f7dd937f669d"},{url:"/manifest.json",revision:"23ec448137c12e3ec974f1abe44e397b"},{url:"/ms-icon-144x144.png",revision:"2062a0c481a6070a046136d2a474f63f"},{url:"/ms-icon-150x150.png",revision:"ba992a6d61444918bd349b28b3d894fe"},{url:"/ms-icon-310x310.png",revision:"277da630056950e29f9251659373a406"},{url:"/ms-icon-70x70.png",revision:"2a82f50fc65c0f32a9674ba6c53c5807"},{url:"/sw.js",revision:"2f3fb512a30bed84a19e4f8b8fb3e2f1"}],{})}));

if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>n(e,c),r={module:{uri:c},exports:o,require:t};s[c]=Promise.all(i.map((e=>r[e]||t(e)))).then((e=>(a(...e),o)))}}define(["./workbox-fb87826f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8c57ab53ec7339f418dd21e3cdbcd17d"},{url:"/_next/static/6kHm08dwIhGsloYEe693a/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/6kHm08dwIhGsloYEe693a/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/250-dafb94b3eafbf825.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/69-7a036e329596db16.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/app/%5B...slug%5D/loading-ae46ad2b40d80ed9.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/app/%5B...slug%5D/page-713b900a215ed4e4.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/app/error-1b1669fe52db63f2.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/app/layout-ddb1daddb84a3943.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/app/loading-a2bcd363f9fa50c1.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/app/not-found-dac456530b4b93ef.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/app/offline/page-616ac0f0ccff6061.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/app/page-0d9b3064a6e21b43.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/fd9d1056-ac6f5abd6232f256.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/main-88f19cd3f9b5098b.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/main-app-08c5f66a1e28d52d.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-f9b0d553fda1500e.js",revision:"6kHm08dwIhGsloYEe693a"},{url:"/_next/static/css/3cbd70ff48da2307.css",revision:"3cbd70ff48da2307"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icons/android-icon-144x144.png",revision:"1ca5a4ff3325410bb3b6a4e1e5f90476"},{url:"/icons/android-icon-192x192.png",revision:"49b7d9e6c920ac6878dee7be209c49ba"},{url:"/icons/android-icon-36x36.png",revision:"f782504bc920e6dac418f1dd2d6f617f"},{url:"/icons/android-icon-48x48.png",revision:"da5fec6a980415cc72fad8740a8dd261"},{url:"/icons/android-icon-72x72.png",revision:"41b892f6401e36dce087984a20f50e33"},{url:"/icons/android-icon-96x96.png",revision:"4785359846d4f7bda4bc533d0593f1c3"},{url:"/icons/apple-icon-114x114.png",revision:"32cbfdac1786781559da203531b9eb19"},{url:"/icons/apple-icon-120x120.png",revision:"0b22c38a60867527330805d500679848"},{url:"/icons/apple-icon-144x144.png",revision:"1ca5a4ff3325410bb3b6a4e1e5f90476"},{url:"/icons/apple-icon-152x152.png",revision:"7fdf1514093d7ad7499e5faee3326d94"},{url:"/icons/apple-icon-180x180.png",revision:"22783955e221eef15663e3259e8be1da"},{url:"/icons/apple-icon-57x57.png",revision:"002a883c80a9f9954b3546673e7bc444"},{url:"/icons/apple-icon-60x60.png",revision:"82b0c0e3af6668abd4791ca730a3c157"},{url:"/icons/apple-icon-72x72.png",revision:"41b892f6401e36dce087984a20f50e33"},{url:"/icons/apple-icon-76x76.png",revision:"f00e253b4d4db17a8b41466b9e334004"},{url:"/icons/apple-icon-precomposed.png",revision:"39db2b93f7d4f2e337ade19fd8d6f7b5"},{url:"/icons/apple-icon.png",revision:"39db2b93f7d4f2e337ade19fd8d6f7b5"},{url:"/icons/favicon-16x16.png",revision:"40bd74029fdbc92878159d06abfaaf87"},{url:"/icons/favicon-32x32.png",revision:"b2b50f9506edbf66ba04e5097932f78f"},{url:"/icons/favicon-96x96.png",revision:"1c3a04aee7ee8fd6de846f85c058f011"},{url:"/icons/favicon.ico",revision:"5bdc72ea07ec08e2f7d90bf169be28ad"},{url:"/icons/ms-icon-144x144.png",revision:"29d06c6a8ed59c50521aec227bc26ece"},{url:"/icons/ms-icon-150x150.png",revision:"f84840ba30411f5f7bf2c5e888a395c7"},{url:"/icons/ms-icon-310x310.png",revision:"781308e0083fad8ebe63a3692cc7cf95"},{url:"/icons/ms-icon-70x70.png",revision:"d2ec8666b7d1f15d70c72324b04e351f"},{url:"/manifest.json",revision:"3432c80f6f69f625b7e15c1712728dc7"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
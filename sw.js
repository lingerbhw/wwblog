"use strict";var precacheConfig=[["/404/index.html","08ff3cc08bea1df94f8a377dfb84fa68"],["/archives/2022/09/index.html","ec39dff4d907e34384518f6e82d829b7"],["/archives/2022/10/index.html","11db7bf17a43c659cb64424dc9b9267e"],["/archives/2022/index.html","b0feabce3121ef504742332fba37b701"],["/archives/index.html","8c162aab62d59c710354c3591dab2df8"],["/categories/index.html","74d94a7fb92a5e8579c9fa9aa282f08f"],["/categories/随笔/index.html","314eec3435be3c3eb5362ef6d77c1ad4"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","512f2c6f673fc32883ce233587af9a42"],["/css/first.css","6cb944f61b3af06138fb2d6fe4542beb"],["/css/style.css","28636a3694aa0d2d57d309be01d94445"],["/fcircle/index.html","833f5c328a18c0426630c9e4e12c4bc3"],["/friends/index.html","8bca6a1454f39de267a91f56612557bd"],["/img/avatar.png","a02117cb01843777a38fad6b8aee3f29"],["/index.html","4888b9290e1ed1ebdfb3d2f35c5e1a5d"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/sw-register.js","32f3fb0e7988242e34af2d71d40b856b"],["/tags/index.html","eaa56f5d570e8bc0609182bbecf524f5"],["/tags/久别/index.html","cbffdaf550169d8e65a7cc83d090533b"],["/tags/人生/index.html","915a6211148bfcf4306c64d7b8a8513e"],["/tags/倒序/index.html","f3d55b994a456145a9fc6337b7395e67"],["/tags/生活/index.html","47a35f03707a697ea27da60b2f007733"],["/tags/随笔/index.html","319f34a398cf70f1b400dfd15fb3f960"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)})))}}));
//# sourceMappingURL=maps/sw.js.map

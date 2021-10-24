"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{9837:function(e,t,r){r.d(t,{I:function(){return i}});var n=r(4058),s=r(9495),l=r(5893),i=function(e){var t=e.path,r=e.subtitle,i=e.description,a=void 0===i?"\u82b8\u5de5\u5c552021\uff01\u540d\u53e4\u5c4b\u5e02\u7acb\u5927\u5b66\u82b8\u8853\u5de5\u5b66\u90e8\u306e\u5b66\u751f\u306b\u3088\u308b\u69d8\u3005\u306a\u4f01\u753b\u304c\u697d\u3057\u3081\u308b\u5b8c\u5168\u30aa\u30f3\u30e9\u30a4\u30f3\u306e\u5c55\u793a\u4f1a\u3067\u3059\uff01":i,c=e.ogImagePath,o=void 0===c?"/images/ogp.png":c,C=(0,s.a)(t),u=(0,s.a)(o),d=r?"\u82b8\u5de5\u5c552021 - ".concat(r):"\u82b8\u5de5\u5c552021";return(0,l.jsx)(n.Z,{title:d,canonical:C,description:a,og:{title:d,description:a,url:C,image:u,type:"website",siteName:"\u82b8\u5de5\u5c552021"},twitter:{card:"summary"}})}},583:function(e,t,r){r.d(t,{A:function(){return _}});var n=r(3966),s=r(1955),l=r(6010),i=r(7294),a=r(8403),c=r(5893),o=(0,i.forwardRef)((function(e,t){var r=e.className,n=(0,i.useCallback)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]);return(0,c.jsx)("button",{className:(0,l.Z)("bg-brown w-[54px] h-[54px]",r),onClick:n,ref:t,children:(0,c.jsx)("span",{className:"flex items-center justify-center w-full h-full",children:(0,c.jsx)(a.Eh,{className:"w-6"})})})}));o.displayName="ScrollToTop";var C=r(3862),u=function(){var e=function(){return(0,c.jsx)(s.d,{href:C.N9,children:(0,c.jsxs)("div",{className:"flex mx-1 space-x-0.5",children:[(0,c.jsx)("p",{className:"text-sm leading-none underline font-regular",children:"\u540d\u53e4\u5c4b\u5e02\u7acb\u5927\u5b66\u82b8\u8853\u5de5\u5b66\u90e8HP"}),(0,c.jsx)(a.dL,{})]})})};return(0,c.jsxs)("footer",{className:"relative bg-lightBrown pl-shead",children:[(0,c.jsx)(o,{className:"absolute top-0 right-0"}),(0,c.jsx)("div",{className:"flex items-end justify-between w-full px-4 py-16 text-white lg:px-9",children:(0,c.jsxs)("div",{className:"flex flex-col w-full space-y-5",children:[(0,c.jsxs)("div",{className:"flex items-end space-x-3 lg:space-x-5",children:[(0,c.jsx)("p",{className:"text-xl font-bold leading-none",children:"\u540d\u53e4\u5c4b\u5e02\u7acb\u5927\u5b66\u82b8\u8853\u5de5\u5b66\u90e8"}),(0,c.jsx)(e,{})]}),(0,c.jsxs)("div",{className:"flex items-end justify-between w-full",children:[(0,c.jsxs)("p",{className:"text-sm leading-loose font-regular",children:["\u3012464-008 \u540d\u53e4\u5c4b\u5e02\u5343\u7a2e\u533a\u5317\u5343\u7a2e2\u4e01\u76ee1\u756a10\u53f7",(0,c.jsx)("br",{}),"TEL052-721-1225(\u4ee3) FAX052-721-3110"]}),(0,c.jsx)("small",{className:"text-white font-regular",children:"\xa9\ufe0f Copyright 2021geikoten"})]})]})})]})},d=r(4942),x=r(4925),f=r(5322),h=r(6742),m=r(2474),p=r(1664),j=r(1163),v=r(885),b=r(1171),g=r.n(b);var w=[{id:"top",text:"TOP",subText:"\u30c8\u30c3\u30d7",path:"/#top",activePatterns:["/#top","/"]},{id:"about",text:"ABOUT",subText:"\u82b8\u5de5\u5c55\u3068\u306f",path:"/#about",activePatterns:["/#about","/about"]},{id:"project",text:"PROJECT",subText:"\u4f01\u753b",path:"/#project",activePatterns:["/#project","/project/**/*"]},{id:"event",text:"EVENT",subText:"\u30a4\u30d9\u30f3\u30c8",path:"/#event",activePatterns:["/#event"]}],N=function(){var e=(0,j.useRouter)(),t="/"===e.pathname,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=(0,i.useState)(),n=r[0],s=r[1];return(0,i.useEffect)((function(){if("undefined"!==typeof IntersectionObserver){var r=e.map((function(e){var n=document.getElementById(e);if(n)return new IntersectionObserver((function(r){(0,v.Z)(r,1)[0].isIntersecting?s(e):t&&s(void 0)}),{rootMargin:"-50% 0% -50% 0%"}).observe(n),r}));return function(){r.forEach=function(e){return null===e||void 0===e?void 0:e.disconnect()}}}}),[]),n}(w.map((function(e){return e.id})));return(0,c.jsx)("ul",{className:"flex flex-col pl-8 space-y-6",children:w.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(p.default,{href:n.path,children:(0,c.jsx)("a",{style:{display:"block"},children:(0,c.jsx)("div",{className:"flex flex-col items-start py-3",children:(0,c.jsxs)("div",{className:(0,l.Z)("w-full border-r-8 border-solid border-transparent transform duration-300 group",{"border-green-10":t&&n.id===r||!t&&(s=e.asPath,i=n.activePatterns,i.some((function(e){return g()(s,e)})))}),children:[(0,c.jsx)("p",{className:"text-2xl text-white duration-300 transform font-genuine group-hover:scale-90",style:{position:"relative",top:"0.15em"},children:n.text}),(0,c.jsx)("p",{className:"mt-0.5 overflow-visible text-white duration-300 transform text-xxs font-genuine group-hover:scale-90",children:n.subText})]})})})})},n.id);var s,i}))})},y=["className"];function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=function(e){var t=e.className,r=(0,x.Z)(e,y);return(0,c.jsx)("header",O(O({className:(0,l.Z)("flex items-center py-5 overflow-y-auto",t)},r),{},{children:(0,c.jsxs)("div",{className:"w-full h-full max-h-[680px] my-auto flex flex-col justify-between",children:[(0,c.jsx)("div",{className:"mx-auto",children:(0,c.jsx)(f.Ee,{src:"/images/logo.png",alt:"logo",width:123,height:116})}),(0,c.jsx)(N,{}),(0,c.jsx)("div",{className:"mx-auto",children:(0,c.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,c.jsx)(s.d,{href:C.N$,className:"p-2 duration-300 transform hover:scale-90",children:(0,c.jsx)(m.Z,{color:"white"})}),(0,c.jsx)(s.d,{href:C._v,className:"p-2 duration-300 transform hover:scale-90",children:(0,c.jsx)(h.y,{color:"white"})})]})})]})}))},k=function(e){var t=e.children;return(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)(Z,{className:"fixed top-0 left-0 z-50 h-screen bg-menuBg w-shead"}),(0,c.jsxs)("div",{className:"flex flex-col justify-between w-full min-h-screen",children:[(0,c.jsx)("main",{className:"bg-bg",children:t}),(0,c.jsx)(u,{})]})]})},L=function(){var e=function(){return(0,c.jsx)(s.d,{href:C.N9,children:(0,c.jsxs)("div",{className:"flex space-x-0.5",children:[(0,c.jsx)("p",{className:"text-xs leading-none underline font-regular",children:"\u540d\u53e4\u5c4b\u5e02\u7acb\u5927\u5b66\u82b8\u8853\u5de5\u5b66\u90e8HP"}),(0,c.jsx)(a.dL,{})]})})};return(0,c.jsxs)("footer",{className:"relative bg-lightBrown",children:[(0,c.jsx)(o,{className:"absolute top-0 right-0"}),(0,c.jsx)("div",{className:"flex flex-col px-8 pt-16 pb-8 text-white",children:(0,c.jsxs)("div",{className:"flex flex-col",children:[(0,c.jsxs)("div",{className:"flex flex-col items-start space-y-3",children:[(0,c.jsx)("p",{className:"text-sm font-bold leading-none",children:"\u540d\u53e4\u5c4b\u5e02\u7acb\u5927\u5b66\u82b8\u8853\u5de5\u5b66\u90e8"}),(0,c.jsx)(e,{})]}),(0,c.jsx)("div",{className:"mt-5",children:(0,c.jsxs)("p",{className:"text-xs leading-loose font-regular",children:["\u3012464-008 \u540d\u53e4\u5c4b\u5e02\u5343\u7a2e\u533a\u5317\u5343\u7a2e2\u4e01\u76ee1\u756a10\u53f7",(0,c.jsx)("br",{}),"TEL052-721-1225(\u4ee3) FAX052-721-3110"]})}),(0,c.jsx)("div",{className:"mt-10 text-center",children:(0,c.jsx)("small",{className:"text-white text-xxs font-regular",children:"\xa9\ufe0f Copyright 2021geikoten"})})]})})]})},P=r(5988),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=(0,i.useState)(!1),r=t[0],n=t[1];return(0,i.useEffect)((function(){var t=function(){var t=function(){var e=window.navigator.userAgent.toLowerCase();return"scrollingElement"in document?document.scrollingElement:e.indexOf("webkit")>0?document.body:document.documentElement}().scrollTop;n(!(t<=e))};return document.addEventListener("scroll",t,{passive:!0}),function(){document.removeEventListener("scroll",t)}}),[e]),r},T=r(9726),M=r(4651),S=function(e){var t=(0,M.useRouter)(),r=(0,i.useCallback)((function(r,n){r.preventDefault(),e.onLinkClick(),t.push(n.path,void 0,{scroll:!1})}),[e,t]);return(0,c.jsxs)("div",{className:"relative flex items-center justify-center w-full h-full",children:[(0,c.jsx)("ul",{className:"flex flex-col pb-24 space-y-6",children:w.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)("button",{onClick:function(t){return r(t,e)},className:"block text-2xl font-bold text-white",children:(0,c.jsx)("div",{className:"flex flex-col items-start py-3",children:(0,c.jsxs)("div",{className:"w-full duration-300 transform border-r-8 border-transparent border-solid group",children:[(0,c.jsx)("p",{className:"text-3xl leading-none text-white duration-300 transform font-genuine group-hover:scale-90",children:e.text}),(0,c.jsx)("p",{className:"mt-1 text-sm leading-none text-left text-white duration-300 transform font-genuine group-hover:scale-90",children:e.subText})]})})})},e.id)}))}),(0,c.jsx)("div",{className:"absolute bottom-0 w-full",children:(0,c.jsxs)("div",{className:"flex flex-col items-center justify-center h-40 space-y-3 bg-white",children:[(0,c.jsx)("p",{className:"text-sm font-black text-black",children:"OFFICIAL SNS"}),(0,c.jsxs)("ul",{className:"flex space-x-5",children:[(0,c.jsx)(f.dL,{href:C.N$,children:(0,c.jsx)(a.Zm,{color:"original"})}),(0,c.jsx)(f.dL,{href:C._v,children:(0,c.jsx)(a.yu,{color:"original"})})]})]})})]})},V=r(2464),D=function(e){var t=(0,l.Z)({"text-white":"white"===e.color,"text-brown":"black"===e.color},e.className);return(0,c.jsxs)("svg",{className:t,width:"161",height:"17",viewBox:"0 0 161 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("path",{d:"M9.14731 8.11923e-05H9.27567C10.9491 -0.00777802 12.5753 0.55514 13.8857 1.59594C14.176 1.84205 14.4511 2.10567 14.7093 2.38531C14.7299 2.41987 14.7559 2.45093 14.7863 2.4773V2.49655C13.045 4.04535 12.036 4.94097 11.7593 5.18342C11.3867 4.76194 10.9272 4.42625 10.4124 4.1995C9.89756 3.97274 9.33969 3.8603 8.77723 3.86993C7.60493 3.86993 6.51821 4.30776 5.51705 5.18342C5.24387 5.44184 4.99403 5.72389 4.77047 6.02627C4.17977 6.85327 3.85855 7.84234 3.8506 8.8586C3.83896 9.38116 3.93313 9.90067 4.12743 10.3859C4.32174 10.8711 4.61217 11.312 4.98127 11.6821C5.35036 12.0522 5.7905 12.3439 6.2752 12.5395C6.7599 12.7351 7.27916 12.8307 7.80174 12.8204C8.77436 12.8145 9.72123 12.5073 10.5121 11.9412C10.572 11.3529 10.602 11.047 10.602 11.0192H7.58782C7.45091 11.0021 7.3739 10.9401 7.3739 10.8288C7.57641 8.72526 7.68908 7.615 7.7119 7.49806C7.73205 7.453 7.76476 7.41471 7.80612 7.38778C7.84747 7.36084 7.89572 7.34639 7.94507 7.34617H13.2418L13.2675 7.36542H14.5959C14.6879 7.36542 14.7414 7.42104 14.7585 7.53014L14.2986 12.1509L13.8515 16.4956C13.8361 16.5323 13.8097 16.5633 13.776 16.5843C13.7423 16.6054 13.7029 16.6155 13.6632 16.6133H10.2169C10.1035 16.5962 10.0479 16.5427 10.0479 16.455V16.4357C10.0479 16.3951 10.0479 16.3352 10.0608 16.2518C9.20774 16.5384 8.31444 16.6872 7.41455 16.6924H7.28619C5.75883 16.6973 4.26789 16.2262 3.02058 15.3447C2.65799 15.0812 2.31744 14.7886 2.00231 14.4698C1.608 14.0491 1.26411 13.5839 0.977624 13.0836C0.339756 11.955 0.00308267 10.6812 0 9.38485V9.20729C0.0192685 7.64687 0.443096 6.11814 1.23005 4.77055C1.54681 4.24415 1.90445 3.74345 2.29966 3.27309C2.62261 2.91476 2.96467 2.57413 3.32435 2.25268C3.89291 1.77845 4.50784 1.36277 5.1598 1.01193C6.38996 0.363291 7.75672 0.0164681 9.14731 8.11923e-05Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M17.9117 0.197133H27.8548C27.981 0.222803 28.043 0.284841 28.043 0.381106C27.8362 2.52033 27.7243 3.61989 27.7072 3.67979C27.6877 3.72534 27.6552 3.76408 27.6136 3.79112C27.5721 3.81816 27.5235 3.83227 27.474 3.83167H21.1719C21.1357 3.99759 21.1164 4.16673 21.1141 4.33653L20.8809 6.59127H25.9166C25.9619 6.58582 26.0077 6.59414 26.0482 6.61513C26.0886 6.63611 26.1218 6.6688 26.1434 6.70893C26.1447 6.73101 26.1447 6.75315 26.1434 6.77524C25.9395 8.98292 25.8297 10.0868 25.814 10.0868C25.7877 10.1333 25.749 10.1716 25.7021 10.1973C25.6552 10.223 25.6021 10.2351 25.5487 10.2322H20.5108C20.5108 10.2536 20.4181 11.1735 20.2327 12.9918H26.5327C26.6718 13.0047 26.7467 13.0667 26.7467 13.1758C26.5384 15.3364 26.4265 16.4381 26.4108 16.4809C26.39 16.5236 26.3578 16.5598 26.3178 16.5855C26.2778 16.6111 26.2316 16.6253 26.184 16.6264H16.2516C16.1383 16.605 16.0826 16.5472 16.0826 16.4552C16.713 10.2173 17.0546 6.85225 17.1073 6.36023C17.5052 2.42121 17.7106 0.41462 17.7234 0.34046C17.7748 0.244195 17.8368 0.197133 17.9117 0.197133Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M31.1685 0.197133H34.6169C34.6587 0.201915 34.6972 0.2221 34.7249 0.253747C34.7526 0.285393 34.7675 0.326228 34.7667 0.368271L33.7805 10.0803C33.3612 14.2262 33.143 16.3618 33.1259 16.4873C33.0703 16.5793 33.0082 16.6264 32.9376 16.6264H29.4892C29.4476 16.6211 29.4094 16.6008 29.3818 16.5693C29.3542 16.5377 29.3391 16.4971 29.3394 16.4552L30.3256 6.74315C30.7449 2.59734 30.9631 0.458119 30.9802 0.325487C30.9978 0.289648 31.0244 0.258984 31.0574 0.236489C31.0904 0.213994 31.1287 0.200434 31.1685 0.197133Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M37.8921 0.197133H41.3277C41.4389 0.222803 41.4967 0.280563 41.4967 0.368271L40.9191 6.03935C40.9832 5.95663 42.1805 4.21958 44.5108 0.828203C44.7012 0.552243 44.8232 0.381106 44.8788 0.31479C44.9513 0.245412 45.046 0.203763 45.1462 0.197133H49.0289C49.0973 0.197133 49.1315 0.22922 49.1315 0.2827C49.0254 0.507111 48.8909 0.717032 48.7315 0.907356C48.6188 1.07136 47.2569 3.04729 44.6456 6.83514L43.2209 8.89735C43.412 9.18258 45.0043 11.4958 47.9978 15.837C48.1633 16.0553 48.3147 16.284 48.4513 16.5215V16.56C48.4477 16.5793 48.4373 16.5966 48.4219 16.6088C48.4066 16.621 48.3874 16.6272 48.3678 16.6264H44.4723C44.3119 16.6264 44.16 16.5023 44.0167 16.252C41.8518 13.1145 40.6524 11.3753 40.4185 11.0344C40.062 14.587 39.8744 16.4096 39.8559 16.5023C39.8384 16.5366 39.8126 16.5659 39.7809 16.5876C39.7491 16.6093 39.7123 16.6226 39.674 16.6264H36.232C36.1187 16.6007 36.063 16.5429 36.063 16.4552L37.0556 6.74529C37.4749 2.54386 37.6931 0.404637 37.7102 0.327625C37.7267 0.292004 37.7521 0.261254 37.7839 0.238382C37.8158 0.21551 37.8531 0.201297 37.8921 0.197133Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M58.2532 0.0646175H58.3045C60.1628 0.0449127 61.9599 0.728006 63.336 1.97708C63.6509 2.27182 63.9374 2.59556 64.1917 2.94401C64.4972 3.34343 64.7603 3.7736 64.9767 4.22754C65.4477 5.26114 65.6906 6.38398 65.6891 7.51981C65.6891 9.40945 65.093 11.1971 63.9007 12.8828C63.6039 13.2726 63.2853 13.6455 62.9466 13.9995C62.4633 14.4784 61.9337 14.9084 61.3657 15.283C59.9459 16.2285 58.2818 16.7406 56.576 16.757H56.5247C54.6664 16.7767 52.8693 16.0936 51.4932 14.8445C51.1786 14.5502 50.8921 14.2272 50.6375 13.8797C50.3338 13.4794 50.0715 13.0494 49.8546 12.5962C49.3821 11.563 49.1384 10.44 49.1401 9.30392C49.1401 7.4157 49.7369 5.62802 50.9306 3.94089C51.2256 3.55016 51.5434 3.17728 51.8826 2.82421C52.3667 2.34534 52.897 1.91541 53.4656 1.54068C54.8849 0.595448 56.548 0.082668 58.2532 0.0646175ZM57.8638 3.91522H57.7868C56.9544 3.93423 56.1421 4.17497 55.4337 4.6126C55.0849 4.82842 54.7606 5.08163 54.4667 5.36775C54.1697 5.66212 53.909 5.99105 53.6902 6.34751C53.21 7.10746 52.9501 7.98574 52.9393 8.88463C52.9341 9.42692 53.0369 9.96484 53.2418 10.4669C53.4468 10.969 53.7498 11.4253 54.133 11.8089C54.1501 11.8089 54.2379 11.8945 54.3983 12.04C54.8664 12.4117 55.4116 12.6741 55.9942 12.808C56.2661 12.8736 56.5445 12.9087 56.8242 12.9128H57.0317C57.8639 12.8943 58.6762 12.6543 59.3848 12.2175C59.7328 12.0007 60.0563 11.7468 60.3496 11.4603C60.6471 11.1665 60.9085 10.8383 61.1283 10.4826C61.6041 9.71904 61.8595 8.83877 61.8663 7.93909C61.8716 7.39698 61.769 6.85923 61.5645 6.35717C61.3599 5.85512 61.0575 5.39879 60.6748 5.01478C60.5818 4.94236 60.4925 4.86525 60.4074 4.78374C59.9196 4.39397 59.3475 4.12365 58.7366 3.99437C58.4888 3.94272 58.2367 3.91408 57.9836 3.9088H57.8745L57.8638 3.91522Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M71.8608 0.197133H82.7194C82.8157 0.197133 82.8735 0.257031 82.8949 0.381106C82.6881 2.58878 82.5754 3.69262 82.5569 3.69262C82.5347 3.73371 82.502 3.76821 82.4622 3.79262C82.4223 3.81704 82.3768 3.83051 82.3301 3.83167H78.8239C78.1879 10.0311 77.8463 13.4047 77.7992 13.9523C77.6352 15.5211 77.5447 16.3661 77.5275 16.4873C77.51 16.5293 77.4802 16.565 77.442 16.5898C77.4039 16.6146 77.3591 16.6273 77.3136 16.6264H73.9037C73.7903 16.605 73.7347 16.5472 73.7347 16.4552C74.4478 9.44143 74.8172 5.80974 74.8428 5.56017L75.0118 3.83167H71.5035C71.3837 3.80814 71.3238 3.74824 71.3238 3.6477C71.532 1.43432 71.644 0.327625 71.6597 0.327625C71.6806 0.291616 71.7097 0.26104 71.7446 0.238369C71.7796 0.215699 71.8193 0.201572 71.8608 0.197133Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M86.0203 0.197133H95.9634C96.0896 0.222803 96.1516 0.284841 96.1516 0.381106C95.9434 2.52033 95.8314 3.61989 95.8158 3.67979C95.7961 3.72517 95.7634 3.76376 95.722 3.79076C95.6805 3.81777 95.6321 3.83199 95.5826 3.83167H89.2804C89.2443 3.99759 89.2249 4.16673 89.2227 4.33653L88.9895 6.59127H94.0252C94.0705 6.58582 94.1163 6.59414 94.1568 6.61513C94.1972 6.63611 94.2304 6.6688 94.252 6.70893C94.2532 6.73101 94.2532 6.75315 94.252 6.77524C94.0495 8.98292 93.9397 10.0868 93.9225 10.0868C93.8963 10.1333 93.8576 10.1716 93.8107 10.1973C93.7638 10.223 93.7107 10.2351 93.6573 10.2322H88.6194C88.6194 10.2536 88.5267 11.1735 88.3413 12.9918H94.6413C94.7804 13.0047 94.8553 13.0667 94.8553 13.1758C94.647 15.3364 94.5351 16.4381 94.5194 16.4809C94.4984 16.5239 94.4659 16.5603 94.4255 16.586C94.3851 16.6117 94.3384 16.6257 94.2905 16.6264H84.3602C84.2469 16.605 84.1912 16.5472 84.1912 16.4552C84.823 10.2173 85.1646 6.85225 85.2159 6.36023C85.6138 2.42121 85.8192 0.41462 85.832 0.34046C85.8834 0.244195 85.9454 0.197133 86.0203 0.197133Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M99.277 0.197133H102.713C102.856 0.197133 102.974 0.346877 103.07 0.650647C103.532 1.74165 104.796 4.74512 106.863 9.66105C107.466 3.6584 107.783 0.549391 107.815 0.334043C107.832 0.295979 107.859 0.263227 107.893 0.239162C107.928 0.215098 107.968 0.20059 108.009 0.197133H111.432C111.545 0.222803 111.601 0.278424 111.601 0.361854C111.588 0.495912 111.257 3.76179 110.608 10.1595C110.202 14.1983 109.988 16.3076 109.967 16.4873C109.911 16.5793 109.849 16.6264 109.778 16.6264H106.356C106.274 16.6264 106.204 16.528 106.142 16.3311C106.095 16.2313 104.977 13.5808 102.79 8.37966C102.674 8.10798 102.477 7.63949 102.201 6.97847C101.587 13.1109 101.264 16.2805 101.234 16.4873C101.217 16.5258 101.19 16.559 101.156 16.5834C101.122 16.6079 101.082 16.6227 101.04 16.6264H97.617C97.5057 16.6007 97.448 16.5451 97.448 16.4616C97.4608 16.3276 97.7896 13.0881 98.4342 6.74315C98.8449 2.66009 99.0631 0.52087 99.0888 0.325487C99.1064 0.289648 99.133 0.258984 99.166 0.236489C99.199 0.213994 99.2372 0.200434 99.277 0.197133Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M123.082 0.0645418C123.724 0.0580134 124.361 0.181655 124.953 0.428C125.546 0.674345 126.083 1.03828 126.531 1.49782C126.929 1.92329 127.248 2.41762 127.47 2.95677C127.705 3.5307 127.828 4.14422 127.833 4.76441V4.96122C127.816 6.01088 127.513 7.03594 126.956 7.92618C126.725 8.28202 126.462 8.61637 126.171 8.9252C123.623 11.4652 122.279 12.81 122.141 12.9598H126.742C126.837 12.9598 126.901 13.024 126.931 13.1566C126.728 15.1675 126.613 16.2734 126.586 16.4745C126.562 16.5214 126.524 16.5605 126.479 16.5874C126.433 16.6142 126.38 16.6277 126.327 16.6264H116.397C116.265 16.6136 116.196 16.5601 116.196 16.4681C116.399 14.3617 116.507 13.3085 116.521 13.3085C117.259 12.5726 119.165 10.6622 122.239 7.57749C123.181 6.64336 123.651 6.16133 123.651 6.13138C123.821 5.87766 123.913 5.58065 123.919 5.27569C123.922 5.05081 123.864 4.82931 123.751 4.63488C123.638 4.44045 123.474 4.2804 123.277 4.17185C123.088 4.07611 122.879 4.02489 122.667 4.0221C122.43 4.02644 122.197 4.08475 121.986 4.19261C121.774 4.30047 121.591 4.45505 121.448 4.64461C121.342 4.78683 121.259 4.94495 121.202 5.1131C121.149 5.27166 121.123 5.43797 121.125 5.60513C121.115 5.6234 121.101 5.63901 121.084 5.65057C121.067 5.66214 121.047 5.6693 121.026 5.67144H117.33C117.315 5.67063 117.301 5.66687 117.287 5.66037C117.274 5.65388 117.262 5.64478 117.252 5.63362C117.243 5.62246 117.235 5.60946 117.23 5.59538C117.226 5.5813 117.224 5.56643 117.225 5.55165V5.4618C117.275 4.87201 117.419 4.2941 117.653 3.75042C117.844 3.31589 118.081 2.90344 118.361 2.52037C118.924 1.75329 119.656 1.12601 120.5 0.687053C121.299 0.276375 122.184 0.062921 123.082 0.0645418Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M135.768 0.0645816H135.86C137.073 0.0585273 138.242 0.517916 139.126 1.34812C139.598 1.80561 139.972 2.35469 140.224 2.96167C140.476 3.56864 140.601 4.2207 140.592 4.87783C140.592 5.13169 140.521 5.85474 140.378 7.047L139.867 11.7383C139.767 12.2901 139.592 12.8256 139.347 13.3299C139.088 13.8504 138.761 14.3345 138.376 14.7696C138.115 15.0556 137.829 15.317 137.52 15.5504C136.541 16.3143 135.339 16.7365 134.097 16.7527H134.016C133.387 16.7583 132.764 16.6379 132.183 16.3988C131.602 16.1596 131.074 15.8064 130.632 15.36C129.743 14.4438 129.254 13.2132 129.271 11.9373C129.271 11.6791 129.351 10.862 129.511 9.48572C129.736 7.47485 129.896 6.02232 129.99 5.12812C130.139 4.26064 130.473 3.43544 130.97 2.70866C131.213 2.35559 131.491 2.02804 131.8 1.73103C132.15 1.39696 132.537 1.10346 132.953 0.856093C133.805 0.349472 134.776 0.0764687 135.768 0.0645816ZM133.105 11.5522C133.102 11.7865 133.161 12.0173 133.278 12.2208C133.394 12.4242 133.562 12.593 133.766 12.7095C133.974 12.8244 134.208 12.8855 134.446 12.8871C134.986 12.8871 135.449 12.6282 135.834 12.1105C135.99 11.8589 136.079 11.5718 136.093 11.2762C136.478 7.83495 136.696 5.83834 136.748 5.28642C136.752 5.05014 136.693 4.81702 136.577 4.61125C136.46 4.40549 136.291 4.23458 136.087 4.11627C135.878 4.00136 135.644 3.94032 135.406 3.93871C135.161 3.94227 134.919 4.0008 134.699 4.11001C134.479 4.21922 134.287 4.37633 134.136 4.56978C133.976 4.76032 133.863 4.98504 133.804 5.22652C133.774 5.33634 133.673 6.2234 133.5 7.88772C133.235 10.2223 133.103 11.4438 133.105 11.5522Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M148.903 0.0645053C149.545 0.057853 150.181 0.181438 150.774 0.427791C151.367 0.674143 151.903 1.03814 152.351 1.49778C153.184 2.3823 153.649 3.54979 153.654 4.76438V4.96118C153.633 6.01186 153.326 7.03699 152.766 7.92615C152.535 8.28199 152.272 8.61634 151.981 8.92516C149.443 11.4651 148.103 12.81 147.964 12.9597H152.571C152.668 12.9597 152.73 13.0239 152.76 13.1565C152.556 15.1674 152.442 16.2734 152.417 16.4745C152.392 16.5213 152.354 16.5602 152.308 16.5869C152.262 16.6137 152.21 16.6274 152.156 16.6264H142.22C142.085 16.6135 142.019 16.56 142.019 16.4681C142.223 14.3616 142.33 13.3084 142.342 13.3084C143.082 12.5725 144.988 10.6622 148.06 7.57745C149.001 6.64333 149.472 6.16129 149.474 6.13134C149.643 5.87744 149.735 5.58041 149.739 5.27565C149.742 5.05077 149.684 4.82927 149.571 4.63484C149.458 4.44041 149.294 4.28036 149.097 4.17181C148.908 4.07607 148.7 4.02485 148.488 4.02207C148.251 4.0264 148.017 4.08471 147.806 4.19257C147.595 4.30044 147.411 4.45502 147.268 4.64458C147.162 4.7868 147.079 4.94491 147.022 5.11307C146.969 5.27163 146.943 5.43793 146.945 5.60509C146.936 5.62348 146.922 5.63919 146.905 5.65078C146.887 5.66236 146.868 5.66945 146.847 5.67141H143.159C143.144 5.67032 143.13 5.66636 143.117 5.65975C143.104 5.65313 143.092 5.644 143.083 5.63286C143.073 5.62173 143.066 5.60882 143.061 5.59488C143.057 5.58093 143.055 5.56623 143.056 5.55161V5.46176C143.105 4.8718 143.249 4.29372 143.484 3.75038C143.825 2.96023 144.326 2.24878 144.954 1.66036C145.366 1.27519 145.829 0.947758 146.329 0.687017C147.125 0.277665 148.008 0.0642489 148.903 0.0645053Z",fill:"currentColor"}),(0,c.jsx)("path",{d:"M156.403 0.197133H160.85C160.892 0.202405 160.93 0.222804 160.957 0.2544C160.984 0.285995 160.999 0.326555 160.998 0.368271L160.014 10.0803C159.586 14.2903 159.368 16.426 159.359 16.4873C159.301 16.5793 159.239 16.6264 159.171 16.6264H155.72C155.679 16.6211 155.641 16.6007 155.614 16.5691C155.587 16.5375 155.572 16.4969 155.573 16.4552L156.505 7.2095L156.85 3.86376H156.05C156.005 3.86712 155.96 3.85437 155.923 3.82775C155.886 3.80113 155.86 3.76236 155.849 3.71829V3.6862C156.057 1.53415 156.17 0.421037 156.187 0.346878C156.264 0.246334 156.328 0.197133 156.403 0.197133Z",fill:"currentColor"})]})};D.defaultProps={color:"white"};var I=["className"];function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A=function(e){var t=e.className,r=(0,x.Z)(e,I),n=(0,i.useState)(!1),s=n[0],a=n[1],o=function(){a((function(e){return!e}))},C=(0,T.Z)().height,u=E(C),d=(0,l.Z)("transition duration-500 ease-in-out");return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("header",z(z({},r),{},{className:"jsx-3840380486 "+(r&&null!=r.className&&r.className||(0,l.Z)("flex items-center justify-between w-full px-4 bg-transparent h-thead",u&&"active",d,t)||""),children:[(0,c.jsx)("div",{className:"jsx-3840380486 z-50",children:(0,c.jsx)(p.default,{href:"/",children:(0,c.jsx)("a",{className:"jsx-3840380486 flex items-center",children:(0,c.jsx)(D,{color:u?"black":"white",className:d})})})}),(0,c.jsxs)("nav",{className:"jsx-3840380486 z-40 flex items-center",children:[(0,c.jsx)("div",{className:"jsx-3840380486 "+((0,l.Z)({"opacity-0":!s,"pointer-events-none":!s},d,"fixed inset-0 h-screen bg-green-10")||""),children:(0,c.jsx)(S,{onLinkClick:o,isOpen:s})}),(0,c.jsx)(V.F,{transition:d,buttonRole:s?"close":"open",onClick:o,color:u?"black":"white"})]})]})),(0,c.jsx)(P.default,{id:"3840380486",children:[".active.jsx-3840380486{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-bg-opacity:0.8;-webkit-backdrop-filter:blur(1px);-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px);}"]})]})},B=function(e){var t=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(A,{className:"fixed top-0 left-0 z-50"}),(0,c.jsxs)("div",{className:"flex flex-col justify-between w-full min-h-screen",children:[(0,c.jsx)("main",{className:"bg-bg",children:t}),(0,c.jsx)(L,{})]})]})},_=function(e){var t=e.children;return(0,n.Z)("(min-width: 768px)")?(0,c.jsx)(k,{children:t}):(0,c.jsx)(B,{children:t})}},9726:function(e,t,r){var n=r(7294);t.Z=function(){var e=(0,n.useState)({width:innerWidth,height:innerHeight}),t=e[0],r=e[1];return(0,n.useEffect)((function(){var e,t=function(){r({width:innerWidth,height:innerHeight})};t();var n=function(){e&&clearTimeout(e),e=setTimeout(t,200)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n),e&&clearTimeout(e)}}),[]),t}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{1273:function(e,r,t){"use strict";t.d(r,{e:function(){return n}});var s=t(1664),a=t(5893),n=function(){return(0,a.jsx)("div",{className:"w-full md:pl-shead h-[165px] md:h-[245px]",children:(0,a.jsx)("div",{className:"h-full flex items-center justify-center ",children:(0,a.jsx)(s.default,{href:"/#project",children:(0,a.jsx)("a",{className:"text-text border-b border-brown",children:"\u4f01\u753b\u4e00\u89a7\u306b\u623b\u308b"})})})})}},1333:function(e,r,t){"use strict";t.d(r,{V:function(){return l}});var s=t(9182),a=t(1415),n=t(3966),i=t(5893),l=function(e){var r=e.project,t=(0,n.Z)("(min-width: 768px)");return(0,i.jsx)("div",{className:"relative",children:(0,i.jsxs)(s.Y_,{className:"relative",children:[(0,i.jsx)(s.Ee,{src:"/images/top_bg.jpg",alt:"\u80cc\u666f",layout:"fill",objectFit:"cover",priority:!0}),(0,i.jsx)("div",{className:"md:pl-shead h-full relative",children:(0,i.jsxs)("div",{className:"w-full h-full flex justify-center items-center overflow-x-hidden max-w-full",children:[t?(0,i.jsx)("div",{className:"h-1/2",children:(0,i.jsx)(a.t,{project:r,index:r.id,colorLevel:10*r.id,size:"lg",base:"height",descriptionType:"flex"})}):(0,i.jsx)("div",{className:"w-4/5",children:(0,i.jsx)(a.t,{project:r,index:r.id,colorLevel:10*r.id,size:"md",base:"width"})}),(0,i.jsx)(a.P2,{className:"z-10 absolute bottom-0"})]})})]})})}},4846:function(e,r,t){"use strict";t.d(r,{$_:function(){return m},or:function(){return w},SG:function(){return k}});var s=t(1664),a=t(5621),n=[{id:"shutter",title:"\u30b7\u30e3\u30c3\u30bf\u30fc\u306e\u90e8\u5c4b",href:"/project/exhibition/shutter"},{id:"film",title:"\u30d5\u30a3\u30eb\u30e0\u306e\u90e8\u5c4b",href:"/project/exhibition/film"},{id:"lens",title:"\u30ec\u30f3\u30ba\u306e\u90e8\u5c4b",href:"/project/exhibition/lens"}],i=t(3966),l=t(5893),o=function(e){return n.find((function(r){return r.id===e})).title},m=function(e){var r=function(e){var r=n.findIndex((function(r){return r.id===e})),t=n.length,s=r+1<t?r+1:0;return{prev:n[r-1>=0?r-1:t-1],next:n[s]}}(e.currentTheme),t=r.prev,a=r.next,m=(0,i.Z)("(min-width: 768px)");return(0,l.jsx)(l.Fragment,{children:m?(0,l.jsx)("div",{className:"w-full md:pl-shead h-[165px] md:h-[245px]",children:(0,l.jsxs)("div",{className:"h-full flex items-center justify-between max-w-[810px] mx-auto px-4",children:[(0,l.jsx)(c,{href:t.href,text:o(t.id)}),(0,l.jsx)(s.default,{href:"/project/exhibition",children:(0,l.jsx)("a",{className:"text-text border-b border-brown",children:"\u90e8\u5c4b\u9078\u629e\u306b\u623b\u308b"})}),(0,l.jsx)(d,{href:a.href,text:o(a.id)})]})}):(0,l.jsxs)("div",{className:"flex flex-col space-y-6 justify-center items-center w-full md:pl-shead h-[196px]",children:[(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsx)(s.default,{href:"/project/exhibition",children:(0,l.jsx)("a",{className:"text-text border-b border-brown",children:"\u90e8\u5c4b\u9078\u629e\u306b\u623b\u308b"})})}),(0,l.jsxs)("div",{className:"flex items-center justify-between w-full mx-auto px-4",children:[(0,l.jsx)(c,{href:t.href,text:o(t.id)}),(0,l.jsx)(d,{href:a.href,text:o(a.id)})]})]})})},c=function(e){var r=e.href,t=e.text;return(0,l.jsx)(s.default,{href:r,children:(0,l.jsx)("a",{children:(0,l.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,l.jsx)(a.Eh,{round:!0,direction:"left",stroke:"black",className:"w-[15px] mt-1.5"}),(0,l.jsx)("div",{className:"text-text border-b border-brown",children:t})]})})})},d=function(e){var r=e.href,t=e.text;return(0,l.jsx)(s.default,{href:r,children:(0,l.jsx)("a",{children:(0,l.jsxs)("div",{className:"flex items-center space-x-1",children:[(0,l.jsx)("div",{className:"text-text border-b border-brown",children:t}),(0,l.jsx)(a.Eh,{round:!0,direction:"right",stroke:"black",className:"w-[15px] mt-1.5"})]})})})},x=t(6010),f=t(7294),h=t(1415),u=t(2115),j=t(3639),w=function(e){var r=e.works,t=e.themeColor,s=(0,i.Z)("(min-width: 768px)"),a=(0,j.E)(),n=a.votedIds,o=a.vote,m=(0,f.useState)([]),c=m[0],d=m[1],w=(0,f.useState)([]),g=w[0],N=w[1],k=(0,f.useState)([]),y=k[0],_=k[1],E=(0,f.useMemo)((function(){return r.filter((function(e){return(!c.length||c.includes(e.genre))&&(!g.length||g.includes(e.author.grade))&&(!y.length||y.includes(e.author.class))}))}),[r,c,g,y]),Z=(0,f.useMemo)((function(){return new Set(n)}),[n]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:(0,x.Z)("w-full md:pl-shead ml-auto z-40",{"sticky top-0 bg-white py-7":s,"fixed top-0 pt-thead":!s}),children:(0,l.jsx)("div",{className:"w-11/12 mx-auto lg:max-w-app flex justify-end",children:(0,l.jsxs)("div",{className:(0,x.Z)("flex",{"space-x-4":s,"space-x-3":!s}),children:[(0,l.jsx)(h.cE,{items:b,label:"\u30b8\u30e3\u30f3\u30eb",onChange:d,size:s?"md":"sm"}),(0,l.jsx)(h.cE,{items:v,label:"\u5b66\u5e74",onChange:N,size:s?"md":"sm"}),(0,l.jsx)(h.cE,{items:p,label:"\u5b66\u79d1",onChange:_,size:s?"md":"sm"})]})})}),(0,l.jsx)(h.$0,{heading:"WORKS",subHeading:"\u4f5c\u54c1",headerColor:t,className:"relative z-10 mt-[-80px] bg-white",children:(0,l.jsx)("div",{className:"md:pl-shead pt-3 pb-24 lg:pb-52",children:(0,l.jsx)("div",{className:"w-11/12 mx-auto lg:max-w-app",children:E.length?(0,l.jsx)("div",{className:"grid gap-x-8 gap-y-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-full",children:E.map((function(e){return(0,l.jsx)(u.C,{work:e,dialogLayout:s?"row":"column",voted:Z.has(e.id),handleClick:function(){return o(e.id)}},e.id)}))}):(0,l.jsxs)("p",{className:"text-darkGray font-bold text-base md:text-lg text-center mt-20 md:mt-48 mx-8",children:[(0,l.jsx)("span",{className:"inline-block",children:"\u6761\u4ef6\u306b\u5408\u3046\u4f5c\u54c1\u304c"}),(0,l.jsx)("span",{className:"inline-block",children:"\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f"}),(0,l.jsx)("span",{role:"img","aria-label":"innocent",children:"\ud83d\ude07"})]})})})})]})},b=[{label:"\u5e73\u9762",value:"\u5e73\u9762"},{label:"\u7acb\u4f53",value:"\u7acb\u4f53"},{label:"\u6620\u50cf\u4f5c\u54c1",value:"\u6620\u50cf\u4f5c\u54c1"},{label:"\u30b2\u30fc\u30e0",value:"\u30b2\u30fc\u30e0"},{label:"Web",value:"web"},{label:"\u305d\u306e\u4ed6",value:"\u305d\u306e\u4ed6"}],v=[{label:"1\u5e74",value:1},{label:"2\u5e74",value:2},{label:"3\u5e74",value:3}],p=[{label:"\u60c5\u5831",value:"M"},{label:"\u7523\u696d",value:"N"},{label:"\u5efa\u7bc9",value:"O"}],g=t(5988),N=t(9182),k=function(e){var r=e.rooms,t=(0,i.Z)("(min-width: 1024px)"),s=(0,i.Z)("(min-width: 640px)");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("main",{className:"jsx-1702204354 bg-white md:pl-shead pt-14 pb-20",children:[(0,l.jsxs)("div",{className:"jsx-1702204354 flex flex-col space-y-2 items-center px-10 w-max max-w-full overflow-hidden mx-auto",children:[(0,l.jsxs)("div",{className:"jsx-1702204354 "+((0,x.Z)("min-w-max flex items-start md:items-center space-x-1.5 pb-2 md:px-3 border-b border-lightBrown border-dashed","hachinoji")||""),children:[(0,l.jsx)(h.tT,{disabled:!0,className:"flex-shrink-0"}),(0,l.jsxs)("h4",{className:"jsx-1702204354 font-bold text-base pt-1 md:pt-0 sm",children:["\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u3001",!s&&(0,l.jsx)("br",{className:"jsx-1702204354"}),"\u597d\u304d\u306a\u4f5c\u54c1\u306b\u6295\u7968\u3057\u3088\u3046\uff01"]})]}),(0,l.jsx)("p",{className:"jsx-1702204354 self-end",children:(0,l.jsxs)("time",{className:"jsx-1702204354",children:["\u3010\u671f\u9593:",(0,l.jsx)("time",{dateTime:"2021-10-23",className:"jsx-1702204354",children:"2021/10/23"}),"~",(0,l.jsx)("time",{dateTime:"2021-10-24",className:"jsx-1702204354",children:"24"}),"\u3011"]})})]}),(0,l.jsx)("div",{className:"jsx-1702204354 mt-16 w-11/12 lg:px-4 lg:max-w-[845px] mx-auto",children:(0,l.jsx)("div",{className:"jsx-1702204354 "+((0,x.Z)("flex flex-col space-y-16 justify-center pb-24")||""),children:r.map((function(e,r){return(0,l.jsx)("div",{className:"jsx-1702204354",children:(0,l.jsx)(h.ie,{room:e,layout:t?r%2===0?"row":"row-reverse":"column",showLink:!0,className:"min-h-[265px]"})},e.id)}))})}),(0,l.jsx)("hr",{className:"jsx-1702204354 border-none bg-gray h-px my-8 lg:mt-30 lg:mb-16"}),(0,l.jsx)("div",{className:"jsx-1702204354 w-11/12 lg:px-4 lg:max-w-[845px] mx-auto",children:(0,l.jsx)(y,{})})]}),(0,l.jsx)(g.default,{id:"1702204354",children:[".hachinoji.jsx-1702204354{position:relative;}",".hachinoji.jsx-1702204354::before{position:absolute;bottom:50%;left:0px;height:80%;-webkit-transform-origin:bottom left;-ms-transform-origin:bottom left;transform-origin:bottom left;--tw-translate-y:50%;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);--tw-translate-x:-0.25rem;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);--tw-rotate:-30deg;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);border-left-width:3px;}","@media (min-width:640px){.hachinoji.jsx-1702204354::before{--tw-translate-x:-1rem;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);}.hachinoji.jsx-1702204354::before{--tw-rotate:-45deg;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);}}",'.hachinoji.jsx-1702204354::before{content:"";}',".hachinoji.jsx-1702204354::after{position:absolute;bottom:50%;right:0px;height:80%;-webkit-transform-origin:bottom right;-ms-transform-origin:bottom right;transform-origin:bottom right;--tw-translate-y:50%;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);--tw-translate-x:0.25rem;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);--tw-rotate:30deg;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);border-right-width:3px;}","@media (min-width:640px){.hachinoji.jsx-1702204354::after{--tw-translate-x:1rem;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);}.hachinoji.jsx-1702204354::after{--tw-rotate:45deg;-webkit-transform:var(--tw-transform);-ms-transform:var(--tw-transform);transform:var(--tw-transform);}}",'.hachinoji.jsx-1702204354::after{content:"";}']})]})},y=function(){return(0,l.jsxs)("div",{className:(0,x.Z)("flex flex-col space-y-2 lg:flex-row lg:space-x-6 items-center"),children:[(0,l.jsx)("div",{className:"flex-[5.8] h-full w-full relative rounded-2xl overflow-hidden",children:(0,l.jsx)(N.Ee,{src:"/images/cluster_thumbnail.png",layout:"responsive",width:475,height:163,alt:"cluster",objectFit:"cover"})}),(0,l.jsxs)("div",{className:"flex-[4.2] pt-1 text-text",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("h3",{className:"font-bold text-[23px]",children:"\u3010\u304a\u77e5\u3089\u305b\u3011cluster\u3067\u3082\u5c55\u793a\u4e2d"}),(0,l.jsxs)("p",{className:"leading-relaxed mt-2",children:["\u30d0\u30fc\u30c1\u30e3\u30eb\u82b8\u5de5\u68df\u306b\u5c55\u793a\u3055\u308c\u3066\u3044\u307e\u3059\uff01",(0,l.jsx)("br",{}),"\u662f\u975e\u898b\u306b\u884c\u3063\u3066\u307f\u3066\u306d"]})]}),(0,l.jsx)("div",{className:"mt-6 lg:mt-4 flex justify-center lg:justify-end",children:(0,l.jsx)(h.Qj,{direction:"right",href:"/about",children:"\u30d0\u30fc\u30c1\u30e3\u30eb\u4f1a\u5834\u306b\u3064\u3044\u3066"})})]})]})}},610:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return m}});var s=t(583),a=t(1273),n=t(4846),i=t(1333),l=t(9837),o=t(5893),m=!0;r.default=function(e){var r=e.project,t=e.rooms;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.A,{children:[(0,o.jsx)(i.V,{project:r}),(0,o.jsx)(n.SG,{rooms:t}),(0,o.jsx)(a.e,{})]}),(0,o.jsx)(l.I,{path:"/project/exhibition",subtitle:r.title})]})}},9521:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/exhibition",function(){return t(610)}])}},function(e){e.O(0,[212,557,310,586,774,888,179],(function(){return r=9521,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
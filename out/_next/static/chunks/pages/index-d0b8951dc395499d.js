(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(1448)}])},4093:(e,t,s)=>{"use strict";s.d(t,{A:()=>h});var r=s(4848),i=s(6540);s(9690),s(1576),s(2598);var n=s(8943),a=s(6874),o=s(8601),c=s(6715),l=s(5828),d=s.n(l);let p=e=>{let{item:t}=e,s=(0,c.useRouter)();return(0,r.jsxs)("div",{className:d().CategoriesItem,onClick:()=>s.push("/categories/".concat(t._id)),children:[(0,r.jsx)("img",{src:t.picture?"".concat(o.Jc,"/").concat(t.picture):"https://avatars.mds.yandex.net/i?id=b9b921ac2dbc73fffebb5f5289b215ff070c29b1-12803022-images-thumbs&n=13",alt:"Картинка"}),(0,r.jsx)("h3",{children:t.subName})]})};var u=s(8790),m=s.n(u);let h=e=>{let{categories:t,styless:s}=e,[o,c]=(0,i.useState)(6);return(0,i.useEffect)(()=>{let e=()=>{let e=window.innerWidth;e>=1300?c(6):e>=1120?c(5):e>=940?c(4):e>=760?c(3):e>=580?c(2):c(1)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,r.jsx)("div",{style:s,className:m().CategoriesList,children:(0,r.jsx)(a.RC,{slidesPerView:o,spaceBetween:47,centeredSlides:!1,loop:!1,modules:[n.dK],className:"mySwiper",children:t.map((e,t)=>e.picture?(0,r.jsx)(a.qr,{style:{opacity:1},children:(0,r.jsx)(p,{item:e})},t):null)})})}},1448:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>v});var r=s(4848),i=s(6540);s(9690),s(1576),s(2598);var n=s(8943),a=s(6874),o=s(8221),c=s.n(o),l=s(6715),d=s(8601);let p=e=>{let{item:t}=e,s=(0,l.useRouter)();return(0,r.jsxs)("div",{className:c().swiperItem,children:[(0,r.jsx)("img",{src:t.picture?"".concat(d.Jc,"/").concat(t.picture):"https://abrakadabra.fun/uploads/posts/2022-03/1647518534_1-abrakadabra-fun-p-serii-tsvet-fon-odnotonnii-1.png",alt:"Картинка"}),(0,r.jsx)("button",{onClick:()=>s.push("/stocks/".concat(t._id)),children:"Перейти"})]})},u=e=>{let{stocks:t}=e,[s,o]=(0,i.useState)(1440);return((0,i.useEffect)(()=>{o(window.innerWidth),addEventListener("resize",e=>{o(window.innerWidth)})},[]),s<700)?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("div",{style:{marginTop:"36px"},children:(0,r.jsx)(a.RC,{slidesPerView:2,spaceBetween:80,centeredSlides:!0,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{clickable:!0},modules:[n.dK,n.Ij,n.Vx],className:"mySwiper",children:t.map((e,t)=>(0,r.jsx)(a.qr,{children:(0,r.jsx)(p,{item:e})},t))})})};var m=s(9491),h=s(4093),x=s(9773);let w=e=>{let{categories:t}=e;return(0,r.jsx)("div",{id:"anchor_two",style:{paddingBottom:"50px"},children:t.map((e,s)=>(0,r.jsx)(x.A,{categoria:e,over:s===t.length-1},s))})};var j=s(1741),f=s(3368),g=s.n(f);let v=()=>{let[e,t]=(0,i.useState)([]),[s,n]=(0,i.useState)([]),[a,o]=(0,i.useState)(1440),[c,p]=(0,i.useState)(!1),x=(0,i.useRef)(null),f=async()=>{try{let e=await fetch("".concat(d.Jc,"/ads/"),{method:"GET"});if(!e.ok){let t=await e.json();throw Error(t.message||"Ошибка при удалении.")}let s=await e.json();t(s)}catch(e){console.error("Ошибка при удалении:",e)}try{let e=await fetch("".concat(d.Jc,"/categories/"),{method:"GET"});if(!e.ok){let t=await e.json();throw Error(t.message||"Ошибка при удалении.")}let t=await e.json();n(t)}catch(e){console.error("Ошибка при удалении:",e)}};(0,i.useEffect)(()=>{f()},[]),(0,l.useRouter)();let v=()=>{x.current&&(x.current.getBoundingClientRect().top<=0?p(!0):p(!1))};return(0,i.useEffect)(()=>(window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}),[]),(0,i.useEffect)(()=>{o(window.innerWidth),addEventListener("resize",e=>{o(window.innerWidth)})},[]),(0,r.jsx)("div",{style:{paddingTop:a>700?"100px":"15px"},children:(0,r.jsxs)(d.Ay,{children:[(0,r.jsxs)(g(),{children:[(0,r.jsx)("title",{children:"Эмодзи | Кафе японской и итальянской кухни в Темрюке"}),(0,r.jsx)("meta",{name:"description",content:"Кафе Эмодзи в Темрюке предлагает блюда японской и итальянской кухни. Доставка, самовывоз и возможность поесть в кафе. Попробуйте роллы, пиццы, пасты и многое другое!"}),(0,r.jsx)("link",{rel:"icon",href:"/assets/favicon.ico"}),(0,r.jsx)("meta",{name:"keywords",content:"Эмодзи, кафе Темрюк, японская кухня, итальянская кухня, доставка еды, самовывоз, роллы, пиццы, пасты, сеты, супы, салаты, напитки"}),(0,r.jsx)("meta",{property:"og:title",content:"Эмодзи | Кафе японской и итальянской кухни в Темрюке"}),(0,r.jsx)("meta",{property:"og:description",content:"Доставка и самовывоз блюд японской и итальянской кухни. Попробуйте наши роллы, пиццы и пасты в кафе Эмодзи в Темрюке!"}),(0,r.jsx)("meta",{property:"og:image",content:""}),(0,r.jsx)("meta",{property:"og:url",content:"https://3a17-176-110-129-80.ngrok-free.app/"}),(0,r.jsx)("link",{rel:"canonical",href:"https://3a17-176-110-129-80.ngrok-free.app/"})]}),c&&a>700?(0,r.jsx)(j.A,{categories:s}):(0,r.jsx)(m.A,{categories:s}),(0,r.jsx)(u,{stocks:e}),(0,r.jsx)(h.A,{categories:s}),(0,r.jsx)("div",{ref:x,children:(0,r.jsx)(w,{categories:s})})]})})}},5828:e=>{e.exports={CategoriesItem:"item_CategoriesItem__xPoye"}},8790:e=>{e.exports={CategoriesList:"list_CategoriesList__17cfN"}},8221:e=>{e.exports={swiperItem:"SwiperItem_swiperItem__m_U1l"}}},e=>{var t=t=>e(e.s=t);e.O(0,[106,818,424,113,364,368,196,921,636,593,792],()=>t(2022)),_N_E=e.O()}]);
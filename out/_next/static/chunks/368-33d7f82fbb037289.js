(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{5368:(e,t,s)=>{"use strict";s.d(t,{A:()=>w});var r=s(4848),i=s(6540),a=s(9681),l=s.n(a),n=s(8601),o=s(4335);let c="".concat(n.Jc,"/cart"),d=async e=>(await o.A.get(c,{headers:{Authorization:"Bearer ".concat(e)}})).data,_=async(e,t)=>(await o.A.delete("".concat(c),{headers:{Authorization:"Bearer ".concat(e)},data:{DishId:t}})).data,h=async(e,t)=>(await o.A.put("".concat(c,"/quantity/increment"),{DishId:t},{headers:{Authorization:"Bearer ".concat(e)}})).data,m=async(e,t)=>(await o.A.put("".concat(c,"/quantity/decrement"),{DishId:t},{headers:{Authorization:"Bearer ".concat(e)}})).data,x=e=>{let{item:t,onUpdateQuantity:s,onRemove:a,isOrder:o=!1}=e,[c,d]=(0,i.useState)(t.quantity),_=async()=>{if(c>1){let e=c-1;d(e),s(t.dish._id,e);let r=localStorage.getItem("jwtToken");if(r)try{await m(r,String(t.dish._id))}catch(e){console.error("Ошибка при уменьшении количества:",e)}}else j()},x=async()=>{let e=c+1;d(e),s(t.dish._id,e);let r=localStorage.getItem("jwtToken");if(r)try{await h(r,String(t.dish._id))}catch(e){console.error("Ошибка при увеличении количества:",e)}},j=()=>{a(t.dish._id)};return(0,r.jsx)("div",{className:l().CartItem,children:(0,r.jsxs)("div",{className:l().CartItem_wrapper,children:[(0,r.jsx)("div",{className:l().CartItem_img_cont,children:(0,r.jsx)("img",{src:"".concat(n.Jc,"/").concat(t.dish.picture),alt:t.dish.name})}),(0,r.jsxs)("div",{className:l().CartItem_block,children:[(0,r.jsxs)("div",{className:l().CartItem_block_title,children:[(0,r.jsx)("h3",{children:t.dish.name}),(0,r.jsxs)("div",{className:l().CartItem_Counter,style:o?{width:"45px"}:{},children:[!o&&(0,r.jsx)("div",{className:l().decrement,onClick:_,children:(0,r.jsx)("div",{className:l().decrement_first})}),(0,r.jsx)("div",{className:l().counter_text,style:o?{display:"flex",justifyContent:"center",width:"100%"}:{},children:c}),!o&&(0,r.jsxs)("div",{className:l().increment,onClick:x,children:[(0,r.jsx)("div",{className:l().increment_first}),(0,r.jsx)("div",{className:l().increment_second})]})]})]}),(0,r.jsxs)("h2",{className:l().CartBlock_subTitle,children:[t.dish.weight," грамм"]}),(0,r.jsx)("div",{className:l().CartBlock_line}),(0,r.jsxs)("div",{className:l().CartBlock_bot,children:[(0,r.jsxs)("h4",{className:l().CartBlock_price,children:[t.dish.price*c," рублей"]}),o?(0,r.jsx)(r.Fragment,{}):(0,r.jsx)("div",{className:l().dropDish,onClick:j})]})]})]})})};var j=s(9377),u=s(8787),C=s.n(u),v=s(4619),p=s(6715);let w=e=>{let{isOpenModal:t,isOrder:s=!1,cart:a}=e,[l,n]=(0,i.useState)(a||[]),[o,c]=(0,i.useState)(!1),[h,m]=(0,i.useState)(0),[u,w]=(0,i.useState)(1440),N=(0,p.useRouter)();(0,i.useEffect)(()=>{let e=setInterval(async()=>{let e=localStorage.getItem("jwtToken");if(!a){if(e)try{let t=await d(e);n(t.dishes)}catch(e){console.error("Ошибка при периодической загрузке корзины:",e)}else n((0,v.Xl)().dishes)}},2500);return()=>{clearInterval(e)}},[]);let y=async e=>{let t=localStorage.getItem("jwtToken");if(t)try{await _(t,String(e))}catch(e){console.error("Ошибка при удалении блюда:",e)}let s=l.filter(t=>t.dish._id!==e);n(s),localStorage.setItem("cart",JSON.stringify({dishes:s,isDelive:!1}))};(0,i.useEffect)(()=>{w(window.innerWidth),addEventListener("resize",e=>{w(window.innerWidth)})},[]),(0,i.useEffect)(()=>{t?c(!0):setTimeout(()=>c(!1),500)},[t]),(0,i.useEffect)(()=>{0===h&&m(1)},[]);let g=(e,t)=>{if(t<=0){y(e);return}let s=l.map(s=>s.dish._id===e?{...s,quantity:t}:s);n(s),localStorage.setItem("cart",JSON.stringify({dishes:s,isDelive:!1}))};return o?(0,r.jsxs)("div",{className:"".concat(s?C().Cart_order:C().Cart," ").concat(t?C().show:C().hide),children:[!s&&(0,r.jsx)("h2",{className:C().Cart_title,children:"Корзина"}),(0,r.jsx)("div",{className:C().Cart_scroll_text,children:0===l.length?(0,r.jsx)("p",{children:"Ваша корзина пуста"}):l.map((e,t)=>(0,r.jsx)(x,{isOrder:s,item:e,onUpdateQuantity:g,onRemove:y},t))}),(0,r.jsxs)("div",{className:C().Cart_botBlock,children:[(0,r.jsx)("h3",{children:0===l.length?(0,r.jsx)("div",{children:"0 товаров"}):(0,r.jsxs)("div",{children:[l.length," ",l.length>1?"товара":"товар"]})}),(0,r.jsxs)("div",{className:C().Cart_botBlock_sum,children:[(0,r.jsx)("h2",{children:"Общая сумма:"}),(0,r.jsxs)("h4",{children:[l.reduce((e,t)=>e+t.dish.price*t.quantity,0)," ","руб"]})]}),!s&&(0,r.jsx)(j.A,{state:j.m.active,width:u>1520?547:u>1440?430:400,height:u>1440?75:55,fz:u>1520?"":u>1440?"28px":"26px",styless:{margin:"0px auto",marginTop:"20px"},onClickBut:()=>N.push("/orderPage"),children:"Оформить заказ"})]})]}):null}},1240:(e,t,s)=>{"use strict";s.d(t,{A:()=>l});var r=s(4848);s(6540);var i=s(5957),a=s.n(i);let l=e=>{let{children:t,styless:s}=e;return(0,r.jsx)("div",{style:s,className:a().MainContainer,children:t})}},2096:(e,t,s)=>{"use strict";s.d(t,{A:()=>c});var r=s(4848),i=s(7027),a=s(6540),l=s(788),n=s.n(l),o=s(726);let c=e=>{let{isOpen:t,setIsOpen:s}=e,[l,c]=(0,a.useState)(1440);return(0,a.useEffect)(()=>{c(window.innerWidth);let e=()=>c(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,r.jsx)(i.Xi,{children:(0,r.jsxs)(o.A,{width:1e3,isOpen:t,onClose:s,children:[(0,r.jsx)("h2",{style:{paddingBottom:"15px"},children:"ул. 27 Сентября, 8/3к3, Темрюк"}),(0,r.jsx)("div",{className:n().mapCont,children:(0,r.jsxs)(i.T5,{width:l,height:l>1800?l/3:l>900?l/2:l>450?l:2*l,defaultState:{center:[45.262025,37.442259],zoom:13},children:[(0,r.jsx)(i.Ro,{options:{iconColor:"#FF0000"},geometry:[45.262025,37.442259]}),(0,r.jsx)(i.tS,{geometry:[[[45.297491,37.364685],[45.302576,37.345564],[45.288297,37.330629],[45.284279,37.343287],[45.268109,37.341992],[45.252174,37.356945],[45.259472,37.377011],[45.25729,37.38289],[45.260745,37.398855],[45.209804,37.478162],[45.211382,37.483999],[45.204071,37.49992],[45.238767,37.524983],[45.250166,37.49065],[45.259381,37.486702],[45.26423,37.477089],[45.264351,37.462841],[45.266049,37.450653],[45.267776,37.447735],[45.267503,37.438551],[45.268278,37.430121],[45.295188,37.394635],[45.305728,37.373177]]],options:{fillColor:"rgba(128, 0, 128, 0.1)",strokeColor:"#800080",strokeWidth:2}})]})})]})})}},9377:(e,t,s)=>{"use strict";s.d(t,{A:()=>n,m:()=>l});var r=s(4848);s(6540);var i=s(7567),a=s.n(i),l=function(e){return e.disabled="disabled",e.active="active",e}({});let n=e=>{let{children:t,state:s,isAnimation:i,width:l=400,height:n=68,styless:o,onClickBut:c,fz:d}=e;return(0,r.jsx)("button",{className:"active"===s&&!0===i?a().Button_animation_active:"disabled"===s?a().Button_disabled:"active"===s?a().Button_active:void 0,style:{...o,maxWidth:"".concat(l,"px"),height:"".concat(n,"px"),cursor:"disabled"===s?"not-allowed":"pointer","--hover-max-width":"".concat(l+l/10,"px")},onClick:"active"===s&&c?c:void 0,disabled:"disabled"===s,children:(0,r.jsx)("h4",{style:{fontSize:d&&d},children:t})})}},726:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var r=s(4848),i=s(6540),a=s(7301),l=s.n(a);let n=e=>{let{order:t,isOpen:s,onClose:a,children:n,styless:o,width:c,height:d}=e;return((0,i.useEffect)(()=>(s?document.body.classList.add("modalOpen"):document.body.classList.remove("modalOpen"),()=>{document.body.classList.remove("modalOpen")}),[s]),s)?(0,r.jsx)("div",{className:t?l().modalWindow_order:l().modalWindow,style:o,onClick:a,children:(0,r.jsxs)("div",{className:l().modalContent,style:{maxWidth:"".concat(c,"px"),height:"".concat(d,"px")},onClick:e=>e.stopPropagation(),children:[(0,r.jsx)("div",{className:l().closeButton,onClick:a,children:(0,r.jsx)("div",{className:l().hideIcon})}),n]})}):null}},4619:(e,t,s)=>{"use strict";s.d(t,{Xl:()=>r,bE:()=>i,sX:()=>a});let r=()=>{let e=localStorage.getItem("cart");return e?JSON.parse(e):{dishes:[],isDelive:!1}},i=e=>{let t=r(),s=t.dishes.find(t=>t.dish._id===e._id);s?s.quantity+=1:t.dishes.push({dish:e,quantity:1}),localStorage.setItem("cart",JSON.stringify(t))},a=()=>{localStorage.removeItem("cart")}},8601:(e,t,s)=>{"use strict";s.d(t,{Jc:()=>y,Ay:()=>N});var r=s(4848),i=s(6540),a=s(6293),l=s.n(a);let n=e=>{let{text:t,speed:s=10}=e,[a,n]=(0,i.useState)("");return(0,i.useEffect)(()=>{n(Array(Math.ceil(window.innerWidth/(12*t.length))+2).fill(t).join(" "))},[t]),(0,r.jsx)("div",{className:l().marquee,children:(0,r.jsxs)("div",{className:l().track,style:{animationDuration:"".concat(s,"s")},children:[(0,r.jsx)("span",{children:a}),(0,r.jsx)("span",{children:a}),(0,r.jsx)("span",{children:a}),(0,r.jsx)("span",{children:a}),(0,r.jsx)("span",{children:a})]})})};var o=s(1240),c=s(6871),d=s(1849),_=s(9549),h=s.n(_),m=s(1106),x=s.n(m),j=s(6715),u=s(2096),C=s(726);let v=()=>{let e=(0,j.useRouter)(),[t,s]=(0,i.useState)(!1),[a,l]=(0,i.useState)(!1);return(0,r.jsxs)("div",{className:h().Footer,children:[(0,r.jsx)(n,{text:"#ДАРИЭМОДЗИ",speed:250}),(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(c.A,{children:[(0,r.jsx)(d.A,{children:(0,r.jsxs)("ul",{className:h().Footer_list,children:[(0,r.jsx)("li",{className:h().Footer_subTitle,children:"Эмодзи"}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{style:{textDecoration:"none",color:"rgb(194, 193, 193)"},href:"/AboutUs",children:"О нас"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{style:{textDecoration:"none",color:"rgb(194, 193, 193)"},href:"https://yandex.ru/maps/org/emodzi/5950025613/reviews/?ll=37.442145%2C45.262077&tab=reviews&z=17.4",children:"Отзывы"})}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{style:{textDecoration:"none",color:"rgb(194, 193, 193)"},href:"/#anchor_two",children:"Меню"})})]})}),(0,r.jsx)(d.A,{children:(0,r.jsxs)("ul",{className:h().Footer_list,children:[(0,r.jsx)("li",{className:h().Footer_subTitle,children:"Контакты"}),(0,r.jsx)("li",{children:(0,r.jsx)(x(),{style:{textDecoration:"none",color:"rgb(194, 193, 193)"},href:"https://vk.com/emojer27",children:"Вконтакте"})}),(0,r.jsx)("li",{children:"Ватцап"})]})}),(0,r.jsx)(d.A,{children:(0,r.jsxs)("ul",{className:h().Footer_list,children:[(0,r.jsx)("li",{className:h().Footer_subTitle,children:"Правовая информация"}),(0,r.jsx)("li",{onClick:()=>e.push("/privacy"),children:"Политика конфиденциальности"}),(0,r.jsx)("li",{onClick:()=>e.push("/AdminPage"),children:"Администраторам"})]})}),(0,r.jsx)(d.A,{children:(0,r.jsxs)("ul",{className:h().Footer_list,children:[(0,r.jsx)("li",{className:h().Footer_subTitle,children:"Доп информация"}),(0,r.jsx)("li",{onClick:()=>s(!0),children:"Адресс"}),(0,r.jsx)("li",{onClick:()=>l(!0),children:"График работы"}),(0,r.jsxs)(C.A,{onClose:()=>l(!1),isOpen:a,children:[(0,r.jsx)("h2",{className:h().day_title,children:"График работы"}),(0,r.jsxs)("div",{className:h().day,children:[(0,r.jsx)("h3",{children:"Понедельник"}),(0,r.jsx)("h3",{children:"11:00 – 23:00"})]}),(0,r.jsxs)("div",{className:h().day,children:[(0,r.jsx)("h3",{children:"Вторник"}),(0,r.jsx)("h3",{children:"11:00 – 23:00"})]}),(0,r.jsxs)("div",{className:h().day,children:[(0,r.jsx)("h3",{children:"Среда"}),(0,r.jsx)("h3",{children:"11:00 – 23:00"})]}),(0,r.jsxs)("div",{className:h().day,children:[(0,r.jsx)("h3",{children:"Четверг"}),(0,r.jsx)("h3",{children:"11:00 – 23:00"})]}),(0,r.jsxs)("div",{className:h().day,children:[(0,r.jsx)("h3",{children:"Пятница"}),(0,r.jsx)("h3",{children:"11:00 – 23:00"})]}),(0,r.jsxs)("div",{className:h().day,children:[(0,r.jsx)("h3",{children:"Суббота"}),(0,r.jsx)("h3",{children:"11:00 – 23:00"})]}),(0,r.jsxs)("div",{className:h().day,children:[(0,r.jsx)("h3",{children:"Воскресенье"}),(0,r.jsx)("h3",{children:"11:00 – 23:00"})]})]}),(0,r.jsx)("li",{children:"Группа с розыгрышами"})]})})]}),(0,r.jsxs)("div",{className:h().Footer_contacts,children:[(0,r.jsx)("h2",{children:"+7(900)000-00-00"}),(0,r.jsx)("h3",{children:"Emoji@gmail.com"})]}),(0,r.jsx)("span",{className:h().line_f}),(0,r.jsxs)("div",{className:h().Footer_bot,children:[(0,r.jsx)("h3",{children:"\xa9 2024 ООО “Эмодзи” ОГРН 000000000000, ИНН 111111111111 7777 Краснодарский край, г. Темрюк, Ленина , д. 16"}),(0,r.jsxs)("div",{className:h().Footer_logos,children:[(0,r.jsx)("div",{className:h().logoFull}),(0,r.jsxs)("div",{className:h().f_two,children:[(0,r.jsx)("div",{className:h().watc}),(0,r.jsx)(x(),{href:"https://vk.com/emojer27",children:(0,r.jsx)("div",{className:h().vk})})]})]})]}),(0,r.jsx)(u.A,{isOpen:t,setIsOpen:()=>s(!1)})]})]})};var p=s(3368),w=s.n(p);let N=e=>{let{children:t,title:s,description:i,keywords:a}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(w(),{children:[(0,r.jsx)("title",{children:s||"Музыкальная площадка"}),(0,r.jsx)("meta",{name:"description",content:"Японская и Итальянская кухня в темрюке с доставкой ".concat(i||"")}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"keywords",content:a||"Роллы, Суши, суши, ролы, роллы"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),t,(0,r.jsx)(v,{})]})},y="https://holaves-emoji-fb8b.twc1.net"},788:e=>{e.exports={mapCont:"Map_mapCont__Rpa3m"}},7567:e=>{e.exports={Button_animation_active:"Button_Button_animation_active__PqYcf",Button_active:"Button_Button_active__6ApmN",Button_disabled:"Button_Button_disabled__I7GQC"}},6293:e=>{e.exports={marquee:"Marquee_marquee__HvgNL",track:"Marquee_track__dAGAS",scroll:"Marquee_scroll__C56__"}},7301:e=>{e.exports={modalWindow:"ModalWindow_modalWindow__UtBed",modalWindow_order:"ModalWindow_modalWindow_order__DV7W8",modalContent:"ModalWindow_modalContent__qkYcg",closeButton:"ModalWindow_closeButton__F0aUN",hideIcon:"ModalWindow_hideIcon__H5q0B"}},9681:e=>{e.exports={CartItem:"CartItem_CartItem__dtMWv",CartItem_wrapper:"CartItem_CartItem_wrapper__Lfgp1",CartItem_img_cont:"CartItem_CartItem_img_cont__eRegn",CartItem_block_title:"CartItem_CartItem_block_title__QJNcB",CartItem_Counter:"CartItem_CartItem_Counter__iCOsV",increment:"CartItem_increment__zNs0l",increment_first:"CartItem_increment_first__D025u",increment_second:"CartItem_increment_second__to9av",decrement:"CartItem_decrement__2BsZR",decrement_first:"CartItem_decrement_first__Sspc3",counter_text:"CartItem_counter_text__5ATA7",CartBlock_subTitle:"CartItem_CartBlock_subTitle__d5Z7V",CartBlock_line:"CartItem_CartBlock_line__k4YMX",CartBlock_bot:"CartItem_CartBlock_bot__ONMkm",CartBlock_price:"CartItem_CartBlock_price___awk7",dropDish:"CartItem_dropDish__PUHAy"}},8787:e=>{e.exports={Cart:"Cart_Cart__ToWvy",show:"Cart_show__3I7kW",openCart:"Cart_openCart__mgwEY",hide:"Cart_hide__pPgUi",closeCart:"Cart_closeCart__wsbu5",Cart_title:"Cart_Cart_title__y1fdb",Cart_botBlock:"Cart_Cart_botBlock__8qjYs",Cart_botBlock_sum:"Cart_Cart_botBlock_sum__5ct9M",Cart_scroll_text:"Cart_Cart_scroll_text__u6yP0"}},9549:e=>{e.exports={Footer:"Footer_Footer__ntn1Z",Footer_list:"Footer_Footer_list__YHhTs",Footer_subTitle:"Footer_Footer_subTitle__GXnpy",Footer_contacts:"Footer_Footer_contacts__rxUK1",line_f:"Footer_line_f__NmIHQ",Footer_bot:"Footer_Footer_bot__GaFMR",Footer_logos:"Footer_Footer_logos__YXrdJ",logoFull:"Footer_logoFull__b3Tw6",f_two:"Footer_f_two__Tl7AK",watc:"Footer_watc__pqCBE",vk:"Footer_vk__xsa9o",day:"Footer_day__ym6CO",day_title:"Footer_day_title__aX_iP"}},5957:e=>{e.exports={MainContainer:"MainContainer_MainContainer__GcB6G"}}}]);
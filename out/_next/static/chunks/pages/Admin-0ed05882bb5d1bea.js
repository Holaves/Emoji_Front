(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[757],{4561:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/Admin",function(){return a(6474)}])},6474:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>A});var s=a(4848),n=a(6540),i=a(4733),l=a.n(i),r=a(8601),c=a(9377),d=a(1240);let o=()=>{let[e,t]=(0,n.useState)("ViewCategories"),[a,i]=(0,n.useState)([]),[o,h]=(0,n.useState)(""),[m,u]=(0,n.useState)(""),[j,x]=(0,n.useState)(null),[p,g]=(0,n.useState)([]),[A,_]=(0,n.useState)([]),[v,T]=(0,n.useState)(""),y=async()=>{let e=localStorage.getItem("jwtToken");if(e)try{let t=await fetch("".concat(r.Jc,"/categories"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!t.ok){alert("Failed to fetch categories");return}let a=await t.json();i(a),_(a)}catch(e){alert("Error fetching categories:")}},f=async e=>{let t=localStorage.getItem("jwtToken");if(!t){alert("Не удалось получить токен авторизации.");return}try{let s=await fetch("".concat(r.Jc,"/categories/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}});if(!s.ok){let e=await s.json();throw Error(e.message||"Ошибка при удалении.")}alert("Категория успешно удалена."),i(a.filter(t=>String(t._id)!==e))}catch(e){console.error("Ошибка при удалении:",e),alert("Ошибка: ".concat(e.message))}},N=async()=>{let e=localStorage.getItem("jwtToken");if(!e){alert("Не удалось получить токен авторизации.");return}let t=new FormData;t.append("name",o),t.append("subName",m),p.forEach((e,a)=>{t.append("subCategories[".concat(a,"]"),e)}),j&&t.append("picture",j);try{let a=await fetch("".concat(r.Jc,"/categories"),{method:"POST",headers:{Authorization:"Bearer ".concat(e)},body:t});if(!a.ok){let e=await a.json();throw Error(e.message||"Ошибка при создании категории.")}alert("Категория успешно создана."),h(""),u(""),x(null),g([]),y()}catch(e){console.error("Ошибка при создании категории:",e),alert("Ошибка: ".concat(e.message))}},k=e=>{g(p.filter(t=>t!==e))};return(0,n.useEffect)(()=>{y()},[]),(0,s.jsxs)("div",{className:l().AdminCategories,children:[(0,s.jsx)("div",{className:l().AdminTitle,children:"Категории"}),(0,s.jsx)("div",{className:l().AdminPanel_selectType,children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"ViewCategories"===e?l().activeLi:"",onClick:()=>t("ViewCategories"),children:"Просмотр категорий"}),(0,s.jsx)("li",{className:"CreateCategory"===e?l().activeLi:"",onClick:()=>t("CreateCategory"),children:"Создать категорию"}),(0,s.jsx)("li",{className:"DeleteCategory"===e?l().activeLi:"",onClick:()=>t("DeleteCategory"),children:"Удалить категорию"})]})}),"ViewCategories"===e&&(0,s.jsxs)("table",{className:l().table,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"ID"}),(0,s.jsx)("th",{children:"Имя"}),(0,s.jsx)("th",{children:"Подкатегории"}),(0,s.jsx)("th",{children:"Картинка"})]})}),(0,s.jsx)("tbody",{children:a.map(e=>{var t;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e._id}),(0,s.jsx)("td",{children:e.subName}),(0,s.jsx)("td",{children:(null===(t=e.subCategories)||void 0===t?void 0:t.length)?e.subCategories.map(e=>(0,s.jsx)("div",{children:e.name},e._id)):(0,s.jsx)("div",{children:"Нет подкатегорий"})}),(0,s.jsx)("td",{children:e.picture?(0,s.jsx)("a",{href:"".concat(r.Jc,"/").concat(e.picture),target:"_blank",rel:"noopener noreferrer",children:"Ссылка на картинку"}):"Нет изображения"})]},e._id)})})]}),"DeleteCategory"===e&&(0,s.jsxs)(d.A,{children:[(0,s.jsx)("div",{className:l().Admin_subTitle,children:"ID (удаления)"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:v,onChange:e=>T(e.target.value)}),(0,s.jsx)(c.A,{styless:{marginTop:"30px"},state:c.m.active,onClickBut:()=>f(v),children:"Удалить"})]}),"CreateCategory"===e&&(0,s.jsxs)(d.A,{children:[(0,s.jsx)("div",{className:l().AdminSubTitle,children:"Создать категорию"}),(0,s.jsxs)("div",{className:l().Admin_twoBlocks,children:[(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Название"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:o,onChange:e=>h(e.target.value)}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Подназвание"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:m,onChange:e=>u(e.target.value)}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Изображение"}),(0,s.jsx)("input",{type:"file",className:l().AdminInput,onChange:e=>{var t;return x((null===(t=e.target.files)||void 0===t?void 0:t[0])||null)}})]}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Подкатегории"}),(0,s.jsxs)("select",{className:l().AdminSelect,onChange:e=>{let t=e.target.value;p.includes(t)||g([...p,t])},children:[(0,s.jsx)("option",{value:"",children:"Выберите подкатегорию"}),A.map(e=>(0,s.jsx)("option",{value:e._id,children:e.subName},e._id))]}),(0,s.jsx)("div",{className:l().SelectedItems,children:p.map(e=>{let t=A.find(t=>t._id===e);return(0,s.jsxs)("div",{className:l().SelectedItem,children:[null==t?void 0:t.subName," ",(0,s.jsx)("button",{className:l().RemoveButton,onClick:()=>k(e),children:"Удалить"})]},e)})}),(0,s.jsx)(c.A,{styless:{marginTop:"30px"},state:c.m.active,onClickBut:N,children:"Создать"})]})]})},h=()=>{let[e,t]=(0,n.useState)("Получить"),[a,i]=(0,n.useState)([]),[o,h]=(0,n.useState)([]),[m,u]=(0,n.useState)(""),[j,x]=(0,n.useState)(""),[p,g]=(0,n.useState)(""),[A,_]=(0,n.useState)(""),[v,T]=(0,n.useState)(null),[y,f]=(0,n.useState)(""),[N,k]=(0,n.useState)(""),[w,C]=(0,n.useState)(""),S=async e=>{let t=localStorage.getItem("jwtToken");if(!t){alert("Не удалось получить токен авторизации.");return}try{let s=await fetch("".concat(r.Jc,"/dishes/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}});if(!s.ok){let e=await s.json();throw Error(e.message||"Ошибка при удалении.")}alert("Блюдо успешно удалено."),i(a.filter(t=>String(t._id)!==e))}catch(e){console.error("Ошибка при удалении:",e),alert("Ошибка: ".concat(e.message))}},b=async()=>{let e=localStorage.getItem("jwtToken");if(!e){alert("Не удалось получить токен авторизации.");return}let t={};m&&(t.categoria=m),j&&(t.name=j),p&&(t.weight=p),A&&(t.price=A),y&&(t.description=y);let a=new FormData;for(let e in t)a.append(e,t[e]);v&&a.append("picture",v);try{let t=N?"PUT":"POST",s=N?"".concat(r.Jc,"/dishes/").concat(N):"".concat(r.Jc,"/dishes"),n=await fetch(s,{method:t,headers:{Authorization:"Bearer ".concat(e)},body:a});if(!n.ok){let e=await n.json();throw Error(e.message||"Ошибка при отправке данных.")}alert(N?"Блюдо успешно обновлено.":"Блюдо успешно создано."),u(""),x(""),g(""),_(""),T(null),f(""),k("")}catch(e){console.error("Ошибка при отправке данных:",e),alert("Ошибка: ".concat(e.message))}};return(0,n.useEffect)(()=>{let e=async()=>{let e=localStorage.getItem("jwtToken");if(e)try{let t=await fetch("".concat(r.Jc,"/dishes"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});t.ok||alert("Failed to fetch dishes");let a=await t.json();i(a)}catch(e){alert("Error fetching dishes:")}};(async()=>{let e=localStorage.getItem("jwtToken");if(e)try{let t=await fetch("".concat(r.Jc,"/categories"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});t.ok||alert("Failed to fetch categories");let a=await t.json();h(a)}catch(e){alert("Error fetching categories:")}})(),e()},[]),(0,s.jsxs)("div",{className:l().AdminDishes,children:[(0,s.jsx)("div",{className:l().AdminTitle,children:"Блюда"}),(0,s.jsx)("div",{className:l().AdminPanel_selectType,style:{borderTop:"1px solid black"},children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"Получить"===e?l().activeLi:"",onClick:()=>t("Получить"),children:"Получить"}),(0,s.jsx)("li",{className:"Удалить"===e?l().activeLi:"",onClick:()=>t("Удалить"),children:"Удалить"}),(0,s.jsx)("li",{className:"Создать_Изменить"===e?l().activeLi:"",onClick:()=>t("Создать_Изменить"),children:"Создать_Изменить"})]})}),"Получить"===e&&(0,s.jsxs)("table",{className:l().table,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Название"}),(0,s.jsx)("th",{children:"ID"}),(0,s.jsx)("th",{children:"Категория"}),(0,s.jsx)("th",{children:"Описание"}),(0,s.jsx)("th",{children:"Цена"}),(0,s.jsx)("th",{children:"Вес"}),(0,s.jsx)("th",{children:"Изображение"})]})}),(0,s.jsx)("tbody",{children:a.map(e=>{var t;return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.name}),(0,s.jsx)("td",{children:e._id}),(0,s.jsx)("td",{children:null===(t=e.categoria)||void 0===t?void 0:t.name}),(0,s.jsx)("td",{children:e.description}),(0,s.jsx)("td",{children:e.price}),(0,s.jsx)("td",{children:e.weight}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"".concat(r.Jc,"/").concat(e.picture),target:"_blank",rel:"noopener noreferrer",children:"ссылка"})})]},e._id)})})]}),(0,s.jsxs)(d.A,{children:["Удалить"===e&&(0,s.jsxs)(d.A,{children:[(0,s.jsx)("div",{className:l().Admin_subTitle,children:"ID (удаления)"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:w,onChange:e=>C(e.target.value)}),(0,s.jsx)(c.A,{styless:{marginTop:"30px"},state:c.m.active,onClickBut:()=>S(w),children:"Удалить"})]}),"Создать_Изменить"===e&&(0,s.jsxs)("div",{style:{marginTop:"50px"},children:[(0,s.jsxs)("div",{className:l().AdminMainBlockTwo,children:[(0,s.jsxs)("div",{className:l().Admin_twoBlocks,children:[(0,s.jsx)("div",{className:l().Admin_subTitle,children:"ID (для изменения)"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:N,onChange:e=>k(e.target.value)}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Название"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:j,onChange:e=>x(e.target.value)}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Цена"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:A,onChange:e=>_(e.target.value)}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Вес"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:p,onChange:e=>g(e.target.value)})]}),(0,s.jsxs)("div",{className:l().Admin_twoBlocks,children:[(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Изображение"}),(0,s.jsx)("input",{type:"file",className:l().AdminInput,onChange:e=>{var t;return T((null===(t=e.target.files)||void 0===t?void 0:t[0])||null)}}),(0,s.jsx)("div",{className:l().Admin_subTitle,style:{marginTop:"50px"},children:"Категория"}),(0,s.jsxs)("select",{className:l().AdminSelect,value:m,onChange:e=>u(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"Выберите категорию"}),o.map(e=>(0,s.jsx)("option",{value:e._id,children:e.subName},e._id))]})]})]}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Описание"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput_large,value:y,onChange:e=>f(e.target.value)}),(0,s.jsx)("div",{className:l().buttonCont,children:(0,s.jsx)(c.A,{state:c.m.active,onClickBut:b,children:"Отправить"})})]})]})]})},m=()=>{let[e,t]=(0,n.useState)("Получить"),[a,i]=(0,n.useState)([]),[o,h]=(0,n.useState)(""),[m,u]=(0,n.useState)(""),[j,x]=(0,n.useState)(""),[p,g]=(0,n.useState)(null),[A,_]=(0,n.useState)(""),[v,T]=(0,n.useState)(""),y=async()=>{let e=localStorage.getItem("jwtToken");if(!e){alert("Не удалось получить токен авторизации.");return}let t=new FormData;o&&t.append("id",o),m&&t.append("name",m),j&&t.append("text",j),p&&t.append("picture",p),A&&t.append("expiresAt",A);try{let a=o?"PUT":"POST",s=o?"".concat(r.Jc,"/ads/").concat(o):"".concat(r.Jc,"/ads"),n=await fetch(s,{method:a,headers:{Authorization:"Bearer ".concat(e)},body:t});if(!n.ok){let e=await n.json();throw Error(e.message||"Ошибка при отправке данных.")}alert(o?"Акция успешно обновлена.":"Акция успешно создана."),h(""),u(""),x(""),g(null),_("")}catch(e){console.error("Ошибка при отправке данных:",e),alert("Ошибка: ".concat(e.message))}},f=async e=>{let t=localStorage.getItem("jwtToken");if(!t){alert("Не удалось получить токен авторизации.");return}try{let s=await fetch("".concat(r.Jc,"/ads/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}});if(!s.ok){let e=await s.json();throw Error(e.message||"Ошибка при удалении.")}alert("Акция успешно удалена."),i(a.filter(t=>t._id!==e))}catch(e){console.error("Ошибка при удалении:",e),alert("Ошибка: ".concat(e.message))}};return(0,n.useEffect)(()=>{(async()=>{let e=localStorage.getItem("jwtToken");if(e)try{let t=await fetch("".concat(r.Jc,"/ads"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});t.ok||alert("Failed to fetch stocks");let a=await t.json();i(a)}catch(e){alert("Error fetching stocks:")}})()},[]),(0,s.jsxs)("div",{className:l().AdminStocks,children:[(0,s.jsx)("div",{className:l().AdminTitle,children:"Акции"}),(0,s.jsx)("div",{className:l().AdminPanel_selectType,style:{borderTop:"1px solid black"},children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"Получить"===e?l().activeLi:"",onClick:()=>t("Получить"),children:"Получить"}),(0,s.jsx)("li",{className:"Удалить"===e?l().activeLi:"",onClick:()=>t("Удалить"),children:"Удалить"}),(0,s.jsx)("li",{className:"Создать_Изменить"===e?l().activeLi:"",onClick:()=>t("Создать_Изменить"),children:"Создать_Изменить"})]})}),"Получить"===e&&(0,s.jsxs)("table",{className:l().table,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"ID"}),(0,s.jsx)("th",{children:"Имя"}),(0,s.jsx)("th",{children:"Текст"}),(0,s.jsx)("th",{children:"Картинка"})]})}),(0,s.jsx)("tbody",{children:a.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e._id}),(0,s.jsx)("td",{children:e.name}),(0,s.jsx)("td",{children:e.text}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"".concat(r.Jc,"/").concat(e.picture),target:"_blank",rel:"noopener noreferrer",children:"ссылка"})})]},e._id))})]}),"Удалить"===e&&(0,s.jsxs)(d.A,{children:[(0,s.jsx)("div",{className:l().Admin_subTitle,children:"ID (для удаления)"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:v,onChange:e=>T(e.target.value)}),(0,s.jsx)(c.A,{styless:{marginTop:"30px"},state:c.m.active,onClickBut:()=>f(v),children:"Удалить"})]}),"Создать_Изменить"===e&&(0,s.jsx)(d.A,{children:(0,s.jsxs)("div",{style:{marginTop:"50px"},children:[(0,s.jsx)("div",{className:l().AdminMainBlockTwo,children:(0,s.jsxs)("div",{className:l().Admin_twoBlocks,children:[(0,s.jsx)("div",{className:l().Admin_subTitle,children:"ID (для изменения)"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:o,onChange:e=>h(e.target.value)}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Название"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:m,onChange:e=>u(e.target.value)}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Время жизни"}),(0,s.jsx)("input",{type:"date",className:l().AdminInput,value:A,onChange:e=>_(e.target.value)})]})}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Текст"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput_large,value:j,onChange:e=>x(e.target.value)}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Картинка"}),(0,s.jsx)("input",{type:"file",className:l().AdminInput,onChange:e=>{var t;return g((null===(t=e.target.files)||void 0===t?void 0:t[0])||null)}}),(0,s.jsx)("div",{className:l().buttonCont,children:(0,s.jsx)(c.A,{state:c.m.active,onClickBut:y,children:"Отправить"})})]})})]})},u=()=>{let[e,t]=(0,n.useState)([]),[a,i]=(0,n.useState)([]),[o,h]=(0,n.useState)(""),[m,u]=(0,n.useState)("");(0,n.useEffect)(()=>{let e=async()=>{let e=localStorage.getItem("jwtToken");if(!e)return alert("Не удалось получить токен авторизации.");try{let t=await fetch("".concat(r.Jc,"/roles"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!t.ok)throw Error("Ошибка при получении ролей");let a=await t.json();i(a.map(e=>e.name))}catch(e){console.error("Ошибка при загрузке ролей:",e),alert("Не удалось загрузить роли.")}};(async()=>{let e=localStorage.getItem("jwtToken");if(!e)return alert("Не удалось получить токен авторизации.");try{let a=await fetch("".concat(r.Jc,"/users"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!a.ok)throw console.log(a.status),Error("Ошибка при получении пользователей");let s=await a.json();t(s)}catch(e){console.error("Ошибка при загрузке пользователей:",e),alert("Не удалось загрузить пользователей.")}})(),e()},[]);let j=async()=>{if(!m.trim()||!o.trim())return alert("Введите ID пользователя и выберите роль.");let e=localStorage.getItem("jwtToken");if(!e)return alert("Не удалось получить токен авторизации.");try{let t=await fetch("".concat(r.Jc,"/users/").concat(m,"/roles"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},body:JSON.stringify({role:o})});if(!t.ok){let e=await t.json();throw Error(e.message||"Ошибка при назначении роли")}alert("Роль успешно назначена."),u(""),h("")}catch(e){console.error("Ошибка при назначении роли:",e),alert("Ошибка: ".concat(e.message))}};return(0,s.jsxs)("div",{className:l().AdminUsers,children:[(0,s.jsx)("div",{className:l().AdminTitle,children:"Пользователи"}),(0,s.jsxs)(d.A,{children:[(0,s.jsxs)("div",{className:l().Admin_subTitle,children:["Всего пользователей зарегестрированных на сайте: ",e.length]}),(0,s.jsxs)("table",{className:l().table,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"ID"}),(0,s.jsx)("th",{children:"Телефон"}),(0,s.jsx)("th",{children:"Имя"}),(0,s.jsx)("th",{children:"Адрес"}),(0,s.jsx)("th",{children:"Роли"})]})}),(0,s.jsx)("tbody",{children:e.map(e=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e._id}),(0,s.jsx)("td",{children:e.phone_number}),(0,s.jsx)("td",{children:e.name||"Не указано"}),(0,s.jsx)("td",{children:e.adress||"Не указано"}),(0,s.jsx)("td",{children:e.roles&&e.roles.map(e=>(0,s.jsxs)("div",{children:[e.name,", "]}))})]},e._id))})]}),(0,s.jsxs)("div",{className:l().AdminActions,style:{marginTop:"20px"},children:[(0,s.jsx)("div",{className:l().Admin_subTitle,children:"ID пользователя"}),(0,s.jsx)("input",{type:"text",className:l().AdminInput,value:m,onChange:e=>u(e.target.value)}),(0,s.jsx)("div",{className:l().Admin_subTitle,children:"Выберите роль"}),(0,s.jsxs)("select",{className:l().AdminSelect,value:o,onChange:e=>h(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"Выберите роль"}),a.map(e=>(0,s.jsx)("option",{value:e,children:e},e))]}),(0,s.jsx)(c.A,{styless:{marginTop:"20px"},state:c.m.active,onClickBut:j,children:"Назначить роль"})]})]})]})};var j=a(726),x=a(5368);let p=e=>{let{cart:t}=e;(0,n.useEffect)(()=>{console.log(t)},[]);let[a,i]=(0,n.useState)(!0);return(0,s.jsx)("div",{className:"AdminOrderModal",children:(0,s.jsx)(x.A,{cart:t.dishes,isOrder:!0,isOpenModal:a})})},g=()=>{let[e,t]=(0,n.useState)([]),[a,i]=(0,n.useState)([]),[o,h]=(0,n.useState)(null),[m,u]=(0,n.useState)(!1),[x,g]=(0,n.useState)(!1),[A,_]=(0,n.useState)(null),[v,T]=(0,n.useState)({}),[y,f]=(0,n.useState)(),[N,k]=(0,n.useState)(""),w=()=>{u(!0)},C=e=>{_(e),g(!0)},S=()=>g(!1),b=async e=>{S();let a=localStorage.getItem("jwtToken");if(a)try{if(!(await fetch("".concat(r.Jc,"/orders/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)}})).ok){alert("Failed to delete order");return}t(t=>t.filter(t=>t._id!==e)),i(t=>t.filter(t=>t._id!==e))}catch(e){alert("Error deleting order")}},I=async()=>{let e=localStorage.getItem("jwtToken");if(e)try{let t=await fetch("".concat(r.Jc,"/orders/").concat(N),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!t.ok){alert("Failed to change order status");return}let a=await t.json();f(a.cart),w()}catch(e){alert("Error updating order status")}},E=async(e,t)=>{let a=localStorage.getItem("jwtToken");if(a)try{if(!(await fetch("".concat(r.Jc,"/orders/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({status:t})})).ok){alert("Failed to change order status");return}T(a=>({...a,[e]:t}))}catch(e){alert("Error updating order status")}},B=async()=>{let e=localStorage.getItem("jwtToken");if(e)try{let a=await fetch("".concat(r.Jc,"/orders"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});if(!a.ok){alert("Failed to fetch orders");return}let s=await a.json();t(s),i(s);let n={};s.forEach(e=>{n[e.orderIndex]=e.status||"waiting"}),T(n)}catch(e){alert("Error fetching orders")}};(0,n.useEffect)(()=>{B()},[]);let P=t=>{let a=(null==o?void 0:o.key)===t&&"asc"===o.direction?"desc":"asc";h({key:t,direction:a}),i([...e].sort((e,s)=>{if("createdAt"===t){let n=new Date(e[t]),i=new Date(s[t]);return"asc"===a?n.getTime()-i.getTime():i.getTime()-n.getTime()}if("fullPrice"===t)return"asc"===a?e[t]-s[t]:s[t]-e[t];if("status"===t){let n=["waiting","inWay","complete"];return"asc"===a?n.indexOf(e[t])-n.indexOf(s[t]):n.indexOf(s[t])-n.indexOf(e[t])}return 0}))};return(0,s.jsxs)("div",{className:l().AdminOrders,children:[(0,s.jsx)("div",{className:l().AdminTitle,children:"Заказы"}),(0,s.jsxs)(d.A,{children:[(0,s.jsxs)("table",{className:l().table,children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:l().subTr,children:[(0,s.jsx)("td",{children:"Номер заказа"}),(0,s.jsx)("td",{children:"Адрес"}),(0,s.jsx)("td",{children:"Номер телефона"}),(0,s.jsx)("td",{children:"Корзина (открыть)"}),(0,s.jsxs)("td",{onClick:()=>P("fullPrice"),style:{cursor:"pointer"},children:["Стоимость ",(null==o?void 0:o.key)==="fullPrice"&&("asc"===o.direction?"↑":"↓")]}),(0,s.jsxs)("td",{onClick:()=>P("createdAt"),style:{cursor:"pointer"},children:["Время создания ",(null==o?void 0:o.key)==="createdAt"&&("asc"===o.direction?"↑":"↓")]}),(0,s.jsxs)("td",{onClick:()=>P("status"),style:{cursor:"pointer"},children:["Статус заказа ",(null==o?void 0:o.key)==="status"&&("asc"===o.direction?"↑":"↓")]})]})}),(0,s.jsx)("tbody",{children:a.map((e,t)=>{let a=new Date(e.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return(0,s.jsxs)("tr",{className:"complete"===v[e.orderIndex]?l().grenTr:"inWay"===v[e.orderIndex]?l().orangeTr:l().greyTr,children:[(0,s.jsx)("td",{children:e.orderIndex}),(0,s.jsx)("td",{children:e.adress}),(0,s.jsx)("td",{children:e.phone_number}),(0,s.jsx)("td",{children:e._id}),(0,s.jsx)("td",{children:e.fullPrice}),(0,s.jsx)("td",{children:a}),(0,s.jsx)("td",{children:(0,s.jsx)("select",{value:v[e.orderIndex],style:{cursor:"pointer"},onChange:t=>{let a=t.target.value;T(t=>({...t,[e.orderIndex]:a})),E(e._id,a)},className:l().AdminSelectOrder,children:["complete","inWay","waiting"].map((e,t)=>(0,s.jsx)("option",{value:e,children:e},t))})}),(0,s.jsx)("td",{onClick:()=>C(e._id),style:{color:"blue",cursor:"pointer"},children:"Удалить"}),(0,s.jsx)(j.A,{isOpen:x,onClose:S,width:903,children:(0,s.jsxs)("div",{className:l().AdminModalDelete,children:[(0,s.jsx)("h1",{children:"Вы уверены?"}),(0,s.jsxs)("div",{className:l().AdminModalDelete_Bot,children:[(0,s.jsx)("h2",{onClick:()=>b(A),children:"Да"}),(0,s.jsx)("h2",{onClick:S,children:"Нет"})]})]})})]},e.orderIndex)})})]}),(0,s.jsx)("h2",{children:"ID заказа(для того, чтобы посмотреть товары заказа)"}),(0,s.jsx)("input",{className:l().AdminInput,value:N,onChange:e=>k(e.target.value),type:"text"}),(0,s.jsx)(c.A,{state:c.m.active,onClickBut:()=>I(),children:"Открыть"}),(0,s.jsx)(j.A,{isOpen:m,onClose:()=>u(!1),width:903,children:y?(0,s.jsx)(p,{cart:y}):(0,s.jsx)("p",{children:"Загрузка..."})})]})]})},A=()=>{let[e,t]=(0,n.useState)("Dishes"),[a,i]=(0,n.useState)(!1),c=async()=>{let e=localStorage.getItem("jwtToken");if(e)try{let t=await fetch("".concat(r.Jc,"/check/admin/"),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}});if(!t.ok){let e=await t.json();throw Error(e.message||"Ошибка доступа.")}i(!0)}catch(e){console.error("Ошибка доступа:",e),alert("Ошибка: ".concat(e.message))}},d=e=>{e&&t(e)};return((0,n.useEffect)(()=>{c()},[]),a)?(0,s.jsxs)("div",{className:l().AdminPanel,children:[(0,s.jsx)("div",{className:l().AdminPanel_title,children:"Админ панель"}),(0,s.jsx)("div",{className:l().AdminPanel_selectType,children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"Dishes"==e?l().activeLi:"",onClick:()=>d("Dishes"),children:"Блюда"}),(0,s.jsx)("li",{className:"Categories"==e?l().activeLi:"",onClick:()=>d("Categories"),children:"Категории"}),(0,s.jsx)("li",{className:"Users"==e?l().activeLi:"",onClick:()=>d("Users"),children:"Пользователи"}),(0,s.jsx)("li",{className:"Stocks"==e?l().activeLi:"",onClick:()=>d("Stocks"),children:"Акции"}),(0,s.jsx)("li",{className:"Orders"==e?l().activeLi:"",onClick:()=>d("Orders"),children:"Заказы"})]})}),(0,s.jsx)("div",{className:l().typeBlock,children:"Dishes"==e?(0,s.jsx)(h,{}):"Categories"==e?(0,s.jsx)(o,{}):"Users"==e?(0,s.jsx)(u,{}):"Stocks"==e?(0,s.jsx)(m,{}):"Orders"==e?(0,s.jsx)(g,{}):(0,s.jsx)(s.Fragment,{})})]}):(0,s.jsx)("h1",{children:"403 Forbidden"})}},4733:e=>{e.exports={AdminPanel_title:"AdminPanel_AdminPanel_title__kTlCC",AdminPanel_selectType:"AdminPanel_AdminPanel_selectType__bj8Fx",activeLi:"AdminPanel_activeLi__XbkHP",AdminTitle:"AdminPanel_AdminTitle__rinBl",AdminMainBlock:"AdminPanel_AdminMainBlock__bhtrv",Admin_subTitle:"AdminPanel_Admin_subTitle__XS6_N",table:"AdminPanel_table__RbeBy",AdminInput:"AdminPanel_AdminInput__iBZxA",AdminMainBlockTwo:"AdminPanel_AdminMainBlockTwo__owz4D",Admin_twoBlocks:"AdminPanel_Admin_twoBlocks__ncM0r",AdminSelect:"AdminPanel_AdminSelect__DFqhl",AdminInput_large:"AdminPanel_AdminInput_large__B7G5M",buttonCont:"AdminPanel_buttonCont__dVuSm",AdminOrders:"AdminPanel_AdminOrders__FYIR4",subTr:"AdminPanel_subTr__Cbt0r",grenTr:"AdminPanel_grenTr__OCUfS",orangeTr:"AdminPanel_orangeTr__ISzon",greyTr:"AdminPanel_greyTr__2qM7l",AdminSelectOrder:"AdminPanel_AdminSelectOrder__DtARW",AdminModalDelete:"AdminPanel_AdminModalDelete__K3eyI",AdminModalDelete_Bot:"AdminPanel_AdminModalDelete_Bot__2SKMo"}}},e=>{var t=t=>e(e.s=t);e.O(0,[106,818,368,636,593,792],()=>t(4561)),_N_E=e.O()}]);
"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[205],{99:(e,o,r)=>{r.d(o,{A:()=>i});r(43);const t=r(574).Ay.section`
  background-color: ${e=>{let{theme:o}=e;return o.background}}; /* Тепер використовує основний колір фону з теми */
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Тінь залишена без змін */
  padding: 2rem;
  margin-bottom: 2rem;

  // ДОДАНО: Плавний перехід для фонового кольору та тіні
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
`;var n=r(579);function i(e){let{children:o}=e;return(0,n.jsx)(t,{children:o})}},144:(e,o,r)=>{r.d(o,{A:()=>h});var t=r(43),n=r(574);const i=n.Ay.div`
  background-color: ${e=>{let{theme:o}=e;return o.background}}; // Основний фон картки
  border: 1px solid ${e=>{let{theme:o}=e;return o.borderColor}}; // Межа картки
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); // Тінь залишена без змін

  // ДОДАНО: Плавні переходи для фону та межі картки
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;
`,s=n.Ay.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${e=>{let{theme:o}=e;return o.color}}; // Колір тексту запитання
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // ПЕРЕВІРЕНО: Перехід для 'color' вже визначено у GlobalStyles.js для всіх h4 елементів.
  // Тому тут окремо його додавати не потрібно, він вже працює.
`,l=n.Ay.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
  border-top: 1px solid ${e=>{let{theme:o}=e;return o.borderColor}}; // Межа для списку опцій
  padding-top: 15px;

  // ДОДАНО: Плавний перехід для кольору верхньої межі списку опцій
  transition: border-color 0.4s ease-in-out;
`,a=n.Ay.li`
  background-color: ${e=>{let{theme:o}=e;return o.background}}; // Фон опції
  border: 1px solid ${e=>{let{theme:o}=e;return o.borderColor}}; // Межа опції
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: ${e=>{let{theme:o}=e;return o.color}}; // Колір тексту опції
  cursor: pointer;

  // ЧУДОВО! Переходи вже визначені тут, вони охоплюють всі зміни кольорів та фону
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${e=>{let{theme:o}=e;return o.hoverBg}}; // Колір фону при наведенні
  }

  // Стилі для обраної відповіді
  ${e=>e.isSelected&&`\n    background-color: ${e.theme.accentBg}; // \u0410\u043a\u0446\u0435\u043d\u0442\u043d\u0438\u0439 \u0444\u043e\u043d \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u043d\u043e\u0457\n    border-color: ${e.theme.accentColor}; // \u0410\u043a\u0446\u0435\u043d\u0442\u043d\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 \u043c\u0435\u0436\u0456 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u043d\u043e\u0457\n    color: ${e.theme.buttonColor}; // \u041a\u043e\u043b\u0456\u0440 \u0442\u0435\u043a\u0441\u0442\u0443 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u043d\u043e\u0457 (\u044f\u043a buttonColor \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442\u0443)\n  `}

  // Стилі для правильної відповіді, що відображаються ЛИШЕ ПІСЛЯ ВИБОРУ КОРИСТУВАЧЕМ
  ${e=>e.showFeedback&&e.isCorrectOption&&`\n    background-color: ${e.theme.successBg}; // \u0424\u043e\u043d \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n    border-color: ${e.theme.successColor}; // \u041c\u0435\u0436\u0430 \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n    color: ${e.theme.successText}; // \u0422\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n    font-weight: bold;\n  `}

  // Стилі для НЕПРАВИЛЬНОЇ відповіді, яку обрав користувач
  ${e=>e.showFeedback&&e.isSelected&&!e.isCorrectOption&&`\n    background-color: ${e.theme.dangerBg}; // \u0424\u043e\u043d \u0434\u043b\u044f \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n    border-color: ${e.theme.dangerColor}; // \u041c\u0435\u0436\u0430 \u0434\u043b\u044f \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n    color: ${e.theme.dangerText}; // \u0422\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n  `}
`,c=n.Ay.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>{let{theme:o}=e;return o.color}}; // Колір іконки

  // ДОДАНО: Перехід для кольору іконки (на додаток до transform)
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
`;var d=r(579);function h(e){let{quizData:o}=e;const[r,n]=(0,t.useState)(!1),[h,u]=(0,t.useState)(null);return(0,d.jsxs)(i,{children:[(0,d.jsxs)(s,{onClick:()=>{n(!r),r&&u(null)},children:[o.question,(0,d.jsx)(c,{isActive:r,children:r?"\u2212":"+"})]}),r&&(0,d.jsx)(l,{children:o.options.map((e,o)=>(0,d.jsx)(a,{onClick:()=>(e=>{u(e)})(o),isSelected:h===o,isCorrectOption:e.isCorrect,showFeedback:null!==h,children:e.text},o))})]})}},205:(e,o,r)=>{r.r(o),r.d(o,{default:()=>k});var t=r(43),n=r(574);const i=n.Ay.div`
  /* Ваші існуючі стилі для контейнера */
`,s=n.Ay.p`
  /* Ваші існуючі стилі для повідомлення */
  text-align: center;
  margin-top: 50px;
  font-size: 1.2rem;
  color: ${e=>{let{theme:o}=e;return o.colorSecondary}};
`;var l=r(99),a=r(441),c=r(144),d=r(505),h=r(579);const u=n.Ay.div`
  // Цю назву можна залишити або змінити на HomeGroupLessonMetaInfoContainer
  font-size: 0.95rem;
  color: ${e=>{let{theme:o}=e;return o.colorSecondary}};
  margin-top: 15px;

  p {
    margin: 5px 0;
  }

  span {
    font-weight: bold;
    color: ${e=>{let{theme:o}=e;return o.color}};
  }

  .lesson-tags {
    margin-top: 10px;
    span {
      display: inline-block;
      background-color: ${e=>{let{theme:o}=e;return o.tagBg}};
      color: ${e=>{let{theme:o}=e;return o.tagColor}};
      padding: 4px 8px;
      border-radius: 4px;
      margin-right: 8px;
      margin-bottom: 5px;
      font-size: 0.85rem;
    }
  }
`;const m=function(e){let{author:o,book:r,chapter:t,verses:n,date:i,duration:s,theme:l,tags:a}=e;return(0,h.jsxs)(u,{children:[o&&(0,h.jsxs)("p",{children:["\u0410\u0432\u0442\u043e\u0440: ",(0,h.jsx)("span",{children:o})]}),(r||t||n)&&(0,h.jsxs)("p",{children:["\u041a\u043d\u0438\u0433\u0430:"," ",(0,h.jsxs)("span",{children:[r," ",t?`\u0433\u043b\u0430\u0432\u0430 ${t}`:"",n?`, \u0432\u0456\u0440\u0448\u0456 ${n}`:""]})]}),i&&(0,h.jsxs)("p",{children:["\u0414\u0430\u0442\u0430: ",(0,h.jsx)("span",{children:i})]}),s&&(0,h.jsxs)("p",{children:["\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c: ",(0,h.jsx)("span",{children:s})]}),l&&(0,h.jsxs)("p",{children:["\u0422\u0435\u043c\u0430: ",(0,h.jsx)("span",{children:l})]}),a&&a.length>0&&(0,h.jsx)("div",{className:"lesson-tags",children:a.map((e,o)=>(0,h.jsx)("span",{children:e},o))})]})},p=n.Ay.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${e=>{let{theme:o}=e;return o.background}};
  color: ${e=>{let{theme:o}=e;return o.color}};
  min-height: calc(100vh - var(--header-height, 60px));
`,g=n.Ay.div`
  text-align: center;
  margin-bottom: 30px;
  h2 {
    font-size: 2.5rem;
    color: ${e=>{let{theme:o}=e;return o.accentColor}};
    margin-bottom: 10px;
    line-height: 1.2;
  }
`,x=n.Ay.div`
  /* Можливо, тут будуть додаткові стилі для контейнера з картою, якщо потрібно */
`,b=n.Ay.div`
  line-height: 1.7;
  font-size: 1.1rem;

  p {
    margin-bottom: 1em;
  }

  h3 {
    font-size: 1.8rem;
    color: ${e=>{let{theme:o}=e;return o.color}};
    margin-top: 30px;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 1.4rem;
    color: ${e=>{let{theme:o}=e;return o.color}};
    margin-top: 25px;
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
    color: ${e=>{let{theme:o}=e;return o.accentColor}};
  }
`,f=n.Ay.p`
  /* Додаткові стилі для параграфів, якщо потрібно */
`,v=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 25px;
  margin-bottom: 30px;
  padding: 15px;
  background-color: ${e=>{let{theme:o}=e;return o.cardBackground}};
  border-radius: 8px;
  box-shadow: ${e=>{let{theme:o}=e;return o.shadow}};
`;const $=function(e){let{lessonData:o}=e;if(!o)return(0,h.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443 \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438..."});const{title:r,author:n,book:i,chapter:s,verses:u,date:$,duration:A,theme:j,tags:y,description:k,sections:w}=o,z=e=>({__html:e});return(0,h.jsxs)(p,{children:[" ",(0,h.jsxs)(g,{children:[" ",(0,h.jsx)("h2",{children:r}),(0,h.jsx)(m,{author:n,book:i,chapter:s,verses:u,date:$,duration:A,theme:j,tags:y})]}),(0,h.jsx)(x,{children:(0,h.jsx)(l.A,{children:(0,h.jsxs)(b,{children:[" ",k&&(0,h.jsx)(f,{dangerouslySetInnerHTML:z(k)}),w.map((e,o)=>"text"===e.type?(0,h.jsxs)(t.Fragment,{children:[e.title&&(0,h.jsx)(a.A,{as:e.subtitle?"h4":"h3",size:e.subtitle?"medium":"default",children:e.title}),e.content.map((e,o)=>(0,h.jsx)(f,{dangerouslySetInnerHTML:z(e)},o))]},o):"quiz"===e.type?(0,h.jsx)(c.A,{quizData:e},e.id):"reveal-cards"===e.type?(0,h.jsx)(v,{children:e.cards.map(e=>(0,h.jsx)(d.A,{cardData:e},e.id))},o):null)]})})})]})};var A=r(841),j=r(3);const y=()=>{const{selectedHomeGroupLesson:e,setSelectedHomeGroupLesson:o}=(0,j.t)(),[r,n]=(0,t.useState)(null),[l,a]=(0,t.useState)(!0),c=(e=>{if(!e)return null;for(const o in A.H)if(A.H.hasOwnProperty(o)){const r=A.H[o];if(Array.isArray(r)&&r.length>0){const o=r.find(o=>o.id===e);if(o)return o}}return null})(e);return(0,t.useEffect)(()=>{if(!e){let e=null;for(const o in A.H)if(A.H.hasOwnProperty(o)){const r=A.H[o];if(Array.isArray(r)&&r.length>0){e=r[0].id;break}}e?o(e):a(!1)}},[e,o]),(0,t.useEffect)(()=>{e&&(async()=>{if(a(!0),n(null),c&&c.loadLesson)try{const e=await c.loadLesson();n(e.default)}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443:",e),n(null)}finally{a(!1)}else a(!1)})()},[c,e]),(0,h.jsx)(i,{children:l?(0,h.jsx)(s,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443..."}):r?(0,h.jsx)($,{lessonData:r}):(0,h.jsx)(s,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0443\u0440\u043e\u043a \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432 \u043c\u0435\u043d\u044e."})})};function k(){return(0,h.jsx)(y,{})}},441:(e,o,r)=>{r.d(o,{A:()=>s});r(43);var t=r(574);const n=t.Ay.h3`
  color: ${e=>{let{theme:o}=e;return o.color}};
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  // ДОДАНО: Плавні переходи для кольору та розміру шрифту
  transition: color 0.4s ease-in-out, font-size 0.3s ease-in-out;

  /* Визначення розмірів на основі prop 'size' */
  ${e=>"small"===e.size&&t.AH`
      font-size: 1rem;
    `}
  ${e=>"medium"===e.size&&t.AH`
      font-size: 1.25rem;
    `}
  ${e=>"default"===e.size&&t.AH`
      font-size: 1.5rem;
    `}
  ${e=>"large"===e.size&&t.AH`
      font-size: 2.25rem;
      margin-bottom: ${e=>e.bottomMargin||"1rem"};
    `}
  ${e=>"extraLarge"===e.size&&t.AH`
      /* Додано для головного заголовка проповіді */
      font-size: 2.5rem; /* Розмір з вашого h1 */
      margin-bottom: ${e=>e.bottomMargin||"1rem"};
    `}

  /* Визначення кольору на основі prop 'color' */
  ${e=>"white"===e.color&&t.AH`
      /* Залишаємо опцію, якщо десь знадобиться білий текст */
      color: white; /* Залишено як white, оскільки це явний override */
      // Якщо color:white встановлюється через пропси, і ви хочете анімувати цей перехід,
      // то глобальний transition на color вже спрацює.
    `}

  /* Вирівнювання тексту на основі prop 'alignment' */
  ${e=>"center"===e.alignment&&t.AH`
      text-align: center;
    `}
`;var i=r(579);function s(e){let{as:o,size:r,alignment:t,color:s,bottomMargin:l,children:a}=e;return(0,i.jsx)(n,{as:o,size:r,alignment:t,color:s,bottomMargin:l,children:a})}},505:(e,o,r)=>{r.d(o,{A:()=>h});var t=r(43),n=r(574);const i=n.Ay.div`
  background-color: ${e=>{let{theme:o}=e;return o.navBg}}; // Використано колір фону навігації для картки
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Тінь залишена без змін
  width: 100%;
  max-width: 320px; /* Для гарного відображення у сітці */
  cursor: pointer;

  // ОНОВЛЕНО: Більш специфічний перехід.
  // 0.4s для зміни фону (з темою), 0.3s для тіні (наведення).
  transition: background-color 0.4s ease-in-out, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); // Тінь при наведенні залишена без змін
  }
`,s=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  font-weight: bold;
  color: ${e=>{let{theme:o}=e;return o.color}}; // Колір заголовка з теми
  font-size: 1.1em;

  // ДОДАНО: Плавний перехід для кольору заголовка (оскільки це div, а не h-тег)
  transition: color 0.4s ease-in-out;
`,l=n.Ay.div`
  padding: 0 20px 15px;
  color: ${e=>{let{theme:o}=e;return o.color}}; // Колір тексту контенту з теми
  font-size: 0.95em;
  line-height: 1.5;

  // ДОДАНО: Плавний перехід для кольору контенту
  transition: color 0.4s ease-in-out;
`,a=n.Ay.button`
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  padding: 5px;

  // Колір кнопки залежить від isActive, використовуючи кольори з теми
  color: ${e=>e.isActive?e.theme.accentColor:e.theme.color}; /* Активний: акцентний колір; Неактивний: основний колір тексту */

  // Переходи вже були, це чудово
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  transform: ${e=>e.isActive?"rotate(180deg)":"rotate(0deg)"};

  &:hover {
    // Колір при наведенні також залежить від isActive та теми
    // Можна використовувати theme.navActive або додати спеціальний toggleHoverColor до вашої теми
    color: ${e=>e.isActive?e.theme.navActive:e.theme.borderColor}; /* Приклад: Активний hover: колір navActive; Неактивний hover: колір borderColor */
  }
`;var c=r(579);function d(e){let{isActive:o,onClick:r}=e;return(0,c.jsxs)(a,{onClick:r,isActive:o,children:[o?"\u25b2":"\u25bc"," "]})}function h(e){let{cardData:o}=e;const[r,n]=(0,t.useState)(!1),a=()=>n(!r);return(0,c.jsxs)(i,{children:[(0,c.jsxs)(s,{onClick:a,children:[o.emoji," ",o.title,(0,c.jsx)(d,{isActive:r,onClick:a})]}),r&&(0,c.jsx)(l,{children:o.content})]})}}}]);
//# sourceMappingURL=205.49ec8ef1.chunk.js.map
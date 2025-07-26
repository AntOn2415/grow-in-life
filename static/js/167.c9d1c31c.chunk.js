"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[167],{99:(e,r,t)=>{t.d(r,{A:()=>i});t(43);const o=t(574).Ay.section`
  background-color: ${e=>{let{theme:r}=e;return r.background}}; /* Тепер використовує основний колір фону з теми */
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Тінь залишена без змін */
  padding: 2rem;
  margin-bottom: 2rem;

  // ДОДАНО: Плавний перехід для фонового кольору та тіні
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
`;var n=t(579);function i(e){let{children:r}=e;return(0,n.jsx)(o,{children:r})}},144:(e,r,t)=>{t.d(r,{A:()=>m});var o=t(43),n=t(574);const i=n.Ay.div`
  background-color: ${e=>{let{theme:r}=e;return r.background}}; // Основний фон картки
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}}; // Межа картки
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
  color: ${e=>{let{theme:r}=e;return r.color}}; // Колір тексту запитання
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // ПЕРЕВІРЕНО: Перехід для 'color' вже визначено у GlobalStyles.js для всіх h4 елементів.
  // Тому тут окремо його додавати не потрібно, він вже працює.
`,a=n.Ay.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}}; // Межа для списку опцій
  padding-top: 15px;

  // ДОДАНО: Плавний перехід для кольору верхньої межі списку опцій
  transition: border-color 0.4s ease-in-out;
`,l=n.Ay.li`
  background-color: ${e=>{let{theme:r}=e;return r.background}}; // Фон опції
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}}; // Межа опції
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: ${e=>{let{theme:r}=e;return r.color}}; // Колір тексту опції
  cursor: pointer;

  // ЧУДОВО! Переходи вже визначені тут, вони охоплюють всі зміни кольорів та фону
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.hoverBg}}; // Колір фону при наведенні
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
  color: ${e=>{let{theme:r}=e;return r.color}}; // Колір іконки

  // ДОДАНО: Перехід для кольору іконки (на додаток до transform)
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
`;var d=t(579);function m(e){let{quizData:r}=e;const[t,n]=(0,o.useState)(!1),[m,h]=(0,o.useState)(null);return(0,d.jsxs)(i,{children:[(0,d.jsxs)(s,{onClick:()=>{n(!t),t&&h(null)},children:[r.question,(0,d.jsx)(c,{isActive:t,children:t?"\u2212":"+"})]}),t&&(0,d.jsx)(a,{children:r.options.map((e,r)=>(0,d.jsx)(l,{onClick:()=>(e=>{h(e)})(r),isSelected:m===r,isCorrectOption:e.isCorrect,showFeedback:null!==m,children:e.text},r))})]})}},167:(e,r,t)=>{t.r(r),t.d(r,{default:()=>z});var o=t(43),n=t(574);const i=n.Ay.div`
  // Цей компонент не має прямих властивостей кольору, які потрібно змінювати.
  // Його фон та колір тексту, швидше за все, контролюються батьківськими компонентами
  // (наприклад, Main, Wrapper у Layout) або глобальними стилями body, де переходи вже налаштовані.
`,s=(n.Ay.h2`
  color: ${e=>{let{theme:r}=e;return r.color}}; // Використано основний колір тексту з теми
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;

  // ПЕРЕВІРЕНО: Перехід для 'color' вже визначено у GlobalStyles.js для всіх h2 елементів.
  // Тому тут окремо його додавати не потрібно, він вже працює автоматично.
`,n.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:r}=e;return r.color}}; // Використано основний колір тексту з теми
  margin-top: 2rem;
  font-size: 1.15rem;

  // ДОДАНО: Плавний перехід для кольору тексту, оскільки це <p>
  transition: color 0.4s ease-in-out;
`);var a=t(99),l=t(441),c=t(144),d=t(505);const m=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9em;
  color: inherit; // Успадковує колір від батьківського компонента
  transition: color 0.4s ease-in-out; // Забезпечує плавний перехід кольору

  span {
    white-space: nowrap; // Запобігає розриву тексту
  }
`,h=n.Ay.span`
  /* Додаткові стилі для кожного елемента мета-інформації */
`,p=n.Ay.p`
  margin-top: 20px;
  max-width: 600px; /* Обмеження ширини для читабельності */
  margin-left: auto;
  margin-right: auto;
  font-size: 1em;
  line-height: 1.5;
  opacity: 0.9; /* Трохи приглушений */
  text-align: center; /* Центруємо опис */
`;var u=t(579);function g(e){let{speaker:r,date:t,theme:o,book:n,description:i}=e;return(0,u.jsxs)(m,{children:[n&&(0,u.jsxs)(h,{children:["\u041a\u043d\u0438\u0433\u0430: ",(0,u.jsx)("strong",{children:n})]}),r&&(0,u.jsxs)(h,{children:["\u0421\u043f\u0456\u043a\u0435\u0440: ",(0,u.jsx)("strong",{children:r})]}),t&&(0,u.jsxs)(h,{children:["\u0414\u0430\u0442\u0430: ",t]}),o&&(0,u.jsxs)(h,{children:["\u0422\u0435\u043c\u0430: ",(0,u.jsx)("strong",{children:o})]}),i&&(0,u.jsx)(p,{children:i})]})}const x=n.Ay.div`
  /* Загальні стилі для контейнера вмісту проповіді */
  // Не має theme-залежних властивостей, які потребують transition.
`,b=n.Ay.div`
  /* Нова стилізація для секції "герой" */
  background: ${e=>{let{theme:r}=e;return r.mode,`linear-gradient(135deg, ${r.gradientStart} 0%, ${r.gradientEnd} 100%)`}}; /* У темній темі: градієнт залишається */
  color: ${e=>{let{theme:r}=e;return r.color}}; /* Основний колір тексту теми (темний у світлій, світлий у темній) */
  padding: 4rem 1rem;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  // *** Цей рядок є ключовим для анімації цього компонента ***
  // ЧУДОВО! Перехід вже налаштований і працює коректно для background та color.
  transition: background 0.4s ease-in-out, color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  /* Стилі для основного заголовка h2 всередині цього блоку */
  h2 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    line-height: 1.2;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05); // Дуже легка тінь для тексту
    // Колір цього h2 буде успадковано від SermonTitleWrapper.
    // Оскільки SermonTitleWrapper має transition: color, то і h2 буде плавно змінювати колір.
  }

  /* Регулювання стилів MetaContainer, коли він знаходиться всередині SermonTitleWrapper */
  ${m} {
    margin-top: 2rem;
    font-size: 1.1em;
    // Колір буде успадковано від батьківського SermonTitleWrapper.
    // Тому він також буде плавно змінюватися.
  }

  /* Медіа-запити для адаптивності */
  @media (max-width: 768px) {
    padding: 3rem 1rem;
    h2 {
      font-size: 2.2rem;
    }
    ${m} {
      font-size: 1em;
    }
  }
`,f=n.Ay.main`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  // Не має theme-залежних властивостей, які потребують transition.
`,A=n.Ay.div`
  color: ${e=>{let{theme:r}=e;return r.color}}; // Колір тексту проповіді з теми

  // ДОДАНО: Плавний перехід для кольору тексту
  transition: color 0.4s ease-in-out;
`,v=n.Ay.p`
  margin-bottom: 1rem;
  font-size: 1.15rem;
  line-height: 1.6;
  // Колір цього параграфа буде успадковано від батьківського SermonTextWrapper.
  // Оскільки SermonTextWrapper тепер має transition: color, то і параграф буде плавно змінювати колір.
`,y=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  // Не має theme-залежних властивостей, які потребують transition.
`;const $=function(e){let{sermonData:r}=e;if(!r)return(0,u.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u043f\u043e\u0432\u0456\u0434\u0456..."});const{title:t,speaker:n,date:i,book:s,description:m,theme:h,sections:p}=r;return(0,u.jsxs)(x,{children:[(0,u.jsxs)(b,{children:[(0,u.jsx)("h2",{children:t}),(0,u.jsx)(g,{speaker:n,date:i,theme:h,book:s,description:m})]}),(0,u.jsx)(f,{children:(0,u.jsx)(a.A,{children:(0,u.jsx)(A,{children:p.map((e,r)=>"text"===e.type?(0,u.jsxs)(o.Fragment,{children:[e.title&&(0,u.jsx)(l.A,{as:e.subtitle?"h4":"h3",size:e.subtitle?"medium":"default",children:e.title}),e.content.map((e,r)=>{return(0,u.jsx)(v,{dangerouslySetInnerHTML:(t=e,{__html:t})},r);var t})]},r):"quiz"===e.type?(0,u.jsx)(c.A,{quizData:e},e.id):"reveal-cards"===e.type?(0,u.jsx)(y,{children:e.cards.map(e=>(0,u.jsx)(d.A,{cardData:e},e.id))},r):null)})})})]})};var j=t(230),w=t(197);const k=()=>{const{selectedSermon:e,setSelectedSermon:r}=(0,w.Pn)(),t=(e=>{if(!e)return null;for(const r in j.V)if(j.V.hasOwnProperty(r)){const t=j.V[r];if(Array.isArray(t)&&t.length>0){const r=t.find(r=>r.id===e);if(r)return r}}return null})(e);return(0,o.useEffect)(()=>{if(!e){let e=null;for(const r in j.V)if(j.V.hasOwnProperty(r)){const t=j.V[r];if(Array.isArray(t)&&t.length>0){e=t[0].id;break}}e&&r(e)}},[e,r]),(0,u.jsx)(i,{children:t?(0,u.jsx)($,{sermonData:t}):(0,u.jsx)(s,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0440\u043e\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432 \u043c\u0435\u043d\u044e."})})};function z(){return(0,u.jsx)(k,{})}},441:(e,r,t)=>{t.d(r,{A:()=>s});t(43);var o=t(574);const n=o.Ay.h3`
  color: ${e=>{let{theme:r}=e;return r.color}};
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  // ДОДАНО: Плавні переходи для кольору та розміру шрифту
  transition: color 0.4s ease-in-out, font-size 0.3s ease-in-out;

  /* Визначення розмірів на основі prop 'size' */
  ${e=>"small"===e.size&&o.AH`
      font-size: 1rem;
    `}
  ${e=>"medium"===e.size&&o.AH`
      font-size: 1.25rem;
    `}
  ${e=>"default"===e.size&&o.AH`
      font-size: 1.5rem;
    `}
  ${e=>"large"===e.size&&o.AH`
      font-size: 2.25rem;
      margin-bottom: ${e=>e.bottomMargin||"1rem"};
    `}
  ${e=>"extraLarge"===e.size&&o.AH`
      /* Додано для головного заголовка проповіді */
      font-size: 2.5rem; /* Розмір з вашого h1 */
      margin-bottom: ${e=>e.bottomMargin||"1rem"};
    `}

  /* Визначення кольору на основі prop 'color' */
  ${e=>"white"===e.color&&o.AH`
      /* Залишаємо опцію, якщо десь знадобиться білий текст */
      color: white; /* Залишено як white, оскільки це явний override */
      // Якщо color:white встановлюється через пропси, і ви хочете анімувати цей перехід,
      // то глобальний transition на color вже спрацює.
    `}

  /* Вирівнювання тексту на основі prop 'alignment' */
  ${e=>"center"===e.alignment&&o.AH`
      text-align: center;
    `}
`;var i=t(579);function s(e){let{as:r,size:t,alignment:o,color:s,bottomMargin:a,children:l}=e;return(0,i.jsx)(n,{as:r,size:t,alignment:o,color:s,bottomMargin:a,children:l})}},505:(e,r,t)=>{t.d(r,{A:()=>m});var o=t(43),n=t(574);const i=n.Ay.div`
  background-color: ${e=>{let{theme:r}=e;return r.navBg}}; // Використано колір фону навігації для картки
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
  color: ${e=>{let{theme:r}=e;return r.color}}; // Колір заголовка з теми
  font-size: 1.1em;

  // ДОДАНО: Плавний перехід для кольору заголовка (оскільки це div, а не h-тег)
  transition: color 0.4s ease-in-out;
`,a=n.Ay.div`
  padding: 0 20px 15px;
  color: ${e=>{let{theme:r}=e;return r.color}}; // Колір тексту контенту з теми
  font-size: 0.95em;
  line-height: 1.5;

  // ДОДАНО: Плавний перехід для кольору контенту
  transition: color 0.4s ease-in-out;
`,l=n.Ay.button`
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
`;var c=t(579);function d(e){let{isActive:r,onClick:t}=e;return(0,c.jsxs)(l,{onClick:t,isActive:r,children:[r?"\u25b2":"\u25bc"," "]})}function m(e){let{cardData:r}=e;const[t,n]=(0,o.useState)(!1),l=()=>n(!t);return(0,c.jsxs)(i,{children:[(0,c.jsxs)(s,{onClick:l,children:[r.emoji," ",r.title,(0,c.jsx)(d,{isActive:t,onClick:l})]}),t&&(0,c.jsx)(a,{children:r.content})]})}}}]);
//# sourceMappingURL=167.c9d1c31c.chunk.js.map
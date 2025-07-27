"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[623],{99:(e,t,r)=>{r.d(t,{A:()=>l});r(43);const o=r(574).Ay.section`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; /* Тепер використовує основний колір фону з теми */
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Тінь залишена без змін */
  padding: 2rem;
  margin-bottom: 2rem;

  // ДОДАНО: Плавний перехід для фонового кольору та тіні
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
`;var n=r(579);function l(e){let{children:t}=e;return(0,n.jsx)(o,{children:t})}},144:(e,t,r)=>{r.d(t,{A:()=>m});var o=r(43),n=r(574);const l=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; // Основний фон картки
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // Межа картки
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); // Тінь залишена без змін

  // ДОДАНО: Плавні переходи для фону та межі картки
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;
`,i=n.Ay.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${e=>{let{theme:t}=e;return t.color}}; // Колір тексту запитання
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  // ПЕРЕВІРЕНО: Перехід для 'color' вже визначено у GlobalStyles.js для всіх h4 елементів.
  // Тому тут окремо його додавати не потрібно, він вже працює.
`,s=n.Ay.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // Межа для списку опцій
  padding-top: 15px;

  // ДОДАНО: Плавний перехід для кольору верхньої межі списку опцій
  transition: border-color 0.4s ease-in-out;
`,a=n.Ay.li`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; // Фон опції
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // Межа опції
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: ${e=>{let{theme:t}=e;return t.color}}; // Колір тексту опції
  cursor: pointer;

  // ЧУДОВО! Переходи вже визначені тут, вони охоплюють всі зміни кольорів та фону
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.hoverBg}}; // Колір фону при наведенні
  }

  // Стилі для обраної відповіді
  ${e=>e.isSelected&&`\n    background-color: ${e.theme.accentBg}; // \u0410\u043a\u0446\u0435\u043d\u0442\u043d\u0438\u0439 \u0444\u043e\u043d \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u043d\u043e\u0457\n    border-color: ${e.theme.accentColor}; // \u0410\u043a\u0446\u0435\u043d\u0442\u043d\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 \u043c\u0435\u0436\u0456 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u043d\u043e\u0457\n    color: ${e.theme.buttonColor}; // \u041a\u043e\u043b\u0456\u0440 \u0442\u0435\u043a\u0441\u0442\u0443 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u043d\u043e\u0457 (\u044f\u043a buttonColor \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0440\u0430\u0441\u0442\u0443)\n  `}

  // Стилі для правильної відповіді, що відображаються ЛИШЕ ПІСЛЯ ВИБОРУ КОРИСТУВАЧЕМ
  ${e=>e.showFeedback&&e.isCorrectOption&&`\n    background-color: ${e.theme.successBg}; // \u0424\u043e\u043d \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n    border-color: ${e.theme.successColor}; // \u041c\u0435\u0436\u0430 \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n    color: ${e.theme.successText}; // \u0422\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n    font-weight: bold;\n  `}

  // Стилі для НЕПРАВИЛЬНОЇ відповіді, яку обрав користувач
  ${e=>e.showFeedback&&e.isSelected&&!e.isCorrectOption&&`\n    background-color: ${e.theme.dangerBg}; // \u0424\u043e\u043d \u0434\u043b\u044f \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n    border-color: ${e.theme.dangerColor}; // \u041c\u0435\u0436\u0430 \u0434\u043b\u044f \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n    color: ${e.theme.dangerText}; // \u0422\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0457 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456\n  `}
`,d=n.Ay.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.color}}; // Колір іконки

  // ДОДАНО: Перехід для кольору іконки (на додаток до transform)
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
`;var c=r(579);function m(e){let{quizData:t}=e;const[r,n]=(0,o.useState)(!1),[m,u]=(0,o.useState)(null);return(0,c.jsxs)(l,{children:[(0,c.jsxs)(i,{onClick:()=>{n(!r),r&&u(null)},children:[t.question,(0,c.jsx)(d,{isActive:r,children:r?"\u2212":"+"})]}),r&&(0,c.jsx)(s,{children:t.options.map((e,t)=>(0,c.jsx)(a,{onClick:()=>(e=>{u(e)})(t),isSelected:m===t,isCorrectOption:e.isCorrect,showFeedback:null!==m,children:e.text},t))})]})}},441:(e,t,r)=>{r.d(t,{A:()=>l});r(43);const o=r(574).Ay.h3`
  color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ Змінив на accentColor для заголовків секцій
  font-weight: bold; /* Залишаємо, якщо не в темі */
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  ${e=>"default"===e.size&&`\n    font-size: ${e.theme.fontSizes.xlarge}; // \u2705 \u0417 \u0442\u0435\u043c\u0438\n  `}

  ${e=>"medium"===e.size&&`\n    font-size: ${e.theme.fontSizes.large}; // \u2705 \u0417 \u0442\u0435\u043c\u0438\n  `}

  a {
    color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;var n=r(579);const l=e=>{let{as:t="h3",size:r="default",children:l}=e;return(0,n.jsx)(o,{as:t,size:r,dangerouslySetInnerHTML:(i=l,{__html:i})});var i}},505:(e,t,r)=>{r.d(t,{A:()=>m});var o=r(43),n=r(574);const l=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; // ✅ З теми
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // ✅ З теми
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}}; // ✅ З теми
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}}; // ✅ З теми
  overflow: hidden; /* Щоб вміст не виходив за рамки */
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}}; // ✅ З теми
  }
`,i=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: ${e=>{let{theme:t}=e;return t.accentBg}}; // ✅ З теми
  color: ${e=>{let{theme:t}=e;return t.buttonColor}}; // ✅ З теми (для контрасту на accentBg)
  font-weight: bold; /* Залишаємо, якщо не в темі */
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}}; // ✅ З теми
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.accentBgHover||t.accentBg}}; // ✅ З теми
  }

  span:first-child {
    /* Для емодзі */
    margin-right: 0.75rem;
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}}; // ✅ З теми
  }

  a {
    /* Стилі для посилань всередині заголовка картки */
    color: ${e=>{let{theme:t}=e;return t.buttonColor}}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`,s=n.Ay.div`
  padding: 1.5rem;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ✅ З теми
  color: ${e=>{let{theme:t}=e;return t.color}}; // ✅ З теми
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .bible-quote {
    font-style: italic;
    color: ${e=>{let{theme:t}=e;return t.colorSecondary}}; // ✅ З теми
    margin-top: 0.5rem;
    padding-left: 1rem;
    border-left: 2px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // ✅ З теми
  }
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
`;var d=r(579);function c(e){let{isActive:t,onClick:r}=e;return(0,d.jsxs)(a,{onClick:r,isActive:t,children:[t?"\u25b2":"\u25bc"," "]})}function m(e){let{cardData:t}=e;const[r,n]=(0,o.useState)(!1),a=()=>n(!r),m=e=>({__html:e});return(0,d.jsxs)(l,{children:[(0,d.jsxs)(i,{onClick:a,children:[t.emoji,(0,d.jsx)("span",{dangerouslySetInnerHTML:m(t.title)}),(0,d.jsx)(c,{isActive:r,onClick:a})]}),r&&(0,d.jsx)(s,{dangerouslySetInnerHTML:m(t.content)})]})}},623:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Q});var o=r(43),n=r(574);const l=n.Ay.div`
  /* Ваші існуючі стилі для контейнера */
`,i=n.Ay.p`
  /* Ваші існуючі стилі для повідомлення */
  text-align: center;
  margin-top: 50px;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colorSecondary}};
`;var s=r(99),a=r(441),d=r(144),c=r(505),m=r(579);const u=n.Ay.div`
  // Цю назву можна залишити або змінити на HomeGroupLessonMetaInfoContainer
  font-size: 0.95rem;
  color: ${e=>{let{theme:t}=e;return t.colorSecondary}};
  margin-top: 15px;

  p {
    margin: 5px 0;
  }

  span {
    font-weight: bold;
    color: ${e=>{let{theme:t}=e;return t.color}};
  }

  .lesson-tags {
    margin-top: 10px;
    span {
      display: inline-block;
      background-color: ${e=>{let{theme:t}=e;return t.tagBg}};
      color: ${e=>{let{theme:t}=e;return t.tagColor}};
      padding: 4px 8px;
      border-radius: 4px;
      margin-right: 8px;
      margin-bottom: 5px;
      font-size: 0.85rem;
    }
  }
`;const h=function(e){let{author:t,book:r,chapter:o,verses:n,date:l,duration:i,theme:s,tags:a}=e;return(0,m.jsxs)(u,{children:[t&&(0,m.jsxs)("p",{children:["\u0410\u0432\u0442\u043e\u0440: ",(0,m.jsx)("span",{children:t})]}),(r||o||n)&&(0,m.jsxs)("p",{children:["\u041a\u043d\u0438\u0433\u0430:"," ",(0,m.jsxs)("span",{children:[r," ",o?`\u0433\u043b\u0430\u0432\u0430 ${o}`:"",n?`, \u0432\u0456\u0440\u0448\u0456 ${n}`:""]})]}),l&&(0,m.jsxs)("p",{children:["\u0414\u0430\u0442\u0430: ",(0,m.jsx)("span",{children:l})]}),i&&(0,m.jsxs)("p",{children:["\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c: ",(0,m.jsx)("span",{children:i})]}),s&&(0,m.jsxs)("p",{children:["\u0422\u0435\u043c\u0430: ",(0,m.jsx)("span",{children:s})]}),a&&a.length>0&&(0,m.jsx)("div",{className:"lesson-tags",children:a.map((e,t)=>(0,m.jsx)("span",{children:e},t))})]})},g=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.interactiveBgLight}}; // ✅ З теми
  border-left: 5px solid ${e=>{let{theme:t}=e;return t.interactiveBorderLight}}; // ✅ З теми
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}}; // ✅ З теми
  display: flex;
  align-items: flex-start;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}}; // ✅ З теми
`,x=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}}; // ✅ З теми
  margin-right: 1.5rem;
  line-height: 1;
`,p=n.Ay.div`
  flex-grow: 1;
`,b=n.Ay.h4`
  color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}}; // ✅ З теми
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: bold; /* Залишаємо, якщо не в темі */
`,f=e=>{let{title:t,content:r,emoji:o}=e;const n=e=>({__html:e});return(0,m.jsxs)(g,{children:[o&&(0,m.jsx)(x,{children:o}),(0,m.jsxs)(p,{children:[t&&(0,m.jsx)(b,{dangerouslySetInnerHTML:n(t)}),(0,m.jsx)("p",{dangerouslySetInnerHTML:n(r)})]})]})},$=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.interactiveBgYellow}}; // ✅ З теми
  border: 1px solid ${e=>{let{theme:t}=e;return t.interactiveBorderYellow}}; // ✅ З теми
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}}; // ✅ З теми
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}}; // ✅ З теми
`,y=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}}; // ✅ З теми
  margin-bottom: 1rem;
`,j=n.Ay.p`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}}; // ✅ З теми
  font-weight: bold; /* Залишаємо, якщо не в темі */
  color: ${e=>{let{theme:t}=e;return t.color}}; // ✅ З теми
  margin-bottom: 1rem;
`,v=n.Ay.button`
  background-color: ${e=>{let{theme:t}=e;return t.buttonBg}}; // ✅ З теми
  color: ${e=>{let{theme:t}=e;return t.buttonColor}}; // ✅ З теми
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}}; // ✅ З теми
  cursor: pointer;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ✅ З теми
  font-weight: bold; /* Залишаємо, якщо не в темі */
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
  }
`,A=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; // ✅ З теми
  border-left: 3px solid ${e=>{let{theme:t}=e;return t.successColor}}; // ✅ З теми
  padding: 1rem;
  margin-top: 1.5rem;
  font-style: italic;
  color: ${e=>{let{theme:t}=e;return t.color}}; // ✅ З теми
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}}; // ✅ З теми
  width: 100%;
`,k=e=>{let{question:t,answer:r,emoji:n}=e;const[l,i]=(0,o.useState)(!1);return(0,m.jsxs)($,{children:[(0,m.jsx)(y,{children:n||"\u2753"}),(0,m.jsx)(j,{children:t}),r&&(0,m.jsx)(v,{onClick:()=>{i(!l)},children:l?"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c"}),l&&r&&(0,m.jsx)(A,{children:r})]})},w=n.Ay.div`
  margin: 3rem 0;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`,C=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; // ✅ З теми
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // ✅ З теми
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}}; // ✅ З теми
  padding: 1.5rem;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}}; // ✅ З теми
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}}; // ✅ З теми
  }
`,z=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}}; // ✅ З теми
  margin-bottom: 0.8rem;
`,S=n.Ay.h5`
  color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}}; // ✅ З теми
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: bold; /* Залишаємо, якщо не в темі */
  line-height: 1.3;
`,H=n.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ✅ З теми
  color: ${e=>{let{theme:t}=e;return t.color}}; // ✅ З теми
  line-height: 1.6;

  p {
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  .bible-quote {
    font-style: italic;
    color: ${e=>{let{theme:t}=e;return t.colorSecondary}}; // ✅ З теми
    margin-top: 0.5rem;
    padding-left: 1rem;
    border-left: 2px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // ✅ З теми
  }
`,L=e=>{let{title:t,cards:r}=e;const o=e=>({__html:e});return(0,m.jsxs)(w,{children:[t&&(0,m.jsx)(a.A,{as:"h3",size:"default",children:t}),r.map((e,t)=>(0,m.jsxs)(C,{children:[e.emoji&&(0,m.jsx)(z,{children:e.emoji}),(0,m.jsx)(S,{dangerouslySetInnerHTML:o(e.title)})," ",(0,m.jsx)(H,{dangerouslySetInnerHTML:o(e.content)})," "]},t))]})},_=n.Ay.div`
  margin: 3rem 0;
  position: relative;
  padding-left: 30px;

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${e=>{let{theme:t}=e;return t.borderColor}}; // ✅ З теми
  }
`,B=n.Ay.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 30px;
`,T=n.Ay.div`
  position: absolute;
  left: 0;
  top: 5px;
  width: 12px;
  height: 12px;
  background-color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
  border-radius: 50%;
  border: 2px solid ${e=>{let{theme:t}=e;return t.background}}; // ✅ З теми
  z-index: 1;
`,I=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; // ✅ З теми
  padding: 1rem 1.5rem;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}}; // ✅ З теми
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}}; // ✅ З теми
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // ✅ З теми

  p {
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .bible-quote {
    font-style: italic;
    color: ${e=>{let{theme:t}=e;return t.colorSecondary}}; // ✅ З теми
    margin-top: 0.5rem;
    padding-left: 1rem;
    border-left: 2px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // ✅ З теми
  }
`,M=n.Ay.h4`
  color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}}; // ✅ З теми
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: bold; /* Залишаємо, якщо не в темі */

  a {
    color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`,q=n.Ay.p`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ✅ З теми
  color: ${e=>{let{theme:t}=e;return t.color}}; // ✅ З теми
  line-height: 1.5;
  margin-bottom: 0;

  strong {
    font-weight: bold; /* Залишаємо, якщо не в темі */
  }

  em {
    font-style: italic;
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  .bible-quote {
    font-style: italic;
    color: ${e=>{let{theme:t}=e;return t.colorSecondary}}; // ✅ З теми
    margin-top: 0.5rem;
    padding-left: 1rem;
    border-left: 2px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // ✅ З теми
  }
`,R=e=>{let{title:t,events:r}=e;const o=e=>({__html:e});return(0,m.jsxs)(_,{children:[t&&(0,m.jsx)(a.A,{as:"h3",size:"default",dangerouslySetInnerHTML:o(t)}),r.map((e,t)=>(0,m.jsxs)(B,{children:[(0,m.jsx)(T,{}),(0,m.jsxs)(I,{children:[(0,m.jsx)(M,{dangerouslySetInnerHTML:o(e.title)}),(0,m.jsx)(q,{dangerouslySetInnerHTML:o(e.description)})]})]},t))]})},D=n.Ay.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  color: ${e=>{let{theme:t}=e;return t.color}};
  min-height: calc(100vh - var(--header-height, 60px));
`,O=n.Ay.div`
  text-align: center;
  margin-bottom: 30px;
  h2 {
    font-size: 2.5rem;
    color: ${e=>{let{theme:t}=e;return t.accentColor}};
    margin-bottom: 10px;
    line-height: 1.2;
  }
`,F=n.Ay.div`
  /* Можливо, тут будуть додаткові стилі для контейнера з картою, якщо потрібно */
`,G=n.Ay.div`
  line-height: 1.7;
  font-size: 1.1rem;

  p {
    margin-bottom: 1em;
  }

  h3 {
    font-size: 1.8rem;
    color: ${e=>{let{theme:t}=e;return t.color}};
    margin-top: 30px;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 1.4rem;
    color: ${e=>{let{theme:t}=e;return t.color}};
    margin-top: 25px;
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
    color: ${e=>{let{theme:t}=e;return t.accentColor}};
  }
`,Y=n.Ay.p`
  /* Додаткові стилі для параграфів, якщо потрібно */
`,E=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 25px;
  margin-bottom: 30px;
  padding: 15px;
  background-color: ${e=>{let{theme:t}=e;return t.cardBackground}};
  border-radius: 8px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadow}};
`;const P=function(e){let{lessonData:t}=e;if(!t)return(0,m.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443 \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438..."});const{title:r,author:n,book:l,chapter:i,verses:u,date:g,duration:x,theme:p,tags:b,description:$,sections:y}=t,j=e=>({__html:e});return(0,m.jsxs)(D,{children:[(0,m.jsxs)(O,{children:[(0,m.jsx)("h2",{children:r}),(0,m.jsx)(h,{author:n,book:l,chapter:i,verses:u,date:g,duration:x,theme:p,tags:b})]}),(0,m.jsx)(F,{children:(0,m.jsx)(s.A,{children:(0,m.jsxs)(G,{children:[$&&(0,m.jsx)(Y,{dangerouslySetInnerHTML:j($)}),y.map((e,t)=>{switch(e.type){case"text":return(0,m.jsxs)(o.Fragment,{children:[e.title&&(0,m.jsx)(a.A,{as:e.subtitle?"h4":"h3",size:e.subtitle?"medium":"default",children:e.title}),e.content.map((e,t)=>(0,m.jsx)(Y,{dangerouslySetInnerHTML:j(e)},t))]},t);case"quiz":return(0,m.jsx)(d.A,{quizData:e},e.id);case"reveal-cards":return(0,m.jsx)(E,{children:e.cards.map(e=>(0,m.jsx)(c.A,{cardData:e},e.id))},t);case"highlight-box":return(0,m.jsx)(f,{...e},t);case"question-prompt":return(0,m.jsx)(k,{...e},t);case"list-cards":return(0,m.jsx)(L,{...e},t);case"timeline":return(0,m.jsx)(R,{...e},t);default:return console.warn(`\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0441\u0435\u043a\u0446\u0456\u0457: ${e.type}`),null}})]})})})]})};var N=r(841),J=r(3);const K=()=>{const{selectedHomeGroupLesson:e,setSelectedHomeGroupLesson:t}=(0,J.t)(),[r,n]=(0,o.useState)(null),[s,a]=(0,o.useState)(!0),d=(e=>{if(!e)return null;for(const t in N.H)if(N.H.hasOwnProperty(t)){const r=N.H[t];if(Array.isArray(r)&&r.length>0){const t=r.find(t=>t.id===e);if(t)return t}}return null})(e);return(0,o.useEffect)(()=>{if(!e){let e=null;for(const t in N.H)if(N.H.hasOwnProperty(t)){const r=N.H[t];if(Array.isArray(r)&&r.length>0){e=r[0].id;break}}e?t(e):a(!1)}},[e,t]),(0,o.useEffect)(()=>{e&&(async()=>{if(a(!0),n(null),d&&d.loadLesson)try{const e=await d.loadLesson();n(e.default)}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443:",e),n(null)}finally{a(!1)}else a(!1)})()},[d,e]),(0,m.jsx)(l,{children:s?(0,m.jsx)(i,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443..."}):r?(0,m.jsx)(P,{lessonData:r}):(0,m.jsx)(i,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0443\u0440\u043e\u043a \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432 \u043c\u0435\u043d\u044e."})})};function Q(){return(0,m.jsx)(K,{})}}}]);
//# sourceMappingURL=623.4c92f7a2.chunk.js.map
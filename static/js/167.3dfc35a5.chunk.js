"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[167],{505:(e,t,r)=>{r.d(t,{A:()=>d});var o=r(5043),n=r(4574);const s=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out; // ДОДАНО: Переходи для фону та межі

  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
  }
`,i=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}} ${e=>{let{theme:t}=e;return t.spacing.medium}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.accentBg}};
  color: ${e=>{let{theme:t}=e;return t.colors.buttonColor}};
  font-weight: bold;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out; // ДОДАНО: Переходи для фону та тексту

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.accentBgHover||t.colors.accentBg}};
  }

  span:first-child {
    margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.colors.buttonColor}};
    text-decoration: none;
    transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору посилання
    &:hover {
      text-decoration: underline;
    }
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.small}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  `}}
`,l=n.Ay.div`
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.6;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору тексту

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    text-decoration: none;
    transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору посилання
    &:hover {
      text-decoration: underline;
    }
  }

  .bible-quote {
    font-style: italic;
    color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}};
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
    padding-left: ${e=>{let{theme:t}=e;return t.spacing.small}};
    border-left: 2px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
    transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out; // ДОДАНО: Переходи для тексту та межі
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  `}}
`,a=n.Ay.button`
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}}; // ОНОВЛЕНО: Використано theme.spacing

  // Колір кнопки залежить від isActive, використовуючи кольори з теми
  color: ${e=>e.isActive?e.theme.colors.accentColor:e.theme.colors.color}; // ОНОВЛЕНО: Використано theme.colors

  // Переходи вже були, це чудово
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  transform: ${e=>e.isActive?"rotate(180deg)":"rotate(0deg)"};

  &:hover {
    // Колір при наведенні також залежить від isActive та теми
    color: ${e=>e.isActive?e.theme.colors.navActiveHover||e.theme.colors.navActive:e.theme.colors.borderColor}; // ОНОВЛЕНО: Використано theme.colors та додано hover-ефект
  }
`;var c=r(579);function m(e){let{isActive:t,onClick:r}=e;return(0,c.jsxs)(a,{onClick:r,isActive:t,children:[t?"\u25b2":"\u25bc"," "]})}function d(e){let{cardData:t}=e;const[r,n]=(0,o.useState)(!1),a=()=>n(!r);return(0,c.jsxs)(s,{children:[(0,c.jsxs)(i,{onClick:a,children:[t.emoji,(0,c.jsx)("span",{children:t.title}),(0,c.jsx)(m,{isActive:r,onClick:a})]}),r&&(0,c.jsx)(l,{children:t.content})]})}},1441:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);var o=r(4574);o.Ay.section`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}}; // ОНОВЛЕНО: Використано borderRadius
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}}; // ОНОВЛЕНО: Використано shadows
  padding: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing

  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`;const n=o.Ay.h3`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}}; // ОНОВЛЕНО: Використано theme.colors
  font-weight: bold;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.xxlarge}}; // ОНОВЛЕНО: Використано theme.spacing
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано theme.spacing
  line-height: 1.2;
  transition: color 0.25s ease-in-out;

  ${e=>"default"===e.size&&`\n    font-size: ${e.theme.fontSizes.xlarge}; // \u041e\u041d\u041e\u0412\u041b\u0415\u041d\u041e: \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043e theme.fontSizes\n  `}

  ${e=>"medium"===e.size&&`\n    font-size: ${e.theme.fontSizes.large}; // \u041e\u041d\u041e\u0412\u041b\u0415\u041d\u041e: \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043e theme.fontSizes\n  `}

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
    
    // Адаптивні розміри шрифту для мобільних
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
    
    ${e=>"medium"===e.size&&`\n      font-size: ${e.theme.fontSizes.medium};\n    `}
  `}}

  a {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}}; // ОНОВЛЕНО: Використано theme.colors
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
`;var s=r(579);const i=e=>{let{as:t="h3",size:r="default",children:o}=e;return(0,s.jsxs)(n,{as:t,size:r,children:[o," "]})}},2099:(e,t,r)=>{r.d(t,{A:()=>s});r(5043);const o=r(4574).Ay.section`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}}; // ОНОВЛЕНО: Використано borderRadius
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}}; // ОНОВЛЕНО: Використано shadows
  padding: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing

  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`;var n=r(579);function s(e){let{children:t}=e;return(0,n.jsx)(o,{children:t})}},7167:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var o=r(5043),n=r(4574);const s=n.Ay.div`
  // Цей компонент не має прямих властивостей кольору, які потрібно змінювати.
  // Його фон та колір тексту, швидше за все, контролюються батьківськими компонентами
  // (наприклад, Main, Wrapper у Layout) або глобальними стилями body, де переходи вже налаштовані.
  // Додамо медіазапит для адаптивності.
  ${e=>{let{theme:t}=e;return t.media.up("md")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`,i=(n.Ay.h2`
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано основний колір тексту з теми
  text-align: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}}; // ОНОВЛЕНО: Використано fontSizes

  // Медіазапит для мобільних пристроїв, щоб зменшити шрифт
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  `}}
`,n.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано основний колір тексту з теми
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використано fontSizes

  // ДОДАНО: Плавний перехід для кольору тексту, оскільки це <p>
  transition: color 0.25s ease-in-out;
`);var l=r(2099),a=r(1441),c=r(8763),m=r(505);const d=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: використовуємо spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}}; // ОНОВЛЕНО: використовуємо fontSizes
  color: inherit;
  transition: color 0.25s ease-in-out;

  span {
    white-space: nowrap;
  }
`,u=n.Ay.span`
  /* Додаткові стилі для кожного елемента мета-інформації */
`,h=n.Ay.p`
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: використовуємо spacing
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: використовуємо fontSizes
  line-height: 1.5;
  opacity: 0.9;
  text-align: center;
`;var g=r(579);function p(e){let{speaker:t,date:r,theme:o,book:n,description:s}=e;return(0,g.jsxs)(d,{children:[n&&(0,g.jsxs)(u,{children:["\u041a\u043d\u0438\u0433\u0430: ",(0,g.jsx)("strong",{children:n})]}),t&&(0,g.jsxs)(u,{children:["\u0421\u043f\u0456\u043a\u0435\u0440: ",(0,g.jsx)("strong",{children:t})]}),r&&(0,g.jsxs)(u,{children:["\u0414\u0430\u0442\u0430: ",r]}),o&&(0,g.jsxs)(u,{children:["\u0422\u0435\u043c\u0430: ",(0,g.jsx)("strong",{children:o})]}),s&&(0,g.jsx)(h,{children:s})]})}const $=n.Ay.div`
  /* Загальні стилі для контейнера вмісту проповіді */
  // Не має theme-залежних властивостей, які потребують transition.
`,b=n.Ay.div`
  /* Нова стилізація для секції "герой" */
  background: ${e=>{let{theme:t}=e;return`linear-gradient(180deg, ${t.colors.gradientStart} 0%, ${t.colors.gradientEnd} 100%)`}}; // ОНОВЛЕНО
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використовуємо theme.colors
  padding: ${e=>{let{theme:t}=e;return t.spacing.xlarge}} ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
  text-align: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}}; // ОНОВЛЕНО: Використовуємо spacing
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}}; // ОНОВЛЕНО: Використовуємо shadows

  // Перехід налаштований і працює коректно
  transition: background 0.25s ease-in-out, color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  /* Стилі для основного заголовка h2 всередині цього блоку */
  h2 {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}}; // ОНОВЛЕНО: Використовуємо fontSizes
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
    line-height: 1.2;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
  }

  /* Регулювання стилів MetaContainer, коли він знаходиться всередині SermonTitleWrapper */
  ${d} {
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використовуємо spacing
    font-size: 1.1em;
  }

  /* Медіа-запити для адаптивності */
  ${e=>{let{theme:t}=e;return t.media.down("sm")` // ОНОВЛЕНО: Використовуємо медіа-запит з теми
    padding: ${e=>{let{theme:t}=e;return t.spacing.large}} ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
    h2 {
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}}; // ОНОВЛЕНО: Використовуємо fontSizes
    }
    ${d} {
      font-size: 1em;
    }
  `}}
`,f=n.Ay.main`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використовуємо spacing
  padding-left: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
  padding-right: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
`,x=n.Ay.div`
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використовуємо theme.colors

  // ДОДАНО: Плавний перехід для кольору тексту
  transition: color 0.25s ease-in-out;
`,z=n.Ay.p`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використовуємо fontSizes
  line-height: 1.6;
`,w=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використовуємо spacing
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використовуємо spacing
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використовуємо spacing
  justify-items: center;

  ${e=>{let{theme:t}=e;return t.media.up("sm")` // ОНОВЛЕНО: Використовуємо медіа-запит з теми
    grid-template-columns: repeat(2, 1fr);
  `}}

  ${e=>{let{theme:t}=e;return t.media.up("md")` // ОНОВЛЕНО: Використовуємо медіа-запит з теми
    grid-template-columns: repeat(3, 1fr);
  `}}
`;const v=function(e){let{sermonData:t}=e;if(!t)return(0,g.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u043f\u043e\u0432\u0456\u0434\u0456..."});const{title:r,speaker:n,date:s,book:i,description:d,theme:u,sections:h}=t;return(0,g.jsxs)($,{children:[(0,g.jsxs)(b,{children:[(0,g.jsx)("h2",{children:r}),(0,g.jsx)(p,{speaker:n,date:s,theme:u,book:i,description:d})]}),(0,g.jsx)(f,{children:(0,g.jsx)(l.A,{children:(0,g.jsx)(x,{children:h.map((e,t)=>"text"===e.type?(0,g.jsxs)(o.Fragment,{children:[e.title&&(0,g.jsx)(a.A,{as:e.subtitle?"h4":"h3",size:e.subtitle?"medium":"default",children:e.title}),e.content.map((e,t)=>(0,g.jsx)(z,{children:e},t))]},t):"quiz"===e.type?(0,g.jsx)(c.A,{quizData:e},e.id):"reveal-cards"===e.type?(0,g.jsx)(w,{children:e.cards.map(e=>(0,g.jsx)(m.A,{cardData:e},e.id))},t):null)})})})]})};var y=r(2230),A=r(7197);const j=()=>{const{selectedSermon:e,setSelectedSermon:t}=(0,A.Pn)(),r=(e=>{if(!e)return null;for(const t in y.V)if(y.V.hasOwnProperty(t)){const r=y.V[t];if(Array.isArray(r)&&r.length>0){const t=r.find(t=>t.id===e);if(t)return t}}return null})(e);return(0,o.useEffect)(()=>{if(!e){let e=null;for(const t in y.V)if(y.V.hasOwnProperty(t)){const r=y.V[t];if(Array.isArray(r)&&r.length>0){e=r[0].id;break}}e&&t(e)}},[e,t]),(0,g.jsx)(s,{children:r?(0,g.jsx)(v,{sermonData:r}):(0,g.jsx)(i,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0440\u043e\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432 \u043c\u0435\u043d\u044e."})})};function k(){return(0,g.jsx)(j,{})}},8763:(e,t,r)=>{r.d(t,{A:()=>d});var o=r(5043),n=r(4574);const s=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};

  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out; // ДОДАНО: Переходи для фону, межі та тіні

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  `}}
`,i=n.Ay.h4`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  font-weight: 600;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору тексту запитання

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,l=n.Ay.ul`
  list-style: none;
  padding: 0;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.small}};
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  padding-top: ${e=>{let{theme:t}=e;return t.spacing.small}};

  transition: border-color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору верхньої межі списку опцій

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
    padding-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,a=n.Ay.li`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.extraSmall}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.small}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  cursor: pointer;

  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    color 0.25s ease-in-out; // ОНОВЛЕНО: Перехід для всіх кольорових властивостей

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.hoverBg}};
  }

  ${e=>e.isSelected&&`\n    background-color: ${e.theme.colors.accentBg};\n    border-color: ${e.theme.colors.accentColor};\n    color: ${e.theme.colors.buttonColor};\n  `}

  ${e=>e.showFeedback&&e.isCorrectOption&&`\n    background-color: ${e.theme.colors.successBg};\n    border-color: ${e.theme.colors.successColor};\n    color: ${e.theme.colors.successText};\n    font-weight: bold;\n  `}

  ${e=>e.showFeedback&&e.isSelected&&!e.isCorrectOption&&`\n    background-color: ${e.theme.colors.dangerBg};\n    border-color: ${e.theme.colors.dangerColor};\n    color: ${e.theme.colors.dangerText};\n  `}
  
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,c=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};

  transition: transform 0.2s ease-in-out, color 0.25s ease-in-out; // ОНОВЛЕНО: Перехід для кольору іконки
`;var m=r(579);function d(e){let{quizData:t}=e;const[r,n]=(0,o.useState)(!1),[d,u]=(0,o.useState)(null);return(0,m.jsxs)(s,{children:[(0,m.jsxs)(i,{onClick:()=>{n(!r),r&&u(null)},children:[t.question,(0,m.jsx)(c,{isActive:r,children:r?"\u2212":"+"})]}),r&&(0,m.jsx)(l,{children:t.options.map((e,t)=>(0,m.jsx)(a,{onClick:()=>(e=>{u(e)})(t),isSelected:d===t,isCorrectOption:e.isCorrect,showFeedback:null!==d,children:e.text},t))})]})}}}]);
//# sourceMappingURL=167.3dfc35a5.chunk.js.map
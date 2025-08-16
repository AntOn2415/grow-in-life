"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[8437],{7167:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(5043),i=n(4574);const s=i.Ay.div`
  // Цей компонент не має прямих властивостей кольору, які потрібно змінювати.
  // Його фон та колір тексту, швидше за все, контролюються батьківськими компонентами
  // (наприклад, Main, Wrapper у Layout) або глобальними стилями body, де переходи вже налаштовані.
  // Додамо медіазапит для адаптивності.
  ${e=>{let{theme:t}=e;return t.media.up("md")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`,a=(i.Ay.h2`
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано основний колір тексту з теми
  text-align: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}}; // ОНОВЛЕНО: Використано fontSizes

  // Медіазапит для мобільних пристроїв, щоб зменшити шрифт
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  `}}
`,i.Ay.p`
  text-align: center;
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано основний колір тексту з теми
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використано fontSizes

  // ДОДАНО: Плавний перехід для кольору тексту, оскільки це <p>
  transition: color 0.25s ease-in-out;
`);var o=n(2099),l=n(1441),c=n(8763),m=n(5555);const h=i.Ay.div`
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
`,u=i.Ay.span`
  /* Додаткові стилі для кожного елемента мета-інформації */
`,d=i.Ay.p`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: використовуємо fontSizes
  line-height: 1.5;
  opacity: 0.9;
  text-align: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
`;var p=n(579);function g(e){let{speaker:t,date:n,theme:r,book:i,description:s}=e;return(0,p.jsxs)(h,{children:[i&&(0,p.jsxs)(u,{children:["\u041a\u043d\u0438\u0433\u0430: ",(0,p.jsx)("strong",{children:i})]}),t&&(0,p.jsxs)(u,{children:["\u0421\u043f\u0456\u043a\u0435\u0440: ",(0,p.jsx)("strong",{children:t})]}),n&&(0,p.jsxs)(u,{children:["\u0414\u0430\u0442\u0430: ",n]}),r&&(0,p.jsxs)(u,{children:["\u0422\u0435\u043c\u0430: ",(0,p.jsx)("strong",{children:r})]}),s&&(0,p.jsx)(d,{children:s})]})}const f=i.Ay.div`
  /* Загальні стилі для контейнера вмісту проповіді */
  // Не має theme-залежних властивостей, які потребують transition.
`,x=i.Ay.div`
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
  ${h} {
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використовуємо spacing
    font-size: 1.1em;
  }

  /* Медіа-запити для адаптивності */
  ${e=>{let{theme:t}=e;return t.media.down("sm")` // ОНОВЛЕНО: Використовуємо медіа-запит з теми
    padding: ${e=>{let{theme:t}=e;return t.spacing.large}} ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
    h2 {
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}}; // ОНОВЛЕНО: Використовуємо fontSizes
    }
    ${h} {
      font-size: 1em;
    }
  `}}
`,$=i.Ay.main`
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використовуємо spacing
  padding-left: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
  padding-right: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
`,y=i.Ay.div`
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використовуємо theme.colors

  // ДОДАНО: Плавний перехід для кольору тексту
  transition: color 0.25s ease-in-out;
`,j=i.Ay.p`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використовуємо fontSizes
  line-height: 1.6;
`,z=i.Ay.div`
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
`;const b=function(e){let{sermonData:t}=e;if(!t)return(0,p.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u043f\u043e\u0432\u0456\u0434\u0456..."});const{title:n,speaker:i,date:s,book:a,description:h,theme:u,sections:d}=t;return(0,p.jsxs)(f,{children:[(0,p.jsxs)(x,{children:[(0,p.jsx)("h2",{children:n}),(0,p.jsx)(g,{speaker:i,date:s,theme:u,book:a,description:h})]}),(0,p.jsx)($,{children:(0,p.jsx)(o.A,{children:(0,p.jsx)(y,{children:d.map((e,t)=>"text"===e.type?(0,p.jsxs)(r.Fragment,{children:[e.title&&(0,p.jsx)(l.A,{as:e.subtitle?"h4":"h3",size:e.subtitle?"medium":"default",children:e.title}),e.content.map((e,t)=>(0,p.jsx)(j,{children:e},t))]},t):"quiz"===e.type?(0,p.jsx)(c.A,{quizData:e},e.id):"reveal-cards"===e.type?(0,p.jsx)(z,{children:e.cards.map(e=>(0,p.jsx)(m.A,{cardData:e},e.id))},t):null)})})})]})};var w=n(2230),A=n(7197);const S=()=>{const{selectedSermon:e,setSelectedSermon:t}=(0,A.Pn)(),n=(e=>{if(!e)return null;for(const t in w.V)if(w.V.hasOwnProperty(t)){const n=w.V[t];if(Array.isArray(n)&&n.length>0){const t=n.find(t=>t.id===e);if(t)return t}}return null})(e);return(0,r.useEffect)(()=>{if(!e){let e=null;for(const t in w.V)if(w.V.hasOwnProperty(t)){const n=w.V[t];if(Array.isArray(n)&&n.length>0){e=n[0].id;break}}e&&t(e)}},[e,t]),(0,p.jsx)(s,{children:n?(0,p.jsx)(b,{sermonData:n}):(0,p.jsx)(a,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0440\u043e\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432 \u043c\u0435\u043d\u044e."})})};function v(){return(0,p.jsx)(S,{})}},9927:(e,t,n)=>{n.d(t,{s:()=>m});var r=n(4930),i=n(293),s=n(9565),a=n(3077),o=n(7070);function l(e,t){[...t].reverse().forEach(n=>{const r=e.getVariant(n);r&&(0,a.U)(e,r),e.variantChildren&&e.variantChildren.forEach(e=>{l(e,t)})})}function c(){let e=!1;const t=new Set,n={subscribe:e=>(t.add(e),()=>{t.delete(e)}),start(n,r){(0,s.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const i=[];return t.forEach(e=>{i.push((0,o._)(e,n,{transitionOverride:r}))}),Promise.all(i)},set:n=>((0,s.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{!function(e,t){Array.isArray(t)?l(e,t):"string"===typeof t?l(e,[t]):(0,a.U)(e,t)}(e,n)})),stop(){t.forEach(e=>{!function(e){e.values.forEach(e=>e.stop())}(e)})},mount:()=>(e=!0,()=>{e=!1,n.stop()})};return n}const m=function(){const e=(0,r.M)(c);return(0,i.E)(e.mount,[]),e}}}]);
//# sourceMappingURL=8437.61f4f98a.chunk.js.map
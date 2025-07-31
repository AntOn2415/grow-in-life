"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[127],{505:(e,t,r)=>{r.d(t,{A:()=>m});var o=r(5043),n=r(4574);const i=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; // ✅ З теми
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // ✅ З теми
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}}; // ✅ З теми
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}}; // ✅ З теми
  overflow: hidden; /* Щоб вміст не виходив за рамки */
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}}; // ✅ З теми
  }
`,l=n.Ay.div`
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
`,a=n.Ay.div`
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
`,s=n.Ay.button`
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
`;var d=r(579);function c(e){let{isActive:t,onClick:r}=e;return(0,d.jsxs)(s,{onClick:r,isActive:t,children:[t?"\u25b2":"\u25bc"," "]})}function m(e){let{cardData:t}=e;const[r,n]=(0,o.useState)(!1),s=()=>n(!r);return(0,d.jsxs)(i,{children:[(0,d.jsxs)(l,{onClick:s,children:[t.emoji,(0,d.jsx)("span",{children:t.title}),(0,d.jsx)(c,{isActive:r,onClick:s})]}),r&&(0,d.jsx)(a,{children:t.content})]})}},1441:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);const o=r(4574).Ay.h3`
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
`;var n=r(579);const i=e=>{let{as:t="h3",size:r="default",children:i}=e;return(0,n.jsxs)(o,{as:t,size:r,children:[i," "]})}},2099:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);const o=r(4574).Ay.section`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; /* Тепер використовує основний колір фону з теми */
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Тінь залишена без змін */
  padding: 2rem;
  margin-bottom: 2rem;

  // ДОДАНО: Плавний перехід для фонового кольору та тіні
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
`;var n=r(579);function i(e){let{children:t}=e;return(0,n.jsx)(o,{children:t})}},8056:(e,t,r)=>{r.d(t,{IZ:()=>l,Sg:()=>n,ae:()=>i,sY:()=>s,tG:()=>a});var o=r(4574);const n=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,i=o.Ay.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    color: ${e=>e.theme.color}; /* Використовуємо theme.color для основного тексту заголовка */
    margin-bottom: 0.5rem;
  }
`,l=o.Ay.div`
  width: 100%;
`,a=o.Ay.div`
  padding: 1.5rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: ${e=>e.theme.color}; /* Основний колір тексту */

  p {
    margin-bottom: 1em;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5em;
    margin-bottom: 1em;
  }

  ol {
    list-style-type: decimal;
    margin-left: 1.5em;
    margin-bottom: 1em;
  }

  li {
    margin-bottom: 0.5em;
  }

  strong {
    color: ${e=>e.theme.color}; /* Жирний текст залишається основним кольором */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${e=>e.theme.color};
    margin-top: 1.5em;
    margin-bottom: 0.8em;
  }
`,s=o.Ay.button`
  /* Скидаємо базові стилі кнопок браузера */
  background: none;
  border: none;
  padding: 0;
  font: inherit; /* Успадковуємо шрифт від батьківського елемента */
  cursor: pointer; /* Курсор як у посилання */
  text-decoration: underline; /* Підкреслення, як у посилань */
  color: ${e=>e.theme.accentColor||"blue"}; /* Колір посилання з теми (accentColor) */
  display: inline; /* Важливо, щоб кнопка вела себе як inline-елемент тексту */

  &:hover {
    color: ${e=>e.theme.accentBg||"darkblue"}; /* Зміна кольору при наведенні (можливо, accentBg або інший колір для ховеру) */
    text-decoration: none; /* Прибираємо підкреслення при наведенні */
  }

  &:focus {
    /* ЗАВЖДИ забезпечуйте видимий індикатор фокусу для доступності! */
    outline: 2px solid ${e=>e.theme.accentColor||"blue"};
    outline-offset: 2px; /* Відступ обведення від елемента */
  }

  &:active {
    color: ${e=>e.theme.accentColor||"purple"}; /* Колір при активному натисканні */
  }
`},8127:(e,t,r)=>{r.r(t),r.d(t,{default:()=>we});var o=r(5043),n=r(4574);const i=n.Ay.div`
  /* Ваші існуючі стилі для контейнера */
`,l=n.Ay.p`
  /* Ваші існуючі стилі для повідомлення */
  text-align: center;
  margin-top: 50px;
  font-size: 1.2rem;
  color: ${e=>{let{theme:t}=e;return t.colorSecondary}};
`;var a=r(2099),s=r(1441),d=r(8763),c=r(505),m=r(579);const h=n.Ay.div`
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
`;const u=function(e){let{author:t,book:r,chapter:o,verses:n,date:i,duration:l,theme:a,tags:s}=e;return(0,m.jsxs)(h,{children:[t&&(0,m.jsxs)("p",{children:["\u0410\u0432\u0442\u043e\u0440: ",(0,m.jsx)("span",{children:t})]}),(r||o||n)&&(0,m.jsxs)("p",{children:["\u041a\u043d\u0438\u0433\u0430:"," ",(0,m.jsxs)("span",{children:[r," ",o?`\u0433\u043b\u0430\u0432\u0430 ${o}`:"",n?`, \u0432\u0456\u0440\u0448\u0456 ${n}`:""]})]}),i&&(0,m.jsxs)("p",{children:["\u0414\u0430\u0442\u0430: ",(0,m.jsx)("span",{children:i})]}),l&&(0,m.jsxs)("p",{children:["\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c: ",(0,m.jsx)("span",{children:l})]}),a&&(0,m.jsxs)("p",{children:["\u0422\u0435\u043c\u0430: ",(0,m.jsx)("span",{children:a})]}),s&&s.length>0&&(0,m.jsx)("div",{className:"lesson-tags",children:s.map((e,t)=>(0,m.jsx)("span",{children:e},t))})]})},g=n.Ay.div`
  width: 100%;
  max-width: 950px; /* ✅ Збільште це значення, якщо діаграма та легенда не вміщуються */
  height: 450px; /* ✅ Фіксована висота для всього контейнера */
  margin: 20px auto;
  padding: 15px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;var p=r(6058),x=r(7304),b=r(1189);x.t1.register(x.PP,x.kc,x.FN,x.No,x.E8,x.Bs,x.pr,x.hE,x.m_,x.s$,x.dN);const f=(e,t,r)=>{switch(e){case"line":return(0,m.jsx)(p.N1,{data:t,options:r});case"bar":return(0,m.jsx)(p.yP,{data:t,options:r});case"pie":return(0,m.jsx)(p.Fq,{data:t,options:r});case"doughnut":return(0,m.jsx)(p.nu,{data:t,options:r});case"polarArea":return(0,m.jsx)(p.O5,{data:t,options:r});case"radar":return(0,m.jsx)(p.Vd,{data:t,options:r});case"bubble":return(0,m.jsx)(p.Zh,{data:t,options:r});case"scatter":return(0,m.jsx)(p.Xl,{data:t,options:r});default:return(0,m.jsxs)("p",{children:["\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438: ",e]})}};const $=function(e){let{title:t,description:r,chartType:n,chartData:i,chartOptions:l}=e;const{currentTheme:a}=(0,b.D)(),s=(0,o.useMemo)(()=>((e,t,r)=>{if(!e||!e.datasets)return e;if(!t)return e;const o={...e};return o.datasets=o.datasets.map(e=>{const o={...e},n=[t.accentColor,t.navActive,t.accentBg,t.color,t.navBg,t.background,t.borderColor,t.interactiveBgLight,t.interactiveBorderLight,t.interactiveBgYellow,t.interactiveBorderYellow,t.buttonBg,t.successColor,t.dangerColor];if(o.backgroundColor&&0!==o.backgroundColor.length&&"dynamic"!==o.backgroundColor)Array.isArray(o.backgroundColor)&&(o.backgroundColor=o.backgroundColor.map((e,t)=>"dynamic"===e?n[t%n.length]:e),o.borderColor||(o.borderColor=t.borderColor));else if("pie"===r||"doughnut"===r||"polarArea"===r){const e=o.data.length;o.backgroundColor=Array.from({length:e},(e,t)=>n[t%n.length]),o.borderColor=t.borderColor}else o.backgroundColor=t.accentColor+"B3",o.borderColor=t.accentColor;return"dynamic"===o.pointBackgroundColor&&(o.pointBackgroundColor=t.accentColor),"dynamic"===o.pointBorderColor&&(o.pointBorderColor=t.color),"dynamic"===o.hoverBackgroundColor&&(o.hoverBackgroundColor=t.hoverBg),"dynamic"===o.hoverBorderColor&&(o.hoverBorderColor=t.borderColor),!0===o.fill&&(o.backgroundColor=t.accentBg+"50"),o}),o})(i,a,n),[i,a,n]),d=(0,o.useMemo)(()=>((e,t)=>{var r,o,n;let i={...e,responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:5,right:40,top:10,bottom:5}},plugins:{...e.plugins,legend:{display:!["pie","doughnut"].includes(e.chartType),labels:{color:null===t||void 0===t?void 0:t.color,font:{size:12},boxWidth:20,padding:10},position:"right",align:"center"},tooltip:{...null===(r=e.plugins)||void 0===r?void 0:r.tooltip,bodyFont:{size:12},titleFont:{size:14}}},scales:{...e.scales,y:{...null===(o=e.scales)||void 0===o?void 0:o.y,border:{display:!1},ticks:{display:!1,color:null===t||void 0===t?void 0:t.color,font:{size:10}},grid:{display:!1,color:((null===t||void 0===t?void 0:t.borderColor)||"#D3D3D3")+"80"}},x:{...null===(n=e.scales)||void 0===n?void 0:n.x,border:{display:!1},ticks:{display:!1,color:null===t||void 0===t?void 0:t.color,font:{size:10}},grid:{display:!1,color:((null===t||void 0===t?void 0:t.borderColor)||"#D3D3D3")+"80"}}}};return["doughnut","pie"].includes(e.chartType)&&(i.cutout=e.cutout||"70%"),i.plugins||(i.plugins={}),i})({...l,chartType:n},a),[l,a,n]),c=(0,o.useMemo)(()=>{var e;if(!s||!s.labels||!s.datasets||0===s.datasets.length)return[];const t=(null===(e=s.datasets[0])||void 0===e?void 0:e.backgroundColor)||[];return s.labels.map((e,r)=>({text:e,color:Array.isArray(t)?t[r%t.length]:t}))},[s]);return a?(0,m.jsxs)(g,{children:[t&&(0,m.jsx)("h4",{children:t}),r&&(0,m.jsx)("p",{children:r}),(0,m.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"100%",height:"100%"},children:[(0,m.jsxs)("div",{style:{flexGrow:1,minWidth:"0",maxWidth:"calc(100% - 320px)"},children:[" ",f(n,s,d)]}),(0,m.jsx)("div",{style:{width:"320px",flexShrink:0,paddingLeft:"15px",overflowY:"auto",maxHeight:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},children:c.map((e,t)=>(0,m.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",marginBottom:"8px"},children:[(0,m.jsx)("span",{style:{display:"inline-block",minWidth:"15px",height:"15px",backgroundColor:e.color,marginRight:"8px",marginTop:"3px",borderRadius:"3px"}}),(0,m.jsx)("span",{style:{color:a.color,fontSize:"13px",wordBreak:"break-word",wordWrap:"break-word",whiteSpace:"normal",lineHeight:"1.3"},children:e.text})]},t))})]}),!t&&!r&&!i&&(0,m.jsx)("p",{children:"\u0414\u0456\u0430\u0433\u0440\u0430\u043c\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f \u0430\u0431\u043e \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456 \u0434\u0430\u043d\u0456."})]}):(0,m.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438..."})},y=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  text-align: center;
  transition: all 0.4s ease-in-out; /* Додано перехід */

  h4 {
    margin-bottom: 1rem;
    color: ${e=>{let{theme:t}=e;return t.accentColor}};
    transition: color 0.4s ease-in-out; /* Додано перехід */
  }

  p {
    color: ${e=>{let{theme:t}=e;return t.color}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
    margin-bottom: 1.5rem;
    transition: color 0.4s ease-in-out, font-size 0.4s ease-in-out; /* Додано перехід */
  }
`,v=n.Ay.img`
  max-width: 100%;
  height: auto;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  margin-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: border-radius 0.4s ease-in-out; /* Додано перехід */
`,w=n.Ay.p`
  font-style: italic;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.color}};
  margin-top: 0.5rem;
  transition: color 0.4s ease-in-out, font-size 0.4s ease-in-out; /* Додано перехід */
`;const j=function(e){let{imageUrl:t,caption:r,altText:o}=e;return(0,m.jsxs)(y,{children:[t?(0,m.jsx)(v,{src:t,alt:o||"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"}):(0,m.jsx)("p",{children:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0454."}),r&&(0,m.jsx)(w,{children:r})]})},k=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.interactiveBgLight}}; // ✅ З теми
  border-left: 5px solid ${e=>{let{theme:t}=e;return t.interactiveBorderLight}}; // ✅ З теми
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}}; // ✅ З теми
  display: flex;
  align-items: flex-start;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}}; // ✅ З теми
`,C=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}}; // ✅ З теми
  margin-right: 1.5rem;
  line-height: 1;
`,A=n.Ay.div`
  flex-grow: 1;
`,z=n.Ay.h4`
  color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}}; // ✅ З теми
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: bold; /* Залишаємо, якщо не в темі */
`,B=e=>{let{title:t,content:r,emoji:o}=e;return(0,m.jsxs)(k,{children:[o&&(0,m.jsx)(C,{children:o}),(0,m.jsxs)(A,{children:[t&&(0,m.jsx)(z,{children:t}),r&&(0,m.jsx)("p",{children:r})]})]})};var S=r(3546),T=r(6446);const E=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.interactiveBgYellow}}; // ✅ З теми
  border: 1px solid ${e=>{let{theme:t}=e;return t.interactiveBorderYellow}}; // ✅ З теми
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}}; // ✅ З теми
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}}; // ✅ З теми
`,R=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}}; // ✅ З теми
  margin-bottom: 1rem;
`,D=n.Ay.p`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}}; // ✅ З теми
  font-weight: bold; /* Залишаємо, якщо не в темі */
  color: ${e=>{let{theme:t}=e;return t.color}}; // ✅ З теми
  margin-bottom: 1rem;
`,I=n.Ay.button`
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
`,L=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; // ✅ З теми
  border-left: 3px solid ${e=>{let{theme:t}=e;return t.successColor}}; // ✅ З теми
  padding: 1rem;
  margin-top: 1.5rem;
  font-style: italic;
  color: ${e=>{let{theme:t}=e;return t.color}}; // ✅ З теми
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}}; // ✅ З теми
  width: 100%;
`,H=e=>{let{question:t,answer:r,emoji:n}=e;const[i,l]=(0,o.useState)(!1);return(0,m.jsxs)(E,{children:[(0,m.jsx)(R,{children:n||"\u2753"}),(0,m.jsx)(D,{children:t}),r&&(0,m.jsx)(I,{onClick:()=>{l(!i)},children:i?"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c"}),(0,m.jsx)(S.N,{children:i&&r&&(0,m.jsx)(T.P.div,{initial:{height:0,opacity:0,overflow:"hidden"},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:[.4,0,.2,1]},children:(0,m.jsx)(L,{children:r})})})]})},O=n.Ay.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`,W=n.Ay.h2`
  color: ${e=>{let{theme:t}=e;return t.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xLarge}};
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
    margin-bottom: 0.1rem;
  }
`,F=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,P=n.Ay.article`
  background: ${e=>{let{theme:t}=e;return t.cardBackground||t.background}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}};
  padding: 1rem;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  overflow: hidden;
  position: relative;
  border: 1px solid ${e=>{let{theme:t}=e;return t.cardBorder||t.borderColor}};
  will-change: transform, box-shadow, height; /* 'height' тут не потрібен, якщо Framer Motion його анімує на дочірньому елементі */
  outline: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
    border-color: ${e=>{let{theme:t}=e;return t.primaryColor}};
  }

  &:focus-within {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
    transform: translateY(-5px);
  }

  &[tabindex="0"]:focus-visible {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
    transform: translateY(-5px);
  }
`,Y=n.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`,_=n.Ay.span`
  font-size: 2rem;
  margin-right: 0.8rem;
  line-height: 1;
  filter: grayscale(10%);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`,q=n.Ay.h3`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  color: ${e=>{let{theme:t}=e;return t.color}};
  margin: 0;
  line-height: 1.3;
`,V=n.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.color}};
  flex: 1;
  position: relative;
  width: 100%;

  padding-bottom: ${e=>{let{isExpanded:t}=e;return t?"5.5rem":"0"}};

  p {
    margin-bottom: 1em;
  }

  p:last-child {
    margin-bottom: 0;
  }
`,G=n.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.cardBackground||t.background}};
  border-bottom-left-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}};
  border-bottom-right-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}};
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: -3rem;
    left: 0;
    width: 100%;
    height: 3rem;
    background: linear-gradient(
      to bottom,
      rgba(
          ${e=>{let{theme:t}=e;const r=t.cardBackground||t.background,o=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,r,o)=>"#"+t+t+r+r+o+o).substring(1).match(/.{2}/g).map(e=>parseInt(e,16));return o?o.join(","):"255,255,255"}},
          0
        )
        0%,
      rgba(
          ${e=>{let{theme:t}=e;const r=t.cardBackground||t.background,o=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,r,o)=>"#"+t+t+r+r+o+o).substring(1).match(/.{2}/g).map(e=>parseInt(e,16));return o?o.join(","):"255,255,255"}},
          0.9
        )
        100%
    );
    pointer-events: none;
  }
`,M=n.Ay.button`
  background: none;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.buttonBg}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  font-weight: 700;
  cursor: pointer;
  padding: 0.5rem 0;
  align-self: flex-start;
  transition: color 0.2s ease-in-out, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1;

  &:hover {
    border: none;
    box-shadow: none;
    color: ${e=>{let{theme:t}=e;return t.hoverBtn}};
    transform: ${e=>{let{isExpanded:t}=e;return t?"translateY(-2px)":"translateY(2px)"}};
  }
`,N=(e,t)=>{switch(t.type){case"ACTIVATE_ROW":return t.payload.rowIndex;case"DEACTIVATE_ROW":return null;default:return e}},U=160,Z=o.memo(e=>{let{card:t,index:r,isExpanded:n,toggleExpand:i,collapseCard:l,handleRowBlur:a}=e;const s=(0,o.useRef)(null),[d,c]=(0,o.useState)(!1),[h,u]=(0,o.useState)(U);return(0,o.useEffect)(()=>{const e=()=>{if(s.current){const{scrollHeight:e}=s.current;c(e>U),u(e>U?e:U)}};e(),window.addEventListener("resize",e);const t=setTimeout(e,150);return()=>{window.removeEventListener("resize",e),clearTimeout(t)}},[t.content]),(0,o.useEffect)(()=>{n&&s.current?u(s.current.scrollHeight):n||u(U)},[n]),(0,m.jsxs)(P,{onBlur:a,tabIndex:d?0:-1,"aria-expanded":n,children:[(0,m.jsxs)(Y,{children:[(0,m.jsx)(_,{role:"img","aria-label":`Emoji for ${t.title}`,children:t.emoji}),(0,m.jsx)(q,{children:t.title})]}),(0,m.jsx)(T.P.div,{layout:!0,initial:{height:U},animate:{height:n?h:U,opacity:1},transition:{duration:.3,ease:[.4,0,.2,1]},style:{overflow:"hidden",width:"100%"},children:(0,m.jsx)(V,{ref:s,isExpanded:n,id:`card-content-${r}`,children:t.content})}),d&&(0,m.jsx)(G,{isExpanded:n,children:(0,m.jsx)(M,{onClick:e=>{e.stopPropagation(),i(r)},"aria-controls":`card-content-${r}`,tabIndex:0,isExpanded:n,children:n?(0,m.jsx)(m.Fragment,{children:"\u0417\u0433\u043e\u0440\u043d\u0443\u0442\u0438"}):(0,m.jsx)(m.Fragment,{children:"\u0427\u0438\u0442\u0430\u0442\u0438 \u0434\u0430\u043b\u0456"})})})]})}),X=e=>{let{title:t,cards:r}=e;const[n,i]=(0,o.useReducer)(N,null),[l,a]=(0,o.useState)(3),s=(0,o.useRef)(null),d=(0,o.useCallback)(()=>window.innerWidth<=768?1:window.innerWidth<=1200?2:3,[]);(0,o.useEffect)(()=>{const e=()=>{a(d()),i({type:"DEACTIVATE_ROW"})};return window.addEventListener("resize",e),a(d()),()=>{window.removeEventListener("resize",e)}},[d]);const c=(0,o.useCallback)(e=>{const t=Math.floor(e/l);i(n===t?{type:"DEACTIVATE_ROW"}:{type:"ACTIVATE_ROW",payload:{rowIndex:t}})},[n,l]),h=(0,o.useCallback)(e=>{s.current&&!s.current.contains(e.relatedTarget)&&i({type:"DEACTIVATE_ROW"})},[]),u=(0,o.useCallback)(e=>{i({type:"DEACTIVATE_ROW"})},[]);return(0,m.jsxs)(O,{children:[t&&(0,m.jsx)(W,{children:t}),(0,m.jsxs)(F,{ref:s,children:[" ",r.map((e,t)=>{const r=Math.floor(t/l),o=n===r;return(0,m.jsx)(Z,{card:e,index:t,isExpanded:o,toggleExpand:c,collapseCard:u,handleRowBlur:h},t)})]})]})},J=n.Ay.div`
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
`,K=n.Ay.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 30px;
`,Q=n.Ay.div`
  position: absolute;
  left: 0;
  top: 5px;
  width: 12px;
  height: 12px;
  background-color: ${e=>{let{theme:t}=e;return t.accentColor}}; // ✅ З теми
  border-radius: 50%;
  border: 2px solid ${e=>{let{theme:t}=e;return t.background}}; // ✅ З теми
  z-index: 1;
`,ee=n.Ay.div`
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
`,te=n.Ay.h4`
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
`,re=n.Ay.p`
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
`,oe=e=>{let{title:t,events:r}=e;return(0,m.jsxs)(J,{children:[t&&(0,m.jsx)(s.A,{as:"h3",size:"default",children:t}),r.map((e,t)=>(0,m.jsxs)(K,{children:[(0,m.jsx)(Q,{}),(0,m.jsxs)(ee,{children:[(0,m.jsx)(te,{children:e.title}),(0,m.jsx)(re,{children:e.description})]})]},t))]})},ne=n.Ay.div`
  // ✅ Додано export
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`,ie=n.Ay.div`
  // ✅ Додано export
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: stretch;
  width: 100%;
`,le=n.Ay.div`
  flex: 1 1 auto;
  max-width: calc(50% - 0.75rem);

  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;

  background-color: ${e=>{let{theme:t}=e;return t.cardBackground||t.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor||t.accentBg}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  transition: all 0.3s ease-in-out;

  background-color: ${e=>"positive"===e.$type?e.theme.positiveBackground:"negative"===e.$type?e.theme.negativeBackground:"neutral1"===e.$type?e.theme.neutralBackground1:"neutral2"===e.$type?e.theme.neutralBackground2:e.theme.cardBackground};
  border: 1px solid
    ${e=>"positive"===e.$type?e.theme.positiveBorder:"negative"===e.$type?e.theme.negativeBorder:"neutral1"===e.$type?e.theme.neutralBorder1:"neutral2"===e.$type?e.theme.neutralBorder2:e.theme.cardBorder};

  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
    transform: translateY(-2px);
  }

  @media (max-width: 650px) {
    max-width: 100%;
  }
  min-width: 280px;
`,ae=n.Ay.h4`
  // ✅ Додано export
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  color: ${e=>"positive"===e.$type?e.theme.positiveText:"negative"===e.$type?e.theme.negativeText:"neutral1"===e.$type?e.theme.neutralText1:"neutral2"===e.$type?e.theme.neutralText2:e.theme.color};
`,se=n.Ay.span`
  // ✅ Додано export
  font-size: 2rem;
  margin-right: 0.8rem;
`,de=n.Ay.div`
  // ✅ Додано export
  font-size: 1rem;
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.color}};

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }
`,ce=e=>{let{title:t,items:r}=e;return!r||r.length<2?null:(0,m.jsxs)(ne,{children:[t&&(0,m.jsx)(s.A,{as:"h3",children:t}),(0,m.jsx)(ie,{children:r.map((e,t)=>(0,m.jsxs)(le,{$type:e.type,children:[(0,m.jsxs)(ae,{$type:e.type,children:[e.emoji&&(0,m.jsx)(se,{children:e.emoji}),e.heading]}),(0,m.jsx)(de,{children:e.content})]},t))})]})},me=n.Ay.section`
  margin: 3rem 0;
  padding: 20px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column; /* За замовчуванням стовпець на мобільних */
  gap: 2rem; /* Відступ між текстовим блоком та ілюстрацією */
  align-items: center; /* Центрування елементів */

  .content-area {
    display: flex;
    flex-direction: column;
    width: 100%; /* Займає всю ширину контейнера */
    gap: 1.5rem; /* Відступ між текстовим блоком та зображенням всередині content-area */

    @media (min-width: 768px) {
      flex-direction: ${e=>{let{imagePosition:t}=e;return"left"===t?"row-reverse":"row"}};
      align-items: flex-start; /* Вирівнювання по верху */
    }
  }

  /* Якщо у вас є SectionHeading, він має власні стилі.
     Якщо ви хочете стилізувати h3 безпосередньо тут, можете так: */
  h3 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: ${e=>{let{theme:t}=e;return t.color}}; /* Використовуйте змінну з теми */
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.extraLarge}};
    width: 100%; /* Забезпечує, що заголовок займає всю ширину */
    @media (min-width: 768px) {
      text-align: left;
    }
  }
`,he=n.Ay.div`
  flex: 2; /* Дозволяє займати більше місця для тексту */
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.color}};

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${e=>{let{theme:t}=e;return t.accentColor}};
  }

  @media (min-width: 768px) {
    padding-right: 20px; /* Відступ від зображення на великих екранах */
  }
`,ue=n.Ay.div`
  flex: 1; /* Дозволяє займати доступне місце */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${e=>{let{theme:t}=e;return t.secondaryBackground}};
  padding: 15px;
  padding-top: 0; /* Відступ зверху для зображення */
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.extraSmall}};
  max-width: 100%; /* Забезпечення адаптивності */

  @media (min-width: 768px) {
    max-width: 45%; /* Приклад, можна налаштувати */
  }
`,ge=n.Ay.img`
  max-width: 100%;
  height: auto;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.extraSmall}};
  margin-bottom: 0.5rem;
`,pe=n.Ay.figcaption`
  /* Перейменував на ImageCaption */
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.textColorLight}};
  line-height: 1.4;
`,xe=e=>{let{title:t,content:r,imageUrl:o,altText:n,caption:i,imagePosition:l}=e;return r||o?(0,m.jsxs)(me,{imagePosition:l,children:[t&&(0,m.jsx)(s.A,{as:"h3",children:t}),(0,m.jsxs)("div",{className:"content-area",children:[" ",r&&(0,m.jsxs)(he,{children:[r," "]}),o&&(0,m.jsxs)(ue,{children:[(0,m.jsx)(ge,{src:o,alt:n}),i&&(0,m.jsx)(pe,{children:i})]})]})]}):null};var be=r(8056);const fe=function(e){let{lessonData:t}=e;if(!t)return(0,m.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443 \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438..."});const{title:r,author:n,book:i,chapter:l,verses:h,date:g,duration:p,theme:x,tags:b,description:f,sections:y}=t;return(0,m.jsxs)(be.Sg,{children:[(0,m.jsxs)(be.ae,{children:[(0,m.jsx)("h2",{children:r}),(0,m.jsx)(u,{author:n,book:i,chapter:l,verses:h,date:g,duration:p,theme:x,tags:b})]}),(0,m.jsx)(be.IZ,{children:(0,m.jsx)(a.A,{children:(0,m.jsxs)(be.tG,{children:[f&&f,y.map((e,t)=>{switch(e.type){case"text":return(0,m.jsxs)(o.Fragment,{children:[e.title&&(0,m.jsx)(s.A,{as:e.subtitle?"h4":"h3",size:e.subtitle?"medium":"default",children:e.title}),e.content.map((e,t)=>(0,m.jsx)(o.Fragment,{children:e},t))]},t);case"quiz":return(0,m.jsx)(d.A,{quizData:e},e.id);case"reveal-cards":return(0,m.jsxs)(o.Fragment,{children:[e.title&&(0,m.jsx)(s.A,{as:"h3",size:"default",children:e.title}),e.cards.map(e=>(0,m.jsx)(c.A,{cardData:e},e.id))]},t);case"highlight-box":return(0,m.jsx)(B,{...e},t);case"question-prompt":return(0,m.jsx)(H,{...e},t);case"list-cards":return(0,m.jsx)(X,{...e},t);case"timeline":return(0,m.jsx)(oe,{...e},t);case"contrast-section":return(0,m.jsx)(ce,{...e},t);case"diagram":return(0,m.jsx)($,{chartType:e.chartType,title:e.title,description:e.description,chartData:e.chartData,chartOptions:e.chartOptions},t);case"image-placeholder":return(0,m.jsx)(j,{title:e.title,description:e.description,imageUrl:e.imageUrl,altText:e.altText,caption:e.caption},t);case"description-with-image":return(0,m.jsx)(xe,{title:e.title,content:e.content,imageUrl:e.imageUrl,altText:e.altText,caption:e.caption,imagePosition:e.imagePosition},t);default:return console.warn(`\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0441\u0435\u043a\u0446\u0456\u0457: ${e.type}`),null}})]})})})]})};var $e=r(6841),ye=r(5003);const ve=()=>{const{selectedHomeGroupLesson:e,setSelectedHomeGroupLesson:t}=(0,ye.t)(),[r,n]=(0,o.useState)(null),[a,s]=(0,o.useState)(!0),d=(e=>{if(!e)return null;for(const t in $e.H)if($e.H.hasOwnProperty(t)){const r=$e.H[t];if(Array.isArray(r)&&r.length>0){const t=r.find(t=>t.id===e);if(t)return t}}return null})(e);return(0,o.useEffect)(()=>{if(!e){let e=null;for(const t in $e.H)if($e.H.hasOwnProperty(t)){const r=$e.H[t];if(Array.isArray(r)&&r.length>0){e=r[0].id;break}}e?t(e):s(!1)}},[e,t]),(0,o.useEffect)(()=>{e&&(async()=>{if(s(!0),n(null),d&&d.loadLesson)try{const e=await d.loadLesson();n(e.default)}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443:",e),n(null)}finally{s(!1)}else s(!1)})()},[d,e]),(0,m.jsx)(i,{children:a?(0,m.jsx)(l,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443..."}):r?(0,m.jsx)(fe,{lessonData:r}):(0,m.jsx)(l,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0443\u0440\u043e\u043a \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432 \u043c\u0435\u043d\u044e."})})};function we(){return(0,m.jsx)(ve,{})}},8763:(e,t,r)=>{r.d(t,{A:()=>m});var o=r(5043),n=r(4574);const i=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}}; // Основний фон картки
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // Межа картки
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05); // Тінь залишена без змін

  // ДОДАНО: Плавні переходи для фону та межі картки
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out;
`,l=n.Ay.h4`
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
`,a=n.Ay.ul`
  list-style: none;
  padding: 0;
  margin-top: 15px;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}}; // Межа для списку опцій
  padding-top: 15px;

  // ДОДАНО: Плавний перехід для кольору верхньої межі списку опцій
  transition: border-color 0.4s ease-in-out;
`,s=n.Ay.li`
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
`;var c=r(579);function m(e){let{quizData:t}=e;const[r,n]=(0,o.useState)(!1),[m,h]=(0,o.useState)(null);return(0,c.jsxs)(i,{children:[(0,c.jsxs)(l,{onClick:()=>{n(!r),r&&h(null)},children:[t.question,(0,c.jsx)(d,{isActive:r,children:r?"\u2212":"+"})]}),r&&(0,c.jsx)(a,{children:t.options.map((e,t)=>(0,c.jsx)(s,{onClick:()=>(e=>{h(e)})(t),isSelected:m===t,isCorrectOption:e.isCorrect,showFeedback:null!==m,children:e.text},t))})]})}}}]);
//# sourceMappingURL=127.6038d450.chunk.js.map
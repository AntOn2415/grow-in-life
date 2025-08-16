"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[8851],{1441:(e,t,r)=>{r.d(t,{A:()=>l});r(5043);var o=r(4574);o.Ay.section`
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
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано theme.spacing
  line-height: 1.2;
  transition: color 0.25s ease-in-out;
  ${e=>"default"===e.size&&`\n    font-size: ${e.theme.fontSizes.xlarge}; // \u041e\u041d\u041e\u0412\u041b\u0415\u041d\u041e: \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043e theme.fontSizes\n  `}

  ${e=>"medium"===e.size&&`\n    font-size: ${e.theme.fontSizes.large}; // \u041e\u041d\u041e\u0412\u041b\u0415\u041d\u041e: \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043e theme.fontSizes\n  `}

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
    
    // Адаптивні розміри шрифту для мобільних
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
    
    ${e=>"medium"===e.size&&`\n      font-size: ${e.theme.fontSizes.medium};\n    `}
     ${e=>"small"===e.size&&`\n    font-size: ${e.theme.fontSizes.medium};\n    font-weight: normal;\n    margin-bottom: ${e.theme.spacing.medium};\n    color: ${e.theme.colors.textSecondary};\n\n    ${e.theme.media.down("md")`
      font-size: ${e.theme.fontSizes.small};
      margin-bottom: ${e.theme.spacing.small};
    `}\n  `}
  `}}

  a {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}}; // ОНОВЛЕНО: Використано theme.colors
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
`;var i=r(579);const l=e=>{let{as:t="h3",size:r="default",children:o}=e;return(0,i.jsxs)(n,{as:t,size:r,children:[o," "]})}},2099:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);const o=r(4574).Ay.section`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`;var n=r(579);function i(e){let{children:t}=e;return(0,n.jsx)(o,{children:t})}},5555:(e,t,r)=>{r.d(t,{A:()=>u});var o=r(5043),n=r(4574),i=r(4119);const l=(0,n.Ay)(i.P.div)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
  }
`,s=n.Ay.h4`
  display: flex;
  align-items: center;
  //justify-content: start;
  gap: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}} ${e=>{let{theme:t}=e;return t.spacing.medium}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.accentBg}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  font-weight: bold;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  flex-wrap: wrap;
  word-break: break-word;
`,a=(0,n.Ay)(i.P.div)`
  overflow: hidden;
  will-change: height;
`,m=(0,n.Ay)(i.P.div)`
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.6;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;var c=r(8904),d=r(579);function u(e){let{id:t,emoji:r,title:n,content:i}=e;const[u,h]=(0,o.useState)(!1),[g,p]=(0,o.useState)(!1);return(0,d.jsxs)(l,{onHoverStart:()=>p(!0),onHoverEnd:()=>p(!1),onClick:()=>h(!u),children:[(0,d.jsxs)(s,{children:[r&&(0,d.jsx)("span",{children:r}),(0,d.jsx)(c.A,{tokens:n})]}),(0,d.jsx)(a,{initial:!1,animate:{height:g||u?"auto":0},transition:{duration:.3,ease:"easeInOut"},children:(0,d.jsx)(m,{initial:{opacity:0},animate:{opacity:1,backdropFilter:u?"blur(0px)":"blur(8px)"},transition:{duration:.3,ease:"easeInOut"},children:(0,d.jsx)(c.A,{tokens:i})})})]})}},8056:(e,t,r)=>{r.d(t,{IZ:()=>s,Sg:()=>i,ae:()=>l,nA:()=>m,rh:()=>d,sY:()=>c,tG:()=>a,yO:()=>u});var o=r(4574),n=r(4119);const i=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`,l=o.Ay.div`
  text-align: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  h2 {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
    color: ${e=>{let{theme:t}=e;return t.colors.color}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
    transition: color 0.25s ease-in-out;

    ${e=>{let{theme:t}=e;return t.media.down("sm")`
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
    `}}
  }
`,s=o.Ay.div`
  width: 100%;
`,a=o.Ay.div`
  line-height: 1.8;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  transition: color 0.25s ease-in-out;
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  `}}

  p {
    margin-bottom: 1em;
  }

  ol {
    margin-bottom: 1em;
  }

  li {
    margin-bottom: 0.5em;
  }

  strong {
    color: ${e=>{let{theme:t}=e;return t.colors.color}};
    transition: color 0.25s ease-in-out;
  }

  // Додаємо відступ між компонентами, що знаходяться всередині обгортки
  > * {
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};

    // Забираємо відступ у останнього елемента, щоб не було зайвого порожнього місця
    &:last-child {
      margin-bottom: 0;
    }
  }

  // Додаємо відступ для SectionHeading
  .section-heading {
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  }
`,m=o.Ay.div`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}};
  // Щоб останній елемент не мав зайвого відступу
  &:last-child {
    margin-bottom: 0;
  }

  // Додаємо стилі для заголовків всередині секції
  h3,
  h4 {
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.small}};
  }

  // Забираємо відступ у першого заголовка, якщо він є першим елементом секції
  h3:first-child,
  h4:first-child {
    margin-top: 0;
  }
`,c=(0,o.Ay)(n.P.button)`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: currentColor;
  display: inline-block;
  position: relative;
  transition: color 0.25s ease-in-out;

  &:focus {
    outline: none;
  }
`,d=(0,o.Ay)(n.P.span)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  will-change: clip-path;
  clip-path: inset(0% 0% 0% 0%);
  pointer-events: none;
`,u=o.Ay.div`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}};
  line-height: 1.5;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  `}}
`},8763:(e,t,r)=>{r.d(t,{A:()=>d});var o=r(5043),n=r(4574);const i=n.Ay.div`
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
`,l=n.Ay.h4`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  font-weight: 600;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  cursor: pointer;

  flex-wrap: wrap;
  word-break: break-word;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору тексту запитання

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,s=n.Ay.ul`
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
`,m=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};

  transition: transform 0.2s ease-in-out, color 0.25s ease-in-out; // ОНОВЛЕНО: Перехід для кольору іконки
`;var c=r(579);function d(e){let{quizData:t}=e;const[r,n]=(0,o.useState)(!1),[d,u]=(0,o.useState)(null);return(0,c.jsxs)(i,{children:[(0,c.jsxs)(l,{onClick:()=>{n(!r),r&&u(null)},children:[t.question,(0,c.jsx)(m,{isActive:r,children:r?"\u2212":"+"})]}),r&&(0,c.jsx)(s,{children:t.options.map((e,t)=>(0,c.jsx)(a,{onClick:()=>(e=>{u(e)})(t),isSelected:d===t,isCorrectOption:e.isCorrect,showFeedback:null!==d,children:e.text},t))})]})}},8904:(e,t,r)=>{r.d(t,{A:()=>p});var o=r(5043),n=r(9927),i=r(4119),l=r(6450),s=r(8056),a=r(579);const m=e=>{let{bibleRef:t,children:r}=e;const{navigateTo:m}=(0,o.useContext)(l.y),c=(0,n.s)();return(0,a.jsxs)(s.sY,{as:i.P.button,type:"button",onClick:e=>{e.preventDefault(),c.start({clipPath:["inset(0% 0% 0% 0%)","inset(0% 0% 0% 100%)","inset(0% 100% 0% 0%)","inset(0% 0% 0% 0%)"],transition:{duration:.6,times:[0,.45,.55,1],ease:"linear"}}),m(t)},whileHover:{scale:1.03},whileTap:{scale:.97},transition:{duration:.15,ease:"easeOut"},style:{transformOrigin:"center center"},children:[r,(0,a.jsx)(s.rh,{initial:{clipPath:"inset(0% 0% 0% 0%)"},animate:c})]})},c=e=>{let{children:t}=e;return(0,a.jsx)("strong",{style:{color:"inherit"},children:t})},d=e=>{let{children:t}=e;return(0,a.jsx)("em",{style:{color:"inherit"},children:t})},u=e=>{let{children:t}=e;return(0,a.jsx)("blockquote",{style:{fontStyle:"italic",borderLeft:"2px solid #ccc",paddingLeft:"10px",margin:"10px 0"},children:t})},h=(e,t)=>{switch(e.type){case"bold":return(0,a.jsx)(c,{children:(0,a.jsx)(g,{tokens:e.content})},t);case"italic":return(0,a.jsx)(d,{children:(0,a.jsx)(g,{tokens:e.content})},t);case"quote":return(0,a.jsx)(u,{children:(0,a.jsx)(g,{tokens:e.content})},t);case"bible-link":return(0,a.jsx)(m,{bibleRef:e.bibleRef,children:e.content},t);default:return(0,a.jsx)(o.Fragment,{children:e.content},t)}},g=e=>{let{tokens:t}=e;return t?"string"===typeof t?(0,a.jsx)(o.Fragment,{children:t}):"object"!==typeof t||Array.isArray(t)?Array.isArray(t)?t.map((e,t)=>"string"===typeof e?(0,a.jsx)(o.Fragment,{children:e},t):h(e,t)):null:h(t,"single-token"):null},p=g}}]);
//# sourceMappingURL=8851.13d5468f.chunk.js.map
"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[8851],{1441:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);const o=r(4574).Ay.h3.attrs(e=>({as:e.as||"h3",id:e.id}))`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-weight: bold;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  line-height: 1.2;
  transition: color 0.25s ease-in-out;

  ${e=>"default"===e.size&&`\n    font-size: ${e.theme.fontSizes.xlarge};\n  `}

  ${e=>"medium"===e.size&&`\n    font-size: ${e.theme.fontSizes.large};\n  `}

  ${e=>"small"===e.size&&`\n    font-size: ${e.theme.fontSizes.medium};\n    font-weight: normal;\n    margin-bottom: ${e.theme.spacing.medium};\n    color: ${e.theme.colors.textSecondary};\n  `}

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};

    ${e=>"medium"===e.size&&`\n      font-size: ${e.theme.fontSizes.medium};\n    `}
    
    ${e=>"small"===e.size&&`\n      font-size: ${e.theme.fontSizes.small};\n      margin-bottom: ${e.theme.spacing.small};\n    `}
  `}}

  a {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
`;var n=r(579);const i=e=>{let{as:t="h3",size:r="default",id:i,children:l}=e;return(0,n.jsx)(o,{as:t,size:r,id:i,children:l})}},2099:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);const o=r(4574).Ay.section`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`;var n=r(579);function i(e){let{children:t}=e;return(0,n.jsx)(o,{children:t})}},5555:(e,t,r)=>{r.d(t,{A:()=>g});var o=r(5043),n=r(4574),i=r(4119);const l=(0,n.Ay)(i.P.div)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  will-change: height;
  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
  }
`,s=n.Ay.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}} ${e=>{let{theme:t}=e;return t.spacing.medium}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.accentBg}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  font-weight: bold;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  flex-wrap: wrap;
  word-break: break-word;
`,a=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  line-height: 1;
`,c=(0,n.Ay)(i.P.div).attrs(e=>({as:e.as||"h4"}))`
  display: flex;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin: 0;
  line-height: 1.3;
  transition: color 0.25s ease-in-out;
`,m=(0,n.Ay)(i.P.div)`
  overflow: hidden;
  will-change: height;
`,d=(0,n.Ay)(i.P.div)`
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.6;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0;
  & > p:first-child {
    margin-top: 0;
  }
`;var u=r(8904),h=r(579);function g(e){let{id:t,emoji:r,title:n,content:i,titleLevel:g}=e;const[p,b]=(0,o.useState)(!1),[$,x]=(0,o.useState)(!1);return(0,h.jsxs)(l,{onHoverStart:()=>x(!0),onHoverEnd:()=>x(!1),onClick:()=>b(!p),children:[(0,h.jsxs)(s,{children:[r&&(0,h.jsx)(a,{children:r}),(0,h.jsx)(c,{as:`h${g}`,children:(0,h.jsx)(u.A,{tokens:n})})]}),(0,h.jsx)(m,{initial:!1,animate:{height:$||p?"auto":0},transition:{duration:.3,ease:"easeInOut"},children:(0,h.jsx)(d,{initial:{opacity:0},animate:{opacity:1,backdropFilter:p?"blur(0px)":"blur(8px)"},transition:{duration:.3,ease:"easeInOut"},children:(0,h.jsx)("p",{children:"string"===typeof i?(0,h.jsx)(u.A,{tokens:i}):Array.isArray(i)?i.map((e,t)=>(0,h.jsx)(u.A,{tokens:e},t)):null})})})]})}},8056:(e,t,r)=>{r.d(t,{IZ:()=>a,KE:()=>i,R4:()=>l,Sg:()=>s,rh:()=>d,sY:()=>m,tG:()=>c,yO:()=>u});var o=r(4574),n=r(4119);const i=o.Ay.section`
  position: relative;
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.colors.navBg}};
  background-image: ${e=>{let{$heroImage:t}=e;return t?`url(${t})`:"none"}};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  transition: background-image 0.5s ease-in-out, background-color 0.5s ease-in-out,
    border 0.25s ease-in-out;
  // ✅ ЗМІНИ В ПСЕВДОЕЛЕМЕНТІ ДЛЯ ДИНАМІЧНОГО ЗАТЕМНЕННЯ
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
    // Використовуємо колір із теми для затемнення
    background-color: ${e=>{let{theme:t}=e;return t.colors.overlayColor}};
    z-index: 0;
  }
`,l=o.Ay.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xlarge}} 0 ${e=>{let{theme:t}=e;return t.spacing.xlarge}} 0;
  padding-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};

  h1 {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
    color: ${e=>{let{theme:t}=e;return t.colors.heroText}};
    margin: 0 auto;
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
    max-width: 500px;
    line-height: 1.2;
    transition: color 0.25s ease-in-out;
    ${e=>{let{theme:t}=e;return t.media.down("sm")`
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
      max-width: 300px;
    `}}
  }
`,s=o.Ay.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,a=o.Ay.div`
  width: 100%;
  max-width: ${e=>{let{theme:t}=e;return t.breakpoints.lg}};
  margin: 0 auto;
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}} 0 ${e=>{let{theme:t}=e;return t.spacing.medium}} 0;
  z-index: 2;
  position: relative;
`,c=o.Ay.div`
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
    transition: color 0.25s ease-in-out; // ✅ Плавний перехід кольору жирного тексту
  }

  > * {
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-heading {
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  }
`,m=(o.Ay.div`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}};

  &:last-child {
    margin-bottom: 0;
  }

  h3,
  h4 {
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.small}};
  }

  h3:first-child,
  h4:first-child {
    margin-top: 0;
  }
`,(0,o.Ay)(n.P.button)`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: currentColor;
  display: inline-block;
  position: relative;
  transition: color 0.25s ease-in-out; // ✅ Плавний перехід для кнопки-вірша

  &:focus {
    outline: none;
  }
`),d=(0,o.Ay)(n.P.span)`
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
`},8763:(e,t,r)=>{r.d(t,{A:()=>u});var o=r(5043),n=r(8904),i=r(4574);const l=i.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  `}}
`,s=i.Ay.h4.attrs(e=>({as:e.as||"h4"}))`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  font-weight: 600;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  cursor: pointer;
  flex-wrap: wrap;
  word-break: break-word;
  transition: color 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,a=i.Ay.ul`
  list-style: none;
  padding: 0;
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  padding-top: ${e=>{let{theme:t}=e;return t.spacing.small}};
  transition: border-color 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,c=i.Ay.li`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.extraSmall}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.small}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  cursor: pointer;

  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    color 0.25s ease-in-out;

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
`,m=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  transition: transform 0.2s ease-in-out, color 0.25s ease-in-out;
`;var d=r(579);function u(e){let{quizData:t,titleLevel:r}=e;const[i,u]=(0,o.useState)(!1),[h,g]=(0,o.useState)(null);return(0,d.jsxs)(l,{children:[(0,d.jsxs)(s,{onClick:()=>{u(!i),i&&g(null)},as:`h${r}`,children:[(0,d.jsx)(n.A,{tokens:t.question}),(0,d.jsx)(m,{isActive:i,children:i?"\u2212":"+"})]}),i&&(0,d.jsx)(a,{children:t.options.map((e,t)=>(0,d.jsx)(c,{onClick:()=>(e=>{g(e)})(t),isSelected:h===t,isCorrectOption:e.isCorrect,showFeedback:null!==h,children:(0,d.jsx)(n.A,{tokens:e.text})},t))})]})}},8904:(e,t,r)=>{r.d(t,{A:()=>p});var o=r(5043),n=r(9927),i=r(4119),l=r(6450),s=r(8056),a=r(579);const c=e=>{let{bibleRef:t,children:r}=e;const{navigateTo:c}=(0,o.useContext)(l.y),m=(0,n.s)();return(0,a.jsxs)(s.sY,{as:i.P.button,type:"button",onClick:e=>{e.preventDefault(),m.start({clipPath:["inset(0% 0% 0% 0%)","inset(0% 0% 0% 100%)","inset(0% 100% 0% 0%)","inset(0% 0% 0% 0%)"],transition:{duration:.6,times:[0,.45,.55,1],ease:"linear"}}),c(t)},whileHover:{scale:1.03},whileTap:{scale:.97},transition:{duration:.15,ease:"easeOut"},style:{transformOrigin:"center center"},"aria-label":`\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 \u0411\u0456\u0431\u043b\u0456\u044e: ${r}`,children:[r,(0,a.jsx)(s.rh,{initial:{clipPath:"inset(0% 0% 0% 0%)"},animate:m})]})},m=e=>{let{children:t}=e;return(0,a.jsx)("strong",{style:{color:"inherit"},children:t})},d=e=>{let{children:t}=e;return(0,a.jsx)("em",{style:{color:"inherit"},children:t})},u=e=>{let{children:t}=e;return(0,a.jsx)("span",{style:{fontStyle:"italic",borderLeft:"2px solid #ccc",paddingLeft:"10px",margin:"0 0 10px 0"},children:t})},h=(e,t)=>{switch(e.type){case"bold":return(0,a.jsx)(m,{children:(0,a.jsx)(g,{tokens:e.content})},t);case"italic":return(0,a.jsx)(d,{children:(0,a.jsx)(g,{tokens:e.content})},t);case"quote":return(0,a.jsx)(u,{children:(0,a.jsx)(g,{tokens:e.content})},t);case"bible-link":return(0,a.jsx)(c,{bibleRef:e.bibleRef,children:e.content},t);default:return(0,a.jsx)(o.Fragment,{children:e.content},t)}},g=e=>{let{tokens:t}=e;return t?"string"===typeof t?(0,a.jsx)(o.Fragment,{children:t}):"object"!==typeof t||Array.isArray(t)?Array.isArray(t)?t.map((e,t)=>"string"===typeof e?(0,a.jsx)(o.Fragment,{children:e},t):h(e,t)):null:h(t,"single-token"):null},p=g}}]);
//# sourceMappingURL=8851.bd5d26d1.chunk.js.map
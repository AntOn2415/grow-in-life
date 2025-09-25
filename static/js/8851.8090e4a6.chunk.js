"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[8851],{1441:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);const n=r(4574).Ay.h3.attrs(e=>({as:e.as||"h3",id:e.id}))`
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
    transition: color 0.25s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }
`;var o=r(579);const i=e=>{let{as:t="h3",size:r="default",id:i,children:l}=e;return(0,o.jsx)(n,{as:t,size:r,id:i,children:l})}},2099:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);const n=r(4574).Ay.section`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`;var o=r(579);function i(e){let{children:t}=e;return(0,o.jsx)(n,{children:t})}},5555:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(5043),o=r(4574),i=r(4119);const l=(0,o.Ay)(i.P.div)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.25s ease-in-out;
  will-change: height;
  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
  }
`,s=o.Ay.div`
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
`,a=o.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  line-height: 1;
`,c=(0,o.Ay)(i.P.div).attrs(e=>({as:e.as||"h4"}))`
  display: flex;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin: 0;
  line-height: 1.3;
  transition: color 0.25s ease-in-out;
`,d=(0,o.Ay)(i.P.div)`
  overflow: hidden;
  will-change: height;
`,m=(0,o.Ay)(i.P.div)`
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
`;var h=r(8904),u=r(579);function g(e){let{id:t,emoji:r,title:o,content:i,titleLevel:g}=e;const[p,$]=(0,n.useState)(!1),[b,x]=(0,n.useState)(!1);return(0,u.jsxs)(l,{onHoverStart:()=>x(!0),onHoverEnd:()=>x(!1),onClick:()=>$(!p),children:[(0,u.jsxs)(s,{children:[r&&(0,u.jsx)(a,{children:r}),(0,u.jsx)(c,{as:`h${g}`,children:(0,u.jsx)(h.A,{tokens:o})})]}),(0,u.jsx)(d,{initial:!1,animate:{height:b||p?"auto":0},transition:{duration:.3,ease:"easeInOut"},children:(0,u.jsx)(m,{initial:{opacity:0},animate:{opacity:1,backdropFilter:p?"blur(0px)":"blur(8px)"},transition:{duration:.3,ease:"easeInOut"},children:(0,u.jsx)("p",{children:"string"===typeof i?(0,u.jsx)(h.A,{tokens:i}):Array.isArray(i)?i.map((e,t)=>(0,u.jsx)(h.A,{tokens:e},t)):null})})})]})}},8056:(e,t,r)=>{r.d(t,{IZ:()=>a,KE:()=>i,R4:()=>l,Sg:()=>s,rh:()=>m,sY:()=>d,tG:()=>c,yO:()=>h});var n=r(4574),o=r(4119);const i=n.Ay.section`
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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
    background-color: ${e=>{let{theme:t}=e;return t.colors.overlayColor}};
    z-index: 0;
  }
`,l=n.Ay.div`
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
`,s=n.Ay.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`,a=n.Ay.div`
  width: 100%;
  max-width: ${e=>{let{theme:t}=e;return t.breakpoints.lg}};
  margin: 0 auto;
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}} 0 ${e=>{let{theme:t}=e;return t.spacing.medium}} 0;
  z-index: 2;
  position: relative;
`,c=n.Ay.div`
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

  > * {
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-heading {
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  }
`,d=(n.Ay.div`
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
`,(0,n.Ay)(o.P.button)`
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
`),m=(0,n.Ay)(o.P.span)`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  will-change: clip-path;
  clip-path: inset(0% 0% 0% 0%);
  pointer-events: none;
`,h=n.Ay.div`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}};
  line-height: 1.5;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  `}}
`},8763:(e,t,r)=>{r.d(t,{A:()=>$});var n=r(5043),o=r(8904),i=r(3546),l=r(4119),s=r(5200),a=r(4574);const c=a.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
  transition: all 0.25s ease-in-out;

  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.large}};
    transform: translateY(-2px);
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
    transform: none;
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
  `}}
`,d=a.Ay.div.attrs(e=>({as:e.as||"h4"}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${e=>{let{theme:t}=e;return t.spacing.small}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  cursor: pointer;
  padding: 0;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.sectionTitleHover}};
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  `}}
`,m=(0,a.Ay)(l.P.ul)`
  list-style: none;
  padding: 0;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  display: flex;
  flex-direction: column;
  gap: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  transition: all 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.small}};
    gap: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,h=a.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.dividerColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};

  &:not(:last-child) {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.hoverBg}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.accentBg}};
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    transform: none;
    &:hover {
        background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
        border-color: ${e=>{let{theme:t}=e;return t.colors.dividerColor}};
    }
  `}}

  ${e=>e.isSelected&&!e.showFeedback&&`\n    background-color: ${e.theme.colors.interactiveBgYellow};\n    border-color: ${e.theme.colors.interactiveBorderYellow};\n    color: ${e.theme.colors.accentColor};\n    font-weight: 600;\n    box-shadow: ${e.theme.shadows.medium};\n  `}

  ${e=>e.showFeedback&&e.isCorrectOption&&`\n    background-color: ${e.theme.colors.positiveBackground};\n    border-color: ${e.theme.colors.positiveBorder};\n    color: ${e.theme.colors.positiveText};\n    font-weight: bold;\n  `}

  ${e=>e.showFeedback&&e.isSelected&&!e.isCorrectOption&&`\n    background-color: ${e.theme.colors.negativeBackground};\n    border-color: ${e.theme.colors.negativeBorder};\n    color: ${e.theme.colors.negativeText};\n  `}
  
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,u=a.Ay.span`
  position: relative;
  width: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  height: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${e=>e.$isActive?e.theme.colors.sectionTitleHover:e.theme.colors.colorSecondary};
    font-size: 120%;

    transition: color 0.25s ease-in-out;
  }
`;var g=r(579);const p={hidden:{opacity:0,rotate:-90},visible:{opacity:1,rotate:0},exit:{opacity:0,rotate:90}};function $(e){let{quizData:t,titleLevel:r}=e;const[a,$]=(0,n.useState)(!1),[b,x]=(0,n.useState)(null),f={hidden:{y:-20,opacity:0},visible:{y:0,opacity:1}},v=null!==b;return(0,g.jsxs)(c,{children:[(0,g.jsxs)(d,{onClick:()=>{$(e=>!e),a&&x(null)},as:`h${r}`,children:[(0,g.jsx)(o.A,{tokens:t.question}),(0,g.jsx)(u,{$isActive:a,children:(0,g.jsx)(i.N,{mode:"wait",initial:!1,children:a?(0,g.jsx)(l.P.span,{initial:"hidden",animate:"visible",exit:"exit",variants:p,transition:{duration:.25},children:(0,g.jsx)(s.wAb,{})},"up"):(0,g.jsx)(l.P.span,{initial:"hidden",animate:"visible",exit:"exit",variants:p,transition:{duration:.25},children:(0,g.jsx)(s.fK4,{})},"down")})})]}),(0,g.jsx)(l.P.div,{initial:"hidden",animate:a?"visible":"hidden",variants:{hidden:{opacity:0,height:0,transition:{duration:.25}},visible:{opacity:1,height:"auto",transition:{duration:.25,staggerChildren:.1,when:"beforeChildren"}}},children:(0,g.jsx)(m,{children:t.options.map((e,t)=>(0,g.jsx)(l.P.li,{variants:f,children:(0,g.jsx)(h,{onClick:()=>(e=>{null===b&&x(e)})(t),isSelected:b===t,isCorrectOption:e.isCorrect,showFeedback:v,disabled:v,children:(0,g.jsx)(o.A,{tokens:e.text})})},t))})})]})}},8904:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(5043),o=r(9927),i=r(4119),l=r(6450),s=r(8056),a=r(579);const c=e=>{let{bibleRef:t,children:r}=e;const{navigateTo:c}=(0,n.useContext)(l.y),d=(0,o.s)();return(0,a.jsxs)(s.sY,{as:i.P.button,type:"button",onClick:e=>{e.preventDefault(),d.start({clipPath:["inset(0% 0% 0% 0%)","inset(0% 0% 0% 100%)","inset(0% 100% 0% 0%)","inset(0% 0% 0% 0%)"],transition:{duration:.6,times:[0,.45,.55,1],ease:"linear"}}),c(t)},whileHover:{scale:1.03},whileTap:{scale:.97},transition:{duration:.15,ease:"easeOut"},style:{transformOrigin:"center center"},"aria-label":`\u0412\u0456\u0434\u043a\u0440\u0438\u0442\u0438 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 \u0411\u0456\u0431\u043b\u0456\u044e: ${r}`,children:[r,(0,a.jsx)(s.rh,{initial:{clipPath:"inset(0% 0% 0% 0%)"},animate:d})]})},d=e=>{let{children:t}=e;return(0,a.jsx)("strong",{style:{color:"inherit"},children:t})},m=e=>{let{children:t}=e;return(0,a.jsx)("em",{style:{color:"inherit"},children:t})},h=e=>{let{children:t}=e;return(0,a.jsx)("span",{style:{fontStyle:"italic",borderLeft:"2px solid #ccc",paddingLeft:"10px",margin:"0 0 10px 0"},children:t})},u=(e,t)=>{switch(e.type){case"bold":return(0,a.jsx)(d,{children:(0,a.jsx)(g,{tokens:e.content})},t);case"italic":return(0,a.jsx)(m,{children:(0,a.jsx)(g,{tokens:e.content})},t);case"quote":return(0,a.jsx)(h,{children:(0,a.jsx)(g,{tokens:e.content})},t);case"bible-link":return(0,a.jsx)(c,{bibleRef:e.bibleRef,children:e.content},t);default:return(0,a.jsx)(n.Fragment,{children:e.content},t)}},g=e=>{let{tokens:t}=e;return t?"string"===typeof t?(0,a.jsx)(n.Fragment,{children:t}):"object"!==typeof t||Array.isArray(t)?Array.isArray(t)?t.map((e,t)=>"string"===typeof e?(0,a.jsx)(n.Fragment,{children:e},t):u(e,t)):null:u(t,"single-token"):null},p=g}}]);
//# sourceMappingURL=8851.8090e4a6.chunk.js.map
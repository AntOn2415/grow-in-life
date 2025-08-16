"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[2941],{2941:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ut});var o=r(5043),n=r(9615),i=r(4574);const s=i.Ay.div`
  margin: 0;
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  transition: background-color 0.25s ease-in-out;
`,l=i.Ay.p`
  text-align: center;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.xxlarge}}; // ОНОВЛЕНО: Використано theme.spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використано theme.fontSizes
  color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}}; // ОНОВЛЕНО: Використано theme.colors
`;var a=r(2099),c=r(1441),d=r(8763),u=r(5555),m=r(579);const h=i.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}}; // ОНОВЛЕНО: Використовуємо fontSizes
  color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}}; // ОНОВЛЕНО: Використовуємо theme.colors
  // Медіа-запит для мобільних пристроїв, щоб зменшити шрифт
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xsmall}};
  `}}

  p {
    margin: calc(${e=>{let{theme:t}=e;return t.spacing.xsmall}} / 2) 0; // ОНОВЛЕНО: Використовуємо spacing
  }

  span {
    font-weight: bold;
    color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використовуємо theme.colors
  }

  .lesson-tags {
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}}; // ОНОВЛЕНО: Використовуємо spacing

    // Додаємо flexbox для кращого відображення тегів на мобільних пристроях
    display: flex;
    flex-wrap: wrap;
    gap: calc(${e=>{let{theme:t}=e;return t.spacing.xsmall}} / 2);

    span {
      display: inline-block;
      background-color: ${e=>{let{theme:t}=e;return t.colors.tagBg}}; // ОНОВЛЕНО: Використовуємо theme.colors
      color: ${e=>{let{theme:t}=e;return t.colors.tagColor}}; // ОНОВЛЕНО: Використовуємо theme.colors
      padding: 4px 8px; // Не змінюємо, оскільки це точні значення
      border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}}; // ОНОВЛЕНО: Використовуємо borderRadius
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}}; // ОНОВЛЕНО: Використовуємо fontSizes
    }
  }
`;const p=function(e){let{author:t,book:r,chapter:o,verses:n,date:i,duration:s,theme:l,tags:a}=e;return(0,m.jsxs)(h,{children:[t&&(0,m.jsxs)("p",{children:["\u0410\u0432\u0442\u043e\u0440: ",(0,m.jsx)("span",{children:t})]}),(r||o||n)&&(0,m.jsxs)("p",{children:["\u041a\u043d\u0438\u0433\u0430:"," ",(0,m.jsxs)("span",{children:[r," ",o?`\u0433\u043b\u0430\u0432\u0430 ${o}`:"",n?`, \u0432\u0456\u0440\u0448\u0456 ${n}`:""]})]}),i&&(0,m.jsxs)("p",{children:["\u0414\u0430\u0442\u0430: ",(0,m.jsx)("span",{children:i})]}),s&&(0,m.jsxs)("p",{children:["\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c: ",(0,m.jsx)("span",{children:s})]}),l&&(0,m.jsxs)("p",{children:["\u0422\u0435\u043c\u0430: ",(0,m.jsx)("span",{children:l})]}),a&&a.length>0&&(0,m.jsx)("div",{className:"lesson-tags",children:a.map((e,t)=>(0,m.jsx)("span",{children:e},t))})]})},g=i.Ay.div`
  width: 100%;
  max-width: 950px;
  margin: ${e=>{let{theme:t}=e;return t.spacing.medium}} auto;
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`,x=i.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    flex-direction: column; /* діаграма зверху, легенда знизу */
  `}}
`,f=i.Ay.div`
  flex-grow: 1;
  min-width: 0;
  max-width: 70%;
  height: 300px;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    max-width: 100%;
    margin-bottom: 12px;
    height: 200px;
  `}}
`,b=i.Ay.div`
  width: 30%;
  flex-shrink: 0;
  padding-left: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
    gap: 12px;
  `}}
`,$=i.Ay.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    margin-bottom: 0;
    align-items: center;
  `}}
`,y=i.Ay.span`
  display: inline-block;
  min-width: 15px;
  height: 15px;
  margin-right: 8px;
  margin-top: 3px;
  border-radius: 3px;
`,j=i.Ay.span`
  font-size: 13px;
  word-break: break-word;
  line-height: 1.3;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    font-size: 12px;
  `}}
`;var w=r(8904),k=r(6058),v=r(7304),A=r(7376);v.t1.register(v.PP,v.kc,v.FN,v.No,v.E8,v.Bs,v.pr,v.hE,v.m_,v.s$,v.dN);const z=(e,t,r)=>{if(!t||!t.datasets||0===t.datasets.length)return(0,m.jsx)("p",{children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043d\u044c\u043e \u0434\u0430\u043d\u0438\u0445 \u0434\u043b\u044f \u043f\u043e\u0431\u0443\u0434\u043e\u0432\u0438 \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438."});switch(e){case"line":return(0,m.jsx)(k.N1,{data:t,options:r});case"bar":return(0,m.jsx)(k.yP,{data:t,options:r});case"pie":return(0,m.jsx)(k.Fq,{data:t,options:r});case"doughnut":return(0,m.jsx)(k.nu,{data:t,options:r});case"polarArea":return(0,m.jsx)(k.O5,{data:t,options:r});case"radar":return(0,m.jsx)(k.Vd,{data:t,options:r});case"bubble":return(0,m.jsx)(k.Zh,{data:t,options:r});case"scatter":return(0,m.jsx)(k.Xl,{data:t,options:r});default:return(0,m.jsxs)("p",{children:["\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438: ",e]})}};const C=function(e){let{title:t,description:r,chartType:n,chartData:i,chartOptions:s}=e;const{currentTheme:l}=(0,A.D)(),a=(0,o.useMemo)(()=>((e,t,r)=>{if(!e||!e.datasets)return e;if(!t||!t.colors)return e;const o={...e};return o.datasets=o.datasets.map(e=>{const o={...e},n=[t.colors.accentColor,t.colors.navActive,t.colors.accentBg,t.colors.color,t.colors.navBg,t.colors.background,t.colors.borderColor,t.colors.interactiveBgLight,t.colors.interactiveBorderLight,t.colors.interactiveBgYellow,t.colors.interactiveBorderYellow,t.colors.buttonBg,t.colors.successColor,t.colors.dangerColor];if(o.backgroundColor&&0!==o.backgroundColor.length&&"dynamic"!==o.backgroundColor)Array.isArray(o.backgroundColor)&&(o.backgroundColor=o.backgroundColor.map((e,t)=>"dynamic"===e?n[t%n.length]:e),o.borderColor||(o.borderColor=t.colors.borderColor));else if("pie"===r||"doughnut"===r||"polarArea"===r){const e=o.data.length;o.backgroundColor=Array.from({length:e},(e,t)=>n[t%n.length]),o.borderColor=t.colors.borderColor}else o.backgroundColor=t.colors.accentColor+"B3",o.borderColor=t.colors.accentColor;return"dynamic"===o.pointBackgroundColor&&(o.pointBackgroundColor=t.colors.accentColor),"dynamic"===o.pointBorderColor&&(o.pointBorderColor=t.colors.color),"dynamic"===o.hoverBackgroundColor&&(o.hoverBackgroundColor=t.colors.hoverBg),"dynamic"===o.hoverBorderColor&&(o.hoverBorderColor=t.colors.borderColor),!0===o.fill&&(o.backgroundColor=t.colors.accentBg+"50"),o}),o})(i||{},l,n),[i,l,n]),c=(0,o.useMemo)(()=>((e,t)=>{var r,o,n,i,s,l,a,c;let d={...e,responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:5,right:40,top:10,bottom:5}},plugins:{...e.plugins,legend:{display:!["pie","doughnut"].includes(e.chartType),labels:{color:null===(r=t.colors)||void 0===r?void 0:r.color,font:{size:12},boxWidth:20,padding:10},position:"right",align:"center"},tooltip:{...null===(o=e.plugins)||void 0===o?void 0:o.tooltip,bodyFont:{size:12},titleFont:{size:14}}},scales:{...e.scales,y:{...null===(n=e.scales)||void 0===n?void 0:n.y,border:{display:!1},ticks:{display:!1,color:null===(i=t.colors)||void 0===i?void 0:i.color,font:{size:10}},grid:{display:!1,color:((null===(s=t.colors)||void 0===s?void 0:s.borderColor)||"#D3D3D3")+"80"}},x:{...null===(l=e.scales)||void 0===l?void 0:l.x,border:{display:!1},ticks:{display:!1,color:null===(a=t.colors)||void 0===a?void 0:a.color,font:{size:10}},grid:{display:!1,color:((null===(c=t.colors)||void 0===c?void 0:c.borderColor)||"#D3D3D3")+"80"}}}};return"doughnut"===e.chartType&&(d.cutout=e.cutout||"70%"),d.plugins||(d.plugins={}),d})({...s,chartType:n},l),[s,l,n]),d=(0,o.useMemo)(()=>{var e;if(!a||!a.labels||!a.datasets||0===a.datasets.length)return[];const t=(null===(e=a.datasets[0])||void 0===e?void 0:e.backgroundColor)||[];return a.labels.map((e,r)=>({text:e,color:Array.isArray(t)?t[r%t.length]:t}))},[a]);return l?i?(0,m.jsxs)(g,{children:[t&&(0,m.jsx)("h4",{children:(0,m.jsx)(w.A,{tokens:t})}),r&&(0,m.jsx)("p",{children:(0,m.jsx)(w.A,{tokens:r})}),(0,m.jsxs)(x,{children:[(0,m.jsx)(f,{children:z(n,a,c)}),(0,m.jsx)(b,{children:d.map((e,t)=>(0,m.jsxs)($,{children:[(0,m.jsx)(y,{style:{backgroundColor:e.color}}),(0,m.jsx)(j,{style:{color:l.color},children:e.text})]},t))})]})]}):(0,m.jsx)("p",{children:"\u0414\u0456\u0430\u0433\u0440\u0430\u043c\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f \u0430\u0431\u043e \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456 \u0434\u0430\u043d\u0456."}):(0,m.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438..."})},S=i.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}}; // ОНОВЛЕНО: Використано theme.colors
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використано spacing
  margin: ${e=>{let{theme:t}=e;return t.spacing.large}} 0; // ОНОВЛЕНО: Використано spacing
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  text-align: center;
  transition: all 0.25s ease-in-out;

  // Медіазапит для мобільних
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    margin: ${e=>{let{theme:t}=e;return t.spacing.medium}} 0;
  `}}

  h4 {
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}}; // ОНОВЛЕНО: Використано theme.colors
    transition: color 0.25s ease-in-out;

    // Медіазапит для мобільних
    ${e=>{let{theme:t}=e;return t.media.down("sm")`
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
    `}}
  }

  p {
    color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано theme.colors
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використано spacing
    transition: color 0.25s ease-in-out, font-size 0.25s ease-in-out;

    // Медіазапит для мобільних
    ${e=>{let{theme:t}=e;return t.media.down("sm")`
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
      margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
    `}}
  }
`,Y=i.Ay.img`
  max-width: 100%;
  height: auto;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: border-radius 0.25s ease-in-out;
`,B=i.Ay.p`
  font-style: italic;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано theme.colors
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}}; // ОНОВЛЕНО: Використано spacing
  transition: color 0.25s ease-in-out, font-size 0.25s ease-in-out;
`;const T=function(e){let{imageUrl:t,caption:r,altText:o}=e;return(0,m.jsxs)(S,{children:[t?(0,m.jsx)(Y,{src:t,alt:o||"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"}):(0,m.jsx)("p",{children:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0454."}),r&&(0,m.jsx)(B,{children:r})]})},R=(i.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out, background-color 0.25s ease-in-out,
    border-color 0.25s ease-in-out;

  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
  }
`,i.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}} ${e=>{let{theme:t}=e;return t.spacing.medium}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.accentBg}};
  color: ${e=>{let{theme:t}=e;return t.colors.buttonColor}};
  font-weight: bold;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
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
    transition: color 0.25s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.small}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  `}}
`,i.Ay.div`
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.6;
  transition: color 0.25s ease-in-out;

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    text-decoration: none;
    transition: color 0.25s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }

  .bible-quote {
    font-style: italic;
    color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}};
    padding-left: ${e=>{let{theme:t}=e;return t.spacing.small}};
    border-left: 2px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
    transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out;
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  `}}
`,i.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.interactiveBgLight}};
  border-left: 5px solid ${e=>{let{theme:t}=e;return t.colors.interactiveBorderLight}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  display: flex;
  align-items: flex-start;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out; // ДОДАНО: Переходи для фону, межі та тіні

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}}
`),E=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  line-height: 1;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    margin-right: 0;
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,I=i.Ay.div`
  flex-grow: 1;
`,O=i.Ay.h4`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  margin-top: 0;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  font-weight: bold;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору заголовка
`,D=e=>{let{title:t,content:r,emoji:o}=e;return(0,m.jsxs)(R,{children:[o&&(0,m.jsx)(E,{children:o}),(0,m.jsxs)(I,{children:[t&&(0,m.jsx)(O,{children:(0,m.jsx)(w.A,{tokens:t})}),r&&(0,m.jsx)("p",{children:(0,m.jsx)(w.A,{tokens:r})})]})]})};var q=r(3546),P=r(4119);const L=i.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.interactiveBgYellow}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.interactiveBorderYellow}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  margin: ${e=>{let{theme:t}=e;return t.spacing.large}} 0;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out; // ДОДАНО: Перехід для фону та рамки

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    margin: ${e=>{let{theme:t}=e;return t.spacing.medium}} 0;
  `}}
`,_=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  `}}
`,H=i.Ay.p`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору тексту
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  `}}
`,W=i.Ay.button`
  background-color: ${e=>{let{theme:t}=e;return t.colors.buttonBg}};
  color: ${e=>{let{theme:t}=e;return t.colors.buttonColor}};
  border: none;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.medium}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  cursor: pointer;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  font-weight: bold;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out; // ОНОВЛЕНО: Перехід для фону та тексту

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.hoverBtn}}; // ОНОВЛЕНО
    transition: background 0.25s ease-in-out;
  }
`,F=i.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-left: 3px solid ${e=>{let{theme:t}=e;return t.colors.successColor}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  font-style: italic;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  width: 100%;
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    color 0.25s ease-in-out; // ДОДАНО: Перехід для фону, рамки та тексту

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,V=e=>{let{question:t,answer:r,emoji:n}=e;const[i,s]=(0,o.useState)(!1);return(0,m.jsxs)(L,{children:[(0,m.jsx)(_,{children:n||"\u2753"}),(0,m.jsx)(H,{children:t}),r&&(0,m.jsx)(W,{onClick:()=>{s(!i)},children:i?"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c"}),(0,m.jsx)(q.N,{children:i&&r&&(0,m.jsx)(P.P.div,{initial:{height:0,opacity:0,overflow:"hidden"},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.25,ease:[.4,0,.2,1]},children:(0,m.jsx)(F,{children:r})})})]})},N=i.Ay.div`
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${e=>{let{theme:t}=e;return t.spacing.small}};

  ${e=>{let{theme:t}=e;return t.media.up("md")`
    padding: 0;
  `}}
`,K=i.Ay.h2`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  padding: 0;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  font-weight: bold;
  line-height: 1.3;
  transition: color 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  `}}
`,M=i.Ay.div`
  display: grid;
  // ОНОВЛЕНО: Використовуємо auto-fit для автоматичного перенесення карток
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${e=>{let{theme:t}=e;return t.spacing.large}};
  justify-content: center;
  align-items: stretch;

  ${e=>{let{theme:t}=e;return t.media.down("xl")`
    gap: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    gap: ${e=>{let{theme:t}=e;return t.spacing.small}};
  `}}
`,U=i.Ay.article`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground||t.colors.background}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.25s ease, background-color 0.25s ease-in-out, box-shadow 0.25s ease,
    border-color 0.25s ease-in-out;
  overflow: hidden;
  position: relative;
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder||t.colors.borderColor}};
  will-change: transform, box-shadow, height;
  outline: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.primaryColor}};
  }

  &:focus-within {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
    transform: translateY(-5px);
  }

  &[tabindex="0"]:focus-visible {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
    transform: translateY(-5px);
  }
`,Z=i.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,G=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  line-height: 1;
  filter: grayscale(10%);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`,X=i.Ay.h3`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin: 0;
  line-height: 1.3;
  transition: color 0.25s ease-in-out;
`,J=i.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  flex: 1;
  position: relative;
  width: 100%;
  transition: color 0.25s ease-in-out;

  padding-bottom: ${e=>{let{isExpanded:t}=e;return t?"5.5rem":"0"}};

  p {
    margin-bottom: 1em;
  }

  p:last-child {
    margin-bottom: 0;
  }
`,Q=i.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground||t.colors.background}};
  border-bottom-left-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}};
  border-bottom-right-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}};
  display: flex;
  justify-content: flex-start;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.small}};
  box-sizing: border-box;
  transition: background-color 0.25s ease-in-out;

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
          ${e=>{let{theme:t}=e;const r=t.colors.cardBackground||t.colors.background,o=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,r,o)=>"#"+t+t+r+r+o+o).substring(1).match(/.{2}/g).map(e=>parseInt(e,16));return o?o.join(","):"255,255,255"}},
          0
        )
        0%,
      rgba(
          ${e=>{let{theme:t}=e;const r=t.colors.cardBackground||t.colors.background,o=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,r,o)=>"#"+t+t+r+r+o+o).substring(1).match(/.{2}/g).map(e=>parseInt(e,16));return o?o.join(","):"255,255,255"}},
          0.9
        )
        100%
    );
    pointer-events: none;
  }
`,ee=i.Ay.button`
  background: none;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.colors.buttonBg}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  font-weight: 700;
  cursor: pointer;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} 0;
  align-self: flex-start;
  transition: color 0.25s ease-in-out, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  z-index: 1;

  &:hover {
    border: none;
    box-shadow: none;
    color: ${e=>{let{theme:t}=e;return t.colors.hoverBtn}};
    transform: ${e=>{let{isExpanded:t}=e;return t?"translateY(-2px)":"translateY(2px)"}};
  }
`,te=(e,t)=>{switch(t.type){case"ACTIVATE_ROW":return t.payload.rowIndex;case"DEACTIVATE_ROW":return null;default:return e}},re=160,oe=o.memo(e=>{let{card:t,index:r,isExpanded:n,toggleExpand:i,collapseCard:s,handleRowBlur:l}=e;const a=(0,o.useRef)(null),[c,d]=(0,o.useState)(!1),[u,h]=(0,o.useState)(re);return(0,o.useEffect)(()=>{const e=()=>{if(a.current){const{scrollHeight:e}=a.current;d(e>re),h(e>re?e:re)}};e(),window.addEventListener("resize",e);const t=setTimeout(e,150);return()=>{window.removeEventListener("resize",e),clearTimeout(t)}},[t.content]),(0,o.useEffect)(()=>{n&&a.current?h(a.current.scrollHeight):n||h(re)},[n]),(0,m.jsxs)(U,{onBlur:l,tabIndex:c?0:-1,"aria-expanded":n,children:[(0,m.jsxs)(Z,{children:[(0,m.jsx)(G,{role:"img","aria-label":`Emoji for ${t.title}`,children:t.emoji}),(0,m.jsx)(X,{children:(0,m.jsx)(w.A,{tokens:t.title})})]}),(0,m.jsx)(P.P.div,{layout:!0,initial:{height:re},animate:{height:n?u:re,opacity:1},transition:{duration:.25,ease:[.4,0,.2,1]},style:{overflow:"hidden",width:"100%"},children:(0,m.jsx)(J,{ref:a,isExpanded:n,id:`card-content-${r}`,children:(0,m.jsx)(w.A,{tokens:t.content})})}),c&&(0,m.jsx)(Q,{isExpanded:n,children:(0,m.jsx)(ee,{onClick:e=>{e.stopPropagation(),i(r)},"aria-controls":`card-content-${r}`,tabIndex:0,isExpanded:n,children:n?(0,m.jsx)(m.Fragment,{children:"\u0417\u0433\u043e\u0440\u043d\u0443\u0442\u0438"}):(0,m.jsx)(m.Fragment,{children:"\u0427\u0438\u0442\u0430\u0442\u0438 \u0434\u0430\u043b\u0456"})})})]})}),ne=e=>{let{title:t,cards:r}=e;const[n,i]=(0,o.useReducer)(te,null),[s,l]=(0,o.useState)(3),a=(0,o.useRef)(null),c=(0,o.useCallback)(()=>window.innerWidth<=768?1:window.innerWidth<=1200?2:3,[]);(0,o.useEffect)(()=>{const e=()=>{l(c()),i({type:"DEACTIVATE_ROW"})};return window.addEventListener("resize",e),l(c()),()=>{window.removeEventListener("resize",e)}},[c]);const d=(0,o.useCallback)(e=>{const t=Math.floor(e/s);i(n===t?{type:"DEACTIVATE_ROW"}:{type:"ACTIVATE_ROW",payload:{rowIndex:t}})},[n,s]),u=(0,o.useCallback)(e=>{a.current&&!a.current.contains(e.relatedTarget)&&i({type:"DEACTIVATE_ROW"})},[]),h=(0,o.useCallback)(e=>{i({type:"DEACTIVATE_ROW"})},[]);return(0,m.jsxs)(N,{children:[t&&(0,m.jsx)(K,{children:(0,m.jsx)(w.A,{tokens:t})}),(0,m.jsxs)(M,{ref:a,children:[" ",r.map((e,t)=>{const r=Math.floor(t/s),o=n===r;return(0,m.jsx)(oe,{card:e,index:t,isExpanded:o,toggleExpand:d,collapseCard:h,handleRowBlur:u},t)})]})]})},ie=i.Ay.ul`
  list-style-type: disc; // Або circle, square, none
  padding-left: 20px;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
`,se=i.Ay.li`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,le=e=>{let{title:t,items:r,heading:o}=e;return(0,m.jsxs)(m.Fragment,{children:[(t||o)&&(0,m.jsxs)(c.A,{as:o?"h4":"h3",size:o?"medium":"default",children:[t&&(0,m.jsx)(w.A,{tokens:t}),o&&(0,m.jsx)("span",{style:{display:"block"},children:(0,m.jsx)(w.A,{tokens:o})})]}),(0,m.jsx)(ie,{children:r.map((e,t)=>(0,m.jsx)(se,{children:(0,m.jsx)(w.A,{tokens:e})},t))})]})},ae=i.Ay.div`
  margin: ${e=>{let{theme:t}=e;return t.spacing.xlarge}} 0;
  position: relative;
  padding-left: 30px;
  padding-right: ${e=>{let{theme:t}=e;return t.spacing.small}};
  overflow-x: hidden;
  padding-bottom: 0;

  &::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${e=>{let{theme:t}=e;return t.colors.borderColor}};
    z-index: 0;
    transition: background-color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору лінії
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding-left: 20px;
    padding-right: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
    
    &::before {
      left: 9px;
    }
  `}}
`,ce=(i.Ay.div`
  display: none;
`,(0,i.Ay)(P.P.div)`
  position: relative;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}};
  padding-left: 30px;
  text-align: left;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding-left: 20px;
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  `}}
`),de=(0,i.Ay)(P.P.div)`
  position: absolute;
  left: 0;
  top: 5px;
  width: 12px;
  height: 12px;
  background-color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  border-radius: 50%;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  z-index: 1;
  transform-origin: center;
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out; // ДОДАНО: Перехід для кольорів точки

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    width: 10px;
    height: 10px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  `}}
`,ue=(0,i.Ay)(P.P.div)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out; // ДОДАНО: Перехід для фону і рамки
`,me=i.Ay.h4`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  margin: 0;
  font-weight: bold;
  line-height: 1.3;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору

  display: flex;

  // ✅ ВИПРАВЛЕННЯ: Змінюємо flex-direction на row
  & > div:first-of-type {
    flex-wrap: wrap; // Додаємо, щоб текст переносився на новий рядок, якщо не вміщається
    flex-grow: 1;
    margin-right: 10px;
  }

  & > span {
    flex-shrink: 0;
    line-height: 1.3;
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
    color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}};
    transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору іконки
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
    
    & > div:first-of-type {
        margin-right: 8px;
    }
    
    & > span {
        font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
    }
  `}}
`,he=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  white-space: nowrap;
  font-weight: normal;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xsmall}};
  `}}
`,pe=(i.Ay.p`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.5;
  margin-bottom: 0;
  word-wrap: break-word;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  `}}
`,i.Ay.div`
  padding-top: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.dividerColor}};
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  cursor: default;
  transition: border-top-color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору рамки

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    gap: 6px;
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
    padding-top: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  `}}
`),ge=(0,i.Ay)(P.P.div)`
  overflow: hidden;
`,xe=(0,i.Ay)(P.P.div)`
  padding-top: 0.8rem; /* Перемістили padding-top сюди */
  /* Зміни в opacity можна застосовувати тут, якщо потрібно */
`,fe=e=>{let{isOpen:t,children:r,...o}=e;return(0,m.jsx)(q.N,{initial:!1,children:t&&(0,m.jsx)(ge,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{height:"auto",opacity:1},collapsed:{height:0,opacity:0}},transition:{duration:.25,ease:[.4,0,.2,1]},layout:!0,...o,children:(0,m.jsx)(xe,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,delay:.1},children:r})})})},be=e=>{let{title:t,events:r}=e;const{currentTheme:n}=(0,A.D)(),[i,s]=(0,o.useState)(null),l=e=>{e.stopPropagation()};return(0,m.jsxs)(ae,{children:[t&&(0,m.jsx)(c.A,{as:"h3",size:"default",children:(0,m.jsx)(w.A,{tokens:t})}),r.map((e,t)=>(0,m.jsxs)(ce,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.5,delay:.1*t},children:[(0,m.jsx)(de,{animate:i===t?{scale:[1,1.2,1],backgroundColor:n.accentColor}:{scale:1,backgroundColor:n.accentColor},transition:{duration:.5,repeat:i===t?1/0:0,repeatType:"loop"}}),(0,m.jsxs)(ue,{onClick:()=>(e=>{s(i===e?null:e)})(t),whileHover:{scale:1.03},transition:{scale:{duration:.15,ease:"easeOut"},backgroundColor:{duration:.2,ease:"easeOut"}},animate:{scale:i===t?1.03:1,backgroundColor:i===t?n.hoverBg:n.cardBackground},children:[(0,m.jsxs)(me,{style:{cursor:"pointer"},children:[(0,m.jsxs)("div",{children:[e.year&&(0,m.jsx)(he,{children:e.year}),(0,m.jsx)(w.A,{tokens:e.title})]}),(0,m.jsx)(P.P.span,{initial:!1,animate:{rotate:i===t?90:0},transition:{duration:.2},style:{marginLeft:"10px",display:"inline-block"},children:"\u25b6"})]}),(0,m.jsxs)(fe,{isOpen:i===t,children:[e.description&&(0,m.jsx)("div",{style:{padding:"0 10px",fontSize:"0.9em"},children:Array.isArray(e.description)?e.description.map((e,t)=>(0,m.jsx)(w.A,{tokens:e},t)):(0,m.jsx)(w.A,{tokens:e.description})}),e.verses&&e.verses.length>0&&(0,m.jsx)(pe,{onClick:l,children:e.verses.map((e,t)=>(0,m.jsx)(w.A,{tokens:e},t))})]})]})]},t))]})},$e=i.Ay.div`
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing

  ${e=>{let{theme:t}=e;return t.media.up("sm")` // ОНОВЛЕНО: Використано медіазапит з теми
    padding: 0;
  `}}
`,ye=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використано spacing
  justify-content: center;
  align-items: stretch;
  width: 100%;
`,je=i.Ay.div`
  flex: 1 1 auto;
  max-width: calc(50% - ${e=>{let{theme:t}=e;return t.spacing.small}}); // ОНОВЛЕНО: Використано spacing

  display: flex;
  flex-direction: column;
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використано spacing
  box-sizing: border-box;

  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}}; // ОНОВЛЕНО: Використано borderRadius
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}}; // ОНОВЛЕНО: Використано shadows
  transition: all 0.25s ease-in-out;

  background-color: ${e=>"positive"===e.$type?e.theme.colors.positiveBackground:"negative"===e.$type?e.theme.colors.negativeBackground:"neutral1"===e.$type?e.theme.colors.neutralBackground1:"neutral2"===e.$type?e.theme.colors.neutralBackground2:e.theme.colors.cardBackground};
  border: 1px solid
    ${e=>"positive"===e.$type?e.theme.colors.positiveBorder:"negative"===e.$type?e.theme.colors.negativeBorder:"neutral1"===e.$type?e.theme.colors.neutralBorder1:"neutral2"===e.$type?e.theme.colors.neutralBorder2:e.theme.colors.borderColor};

  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}}; // ОНОВЛЕНО: Використано shadows
    transform: translateY(-2px);
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")` // ОНОВЛЕНО: Використано медіазапит з теми
    max-width: 100%;
  `}}
  min-width: 280px;
`,we=i.Ay.h4`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}}; // ОНОВЛЕНО: Використано fontSizes
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing

  flex-wrap: wrap;
  word-break: break-word;
  color: ${e=>"positive"===e.$type?e.theme.colors.positiveText:"negative"===e.$type?e.theme.colors.negativeText:"neutral1"===e.$type?e.theme.colors.neutralText1:"neutral2"===e.$type?e.theme.colors.neutralText2:e.theme.colors.color};
`,ke=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}}; // ОНОВЛЕНО: Використано fontSizes
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}}; // ОНОВЛЕНО: Використано spacing
`,ve=i.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використано fontSizes
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано theme.colors

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }
`,Ae=e=>{let{title:t,items:r}=e;return!r||r.length<2?null:(0,m.jsxs)($e,{children:[t&&(0,m.jsx)(c.A,{as:"h3",children:(0,m.jsx)(w.A,{tokens:t})}),(0,m.jsx)(ye,{children:r.map((e,t)=>(0,m.jsxs)(je,{$type:e.type,children:[(0,m.jsxs)(we,{$type:e.type,children:[e.emoji&&(0,m.jsx)(ke,{children:e.emoji}),(0,m.jsx)(w.A,{tokens:e.heading})]}),(0,m.jsx)(ve,{children:(0,m.jsx)(w.A,{tokens:e.content})})]},t))})]})},ze=i.Ay.section`
  margin: ${e=>{let{theme:t}=e;return t.spacing.large}} 0;
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column; /* За замовчуванням стовпець на мобільних */
  gap: ${e=>{let{theme:t}=e;return t.spacing.large}};
  align-items: center; /* Центрування елементів */
  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out; // ДОДАНО: Переходи для фону та тіні

  .content-area {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${e=>{let{theme:t}=e;return t.spacing.medium}};

    ${e=>{let{theme:t}=e;return t.media.up("md")`
      flex-direction: ${e=>{let{imagePosition:t}=e;return"left"===t?"row-reverse":"row"}};
      align-items: flex-start;
    `}}
  }

  h3 {
    text-align: center;
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
    color: ${e=>{let{theme:t}=e;return t.colors.color}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.extraLarge}};
    transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору заголовка

    ${e=>{let{theme:t}=e;return t.media.up("md")`
      text-align: left;
    `}}
  }
`,Ce=i.Ay.div`
  flex: 2;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору тексту

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору акцентного тексту
  }

  ${e=>{let{theme:t}=e;return t.media.up("md")`
    padding-right: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`,Se=i.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${e=>{let{theme:t}=e;return t.colors.secondaryBackground}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  padding-top: 0;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.extraSmall}};
  max-width: 100%;
  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out; // ДОДАНО: Переходи для фону та тіні

  ${e=>{let{theme:t}=e;return t.media.up("md")`
    max-width: 45%;
  `}}
`,Ye=i.Ay.img`
  max-width: 100%;
  height: auto;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.extraSmall}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,Be=i.Ay.figcaption`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.textColorLight}};
  line-height: 1.4;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору тексту
`,Te=e=>{let{title:t,content:r,imageUrl:o,altText:n,caption:i,imagePosition:s}=e;return r||o?(0,m.jsxs)(ze,{imagePosition:s,children:[t&&(0,m.jsx)(c.A,{as:"h3",children:t}),(0,m.jsxs)("div",{className:"content-area",children:[r&&(0,m.jsx)(Ce,{children:r.map((e,t)=>(0,m.jsx)(w.A,{tokens:e},t))}),o&&(0,m.jsxs)(Se,{children:[(0,m.jsx)(Ye,{src:o,alt:n}),i&&(0,m.jsx)(Be,{children:i})]})]})]}):null};var Re=r(8056);const Ee=function(e){let{lessonData:t}=e;if(!t)return(0,m.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443 \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438..."});const{title:r,author:o,book:n,chapter:i,verses:s,date:l,duration:h,theme:g,tags:x,description:f,sections:b}=t,$=e=>{switch(e.type){case"text":return(0,m.jsxs)(m.Fragment,{children:[e.title&&(0,m.jsx)(c.A,{as:e.subtitle?"h3":"h4",size:e.subtitle?"medium":"default",children:(0,m.jsx)(w.A,{tokens:e.title})}),e.subtitle&&(0,m.jsx)(c.A,{as:"h3",size:"small",children:(0,m.jsx)(w.A,{tokens:e.subtitle})}),e.content.map((e,t)=>(0,m.jsx)("p",{children:(0,m.jsx)(w.A,{tokens:e})},t))]});case"quiz":return(0,m.jsx)(d.A,{quizData:{...e,question:(0,m.jsx)(w.A,{tokens:e.question}),options:e.options.map(e=>({...e,text:(0,m.jsx)(w.A,{tokens:e.text}),rationale:(0,m.jsx)(w.A,{tokens:e.rationale})}))}},e.id);case"reveal-cards":return(0,m.jsxs)(m.Fragment,{children:[e.title&&(0,m.jsx)(c.A,{as:"h3",size:"default",children:(0,m.jsx)(w.A,{tokens:e.title})}),e.cards.map(e=>(0,m.jsx)(u.A,{id:e.id,emoji:e.emoji,title:e.title,content:e.content},e.id))]});case"highlight-box":return(0,m.jsx)(D,{...e});case"question-prompt":return(0,m.jsx)(V,{...e,question:(0,m.jsx)(w.A,{tokens:e.question}),answer:(0,m.jsx)(w.A,{tokens:e.answer})});case"list-cards":return(0,m.jsx)(ne,{...e});case"timeline":return(0,m.jsx)(be,{...e});case"contrast-section":return(0,m.jsx)(Ae,{...e});case"diagram":return(0,m.jsx)(C,{title:e.title,description:(0,m.jsx)(w.A,{tokens:e.description}),chartType:e.chartType,chartData:e.chartData,chartOptions:e.chartOptions},e.id);case"image-placeholder":return(0,m.jsx)(T,{imageUrl:e.imageUrl,altText:e.altText,caption:(0,m.jsx)(w.A,{tokens:e.caption})},e.id);case"description-with-image":return(0,m.jsx)(Te,{...e,title:(0,m.jsx)(w.A,{tokens:e.title}),content:e.content,caption:(0,m.jsx)(w.A,{tokens:e.caption})},e.id);case"list":return(0,m.jsx)(le,{...e});default:return console.warn("\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0441\u0435\u043a\u0446\u0456\u0457:",e.type),null}};return(0,m.jsxs)(Re.Sg,{children:[(0,m.jsxs)(Re.ae,{children:[(0,m.jsx)("h2",{children:(0,m.jsx)(w.A,{tokens:r})}),(0,m.jsx)(p,{author:o,book:n,chapter:i,verses:s,date:l,duration:h,theme:g,tags:x})]}),(0,m.jsx)(Re.IZ,{children:(0,m.jsx)(a.A,{children:(0,m.jsxs)(Re.tG,{children:[(0,m.jsx)(Re.yO,{children:(0,m.jsx)(w.A,{tokens:f})}),b.map((e,t)=>(0,m.jsx)(Re.nA,{children:$(e)},t))]})})})]})};var Ie=r(6841),Oe=r(5003),De=r(6139);const qe=/\[bold:(.*?)]/,Pe=/\[italic:(.*?)]/,Le=/\[verse:([a-z0-9_]+(?::[\d:,-]+)*):([^\]]+)]/,_e=/\[link:([^:]+):([^\]]+)]/,He=/\[img:([^:]+):([^:]+):([^\]]+)]/,We=/\[highlight:(.*?)]/,Fe=/\[quote:(.*?)]/,Ve=e=>{if("string"!==typeof e)return e;const t=new RegExp(`(${qe.source}|${Pe.source}|${Le.source}|${_e.source}|${He.source}|${We.source}|${Fe.source})`,"gi"),r=[];let o,n=0;for(;null!==(o=t.exec(e));){const t=e.slice(n,o.index);t&&r.push(t);const i=o[0];let s=null;if(qe.test(i)){const e=i.match(qe)[1];s={type:"bold",content:Ve(e)}}else if(Pe.test(i)){const e=i.match(Pe)[1];s={type:"italic",content:Ve(e)}}else if(We.test(i)){const e=i.match(We)[1];s={type:"highlight",content:Ve(e)}}else if(Fe.test(i)){const e=i.match(Fe)[1];s={type:"quote",content:Ve(e)}}else if(Le.test(i)){const e=i.match(Le);s={type:"bible-link",bibleRef:e[1],content:e[2]}}else if(_e.test(i)){const e=i.match(_e);s={type:"link",url:e[1],content:Ve(e[2])}}else if(He.test(i)){const e=i.match(He);s={type:"image",url:e[1],alt:e[2],caption:Ve(e[3])}}s&&r.push(s),n=o.index+i.length}const i=e.slice(n);return i&&r.push(i),r};var Ne=r(2016);const Ke=Ne.RZ(()=>Ne.KC([Ne.Yj(),Ne.YO(Ne.KC([Ne.Yj(),Ne.Ik({type:Ne.eu("bold"),content:Ke}),Ne.Ik({type:Ne.eu("italic"),content:Ke}),Ne.Ik({type:Ne.eu("bible-link"),bibleRef:Ne.Yj(),content:Ne.Yj()}),Ne.Ik({type:Ne.eu("link"),url:Ne.Yj(),content:Ke}),Ne.Ik({type:Ne.eu("image"),url:Ne.Yj(),alt:Ne.Yj(),caption:Ke}),Ne.Ik({type:Ne.eu("highlight"),content:Ke}),Ne.Ik({type:Ne.eu("quote"),content:Ke})]))])),Me=Ne.Ik({type:Ne.Yj(),title:Ke.optional()}),Ue=Me.extend({type:Ne.eu("text"),subtitle:Ke.optional(),content:Ne.YO(Ke)}),Ze=Me.extend({type:Ne.eu("list"),heading:Ke.optional(),items:Ne.YO(Ke)}),Ge=Me.extend({type:Ne.eu("list-cards"),cards:Ne.YO(Ne.Ik({title:Ke,content:Ke,emoji:Ne.Yj().optional()}))}),Xe=Me.extend({type:Ne.eu("highlight-box"),content:Ke,emoji:Ne.Yj().optional()}),Je=Me.extend({type:Ne.eu("question-prompt"),question:Ke,answer:Ke.optional(),emoji:Ne.Yj().optional()}),Qe=Me.extend({type:Ne.eu("list-cards"),cards:Ne.YO(Ne.Ik({title:Ke.optional(),content:Ke,emoji:Ne.Yj().optional()}))}),et=Me.extend({type:Ne.eu("timeline"),events:Ne.YO(Ne.Ik({year:Ne.Yj().optional(),title:Ke,description:Ke.optional(),verses:Ne.YO(Ke).optional()}))}),tt=Me.extend({type:Ne.eu("reveal-cards"),cards:Ne.YO(Ne.Ik({id:Ne.Yj(),emoji:Ne.Yj().optional(),title:Ke.optional(),content:Ke}))}),rt=Me.extend({type:Ne.eu("quiz"),id:Ne.Yj(),question:Ke,options:Ne.YO(Ne.Ik({text:Ke,isCorrect:Ne.zM(),rationale:Ke.optional()})),hint:Ke.optional()}),ot=Me.extend({type:Ne.eu("diagram"),chartType:Ne.Yj(),description:Ke.optional(),chartData:Ne.bz(),chartOptions:Ne.bz()}),nt=Me.extend({type:Ne.eu("image-placeholder"),description:Ke.optional(),imageUrl:Ne.Yj(),altText:Ne.Yj().optional(),caption:Ke.optional()}),it=Me.extend({type:Ne.eu("description-with-image"),content:Ne.YO(Ke),imageUrl:Ne.Yj(),altText:Ne.Yj().optional(),caption:Ke.optional(),imagePosition:Ne.Yj().optional()}),st=Me.extend({type:Ne.eu("contrast-section"),items:Ne.YO(Ne.Ik({heading:Ke,content:Ke,emoji:Ne.Yj().optional(),type:Ne.Yj()}))}),lt=Ne.Ik({id:Ne.Yj(),title:Ke,shortTitle:Ne.Yj(),book:Ne.Yj(),bookInternalKey:Ne.Yj(),chapter:Ne.Yj(),verses:Ne.Yj(),date:Ne.Yj(),author:Ne.Yj(),duration:Ne.Yj(),tags:Ne.YO(Ne.Yj()),description:Ke.optional(),sections:Ne.YO(Ne.KC([Ue,Ge,Ze,Xe,Je,Qe,et,tt,rt,ot,nt,it,st]))}),at=["title","shortTitle","description","content","question","answer","text","heading","caption","rationale","verses","items","subtitle"],ct=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"===typeof e){if(at.includes(t)){const t=Ve(e);return Array.isArray(t)?t:[t]}return e}if(Array.isArray(e))return e.map(e=>ct(e,t));if("object"===typeof e&&null!==e){const t={};for(const r in e)t[r]=ct(e[r],r);return t}return e},dt=()=>{const{mainRef:e}=(0,n.KC)(),{selectedHomeGroupLesson:t,setSelectedHomeGroupLesson:r}=(0,Oe.t)(),[i,a]=(0,o.useState)(null),[c,d]=(0,o.useState)(null),[u,h]=(0,o.useState)(!0),p=(0,n.zy)(),g=(0,o.useRef)(!0);return(0,o.useEffect)(()=>{if(!t){const e=(()=>{for(const e of De.Z)if("old-testament-books"===e.id||"new-testament-books"===e.id){const t="old-testament-books"===e.id?De.j9:De.oC;for(const e of t){const t=Ie.H[e.internalKey];if(t&&t.length>0)return t[0].id}}else if("thematic"===e.type||"special"===e.type){const t=Ie.H[e.id];if(t&&t.length>0)return t[0].id}return null})();e?r(e):h(!1)}},[t,r]),(0,o.useEffect)(()=>{const r=async()=>{h(!0),a(null),d(null),e&&e.current&&!g.current&&(e.current.scrollTop=0);const r=(e=>{if(!e)return null;for(const t in Ie.H){const r=Ie.H[t];if(r){const t=r.find(t=>t.id===e);if(t)return t}}return null})(t);if(r&&r.loadLesson)try{const e=(await r.loadLesson()).default,{success:t,lesson:o,error:n}=(e=>{try{const t=lt.parse(e);return{success:!0,lesson:ct(t,"lesson"),error:null}}catch(c){return console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u0457 \u0443\u0440\u043e\u043a\u0443:",c.message),{success:!1,lesson:null,error:c.message}}})(e);t?a(o):(d(`\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u0457 \u0443\u0440\u043e\u043a\u0443: ${n}`),a(null))}catch(c){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0430\u0431\u043e \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0443 \u0443\u0440\u043e\u043a\u0443:",c),d("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0443\u0440\u043e\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0435."),a(null)}finally{h(!1)}else h(!1),a(null),d("\u0423\u0440\u043e\u043a \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e.")};t&&r()},[t,e]),(0,o.useEffect)(()=>{if(i&&e&&e.current){const t=sessionStorage.getItem(`scrollPosition-${p.pathname}`);if(t&&g.current){const r=parseInt(t,10);e.current.scrollTop=r}g.current=!1}},[i,e,p.pathname]),(0,m.jsx)(s,{children:u?(0,m.jsx)(l,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443..."}):c?(0,m.jsx)(l,{children:c}):i?(0,m.jsx)(Ee,{lessonData:i}):(0,m.jsx)(l,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0443\u0440\u043e\u043a \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432 \u043c\u0435\u043d\u044e."})})};function ut(){return(0,m.jsx)(dt,{})}}}]);
//# sourceMappingURL=2941.0968d008.chunk.js.map
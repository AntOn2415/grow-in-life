"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[838],{505:(e,t,r)=>{r.d(t,{A:()=>m});var o=r(5043),n=r(4574);const l=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out, background-color 0.4s ease-in-out,
    border-color 0.4s ease-in-out; // ДОДАНО: Переходи для фону та межі

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
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out; // ДОДАНО: Переходи для фону та тексту

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
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору посилання
    &:hover {
      text-decoration: underline;
    }
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.small}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  `}}
`,s=n.Ay.div`
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.6;
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору тексту

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    text-decoration: none;
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору посилання
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
    transition: color 0.4s ease-in-out, border-color 0.4s ease-in-out; // ДОДАНО: Переходи для тексту та межі
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
`;var c=r(579);function d(e){let{isActive:t,onClick:r}=e;return(0,c.jsxs)(a,{onClick:r,isActive:t,children:[t?"\u25b2":"\u25bc"," "]})}function m(e){let{cardData:t}=e;const[r,n]=(0,o.useState)(!1),a=()=>n(!r);return(0,c.jsxs)(l,{children:[(0,c.jsxs)(i,{onClick:a,children:[t.emoji,(0,c.jsx)("span",{children:t.title}),(0,c.jsx)(d,{isActive:r,onClick:a})]}),r&&(0,c.jsx)(s,{children:t.content})]})}},1441:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);var o=r(4574);o.Ay.section`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}}; // ОНОВЛЕНО: Використано borderRadius
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}}; // ОНОВЛЕНО: Використано shadows
  padding: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing

  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

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
  transition: color 0.4s ease-in-out;

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
`;var l=r(579);const i=e=>{let{as:t="h3",size:r="default",children:o}=e;return(0,l.jsxs)(n,{as:t,size:r,children:[o," "]})}},2099:(e,t,r)=>{r.d(t,{A:()=>l});r(5043);const o=r(4574).Ay.section`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}}; // ОНОВЛЕНО: Використано borderRadius
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}}; // ОНОВЛЕНО: Використано shadows
  padding: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing

  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`;var n=r(579);function l(e){let{children:t}=e;return(0,n.jsx)(o,{children:t})}},4838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ce});var o=r(5043),n=r(4574);const l=n.Ay.div`
  margin: 0;
  //padding: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використано theme.spacing
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  transition: background-color 0.4s ease-in-out;
`,i=n.Ay.p`
  text-align: center;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.xxlarge}}; // ОНОВЛЕНО: Використано theme.spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використано theme.fontSizes
  color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}}; // ОНОВЛЕНО: Використано theme.colors
`;var s=r(2099),a=r(1441),c=r(8763),d=r(505),m=r(579);const u=n.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}}; // ОНОВЛЕНО: Використовуємо fontSizes
  color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}}; // ОНОВЛЕНО: Використовуємо theme.colors
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використовуємо spacing
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
`;const h=function(e){let{author:t,book:r,chapter:o,verses:n,date:l,duration:i,theme:s,tags:a}=e;return(0,m.jsxs)(u,{children:[t&&(0,m.jsxs)("p",{children:["\u0410\u0432\u0442\u043e\u0440: ",(0,m.jsx)("span",{children:t})]}),(r||o||n)&&(0,m.jsxs)("p",{children:["\u041a\u043d\u0438\u0433\u0430:"," ",(0,m.jsxs)("span",{children:[r," ",o?`\u0433\u043b\u0430\u0432\u0430 ${o}`:"",n?`, \u0432\u0456\u0440\u0448\u0456 ${n}`:""]})]}),l&&(0,m.jsxs)("p",{children:["\u0414\u0430\u0442\u0430: ",(0,m.jsx)("span",{children:l})]}),i&&(0,m.jsxs)("p",{children:["\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c: ",(0,m.jsx)("span",{children:i})]}),s&&(0,m.jsxs)("p",{children:["\u0422\u0435\u043c\u0430: ",(0,m.jsx)("span",{children:s})]}),a&&a.length>0&&(0,m.jsx)("div",{className:"lesson-tags",children:a.map((e,t)=>(0,m.jsx)("span",{children:e},t))})]})},g=n.Ay.div`
  width: 100%;
  max-width: 950px; /* ✅ Збільште це значення, якщо діаграма та легенда не вміщуються */
  height: 450px; /* ✅ Фіксована висота для всього контейнера */
  margin: ${e=>{let{theme:t}=e;return t.spacing.medium}} auto;
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out; // ДОДАНО: Переходи для кольорів

  // Медіазапити для адаптації на мобільних
  ${e=>{let{theme:t}=e;return t.media.down("md")`
    height: 300px;
    margin: ${e=>{let{theme:t}=e;return t.spacing.small}} auto;
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`;var p=r(6058),x=r(7304),$=r(7695);x.t1.register(x.PP,x.kc,x.FN,x.No,x.E8,x.Bs,x.pr,x.hE,x.m_,x.s$,x.dN);const b=(e,t,r)=>{switch(e){case"line":return(0,m.jsx)(p.N1,{data:t,options:r});case"bar":return(0,m.jsx)(p.yP,{data:t,options:r});case"pie":return(0,m.jsx)(p.Fq,{data:t,options:r});case"doughnut":return(0,m.jsx)(p.nu,{data:t,options:r});case"polarArea":return(0,m.jsx)(p.O5,{data:t,options:r});case"radar":return(0,m.jsx)(p.Vd,{data:t,options:r});case"bubble":return(0,m.jsx)(p.Zh,{data:t,options:r});case"scatter":return(0,m.jsx)(p.Xl,{data:t,options:r});default:return(0,m.jsxs)("p",{children:["\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438: ",e]})}};const f=function(e){let{title:t,description:r,chartType:n,chartData:l,chartOptions:i}=e;const{currentTheme:s}=(0,$.D)(),a=(0,o.useMemo)(()=>((e,t,r)=>{if(!e||!e.datasets)return e;if(!t||!t.colors)return e;const o={...e};return o.datasets=o.datasets.map(e=>{const o={...e},n=[t.colors.accentColor,t.colors.navActive,t.colors.accentBg,t.colors.color,t.colors.navBg,t.colors.background,t.colors.borderColor,t.colors.interactiveBgLight,t.colors.interactiveBorderLight,t.colors.interactiveBgYellow,t.colors.interactiveBorderYellow,t.colors.buttonBg,t.colors.successColor,t.colors.dangerColor];if(o.backgroundColor&&0!==o.backgroundColor.length&&"dynamic"!==o.backgroundColor)Array.isArray(o.backgroundColor)&&(o.backgroundColor=o.backgroundColor.map((e,t)=>"dynamic"===e?n[t%n.length]:e),o.borderColor||(o.borderColor=t.colors.borderColor));else if("pie"===r||"doughnut"===r||"polarArea"===r){const e=o.data.length;o.backgroundColor=Array.from({length:e},(e,t)=>n[t%n.length]),o.borderColor=t.colors.borderColor}else o.backgroundColor=t.colors.accentColor+"B3",o.borderColor=t.colors.accentColor;return"dynamic"===o.pointBackgroundColor&&(o.pointBackgroundColor=t.colors.accentColor),"dynamic"===o.pointBorderColor&&(o.pointBorderColor=t.colors.color),"dynamic"===o.hoverBackgroundColor&&(o.hoverBackgroundColor=t.colors.hoverBg),"dynamic"===o.hoverBorderColor&&(o.hoverBorderColor=t.colors.borderColor),!0===o.fill&&(o.backgroundColor=t.colors.accentBg+"50"),o}),o})(l,s,n),[l,s,n]),c=(0,o.useMemo)(()=>((e,t)=>{var r,o,n,l,i,s,a,c;let d={...e,responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:5,right:40,top:10,bottom:5}},plugins:{...e.plugins,legend:{display:!["pie","doughnut"].includes(e.chartType),labels:{color:null===(r=t.colors)||void 0===r?void 0:r.color,font:{size:12},boxWidth:20,padding:10},position:"right",align:"center"},tooltip:{...null===(o=e.plugins)||void 0===o?void 0:o.tooltip,bodyFont:{size:12},titleFont:{size:14}}},scales:{...e.scales,y:{...null===(n=e.scales)||void 0===n?void 0:n.y,border:{display:!1},ticks:{display:!1,color:null===(l=t.colors)||void 0===l?void 0:l.color,font:{size:10}},grid:{display:!1,color:((null===(i=t.colors)||void 0===i?void 0:i.borderColor)||"#D3D3D3")+"80"}},x:{...null===(s=e.scales)||void 0===s?void 0:s.x,border:{display:!1},ticks:{display:!1,color:null===(a=t.colors)||void 0===a?void 0:a.color,font:{size:10}},grid:{display:!1,color:((null===(c=t.colors)||void 0===c?void 0:c.borderColor)||"#D3D3D3")+"80"}}}};return["doughnut","pie"].includes(e.chartType)&&(d.cutout=e.cutout||"70%"),d.plugins||(d.plugins={}),d})({...i,chartType:n},s),[i,s,n]),d=(0,o.useMemo)(()=>{var e;if(!a||!a.labels||!a.datasets||0===a.datasets.length)return[];const t=(null===(e=a.datasets[0])||void 0===e?void 0:e.backgroundColor)||[];return a.labels.map((e,r)=>({text:e,color:Array.isArray(t)?t[r%t.length]:t}))},[a]);return s?(0,m.jsxs)(g,{children:[t&&(0,m.jsx)("h4",{children:t}),r&&(0,m.jsx)("p",{children:r}),(0,m.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"100%",height:"100%"},children:[(0,m.jsxs)("div",{style:{flexGrow:1,minWidth:"0",maxWidth:"calc(100% - 320px)"},children:[" ",b(n,a,c)]}),(0,m.jsx)("div",{style:{width:"320px",flexShrink:0,paddingLeft:"15px",overflowY:"auto",maxHeight:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},children:d.map((e,t)=>(0,m.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",marginBottom:"8px"},children:[(0,m.jsx)("span",{style:{display:"inline-block",minWidth:"15px",height:"15px",backgroundColor:e.color,marginRight:"8px",marginTop:"3px",borderRadius:"3px"}}),(0,m.jsx)("span",{style:{color:s.color,fontSize:"13px",wordBreak:"break-word",wordWrap:"break-word",whiteSpace:"normal",lineHeight:"1.3"},children:e.text})]},t))})]}),!t&&!r&&!l&&(0,m.jsx)("p",{children:"\u0414\u0456\u0430\u0433\u0440\u0430\u043c\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f \u0430\u0431\u043e \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456 \u0434\u0430\u043d\u0456."})]}):(0,m.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438..."})},y=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}}; // ОНОВЛЕНО: Використано theme.colors
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використано spacing
  margin: ${e=>{let{theme:t}=e;return t.spacing.large}} 0; // ОНОВЛЕНО: Використано spacing
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  text-align: center;
  transition: all 0.4s ease-in-out;

  // Медіазапит для мобільних
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    margin: ${e=>{let{theme:t}=e;return t.spacing.medium}} 0;
  `}}

  h4 {
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}}; // ОНОВЛЕНО: Використано theme.colors
    transition: color 0.4s ease-in-out;

    // Медіазапит для мобільних
    ${e=>{let{theme:t}=e;return t.media.down("sm")`
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
    `}}
  }

  p {
    color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано theme.colors
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використано spacing
    transition: color 0.4s ease-in-out, font-size 0.4s ease-in-out;

    // Медіазапит для мобільних
    ${e=>{let{theme:t}=e;return t.media.down("sm")`
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
      margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
    `}}
  }
`,w=n.Ay.img`
  max-width: 100%;
  height: auto;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: border-radius 0.4s ease-in-out;
`,v=n.Ay.p`
  font-style: italic;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано theme.colors
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}}; // ОНОВЛЕНО: Використано spacing
  transition: color 0.4s ease-in-out, font-size 0.4s ease-in-out;
`;const z=function(e){let{imageUrl:t,caption:r,altText:o}=e;return(0,m.jsxs)(y,{children:[t?(0,m.jsx)(w,{src:t,alt:o||"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"}):(0,m.jsx)("p",{children:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0454."}),r&&(0,m.jsx)(v,{children:r})]})},j=(n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out, background-color 0.4s ease-in-out,
    border-color 0.4s ease-in-out;

  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
  }
`,n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}} ${e=>{let{theme:t}=e;return t.spacing.medium}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.accentBg}};
  color: ${e=>{let{theme:t}=e;return t.colors.buttonColor}};
  font-weight: bold;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  cursor: pointer;
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;

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
    transition: color 0.4s ease-in-out;
    &:hover {
      text-decoration: underline;
    }
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.small}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  `}}
`,n.Ay.div`
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.6;
  transition: color 0.4s ease-in-out;

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    text-decoration: none;
    transition: color 0.4s ease-in-out;
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
    transition: color 0.4s ease-in-out, border-color 0.4s ease-in-out;
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  `}}
`,n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.interactiveBgLight}};
  border-left: 5px solid ${e=>{let{theme:t}=e;return t.colors.interactiveBorderLight}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  margin: ${e=>{let{theme:t}=e;return t.spacing.large}} 0;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  display: flex;
  align-items: flex-start;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out; // ДОДАНО: Переходи для фону, межі та тіні

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}}
`),k=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  line-height: 1;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    margin-right: 0;
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,A=n.Ay.div`
  flex-grow: 1;
`,C=n.Ay.h4`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  margin-top: 0;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  font-weight: bold;
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору заголовка
`,S=e=>{let{title:t,content:r,emoji:o}=e;return(0,m.jsxs)(j,{children:[o&&(0,m.jsx)(k,{children:o}),(0,m.jsxs)(A,{children:[t&&(0,m.jsx)(C,{children:t}),r&&(0,m.jsx)("p",{children:r})]})]})};var B=r(3546),R=r(6446);const T=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.interactiveBgYellow}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.interactiveBorderYellow}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  margin: ${e=>{let{theme:t}=e;return t.spacing.large}} 0;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out; // ДОДАНО: Перехід для фону та рамки

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
    margin: ${e=>{let{theme:t}=e;return t.spacing.medium}} 0;
  `}}
`,E=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  `}}
`,D=n.Ay.p`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору тексту

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  `}}
`,O=n.Ay.button`
  background-color: ${e=>{let{theme:t}=e;return t.colors.buttonBg}};
  color: ${e=>{let{theme:t}=e;return t.colors.buttonColor}};
  border: none;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.medium}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  cursor: pointer;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  font-weight: bold;
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out; // ОНОВЛЕНО: Перехід для фону та тексту

  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.hoverBtn}}; // ОНОВЛЕНО
    transition: background 0.3s ease-in-out;
  }
`,P=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-left: 3px solid ${e=>{let{theme:t}=e;return t.colors.successColor}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  font-style: italic;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  width: 100%;
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out,
    color 0.4s ease-in-out; // ДОДАНО: Перехід для фону, рамки та тексту

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,I=e=>{let{question:t,answer:r,emoji:n}=e;const[l,i]=(0,o.useState)(!1);return(0,m.jsxs)(T,{children:[(0,m.jsx)(E,{children:n||"\u2753"}),(0,m.jsx)(D,{children:t}),r&&(0,m.jsx)(O,{onClick:()=>{i(!l)},children:l?"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c"}),(0,m.jsx)(B.N,{children:l&&r&&(0,m.jsx)(R.P.div,{initial:{height:0,opacity:0,overflow:"hidden"},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:[.4,0,.2,1]},children:(0,m.jsx)(P,{children:r})})})]})},H=n.Ay.div`
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${e=>{let{theme:t}=e;return t.spacing.small}};

  ${e=>{let{theme:t}=e;return t.media.up("md")`
    padding: 0;
  `}}
`,L=n.Ay.h2`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  padding: 0;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  font-weight: bold;
  line-height: 1.3;
  transition: color 0.4s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  `}}
`,W=n.Ay.div`
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
`,F=n.Ay.article`
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground||t.colors.background}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.large}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: transform 0.25s ease, background-color 0.4s ease-in-out, box-shadow 0.25s ease,
    border-color 0.4s ease-in-out;
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
`,Y=n.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,_=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  line-height: 1;
  filter: grayscale(10%);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`,q=n.Ay.h3`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin: 0;
  line-height: 1.3;
  transition: color 0.4s ease-in-out;
`,V=n.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  flex: 1;
  position: relative;
  width: 100%;
  transition: color 0.4s ease-in-out;

  padding-bottom: ${e=>{let{isExpanded:t}=e;return t?"5.5rem":"0"}};

  p {
    margin-bottom: 1em;
  }

  p:last-child {
    margin-bottom: 0;
  }
`,N=n.Ay.div`
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
  transition: background-color 0.4s ease-in-out;

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
`,U=n.Ay.button`
  background: none;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.colors.buttonBg}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  font-weight: 700;
  cursor: pointer;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} 0;
  align-self: flex-start;
  transition: color 0.4s ease-in-out, transform 0.2s ease;
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
`,G=(e,t)=>{switch(t.type){case"ACTIVATE_ROW":return t.payload.rowIndex;case"DEACTIVATE_ROW":return null;default:return e}},M=160,Z=o.memo(e=>{let{card:t,index:r,isExpanded:n,toggleExpand:l,collapseCard:i,handleRowBlur:s}=e;const a=(0,o.useRef)(null),[c,d]=(0,o.useState)(!1),[u,h]=(0,o.useState)(M);return(0,o.useEffect)(()=>{const e=()=>{if(a.current){const{scrollHeight:e}=a.current;d(e>M),h(e>M?e:M)}};e(),window.addEventListener("resize",e);const t=setTimeout(e,150);return()=>{window.removeEventListener("resize",e),clearTimeout(t)}},[t.content]),(0,o.useEffect)(()=>{n&&a.current?h(a.current.scrollHeight):n||h(M)},[n]),(0,m.jsxs)(F,{onBlur:s,tabIndex:c?0:-1,"aria-expanded":n,children:[(0,m.jsxs)(Y,{children:[(0,m.jsx)(_,{role:"img","aria-label":`Emoji for ${t.title}`,children:t.emoji}),(0,m.jsx)(q,{children:t.title})]}),(0,m.jsx)(R.P.div,{layout:!0,initial:{height:M},animate:{height:n?u:M,opacity:1},transition:{duration:.25,ease:[.4,0,.2,1]},style:{overflow:"hidden",width:"100%"},children:(0,m.jsx)(V,{ref:a,isExpanded:n,id:`card-content-${r}`,children:t.content})}),c&&(0,m.jsx)(N,{isExpanded:n,children:(0,m.jsx)(U,{onClick:e=>{e.stopPropagation(),l(r)},"aria-controls":`card-content-${r}`,tabIndex:0,isExpanded:n,children:n?(0,m.jsx)(m.Fragment,{children:"\u0417\u0433\u043e\u0440\u043d\u0443\u0442\u0438"}):(0,m.jsx)(m.Fragment,{children:"\u0427\u0438\u0442\u0430\u0442\u0438 \u0434\u0430\u043b\u0456"})})})]})}),X=e=>{let{title:t,cards:r}=e;const[n,l]=(0,o.useReducer)(G,null),[i,s]=(0,o.useState)(3),a=(0,o.useRef)(null),c=(0,o.useCallback)(()=>window.innerWidth<=768?1:window.innerWidth<=1200?2:3,[]);(0,o.useEffect)(()=>{const e=()=>{s(c()),l({type:"DEACTIVATE_ROW"})};return window.addEventListener("resize",e),s(c()),()=>{window.removeEventListener("resize",e)}},[c]);const d=(0,o.useCallback)(e=>{const t=Math.floor(e/i);l(n===t?{type:"DEACTIVATE_ROW"}:{type:"ACTIVATE_ROW",payload:{rowIndex:t}})},[n,i]),u=(0,o.useCallback)(e=>{a.current&&!a.current.contains(e.relatedTarget)&&l({type:"DEACTIVATE_ROW"})},[]),h=(0,o.useCallback)(e=>{l({type:"DEACTIVATE_ROW"})},[]);return(0,m.jsxs)(H,{children:[t&&(0,m.jsx)(L,{children:t}),(0,m.jsxs)(W,{ref:a,children:[" ",r.map((e,t)=>{const r=Math.floor(t/i),o=n===r;return(0,m.jsx)(Z,{card:e,index:t,isExpanded:o,toggleExpand:d,collapseCard:h,handleRowBlur:u},t)})]})]})},J=n.Ay.div`
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
    transition: background-color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору лінії
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding-left: 20px;
    padding-right: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
    
    &::before {
      left: 9px;
    }
  `}}
`,K=(n.Ay.div`
  display: none;
`,(0,n.Ay)(R.P.div)`
  position: relative;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}};
  padding-left: 30px;
  text-align: left;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding-left: 20px;
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  `}}
`),Q=(0,n.Ay)(R.P.div)`
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
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out; // ДОДАНО: Перехід для кольорів точки

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    width: 10px;
    height: 10px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  `}}
`,ee=(0,n.Ay)(R.P.div)`
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
  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out; // ДОДАНО: Перехід для фону і рамки
`,te=n.Ay.h4`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  margin: 0;
  font-weight: bold;
  line-height: 1.3;
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    margin-right: 10px;
  }

  & > span {
    flex-shrink: 0;
    line-height: 1.3;
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
    color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}};
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору іконки
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
`,re=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  white-space: nowrap;
  font-weight: normal;
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xsmall}};
  `}}
`,oe=n.Ay.p`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.5;
  margin-bottom: 0;
  word-wrap: break-word;
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  `}}
`,ne=n.Ay.div`
  padding-top: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.colors.dividerColor}};
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  cursor: default;
  transition: border-top-color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору рамки

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    gap: 6px;
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
    padding-top: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  `}}
`,le=(0,n.Ay)(R.P.div)`
  overflow: hidden;
`,ie=(0,n.Ay)(R.P.div)`
  padding-top: 0.8rem; /* Перемістили padding-top сюди */
  /* Зміни в opacity можна застосовувати тут, якщо потрібно */
`,se=e=>{let{isOpen:t,children:r,...o}=e;return(0,m.jsx)(B.N,{initial:!1,children:t&&(0,m.jsx)(le,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{height:"auto",opacity:1},collapsed:{height:0,opacity:0}},transition:{duration:.25,ease:[.4,0,.2,1]},layout:!0,...o,children:(0,m.jsx)(ie,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,delay:.1},children:r})})})},ae=e=>{let{title:t,events:r}=e;const{currentTheme:n}=(0,$.D)(),[l,i]=(0,o.useState)(null),s=e=>{e.stopPropagation()};return(0,m.jsxs)(J,{children:[t&&(0,m.jsx)(a.A,{as:"h3",size:"default",children:t}),r.map((e,t)=>(0,m.jsxs)(K,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.5,delay:.1*t},children:[(0,m.jsx)(Q,{animate:l===t?{scale:[1,1.2,1],backgroundColor:n.accentColor}:{scale:1,backgroundColor:n.accentColor},transition:{duration:.5,repeat:l===t?1/0:0,repeatType:"loop"}}),(0,m.jsxs)(ee,{onClick:()=>(e=>{i(l===e?null:e)})(t),whileHover:{scale:1.03},transition:{scale:{duration:.15,ease:"easeOut"},backgroundColor:{duration:.2,ease:"easeOut"}},animate:{scale:l===t?1.03:1,backgroundColor:l===t?n.hoverBg:n.cardBackground},children:[(0,m.jsxs)(te,{style:{cursor:"pointer"},children:[(0,m.jsxs)("div",{children:[e.year&&(0,m.jsx)(re,{children:e.year}),e.title]}),(0,m.jsx)(R.P.span,{initial:!1,animate:{rotate:l===t?90:0},transition:{duration:.2},style:{marginLeft:"10px",display:"inline-block"},children:"\u25b6"})]}),(0,m.jsxs)(se,{isOpen:l===t,children:[e.description&&(0,m.jsx)(oe,{children:e.description}),e.verses&&e.verses.length>0&&(0,m.jsx)(ne,{onClick:s,children:e.verses.map((e,t)=>o.cloneElement(e,{key:t}))})]})]})]},t))]})},ce=n.Ay.div`
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing

  ${e=>{let{theme:t}=e;return t.media.up("sm")` // ОНОВЛЕНО: Використано медіазапит з теми
    padding: 0;
  `}}
`,de=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використано spacing
  justify-content: center;
  align-items: stretch;
  width: 100%;
`,me=n.Ay.div`
  flex: 1 1 auto;
  max-width: calc(50% - ${e=>{let{theme:t}=e;return t.spacing.small}}); // ОНОВЛЕНО: Використано spacing

  display: flex;
  flex-direction: column;
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використано spacing
  box-sizing: border-box;

  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}}; // ОНОВЛЕНО: Використано theme.colors
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}}; // ОНОВЛЕНО: Використано borderRadius
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}}; // ОНОВЛЕНО: Використано shadows
  transition: all 0.3s ease-in-out;

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
`,ue=n.Ay.h4`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}}; // ОНОВЛЕНО: Використано fontSizes
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing
  display: flex;
  align-items: center;
  color: ${e=>"positive"===e.$type?e.theme.colors.positiveText:"negative"===e.$type?e.theme.colors.negativeText:"neutral1"===e.$type?e.theme.colors.neutralText1:"neutral2"===e.$type?e.theme.colors.neutralText2:e.theme.colors.color};
`,he=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}}; // ОНОВЛЕНО: Використано fontSizes
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}}; // ОНОВЛЕНО: Використано spacing
`,ge=n.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використано fontSizes
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано theme.colors

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }
`,pe=e=>{let{title:t,items:r}=e;return!r||r.length<2?null:(0,m.jsxs)(ce,{children:[t&&(0,m.jsx)(a.A,{as:"h3",children:t}),(0,m.jsx)(de,{children:r.map((e,t)=>(0,m.jsxs)(me,{$type:e.type,children:[(0,m.jsxs)(ue,{$type:e.type,children:[e.emoji&&(0,m.jsx)(he,{children:e.emoji}),e.heading]}),(0,m.jsx)(ge,{children:e.content})]},t))})]})},xe=n.Ay.section`
  margin: ${e=>{let{theme:t}=e;return t.spacing.large}} 0;
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column; /* За замовчуванням стовпець на мобільних */
  gap: ${e=>{let{theme:t}=e;return t.spacing.large}};
  align-items: center; /* Центрування елементів */
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out; // ДОДАНО: Переходи для фону та тіні

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
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору заголовка

    ${e=>{let{theme:t}=e;return t.media.up("md")`
      text-align: left;
    `}}
  }
`,$e=n.Ay.div`
  flex: 2;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору тексту

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору акцентного тексту
  }

  ${e=>{let{theme:t}=e;return t.media.up("md")`
    padding-right: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`,be=n.Ay.div`
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
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out; // ДОДАНО: Переходи для фону та тіні

  ${e=>{let{theme:t}=e;return t.media.up("md")`
    max-width: 45%;
  `}}
`,fe=n.Ay.img`
  max-width: 100%;
  height: auto;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.extraSmall}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,ye=n.Ay.figcaption`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.textColorLight}};
  line-height: 1.4;
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору тексту
`,we=e=>{let{title:t,content:r,imageUrl:o,altText:n,caption:l,imagePosition:i}=e;return r||o?(0,m.jsxs)(xe,{imagePosition:i,children:[t&&(0,m.jsx)(a.A,{as:"h3",children:t}),(0,m.jsxs)("div",{className:"content-area",children:[" ",r&&(0,m.jsxs)($e,{children:[r," "]}),o&&(0,m.jsxs)(be,{children:[(0,m.jsx)(fe,{src:o,alt:n}),l&&(0,m.jsx)(ye,{children:l})]})]})]}):null};var ve=r(8056);const ze=function(e){let{lessonData:t}=e;if(!t)return(0,m.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443 \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438..."});const{title:r,author:n,book:l,chapter:i,verses:u,date:g,duration:p,theme:x,tags:$,description:b,sections:y}=t;return(0,m.jsxs)(ve.Sg,{children:[(0,m.jsxs)(ve.ae,{children:[(0,m.jsx)("h2",{children:r}),(0,m.jsx)(h,{author:n,book:l,chapter:i,verses:u,date:g,duration:p,theme:x,tags:$})]}),(0,m.jsx)(ve.IZ,{children:(0,m.jsx)(s.A,{children:(0,m.jsxs)(ve.tG,{children:[b&&b,y.map((e,t)=>{switch(e.type){case"text":return(0,m.jsxs)(o.Fragment,{children:[e.title&&(0,m.jsx)(a.A,{as:e.subtitle?"h4":"h3",size:e.subtitle?"medium":"default",children:e.title}),e.content.map((e,t)=>(0,m.jsx)(o.Fragment,{children:e},t))]},t);case"quiz":return(0,m.jsx)(c.A,{quizData:e},e.id);case"reveal-cards":return(0,m.jsxs)(o.Fragment,{children:[e.title&&(0,m.jsx)(a.A,{as:"h3",size:"default",children:e.title}),e.cards.map(e=>(0,m.jsx)(d.A,{cardData:e},e.id))]},t);case"highlight-box":return(0,m.jsx)(S,{...e},t);case"question-prompt":return(0,m.jsx)(I,{...e},t);case"list-cards":return(0,m.jsx)(X,{...e},t);case"timeline":return(0,m.jsx)(ae,{...e},t);case"contrast-section":return(0,m.jsx)(pe,{...e},t);case"diagram":return(0,m.jsx)(f,{chartType:e.chartType,title:e.title,description:e.description,chartData:e.chartData,chartOptions:e.chartOptions},t);case"image-placeholder":return(0,m.jsx)(z,{title:e.title,description:e.description,imageUrl:e.imageUrl,altText:e.altText,caption:e.caption},t);case"description-with-image":return(0,m.jsx)(we,{title:e.title,content:e.content,imageUrl:e.imageUrl,altText:e.altText,caption:e.caption,imagePosition:e.imagePosition},t);default:return console.warn(`\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0441\u0435\u043a\u0446\u0456\u0457: ${e.type}`),null}})]})})})]})};var je=r(6841),ke=r(5003);const Ae=()=>{const{selectedHomeGroupLesson:e,setSelectedHomeGroupLesson:t}=(0,ke.t)(),[r,n]=(0,o.useState)(null),[s,a]=(0,o.useState)(!0),c=(e=>{if(!e)return null;for(const t in je.H)if(je.H.hasOwnProperty(t)){const r=je.H[t];if(Array.isArray(r)&&r.length>0){const t=r.find(t=>t.id===e);if(t)return t}}return null})(e);return(0,o.useEffect)(()=>{if(!e){let e=null;for(const t in je.H)if(je.H.hasOwnProperty(t)){const r=je.H[t];if(Array.isArray(r)&&r.length>0){e=r[0].id;break}}e?t(e):a(!1)}},[e,t]),(0,o.useEffect)(()=>{e&&(async()=>{if(a(!0),n(null),c&&c.loadLesson)try{const e=await c.loadLesson();n(e.default)}catch(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443:",e),n(null)}finally{a(!1)}else a(!1)})()},[c,e]),(0,m.jsx)(l,{children:s?(0,m.jsx)(i,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443..."}):r?(0,m.jsx)(ze,{lessonData:r}):(0,m.jsx)(i,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0443\u0440\u043e\u043a \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432 \u043c\u0435\u043d\u044e."})})};function Ce(){return(0,m.jsx)(Ae,{})}},8056:(e,t,r)=>{r.d(t,{IZ:()=>i,Sg:()=>n,ae:()=>l,sY:()=>a,tG:()=>s});var o=r(4574);const n=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  // Медіа-запит для мобільних пристроїв
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  `}}
`,l=o.Ay.div`
  text-align: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  h2 {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
    color: ${e=>{let{theme:t}=e;return t.colors.color}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору заголовка

    // Медіа-запит для мобільних пристроїв, щоб зменшити шрифт
    ${e=>{let{theme:t}=e;return t.media.down("sm")`
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
    `}}
  }
`,i=o.Ay.div`
  width: 100%;
`,s=o.Ay.div`
  line-height: 1.8;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для основного кольору тексту

  // Медіа-запит для мобільних пристроїв, щоб трохи зменшити шрифт
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  `}}

  p {
    margin-bottom: 1em;
  }

  ul {
    list-style-type: disc;
    margin-left: ${e=>{let{theme:t}=e;return t.spacing.medium}};
    margin-bottom: 1em;
  }

  ol {
    list-style-type: decimal;
    margin-left: ${e=>{let{theme:t}=e;return t.spacing.medium}};
    margin-bottom: 1em;
  }

  li {
    margin-bottom: 0.5em;
  }

  strong {
    color: ${e=>{let{theme:t}=e;return t.colors.color}};
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору жирного тексту
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${e=>{let{theme:t}=e;return t.colors.color}};
    transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору заголовків
  }
`,a=o.Ay.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  display: inline;
  transition: color 0.4s ease-in-out, text-shadow 0.2s ease-in-out; // Transition for text shadow

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    text-decoration: none;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); // A subtle white glow (adjust color/opacity as needed)
  }

  &:focus {
    outline: 2px solid ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    outline-offset: 2px;
  }

  &:active {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  }
`},8763:(e,t,r)=>{r.d(t,{A:()=>m});var o=r(5043),n=r(4574);const l=n.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};

  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out,
    box-shadow 0.4s ease-in-out; // ДОДАНО: Переходи для фону, межі та тіні

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
  transition: color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору тексту запитання

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

  transition: border-color 0.4s ease-in-out; // ДОДАНО: Перехід для кольору верхньої межі списку опцій

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

  transition: background-color 0.4s ease-in-out, border-color 0.4s ease-in-out,
    color 0.4s ease-in-out; // ОНОВЛЕНО: Перехід для всіх кольорових властивостей

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

  transition: transform 0.2s ease-in-out, color 0.4s ease-in-out; // ОНОВЛЕНО: Перехід для кольору іконки
`;var d=r(579);function m(e){let{quizData:t}=e;const[r,n]=(0,o.useState)(!1),[m,u]=(0,o.useState)(null);return(0,d.jsxs)(l,{children:[(0,d.jsxs)(i,{onClick:()=>{n(!r),r&&u(null)},children:[t.question,(0,d.jsx)(c,{isActive:r,children:r?"\u2212":"+"})]}),r&&(0,d.jsx)(s,{children:t.options.map((e,t)=>(0,d.jsx)(a,{onClick:()=>(e=>{u(e)})(t),isSelected:m===t,isCorrectOption:e.isCorrect,showFeedback:null!==m,children:e.text},t))})]})}}}]);
//# sourceMappingURL=838.dc04953a.chunk.js.map
"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[2374],{505:(e,t,r)=>{r.d(t,{A:()=>m});var o=r(5043),n=r(4574);const i=n.Ay.div`
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
`,l=n.Ay.div`
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
`,s=n.Ay.div`
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
`;var c=r(579);function d(e){let{isActive:t,onClick:r}=e;return(0,c.jsxs)(a,{onClick:r,isActive:t,children:[t?"\u25b2":"\u25bc"," "]})}function m(e){let{cardData:t}=e;const[r,n]=(0,o.useState)(!1),a=()=>n(!r);return(0,c.jsxs)(i,{children:[(0,c.jsxs)(l,{onClick:a,children:[t.emoji,(0,c.jsx)("span",{children:t.title}),(0,c.jsx)(d,{isActive:r,onClick:a})]}),r&&(0,c.jsx)(s,{children:t.content})]})}},1441:(e,t,r)=>{r.d(t,{A:()=>l});r(5043);var o=r(4574);o.Ay.section`
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
`;var i=r(579);const l=e=>{let{as:t="h3",size:r="default",children:o}=e;return(0,i.jsxs)(n,{as:t,size:r,children:[o," "]})}},2099:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);const o=r(4574).Ay.section`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  `}}
`;var n=r(579);function i(e){let{children:t}=e;return(0,n.jsx)(o,{children:t})}},2374:(e,t,r)=>{r.r(t),r.d(t,{default:()=>De});var o=r(5043),n=r(9615),i=r(4574);const l=i.Ay.div`
  margin: 0;
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  transition: background-color 0.25s ease-in-out;
`,s=i.Ay.p`
  text-align: center;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.xxlarge}}; // ОНОВЛЕНО: Використано theme.spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використано theme.fontSizes
  color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}}; // ОНОВЛЕНО: Використано theme.colors
`;var a=r(2099),c=r(1441),d=r(8763),m=r(505),u=r(579);const h=i.Ay.div`
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
`;const g=function(e){let{author:t,book:r,chapter:o,verses:n,date:i,duration:l,theme:s,tags:a}=e;return(0,u.jsxs)(h,{children:[t&&(0,u.jsxs)("p",{children:["\u0410\u0432\u0442\u043e\u0440: ",(0,u.jsx)("span",{children:t})]}),(r||o||n)&&(0,u.jsxs)("p",{children:["\u041a\u043d\u0438\u0433\u0430:"," ",(0,u.jsxs)("span",{children:[r," ",o?`\u0433\u043b\u0430\u0432\u0430 ${o}`:"",n?`, \u0432\u0456\u0440\u0448\u0456 ${n}`:""]})]}),i&&(0,u.jsxs)("p",{children:["\u0414\u0430\u0442\u0430: ",(0,u.jsx)("span",{children:i})]}),l&&(0,u.jsxs)("p",{children:["\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c: ",(0,u.jsx)("span",{children:l})]}),s&&(0,u.jsxs)("p",{children:["\u0422\u0435\u043c\u0430: ",(0,u.jsx)("span",{children:s})]}),a&&a.length>0&&(0,u.jsx)("div",{className:"lesson-tags",children:a.map((e,t)=>(0,u.jsx)("span",{children:e},t))})]})},p=i.Ay.div`
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
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out; // ДОДАНО: Переходи для кольорів

  // Медіазапити для адаптації на мобільних
  ${e=>{let{theme:t}=e;return t.media.down("md")`
    height: 300px;
    margin: ${e=>{let{theme:t}=e;return t.spacing.small}} auto;
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`;var x=r(6058),$=r(7304),b=r(7376);$.t1.register($.PP,$.kc,$.FN,$.No,$.E8,$.Bs,$.pr,$.hE,$.m_,$.s$,$.dN);const f=(e,t,r)=>{switch(e){case"line":return(0,u.jsx)(x.N1,{data:t,options:r});case"bar":return(0,u.jsx)(x.yP,{data:t,options:r});case"pie":return(0,u.jsx)(x.Fq,{data:t,options:r});case"doughnut":return(0,u.jsx)(x.nu,{data:t,options:r});case"polarArea":return(0,u.jsx)(x.O5,{data:t,options:r});case"radar":return(0,u.jsx)(x.Vd,{data:t,options:r});case"bubble":return(0,u.jsx)(x.Zh,{data:t,options:r});case"scatter":return(0,u.jsx)(x.Xl,{data:t,options:r});default:return(0,u.jsxs)("p",{children:["\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438: ",e]})}};const y=function(e){let{title:t,description:r,chartType:n,chartData:i,chartOptions:l}=e;const{currentTheme:s}=(0,b.D)(),a=(0,o.useMemo)(()=>((e,t,r)=>{if(!e||!e.datasets)return e;if(!t||!t.colors)return e;const o={...e};return o.datasets=o.datasets.map(e=>{const o={...e},n=[t.colors.accentColor,t.colors.navActive,t.colors.accentBg,t.colors.color,t.colors.navBg,t.colors.background,t.colors.borderColor,t.colors.interactiveBgLight,t.colors.interactiveBorderLight,t.colors.interactiveBgYellow,t.colors.interactiveBorderYellow,t.colors.buttonBg,t.colors.successColor,t.colors.dangerColor];if(o.backgroundColor&&0!==o.backgroundColor.length&&"dynamic"!==o.backgroundColor)Array.isArray(o.backgroundColor)&&(o.backgroundColor=o.backgroundColor.map((e,t)=>"dynamic"===e?n[t%n.length]:e),o.borderColor||(o.borderColor=t.colors.borderColor));else if("pie"===r||"doughnut"===r||"polarArea"===r){const e=o.data.length;o.backgroundColor=Array.from({length:e},(e,t)=>n[t%n.length]),o.borderColor=t.colors.borderColor}else o.backgroundColor=t.colors.accentColor+"B3",o.borderColor=t.colors.accentColor;return"dynamic"===o.pointBackgroundColor&&(o.pointBackgroundColor=t.colors.accentColor),"dynamic"===o.pointBorderColor&&(o.pointBorderColor=t.colors.color),"dynamic"===o.hoverBackgroundColor&&(o.hoverBackgroundColor=t.colors.hoverBg),"dynamic"===o.hoverBorderColor&&(o.hoverBorderColor=t.colors.borderColor),!0===o.fill&&(o.backgroundColor=t.colors.accentBg+"50"),o}),o})(i,s,n),[i,s,n]),c=(0,o.useMemo)(()=>((e,t)=>{var r,o,n,i,l,s,a,c;let d={...e,responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:5,right:40,top:10,bottom:5}},plugins:{...e.plugins,legend:{display:!["pie","doughnut"].includes(e.chartType),labels:{color:null===(r=t.colors)||void 0===r?void 0:r.color,font:{size:12},boxWidth:20,padding:10},position:"right",align:"center"},tooltip:{...null===(o=e.plugins)||void 0===o?void 0:o.tooltip,bodyFont:{size:12},titleFont:{size:14}}},scales:{...e.scales,y:{...null===(n=e.scales)||void 0===n?void 0:n.y,border:{display:!1},ticks:{display:!1,color:null===(i=t.colors)||void 0===i?void 0:i.color,font:{size:10}},grid:{display:!1,color:((null===(l=t.colors)||void 0===l?void 0:l.borderColor)||"#D3D3D3")+"80"}},x:{...null===(s=e.scales)||void 0===s?void 0:s.x,border:{display:!1},ticks:{display:!1,color:null===(a=t.colors)||void 0===a?void 0:a.color,font:{size:10}},grid:{display:!1,color:((null===(c=t.colors)||void 0===c?void 0:c.borderColor)||"#D3D3D3")+"80"}}}};return["doughnut","pie"].includes(e.chartType)&&(d.cutout=e.cutout||"70%"),d.plugins||(d.plugins={}),d})({...l,chartType:n},s),[l,s,n]),d=(0,o.useMemo)(()=>{var e;if(!a||!a.labels||!a.datasets||0===a.datasets.length)return[];const t=(null===(e=a.datasets[0])||void 0===e?void 0:e.backgroundColor)||[];return a.labels.map((e,r)=>({text:e,color:Array.isArray(t)?t[r%t.length]:t}))},[a]);return s?(0,u.jsxs)(p,{children:[t&&(0,u.jsx)("h4",{children:t}),r&&(0,u.jsx)("p",{children:r}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"100%",height:"100%"},children:[(0,u.jsxs)("div",{style:{flexGrow:1,minWidth:"0",maxWidth:"calc(100% - 320px)"},children:[" ",f(n,a,c)]}),(0,u.jsx)("div",{style:{width:"320px",flexShrink:0,paddingLeft:"15px",overflowY:"auto",maxHeight:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},children:d.map((e,t)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",marginBottom:"8px"},children:[(0,u.jsx)("span",{style:{display:"inline-block",minWidth:"15px",height:"15px",backgroundColor:e.color,marginRight:"8px",marginTop:"3px",borderRadius:"3px"}}),(0,u.jsx)("span",{style:{color:s.color,fontSize:"13px",wordBreak:"break-word",wordWrap:"break-word",whiteSpace:"normal",lineHeight:"1.3"},children:e.text})]},t))})]}),!t&&!r&&!i&&(0,u.jsx)("p",{children:"\u0414\u0456\u0430\u0433\u0440\u0430\u043c\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f \u0430\u0431\u043e \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456 \u0434\u0430\u043d\u0456."})]}):(0,u.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438..."})},w=i.Ay.div`
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
`,v=i.Ay.img`
  max-width: 100%;
  height: auto;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: border-radius 0.25s ease-in-out;
`,z=i.Ay.p`
  font-style: italic;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано theme.colors
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}}; // ОНОВЛЕНО: Використано spacing
  transition: color 0.25s ease-in-out, font-size 0.25s ease-in-out;
`;const j=function(e){let{imageUrl:t,caption:r,altText:o}=e;return(0,u.jsxs)(w,{children:[t?(0,u.jsx)(v,{src:t,alt:o||"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"}):(0,u.jsx)("p",{children:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0454."}),r&&(0,u.jsx)(z,{children:r})]})},k=(i.Ay.div`
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
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
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
  margin: ${e=>{let{theme:t}=e;return t.spacing.large}} 0;
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
`),C=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  line-height: 1;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    margin-right: 0;
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,A=i.Ay.div`
  flex-grow: 1;
`,S=i.Ay.h4`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  margin-top: 0;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  font-weight: bold;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору заголовка
`,B=e=>{let{title:t,content:r,emoji:o}=e;return(0,u.jsxs)(k,{children:[o&&(0,u.jsx)(C,{children:o}),(0,u.jsxs)(A,{children:[t&&(0,u.jsx)(S,{children:t}),r&&(0,u.jsx)("p",{children:r})]})]})};var R=r(3546),T=r(6446);const E=i.Ay.div`
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
`,D=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  `}}
`,I=i.Ay.p`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору тексту

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  `}}
`,P=i.Ay.button`
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
`,O=i.Ay.div`
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
`,L=e=>{let{question:t,answer:r,emoji:n}=e;const[i,l]=(0,o.useState)(!1);return(0,u.jsxs)(E,{children:[(0,u.jsx)(D,{children:n||"\u2753"}),(0,u.jsx)(I,{children:t}),r&&(0,u.jsx)(P,{onClick:()=>{l(!i)},children:i?"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c"}),(0,u.jsx)(R.N,{children:i&&r&&(0,u.jsx)(T.P.div,{initial:{height:0,opacity:0,overflow:"hidden"},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.25,ease:[.4,0,.2,1]},children:(0,u.jsx)(O,{children:r})})})]})},H=i.Ay.div`
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${e=>{let{theme:t}=e;return t.spacing.small}};

  ${e=>{let{theme:t}=e;return t.media.up("md")`
    padding: 0;
  `}}
`,W=i.Ay.h2`
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
`,q=i.Ay.div`
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
`,Y=i.Ay.article`
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
`,_=i.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,F=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  line-height: 1;
  filter: grayscale(10%);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`,V=i.Ay.h3`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin: 0;
  line-height: 1.3;
  transition: color 0.25s ease-in-out;
`,N=i.Ay.div`
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
`,U=i.Ay.div`
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
`,G=i.Ay.button`
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
`,M=(e,t)=>{switch(t.type){case"ACTIVATE_ROW":return t.payload.rowIndex;case"DEACTIVATE_ROW":return null;default:return e}},Z=160,K=o.memo(e=>{let{card:t,index:r,isExpanded:n,toggleExpand:i,collapseCard:l,handleRowBlur:s}=e;const a=(0,o.useRef)(null),[c,d]=(0,o.useState)(!1),[m,h]=(0,o.useState)(Z);return(0,o.useEffect)(()=>{const e=()=>{if(a.current){const{scrollHeight:e}=a.current;d(e>Z),h(e>Z?e:Z)}};e(),window.addEventListener("resize",e);const t=setTimeout(e,150);return()=>{window.removeEventListener("resize",e),clearTimeout(t)}},[t.content]),(0,o.useEffect)(()=>{n&&a.current?h(a.current.scrollHeight):n||h(Z)},[n]),(0,u.jsxs)(Y,{onBlur:s,tabIndex:c?0:-1,"aria-expanded":n,children:[(0,u.jsxs)(_,{children:[(0,u.jsx)(F,{role:"img","aria-label":`Emoji for ${t.title}`,children:t.emoji}),(0,u.jsx)(V,{children:t.title})]}),(0,u.jsx)(T.P.div,{layout:!0,initial:{height:Z},animate:{height:n?m:Z,opacity:1},transition:{duration:.25,ease:[.4,0,.2,1]},style:{overflow:"hidden",width:"100%"},children:(0,u.jsx)(N,{ref:a,isExpanded:n,id:`card-content-${r}`,children:t.content})}),c&&(0,u.jsx)(U,{isExpanded:n,children:(0,u.jsx)(G,{onClick:e=>{e.stopPropagation(),i(r)},"aria-controls":`card-content-${r}`,tabIndex:0,isExpanded:n,children:n?(0,u.jsx)(u.Fragment,{children:"\u0417\u0433\u043e\u0440\u043d\u0443\u0442\u0438"}):(0,u.jsx)(u.Fragment,{children:"\u0427\u0438\u0442\u0430\u0442\u0438 \u0434\u0430\u043b\u0456"})})})]})}),X=e=>{let{title:t,cards:r}=e;const[n,i]=(0,o.useReducer)(M,null),[l,s]=(0,o.useState)(3),a=(0,o.useRef)(null),c=(0,o.useCallback)(()=>window.innerWidth<=768?1:window.innerWidth<=1200?2:3,[]);(0,o.useEffect)(()=>{const e=()=>{s(c()),i({type:"DEACTIVATE_ROW"})};return window.addEventListener("resize",e),s(c()),()=>{window.removeEventListener("resize",e)}},[c]);const d=(0,o.useCallback)(e=>{const t=Math.floor(e/l);i(n===t?{type:"DEACTIVATE_ROW"}:{type:"ACTIVATE_ROW",payload:{rowIndex:t}})},[n,l]),m=(0,o.useCallback)(e=>{a.current&&!a.current.contains(e.relatedTarget)&&i({type:"DEACTIVATE_ROW"})},[]),h=(0,o.useCallback)(e=>{i({type:"DEACTIVATE_ROW"})},[]);return(0,u.jsxs)(H,{children:[t&&(0,u.jsx)(W,{children:t}),(0,u.jsxs)(q,{ref:a,children:[" ",r.map((e,t)=>{const r=Math.floor(t/l),o=n===r;return(0,u.jsx)(K,{card:e,index:t,isExpanded:o,toggleExpand:d,collapseCard:h,handleRowBlur:m},t)})]})]})},J=i.Ay.div`
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
`,Q=(i.Ay.div`
  display: none;
`,(0,i.Ay)(T.P.div)`
  position: relative;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}};
  padding-left: 30px;
  text-align: left;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding-left: 20px;
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  `}}
`),ee=(0,i.Ay)(T.P.div)`
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
`,te=(0,i.Ay)(T.P.div)`
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
`,re=i.Ay.h4`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  margin: 0;
  font-weight: bold;
  line-height: 1.3;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору

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
`,oe=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  white-space: nowrap;
  font-weight: normal;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xsmall}};
  `}}
`,ne=i.Ay.p`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.5;
  margin-bottom: 0;
  word-wrap: break-word;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  `}}
`,ie=i.Ay.div`
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
`,le=(0,i.Ay)(T.P.div)`
  overflow: hidden;
`,se=(0,i.Ay)(T.P.div)`
  padding-top: 0.8rem; /* Перемістили padding-top сюди */
  /* Зміни в opacity можна застосовувати тут, якщо потрібно */
`,ae=e=>{let{isOpen:t,children:r,...o}=e;return(0,u.jsx)(R.N,{initial:!1,children:t&&(0,u.jsx)(le,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{height:"auto",opacity:1},collapsed:{height:0,opacity:0}},transition:{duration:.25,ease:[.4,0,.2,1]},layout:!0,...o,children:(0,u.jsx)(se,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,delay:.1},children:r})})})},ce=e=>{let{title:t,events:r}=e;const{currentTheme:n}=(0,b.D)(),[i,l]=(0,o.useState)(null),s=e=>{e.stopPropagation()};return(0,u.jsxs)(J,{children:[t&&(0,u.jsx)(c.A,{as:"h3",size:"default",children:t}),r.map((e,t)=>(0,u.jsxs)(Q,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.5},transition:{duration:.5,delay:.1*t},children:[(0,u.jsx)(ee,{animate:i===t?{scale:[1,1.2,1],backgroundColor:n.accentColor}:{scale:1,backgroundColor:n.accentColor},transition:{duration:.5,repeat:i===t?1/0:0,repeatType:"loop"}}),(0,u.jsxs)(te,{onClick:()=>(e=>{l(i===e?null:e)})(t),whileHover:{scale:1.03},transition:{scale:{duration:.15,ease:"easeOut"},backgroundColor:{duration:.2,ease:"easeOut"}},animate:{scale:i===t?1.03:1,backgroundColor:i===t?n.hoverBg:n.cardBackground},children:[(0,u.jsxs)(re,{style:{cursor:"pointer"},children:[(0,u.jsxs)("div",{children:[e.year&&(0,u.jsx)(oe,{children:e.year}),e.title]}),(0,u.jsx)(T.P.span,{initial:!1,animate:{rotate:i===t?90:0},transition:{duration:.2},style:{marginLeft:"10px",display:"inline-block"},children:"\u25b6"})]}),(0,u.jsxs)(ae,{isOpen:i===t,children:[e.description&&(0,u.jsx)(ne,{children:e.description}),e.verses&&e.verses.length>0&&(0,u.jsx)(ie,{onClick:s,children:e.verses.map((e,t)=>o.cloneElement(e,{key:t}))})]})]})]},t))]})},de=i.Ay.div`
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}}; // ОНОВЛЕНО: Використано spacing
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing

  ${e=>{let{theme:t}=e;return t.media.up("sm")` // ОНОВЛЕНО: Використано медіазапит з теми
    padding: 0;
  `}}
`,me=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>{let{theme:t}=e;return t.spacing.medium}}; // ОНОВЛЕНО: Використано spacing
  justify-content: center;
  align-items: stretch;
  width: 100%;
`,ue=i.Ay.div`
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
`,he=i.Ay.h4`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}}; // ОНОВЛЕНО: Використано fontSizes
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}}; // ОНОВЛЕНО: Використано spacing
  display: flex;
  align-items: center;
  color: ${e=>"positive"===e.$type?e.theme.colors.positiveText:"negative"===e.$type?e.theme.colors.negativeText:"neutral1"===e.$type?e.theme.colors.neutralText1:"neutral2"===e.$type?e.theme.colors.neutralText2:e.theme.colors.color};
`,ge=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}}; // ОНОВЛЕНО: Використано fontSizes
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}}; // ОНОВЛЕНО: Використано spacing
`,pe=i.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використано fontSizes
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}}; // ОНОВЛЕНО: Використано theme.colors

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }
`,xe=e=>{let{title:t,items:r}=e;return!r||r.length<2?null:(0,u.jsxs)(de,{children:[t&&(0,u.jsx)(c.A,{as:"h3",children:t}),(0,u.jsx)(me,{children:r.map((e,t)=>(0,u.jsxs)(ue,{$type:e.type,children:[(0,u.jsxs)(he,{$type:e.type,children:[e.emoji&&(0,u.jsx)(ge,{children:e.emoji}),e.heading]}),(0,u.jsx)(pe,{children:e.content})]},t))})]})},$e=i.Ay.section`
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
`,be=i.Ay.div`
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
`,fe=i.Ay.div`
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
`,ye=i.Ay.img`
  max-width: 100%;
  height: auto;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.extraSmall}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,we=i.Ay.figcaption`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.textColorLight}};
  line-height: 1.4;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору тексту
`,ve=e=>{let{title:t,content:r,imageUrl:o,altText:n,caption:i,imagePosition:l}=e;return r||o?(0,u.jsxs)($e,{imagePosition:l,children:[t&&(0,u.jsx)(c.A,{as:"h3",children:t}),(0,u.jsxs)("div",{className:"content-area",children:[" ",r&&(0,u.jsxs)(be,{children:[r," "]}),o&&(0,u.jsxs)(fe,{children:[(0,u.jsx)(ye,{src:o,alt:n}),i&&(0,u.jsx)(we,{children:i})]})]})]}):null};var ze=r(6450),je=r(8056);const ke=e=>{let{bibleRef:t,children:r}=e;const{navigateTo:n}=(0,o.useContext)(ze.y);return(0,u.jsx)(je.sY,{type:"button",onClick:e=>{e.preventDefault(),n(t)},children:r})},Ce=/\[([a-z0-9_]+(?::[\d:,-]+)?):([^\]]+)]/g;function Ae(e){if("string"!==typeof e)return e;const t=[];let r,o=0;for(;null!==(r=Ce.exec(e));){const n=r[0],i=`[${r[1]}]`,l=r[2],s=e.substring(o,r.index);s&&t.push(s),t.push((0,u.jsx)(ke,{bibleRef:i,children:l},r.index)),o=r.index+n.length}const n=e.substring(o);return n&&t.push(n),t}const Se=function(e){let{lessonData:t}=e;if(!t)return(0,u.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443 \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438..."});const{title:r,author:n,book:i,chapter:l,verses:s,date:h,duration:p,theme:x,tags:$,description:b,sections:f}=t;return(0,u.jsxs)(je.Sg,{children:[(0,u.jsxs)(je.ae,{children:[(0,u.jsx)("h2",{children:Ae(r)}),(0,u.jsx)(g,{author:n,book:i,chapter:l,verses:s,date:h,duration:p,theme:x,tags:$})]}),(0,u.jsx)(je.IZ,{children:(0,u.jsx)(a.A,{children:(0,u.jsxs)(je.tG,{children:[b&&Ae(b),f.map((e,t)=>{switch(e.type){case"text":return(0,u.jsxs)(o.Fragment,{children:[e.title&&(0,u.jsx)(c.A,{as:e.subtitle?"h4":"h3",size:e.subtitle?"medium":"default",children:Ae(e.title)}),e.content.map((e,t)=>(0,u.jsx)(o.Fragment,{children:Ae(e)},t))]},t);case"quiz":return(0,u.jsx)(d.A,{quizData:{...e,question:Ae(e.question),options:e.options.map(e=>({...e,rationale:Ae(e.rationale)}))}},e.id);case"reveal-cards":return(0,u.jsxs)(o.Fragment,{children:[e.title&&(0,u.jsx)(c.A,{as:"h3",size:"default",children:Ae(e.title)}),e.cards.map(e=>(0,u.jsx)(m.A,{cardData:{...e,content:Ae(e.content)}},e.id))]},t);case"highlight-box":return(0,u.jsx)(B,{...e,content:Ae(e.content)},t);case"question-prompt":return(0,u.jsx)(L,{...e,question:Ae(e.question),answer:Ae(e.answer)},t);case"list-cards":return(0,u.jsx)(X,{...e,cards:e.cards.map(e=>({...e,content:Ae(e.content)}))},t);case"timeline":return(0,u.jsx)(ce,{...e,events:e.events.map(e=>({...e,description:Ae(e.description)}))},t);case"contrast-section":return(0,u.jsx)(xe,{...e,items:e.items.map(e=>({...e,content:Ae(e.content)}))},t);case"diagram":return(0,u.jsx)(y,{chartType:e.chartType,title:Ae(e.title),description:Ae(e.description),chartData:e.chartData,chartOptions:e.chartOptions},t);case"image-placeholder":return(0,u.jsx)(j,{title:Ae(e.title),description:Ae(e.description),imageUrl:e.imageUrl,altText:e.altText,caption:Ae(e.caption)},t);case"description-with-image":return(0,u.jsx)(ve,{title:Ae(e.title),content:Ae(e.content),imageUrl:e.imageUrl,altText:e.altText,caption:Ae(e.caption),imagePosition:e.imagePosition},t);default:return console.warn(`\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0441\u0435\u043a\u0446\u0456\u0457: ${e.type}`),null}})]})})})]})};var Be=r(6841),Re=r(5003),Te=r(6139);const Ee=()=>{const{mainRef:e}=(0,n.KC)(),{selectedHomeGroupLesson:t,setSelectedHomeGroupLesson:r}=(0,Re.t)(),[i,a]=(0,o.useState)(null),[c,d]=(0,o.useState)(!0),m=(0,n.zy)(),h=(0,o.useRef)(!0);return(0,o.useEffect)(()=>{if(!t){const e=(()=>{for(const e of Te.Z)if("old-testament-books"===e.id||"new-testament-books"===e.id){const t="old-testament-books"===e.id?Te.j9:Te.oC;for(const e of t){const t=Be.H[e.internalKey];if(t&&t.length>0)return t[0].id}}else if("thematic"===e.type||"special"===e.type){const t=Be.H[e.id];if(t&&t.length>0)return t[0].id}return null})();e?r(e):d(!1)}},[t,r]),(0,o.useEffect)(()=>{t&&(async()=>{d(!0),a(null),e&&e.current&&!h.current&&(e.current.scrollTop=0);const r=(e=>{if(!e)return null;for(const t in Be.H){const r=Be.H[t];if(r){const t=r.find(t=>t.id===e);if(t)return t}}return null})(t);if(r&&r.loadLesson)try{const e=await r.loadLesson();a(e.default)}catch(o){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443:",o),a(null)}finally{d(!1)}else d(!1)})()},[t,e]),(0,o.useEffect)(()=>{if(i&&e&&e.current){const t=sessionStorage.getItem(`scrollPosition-${m.pathname}`);if(t&&h.current){const r=parseInt(t,10);e.current.scrollTop=r}h.current=!1}},[i,e,m.pathname]),(0,u.jsx)(l,{children:c?(0,u.jsx)(s,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443..."}):i?(0,u.jsx)(Se,{lessonData:i}):(0,u.jsx)(s,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0443\u0440\u043e\u043a \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432 \u043c\u0435\u043d\u044e."})})};function De(){return(0,u.jsx)(Ee,{})}},8056:(e,t,r)=>{r.d(t,{IZ:()=>l,Sg:()=>n,ae:()=>i,sY:()=>a,tG:()=>s});var o=r(4574);const n=o.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //max-width: 1200px;
  margin: 0 auto;
`,i=o.Ay.div`
  text-align: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  h2 {
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
    color: ${e=>{let{theme:t}=e;return t.colors.color}};
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
    transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору заголовка

    // Медіа-запит для мобільних пристроїв, щоб зменшити шрифт
    ${e=>{let{theme:t}=e;return t.media.down("sm")`
      font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
    `}}
  }
`,l=o.Ay.div`
  width: 100%;
`,s=o.Ay.div`
  line-height: 1.8;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  transition: color 0.25s ease-in-out;

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
    transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору жирного тексту
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${e=>{let{theme:t}=e;return t.colors.color}};
    transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору заголовків
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
  transition: color 0.25s ease-in-out, text-shadow 0.2s ease-in-out; // Transition for text shadow

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
`},8763:(e,t,r)=>{r.d(t,{A:()=>m});var o=r(5043),n=r(4574);const i=n.Ay.div`
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
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`,c=n.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};

  transition: transform 0.2s ease-in-out, color 0.25s ease-in-out; // ОНОВЛЕНО: Перехід для кольору іконки
`;var d=r(579);function m(e){let{quizData:t}=e;const[r,n]=(0,o.useState)(!1),[m,u]=(0,o.useState)(null);return(0,d.jsxs)(i,{children:[(0,d.jsxs)(l,{onClick:()=>{n(!r),r&&u(null)},children:[t.question,(0,d.jsx)(c,{isActive:r,children:r?"\u2212":"+"})]}),r&&(0,d.jsx)(s,{children:t.options.map((e,t)=>(0,d.jsx)(a,{onClick:()=>(e=>{u(e)})(t),isSelected:m===t,isCorrectOption:e.isCorrect,showFeedback:null!==m,children:e.text},t))})]})}}}]);
//# sourceMappingURL=2374.6eeb75b5.chunk.js.map
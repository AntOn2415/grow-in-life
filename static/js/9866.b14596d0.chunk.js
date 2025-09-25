"use strict";(self.webpackChunkgrow_in_life=self.webpackChunkgrow_in_life||[]).push([[9866],{130:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Gt});var o=r(5043),n=r(9615),i=r(4574);const l=i.Ay.div`
  margin: 0;
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  transition: background-color 0.25s ease-in-out;
`,s=i.Ay.p`
  text-align: center;
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.xxlarge}}; // ОНОВЛЕНО: Використано theme.spacing
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}}; // ОНОВЛЕНО: Використано theme.fontSizes
  color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}}; // ОНОВЛЕНО: Використано theme.colors
`;var a=r(2099),d=r(8904);const c=i.Ay.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};

  dt {
    color: ${e=>{let{theme:t}=e;return t.colors.metaKey}};
    font-weight: normal;
  }

  dd {
    margin: 0;
    color: ${e=>{let{theme:t}=e;return t.colors.metaValue}};
    font-weight: bold;
  }
`,u=i.Ay.dl`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}};
  margin: 0 auto ${e=>{let{theme:t}=e;return t.spacing.small}};
  max-width: 500px;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xsmall}};
  `}}
`,m=i.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: calc(${e=>{let{theme:t}=e;return t.spacing.xsmall}} / 2);

  li {
    background-color: ${e=>{let{theme:t}=e;return t.colors.tagBg}};
    color: ${e=>{let{theme:t}=e;return t.colors.tagColor}};
    padding: 4px 8px;
    border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  }
`;var h=r(579);const p=function(e){let{author:t,book:r,chapter:o,verses:n,date:i,duration:l,theme:s,tags:a}=e;const d=o||n;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u,{children:[t&&(0,h.jsxs)(c,{children:[(0,h.jsx)("dt",{children:"\u0410\u0432\u0442\u043e\u0440:"}),(0,h.jsx)("dd",{children:(0,h.jsx)("span",{children:t})})]}),r&&(0,h.jsxs)(c,{children:[(0,h.jsx)("dt",{children:"\u041a\u043d\u0438\u0433\u0430:"}),(0,h.jsx)("dd",{children:(0,h.jsxs)("span",{children:[r," ",o?` ${o}`:""]})})]}),d&&(0,h.jsxs)(c,{children:[(0,h.jsx)("dt",{children:"\u041c\u0456\u0441\u0446\u0435 \u0434\u043e\u0441\u043b\u0456\u0434\u0436\u0435\u043d\u043d\u044f:"}),(0,h.jsx)("dd",{children:(0,h.jsx)("span",{children:n?`${n}`:""})})]}),i&&(0,h.jsxs)(c,{children:[(0,h.jsx)("dt",{children:"\u0414\u0430\u0442\u0430:"}),(0,h.jsx)("dd",{children:(0,h.jsx)("span",{children:i})})]}),l&&(0,h.jsxs)(c,{children:[(0,h.jsx)("dt",{children:"\u0422\u0440\u0438\u0432\u0430\u043b\u0456\u0441\u0442\u044c:"}),(0,h.jsx)("dd",{children:(0,h.jsx)("span",{children:l})})]}),s&&(0,h.jsxs)(c,{children:[(0,h.jsx)("dt",{children:"\u0422\u0435\u043c\u0430:"}),(0,h.jsx)("dd",{children:(0,h.jsx)("span",{children:s})})]})]}),a&&a.length>0&&(0,h.jsx)(m,{children:a.map((e,t)=>(0,h.jsx)("li",{children:e},t))})]})};var g=r(1441),x=r(8763),f=r(5555);const b=i.Ay.section`
  width: 100%;
  max-width: 950px;
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    box-shadow 0.25s ease-in-out;
`,$=i.Ay.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    flex-direction: column;
  `}}
`,y=i.Ay.div`
  flex-grow: 1;
  min-width: 0;
  max-width: 70%;
  height: 300px;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    max-width: 100%;
    margin-bottom: 12px;
    height: 200px;
  `}}
`,j=i.Ay.div`
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
`,w=i.Ay.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    margin-bottom: 0;
    align-items: center;
  `}}
`,v=i.Ay.span`
  display: inline-block;
  min-width: 15px;
  height: 15px;
  margin-right: 8px;
  margin-top: 3px;
  border-radius: 3px;
`,k=i.Ay.span`
  font-size: 13px;
  word-break: break-word;
  line-height: 1.3;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
    font-size: 12px;
  `}}
`;var A=r(6058),z=r(7304),C=r(7376);z.t1.register(z.PP,z.kc,z.FN,z.No,z.E8,z.Bs,z.pr,z.hE,z.m_,z.s$,z.dN);const S=(e,t,r)=>{if(!t||!t.datasets||0===t.datasets.length)return(0,h.jsx)("p",{children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043d\u044c\u043e \u0434\u0430\u043d\u0438\u0445 \u0434\u043b\u044f \u043f\u043e\u0431\u0443\u0434\u043e\u0432\u0438 \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438."});switch(e){case"line":return(0,h.jsx)(A.N1,{data:t,options:r});case"bar":return(0,h.jsx)(A.yP,{data:t,options:r});case"pie":return(0,h.jsx)(A.Fq,{data:t,options:r});case"doughnut":return(0,h.jsx)(A.nu,{data:t,options:r});case"polarArea":return(0,h.jsx)(A.O5,{data:t,options:r});case"radar":return(0,h.jsx)(A.Vd,{data:t,options:r});case"bubble":return(0,h.jsx)(A.Zh,{data:t,options:r});case"scatter":return(0,h.jsx)(A.Xl,{data:t,options:r});default:return(0,h.jsxs)("p",{children:["\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438: ",e]})}};const B=function(e){let{chartType:t,chartData:r,chartOptions:n}=e;const{currentTheme:i}=(0,C.D)(),l=(0,o.useMemo)(()=>((e,t,r)=>{if(!e||!e.datasets)return e;if(!t||!t.colors)return e;const o={...e};return o.datasets=o.datasets.map(e=>{const o={...e},n=[t.colors.accentColor,t.colors.navActive,t.colors.accentBg,t.colors.color,t.colors.navBg,t.colors.background,t.colors.borderColor,t.colors.interactiveBgLight,t.colors.interactiveBorderLight,t.colors.interactiveBgYellow,t.colors.interactiveBorderYellow,t.colors.buttonBg,t.colors.successColor,t.colors.dangerColor];if(o.backgroundColor&&0!==o.backgroundColor.length&&"dynamic"!==o.backgroundColor)Array.isArray(o.backgroundColor)&&(o.backgroundColor=o.backgroundColor.map((e,t)=>"dynamic"===e?n[t%n.length]:e),o.borderColor||(o.borderColor=t.colors.borderColor));else if("pie"===r||"doughnut"===r||"polarArea"===r){const e=o.data.length;o.backgroundColor=Array.from({length:e},(e,t)=>n[t%n.length]),o.borderColor=t.colors.borderColor}else o.backgroundColor=t.colors.accentColor+"B3",o.borderColor=t.colors.accentColor;return"dynamic"===o.pointBackgroundColor&&(o.pointBackgroundColor=t.colors.accentColor),"dynamic"===o.pointBorderColor&&(o.pointBorderColor=t.colors.color),"dynamic"===o.hoverBackgroundColor&&(o.hoverBackgroundColor=t.colors.hoverBg),"dynamic"===o.hoverBorderColor&&(o.hoverBorderColor=t.colors.borderColor),!0===o.fill&&(o.backgroundColor=t.colors.accentBg+"50"),o}),o})(r||{},i,t),[r,i,t]),s=(0,o.useMemo)(()=>((e,t)=>{var r,o,n,i,l,s,a,d;let c={...e,responsive:!0,maintainAspectRatio:!1,layout:{padding:{left:5,right:40,top:10,bottom:5}},plugins:{...e.plugins,legend:{display:!["pie","doughnut"].includes(e.chartType),labels:{color:null===(r=t.colors)||void 0===r?void 0:r.color,font:{size:12},boxWidth:20,padding:10},position:"right",align:"center"},tooltip:{...null===(o=e.plugins)||void 0===o?void 0:o.tooltip,bodyFont:{size:12},titleFont:{size:14}}},scales:{...e.scales,y:{...null===(n=e.scales)||void 0===n?void 0:n.y,border:{display:!1},ticks:{display:!1,color:null===(i=t.colors)||void 0===i?void 0:i.color,font:{size:10}},grid:{display:!1,color:((null===(l=t.colors)||void 0===l?void 0:l.borderColor)||"#D3D3D3")+"80"}},x:{...null===(s=e.scales)||void 0===s?void 0:s.x,border:{display:!1},ticks:{display:!1,color:null===(a=t.colors)||void 0===a?void 0:a.color,font:{size:10}},grid:{display:!1,color:((null===(d=t.colors)||void 0===d?void 0:d.borderColor)||"#D3D3D3")+"80"}}}};return"doughnut"===e.chartType&&(c.cutout=e.cutout||"70%"),c.plugins||(c.plugins={}),c})({...n,chartType:t},i),[n,i,t]),a=(0,o.useMemo)(()=>{if(!l||!l.labels||!l.datasets||0===l.datasets.length)return[];const e=l.datasets[0],t=e.backgroundColor||e.borderColor||[];return l.labels.map((e,r)=>({text:e,color:Array.isArray(t)?t[r%t.length]:t}))},[l]);return i?r?(0,h.jsx)(b,{children:(0,h.jsxs)($,{children:[(0,h.jsx)(y,{children:S(t,l,s)}),(0,h.jsx)(j,{children:a.map((e,t)=>(0,h.jsxs)(w,{children:[(0,h.jsx)(v,{style:{backgroundColor:e.color}}),(0,h.jsx)(k,{style:{color:i.color},children:e.text})]},t))})]})}):(0,h.jsx)("p",{children:"\u0414\u0456\u0430\u0433\u0440\u0430\u043c\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f \u0430\u0431\u043e \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456 \u0434\u0430\u043d\u0456."}):(0,h.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0456\u0430\u0433\u0440\u0430\u043c\u0438..."})},Y=i.Ay.div`
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
`,I=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  line-height: 1;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    margin-right: 0;
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,E=i.Ay.div`
  flex-grow: 1;
`,R=i.Ay.h4.attrs(e=>({as:e.as||"h2"}))`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  margin-top: 0;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  font-weight: bold;
  transition: color 0.25s ease-in-out; // ДОДАНО: Перехід для кольору заголовка
`,T=e=>{let{title:t,content:r,emoji:o,titleLevel:n}=e;const i=`h${n}`;return(0,h.jsxs)(Y,{children:[o&&(0,h.jsx)(I,{children:o}),(0,h.jsxs)(E,{children:[t&&(0,h.jsx)(R,{as:i,children:(0,h.jsx)(d.A,{tokens:t})}),r&&(0,h.jsx)("p",{children:(0,h.jsx)(d.A,{tokens:r})})]})]})};var L=r(3546),O=r(4119);const P=i.Ay.section`
  // ✅ Замінено на 'section'
  background-color: ${e=>{let{theme:t}=e;return t.colors.interactiveBgYellow}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.interactiveBorderYellow}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  `}}
`,H=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  `}}
`,N=i.Ay.h3.attrs(e=>({as:e.as||"h3"}))`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  transition: color 0.25s ease-in-out;
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  `}}
`,q=i.Ay.button`
  background-color: ${e=>{let{theme:t}=e;return t.colors.buttonBg}};
  color: ${e=>{let{theme:t}=e;return t.colors.buttonColor}};
  border: none;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.medium}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  cursor: pointer;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  font-weight: bold;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  &:hover {
    background: ${e=>{let{theme:t}=e;return t.colors.hoverBtn}};
    transition: background 0.25s ease-in-out;
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  `}}
`,D=i.Ay.p`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-left: 3px solid ${e=>{let{theme:t}=e;return t.colors.successColor}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  font-style: italic;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  width: 100%;
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out,
    color 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  `}}
`,W=e=>{let{question:t,answer:r,emoji:n,headingLevel:i=3}=e;const[l,s]=(0,o.useState)(!1);return(0,h.jsxs)(P,{as:"section",children:[(0,h.jsx)(H,{children:n||"\u2753"}),(0,h.jsx)(N,{as:`h${i}`,children:(0,h.jsx)(d.A,{tokens:t,isHeading:!0})}),r&&(0,h.jsx)(q,{onClick:()=>{s(!l)},children:l?"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c"}),(0,h.jsx)(L.N,{children:l&&r&&(0,h.jsx)(O.P.div,{initial:{height:0,opacity:0,overflow:"hidden"},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.25,ease:[.4,0,.2,1]},children:(0,h.jsx)(D,{children:(0,h.jsx)(d.A,{tokens:r})})})})]})},_=i.Ay.div`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${e=>{let{theme:t}=e;return t.spacing.small}};

  ${e=>{let{theme:t}=e;return t.media.up("md")`
    padding: 0;
  `}}
`,F=i.Ay.div`
  display: grid;
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
`,V=i.Ay.article`
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
`,K=i.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,M=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xxlarge}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  line-height: 1;
  filter: grayscale(10%);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`,Z=(0,i.Ay)(O.P.div).attrs(e=>({as:e.as||"h3"}))`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin: 0;
  line-height: 1.3;
  transition: color 0.25s ease-in-out;
`,U=(0,i.Ay)(O.P.p)`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  flex: 1;
  position: relative;
  width: 100%;
  transition: color 0.25s ease-in-out;
  padding-bottom: ${e=>{let{$isExpanded:t}=e;return t?"5.5rem":"0"}};

  p {
    margin-bottom: 1em;
  }

  p:last-child {
    margin-bottom: 0;
  }
`,G=i.Ay.div`
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
          ${e=>{let{theme:t}=e;const r=t.colors.cardBackground||t.colors.background,o=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,r,o)=>`#${t}${t}${r}${r}${o}${o}`).substring(1).match(/.{2}/g).map(e=>parseInt(e,16));return o?o.join(","):"255,255,255"}},
          0
        )
        0%,
      rgba(
          ${e=>{let{theme:t}=e;const r=t.colors.cardBackground||t.colors.background,o=r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(e,t,r,o)=>`#${t}${t}${r}${r}${o}${o}`).substring(1).match(/.{2}/g).map(e=>parseInt(e,16));return o?o.join(","):"255,255,255"}},
          0.9
        )
        100%
    );
    pointer-events: none;
  }
`,J=i.Ay.button`
  background: none;
  border: none;
  color: ${e=>{let{theme:t}=e;return t.colors.buttonBg}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  font-weight: 700;
  cursor: pointer;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} 0;
  align-self: flex-start;
  transition: color 0.25s ease-in-out, transform 0.25s ease;
  display: flex;
  align-items: center;
  gap: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  z-index: 1;

  &:hover {
    border: none;
    box-shadow: none;
    color: ${e=>{let{theme:t}=e;return t.colors.hoverBtn}};
    transform: ${e=>{let{$isExpanded:t}=e;return t?"translateY(-2px)":"translateY(2px)"}};
  }
`,Q=160,X=o.memo(e=>{let{card:t,index:r,isExpanded:n,toggleExpand:i,handleRowBlur:l,titleLevel:s}=e;const a=(0,o.useRef)(null),[c,u]=(0,o.useState)(!1),[m,p]=(0,o.useState)(Q);return(0,o.useEffect)(()=>{const e=()=>{if(a.current){const{scrollHeight:e}=a.current;u(e>Q),p(e>Q?e:Q)}};e(),window.addEventListener("resize",e);const t=setTimeout(e,150);return()=>{window.removeEventListener("resize",e),clearTimeout(t)}},[t.content]),(0,o.useEffect)(()=>{n&&a.current?p(a.current.scrollHeight):n||p(Q)},[n]),(0,h.jsxs)(V,{onBlur:l,tabIndex:c?0:-1,"aria-expanded":n,children:[(0,h.jsxs)(K,{children:[(0,h.jsx)(M,{role:"img","aria-label":`Emoji for ${t.title}`,children:t.emoji}),(0,h.jsx)(Z,{as:`h${s}`,children:(0,h.jsx)(d.A,{tokens:t.title})})]}),(0,h.jsx)(O.P.div,{layout:!0,initial:{height:Q},animate:{height:n?m:Q,opacity:1},transition:{duration:.25,ease:[.4,0,.2,1]},style:{overflow:"hidden",width:"100%"},children:(0,h.jsx)(U,{ref:a,$isExpanded:n,id:`card-content-${r}`,children:(0,h.jsx)(d.A,{tokens:t.content})})}),c&&(0,h.jsx)(G,{$isExpanded:n,children:(0,h.jsx)(J,{onClick:e=>{e.stopPropagation(),i(r)},"aria-controls":`card-content-${r}`,tabIndex:0,$isExpanded:n,children:n?(0,h.jsx)(h.Fragment,{children:"\u0417\u0433\u043e\u0440\u043d\u0443\u0442\u0438"}):(0,h.jsx)(h.Fragment,{children:"\u0427\u0438\u0442\u0430\u0442\u0438 \u0434\u0430\u043b\u0456"})})})]})}),ee=(e,t)=>{switch(t.type){case"ACTIVATE_ROW":return t.payload.rowIndex;case"DEACTIVATE_ROW":return null;default:return e}},te=e=>{let{cards:t,titleLevel:r}=e;const[n,i]=(0,o.useReducer)(ee,null),[l,s]=(0,o.useState)(3),a=(0,o.useRef)(null),d=(0,o.useCallback)(()=>window.innerWidth<=768?1:window.innerWidth<=1200?2:3,[]);(0,o.useEffect)(()=>{const e=()=>{s(d()),i({type:"DEACTIVATE_ROW"})};return window.addEventListener("resize",e),s(d()),()=>{window.removeEventListener("resize",e)}},[d]);const c=(0,o.useCallback)(e=>{const t=Math.floor(e/l);i(n===t?{type:"DEACTIVATE_ROW"}:{type:"ACTIVATE_ROW",payload:{rowIndex:t}})},[n,l]),u=(0,o.useCallback)(e=>{a.current&&!a.current.contains(e.relatedTarget)&&i({type:"DEACTIVATE_ROW"})},[]),m=(0,o.useCallback)(()=>{i({type:"DEACTIVATE_ROW"})},[]);return(0,h.jsx)(_,{children:(0,h.jsx)(F,{ref:a,children:t.map((e,t)=>{const o=Math.floor(t/l),i=n===o;return(0,h.jsx)(X,{card:e,index:t,isExpanded:i,toggleExpand:c,collapseCard:m,handleRowBlur:u,titleLevel:r},t)})})})},re=i.Ay.ul`
  padding-left: 20px;
  list-style-type: none;
  margin-left: 0;
`,oe=i.Ay.li`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.5;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};

  // ✅ Стилі для вирівнювання іконки та тексту
  display: flex;
  align-items: baseline;
`,ne=i.Ay.span`
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: 0.5em;
  transform: translateY(-0.1em);
`,ie=i.Ay.div`
  // ✅ Видалено display: flex та flex-direction: column
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
`;var le=r(184);const se=e=>{let{items:t}=e;return t&&0!==t.length?(0,h.jsx)(re,{children:t.map((e,t)=>(0,h.jsxs)(oe,{children:[(0,h.jsx)(ne,{children:(0,h.jsx)(le.Qp1,{})}),(0,h.jsx)(ie,{children:(0,h.jsx)(d.A,{tokens:e})})]},t))}):null},ae=(0,i.Ay)(O.P.section)`
  margin: ${e=>{let{theme:t}=e;return t.spacing.xlarge}} 0;
  position: relative;
  padding-left: 30px;
  padding-top: 5px;
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
    transition: background-color 0.25s ease-in-out;
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding-left: 20px;
    padding-right: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
    
    &::before {
      left: 9px;
    }
  `}}
`,de=(i.Ay.div`
  display: none;
`,(0,i.Ay)(O.P.div)`
  position: relative;
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}};
  padding-left: 30px;
  text-align: left;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding-left: 20px;
    margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  `}}
`),ce=(0,i.Ay)(O.P.div)`
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
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    width: 10px;
    height: 10px;
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.background}};
  `}}
`,ue=(0,i.Ay)(O.P.div)`
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
  transition: background-color 0.25s ease-in-out, border-color 0.25s ease-in-out;
`,me=i.Ay.h3.attrs(e=>({as:e.as||"h4"}))`
  color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  margin: 0;
  font-weight: bold;
  line-height: 1.3;
  transition: color 0.25s ease-in-out;

  display: flex;

  & > div:first-of-type {
    flex-wrap: wrap;
    flex-grow: 1;
    margin-right: 10px;
  }

  & > span {
    flex-shrink: 0;
    line-height: 1.3;
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
    color: ${e=>{let{theme:t}=e;return t.colors.colorSecondary}};
    transition: color 0.25s ease-in-out;
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
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  white-space: nowrap;
  font-weight: normal;
  transition: color 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xsmall}};
  `}}
`,pe=(i.Ay.p`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  line-height: 1.5;
  margin-bottom: 0;
  word-wrap: break-word;
  transition: color 0.25s ease-in-out;

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
  transition: border-top-color 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    gap: 6px;
    margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
    padding-top: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
  `}}
`),ge=(0,i.Ay)(O.P.div)`
  overflow: hidden;
`,xe=(0,i.Ay)(O.P.div)`
  padding-top: 0.8rem; /* Перемістили padding-top сюди */
  /* Зміни в opacity можна застосовувати тут, якщо потрібно */
`,fe=e=>{let{isOpen:t,children:r,...o}=e;return(0,h.jsx)(L.N,{initial:!1,children:t&&(0,h.jsx)(ge,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{height:"auto",opacity:1},collapsed:{height:0,opacity:0}},transition:{duration:.25,ease:[.4,0,.2,1]},layout:!0,...o,children:(0,h.jsx)(xe,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2,delay:.1},children:r})})})},be=e=>{let{events:t,eventTitleLevel:r=4}=e;const{currentTheme:n}=(0,C.D)(),[i,l]=(0,o.useState)(null),s=e=>{e.stopPropagation()};return(0,h.jsx)(ae,{children:t.map((e,t)=>(0,h.jsxs)(de,{children:[(0,h.jsx)(ce,{animate:i===t?{scale:[1,1.2,1],backgroundColor:n.accentColor}:{scale:1,backgroundColor:n.accentColor},transition:{duration:.5,repeat:i===t?1/0:0,repeatType:"loop"}}),(0,h.jsxs)(ue,{onClick:()=>(e=>{l(i===e?null:e)})(t),whileHover:{scale:1.03},transition:{scale:{duration:.15,ease:"easeOut"},backgroundColor:{duration:.2,ease:"easeOut"}},animate:{scale:i===t?1.03:1,backgroundColor:i===t?n.hoverBg:n.cardBackground},children:[(0,h.jsxs)(me,{as:`h${r}`,style:{cursor:"pointer"},children:[(0,h.jsxs)("span",{children:[e.year&&(0,h.jsx)(he,{children:e.year}),(0,h.jsx)(d.A,{tokens:e.title,isHeading:!0})]}),(0,h.jsx)(O.P.span,{initial:!1,animate:{rotate:i===t?90:0},transition:{duration:.2},style:{marginLeft:"10px",display:"inline-block"},children:"\u25b6"})]}),(0,h.jsxs)(fe,{isOpen:i===t,children:[e.description&&(0,h.jsx)("p",{children:Array.isArray(e.description)?e.description.map((e,t)=>(0,h.jsx)(d.A,{tokens:e},t)):(0,h.jsx)(d.A,{tokens:e.description})}),e.verses&&e.verses.length>0&&(0,h.jsx)(pe,{onClick:s,children:e.verses.map((e,t)=>(0,h.jsx)(d.A,{tokens:e},t))})]})]})]},t))})},$e=i.Ay.section`
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.large}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.large}};
  width: 100%;
  box-sizing: border-box;
  padding: 0 ${e=>{let{theme:t}=e;return t.spacing.small}};

  ${e=>{let{theme:t}=e;return t.media.up("sm")`
    padding: 0;
  `}}
`,ye=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  justify-content: center;
  align-items: stretch;
  width: 100%;
`,je=i.Ay.div`
  flex: 1 1 auto;
  max-width: calc(50% - ${e=>{let{theme:t}=e;return t.spacing.small}});

  display: flex;
  flex-direction: column;
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  box-sizing: border-box;

  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  transition: all 0.25s ease-in-out;

  background-color: ${e=>"positive"===e.$type?e.theme.colors.positiveBackground:"negative"===e.$type?e.theme.colors.negativeBackground:"neutral1"===e.$type?e.theme.colors.neutralBackground1:"neutral2"===e.$type?e.theme.colors.neutralBackground2:e.theme.colors.cardBackground};
  border: 1px solid
    ${e=>"positive"===e.$type?e.theme.colors.positiveBorder:"negative"===e.$type?e.theme.colors.negativeBorder:"neutral1"===e.type?e.theme.colors.neutralBorder1:"neutral2"===e.type?e.theme.colors.neutralBorder2:e.theme.colors.borderColor};

  &:hover {
    box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
    transform: translateY(-2px);
  }

  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    max-width: 100%;
  `}}
  min-width: 280px;
`,we=i.Ay.div.attrs(e=>({as:e.as||"h4"}))`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.large}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};

  flex-wrap: wrap;
  word-break: break-word;
  color: ${e=>"positive"===e.$type?e.theme.colors.positiveText:"negative"===e.$type?e.theme.colors.negativeText:"neutral1"===e.$type?e.theme.colors.neutralText1:"neutral2"===e.$type?e.theme.colors.neutralText2:e.theme.colors.color};
`,ve=i.Ay.span`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.xlarge}};
  margin-right: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,ke=i.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};

  p {
    margin-bottom: 1em;
  }
  p:last-child {
    margin-bottom: 0;
  }
`,Ae=e=>{let{items:t,itemTitleLevel:r=4}=e;if(!t||t.length<2)return null;return(0,h.jsx)($e,{as:"section",children:(0,h.jsx)(ye,{children:t.map((e,t)=>{return(0,h.jsxs)(je,{$type:e.type,children:[(0,h.jsxs)(we,{as:`h${r}`,$type:e.type,children:[e.emoji&&(0,h.jsx)(ve,{children:e.emoji}),(0,h.jsx)(d.A,{tokens:e.heading,isHeading:!0})]}),(0,h.jsx)(ke,{children:(0,h.jsx)("p",{children:(o=e.content,Array.isArray(o)?o.map((e,t)=>(0,h.jsx)(d.A,{tokens:e},t)):"string"===typeof o?(0,h.jsx)(d.A,{tokens:o}):null)})})]},t);var o})})})},ze=i.Ay.section`
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  display: flex;
  flex-direction: column;
  gap: ${e=>{let{theme:t}=e;return t.spacing.large}};
  align-items: center;
  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

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
`,Ce=i.Ay.p`
  flex: 2;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  line-height: 1.6;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  transition: color 0.25s ease-in-out;

  p {
    margin-bottom: 1em;
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    transition: color 0.25s ease-in-out;
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
  transition: background-color 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.up("md")`
    max-width: 45%;
  `}}
`,Be=i.Ay.img`
  max-width: 100%;
  height: auto;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.extraSmall}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,Ye=i.Ay.figcaption`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.textColorLight}};
  line-height: 1.4;
  transition: color 0.25s ease-in-out;
`,Ie=e=>{let{content:t,imageUrl:r,altText:o,caption:n,imagePosition:i}=e;return t||r?(0,h.jsx)(ze,{imagePosition:i,children:(0,h.jsxs)("div",{className:"content-area",children:[t&&(0,h.jsx)(Ce,{children:t.map((e,t)=>(0,h.jsx)(d.A,{tokens:e},t))}),r&&(0,h.jsxs)(Se,{children:[(0,h.jsx)(Be,{src:r,alt:o}),n&&(0,h.jsx)(Ye,{children:n})]})]})}):null},Ee=i.Ay.figure`
  background-color: ${e=>{let{theme:t}=e;return t.colors.background}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  text-align: center;
  transition: all 0.25s ease-in-out;
  display: block; // Ensures the figure element behaves like a block container
  margin: 0;
  ${e=>{let{theme:t}=e;return t.media.down("sm")`
    padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  `}}
`,Re=i.Ay.img`
  max-width: 100%;
  height: auto;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: border-radius 0.25s ease-in-out;
`,Te=i.Ay.figcaption`
  font-style: italic;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  margin-top: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  transition: color 0.25s ease-in-out, font-size 0.25s ease-in-out;
`;const Le=function(e){let{imageUrl:t,caption:r,altText:o}=e;return(0,h.jsxs)(Ee,{children:[t?(0,h.jsx)(Re,{src:t,alt:o||"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"}):(0,h.jsx)("p",{children:"\u0417\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0454."}),r&&(0,h.jsx)(Te,{children:(0,h.jsx)(d.A,{tokens:r})})]})},Oe=i.Ay.div`
  width: 100%;
  overflow-x: auto;
  margin: ${e=>{let{theme:t}=e;return t.spacing.large}} 0;
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  overflow: hidden;
  transition: all 0.25s ease-in-out;
`,Pe=i.Ay.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};

  @media (max-width: 767px) {
    display: none;
  }
`,He=i.Ay.h4`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.small}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  transition: color 0.25s ease-in-out;
`,Ne=(i.Ay.div`
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.medium}};
  font-weight: bold;
  padding: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  color: ${e=>{let{theme:t}=e;return t.colors.headingColor}};
  background-color: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border-top-left-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  border-top-right-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  transition: color 0.25s ease-in-out, background-color 0.25s ease-in-out;
`,i.Ay.thead`
  background-color: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.tableHeaderText}};
  text-align: left;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
`),qe=i.Ay.tbody`
  background-color: ${e=>{let{theme:t}=e;return t.colors.tableHeaderBackground}};
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;
`,De=i.Ay.tr`
  &:nth-child(even) {
    background-color: ${e=>{let{theme:t}=e;return t.colors.tableEvenRowBackground}};
  }
  transition: background-color 0.25s ease-in-out;
`,We=i.Ay.th`
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  font-weight: bold;
  transition: border-color 0.25s ease-in-out;
`,_e=i.Ay.td`
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  vertical-align: top;
  transition: border-color 0.25s ease-in-out;
`,Fe=i.Ay.p`
  margin: 0 0 ${e=>{let{theme:t}=e;return t.spacing.xsmall}} 0;

  &:last-child {
    margin-bottom: 0;
  }
`,Ve=i.Ay.div`
  display: flex;
  gap: ${e=>{let{theme:t}=e;return t.spacing.medium}};
  overflow-x: auto;
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}} ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`,Ke=i.Ay.div`
  min-width: 92vw;
  max-width: 92vw;
  box-sizing: border-box;
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.small}} 0;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  border: 1.5px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  margin: 0 ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,Me=i.Ay.div`
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  min-height: 44px;
  &:last-child {
    border-bottom: none;
  }
`,Ze=i.Ay.div`
  width: 42%;
  font-weight: bold;
  color: ${e=>{let{theme:t}=e;return t.colors.tableHeaderText}};
  background: ${e=>{let{theme:t}=e;return t.colors.cardBackground}};
  border-right: 1px solid ${e=>{let{theme:t}=e;return t.colors.borderColor}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.small}};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  word-break: break-word;
  min-height: 44px;
`,Ue=i.Ay.div`
  width: 58%;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.xsmall}} ${e=>{let{theme:t}=e;return t.spacing.small}};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  word-break: break-word;
  min-height: 44px;

  & > p {
    margin: 0 0 ${e=>{let{theme:t}=e;return t.spacing.xsmall}} 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`,Ge=e=>"string"===typeof e||e&&"object"===typeof e&&"type"in e,Je=e=>Array.isArray(e)&&e.some(Array.isArray);const Qe=e=>{let{tableTitle:t,headers:r,rows:n}=e;const i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:768;const[t,r]=o.useState("undefined"!==typeof window&&window.innerWidth<e);return o.useEffect(()=>{const t=()=>r(window.innerWidth<e);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[e]),t}();if(!r||!Array.isArray(r)||!n||!Array.isArray(n))return null;const l=e=>{return Je(e)?e.map((e,t)=>(0,h.jsx)(Fe,{children:(0,h.jsx)(d.A,{tokens:e})},t)):(t=e,Array.isArray(t)&&t.every(Ge)||"string"===typeof e||e&&"object"===typeof e?(0,h.jsx)(d.A,{tokens:e}):null);var t};return i?(0,h.jsxs)(Oe,{children:[t&&(0,h.jsx)(He,{children:(0,h.jsx)(d.A,{tokens:t})}),(0,h.jsx)(Ve,{children:n.map((e,t)=>(0,h.jsx)(Ke,{children:r.map((t,r)=>{return(0,h.jsxs)(Me,{children:[(0,h.jsx)(Ze,{children:(0,h.jsx)(d.A,{tokens:t})}),(0,h.jsx)(Ue,{children:(o=e[r],Je(o)?o.map((e,t)=>(0,h.jsx)(Fe,{children:(0,h.jsx)(d.A,{tokens:e})},t)):(0,h.jsx)(d.A,{tokens:o}))})]},r);var o})},t))})]}):(0,h.jsxs)(Oe,{children:[t&&(0,h.jsx)(He,{children:(0,h.jsx)(d.A,{tokens:t})}),(0,h.jsxs)(Pe,{children:[(0,h.jsx)(Ne,{children:(0,h.jsx)(De,{children:r.map((e,t)=>(0,h.jsx)(We,{children:(0,h.jsx)(d.A,{tokens:e})},t))})}),(0,h.jsx)(qe,{children:n.map((e,t)=>(0,h.jsx)(De,{children:e.map((e,t)=>(0,h.jsx)(_e,{children:l(e)},t))},t))})]})]})},Xe=e=>{let{sections:t,allSectionsWithIds:r,parentIndex:o=[],level:n=2}=e;return t&&Array.isArray(t)?t.map((e,t)=>{const i=[...o,t],l=n,s=n+1,a=r.find(e=>JSON.stringify(e.originalIndex)===JSON.stringify(i)),c=null===a||void 0===a?void 0:a.id,u=Array.isArray(e.title)&&"string"===typeof e.title[0]&&e.title[0].trim().length>0;switch(e.type){case"list":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(se,{items:e.items})]},t);case"quiz":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(x.A,{quizData:e,titleLevel:s})]},t);case"reveal-cards":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),e.cards.map((e,t)=>(0,h.jsx)(f.A,{...e,titleLevel:s},t))]},t);case"highlight-box":return(0,h.jsx)(tt,{children:(0,h.jsx)(T,{...e,titleLevel:l,id:c})},t);case"question-prompt":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(W,{question:e.question,answer:e.answer,emoji:e.emoji,headingLevel:s})]},t);case"list-cards":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(te,{cards:e.cards,titleLevel:s})]},t);case"timeline":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(be,{events:e.events,eventTitleLevel:s})]},t);case"contrast-section":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(Ae,{items:e.items,itemTitleLevel:s})]},t);case"diagram":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(B,{...e,titleLevel:s})]},t);case"description-with-image":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(Ie,{...e,titleLevel:s})]},t);case"image-placeholder":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(Le,{...e})]},t);case"text":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"medium",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),e.subtitle&&(0,h.jsx)(g.A,{as:`h${Math.min(l+1,6)}`,size:"small",children:(0,h.jsx)(d.A,{tokens:e.subtitle})}),e.content.map((e,t)=>(0,h.jsx)("p",{children:(0,h.jsx)(d.A,{tokens:e})},t))]},t);case"section-group":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"default",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(Xe,{sections:e.sections,allSectionsWithIds:r,parentIndex:i,level:s})]},t);case"table":return(0,h.jsxs)(tt,{children:[u&&(0,h.jsx)(g.A,{as:`h${l}`,size:"default",id:c,children:(0,h.jsx)(d.A,{tokens:e.title})}),(0,h.jsx)(Qe,{tableTitle:e.tableTitle,headers:e.headers,rows:e.rows})]},t);default:return console.warn("\u041d\u0435\u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u0442\u0438\u043f \u0441\u0435\u043a\u0446\u0456\u0457:",e.type),null}}):null},et=Xe,tt=i.Ay.section`
  margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xlarge}};
`;var rt=r(423),ot=r(4112);const nt=i.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;

  li {
    margin: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}} 0;
    line-height: 1.2;
    &:not(:last-child) {
      margin-bottom: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}};
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: underline;
    }
  }
`,it=e=>{let{headings:t,alignment:r}=e;if(!t||0===t.length)return(0,h.jsx)("span",{children:"\u041d\u0435\u043c\u0430\u0454 \u043f\u0456\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0456\u0432"});const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.map(e=>(0,h.jsxs)("li",{children:[(0,h.jsx)("a",{href:`#${e.id}`,children:e.title}),e.children&&e.children.length>0&&(0,h.jsx)("ul",{style:{marginLeft:`${t+15}px`},children:o(e.children,0)})]},e.id))};return(0,h.jsx)(nt,{alignment:r,children:o(t)})},lt=i.Ay.div`
  display: flex;
  align-items: center;
  position: sticky;

  top: ${e=>{let{$showNav:t}=e;return t?"-9px":"-79px"}};

  z-index: 999;
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.colors.navBg}};
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.medium}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.medium}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.navItemActive}};
  padding: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}} 0;

  transition: top 0.25s ease-in-out, background 0.25s ease-in-out, box-shadow 0.25s ease-in-out,
    border-color 0.25s ease-in-out;

  ${e=>{let{theme:t}=e;return t.media.down("md")`
  display: none;
  `}}
`,st=i.Ay.button`
  background-color: ${e=>{let{theme:t}=e;return t.colors.buttonBg}};
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadows.small}};
  padding: 0;
  margin: 0 ${e=>{let{theme:t}=e;return t.spacing.xsmall}};

  color: ${e=>{let{theme:t}=e;return t.colors.buttonColor}};

  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out;

  flex-shrink: 0; // Це вирішує проблему

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.hoverBtn}};
  }
  &:active {
    transform: scale(0.95);
  }
  svg {
    width: 20px;
    height: 20px;
    fill: ${e=>{let{theme:t}=e;return t.colors.buttonColor}};
    transition: fill 0.25s ease-in-out;
  }
`,at=i.Ay.nav`
  flex-grow: 1;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,dt=i.Ay.ul`
  display: inline-flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
`,ct=i.Ay.li`
  flex-shrink: 0;
  min-width: fit-content;
`,ut=i.Ay.a`
  display: block;
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.colors.color}};
  background-color: transparent;
  padding: ${e=>{let{theme:t}=e;return t.spacing.xxsmall}} ${e=>{let{theme:t}=e;return t.spacing.xsmall}};
  border-radius: ${e=>{let{theme:t}=e;return t.borderRadius.small}};
  font-size: ${e=>{let{theme:t}=e;return t.fontSizes.small}};
  white-space: normal;
  line-height: 1.2;
  border-bottom: 2px solid transparent; /* Додаємо прозорий бордер для плавної анімації */

  transition: all 0.25s ease-in-out;

  &.active {
    background-color: ${e=>{let{theme:t}=e;return t.colors.navItemActive}};
    color: ${e=>{let{theme:t}=e;return t.colors.accentColor}};
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.accentColor}}; /* Виділяємо активний бордер */
  }

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.colors.navItemHover}};
    border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.accentColor}}; /* Додаємо бордер при наведенні */
  }

  &:focus {
    border: 1px solid ${e=>{let{theme:t}=e;return t.colors.navItemActive}};
  }
`,mt=e=>{const t=[];let r=e.nextElementSibling;for(;r&&"h2"!==r.tagName.toLowerCase();){r.id&&r.tagName.toLowerCase().startsWith("h")&&t.push({id:r.id,title:r.textContent,level:parseInt(r.tagName.substring(1))});r.querySelectorAll("h3[id], h4[id], h5[id], h6[id]").forEach(e=>{t.push({id:e.id,title:e.textContent,level:parseInt(e.tagName.substring(1))})}),r=r.nextElementSibling}return t},ht=e=>{let{sections:t,$showNav:r,$navHeight:n}=e;const[i,l]=(0,o.useState)(""),[s,a]=(0,o.useState)([]),d=(0,o.useRef)(null),c=(0,o.useRef)(null);(0,o.useEffect)(()=>{const e=Array.from(document.querySelectorAll("h2[id]"));if(0===e.length)return void a([]);const t=e.map(e=>({id:e.id,title:e.textContent,nestedHeadings:mt(e)}));a(t)},[t]),(0,o.useEffect)(()=>{const e=Array.from(document.querySelectorAll("h2[id]"));if(0===e.length)return;const t=new IntersectionObserver(e=>{let t=null;const r=e.find(e=>e.isIntersecting);if(r)t=r.target.id;else{const r=e.filter(e=>!e.isIntersecting).sort((e,t)=>t.target.getBoundingClientRect().top-e.target.getBoundingClientRect().top);r.length>0&&(t=r[0].target.id)}t&&l(t)},{root:null,rootMargin:"0px 0px -80% 0px",threshold:0});return e.forEach(e=>t.observe(e)),()=>t.disconnect()},[t]),(0,o.useEffect)(()=>{if(i&&c.current){const e=c.current.querySelector(".active");e&&e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}},[i]);const u=e=>{if(!c.current)return;const t=Array.from(c.current.children),r=t.findIndex(e=>e.querySelector(".active"));let o=r;"right"===e&&r<t.length-1?o=r+1:"left"===e&&r>0&&(o=r-1);if(t[o]){var n;const e=null===(n=s[o])||void 0===n?void 0:n.id;if(e){l(e);const t=document.getElementById(e);if(t){const e=80,r=t.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:r,behavior:"smooth"})}}}};return 0===s.length?null:(0,h.jsxs)(lt,{$showNav:r,$navHeight:n,children:[(0,h.jsx)(st,{onClick:()=>u("left"),"aria-label":"\u041f\u0440\u043e\u043a\u0440\u0443\u0442\u0438\u0442\u0438 \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044e \u0432\u043b\u0456\u0432\u043e",children:(0,h.jsx)(rt.m6W,{size:24})}),(0,h.jsx)(at,{ref:d,children:(0,h.jsx)(dt,{ref:c,children:s.map(e=>{let{id:t,title:r,nestedHeadings:o}=e;return(0,h.jsx)(ct,{children:o.length>0?(0,h.jsx)(ot.A,{content:(0,h.jsx)(it,{headings:o}),alignment:"center",children:(0,h.jsx)(ut,{href:`#${t}`,className:i===t?"active":"",onClick:()=>l(t),children:r})}):(0,h.jsx)(ut,{href:`#${t}`,className:i===t?"active":"",onClick:()=>l(t),children:r})},t)})})}),(0,h.jsx)(st,{onClick:()=>u("right"),"aria-label":"\u041f\u0440\u043e\u043a\u0440\u0443\u0442\u0438\u0442\u0438 \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044e \u0432\u043f\u0440\u0430\u0432\u043e",children:(0,h.jsx)(rt.OQo,{size:24})})]})};var pt=r(8056);const gt=r.p+"static/media/photo-light3.4900a05613447ee31073.png",xt=r.p+"static/media/photo-dark3.f7a779db26d27647fa17.png",ft=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.forEach((e,o)=>{const n=[...t,o];if(Array.isArray(e.title)&&"string"===typeof e.title[0]&&e.title[0].trim().length>0){const t=e.title[0],o=((e,t)=>{const r=Array.isArray(t)?t.join("-"):t;return"string"===typeof e&&e.trim()?`${e.trim().toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/[\s-]+/g,"-")}-${r}`:`section-${r}`})(t,n);r.push({id:o,title:t,originalIndex:n})}"section-group"===e.type&&e.sections&&(r=r.concat(ft(e.sections,n)))}),r},bt=o.memo(e=>{let{lessonData:t}=e;const r=(0,i.DP)(),{showNav:l,navHeight:s}=(0,n.KC)(),c=(0,o.useMemo)(()=>t&&t.sections?ft(t.sections):[],[t]);if(!t)return(0,h.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443 \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438..."});const{title:u,author:m,book:g,chapter:x,verses:f,date:b,duration:$,theme:y,tags:j,description:w,sections:v}=t,k="#FEFBF2"===r.colors.background?gt:xt;return(0,h.jsxs)(pt.Sg,{children:[(0,h.jsx)(pt.KE,{$heroImage:k,children:(0,h.jsxs)(pt.R4,{children:[(0,h.jsx)("h1",{children:(0,h.jsx)(d.A,{tokens:u})}),(0,h.jsx)(p,{author:m,book:g,chapter:x,verses:f,date:b,duration:$,theme:y,tags:j})]})}),c.length>0&&(0,h.jsx)(ht,{sections:c,$showNav:l,$navHeight:s}),(0,h.jsx)(pt.IZ,{children:(0,h.jsx)(a.A,{children:(0,h.jsxs)(pt.tG,{children:[(0,h.jsx)(pt.yO,{children:(0,h.jsx)(d.A,{tokens:w})}),(0,h.jsx)(et,{sections:v,allSectionsWithIds:c,parentIndex:[],level:2})]})})})]})});var $t=r(6841),yt=r(5003),jt=r(6139);const wt=/\[bold:(.*?)]/,vt=/\[italic:(.*?)]/,kt=/\[verse:([a-z0-9_]+(?::[\d:,-]+)*):([^\]]+)]/,At=/\[link:([^:]+):([^\]]+)]/,zt=/\[img:([^:]+):([^:]+):([^\]]+)]/,Ct=/\[highlight:(.*?)]/,St=/\[quote:(.*?)]/,Bt=e=>{if("string"!==typeof e)return e;const t=new RegExp(`(${wt.source}|${vt.source}|${kt.source}|${At.source}|${zt.source}|${Ct.source}|${St.source})`,"gi"),r=[];let o,n=0;for(;null!==(o=t.exec(e));){const t=e.slice(n,o.index);t&&r.push(t);const i=o[0];let l=null;if(wt.test(i)){const e=i.match(wt)[1];l={type:"bold",content:Bt(e)}}else if(vt.test(i)){const e=i.match(vt)[1];l={type:"italic",content:Bt(e)}}else if(Ct.test(i)){const e=i.match(Ct)[1];l={type:"highlight",content:Bt(e)}}else if(St.test(i)){const e=i.match(St)[1];l={type:"quote",content:Bt(e)}}else if(kt.test(i)){const e=i.match(kt);l={type:"bible-link",bibleRef:e[1],content:e[2]}}else if(At.test(i)){const e=i.match(At);l={type:"link",url:e[1],content:Bt(e[2])}}else if(zt.test(i)){const e=i.match(zt);l={type:"image",url:e[1],alt:e[2],caption:Bt(e[3])}}l&&r.push(l),n=o.index+i.length}const i=e.slice(n);return i&&r.push(i),r};var Yt=r(2016);const It=Yt.RZ(()=>Yt.KC([Yt.Yj(),Yt.YO(Yt.KC([Yt.Yj(),Yt.Ik({type:Yt.eu("bold"),content:It}),Yt.Ik({type:Yt.eu("italic"),content:It}),Yt.Ik({type:Yt.eu("bible-link"),bibleRef:Yt.Yj(),content:Yt.Yj()}),Yt.Ik({type:Yt.eu("link"),url:Yt.Yj(),content:It}),Yt.Ik({type:Yt.eu("image"),url:Yt.Yj(),alt:Yt.Yj(),caption:It}),Yt.Ik({type:Yt.eu("highlight"),content:It}),Yt.Ik({type:Yt.eu("quote"),content:It})])).default([])])),Et=Yt.Ik({title:It.optional()}),Rt=Et.extend({type:Yt.eu("text"),subtitle:It.optional(),content:Yt.YO(It).default([])}),Tt=Et.extend({type:Yt.eu("list"),items:Yt.YO(It).default([])}),Lt=Et.extend({type:Yt.eu("list-cards"),cards:Yt.YO(Yt.Ik({title:It,content:It,emoji:Yt.Yj().optional()})).default([])}),Ot=Et.extend({type:Yt.eu("highlight-box"),content:It,emoji:Yt.Yj().optional()}),Pt=Et.extend({type:Yt.eu("question-prompt"),question:It,answer:It.optional(),emoji:Yt.Yj().optional()}),Ht=Et.extend({type:Yt.eu("timeline"),events:Yt.YO(Yt.Ik({year:Yt.Yj().optional(),title:It,description:It.optional(),verses:Yt.YO(It).default([])})).default([])}),Nt=Et.extend({type:Yt.eu("reveal-cards"),cards:Yt.YO(Yt.Ik({id:Yt.Yj(),emoji:Yt.Yj().optional(),title:It.optional(),content:It})).default([])}),qt=Et.extend({type:Yt.eu("quiz"),id:Yt.Yj(),question:It,options:Yt.YO(Yt.Ik({text:It,isCorrect:Yt.zM(),rationale:It.optional()})).default([]),hint:It.optional()}),Dt=Et.extend({type:Yt.eu("diagram"),chartType:Yt.Yj(),description:It.optional(),chartData:Yt.bz(),chartOptions:Yt.bz()}),Wt=Et.extend({type:Yt.eu("image-placeholder"),description:It.optional(),imageUrl:Yt.Yj(),altText:Yt.Yj().optional(),caption:It.optional()}),_t=Et.extend({type:Yt.eu("description-with-image"),content:Yt.YO(It).default([]),imageUrl:Yt.Yj(),altText:Yt.Yj().optional(),caption:It.optional(),imagePosition:Yt.Yj().optional()}),Ft=Et.extend({type:Yt.eu("contrast-section"),items:Yt.YO(Yt.Ik({heading:It,content:It,emoji:Yt.Yj().optional(),type:Yt.Yj()})).default([])}),Vt=Et.extend({type:Yt.eu("table"),tableTitle:It.optional(),headers:Yt.YO(It).default([]),rows:Yt.YO(Yt.YO(It).default([])).default([])}),Kt=Yt.RZ(()=>Yt.KC([Rt,Tt,Lt,Ot,Pt,Ht,Nt,qt,Dt,Wt,_t,Ft,Vt,Yt.Ik({type:Yt.eu("section-group"),title:It,sections:Yt.YO(Kt).default([])})])),Mt=Yt.Ik({id:Yt.Yj(),title:It,shortTitle:Yt.Yj(),book:Yt.Yj(),bookInternalKey:Yt.Yj(),chapter:Yt.Yj(),verses:Yt.Yj(),date:Yt.Yj(),author:Yt.Yj(),duration:Yt.Yj(),tags:Yt.YO(Yt.Yj()).default([]),description:It.optional(),sections:Yt.YO(Kt).default([])}),Zt=e=>{if("string"===typeof e)return Bt(e);if(Array.isArray(e))return e.map(e=>Zt(e));if("object"===typeof e&&null!==e){const t={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]="type"===r||"chartType"===r?e[r]:Zt(e[r]));return t}return e},Ut=()=>{const{mainRef:e}=(0,n.KC)(),{selectedHomeGroupLesson:t,setSelectedHomeGroupLesson:r}=(0,yt.t)(),[i,a]=(0,o.useState)(null),[d,c]=(0,o.useState)(null),[u,m]=(0,o.useState)(!0),p=(0,n.zy)();return(0,o.useEffect)(()=>{if(!t){const e=(()=>{for(const e of jt.Z)if("old-testament-books"===e.id||"new-testament-books"===e.id){const t="old-testament-books"===e.id?jt.j9:jt.oC;for(const e of t){const t=$t.H[e.internalKey];if(t&&t.length>0)return t[0].id}}else if("thematic"===e.type||"special"===e.type){const t=$t.H[e.id];if(t&&t.length>0)return t[0].id}return null})();e?r(e):m(!1)}},[t,r]),(0,o.useEffect)(()=>{if(!t)return;(async()=>{m(!0),c(null);const e=(e=>{if(!e)return null;for(const t in $t.H){const r=$t.H[t];if(r){const t=r.find(t=>t.id===e);if(t)return t}}return null})(t);if(e&&e.loadLesson)try{const t=(await e.loadLesson()).default,{success:r,lesson:o,error:n}=(e=>{try{const t=Mt.parse(e);return{success:!0,lesson:Zt(t),error:null}}catch(d){return console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u0457 \u0443\u0440\u043e\u043a\u0443:",d.message),{success:!1,lesson:null,error:d.message}}})(t);r?a(o):(c(`\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0432\u0430\u043b\u0456\u0434\u0430\u0446\u0456\u0457: ${n}`),a(null))}catch(r){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0430\u0431\u043e \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0443 \u0443\u0440\u043e\u043a\u0443:",r),c("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0443\u0440\u043e\u043a. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0456\u0437\u043d\u0456\u0448\u0435."),a(null)}finally{m(!1)}else m(!1),a(null),c("\u0423\u0440\u043e\u043a \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e.")})()},[t]),(0,o.useLayoutEffect)(()=>{if(i&&e&&e.current){const t=sessionStorage.getItem(`scrollPosition-${p.pathname}`);if(t){const r=parseInt(t,10);e.current.scrollTop=r}}},[i,e,p.pathname]),(0,h.jsx)(l,{children:u?(0,h.jsx)(s,{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0443\u0440\u043e\u043a\u0443..."}):d?(0,h.jsx)(s,{children:d}):i?(0,h.jsx)(bt,{lessonData:i}):(0,h.jsx)(s,{children:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0443\u0440\u043e\u043a \u0434\u043e\u043c\u0430\u0448\u043d\u044c\u043e\u0457 \u0433\u0440\u0443\u043f\u0438 \u0437\u0456 \u0441\u043f\u0438\u0441\u043a\u0443 \u0432 \u043c\u0435\u043d\u044e."})})};function Gt(){return(0,h.jsx)(Ut,{})}}}]);
//# sourceMappingURL=9866.b14596d0.chunk.js.map
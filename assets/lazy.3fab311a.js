import{p as r,r as n,c as u,G as c}from"./index.91479bac.js";const l=r({eager:Boolean},"lazy");function m(a,o){const e=n(!1),s=u(()=>e.value||a.eager||o.value);c(o,()=>e.value=!0);function t(){a.eager||(e.value=!1)}return{isBooted:e,hasContent:s,onAfterLeave:t}}export{l as m,m as u};
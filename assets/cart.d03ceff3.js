import{O as e}from"./index.91479bac.js";const r=e("cart",{persist:!0,state:()=>({items:[]}),getters:{itemsCount(t){return t.items.length}},actions:{addToCart(t){this.items.push(t)},removeFromCart(t){this.items.splice(t,1)}}});export{r as c};

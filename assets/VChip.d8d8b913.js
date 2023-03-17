import{i as A,ad as M,m as B,a as _,b as N,t as k,d as a,I as C,u as O,c as W,w as S,W as X,v as j}from"./index.91479bac.js";import{m as H,u as J,a as K,b as Q}from"./VBtn.62feeaa9.js";import{c as x,o as G,g as U,R as Y,m as Z,n as ee,a as le,b as ae,v as te,q as ne,d as se,w as ie,p as oe,e as ue,f as de,r as ce,y as re,z as ve,V as r,k as v}from"./router.5ecf7393.js";import{b as fe}from"./index.be5b1433.js";import{V as P}from"./VAvatar.ac826ef7.js";const R=Symbol.for("vuetify:v-chip-group");A({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:M},...H({selectedClass:"v-chip--selected"}),...x(),...B(),...G({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:i}=f;const{themeClasses:o}=_(e),{isSelected:t,select:p,next:m,prev:h,selected:g}=J(e,R);return N({VChip:{color:k(e,"color"),filter:k(e,"filter"),variant:k(e,"variant")}}),U(()=>{var u;return a(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value]},{default:()=>[(u=i.default)==null?void 0:u.call(i,{isSelected:t,select:p,next:m,prev:h,selected:g.value})]})}),{}}});const Ce=A({name:"VChip",directives:{Ripple:Y},props:{activeClass:String,appendAvatar:String,appendIcon:C,closable:Boolean,closeIcon:{type:C,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:C,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...Z(),...ee(),...le(),...K(),...ae(),...te(),...ne(),...x({tag:"span"}),...B(),...G({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,f){let{attrs:i,emit:o,slots:t}=f;const{borderClasses:p}=se(e),{colorClasses:m,colorStyles:h,variantClasses:g}=ie(e),{densityClasses:u}=oe(e),{elevationClasses:$}=ue(e),{roundedClasses:D}=de(e),{sizeClasses:z}=ce(e),{themeClasses:T}=_(e),V=O(e,"modelValue"),l=Q(e,R,!1),s=re(e,i),d=W(()=>!e.disabled&&(!!l||s.isClickable.value||e.link));function w(n){V.value=!1,o("click:close",n)}function E(n){var c;o("click",n),d.value&&((c=s.navigate)==null||c.call(s,n),l==null||l.toggle())}return()=>{var n;const c=s.isLink.value?"a":e.tag,L=!!(t.append||e.appendIcon||e.appendAvatar),q=!!(t.close||e.closable),b=!!(t.filter||e.filter)&&l,F=!!(t.prepend||e.prependIcon||e.prependAvatar),y=!l||l.isSelected.value;return V.value&&S(a(c,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":d.value,"v-chip--filter":b,"v-chip--pill":e.pill},T.value,p.value,y?m.value:void 0,u.value,$.value,D.value,z.value,g.value,l==null?void 0:l.selectedClass.value],style:[y?h.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,onClick:E},{default:()=>{var I;return[ve(d.value,"v-chip"),b&&a(r,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[a(fe,null,{default:()=>[S(a("div",{class:"v-chip__filter"},[t.filter?t.filter():a(v,null,null)]),[[j,l.isSelected.value]])]})]}),F&&a(r,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[t.prepend?a("div",{class:"v-chip__prepend"},[t.prepend()]):e.prependAvatar?a(P,{start:!0},null):e.prependIcon?a(v,{start:!0},null):void 0]}),(I=(n=t.default)==null?void 0:n.call(t,{isSelected:l==null?void 0:l.isSelected.value,selectedClass:l==null?void 0:l.selectedClass.value,select:l==null?void 0:l.select,toggle:l==null?void 0:l.toggle,value:l==null?void 0:l.value.value,disabled:e.disabled}))!=null?I:e.text,L&&a(r,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[t.append?a("div",{class:"v-chip__append"},[t.append()]):e.appendAvatar?a(P,{end:!0},null):e.appendIcon?a(v,{end:!0},null):void 0]}),q&&a(r,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[a("div",{class:"v-chip__close",onClick:w},[t.close?t.close():a(v,null,null)])]})]}}),[[X("ripple"),d.value&&e.ripple,null]])}}});export{Ce as V};
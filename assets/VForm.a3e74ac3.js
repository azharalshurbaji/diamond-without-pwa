import{g as p,h as v}from"./VTextField.3c5bbce8.js";import{f as b}from"./forwardRefs.54bb1675.js";import{i as h,r as V,d as F}from"./index.91479bac.js";import{g as R}from"./router.5ecf7393.js";const S=h({name:"VForm",props:{...p()},emits:{"update:modelValue":a=>!0,submit:a=>!0},setup(a,l){let{slots:s,emit:m}=l;const o=v(a),n=V();function f(t){t.preventDefault(),o.reset()}function u(t){const r=t,e=o.validate();r.then=e.then.bind(e),r.catch=e.catch.bind(e),r.finally=e.finally.bind(e),m("submit",r),r.defaultPrevented||e.then(d=>{let{valid:c}=d;if(c){var i;(i=n.value)==null||i.submit()}}),r.preventDefault()}return R(()=>{var t;return F("form",{ref:n,class:"v-form",novalidate:!0,onReset:f,onSubmit:u},[(t=s.default)==null?void 0:t.call(s,o)])}),b(o,n)}});export{S as V};

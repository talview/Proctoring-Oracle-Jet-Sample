define(["exports","./tslib.es6-6a195797","preact/jsx-runtime","./utils/UNSAFE_classNames","css!./UNSAFE_ProgressCircle.css","./PRIVATE_Meter","./utils/PRIVATE_meterUtils","./hooks/UNSAFE_useTranslationBundle","./classNames-429bf434","preact/compat","preact/hooks","./UNSAFE_Environment","preact","./UNSAFE_Layer"],function(e,a,r,s,n,t,i,l,c,o,u,m,d,p){"use strict";const x=({accessibleLabel:e,id:a,size:s="md"})=>{const n=c.classNames([j.base,`oj-c-progress-circle-${s}`,j.indeterminateOuter]),i=l.useTranslationBundle("@oracle/oraclejet-preact"),o={"aria-valuetext":e||i.progressIndeterminate(),role:"progressbar"};return r.jsx(t.CircleWrapper,Object.assign({id:a,ariaProps:o,class:n},{children:r.jsx(t.CircleInner,{class:j.indeterminateInner})}))},v=({value:e=0,max:a=100,id:s,size:n="md"})=>{const l=Math.min(Math.max(0,e/a),1),o=c.classNames([j.base,`oj-c-progress-circle-${n}`]),u=i.getClipPath(90,360*l,!1,"full"),m={};return m["aria-valuemin"]=null!=e?"0":void 0,m["aria-valuemax"]=null!=e?`${a}`:void 0,m["aria-valuenow"]=null!=e?`${e}`:void 0,m.role="progressbar",r.jsxs(t.CircleWrapper,Object.assign({id:s,ariaProps:m,class:o},{children:[r.jsx(t.CircleInner,{class:c.classNames([j.determinateInner,j.track])}),r.jsx(t.CircleInner,{class:c.classNames([j.determinateInner,j.value]),clipPath:u})]}))},j={base:"_8ckqk3",indeterminateOuter:"_1mz6ydr",indeterminateInner:"_1xu1e07",determinateInner:"_1uzvre5",track:"tpnbz9",value:"zt5p0x"};e.ProgressCircle=function(e){var{value:s,max:n}=e,t=a.__rest(e,["value","max"]);return"indeterminate"===s?r.jsx(x,Object.assign({},t)):r.jsx(v,Object.assign({value:s,max:n},t))},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=UNSAFE_ProgressCircle.js.map
define(["exports","./tslib.es6-6a195797","preact/jsx-runtime","preact",'module',"./utils/UNSAFE_classNames","./hooks/UNSAFE_useTooltip","./classNames-429bf434"],function(e,s,i,c,a,l,r,n){"use strict";const t=e=>{var{accessibleLabel:c}=e,a=s.__rest(e,["accessibleLabel"]);return c?i.jsx(x,Object.assign({accessibleLabel:c},a)):i.jsx(o,Object.assign({},a))},o=e=>i.jsx("svg",Object.assign({},e)),x=e=>{var{accessibleLabel:a,children:l}=e,n=s.__rest(e,["accessibleLabel","children"]);const{tooltipContent:t,tooltipProps:o}=r.useTooltip({text:a,anchor:{x:"element",y:"element"},position:"bottom",offset:{mainAxis:8,crossAxis:0}});return i.jsxs(c.Fragment,{children:[i.jsx("svg",Object.assign({role:"img"},n,o,{"aria-label":a},{children:l})),t]})},b={"1em":"_13m3b0r","1x":"_1wjxai6","2x":"_1uaqsf","3x":"_4e5j95","4x":"_1xyxzrl","5x":"_1ajwdyd","6x":"ckodmd","7x":"_1b1rcm7","8x":"_16f6lyn","9x":"u5ywio","10x":"_1kd0liy","11x":"_1s1dv7y","12x":"pn32xm"},d={primary:"eer50p",secondary:"_114hu2e",disabled:"_1eirldu",danger:"_1uc5wfi",warning:"d9neuc",success:"jh41de",info:"_1vdd738",currentColor:"_7cbc6b"};e.Icon=({size:e="1em",color:s="currentColor",accessibleLabel:c="",viewBox:a="none",children:l})=>i.jsx(t,Object.assign({height:"1em",width:"1em",viewBox:a,accessibleLabel:c,class:n.classNames([d[s],b[e]])},{children:l}))});
//# sourceMappingURL=Icon-b5704008.js.map

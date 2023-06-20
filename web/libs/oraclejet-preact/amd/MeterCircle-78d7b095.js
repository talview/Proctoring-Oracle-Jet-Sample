define(["exports","./tslib.es6-6a195797","preact/jsx-runtime","./hooks/UNSAFE_useUser",'module',"preact/hooks","./utils/UNSAFE_mergeProps","./utils/UNSAFE_classNames","./PRIVATE_Meter","./utils/PRIVATE_meterUtils","./hooks/PRIVATE_useDvtMeterEvents","./hooks/UNSAFE_useTabbableMode","./classNames-429bf434"],function(t,e,n,s,r,i,a,l,o,c,u,d,h){"use strict";function m({color:t,angle:e,radius:s,length:r,section:i="full"}){const a=c.getCenterCoord(i),l=`calc(${100*a.y}% - ((${Math.sin(2*e*Math.PI/360)} * ${s})))`,o=`calc(${100*a.x}%  + ((${Math.cos(2*e*Math.PI/360)} * ${s})))`;return n.jsx("div",{class:f.base,style:{left:o,top:l,width:`calc(${r})`,transform:`translate(0, -1px) rotate(${360-e}deg)`,backgroundColor:t||"var(--oj-c-PRIVATE-DO-NOT-USE-dvt-reference-object-line-color)",borderBottom:"1px solid var(--oj-c-PRIVATE-DO-NOT-USE-dvt-contrast-line-color)"}})}const f={base:"sxyev"};function g(t,e){if(!t)return{width:0,height:0,innerRadius:0,outerRadius:0};const n=t.children[0],s=n.getBoundingClientRect();return Object.assign({width:Math.round(s.width),height:Math.round(s.height)},function(t,e,n){const s=t.clientWidth,r=t.clientHeight;if("bottom"===n||"top"===n)return{outerRadius:e.width/2,innerRadius:r};if("left"===n||"right"===n)return{outerRadius:e.height/2,innerRadius:s};return{innerRadius:s/2,outerRadius:e.width/2}}(n,s,e))}function b(t,e,n,s){return t*s/(n-e)}function p(t,e,n,s,r,i){return s+(i?1:-1)*b(t-e,e,n,r)}function x(t){return`var(--oj-c-PRIVATE-DO-NOT-USE-meter-circle-${t}-size)`}function R(t){return`var(--oj-c-PRIVATE-DO-NOT-USE-meter-circle-${t}-track-size)`}function v(t,e){return null!=e?`(${x(t)} * ${e/2})`:`(${x(t)} * 0.5 - ${R(t)})`}function _(t,e){return null!=e?`(${x(t)} * ${1-e} / 2)`:R(t)}function $(t,e){return`${_(t,e)} + ${{sm:"1rem",md:"0.75rem",lg:"0.5rem"}[t]}`}function C(t,e,n,s,r){const{min:i,max:a,startAngle:l,angleExtent:o,size:u,section:d,isRtl:h,innerRadius:m}=t,f=`calc(${_(u,r)})`,g=[],x=e.filter(t=>t.max>i&&t.max<=a).sort((t,e)=>t.max-e.max),R=x.length;for(let t=0;t<R;t++){const e=x[t],r=0===t?i:x[t-1].max,u=0===t?e.max:e.max-x[t-1].max;let v=p(r,i,a,l,o,h),_=b(u,i,a,o);const{startOffset:$,extentOffset:C}=P(m,o,0===t,e.max===a,h),j=c.getClipPath(v+$,_+C,h,d);if(g.push({clipPath:j,color:null==e?void 0:e.color,size:f,section:d}),t===R-1&&e.max<a&&n){v+=(h?1:-1)*_,_=b(a-e.max,i,a,o);const{startOffset:t,extentOffset:n}=P(m,o,!1,!0,h);g.push({clipPath:c.getClipPath(v+t,_+n,h,d),color:s,size:f,section:d})}}return g}function j(t,e,n,s,r,i){const{startAngle:a,angleExtent:l,size:o,section:u,isRtl:d}=t;return{section:u,color:e?"all"===n&&i?"var(--oj-c-PRIVATE-DO-NOT-USE-dvt-contrast-line-color)":s:"transparent",clipPath:c.getClipPath(a,l,d,u),size:`calc(${_(o,r)})`}}function E(t,e,n){const{value:s,min:r,max:i,startAngle:a,angleExtent:l,size:o,section:u,isRtl:d}=t,h=(s-r)*l/(i-r),m=Math.min(Math.max(0,e),1),f="left"===u||"right"===u,g="top"===u||"bottom"===u,b=`calc(${_(o,n)} * ${m})`,p=`${x(o)} - ((1 - ${m}) * ${_(o,n)})`,R=`(${p}) / 2`;return{section:u,width:f?`calc(${R})`:`calc(${p})`,height:g?`calc(${R})`:`calc(${p})`,size:b,clipPath:c.getClipPath(a,h,d,u)}}function P(t,e,n,s,r){if(!t)return{startOffset:0,extentOffset:0};const i=360/(2*Math.PI*t);let a=i/2*(r?1:-1),l=-1*i;return n&&e<360&&(a=0,l=-.5*i),s&&e<360&&(l=-.5*i),{startOffset:a,extentOffset:l}}const O={base:"foit1s",interactive:"_1p6p4as"},M={full:"_97zldy",top:"_1jqfgro",bottom:"_1e5dwtf",right:"_1y4ci9k",left:"_1sbx2g9",smtop:"auydf",mdtop:"_1s71qqd",lgtop:"_1lkvmh2",smbottom:"_1gsrq1i",mdbottom:"_1gf05l8",lgbottom:"_9suf9d",smleft:"_1bmmcef",mdleft:"_1dm72dr",lgleft:"_11geu2y",smright:"_30nini",mdright:"jecfpc",lgright:"_1u2p1pq",smfull:"_6b1kkg",mdfull:"l6kt22",lgfull:"q08r0f",lgHorizontal:"_4v4ux5",lgVertical:"wm52r",smHorizontal:"_1092gvj",smVertical:"vsgeyk",mdHorizontal:"nale7z",mdVertical:"pb7kea",smFull:"_1l7vnrx",mdFull:"_147rxse",lgFull:"mvcrkd",centerContent:"_1g8oy2i",thresholds:"_181nefk"},z="_15bw6en",A={base:"_18qskp6"},k={base:"_16oq60e",sm:"a3e7oo",md:"_1xa2t5w",lg:"bz3j1t"},I={base:"s5zn6e",full:"_1622oz8",top:"l9blkx",right:"uu9ynq",left:"_7frlc7",bottom:"avpua4"};t.MeterCircle=function(t){var r,{max:l=100,min:f=0,value:b=0,step:x=1,size:R="lg",startAngle:_=90,angleExtent:P=360,isTrackRendered:T=!0,thresholdDisplay:y="all",indicatorSize:q=1}=t,N=e.__rest(t,["max","min","value","step","size","startAngle","angleExtent","isTrackRendered","thresholdDisplay","indicatorSize"]);c.validateRange(f,l,b,x);const{direction:w}=s.useUser(),S="rtl"===w,U=c.getCircleSection(_,P,S),V=i.useRef(g(null,U)),D=i.useRef(null),[F,B]=i.useState(!1);i.useEffect(()=>{(N.onCommit||N.onInput||N.children)&&(V.current=g(D.current,U),B(!0))},[R,N.onCommit,N.onInput,N.children]);const H=u.usePointerEvents(b,t=>{const e=D.current;if(t.target==e)return function(t,e,n,s,r,i,a,l,o){const u=r.current;if(!u)return;const d=c.getCenterCoord(l),{angle:h}=c.convertToPolar(u.width*d.x,u.height*d.y,t.offsetX,t.offsetY),m=c.getPositiveAngle(h);let f;if(o&&i+a>m&&(f=c.getPositiveAngle(h-i)/a*(n-e)),!o){const t=c.getPositiveAngle(i-m);t<=a&&(f=t*(n-e)/a)}return null!=f&&(f=Math.round(f/s)*s),f}(t,f,l,x,V,_,P,U,S)},D,N.onCommit,N.onInput),L=u.useKeyboardEvents(b,f,l,x,N.onCommit,N.onInput),{datatipContent:W,datatipProps:K}=u.useMeterDatatip(b,N.datatip,N.ariaDescribedBy),X=c.getMeterAriaProps(b,f,l,`${b}`,N.accessibleLabel,N.ariaLabelledBy,N.thresholds),Y=a.mergeProps(H,L,K,X),{trackColor:G,indicatorColor:J}=c.getTrackAndIndicatorColor(b,y,N.trackColor,N.indicatorColor,N.thresholds),Q="bottom"===U||"top"===U?"Horizontal":"left"===U||"right"===U?"Vertical":"Full",Z={min:f,max:l,value:b,startAngle:_,angleExtent:P,size:R,section:U,isRtl:S,innerRadius:V.current.innerRadius},tt=N.onCommit||N.onInput,{isTabbable:et}=d.useTabbableMode(),nt=function(t,e){const n=t.current;if(!n)return;const s=c.getCenterCoord(e),r=s.x*n.width,i=s.y*n.height;let a,l,o,u,d,h,m,f;return"top"===e||"bottom"===e||"full"===e?(m=2*n.innerRadius,f="full"===e?2*n.innerRadius:n.innerRadius,d=r-n.innerRadius,h="bottom"===e?0:i-n.innerRadius,o=Math.sqrt(2)*n.innerRadius,u="full"===e?o:n.innerRadius/Math.sqrt(2),a=r-n.innerRadius/Math.sqrt(2),l="bottom"===e?0:i-n.innerRadius/Math.sqrt(2)):(f=2*n.innerRadius,m=n.innerRadius,d="left"===e?r-n.innerRadius:0,h=i-n.innerRadius,u=Math.sqrt(2)*n.innerRadius,o=n.innerRadius/Math.sqrt(2),a="left"===e?r-n.innerRadius/Math.sqrt(2):0,l=i-n.innerRadius/Math.sqrt(2)),{outerBounds:{x:d,y:h,width:m,height:f},innerBounds:{x:a,y:l,width:o,height:u}}}(V,U);return n.jsxs(n.Fragment,{children:[n.jsx("div",Object.assign({class:h.classNames([O.base,tt?O.interactive:""]),tabIndex:et?0:-1,role:"slider"},Y,{children:n.jsxs(o.CircleWrapper,Object.assign({ref:D,class:h.classNames([A.base,N.referenceLines&&N.referenceLines.length>0?M[`${R}${U}`]:"",M[`${R}${Q}`]])},{children:[n.jsx(o.CircleInner,Object.assign({class:h.classNames([k.base,M[U]])},j(Z,T,y,G,N.innerRadius,N.thresholds))),"all"===y&&N.thresholds&&C(Z,N.thresholds,T,G,N.innerRadius).map(t=>n.jsx(o.CircleInner,Object.assign({class:h.classNames([k.base,M[U],M.thresholds])},t))),n.jsx(o.CircleInner,Object.assign({color:J,class:h.classNames([I.base,I[U],M[U]])},E(Z,q,N.innerRadius))),null===(r=N.referenceLines)||void 0===r?void 0:r.map(t=>n.jsx(m,Object.assign({},function(t,e,n){const{min:s,max:r,startAngle:i,angleExtent:a,size:l,isRtl:o}=t;return{radius:v(l,n),length:$(l,n),angle:p(e.value,s,r,i,a,o),color:e.color}}(Z,t,N.innerRadius),{section:U}))),F&&N.children&&nt&&n.jsx("div",Object.assign({class:h.classNames([M.centerContent,z])},{children:N.children(nt)}))]}))})),W]})}});
//# sourceMappingURL=MeterCircle-78d7b095.js.map

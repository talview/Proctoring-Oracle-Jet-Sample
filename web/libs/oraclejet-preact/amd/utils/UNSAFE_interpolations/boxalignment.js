define(["exports","css!./boxalignment.css","../../keys-83d1523f","../UNSAFE_size","../UNSAFE_arrayUtils","../../_curry1-875b461d","../../_has-11a7a18f"],function(e,i,t,n,s,r,a){"use strict";const o={baseline:"_5fnj6i",center:"u9tcn3",end:"_1vftyll",start:"rsrkq",inherit:"_1etxc3p",initial:"_1fh50e2",stretch:"_1rzjviq"},l={center:"c2vogk",end:"s0x2qo",start:"u5la56",inherit:"ni37dv",initial:"fi5xaw",around:"_10oef5m",between:"_4pw5sy",evenly:"bb6wae"},c={align:({align:e})=>void 0===e?{}:{class:o[e]},justify:({justify:e})=>void 0===e?{}:{class:l[e]},gap:({gap:e})=>{if(void 0===e)return{};{const[i,t=i]=s.coerceArray(e);return{gap:`${n.sizeToCSS(i)} ${n.sizeToCSS(t)}`}}}},_=t.keys_1(o),f=t.keys_1(l);e.aligns=_,e.boxAlignmentInterpolations=c,e.justifies=f,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=boxalignment.js.map

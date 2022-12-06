"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1058],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=s,b=m["".concat(a,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[m]="string"==typeof e?e:s,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),s=(r(7294),r(3905));const o={id:"symbolsets",title:"symbolsets",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"symbolsets",description:"Dump kernel symbolsets",last_update:{date:new Date("2022-12-04T01:41:04.000Z"),author:"blacktop"}},l=void 0,i={unversionedId:"cli/ipsw/kernel/symbolsets",id:"cli/ipsw/kernel/symbolsets",title:"symbolsets",description:"Dump kernel symbolsets",source:"@site/docs/cli/ipsw/kernel/symbolsets.md",sourceDirName:"cli/ipsw/kernel",slug:"/cli/ipsw/kernel/symbolsets",permalink:"/ipsw/docs/cli/ipsw/kernel/symbolsets",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/kernel/symbolsets.md",tags:[],version:"current",frontMatter:{id:"symbolsets",title:"symbolsets",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"symbolsets",description:"Dump kernel symbolsets",last_update:{date:"2022-12-04T01:41:04.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"sbopts",permalink:"/ipsw/docs/cli/ipsw/kernel/sbopts"},next:{title:"syscall",permalink:"/ipsw/docs/cli/ipsw/kernel/syscall"}},a={},p=[{value:"ipsw kernel symbolsets",id:"ipsw-kernel-symbolsets",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"ipsw-kernel-symbolsets"},"ipsw kernel symbolsets"),(0,s.kt)("p",null,"Dump kernel symbolsets"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ipsw kernel symbolsets <kernelcache> [flags]\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --help   help for symbolsets\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -V, --verbose         verbose output\n")),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel"},"ipsw kernel"),"\t - Parse kernelcache")))}m.isMDXComponent=!0}}]);
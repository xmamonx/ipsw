"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9675],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={id:"sel",title:"sel",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"sel",description:"Get ObjC selector info",last_update:{date:new Date("2022-12-04T01:41:04.000Z"),author:"blacktop"}},l=void 0,c={unversionedId:"cli/ipsw/dyld/objc/sel",id:"cli/ipsw/dyld/objc/sel",title:"sel",description:"Get ObjC selector info",source:"@site/docs/cli/ipsw/dyld/objc/sel.md",sourceDirName:"cli/ipsw/dyld/objc",slug:"/cli/ipsw/dyld/objc/sel",permalink:"/ipsw/docs/cli/ipsw/dyld/objc/sel",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/dyld/objc/sel.md",tags:[],version:"current",frontMatter:{id:"sel",title:"sel",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"sel",description:"Get ObjC selector info",last_update:{date:"2022-12-04T01:41:04.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"proto",permalink:"/ipsw/docs/cli/ipsw/dyld/objc/proto"},next:{title:"patches",permalink:"/ipsw/docs/cli/ipsw/dyld/patches"}},a={},s=[{value:"ipsw dyld objc sel",id:"ipsw-dyld-objc-sel",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ipsw-dyld-objc-sel"},"ipsw dyld objc sel"),(0,o.kt)("p",null,"Get ObjC selector info"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipsw dyld objc sel  <dyld_shared_cache> [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help           help for sel\n  -i, --image string   dylib image to search\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -V, --verbose         verbose output\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/dyld/objc"},"ipsw dyld objc"),"\t - Dump Objective-C Optimization Info")))}d.isMDXComponent=!0}}]);
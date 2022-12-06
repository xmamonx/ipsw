"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={id:"dtree",title:"dtree",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"dtree",description:"Parse DeviceTree",last_update:{date:new Date("2022-12-04T01:41:04.000Z"),author:"blacktop"}},a=void 0,l={unversionedId:"cli/ipsw/dtree",id:"cli/ipsw/dtree",title:"dtree",description:"Parse DeviceTree",source:"@site/docs/cli/ipsw/dtree.md",sourceDirName:"cli/ipsw",slug:"/cli/ipsw/dtree",permalink:"/ipsw/docs/cli/ipsw/dtree",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/dtree.md",tags:[],version:"current",frontMatter:{id:"dtree",title:"dtree",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"dtree",description:"Parse DeviceTree",last_update:{date:"2022-12-04T01:41:04.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"wiki",permalink:"/ipsw/docs/cli/ipsw/download/wiki"},next:{title:"dyld",permalink:"/ipsw/docs/cli/ipsw/dyld/"}},p={},c=[{value:"ipsw dtree",id:"ipsw-dtree",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ipsw-dtree"},"ipsw dtree"),(0,i.kt)("p",null,"Parse DeviceTree"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ipsw dtree <DeviceTree> [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help           help for dtree\n      --insecure       do not verify ssl certs\n  -j, --json           Output to stdout as JSON\n      --proxy string   HTTP/HTTPS proxy\n  -r, --remote         Extract from URL\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -V, --verbose         verbose output\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/cli/ipsw"},"ipsw"),"\t - Download and Parse IPSWs (and SO much more)")))}d.isMDXComponent=!0}}]);
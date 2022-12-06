"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1563],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return i?r.createElement(g,o(o({ref:t},c),{},{components:i})):r.createElement(g,o({ref:t},c))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},507:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=i(7462),n=(i(7294),i(3905));const a={id:"mg",title:"mg",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"mg",description:"Query MobileGestalt",last_update:{date:new Date("2022-12-04T01:41:04.000Z"),author:"blacktop"}},o=void 0,l={unversionedId:"cli/ipsw/idev/diag/mg",id:"cli/ipsw/idev/diag/mg",title:"mg",description:"Query MobileGestalt",source:"@site/docs/cli/ipsw/idev/diag/mg.md",sourceDirName:"cli/ipsw/idev/diag",slug:"/cli/ipsw/idev/diag/mg",permalink:"/ipsw/docs/cli/ipsw/idev/diag/mg",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/idev/diag/mg.md",tags:[],version:"current",frontMatter:{id:"mg",title:"mg",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"mg",description:"Query MobileGestalt",last_update:{date:"2022-12-04T01:41:04.000Z",author:"blacktop"}},sidebar:"cli",previous:{title:"ioreg",permalink:"/ipsw/docs/cli/ipsw/idev/diag/ioreg"},next:{title:"restart",permalink:"/ipsw/docs/cli/ipsw/idev/diag/restart"}},s={},p=[{value:"ipsw idev diag mg",id:"ipsw-idev-diag-mg",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ipsw-idev-diag-mg"},"ipsw idev diag mg"),(0,n.kt)("p",null,"Query MobileGestalt"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ipsw idev diag mg [flags]\n")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f ipsw idev diag mg -k SupplementalBuildVersion,ProductVersionExtra | jq .\n\n    {\n        "status": "Success",\n        "diagnostics": {\n          "MobileGestalt": {\n            "ProductVersionExtra": "(a)",\n            "Status": "Success",\n            "SupplementalBuildVersion": "20C7750490e"\n          }\n        }\n      }\n')),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help           help for mg\n  -k, --keys strings   Keys to retrieve (can be csv)\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.ipsw.yaml)\n  -u, --udid string     Device UniqueDeviceID to connect to\n  -V, --verbose         verbose output\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/idev/diag"},"ipsw idev diag"),"\t - Diagnostics commands")))}d.isMDXComponent=!0}}]);
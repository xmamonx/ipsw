"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2410],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var n=t(67294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(t),u=l,d=k["".concat(c,".").concat(u)]||k[u]||m[u]||i;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function d(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[k]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},18071:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=t(87462),l=(t(67294),t(3905));const i={id:"kernel",title:"kernel",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"kernel",description:"Parse kernelcache"},a=void 0,o={unversionedId:"cli/ipsw/kernel/kernel",id:"cli/ipsw/kernel/kernel",title:"kernel",description:"Parse kernelcache",source:"@site/docs/cli/ipsw/kernel/kernel.md",sourceDirName:"cli/ipsw/kernel",slug:"/cli/ipsw/kernel/",permalink:"/ipsw/docs/cli/ipsw/kernel/",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/kernel/kernel.md",tags:[],version:"current",frontMatter:{id:"kernel",title:"kernel",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"kernel",description:"Parse kernelcache"},sidebar:"cli",previous:{title:"info",permalink:"/ipsw/docs/cli/ipsw/info"},next:{title:"ctfdump",permalink:"/ipsw/docs/cli/ipsw/kernel/ctfdump"}},c={},p=[{value:"ipsw kernel",id:"ipsw-kernel",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:p},k="wrapper";function m(e){let{components:r,...t}=e;return(0,l.kt)(k,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"ipsw-kernel"},"ipsw kernel"),(0,l.kt)("p",null,"Parse kernelcache"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ipsw kernel [flags]\n")),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  -h, --help   help for kernel\n")),(0,l.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.config/ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,l.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw"},"ipsw"),"\t - Download and Parse IPSWs (and SO much more)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel/ctfdump"},"ipsw kernel ctfdump"),"\t - Dump CTF info"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel/dec"},"ipsw kernel dec"),"\t - Decompress a kernelcache"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel/dwarf"},"ipsw kernel dwarf"),"\t - \ud83d\udea7 Dump DWARF debug information"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel/extract"},"ipsw kernel extract"),"\t - Extract KEXT(s) from kernelcache"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel/ida"},"ipsw kernel ida"),"\t - \ud83d\udea7 Analyze kernelcache in IDA Pro"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel/kexts"},"ipsw kernel kexts"),"\t - List kernel extentions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel/mach"},"ipsw kernel mach"),"\t - Dump kernelcache mach_traps"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel/symbolsets"},"ipsw kernel symbolsets"),"\t - Dump kernel symbolsets"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel/syscall"},"ipsw kernel syscall"),"\t - Dump kernelcache syscalls"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/cli/ipsw/kernel/version"},"ipsw kernel version"),"\t - Dump kernelcache version")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?i.createElement(b,a(a({ref:t},p),{},{components:r})):i.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},89954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const o={id:"symbolicate",title:"symbolicate",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"symbolicate",description:"Symbolicate ARM 64-bit crash logs (similar to Apple's symbolicatecrash)"},a=void 0,l={unversionedId:"cli/ipsw/symbolicate",id:"cli/ipsw/symbolicate",title:"symbolicate",description:"Symbolicate ARM 64-bit crash logs (similar to Apple's symbolicatecrash)",source:"@site/docs/cli/ipsw/symbolicate.md",sourceDirName:"cli/ipsw",slug:"/cli/ipsw/symbolicate",permalink:"/ipsw/docs/cli/ipsw/symbolicate",draft:!1,editUrl:"https://github.com/blacktop/ipsw/tree/master/www/docs/cli/ipsw/symbolicate.md",tags:[],version:"current",frontMatter:{id:"symbolicate",title:"symbolicate",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"symbolicate",description:"Symbolicate ARM 64-bit crash logs (similar to Apple's symbolicatecrash)"},sidebar:"cli",previous:{title:"shsh",permalink:"/ipsw/docs/cli/ipsw/shsh"},next:{title:"update",permalink:"/ipsw/docs/cli/ipsw/update"}},s={},c=[{value:"ipsw symbolicate",id:"ipsw-symbolicate",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ipsw-symbolicate"},"ipsw symbolicate"),(0,n.kt)("p",null,"Symbolicate ARM 64-bit crash logs (similar to Apple's symbolicatecrash)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"ipsw symbolicate <crashlog> <dyld_shared_cache> [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -d, --demangle   Demangle symbol names\n  -h, --help       help for symbolicate\n  -u, --unslide    Unslide the crashlog for easier static analysis\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"      --color           colorize output\n      --config string   config file (default is $HOME/.config/ipsw/config.yaml)\n  -V, --verbose         verbose output\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/cli/ipsw"},"ipsw"),"\t - Download and Parse IPSWs (and SO much more)")))}d.isMDXComponent=!0}}]);
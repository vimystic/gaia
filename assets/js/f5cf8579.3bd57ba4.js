"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"What is Gaia?",order:1},o=void 0,l={unversionedId:"getting-started/what-is-gaia",id:"getting-started/what-is-gaia",title:"What is Gaia?",description:"gaia is the name of the Cosmos SDK application for the Cosmos Hub. It comes with 2 main entrypoints:",source:"@site/docs/getting-started/what-is-gaia.md",sourceDirName:"getting-started",slug:"/getting-started/what-is-gaia",permalink:"/getting-started/what-is-gaia",draft:!1,tags:[],version:"current",frontMatter:{title:"What is Gaia?",order:1},sidebar:"tutorialSidebar",previous:{title:"System requirements",permalink:"/getting-started/system-requirements"},next:{title:"Gaia Tutorials",permalink:"/hub-tutorials/"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gaia")," is the name of the Cosmos SDK application for the Cosmos Hub. It comes with 2 main entrypoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gaiad"),": The Gaia Daemon and command-line interface (CLI). runs a full-node of the ",(0,i.kt)("inlineCode",{parentName:"li"},"gaia")," application.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gaia")," is built on the Cosmos SDK using the following modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x/auth"),": Accounts and signatures."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x/bank"),": Token transfers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x/staking"),": Staking logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x/mint"),": Inflation logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x/distribution"),": Fee distribution logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x/slashing"),": Slashing logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x/gov"),": Governance logic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ibc-go/modules"),": Inter-blockchain communication. Hosted in the ",(0,i.kt)("inlineCode",{parentName:"li"},"cosmos/ibc-go")," repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x/params"),": Handles app-level parameters.")),(0,i.kt)("p",null,"About the Cosmos Hub: The Cosmos Hub is the first Hub to be launched in the Cosmos Network. The role of a Hub is to facilitate transfers between blockchains. If a blockchain connects to a Hub via IBC, it automatically gains access to all the other blockchains that are connected to it. The Cosmos Hub is a public Proof-of-Stake chain. Its staking token is called the Atom."),(0,i.kt)("p",null,"Next, learn how to ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation"},"install Gaia"),"."))}m.isMDXComponent=!0}}]);
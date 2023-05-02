"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[119],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),k=a,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"WebWorker"},p="WebWorker class",i={unversionedId:"api/puppeteer.webworker",id:"version-20.0.0/api/puppeteer.webworker",title:"WebWorker class",description:"This class represents a WebWorker.",source:"@site/versioned_docs/version-20.0.0/api/puppeteer.webworker.md",sourceDirName:"api",slug:"/api/puppeteer.webworker",permalink:"/api/puppeteer.webworker",draft:!1,tags:[],version:"20.0.0",frontMatter:{sidebar_label:"WebWorker"},sidebar:"api",previous:{title:"Page.workers",permalink:"/api/puppeteer.page.workers"},next:{title:"WebWorker.evaluate",permalink:"/api/puppeteer.webworker.evaluate"}},u={},s=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],c={toc:s};function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"webworker-class"}),"WebWorker class"),(0,n.kt)("p",null,"This class represents a ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),"."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export declare class WebWorker extends EventEmitter\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extends:")," ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.eventemitter"}),"EventEmitter")),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The events ",(0,n.kt)("inlineCode",{parentName:"p"},"workercreated")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"workerdestroyed")," are emitted on the page object to signal the worker lifecycle."),(0,n.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebWorker")," class."),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"page.on('workercreated', worker =>\n  console.log('Worker created: ' + worker.url())\n);\npage.on('workerdestroyed', worker =>\n  console.log('Worker destroyed: ' + worker.url())\n);\n\nconsole.log('Current workers:');\nfor (const worker of page.workers()) {\n  console.log('  ' + worker.url());\n}\n")),(0,n.kt)("h2",a({},{id:"properties"}),"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Property"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"client"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("code",null,"readonly")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.cdpsession"}),"CDPSession")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The CDP session client the WebWorker belongs to.")))),(0,n.kt)("h2",a({},{id:"methods"}),"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.webworker.evaluate"}),"evaluate(pageFunction, args)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"If the function passed to the ",(0,n.kt)("code",null,"worker.evaluate")," returns a Promise, then ",(0,n.kt)("code",null,"worker.evaluate")," would wait for the promise to resolve and return its value. If the function passed to the ",(0,n.kt)("code",null,"worker.evaluate")," returns a non-serializable value, then ",(0,n.kt)("code",null,"worker.evaluate")," resolves to ",(0,n.kt)("code",null,"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",(0,n.kt)("code",null,"JSON"),": ",(0,n.kt)("code",null,"-0"),", ",(0,n.kt)("code",null,"NaN"),", ",(0,n.kt)("code",null,"Infinity"),", ",(0,n.kt)("code",null,"-Infinity"),", and bigint literals. Shortcut for ",(0,n.kt)("code",null,"await worker.executionContext()).evaluate(pageFunction, ...args)"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.webworker.evaluatehandle"}),"evaluateHandle(pageFunction, args)")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The only difference between ",(0,n.kt)("code",null,"worker.evaluate")," and ",(0,n.kt)("code",null,"worker.evaluateHandle")," is that ",(0,n.kt)("code",null,"worker.evaluateHandle")," returns in-page object (JSHandle). If the function passed to the ",(0,n.kt)("code",null,"worker.evaluateHandle")," returns a ",(0,n.kt)("code",null,"Promise"),", then ",(0,n.kt)("code",null,"worker.evaluateHandle")," would wait for the promise to resolve and return its value. Shortcut for ",(0,n.kt)("code",null,"await worker.executionContext()).evaluateHandle(pageFunction, ...args)"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.webworker.url"}),"url()")),(0,n.kt)("td",a({parentName:"tr"},{align:null})),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The URL of this web worker.")))))}d.isMDXComponent=!0}}]);
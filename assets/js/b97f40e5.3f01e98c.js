"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2115],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"ElementHandle.waitForSelector"},p="ElementHandle.waitForSelector() method",i={unversionedId:"api/puppeteer.elementhandle.waitforselector",id:"version-20.0.0/api/puppeteer.elementhandle.waitforselector",title:"ElementHandle.waitForSelector() method",description:"Wait for an element matching the given selector to appear in the current element.",source:"@site/versioned_docs/version-20.0.0/api/puppeteer.elementhandle.waitforselector.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle.waitforselector",permalink:"/api/puppeteer.elementhandle.waitforselector",draft:!1,tags:[],version:"20.0.0",frontMatter:{sidebar_label:"ElementHandle.waitForSelector"},sidebar:"api",previous:{title:"ElementHandle.uploadFile",permalink:"/api/puppeteer.elementhandle.uploadfile"},next:{title:"ElementHandle.waitForXPath",permalink:"/api/puppeteer.elementhandle.waitforxpath"}},c={},s=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Example",id:"example",level:2}],m={toc:s};function u(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)("wrapper",a({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"elementhandlewaitforselector-method"}),"ElementHandle.waitForSelector() method"),(0,n.kt)("p",null,"Wait for an element matching the given selector to appear in the current element."),(0,n.kt)("p",null,"Unlike ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.frame.waitforselector"}),"Frame.waitForSelector()"),", this method does not work across navigations or if the element is detached from DOM."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class ElementHandle {\n  waitForSelector<Selector extends string>(\n    selector: Selector,\n    options?: WaitForSelectorOptions\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"selector"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Selector"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"The selector to query and wait for.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"options"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/api/puppeteer.waitforselectoroptions"}),"WaitForSelectorOptions")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"(Optional)")," Options for customizing waiting behavior.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.elementhandle"}),"ElementHandle"),"<",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.nodefor"}),"NodeFor"),"<","Selector",">",">"," ","|"," null",">"),(0,n.kt)("p",null,"An element matching the given selector."),(0,n.kt)("h2",a({},{id:"exceptions"}),"Exceptions"),(0,n.kt)("p",null,"Throws if an element matching the given selector doesn't appear."),(0,n.kt)("h2",a({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .mainFrame()\n    .waitForSelector('img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n")))}u.isMDXComponent=!0}}]);
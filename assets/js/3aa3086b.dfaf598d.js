"use strict";(self.webpackChunkdocs_technician_upp=self.webpackChunkdocs_technician_upp||[]).push([[489],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(4250),o=(r(9496),r(9613));const a={sidebar_position:3},c="Typescript y React",i={unversionedId:"project-structure/TS&React",id:"project-structure/TS&React",title:"Typescript y React",description:"\xbfPor que usar Typescript?",source:"@site/frontend/project-structure/3-TS&React.md",sourceDirName:"project-structure",slug:"/project-structure/TS&React",permalink:"/docs-technician-upp/frontend/project-structure/TS&React",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Vite",permalink:"/docs-technician-upp/frontend/project-structure/Vite"},next:{title:"Env",permalink:"/docs-technician-upp/frontend/project-structure/Env"}},s={},p=[{value:"\xbfPor que usar Typescript?",id:"por-que-usar-typescript",level:2},{value:"\xbfConexi\xf3n con React?",id:"conexi\xf3n-con-react",level:2}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typescript-y-react"},"Typescript y React"),(0,o.kt)("h2",{id:"por-que-usar-typescript"},"\xbfPor que usar Typescript?"),(0,o.kt)("p",null,"El proyecto est\xe1 configurado para usar typescript, pero porque preferir, typescript sobre javascript, bueno el tener un tipado est\xe1tico, nos permite detectar errores en tiempo de escritura y prevenir futuros bugs, as\xed como autocompletado de mucha sintaxis."),(0,o.kt)("p",null,"Adem\xe1s al usar vite nos ahorramos la tarea de configurar manualmente todos los compiladores de TS a JS."),(0,o.kt)("h2",{id:"conexi\xf3n-con-react"},"\xbfConexi\xf3n con React?"),(0,o.kt)("p",null,"Como ya sabemos react usa una sintaxis similar a html llamada  en JS como JSX to JS-extend, y por la parte de TS esto no cambia solo cambiando a TSX o TS-extend, como podras observar en el proyecto hay barrios archivos TSX que son los que usan estan sintaxis, mas sin embargo no es necesario llamarlos asi para usar esa sintaxis, pero por buenas pr\xe1cticas es lo que hacemos. "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Nota que la \xfanica diferencia de JSX a TSX es el tipado sobre todo en los props de los componentes por lo que recuerda usar interfaces para declarar las props.")))}l.isMDXComponent=!0}}]);
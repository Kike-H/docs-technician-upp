"use strict";(self.webpackChunkdocs_technician_upp=self.webpackChunkdocs_technician_upp||[]).push([[73],{9613:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(9496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),v=a,f=d["".concat(s,".").concat(v)]||d[v]||u[v]||o;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4869:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(4250),a=(t(9496),t(9613));const o={sidebar_position:4},c="Env",i={unversionedId:"project-structure/Env",id:"project-structure/Env",title:"Env",description:"Un archivo que no mencionamos y decidimos hacerle su propia secci\xf3n es el archivo _.env._",source:"@site/frontend/project-structure/4-Env.md",sourceDirName:"project-structure",slug:"/project-structure/Env",permalink:"/docs-technician-upp/frontend/project-structure/Env",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Typescript y React",permalink:"/docs-technician-upp/frontend/project-structure/TS&React"}},s={},l=[{value:"Las llaves necesarias",id:"las-llaves-necesarias",level:2}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"env"},"Env"),(0,a.kt)("p",null,"Un archivo que no mencionamos y decidimos hacerle su propia secci\xf3n es el archivo ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},".env."))),(0,a.kt)("p",null,"Tal vez se pregunte porque no lo ve en la estructura del proyecto y es porque este lo crea cada vez que clone el proyecto."),(0,a.kt)("p",null,"En este archivo se agregan todas las variables de entorno que se usan en el proyecto."),(0,a.kt)("h2",{id:"las-llaves-necesarias"},"Las llaves necesarias"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"VITE_CLIENTID=client-id-de-google\nVITE_URLAPI=url-base-la-api\n")),(0,a.kt)("p",null,"Recuerda que para agregar cualquier llave debes de anteponer el prefijo de VITE, siguiendo la siguiente estructura  ",(0,a.kt)("inlineCode",{parentName:"p"},"VITE_nombre_de_tu_llave")))}u.isMDXComponent=!0}}]);
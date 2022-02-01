"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[33244],{33244:(e,n,o)=>{o.r(n),o.d(n,{default:()=>p});var t=o(91119);const i=(0,t.i18n)("plugin-core-support"),r={version:{strict:"version",command:"version",title:i("versionUsageTitle"),header:i("versionUsageHeader"),example:"version",optional:[{name:"--full",boolean:!0,docs:i("Report full version")}]}};var s=o(186),a=function(e,n,o,t){return new(o||(o=Promise))((function(i,r){function s(e){try{u(t.next(e))}catch(e){r(e)}}function a(e){try{u(t.throw(e))}catch(e){r(e)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,a)}u((t=t.apply(e,n||[])).next())}))};const u=(0,t.i18n)("client","about");function c(){return a(this,void 0,void 0,(function*(){return Promise.resolve().then(o.t.bind(o,68680,19)).catch((()=>(console.log("using default product name"),{productName:"Kui Demo",version:"0.0.1",menus:[{Kui:{modes:[{mode:"about",content:"Welcome to Kui. This is a sample About configuration",contentType:"text/markdown"},{mode:"version",contentFrom:"version --full"}]}}]}))).then((e=>e.productName))}))}const l=()=>o.e(58851).then(o.t.bind(o,58851,19)).then((e=>a(void 0,void 0,void 0,(function*(){const n=e.apiVersion,o=e.kind;void 0===n&&void 0===o||((e,n)=>{if(!(0,t.isNavResponse)({apiVersion:e,kind:n}))throw console.error("error in about.json:",e,n),new Error("apiVersion or kind in about.json is not supported")})(n,o);return{apiVersion:n||"kui-shell/v1",kind:o||"NavResponse",breadcrumbs:[{label:yield c()}],menus:e.menus.slice(0),links:e.links||[]}})))),d=()=>a(void 0,void 0,void 0,(function*(){const{apiVersion:e,breadcrumbs:n,kind:o,menus:i,links:r}=yield l();return i.forEach((e=>{e.label=u(e.label),e.items=e.items.map((e=>{const n=u(e.label||e.mode);return(0,t.isStringWithOptionalContentType)(e)?Object.assign({},e,{label:n,content:u(e.content)}):Object.assign({},e,{label:n})}))})),r.forEach((e=>{if(!(0,t.isLink)(e))throw console.error("error in about.json",e),new Error("links in about.json is not supported");e.label=u(e.label)})),{apiVersion:e,breadcrumbs:n,kind:o,menus:i,links:r}}));const m=({parsedOptions:e})=>a(void 0,void 0,void 0,(function*(){const{version:n}=yield Promise.resolve().then(o.t.bind(o,86554,19)).catch((()=>(console.log("using default version"),{productName:"Kui Demo",version:"0.0.1",menus:[{Kui:{modes:[{mode:"about",content:"Welcome to Kui. This is a sample About configuration",contentType:"text/markdown"},{mode:"version",contentFrom:"version --full"}]}}]})));return t.Capabilities.inElectron()&&e.full?function(e,n){const o=s.versions;return o[e]=n,{noSort:!0,header:{name:"COMPONENT",attributes:[{value:"VERSION"}]},body:[e,"electron","chrome","node","v8"].map(((e,n)=>({name:e,outerCSS:0===n?"semi-bold":"",css:0===n?"cyan-text":"lighter-text",attributes:[{key:"VERSION",value:o[e]}]})))}}(yield c(),n):n}));var v=function(e,n,o,t){return new(o||(o=Promise))((function(i,r){function s(e){try{u(t.next(e))}catch(e){r(e)}}function a(e){try{u(t.throw(e))}catch(e){r(e)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,a)}u((t=t.apply(e,n||[])).next())}))};const p=e=>v(void 0,void 0,void 0,(function*(){(e=>{if(!e)return d();e.listen("/version",m,{usage:r.version}),e.listen("/about",(({REPL:e})=>(0,t.isPopup)()?e.qexec("replay --new-window /kui/welcome.md"):e.qexec("replay /kui/welcome.md")),{hidden:!0}),e.listen("/getting/started",(({REPL:e})=>e.qexec("about")))})(e)}))}}]);
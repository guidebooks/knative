(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[91562],{5787:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>ot});var o=n(91119),i=n(72890),r=n(94194),a=n(98919),c=n(36156),u=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function c(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((o=o.apply(t,e||[])).next())}))};const s=t=>e=>u(void 0,void 0,void 0,(function*(){if((0,c.lN)(e))return(0,c.t$)(t,e);{const n=yield(0,r.GL)(e,void 0,t),{content:{stderr:i,stdout:c}}=n;if((0,o.isXtermResponse)(c))return c;const u=yield(0,a.rW)(c,i,e,t,"explain","api-resources");return(0,o.isTable)(u)&&(u.body.forEach((e=>{const n=e.attributes[3]&&e.attributes[3].value||e.name;e.onclick=`${t} explain ${n}`})),u.body.sort(((t,e)=>t.name.localeCompare(e.name)))),u}}));var l=n(347),f=n(67039),d=n(68215);function p(t,e){return o.Util.flatten([t,`${t}s`].concat(e?[e]:[]).map((t=>[t,(0,d.k)(t)])))}var v=n(28724),m=n(84323),h=n(50816),y=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function c(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((o=o.apply(t,e||[])).next())}))};function b(t){return y(this,void 0,void 0,(function*(){const e=yield(0,v.gc)((0,h.fY)(t))(t);if((0,o.isTable)(e)&&e.header){(0,a.ei)("up-to-date",e);const t=e.header.attributes.findIndex((t=>/Ready/i.test(t.key)));t>=0&&((0,a.ov)(t,e),e.statusColumnIdx=t,e.body.forEach((e=>{const n=e.attributes[t];if(n&&n.value){const t=n.value.match(/(\d+)\/(\d+)/);if(t&&3===t.length){n.tag="badge";const e=parseInt(t[1],10),o=parseInt(t[2],10);n.css=e===o?m.Z.Green:0===e?m.Z.Red:m.Z.Yellow}}})))}return e}))}const k=t=>{var e,n,i,r;(e="deployment",n="deploy",i="v1",r="apps",i?o.Util.flatten(p(e,n).map((t=>[t,`${t}.${r}`,`${t}.${i}.${r}`]))):p(e,n)).forEach((e=>{["k","kubectl","oc"].forEach((n=>{t.listen(`/${n}/get/${e}`,b,v.L6)}))}))};var w=n(76600),x=n(26470),g=n(58853),P=n(25218),O=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function c(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((o=o.apply(t,e||[])).next())}))};const $=(0,o.i18n)("plugin-kubectl"),Z=t=>function(e){return O(this,void 0,void 0,(function*(){if((0,c.lN)(e))return(0,c.t$)(t,e);try{const{REPL:n}=e,i=(0,g.$L)(e);if("string"!=typeof i)throw new Error("multi-file diff currently unsupported");const r=o.Util.absolute(o.Util.expandHomeDir(i)),a=(0,x.basename)(i),c=(0,x.dirname)(i),u="."===c?void 0:c,[s,l]=yield Promise.all([n.qexec((0,g.QG)(e,`${t} get ${(0,g.W2)(e)} -o yaml`)),n.qexec((0,g.QG)(e,`${t} apply ${(0,g.W2)(e)} --dry-run=server -o yaml`))]);if(console.error("previous",s),console.error("current",l),(0,P.Ib)(s)&&(0,P.Ib)(l)){const t={mode:"diff",label:$("Pending Changes"),content:{a:(0,h.p2)(s.kuiRawData),b:(0,h.p2)(l.kuiRawData)},contentType:"yaml"};return{apiVersion:"kui-shell/v1",kind:"File",metadata:{name:a,namespace:u},toolbarText:{type:"info",text:$("Showing changes between the working tree and previous commit.")},modes:[t],spec:{filepath:i,fullpath:r,size:0}}}throw new Error("failed to get resources")}catch(n){return console.error("error at kubectl diff",n),(0,r.GL)(e,void 0,t)}}))};function E(t,e,n=e){t.listen(`/${e}/diff`,Z(n))}var N=n(70764),z=n(42177),L=n(66167),C=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function c(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((o=o.apply(t,e||[])).next())}))};function I({tab:t}){return C(this,void 0,void 0,(function*(){return(yield(0,l.getCurrentContext)(t)).metadata.namespace}))}var R=n(88363),G=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function c(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((o=o.apply(t,e||[])).next())}))};const T=(0,o.i18n)("plugin-kubectl","kustomize");function B(t){const e=t.argvNoOptions.indexOf("kustomize"),n=t.argvNoOptions[e+1];return n?t.command.replace(new RegExp(n,"g"),o.Util.expandHomeDir(n)):t.command}function j(t,e){const n=e.split(/---/),o=t.reduce(((t,e,o)=>{const i=(0,R.H1)(e);return t[i]||(t[i]={label:i,items:[]}),t[i].items.push({mode:e.metadata.name,content:n[o].replace(/^\n/,""),contentType:"yaml"}),t}),{}),i={label:T("Raw Data"),items:[{mode:"YAML",content:e,contentType:"yaml"}]};return Object.values(o).concat([i])}const q=(t="kubectl")=>e=>G(void 0,void 0,void 0,(function*(){if((0,c.lN)(e))return(0,c.t$)(t,e);{const[o,{loadAll:i}]=yield Promise.all([(0,r.d1)(e,B,t),n.e(1272).then(n.bind(n,1272))]);try{const t=i(o),n=(0,x.resolve)(e.argvNoOptions[e.argvNoOptions.indexOf("kustomize")+1]);return{apiVersion:"kui-shell/v1",kind:"NavResponse",breadcrumbs:[{label:"kustomize"},{label:(0,x.basename)(n),command:`open ${n}`}],menus:j(t,o)}}catch(t){return console.error("error preparing kustomize response",t),o}}}));var D=n(72400),U=n(83923),_=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function c(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((o=o.apply(t,e||[])).next())}))};const F="top",H=t=>function(e){return _(this,void 0,void 0,(function*(){if((0,c.lN)(e))return(0,c.t$)(t,e);{const n=yield(0,r.GL)(e);return(0,v.Bm)(t,e,n,F)}}))};var K=n(87500),W=n(82216),Y=n(26977);var A=n(11227),Q=n.n(A),V=n(76299),M=n(48764).Buffer,S=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function c(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((o=o.apply(t,e||[])).next())}))};const X=Q()("plugin-kubectl/controller/fetch-file");function J(t){return S(this,void 0,void 0,(function*(){const{lstat:e}=yield n.e(27935).then(n.t.bind(n,27935,23));return new Promise(((n,o)=>{e(t,((t,e)=>{t?"ENOENT"===t.code?n(!1):o(t):n(e.isFile())}))}))}))}function tt(t,e){return S(this,void 0,void 0,(function*(){const[o,{join:i}]=yield Promise.all([J(e),Promise.resolve().then(n.t.bind(n,26470,23))]);if(o)return{data:yield(0,V.LG)(t,e)[0]};{const n=i(e,"kustomization.yml"),o=i(e,"kustomization.yaml"),r=i(e,"Kustomization"),[a,c,u]=yield Promise.all([J(n),J(o),J(r)]),s=e;if(a)return{data:(yield(0,V.LG)(t,n))[0]||"",dir:s};if(c)return{data:(yield(0,V.LG)(t,o))[0]||"",dir:s};if(u)return{data:(yield(0,V.LG)(t,r))[0]||"",dir:s}}}))}function et(t){return S(this,void 0,void 0,(function*(){const{argvNoOptions:e,parsedOptions:n,execOptions:o}=t,i=e[e.indexOf("_fetchfile")+1],r=Object.assign({tryFetchEvenInBrowser:!0},"object"!=typeof o.data||M.isBuffer(o.data)?void 0:o.data);return n.kustomize?{mode:"raw",content:yield tt(t,i)}:{mode:"raw",content:yield(0,V.dc)(t,i,r)}}))}var nt=function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function a(t){try{u(o.next(t))}catch(t){r(t)}}function c(t){try{u(o.throw(t))}catch(t){r(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((o=o.apply(t,e||[])).next())}))};const ot=t=>nt(void 0,void 0,void 0,(function*(){(t=>{t.listen("/kubectl/api-resources",s("kubectl"),i.Z),t.listen("/k/api-resources",s("kubectl"),i.Z)})(t),(0,l.default)(t),(0,f.ZP)(t),(0,w.Z)(t),(t=>{E(t,"kubectl"),E(t,"k","kubectl")})(t),(0,z.ZP)(t),(0,N.ZP)(t),(0,L.Z)(t),(0,v.ZP)(t),t.listen("/namespace/current",I,v.L6),k(t),(t=>{t.listen("/kubectl/kustomize",q(),i.Z),t.listen("/k/kustomize",q(),i.Z)})(t),(0,D.ZP)(t),(0,U.Z)(t),(t=>{t.listen("/kubectl/top/node",H("kubectl"),i.Z),t.listen("/k/top/node",H("k"),i.Z),t.listen("/kubectl/top/pod",H("kubectl"),i.Z),t.listen("/k/top/pod",H("k"),i.Z)})(t),(0,K.ZP)(t),(0,W.ZP)(t),function(t){["kubectl","k"].forEach((e=>{["dashboard","db"].forEach((n=>{(0,Y.Z)(t,e,n)}))}))}(t),(t=>{t.listen("/_openstream",(t=>S(void 0,void 0,void 0,(function*(){const e=t.argvNoOptions[t.argvNoOptions.indexOf("_openstream")+1],n="object"!=typeof t.execOptions.data||M.isBuffer(t.execOptions.data)?void 0:t.execOptions.data.headers;if(X("openstream",e),!t.execOptions.onInit)throw new Error("Internal Error: onInit required");return new Promise(((o,i)=>S(void 0,void 0,void 0,(function*(){try{yield(0,V.Cg)(t,e,{onInit:t.execOptions.onInit,onReady:t.execOptions.onReady,onExit:e=>{X("got exit from stream",e),t.execOptions.onExit&&t.execOptions.onExit(e),o(!0)}},n)}catch(t){i(t)}}))))}))),{requiresLocal:!0}),t.listen("/_fetchfile",et,{requiresLocal:!0,flags:{boolean:["kustomize"]}}),t.listen("/vfs/_fetchfile",et,{flags:{boolean:["kustomize"]}})})(t),(t=>{o.Capabilities.inBrowser()&&!o.Capabilities.hasProxy()||t.catchall((t=>{return e=t[0],/^k(ubectl)?$/.test(e);var e}),(t=>(0,c.lN)(t)?(0,c.t$)("kubectl",t):(0,r.fF)(t)),1)})(t)}))},47689:()=>{}}]);
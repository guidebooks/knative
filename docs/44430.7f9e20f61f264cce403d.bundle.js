"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[44430,30617,71314],{17425:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(91119),s=r(55080),i=r(94516);class o extends a.PureComponent{quitButton(){return a.createElement("div",{className:"sidecar-bottom-stripe-button sidecar-bottom-stripe-quit"},a.createElement("a",{href:"#",className:"graphical-icon kui--tab-navigatable kui--notab-when-sidecar-hidden",tabIndex:-1,"aria-label":"Close",onClick:()=>this.props.onClose()},a.createElement(s.default,{icon:"WindowClose"})))}back(){if(this.props.back)return this.props.back.enabled?a.createElement("span",{className:"sidecar-bottom-stripe-button"},a.createElement("a",{href:"#",className:"graphical-icon kui--tab-navigable"},a.createElement(s.default,{icon:"Back",onClick:this.props.back.onClick,onMouseDown:e=>e.preventDefault(),className:"kui--sidecar--titlebar-navigation--back"}))):a.createElement("span",{className:"sidecar-bottom-stripe-button disabled"},a.createElement("a",{className:"disabled graphical-icon"},a.createElement(s.default,{icon:"Back",onClick:this.props.back.onClick,className:"kui--sidecar--titlebar-navigation--back"})))}forward(){if(this.props.forward)return this.props.forward.enabled?a.createElement("span",{className:"sidecar-bottom-stripe-button"},a.createElement("a",{href:"#",className:"graphical-icon kui--tab-navigable"},a.createElement(s.default,{icon:"Forward",onClick:this.props.forward.onClick,onMouseDown:e=>e.preventDefault(),className:"kui--sidecar--titlebar-navigation--forward"}))):a.createElement("span",{className:"sidecar-bottom-stripe-button disabled"},a.createElement("a",{className:"disabled graphical-icon"},a.createElement(s.default,{icon:"Forward",onClick:this.props.forward.onClick,className:"kui--sidecar--titlebar-navigation--forward"})))}history(){const e=this.props.breadcrumbs&&this.props.breadcrumbs.filter((e=>e.label));return a.createElement("div",{className:"kui--sidecar--titlebar-navigation"},this.back(),this.forward(),e&&e.length>0&&a.createElement(i.Z,{breadcrumbs:e,repl:this.props.repl}))}render(){return a.createElement("div",{className:"sidecar-bottom-stripe zoomable"+(this.props.breadcrumbs?" kui--sidecar--titlebar-has-breadcrumbs":"")},this.history(),a.createElement("div",{className:"sidecar-bottom-stripe-left-bits"}),a.createElement("div",{className:"sidecar-bottom-stripe-right-bits"},a.createElement("div",{className:"sidecar-window-buttons"},!this.props.notCloseable&&this.quitButton())))}}class c extends a.PureComponent{constructor(){super(...arguments),this.dom=a.createRef(),this._preventDefault=e=>e.preventDefault(),this._stopPropagation=e=>e.stopPropagation()}get current(){return this.state}defaultWidth(){return this.props.defaultWidth||"60%"}onEscape(e){"Escape"===e.key&&this.props.active&&!document.getElementById("confirm-dialog")&&!(0,n.isPopup)()&&this.current&&this.props.willChangeSize&&this.props.willChangeSize("0%"===this.props.width?this.defaultWidth():"0%")}onMaximize(){this.props.willChangeSize&&this.props.willChangeSize("100%"),this.setState({isMaximized:!0})}onRestore(){this.props.willChangeSize&&this.props.willChangeSize(this.defaultWidth()),this.setState({isMaximized:!1})}onClose(){this.props.onClose&&this.props.onClose(),this.props.willChangeSize&&this.props.willChangeSize("0%")}isFixedWidth(){return!1}width(){return"visible"+(this.state.isMaximized?" maximized":"")}title(e){return a.createElement(o,Object.assign({},e,{notCloseable:!0,repl:this.props.tab.REPL,width:this.defaultWidth(),onClose:this.onClose.bind(this)}))}}},31833:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T,getStateFromMMR:()=>y});var a=r(11227),n=r.n(a),s=r(67294),i=r(14638),o=r(28883),c=r(29873),l=r(91119),d=r(71314),m=r(77533);function p(e){if("string"==typeof e)return s.createElement(s.Fragment,null,e);if(e instanceof Element)return s.createElement(m.Z,{className:"badge-as-image",content:e});{const t=(e.css||"")+(e.onclick?" clickable":"");if(e.image)return s.createElement("div",null);if(e.fontawesome)return s.createElement("div",null);{const r="green-background"===t?"ok":"red-background"===t?"error":"warning";return s.createElement("div",{className:t||"gray-background",onClick:()=>e.onclick()},s.createElement(d.default,{type:r},e.title))}}}class b extends s.PureComponent{constructor(e){super(e),this.state={cache:p("function"==typeof e.spec?e.spec(e.response,e.tab):e.spec)}}render(){return this.state.cache}}var u=r(25824),h=r(42154),f=r(55080),g=r(59582),v=function(e,t,r,a){return new(r||(r=Promise))((function(n,s){function i(e){try{c(a.next(e))}catch(e){s(e)}}function o(e){try{c(a.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,o)}c((a=a.apply(e,t||[])).next())}))};class _ extends s.PureComponent{constructor(){super(...arguments),this._buttonOnclick=this.buttonOnclick.bind(this)}getCommand(){const{tab:e,response:t,button:r,args:a}=this.props;if((0,l.isViewButton)(r))return r.command;{const n="string"==typeof r.command?r.command:r.command(e,t,a);return r.confirm?`confirm "${n}"`:n}}buttonOnclick(){return v(this,void 0,void 0,(function*(){const e=yield this.getCommand(),{tab:t,execUUID:r,response:a,button:n,args:s}=this.props;if("string"==typeof e)return(0,l.isViewButton)(n)||n.confirm?t.REPL.qexec(e,void 0,void 0,{rethrowErrors:!0}):n.inPlace?t.REPL.reexec(e,{execUUID:r}):t.REPL.pexec(e);"function"==typeof e&&e(t,a,s)}))}render(){const{button:e}=this.props;return s.createElement(g.default,{content:e.label||e.mode},s.createElement("span",{className:"kui--tab-navigatable kui--notab-when-sidecar-hidden sidecar-bottom-stripe-button-as-button sidecar-bottom-stripe-button"+(e.icon?" kui--toolbar-button-with-icon":"")},s.createElement("div",{role:"presentation",onClick:this._buttonOnclick,"data-mode":e.mode},s.createElement("span",{role:"tab"},e.icon?e.icon:e.label||e.mode))))}}var k=r(23988);class E extends s.PureComponent{icon(){if(this.props.toolbarText){const{type:e}=this.props.toolbarText;switch(e){case"info":return s.createElement(f.default,{icon:"Info"});case"success":return s.createElement(f.default,{icon:"Checkmark"});case"warning":return s.createElement(f.default,{icon:"Warning"});case"error":return s.createElement(f.default,{icon:"Error"})}return function(e){throw new Error("Did not expect to get here")}()}}buttons(){if(this.props.buttons)return this.props.buttons.sort().sort(((e,t)=>(e.order||0)-(t.order||0))).map(((e,t)=>s.createElement(_,{tab:this.props.tab,execUUID:this.props.execUUID,button:e,response:this.props.response,args:this.props.args,key:t})))}render(){try{return s.createElement("div",{className:"sidecar-bottom-stripe-toolbar"},s.createElement("div",{className:"sidecar-toolbar-text","data-location-bottom":this.props.bottom||void 0,"data-type":this.props.toolbarText&&this.props.toolbarText.type},s.createElement("div",{className:"sidecar-toolbar-text-icon"},this.icon()),this.props.toolbarText&&("string"==typeof this.props.toolbarText.text?s.createElement(k.default,{source:this.props.toolbarText.text,className:"sidecar-toolbar-text-content"}):s.createElement("div",{className:"sidecar-toolbar-text-content",dangerouslySetInnerHTML:{__html:this.props.toolbarText.text.innerHTML}}))),s.createElement("div",{className:"sidecar-bottom-stripe-mode-bits sidecar-bottom-stripe-button-container","data-location-bottom":this.props.bottom||void 0},s.createElement("div",{className:"fill-container flex-layout flush-right flex-align-stretch"},this.buttons())))}catch(e){return console.error(e),s.createElement("div",null)}}}class x extends s.PureComponent{constructor(e){super(e),this._willUpdateToolbar=this.onToolbarUpdate.bind(this),this.state={}}onToolbarUpdate(e,t,r){this.setState({extraButtons:t,extraButtonsOverride:r}),!e||this.props.toolbarText&&e.type===this.props.toolbarText.type&&e.text===this.props.toolbarText.text&&e.alerts===this.props.toolbarText.alerts||this.props.didUpdateToolbar(e)}children(){return s.isValidElement(this.props.children)?s.cloneElement(this.props.children,{willUpdateToolbar:this._willUpdateToolbar}):this.props.children}render(){const e=this.state.extraButtonsOverride&&Array.isArray(this.state.extraButtons)?this.state.extraButtons:this.props.buttons.concat(this.state.extraButtons||[]),t=this.props.toolbarText||0!==e.length,r=!this.props.noAlerts&&this.props.toolbarText&&this.props.toolbarText.alerts&&0!==this.props.toolbarText.alerts.length;return s.createElement("div",{className:"full-height"},t&&s.createElement(E,{tab:this.props.tab,execUUID:this.props.execUUID,response:this.props.response,args:this.props.args,toolbarText:this.props.toolbarText,buttons:e}),r&&s.createElement(s.Suspense,{fallback:s.createElement("div",null)},this.props.toolbarText.alerts.map(((e,t)=>s.createElement(h.default,{key:t,alert:e})))),s.createElement(s.Suspense,{fallback:s.createElement("div",null)},this.children()))}}var w=r(17425);const C=s.lazy((()=>r.e(71126).then(r.bind(r,71126)))),N=n()("plugin-sidecar/components/TopNavSidecar");function y(e,t){let r=t.modes.slice(0);(0,l.isResourceWithMetadata)(t)?(0,l.addRelevantModes)(e,r,"",{resource:t}):(0,l.isResourceByReference)(t)&&(0,l.addRelevantModes)(e,r,"",t),r=r.sort(((e,t)=>(e.order||0)-(t.order||0)));const a=r.filter((e=>!(0,l.isButton)(e))),n=t.defaultMode?a.findIndex((e=>e.mode===t.defaultMode)):-1,s=-1===n?a.findIndex((e=>e.defaultMode)):n,i=-1===s?0:s,o=r.filter(l.isButton),c=(t.buttons||[]).concat(o);return{currentTabIndex:i,defaultMode:i,tabs:a,toolbarText:a[i]&&a[i].toolbarText||t.toolbarText,viewButtons:c.filter((e=>!("drilldown"===e.kind&&e.showRelatedResource))),drilldownButtons:c.filter((e=>"drilldown"===e.kind&&e.showRelatedResource))}}class T extends w.Z{constructor(e){super(e),this._didUpdateToolbar=this.didUpdateToolbar.bind(this),this._onSelect=this.onSelect.bind(this),this.state=T.getDerivedStateFromProps(e)}static getDerivedStateFromProps(e,t){const{tab:r,response:a}=e;if(t&&t.response===a)return t;{const n={argsForMode:a.argsForMode,argvNoOptions:e.argvNoOptions,parsedOptions:e.parsedOptions};return Object.assign(t||{},{response:a,toolbarText:a.toolbarText,args:n},y(r,a))}}headerBodyStyle(){return{"flex-direction":"column"}}prettyName(){return this.state.response&&(this.state.response.prettyName||(this.state.response.metadata?this.state.response.metadata.name:void 0))}namePart(){return"heroText"===this.context.sidecarName&&this.state.response&&this.state.response.metadata&&this.state.response.metadata.name&&s.createElement("div",{className:"header-left-bits"},s.createElement("div",{className:"sidecar-header-text"},s.createElement("div",{className:"sidecar-header-name","data-base-class":"sidecar-header-name"},s.createElement("div",{className:"sidecar-header-name-content","data-base-class":"sidecar-header-name-content"},this.state.response.metadata.name))))}didUpdateToolbar(e){this.setState({toolbarText:e})}fillerNamePart(){return s.createElement("div",{className:"header-left-bits"})}broadcastFocusChange(e){const t=this.current.tabs[this.current.currentTabIndex];l.Events.eventChannelUnsafe.emit(`/mode/focus/off/tab/${this.props.uuid}/mode/${t.mode}`,t);const r=this.current.tabs[e];l.Events.eventChannelUnsafe.emit(`/mode/focus/on/tab/${this.props.uuid}/mode/${r.mode}`,r)}eventKey(e){return e}idxFromEventKey(e){return e}onSelect(e,t){const r=this.idxFromEventKey(t);this.broadcastFocusChange(r),this.setState((e=>{const t=e.tabs[r].toolbarText||e.toolbarText;return Object.assign({},e,{currentTabIndex:r,toolbarText:t})}))}tabs(){return s.createElement("div",{className:"kui--sidecar-tabs-container zoomable full-height",onClick:this._stopPropagation},s.createElement(i.m,{className:"sidecar-bottom-stripe-mode-bits sidecar-bottom-stripe-button-container kui--sidecar-tabs",activeKey:this.eventKey(this.current.currentTabIndex),onSelect:this._onSelect},this.current.tabs.map(((e,t)=>s.createElement(o.O,{key:e.mode,id:e.mode,eventKey:this.eventKey(t),className:"sidecar-bottom-stripe-button kui--sidecar-tab",title:s.createElement(c.T,{className:"kui--sidecar-tab-label"},e.label||e.mode),"data-mode":e.mode,"data-is-selected":t===this.current.currentTabIndex||void 0,onMouseDown:this._preventDefault},this.tabContent(t))))))}bodyContent(e){const t=this.current.tabs[e];return s.createElement(C,{tab:this.props.tab,mode:t,isActive:e===this.current.currentTabIndex,args:this.state.args,response:this.state.response,execUUID:this.props.execUUID})}tabContent(e){return s.createElement("div",{className:"sidecar-content-container kui--tab-content",hidden:e!==this.current.currentTabIndex||void 0},s.createElement("div",{className:"custom-content"},s.createElement(x,{tab:this.props.tab,execUUID:this.props.execUUID,response:this.state.response,args:this.state.args,didUpdateToolbar:this._didUpdateToolbar,toolbarText:this.state.toolbarText,noAlerts:this.current.currentTabIndex!==this.current.defaultMode,buttons:this.current.viewButtons},this.bodyContent(e))))}badges(){const e=l.badgeRegistrar.filter((({when:e})=>{try{return e(this.state.response)}catch(e){return N("warning: registered badge threw an exception during filter",e),!1}}));return e&&e.length>0&&s.createElement("div",{className:"badges"},e.map((({badge:e},t)=>s.createElement(b,{key:t,spec:e,tab:this.props.tab,response:this.state.response}))))}header(){const e=this.namePart(),t=this.badges();if(e||t)return s.createElement("header",{className:"sidecar-header"},s.createElement("div",{className:"header-main-content"},s.createElement("div",{className:"kui--sidecar-header-and-toolbar"},s.createElement("div",{className:"header-top-bits"},e||this.fillerNamePart(),s.createElement("div",{className:"header-right-bits"},s.createElement("div",{className:"custom-header-content"},t))))))}footer(){return s.createElement(E,{bottom:!0,tab:this.props.tab,execUUID:this.props.execUUID,response:this.state.response,args:this.state.args,buttons:this.current.drilldownButtons})}kindBreadcrumb(){const{kind:e,onclick:t}=this.state.response;return{label:e,command:t&&t.kind,className:"kui--sidecar-kind"}}nameBreadcrumb(){const{onclick:e}=this.state.response;return{label:this.prettyName(),command:e&&e.name,isCurrentPage:!0,className:"kui--sidecar-entity-name"}}versionBreadcrumb(){return this.state.response.version?{label:this.state.response.version,className:"kui--version-breadcrumb"}:void 0}nameHashBreadcrumb(){const{onclick:e}=this.state.response;return{label:this.state.response&&this.state.response.nameHash,command:e&&e.nameHash,deemphasize:!0,className:"kui--sidecar-entity-name-hash"}}namespaceBreadcrumb(){const{metadata:{namespace:e},onclick:t}=this.state.response;return{label:e,command:t&&t.namespace,deemphasize:!0,className:"kui--sidecar-entity-namespace"}}render(){if(!this.current||!this.state.response)return this.props.onRender&&this.props.onRender(!1),s.createElement("div",null);this.props.onRender&&setTimeout((()=>this.props.onRender(!0)));const e="breadcrumb"===this.context.sidecarName?[this.nameBreadcrumb(),this.versionBreadcrumb(),this.nameHashBreadcrumb()]:[];try{const t=[this.kindBreadcrumb()].concat(e).concat(this.namespaceBreadcrumb()).filter((e=>e));return s.createElement("div",{className:"kui--sidecar kui--sidecar-nested "+this.width(),ref:this.dom,"data-view":"topnav",onClick:this._stopPropagation},this.title({breadcrumbs:t}),s.createElement("div",{className:"kui--sidecar-header-and-body",style:{flexDirection:"column"}},this.header(),this.tabs(),this.footer()))}catch(e){console.error(e)}}}T.contextType=u.Z},42154:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var a=r(67294);const n=a.lazy((()=>Promise.all([r.e(33676),r.e(45608),r.e(37316),r.e(23749),r.e(72683),r.e(81346),r.e(50285),r.e(13973),r.e(54680),r.e(21947),r.e(80236),r.e(20237),r.e(67809),r.e(23546),r.e(16410),r.e(20347)]).then(r.bind(r,16410)).then((e=>({default:e.Alert}))))),s=a.lazy((()=>Promise.all([r.e(33676),r.e(45608),r.e(37316),r.e(23749),r.e(72683),r.e(81346),r.e(50285),r.e(13973),r.e(54680),r.e(21947),r.e(80236),r.e(20237),r.e(67809),r.e(23546),r.e(16410),r.e(20347)]).then(r.bind(r,16410)).then((e=>({default:e.AlertActionCloseButton})))));class i extends a.PureComponent{constructor(e){super(e),this._onClose=this.onClose.bind(this),this.state=i.getDerivedStateFromProps(e)}static getDerivedStateFromProps(e,t){return t&&e===t.props?t:{props:e,isClosed:!1}}onClose(){this.props.onCloseButtonClick&&this.props.onCloseButtonClick(),this.setState({isClosed:!0})}render(){return this.state.isClosed?a.createElement(a.Fragment,null):a.createElement(n,{id:this.props.id||"",className:"kui--toolbar-alert "+(this.props.className||""),"data-type":this.props.alert.type,title:this.props.alert.title,actionClose:!this.props.hideCloseButton&&a.createElement(s,{onClose:this._onClose}),timeout:this.props.timeout,onTimeout:this._onClose,isInline:!this.props.isGlobal,variant:"error"===this.props.alert.type?"danger":this.props.alert.type},a.createElement(a.Fragment,null,this.props.alert.body||"",this.props.children))}}function o(e){return a.createElement(a.Suspense,{fallback:a.createElement("div",null)},a.createElement(i,Object.assign({},e)))}},94516:(e,t,r)=>{r.d(t,{Z:()=>c,w:()=>o});var a=r(67294),n=r(64029),s=r(32835);class i extends a.PureComponent{render(){const e=o(this.props);return a.createElement(n.a,{className:"kui--breadcrumb"},this.props.breadcrumbs.map(((t,r)=>{const n=t.command&&(()=>this.props.repl.pexec(t.command));return a.createElement(s.g,{to:n?"#":void 0,key:r,className:[t.className,"kui--breadcrumb-item",t.deemphasize&&"kui--secondary-breadcrumb",r===e&&"kui--current-page-breadcrumb"].filter((e=>e)).join(" "),isActive:r===this.props.breadcrumbs.length-1,onClick:n},t.label)})))}}function o(e){const t=e.breadcrumbs&&e.breadcrumbs.findIndex((e=>e.isCurrentPage));return t<0?e.breadcrumbs.length-1:t}function c(e){return a.createElement(i,Object.assign({},e))}},30617:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294);const n=a.lazy((()=>Promise.all([r.e(33676),r.e(23749),r.e(20237),r.e(6066)]).then(r.bind(r,6066))));function s(e){return a.createElement(a.Suspense,{fallback:a.createElement("div",null)},a.createElement(n,Object.assign({},e)))}},71314:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var a=r(67294);const n=a.lazy((()=>r.e(71068).then(r.bind(r,71068))));function s(e){return a.createElement(n,Object.assign({},e))}},64029:(e,t,r)=>{r.d(t,{a:()=>c});var a=r(70655),n=r(67294),s=r(74652),i=r(38296),o=r(62472);const c=e=>{var{children:t=null,className:r="","aria-label":l="Breadcrumb",ouiaId:d,ouiaSafe:m=!0}=e,p=(0,a.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const b=(0,o.S$)(c.displayName,d,m);return n.createElement("nav",Object.assign({},p,{"aria-label":l,className:(0,i.i)(s.Z.breadcrumb,r)},b),n.createElement("ol",{className:s.Z.breadcrumbList},n.Children.map(t,((e,t)=>{const r=t>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:r}):e}))))};c.displayName="Breadcrumb"},32835:(e,t,r)=>{r.d(t,{g:()=>c});var a=r(70655),n=r(67294),s=r(93174),i=r(74652),o=r(38296);const c=e=>{var{children:t=null,className:r="",to:c,isActive:l=!1,isDropdown:d=!1,showDivider:m,target:p,component:b="a",render:u}=e,h=(0,a.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const f=b,g=l?"page":void 0,v=(0,o.i)(i.Z.breadcrumbLink,l&&i.Z.modifiers.current);return n.createElement("li",Object.assign({},h,{className:(0,o.i)(i.Z.breadcrumbItem,r)}),m&&n.createElement("span",{className:i.Z.breadcrumbItemDivider},n.createElement(s.ZP,null)),"button"===b&&n.createElement("button",{className:v,"aria-current":g,type:"button"},t),d&&n.createElement("span",{className:(0,o.i)(i.Z.breadcrumbDropdown)},t),u&&u({className:v,ariaCurrent:g}),c&&!u&&n.createElement(f,{href:c,target:p,className:v,"aria-current":g},t),!c&&"button"!==b&&!d&&t)};c.displayName="BreadcrumbItem"},74652:(e,t,r)=>{r(83880),t.Z={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"}}},96360:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(8081),n=r.n(a),s=r(23645),i=r.n(s)()(n());i.push([e.id,".pf-c-breadcrumb {\n  --pf-c-breadcrumb__item--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-breadcrumb__item--LineHeight: var(--pf-global--LineHeight--sm);\n  --pf-c-breadcrumb__item--MarginRight: var(--pf-global--spacer--sm);\n  --pf-c-breadcrumb__item-divider--Color: var(--pf-global--BorderColor--200);\n  --pf-c-breadcrumb__item-divider--MarginRight: var(--pf-global--spacer--sm);\n  --pf-c-breadcrumb__item-divider--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-breadcrumb__link--Color: var(--pf-global--link--Color);\n  --pf-c-breadcrumb__link--TextDecoration: var(--pf-global--link--TextDecoration);\n  --pf-c-breadcrumb__link--hover--Color: var(--pf-global--link--Color--hover);\n  --pf-c-breadcrumb__link--hover--TextDecoration: var(--pf-global--link--TextDecoration--hover);\n  --pf-c-breadcrumb__link--m-current--Color: var(--pf-global--Color--100);\n  --pf-c-breadcrumb__heading--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-breadcrumb__dropdown--MarginTop: calc(var(--pf-global--spacer--form-element) * -1);\n  --pf-c-breadcrumb__dropdown--MarginRight: calc(var(--pf-c-breadcrumb__item--MarginRight) * -1);\n  --pf-c-breadcrumb__dropdown--MarginBottom: calc(var(--pf-global--spacer--form-element) * -1);\n  --pf-c-breadcrumb__dropdown--MarginLeft: calc(var(--pf-c-breadcrumb__item-divider--MarginRight) * -1);\n  --pf-c-breadcrumb__dropdown--c-dropdown__toggle--LineHeight: var(--pf-global--LineHeight--sm);\n  display: inline-flex;\n}\n\n.pf-c-breadcrumb__list {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.pf-c-breadcrumb__item {\n  display: flex;\n  align-items: baseline;\n  font-size: var(--pf-c-breadcrumb__item--FontSize);\n  font-weight: var(--pf-c-breadcrumb__item--FontWeight);\n  line-height: var(--pf-c-breadcrumb__item--LineHeight);\n  white-space: nowrap;\n  list-style: none;\n}\n.pf-c-breadcrumb__item:not(:last-child) {\n  margin-right: var(--pf-c-breadcrumb__item--MarginRight);\n}\n\n.pf-c-breadcrumb__item-divider {\n  margin-right: var(--pf-c-breadcrumb__item-divider--MarginRight);\n  font-size: var(--pf-c-breadcrumb__item-divider--FontSize);\n  line-height: 1;\n  color: var(--pf-c-breadcrumb__item-divider--Color);\n}\n\n.pf-c-breadcrumb__link {\n  font-size: inherit;\n  font-weight: var(--pf-c-breadcrumb__link--FontWeight);\n  line-height: inherit;\n  color: var(--pf-c-breadcrumb__link--Color);\n  text-decoration: var(--pf-c-breadcrumb__link--TextDecoration);\n  word-break: break-word;\n}\n.pf-c-breadcrumb__link:hover {\n  --pf-c-breadcrumb__link--Color: var(--pf-c-breadcrumb__link--hover--Color);\n  --pf-c-breadcrumb__link--TextDecoration: var(--pf-c-breadcrumb__link--hover--TextDecoration);\n}\n.pf-c-breadcrumb__link.pf-m-current {\n  cursor: default;\n}\n.pf-c-breadcrumb__link.pf-m-current, .pf-c-breadcrumb__link.pf-m-current:hover {\n  color: var(--pf-c-breadcrumb__link--m-current--Color);\n  text-decoration: none;\n}\nbutton.pf-c-breadcrumb__link {\n  border: none;\n}\n\n.pf-c-breadcrumb__dropdown {\n  margin: var(--pf-c-breadcrumb__dropdown--MarginTop) var(--pf-c-breadcrumb__dropdown--MarginRight) var(--pf-c-breadcrumb__dropdown--MarginBottom) var(--pf-c-breadcrumb__dropdown--MarginLeft);\n}\n.pf-c-breadcrumb__dropdown .pf-c-dropdown__toggle {\n  line-height: var(--pf-c-breadcrumb__dropdown--c-dropdown__toggle--LineHeight);\n}\n\n.pf-c-breadcrumb__heading {\n  display: inline;\n  font-size: var(--pf-c-breadcrumb__heading--FontSize);\n}\n\n.pf-c-breadcrumb__link,\n.pf-c-breadcrumb__heading {\n  white-space: normal;\n}\n\n.pf-m-overpass-font .pf-c-breadcrumb__link,\n.pf-m-overpass-font .pf-c-breadcrumb__item {\n  font-weight: var(--pf-global--FontWeight--semi-bold);\n}\n\n.pf-c-breadcrumb__list > :first-child .pf-c-breadcrumb__item-divider {\n  display: none;\n  visibility: hidden;\n}",""]);const o=i},83880:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var a=r(93379),n=r.n(a),s=r(7795),i=r.n(s),o=r(90569),c=r.n(o),l=r(3565),d=r.n(l),m=r(19216),p=r.n(m),b=r(44589),u=r.n(b),h=r(96360),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=p();n()(h.Z,f);const g=h.Z&&h.Z.locals?h.Z.locals:void 0}}]);
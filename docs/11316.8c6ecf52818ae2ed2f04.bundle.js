(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[11316,79194],{11316:(e,t,s)=>{"use strict";s.r(t),s.d(t,{showingPrevious:()=>p,default:()=>g});var i=s(11227),o=s.n(i),r=s(67294),n=s(91119),a=s(48026),l=s(50816),h=s(79194),d=s(58853),c=s(88363);const u=o()("plugin-kubectl/Logs"),m=(0,n.i18n)("plugin-kubectl","logs");function p(e){return e&&(!!e.parsedOptions.p||!!e.parsedOptions.previous)}class g extends h.default{constructor(e){super(e),this.loglines=[],this._onFilterChange=this.onFilterChange.bind(this),this.state=Object.assign(this.state,{nLines:0,filter:void 0,showingPrevious:p(this.props.args.argsForMode),container:this.defaultContainer()})}supportsAllContainers(){return!0}defaultContainer(){if(this.props.args.argsForMode){const e=(0,d.ZO)(this.props.args.argsForMode,"logs");if(e)return e}return 1===this.containers.length?this.containers[0].name:void 0}toolbarText(e){const t={Live:{message:"Logs are live streaming.",type:"info"},Idle:{message:"Log streaming is idle.",type:"warning"},Paused:{message:"Log streaming is paused.",type:"warning"},Stopped:{message:"Log streaming stopped.",type:"warning"},Error:{message:"Log streaming stopped abnormally.",type:"error"}};if(!t)return;if(!t[e])return void console.error(`Unknown streaming status: ${e}`);const s=t[e].message,i=this.previousMessage(this.state.isTerminated?s:`${s} ${this.state.container?"Showing container X.":"Showing all containers."}`);return{type:t[e].type,text:this.state.container?m(i,this.state.container):m(i)}}previousMessage(e){return this.state.showingPrevious?`${e} Showing previous instance.`:e}isMulti(){return!(!this.props.args.argsForMode||!(0,d.kb)(this.props.args.argsForMode))}ptyCommand(){const{args:e,resource:t}=this.props,{container:s}=this.state,i=s?`-c ${s}`:"--all-containers",o=this.isMulti(),r=e.parsedOptions||{};if(!e.argsForMode||!e.argsForMode.command||o&&s){const r=this.state.showingPrevious||e.argsForMode&&p(e.argsForMode)?"--previous":"",n=!o||e.argsForMode&&e.argsForMode.parsedOptions.f?"-f":"",a=n?"Live":void 0;if(!s&&e.argsForMode&&(0,d.kb)(e.argsForMode))return{command:e.argsForMode.command,isLive:a};const h=o&&s&&s.split(/:/),m=h&&2===h.length&&h,g=m?m[0]:t.spec._podName||t.metadata.name,v=m?`-c ${m[1]}`:i,f=(0,d.QG)(e,`${(0,l.fY)(e)} logs ${(0,c.H1)(t)}/${g} -n ${t.metadata.namespace} ${v} ${n} ${r} --tail 1000`);return u("log command",f),{isLive:a,command:f}}{const t=p(e.argsForMode)?"--previous":"",n=e.argsForMode.parsedOptions.tail?"":" --tail 1000",a=`${e.argsForMode.command} ${s?"":i} ${n} ${t}`;return o||(e.argsForMode.command=void 0),{command:a,isLive:r.f?"Live":"Paused"}}}toolbarButtonsForStreaming(e){if("Live"===e||"Paused"===e){const t="Live"===e;return[{mode:"toggle-streaming",label:m(t?"Pause Streaming":"Resume Streaming"),kind:"view",icon:r.createElement(a.PJ,{icon:t?"Pause":"Play"}),command:this.toggleStreaming.bind(this,!t)}]}return[]}previous(){return{mode:"kubectl-logs-previous-toggle",label:this.state.showingPrevious?m("Show Current"):m("Show Previous"),icon:r.createElement(a.PJ,{icon:this.state.showingPrevious?"NextPage":"PreviousPage"}),kind:"view",command:()=>this.showContainer(void 0,(e=>({showingPrevious:!e.showingPrevious})))}}toolbarButtons(e){return[this.previous()].concat(super.toolbarButtons(e))}doFlowControl(e){this.state.job&&(e?this.state.job.xon():this.state.job.xoff())}toggleStreaming(e){const t=e?"Live":"Paused";this.state.isLive!==t&&(this.doFlowControl(e),this.updateToolbar(e?"Live":"Paused"),this.setState((e=>{if(e.isLive!==t)return{isLive:t}})))}needsHysteresis(){return!0}nothingToShow(){return r.createElement("div",{className:"kui--sidecar-text-content kui--center-absolute"},r.createElement("div",{className:"kui--hero-text"},m("No log data")))}write(e){this.loglines.push(e),!this.state.filter&&this.state.xterm?this.state.xterm.write(e):(this.delay&&clearTimeout(this.delay),this.delay=setTimeout((()=>this.setState({nLines:this.loglines.length})),20))}refill(e){this.setState((t=>{t.xterm.clear();const s=new RegExp(e,/^[a-z0-9]+$/.test(e)?"i":void 0);return this.loglines.join().split(/\n/).forEach((e=>{s.test(e)&&t.xterm.writeln(e)})),{filter:e}}))}onFilterChange(e){this.delay2&&clearTimeout(this.delay2);const t=e.currentTarget.value;this.delay2=setTimeout((()=>this.refill(t)),20)}filterPane(){return r.createElement("div",{className:"flex-layout kui--sidecar-filter-area"},r.createElement("input",{className:"flex-fill kui--sidecar-filter-input",placeholder:"Enter filter string or regular expression",onChange:this._onFilterChange}))}render(){return this.notReady()?super.render():r.createElement(r.Fragment,null,r.createElement("div",{className:"flex-fill"},super.render()),this.filterPane())}}},79194:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var i=s(67294),o=s(72045),r=s(12617),n=s(12320),a=s(91119),l=s(48026),h=s(50816),d=s(58853),c=s(25218);const u=(0,a.i18n)("plugin-kubectl");class m extends i.PureComponent{toolbarButtonsForError(e){return"Stopped"===e||"Error"===e?[{mode:"retry-streaming",label:u("Retry"),kind:"view",icon:i.createElement(l.PJ,{icon:"Retry",onClick:()=>this.showContainer(this.state.container)}),command:()=>{}}]:[]}toolbarButtonsForStreaming(e){return[]}toolbarButtons(e){return this.toolbarButtonsForError(e).concat(this.toolbarButtonsForStreaming(e),this.containerList())}supportsAllContainers(){return!1}componentWillUnmount(){this.state.job&&this.state.job.abort()}updateToolbar(e){this.props.toolbarController.willUpdateToolbar(this.toolbarText(e),this.toolbarButtons(e),!0)}showContainer(e){this.setState({container:e})}get containers(){if(this.props.resource){const{containers:e=[]}=(0,c.th)(this.props.resource)?this.props.resource.spec:this.props.resource.spec.template.spec;return e}return[]}containerOptions(){const e=this.containers,t=e.map((e=>({label:e.name,isSelected:this.state.container===e.name,hasDivider:!1,handler:()=>this.showContainer(e.name)}))).concat(this.supportsAllContainers()&&1!==e.length?[{label:u("All Containers"),isSelected:this.isAllContainers(),hasDivider:!0,handler:()=>this.showContainer(void 0)}]:[]);return i.createElement(l.vb,{isPlain:!0,actions:t})}isAllContainers(){return!this.state.container}containerList(){return[{mode:"container-list",label:"Select a container",kind:"view",command:()=>{},icon:this.containerOptions()}]}}var p=s(186);const g=(0,a.i18n)("plugin-kubectl","exec");function v(e,t){if(/^#[0-9a-fA-F]{6}$/.test(e)){return`rgba(${parseInt(e.slice(1,3),16)},${parseInt(e.slice(3,5),16)},${parseInt(e.slice(5,7),16)},${t})`}return e}class f extends m{constructor(e){super(e),this.cleaners=[],this.isIdle=!0,this._unmounted=!1,this._initInProgressForContainer=!1,this._initCount=0,this.state={container:this.defaultContainer(),dom:void 0,xterm:void 0,doResize:void 0,perTerminalCleaners:[],isLive:"Paused",isTerminated:!1,waitingForHysteresis:!1,gotSomeData:!1,job:void 0,streamUUID:void 0},this.updateToolbar(this.state.isLive);const{uuid:t}=this.props.tab,s=()=>{this.doFocus(),this.doXon()},i=`/mode/focus/on/tab/${t}/mode/${this.mode()}`;a.Events.eventChannelUnsafe.on(i,s),this.cleaners.push((()=>a.Events.eventChannelUnsafe.off(i,s)));const o=this.doXoff.bind(this),r=`/mode/focus/off/tab/${t}/mode/${this.mode()}`;a.Events.eventChannelUnsafe.on(r,o),this.cleaners.push((()=>a.Events.eventChannelUnsafe.off(r,o)));const n=this.onWindowResize.bind(this);window.addEventListener("resize",n),this.cleaners.push((()=>window.removeEventListener("resize",n)));const l=this.onTabLayoutChange.bind(this);a.Events.eventBus.onTabLayoutChange(t,l),this.cleaners.push((()=>a.Events.eventBus.offTabLayoutChange(t,l)))}defaultContainer(){if(this.props.args.argsForMode){const e=(0,d.ZO)(this.props.args.argsForMode,"exec");if(e)return e}return this.props.resource.spec.containers[0].name}mode(){return this.props.mode}doXon(){this.state&&this.state.job&&setTimeout((()=>this.state.job.xon()))}doXoff(){this.state&&this.state.job&&setTimeout((()=>this.state.job.xoff()))}doFocus(){this.state&&this.state.xterm&&setTimeout((()=>{this.state.xterm.focus()}))}static injectTheme(e,t){const s=getComputedStyle(t),i=(e,t="color")=>s.getPropertyValue(`--${t}-${e}`).trim(),o={foreground:i("text-01"),background:i("sidecar-background-01"),cursor:i("support-01"),selection:v(i("selection-background"),.3),black:i("black"),red:i("red"),green:i("green"),yellow:i("yellow"),blue:i("blue"),magenta:i("magenta"),cyan:i("cyan"),white:i("white"),brightBlack:i("black"),brightRed:i("red"),brightGreen:i("green"),brightYellow:i("yellow"),brightBlue:i("blue"),brightMagenta:i("magenta"),brightCyan:i("cyan"),brightWhite:i("white")};e.setOption("theme",o),e.setOption("fontFamily",i("monospace","font"));try{const t=getComputedStyle(document.querySelector("body .repl .repl-input input"));e.setOption("fontSize",parseInt(t.fontSize.replace(/px$/,""),10)),e.setOption("fontWeight",400),e.setOption("fontWeightBold",600)}catch(e){console.error("Error setting terminal font size",e)}}onWindowResize(){this.state.xterm&&this.state.doResize()}onTabLayoutChange(e){this.state.xterm&&!e.isSidecarNowHidden&&this.state.doResize()}componentWillUnmount(){this._unmounted=!0,super.componentWillUnmount(),this.disposeTerminal(),this.cleaners.forEach((e=>e()))}disposeTerminal(){this.state.xterm.dispose(),this.state.perTerminalCleaners.forEach((e=>e())),this.setState({xterm:void 0,perTerminalCleaners:[]})}componentDidUpdate(){this.updateToolbar(this.state.isLive),this.state.job||this.state.isTerminated||this.initStream()}abortPriorJob(){if(this.state.job){const e=this.state.job;setTimeout((()=>e.abort()),5e3)}}showContainer(e,t){this.setState((s=>(this.abortPriorJob(),Object.assign({container:e,job:void 0,streamUUID:void 0,isTerminated:!1},t?t(s):{}))))}static getDerivedStateFromProps(e,t){return t.dom&&!t.xterm?f.initTerminal(t.dom):t}toolbarText(e){return this.state.isTerminated?{type:"error",text:g("The terminal connection has closed.")}:this.state.job?"Idle"===this.state.isLive?{type:"warning",text:g("Connection is idle, and will expire shortly. Connected to container X.",this.state.container)}:{type:"info",text:g("Connected to container X.",this.state.container)}:{type:"warning",text:g("Please wait. Connecting to container X.",this.state.container)}}ptyCommand(){const{args:e,resource:t}=this.props,{container:s}=this.state,i=e.argsForMode&&(0,d.QG)(e.argsForMode,e.argsForMode.command)||(0,d.QG)(this.props.args,`${(0,h.fY)(this.props.args)} exec -it ${t.metadata.name} -c ${s} -n ${t.metadata.namespace} -- sh`);return e.argsForMode&&e.argsForMode.command&&(e.argsForMode.command=void 0),{command:i}}write(e){this.state.xterm&&this.state.xterm.write(e)}gotSomeData(e){this.state.gotSomeData||this.setState((t=>{if(!t.gotSomeData&&t.streamUUID===e)return{gotSomeData:!0}}))}indicate(e){this.updateToolbar(e),this.setState({isLive:e})}initiateIdleCountdown(){this.indicate("Idle"),this.idleTimeout=setTimeout((()=>{this.abortPriorJob()}),3e5)}initiateIdleTimer(){return setTimeout((()=>this.initiateIdleCountdown()),9e5)}initStream(){const{tab:{REPL:e}}=this.props,{xterm:t}=this.state,s=(0,o.Z)();if(this._initInProgressForContainer===this.state.container)return;this._initCount++>0&&t.reset(),this._initInProgressForContainer=this.state.container;const{command:i,isLive:r="Live"}=this.ptyCommand();e.qexec(i,void 0,void 0,{tab:this.props.tab,onInit:()=>{if(!this._unmounted)return this._initInProgressForContainer=!1,e=>{this.idleTimeout&&(clearTimeout(this.idleTimeout),this.indicate(r),this.idleTimeout=this.initiateIdleTimer()),"string"==typeof e&&this.state.streamUUID===s&&(this.gotSomeData(s),this.write(e))}},onReady:e=>{if(!this._unmounted){if((0,a.isResizable)(e)){t.onResize((({rows:t,cols:s})=>{e.resize(t,s)}));const{doResize:s}=this.state;if(s){this.state.doResize();const e=new ResizeObserver((function(e){e.every((e=>e.contentRect.width>0&&e.contentRect.height>0))&&setTimeout(s)}));e.observe(this.state.dom),this.state.perTerminalCleaners.push((()=>e.disconnect()))}}t.onData((t=>{this._unmounted||this.state.streamUUID!==s||e.write(t)})),this.doFocus(),setTimeout((()=>{this.state.isTerminated||this.setState((e=>{if(e.streamUUID===s)return{waitingForHysteresis:!1}}))}),1500),this.idleTimeout&&clearTimeout(this.idleTimeout),this.idleTimeout=this.initiateIdleTimer(),this.setState({job:e,streamUUID:s,isLive:r,waitingForHysteresis:!0})}},onExit:e=>{this._unmounted||this.setState((t=>{if(t.streamUUID===s){const s=0===e?"Stopped":"Error";return this.updateToolbar(s),{job:void 0,streamUUID:void 0,container:t.container,isLive:s,isTerminated:!0}}}))}}).catch((e=>{this._unmounted||this.state.streamUUID!==s||(console.error(e),this.updateToolbar("Error"))}))}isAllContainers(){return super.isAllContainers()&&!this.state.isTerminated}static initTerminal(e){const t=(0,l.w6)()||p.env.RUNNING_SHELL_TEST||p.env.RUNNING_KUI_TEST?"dom":"canvas",s=new n.Terminal({scrollback:1e3,rendererType:t}),i=[],o=()=>f.injectTheme(s,e);o(),a.Events.eventChannelUnsafe.on("/theme/change",o),i.push((()=>a.Events.eventChannelUnsafe.on("/theme/change",o)));const h=new r.FitAddon;s.loadAddon(h),s.open(e);return{xterm:s,doResize:()=>{try{h.fit()}catch(e){console.error(e)}},perTerminalCleaners:i}}needsHysteresis(){return!1}nothingToShow(){return i.createElement(i.Fragment,null)}maybeNothingToShow(){if(this.needsHysteresis()){if(this.state.waitingForHysteresis||!this.state.xterm||!this.state.job)return i.createElement(i.Fragment,null);if(!this.state.gotSomeData)return this.nothingToShow()}}notReady(){return this.state.dom&&!this.state.xterm}render(){return this.notReady()?i.createElement(l.gb,null):i.createElement("div",{className:"kui--full-height kui--terminal kui--relative-positioning","data-needs-hysteresis":this.needsHysteresis(),"data-got-some-data":this.state.gotSomeData,ref:e=>this.setState({dom:e})},this.maybeNothingToShow())}}},12617:e=>{self,e.exports=(()=>{"use strict";var e={775:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FitAddon=void 0;var s=function(){function e(){}return e.prototype.activate=function(e){this._terminal=e},e.prototype.dispose=function(){},e.prototype.fit=function(){var e=this.proposeDimensions();if(e&&this._terminal){var t=this._terminal._core;this._terminal.rows===e.rows&&this._terminal.cols===e.cols||(t._renderService.clear(),this._terminal.resize(e.cols,e.rows))}},e.prototype.proposeDimensions=function(){if(this._terminal&&this._terminal.element&&this._terminal.element.parentElement){var e=this._terminal._core;if(0!==e._renderService.dimensions.actualCellWidth&&0!==e._renderService.dimensions.actualCellHeight){var t=window.getComputedStyle(this._terminal.element.parentElement),s=parseInt(t.getPropertyValue("height")),i=Math.max(0,parseInt(t.getPropertyValue("width"))),o=window.getComputedStyle(this._terminal.element),r=s-(parseInt(o.getPropertyValue("padding-top"))+parseInt(o.getPropertyValue("padding-bottom"))),n=i-(parseInt(o.getPropertyValue("padding-right"))+parseInt(o.getPropertyValue("padding-left")))-e.viewport.scrollBarWidth;return{cols:Math.max(2,Math.floor(n/e._renderService.dimensions.actualCellWidth)),rows:Math.max(1,Math.floor(r/e._renderService.dimensions.actualCellHeight))}}}},e}();t.FitAddon=s}},t={};return function s(i){if(t[i])return t[i].exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}(775)})()}}]);
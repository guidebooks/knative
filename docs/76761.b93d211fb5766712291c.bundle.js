"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[76761],{76761:(e,r,s)=>{s.r(r),s.d(r,{default:()=>k});var n=s(67294),o=s(91119),t=s(37583),a=s(15516),p=s(36223);const i=n.lazy((()=>Promise.all([s.e(13973),s.e(54680),s.e(21947),s.e(80236),s.e(20237),s.e(67809),s.e(23546),s.e(44823),s.e(20347)]).then(s.bind(s,44823)).then((e=>({default:e.Progress}))))),c=(0,o.i18n)("plugin-client-common","code");class l extends n.PureComponent{constructor(e){super(e),this._statusUpdateHandler=(e,r)=>{const s=(0,t.Xs)(e,!1);this.updateStatus(r,s)},this.state={status:{}}}updateStatus(e,r){this.setState((s=>(s.status[e]=r,{status:Object.assign({},s.status)})))}componentDidMount(){this.props.codeBlocks.forEach((e=>{(0,a.T_)(e.id,this._statusUpdateHandler)}))}componentWillUnmount(){this.props.codeBlocks.forEach((e=>{(0,a.RH)(e.id,this._statusUpdateHandler)}))}get nSteps(){return this.props.codeBlocks.length}counts(){return Object.values(this.state.status).reduce(((e,r)=>("success"===r?e.nDone++:"error"===r?e.nError++:"in-progress"===r&&e.nInProgress++,e)),{nDone:0,nError:0,nInProgress:0})}render(){const{nDone:e,nError:r}=this.counts(),s=c("Completed tasks"),o=c("xOfy",e,this.nSteps),t=e===this.nSteps?p.n9.success:r>0?p.n9.danger:void 0;return n.createElement(i,{"aria-label":"wizard progress",className:"kui--wizard-progress",min:0,max:this.nSteps,value:e,title:s,label:o,valueText:o,size:"sm",variant:t})}}var g=s(30617),d=s(59582),f=s(51398),u=function(e,r,s,n){return new(s||(s=Promise))((function(o,t){function a(e){try{i(n.next(e))}catch(e){t(e)}}function p(e){try{i(n.throw(e))}catch(e){t(e)}}function i(e){var r;e.done?o(e.value):(r=e.value,r instanceof s?r:new s((function(e){e(r)}))).then(a,p)}i((n=n.apply(e,r||[])).next())}))};const m=(0,o.i18n)("plugin-client-common","code");class _ extends n.PureComponent{render(){return n.createElement("ol",{className:"pf-c-progress-stepper kui--progress-stepper","data-mini":!0},this.props.children)}}class h extends n.PureComponent{constructor(){super(...arguments),this._statusUpdateHandler=e=>{this.setState({status:(0,t.Xs)(e,!1)})}}componentDidMount(){(0,a.T_)(this.props.codeBlockId,this._statusUpdateHandler),this.props.validate&&setTimeout((()=>u(this,void 0,void 0,(function*(){try{(0,a.VC)(this.props.codeBlockId,"in-progress"),yield(0,o.pexecInCurrentTab)(this.props.validate,void 0,!0,!0),(0,a.VC)(this.props.codeBlockId,"success")}catch(e){(0,a.VC)(this.props.codeBlockId,"blank")}}))))}componentWillUnmount(){(0,a.RH)(this.props.codeBlockId,this._statusUpdateHandler)}get status(){return this.state?this.state.status:"blank"}get statusClass(){return(0,t.g4)(this.status)}icon(){return"in-progress"===this.status?n.createElement(f.ZP,null):n.createElement(n.Fragment,null)}get tooltipText(){return`### ${m("Code Block")}\n#### Status: ${m("status."+this.status)}\n\n\`\`\`${this.props.language||""}\n${this.props.body}\n\`\`\``}render(){return n.createElement(d.default,{markdown:this.tooltipText,maxWidth:"30rem"},n.createElement("li",{className:["pf-c-progress-stepper__step","kui--progress-step",...this.statusClass].join(" ")},n.createElement("div",{className:"pf-c-progress-stepper__step-connector"},n.createElement("a",{className:"kui--progress-step-status-icon-link",href:`#kui-link-${this.props.codeBlockId}`},n.createElement("span",{className:"pf-c-progress-stepper__step-icon kui--progress-step-status-icon"},this.icon())))))}}var b=s(48764).Buffer;const v=n.lazy((()=>Promise.all([s.e(13973),s.e(54680),s.e(21947),s.e(80236),s.e(20237),s.e(67809),s.e(23546),s.e(44823),s.e(20347)]).then(s.bind(s,44823)).then((e=>({default:e.Wizard})))));class k extends n.PureComponent{wizardCodeBlockSteps(e){return e.length>0&&n.createElement(_,null,e.map(((e,r)=>n.createElement(h,{key:r,codeBlockId:e.id,validate:e.validate,body:e.body,language:e.language}))))}wizardStepDescription(e,r){return n.createElement("div",{className:"kui--wizard-nav-item-description"},this.wizardCodeBlockSteps(r),n.createElement("div",{className:"paragraph"},e))}containedCodeBlocks(e){return"string"==typeof e.props.containedCodeBlocks&&e.props.containedCodeBlocks.length>0?e.props.containedCodeBlocks.split(" ").filter(Boolean).map((e=>JSON.parse(b.from(e,"base64").toString()))):[]}footer(){}progress(){if("bar"===this.props["data-kui-wizard-progress"]){const e=this.children.flatMap((e=>this.containedCodeBlocks(e)));return e.length>0&&n.createElement("div",{className:"kui--markdown-major-paragraph"},n.createElement(l,{codeBlocks:e}))}}get children(){return(this.props.children||[]).slice(1)}wizard(){const e=this.children.map((e=>({name:e.props["data-kui-title"],stepNavItemProps:{children:this.wizardStepDescription(e.props["data-kui-description"],this.containedCodeBlocks(e))},component:n.createElement(g.default,{className:"kui--markdown-tab-card"},e.props&&e.props.children)}))),r=this.progress();return n.createElement(v,{hideClose:!0,steps:0===e.length?[{name:"",component:""}]:e,className:"kui--wizard","data-hide-cancel":!0,"data-bottom-margin":!r,footer:this.footer(),title:this.props["data-kui-title"].trim(),description:n.createElement(n.Fragment,null,this.props.children[0],r)})}render(){return this.wizard()}}},53297:(e,r,s)=>{s.d(r,{k:()=>p});var n=s(70655),o=s(67294),t=s(64440),a=s(38296);const p=e=>{var{progressBarAriaProps:r,className:s="",children:p=null,value:i}=e,c=(0,n.__rest)(e,["progressBarAriaProps","className","children","value"]);return o.createElement("div",Object.assign({},c,{className:(0,a.i)(t.Z.progressBar,s)},r),o.createElement("div",{className:(0,a.i)(t.Z.progressIndicator),style:{width:`${i}%`}},o.createElement("span",{className:(0,a.i)(t.Z.progressMeasure)},p)))};p.displayName="ProgressBar"},36223:(e,r,s)=>{s.d(r,{nK:()=>n,n9:()=>o,p1:()=>u});var n,o,t=s(67294),a=s(64440),p=s(38296),i=s(35224),c=s(68778),l=s(72781),g=s(69957),d=s(53297);!function(e){e.outside="outside",e.inside="inside",e.top="top",e.none="none"}(n||(n={})),function(e){e.danger="danger",e.success="success",e.warning="warning"}(o||(o={}));const f={danger:l.ZP,success:c.ZP,warning:g.ZP},u=({progressBarAriaProps:e,value:r,title:s="",parentId:o,label:c=null,variant:l=null,measureLocation:g=n.top,isTitleTruncated:u=!1,tooltipPosition:m})=>{const _=f.hasOwnProperty(l)&&f[l],[h,b]=t.useState(""),v=t.createElement("div",{className:(0,p.i)(a.Z.progressDescription,u&&"string"==typeof s&&a.Z.modifiers.truncate),id:`${o}-description`,"aria-hidden":"true",onMouseEnter:u&&"string"==typeof s?e=>{e.target.offsetWidth<e.target.scrollWidth?b(s||e.target.innerHTML):b("")}:null},s);return t.createElement(t.Fragment,null,h?t.createElement(i.u,{position:m,content:h,isVisible:!0},v):v,t.createElement("div",{className:(0,p.i)(a.Z.progressStatus),"aria-hidden":"true"},(g===n.top||g===n.outside)&&t.createElement("span",{className:(0,p.i)(a.Z.progressMeasure)},c||`${r}%`),f.hasOwnProperty(l)&&t.createElement("span",{className:(0,p.i)(a.Z.progressStatusIcon)},t.createElement(_,null))),t.createElement(d.k,{role:"progressbar",progressBarAriaProps:e,value:r},g===n.inside&&`${r}%`))};u.displayName="ProgressContainer"},68778:(e,r,s)=>{s.d(r,{rE:()=>n,ZP:()=>o});const n=(0,s(40400).IU)({name:"CheckCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",yOffset:0,xOffset:0}),o=n},69957:(e,r,s)=>{s.d(r,{LP:()=>n,ZP:()=>o});const n=(0,s(40400).IU)({name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0}),o=n},72781:(e,r,s)=>{s.d(r,{ZP:()=>n});const n=(0,s(40400).IU)({name:"TimesCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",yOffset:0,xOffset:0})},64440:(e,r,s)=>{s(99252),r.Z={modifiers:{sm:"pf-m-sm",lg:"pf-m-lg",inside:"pf-m-inside",outside:"pf-m-outside",staticWidth:"pf-m-static-width",singleline:"pf-m-singleline",success:"pf-m-success",warning:"pf-m-warning",danger:"pf-m-danger",truncate:"pf-m-truncate"},progress:"pf-c-progress",progressBar:"pf-c-progress__bar",progressDescription:"pf-c-progress__description",progressIndicator:"pf-c-progress__indicator",progressMeasure:"pf-c-progress__measure",progressStatus:"pf-c-progress__status",progressStatusIcon:"pf-c-progress__status-icon"}},48865:(e,r,s)=>{s.d(r,{Z:()=>p});var n=s(8081),o=s.n(n),t=s(23645),a=s.n(t)()(o());a.push([e.id,'.pf-c-progress {\n  --pf-c-progress--GridGap: var(--pf-global--spacer--md);\n  --pf-c-progress__bar--before--BackgroundColor: var(--pf-global--primary-color--100);\n  --pf-c-progress__bar--Height: var(--pf-global--spacer--md);\n  --pf-c-progress__bar--BackgroundColor: var(--pf-global--BackgroundColor--light-100);\n  --pf-c-progress__measure--m-static-width--MinWidth: 4.5ch;\n  --pf-c-progress__status-icon--Color: var(--pf-global--Color--100);\n  --pf-c-progress__status-icon--MarginLeft: var(--pf-global--spacer--sm);\n  --pf-c-progress__bar--before--Opacity: .2;\n  --pf-c-progress__indicator--Height: var(--pf-c-progress__bar--Height);\n  --pf-c-progress__indicator--BackgroundColor: var(--pf-c-progress__bar--before--BackgroundColor);\n  --pf-c-progress--m-success__bar--BackgroundColor: var(--pf-global--success-color--100);\n  --pf-c-progress--m-warning__bar--BackgroundColor: var(--pf-global--warning-color--100);\n  --pf-c-progress--m-danger__bar--BackgroundColor: var(--pf-global--danger-color--100);\n  --pf-c-progress--m-success__status-icon--Color: var(--pf-global--success-color--100);\n  --pf-c-progress--m-warning__status-icon--Color: var(--pf-global--warning-color--100);\n  --pf-c-progress--m-danger__status-icon--Color: var(--pf-global--danger-color--100);\n  --pf-c-progress--m-inside__indicator--MinWidth: var(--pf-global--spacer--xl);\n  --pf-c-progress--m-inside__measure--Color: var(--pf-global--Color--light-100);\n  --pf-c-progress--m-success--m-inside__measure--Color: var(--pf-global--Color--light-100);\n  --pf-c-progress--m-warning--m-inside__measure--Color: var(--pf-global--Color--dark-100);\n  --pf-c-progress--m-inside__measure--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-progress--m-outside__measure--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-progress--m-sm__bar--Height: var(--pf-global--spacer--sm);\n  --pf-c-progress--m-sm__description--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-progress--m-sm__measure--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-progress--m-lg__bar--Height: var(--pf-global--spacer--lg);\n  display: grid;\n  align-items: end;\n  grid-gap: var(--pf-c-progress--GridGap);\n  grid-template-columns: auto auto;\n  grid-template-rows: 1fr auto;\n}\n.pf-c-progress.pf-m-sm {\n  --pf-c-progress__bar--Height: var(--pf-c-progress--m-sm__bar--Height);\n}\n.pf-c-progress.pf-m-sm .pf-c-progress__description {\n  font-size: var(--pf-c-progress--m-sm__description--FontSize);\n}\n.pf-c-progress.pf-m-sm .pf-c-progress__measure {\n  font-size: var(--pf-c-progress--m-sm__measure--FontSize);\n}\n.pf-c-progress.pf-m-lg {\n  --pf-c-progress__bar--Height: var(--pf-c-progress--m-lg__bar--Height);\n}\n.pf-c-progress.pf-m-inside .pf-c-progress__indicator {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: var(--pf-c-progress--m-inside__indicator--MinWidth);\n}\n.pf-c-progress.pf-m-inside .pf-c-progress__measure {\n  font-size: var(--pf-c-progress--m-inside__measure--FontSize);\n  color: var(--pf-c-progress--m-inside__measure--Color);\n  text-align: center;\n}\n.pf-c-progress.pf-m-outside .pf-c-progress__description {\n  grid-column: 1/3;\n}\n.pf-c-progress.pf-m-outside .pf-c-progress__status {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  align-self: center;\n}\n.pf-c-progress.pf-m-outside .pf-c-progress__measure {\n  display: inline-block;\n  font-size: var(--pf-c-progress--m-outside__measure--FontSize);\n}\n.pf-c-progress.pf-m-outside .pf-c-progress__measure.pf-m-static-width {\n  min-width: var(--pf-c-progress__measure--m-static-width--MinWidth);\n  text-align: left;\n}\n.pf-c-progress.pf-m-outside .pf-c-progress__bar,\n.pf-c-progress.pf-m-outside .pf-c-progress__indicator {\n  grid-column: 1/2;\n}\n.pf-c-progress.pf-m-singleline {\n  grid-template-rows: 1fr;\n}\n.pf-c-progress.pf-m-singleline .pf-c-progress__description {\n  display: none;\n  visibility: hidden;\n}\n.pf-c-progress.pf-m-singleline .pf-c-progress__bar {\n  grid-row: 1/2;\n  grid-column: 1/2;\n}\n.pf-c-progress.pf-m-singleline .pf-c-progress__status {\n  grid-row: 1/2;\n  grid-column: 2/3;\n}\n.pf-c-progress.pf-m-outside, .pf-c-progress.pf-m-singleline {\n  grid-template-columns: 1fr fit-content(50%);\n}\n.pf-c-progress.pf-m-success {\n  --pf-c-progress__bar--before--BackgroundColor: var(--pf-c-progress--m-success__bar--BackgroundColor);\n  --pf-c-progress__status-icon--Color: var(--pf-c-progress--m-success__status-icon--Color);\n  --pf-c-progress--m-inside__measure--Color: var(--pf-c-progress--m-success--m-inside__measure--Color);\n}\n.pf-c-progress.pf-m-warning {\n  --pf-c-progress__bar--before--BackgroundColor: var(--pf-c-progress--m-warning__bar--BackgroundColor);\n  --pf-c-progress__status-icon--Color: var(--pf-c-progress--m-warning__status-icon--Color);\n  --pf-c-progress--m-inside__measure--Color: var(--pf-c-progress--m-warning--m-inside__measure--Color);\n}\n.pf-c-progress.pf-m-danger {\n  --pf-c-progress__bar--before--BackgroundColor: var(--pf-c-progress--m-danger__bar--BackgroundColor);\n  --pf-c-progress__status-icon--Color: var(--pf-c-progress--m-danger__status-icon--Color);\n}\n\n.pf-c-progress__description {\n  word-break: break-word;\n  grid-column: 1/2;\n}\n.pf-c-progress__description.pf-m-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.pf-c-progress__status {\n  grid-column: 2/3;\n  grid-row: 1/2;\n  text-align: right;\n  word-break: break-word;\n}\n\n.pf-c-progress__status-icon {\n  margin-left: var(--pf-c-progress__status-icon--MarginLeft);\n  color: var(--pf-c-progress__status-icon--Color);\n}\n\n.pf-c-progress__bar {\n  position: relative;\n  grid-column: 1/3;\n  grid-row: 2/3;\n  align-self: center;\n  height: var(--pf-c-progress__bar--Height);\n  background-color: var(--pf-c-progress__bar--BackgroundColor);\n}\n.pf-c-progress__bar::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  content: "";\n  background-color: var(--pf-c-progress__bar--before--BackgroundColor);\n  opacity: var(--pf-c-progress__bar--before--Opacity);\n}\n\n.pf-c-progress__indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: var(--pf-c-progress__indicator--Height);\n  background-color: var(--pf-c-progress__indicator--BackgroundColor);\n}',""]);const p=a},99252:(e,r,s)=>{s.r(r),s.d(r,{default:()=>h});var n=s(93379),o=s.n(n),t=s(7795),a=s.n(t),p=s(90569),i=s.n(p),c=s(3565),l=s.n(c),g=s(19216),d=s.n(g),f=s(44589),u=s.n(f),m=s(48865),_={};_.styleTagTransform=u(),_.setAttributes=l(),_.insert=i().bind(null,"head"),_.domAPI=a(),_.insertStyleElement=d();o()(m.Z,_);const h=m.Z&&m.Z.locals?m.Z.locals:void 0}}]);
"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[60707],{93149:(e,n,i)=>{i.d(n,{X:()=>p});var t=i(70655),l=i(67294),a=i(88007),o=i(38296),c=i(62472);const d=()=>{};class p extends l.Component{constructor(e){super(e),this.handleChange=e=>{this.props.onChange(e.currentTarget.checked,e)},this.state={ouiaStateId:(0,c.ql)(p.displayName)}}render(){const e=this.props,{"aria-label":n,className:i,onChange:r,isValid:f,isDisabled:s,isChecked:m,label:u,checked:b,defaultChecked:g,description:_,body:h,ouiaId:v,ouiaSafe:k}=e,E=(0,t.__rest)(e,["aria-label","className","onChange","isValid","isDisabled","isChecked","label","checked","defaultChecked","description","body","ouiaId","ouiaSafe"]);E.id||console.error("Checkbox:","id is required to make input accessible");const y={};return([!0,!1].includes(b)||!0===m)&&(y.checked=b||m),r!==d&&(y.checked=m),[!1,!0].includes(g)&&(y.defaultChecked=g),y.checked=null!==y.checked&&y.checked,l.createElement("div",{className:(0,o.i)(a.Z.check,!u&&a.Z.modifiers.standalone,i)},l.createElement("input",Object.assign({},E,{className:(0,o.i)(a.Z.checkInput),type:"checkbox",onChange:this.handleChange,"aria-invalid":!f,"aria-label":n,disabled:s,ref:e=>e&&(e.indeterminate=null===m)},y,(0,c.dp)(p.displayName,void 0!==v?v:this.state.ouiaStateId,k))),u&&l.createElement("label",{className:(0,o.i)(a.Z.checkLabel,s&&a.Z.modifiers.disabled),htmlFor:E.id},u),_&&l.createElement("span",{className:(0,o.i)(a.Z.checkDescription)},_),h&&l.createElement("span",{className:(0,o.i)(a.Z.checkBody)},h))}}p.displayName="Checkbox",p.defaultProps={className:"",isValid:!0,isDisabled:!1,isChecked:!1,onChange:d,ouiaSafe:!0}},24396:(e,n,i)=>{i.d(n,{tL:()=>a,Hl:()=>o,FS:()=>c});var t=i(67294),l=i(80164);const a=(e,n,i=(e=>document.activeElement.contains(e)),t=(e=>e),l=["A","BUTTON","INPUT"],a=!1,o=!1,c=!0,d=!0)=>{const p=document.activeElement,r=e.key;let f=null;if(!a&&["ArrowUp","ArrowDown"].includes(r)){e.preventDefault(),e.stopImmediatePropagation();let l=-1;n.forEach(((e,a)=>{if(i(e)){let e=0;for(;!f&&e<n.length&&-1*e<n.length;)"ArrowUp"===r?e--:e++,l=a+e,l>=n.length&&(l=0),l<0&&(l=n.length-1),f=t(n[l])}}))}if(!o&&["ArrowLeft","ArrowRight"].includes(r)){e.preventDefault(),e.stopImmediatePropagation();let t=-1;n.forEach(((a,o)=>{if(i(a)){const i=n[o].querySelectorAll(l.join(","));if(!i.length||d){let e=p;for(;e;)if(e="ArrowLeft"===r?e.previousElementSibling:e.nextElementSibling,e&&l.includes(e.tagName)){f=e;break}}else i.forEach(((n,l)=>{if(e.target===n){t=l+("ArrowLeft"===r?-1:1),t>=i.length&&(t=0),t<0&&(t=i.length-1),f=i[t]}}))}}))}f&&(c&&(p.tabIndex=-1,f.tabIndex=0),f.focus())},o=e=>{e&&e.length>0&&(e.forEach((e=>{e.tabIndex=-1})),e[0].tabIndex=0)};class c extends t.Component{constructor(){super(...arguments),this.keyHandler=e=>{const{isEventFromContainer:n}=this.props;if(n?!n(e):!this._isEventFromContainer(e))return;const{isActiveElement:i,getFocusableElement:t,noVerticalArrowHandling:l,noHorizontalArrowHandling:o,noEnterHandling:c,noSpaceHandling:d,updateTabIndex:p,validSiblingTags:r,additionalKeyHandler:f,createNavigableElements:s}=this.props;f&&f(e);const m=s();if(!m)return void console.warn("No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.");const u=e.key;c||"Enter"===u&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),d||" "===u&&(e.preventDefault(),e.stopImmediatePropagation(),document.activeElement.click()),a(e,m,i,t,r,l,o,p)},this._isEventFromContainer=e=>{const{containerRef:n}=this.props;return n.current&&n.current.contains(e.target)}}componentDidMount(){l.Nq&&window.addEventListener("keydown",this.keyHandler)}componentWillUnmount(){l.Nq&&window.removeEventListener("keydown",this.keyHandler)}render(){return null}}c.displayName="KeyboardHandler",c.defaultProps={containerRef:null,createNavigableElements:()=>null,isActiveElement:e=>document.activeElement===e,getFocusableElement:e=>e,validSiblingTags:["BUTTON","A"],updateTabIndex:!0,noHorizontalArrowHandling:!1,noVerticalArrowHandling:!1,noEnterHandling:!1,noSpaceHandling:!1}},9003:(e,n,i)=>{i.d(n,{ZP:()=>t});const t=(0,i(40400).IU)({name:"AngleDownIcon",height:512,width:320,svgPath:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",yOffset:0,xOffset:0})},26499:(e,n,i)=>{i.d(n,{ZP:()=>t});const t=(0,i(40400).IU)({name:"GripVerticalIcon",height:512,width:320,svgPath:"M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0})},44059:(e,n,i)=>{i(76159),n.Z={button:"pf-c-button",inlineEdit:"pf-c-inline-edit",inlineEditAction:"pf-c-inline-edit__action",inlineEditEditableText:"pf-c-inline-edit__editable-text",inlineEditGroup:"pf-c-inline-edit__group",inlineEditInput:"pf-c-inline-edit__input",inlineEditLabel:"pf-c-inline-edit__label",inlineEditValue:"pf-c-inline-edit__value",modifiers:{iconGroup:"pf-m-icon-group",footer:"pf-m-footer",column:"pf-m-column",valid:"pf-m-valid",plain:"pf-m-plain",actionGroup:"pf-m-action-group",enableEditable:"pf-m-enable-editable",inlineEditable:"pf-m-inline-editable",enable:"pf-m-enable",bold:"pf-m-bold"}}},24751:(e,n,i)=>{i.d(n,{Z:()=>c});var t=i(8081),l=i.n(t),a=i(23645),o=i.n(a)()(l());o.push([e.id,".pf-c-inline-edit {\n  --pf-c-inline-edit__group--item--MarginRight: var(--pf-global--spacer--sm);\n  --pf-c-inline-edit__action--c-button--m-valid--m-plain--Color: var(--pf-global--link--Color);\n  --pf-c-inline-edit__action--c-button--m-valid--m-plain--hover--Color: var(--pf-global--link--Color--hover);\n  --pf-c-inline-edit__action--m-icon-group--item--MarginRight: 0;\n  --pf-c-inline-edit__group--m-footer--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-inline-edit__label--m-bold--FontWeight: var(--pf-global--FontWeight--semi-bold);\n}\n\n.pf-c-inline-edit__group {\n  display: flex;\n  align-items: baseline;\n}\n.pf-c-inline-edit__group > * {\n  margin-right: var(--pf-c-inline-edit__group--item--MarginRight);\n}\n.pf-c-inline-edit__group.pf-m-icon-group {\n  --pf-c-inline-edit__group--item--MarginRight: var(--pf-c-inline-edit__action--m-icon-group--item--MarginRight);\n}\n.pf-c-inline-edit__group.pf-m-footer {\n  margin-top: var(--pf-c-inline-edit__group--m-footer--MarginTop);\n}\n.pf-c-inline-edit__group.pf-m-column {\n  --pf-c-inline-edit__group--item--MarginRight: 0;\n  flex-direction: column;\n}\n.pf-c-inline-edit__group > :last-child {\n  --pf-c-inline-edit__group--item--MarginRight: 0;\n}\n\n.pf-c-inline-edit__input {\n  flex: 1;\n}\n\n.pf-c-inline-edit__action.pf-m-valid .pf-c-button.pf-m-plain {\n  --pf-c-button--m-plain--Color: var(--pf-c-inline-edit__action--c-button--m-valid--m-plain--Color);\n}\n.pf-c-inline-edit__action.pf-m-valid .pf-c-button.pf-m-plain:hover {\n  --pf-c-button--m-plain--Color: var(--pf-c-inline-edit__action--c-button--m-valid--m-plain--hover--Color);\n}\n\n.pf-c-inline-edit__input,\n.pf-c-inline-edit__action,\n.pf-c-inline-edit__group.pf-m-action-group {\n  display: none;\n  visibility: hidden;\n}\n\n.pf-c-inline-edit__action.pf-m-enable-editable {\n  display: inline-block;\n  visibility: visible;\n}\n\n.pf-c-inline-edit.pf-m-inline-editable .pf-c-inline-edit__input,\n.pf-c-inline-edit.pf-m-inline-editable .pf-c-inline-edit__action,\n.pf-c-inline-edit.pf-m-inline-editable .pf-c-inline-edit__group.pf-m-action-group,\n.pf-c-inline-edit .pf-m-inline-editable .pf-c-inline-edit__input,\n.pf-c-inline-edit .pf-m-inline-editable .pf-c-inline-edit__action,\n.pf-c-inline-edit .pf-m-inline-editable .pf-c-inline-edit__group.pf-m-action-group {\n  visibility: visible;\n}\n.pf-c-inline-edit.pf-m-inline-editable .pf-c-inline-edit__input,\n.pf-c-inline-edit .pf-m-inline-editable .pf-c-inline-edit__input {\n  display: block;\n}\n.pf-c-inline-edit.pf-m-inline-editable .pf-c-inline-edit__action,\n.pf-c-inline-edit .pf-m-inline-editable .pf-c-inline-edit__action {\n  display: inline-block;\n}\n.pf-c-inline-edit.pf-m-inline-editable .pf-c-inline-edit__group.pf-m-action-group,\n.pf-c-inline-edit .pf-m-inline-editable .pf-c-inline-edit__group.pf-m-action-group {\n  display: inline-flex;\n}\n.pf-c-inline-edit.pf-m-inline-editable .pf-c-inline-edit__value,\n.pf-c-inline-edit.pf-m-inline-editable .pf-c-inline-edit__action.pf-m-enable-editable,\n.pf-c-inline-edit .pf-m-inline-editable .pf-c-inline-edit__value,\n.pf-c-inline-edit .pf-m-inline-editable .pf-c-inline-edit__action.pf-m-enable-editable {\n  display: none;\n  visibility: hidden;\n}\n\n.pf-c-inline-edit__label + .pf-c-inline-edit__action.pf-m-enable > .pf-c-button {\n  margin-top: calc(var(--pf-c-button--PaddingTop) * -1);\n  margin-bottom: calc(var(--pf-c-button--PaddingBottom) * -1);\n}\n\n.pf-c-inline-edit__label.pf-m-bold {\n  font-weight: var(--pf-c-inline-edit__label--m-bold--FontWeight);\n}\n\n.pf-c-inline-edit__editable-text br {\n  display: none;\n}",""]);const c=o},76159:(e,n,i)=>{i.r(n),i.d(n,{default:()=>_});var t=i(93379),l=i.n(t),a=i(7795),o=i.n(a),c=i(90569),d=i.n(c),p=i(3565),r=i.n(p),f=i(19216),s=i.n(f),m=i(44589),u=i.n(m),b=i(24751),g={};g.styleTagTransform=u(),g.setAttributes=r(),g.insert=d().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s();l()(b.Z,g);const _=b.Z&&b.Z.locals?b.Z.locals:void 0}}]);
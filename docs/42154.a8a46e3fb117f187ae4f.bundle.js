"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[42154],{42154:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var l=s(67294);const o=l.lazy((()=>Promise.all([s.e(33676),s.e(37316),s.e(72683),s.e(23749),s.e(81346),s.e(60707),s.e(88038),s.e(13973),s.e(54680),s.e(21947),s.e(80236),s.e(20237),s.e(67809),s.e(23546),s.e(16410),s.e(2053)]).then(s.bind(s,16410)).then((e=>({default:e.Alert}))))),r=l.lazy((()=>Promise.all([s.e(33676),s.e(37316),s.e(72683),s.e(23749),s.e(81346),s.e(60707),s.e(88038),s.e(13973),s.e(54680),s.e(21947),s.e(80236),s.e(20237),s.e(67809),s.e(23546),s.e(16410),s.e(2053)]).then(s.bind(s,16410)).then((e=>({default:e.AlertActionCloseButton})))));class i extends l.PureComponent{constructor(e){super(e),this._onClose=this.onClose.bind(this),this.state=i.getDerivedStateFromProps(e)}static getDerivedStateFromProps(e,t){return t&&e===t.props?t:{props:e,isClosed:!1}}onClose(){this.props.onCloseButtonClick&&this.props.onCloseButtonClick(),this.setState({isClosed:!0})}render(){return this.state.isClosed?l.createElement(l.Fragment,null):l.createElement(o,{id:this.props.id||"",className:"kui--toolbar-alert "+(this.props.className||""),"data-type":this.props.alert.type,title:this.props.alert.title,actionClose:!this.props.hideCloseButton&&l.createElement(r,{onClose:this._onClose}),timeout:this.props.timeout,onTimeout:this._onClose,isInline:!this.props.isGlobal,variant:"error"===this.props.alert.type?"danger":this.props.alert.type},l.createElement(l.Fragment,null,this.props.alert.body||"",this.props.children))}}function n(e){return l.createElement(l.Suspense,{fallback:l.createElement("div",null)},l.createElement(i,Object.assign({},e)))}}}]);
"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[26914],{6487:(M,e,t)=>{t.r(e),t.d(e,{default:()=>j});var A=t(67294),a=t(27877),D=t(91119),i=t(12079),o=t(36483);class j extends A.Component{constructor(M){super(M),this.state={cleaners:[],wrapper:A.createRef(),editor:void 0,catastrophicError:void 0}}static getDerivedStateFromError(M){return{catastrophicError:M}}componentDidCatch(M,e){console.error("catastrophic error in Editor",M,e)}shouldComponentUpdate(M,e){return!e.editor||!!e.catastrophicError}static getDerivedStateFromProps(M,e){if(e.editor){const t=e.editor.getModel(),A=t.getLanguageId(),D=j.language(M.contentType);t.getValue()===M.content&&A===D||(e.editor.setValue(M.content),a.editor.setModelLanguage(t,D))}return e}componentWillUnmount(){this.destroyMonaco()}destroyMonaco(){this.state.cleaners.forEach((M=>M()))}static onChange(M,e){return()=>{M.onContentChange(e.getValue())}}registerKeyboardShortcuts(M){const{onSave:e,onCancel:t}=this.props;e&&(M.addCommand(a.KeyMod.CtrlCmd|a.KeyCode.KeyS,(()=>{e(M.getValue())})),M.addCommand(a.KeyMod.Shift|a.KeyCode.Enter,(()=>{e(M.getValue())}))),t&&M.onKeyUp((e=>{"Escape"===e.browserEvent.key&&(e.browserEvent.stopPropagation(),t(M.getValue()))}))}static language(M){return/^(ba)?sh$/.test(M)?"shell":M}initMonaco(M,e){const t=[],A=M.content.split(/\n/).length;try{const n={value:M.content,readOnly:void 0===M.readonly||M.readonly,fontSize:M.fontSize||(0,i.Z)()*(M.fontSizeAdjust||1),language:j.language(M.contentType),wordWrap:M.wordWrap,simple:M.simple},s={theme:M.light?"vs":"vs-dark"},r=Object.assign((0,o.Z)(Object.assign({showLineNumbers:A>1,lineNumbersMinChars:A.toString().length},n)),n,s),g=a.editor.create(e.wrapper.current,r);this.registerKeyboardShortcuts(g);const I=M.simple?()=>{const M=void 0!==this.props.minHeight?this.props.minHeight:250,t=Math.max(M,g.getContentHeight());e.wrapper.current.style.height=(0===M?t:Math.min(.3*window.innerHeight,t))+"px"}:void 0;I&&I(),e.wrapper.current.getValueForTests=()=>g.getValue(),g.onDidContentSizeChange((()=>{I&&I(),g.layout()})),M.onContentChange&&g.onKeyUp(j.onChange(M,g)),r.readOnly||!1===this.props.focus||setTimeout((()=>g.focus()));const w=()=>{g.updateOptions({fontSize:(0,i.Z)()})};if(D.Events.eventChannelUnsafe.on("/zoom",w),t.push((()=>D.Events.eventChannelUnsafe.off("/zoom",w))),M.tabUUID){const e=()=>{g.layout()};D.Events.eventBus.onTabLayoutChange(M.tabUUID,e),t.push((()=>D.Events.eventBus.offTabLayoutChange(M.tabUUID,e)))}setTimeout((()=>g.layout()),50),t.push((()=>{g.dispose();const M=g.getModel();M&&M.dispose()})),this.setState({editor:g,cleaners:t})}catch(M){console.error("Error initing Monaco: ",M),this.setState({catastrophicError:M})}}componentDidMount(){!this.state.editor&&this.state.wrapper.current?this.initMonaco(this.props,this.state):this.props.scrollIntoView&&this.state.wrapper.current&&this.state.wrapper.current.scrollIntoView()}render(){if(this.state.catastrophicError)return A.createElement("div",{className:"oops"}," ",this.state.catastrophicError.toString());{const M="monaco-editor-wrapper"+(this.props.className?" "+this.props.className:"");return A.createElement("div",{className:M,ref:this.state.wrapper})}}}},94748:M=>{M.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAAHUlEQVQYV2PYvXu3JAi7uLiAMaYAjAGTQBPYLQkAa/0Zef3qRswAAAAASUVORK5CYII="},6161:M=>{M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjNDI0MjQyIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},51096:M=>{M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCA1MyAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDguMDM2NCA0LjAxMDQySDQuMDA3NzlMNC4wMDc3OSAzMi4wMjg2SDQ4LjAzNjRWNC4wMTA0MlpNNC4wMDc3OSAwLjAwNzgxMjVDMS43OTcyMSAwLjAwNzgxMjUgMC4wMDUxODc5OSAxLjc5OTg0IDAuMDA1MTg3OTkgNC4wMTA0MlYzMi4wMjg2QzAuMDA1MTg3OTkgMzQuMjM5MiAxLjc5NzIxIDM2LjAzMTIgNC4wMDc3OSAzNi4wMzEySDQ4LjAzNjRDNTAuMjQ3IDM2LjAzMTIgNTIuMDM5IDM0LjIzOTIgNTIuMDM5IDMyLjAyODZWNC4wMTA0MkM1Mi4wMzkgMS43OTk4NCA1MC4yNDcgMC4wMDc4MTI1IDQ4LjAzNjQgMC4wMDc4MTI1SDQuMDA3NzlaTTguMDEwNDIgOC4wMTMwMkgxMi4wMTNWMTIuMDE1Nkg4LjAxMDQyVjguMDEzMDJaTTIwLjAxODIgOC4wMTMwMkgxNi4wMTU2VjEyLjAxNTZIMjAuMDE4MlY4LjAxMzAyWk0yNC4wMjA4IDguMDEzMDJIMjguMDIzNFYxMi4wMTU2SDI0LjAyMDhWOC4wMTMwMlpNMzYuMDI4NiA4LjAxMzAySDMyLjAyNlYxMi4wMTU2SDM2LjAyODZWOC4wMTMwMlpNNDAuMDMxMiA4LjAxMzAySDQ0LjAzMzlWMTIuMDE1Nkg0MC4wMzEyVjguMDEzMDJaTTE2LjAxNTYgMTYuMDE4Mkg4LjAxMDQyVjIwLjAyMDhIMTYuMDE1NlYxNi4wMTgyWk0yMC4wMTgyIDE2LjAxODJIMjQuMDIwOFYyMC4wMjA4SDIwLjAxODJWMTYuMDE4MlpNMzIuMDI2IDE2LjAxODJIMjguMDIzNFYyMC4wMjA4SDMyLjAyNlYxNi4wMTgyWk00NC4wMzM5IDE2LjAxODJWMjAuMDIwOEgzNi4wMjg2VjE2LjAxODJINDQuMDMzOVpNMTIuMDEzIDI0LjAyMzRIOC4wMTA0MlYyOC4wMjZIMTIuMDEzVjI0LjAyMzRaTTE2LjAxNTYgMjQuMDIzNEgzNi4wMjg2VjI4LjAyNkgxNi4wMTU2VjI0LjAyMzRaTTQ0LjAzMzkgMjQuMDIzNEg0MC4wMzEyVjI4LjAyNkg0NC4wMzM5VjI0LjAyMzRaIiBmaWxsPSIjQzVDNUM1Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iNTMiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);
"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[42200,6033],{6033:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var a=l(67294);const n=a.lazy((()=>Promise.all([l.e(33676),l.e(23749),l.e(95318)]).then(l.bind(l,79279))));function s(e){return a.createElement(n,Object.assign({},e))}},42200:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(67294),n=l(91119),s=l(6033);class r extends a.PureComponent{constructor(e){super(e),this.state={selectedIdx:e.table.defaultSelectedIdx}}render(){return a.createElement(s.default,{toggle:"caret",actions:this.props.table.body.map(((e,t)=>({label:(0,n.radioTableCellToString)(e.cells[e.nameIdx||0]),isSelected:this.state.selectedIdx===t,handler:()=>(0,n.pexecInCurrentTab)(e.onSelect)}))),position:"left"})}}}}]);
"use strict";(self.webpackChunkKuiClientTemplate=self.webpackChunkKuiClientTemplate||[]).push([[67809],{91921:(i,t,n)=>{n.d(t,{o:()=>c});var o=n(70655),l=n(67294),e=n(38296),p=n(16975),s=n(80164);const r=i=>{const t="--pf-c-description-list--GridTemplateColumns--min",n=i;return Object.keys(n||{}).reduce(((i,o)=>"default"===o?Object.assign(Object.assign({},i),{[t]:n[o]}):Object.assign(Object.assign({},i),{[`${t}-on-${o}`]:n[o]})),{})},c=i=>{var{className:t="",children:n=null,isHorizontal:c=!1,isAutoColumnWidths:m,isAutoFit:d,isInlineGrid:a,isCompact:f,isFluid:u,isFillColumns:_,columnModifier:h,autoFitMinModifier:v,orientation:C,style:T}=i,G=(0,o.__rest)(i,["className","children","isHorizontal","isAutoColumnWidths","isAutoFit","isInlineGrid","isCompact","isFluid","isFillColumns","columnModifier","autoFitMinModifier","orientation","style"]);return l.createElement("dl",Object.assign({className:(0,e.i)(p.Z.descriptionList,(c||u)&&p.Z.modifiers.horizontal,m&&p.Z.modifiers.autoColumnWidths,d&&p.Z.modifiers.autoFit,(0,s.wt)(h,p.Z),(0,s.wt)(C,p.Z),a&&p.Z.modifiers.inlineGrid,f&&p.Z.modifiers.compact,u&&p.Z.modifiers.fluid,_&&p.Z.modifiers.fillColumns,t),style:v||T?Object.assign(Object.assign({},d?r(v):{}),T):void 0},G),n)};c.displayName="DescriptionList"},3025:(i,t,n)=>{n.d(t,{b:()=>s});var o=n(70655),l=n(67294),e=n(16975),p=n(38296);const s=i=>{var{children:t=null,className:n}=i,s=(0,o.__rest)(i,["children","className"]);return l.createElement("dd",Object.assign({className:(0,p.i)(e.Z.descriptionListDescription,n)},s),l.createElement("div",{className:"pf-c-description-list__text"},t))};s.displayName="DescriptionListDescription"},58844:(i,t,n)=>{n.d(t,{g:()=>s});var o=n(70655),l=n(67294),e=n(16975),p=n(38296);const s=i=>{var{className:t,children:n}=i,s=(0,o.__rest)(i,["className","children"]);return l.createElement("div",Object.assign({className:(0,p.i)(e.Z.descriptionListGroup,t)},s),n)};s.displayName="DescriptionListGroup"},10550:(i,t,n)=>{n.d(t,{M:()=>s});var o=n(70655),l=n(67294),e=n(16975),p=n(38296);const s=i=>{var{children:t,className:n,icon:s}=i,r=(0,o.__rest)(i,["children","className","icon"]);return l.createElement("dt",Object.assign({className:(0,p.i)(e.Z.descriptionListTerm,n)},r),s?l.createElement("span",{className:(0,p.i)(e.Z.descriptionListTermIcon)},s):null,l.createElement("span",{className:(0,p.i)(e.Z.descriptionListText)},t))};s.displayName="DescriptionListTerm"},16975:(i,t,n)=>{n(36233),t.Z={descriptionList:"pf-c-description-list",descriptionListDescription:"pf-c-description-list__description",descriptionListGroup:"pf-c-description-list__group",descriptionListTerm:"pf-c-description-list__term",descriptionListTermIcon:"pf-c-description-list__term-icon",descriptionListText:"pf-c-description-list__text",modifiers:{inlineGrid:"pf-m-inline-grid",autoColumnWidths:"pf-m-auto-column-widths",autoFit:"pf-m-auto-fit",compact:"pf-m-compact",fluid:"pf-m-fluid",fillColumns:"pf-m-fill-columns",helpText:"pf-m-help-text","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col",horizontal:"pf-m-horizontal",vertical:"pf-m-vertical","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm",horizontalOnSm:"pf-m-horizontal-on-sm",verticalOnSm:"pf-m-vertical-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md",horizontalOnMd:"pf-m-horizontal-on-md",verticalOnMd:"pf-m-vertical-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg",horizontalOnLg:"pf-m-horizontal-on-lg",verticalOnLg:"pf-m-vertical-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl",horizontalOnXl:"pf-m-horizontal-on-xl",verticalOnXl:"pf-m-vertical-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",verticalOn_2xl:"pf-m-vertical-on-2xl"}}},78674:(i,t,n)=>{n.d(t,{Z:()=>s});var o=n(8081),l=n.n(o),e=n(23645),p=n.n(e)()(l());p.push([i.id,".pf-c-description-list {\n  --pf-c-description-list--RowGap: var(--pf-global--gutter--md);\n  --pf-c-description-list--ColumnGap: var(--pf-global--spacer--lg);\n  --pf-c-description-list--GridTemplateColumns--count: 1;\n  --pf-c-description-list--GridTemplateColumns--width: 1fr;\n  --pf-c-description-list--GridTemplateColumns--min: 0;\n  --pf-c-description-list--GridTemplateColumns: repeat(var(--pf-c-description-list--GridTemplateColumns--count), var(--pf-c-description-list--GridTemplateColumns--width));\n  --pf-c-description-list__group--RowGap: var(--pf-global--spacer--sm);\n  --pf-c-description-list__group--ColumnGap: var(--pf-global--spacer--sm);\n  --pf-c-description-list__group--GridTemplateColumns: auto;\n  --pf-c-description-list__group--GridColumn: auto;\n  --pf-c-description-list--m-compact--RowGap: var(--pf-global--gutter);\n  --pf-c-description-list--m-compact--ColumnGap: var(--pf-global--spacer--sm);\n  --pf-c-description-list__term--Display: inline;\n  --pf-c-description-list__term--sm--Display: flex;\n  --pf-c-description-list__term--FontWeight: var(--pf-global--FontWeight--bold);\n  --pf-c-description-list__term--FontSize: var(--pf-global--FontSize--sm);\n  --pf-c-description-list__term--LineHeight: var(--pf-global--LineHeight--sm);\n  --pf-c-description-list__term-icon--MinWidth: var(--pf-global--icon--FontSize--sm);\n  --pf-c-description-list__term-icon--MarginRight: var(--pf-global--spacer--sm);\n  --pf-c-description-list__term-icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-description-list--m-vertical__group--GridTemplateColumns: repeat(var(--pf-c-description-list--GridTemplateColumns--count));\n  --pf-c-description-list--m-horizontal__term--width: 12ch;\n  --pf-c-description-list--m-horizontal__description--width: minmax(10ch, auto);\n  --pf-c-description-list--m-horizontal__group--GridTemplateColumns: var(--pf-c-description-list__term--width) var(--pf-c-description-list--m-horizontal__description--width);\n  --pf-c-description-list--m-1-col--GridTemplateColumns--count: 1;\n  --pf-c-description-list--m-2-col--GridTemplateColumns--count: 2;\n  --pf-c-description-list--m-3-col--GridTemplateColumns--count: 3;\n  --pf-c-description-list--m-auto-fit--GridTemplateColumns--min: 15.625rem;\n  --pf-c-description-list--m-auto-fit--GridTemplateColumns--minmax--min: var(--pf-c-description-list--m-auto-fit--GridTemplateColumns--min);\n  --pf-c-description-list__text--m-help-text--TextDecorationColor: var(--pf-global--BorderColor--200);\n  --pf-c-description-list__text--m-help-text--TextDecorationThickness: var(--pf-global--BorderWidth--sm);\n  --pf-c-description-list__text--m-help-text--TextDecorationOffset: 0.25rem;\n  --pf-c-description-list__text--m-help-text--hover--TextDecorationColor: var(--pf-global--Color--100);\n  --pf-c-description-list__text--m-help-text--focus--TextDecorationColor: var(--pf-global--Color--100);\n  display: grid;\n  align-items: baseline;\n  row-gap: var(--pf-c-description-list--RowGap);\n  column-gap: var(--pf-c-description-list--ColumnGap);\n  grid-template-columns: var(--pf-c-description-list--GridTemplateColumns);\n}\n@media screen and (min-width: 576px) {\n  .pf-c-description-list {\n    --pf-c-description-list__term--Display: var(--pf-c-description-list__term--sm--Display);\n  }\n}\n.pf-c-description-list[class*=pf-m-horizontal] {\n  --pf-c-description-list__term--width: var(--pf-c-description-list--m-horizontal__term--width);\n}\n@media (min-width: 576px) {\n  .pf-c-description-list[class*=pf-m-horizontal] {\n    --pf-c-description-list__term--width: var(--pf-c-description-list--m-horizontal__term--width-on-sm, var(--pf-c-description-list--m-horizontal__term--width));\n  }\n}\n@media (min-width: 768px) {\n  .pf-c-description-list[class*=pf-m-horizontal] {\n    --pf-c-description-list__term--width: var(--pf-c-description-list--m-horizontal__term--width-on-md, var(--pf-c-description-list--m-horizontal__term--width-on-sm, var(--pf-c-description-list--m-horizontal__term--width)));\n  }\n}\n@media (min-width: 992px) {\n  .pf-c-description-list[class*=pf-m-horizontal] {\n    --pf-c-description-list__term--width: var(--pf-c-description-list--m-horizontal__term--width-on-lg, var(--pf-c-description-list--m-horizontal__term--width-on-md, var(--pf-c-description-list--m-horizontal__term--width-on-sm, var(--pf-c-description-list--m-horizontal__term--width))));\n  }\n}\n@media (min-width: 1200px) {\n  .pf-c-description-list[class*=pf-m-horizontal] {\n    --pf-c-description-list__term--width: var(--pf-c-description-list--m-horizontal__term--width-on-xl, var(--pf-c-description-list--m-horizontal__term--width-on-lg, var(--pf-c-description-list--m-horizontal__term--width-on-md, var(--pf-c-description-list--m-horizontal__term--width-on-sm, var(--pf-c-description-list--m-horizontal__term--width)))));\n  }\n}\n@media (min-width: 1450px) {\n  .pf-c-description-list[class*=pf-m-horizontal] {\n    --pf-c-description-list__term--width: var(--pf-c-description-list--m-horizontal__term--width-on-2xl, var(--pf-c-description-list--m-horizontal__term--width-on-xl, var(--pf-c-description-list--m-horizontal__term--width-on-lg, var(--pf-c-description-list--m-horizontal__term--width-on-md, var(--pf-c-description-list--m-horizontal__term--width-on-sm, var(--pf-c-description-list--m-horizontal__term--width))))));\n  }\n}\n.pf-c-description-list.pf-m-inline-grid {\n  display: inline-grid;\n}\n.pf-c-description-list.pf-m-auto-column-widths {\n  --pf-c-description-list--GridTemplateColumns--width: minmax(8ch, max-content);\n}\n.pf-c-description-list.pf-m-auto-fit {\n  grid-template-columns: repeat(auto-fit, minmax(var(--pf-c-description-list--m-auto-fit--GridTemplateColumns--minmax--min), 1fr));\n  --pf-c-description-list--GridTemplateColumns--minmax--min: var(--pf-c-description-list--GridTemplateColumns--min);\n}\n@media (min-width: 576px) {\n  .pf-c-description-list.pf-m-auto-fit {\n    --pf-c-description-list--GridTemplateColumns--minmax--min: var(--pf-c-description-list--GridTemplateColumns--min-on-sm, var(--pf-c-description-list--GridTemplateColumns--min));\n  }\n}\n@media (min-width: 768px) {\n  .pf-c-description-list.pf-m-auto-fit {\n    --pf-c-description-list--GridTemplateColumns--minmax--min: var(--pf-c-description-list--GridTemplateColumns--min-on-md, var(--pf-c-description-list--GridTemplateColumns--min-on-sm, var(--pf-c-description-list--GridTemplateColumns--min)));\n  }\n}\n@media (min-width: 992px) {\n  .pf-c-description-list.pf-m-auto-fit {\n    --pf-c-description-list--GridTemplateColumns--minmax--min: var(--pf-c-description-list--GridTemplateColumns--min-on-lg, var(--pf-c-description-list--GridTemplateColumns--min-on-md, var(--pf-c-description-list--GridTemplateColumns--min-on-sm, var(--pf-c-description-list--GridTemplateColumns--min))));\n  }\n}\n@media (min-width: 1200px) {\n  .pf-c-description-list.pf-m-auto-fit {\n    --pf-c-description-list--GridTemplateColumns--minmax--min: var(--pf-c-description-list--GridTemplateColumns--min-on-xl, var(--pf-c-description-list--GridTemplateColumns--min-on-lg, var(--pf-c-description-list--GridTemplateColumns--min-on-md, var(--pf-c-description-list--GridTemplateColumns--min-on-sm, var(--pf-c-description-list--GridTemplateColumns--min)))));\n  }\n}\n@media (min-width: 1450px) {\n  .pf-c-description-list.pf-m-auto-fit {\n    --pf-c-description-list--GridTemplateColumns--minmax--min: var(--pf-c-description-list--GridTemplateColumns--min-on-2xl, var(--pf-c-description-list--GridTemplateColumns--min-on-xl, var(--pf-c-description-list--GridTemplateColumns--min-on-lg, var(--pf-c-description-list--GridTemplateColumns--min-on-md, var(--pf-c-description-list--GridTemplateColumns--min-on-sm, var(--pf-c-description-list--GridTemplateColumns--min))))));\n  }\n}\n.pf-c-description-list.pf-m-compact {\n  --pf-c-description-list--RowGap: var(--pf-c-description-list--m-compact--RowGap);\n  --pf-c-description-list--ColumnGap: var(--pf-c-description-list--m-compact--ColumnGap);\n}\n.pf-c-description-list.pf-m-fluid {\n  --pf-c-description-list--m-horizontal__term--width: fit-content(20ch);\n}\n.pf-c-description-list.pf-m-fill-columns {\n  display: block;\n  column-count: var(--pf-c-description-list--GridTemplateColumns--count);\n  margin-bottom: calc(var(--pf-c-description-list--RowGap) * -1);\n}\n.pf-c-description-list.pf-m-fill-columns .pf-c-description-list__group {\n  display: inline-grid;\n  width: 100%;\n  margin-bottom: var(--pf-c-description-list--RowGap);\n  break-inside: avoid;\n  page-break-inside: avoid;\n  -webkit-column-break-inside: avoid;\n  -moz-column-break-inside: avoid;\n}\n\n.pf-c-description-list__group {\n  display: grid;\n  grid-column: var(--pf-c-description-list__group--GridColumn);\n  row-gap: var(--pf-c-description-list__group--RowGap);\n  column-gap: var(--pf-c-description-list__group--ColumnGap);\n  grid-template-columns: var(--pf-c-description-list__group--GridTemplateColumns);\n  align-items: baseline;\n}\n\n.pf-c-description-list__term,\n.pf-c-description-list__description {\n  min-width: 0;\n  text-align: left;\n  overflow-wrap: break-word;\n}\n\n.pf-c-description-list__term {\n  display: var(--pf-c-description-list__term--Display);\n  font-size: var(--pf-c-description-list__term--FontSize);\n  font-weight: var(--pf-c-description-list__term--FontWeight);\n  line-height: var(--pf-c-description-list__term--LineHeight);\n}\n.pf-c-description-list__term .pf-c-description-list__text {\n  display: inline;\n}\n\n.pf-c-description-list__term-icon {\n  flex-shrink: 0;\n  min-width: var(--pf-c-description-list__term-icon--MinWidth);\n  margin-right: var(--pf-c-description-list__term-icon--MarginRight);\n  color: var(--pf-c-description-list__term-icon--Color);\n}\n\n.pf-c-description-list__text.pf-m-help-text {\n  text-decoration: underline;\n  cursor: pointer;\n  text-decoration-style: dashed;\n  text-decoration-thickness: var(--pf-c-description-list__text--m-help-text--TextDecorationThickness);\n  text-underline-offset: var(--pf-c-description-list__text--m-help-text--TextDecorationOffset);\n  text-decoration-color: var(--pf-c-description-list__text--m-help-text--TextDecorationColor);\n}\n.pf-c-description-list__text.pf-m-help-text:hover {\n  --pf-c-description-list__text--m-help-text--TextDecorationColor: var(--pf-c-description-list__text--m-help-text--hover--TextDecorationColor);\n}\n.pf-c-description-list__text.pf-m-help-text:focus {\n  --pf-c-description-list__text--m-help-text--TextDecorationColor: var(--pf-c-description-list__text--m-help-text--focus--TextDecorationColor);\n}\n\n.pf-c-description-list.pf-m-1-col {\n  --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-1-col--GridTemplateColumns--count);\n}\n.pf-c-description-list.pf-m-2-col {\n  --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-2-col--GridTemplateColumns--count);\n}\n.pf-c-description-list.pf-m-3-col {\n  --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-3-col--GridTemplateColumns--count);\n}\n.pf-c-description-list.pf-m-horizontal {\n  --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-horizontal__group--GridTemplateColumns);\n}\n.pf-c-description-list.pf-m-vertical {\n  --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-vertical__group--GridTemplateColumns);\n}\n@media (min-width: 576px) {\n  .pf-c-description-list.pf-m-1-col-on-sm {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-1-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-2-col-on-sm {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-2-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-3-col-on-sm {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-3-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-horizontal-on-sm {\n    --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-horizontal__group--GridTemplateColumns);\n  }\n  .pf-c-description-list.pf-m-vertical-on-sm {\n    --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-vertical__group--GridTemplateColumns);\n  }\n}\n@media (min-width: 768px) {\n  .pf-c-description-list.pf-m-1-col-on-md {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-1-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-2-col-on-md {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-2-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-3-col-on-md {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-3-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-horizontal-on-md {\n    --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-horizontal__group--GridTemplateColumns);\n  }\n  .pf-c-description-list.pf-m-vertical-on-md {\n    --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-vertical__group--GridTemplateColumns);\n  }\n}\n@media (min-width: 992px) {\n  .pf-c-description-list.pf-m-1-col-on-lg {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-1-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-2-col-on-lg {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-2-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-3-col-on-lg {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-3-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-horizontal-on-lg {\n    --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-horizontal__group--GridTemplateColumns);\n  }\n  .pf-c-description-list.pf-m-vertical-on-lg {\n    --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-vertical__group--GridTemplateColumns);\n  }\n}\n@media (min-width: 1200px) {\n  .pf-c-description-list.pf-m-1-col-on-xl {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-1-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-2-col-on-xl {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-2-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-3-col-on-xl {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-3-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-horizontal-on-xl {\n    --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-horizontal__group--GridTemplateColumns);\n  }\n  .pf-c-description-list.pf-m-vertical-on-xl {\n    --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-vertical__group--GridTemplateColumns);\n  }\n}\n@media (min-width: 1450px) {\n  .pf-c-description-list.pf-m-1-col-on-2xl {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-1-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-2-col-on-2xl {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-2-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-3-col-on-2xl {\n    --pf-c-description-list--GridTemplateColumns--count: var(--pf-c-description-list--m-3-col--GridTemplateColumns--count);\n  }\n  .pf-c-description-list.pf-m-horizontal-on-2xl {\n    --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-horizontal__group--GridTemplateColumns);\n  }\n  .pf-c-description-list.pf-m-vertical-on-2xl {\n    --pf-c-description-list__group--GridTemplateColumns: var(--pf-c-description-list--m-vertical__group--GridTemplateColumns);\n  }\n}",""]);const s=p},36233:(i,t,n)=>{n.r(t),n.d(t,{default:()=>v});var o=n(93379),l=n.n(o),e=n(7795),p=n.n(e),s=n(90569),r=n.n(s),c=n(3565),m=n.n(c),d=n(19216),a=n.n(d),f=n(44589),u=n.n(f),_=n(78674),h={};h.styleTagTransform=u(),h.setAttributes=m(),h.insert=r().bind(null,"head"),h.domAPI=p(),h.insertStyleElement=a();l()(_.Z,h);const v=_.Z&&_.Z.locals?_.Z.locals:void 0}}]);
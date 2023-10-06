"use strict";(self.webpackChunkcodex_button=self.webpackChunkcodex_button||[]).push([[256],{"./src/stories/Button.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Leading:function(){return Leading},LeadingTrailing:function(){return LeadingTrailing},None:function(){return None},Standalone:function(){return Standalone},Trailing:function(){return Trailing},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),dist=__webpack_require__("./node_modules/react-inlinesvg/dist/index.mjs"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function Button_Button(_ref){var type=_ref.type,size=_ref.size,style=_ref.style,isDisabled=_ref.isDisabled,children=_ref.children,iconType=_ref.iconType,className="button button_icon_".concat(iconType," button_type_").concat(type," button_size_").concat(size," button_style_").concat(style);return(0,jsx_runtime.jsx)("button",{className:className,type:"button",disabled:isDisabled,children:children})}Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{description:"",type:{name:"enum",value:[{value:'"solid"',computed:!1},{value:'"outline"',computed:!1},{value:'"soft"',computed:!1},{value:'"ghost"',computed:!1}]},required:!1},size:{description:"",type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1},style:{description:"",type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"danger"',computed:!1}]},required:!1}}};var _None$parameters,_None$parameters2,_None$parameters2$doc,_Leading$parameters,_Leading$parameters2,_Leading$parameters2$,_Trailing$parameters,_Trailing$parameters2,_Trailing$parameters3,_LeadingTrailing$para,_LeadingTrailing$para2,_LeadingTrailing$para3,_Standalone$parameter,_Standalone$parameter2,_Standalone$parameter3,stories_Button=Button_Button,icons_dist=__webpack_require__("./node_modules/@codexteam/icons/dist/index.mjs"),Button_stories={title:"Button",component:stories_Button,tags:["autodocs"],parameters:{controls:{type:"solid"}},argTypes:{type:{options:["solid","outline","soft","ghost"],control:{type:"radio"}},size:{options:["small","medium","large"],control:{type:"radio"}},style:{options:["primary","secondary","danger"],control:{type:"radio"}},isDisabled:{control:{type:"boolean"}}}},defaultArgs={type:"solid",size:"medium",style:"primary",isDisabled:!1},None={args:(0,objectSpread2.Z)((0,objectSpread2.Z)({},defaultArgs),{},{children:(0,jsx_runtime.jsx)("span",{className:"button__label",children:"Button"})})},Leading={args:(0,objectSpread2.Z)((0,objectSpread2.Z)({},defaultArgs),{},{iconType:"leading",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Z,{className:"button__icon",src:icons_dist.SC}),(0,jsx_runtime.jsx)("span",{className:"button__label",children:"Button"})]})})},Trailing={args:(0,objectSpread2.Z)((0,objectSpread2.Z)({},defaultArgs),{},{iconType:"trailing",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"button__label",children:"Button"}),(0,jsx_runtime.jsx)(dist.Z,{className:"button__icon button__icon_type_brackets",src:icons_dist.c4})]})})},LeadingTrailing={args:(0,objectSpread2.Z)((0,objectSpread2.Z)({},defaultArgs),{},{iconType:"leading-trailing",children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.Z,{className:"button__icon",src:icons_dist.SC}),(0,jsx_runtime.jsx)("span",{className:"button__label",children:"Button"}),(0,jsx_runtime.jsx)(dist.Z,{className:"button__icon button__icon_type_brackets",src:icons_dist.c4})]})})},Standalone={args:(0,objectSpread2.Z)((0,objectSpread2.Z)({},defaultArgs),{},{iconType:"standalone",children:(0,jsx_runtime.jsx)(dist.Z,{className:"button__icon",src:icons_dist.SC})})};None.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},None.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_None$parameters=None.parameters)||void 0===_None$parameters?void 0:_None$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    ...defaultArgs,\n    children: <span className="button__label">Button</span>\n  }\n}'},null===(_None$parameters2=None.parameters)||void 0===_None$parameters2||null===(_None$parameters2$doc=_None$parameters2.docs)||void 0===_None$parameters2$doc?void 0:_None$parameters2$doc.source)})}),Leading.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Leading.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Leading$parameters=Leading.parameters)||void 0===_Leading$parameters?void 0:_Leading$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    ...defaultArgs,\n    iconType: "leading",\n    children: <>\n        <SVG className="button__icon" src={IconPlus} />\n        <span className="button__label">Button</span>\n      </>\n  }\n}'},null===(_Leading$parameters2=Leading.parameters)||void 0===_Leading$parameters2||null===(_Leading$parameters2$=_Leading$parameters2.docs)||void 0===_Leading$parameters2$?void 0:_Leading$parameters2$.source)})}),Trailing.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Trailing.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Trailing$parameters=Trailing.parameters)||void 0===_Trailing$parameters?void 0:_Trailing$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    ...defaultArgs,\n    iconType: "trailing",\n    children: <>\n        <span className="button__label">Button</span>\n        <SVG className="button__icon button__icon_type_brackets" src={IconBrackets} />\n      </>\n  }\n}'},null===(_Trailing$parameters2=Trailing.parameters)||void 0===_Trailing$parameters2||null===(_Trailing$parameters3=_Trailing$parameters2.docs)||void 0===_Trailing$parameters3?void 0:_Trailing$parameters3.source)})}),LeadingTrailing.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},LeadingTrailing.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_LeadingTrailing$para=LeadingTrailing.parameters)||void 0===_LeadingTrailing$para?void 0:_LeadingTrailing$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    ...defaultArgs,\n    iconType: "leading-trailing",\n    children: <>\n        <SVG className="button__icon" src={IconPlus} />\n        <span className="button__label">Button</span>\n        <SVG className="button__icon button__icon_type_brackets" src={IconBrackets} />\n      </>\n  }\n}'},null===(_LeadingTrailing$para2=LeadingTrailing.parameters)||void 0===_LeadingTrailing$para2||null===(_LeadingTrailing$para3=_LeadingTrailing$para2.docs)||void 0===_LeadingTrailing$para3?void 0:_LeadingTrailing$para3.source)})}),Standalone.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Standalone.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Standalone$parameter=Standalone.parameters)||void 0===_Standalone$parameter?void 0:_Standalone$parameter.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  args: {\n    ...defaultArgs,\n    iconType: "standalone",\n    children: <SVG className="button__icon" src={IconPlus} />\n  }\n}'},null===(_Standalone$parameter2=Standalone.parameters)||void 0===_Standalone$parameter2||null===(_Standalone$parameter3=_Standalone$parameter2.docs)||void 0===_Standalone$parameter3?void 0:_Standalone$parameter3.source)})});var __namedExportsOrder=["None","Leading","Trailing","LeadingTrailing","Standalone"]}}]);
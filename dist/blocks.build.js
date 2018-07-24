!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(1)},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var o=i(2),s=i.n(o),r=i(3),a=i(5),l=(i.n(a),i(6)),p=(i.n(l),window.lodash),c=(p.isFinite,p.find,p.omit,wp.i18n.__),h=wp.blocks.registerBlockType,u=wp.components,d=u.PanelBody,g=u.RangeControl,f=u.withFallbackStyles,m=u.Button,b=(u.Spinner,u.ResponsiveWrapper),v=u.ToggleControl,w=wp.element.Fragment,y=wp.compose.compose,z=wp.editor,x=z.InspectorControls,S=z.InnerBlocks,k=z.PanelColor,E=z.withColors,R=z.getColorClass,C=z.MediaUpload,_=window,M=_.getComputedStyle,N=f(function(e,t){var i=t.attributes.backgroundColor,n=e.querySelector('[contenteditable="true"]'),o=n?M(n):null;return{fallbackBackgroundColor:i||!o?void 0:o.backgroundColor}}),O=function(e){var t=e.attributes,i=e.setAttributes,n=(e.className,e.setBackgroundColor),o=(e.fallbackBackgroundColor,e.toggleSelection),a=(e.media,function(e){i({bgImage:{id:e.id,image:e.sizes.large||e.sizes.full}})}),l=function(){i({bgImage:null})},p=t.backgroundColor,h=t.customBackgroundColor,u=t.resizeTopIsActive,f=t.resizeBottomIsActive,y=t.bgImage,z=t.bgOptions;return wp.element.createElement(w,null,wp.element.createElement(x,null,wp.element.createElement(d,{title:c("Spacing"),initialOpen:!1},wp.element.createElement(g,{label:c("Spacing top"),value:t.spacingTop,onChange:function(e){i({spacingTop:e})},min:0,max:200,step:10}),wp.element.createElement(g,{label:c("Spacing bottom"),value:t.spacingBottom,onChange:function(e){i({spacingBottom:e})},min:0,max:200,step:10})),wp.element.createElement(d,{title:c("Background image"),initialOpen:!1},!y&&wp.element.createElement("div",null,wp.element.createElement(C,{title:c("Set background image"),onSelect:a,type:"image",modalClass:"editor-post-featured-image__media-modal",render:function(e){var t=e.open;return wp.element.createElement(m,{className:"editor-post-featured-image__toggle",onClick:t},c("Set background image"))}})),!!y&&wp.element.createElement(C,{title:c("Set background image"),onSelect:a,type:"image",value:y.id,modalClass:"editor-post-featured-image__media-modal",render:function(e){var t=e.open;return wp.element.createElement("div",{className:"editor-bg-image"},wp.element.createElement(m,{className:"editor-post-featured-image__preview",onClick:t},wp.element.createElement(b,{naturalWidth:y.image.width,naturalHeight:y.image.height},wp.element.createElement("img",{src:y.image.url,alt:c("BG Image")}))),wp.element.createElement(m,{onClick:t,isDefault:!0,isLarge:!0},c("Replace image")),wp.element.createElement(m,{onClick:l,isLink:!0,isDestructive:!0},c("Remove background image")))}}),!!y&&wp.element.createElement("div",{className:"section-bg-settings"},wp.element.createElement(g,{label:c("Opacity"),value:100*z.opacity,onChange:function(e){i({bgOptions:Object.assign({},z,{opacity:e/100})})},min:0,max:100,step:10}),wp.element.createElement(v,{label:c("Fixed Background"),checked:!!z.fixed,onChange:function(e){i({bgOptions:Object.assign({},z,{fixed:e})})}}),!z.fixed&&wp.element.createElement(v,{label:c("Stretch Background"),checked:!!z.stretch,onChange:function(e){i({bgOptions:Object.assign({},z,{stretch:e})})}}),!z.fixed&&!z.stretch&&wp.element.createElement(v,{label:c("Repeat Background"),checked:!!z.repeat,onChange:function(e){i({bgOptions:Object.assign({},z,{repeat:e})})}}))),wp.element.createElement(k,{colorValue:h,initialOpen:!1,title:c("Background Color"),onChange:function(e){for(var t=arguments.length,o=Array(t>1?t-1:0),s=1;s<t;s++)o[s-1]=arguments[s];console.log("before:",p,o),n(e),i({customBackgroundColor:e}),console.log("now:",p,e)}})),wp.element.createElement("section",{className:e.className,style:{backgroundColor:h}},!!y&&wp.element.createElement("div",{className:s()("section-bg",{bg__repeated:z.repeat,bg__stretched:z.stretch||z.fixed,bg__fixed:z.fixed}),style:{backgroundImage:y?"url("+y.image.url+")":void 0,opacity:z.opacity}}),wp.element.createElement(r.a,{className:s()("spacing-box",{resizing:u}),size:{height:t.spacingTop},minHeight:"0",handleClasses:{top:"core-blocks-spacer__resize-handler-top",bottom:"core-blocks-spacer__resize-handler-bottom"},enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},onResizeStop:function(e,n,s,r){i({resizeTopIsActive:!1,spacingTop:parseInt(t.spacingTop+r.height,10)}),o(!0)},onResizeStart:function(){i({resizeTopIsActive:!0}),o(!1),console.log(u)}}),wp.element.createElement(S,null),wp.element.createElement(r.a,{className:s()("spacing-box",{resizing:f}),size:{height:t.spacingBottom},minHeight:"0",handleClasses:{top:"core-blocks-spacer__resize-handler-top",bottom:"core-blocks-spacer__resize-handler-bottom"},enable:{top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1},onResizeStop:function(e,n,s,r){i({spacingBottom:parseInt(t.spacingBottom+r.height,10),resizeBottomIsActive:!1}),o(!0)},onResizeStart:function(){o(!1),i({resizeBottomIsActive:!0})}})))};h("mkl/section-block",{title:c("Section"),icon:"align-center",category:"layout",keywords:[c("section"),c("container")],attributes:{spacingTop:{type:"number",default:60},spacingBottom:{type:"number",default:60},backgroundColor:{type:"string"},customBackgroundColor:{type:"string"},bgImage:{type:"object",default:null},bgOptions:{type:"object",default:{repeat:!1,stretch:!0,fixed:!1,opacity:.5}}},edit:y([E("backgroundColor",{textColor:"color"}),N])(O),save:function(e){var t=e.attributes,i=e.className,o=t.backgroundColor,r=t.customBackgroundColor,a=t.spacingBottom,l=t.spacingTop,p=t.bgImage,c=t.bgOptions,h=R("background-color",o),u=s()(n({className:i},h,h)),d={backgroundColor:h?void 0:r,paddingBottom:a||void 0,paddingTop:l||void 0};return wp.element.createElement("section",{className:u||void 0,style:d},!!p&&wp.element.createElement("div",{className:s()("section-bg",{bg__repeated:c.repeat,bg__stretched:c.stretch||c.fixed,bg__fixed:c.fixed}),style:{backgroundImage:p?"url("+p.image.url+")":void 0,opacity:c.opacity}}),wp.element.createElement(S.Content,null))},getEditWrapperProps:function(e){return{"data-align":"full"}}})},function(e,t,i){var n,o;!function(){"use strict";function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var r=i.apply(null,n);r&&e.push(r)}else if("object"===o)for(var a in n)s.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}var s={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(i.default=i,e.exports=i):(n=[],void 0!==(o=function(){return i}.apply(t,n))&&(e.exports=o))}()},function(e,t,i){"use strict";var n=i(4),o=(i.n(n),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},p={base:{position:"absolute",userSelect:"none",MsUserSelect:"none"},top:{width:"100%",height:"10px",top:"-5px",left:"0px",cursor:"row-resize"},right:{width:"10px",height:"100%",top:"0px",right:"-5px",cursor:"col-resize"},bottom:{width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"row-resize"},left:{width:"10px",height:"100%",top:"0px",left:"-5px",cursor:"col-resize"},topRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",top:"-10px",cursor:"ne-resize"},bottomRight:{width:"20px",height:"20px",position:"absolute",right:"-10px",bottom:"-10px",cursor:"se-resize"},bottomLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",bottom:"-10px",cursor:"sw-resize"},topLeft:{width:"20px",height:"20px",position:"absolute",left:"-10px",top:"-10px",cursor:"nw-resize"}},c=function(e){return Object(n.createElement)("div",{className:e.className,style:r({},p.base,p[e.direction],e.replaceStyles||{}),onMouseDown:function(t){e.onResizeStart(t,e.direction)},onTouchStart:function(t){e.onResizeStart(t,e.direction)}},e.children)},h={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},u={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"},d=function(e,t,i){return Math.max(Math.min(e,i),t)},g=function(e,t){return Math.round(e/t)*t},f=function(e,t){return e.substr(e.length-t.length,t.length)===t},m=function(e){return f(e.toString(),"px")?e.toString():f(e.toString(),"%")?e.toString():e+"px"},b=["style","className","grid","bounds","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent"],v=function(e){function t(e){o(this,t);var i=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.state={isResizing:!1,resizeCursor:"auto",width:"undefined"===typeof(i.propsSize&&i.propsSize.width)?"auto":i.propsSize&&i.propsSize.width,height:"undefined"===typeof(i.propsSize&&i.propsSize.height)?"auto":i.propsSize&&i.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0}},i.updateExtendsProps(e),i.onResizeStart=i.onResizeStart.bind(i),i.onMouseMove=i.onMouseMove.bind(i),i.onMouseUp=i.onMouseUp.bind(i),"undefined"!==typeof window&&(window.addEventListener("mouseup",i.onMouseUp),window.addEventListener("mousemove",i.onMouseMove),window.addEventListener("mouseleave",i.onMouseUp),window.addEventListener("touchmove",i.onMouseMove),window.addEventListener("touchend",i.onMouseUp)),i}return a(t,e),s(t,[{key:"updateExtendsProps",value:function(e){this.extendsProps=Object.keys(e).reduce(function(t,i){return-1!==b.indexOf(i)?t:(t[i]=e[i],t)},{})}},{key:"getParentSize",value:function(){var e=this.base;if(!e)return{width:window.innerWidth,height:window.innerHeight};var t=!1,i=this.parentNode.style.flexWrap,n=e.style.minWidth;"wrap"!==i&&(t=!0,this.parentNode.style.flexWrap="wrap"),e.style.position="relative",e.style.minWidth="100%";var o={width:e.offsetWidth,height:e.offsetHeight};return e.style.position="absolute",t&&(this.parentNode.style.flexWrap=i),e.style.minWidth=n,o}},{key:"componentDidMount",value:function(){var e=this.size;this.setState({width:this.state.width||e.width,height:this.state.height||e.height});var t=this.parentNode;if(t instanceof HTMLElement&&!this.base){var i=document.createElement("div");i.style.width="100%",i.style.height="100%",i.style.position="absolute",i.style.transform="scale(0, 0)",i.style.left="-2147483647px",i.style.flex="0",i.classList?i.classList.add("__resizable_base__"):i.className+="__resizable_base__",t.appendChild(i)}}},{key:"componentWillReceiveProps",value:function(e){this.updateExtendsProps(e)}},{key:"componentWillUnmount",value:function(){if("undefined"!==typeof window){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseleave",this.onMouseUp),window.removeEventListener("touchmove",this.onMouseMove),window.removeEventListener("touchend",this.onMouseUp);var e=this.parentNode,t=this.base;if(!t||!e)return;if(!(e instanceof HTMLElement)||!(t instanceof Node))return;e.removeChild(t)}}},{key:"calculateNewSize",value:function(e,t){var i=this.propsSize&&this.propsSize[t];return"auto"!==this.state[t]||this.state.original[t]!==e||"undefined"!==typeof i&&"auto"!==i?e:"auto"}},{key:"onResizeStart",value:function(e,t){var i=0,n=0;if(e.nativeEvent instanceof MouseEvent){if(i=e.nativeEvent.clientX,n=e.nativeEvent.clientY,3===e.nativeEvent.which)return}else e.nativeEvent instanceof TouchEvent&&(i=e.nativeEvent.touches[0].clientX,n=e.nativeEvent.touches[0].clientY);this.props.onResizeStart&&this.props.onResizeStart(e,t,this.resizable),this.props.size&&("undefined"!==typeof this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),"undefined"!==typeof this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.setState({original:{x:i,y:n,width:this.size.width,height:this.size.height},isResizing:!0,resizeCursor:window.getComputedStyle(e.target).cursor,direction:t})}},{key:"onMouseMove",value:function(e){if(this.state.isResizing){var t=e instanceof MouseEvent?e.clientX:e.touches[0].clientX,i=e instanceof MouseEvent?e.clientY:e.touches[0].clientY,n=this.state,o=n.direction,s=n.original,r=n.width,a=n.height,l=this.props,p=l.lockAspectRatio,c=l.lockAspectRatioExtraHeight,h=l.lockAspectRatioExtraWidth,u=this.props,m=u.maxWidth,b=u.maxHeight,v=u.minWidth,w=u.minHeight,y=this.getParentSize();if(m&&"string"===typeof m&&f(m,"%")){var z=Number(m.replace("%",""))/100;m=y.width*z}if(b&&"string"===typeof b&&f(b,"%")){var x=Number(b.replace("%",""))/100;b=y.height*x}if(v&&"string"===typeof v&&f(v,"%")){var S=Number(v.replace("%",""))/100;v=y.width*S}if(w&&"string"===typeof w&&f(w,"%")){var k=Number(w.replace("%",""))/100;w=y.height*k}m="undefined"===typeof m?void 0:Number(m),b="undefined"===typeof b?void 0:Number(b),v="undefined"===typeof v?void 0:Number(v),w="undefined"===typeof w?void 0:Number(w);var E="number"===typeof p?p:s.width/s.height,R=s.width,C=s.height;if(/right/i.test(o)&&(R=s.width+(t-s.x),p&&(C=(R-h)/E+c)),/left/i.test(o)&&(R=s.width-(t-s.x),p&&(C=(R-h)/E+c)),/bottom/i.test(o)&&(C=s.height+(i-s.y),p&&(R=(C-c)*E+h)),/top/i.test(o)&&(C=s.height-(i-s.y),p&&(R=(C-c)*E+h)),"parent"===this.props.bounds){var _=this.parentNode;if(_ instanceof HTMLElement){var M=_.getBoundingClientRect(),N=M.left,O=M.top,W=this.resizable.getBoundingClientRect(),B=W.left,L=W.top,j=_.offsetWidth+(N-B),H=_.offsetHeight+(O-L);m=m&&m<j?m:j,b=b&&b<H?b:H}}else if("window"===this.props.bounds){if("undefined"!==typeof window){var P=this.resizable.getBoundingClientRect(),T=P.left,A=P.top,I=window.innerWidth-T,U=window.innerHeight-A;m=m&&m<I?m:I,b=b&&b<U?b:U}}else if(this.props.bounds instanceof HTMLElement){var D=this.props.bounds.getBoundingClientRect(),F=D.left,X=D.top,Y=this.resizable.getBoundingClientRect(),q=Y.left,G=Y.top;if(!(this.props.bounds instanceof HTMLElement))return;var V=this.props.bounds.offsetWidth+(F-q),J=this.props.bounds.offsetHeight+(X-G);m=m&&m<V?m:V,b=b&&b<J?b:J}var K="undefined"===typeof v?10:v,Q="undefined"===typeof m||m<0?R:m,Z="undefined"===typeof w?10:w,$="undefined"===typeof b||b<0?C:b;if(p){var ee=(Z-c)*E+h,te=($-c)*E+h,ie=(K-h)/E+c,ne=(Q-h)/E+c,oe=Math.max(K,ee),se=Math.min(Q,te),re=Math.max(Z,ie),ae=Math.min($,ne);R=d(R,oe,se),C=d(C,re,ae)}else R=d(R,K,Q),C=d(C,Z,$);this.props.grid&&(R=g(R,this.props.grid[0])),this.props.grid&&(C=g(C,this.props.grid[1]));var le={width:R-s.width,height:C-s.height};if(r&&"string"===typeof r&&f(r,"%")){R=R/y.width*100+"%"}if(a&&"string"===typeof a&&f(a,"%")){C=C/y.height*100+"%"}this.setState({width:this.calculateNewSize(R,"width"),height:this.calculateNewSize(C,"height")}),this.props.onResize&&this.props.onResize(e,o,this.resizable,le)}}},{key:"onMouseUp",value:function(e){var t=this.state,i=t.isResizing,n=t.direction,o=t.original;if(i){var s={width:this.size.width-o.width,height:this.size.height-o.height};this.props.onResizeStop&&this.props.onResizeStop(e,n,this.resizable,s),this.props.size&&this.setState(this.props.size),this.setState({isResizing:!1,resizeCursor:"auto"})}}},{key:"updateSize",value:function(e){this.setState({width:e.width,height:e.height})}},{key:"renderResizer",value:function(){var e=this,t=this.props,i=t.enable,o=t.handleStyles,s=t.handleClasses,r=t.handleWrapperStyle,a=t.handleWrapperClass,l=t.handleComponent;if(!i)return null;var p=Object.keys(i).map(function(t){return!1!==i[t]?Object(n.createElement)(c,{key:t,direction:t,onResizeStart:e.onResizeStart,replaceStyles:o&&o[t],className:s&&s[t]},l&&l[t]?Object(n.createElement)(l[t]):null):null});return Object(n.createElement)("span",{className:a,style:r},p)}},{key:"render",value:function(){var e=this,t=this.state.isResizing?h:u;return Object(n.createElement)("div",r({ref:function(t){t&&(e.resizable=t)},style:r({position:"relative"},t,this.props.style,this.sizeStyle,{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box"}),className:this.props.className},this.extendsProps),this.state.isResizing&&Object(n.createElement)("div",{style:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:""+(this.state.resizeCursor||"auto"),opacity:"0",position:"fixed",zIndex:"9999",top:"0",left:"0",bottom:"0",right:"0"}}),this.props.children,this.renderResizer())}},{key:"parentNode",get:function(){return this.resizable.parentNode}},{key:"propsSize",get:function(){return this.props.size||this.props.defaultSize}},{key:"base",get:function(){var e=this.parentNode;if(e)for(var t=[].slice.call(e.children),i=0;i<t.length;i+=1){var n=t[i];if(n instanceof HTMLElement&&n.classList.contains("__resizable_base__"))return n}}},{key:"size",get:function(){var e=0,t=0;if("undefined"!==typeof window){var i=this.resizable.offsetWidth,n=this.resizable.offsetHeight,o=this.resizable.style.position;"relative"!==o&&(this.resizable.style.position="relative"),e="auto"!==this.resizable.style.width?this.resizable.offsetWidth:i,t="auto"!==this.resizable.style.height?this.resizable.offsetHeight:n,this.resizable.style.position=o}return{width:e,height:t}}},{key:"sizeStyle",get:function(){var e=this,t=this.props.size,i=function(t){if("undefined"===typeof e.state[t]||"auto"===e.state[t])return"auto";if(e.propsSize&&e.propsSize[t]&&f(e.propsSize[t].toString(),"%")){if(f(e.state[t].toString(),"%"))return e.state[t].toString();var i=e.getParentSize();return Number(e.state[t].toString().replace("px",""))/i[t]*100+"%"}return m(e.state[t])};return{width:t&&"undefined"!==typeof t.width&&!this.state.isResizing?m(t.width):i("width"),height:t&&"undefined"!==typeof t.height&&!this.state.isResizing?m(t.height):i("height")}}}]),t}(n.Component);v.defaultProps={onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0},t.a=v},function(e,t){e.exports=React},function(e,t){},function(e,t){}]);
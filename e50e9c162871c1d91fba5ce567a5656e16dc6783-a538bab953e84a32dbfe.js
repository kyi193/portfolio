(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+22N":function(e,t,n){"use strict";var r=n("dI71"),o=n("dwco"),i=n.n(o),a=n("q1tI"),l=n.n(a),c=function(e){return e.children},s=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){i.a.polyfill()},n.handleClick=function(e){e.preventDefault();var t=0,n=!0,r=this.props,o=r.type,i=r.element,a=r.offset,l=r.timeout;if(o&&i)switch(o){case"class":n=!!(t=document.getElementsByClassName(i)[0]);break;case"id":n=!!(t=document.getElementById(i))}n?this.scrollTo(t,a,l):console.log("Element not found: "+i)},n.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);var r=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((function(){window.scroll({top:r+t,left:0,behavior:"smooth"})}),n):window.scroll({top:r+t,left:0,behavior:"smooth"})},n.render=function(){return l.a.createElement(c,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(l.a.Component);t.a=s},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"7oih":function(e,t,n){"use strict";var r=n("dI71"),o=n("f98A"),i=n("q1tI"),a=n.n(i),l=n("TJpk"),c=n.n(l),s=n("Wbzz"),u=(n("kpl1"),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({isPreloaded:!1})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props.children,t=this.state.isPreloaded;return a.a.createElement(s.StaticQuery,{query:"3649515864",render:function(n){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Eventually"},{name:"keywords",content:"site, web"}]},a.a.createElement("html",{lang:"en"})),a.a.createElement("div",{className:t?"main-body is-preload":"main-body"},e))},data:o})},t}(i.Component));t.a=u},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function f(){s=e(u.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var l=o.prototype;return l.shouldComponentUpdate=function(e){return!a(e,this.props)},l.componentWillMount=function(){u.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},l.render=function(){return i.createElement(r,this.props)},o}(o.Component);return l(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),l(p,"canUseDOM",c),p}}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var o=+new Date;!!t&&o<t+r?(clearTimeout(n),n=setTimeout((function(){t=o,e()}),r)):(t=o,e())}};t.default=r},Gytx:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!l(s))return!1;var u=e[s],f=t[s];if(!1===(o=n?n.call(r,u,f,s):void 0)||void 0===o&&u!==f)return!1}return!0}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),a=f(n("17x9")),l=f(n("8+s/")),c=f(n("bmMU")),s=n("v1p5"),u=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h,m,E,y=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),v=(h=y,E=m=function(e){function t(){return d(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,l=e.nestedChildren;switch(o.type){case u.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=l,t.titleAttributes=r({},a),t));case u.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case u.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(h,o)},o(t,null,[{key:"canUseDOM",set:function(e){h.canUseDOM=e}}]),t}(i.default.Component),m.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=h.peek,m.rewind=function(){var e=h.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);v.renderStatic=v.rewind,t.Helmet=v,t.default=v},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},TUGy:function(e,t,n){e.exports=n.p+"static/avatar-2ae7653a3d44ba99a7a893b62c82e3fa.png"},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},YIkO:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("pVnL")),i=r(n("lSNA")),a=r(n("RIqP")),l=r(n("lwsE")),c=r(n("a1gu")),s=r(n("Nsbk")),u=r(n("PJYZ")),f=r(n("W8MJ")),p=r(n("7W2i")),d=r(n("17x9")),T=r(n("q1tI")),h=r(n("TSYQ")),m=r(n("Fxm3"));var E=function(e){function t(e){var n;return(0,l.default)(this,t),(n=(0,c.default)(this,(0,s.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,u.default)(n)),n}return(0,p.default)(t,e),(0,f.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.element]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,f.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var n=[],r=0,o=e.length;r<o;r++)n[r]=t;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],n=[],r=[],o=e||this.state.targetItems,i=!1,l=0,c=o.length;l<c;l++){var s=o[l],u=!i&&this._isInView(s);u?(i=!0,t.push(s)):n.push(s);var f=l===c-1,p=this._isScrolled();this._isAtBottom()&&this._isInView(s)&&!u&&f&&p&&(n.pop(),n.push.apply(n,(0,a.default)(t)),t=[s],r=this._fillArray(r,!1),u=!0),r.push(u)}return{inView:t,outView:n,viewStatusList:r,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(r)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,n=this.props,r=n.rootEl,o=n.offset;r&&(t=document.querySelector(r).getBoundingClientRect());var i=e.getBoundingClientRect(),a=r?t.height:window.innerHeight,l=this._getScrollDimension().scrollTop,c=l+a,s=r?i.top+l-t.top+o:i.top+l+o,u=s+e.offsetHeight;return s<c&&u>l}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),n=t.scrollTop,r=t.scrollHeight;return n+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=r}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,n=this._getElemsViewState(e),r=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){t._update(r)}))}},{key:"_update",value:function(e){var t,n;(t=this.state.inViewState,n=e,t.length===n.length&&t.every((function(e,t){return e===n[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,m.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,n=this.props,r=n.children,a=n.className,l=n.scrolledPastClassName,c=n.style,s=0,u=T.default.Children.map(r,(function(t,n){var r;if(!t)return null;var a=t.type,c=l&&e.state.isScrolledPast[n],u=(0,h.default)((r={},(0,i.default)(r,"".concat(t.props.className),t.props.className),(0,i.default)(r,"".concat(e.props.currentClassName),e.state.inViewState[n]),(0,i.default)(r,"".concat(e.props.scrolledPastClassName),c),r));return T.default.createElement(a,(0,o.default)({},t.props,{className:u,key:s++}),t.props.children)})),f=(0,h.default)((0,i.default)({},"".concat(a),a));return T.default.createElement(t,{className:f,style:c},u)}}]),t}(T.default.Component);t.default=E},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},bmMU:function(e,t,n){"use strict";var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,c,s,u=r(t),f=r(n);if(u&&f){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var T=t instanceof RegExp,h=n instanceof RegExp;if(T!=h)return!1;if(T&&h)return t.toString()==n.toString();var m=o(t);if((c=m.length)!==o(n).length)return!1;for(l=c;0!=l--;)if(!i.call(n,m[l]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(l=c;0!=l--;)if(!("_owner"===(s=m[l])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},dwco:function(e,t,n){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,r=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||l,scrollIntoView:r.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?T.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):T.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;T.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=p(this),r=n.getBoundingClientRect(),i=this.getBoundingClientRect();n!==t.body?(T.call(this,n,n.scrollLeft+i.left-r.left,n.scrollTop+i.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function u(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return"auto"===r||"scroll"===r}function f(e){var t=s(e,"Y")&&u(e,"Y"),n=s(e,"X")&&u(e,"X");return t||n}function p(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function d(t){var n,r,o,a,l=(i()-t.startTime)/468;a=l=l>1?1:l,n=.5*(1-Math.cos(Math.PI*a)),r=t.startX+(t.x-t.startX)*n,o=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,r,o),r===t.x&&o===t.y||e.requestAnimationFrame(d.bind(e,t))}function T(n,r,a){var c,s,u,f,p=i();n===t.body?(c=e,s=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=o.scroll):(c=n,s=n.scrollLeft,u=n.scrollTop,f=l),d({scrollable:c,method:f,startTime:p,startX:s,startY:u,x:r,y:a})}}}}()},f98A:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Starter Prologue"}}}}')},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},kpl1:function(e,t,n){},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"Gatsby Starter Prologue",manifestName:"Prologue",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/gatsby-starter-prologue/",authorName:"Kevin Yi",heading:"App Developer",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/anubhavsrivastava"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/onlyanubhav"},{icon:"fa-facebook",name:"Facebook",url:"https://facebook.com/theanubhav"},{icon:"fa-envelope-o",name:"Email",url:"mailto:anubhav.srivastava00@gmail.com"}]}},rQCx:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("q1tI"),o=n.n(r);function i(e){var t=e.socialLinks,n=void 0===t?[]:t;return o.a.createElement("div",{className:"bottom"},o.a.createElement("ul",{className:"icons"},n.map((function(e){var t=e.icon,n=e.name,r=e.url;return o.a.createElement("li",{key:r},o.a.createElement("a",{href:r,className:"icon "+t},o.a.createElement("span",{className:"label"},n)))}))))}var a=n("Wbzz");function l(e){var t=e.title,n=e.heading,r=e.avatar;return o.a.createElement("div",{id:"logo"},o.a.createElement(a.Link,{to:"/"},o.a.createElement("span",{className:"image avatar48"},o.a.createElement("img",{style:{borderRadius:20},height:"128px",src:r,alt:""})),o.a.createElement("h1",{id:"title"},t),o.a.createElement("p",null,n)))}var c=n("YIkO"),s=n.n(c),u=n("+22N");function f(e){var t=e.sections,n=void 0===t?[]:t;return o.a.createElement("nav",{id:"nav"},o.a.createElement("ul",null,o.a.createElement(s.a,{items:n.map((function(e){return e.id})),currentClassName:"active",offset:-300},n.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(u.a,{type:"id",element:e.id},o.a.createElement("a",{href:"#"+e.id,id:"top-link"},o.a.createElement("span",{className:"icon "+e.icon},e.name))))})))))}function p(e){e.title;var t=e.onMenuClick,n=void 0===t?function(){}:t;return o.a.createElement("div",{id:"headerToggle"},o.a.createElement("a",{href:"/#",className:"toggle",onClick:function(e){e.preventDefault(),n()}}," "))}var d=n("obyI"),T=n.n(d),h=n("TUGy");function m(e){var t=e.sections,n=void 0===t?[]:t,a=Object(r.useState)(!1),c=a[0],s=a[1];return o.a.createElement("div",{className:c?"header-visible":" "},o.a.createElement(p,{title:T.a.authorName,onMenuClick:function(){return s(!c)}}),o.a.createElement("div",{id:"header"},o.a.createElement("div",{className:"top"},o.a.createElement(l,{avatar:h,title:T.a.authorName,heading:T.a.heading}),o.a.createElement(f,{sections:n})),o.a.createElement(i,{socialLinks:T.a.socialLinks})))}},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),a=c(n("6qGY")),l=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,l.TAG_NAMES.TITLE),n=m(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},h=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===l.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var s=i[c],u=(0,a.default)({},o[s],r[s]);o[s]=u}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},E=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){E(e)}),0)}),y=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:e.requestAnimationFrame||E,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,g=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;w(l.TAG_NAMES.BODY,r),w(l.TAG_NAMES.HTML,o),P(p,d);var T={baseTag:O(l.TAG_NAMES.BASE,n),linkTags:O(l.TAG_NAMES.LINK,i),metaTags:O(l.TAG_NAMES.META,a),noscriptTags:O(l.TAG_NAMES.NOSCRIPT,c),scriptTags:O(l.TAG_NAMES.SCRIPT,u),styleTags:O(l.TAG_NAMES.STYLE,f)},h={},m={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=T[e].oldTags)})),t&&t(),s(e,h,m)},_=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),w(l.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(l.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var f=i.indexOf(s);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(l.HELMET_ATTRIBUTE):n.getAttribute(l.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(l.HELMET_ATTRIBUTE,a.join(","))}},O=function(e,t){var n=document.head||document.querySelector(l.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===l.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===l.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(l.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},R=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[l.HELMET_ATTRIBUTE]=!0,o=I(n,r),[i.default.createElement(l.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=R(n),i=_(t);return o?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+">"+u(i,r)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[l.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=l.REACT_TAG_MAP[e]||e;if(n===l.TAG_PROPERTIES.INNER_HTML||n===l.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[l.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&A(S),e.defer?S=v((function(){g(e,(function(){S=null}))})):(g(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:C(l.TAG_NAMES.BASE,t,r),bodyAttributes:C(l.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(l.ATTRIBUTE_NAMES.HTML,o,r),link:C(l.TAG_NAMES.LINK,i,r),meta:C(l.TAG_NAMES.META,a,r),noscript:C(l.TAG_NAMES.NOSCRIPT,c,r),script:C(l.TAG_NAMES.SCRIPT,s,r),style:C(l.TAG_NAMES.STYLE,u,r),title:C(l.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:T([l.TAG_PROPERTIES.HREF],e),bodyAttributes:d(l.ATTRIBUTE_NAMES.BODY,e),defer:m(e,l.HELMET_PROPS.DEFER),encode:m(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(l.ATTRIBUTE_NAMES.HTML,e),linkTags:h(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:h(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:h(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=v,t.warn=b}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-a538bab953e84a32dbfe.js.map
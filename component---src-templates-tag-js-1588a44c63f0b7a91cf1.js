(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{GgLZ:function(e,t,o){"use strict";o("n7j8"),o("YBKJ"),o("Ll4R"),o("1dPr"),o("E5k/"),o("pS08"),o("LagC");var n=o("q1tI"),r=o.n(n),a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};var s=function(){return(s=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var i="Pixel",l="Percent",c={unit:l,value:.8};var u=function(e){function t(t){var o=e.call(this,t)||this;return o.lastScrollTop=0,o.actionTriggered=!1,o.startY=0,o.currentY=0,o.dragging=!1,o.maxPullDownDistance=0,o.getScrollableTarget=function(){return o.props.scrollableTarget instanceof HTMLElement?o.props.scrollableTarget:"string"==typeof o.props.scrollableTarget?document.getElementById(o.props.scrollableTarget):(null===o.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},o.onStart=function(e){o.lastScrollTop||(o.dragging=!0,e instanceof MouseEvent?o.startY=e.pageY:e instanceof TouchEvent&&(o.startY=e.touches[0].pageY),o.currentY=o.startY,o._infScroll&&(o._infScroll.style.willChange="transform",o._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},o.onMove=function(e){o.dragging&&(e instanceof MouseEvent?o.currentY=e.pageY:e instanceof TouchEvent&&(o.currentY=e.touches[0].pageY),o.currentY<o.startY||(o.currentY-o.startY>=Number(o.props.pullDownToRefreshThreshold)&&o.setState({pullToRefreshThresholdBreached:!0}),o.currentY-o.startY>1.5*o.maxPullDownDistance||o._infScroll&&(o._infScroll.style.overflow="visible",o._infScroll.style.transform="translate3d(0px, "+(o.currentY-o.startY)+"px, 0px)")))},o.onEnd=function(){o.startY=0,o.currentY=0,o.dragging=!1,o.state.pullToRefreshThresholdBreached&&o.props.refreshFunction&&o.props.refreshFunction(),requestAnimationFrame((function(){o._infScroll&&(o._infScroll.style.overflow="auto",o._infScroll.style.transform="none",o._infScroll.style.willChange="none")}))},o.onScrollListener=function(e){"function"==typeof o.props.onScroll&&setTimeout((function(){return o.props.onScroll&&o.props.onScroll(e)}),0);var t=o.props.height||o._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;o.actionTriggered||(o.isElementAtBottom(t,o.props.scrollThreshold)&&o.props.hasMore&&(o.actionTriggered=!0,o.setState({showLoader:!0}),o.props.next&&o.props.next()),o.lastScrollTop=t.scrollTop)},o.state={showLoader:!1,pullToRefreshThresholdBreached:!1},o.throttledOnScrollListener=function(e,t,o,n){var r,a=!1,s=0;function i(){r&&clearTimeout(r)}function l(){var l=this,c=Date.now()-s,u=arguments;function h(){s=Date.now(),o.apply(l,u)}function p(){r=void 0}a||(n&&!r&&h(),i(),void 0===n&&c>e?h():!0!==t&&(r=setTimeout(n?p:h,void 0===n?e-c:e)))}return"boolean"!=typeof t&&(n=o,o=t,t=void 0),l.cancel=function(){i(),a=!0},l}(150,o.onScrollListener).bind(o),o.onStart=o.onStart.bind(o),o.onMove=o.onMove.bind(o),o.onEnd=o.onEnd.bind(o),o}return function(e,t){function o(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.UNSAFE_componentWillReceiveProps=function(e){this.props.key===e.key&&this.props.dataLength===e.dataLength||(this.actionTriggered=!1,this.setState({showLoader:!1,pullToRefreshThresholdBreached:!1}))},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=function(e){return"number"==typeof e?{unit:l,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:i,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:l,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),c):(console.warn("scrollThreshold should be string or number"),c)}(t);return n.unit===i?e.scrollTop+o>=e.scrollHeight-n.value:e.scrollTop+o>=n.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=s({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.a.createElement("div",{style:n,className:"infinite-scroll-component__outerdiv"},r.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(n.Component);t.a=u},HUft:function(e,t,o){"use strict";o("pJf4");var n=o("q1tI"),r=o.n(n),a=o("Wbzz"),s=o("vKYT"),i=o("reRv"),l=["/images/cards/card1.svg","/images/cards/card2.svg","/images/cards/card3.svg"],c=o("QbTK"),u=o("yLNt"),h=o.n(u);t.a=function(e){var t=e.post,o="/news/"+t.slug+"/",n=Object(i.readingTime)(t),u=Object(c.a)(l)[0];return r.a.createElement("div",{className:h.a.card,"data-color":t.featured?"primary":"default"},r.a.createElement(a.Link,{to:o},t.feature_image?r.a.createElement("img",{className:h.a.head,src:t.feature_image,alt:"News Post","data-dim":!0,"data-rad":!0}):r.a.createElement("img",{className:h.a.head,src:u,alt:"News Post Design","data-bw":!0}),r.a.createElement("div",{className:h.a.body},r.a.createElement("h4",null,t.title),r.a.createElement("p",null,t.excerpt&&t.excerpt.substr(0,150)+"..."),t.tags&&t.tags.map((function(e,o){return r.a.createElement("span",{className:t.featured?"ncr-tag featured":"ncr-tag"},r.a.createElement(s.Tags,{post:t,visibility:"public",from:o+1,to:o+1,autolink:!0}))}))),r.a.createElement("div",{className:h.a.foot},r.a.createElement("div",{className:h.a.buckt},"NCRYPTO Labs"!==t.primary_author.name&&r.a.createElement(a.Link,{to:"@"+t.primary_author.slug,className:h.a.author},r.a.createElement("img",{src:t.primary_author.profile_image?t.primary_author.profile_image:"/images/icons/avatar.svg",alt:t.primary_author.name}),r.a.createElement("b",null,t.primary_author.name)),r.a.createElement("div",{className:h.a.details},r.a.createElement("div",{className:h.a.col6},t.published_from_now),r.a.createElement("div",{className:h.a.col6},n))))))}},ccoC:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return f})),o.d(t,"pageQuery",(function(){return g}));var n=o("q1tI"),r=o.n(n),a=o("Kvkj"),s=o("v1X+"),i=o("GgLZ"),l=o("iEqO"),c=o.n(l),u=o("g9Ic"),h=(o("pJf4"),o("cmba")),p=o.n(h),d=function(e){var t=e.tag,o=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p.a.hero},r.a.createElement("header",{className:"tag-header"},r.a.createElement("h1",null,"/#/"),r.a.createElement("h1",null,t.name),t.description&&r.a.createElement("p",null,t.description))),r.a.createElement("div",{className:p.a.body},r.a.createElement("div",{className:p.a.buckt},o)))},m=o("HUft");var f=function(e){var t,o;function n(t){var o,n=t.data,r=t.location;t.pageContext;return(o=e.call(this)||this).fetchtime=400,o.limit=6,o.data=n,o.tag=n.ghostTag,o.posts=n.allGhostPost.edges,o.location=r,o.state={newsEntriesCount:o.posts.slice(0,o.limit).length,column:Object(u.a)(o.posts.slice(0,o.limit)),rate:o.limit+6},o.loadNews=o.loadNews.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(o)),o}o=e,(t=n).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var l=n.prototype;return l.componentDidMount=function(){},l.loadNews=function(){var e=this;setTimeout((function(){e.setState({rate:e.limit+e.state.rate,column:Object(u.a)(e.posts.slice(0,e.state.rate)),newsEntriesCount:e.posts.slice(0,e.state.rate).length})}),this.fetchtime)},l.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{data:this.data,location:this.location,type:"series"}),r.a.createElement(a.d,null,r.a.createElement(d,{tag:this.tag},r.a.createElement(i.a,{dataLength:this.state.newsEntriesCount,next:this.loadNews,hasMore:!0,loader:r.a.createElement("p",{"data-icon":!0},r.a.createElement("img",{className:"svg-inline--ncr ncr-w-18",src:c.a,alt:"Loading News",style:{fontSize:"3rem"}})),style:{overflowX:"hidden"}},r.a.createElement("div",{"data-row":!0},r.a.createElement("div",{"data-col":!0},this.state.column.column1.map((function(e){var t=e.node;return r.a.createElement(m.a,{key:t.uuid,post:t})}))),r.a.createElement("div",{"data-col":!0},this.state.column.column2.map((function(e){var t=e.node;return r.a.createElement(m.a,{key:t.uuid,post:t})}))),r.a.createElement("div",{"data-col":!0},this.state.column.column3.map((function(e){var t=e.node;return r.a.createElement(m.a,{key:t.uuid,post:t})}))))))))},n}(r.a.Component),g="2565445250"},cmba:function(e,t,o){e.exports={hero:"hero3MUc",links:"linksQeHC",body:"body2EVB",buckt:"buckt21nJ"}},g9Ic:function(e,t,o){"use strict";t.a=function(e){for(var t=[],o=[],n=[],r=1;r<=Math.ceil(e.length/3)&&(void 0!==e[0+3*(r-1)]&&(t=t.concat(e[0+3*(r-1)])),void 0!==e[1+3*(r-1)]&&(o=o.concat(e[1+3*(r-1)])),void 0!==e[2+3*(r-1)]);r+=1)n=n.concat(e[2+3*(r-1)]);return{column1:t,column2:o,column3:n}}},iEqO:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIiA+PHN0eWxlPnN2Z3tmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBkPSJNNDk3Ljk0MSAyMjUuOTQxTDI4Ni4wNTkgMTQuMDU5QTQ4IDQ4IDAgMCAwIDI1Mi4xMTggMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OHYyMDQuMTE4YTQ4IDQ4IDAgMCAwIDE0LjA1OSAzMy45NDFsMjExLjg4MiAyMTEuODgyYzE4Ljc0NCAxOC43NDUgNDkuMTM2IDE4Ljc0NiA2Ny44ODIgMGwyMDQuMTE4LTIwNC4xMThjMTguNzQ1LTE4Ljc0NSAxOC43NDUtNDkuMTM3IDAtNjcuODgyek0xMTIgMTYwYy0yNi41MSAwLTQ4LTIxLjQ5LTQ4LTQ4czIxLjQ5LTQ4IDQ4LTQ4IDQ4IDIxLjQ5IDQ4IDQ4LTIxLjQ5IDQ4LTQ4IDQ4em01MTMuOTQxIDEzMy44MjNMNDIxLjgyMyA0OTcuOTQxYy0xOC43NDUgMTguNzQ1LTQ5LjEzNyAxOC43NDUtNjcuODgyIDBsLS4zNi0uMzZMNTI3LjY0IDMyMy41MjJjMTYuOTk5LTE2Ljk5OSAyNi4zNi0zOS42IDI2LjM2LTYzLjY0cy05LjM2Mi00Ni42NDEtMjYuMzYtNjMuNjRMMzMxLjM5NyAwaDQ4LjcyMWE0OCA0OCAwIDAgMSAzMy45NDEgMTQuMDU5bDIxMS44ODIgMjExLjg4MmMxOC43NDUgMTguNzQ1IDE4Ljc0NSA0OS4xMzcgMCA2Ny44ODJ6Ii8+PC9zdmc+"},yLNt:function(e,t,o){e.exports={card:"card3NWt",author:"author17zR",head:"head93pI",body:"body2LaP",foot:"foot3kkL",buckt:"buckt3933",details:"detailsJrjV",col6:"col-6pP3x"}}}]);
//# sourceMappingURL=component---src-templates-tag-js-1588a44c63f0b7a91cf1.js.map
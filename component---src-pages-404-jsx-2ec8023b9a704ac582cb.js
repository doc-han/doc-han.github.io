(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{160:function(A,e,t){"use strict";t.r(e);var n=t(9),a=t.n(n),r=t(0),i=t.n(r),s=t(170),o=t(217),c=t.n(o),l=function(A){function e(){return A.apply(this,arguments)||this}return a()(e,A),e.prototype.render=function(){return i.a.createElement(s.a,null,i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",{src:c.a,alt:""}),i.a.createElement("p",null,"I don't remember writing this page!")))},e}(i.a.Component);e.default=l},167:function(A,e,t){t(36);var n={siteTitle:"HanPages",siteTitleShort:"Hanpages",siteTitleAlt:"Hanpages",siteLogo:"/logos/logo-48.png",siteUrl:"https://www.hanpages.com",pathPrefix:"",siteDescription:"Han is a University Computer Science student who likes to put down his understanding of concepts and others",siteRss:"/rss.xml",siteFBAppID:"",googleAnalyticsID:"",disqusShortname:"han",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",userName:"Han",userEmail:"yahyafarhan48@gmail.com",userTwitter:"",userLocation:"Accra, Ghana",userAvatar:"",userDescription:"I'm a second-year computer scientist and a Software Developer specializing in JavaScript and C++,\n    Currently doing some data science.",headLinks:[{label:"Articles",url:"/articles"},{label:"About",url:"/about"},{label:"Buy me a coffee",url:"https://ko-fi.com/han123"}],copyright:"Copyright © 2019. Han",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),A.exports=n},168:function(A,e,t){"use strict";t.d(e,"a",function(){return c});var n=t(9),a=t.n(n),r=t(0),i=t.n(r),s=t(167),o=t.n(s),c=function(A){function e(){return A.apply(this,arguments)||this}return a()(e,A),e.prototype.render=function(){return i.a.createElement("div",{class:"author"},i.a.createElement("div",{className:"deep bigger"},"Hi, I'm ",o.a.userName),o.a.userDescription)},e}(i.a.Component)},170:function(A,e,t){"use strict";var n=t(9),a=t.n(n),r=t(0),i=t.n(r),s=t(169),o=t.n(s),c=t(167),l=t.n(c),u=(t(77),t(56)),g=function(A){function e(){return A.apply(this,arguments)||this}return a()(e,A),e.prototype.render=function(){var A=l.a.headLinks.map(function(A){return A.url.match("http")?i.a.createElement("a",{href:A.url},A.label):i.a.createElement(u.Link,{to:A.url,key:A.label},A.label)});return i.a.createElement("div",{id:"header"},i.a.createElement("div",{className:"container"},i.a.createElement(u.Link,{className:"site-nameLink",to:"/"},i.a.createElement("div",{className:"site-name"},i.a.createElement("img",{width:"48",height:"48",src:l.a.siteLogo,alt:""})," ",i.a.createElement("div",null,l.a.siteTitle))),i.a.createElement("div",null,A)))},e}(i.a.Component);t(168),t(157);t.d(e,"a",function(){return h});var h=function(A){function e(){return A.apply(this,arguments)||this}return a()(e,A),e.prototype.render=function(){var A=this.props.children;return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),i.a.createElement("meta",{name:"description",content:l.a.siteDescription})),i.a.createElement(g,null),i.a.createElement("div",{id:"body"},i.a.createElement("div",{className:"container"},A)))},e}(i.a.Component)},217:function(A,e){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-404-jsx-2ec8023b9a704ac582cb.js.map
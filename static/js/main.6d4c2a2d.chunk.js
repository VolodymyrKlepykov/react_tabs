(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(2),r=n.n(l),o=n(3),i=n(4),b=n(6),s=n(5),u=(n(12),function(e){var t=e.tabs,n=e.selectedTabId,a=e.onTabSelected;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("button",{key:e.id,type:"button",onClick:function(){return a(e)},className:"btn btn-info btn-lg"},e.title)})),c.a.createElement("div",null,n.content))}),d=(n(13),n(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),m=function(e){Object(b.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:d[0]},e.onTabSelected=function(t){t.id!==e.state.selectedTab.id&&e.setState({selectedTab:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.selectedTab;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is\xa0",e.title),c.a.createElement(u,{tabs:d,onTabSelected:this.onTabSelected,selectedTabId:e}))}}]),n}(a.Component);r.a.render(c.a.createElement(m,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.6d4c2a2d.chunk.js.map
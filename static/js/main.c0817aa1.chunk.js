(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(n){n.exports=[{id:"1",title:"[\u97d3\u6587\u6587\u6cd5]\u672a\u4f86\u5f0f(\uc73c)\u3139 \uac70\uc608\uc694 vs (\uc73c)\u3139\uac8c\uc694",datetime:"2020.01.15",tags:["\u97d3\u6587","\u6587\u6cd5"]},{id:"2",title:"[\u97d3\u6587\u6587\u6cd5]\u9032\u884c\u5f0f\uace0 \uc788\ub2e4\u3001\uc911\uc774\ub2e4\u3001\uace0 \uc788\ub294 \uc911\uc774\ub2e4",datetime:"2020.01.17",tags:["\u97d3\u6587","\u6587\u6cd5"]}]},253:function(n,t,e){var r={"./1.md":[336,3],"./2.md":[337,4]};function a(n){if(!e.o(r,n))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[n],a=t[0];return e.e(t[1]).then(function(){return e.t(a,7)})}a.keys=function(){return Object.keys(r)},a.id=253,n.exports=a},334:function(n,t,e){var r={"./1.md":[338,5],"./2.md":[339,6]};function a(n){if(!e.o(r,n))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[n],a=t[0];return e.e(t[1]).then(function(){return e.t(a,7)})}a.keys=function(){return Object.keys(r)},a.id=334,n.exports=a},335:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(48),i=e.n(o),c=(e(60),e(61),e(16));var l=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{path:"/blog",component:E}),a.a.createElement(c.a,{path:"/img/:filename",component:Image}))},u=e(9),s=e(10),m=e(12),d=e(11),p=e(13),f=e(1),b=e(2);function h(){var n=Object(f.a)(["\n  display: flex;\n"]);return h=function(){return n},n}function x(){var n=Object(f.a)(["\n"]);return x=function(){return n},n}var g=b.a.div(x()),v=b.a.div(h()),O=function(){return a.a.createElement(g,null,a.a.createElement(T,null),a.a.createElement(v,null,a.a.createElement(c.a,{path:"/blog",component:ln,exact:!0}),a.a.createElement(c.a,{path:"/blog/post/:postId",component:_n,exact:!0}),a.a.createElement(jn,null)))},E=function(n){function t(n){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this,n))).state={},e}return Object(p.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(O,null)}}]),t}(r.Component),j=e(15),w=e(7);function k(){var n=Object(f.a)(["\n  height: 95px;\n  width: 100%;\n"]);return k=function(){return n},n}function y(){var n=Object(f.a)(["\n  padding: 0 7px;\n"]);return y=function(){return n},n}function S(){var n=Object(f.a)(["\n  display: flex;\n  margin-right: 50px;\n  font-size: 0.85em;\n"]);return S=function(){return n},n}function L(){var n=Object(f.a)(["\n  font-size: ",";\n  margin: ",";\n  transition: font-size 0.2s ease-in-out 0s; \n  letter-spacing: 0.15em;\n  font-weight: 500px;\n"]);return L=function(){return n},n}function M(){var n=Object(f.a)(["\n  position: ",";\n  width: 100%;\n  background: #fff;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: ",";\n  font-family: 'Open Sans', '\u5fae\u8edf\u6b63\u9ed1\u9ad4', 'sans-serif';\n  border-bottom: ",";\n  box-shadow: ",";\n"]);return M=function(){return n},n}var z=b.a.div(M(),function(n){return n.isScrollOver?"fixed":"relative"},function(n){return n.isScrollOver?"0":"15px 0"},function(n){return n.isScrollOver?"0px":"1px #eee solid"},function(n){return n.isScrollOver?"0px 2px 5px 0px rgba(0,0,0,0.2)":"0"}),P=b.a.div(L(),function(n){return n.isScrollOver?"1.1em":"1.5em"},function(n){return n.isScrollOver?"5px 5px 5px 60px":"20px 20px 20px 60px"}),N=b.a.ul(S()),C=b.a.li(y()),I=b.a.div(k()),_=function(n){var t=n.isScrollOver;return a.a.createElement(a.a.Fragment,null,a.a.createElement(z,{isScrollOver:t},a.a.createElement(P,{isScrollOver:t},a.a.createElement(w.a,{to:"/blog"},"Cathy P")),a.a.createElement(N,null,a.a.createElement(C,null,a.a.createElement(w.a,{to:"/blog"},"\u9996\u9801")),a.a.createElement(C,null,"\u5206\u985e"),a.a.createElement(C,null,"\u5217\u8868"))),t?a.a.createElement(I,null):null)},T=function(n){function t(n){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this,n))).state={isScrollOver:!1},e.handleScroll=e.handleScroll.bind(Object(j.a)(e)),e}return Object(p.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){document.documentElement.scrollTop<68&&this.state.isScrollOver?this.setState({isScrollOver:!1}):document.documentElement.scrollTop>=68&&!this.state.isScrollOver&&this.setState({isScrollOver:!0})}},{key:"render",value:function(){return a.a.createElement(_,{isScrollOver:this.state.isScrollOver})}}]),t}(r.Component),D=e(22),U=e.n(D),A=e(25);function B(){var n=Object(f.a)(["\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n\n  h2{\n    margin: 0.3em 0;\n  }\n  p{\n    margin-bottom: 0.5em;\n  }\n  blockquote{\n    margin-bottom: 0.5em;\n  }\n"]);return B=function(){return n},n}function F(){var n=Object(f.a)(["\n  /* max-width: 630px;\n  margin: 0 auto; */\n  margin-top: 0;\n  border-radius: 3px;\n  line-height: 1.8em;\n  padding-bottom: 100px;\n  font-family: 'Muli', '\u5fae\u8edf\u6b63\u9ed1\u9ad4', sans-serif;\n\n  strong{\n    font-weight: bold;\n    background-color: #cae8e8;\n  }\n\n  img{\n    max-width: 100%;\n  }\n\n  p, ol{\n    margin-bottom: 1.2em;\n  }\n\n  ol{\n    list-style-type: decimal;\n  }\n\n  ul{\n    list-style-type: circle;\n  }\n\n  ol, ul{\n    padding-left: 1.2em;\n  }\n\n  blockquote{\n    margin-bottom: 2em;\n    border-left: 5px #a9d6d6 solid;\n    padding-left: 20px;\n  }\n  .tip{\n    position: relative;\n    border: 3px #c7d9d9 solid;\n    border-radius: 3px;\n    padding: 20px;\n    margin-top: 40px;\n    margin-bottom: 2em;\n\n    &:before{\n      box-sizing: border-box;\n      content: attr(name);\n      display: block;\n      position: absolute;\n      /* width: 60px; */\n      height: 33px;\n      top: -33px;\n      left: -3px;\n      background: #c7d9d9;\n      /* color:#61a3a3; */\n      /* font-weight: 600; */\n      border-top-left-radius: 3px;\n      border-top-right-radius: 3px;\n      padding: 2px 10px;\n    }\n  }\n  .highlight{\n    color: #ef5d40;\n  }\n\n  h1{\n    font-size: 1.7em;\n    margin-top: 25px;\n    margin-bottom: 25px;\n    font-weight: 500;\n    letter-spacing: 0.1em;\n  }\n\n  h2{\n    font-size: 1.3em;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    font-weight: 600;\n    color: #61a3a3;\n    /* color: #367575; */\n  }\n\n  h3{\n    font-size: 1.1em;\n    font-weight: 600;\n    margin-bottom: 0.2em;\n    color: #333;\n  }\n\n  h4{\n    font-weight: 600;\n  }\n\n  pre{\n    margin-bottom: 2em;\n  }\n\n  code{\n    background: #f3f3f3;\n    font-family: 'Inconsolata', monospace, '\u5fae\u8edf\u6b63\u9ed1\u9ad4', 'sans-serif';\n    display: inline-block;\n    padding: 1.5em;\n    width: 100%;\n    border-radius: 8px;\n  }\n\n  .circle{\n    padding-left: 1.5em;\n    li:before{\n      content: \"\";\n      display: block;\n      width: 0.4em;\n      height: 0.4em;\n      position: absolute;\n      transform: translateY(0.7em) translateX(-1em);\n      background-color: #61a3a3;\n      border-radius: 50%;\n    }\n  }\n\n  .small{\n    margin-bottom: 0.8em;\n  }\n\n  .small2{\n    margin-bottom: 0;\n  }\n\n  .bold{\n    font-weight: 700;\n  }\n\n  table{\n    border: 1px solid #aaa;\n    td{\n      border: 1px solid #aaa;\n      padding: 10px;\n    }\n  }\n"]);return F=function(){return n},n}var R=b.a.div(F()),K=Object(b.a)(R)(B()),q=(e(40),e(26)),H=e.n(q);function J(){var n=Object(f.a)(["\n  /* position: absolute;\n  bottom: 20px;\n  right: 20px;\n  border: 0px;\n  background: #fff;\n  color: #61a3a3; */\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  border: 0px;\n  padding: 8px;\n  font-size: 0.8em;\n  background: #fff;\n  color: #61a3a3;\n  transition: 0.3s ease-in-out 0s; \n  letter-spacing: 0.1em;\n  text-align: center;\n\n  &:hover{\n    background: #8dc2c2;\n    color: #fff;\n  }\n"]);return J=function(){return n},n}function W(){var n=Object(f.a)(["\n  display: inline-block;\n  border: 1px solid #8dc2c2;\n  padding: 5px 5px;\n  border-radius: 2px;\n  font-size: 0.75em;\n  color: #61a3a3;\n  margin: 0 2px;\n"]);return W=function(){return n},n}function G(){var n=Object(f.a)(["\n  margin-bottom: 0.5em;\n"]);return G=function(){return n},n}function V(){var n=Object(f.a)(["\n  padding: 0.8em 0 0.55em;\n  color: #777;\n  font-size: 0.8em;\n"]);return V=function(){return n},n}function X(){var n=Object(f.a)(["\n  display: inline-block;\n  font-size: 1.7rem;\n  padding: 10px 0;\n  letter-spacing: 0.1em;\n  line-height: 1.3em;\n"]);return X=function(){return n},n}function Y(){var n=Object(f.a)(["\n  position: relative;\n  margin: 10px 10px 30px 40px;\n  padding: 10px 20px 35px;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 10px 5px 0px rgba(240,240,240,0.8);\n  transition: box-shadow 0.3s ease-in-out 0s; \n\n  &:hover{\n    box-shadow: 0px 10px 5px 0px rgba(225,225,225,0.8);\n  }\n\n  img{\n    max-width: 500px;\n    max-height: 300px;\n  }\n"]);return Y=function(){return n},n}function $(){var n=Object(f.a)(["\n  flex: 1;\n  /* display: flex;\n  flex-wrap: wrap; */\n"]);return $=function(){return n},n}var Q=b.a.div($()),Z=b.a.div(Y()),nn=Object(b.a)(w.a)(X()),tn=b.a.div(V()),en=b.a.ul(G()),rn=b.a.li(W()),an=Object(b.a)(w.a)(J()),on=function(n){var t=n.postList,e=n.md,r=t.slice().map(function(n,t){var r=n.tags.map(function(n){return a.a.createElement(rn,{key:n},n)});return a.a.createElement(Z,{key:n.id},a.a.createElement(en,null,r),a.a.createElement(nn,{to:"/blog/post/".concat(n.id)},n.title),a.a.createElement(tn,null,n.datetime),n.img?a.a.createElement("img",{src:n.img,alt:"post img"}):null,a.a.createElement(K,{id:"content",className:"article-detail",dangerouslySetInnerHTML:{__html:e[t]?H()(e[t]):""}}),a.a.createElement(an,{to:"/blog/post/".concat(n.id)},"CONTINUE READING..."))}).reverse();return a.a.createElement(Q,{classNameName:"container"},r)},cn=e(20),ln=function(n){function t(n){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this,n))).state={md:[]},e.postList=cn.slice(),e.getPostMarkdown=e.getPostMarkdown.bind(Object(j.a)(e)),e}return Object(p.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){var n=this;this.postList.forEach(function(t,e){n.getPostMarkdown(t.id,e)})}},{key:"getPostMarkdown",value:function(){var n=Object(A.a)(U.a.mark(function n(t,r){var a,o,i,c;return U.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e(253)("./".concat(t,".md"));case 3:return a=n.sent,n.next=6,fetch(a.default);case 6:return o=n.sent,n.next=9,o.text();case 9:i=n.sent,(c=this.state.md.slice())[r]=i,this.setState({md:c}),n.next=17;break;case 15:n.prev=15,n.t0=n.catch(0);case 17:case"end":return n.stop()}},n,this,[[0,15]])}));return function(t,e){return n.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement(on,{postList:this.postList,md:this.state.md})}}]),t}(r.Component);function un(){var n=Object(f.a)(["\n  margin: 1em 0;\n\n  li{\n    line-height: 2em;\n  }\n"]);return un=function(){return n},n}function sn(){var n=Object(f.a)(["\n  line-height: 1.5em;\n"]);return sn=function(){return n},n}function mn(){var n=Object(f.a)(["\n  font-size: 1.1rem;\n  line-height: 2em;\n"]);return mn=function(){return n},n}function dn(){var n=Object(f.a)(["\n  font-size: 1rem;\n  padding: 0.7em 1em;\n  border: 1px solid #8dc2c2;\n  text-align: center;\n  letter-spacing: 0.1em;\n  margin-bottom: 0.5em;\n"]);return dn=function(){return n},n}function pn(){var n=Object(f.a)(["\n  padding: 0.5em;\n  margin-bottom: 2em;\n  font-size: 0.85rem;\n\n  /* &:hover{\n    box-shadow: 0px 10px 5px 0px rgba(240,240,240,0.8);\n  } */\n"]);return pn=function(){return n},n}function fn(){var n=Object(f.a)(["\n  width: 280px;\n  min-width: 250px;\n  padding: 10px;\n"]);return fn=function(){return n},n}var bn=b.a.div(fn()),hn=b.a.div(pn()),xn=b.a.div(dn()),gn=b.a.div(mn()),vn=b.a.div(sn()),On=b.a.ul(un()),En=function(n){var t=n.postList.slice().reverse().slice(0,10);return t=t.map(function(n){return a.a.createElement("li",{key:n.id},a.a.createElement(w.a,{to:"/blog/post/".concat(n.id)},n.title))}),a.a.createElement(bn,null,a.a.createElement(hn,null,a.a.createElement(xn,null,"ABOUT ME"),a.a.createElement(vn,null,a.a.createElement(gn,null,"Cathy Peng"))),a.a.createElement(hn,null,a.a.createElement(xn,null,"RECENT POSTS"),a.a.createElement(On,null,t)))},jn=function(n){function t(n){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this,n))).state={},e.postList=cn.slice(),e}return Object(p.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(En,{postList:this.postList})}}]),t}(r.Component);e(254);function wn(){var n=Object(f.a)(["\n  margin-bottom: 20px;\n  color: #999;\n  font-size: 1em;\n"]);return wn=function(){return n},n}function kn(){var n=Object(f.a)(["\n  display: inline-block;\n  border: 1px solid #8dc2c2;\n  padding: 5px 5px;\n  border-radius: 2px;\n  font-size: 0.75em;\n  color: #61a3a3;\n  margin: 0 2px;\n"]);return kn=function(){return n},n}function yn(){var n=Object(f.a)(["\n  margin-bottom: 0.5em;\n"]);return yn=function(){return n},n}function Sn(){var n=Object(f.a)(["\n  font-size: 1.7em;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  font-weight: 500;\n  letter-spacing: 0.1em;\n"]);return Sn=function(){return n},n}function Ln(){var n=Object(f.a)(["\n  width: 0;\n  flex: 1;\n  margin: 10px 10px 30px 40px;\n  padding: 10px 20px;\n  /* box-shadow: 0px 10px 5px 0px rgba(240,240,240,0.8); */\n"]);return Ln=function(){return n},n}var Mn=b.a.div(Ln()),zn=b.a.h1(Sn()),Pn=b.a.ul(yn()),Nn=b.a.li(kn()),Cn=b.a.div(wn()),In=function(n){var t=n.post,e=n.md,r=t.tags.map(function(n){return a.a.createElement(Nn,{key:n},n)});return a.a.createElement(Mn,null,a.a.createElement(Pn,null,r),a.a.createElement(zn,null,t.title),a.a.createElement(Cn,null,t.datetime),a.a.createElement(R,{id:"content",className:"article-detail",dangerouslySetInnerHTML:{__html:e?H()(e):""}}))},_n=function(n){function t(n){var e;Object(u.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this,n))).postList=cn.slice();var r=e.postList.find(function(n){return n.id===e.props.match.params.postId});return e.state={post:r,urlKey:e.props.location.key},e.getPostMarkdown=e.getPostMarkdown.bind(Object(j.a)(e)),e}return Object(p.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getPostMarkdown()}},{key:"componentDidUpdate",value:function(){var n=this,t=this.props.location.key;if(t!==this.state.urlKey){var e=this.postList.find(function(t){return t.id===n.props.match.params.postId});this.setState({post:e,urlKey:t}),this.getPostMarkdown()}}},{key:"getPostMarkdown",value:function(){var n=Object(A.a)(U.a.mark(function n(){var t,r,a,o;return U.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.props.match.params.postId,n.next=3,e(334)("./".concat(t,".md"));case 3:return r=n.sent,n.next=6,fetch(r.default);case 6:return a=n.sent,n.next=9,a.text();case 9:o=n.sent,this.setState({md:o});case 11:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement(In,{post:this.state.post,md:this.state.md})}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Tn=e(4),Dn=Object(Tn.a)({basename:Object({NODE_ENV:"production",PUBLIC_URL:"/blog"}).REACT_APP_BASENAME});i.a.render(a.a.createElement(c.b,{history:Dn,basename:"/blog"},a.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},55:function(n,t,e){n.exports=e(335)},60:function(n,t,e){},61:function(n,t,e){}},[[55,1,2]]]);
//# sourceMappingURL=main.c0817aa1.chunk.js.map
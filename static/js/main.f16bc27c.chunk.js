(this["webpackJsonpzce.github.io"]=this["webpackJsonpzce.github.io"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),f=a.n(c),n=a(3),o=a.n(n),r=a(1),l=[["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]],i=(a(9),function(){var e=Object(c.useState)(~~(Date.now()/6e4)%13),t=Object(r.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(~~(Date.now()/6e3)%10),i=Object(r.a)(o,2),s=i[0],d=i[1];return console.log("%cOC- %c ".concat(a," %c %c ").concat(s," %c \u2192 %c  "),"color: ".concat(l[0][7]),"border-radius: 4px; background: ".concat(l[a][7]),"","border-radius: 4px; background: ".concat(l[0][s]),"","border-radius: 4px; background: ".concat(l[a][s])),f.a.createElement("svg",{className:"logo",viewBox:"0 0 472 450",onClick:function(){n(~~(13*Math.random())),d(~~(10*Math.random()))}},f.a.createElement("defs",null,f.a.createElement("filter",{id:"shadow",x:"-12.7%",y:"-13.4%",width:"125.4%",height:"126.7%",filterUnits:"objectBoundingBox"},f.a.createElement("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"offset-outer"}),f.a.createElement("feGaussianBlur",{stdDeviation:"20",in:"offset-outer",result:"blue-outer"}),f.a.createElement("feComposite",{in:"blue-outer",in2:"SourceAlpha",operator:"out",result:"blue-outer"}),f.a.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0",type:"matrix",in:"blue-outer"}))),f.a.createElement("mask",{id:"mask",fill:"white"},f.a.createElement("polygon",{points:"472 114.26 203.028853 335.74 407.1 335.74 472 449.48 64.9 449.48 0 335.74 268.971147 114.26 64.9 114.26 0 0.52 407.1 0.52"})),f.a.createElement("g",{mask:"url(#mask)",fill:l[a][s]},f.a.createElement("rect",{x:"0",y:"0",width:"472",height:"449"})),f.a.createElement("g",{mask:"url(#mask)"},f.a.createElement("polygon",{points:"0 335.74 64.9 449.48 472 114.26 407.1 0.52",filter:"url(#shadow)"})))}),s=(a(10),function(e){var t=e.title,a=e.slogan;return f.a.createElement(f.a.Fragment,null,f.a.createElement("h1",{className:"title"},t),f.a.createElement("p",{className:"slogan"},a))}),d=(a(11),function(e){var t=e.links;return f.a.createElement("ul",{className:"navigation"},t.map((function(e){return f.a.createElement("li",{key:e.href},f.a.createElement("a",{href:e.href,target:e.target},e.text))})))}),u=(a(12),function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(""),l=Object(r.a)(o,2),i=l[0],s=l[1];Object(c.useEffect)((function(){var e=new window.Image,t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e.src="https://source.unsplash.com/random/".concat(t,"x").concat(a),e.onload=function(){return n(!1)},s(e.src)}),[]);var d=["background"];return a&&d.push("loading"),f.a.createElement("div",{className:d.join(" ")},f.a.createElement("img",{src:i,alt:"Unsplash photos"}))}),b={title:"Hey! Guys",slogan:"I'm Lei Wang, a technical poet of China",links:[{text:"Weibo",href:"https://weibo.com/zceme",target:"_blank"},{text:"WeChat",href:"https://img.zce.me/wechat.jpg",target:"_blank"},{text:"Blog",href:"https://blog.zce.me",target:"_blank"},{text:"GitHub",href:"https://github.com/zce",target:"_blank"},{text:"Email",href:"mailto:w@zce.me",target:"_self"},{text:"Discuss",href:"https://github.com/zce/discuss/issues",target:"_blank"}]};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(13);o.a.render(f.a.createElement((function(){return f.a.createElement(f.a.Fragment,null,f.a.createElement(i,null),f.a.createElement(s,{title:b.title,slogan:b.slogan}),f.a.createElement(d,{links:b.links}),f.a.createElement(u,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.f16bc27c.chunk.js.map
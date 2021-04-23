(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(19),o=n.n(c),s=n(5),i=n(6),u=n(9),p=n(8),f=n(7),d=(n(25),n(26),n(0)),h=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Game",children:[Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("img",{src:"./istockphoto-973102672-170667a.jpg",alt:""})}),Object(d.jsx)("h2",{children:this.props.game})]})}}]),n}(a.a.Component),l=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"GameList",children:this.props.games.map((function(e){return Object(d.jsx)(h,{game:e})}))})}}]),n}(a.a.Component),v=(n(28),n(29),a.a.Component,n(1)),b=n.n(v),j=n(4),m=n(20),k=n.n(m),w={url:"https://trivia-game-cyber.herokuapp.com/",getQuiz:function(e,t){return Object(j.a)(b.a.mark((function n(){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(w.url,"quiz/").concat(e),{headers:{"content-type":"application/json",connection:"keep-alive",Authorization:"JWT "+t[1]}});case 3:if(!(r=n.sent).ok){n.next=8;break}return n.next=7,r.json();case 7:return n.abrupt("return",n.sent);case 8:throw new Error("Request failed!");case 11:n.prev=11,n.t0=n.catch(0),document.write(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()},postQuiz:function(e,t,n){return Object(j.a)(b.a.mark((function r(){var a,c,o;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=JSON.stringify({user:t,question_dict:n}),c={"content-type":"application/json",connection:"keep-alive"},r.next=5,fetch("".concat(w.url,"quiz/").concat(e),{method:"POST",headers:c,body:a});case 5:if(!(o=r.sent).ok){r.next=10;break}return r.next=9,o.json();case 9:return r.abrupt("return",r.sent);case 10:throw new Error("Request failed!");case 13:r.prev=13,r.t0=r.catch(0),document.write(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()},deleteQuiz:function(e){return Object(j.a)(b.a.mark((function t(){var n,r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={"content-type":"application/json",connection:"keep-alive"},t.next=4,fetch("".concat(w.url,"quiz/").concat(e),{method:"DELETE",headers:n});case 4:if(!(r=t.sent).ok){t.next=10;break}return t.next=8,r.json();case 8:return a=t.sent,t.abrupt("return",a.message);case 10:throw new Error("Request failed!");case 13:t.prev=13,t.t0=t.catch(0),document.write(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},putQuiz:function(e,t,n,r){return Object(j.a)(b.a.mark((function a(){var c,o,s,i,u,p,f;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,c={"content-type":"application/json",connection:"keep-alive"},"add_question"!==t){a.next=24;break}return o=JSON.stringify({add_or_remove:"True",user:r,question_added:n}),a.next=6,fetch("".concat(w.url,"quiz/").concat(e),{method:"PUT",headers:c,body:o});case 6:if(!(s=a.sent).ok){a.next=14;break}return a.next=10,s.json();case 10:return i=a.sent,a.abrupt("return",i.message);case 14:if("remove_question"!==t){a.next=24;break}return u=JSON.stringify({add_or_remove:"True",user:r,question_removed:n}),a.next=18,fetch("".concat(w.url,"quiz/").concat(e),{method:"PUT",headers:c,body:u});case 18:if(!(p=a.sent).ok){a.next=24;break}return a.next=22,p.json();case 22:return f=a.sent,a.abrupt("return",f.message);case 24:throw new Error("Request failed!");case 27:a.prev=27,a.t0=a.catch(0),document.write(a.t0);case 30:case"end":return a.stop()}}),a,null,[[0,27]])})))()},getQuizzes:function(){k.a.get("".concat(this.url,"quizzes"),{headers:{"content-type":"application/json",connection:"keep-alive"}}).then((function(e){if(e.ok)return e.json()})).then((function(e){return e.quizzes})).catch((function(e){document.write(e)}))},register:function(e,t){return Object(j.a)(b.a.mark((function n(){var r,a,c,o;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r={"content-type":"application/json",connection:"keep-alive"},a=JSON.stringify({password:t}),n.next=5,fetch("".concat(w.url,"user/").concat(e),{method:"PUT",headers:r,body:a});case 5:if(!(c=n.sent).ok){n.next=11;break}return n.next=9,c.json();case 9:return o=n.sent,n.abrupt("return",o.message);case 11:throw new Error("Request failed!");case 14:n.prev=14,n.t0=n.catch(0),document.write(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()},auth:function(e,t){return Object(j.a)(b.a.mark((function n(){var r,a,c,o;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r={"content-type":"application/json",connection:"keep-alive"},a=JSON.stringify({username:e,password:t}),n.next=5,fetch("".concat(w.url,"auth"),{method:"POST",headers:r,body:a});case 5:if(!(c=n.sent).ok){n.next=11;break}return n.next=9,c.json();case 9:return o=n.sent,n.abrupt("return",o.access_token);case 11:throw new Error("Request failed!");case 14:n.prev=14,n.t0=n.catch(0),document.write(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()},updatePercentage:function(e,t,n){return Object(j.a)(b.a.mark((function r(){var a,c,o;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a={"content-type":"application/json",connection:"keep-alive"},c=JSON.stringify({percentage:t,quiz_name:e}),r.next=5,fetch("".concat(w.url,"user/").concat(n),{method:"PUT",body:c,headers:a});case 5:if(!(o=r.sent).ok){r.next=10;break}return r.next=9,o.json();case 9:return r.abrupt("return",r.sent);case 10:throw new Error("Request failed!");case 13:r.prev=13,r.t0=r.catch(0),document.write(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()},getStats:function(e){return Object(j.a)(b.a.mark((function t(){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={"content-type":"application/json",connection:"keep-alive"},t.next=4,fetch("".concat(w.url,"user/").concat(e),{headers:n});case 4:if(!(r=t.sent).ok){t.next=9;break}return t.next=8,r.json();case 8:return t.abrupt("return",t.sent);case 9:throw new Error("Request failed!");case 12:t.prev=12,t.t0=t.catch(0),document.write(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()}},x=w,g=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={games:[]},r.searchAPI=r.searchAPI.bind(Object(u.a)(r)),r.getQuizzes=r.getQuizzes.bind(Object(u.a)(r)),r.getQuizzes(),r}return Object(i.a)(n,[{key:"getQuizzes",value:function(){var e=this;x.getQuizzes().then((function(t){e.setState({games:t})}))}},{key:"searchAPI",value:function(e,t){var n=this;x.getQuiz(e,t).then((function(e){n.setState({games:[e]})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("h1",{children:"Trivia BuildQuizLink"}),Object(d.jsx)(l,{games:this.state.games})]})}}]),n}(a.a.Component);o.a.render(Object(d.jsx)(g,{}),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}},[[49,1,2]]]);
//# sourceMappingURL=main.edb88f37.chunk.js.map
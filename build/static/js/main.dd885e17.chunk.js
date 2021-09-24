(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(9),a=c.n(n),r=c(2),l=(c(17),c(0));function o(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(l.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsxs)("div",{className:"left",children:[Object(l.jsxs)("a",{href:"#intro",className:"logo",children:[Object(l.jsx)("span",{children:"d"}),Object(l.jsx)("span",{children:"c"}),Object(l.jsx)("span",{children:"u"}),Object(l.jsx)("span",{children:"r"}),Object(l.jsx)("span",{children:"t"}),Object(l.jsx)("span",{children:"i"}),Object(l.jsx)("span",{children:"s"}),Object(l.jsx)("span",{children:"."})]}),Object(l.jsx)("div",{className:"itemContainer"}),Object(l.jsx)("div",{className:"itemContainer",children:Object(l.jsx)("span",{})})]}),Object(l.jsx)("div",{className:"right",children:Object(l.jsxs)("div",{className:"hamburger",onClick:function(){return c(!t)},children:[Object(l.jsx)("span",{className:"line1"}),Object(l.jsx)("span",{className:"line2"}),Object(l.jsx)("span",{className:"line3"})]})})]})})}c(19);var j=c(10);function d(e){var t=e.eyeClosed,c=e.setEyeClosed,i=Object(s.useRef)();return Object(s.useEffect)((function(){Object(j.a)(i.current,{showCursor:!0,startDelay:20,typeSpeed:100,backDelay:1e4,backSpeed:100,strings:["Hello!","Welcome!"]})}),[]),Object(l.jsxs)("div",{className:"intro "+(t&&"active"),id:"intro",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsxs)("div",{className:"bio-text",children:[Object(l.jsxs)("h1",{children:["\xa0",Object(l.jsx)("span",{ref:i})]}),Object(l.jsx)("h3",{children:"I'm Daniel, a Front End Developer from London."})]})}),Object(l.jsxs)("div",{className:"right",children:[Object(l.jsxs)("div",{className:"imgContainer",children:[Object(l.jsx)("img",{src:"assets/Daniel.png",alt:"Daniel Curtis"}),Object(l.jsx)("div",{className:"overlay",onClick:function(){return c(!t)},children:Object(l.jsx)("div",{className:"overlay-title",children:Object(l.jsx)("div",{className:"overlay-description",children:"Daniel Curtis"})})})]}),Object(l.jsx)("a",{href:"#portfolio",children:Object(l.jsx)("img",{src:"assets/down.png",alt:"down arrow"})})]})]})}c(20);function b(e){var t=e.id,c=e.title,s=e.active,i=e.setSelected;return Object(l.jsx)("li",{className:s?"portfolioList active":"portfolioList",onClick:function(){return i(t)},children:c})}c(21);var u=[{id:1,title:"BeNatural",img:"assets/BeNatural.png",url:"http://be-natural-project.herokuapp.com/"},{id:2,title:"LaCasserole",img:"assets/LaCasserole.png",url:"https://la-casserole-new.herokuapp.com/chefs"},{id:3,title:"Portfolio",img:"assets/Portfolio.png",url:"https://www.daniel-curtis.co.uk/"}],h=[{id:1,title:"Portfolio",img:"assets/Portfolio.png",url:"https://www.daniel-curtis.co.uk/"}],O=[{id:1,title:"BeNatural",img:"assets/BeNatural.png",url:"http://be-natural-project.herokuapp.com/"},{id:2,title:"LaCasserole",img:"assets/LaCasserole.png",url:"https://la-casserole-new.herokuapp.com/chefs"}];function m(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)("web"),a=Object(r.a)(n,2),o=a[0],j=a[1],d=Object(s.useState)([]),m=Object(r.a)(d,2),p=m[0],x=m[1];return Object(s.useEffect)((function(){switch(o){case"web":x(u);break;case"mobile":x(h);break;case"ruby":x(O);break;default:x(u)}}),[o]),Object(l.jsxs)("div",{className:"portfolio "+(c&&"active"),id:"portfolio",children:[Object(l.jsx)("h1",{onClick:function(){return i(!c)},children:"Portfolio."}),Object(l.jsx)("ul",{children:[{id:"web",title:"Web App"},{id:"mobile",title:"Mobile / React"},{id:"ruby",title:"Ruby on Rails"}].map((function(e){return Object(l.jsx)(b,{title:e.title,active:o===e.id,setSelected:j,id:e.id})}))}),Object(l.jsx)("div",{className:"container",children:p.map((function(e){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("img",{src:e.img,alt:e.title}),Object(l.jsx)("h3",{children:e.title})]})}))})]})}c(22);function p(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(0),a=Object(r.a)(n,2),o=a[0],j=a[1],d=[{id:1,title:"BeNatural.",img:"assets/BeNatural.png",url:"http://be-natural-project.herokuapp.com/",icon:"assets/globe.png",desc:"A web app designed and built as part of a small team during Le Wagon, allowing users to order organic farm produce from local farms."},{id:2,title:"LaCasserole.",img:"assets/LaCasserole.png",url:"https://la-casserole-new.herokuapp.com/chefs",icon:"assets/globe.png",desc:"A web app designed and built as part of a small team during Le Wagon, allowing users to hire personal chefs to cook for them."},{id:3,title:"Portfolio.",img:"assets/Portfolio.png",url:"https://www.daniel-curtis.co.uk/",icon:"assets/mobile.png",desc:"A responsive react project created around the idea of making every single element interactive! Designed and built by me, my first react project."}],b=function(e){j("left"===e?o>0?o-1:2:o<d.length-1?o+1:0)};return Object(l.jsxs)("div",{className:"works",id:"works",children:[Object(l.jsxs)("div",{className:"slider "+(c&&"active"),style:{transform:"translateX(-".concat(100*o,"vw)")},children:[d.map((function(e){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"left",children:Object(l.jsxs)("div",{className:"leftContainer",children:[Object(l.jsxs)("div",{className:"alignContainer",children:[Object(l.jsx)("div",{className:"imgContainer",children:Object(l.jsx)("img",{src:e.icon,alt:"Web App"})}),Object(l.jsx)("h2",{onClick:function(){return i(!c)},children:e.title})]}),Object(l.jsx)("p",{children:e.desc})]})}),Object(l.jsx)("div",{className:"right",children:Object(l.jsx)("img",{src:e.img,alt:"Be Natural"})})]})})})),";"]}),Object(l.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"arrow",onClick:function(){return b("left")}}),Object(l.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"arrow",onClick:function(){return b("right")}})]})}var x=c(11),f=c.n(x),g=(c(45),function(){return Object(l.jsx)("div",{className:"player-wrapper",children:Object(l.jsx)(f.a,{className:"react-player",url:"https://soundcloud.com/a-fluffy-sheep/tracks",width:"100%",height:"320px"})})});c(46);function v(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(0),a=Object(r.a)(n,2),o=a[0],j=a[1],d=[{id:1},{id:2},{id:3}],b=function(e){j("left"===e?o>0?o-1:2:o<d.length-1?o+1:0)};return Object(l.jsxs)("div",{className:"aboutme",id:"aboutme",children:[Object(l.jsxs)("div",{className:"slider "+(c&&"active"),style:{transform:"translateX(-".concat(100*o,"vw)")},children:[Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"item",children:Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("div",{className:"leftContainer",children:Object(l.jsx)("div",{className:"card-one",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("h2",{onClick:function(){return i(!c)},children:"About Me."}),Object(l.jsx)("br",{}),"Nice to meet you.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"I\u2019m Daniel, a Front End Developer specialising in React.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"I\u2019ve been interested in coding from an early age; working on small projects here and there. ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"I\u2019m a psychiatric nurse by background and from working in the NHS, I have noted many inefficiencies with clinical documentation software. This is what inspired me to complete a product-driven intensive bootcamp, I am specifically pursuing frontend development to help improve user interaction within a given interface and what is best practice when creating intuitive design."]})})})})})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"item",children:Object(l.jsx)("div",{className:"left",children:Object(l.jsx)("div",{className:"leftContainer",children:Object(l.jsxs)("div",{className:"card-two",children:[Object(l.jsx)("h2",{onClick:function(){return i(!c)},children:"Skills."}),Object(l.jsx)("h3",{children:"Languages:"}),Object(l.jsx)("p",{children:"Ruby, JavaScript (ES6), CSS3 (SCSS), HTML5."}),Object(l.jsx)("h3",{children:"Methods & Tools:"}),Object(l.jsx)("p",{children:"Webpack, NPM, Yarn, Git, Heroku, OOP."}),Object(l.jsx)("h3",{children:"Frameworks & Libs:"}),Object(l.jsx)("p",{children:"React, jQuery, Node, Rails, Bootstrap."})]})})})})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"item",children:Object(l.jsx)("div",{className:"left",children:Object(l.jsxs)("div",{className:"leftContainer",children:[Object(l.jsx)("div",{className:"alignContainer"}),Object(l.jsxs)("p",{className:"mediaText",children:[Object(l.jsx)("h2",{onClick:function(){return i(!c)},children:"Interests."}),"My hobbies include",Object(l.jsx)("a",{href:"http://www.danielcookingblog.me/",children:" Cooking"}),",",Object(l.jsx)("a",{href:"https://github.com/dcurtis95",children:Object(l.jsx)("code",{children:" Coding"})}),",",Object(l.jsx)("a",{href:"https://www.swingpatrol.co.uk/",children:" Dancing"}),",",Object(l.jsx)("a",{href:"https://boardgamegeek.com/collection/user/Kerze",children:" Board Games "}),"and",Object(l.jsx)("a",{href:"https://soundcloud.com/a-fluffy-sheep/tracks",children:" Music"}),":"]}),Object(l.jsx)("div",{className:"s-container",children:Object(l.jsx)(g,{})})]})})})})]}),Object(l.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"arrow",onClick:function(){return b("left")}}),Object(l.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"arrow",onClick:function(){return b("right")}})]})}var N=c(12);c(47);function w(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(!1),a=Object(r.a)(n,2),o=a[0],j=a[1],d=Object(s.useRef)();return Object(l.jsx)("div",{className:"contact "+(c&&"active"),id:"contact",children:Object(l.jsx)("div",{className:"item",children:Object(l.jsxs)("div",{className:"right",children:[Object(l.jsx)("h2",{onClick:function(){return i(!c)},children:"Contact."}),Object(l.jsxs)("form",{ref:d,onSubmit:function(e){e.preventDefault(),N.a.sendForm("service_rlplb9b","template_drioq9b",d.current,"user_UTUIbQjFoKO7fyoi9L1tE").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),j(!0)},children:[Object(l.jsx)("input",{type:"text",placeholder:"Name",name:"name"}),Object(l.jsx)("input",{type:"text",placeholder:"Subject",name:"subject"}),Object(l.jsx)("input",{type:"text",placeholder:"Email",name:"email"}),Object(l.jsx)("textarea",{placeholder:"Message",name:"message"}),Object(l.jsx)("button",{type:"submit",value:"Send",children:"Send"}),o&&Object(l.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})})})}c(48),c(49);function k(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(l.jsx)("div",{className:"menu "+(t&&"active"),children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#intro",children:"Home"})}),Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#works",children:"Works"})}),Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#aboutme",children:"About Me"})}),Object(l.jsx)("li",{onClick:function(){return c(!1)},children:Object(l.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var C=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(!1),a=Object(r.a)(n,2),j=a[0],b=a[1];return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{menuOpen:c,setMenuOpen:i}),Object(l.jsx)(k,{menuOpen:c,setMenuOpen:i}),Object(l.jsxs)("div",{className:"sections",children:[Object(l.jsx)(d,{eyeClosed:j,setEyeClosed:b}),Object(l.jsx)(m,{}),Object(l.jsx)(p,{}),Object(l.jsx)(v,{}),Object(l.jsx)(w,{})]})]})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.dd885e17.chunk.js.map
(this.webpackJsonpmagic8ball=this.webpackJsonpmagic8ball||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(11),r=c.n(s),l=c(14),i=c(2),o=c.p+"static/media/logo.81637688.png",b=c(6),j=c(1);var u=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=null,n=Object(a.useState)("Magic is everywhere!"),s=Object(b.a)(n,2),r=s[0],l=s[1];return Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center w-50 h-50 mt-4",children:[Object(j.jsx)("div",{className:"mw-75 text-center text-white",style:{fontSize:"20px"},children:r}),Object(j.jsx)("input",{ref:e,type:"text",className:"mw-75 bg-white mt-2 form-control",placeholder:"Type Question Here...",style:{fontSize:"20px"},"aria-label":"Input where user question is written","aria-describedby":"inputGroup-sizing-default"}),Object(j.jsx)("button",{ref:t,onClick:function(){e.current.value.match(/^[A-Za-z'0-9 ]+[?]/)?(t.current.style.animation="wiggle .5s",c=e.current.value,fetch("https://8ball.delegator.com/magic/JSON/"+c).then((function(e){return e.json()})).then((function(e){l(e.magic.answer),localStorage.setItem(c,e.magic.answer),t.current.style.animation="none"})).catch((function(e){console.log(e),l("Error Occurred, Try Again")}))):l("Incorrect Question Syntax, Try Again")},className:"btn mt-1 mt-sm-4","aria-label":"Button to submit user question",style:{fontSize:"20px",backgroundColor:"#f25f25"},children:"Submit!"}),Object(j.jsx)("a",{href:"/history",className:"btn mt-1 mt-sm-4",role:"button","aria-label":"Button to see last searched question on a new page",style:{fontSize:"20px",backgroundColor:"#25b8f2"},children:"History"})]})};var d=function(){return Object(j.jsxs)("div",{className:"d-flex flex-column w-100 h-75 align-items-center pt-0 pt-sm-4",children:[Object(j.jsx)("h1",{children:"Magic 8-Ball"}),Object(j.jsx)("img",{className:"h-50",src:o,alt:"logo"}),Object(j.jsx)(u,{})]})},m=c(15);var h=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(e){return{Table:e}}),[c]);var s=Object.entries(Object(m.a)({},localStorage)).map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e[0]}),Object(j.jsxs)("td",{children:[e[1],Object(j.jsx)("span",{onClick:function(){return t=e[0],localStorage.removeItem(t),void n(!c);var t},className:"text-danger close pb-1",type:"button","aria-hidden":"true","aria-label":"Close",children:"\xd7"})]})]},t)}));return Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center w-75 h-100 mt-1 mt-sm-4 table-responsive",children:[Object(j.jsx)("div",{className:"w-75 h-75",style:{overflow:"auto",minHeight:"100px"},children:Object(j.jsxs)("table",{className:"table table-striped table-dark rounded text-white",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"w-50",scope:"col",children:"Question"}),Object(j.jsx)("th",{className:"w-50",scope:"col",children:"Response"})]})}),Object(j.jsx)("tbody",{children:0===localStorage.length?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"No Data"}),Object(j.jsx)("td",{children:"No Data"})]}):s})]})}),Object(j.jsx)("a",{href:"/",className:"btn mw-25 w-50 mt-1 mt-sm-4",role:"button","aria-label":"Button to go back to the homepage",style:{fontSize:"20px",backgroundColor:"#25b8f2"},children:"Home"})]})};var x=function(){return Object(j.jsxs)("div",{className:"d-flex flex-column w-100 h-100 align-items-center pt-0 pt-sm-4",children:[Object(j.jsx)("h1",{children:"History"}),Object(j.jsx)("img",{className:"h-25",src:o,alt:"logo"}),Object(j.jsx)(h,{})]})};var O=function(){return Object(j.jsx)("div",{className:"vw-100 vh-100 text-black",style:{backgroundImage:"radial-gradient(circle,#585858 20%,#f25f25  32%,#25b8f2  90%)"},children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/Magic8BallV2.0/history",component:x}),Object(j.jsx)(i.a,{component:d})]})})})};c(29);r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.645d16c7.chunk.js.map
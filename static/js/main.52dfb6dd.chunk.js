(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/golfing.28d0ed5a.jpg"},function(e,t,c){var a={"./24chains.jpg":15,"./budgettracker.jpg":16,"./onestopjob.jpg":17,"./runbuddy.jpg":18,"./socialnetworkapi.jpg":19,"./workdayscheduler.jpg":20};function s(e){var t=r(e);return c(t)}function r(e){if(!c.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id=14},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/24chains.2e7780e6.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/budgettracker.79414a79.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/onestopjob.4e567f07.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/runbuddy.e7615a3e.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/socialnetworkapi.fc5cef9e.jpg"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/workdayscheduler.cb55a0e8.jpg"},function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),r=c.n(s),i=c(6),n=c.n(i),o=(c(12),c(2));var l=function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"About"}),Object(a.jsx)("p",{children:"Welcome to my portfolio! Currently I am enrolled in a full stack web development bootcamp through the University of Wisconsin Extended Campus. I graduated from UW-Whitewater in 2016 with my BBA in Information Technology and after graduating completed contract work as a Business Analyst and Quality Assurance Analyst. After working as a Buyer at a small computer manufacturer for two years I decided I wanted to become a full stack web developer. My hobbies include golf, snowboarding, weightlifting and (when I buy another bike) riding motorcycles!"}),Object(a.jsx)("img",{className:"about-img",src:c(13).default,alt:"asutin golfing"},"golfing")]})};var u=function(e){return Object(a.jsxs)("header",{className:"flex-row",children:[Object(a.jsx)("h1",{className:"title",children:"Austin Price"}),Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{className:"flex-row",children:["About","Portfolio","Contact","Resume"].map((function(t){return Object(a.jsx)("li",{className:"nav-button",children:Object(a.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.setCurrentSection(t)},className:e.currentSection===t?"nav-link active":"nav-link",children:t})},t)}))})})]})};var j=function(){var e=Object(s.useState)([{title:"One Stop Job",github:"https://github.com/frostyausty/OneStopJob",deploy:"https://frostyausty.github.io/OneStopJob/",file:"onestopjob"},{title:"24-Chains",github:"https://github.com/MarynaPR/24-chains",deploy:"https://dry-mesa-09626.herokuapp.com/",file:"24chains"},{title:"Social Network API",github:"https://github.com/frostyausty/SocialNetworkAPI",deploy:"https://drive.google.com/file/d/1DSmmW3wcOSMIHGgTM-hmHJlOLBEVSFz_/view",file:"socialnetworkapi"},{title:"Budget Tracker",github:"https://github.com/frostyausty/BudgetTracker",deploy:"https://pure-thicket-17207.herokuapp.com/",file:"budgettracker"},{title:"Work Day Scheduler",github:"https://github.com/frostyausty/WorkDayScheduler",deploy:"https://frostyausty.github.io/WorkDayScheduler/",file:"workdayscheduler"},{title:"Run Buddy",github:"https://github.com/frostyausty/run-buddy",deploy:"https://frostyausty.github.io/run-buddy/",file:"runbuddy"}]),t=Object(o.a)(e,1)[0];return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"Projects"}),Object(a.jsx)("div",{className:"project-container",children:t.map((function(e,t){return Object(a.jsxs)("div",{className:"project project-".concat(t+1),children:[Object(a.jsx)("h3",{children:e.title}),Object(a.jsx)("a",{className:"gitlink",href:e.github,children:"GitHub Repo"}),Object(a.jsx)("a",{className:"applink",href:e.deploy,children:"Live application"}),Object(a.jsx)("img",{src:c(14)("./".concat(e.file,".jpg")).default,alt:e.title,className:"project-img"},t)]},e.title)}))})]})},d=c(3),b=c(5);var h=function(){var e=Object(s.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),c=t[0],r=t[1],i=Object(s.useState)(""),n=Object(o.a)(i,2),l=n[0],u=n[1],j=c.name,h=c.email,f=c.message;function m(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),u(t?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."))}return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{"data-testid":"h1tag",children:"Contact me"}),Object(a.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||r(Object(b.a)(Object(b.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))},children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(a.jsx)("input",{type:"text",defaultValue:j,onBlur:m,name:"name"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(a.jsx)("input",{type:"email",defaultValue:h,name:"email",onBlur:m})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(a.jsx)("textarea",{name:"message",defaultValue:f,onBlur:m,rows:"5"})]}),l&&Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:"error-text",children:l})}),Object(a.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"}),Object(a.jsx)("h4",{children:"Email: aaprice2@gmail.com"}),Object(a.jsx)("h4",{children:"Phone: 920-253-6662"})]})]})},f=c.p+"static/media/AustinPriceResume.e71f609f.docx";var m=function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{children:"List of proficiencies / Resume"}),Object(a.jsxs)("p",{children:[Object(a.jsx)("h3",{children:"Frameworks"}),"-Express.js ",Object(a.jsx)("br",{}),"-jQuery ",Object(a.jsx)("br",{}),"-React.js ",Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"Languages"}),"-Javascript ",Object(a.jsx)("br",{}),"-CSS ",Object(a.jsx)("br",{}),"-SQL ",Object(a.jsx)("br",{}),Object(a.jsx)("h3",{children:"Databases"}),"-MongoDB ",Object(a.jsx)("br",{}),"-MySQL ",Object(a.jsx)("br",{})]}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{className:"a-resume",href:f,target:"_blank",rel:"noreferrer",download:"AustinPrice_Resume",children:"Download Resume"})]})};var p=function(){return Object(a.jsxs)("footer",{children:[Object(a.jsx)("a",{href:"https://github.com/frostyausty",className:"fa fa-github",alt:"github profile"},"github"),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/austinaprice/",className:"fa fa-linkedin",alt:"linkedin profile"},"linkedin")]})};var g=function(){var e=Object(s.useState)("About"),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(a.jsx)(u,{currentSection:c,setCurrentSection:r}),Object(a.jsx)("main",{children:function(){switch(c){default:case"About":return Object(a.jsx)(l,{});case"Portfolio":return Object(a.jsx)(j,{});case"Contact":return Object(a.jsx)(h,{});case"Resume":return Object(a.jsx)(m,{})}}()}),Object(a.jsx)(p,{})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),r(e),i(e)}))};n.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),O()}],[[21,1,2]]]);
//# sourceMappingURL=main.52dfb6dd.chunk.js.map
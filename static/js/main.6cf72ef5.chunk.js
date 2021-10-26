(this.webpackJsonpsaturday=this.webpackJsonpsaturday||[]).push([[0],{13:function(e,t,c){},19:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),gsap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),react_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__),Quiz=function Quiz(props){var completed=[],points=0,change_bg_counter=0,question=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),a=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),b=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),c=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),d=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),questionaire_limit=5,list_of_questions=["Saturday 1G Blood Orange","Saturday Blood Orange is priced perfectly for which on-the-go shopper?","When speaking about the 1G Blood Orange product, Id start with:","Orange flavour can be difficult to nail, but Saturday's Blood Orange has done so beautifully because:","5. I\u2019d Recommend Saturday 7G Sweet & Sour Ready To Roll to a shopper in a situation where:"],history=Object(react_router__WEBPACK_IMPORTED_MODULE_2__.f)(),set_forth_div=["false"];Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){randList()}),[]);var randList=function e(){gsap__WEBPACK_IMPORTED_MODULE_1__.a.to(".green_bg",{backgroundColor:"#535938",duration:0});if(completed.length>=questionaire_limit)points<4?(localStorage.setItem("points",points),history.push("/points")):history.push("/data-capture");else{var t=Math.round(4*Math.random()),n=completed.find((function(e){return e==t}));if(n||0===n)e();else switch(completed.push(t),question.current.textContent=list_of_questions[t],console.log(completed),t){case 0:a.current.textContent="Is a Hybriid Offering",b.current.textContent="Is an Indica",c.current.textContent="Is a Sativa",d.current.textContent="All the above";break;case 1:a.current.textContent="Price Sensitive",b.current.textContent="High End",c.current.textContent="Mainstream",d.current.textContent="All the above";break;case 2:a.current.textContent="The Brand",b.current.textContent="The Value",c.current.textContent="The Potency",d.current.textContent="The Flavour";break;case 3:a.current.textContent="It's crafted with terpenes and other aromatic compounds native to both oranges and cannabis",b.current.textContent="It's all limonene, which is the only citrus aromatic you need",c.current.textContent="We hired the Keebler elves.",d.current.textContent="All the above";break;case 4:a.current.textContent="An experienced or occasional cannabis shopper who is seeking a smooth, high-THC joint-smoking experience and values the dollars in their pocket.",b.current.textContent="A shopper who is new to cannabis or is re-entering the category after many years, and is looking for a balanced offering.",c.current.textContent="An experienced or occasional smoker who is looking for a tasty, high-THC experience while they\u2019re on-the-go that won\u2019t break the bank",d.current.textContent="An occasional smoker who is looking for edibles."}}},selectved_answer=function selectved_answer(selected_data){switch(gsap__WEBPACK_IMPORTED_MODULE_1__.a.to(".".concat(selected_data),{backgroundColor:"#40473F",duration:.5}),completed[completed.length-1]){case 0:"c"===selected_data?(c.current.textContent="Correct",points++,change_bg_counter++,console.log("updated points: ".concat(points))):(change_bg_counter++,eval(selected_data).current.textContent="Correct");break;case 1:"a"===selected_data?(a.current.textContent="Correct",points++,change_bg_counter++,console.log("updated points: ".concat(points))):(change_bg_counter++,eval(selected_data).current.textContent="Incorrect");break;case 2:"d"===selected_data?(d.current.textContent="Correct",points++,change_bg_counter++,console.log("updated points: ".concat(points))):(change_bg_counter++,eval(selected_data).current.textContent="Incorrect");break;case 3:"b"===selected_data?(b.current.textContent="Correct",points++,change_bg_counter++,console.log("updated points: ".concat(points))):(change_bg_counter++,eval(selected_data).current.textContent="Incorrect");break;case 4:"c"===selected_data?(c.current.textContent="Correct",points++,change_bg_counter++,console.log("updated points: ".concat(points))):(change_bg_counter++,eval(selected_data).current.textContent="Incorrect")}setTimeout((function(){randList()}),1e3)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"Prizing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"quiz_holder",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"title_holder",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{ref:question})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"answer_list",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"green_bg a",onClick:function(){return selectved_answer("a")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"ans",ref:a})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"green_bg b",onClick:function(){return selectved_answer("b")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"ans",ref:b})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"green_bg c",onClick:function(){return selectved_answer("c")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"ans",ref:c})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"true"==set_forth_div?"displayNone":"green_bg d",onClick:function(){return selectved_answer("d")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"ans",ref:d})})]})]})})};__webpack_exports__.a=Quiz},25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(17),s=c.n(r),i=(c(25),c(20)),o=c(2),l=c(8),A=(c(26),c(0)),d=(new Date).getFullYear()-19,_=function(e){var t=Object(o.f)(),c=Object(n.useState)({style:{backgroundColor:"".concat(e.color),border:"none",display:"flex",alignItems:"center",justifyContent:"center"},link:""}),a=Object(l.a)(c,1)[0];return Object(A.jsxs)("button",{onClick:function(){console.log(d),console.log(e.verifyAge),e.verifyAge<d&&t.push(e.link),e.verifyAge>d&&window.location.replace("https://www.gotmilk.com/"),void 0==e.verifyAge&&t.push(e.link)},style:a.style,className:"next_btn ".concat(e.class),children:["NEXT ",Object(A.jsx)("img",{id:"next_image",src:e.image,alt:""})]})},j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAdCAYAAAD7En+mAAAABHNCSVQICAgIfAhkiAAAAmhJREFUWEfNmL9rFEEUx28lkMI/wM4ySWOrIIZEYoxYBAvRws7OytgZSTAkaLrYqY2djRGxNY0hoCAKFiqoRVLYWOSnwfwgzfl5YU42d3u7b2bfbLIwzN3ud77vffa9uVs2qdfrE7Va7T7D4ljBpCdJktVQM/I5wdpFxvFQj6Z1klNvIicxn2QaNzJ+CuitUC9yecHaa6HrMyGT5Mc+aATY08B+8k0WyDOs+eC7ro1+mfN95PFdrv8HdbDTzHcNAv3C4xRBNrVeQHai/cLo0q7J0a1x7SzxfzY0B0Ad7BTzmEGwtwQa0PoA+hztDa0+R7fuKvk1rWkBdbAPmO8ZBJ0F9nqRD5CjaB4W6RTXpZL9xDwA2dK6aSOCW7XxAr5XCL6RlahhHIGUPfktK05mRRtCwyR+43mbJF6mvE/yWdq1V1GpIskfBOfaQeZWNJWQtJS0lsWxhMkbRjdDvX8LAssP3nkgP+fpcisaobIWNyvtseUgC//KVKDiTBs/YhqxzrSE31/pCir5UeOhBj1isF6Qqj3afLeOQGW9IYNAD7myQZDBoIcEGwxZCrRi2FKQpUErgi0NaQIaGdYE0gw0EqwZpCmoMewOfoM8DLzXPAxoNF4PDBpD/mdn0N3RaNtotjk/BOS7Eh4tS81BXWUfM4e8NxLIi5aVbBBHAXWwz5hvelRlF+2FGJDme7QZijbWwgrkZSDnPW6MlzRaRRtZKN4FRYeMXlHXwnIzZxlXM0pQCWQloA72GLO8mE7D7vH9Usx2Td/Y6K2bamGBfc0YZgjkMJBzXhuthLgyUFfZDuZXjCdAyrujyo5/HyvaQ3ebpMMAAAAASUVORK5CYII=",b=c(6),u=(c(13),function(e){var t=[],c=[],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=Object(n.useRef)(null),s=Object(n.useState)({title:"",data:[]}),i=Object(l.a)(s,2),o=i[0],d=i[1],u=Object(n.useState)(!0),h=Object(l.a)(u,2),O=h[0],g=h[1],m=Object(n.useState)(),x=Object(l.a)(m,2),C=x[0],E=x[1],p=Object(n.useState)(),f=Object(l.a)(p,2),I=f[0],B=f[1],w=Object(n.useState)(),N=Object(l.a)(w,2),v=N[0],D=N[1],M=function e(n,a,r){n!=a&&(n+=1,"y"==r&&c.push(n),"d"==r&&t.push(n),e(n,a,r))};M(1900,2021,"y"),M(0,31,"d");var R=function(e,t){O&&("day"==e&&b.a.to(".dayArrow",{rotation:"+=-90",duration:.3}),"month"==e&&b.a.to(".monthArrow",{rotation:"+=-90",duration:.3}),"year"==e&&b.a.to(".yearArrow",{rotation:"+=-90",duration:.3}),b.a.to(".sidebar",{width:"70px",duration:.3}),d({title:e,data:t}),g(!O)),O||("day"==e&&b.a.to(".dayArrow",{rotation:"+=90",duration:.3}),"month"==e&&b.a.to(".monthArrow",{rotation:"+=90",duration:.3}),"year"==e&&b.a.to(".yearArrow",{rotation:"+=90",duration:.3}),b.a.to(".sidebar",{width:"0px",duration:.3}),d({title:"",data:[]}),g(!O))};return Object(n.useEffect)((function(){}),[]),Object(A.jsx)("div",{className:"home_bg",children:Object(A.jsxs)("div",{id:"landing_wrapping",children:[Object(A.jsxs)("div",{className:"sidebar",children:[Object(A.jsx)("div",{className:"title",children:Object(A.jsx)("h4",{style:{color:"white"},children:o.title.toUpperCase()})}),Object(A.jsx)("ul",{children:o.data.map((function(e,t){return Object(A.jsx)("li",{className:"opitons_list",name:o.title,onClick:function(){!function(e,t){"day"==e&&E(t),"month"==e&&B(t),"year"==e&&D(t),O||(b.a.to(".sidebar",{width:"0px",duration:.3}),d({title:"",data:[]}),g(!O))}(o.title,e)},children:e},t)}))})]}),Object(A.jsx)("h1",{style:{color:"white"},children:"PLEASE VERIFY YOUR AGE "}),Object(A.jsxs)("div",{id:"dob_capture",children:[Object(A.jsxs)("div",{className:"select_container marg_10",children:[Object(A.jsx)("div",{className:"box",children:Object(A.jsx)("select",{ref:r,value:C,id:"test_click",children:t.map((function(e,t){return Object(A.jsx)("option",{className:"opitons",children:e},t)}))})}),Object(A.jsx)("div",{className:"bb-container ",children:Object(A.jsx)("div",{className:"blackBox",onClick:function(){R("day",t)},children:Object(A.jsx)("img",{className:"downarrow dayArrow",src:j,alt:"down-arrow"})})})]}),Object(A.jsxs)("div",{className:"select_container",children:[Object(A.jsx)("select",{value:I,children:a.map((function(e,t){return Object(A.jsx)("option",{className:"opitons",children:e},t)}))}),Object(A.jsx)("div",{className:"bb-container",children:Object(A.jsx)("div",{className:"blackBox",onClick:function(){R("month",a)},children:Object(A.jsx)("img",{className:"downarrow monthArrow",src:j,alt:"down-arrow"})})})]}),Object(A.jsxs)("div",{className:"select_container ",children:[Object(A.jsx)("select",{value:v,children:c.map((function(e,t){return Object(A.jsx)("option",{className:"opitons",children:e},t)}))}),Object(A.jsx)("div",{className:"bb-container",children:Object(A.jsx)("div",{className:"blackBox",onClick:function(){R("year",c)},children:Object(A.jsx)("img",{className:"downarrow yearArrow",src:j,alt:"down-arrow"})})})]}),Object(A.jsx)("div",{id:"next_btn_landing",children:Object(A.jsx)(_,{verifyAge:v,color:"#E14925",link:"/roomba-prize"})})]})]})})}),h=c.p+"static/media/Saturday.1909c810.mp4",O=function(e){var t=Object(o.f)();return Object(n.useEffect)((function(){setTimeout((function(){t.push("/blood-orange")}),9e3)}),[]),Object(A.jsx)("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,children:Object(A.jsx)("source",{src:h,type:"video/mp4"})})},g=(c(33),"data:image/png;base64,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"),m=c.p+"static/media/sour.cbda50ee.svg",x=function(e){return Object(A.jsxs)("div",{className:"Prizing",children:[Object(A.jsxs)("div",{className:"titleContainer",children:[Object(A.jsx)("h1",{className:"blood_orange_h1",children:"SWEET"}),Object(A.jsx)("h1",{className:"blood_orange_h1 Title2",children:"& SOUR"}),Object(A.jsx)("h5",{className:"blood_orange_h1 ROR",children:"READY-TO-ROLL"})]}),Object(A.jsx)("div",{id:"next_btn_green",children:Object(A.jsx)(_,{image:g,link:"/instructions"})}),Object(A.jsxs)("div",{className:"columns_holder",children:[Object(A.jsx)("div",{className:"shared_width left-content",children:Object(A.jsx)("p",{style:{fontSize:"13px"},children:"Our Sweet & Sour Sativa Ready-to-Roll is made with milled whole flower, never shake or trim, packed with a sour punch and fruity citrus aromas."})}),Object(A.jsx)("div",{children:Object(A.jsx)("img",{id:"sourBag",src:m,alt:""})}),Object(A.jsxs)("div",{className:"shared_width",children:[Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"SATIVA"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"THC 19-25%"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"CBD 0-1%"})]}),Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"AROMA & FLAVOURS"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"Mint Earthy Sour"})]}),Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"CASE-COUNT"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"4 Units"})]}),Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"WEEKLY SUGGESTED ORDER"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"5 Cases"})]}),Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"LICENSED PRODUCER"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"WeedMD Rx Inc."})]})]})]})]})},C=c.p+"static/media/vape-pen.29429644.svg",E=function(e){return Object(A.jsxs)("div",{className:"Prizing bloodOrangeBg",children:[Object(A.jsxs)("div",{className:"columns_holder",children:[Object(A.jsx)("div",{className:"shared_width left-content",children:Object(A.jsxs)("div",{className:"shared_width",children:[Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("h1",{className:"blood_orange_h1",children:"BLOOD"}),Object(A.jsx)("h1",{className:"blood_orange_h1 Title2",children:"ORANGE"}),Object(A.jsx)("h5",{className:"blood_orange_h1 ROR",children:"1G 510 CARTRIDGE"})]}),Object(A.jsx)("div",{className:"info_container",children:Object(A.jsx)("p",{className:"margin_zero",style:{fontSize:"13px"},children:"Blood Orange by Saturday is the sweet and juicy with a tangy zip and touch of floral pine. Enjoy a crisp twist on citrus."})}),Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"SATIVA"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"THC 19-25%"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"CBD 0-1%"})]}),Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"AROMA & FLAVOURS"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"Mint Earthy Sour"})]}),Object(A.jsxs)("div",{className:"info_container",children:[Object(A.jsx)("p",{className:"margin_zero",children:"LICENSED PRODUCER"}),Object(A.jsx)("p",{className:"margin_zero thin",children:"WeedMD Rx Inc."})]})]})}),Object(A.jsx)("div",{children:Object(A.jsx)("img",{id:"vapePen",src:C,alt:""})})]}),Object(A.jsx)("div",{id:"next_btn_",children:Object(A.jsx)(_,{link:"/quiz",color:"#535938"})})]})},p=c(19),f=function(e){localStorage.getItem("points");var t=Object(o.f)();return Object(A.jsx)("div",{className:"Prizing",children:Object(A.jsxs)("form",{className:"form_collection",onSubmit:function(e){e.preventDefault(),t.push("/blood-orange")},children:[Object(A.jsx)("div",{className:"labels",children:Object(A.jsx)("label",{htmlFor:"fullname",children:"Full Name"})}),Object(A.jsx)("input",{className:"inputs",type:"text",id:"fullname",name:"fullname",placeholder:"Fullname"}),Object(A.jsx)("div",{className:"labels",children:Object(A.jsx)("label",{htmlFor:"email",children:"Email"})}),Object(A.jsx)("input",{className:"inputs",type:"email",id:"email",name:"email",placeholder:"email"}),Object(A.jsx)("div",{className:"labels",children:Object(A.jsx)("label",{htmlFor:"store",children:"Store #"})}),Object(A.jsx)("input",{className:"inputs",type:"text",id:"store",name:"store",placeholder:"store"}),Object(A.jsx)("input",{type:"submit",id:"submit_btn",value:"SUBMIT"})]})})},I=c.p+"static/media/guitar.53634a63.svg",B=function(e){return Object(A.jsxs)("div",{className:"Prizing noOverflow",children:[Object(A.jsx)("div",{id:"next_btn_green",children:Object(A.jsx)(_,{image:g,link:"/Quiz"})}),Object(A.jsx)("div",{id:"ball_layer"}),Object(A.jsx)("div",{id:"guitar_layer",children:Object(A.jsx)("img",{id:"guitar",src:I,alt:""})}),Object(A.jsx)("p",{id:"instruction_context",children:"ANSWER CORRECTLY ON THIS QUICK QUIZ FOR A CHANCE TO WIN A SATURDAY PARTY FOR YOUR STORE"})]})},w=c.p+"static/media/roomba-bg.539f4665.png",N=function(e){return Object(A.jsxs)("div",{className:"Roomba_page",children:[Object(A.jsx)("img",{className:"roomba-bg",src:w,alt:"bg"}),Object(A.jsx)("h2",{className:"roomba_header_text",children:"ANSWER CORRECTLY ON THIS QUICK QUIZ FOR A CHANCE TO WIN A SATURDAY ROOMBA!"}),Object(A.jsx)("div",{id:"next_btn_",children:Object(A.jsx)(_,{link:"/educational-video",color:"#D9442A"})})]})},v=c.p+"static/media/updated-romba.917d291b.png",D=function(e){Object(o.f)();var t=localStorage.getItem("points");return Object(n.useEffect)((function(){}),[]),Object(A.jsxs)("div",{className:"points_container",children:[Object(A.jsx)("img",{className:"points_page",src:v,alt:"points"}),Object(A.jsx)("div",{className:"messaging_for_points",children:Object(A.jsxs)("h2",{className:"msg_text",children:["YOU GOT ",t,"/5 NOT QUITE ENOUGH! TRY AGAIN FOR YOUR CHANCE TO WIN!"]})}),Object(A.jsx)("div",{id:"next_btn_",children:Object(A.jsx)(_,{link:"/quiz",color:"#D9442A"})})]})};var M=function(){return Object(A.jsx)(i.a,{basename:"/saturday",children:Object(A.jsxs)(o.c,{children:[Object(A.jsx)(o.a,{path:"/",exact:!0,strict:!0,component:u}),Object(A.jsx)(o.a,{path:"/points",exact:!0,strict:!0,component:D}),Object(A.jsx)(o.a,{path:"/roomba-prize",exact:!0,strict:!0,component:N}),Object(A.jsx)(o.a,{path:"/educational-video",exact:!0,strict:!0,component:O}),Object(A.jsx)(o.a,{path:"/prizing",exact:!0,strict:!0,component:x}),Object(A.jsx)(o.a,{path:"/blood-orange",exact:!0,strict:!0,component:E}),Object(A.jsx)(o.a,{path:"/Quiz",exact:!0,strict:!0,component:p.a}),Object(A.jsx)(o.a,{path:"/data-capture",exact:!0,strict:!0,component:f}),Object(A.jsx)(o.a,{path:"/instructions",exact:!0,strict:!0,component:B})]})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(M,{})}),document.getElementById("root")),R()}},[[34,1,2]]]);
//# sourceMappingURL=main.6cf72ef5.chunk.js.map
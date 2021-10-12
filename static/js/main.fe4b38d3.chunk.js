(this.webpackJsonpsaturday=this.webpackJsonpsaturday||[]).push([[0],{11:function(e,t,n){},18:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),gsap__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),react_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__),Quiz=function Quiz(props){var completed=[],points=0,question=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),a=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),b=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),c=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),d=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),questionaire_limit=5,list_of_questions=["Saturday 7G Sweet & Sour Ready-to-Roll:","Saturday 7G Sweet & Sour Ready-to-Roll is coming in what THC%?","When speaking about the 1G Blood Orange roduct, Id start with:","I\u2019d Recommend Saturday Blood Orange to a shopper in a situation where","5. I\u2019d Recommend Saturday 7G Sweet & Sour Ready To Roll to a shopper in a situation where:"],history=Object(react_router__WEBPACK_IMPORTED_MODULE_2__.f)();Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){randList()}),[]);var randList=function e(){gsap__WEBPACK_IMPORTED_MODULE_1__.a.to(".green_bg",{backgroundColor:"#535938",duration:0});if(completed.length>=questionaire_limit)localStorage.setItem("points",points),setTimeout((function(){history.push("/")}),500);else{var t=Math.round(4*Math.random()),n=completed.find((function(e){return e==t}));if(n||0===n)e();else switch(completed.push(t),question.current.textContent=list_of_questions[t],console.log(completed),t){case 0:a.current.textContent="Is a Sativa Offering",b.current.textContent="Is an Indica Offering",c.current.textContent="Is a Hybrid Offering",d.current.textContent="";break;case 1:a.current.textContent="11%-15%",b.current.textContent="16%-20%",c.current.textContent="20%+",d.current.textContent="";break;case 2:a.current.textContent="The Flavour",b.current.textContent="The Value",c.current.textContent="The Brand",d.current.textContent="The Convenience of 510 Carts";break;case 3:case 4:a.current.textContent="An experienced or occasional cannabis shopper who is seeking a smooth, high-THC joint-smoking experience and values the dollars in their pocket.",b.current.textContent="A shopper who is new to cannabis or is re-entering the category after many years, and is looking for a balanced offering.",c.current.textContent="An experienced or occasional smoker who is looking for a tasty, high-THC experience while they\u2019re on-the-go that won\u2019t break the bank",d.current.textContent="An occasional smoker who is looking for edibles."}}},selectved_answer=function selectved_answer(selected_data){switch(gsap__WEBPACK_IMPORTED_MODULE_1__.a.to(".".concat(selected_data),{backgroundColor:"black",duration:.5}),console.log("selected data: ".concat(selected_data," Last_item in completed list: ").concat(completed[completed.length-1],")")),completed[completed.length-1]){case 0:"a"===selected_data?(a.current.textContent="Correct",points++,console.log("updated points: ".concat(points))):eval(selected_data).current.textContent="Correct";break;case 1:"b"===selected_data?(b.current.textContent="Correct",points++,console.log("updated points: ".concat(points))):eval(selected_data).current.textContent="Incorrect";break;case 2:"c"===selected_data?(c.current.textContent="Correct",points++,console.log("updated points: ".concat(points))):eval(selected_data).current.textContent="Incorrect";break;case 3:"d"===selected_data?(d.current.textContent="Correct",points++,console.log("updated points: ".concat(points))):eval(selected_data).current.textContent="Incorrect";break;case 4:"c"===selected_data?(c.current.textContent="Correct",points++,console.log("updated points: ".concat(points))):eval(selected_data).current.textContent="Incorrect"}setTimeout((function(){randList()}),1500)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"Prizing",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"quiz_holder",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"title_holder",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{ref:question})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"answer_list",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"green_bg a",onClick:function(){return selectved_answer("a")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"ans",ref:a})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"green_bg b",onClick:function(){return selectved_answer("b")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"ans",ref:b})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"green_bg c",onClick:function(){return selectved_answer("c")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"ans",ref:c})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"green_bg d",onClick:function(){return selectved_answer("d")},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"ans",ref:d})})]})]})})};__webpack_exports__.a=Quiz},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),A=n.n(c),a=n(16),i=n.n(a),s=(n(25),n(19)),r=n(2),o=n(20),l=(n(26),n(0)),d=function(e){var t=Object(r.f)(),n=Object(c.useState)({style:{backgroundColor:"#5E643E",border:"none",display:"flex",alignItems:"center",justifyContent:"center"},link:""}),A=Object(o.a)(n,1)[0];return Object(l.jsxs)("button",{onClick:function(){t.push(e.link)},style:A.style,className:"next_btn ".concat(e.class),children:["NEXT ",Object(l.jsx)("img",{id:"next_image",src:e.image,alt:""})]})},_=(n(11),function(e){return Object(l.jsxs)("div",{className:"home_bg",children:[Object(l.jsx)("div",{id:"next_btn_holder",children:Object(l.jsx)(d,{image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAADSCAYAAABjPx8jAAABRGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8rAwSAJxBYMJonJxQWOAQE+QCUMMBoVfLvGwAiiL+uCzOpcwrd019p0f+P0igDHJA4RTPUogCsltTgZSP8B4tTkgqISBgbGFCBbubykAMTuALJFioCOArLngNjpEPYGEDsJwj4CVhMS5Axk3wCyBZIzEoFmML4AsnWSkMTTkdhQe0GA2yNAIcrIPE/B3YiAa8kAJakVJSDaOb+gsigzPaNEwREYSqkKnnnJejoKRgZGhgwMoDCHqP58AxyWjGIcCLHCqwwMFvJAxlOEWOIFBobd6xgYhH8ixJQNGBh4jBkY9vkXJBYlwh3A+I2lOM0Y4jNG7u0MDKzT/v//HM7AwK7JwPD3+v//v7f///93GQMD8y0GhgPfAKQdXn8cD16SAAAAVmVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADkoYABwAAABIAAABEoAIABAAAAAEAAAB/oAMABAAAAAEAAADSAAAAAEFTQ0lJAAAAU2NyZWVuc2hvdGah+x0AAAHWaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjIxMDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMjc8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpVc2VyQ29tbWVudD5TY3JlZW5zaG90PC9leGlmOlVzZXJDb21tZW50PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KG4D77gAACqNJREFUeAHtnVuLHEUUx2t2ZrIxZk0wuhdv4IMab4jig4jX9UVFBUERQfFNIYkaX8zFmHiDPHgXURSjKyIogl/BFy8PgvrgRzCLmN3kQchmjexap3pPZ1i7d6Z3pmvOqfOfh1Rvp6frnP/vdNXp6qqexvQ9ty9/ePqYw8eeAiP2XIbHrADgsxIGS8A3CJ1dBnxWwmAJ+Aahs8uAz0oYLAHfIHR2GfBZCYMl4BuEzi4DPithsAR8g9DZZcBnJQyWgG8QOrsM+KyEwRLwDUJnlwGflTBYAr5B6Owy4LMSBkvANwidXQZ8VsJgCfgGobPLgM9KGCwB3yB0dhnwWQmDJeAbhM4uAz4rYbAEfIPQ2WXAZyUMloBvEDq7DPishMES8A1CZ5cBn5UwWAK+QejsMuCzEgZLwDcInV0GfFbCYAn4BqGzy+Lgb7r+Rjd26zTbh7JGBcTB33jZ1W7qwLsIgBqh86nFwV8+vejcyIibfOFtBABTqqmUB39pKbjaaLbc5L433Nht6AJqYu/Ewe90tNEedZN7EACdmgxyWzR8crSxwQfA3jfRBQyS+sq5xMMPAdDe4KZeeAcBMOAAUAE/+NxsIgk0C987niWBvgtAEjiQMNBz5a+42/BdAJLAgbCXne2XuYgksEyZavvVXfnsXmgBKAlEF8CSVC7VwidPG5QE7sddQGXqK19QDT8PgH1IAtcTAOrhhwDgJBBPAyvFgDz4jUYlB/jgkASiBWA5eirFwW9uGuvJ8KKDQhK4H08Di7Qp2icOfmvb+UV29ryPBoIwH6A3ucTBX17OHun2Zn7JUTQfYN9beBZQIg/vFgefDeu3bLTb/mkgHgevpWOy8MnpbCQQAVAWAEnDDwFAE0L2IQksCoDk4YcAaCEJNAs/OE5J4H6fBOJZQB4HJq589rbR8kkg5gSyHDof6ebWr2MjTwIxFGwPPsVLmBVMXYDxADDV7Hc2FNQFZCOBd3buNrVtFn6gHJJAfxtoNAm0Dd9HQEgCaV2AwQAwD59agDOTQu8KDYKVfwB/hXQ+H8BQEgj4HZf5mSRwumNvupuAv5qtoeXhgL8avv/bysogwC+AT7vyJDDhHADwS+CHAKDl4TQpNNEAAPw14IcAoGnhiS4PB/wu8EMAhOXh6a0MAvwe4OcBkFgXAPg9wg8BQF1AQpNCAb8C/BAACb0jCPArws9bgATeEwj464AfAoDeE6j8LgDw1wk/CwD/fgDFSSDg9wE/BIDiJFAc/EZDnEldwyObFKpvJFCc0v8eP9ZVbIkHZO8I0rUySBz8E99+6U7+8oNEvl1t0rY8XBz8pYUFN/vSsz4Avu8qtsgDeHm4gjmB4uATUAqAowefcSd/+0kk325GheXhtDJI+NNAkfBJ3OXFRXf0wA69ARAeB8teHi4WfhYA//gA2Kk3BwjLw2llkMyFIaLhcwsw+5LvApTmANmk0PdEdgHi4VMALC2c8kngbrUtQPjNIIFrA1XAzwLA3wUcetqd/PVH+lPdJ6wMEvabQWrgE+2lUz4JfNHnAGrvAlZ+M0jIXYAq+BQAy4uUBPq7AK0DQXQXIKQLUAefA2D2ECWBSkcC8+Xh0+TO0D4q4ZNaS6coCVQ+Ekivih3iSKBa+CEAaCiYWgC1SaCfEEJzAoeUA6iGn7UAWRK4oDkJHFIAqIdPAUBJ4B80Eqi1BQhDwfHfEZQE/CwAFt3swV16k0D/ruCpA3EXhiQDn7uA2ZcpCdR5F+BG4v5wZFLwQwCcVD4SGH49PM6UsOTgcwtw9MVdbuH3n+lPdZ8wJYySwFvqfRqYJHyiTfMBjn14WB14NpgmhY7vfsW1x8d518DLZOE32i237fFdAxcs2gmXl92Jbz5xp//6q7Yqk4TfaDXd1J7D7uybpmsTru4Tz336hjv+9ee1VpMk/G1P7HCbb7+3VuHqPHkGfqbOKsK5k4N/7kOPu3Mfeap24eqqYP7TN93xr2Z80lJXDWfO2zqzqX9ry70PuvOe3OPfptRQ6czcEWrqZzz4COS9QsnAP/uGG934roM6wXvYc3TFf/1ZlCuer4wk4J915dXuglc+Cq9PY8fUlAG8v+KpqY/8Ud/ntycm3NSh911jdGNk6QZT3dxnK338YE5X6Syq4RP4i16fca1t9Q2EVFKz4sF5clfxe4M6XG2z3zznHHfBqx+49tQlg9Ii6nnmfXI3HzG5K3JOJfzm2Ji76PDHbvTS7UU+yd43pOSuSBR18GnYdurQO2708muL/JG9j8F/5bN6AR9dfb5f/jy+Y6/bdN1NAqSrbkK4nRMCnqzXA9+P20zseN5tue/R6qoL+EZ+Hy/AFjZBTbO/9f6H3ZYHHmO7VZXz9JAm0pBtFWFUwN9y9wNufKfC0Tvu4yOP3PUaAOLhn3XVNW7iudd8B6WnhwriM3hBffzqoBCt6MYrtrsLDx/x4Jur7Rb/dzZyJyOrLxNLLPz25GQAP7Jpc5ntYveH5/GCr3gWTiT89viEu/jtL11zbCvbqabMh2zjPJXtSxdxfT4N21781heudd5kX45F/zL38UKTuyI9xMHffPMdrjVxYZGtcvcxeAVNfaeI4pp9jY9mpY3cdQJea1sc/LWMlfh/YQCHmnqFH8DvAxold/MCR+56dUlcn9+r4UM9LvTxK/Pq/bbWD+BXJZcndzNVvynueMCviCQbwNEPntxGn18BfqyVNBVM6utQwO9Rvux2bibqvPoeTVv3YWj2u0q3sqAiZPV6k7siNwG/SBXex8mdoiFbNr2XEvBLVeIrXucATqlbHf+BPr9DjM5NiXPuOu0bxDbgF6g4z0uo0uri/+cpmv1VkuT38YpH7la5VPon4LM0iSd37GZnCfikRgA/nGXSnTBib6PP94rnAzix1R9yfebhhzl3tFrW4Md0s08TMbLn8Ymn9SWBbRO+weSuiL89+Axe2WTLInj97jPX52udbNkv6KLvm4JvYci2CHLZPjPws5U0/iGNzdyukH/6fT738Yk+li2k2uPOtOEzeCR3heGQdLOP5K6Qeb4zWfjZyJ3v4/EpVSDJZj+/4pHclYKn/0gLPvfxSO7WhM7/mQ58Bo/kjtl2LZPp8/OmvqvLOIAVSAK+5mXSDGIYpXr42pdJDwM616m3z+c+fsivLWchNZY64TN4JHd9xZzKZh/JXV/M8y+rg58tk8bIXU6wjw1V8K2spOmDZ6WvKunzedHkTJhjX8lDHFyqgHz4nNxhyLYU4nr/QzZ8Bo+sfr181/ye6D4/vLacrnh8alFAHPyRDaPB0WzO3Qzm3NWCPTupuGb/9J9H3dyR1/2PCn+O5K5G8HRqcfD//v47QK8ZOp9eXLMf67fjWQDLpTz4lmlE9h3wIwsuqTrAl0Qjsi2AH1lwSdUBviQakW0B/MiCS6oO8CXRiGwL4EcWXFJ1gC+JRmRbAD+y4JKqA3xJNCLbAviRBZdUHeBLohHZFsCPLLik6gBfEo3ItgB+ZMElVQf4kmhEtgXwIwsuqTrAl0Qjsi2AH1lwSdUBviQakW0B/MiCS6oO8CXRiGwL4EcWXFJ1gC+JRmRbAD+y4JKqA3xJNCLbAviRBZdUHeBLohHZFsCPLLik6gBfEo3ItgB+ZMElVQf4kmhEtgXwIwsuqTrAl0Qjsi3/AUxet3WPnX+RAAAAAElFTkSuQmCC",class:"orange-btn",link:"/educational-video"})}),Object(l.jsx)("div",{id:"landing_wrapping",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"intro_txt",children:"LEAVE THE WEEK BEHIND"}),Object(l.jsxs)("div",{id:"finally_wrapper",children:[Object(l.jsx)("h1",{id:"its_friday",className:"intro_txt",children:"IT'S FINALLY"}),Object(l.jsx)("div",{id:"orange_placeholder"}),Object(l.jsx)("h1",{id:"saturday",children:"SATURDAY"})]})]})})]})}),j=n.p+"static/media/Saturday.1909c810.mp4",g=function(e){var t=Object(r.f)();return Object(c.useEffect)((function(){setTimeout((function(){t.push("/data-capture")}),9e3)}),[]),Object(l.jsx)("video",{width:"100%",height:"100%",autoPlay:!0,muted:!0,children:Object(l.jsx)("source",{src:j,type:"video/mp4"})})},b=(n(33),"data:image/png;base64,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"),u=n.p+"static/media/sour.cbda50ee.svg",h=function(e){return Object(l.jsxs)("div",{className:"Prizing",children:[Object(l.jsxs)("div",{className:"titleContainer",children:[Object(l.jsx)("h1",{className:"blood_orange_h1",children:"SWEET"}),Object(l.jsx)("h1",{className:"blood_orange_h1 Title2",children:"& SOUR"}),Object(l.jsx)("h5",{className:"blood_orange_h1 ROR",children:"READY-TO-ROLL"})]}),Object(l.jsx)("div",{id:"next_btn_green",children:Object(l.jsx)(d,{image:b,link:"/instructions"})}),Object(l.jsxs)("div",{className:"columns_holder",children:[Object(l.jsx)("div",{className:"shared_width left-content",children:Object(l.jsx)("p",{style:{fontSize:"13px"},children:"Our Sweet & Sour Sativa Ready-to-Roll is made with milled whole flower, never shake or trim, packed with a sour punch and fruity citrus aromas."})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{id:"sourBag",src:u,alt:""})}),Object(l.jsxs)("div",{className:"shared_width",children:[Object(l.jsxs)("div",{className:"info_container",children:[Object(l.jsx)("p",{className:"margin_zero",children:"SATIVA"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"THC 19-25%"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"CBD 0-1%"})]}),Object(l.jsxs)("div",{className:"info_container",children:[Object(l.jsx)("p",{className:"margin_zero",children:"AROMA & FLAVOURS"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"Mint Earthy Sour"})]}),Object(l.jsxs)("div",{className:"info_container",children:[Object(l.jsx)("p",{className:"margin_zero",children:"CASE-COUNT"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"4 Units"})]}),Object(l.jsxs)("div",{className:"info_container",children:[Object(l.jsx)("p",{className:"margin_zero",children:"WEEKLY SUGGESTED ORDER"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"5 Cases"})]}),Object(l.jsxs)("div",{className:"info_container",children:[Object(l.jsx)("p",{className:"margin_zero",children:"LICENSED PRODUCER"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"WeedMD Rx Inc."})]})]})]})]})},C=n.p+"static/media/vape-pen.29429644.svg",O=function(e){return Object(l.jsxs)("div",{className:"Prizing bloodOrangeBg",children:[Object(l.jsxs)("div",{className:"titleContainer",children:[Object(l.jsx)("h1",{className:"blood_orange_h1",children:"BLOOD"}),Object(l.jsx)("h1",{className:"blood_orange_h1 Title2",children:"ORANGE"}),Object(l.jsx)("h5",{className:"blood_orange_h1 ROR",children:"1G 510 CARTRIDGE"})]}),Object(l.jsx)("div",{id:"next_btn_green",children:Object(l.jsx)(d,{image:b,link:"/quiz"})}),Object(l.jsxs)("div",{className:"columns_holder",children:[Object(l.jsx)("div",{className:"shared_width left-content",children:Object(l.jsx)("p",{style:{fontSize:"13px"},children:"Blood Orange by Saturday is the sweet and juicy with a tangy zip and touch of floral pine. Enjoy a crisp twist on citrus."})}),Object(l.jsx)("div",{children:Object(l.jsx)("img",{id:"vapePen",src:C,alt:""})}),Object(l.jsxs)("div",{className:"shared_width",children:[Object(l.jsxs)("div",{className:"info_container",children:[Object(l.jsx)("p",{className:"margin_zero",children:"SATIVA"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"THC 19-25%"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"CBD 0-1%"})]}),Object(l.jsxs)("div",{className:"info_container",children:[Object(l.jsx)("p",{className:"margin_zero",children:"AROMA & FLAVOURS"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"Mint Earthy Sour"})]}),Object(l.jsxs)("div",{className:"info_container",children:[Object(l.jsx)("p",{className:"margin_zero",children:"CASE-COUNT"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"4 Units"})]}),Object(l.jsxs)("div",{className:"info_container",children:[Object(l.jsx)("p",{className:"margin_zero",children:"WEEKLY SUGGESTED ORDER"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"5 Cases"})]}),Object(l.jsxs)("div",{className:"info_container",children:[Object(l.jsx)("p",{className:"margin_zero",children:"LICENSED PRODUCER"}),Object(l.jsx)("p",{className:"margin_zero thin",children:"WeedMD Rx Inc."})]})]})]})]})},E=n(18),m=function(e){localStorage.getItem("points");var t=Object(r.f)();return Object(l.jsx)("div",{className:"Prizing",children:Object(l.jsxs)("form",{className:"form_collection",onSubmit:function(e){e.preventDefault(),t.push("/blood-orange")},children:[Object(l.jsx)("div",{className:"labels",children:Object(l.jsx)("label",{htmlFor:"fullname",children:"Full Name"})}),Object(l.jsx)("input",{className:"inputs",type:"text",id:"fullname",name:"fullname",placeholder:"Fullname"}),Object(l.jsx)("div",{className:"labels",children:Object(l.jsx)("label",{htmlFor:"email",children:"Email"})}),Object(l.jsx)("input",{className:"inputs",type:"email",id:"email",name:"email",placeholder:"email"}),Object(l.jsx)("div",{className:"labels",children:Object(l.jsx)("label",{htmlFor:"store",children:"Store #"})}),Object(l.jsx)("input",{className:"inputs",type:"text",id:"store",name:"store",placeholder:"store"}),Object(l.jsx)("input",{type:"submit",id:"submit_btn",value:"SUBMIT"})]})})},x=n.p+"static/media/guitar.53634a63.svg",B=function(e){return Object(l.jsxs)("div",{className:"Prizing noOverflow",children:[Object(l.jsx)("div",{id:"next_btn_green",children:Object(l.jsx)(d,{image:b,link:"/Quiz"})}),Object(l.jsx)("div",{id:"ball_layer"}),Object(l.jsx)("div",{id:"guitar_layer",children:Object(l.jsx)("img",{id:"guitar",src:x,alt:""})}),Object(l.jsx)("p",{id:"instruction_context",children:"ANSWER CORRECTLY ON THIS QUICK QUIZ FOR A CHANCE TO WIN A SATURDAY PARTY FOR YOUR STORE"})]})};var p=function(){return Object(l.jsx)(s.a,{basename:"/saturday",children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/",exact:!0,strict:!0,component:_}),Object(l.jsx)(r.a,{path:"/educational-video",exact:!0,strict:!0,component:g}),Object(l.jsx)(r.a,{path:"/prizing",exact:!0,strict:!0,component:h}),Object(l.jsx)(r.a,{path:"/blood-orange",exact:!0,strict:!0,component:O}),Object(l.jsx)(r.a,{path:"/Quiz",exact:!0,strict:!0,component:E.a}),Object(l.jsx)(r.a,{path:"/data-capture",exact:!0,strict:!0,component:m}),Object(l.jsx)(r.a,{path:"/instructions",exact:!0,strict:!0,component:B})]})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,A=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),A(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(A.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),D()}},[[34,1,2]]]);
//# sourceMappingURL=main.fe4b38d3.chunk.js.map
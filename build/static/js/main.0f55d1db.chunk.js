(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(75)},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),u=a(8),i=a(17),o=a(2),s=a(3),m=a(5),p=a(4),h=a(6),d=a(26),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).getAmount=function(){var e=localStorage.getItem("carts"),t=[];JSON.parse(atob(e)).map(function(e){return t.push(parseInt(e.amount)),e});var n=t.reduce(function(e,t){return e+t},0);a.props.setclearAmountCart(n)},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAmount()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e23\u0e30\u0e1a\u0e1a\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19"),r.a.createElement("h2",null,"\u0e1c\u0e48\u0e32\u0e19\u0e1a\u0e31\u0e15\u0e23\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e41\u0e25\u0e30\u0e2d\u0e34\u0e19\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e40\u0e19\u0e47\u0e15\u0e41\u0e1a\u0e47\u0e07\u0e04\u0e01\u0e34\u0e49\u0e07"),r.a.createElement("p",null,"\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49 Payment API \u0e02\u0e2d\u0e07 ",r.a.createElement("a",{href:"https://omise.co"},"Omise.co")," \u0e17\u0e48\u0e32\u0e19\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e14\u0e25\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49\u0e17\u0e31\u0e19\u0e17\u0e35 \u0e2b\u0e23\u0e37\u0e2d \u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e17\u0e35\u0e48\u0e2b\u0e19\u0e49\u0e32 ",r.a.createElement(u.c,{to:"/about"},"About"))),r.a.createElement("ul",{id:"nav"},r.a.createElement("li",null,r.a.createElement(u.c,{exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/products"},"Products")),r.a.createElement("li",{className:"cart_link"},r.a.createElement(u.c,{to:"/cart"},"Cart",r.a.createElement("span",null,this.props.amount))),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/history"},"Payment History")),r.a.createElement("li",null,r.a.createElement(u.c,{to:"/about"},"About"))),r.a.createElement("div",{className:"clear"}))}}]),t}(n.Component);var f=Object(i.b)(function(e){return{amount:e.create.amount}},function(e){return{setclearAmountCart:function(t){e({type:"SET",payload:t})},clearAmountCart:function(){e({type:"CLEAR"})},addAmountCart:function(){e({type:"ADD"})},delAmountCart:function(){e({type:"DEL"})}}})(E),g=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"footer"},r.a.createElement("p",null,"\xa9 Copy right 2019"))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e27\u0e34\u0e18\u0e35\u0e17\u0e33\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"),r.a.createElement("div",null,r.a.createElement("p",{className:"a_title"},"\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e1a\u0e31\u0e15\u0e23\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15\u0e41\u0e25\u0e30\u0e2d\u0e34\u0e19\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e40\u0e19\u0e47\u0e15\u0e41\u0e1a\u0e47\u0e07\u0e04\u0e4c\u0e01\u0e34\u0e49\u0e07"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e2b\u0e19\u0e49\u0e32 Products"),r.a.createElement("li",null,"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e08\u0e32\u0e01\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07"),r.a.createElement("li",null,"\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e2b\u0e19\u0e49\u0e32 Cart"),r.a.createElement("li",null,"\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e08\u0e33\u0e19\u0e27\u0e19\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"),r.a.createElement("li",null,"\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 Pay"),r.a.createElement("li",null,"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e34\u0e18\u0e35\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19"),r.a.createElement("li",null,"\u0e2b\u0e32\u0e01\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e0a\u0e33\u0e23\u0e30\u0e1c\u0e48\u0e32\u0e19\u0e1a\u0e31\u0e15\u0e23\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15 \u0e43\u0e2b\u0e49\u0e43\u0e2a\u0e48\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e14\u0e31\u0e07\u0e19\u0e35\u0e49",r.a.createElement("ul",null,r.a.createElement("li",null,"Card number: 5454-5454-545454-5454"),r.a.createElement("li",null,"Name on card: Test"),r.a.createElement("li",null,"Expired date: 12/21"),r.a.createElement("li",null,"Security code: 123"))),r.a.createElement("li",null,"\u0e2b\u0e32\u0e01\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e0a\u0e33\u0e23\u0e30\u0e1c\u0e48\u0e32\u0e19\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23 (Internet Banking)",r.a.createElement("ul",null,r.a.createElement("li",null,"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23"),r.a.createElement("li",null,"\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 Success"),r.a.createElement("li",null,"\u0e17\u0e33\u0e44\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 Success? \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e27\u0e48\u0e32\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e01\u0e32\u0e23\u0e42\u0e2d\u0e19\u0e40\u0e07\u0e34\u0e19 \u0e08\u0e36\u0e07\u0e44\u0e21\u0e48\u0e21\u0e35\u0e01\u0e32\u0e23\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e23\u0e34\u0e07 \u0e42\u0e14\u0e22\u0e40\u0e23\u0e32\u0e2a\u0e21\u0e21\u0e38\u0e15\u0e34\u0e27\u0e48\u0e32\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e41\u0e25\u0e49\u0e27"),r.a.createElement("li",null,"\u0e41\u0e15\u0e48\u0e2b\u0e32\u0e01\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e08\u0e23\u0e34\u0e07 \u0e08\u0e30\u0e21\u0e35\u0e2b\u0e19\u0e49\u0e32\u0e43\u0e2b\u0e49\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23 \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19"))),r.a.createElement("li",null,"\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19 LINE \u0e41\u0e25\u0e30 Email \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e21\u0e35\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07\u0e0b\u0e37\u0e49\u0e2d\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19"))),r.a.createElement("h2",null,"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e17\u0e33\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"),r.a.createElement("div",null,r.a.createElement("p",{className:"a_title"},"1. \u0e23\u0e39\u0e1b\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e17\u0e33\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e1c\u0e48\u0e32\u0e19\u0e1a\u0e31\u0e15\u0e23\u0e40\u0e04\u0e23\u0e14\u0e34\u0e15"),r.a.createElement("ol",null,r.a.createElement("li",null,"add cart \u0e41\u0e25\u0e49\u0e27\u0e01\u0e14 Pay",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/1.jpg",alt:""})),r.a.createElement("li",null,"\u0e01\u0e23\u0e2d\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1a\u0e31\u0e15\u0e23\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e17\u0e14\u0e2a\u0e2d\u0e1a",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/2.jpg",alt:""})),r.a.createElement("li",null,"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19 Line Notify",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/3.jpg",alt:""})),r.a.createElement("li",null,"\u0e14\u0e39\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e43\u0e19 Dash board \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e41\u0e2d\u0e14\u0e21\u0e34\u0e19",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/11.jpg",alt:""})))),r.a.createElement("div",null,r.a.createElement("p",{className:"a_title"},"2. \u0e23\u0e39\u0e1b\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e32\u0e23\u0e17\u0e33\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e1c\u0e48\u0e32\u0e19\u0e2d\u0e34\u0e19\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e40\u0e19\u0e47\u0e15\u0e41\u0e1a\u0e47\u0e07\u0e04\u0e4c\u0e01\u0e34\u0e49\u0e07"),r.a.createElement("ol",null,r.a.createElement("li",null,"add cart \u0e41\u0e25\u0e49\u0e27\u0e01\u0e14 Pay",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/4.jpg",alt:""})),r.a.createElement("li",null,"\u0e01\u0e14\u0e44\u0e1b\u0e22\u0e31\u0e07 Internet Banking",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/5.jpg",alt:""})),r.a.createElement("li",null,"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/6.jpg",alt:""})),r.a.createElement("li",null,"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19 Line Notify",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/7.jpg",alt:""})),r.a.createElement("li",null,"\u0e40\u0e25\u0e37\u0e2d\u0e01 Success (\u0e2b\u0e32\u0e01\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2a\u0e21\u0e21\u0e38\u0e15\u0e34\u0e27\u0e48\u0e32\u0e25\u0e39\u0e01\u0e04\u0e49\u0e32\u0e17\u0e33\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08)",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/8.jpg",alt:""})),r.a.createElement("li",null,"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19 Line Notify",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/9.jpg",alt:""})),r.a.createElement("li",null,"\u0e17\u0e33\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/10.jpg",alt:""})),r.a.createElement("li",null,"\u0e14\u0e39\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e43\u0e19 Dash board \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e41\u0e2d\u0e14\u0e21\u0e34\u0e19",r.a.createElement("br",null),r.a.createElement("img",{src:"./images/12.jpg",alt:""})))))}}]),t}(n.Component);var v=Object(i.b)(function(e){return{grade:e.create.grade,message:e.create.message}},function(e){return{addGrade:function(){e({type:"ADD"})},delGrade:function(){e({type:"DEL"})}}})(b),y=a(9),j=a.n(y),O=a(15),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={products:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(j.a.mark(function e(){var t=this;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://omiseapi.herokuapp.com/getproducts").then(function(e){return e.json()}).then(function(e){t.setState({products:e})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"randomIntFromInterval",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"),r.a.createElement("ul",{className:"list-items"},!this.state.products&&r.a.createElement("h2",{className:"loading"},"Loading..."),this.state.products&&this.state.products.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(u.b,{className:"a_product",to:"/product/".concat(e.id,"/").concat(e.name)},r.a.createElement("img",{src:e.image_url,alt:"item"}),r.a.createElement("span",null,e.name),r.a.createElement("p",null,e.price," THB")))})))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={product:null,carts:null,exists:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(O.a)(j.a.mark(function e(){var t,a,n=this;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,fetch("https://omiseapi.herokuapp.com/getproducts/"+t).then(function(e){return e.json()}).then(function(e){n.setState({product:e})});case 3:null!==(a=localStorage.getItem("carts"))&&this.setState({carts:atob(a)}),this.state.carts&&(JSON.parse(this.state.carts).find(function(e){return e.id===t})?this.setState({exists:!0}):this.setState({exists:!1}));case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.match.params.id;return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32"),!this.state.product&&r.a.createElement("h2",{className:"loading"},"Loading..."),this.state.product&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"item"},this.state.product.gallery.map(function(t,a){return r.a.createElement("img",{src:t,key:a,alt:e.state.product.name})})),r.a.createElement("div",{className:"item"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("h4",{className:"title"},this.state.product.name)),r.a.createElement("li",null,r.a.createElement("h4",null,this.state.product.price.toFixed(2)," THB")),r.a.createElement("li",null,this.state.product.info," THB")),r.a.createElement("br",null),r.a.createElement("button",{disabled:this.state.exists,onClick:function(){return e.addToCart(t,e.state.product.name,e.state.product.price)}},"ADD TO CART")))))}},{key:"addToCart",value:function(e,t,a){this.setState({exists:!0}),this.props.addAmountCart();var n=[],r=localStorage.getItem("carts");null==r?(n.push({id:e,title:t,price:a,amount:1,totalPrice:a}),localStorage.setItem("carts",btoa(JSON.stringify(n)))):-1===(n=JSON.parse(atob(r))).findIndex(function(t){return t.id===e})&&(n.push({id:e,title:t,price:a,amount:1,totalPrice:a}),localStorage.setItem("carts",btoa(JSON.stringify(n))))}}]),t}(n.Component);var C,N=Object(i.b)(function(e){return{amount:e.create.amount}},function(e){return{addAmountCart:function(){e({type:"ADD"})}}})(S),x=a(42),A=a.n(x),w=a(20),I=a.n(w),D=0,L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleLoadScript=function(){(C=window.OmiseCard).configure({publicKey:"pkey_test_5i36vsmd4088wc05dea",currency:"thb",frameLabel:"Joystats Shop",defaultPaymentMethod:"credit_card",otherPaymentMethods:["internet_banking"],submitLabel:"PAY RIGHT NOW!",buttonLabel:"Pay with omise"})},a.createInternetBankingCharge=function(){var e=Object(O.a)(j.a.mark(function e(t,n,r,l,c,u){var i,o,s,m,p;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I()({method:"post",url:"https://omiseapi.herokuapp.com/checkout-internet-banking",data:{name:t,email:n,amount:r,token:l,return_uri:c,order_id:u},headers:{"Content-Type":"application/json"}});case 2:(i=e.sent)&&(console.log("response--\x3e",i.data),o=i.data,s=o.authorizeUri,m=o.id,p=o.random_id,sessionStorage.setItem("ref_"+p,m),localStorage.removeItem("carts"),a.setState({carts:null}),window.location.href=s);case 4:case"end":return e.stop()}},e)}));return function(t,a,n,r,l,c){return e.apply(this,arguments)}}(),a.createCreditCardCharge=function(){var e=Object(O.a)(j.a.mark(function e(t,n,r,l){var c;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I()({method:"post",url:"https://omiseapi.herokuapp.com/checkout-credit-card",data:{name:t,email:n,amount:r,token:l},headers:{"Content-Type":"application/json"}});case 2:(c=e.sent)&&(a.setState({loading:!1}),"successful"===c.data.status&&(localStorage.removeItem("carts"),a.setState({carts:null})),a.setState({charged:c.data}));case 4:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),a.omiseCardHandle=function(){var e=Math.floor(1e3*Math.random())+1;a.setState({loading:!0});var t=100*D;C.open({amount:t,onCreateTokenSuccess:function(n){-1===n.indexOf("tokn")?a.createInternetBankingCharge("Kline","test@test.com",t,n,"https://joystats.co/#/finished/"+e,e):a.createCreditCardCharge("Kline","test@test.com",t,n)},onFormClosed:function(){a.setState({loading:!1})}})},a.handleCheckout=function(e){e.preventDefault(),a.omiseCardHandle()},a.state={carts:null,charged:null,loading:!1},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("carts");this.props.clearAmountCart(),null!==e&&(this.setState({carts:atob(e)}),this.getAmount())}},{key:"render",value:function(){var e=this,t=null,a=[];null!==this.state.carts&&(t=JSON.parse(this.state.carts).map(function(t){return a.push(t.price*t.amount),r.a.createElement("li",{key:t.id},r.a.createElement(u.b,{to:"/product/".concat(t.id,"/").concat(t.name)},t.title)," \u0e23\u0e32\u0e04\u0e32 ",t.price.toFixed(2)," THB x ",r.a.createElement("input",{className:"amount",type:"number",value:t.amount,onChange:function(a){return e.changeQty(t.id,a)}})," = ",t.totalPrice," THB ",r.a.createElement("button",{className:"btn-delete",onClick:function(){return e.removeItem(t.id)}},"\u0e25\u0e1a\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"))}),D=a.reduce(function(e,t){return e+t},0));var n=this.state,l=n.carts,c=n.charged,i=n.loading;return r.a.createElement("div",null,r.a.createElement(A.a,{url:"https://cdn.omise.co/omise.js",onLoad:this.handleLoadScript}),r.a.createElement("h2",null,"\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e43\u0e19\u0e15\u0e30\u0e01\u0e23\u0e49\u0e32"),!c&&r.a.createElement("ul",{className:"carts-list"},l?t:r.a.createElement("div",null,"- Empty cart -")),l&&r.a.createElement("form",null,r.a.createElement("button",{disabled:i,type:"submit",value:"pay credit card",onClick:this.handleCheckout},"\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e08\u0e33\u0e19\u0e27\u0e19 ",D.toFixed(2)," THB")),i&&r.a.createElement("h4",null,"Processing..."),c&&r.a.createElement("div",{id:"pay-complete"},r.a.createElement("h4",null,"Thank you for your payment with credit card"),r.a.createElement("div",null,"Amount: ",(c.amount/100).toFixed(2),r.a.createElement("br",null),"Status: ",c.status,r.a.createElement("br",null),r.a.createElement("br",null)," Go to ",r.a.createElement(u.b,{to:"products"},"Products"))))}},{key:"getAmount",value:function(){var e=localStorage.getItem("carts"),t=[];JSON.parse(atob(e)).map(function(e){return t.push(parseInt(e.amount)),e});var a=t.reduce(function(e,t){return e+t},0);this.props.setclearAmountCart(a)}},{key:"changeQty",value:function(e,t){if(!(t.target.value<=0)){var a=JSON.parse(this.state.carts).map(function(a){return a.id===e?{id:a.id,title:a.title,price:a.price,amount:t.target.value,totalPrice:a.price*t.target.value}:a});this.setState({carts:JSON.stringify(a)}),localStorage.setItem("carts",btoa(JSON.stringify(a))),this.getAmount()}}},{key:"removeItem",value:function(e){var t=JSON.parse(this.state.carts).filter(function(t){return t.id!==e});t.length>0?(this.setState({carts:JSON.stringify(t)}),localStorage.setItem("carts",btoa(JSON.stringify(t))),this.getAmount()):(this.setState({carts:null}),localStorage.removeItem("carts"))}}]),t}(n.Component);var T=Object(i.b)(function(e){return{amount:e.create.amount}},function(e){return{setclearAmountCart:function(t){e({type:"SET",payload:t})},clearAmountCart:function(){e({type:"CLEAR"})},addAmountCart:function(){e({type:"ADD"})},delAmountCart:function(){e({type:"DEL"})}}})(L),P=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e35\u0e49\u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23?"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u0e40\u0e27\u0e47\u0e1a\u0e19\u0e35\u0e49\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19\u0e14\u0e49\u0e27\u0e22 ",r.a.createElement("a",{href:"https://reactjs.org/"},"ReactJS")),r.a.createElement("li",null,"\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d API \u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e02\u0e2d\u0e07 ",r.a.createElement("a",{href:"https://omise.co"},"Omise")," \u0e14\u0e49\u0e27\u0e22 ",r.a.createElement("a",{href:"https://nodejs.org/"},"NodeJS")," x ",r.a.createElement("a",{href:"https://expressjs.com/"},"ExpressJS")),r.a.createElement("li",null,"Deploy \u0e17\u0e35\u0e48 ",r.a.createElement("a",{href:"https://zeit.com"},"Zeit.com")),r.a.createElement("li",null,"\u0e1c\u0e48\u0e32\u0e19 ",r.a.createElement("a",{href:"https://github.com"},"Github")," \u0e41\u0e1a\u0e1a\u0e2d\u0e31\u0e15\u0e34\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34"),r.a.createElement("li",null,"\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e17\u0e32\u0e07 ",r.a.createElement("a",{href:"https://notify-bot.line.me/th/"},"Line Notify")," \u0e41\u0e25\u0e30\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e4c ",r.a.createElement("a",{href:"https://nodemailer.com/"},"Node Mailer")),r.a.createElement("li",null,"\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e19\u0e04\u0e49\u0e32\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e08\u0e32\u0e01 ",r.a.createElement("a",{href:"https://www.slyq-clothing.com/"},"slyq-clothing"))),r.a.createElement("h4",null,"\u0e08\u0e49\u0e32\u0e07\u0e07\u0e32\u0e19"),r.a.createElement("div",null,"\u0e15\u0e34\u0e14\u0e15\u0e48\u0e2d Line ID: joystats",r.a.createElement("br",null),"\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e4c joystats@yahoo.com"))}}]),t}(n.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Checkout.js"))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={amount:0,status:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(O.a)(j.a.mark(function e(){var t,a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,a=sessionStorage.getItem("ref_"+t),e.prev=2,e.next=5,I.a.post("https://omiseapi.herokuapp.com/getcharge/"+a);case 5:n=e.sent,this.setState({amount:n.data.amount}),this.setState({status:n.data.status}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[2,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e41\u0e08\u0e49\u0e07\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19"),!this.state.status&&r.a.createElement("h4",null,"Processing..."),this.state.status&&r.a.createElement("div",{id:"pay-complete"},r.a.createElement("h4",null,"Thank you for your payment with Internet Banking"),r.a.createElement("div",null,"Amount: ",(this.state.amount/100).toFixed(2),r.a.createElement("br",null),"Status: ",this.state.status,r.a.createElement("br",null),r.a.createElement("br",null)," Go to ",r.a.createElement(u.b,{to:"products"},"Products"))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={lists:null,textList:null},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(O.a)(j.a.mark(function e(){var t,a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I()({headers:{"Content-Type":"application/json"},url:"https://omiseapi.herokuapp.com/gethistory/",method:"GET",data:{from:"2019-12-01T00:00:00Z",to:"2020-10-25T00:00:00Z",offset:0,limit:10}});case 3:t=e.sent,this.setState({lists:t.data}),null!==this.state.lists&&(a=this.state.lists.data.map(function(e,t){var a=new Date(e.created_at),n=a.getDate(),l=a.getMonth(),c=a.getFullYear(),u=a.getHours(),i=a.getMinutes();return r.a.createElement("tr",{key:t},r.a.createElement("td",null,"#",t+1),r.a.createElement("td",null,c,"-",l+1,"-",n," ",u,":",i),r.a.createElement("td",{align:"right"},(e.amount/100).toFixed(2)),r.a.createElement("td",null,r.a.createElement("span",{className:"successful"===e.status?"green":"orange"},e.status)))}),this.setState({textList:a})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0e01\u0e32\u0e23\u0e0a\u0e33\u0e23\u0e30\u0e40\u0e07\u0e34\u0e19\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14 20 \u0e23\u0e32\u0e22\u0e01\u0e32\u0e23"),r.a.createElement("div",null,!this.state.textList&&r.a.createElement("h2",{className:"loading"},"Loading..."),this.state.textList&&r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"),r.a.createElement("th",null,"\u0e08\u0e33\u0e19\u0e27\u0e19(THB)"),r.a.createElement("th",null,"\u0e2a\u0e16\u0e32\u0e19\u0e30"))),r.a.createElement("tbody",null,this.state.textList))))}}]),t}(n.Component),F=(a(73),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"container"},r.a.createElement(f,null),r.a.createElement("div",{id:"page"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/finished/:id",component:_}),r.a.createElement(d.a,{path:"/history",component:M}),r.a.createElement(d.a,{path:"/checkout"},r.a.createElement(J,null)),r.a.createElement(d.a,{path:"/product/:id/:title",component:N}),r.a.createElement(d.a,{path:"/products",exact:!0},r.a.createElement(k,null)),r.a.createElement(d.a,{path:"/cart"},r.a.createElement(T,null)),r.a.createElement(d.a,{path:"/about"},r.a.createElement(P,null)),r.a.createElement(d.a,{path:"/",exact:!0},r.a.createElement(v,null)))),r.a.createElement(g,null))}}]),t}(n.Component)),B=a(22),H={amount:0};var G=Object(B.b)({create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return{amount:t.payload};case"ADD":return{amount:e.amount+1};case"DEL":return{amount:e.amount-1};case"CLEAR":return{amount:0};default:return{amount:e.amount}}}}),R=Object(B.c)(G);c.a.render(r.a.createElement(i.a,{store:R},r.a.createElement(u.a,null,r.a.createElement(F,null))),document.getElementById("root"))}},[[43,2,1]]]);
//# sourceMappingURL=main.0f55d1db.chunk.js.map
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,c,t){},72:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(1),n=t.n(a),r=t(30),i=t.n(r),l=(t(38),t(2)),o=t(4),j=t(6),b=t.n(j),d=t(10),m=t(3);var h=function(){return Object(s.jsxs)("div",{className:"nav-bar-main",children:[Object(s.jsx)(l.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"nav-bar-item",children:"NEW WORK"})}),Object(s.jsx)(l.b,{to:"/previous-work",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"nav-bar-item",children:"PAST WORK"})}),Object(s.jsx)(l.b,{to:"/portraits",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"nav-bar-item",children:"PORTRAITS"})}),Object(s.jsx)(l.b,{to:"/sketches",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"nav-bar-item",children:"SKETCHES"})}),Object(s.jsx)(l.b,{to:"/news-bio",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"last-nav-bar-item",children:"NEWS & BIOGRAPHY"})})]})},x=t(15),O=t.n(x),u="/api";function v(){return O.a.get("".concat(u,"/pictures/"))}function N(e){return O.a.get("".concat(u,"/pictures/").concat(e,"/"))}function p(e){return O.a.post("".concat(u,"/enquire/"),e)}var g=t(32),f=t.n(g);var k=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"head-s-two",children:Object(s.jsx)(l.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("p",{className:"title-name",children:"PUFF MORGAN GILES"})})}),Object(s.jsx)("div",{className:"head-s-one"})]})};var y=function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsxs)("div",{className:"footer-icons",children:[Object(s.jsx)("div",{className:"fa fa-facebook icon"}),Object(s.jsx)("div",{className:"fa fa-twitter icon"}),Object(s.jsx)("a",{href:"https://www.instagram.com/puffmorgangilesart/",children:Object(s.jsx)("div",{className:"fa fa-instagram icon"})})]}),Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsx)("p",{className:"copyright",children:"\xa9 Copyright 2021 Puff Morgan-Giles Art. All Rights Reserved."})})]})};var S=function(){var e=n.a.useState(null),c=Object(m.a)(e,2),t=c[0],a=c[1],r=n.a.useState(!0),i=Object(m.a)(r,2),o=i[0],j=i[1],x=function(){j(!o)};n.a.useEffect((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var c,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:c=e.sent,t=c.data,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var O=t?t.filter((function(e){var c;for(c=0;c<e.types.length;){if(1===e.types[c])return e;c++}})):null,u=t?t.filter((function(e){var c;for(c=0;c<e.types.length;){if(5===e.types[c])return e;c++}})):null;return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"head-s-one",children:Object(s.jsx)("div",{className:"fa fa-bars",onClick:x})}),Object(s.jsx)(k,{})]}),Object(s.jsx)("div",{className:"nav-bar-container",children:Object(s.jsx)(h,{})}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"main-photo",children:o?Object(s.jsxs)("div",{className:"main-photo-container",children:[u&&u.map((function(e){return console.log(e)})),u?Object(s.jsxs)(f.a,{interval:4e3,children:[Object(s.jsx)("img",{className:"carousel-image",src:"http://localhost:8000".concat(u[0].image)}),Object(s.jsx)("img",{className:"carousel-image",src:"http://localhost:8000".concat(u[1].image)}),Object(s.jsx)("img",{className:"carousel-image",src:"http://localhost:8000".concat(u[2].image)}),Object(s.jsx)("img",{className:"carousel-image",src:"http://localhost:8000".concat(u[3].image)}),Object(s.jsx)("img",{className:"carousel-image",src:"http://localhost:8000".concat(u[4].image)})]}):Object(s.jsx)("div",{})]}):Object(s.jsxs)("div",{className:"burger-menu",children:[Object(s.jsx)(l.b,{onClick:x,to:"/",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEW WORK"})}),Object(s.jsx)(l.b,{onClick:x,to:"/previous-work",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PAST WORK"})}),Object(s.jsx)(l.b,{onClick:x,to:"/portraits",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PORTRAITS"})}),Object(s.jsx)(l.b,{onClick:x,to:"/sketches",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"SKETCHES"})}),Object(s.jsx)(l.b,{onClick:x,to:"/news-bio",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEWS&BIOGRAPHY"})})]})}),Object(s.jsxs)("div",{className:"picture-content",children:[Object(s.jsx)("div",{className:"n-w-title",children:"New Work"}),Object(s.jsx)("div",{className:"main-picture-content",children:O&&O.map((function(e){return Object(s.jsx)("div",{className:"picture-card-container",children:Object(s.jsxs)(l.b,{to:"/pictures/".concat(e.id),style:{textDecoration:"none",color:"black"},children:[Object(s.jsx)("div",{className:"image-container",children:Object(s.jsx)("img",{src:"http://localhost:8000".concat(e.image),className:"images"})}),Object(s.jsxs)("div",{className:"picture-card-text",children:[Object(s.jsx)("div",{className:"picture-card-text-name",children:e.name}),Object(s.jsx)("div",{className:"picture-card-text-style",children:"".concat(e.style,", ").concat(e.size)}),Object(s.jsx)("div",{className:"picture-card-text-price",children:e.status})]})]})},e.id)}))})]}),Object(s.jsx)(y,{})]})]})};var C=function(){var e=n.a.useState(null),c=Object(m.a)(e,2),t=c[0],a=c[1],r=n.a.useState(!0),i=Object(m.a)(r,2),o=i[0],j=i[1];n.a.useEffect((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var c,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:c=e.sent,t=c.data,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){j(!o)},O=t?t.filter((function(e){var c;for(c=0;c<e.types.length;){if(4===e.types[c])return e;c++}})):null;return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"head-s-one",children:Object(s.jsx)("div",{className:"fa fa-bars",onClick:x})}),Object(s.jsx)(k,{})]}),Object(s.jsx)("div",{className:"nav-bar-container",children:Object(s.jsx)(h,{})}),o?Object(s.jsx)("div",{}):Object(s.jsx)("div",{className:"main-photo-burger",children:Object(s.jsxs)("div",{className:"burger-menu",children:[Object(s.jsx)(l.b,{onClick:x,to:"/",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEW WORK"})}),Object(s.jsx)(l.b,{onClick:x,to:"/previous-work",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PAST WORK"})}),Object(s.jsx)(l.b,{onClick:x,to:"/portraits",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PORTRAITS"})}),Object(s.jsx)(l.b,{onClick:x,to:"/sketches",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"SKETCHES"})}),Object(s.jsx)(l.b,{onClick:x,to:"/news-bio",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEWS&BIOGRAPHY"})})]})}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"picture-content",children:[Object(s.jsx)("div",{className:"p-c-title",children:"Past Work"}),Object(s.jsx)("div",{className:"main-picture-content",children:O&&O.map((function(e){return Object(s.jsx)("div",{className:"picture-card-container",children:Object(s.jsxs)(l.b,{to:"/pictures/".concat(e.id),style:{textDecoration:"none",color:"black"},children:[Object(s.jsx)("div",{className:"image-container",children:Object(s.jsx)("img",{src:"http://localhost:8000".concat(e.image),className:"images"})}),Object(s.jsxs)("div",{className:"picture-card-text",children:[Object(s.jsx)("div",{className:"picture-card-text-name",children:e.name}),Object(s.jsx)("div",{className:"picture-card-text-style",children:"".concat(e.style,", ").concat(e.size)}),Object(s.jsx)("div",{className:"picture-card-text-price",children:e.status})]})]})},e.id)}))})]}),Object(s.jsx)(y,{})]})]})};var w=function(){var e=n.a.useState(null),c=Object(m.a)(e,2),t=c[0],a=c[1],r=n.a.useState(!0),i=Object(m.a)(r,2),o=i[0],j=i[1];n.a.useEffect((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var c,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:c=e.sent,t=c.data,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){j(!o)},O=t?t.filter((function(e){var c;for(c=0;c<e.types.length;){if(2===e.types[c])return e;c++}})):null;return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"head-s-one",children:Object(s.jsx)("div",{className:"fa fa-bars",onClick:x})}),Object(s.jsx)(k,{})]}),Object(s.jsx)("div",{className:"nav-bar-container",children:Object(s.jsx)(h,{})}),o?Object(s.jsx)("div",{}):Object(s.jsx)("div",{className:"main-photo-burger",children:Object(s.jsxs)("div",{className:"burger-menu",children:[Object(s.jsx)(l.b,{onClick:x,to:"/",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEW WORK"})}),Object(s.jsx)(l.b,{onClick:x,to:"/previous-work",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PAST WORK"})}),Object(s.jsx)(l.b,{onClick:x,to:"/portraits",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PORTRAITS"})}),Object(s.jsx)(l.b,{onClick:x,to:"/sketches",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"SKETCHES"})}),Object(s.jsx)(l.b,{onClick:x,to:"/news-bio",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEWS&BIOGRAPHY"})})]})}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"picture-content",children:[Object(s.jsx)("div",{className:"p-c-title",children:"Portraits"}),Object(s.jsx)("div",{className:"main-picture-content",children:O&&O.map((function(e){return Object(s.jsxs)("div",{className:"picture-card-container",children:[Object(s.jsx)("div",{className:"image-container",children:Object(s.jsx)("img",{src:"http://localhost:8000".concat(e.image),className:"images"})}),Object(s.jsxs)("div",{className:"picture-card-text",children:[Object(s.jsx)("div",{className:"picture-card-text-name",children:e.name}),Object(s.jsx)("div",{className:"picture-card-text-style",children:e.size})]})]},e.id)}))})]}),Object(s.jsx)(y,{})]})]})};var D=function(){var e=n.a.useState(null),c=Object(m.a)(e,2),t=c[0],a=c[1],r=n.a.useState(!0),i=Object(m.a)(r,2),o=i[0],j=i[1];n.a.useEffect((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var c,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:c=e.sent,t=c.data,a(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=t?t.filter((function(e){var c;for(c=0;c<e.types.length;){if(3===e.types[c])return e;c++}})):null,O=function(){j(!o)};return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"head-s-one",children:Object(s.jsx)("div",{className:"fa fa-bars",onClick:O})}),Object(s.jsx)(k,{})]}),Object(s.jsx)("div",{className:"nav-bar-container",children:Object(s.jsx)(h,{})}),o?Object(s.jsx)("div",{}):Object(s.jsx)("div",{className:"main-photo-burger",children:Object(s.jsxs)("div",{className:"burger-menu",children:[Object(s.jsx)(l.b,{onClick:O,to:"/",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEW WORK"})}),Object(s.jsx)(l.b,{onClick:O,to:"/previous-work",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PAST WORK"})}),Object(s.jsx)(l.b,{onClick:O,to:"/portraits",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PORTRAITS"})}),Object(s.jsx)(l.b,{onClick:O,to:"/sketches",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"SKETCHES"})}),Object(s.jsx)(l.b,{onClick:O,to:"/news-bio",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEWS&BIOGRAPHY"})})]})}),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"picture-content",children:[Object(s.jsx)("div",{className:"p-c-title",children:"Sketches"}),Object(s.jsx)("div",{className:"main-picture-content",children:x&&x.map((function(e){return Object(s.jsxs)("div",{className:"picture-card-container",children:[Object(s.jsx)("div",{className:"image-container",children:Object(s.jsx)("img",{src:"http://localhost:8000".concat(e.image),className:"images"})}),Object(s.jsxs)("div",{className:"picture-card-text",children:[Object(s.jsx)("div",{className:"picture-card-text-name",children:e.name}),Object(s.jsx)("div",{className:"picture-card-text-style",children:e.style})]})]},e.id)}))})]}),Object(s.jsx)(y,{})]})]})};var E=function(){var e=n.a.useState(!0),c=Object(m.a)(e,2),t=c[0],a=c[1],r=function(){a(!t)};return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"head-s-one",children:Object(s.jsx)("div",{className:"fa fa-bars",onClick:r})}),Object(s.jsx)(k,{})]}),t?Object(s.jsx)("div",{}):Object(s.jsx)("div",{className:"main-photo-burger",children:Object(s.jsxs)("div",{className:"burger-menu",children:[Object(s.jsx)(l.b,{onClick:r,to:"/",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEW WORK"})}),Object(s.jsx)(l.b,{onClick:r,to:"/previous-work",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PAST WORK"})}),Object(s.jsx)(l.b,{onClick:r,to:"/portraits",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PORTRAITS"})}),Object(s.jsx)(l.b,{onClick:r,to:"/sketches",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"SKETCHES"})}),Object(s.jsx)(l.b,{onClick:r,to:"/news-bio",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEWS&BIOGRAPHY"})})]})}),Object(s.jsx)("div",{className:"nav-bar-container",children:Object(s.jsx)(h,{})}),Object(s.jsxs)("div",{className:"bio-main",children:[Object(s.jsx)("div",{className:"bio-photo-container",children:Object(s.jsx)("img",{className:"bio-photo",src:"http://localhost:8000/media/images/Bio-image.jpg"})}),Object(s.jsxs)("div",{className:"bio-info-container",children:[Object(s.jsxs)("div",{className:"bio-section-one",children:[Object(s.jsx)("div",{className:"p-c-title",children:"News & Biography"}),Object(s.jsx)("p",{children:"Puff has painted all her life, she studied at Chelsea School of Art and Winchester School of Art,"}),Object(s.jsx)("p",{children:"also with Jamie Rowtley and Nicholas Beere."}),Object(s.jsxs)("p",{children:["She is currently teaching foundation at ",Object(s.jsx)("a",{href:"https://www.collegearts.co.uk/",children:"College Arts Hampshire"}),", and divides her time between her teaching and her own work."]})]}),Object(s.jsxs)("div",{className:"bio-section-two-three",children:[Object(s.jsx)("div",{className:"small-title",children:"Biography"}),Object(s.jsx)("p",{children:"Chelsea School of Art"}),Object(s.jsx)("p",{children:"Winchester School of Art"}),Object(s.jsx)("p",{children:"2017 - Present: Teaching Foundation at College Arts, Hampshire"})]}),Object(s.jsxs)("div",{className:"bio-section-two-three",children:[Object(s.jsx)("div",{className:"small-title",children:"Exhibitions"}),Object(s.jsx)("p",{children:"Josie Eastwood Fine Art"}),Object(s.jsx)("p",{children:"Private Exhibitions"})]})]})]}),Object(s.jsx)(y,{})]})};var R=function(){var e=n.a.useState(null),c=Object(m.a)(e,2),t=c[0],a=c[1],r=Object(o.g)().id,i=n.a.useState(!0),j=Object(m.a)(i,2),x=j[0],O=j[1],u=n.a.useState(!1),v=Object(m.a)(u,2),p=v[0],g=v[1];n.a.useEffect((function(){(function(){var e=Object(d.a)(b.a.mark((function e(){var c,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(r);case 3:if(c=e.sent,t=c.data,a(t),!t.status.includes("\xa3")){e.next=10;break}g(!0),e.next=11;break;case 10:return e.abrupt("return");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[r]);var f=function(){O(!x)};return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"head-s-one",children:Object(s.jsx)("div",{className:"fa fa-bars",onClick:f})}),Object(s.jsx)(k,{})]}),x?Object(s.jsx)("div",{}):Object(s.jsx)("div",{className:"main-photo-burger",children:Object(s.jsxs)("div",{className:"burger-menu",children:[Object(s.jsx)(l.b,{onClick:f,to:"/",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEW WORK"})}),Object(s.jsx)(l.b,{onClick:f,to:"/previous-work",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PAST WORK"})}),Object(s.jsx)(l.b,{onClick:f,to:"/portraits",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PORTRAITS"})}),Object(s.jsx)(l.b,{onClick:f,to:"/sketches",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"SKETCHES"})}),Object(s.jsx)(l.b,{onClick:f,to:"/news-bio",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEWS&BIOGRAPHY"})})]})}),Object(s.jsx)("div",{className:"nav-bar-container",children:Object(s.jsx)(h,{})}),t?Object(s.jsxs)("div",{className:"bio-main",children:[Object(s.jsx)("div",{className:"bio-photo-container",children:Object(s.jsx)("div",{className:"bio-photo",children:Object(s.jsx)("img",{src:"http://localhost:8000".concat(t.image),className:"p-show-image"})})}),Object(s.jsxs)("div",{className:"p-show-info-container",children:[Object(s.jsx)("div",{className:"p-show-section-one",children:Object(s.jsx)("div",{children:t.name})}),Object(s.jsxs)("div",{className:"p-show-section-two",children:[Object(s.jsx)("div",{children:t.style}),Object(s.jsx)("div",{children:t.size})]}),p?Object(s.jsxs)("div",{className:"p-show-section-three",children:[Object(s.jsx)("div",{children:t.status}),Object(s.jsx)(l.b,{to:"/enquire-form",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"p-show-enquire",children:"Enquire about this work"})})]}):Object(s.jsx)("div",{className:"no-price"})]})]}):Object(s.jsx)("div",{children:"Loading ..."}),Object(s.jsx)(y,{})]})},W=t(14),T=t(20);var A=function(){var e=Object(o.f)(),c=n.a.useState(!0),t=Object(m.a)(c,2),a=t[0],r=t[1],i=n.a.useState({full_name:"",email:"",phone_number:"",enquiring_about:"",message:""}),j=Object(m.a)(i,2),x=j[0],O=j[1],u=n.a.useState({full_name:"",email:"",phone_number:"",enquiring_about:"",message:""}),v=Object(m.a)(u,2),N=v[0],g=v[1],f=function(){var c=Object(d.a)(b.a.mark((function c(t){var s,a;return b.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t.preventDefault(),c.prev=1,c.next=4,p(x);case 4:s=c.sent,a=s.data,console.log(a),e.push("/thank-you"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),g(c.t0.response.data);case 13:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(e){return c.apply(this,arguments)}}(),S=function(e){var c=e.target.value;O(Object(T.a)(Object(T.a)({},x),{},Object(W.a)({},e.target.name,c))),g("")},C=function(){r(!a)};return Object(s.jsxs)("section",{className:"base-container",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"head-s-one",children:Object(s.jsx)("div",{className:"fa fa-bars",onClick:C})}),Object(s.jsx)(k,{})]}),Object(s.jsx)("div",{className:"nav-bar-container",children:Object(s.jsx)(h,{})}),a?Object(s.jsx)("div",{}):Object(s.jsx)("div",{className:"main-photo-burger-form",children:Object(s.jsxs)("div",{className:"burger-menu",children:[Object(s.jsx)(l.b,{onClick:C,to:"/",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEW WORK"})}),Object(s.jsx)(l.b,{onClick:C,to:"/previous-work",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PAST WORK"})}),Object(s.jsx)(l.b,{onClick:C,to:"/portraits",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PORTRAITS"})}),Object(s.jsx)(l.b,{onClick:C,to:"/sketches",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"SKETCHES"})}),Object(s.jsx)(l.b,{onClick:C,to:"/news-bio",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEWS&BIOGRAPHY"})})]})}),Object(s.jsx)("div",{className:"form-header",children:"Enquirey Form"}),Object(s.jsxs)("div",{className:"form-content",children:[Object(s.jsxs)("form",{onSubmit:f,className:"form",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"label",children:Object(s.jsx)("input",{className:"input",placeholder:"Full name",onChange:S,name:"full_name",value:x.full_name})}),N.full_name?Object(s.jsx)("div",{className:"error-message",children:"*".concat(N.full_name)}):Object(s.jsx)("div",{className:"error-message"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"label",children:Object(s.jsx)("input",{className:"input",placeholder:"Email",onChange:S,name:"email",value:x.email})}),N.email?Object(s.jsxs)("div",{className:"error-message",children:["*",N.email]}):Object(s.jsx)("div",{className:"error-message"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"label",children:Object(s.jsx)("input",{className:"input",placeholder:"Phone number",onChange:S,name:"phone_number",value:x.phone_number})}),N.phone_number?Object(s.jsxs)("div",{className:"error-message",children:["*",N.phone_number]}):Object(s.jsx)("div",{className:"error-message"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"label",children:Object(s.jsx)("input",{className:"input",placeholder:"Enquiring about",onChange:S,name:"enquiring_about",value:x.enquiring_about})}),N.enquiring_about?Object(s.jsxs)("div",{className:"error-message",children:["*",N.enquiring_about]}):Object(s.jsx)("div",{className:"error-message"})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"label",children:Object(s.jsx)("textarea",{className:"text-area",placeholder:"Message",onChange:S,name:"message",value:x.message})}),N.message?Object(s.jsxs)("div",{className:"error-message",children:["*",N.message]}):Object(s.jsx)("div",{className:"error-message"})]}),Object(s.jsx)("div",{className:"form-footer",children:Object(s.jsx)("button",{type:"submit",className:"button",children:"Send Form"})})]}),Object(s.jsx)(y,{})]})]})};var P=function(){var e=n.a.useState(!0),c=Object(m.a)(e,2),t=c[0],a=c[1],r=function(){a(!t)};return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"head-s-one",children:Object(s.jsx)("div",{className:"fa fa-bars",onClick:r})}),Object(s.jsx)(k,{})]}),Object(s.jsx)("div",{className:"nav-bar-container",children:Object(s.jsx)(h,{})}),t?Object(s.jsx)("div",{}):Object(s.jsx)("div",{className:"main-photo-burger",children:Object(s.jsxs)("div",{className:"burger-menu",children:[Object(s.jsx)(l.b,{onClick:r,to:"/",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEW WORK"})}),Object(s.jsx)(l.b,{onClick:r,to:"/previous-work",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PAST WORK"})}),Object(s.jsx)(l.b,{onClick:r,to:"/portraits",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"PORTRAITS"})}),Object(s.jsx)(l.b,{onClick:r,to:"/sketches",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"SKETCHES"})}),Object(s.jsx)(l.b,{onClick:r,to:"/news-bio",style:{textDecoration:"none",color:"black"},children:Object(s.jsx)("div",{className:"burger-item",children:"NEWS&BIOGRAPHY"})})]})}),Object(s.jsxs)("div",{className:"thank-you-container",children:[Object(s.jsx)("div",{className:"thank-you-message",children:"Thank you for your message,"}),Object(s.jsx)("div",{className:"thank-you-message",children:"I will get back to you as soon as possible!"})]}),Object(s.jsx)(y,{})]})};var K=function(){return Object(s.jsx)(l.a,{children:Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/",component:S}),Object(s.jsx)(o.a,{path:"/previous-work",component:C}),Object(s.jsx)(o.a,{path:"/portraits",component:w}),Object(s.jsx)(o.a,{path:"/sketches",component:D}),Object(s.jsx)(o.a,{path:"/news-bio",component:E}),Object(s.jsx)(o.a,{path:"/pictures/:id",component:R}),Object(s.jsx)(o.a,{path:"/enquire-form",component:A}),Object(s.jsx)(o.a,{path:"/thank-you",component:P})]})})};i.a.render(Object(s.jsx)(K,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.7fce7169.chunk.js.map
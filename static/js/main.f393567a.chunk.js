/*!

=========================================================
* Now UI Kit React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
(this["webpackJsonpchristopher-dent"]=this["webpackJsonpchristopher-dent"]||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/newsky.b185ec31.jpg"},40:function(e,t,a){},41:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/more-gears.5ee9367c.gif"},46:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/spaceman3.a549d049.gif"},47:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/books.8318b5b2.gif"},58:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),r=a(18),n=a.n(r),i=(a(40),a(41),a(30)),o=a(31),l=a(35),d=a(34),j=a(13),h=a(8),m=a(10),b=a(59),u=a(60),g=a(61),f=a(62),p=a(63),x=a(64),O=a(1);var w=function(){var e=Object(s.useState)(!0),t=Object(m.a)(e,2),a=(t[0],t[1],c.a.useState("navbar-transparent")),r=Object(m.a)(a,2),n=r[0],i=r[1],o=c.a.useState(!1),l=Object(m.a)(o,2);return l[0],l[1],c.a.useEffect((function(){var e=function(){document.documentElement.scrollTop>399||document.body.scrollTop>399?i(""):(document.documentElement.scrollTop<400||document.body.scrollTop<400)&&i("navbar-transparent")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(b.a,{className:"fixed-top "+n,expand:"lg",color:"info",children:[Object(O.jsxs)(u.a,{children:[Object(O.jsx)("div",{className:"navbar-translate",children:Object(O.jsx)(g.a,{href:"/index",id:"navbar-brand",children:Object(O.jsx)("h4",{children:" CJD "})})}),Object(O.jsxs)(f.a,{navbar:!0,children:[Object(O.jsx)(p.a,{children:Object(O.jsx)(x.a,{href:"/projects",children:Object(O.jsx)("p",{children:"Projects"})})}),Object(O.jsx)(p.a,{children:Object(O.jsx)(x.a,{href:"/about",children:Object(O.jsx)("p",{children:"About"})})}),Object(O.jsx)(p.a,{children:Object(O.jsx)(x.a,{href:"/blog",children:Object(O.jsx)("p",{children:"Blog"})})})]})]}),Object(O.jsx)("br",{})]})})},v=a(65),y=a(66),I=a(32),k=[{href:"/projects",src:a(45).default,altText:"My Coding Projects",caption:"My Coding Projects"},{href:"/about",src:a(46).default,altText:"About Christopher",caption:"About Christopher"},{href:"https://christopher-dent.medium.com/",src:a(47).default,altText:"My Blog",caption:"My Blog"}];var N=function(){var e=c.a.useState(0),t=Object(m.a)(e,2),a=t[0],s=t[1],r=c.a.useState(!1),n=Object(m.a)(r,2),i=n[0],o=n[1],l=function(){o(!0)},d=function(){o(!1)},j=function(){if(!i){var e=a===k.length-1?0:a+1;s(e)}},h=function(){if(!i){var e=0===a?k.length-1:a-1;s(e)}};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{id:"carousel",children:Object(O.jsxs)(v.a,{activeIndex:a,next:j,previous:h,children:[Object(O.jsx)(y.a,{items:k,activeIndex:a,onClickHandler:function(e){i||s(e)}}),k.map((function(e){return Object(O.jsxs)(I.a,{onExiting:l,onExited:d,children:[Object(O.jsx)("a",{href:e.href,children:Object(O.jsx)("img",{src:e.src,alt:e.altText,width:"850",height:"600"})}),Object(O.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(O.jsx)("h5",{children:e.caption})})]},e.src)})),Object(O.jsx)("a",{className:"carousel-control-prev","data-slide":"prev",href:"#pablo",onClick:function(e){e.preventDefault(),h()},role:"button",children:Object(O.jsx)("i",{className:"now-ui-icons arrows-1_minimal-left"})}),Object(O.jsx)("a",{className:"carousel-control-next","data-slide":"next",href:"#pablo",onClick:function(e){e.preventDefault(),j()},role:"button",children:Object(O.jsx)("i",{className:"now-ui-icons arrows-1_minimal-right"})})]})})})},E=a(67);var S=function(){return Object(O.jsx)(E.a,{children:Object(O.jsxs)("tbody",{children:[Object(O.jsx)("a",{href:"/projects",children:Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:"Projects"})})}),Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:"Blog"})}),Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:"About"})}),Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:" "})})]})})};var C=function(){var e=c.a.createRef();return c.a.useEffect((function(){if(window.innerWidth>991){var t=function(){var t=window.pageYOffset/3;e.current.style.transform="translate3d(0,"+t+"px,0)"};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(O.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(17).default+")"},ref:e}),Object(O.jsxs)(u.a,{children:[Object(O.jsx)("div",{children:Object(O.jsx)("h1",{className:"h1-seo",children:"christopher james dent"})}),Object(O.jsx)(N,{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{})]}),Object(O.jsx)(S,{})]})})},L=a(68),B=a(69),T=a(70),A=a(71);var M=function(){var e=c.a.createRef(),t=c.a.useState("2"),s=Object(m.a)(t,2),r=s[0],n=s[1];return c.a.useEffect((function(){return document.body.classList.add("profile-page"),document.body.classList.add("sidebar-collapse"),document.documentElement.classList.remove("nav-open"),window.scrollTo(0,0),document.body.scrollTop=0,function(){document.body.classList.remove("profile-page"),document.body.classList.remove("sidebar-collapse")}}),[]),c.a.useEffect((function(){if(window.innerWidth>991){var t=function(){var t=window.pageYOffset/3;e.current.style.transform="translate3d(0,"+t+"px,0)"};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(O.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(17).default+")"},ref:e}),Object(O.jsxs)(u.a,{children:[Object(O.jsx)("h3",{className:"title",children:"Coding Projects"}),Object(O.jsx)("h5",{className:"description",children:"This page showcases my coding projects from Flatiron school and a few I have completed since graduating.  I attended Flatiron while working a busy full time job and continue to do all of this in my spare time."}),Object(O.jsxs)(L.a,{children:[Object(O.jsx)(B.a,{className:"ml-auto mr-auto",md:"6",children:Object(O.jsx)("div",{className:"nav-align-center",children:Object(O.jsxs)(f.a,{className:"nav-pills-info nav-pills-just-icons",pills:!0,role:"tablist",children:[Object(O.jsx)(p.a,{children:Object(O.jsx)(x.a,{className:"2"===r?"active":"",href:"#pablo",onClick:function(e){e.preventDefault(),n("2")},children:Object(O.jsx)("i",{children:Object(O.jsx)("span",{className:"material-icons",children:"school"})})})}),Object(O.jsx)(p.a,{children:Object(O.jsx)(x.a,{className:"1"===r?"active":"",href:"#pablo",onClick:function(e){e.preventDefault(),n("1")},children:Object(O.jsx)("i",{className:"material-icons",children:"lightbulb"})})})]})})}),Object(O.jsxs)(T.a,{className:"gallery",activeTab:"pills"+r,children:[Object(O.jsx)(A.a,{tabId:"pills2",children:Object(O.jsx)(B.a,{className:"ml-auto mr-auto",md:"10",children:Object(O.jsxs)(L.a,{className:"collections",children:[Object(O.jsxs)(B.a,{md:"6",children:[Object(O.jsx)("p",{children:"Dinofinder 2020"}),Object(O.jsx)("img",{alt:"...",className:"img-raised",src:"https://adventuredinosaurs.com/wp-content/uploads/2020/07/raptor-dinosaur-habitat-adventuredinosaurs.jpg"}),Object(O.jsx)("p",{children:"Association Volunteer Manager"}),Object(O.jsx)("img",{alt:"...",className:"img-raised",src:"https://img1.wsimg.com/isteam/stock/7903/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"})]}),Object(O.jsxs)(B.a,{md:"6",children:[Object(O.jsx)("p",{children:"Exoplanet Explorer"}),Object(O.jsx)("img",{alt:"...",className:"img-raised",src:"https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/UduwYH6XvJC5VozALe9oNi-320-80.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"}),Object(O.jsx)("p",{children:"Battle, Ships!"}),Object(O.jsx)("img",{alt:"...",className:"img-raised",src:"https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/71IVS5%2BCJ1L._AC_SL1001_.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"})]})]})})}),Object(O.jsx)(A.a,{tabId:"pills1",children:Object(O.jsx)(B.a,{className:"ml-auto mr-auto",md:"10",children:Object(O.jsxs)(L.a,{className:"collections",children:[Object(O.jsx)(B.a,{md:"6",children:Object(O.jsx)("img",{alt:"...",className:"img-raised",src:"https://cjdportfolio.s3.amazonaws.com/get-newsletter.png"})}),Object(O.jsx)(B.a,{md:"6",children:Object(O.jsx)("img",{alt:"...",className:"img-raised",src:"https://cjdportfolio.s3.amazonaws.com/Screenshot+from+2021-10-03+23-14-19.png"})})]})})})]})]})]})]})})},z=a(16),F=a(72),G=a(73),D=a(74);var H=function(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),r=t[0],n=t[1],i=c.a.createRef();return c.a.useEffect((function(){if(window.innerWidth>991){var e=function(){var e=window.pageYOffset/3;i.current.style.transform="translate3d(0,"+e+"px,0)"};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(O.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(17).default+")"},ref:i}),Object(O.jsxs)(u.a,{children:[Object(O.jsx)("div",{children:Object(O.jsx)("h1",{className:"h1-seo",children:"about me"})}),Object(O.jsx)(F.a,{color:"primary",onClick:function(){return n(!r)},style:{marginBottom:"1rem"},children:"The Life Story"}),Object(O.jsxs)(G.a,{isOpen:r,children:[Object(O.jsxs)(D.a,{children:[Object(O.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/asperida.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(O.jsx)("div",{class:"media-body",children:Object(O.jsxs)("p",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Born to an American mother and a British father, I grew up on both sides of the Atlantic.  As a newborn, I sailed around the Bahamas with my parents on our boat Asperida, which was also our home for many years.  I grew up around boats and have always loved the sea, and the natural world in general \u2013 something you\u2019ll probably notice throughout my collection of apps."]})})]}),Object(O.jsx)("img",Object(z.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/asperida.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(D.a,{children:[Object(O.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/house.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(O.jsx)("div",{class:"media-body",children:Object(O.jsx)("p",{children:"Eventually, my family moved from the sea to the land and built a house in the woods in Sag Harbor, NY on the eastern tip of Long Island.  It was during these years that I first gained a passion for tech.  We didn\u2019t have a lot, but an aunt donated her old computer to me -  a Gateway I think, with a 386 processor.  486 was all the rage by then, but I took what I could get.  It was painfully slow with only 4MB of RAM so I saved all summer to upgrade it to 8MB, in doing so teaching myself how to take a computer apart and put it back together again.  Then I set my sights on software \u2013 using as many free AOL trials as possible, I learned all I could about the internet at that time.  I printed out several hundred pages of an HTML guide ad started building websites \u2013 websites for school, websites for my favorite shows and movies, websites for everything I could imagine.  I used these skills to volunteer at the local hospital and help them build some rudimentary sites too, something pretty new in the mid-90\u2019s.  Moving on from HTML I started teaching myself some more advanced programming like C++.  The height of all this was a pretty complex text-based video game starring some of my friends from school.  I was absolutely in love with tech and everyone fully expected me to go on to college and major in computer science or something similar."})})]}),Object(O.jsx)("img",Object(z.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/house.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(D.a,{children:[Object(O.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/castle.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(O.jsx)("div",{class:"media-body",children:Object(O.jsx)("p",{children:"But I also wanted adventure, at any cost.  So, at 17 years old, I left Sag Harbor \u2013 and my tech hobby - to study abroad at an actual castle in Herstmonceux, England as part of McGill University\u2019s freshman year abroad program.  McGill offered everything I wanted \u2013 a reputable school, a solid education, and a chance to live in not just one foriegn country but two.  The only thing was, the study abroad program that I wanted so badly to attend was part of the BA program.  There were absolutely no BS courses taught at the Herstmonceux campus.  At that age, my desire for adventure far outweighed practicality, and I enrolled in the BA program.  When I got to the main campus in Montreal the next year, after a full year of gathering arts credits and developing a genuine interest in history and politics, I declared for a double major in just that and left tech behind."})})]}),Object(O.jsx)("img",Object(z.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/castle.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(D.a,{children:[Object(O.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/chrisangie.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(O.jsxs)("div",{class:"media-body",children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Fast forward to 2018.  By then, I\u2019d moved to Washington, DC where I began supporting technical projects for awesome scientific association.  After a few years of that I took a moved back to the UK (Scotland this time) where I got to work at the Royal Bank of Scotland and the Edinburgh Council, gaining valuable skills and certifications in project management working for the Royal Bank of Scotland and then the City of Edinburgh.  Three years later I moved back to DC again and finally here, to historic Saint Augustine, Florida and got married to the love of my life, Angelica.  Today I work remotely for that same DC based scientific association, now running programs and gaining more skills in project and association management.  I\u2019ve done well and had some great adventures.  But they\u2019re not over yet."})]})]}),Object(O.jsx)("img",Object(z.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/chrisangie.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(D.a,{children:[Object(O.jsx)("img",{class:"align-self-center mr-3",src:"https://media4.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e4742m73cffv1rajt9hc73ckz6e7v8ep1mfs29v7764&rid=giphy.gif&ct=g",alt:"Generic placeholder image",id:"about-img"}),Object(O.jsxs)("div",{class:"media-body",children:[Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"I\u2019m a bit of a dreamer.  I can get bored easily.  I like to be challenged and I love to learn.  When it comes down to it, I\u2019m a planner who likes to keep things organized.  Moving away from tech was one of the few regrets I had in life.  So, a couple years ago, I planned to get myself back into tech, my old passion and lifelong interest.  That\u2019s when I enrolled in Flatiron School\u2019s Self-Paced Online Software Engineering school and graduated in December 2020 with a boatload of new skills under my belt, skills I want to use to keep this adventure going and take my career to a new level.  So, welcome to my portfolio site.  Here you\u2019ll find my final projects from Flatiron as well as some smaller projects I\u2019ve completed since graduation using new skills I taught myself since then.  Because I love to learn, and learning to code professionally has taught me that there is always something new to learn."})]})]}),Object(O.jsx)("img",Object(z.a)({class:"align-self-center mr-3",src:"https://media4.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e4742m73cffv1rajt9hc73ckz6e7v8ep1mfs29v7764&rid=giphy.gif&ct=g",alt:"Generic placeholder image",id:"about-img"},"id","mobile"))]})]})]})})};var W=function(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),r=(t[0],t[1],c.a.createRef());return c.a.useEffect((function(){if(window.innerWidth>991){var e=function(){var e=window.pageYOffset/3;r.current.style.transform="translate3d(0,"+e+"px,0)"};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(O.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(17).default+")"},ref:r}),Object(O.jsxs)(u.a,{children:[Object(O.jsx)("h3",{className:"title",children:"My Blog"}),Object(O.jsx)("h5",{className:"description",children:"Writing as I learn more about code.  Click to see read my blog on Medium."}),Object(O.jsx)("a",{href:"https://christopher-dent.medium.com/",children:Object(O.jsx)("img",{src:"https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/family-blog.jpg"})})]})]})})};var R=function(){return Object(O.jsx)("footer",{className:"footer","data-background-color":"black",children:Object(O.jsx)(u.a,{children:Object(O.jsx)("div",{children:Object(O.jsxs)("center",{children:["\xa9 ",(new Date).getFullYear()," | "," Christopher Dent "]})})})})},P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(j.a,{basename:"{process.env.PUBLIC_URL}",children:[Object(O.jsx)(w,{}),Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/christopher-dent",component:C}),Object(O.jsx)(h.a,{exact:!0,path:"/index",component:C}),Object(O.jsx)(h.a,{exact:!0,path:"/about",component:H}),Object(O.jsx)(h.a,{exact:!0,path:"/projects",component:M}),Object(O.jsx)(h.a,{exact:!0,path:"/blog",component:W})]})}),Object(O.jsx)(R,{})]})}}]),a}(c.a.Component),Y=P;n.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Y,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.f393567a.chunk.js.map
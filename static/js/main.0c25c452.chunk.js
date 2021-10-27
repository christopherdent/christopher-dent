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
(this["webpackJsonpchristopher-dent"]=this["webpackJsonpchristopher-dent"]||[]).push([[0],{18:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/newsky.b185ec31.jpg"},36:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/more-gears.5ee9367c.gif"},42:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/spaceman3.a549d049.gif"},43:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/books.8318b5b2.gif"},54:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),r=a(17),n=a.n(r),i=a(13),o=(a(36),a(37),a(10)),l=a(8),d=a(11),j=a(55),h=a(56),m=a(57),b=a(58),u=a(59),g=a(60),f=a(1);var p=function(){var e=Object(s.useState)(!0),t=Object(d.a)(e,2),a=(t[0],t[1],c.a.useState("navbar-transparent")),r=Object(d.a)(a,2),n=r[0],i=r[1],o=c.a.useState(!1),l=Object(d.a)(o,2);return l[0],l[1],c.a.useEffect((function(){var e=function(){document.documentElement.scrollTop>399||document.body.scrollTop>399?i(""):(document.documentElement.scrollTop<400||document.body.scrollTop<400)&&i("navbar-transparent")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(j.a,{className:"fixed-top "+n,expand:"lg",color:"info",children:[Object(f.jsxs)(h.a,{children:[Object(f.jsx)("div",{className:"navbar-translate",children:Object(f.jsx)(m.a,{href:"/",target:"_blank",id:"navbar-brand",children:Object(f.jsx)("h4",{children:" CJD "})})}),Object(f.jsxs)(b.a,{navbar:!0,children:[Object(f.jsx)(u.a,{children:Object(f.jsx)(g.a,{href:"/projects",children:Object(f.jsx)("p",{children:"Projects"})})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(g.a,{href:"/about",children:Object(f.jsx)("p",{children:"About"})})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(g.a,{href:"/blog",children:Object(f.jsx)("p",{children:"Blog"})})})]})]}),Object(f.jsx)("br",{})]})})},x=a(61),O=a(62),w=a(30),v=[{href:"/projects",src:a(41).default,altText:"My Coding Projects",caption:"My Coding Projects"},{href:"/about",src:a(42).default,altText:"About Christopher",caption:"About Christopher"},{href:"https://christopher-dent.medium.com/",src:a(43).default,altText:"My Blog",caption:"My Blog"}];var y=function(){var e=c.a.useState(0),t=Object(d.a)(e,2),a=t[0],s=t[1],r=c.a.useState(!1),n=Object(d.a)(r,2),i=n[0],o=n[1],l=function(){o(!0)},j=function(){o(!1)},h=function(){if(!i){var e=a===v.length-1?0:a+1;s(e)}},m=function(){if(!i){var e=0===a?v.length-1:a-1;s(e)}};return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{id:"carousel",children:Object(f.jsxs)(x.a,{activeIndex:a,next:h,previous:m,children:[Object(f.jsx)(O.a,{items:v,activeIndex:a,onClickHandler:function(e){i||s(e)}}),v.map((function(e){return Object(f.jsxs)(w.a,{onExiting:l,onExited:j,children:[Object(f.jsx)("a",{href:e.href,children:Object(f.jsx)("img",{src:e.src,alt:e.altText,width:"850",height:"600"})}),Object(f.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(f.jsx)("h5",{children:e.caption})})]},e.src)})),Object(f.jsx)("a",{className:"carousel-control-prev","data-slide":"prev",href:"#pablo",onClick:function(e){e.preventDefault(),m()},role:"button",children:Object(f.jsx)("i",{className:"now-ui-icons arrows-1_minimal-left"})}),Object(f.jsx)("a",{className:"carousel-control-next","data-slide":"next",href:"#pablo",onClick:function(e){e.preventDefault(),h()},role:"button",children:Object(f.jsx)("i",{className:"now-ui-icons arrows-1_minimal-right"})})]})})})},I=a(63);var k=function(){return Object(f.jsx)(I.a,{children:Object(f.jsxs)("tbody",{children:[Object(f.jsx)("a",{href:"/projects",children:Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:"Projects"})})}),Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:"Blog"})}),Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:"About"})}),Object(f.jsx)("tr",{children:Object(f.jsx)("td",{children:" "})})]})})};var N=function(){var e=c.a.createRef();return c.a.useEffect((function(){if(window.innerWidth>991){var t=function(){var t=window.pageYOffset/3;e.current.style.transform="translate3d(0,"+t+"px,0)"};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}})),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(f.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(18).default+")"},ref:e}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)("div",{children:Object(f.jsx)("h1",{className:"h1-seo",children:"christopher james dent"})}),Object(f.jsx)(y,{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]}),Object(f.jsx)(k,{})]})})},E=a(64),L=a(65),S=a(66),T=a(67);var B=function(){var e=c.a.createRef(),t=c.a.useState("2"),s=Object(d.a)(t,2),r=s[0],n=s[1];return c.a.useEffect((function(){return document.body.classList.add("profile-page"),document.body.classList.add("sidebar-collapse"),document.documentElement.classList.remove("nav-open"),window.scrollTo(0,0),document.body.scrollTop=0,function(){document.body.classList.remove("profile-page"),document.body.classList.remove("sidebar-collapse")}}),[]),c.a.useEffect((function(){if(window.innerWidth>991){var t=function(){var t=window.pageYOffset/3;e.current.style.transform="translate3d(0,"+t+"px,0)"};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}})),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(f.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(18).default+")"},ref:e}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)("h3",{className:"title",children:"Coding Projects"}),Object(f.jsx)("h5",{className:"description",children:"This page showcases my coding projects from Flatiron school and a few I have completed since graduating.  I attended Flatiron while working a busy full time job and continue to do all of this in my spare time."}),Object(f.jsxs)(E.a,{children:[Object(f.jsx)(L.a,{className:"ml-auto mr-auto",md:"6",children:Object(f.jsx)("div",{className:"nav-align-center",children:Object(f.jsxs)(b.a,{className:"nav-pills-info nav-pills-just-icons",pills:!0,role:"tablist",children:[Object(f.jsx)(u.a,{children:Object(f.jsx)(g.a,{className:"2"===r?"active":"",href:"#pablo",onClick:function(e){e.preventDefault(),n("2")},children:Object(f.jsx)("i",{children:Object(f.jsx)("span",{className:"material-icons",children:"school"})})})}),Object(f.jsx)(u.a,{children:Object(f.jsx)(g.a,{className:"1"===r?"active":"",href:"#pablo",onClick:function(e){e.preventDefault(),n("1")},children:Object(f.jsx)("i",{className:"material-icons",children:"lightbulb"})})})]})})}),Object(f.jsxs)(S.a,{className:"gallery",activeTab:"pills"+r,children:[Object(f.jsx)(T.a,{tabId:"pills2",children:Object(f.jsx)(L.a,{className:"ml-auto mr-auto",md:"10",children:Object(f.jsxs)(E.a,{className:"collections",children:[Object(f.jsxs)(L.a,{md:"6",children:[Object(f.jsx)("p",{children:"Dinofinder 2020"}),Object(f.jsx)("img",{alt:"...",className:"img-raised",src:"https://adventuredinosaurs.com/wp-content/uploads/2020/07/raptor-dinosaur-habitat-adventuredinosaurs.jpg"}),Object(f.jsx)("p",{children:"Association Volunteer Manager"}),Object(f.jsx)("img",{alt:"...",className:"img-raised",src:"https://img1.wsimg.com/isteam/stock/7903/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"})]}),Object(f.jsxs)(L.a,{md:"6",children:[Object(f.jsx)("p",{children:"Exoplanet Explorer"}),Object(f.jsx)("img",{alt:"...",className:"img-raised",src:"https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/UduwYH6XvJC5VozALe9oNi-320-80.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"}),Object(f.jsx)("p",{children:"Battle, Ships!"}),Object(f.jsx)("img",{alt:"...",className:"img-raised",src:"https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/71IVS5%2BCJ1L._AC_SL1001_.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"})]})]})})}),Object(f.jsx)(T.a,{tabId:"pills1",children:Object(f.jsx)(L.a,{className:"ml-auto mr-auto",md:"10",children:Object(f.jsxs)(E.a,{className:"collections",children:[Object(f.jsx)(L.a,{md:"6",children:Object(f.jsx)("img",{alt:"...",className:"img-raised",src:"https://cjdportfolio.s3.amazonaws.com/get-newsletter.png"})}),Object(f.jsx)(L.a,{md:"6",children:Object(f.jsx)("img",{alt:"...",className:"img-raised",src:"https://cjdportfolio.s3.amazonaws.com/Screenshot+from+2021-10-03+23-14-19.png"})})]})})})]})]})]})]})})},C=a(16),A=a(68),M=a(69),z=a(70);var F=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),r=t[0],n=t[1],i=c.a.createRef();return c.a.useEffect((function(){if(window.innerWidth>991){var e=function(){var e=window.pageYOffset/3;i.current.style.transform="translate3d(0,"+e+"px,0)"};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}})),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(f.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(18).default+")"},ref:i}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)("div",{children:Object(f.jsx)("h1",{className:"h1-seo",children:"about me"})}),Object(f.jsx)(A.a,{color:"primary",onClick:function(){return n(!r)},style:{marginBottom:"1rem"},children:"The Life Story"}),Object(f.jsxs)(M.a,{isOpen:r,children:[Object(f.jsxs)(z.a,{children:[Object(f.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/asperida.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(f.jsx)("div",{class:"media-body",children:Object(f.jsxs)("p",{children:[Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"Born to an American mother and a British father, I grew up on both sides of the Atlantic.  As a newborn, I sailed around the Bahamas with my parents on our boat Asperida, which was also our home for many years.  I grew up around boats and have always loved the sea, and the natural world in general \u2013 something you\u2019ll probably notice throughout my collection of apps."]})})]}),Object(f.jsx)("img",Object(C.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/asperida.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)(z.a,{children:[Object(f.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/house.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(f.jsx)("div",{class:"media-body",children:Object(f.jsx)("p",{children:"Eventually, my family moved from the sea to the land and built a house in the woods in Sag Harbor, NY on the eastern tip of Long Island.  It was during these years that I first gained a passion for tech.  We didn\u2019t have a lot, but an aunt donated her old computer to me -  a Gateway I think, with a 386 processor.  486 was all the rage by then, but I took what I could get.  It was painfully slow with only 4MB of RAM so I saved all summer to upgrade it to 8MB, in doing so teaching myself how to take a computer apart and put it back together again.  Then I set my sights on software \u2013 using as many free AOL trials as possible, I learned all I could about the internet at that time.  I printed out several hundred pages of an HTML guide ad started building websites \u2013 websites for school, websites for my favorite shows and movies, websites for everything I could imagine.  I used these skills to volunteer at the local hospital and help them build some rudimentary sites too, something pretty new in the mid-90\u2019s.  Moving on from HTML I started teaching myself some more advanced programming like C++.  The height of all this was a pretty complex text-based video game starring some of my friends from school.  I was absolutely in love with tech and everyone fully expected me to go on to college and major in computer science or something similar."})})]}),Object(f.jsx)("img",Object(C.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/house.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)(z.a,{children:[Object(f.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/castle.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(f.jsx)("div",{class:"media-body",children:Object(f.jsx)("p",{children:"But I also wanted adventure, at any cost.  So, at 17 years old, I left Sag Harbor \u2013 and my tech hobby - to study abroad at an actual castle in Herstmonceux, England as part of McGill University\u2019s freshman year abroad program.  McGill offered everything I wanted \u2013 a reputable school, a solid education, and a chance to live in not just one foriegn country but two.  The only thing was, the study abroad program that I wanted so badly to attend was part of the BA program.  There were absolutely no BS courses taught at the Herstmonceux campus.  At that age, my desire for adventure far outweighed practicality, and I enrolled in the BA program.  When I got to the main campus in Montreal the next year, after a full year of gathering arts credits and developing a genuine interest in history and politics, I declared for a double major in just that and left tech behind."})})]}),Object(f.jsx)("img",Object(C.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/castle.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)(z.a,{children:[Object(f.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/chrisangie.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(f.jsxs)("div",{class:"media-body",children:[Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"Fast forward to 2018.  By then, I\u2019d moved to Washington, DC where I began supporting technical projects for awesome scientific association.  After a few years of that I took a moved back to the UK (Scotland this time) where I got to work at the Royal Bank of Scotland and the Edinburgh Council, gaining valuable skills and certifications in project management working for the Royal Bank of Scotland and then the City of Edinburgh.  Three years later I moved back to DC again and finally here, to historic Saint Augustine, Florida and got married to the love of my life, Angelica.  Today I work remotely for that same DC based scientific association, now running programs and gaining more skills in project and association management.  I\u2019ve done well and had some great adventures.  But they\u2019re not over yet."})]})]}),Object(f.jsx)("img",Object(C.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/chrisangie.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsxs)(z.a,{children:[Object(f.jsx)("img",{class:"align-self-center mr-3",src:"https://media4.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e4742m73cffv1rajt9hc73ckz6e7v8ep1mfs29v7764&rid=giphy.gif&ct=g",alt:"Generic placeholder image",id:"about-img"}),Object(f.jsxs)("div",{class:"media-body",children:[Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"I\u2019m a bit of a dreamer.  I can get bored easily.  I like to be challenged and I love to learn.  When it comes down to it, I\u2019m a planner who likes to keep things organized.  Moving away from tech was one of the few regrets I had in life.  So, a couple years ago, I planned to get myself back into tech, my old passion and lifelong interest.  That\u2019s when I enrolled in Flatiron School\u2019s Self-Paced Online Software Engineering school and graduated in December 2020 with a boatload of new skills under my belt, skills I want to use to keep this adventure going and take my career to a new level.  So, welcome to my portfolio site.  Here you\u2019ll find my final projects from Flatiron as well as some smaller projects I\u2019ve completed since graduation using new skills I taught myself since then.  Because I love to learn, and learning to code professionally has taught me that there is always something new to learn."})]})]}),Object(f.jsx)("img",Object(C.a)({class:"align-self-center mr-3",src:"https://media4.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e4742m73cffv1rajt9hc73ckz6e7v8ep1mfs29v7764&rid=giphy.gif&ct=g",alt:"Generic placeholder image",id:"about-img"},"id","mobile"))]})]})]})})};var G=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),r=(t[0],t[1],c.a.createRef());return c.a.useEffect((function(){if(window.innerWidth>991){var e=function(){var e=window.pageYOffset/3;r.current.style.transform="translate3d(0,"+e+"px,0)"};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}})),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(f.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(18).default+")"},ref:r}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)("h3",{className:"title",children:"My Blog"}),Object(f.jsx)("h5",{className:"description",children:"Writing as I learn more about code.  Click to see read my blog on Medium."}),Object(f.jsx)("a",{href:"https://christopher-dent.medium.com/",children:Object(f.jsx)("img",{src:"https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/family-blog.jpg"})})]})]})})};var D=function(){return Object(f.jsx)("footer",{className:"footer","data-background-color":"black",children:Object(f.jsx)(h.a,{children:Object(f.jsx)("div",{children:Object(f.jsxs)("center",{children:["\xa9 ",(new Date).getFullYear()," | "," Christopher Dent "]})})})})};Object(o.a)();var H=function(){return c.a.useEffect((function(){return document.body.classList.add("index-page"),document.body.classList.add("sidebar-collapse"),document.documentElement.classList.remove("nav-open"),window.scrollTo(0,0),document.body.scrollTop=0,function(){document.body.classList.remove("index-page"),document.body.classList.remove("sidebar-collapse")}})),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{}),Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(f.jsx)(l.a,{exact:!0,path:"/projects",component:B}),Object(f.jsx)(l.a,{exact:!0,path:"/blog",component:G}),Object(f.jsx)(l.a,{exact:!0,path:"/about",component:F})]}),Object(f.jsx)(D,{})]})]})};n.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(H,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.0c25c452.chunk.js.map
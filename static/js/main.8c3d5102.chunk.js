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
(this["webpackJsonpchristopher-dent"]=this["webpackJsonpchristopher-dent"]||[]).push([[0],{20:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/newsky.b185ec31.jpg"},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/ibm.ea97fc60.gif"},49:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/spaceman3.a549d049.gif"},50:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/books.8318b5b2.gif"},66:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),i=a(16),s=a.n(i),c=(a(43),a(44),a(33)),o=a(34),l=a(38),d=a(37),h=a(25),j=a(8),b=a(10),m=a(67),p=a(68),u=a(69),g=a(70),f=a(71),x=a(72),O=a(0);var w=function(){var e=Object(r.useState)(!0),t=Object(b.a)(e,2),a=(t[0],t[1],n.a.useState("navbar-transparent")),i=Object(b.a)(a,2),s=i[0],c=i[1],o=n.a.useState(!1),l=Object(b.a)(o,2);return l[0],l[1],n.a.useEffect((function(){var e=function(){document.documentElement.scrollTop>109||document.body.scrollTop>109?c(""):(document.documentElement.scrollTop<110||document.body.scrollTop<110)&&c("navbar-transparent")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(m.a,{className:"fixed-top "+s,expand:"lg",color:"info",children:[Object(O.jsxs)(p.a,{children:[Object(O.jsx)("div",{className:"navbar-translate",children:Object(O.jsx)(u.a,{href:"/christopher-dent",id:"navbar-brand",children:Object(O.jsx)("h4",{children:" CJD "})})}),Object(O.jsxs)(g.a,{children:[Object(O.jsx)(f.a,{children:Object(O.jsx)(x.a,{href:"/christopher-dent/projects",children:Object(O.jsx)("p",{children:"Projects"})})}),Object(O.jsx)(f.a,{children:Object(O.jsx)(x.a,{href:"/christopher-dent/about",children:Object(O.jsx)("p",{children:"About"})})}),Object(O.jsx)(f.a,{children:Object(O.jsx)(x.a,{href:"/christopher-dent/blog",children:Object(O.jsx)("p",{children:"Blog"})})})]})]}),Object(O.jsx)("br",{})]})})},v=a(73),y=a(74),k=a(35),I=[{href:"/christopher-dent/projects",src:a(48).default,altText:"My Coding Projects",caption:"coding projects"},{href:"/christopher-dent/about",src:a(49).default,altText:"About Christopher",caption:"about christopher"},{href:"/christopher-dent/blog",src:a(50).default,altText:"My Blog",caption:"my blog"}];var C=function(){var e=n.a.useState(0),t=Object(b.a)(e,2),a=t[0],r=t[1],i=n.a.useState(!1),s=Object(b.a)(i,2),c=s[0],o=s[1],l=function(){o(!0)},d=function(){o(!1)},h=function(){if(!c){var e=a===I.length-1?0:a+1;r(e)}},j=function(){if(!c){var e=0===a?I.length-1:a-1;r(e)}};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{id:"carousel",children:Object(O.jsxs)(v.a,{activeIndex:a,next:h,previous:j,children:[Object(O.jsx)(y.a,{items:I,activeIndex:a,onClickHandler:function(e){c||r(e)}}),I.map((function(e){return Object(O.jsxs)(k.a,{onExiting:l,onExited:d,children:[Object(O.jsx)("a",{href:e.href,children:Object(O.jsx)("img",{src:e.src,alt:e.altText})}),Object(O.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(O.jsx)("h5",{children:e.caption})})]},e.src)})),Object(O.jsx)("a",{className:"carousel-control-prev","data-slide":"prev",href:"#pablo",onClick:function(e){e.preventDefault(),j()},role:"button",children:Object(O.jsx)("i",{className:"now-ui-icons arrows-1_minimal-left"})}),Object(O.jsx)("a",{className:"carousel-control-next","data-slide":"next",href:"#pablo",onClick:function(e){e.preventDefault(),h()},role:"button",children:Object(O.jsx)("i",{className:"now-ui-icons arrows-1_minimal-right"})})]})})})},N=a(15);var S=function(){var e=n.a.createRef();return n.a.useEffect((function(){if(window.innerWidth>991){var t=function(){var t=window.pageYOffset/3;e.current.style.transform="translate3d(0,"+t+"px,0)"};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(O.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(20).default+")"},ref:e}),Object(O.jsxs)(p.a,{id:"mainContain",children:[Object(O.jsx)("br",{}),Object(O.jsx)("div",{children:Object(O.jsx)("h1",{className:"h1-seo",children:"Christopher James Dent"})}),Object(O.jsx)(C,{})]})]})})},A=a(75),E=a(76),L=a(77),M=a(78),B=a(79),F=a(80),R=a(81),T=a(82),z=a(83);var _=function(){var e=n.a.createRef(),t=n.a.useState("2"),r=Object(b.a)(t,2),i=r[0],s=r[1];return n.a.useEffect((function(){if(document.body.classList.add("profile-page"),window.innerWidth>991){var t=function(){var t=window.pageYOffset/3;e.current.style.transform="translate3d(0,"+t+"px,0)"};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(O.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(20).default+")"},ref:e}),Object(O.jsxs)(p.a,{className:"projContainer",children:[Object(O.jsx)("h3",{className:"title",children:"Coding Projects"}),Object(O.jsx)("h5",{className:"description",children:"This page showcases my coding projects from Flatiron school (cap) and a few I have completed since graduating (bulb).  I attended Flatiron while working a busy full time job and continue to do all of this in my spare time."}),Object(O.jsx)(A.a,{children:Object(O.jsx)(E.a,{className:"ml-auto mr-auto",md:"6",children:Object(O.jsx)("div",{className:"nav-align-center",children:Object(O.jsxs)(g.a,{className:"nav-pills-info nav-pills-just-icons",pills:!0,role:"tablist",children:[Object(O.jsx)(f.a,{children:Object(O.jsx)(x.a,{className:"2"===i?"active":"",href:"#pablo",onClick:function(e){e.preventDefault(),s("2")},children:Object(O.jsx)("i",{children:Object(O.jsx)("span",{className:"material-icons",children:"school"})})})}),Object(O.jsx)(f.a,{children:Object(O.jsx)(x.a,{className:"1"===i?"active":"",href:"#pablo",onClick:function(e){e.preventDefault(),s("1")},children:Object(O.jsx)("i",{className:"material-icons",children:"lightbulb"})})})]})})})}),Object(O.jsxs)(L.a,{className:"gallery",activeTab:"pills"+i,children:[Object(O.jsx)(M.a,{tabId:"pills2",children:Object(O.jsxs)(A.a,{className:"collections",children:[Object(O.jsx)(E.a,{children:Object(O.jsxs)(B.a,{id:"proj",children:[Object(O.jsx)(F.a,{variant:"top",src:"https://adventuredinosaurs.com/wp-content/uploads/2020/07/raptor-dinosaur-habitat-adventuredinosaurs.jpg"}),Object(O.jsx)("a",{href:"https://christopherdent.github.io/dinofinder-frontend",target:"_blank",rel:"noreferrer",children:"Live App"})," ",Object(O.jsx)("span",{id:"pipe",children:"|"})," ",Object(O.jsx)("a",{href:"https://github.com/christopherdent/dinofinder-frontend",target:"_blank",rel:"noreferrer",children:"Code"}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(T.a,{children:"DinoFinder"}),Object(O.jsx)(z.a,{children:"My Flatiron Capstone project.  A graphical educational tool designed to teach kids basic internet research skills in a fun way.  Built with React and Redux frontend, Ruby on Rails backend."})]})]})}),Object(O.jsx)(E.a,{children:Object(O.jsxs)(B.a,{style:{width:"18rem"},id:"proj",children:[Object(O.jsx)(F.a,{variant:"top",src:"https://tuality.org/wp-content/uploads/2019/01/volunteer_hero_image_03.jpg"}),Object(O.jsx)("a",{href:"http://volunteermanager.herokuapp.com/",target:"_blank",rel:"noreferrer",children:"Live App"})," ",Object(O.jsx)("span",{id:"pipe",children:"|"})," ",Object(O.jsx)("a",{href:"https://github.com/christopherdent/VolunteerManager",target:"_blank",rel:"noreferrer",children:"Code"}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(T.a,{children:"Volunteer Manager"}),Object(O.jsx)(z.a,{children:"Business ready people management app, customizable for a wide range of uses.  Allows creation of groups and volunteer lists, storage of statements of expertise and CVs, and more.  Login with username guest, password guest for a quick demo."})]})]})}),Object(O.jsx)(E.a,{children:Object(O.jsxs)(B.a,{style:{width:"18rem"},id:"proj",children:[Object(O.jsx)(F.a,{variant:"top",src:"https://img1.wsimg.com/isteam/ip/61a4c061-55f8-47d5-8bd5-cb2c89e202c9/UduwYH6XvJC5VozALe9oNi-320-80.jpg/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300"}),Object(O.jsx)("a",{href:"http://polar-lake-91544.herokuapp.com/",target:"_blank",rel:"noreferrer",children:" Live App"})," ",Object(O.jsx)("span",{id:"pipe",children:"|"})," ",Object(O.jsx)("a",{href:"https://github.com/christopherdent/dent-exoplanet-sinatra",target:"blank",rel:"noreferrer",children:"Code"}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(T.a,{children:"Exoplanet Explorer"}),Object(O.jsx)(z.a,{children:" Built with the Ruby DSL Sinatra, this is a simple app for cataloguing new discoveries in astronomy, specifically planets not orbiting our own sun.  Allows for the creation of star systems and orbiting planets, including all known specifics of said planet.  Simple but fun!  Login with username guest, password guest for a quick demo."})]})]})})]})}),Object(O.jsx)(M.a,{tabId:"pills1",children:Object(O.jsxs)(A.a,{className:"collections",children:[Object(O.jsx)(E.a,{children:Object(O.jsxs)(B.a,{style:{width:"18rem"},id:"proj",children:[Object(O.jsx)(F.a,{variant:"top",src:"https://cjdportfolio.s3.amazonaws.com/spidey.png"}),Object(O.jsx)("a",{href:"https://christopherdent.github.io/marvel-dent/",target:"_blank",rel:"noreferrer",children:"Live App"})," ",Object(O.jsx)("span",{id:"pipe",children:"|"})," ",Object(O.jsx)("a",{href:"https://github.com/christopherdent/marvel-dent",target:"_blank",rel:"noreferrer",children:"Code"}),Object(O.jsxs)(R.a,{children:[Object(O.jsxs)(T.a,{children:["NEW!!! ",Object(O.jsx)("br",{}),"Comic Collector!"]}),Object(O.jsx)(z.a,{children:"I've been wanting to build an app that uses a public API for a while now and after a trip to a local comic shop a few weeks ago it was clear what API that would be.  Currently frontend only with limited functionality, but I'm too excited about this one to not share it.  Stay tuned for major improvements to what will almost certainly be my best web app yet."})]})]})}),Object(O.jsx)(E.a,{children:Object(O.jsxs)(B.a,{style:{width:"18rem"},id:"proj",children:[Object(O.jsx)(F.a,{variant:"top",src:"https://cjdportfolio.s3.amazonaws.com/get-newsletter.png"}),Object(O.jsx)("a",{href:"https://christopherdent.github.io/newsletterExample/customers",target:"_blank",rel:"noreferrer",children:"Live App"})," ",Object(O.jsx)("span",{id:"pipe",children:"|"})," ",Object(O.jsx)("a",{href:"https://github.com/christopherdent/newsletterExample",target:"_blank",rel:"noreferrer",children:"Code"}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(T.a,{children:"Angular Newsletter"}),Object(O.jsx)(z.a,{children:"Been trying to teach myself some Angular in my spare time, here is the first Angular app I put together, a basic newsletter signup application with a Ruby on Rails backend."})]})]})}),Object(O.jsx)(E.a,{children:Object(O.jsxs)(B.a,{style:{width:"18rem"},id:"proj",children:[Object(O.jsx)(F.a,{variant:"top",src:"https://cjdportfolio.s3.amazonaws.com/Screenshot+from+2021-11-06+15-02-49.png"}),Object(O.jsx)("a",{href:"https://christopherdent.github.io/fundraiser-fronted/index.html",target:"_blank",rel:"noreferrer",children:"Live App"})," ",Object(O.jsx)("span",{id:"pipe",children:"|"})," ",Object(O.jsx)("a",{href:"https://github.com/christopherdent/fundraiser-fronted",target:"_blank",rel:"noreferrer",children:"Code"}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(T.a,{children:"Fundraising Widget"}),Object(O.jsx)(z.a,{children:"I wanted to learn some jQuery so I did and used it to help build this fundraising widget that increments per click, updating the funds thermometer as well as a backend database."})]})]})}),Object(O.jsx)(E.a,{children:Object(O.jsxs)(B.a,{style:{width:"18rem"},id:"proj",children:[Object(O.jsx)(F.a,{variant:"top",src:"https://dr5dymrsxhdzh.cloudfront.net/blog/images/ae6058960/2021/10/portfolio-picture-id175431947.jpg"}),Object(O.jsx)("a",{href:"https://christopherdent.github.io/christopher-dent-old",target:"_blank",rel:"noreferrer",children:"Live App"})," ",Object(O.jsx)("span",{id:"pipe",children:"|"})," ",Object(O.jsx)("a",{href:"https://github.com/christopherdent/christopher-dent-old",target:"_blank",rel:"noreferrer",children:"Code"}),Object(O.jsxs)(R.a,{children:[Object(O.jsx)(T.a,{children:"Portfolio v1"}),Object(O.jsx)(z.a,{children:"My original portfolio site.  Same info you'll see here, less interactive.  Just including as an example of how my skills have evolved independently since graduating Flatiron."})]})]})})]})})]})]})]})})},D=a(17),G=a(84),P=a(85),H=a(86);var W=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),i=t[0],s=t[1],c=n.a.createRef();return n.a.useEffect((function(){if(window.innerWidth>991){var e=function(){var e=window.pageYOffset/3;c.current.style.transform="translate3d(0,"+e+"px,0)"};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(O.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(20).default+")"},ref:c}),Object(O.jsx)(p.a,{children:Object(O.jsx)("h3",{className:"title",children:"About Me"})}),Object(O.jsx)(G.a,{isOpen:!i,children:Object(O.jsx)(p.a,{className:"aboutContainer",children:Object(O.jsxs)(A.a,{children:[Object(O.jsx)(E.a,{className:"lg-4 d-flex align-items-stretch",children:Object(O.jsx)(B.a,{id:"leftAbout",children:Object(O.jsxs)(R.a,{children:[Object(O.jsx)("h4",{className:"card-subtitle mb-2 text-muted",children:"My Skills"}),Object(O.jsx)("p",{className:"card-text",children:"Flatiron taught me Ruby, Sinatra, Ruby on Rails, and JavaScript (including React/Redux). Comfortable with SQL databases including PostgreSQL and MySQL. More recently taught myself Angular. Familiar with but still learning C++, Java and various other technologies. Continuous learning is what I love about code. I do this in my spare time and only wish I had more time to devote to it! I have strong organizational skills and international experience across a range of industries. Certified Project Manager (PMI, PRINCE2) and Change Manager (Prosci)."})]})})}),Object(O.jsx)(E.a,{className:"lg-4 d-flex align-items-stretch",children:Object(O.jsx)(B.a,{id:"middleAbout",children:Object(O.jsxs)(R.a,{children:[Object(O.jsx)("h4",{className:"card-subtitle mb-2 text-muted",children:"My Experience"}),Object(O.jsx)("p",{className:"card-text",children:"I graduated from McGill University in Canada with a double major in political science and history. I've been working in various project management roles pretty much ever since - mostly at a DC-based nonprofit analytical standards development association, but with a brief stint in the UK where I worked contracts for the Royal Bank of Scotland Group and the City of Edinburgh Council. I've got approximately 12 years project management experiece, all the while learning code in my spare time."})]})})}),Object(O.jsx)(E.a,{className:"lg-4 d-flex align-items-stretch",children:Object(O.jsx)(B.a,{id:"rightAbout",children:Object(O.jsxs)(R.a,{children:[Object(O.jsx)("h4",{className:"card-subtitle mb-2 text-muted",children:"My Goals"}),Object(O.jsx)("p",{className:"card-text",children:"Since I was young, I've always been fascinated by code and tech in general. I am looking for any and all opportunities to put my coding skills to good use, ideally leveraging my extensive project management and/or association management experience. I'm fascinated with the concept of creating amazing programs from nothing but a text editor and I'm hoping to make it more than just a hobby someday soon. Have a project you're like to talk about? Drop me line using one of the social contacts below."})]})})})]})})}),Object(O.jsx)("center",{children:Object(O.jsx)(P.a,{color:"primary",onClick:function(){return s(!i)},style:{marginBottom:"1rem"},children:!1===i?"or, the life story":"i liked the short version"})}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(G.a,{isOpen:i,children:Object(O.jsxs)(p.a,{children:[Object(O.jsxs)(H.a,{children:[Object(O.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/asperida.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(O.jsx)("div",{class:"media-body",children:Object(O.jsxs)("p",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Born to an American mother and a British father, I grew up with influences from both sides of the Atlantic.  As a baby, I sailed around the islands with my parents on our boat Asperida, which was also our home for many years.  I grew up around boats and the ocean, and have always loved the sea, and the natural world in general \u2013 something you\u2019ll probably notice throughout my collection of apps."]})})]}),Object(O.jsx)("img",Object(D.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/asperida.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(H.a,{children:[Object(O.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/house.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(O.jsx)("div",{class:"media-body",children:Object(O.jsx)("p",{children:"Eventually, my family moved from the sea to the land and built a house in the woods in Sag Harbor, NY on the eastern tip of Long Island.  It was during these years that I first gained a passion for tech.  We didn\u2019t have a lot, but an aunt donated her old computer to me -  a Gateway I think, with a 386 processor.  486 was all the rage by then, but I took what I could get.  It was painfully slow with only 4MB of RAM so I saved all summer to upgrade it to 8MB, in doing so teaching myself how to take a computer apart and put it back together again.  Then I set my sights on software \u2013 using as many free AOL trials as possible, I learned all I could about the internet at that time.  I printed out several hundred pages of an HTML guide ad started building websites \u2013 websites for school, websites for my favorite shows and movies, websites for everything I could imagine.  I used these skills to volunteer at the local hospital and help them build some rudimentary sites too, something pretty new in the mid-90\u2019s.  Moving on from HTML I started teaching myself some more advanced programming like C++.  The height of all this was a pretty complex text-based video game starring some of my friends from school.  I was absolutely in love with tech and everyone fully expected me to go on to college and major in computer science or something similar."})})]}),Object(O.jsx)("img",Object(D.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/house.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(H.a,{children:[Object(O.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/castle.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(O.jsx)("div",{class:"media-body",children:Object(O.jsx)("p",{children:"But I also wanted adventure, at any cost.  So, at 17 years old, I left Sag Harbor \u2013 and my tech hobby - to study abroad at an actual castle in Herstmonceux, England as part of McGill University\u2019s freshman year abroad program.  McGill offered everything I wanted \u2013 a reputable school, a solid education, and a chance to live in not just one foriegn country but two.  The only thing was, the study abroad program that I wanted so badly to attend was part of the BA program.  There were absolutely no BS courses taught at the Herstmonceux campus.  At that age, my desire for adventure far outweighed practicality, and I enrolled in the BA program.  When I got to the main campus in Montreal the next year, after a full year of gathering arts credits and developing a genuine interest in history and politics, I declared for a double major in just that and left tech behind."})})]}),Object(O.jsx)("img",Object(D.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/castle.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(H.a,{children:[Object(O.jsx)("img",{class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/chrisangie.jpg",alt:"Generic placeholder image",id:"about-img"}),Object(O.jsxs)("div",{class:"media-body",children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Fast forward to 2018.  By then, I\u2019d moved to Washington, DC where I began supporting technical projects for awesome scientific association.  After a few years of that I took a moved back to the UK (Scotland this time) where I got to work at the Royal Bank of Scotland and the Edinburgh Council, gaining valuable skills and certifications in project management working for the Royal Bank of Scotland and then the City of Edinburgh.  Three years later I moved back to DC again and finally here, to historic Saint Augustine, Florida and got married to the love of my life, Angelica.  Today I work remotely for that same DC based scientific association, now running programs and gaining more skills in project and association management.  I\u2019ve done well and had some great adventures.  But they\u2019re not over yet."})]})]}),Object(O.jsx)("img",Object(D.a)({class:"align-self-center mr-3",src:"https://cjdportfolio.s3.amazonaws.com/chrisangie.jpg",alt:"Generic placeholder image",id:"about-img"},"id","mobile")),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)(H.a,{children:[Object(O.jsx)("img",{class:"align-self-center mr-3",src:"https://media4.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e4742m73cffv1rajt9hc73ckz6e7v8ep1mfs29v7764&rid=giphy.gif&ct=g",alt:"Generic placeholder image",id:"about-img"}),Object(O.jsxs)("div",{class:"media-body",children:[Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"I like to be challenged and I love to learn.  When it comes down to it, I\u2019m a planner who likes to keep things organized.  Moving away from tech was one of the few regrets I had in life.  So, a couple years ago, I planned to get myself back into tech, my old passion and lifelong interest.  That\u2019s when I enrolled in Flatiron School\u2019s Self-Paced Online Software Engineering school and graduated in December 2020 with a boatload of new skills under my belt, skills I want to use to keep this adventure going and take my career to a new level.  So, welcome to my portfolio site.  Here you\u2019ll find my final projects from Flatiron as well as some smaller projects I\u2019ve completed since graduation using new skills I taught myself since then.  Because I love to learn, and learning to code professionally has taught me that there is always something new to learn."})]})]}),Object(O.jsx)("img",Object(D.a)({class:"align-self-center mr-3",src:"https://media4.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif?cid=ecf05e4742m73cffv1rajt9hc73ckz6e7v8ep1mfs29v7764&rid=giphy.gif&ct=g",alt:"Generic placeholder image",id:"about-img"},"id","mobile"))]})})]})})};var J=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),i=(t[0],t[1],n.a.createRef());return n.a.useEffect((function(){if(window.innerWidth>991){var e=function(){var e=window.pageYOffset/3;i.current.style.transform="translate3d(0,"+e+"px,0)"};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}})),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"page-header clear-filter","filter-color":"blue",children:[Object(O.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url("+a(20).default+")"},ref:i}),Object(O.jsxs)(p.a,{children:[Object(O.jsx)("a",{href:"https://christopher-dent.medium.com/",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("h3",{className:"title",children:"My Blog"})}),Object(O.jsx)("h5",{className:"description",children:"Writing as I learn more about code.  Click the monkey to read my blog on Medium."}),Object(O.jsx)("a",{href:"https://christopher-dent.medium.com/",children:Object(O.jsx)("img",{src:"https://cjdportfolio.s3.amazonaws.com/monkey.gif"})})]})]})})};var Y=function(){return Object(O.jsxs)("div",{id:"social",children:[Object(O.jsx)(N.SocialIcon,{url:"https://www.linkedin.com/in/christopher-james-dent/"}),Object(O.jsx)(N.SocialIcon,{url:"https://github.com/christopherdent",bgColor:"#7DF9FF"}),Object(O.jsx)(N.SocialIcon,{url:"https://www.youtube.com/channel/UCZBxvf3wO37Ymx-mO8tPwLQ/videos"}),Object(O.jsx)(N.SocialIcon,{url:"mailto: christopherdent01@gmail.com",bgColor:"#f0f0d6"}),Object(O.jsx)(N.SocialIcon,{url:"https://twitter.com/christopjdent"})]})};var U=function(){return Object(O.jsx)("footer",{className:"footer","data-background-color":"black",children:Object(O.jsx)(p.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(Y,{}),Object(O.jsxs)("center",{children:["\xa9 ",(new Date).getFullYear()," | "," Christopher Dent "]})]})})})},Q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)(h.a,{children:[Object(O.jsx)(w,{}),Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",component:S}),Object(O.jsx)(j.a,{exact:!0,path:"/christopher-dent",component:S}),Object(O.jsx)(j.a,{path:"/christopher-dent/index",component:S}),Object(O.jsx)(j.a,{path:"/christopher-dent/about",component:W}),Object(O.jsx)(j.a,{path:"/christopher-dent/projects",component:_}),Object(O.jsx)(j.a,{path:"/christopher-dent/blog",component:J})]})}),Object(O.jsx)(U,{})]})}}]),a}(n.a.Component),V=Q;s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(V,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.8c3d5102.chunk.js.map
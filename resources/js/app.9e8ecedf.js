(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],d=0,g=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&g.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},1052:function(t,e,a){"use strict";var s=a("681a"),i=a.n(s);i.a},"1aa6":function(t,e,a){},"352f":function(t,e,a){},"3f14":function(t,e,a){},4473:function(t,e,a){"use strict";var s=a("79e3"),i=a.n(s);i.a},"524d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=a("8c4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-light is-fullheight-with-navbar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-left"},[a("div",{staticClass:"columns"},[t._m(0),a("div",{staticClass:"column"},[a("div",{staticClass:"box twitter-box"},[a("article",{staticClass:"media"},[t._m(1),a("div",{staticClass:"media-content"},[t._m(2),a("nav",{staticClass:"level is-mobile"},[a("div",{staticClass:"level-left"},[t._m(3),t._m(4),a("a",{staticClass:"level-item",attrs:{"aria-label":"like"},on:{click:function(e){t.isHeartbeatEnabled=!t.isHeartbeatEnabled}}},[a("span",{class:t.isHeartbeatEnabled?"icon is-small load":"icon is-small"},[a("i",{staticClass:"fas fa-heart",attrs:{"aria-hidden":"true"}})])])])])])])])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("h1",{staticClass:"title is-1"},[t._v("Hey, I'm Ismaïl Nguyen.")]),a("h2",{staticClass:"subtitle is-4"},[a("span",[t._v("< ⁄ I'm a")]),a("span",{attrs:{id:"animatedText"}}),a("span",[t._v(">")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-64x64"},[a("img",{attrs:{src:"/resources/images/profile.webp",alt:"Leo da Vinci",loading:"lazy"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("p",[a("strong",[t._v("Leonardo da Vinci")]),t._v(" "),a("small",[t._v("@leonardoDaVinci")]),t._v(" "),a("small",[t._v("520 years ago")]),a("br"),t._v(" Simplicity is the ultimate sophistication. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"level-item",attrs:{"aria-label":"reply"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-reply",attrs:{"aria-hidden":"true"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"level-item",attrs:{"aria-label":"retweet"}},[a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-retweet",attrs:{"aria-hidden":"true"}})])])}],o=function(t,e,a){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};o.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML=this.txt;var a=this,s=200-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout((function(){a.tick()}),s)};var l=o,c={data:function(){return{isHeartbeatEnabled:!1}},mounted:function(){var t=document.getElementById("animatedText"),e=[" software craftsman."," family guy."," food addicted."],a=2e3;new l(t,e,a)}},u=c,d=(a("678b"),a("2877")),g=Object(d["a"])(u,r,n,!1,null,"93bf476a",null),m=g.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section has-background-light"},[t._m(0),a("div",{staticClass:"columns is-mobile is-multiline is-centered"},t._l(t.works,(function(e,s){return a("div",{key:s,staticClass:"column is-one-third-desktop is-half-tablet is-full-mobile"},[a("div",{staticClass:"card work-item modal-link is-clickable is-vcentered",on:{click:function(a){return t.openWorkDetail(e)}}},[e.coverImage?a("div",{staticClass:"card-image",style:"background: url("+e.coverImage.url+") no-repeat"},[a("figure",{staticClass:"image is-3by2"})]):t._e(),a("div",{staticClass:"card-content"},[e.coverImage?a("figure",{staticClass:"image is-3by2"}):t._e(),a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[e.logo?a("figure",{staticClass:"image is-48x48"},[a("img",{attrs:{src:e.logo.url,alt:e.logo.alt,loading:"lazy"}})]):t._e()]),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[t._v(t._s(e.title))]),e.subTitle?a("p",{staticClass:"subtitle is-6"},[e.subTitle.link?a("a",{attrs:{href:e.subTitle.link,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(e.subTitle.text)+" ")]):a("span",[t._v(" "+t._s(e.subTitle.text)+" ")])]):t._e()])])]),t._m(1,!0)])])})),0)])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content is-large is-centered handwritten-text"},[a("h2",[t._v("My works")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"card-footer"},[a("div",{staticClass:"card-footer-item"},[a("button",{staticClass:"button button-view-details is-hidden"},[a("strong",[t._v("View")])])])])}],f=[{logo:{url:"/resources/images/works/logo/npm.png",alt:"NPM"},title:"throttler-js",subTitle:"A simple Javascript Throttler",description:"throttler-js allows you to improve your application’s performance by limiting the number of events your code needs to handle.\n\t\t\t\t\t\t\tYou should use a throttle when you want to execute a callback at a controlled rate, allowing you to handle intermediate states repeatedly at each fixed interval of time.",primaryLink:{url:"https://www.ismailnguyen.com/throttler-js/",text:"View"},secondaryLink:{url:"https://github.com/ismailnguyen/throttler-js",text:"Source"},markdownContentUrl:"https://raw.githubusercontent.com/ismailnguyen/throttler-js/master/README.md",socialShare:{twitter:!0,linkedIn:!0},tags:["JavaScript","NPM","Node","Package","Throttle"]},{logo:{url:"/resources/images/works/logo/npm.png",alt:"NPM"},title:"togglify-js",subTitle:"NPM Package",description:"togglify-js is rism is a lightweight, extensible feature toggler.",primaryLink:{url:"https://www.ismailnguyen.com/togglify-js",text:"View"},secondaryLink:{url:"https://github.com/ismailnguyen/togglify-js",text:"Source"},markdownContentUrl:"https://raw.githubusercontent.com/ismailnguyen/togglify-js/master/README.md",socialShare:{twitter:!0,linkedIn:!0},tags:["JavaScript","NPM","Node","Package"]},{coverImage:{url:"/resources/images/works/agile-france.webp",alt:"Agile-France"},logo:{url:"/resources/images/works/logo/agile-france.png",alt:"Agile-France"},title:"Agile-France",subTitle:"2020.conf.agile-france.org",primaryLink:{text:"Live",url:"https://2020.conf.agile-france.org"},secondaryLink:{text:"Source",url:"https://github.com/agile-france/site-Conf-Agile-France"},description:"Agile France est la grande conférence Agile de la communauté pour la communauté : francophone, sans sponsor. Edition 2020 : 11 et 12 juin Chalet de la Porte Jaune Bois de Vincennes Paris",tags:["HTML","Bulma"],images:[{url:"/resources/images/works/agile-france.webp",alt:"Agile-France"}]},{coverImage:{url:"/resources/images/works/ncrafts-pwa.webp",alt:"NCrafts PWA"},logo:{url:"/resources/images/works/logo/newcrafts.jpg",alt:"NewCrafts"},title:"NewCrafts",subTitle:"app.ncrafts.io",primaryLink:{text:"Live",url:"https://app.ncrafts.io"},secondaryLink:{text:"Source",url:"https://github.com/ncraftsconf/Ncrafts-PWA"},description:"NewCrafts Paris, an ephemeral learning ground for professional developers who care for quality code and bettering their practices.",markdownContentUrl:"https://raw.githubusercontent.com/ncraftsconf/Ncrafts-PWA/master/README.md",tags:["Vue JS","PWA","Heroku"]},{logo:{url:"/resources/images/works/logo/github.png",alt:"Github"},title:"Feedback-storming : Event Storming of feedback ?",subTitle:"Event storming revisited to collect feedbacks",secondaryLink:{url:"https://github.com/ismailnguyen/feedback-storming",text:"Read more"},socialShare:{twitter:!0,linkedIn:!0},description:"",markdownContentUrl:"https://raw.githubusercontent.com/ismailnguyen/feedback-storming/master/README.md",tags:["Event Storming","Feedback"]},{coverImage:{url:"/resources/images/works/ncrafts-training.webp",alt:"NewCrafts Training"},logo:{url:"/resources/images/works/logo/newcrafts.jpg",alt:"NewCrafts"},title:"NewCrafts Trainings",subTitle:"training.ncrafts.io",primaryLink:{text:"Live",url:"https://training.ncrafts.io"},secondaryLink:{text:"Source",url:"https://github.com/ncraftsconf/training"},description:"Workshops for professional developers who care about quality code and bettering their practices.",tags:["HTML","CSS","Azure"],images:[{url:"/resources/images/works/ncrafts-training.webp",alt:"NewCrafts Training"}]},{coverImage:{url:"/resources/images/works/crafter-journey.webp",alt:"A Software Crafter's Journey"},logo:{url:"/resources/images/works/logo/La_Combe_du_Lion_Vert.png",alt:"La Combe du Lion Vert"},title:"A Software Crafter's Journey",subTitle:"A Git based open source blog.",description:"A Software Crafter's Journey is a blog built with modern web standards, blazingly fast due to a server side rendering and static blog posts. No need to host a back office, everything is managed through your Git repository, so you can make pull request to post a new article.",primaryLink:{text:"View",url:"https://www.ismailnguyen.com/a-software-crafter-s-journey/"},secondaryLink:{text:"Source",url:"https://github.com/ismailnguyen/a-software-crafter-s-journey"},markdownContentUrl:"https://raw.githubusercontent.com/ismailnguyen/a-software-crafter-s-journey/master/README.md",tags:["React JS","PWA","Firebase"],images:[{url:"/resources/images/works/crafter-journey.webp",alt:"A Software Crafter's Journey"}]},{coverImage:{url:"/resources/images/works/application-weekend.webp",alt:"Comment j'ai crée une application en un week-end"},logo:{url:"/resources/images/works/logo/google-slides.png",alt:"Google Slides"},title:"“Comment j'ai crée une application en un week-end”",secondaryLink:{url:"https://docs.google.com/presentation/d/14sLubBl04_m547yxraSP1mO-_R5Bf9ClwuyX9s-TjPs",text:"View slides"},embeddedContentUrl:"https://docs.google.com/presentation/d/e/2PACX-1vRuClSj26rirjEZZBIPLHEJj7ti8z5vgHLw7nUA3nWzSnq3RtytFg0SIXMx834a7akRInBkR1fpWA4a/embed?start=false&loop=false&delayms=3000",socialShare:{twitter:!0,linkedIn:!0},tags:["Vue JS","PWA","Heroku"]},{coverImage:{url:"/resources/images/works/agile-france-pwa.webp",alt:"Agile France PWA"},logo:{url:"/resources/images/works/logo/agile-france.png",alt:"Agile France"},title:"Agile France",subTitle:"agile-france.web.app",primaryLink:{url:"https://agile-france.web.app",text:"Live"},secondaryLink:{url:"https://github.com/ismailnguyen/AgileFrance-PWA",text:"Source"},description:"Agile France est la grande conférence Agile de la communauté pour la communauté : francophone, sans sponsor. Edition 2020 : 11 et 12 juin Chalet de la Porte Jaune Bois de Vincennes Paris",markdownContentUrl:"https://raw.githubusercontent.com/ismailnguyen/AgileFrance-PWA/master/README.md",tags:["React JS","PWA","Firebase"]},{coverImage:{url:"/resources/images/works/humans-relais.webp",alt:"Humans Relais Android application"},logo:{url:"/resources/images/works/humans-relais-logo.webp",alt:"Humans Relais"},title:"Humans Relais",subTitle:"humansrelais.fr",description:"Humans Relais est une association qui a pour objectif de créer du lien entre personnes avec et sans-abri. On ne peut pas aider tout le monde, mais tout le monde peut aider quelqu'un.",tags:["Android","Java","Play Store"]},{coverImage:{url:"/resources/images/works/dry-principle.webp",alt:"DRY Principle"},logo:{url:"/resources/images/works/logo/google-slides.png",alt:"Google Slides"},title:"DRY Principle",subTitle:"Clean Code",secondaryLink:{url:"https://docs.google.com/presentation/d/1RqId9XV6FtQ0_hYC26qG03rkEHc-ylODwF1FwilaBxo",text:"View slides"},embeddedContentUrl:"https://docs.google.com/presentation/d/e/2PACX-1vQRZiTtNfH6G5xteMhFFOTt4LwBW5OhCMMyKuMXKNkMlI8QPZG3jzM-malihXjZ8pSvOpvvjlzI10yh/embed?start=false&loop=false&delayms=3000",socialShare:{twitter:!0,linkedIn:!0},tags:["Clean Code","Software Craftsmanship"]},{coverImage:{url:"/resources/images/works/bac-a-lettre.webp",alt:"Bac à lettre PWA"},logo:{url:"/resources/images/works/logo/bac-a-lettre.svg",alt:"Bac à lettre"},title:"Bac à lettre",subTitle:"bac-a-lettre.netlify.com",primaryLink:{url:"https://bac-a-lettre.netlify.com",text:"Live"},secondaryLink:{url:"https://github.com/ismailnguyen/Bac-a-lettre",text:"Source"},description:"Random letter generator for Baccalaureat game",markdownContentUrl:"https://raw.githubusercontent.com/ismailnguyen/Bac-a-lettre/master/README.md",tags:["React JS","PWA","Netlify"]},{coverImage:{url:"/resources/images/works/golden-circle.webp",alt:"The Golden Circle"},logo:{url:"/resources/images/works/logo/google-slides.png",alt:"Google Slides"},title:"“The Golden Circle”",subTitle:"A brief introduction",embeddedContentUrl:"https://docs.google.com/presentation/d/e/2PACX-1vTg-TYXA9kWgHj_uSPUM3Wf8IHqFiqctNZjBxhKxDW4oElNv5jEWNQPHZyFkzpCs3LrR37hXcGOOa7P/embed?start=false&loop=false&delayms=3000",secondaryLink:{url:"https://docs.google.com/presentation/d/1lK0SjbXAwa2BeCO3kOeRipuXO5ywS-1XLIwJppP86Ro",text:"View slides"},socialShare:{twitter:!0,linkedIn:!0}},{coverImage:{url:"/resources/images/works/tryeat.webp",alt:"Try Eat PWA"},logo:{url:"/resources/images/works/tryeat-logo.webp",alt:"Try Eat"},title:"Try Eat",subTitle:"tryeat.me",primaryLink:{url:"https://tryeat.me",text:"Live"},secondaryLink:{url:"https://github.com/ismailnguyen/tryeat",text:"Source"},description:"Application to store list of restaurants to try with a map in which you can see your favorites restaurants near your geo location",markdownContentUrl:"https://raw.githubusercontent.com/ismailnguyen/TryEat/master/README.md",tags:["Vue JS","PWA","Semantic UI","Firebase"],images:[{url:"/resources/images/works/tryeat.webp",alt:"Try Eat PWA"}]},{coverImage:{url:"https://raw.githubusercontent.com/ismailnguyen/Wedding-Invitation/master/screen1.png",alt:"My wedding invitation"},logo:{url:"/resources/images/works/logo/github.png",alt:"Github"},title:"My wedding invitation",subTitle:"github/Wedding-Invitation",secondaryLink:{url:"https://github.com/ismailnguyen/Wedding-Invitation",text:"Source"},markdownContentUrl:"https://raw.githubusercontent.com/ismailnguyen/Wedding-Invitation/master/README.md",tags:["HTML","JavaScipt","CSS"]},{coverImage:{url:"/resources/images/works/joyti-restaurant.webp",alt:"Joyti Restaurant"},logo:{url:"/resources/images/works/logo/github.png",alt:"Github"},title:"Joyti Restaurant",subTitle:"github/joyti-restaurant",secondaryLink:{url:"https://github.com/ismailnguyen/joyti-restaurant",text:"Source"},description:"Indian restaurant web site",tags:["HTML","Google Sheets API"],images:[{url:"/resources/images/works/joyti-restaurant.webp",alt:"Joyti Restaurant"}]},{coverImage:{url:"/resources/images/works/ismailnguyen.webp",alt:"My portfolio"},logo:{url:"/resources/images/profile.webp",alt:"Ismaïl NGUYEN"},title:"My portfolio",subTitle:"github/ismailnguyen",primaryLink:{url:"https://www.ismailnguyen.com",text:"Live"},secondaryLink:{url:"https://github.com/ismailnguyen/ismailnguyen.github.io",text:"Source"},markdownContentUrl:"https://raw.githubusercontent.com/ismailnguyen/ismailnguyen.github.io/master/README.md",tags:["Vue JS","Bulma","HTML","Github Pages"],images:[{url:"/resources/images/works/ismailnguyen.webp",alt:"My portfolio"}]},{logo:{url:"/resources/images/works/logo/google-slides.png",alt:"Google Slides"},title:"Imperfection is the new perfection",secondaryLink:{url:"https://docs.google.com/presentation/d/1XFsJ-2ZMRti-iwg4UQ4HFEvja8FggakO_adyLMCWZOA",text:"View slides"},embeddedContentUrl:"https://docs.google.com/presentation/d/e/2PACX-1vTeje1M3a7w5NQLGRYkQUl2185f5_LXX1pliCEqunl8J2P8rDdwE8Ww3glUl0wHqdGfftYFVeif7aDa/embed?start=false&loop=false&delayms=3000",socialShare:{twitter:!0,linkedIn:!0},description:""},{coverImage:{url:"/resources/images/works/open-closed-principle.webp",alt:"Open/Closed Principle"},logo:{url:"/resources/images/works/logo/google-slides.png",alt:"Google Slides"},title:"Open/Closed Principle",subTitle:"SOLID Principle",secondaryLink:{url:"https://docs.google.com/presentation/d/1Ame_zMdo07S4OcmEAyEjwLFZkYRsnS-unnHZcaP_-xM",text:"View slides"},embeddedContentUrl:"https://docs.google.com/presentation/d/e/2PACX-1vSDR8hvyO2uuijP5AeTcWj-L0dSp_RzuP0n_Z6hOO5LIfzAee5MwoRSNfCzBgRbV27ZSo6s6-HoRlsu/embed?start=false&loop=false&delayms=3000",socialShare:{twitter:!0,linkedIn:!0},tags:["SOLID","Clean Code","Software Craftmanship"]},{logo:{url:"/resources/images/works/logo/pdf.webp",alt:"PDF"},title:"“Comment le Big Data peut influencer notre vie quotidienne ?”",subTitle:"by Ismaïl NGUYEN & Valentin MEYNE",secondaryLink:{url:"https://github.com/ismailnguyen/thesis-big-data-influence/raw/master/Memoire_Big-Data_Influence-sur-notre-vie-quotidienne_MEYNE-Valentin_NGUYEN-Ismail.pdf",text:"Download"},socialShare:{twitter:!0,linkedIn:!0},markdownContentUrl:"https://raw.githubusercontent.com/ismailnguyen/thesis-big-data-influence/master/README.md",tags:["Big Data","IoT","AI","Linked data","Machine learning","Technology","Algorithm"]}],w=f,b={data:function(){return{works:w}},methods:{openWorkDetail:function(t){this.$router.push({name:"WorkDetail",params:{title:t.title}})}}},v=b,k=(a("c67f"),Object(d["a"])(v,p,h,!1,null,"c401601a",null)),y=k.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"hero has-background-dark",class:t.hasContent()?"":"is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container is-fullhd has-text-centered"},[a("h1",{staticClass:"title is-1 is-spaced"},[a("span",{staticClass:"icon is-large"},[a("img",{attrs:{src:t.work.logo.url,alt:t.work.logo.alt,loading:"lazy"}})]),t._v(" "+t._s(t.work.title)+" ")]),t.work.subTitle?a("h2",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.work.subTitle)+" ")]):t._e(),a("div",{staticClass:"tags"},t._l(t.work.tags,(function(e,s){return a("span",{key:s,staticClass:"tag"},[t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"subhead",domProps:{innerHTML:t._s(t.work.description)}}),a("div",{staticClass:"buttons"},[t.work.secondaryLink?a("a",{staticClass:"button button-secondary",attrs:{href:t.work.secondaryLink.url,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(t.work.secondaryLink.text)+" ")]):t._e(),t.work.primaryLink?a("a",{staticClass:"button button-primary",attrs:{href:t.work.primaryLink.url,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(t.work.primaryLink.text)+" ")]):t._e()])])])]),t.work.embeddedContentUrl?a("section",{staticClass:"section"},[a("div",{staticClass:"container is-fullhd"},[a("IframeBloc",{attrs:{url:t.work.embeddedContentUrl}})],1)]):t._e(),t.markdownContent?a("section",{staticClass:"section"},[a("div",{staticClass:"container is-fullhd"},[a("MarkdownBloc",{attrs:{text:t.markdownContent}})],1)]):t._e(),a("section",{staticClass:"hero has-background-dark"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container is-fullhd has-text-centered"},[a("WorkCarousel",{attrs:{images:t.work.images}})],1)])])])},_=[],x=(a("7db0"),a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"message"},[a("div",{staticClass:"message-body"},[a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.parsedContent)}})])])}),S=[],E=a("d4cd")(),L={props:["text"],computed:{parsedContent:function(){return E.render(this.text)}}},A=L,T=Object(d["a"])(A,x,S,!1,null,null,null),I=T.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"image is-16by9"},[a("iframe",{staticClass:"has-ratio",attrs:{src:t.url,frameborder:"0",allowfullscreen:"true",mozallowfullscreen:"true",webkitallowfullscreen:"true"}})])},M=[],j={props:["url"]},N=j,B=(a("4473"),Object(d["a"])(N,P,M,!1,null,"59ada20a",null)),D=B.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("carousel",{attrs:{perPage:1,paginationPadding:5,paginationColor:"#404E57",paginationActiveColor:"#fff"}},t._l(t.images,(function(t,e){return a("slide",{key:e},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.url,alt:t.alt,loading:"lazy"}})])])})),1)},R=[],W=a("0a63"),F={props:["images"],components:{Carousel:W["Carousel"],Slide:W["Slide"]}},U=F,H=(a("1052"),Object(d["a"])(U,O,R,!1,null,"621069d0",null)),J=H.exports,V={props:["workTitle"],data:function(){return{works:w,markdownContent:""}},components:{MarkdownBloc:I,IframeBloc:D,WorkCarousel:J},computed:{work:function(){var t=this;return this.works.find((function(e){return e.title===t.workTitle}))}},mounted:function(){this.work.markdownContentUrl&&this.loadDescription()},methods:{loadDescription:function(){var t=this;fetch(this.work.markdownContentUrl).then((function(t){return t.text()})).then((function(e){return t.markdownContent=e}))},twitterShareLink:function(){return"https://twitter.com/intent/tweet/?text="+this.work.title+"&url="+this.work.readMoreLink},linkedInShareLink:function(){return"https://www.linkedin.com/shareArticle?mini=true&url="+this.work.readMoreLink+"&title="+this.work.title+"&source=https://www.ismailnguyen.com"},hasContent:function(){return this.work.images||this.markdownContent||this.work.embeddedContentUrl}}},$=V,G=(a("d8b6"),Object(d["a"])($,C,_,!1,null,"91e197fc",null)),X=G.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-light is-fullheight-with-navbar has-text-centered"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-vcentered"},[a("div",{staticClass:"column"},[a("h1",{staticClass:"title is-1"},[t._v("About me")]),a("blockquote",{staticClass:"handwritten-text"},[t._v('"I have no special talent. I am only passionately curious."')]),a("blockquote",[t._v("- A. Einstein")])]),a("div",{staticClass:"column"},[a("div",{staticClass:"notification is-warning"},[a("div",{staticClass:"neon-container"},[a("span",{staticClass:"title"},[t._v(" Now ")])]),a("ul",{staticClass:"has-text-left"},[a("li",[a("p",[a("i",{staticClass:"fas fa-briefcase"}),t._v(" In position of Technical Leader of the "),a("i",[t._v("Checkout team")]),t._v(" "),a("strong",[t._v("@"),a("a",{attrs:{href:"//fr.loccitane.com/",target:"_blank",rel:"noopener"}},[t._v("L'Occitane en Provence")])]),t._v("'s e-commerce website. ")])]),a("li",[a("p",[a("i",{staticClass:"fas fa-graduation-cap"}),t._v(" As a "),a("i",[t._v("software craftsman")]),t._v(" and "),a("i",[t._v("craft coach")]),t._v(" I also give trainings to juniors on Simple Design, TDD, Agile, Coding best practices "),a("strong",[t._v("@"),a("a",{attrs:{href:"//la-combe-du-lion-vert.fr/",target:"_blank",rel:"noopener"}},[t._v("LeLion_Vert")])]),t._v(". ")])]),a("li",[a("p",[a("i",{staticClass:"fas fa-chalkboard-teacher"}),t._v(" I'm part of "),a("i",[t._v("organization team")]),t._v(" of "),a("strong",[a("a",{attrs:{href:"//ncrafts.io/",target:"_blank",rel:"noopener"}},[t._v("NewCrafts")])]),t._v(" and "),a("strong",[a("a",{attrs:{href:"//conf.agile-france.org",target:"_blank",rel:"noopener"}},[t._v("Agile France")])]),t._v(" conferences. ")])]),a("li",[a("p",[a("i",{staticClass:"fa fa-map-marker-alt"}),t._v(" You can found me here : "),a("i",[t._v("{ `lat`: 48.86, `lon`: 2.33 }")])])]),a("li",[a("p",[a("i",{staticClass:"fas fa-utensils"}),t._v(" Trying to eat less animal derived products ")])]),a("li",[a("p",[a("i",{staticClass:"fas fa-code"}),t._v(" I want to code the future ")])])])])])])])])])}],z=(a("9378"),{}),Z=Object(d["a"])(z,Y,q,!1,null,"c87d4ec2",null),Q=Z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container is-fullhd handwritten-text has-text-justified has-text-grey-dark"},[a("h1",{staticClass:"title is-spaced"},[t._v(" Terms And Conditions of Use ")]),a("h2",{staticClass:"subtitle"},[t._v("WTFPL - Do What the Fuck You Want to Public License")]),a("p",[t._v(" Choose Freedom. Do What the Fuck You Want to. ")]),a("p",[t._v(" Copyright (C) "+t._s(t.today)+" Ismaïl NGUYEN ")]),a("p",[t._v(" Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed. ")]),t._m(0)])])])},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("small",[t._v(" See more at "),a("a",{attrs:{href:"//www.wtfpl.net/",target:"_blank",rel:"noopener"}},[t._v("www.wtfpl.net")])])])}],et={computed:{today:function(){return(new Date).getFullYear()}}},at=et,st=(a("fb9e"),Object(d["a"])(at,K,tt,!1,null,"e8623492",null)),it=st.exports;s["a"].use(i["a"]);var rt=new i["a"]({mode:"history",linkExactActiveClass:"is-active",routes:[{name:"Presentation",path:"/",component:m},{name:"All",path:"*",component:m},{name:"Portfolio",path:"/portfolio",component:y},{name:"WorkDetail",path:"/work/:title",component:X,props:function(t){return{workTitle:t.params.title}}},{name:"Now",path:"/now",component:Q},{name:"Terms",path:"/terms",component:it}],scrollBehavior:function(t,e,a){return a||(t.hash?{selector:t.hash}:{x:0,y:0})}}),nt=rt,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:"WorkDetail"==this.$route.name?"has-background-dark":"has-background-light",attrs:{id:"app"}},[t.isUnsupportedBrowser()?a("div",{staticClass:"notification is-danger is-light"},[a("b",[t._v("Unsupported Browser!")]),t._v(" This website will offer limited functionality in this browser. We only support the recent versions of major browsers like Chrome, Firefox, Safari, and Edge. ")]):t._e(),a("Navbar"),a("transition",{attrs:{name:"slide-left"}},[a("router-view")],1),a("Footer")],1)},lt=[],ct=(a("92c6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-transparent",class:"WorkDetail"==this.$route.name?"is-dark":"is-light",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("div",{staticClass:"logo",attrs:{id:"brand"}},[t._v(" ismaïl ")])]),a("a",{class:t.isMenuOpen?"navbar-burger burger is-active":"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){return t.toggleMenu()}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])],1),a("div",{class:t.isMenuOpen?"navbar-menu is-active":"navbar-menu"},[a("div",{staticClass:"navbar-start",on:{click:function(e){return t.toggleMenu()}}},[a("router-link",{staticClass:"navbar-item",class:"WorkDetail"==this.$route.name?"is-active":"",attrs:{to:"/portfolio"}},[t._v(" My works ")]),a("router-link",{staticClass:"navbar-item",attrs:{to:"/now"}},[t._v(" Now ")])],1),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[a("transition",{attrs:{name:"slide-left"}},[a("a",{directives:[{name:"show",rawName:"v-show",value:t.showSocialButtons,expression:"showSocialButtons"}],staticClass:"button is-light button-social button-paypal",attrs:{href:"//www.paypal.me/ismailnguyen",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-paypal"})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{directives:[{name:"show",rawName:"v-show",value:t.showSocialButtons,expression:"showSocialButtons"}],staticClass:"button is-light button-social button-npm",attrs:{href:"//www.npmjs.com/~ismailnguyen",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-npm"})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{directives:[{name:"show",rawName:"v-show",value:t.showSocialButtons,expression:"showSocialButtons"}],staticClass:"button is-light button-social button-github",attrs:{href:"//github.com/ismailnguyen",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-github"})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{directives:[{name:"show",rawName:"v-show",value:t.showSocialButtons,expression:"showSocialButtons"}],staticClass:"button is-light button-social button-linkedin",attrs:{href:"//www.linkedin.com/in/ismailnguyen",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-linkedin"})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{directives:[{name:"show",rawName:"v-show",value:t.showSocialButtons,expression:"showSocialButtons"}],staticClass:"button is-light button-social button-twitter",attrs:{href:"https://twitter.com/ishmaa_el",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-twitter"})])]),t.showSocialButtons?a("a",{staticClass:"button button-cta",attrs:{href:"https://github.com/ismailnguyen/resume/raw/master/CV_Ismail-Nguyen.pdf",target:"_blank",rel:"noopener"},on:{click:function(e){return t.toggleSocialButtons()}}},[a("strong",[t._v("Resumé")])]):a("button",{staticClass:"button button-cta",on:{click:function(e){return t.toggleSocialButtons()}}},[a("strong",[t._v("Get in touch")])])],1)])])])])}),ut=[];function dt(t){var e=document.body;e.onmousemove=function(a){var s=e.clientWidth/2,i=e.clientHeight/2,r=s-(a.pageX-e.offsetLeft),n=i-(a.pageY-e.offsetTop),o=n/i*20,l=r/s*-20,c=.75;n<0&&(c=1.5-c);var u=.75;r<0&&(u=1.5-u);var d=document.getElementById(t);d.style.transform="perspective( 600px ) translate3d( 0, 0, 0 ) rotateX("+o*c+"deg) rotateY("+l*u+"deg)"}}var gt=dt,mt={data:function(){return{isMenuOpen:!1,showSocialButtons:!1}},mounted:function(){gt("brand")},methods:{toggleMenu:function(){this.isMenuOpen=!this.isMenuOpen},toggleSocialButtons:function(){this.showSocialButtons=!this.showSocialButtons}}},pt=mt,ht=(a("b8e7"),Object(d["a"])(pt,ct,ut,!1,null,"0e6fbfd3",null)),ft=ht.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer",class:"WorkDetail"==this.$route.name?"has-background-dark":"has-background-light"},[a("div",{staticClass:"content has-text-centered handwritten-text"},[t._m(0),a("p",{staticClass:"is-pulled-right"},[a("router-link",{attrs:{to:"/terms"}},[a("small",[t._v(" Terms ")])])],1)])])},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"is-pulled-left"},[t._v(" Handcrafted with "),a("i",{staticClass:"fa fa-heart",staticStyle:{color:"#6a35ff"}})])}],vt=(a("8493"),{}),kt=Object(d["a"])(vt,wt,bt,!1,null,"29aebd22",null),yt=kt.exports,Ct={name:"App",components:{Navbar:ft,Footer:yt},methods:{isUnsupportedBrowser:function(){return/Trident\/|MSIE/.test(window.navigator.userAgent)}}},_t=Ct,xt=(a("034f"),Object(d["a"])(_t,ot,lt,!1,null,null,null)),St=xt.exports;s["a"].config.productionTip=!1,new s["a"]({router:nt,render:function(t){return t(St)}}).$mount("#app")},"678b":function(t,e,a){"use strict";var s=a("3f14"),i=a.n(s);i.a},"681a":function(t,e,a){},"720b":function(t,e,a){},"79e3":function(t,e,a){},8493:function(t,e,a){"use strict";var s=a("8747"),i=a.n(s);i.a},"85ec":function(t,e,a){},8747:function(t,e,a){},"892a":function(t,e,a){},9378:function(t,e,a){"use strict";var s=a("1aa6"),i=a.n(s);i.a},b8e7:function(t,e,a){"use strict";var s=a("352f"),i=a.n(s);i.a},c67f:function(t,e,a){"use strict";var s=a("524d"),i=a.n(s);i.a},d8b6:function(t,e,a){"use strict";var s=a("720b"),i=a.n(s);i.a},fb9e:function(t,e,a){"use strict";var s=a("892a"),i=a.n(s);i.a}});
//# sourceMappingURL=app.9e8ecedf.js.map
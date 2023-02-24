(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00a5":function(t,e,n){},"0aca":function(t,e,n){"use strict";var a=n("2e9e"),r=n.n(a);r.a},1989:function(t,e,n){"use strict";var a=n("00a5"),r=n.n(a);r.a},2184:function(t,e,n){},"2e9e":function(t,e,n){},"4efb":function(t,e,n){},"4f78":function(t,e,n){"use strict";var a=n("f2fb"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"hero is-fullheight presentation"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-left"},[n("div",{staticClass:"columns is-vcentered"},[t._m(0),n("div",{staticClass:"column is-7-tablet is-7-desktop"},[n("figure",{staticClass:"image is4by3"},[n("img",{attrs:{src:t.profilePicture,alt:"Profile picture"}})])])]),n("div",{staticClass:"center-do-not-use"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMouseWheel,expression:"showMouseWheel"}],staticClass:"mouse"},[n("div",{staticClass:"wheel"})])])])])]),n("section",{staticClass:"hero is-fullheight portfolio"},[n("Portfolio")],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-5-tablet is-5-desktop"},[n("h3",{staticClass:"subhead is-5 handwritten-text"},[t._v(" Hi there 👋🏽 ! ")]),n("h1",{staticClass:"title is-1 handwritten-text"},[t._v(" I am "),n("span",{staticClass:"has-text-background"},[t._v("Ismaïl NGUYEN")])]),n("h2",{staticClass:"subtitle is-4 handwritten-text animated-text"},[t._v(" I have no special talent. I am only passionately curious. ")])])}],o=(n("ac1f"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container has-text-left"},[n("h3",{staticClass:"title is-5"},[t._v(" Featured Works ")]),n("div",{staticClass:"tag-list featuredposts__list",class:t.isLoading?"loading-skeleton":""},t._l(new Array(t.showAllWorks?3:1),(function(e,a){return n("InfiniteLoopSlider",{key:a,attrs:{reverse:a%2,duration:t.random(t.sliderDuration-5e3,t.sliderDuration+5e3),items_per_row:t.showAllWorks?t.works.length/3:5,items:t.works}})})),1),t.showAllWorks||t.isLoading?t._e():n("p",{staticClass:"featuredposts__footer"},[n("a",{staticClass:"featuredposts__see-all",on:{click:function(e){t.showAllWorks=!0}}},[t._v(" See All Works ")])])])])}),c=[],l=(n("4de4"),n("d81d"),n("2909")),u=(n("96cf"),n("1da1")),d=(n("d3b7"),n("d4ec")),f=n("bee2"),h=n("ade3"),p=function(){function t(){Object(d["a"])(this,t),Object(h["a"])(this,"constructApiUrl",(function(t,e){return e?"https://ismailnguyen-works.vercel.app/api/"+t+"/"+e:"https://ismailnguyen-works.vercel.app/api/"+t+"/"}))}return Object(f["a"])(t,[{key:"getAllPages",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.constructApiUrl("pages"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getPage",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.constructApiUrl("page",e));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getPageImages",value:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.constructApiUrl("pageImages",e));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loop-slider",style:t.cssClass()},[n("div",{staticClass:"inner"},t._l(t.shuffle(t.items).slice(0,t.items_per_row),(function(e,a){return n("div",{key:a,staticClass:"featuredposts__item",attrs:{title:e.title}},[n("div",{staticClass:"featuredpost",style:e.coverImage?"background-image: url("+e.coverImage.url+")":""},[n("div",{staticClass:"featuredpost__inner"},[n("div",{staticClass:"media"},[e.logo?n("div",{staticClass:"media-left"},[n("span",{staticClass:"icon is-large"},[n("img",{attrs:{src:e.logo.url,alt:e.title}})])]):t._e(),n("div",{staticClass:"media-content"},[n("a",{staticClass:"featuredpost__link",attrs:{href:"work/"+encodeURIComponent(e.id)}},[n("span",{staticClass:"featuredpost__title"},[t._v(t._s(e.title))])])])]),e.subTitle?n("p",{staticClass:"featuredpost__description"},[t._v(t._s(e.subTitle))]):t._e()])])])})),0)])},w=[],v=(n("99af"),{props:["items","duration","reverse","items_per_row"],data:function(){return{}},created:function(){return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{cssClass:function(){return"--duration: ".concat(this.duration,"ms; --direction: ").concat(this.reverse?"reverse":"normal")},shuffle:function(t){return Object(l["a"])(t).sort((function(){return.5-Math.random()}))}},computed:{}}),b=v,g=(n("4f78"),n("2877")),k=Object(g["a"])(b,m,w,!1,null,"532be178",null),C=k.exports,_={props:["showAll"],data:function(){return{works:[],showAllWorks:this.showAll||!1,isLoading:!0,sliderDuration:15e3}},components:{InfiniteLoopSlider:C},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loadWorks(),t.fetchPortfolio(),t.startAnimation();case 3:case"end":return e.stop()}}),e)})))()},methods:{startAnimation:function(){Object(l["a"])(document.querySelectorAll(".animated-column")).map((function(t){t.innerHTML=t.innerHTML+t.innerHTML}))},loadWorks:function(){for(var t=0;t<7;t++)this.works.push({isPinned:!0,title:"..."})},fetchPortfolio:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new p,t.next=3,e.getAllPages();case 3:this.works=t.sent,this.isLoading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),random:function(t,e){return Math.floor(Math.random()*(e-t))+t}},computed:{displayedWorks:function(){return this.showAllWorks?this.works:this.works?this.works.filter((function(t){return t.isPinned})):[]}}},y=_,x=(n("57b4"),Object(g["a"])(y,o,c,!1,null,"15eead16",null)),O=x.exports,P=n("1209"),M={data:function(){return{profilePicture:"/resources/images/avatar/face/1.png",showMouseWheel:!0}},components:{Portfolio:O},mounted:function(){this.animateDescriptionText(),this.animateProfilePicture(),this.animateMouseWheel()},methods:{animateDescriptionText:function(){var t=document.querySelector(".animated-text");t.innerHTML=t.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),P["a"].timeline({loop:!1}).add({targets:".animated-text .letter",opacity:[0,1],easing:"easeInOutQuad",duration:2250,delay:function(t,e){return 150*(e+1)}}).add({targets:".animated-text",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3})},animateProfilePicture:function(){var t=this;setInterval((function(){t.profilePicture="/resources/images/avatar/body/"+Math.floor(8*Math.random()+1)+".png"}),1e3)},animateMouseWheel:function(){var t=this;window.onscroll=function(){t.showMouseWheel=window.scrollY<200}}}},T=M,j=(n("0aca"),Object(g["a"])(T,s,i,!1,null,"428edecb",null)),I=j.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.work?n("section",{staticClass:"hero work-detail",class:t.hasContent?"":"is-fullheight"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container is-fullhd has-text-centered"},[n("h1",{staticClass:"title is-1 is-spaced"},[t.work.logo?n("span",{staticClass:"icon is-large"},[n("img",{staticClass:"is-rounded work-logo",attrs:{src:t.work.logo.url,alt:t.work.logo.alt,loading:"lazy"}})]):t._e(),t._v(" "+t._s(t.work.title)+" ")]),t.work.subTitle?n("h2",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.work.subTitle)+" ")]):t._e(),n("div",{staticClass:"tags"},t._l(t.work.tags,(function(e,a){return n("span",{key:a,staticClass:"tag"},[t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"subhead",domProps:{innerHTML:t._s(t.work.description)}}),n("div",{staticClass:"buttons"},[t.work.secondaryLink&&t.work.secondaryLink.text&&t.work.secondaryLink.url?n("a",{staticClass:"button button-secondary",attrs:{href:t.work.secondaryLink.url,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(t.work.secondaryLink.text)+" ")]):t._e(),t.work.primaryLink&&t.work.primaryLink.text&&t.work.primaryLink.url?n("a",{staticClass:"button button-primary",attrs:{href:t.work.primaryLink.url,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(t.work.primaryLink.text)+" ")]):t._e(),t.work.markdownPrivacyUrl?n("a",{staticClass:"button button-secondary",attrs:{href:"/work/"+encodeURIComponent(t.work.id)+"/privacy"}},[t._v(" Privacy Policy ")]):t._e(),t.work.markdownLicenseUrl?n("a",{staticClass:"button button-secondary",attrs:{href:"/work/"+encodeURIComponent(t.work.id)+"/license"}},[t._v(" License ")]):t._e()])])])]):t._e(),t.work.embeddedVideoUrl?n("section",{staticClass:"section work-detail--content"},[n("div",{staticClass:"container is-fullhd"},[n("IframeBloc",{attrs:{url:t.work.embeddedVideoUrl}})],1)]):t._e(),t.work.embeddedContent&&t.work.embeddedContent.url?n("section",{staticClass:"section work-detail--content"},[n("div",{staticClass:"container is-fullhd"},[n("IframeBloc",{attrs:{url:t.work.embeddedContent.url,orientation:t.work.embeddedContent.orientation}})],1)]):t._e(),t.images?n("section",{staticClass:"hero work-detail--content"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container is-fullhd has-text-centered"},[n("WorkCarousel",{attrs:{images:t.images}})],1)])]):t._e(),t.markdownContent?n("section",{staticClass:"section work-detail--content"},[n("div",{staticClass:"container is-fullhd"},[n("MarkdownBloc",{attrs:{text:t.markdownContent}})],1)]):t._e()])},E=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.parsedContent)}})])])},A=[],W=n("d4cd")(),U={props:["text"],computed:{parsedContent:function(){return W.render(this.text)}}},S=U,D=Object(g["a"])(S,R,A,!1,null,null,null),N=D.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"image",class:"vertical"===t.orientation?"is-9by16":"is-16by9"},[n("iframe",{staticClass:"has-ratio",attrs:{src:t.url,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",mozallowfullscreen:"",webkitallowfullscreen:""}})])},B=[],$={props:["url","orientation"]},F=$,Y=(n("f382"),Object(g["a"])(F,H,B,!1,null,"9ce6ec38",null)),q=Y.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("carousel",{attrs:{perPage:1,paginationPadding:5,paginationColor:"#404E57",paginationActiveColor:"#f8faff"}},t._l(t.images,(function(t,e){return n("slide",{key:e},[n("figure",{staticClass:"image"},[n("img",{attrs:{src:t.url,alt:t.alt,loading:"lazy"}})])])})),1)},z=[],V=n("0a63"),J={props:["images"],components:{Carousel:V["Carousel"],Slide:V["Slide"]}},K=J,X=(n("b92c"),Object(g["a"])(K,G,z,!1,null,"db56db0c",null)),Q=X.exports,Z={props:["workId"],data:function(){return{work:{},markdownContent:"",images:[]}},components:{MarkdownBloc:N,IframeBloc:q,WorkCarousel:Q},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new p,e.next=3,t.fetchPortfolio(n);case 3:return t.work=e.sent,t.work.markdownContentUrl&&t.loadDescription(),e.next=7,n.getPageImages(t.workId);case 7:t.images=e.sent;case 8:case"end":return e.stop()}}),e)})))()},methods:{fetchPortfolio:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.getPage(this.workId));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadDescription:function(){var t=this;fetch(this.work.markdownContentUrl).then((function(t){return t.text()})).then((function(e){return t.markdownContent=e}))},twitterShareLink:function(){return"https://twitter.com/intent/tweet/?text="+this.work.title+"&url="+this.work.readMoreLink},linkedInShareLink:function(){return"https://www.linkedin.com/shareArticle?mini=true&url="+this.work.readMoreLink+"&title="+this.work.title+"&source=https://www.ismailnguyen.com"}},computed:{hasContent:function(){return this.images||this.markdownContent||this.work.embeddedContent}}},tt=Z,et=(n("6406"),Object(g["a"])(tt,L,E,!1,null,"7007d952",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.work?n("section",{staticClass:"hero work-detail",class:t.hasContent?"":"is-fullheight"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container is-fullhd has-text-centered"},[n("h1",{staticClass:"title is-1 is-spaced"},[t.work.logo?n("span",{staticClass:"icon is-large"},[n("img",{staticClass:"is-rounded work-logo",attrs:{src:t.work.logo.url,alt:t.work.logo.alt,loading:"lazy"}})]):t._e(),t._v(" "+t._s(t.work.title)+" ")]),n("div",{staticClass:"buttons"},[n("a",{staticClass:"button button-secondary",attrs:{href:"/work/"+encodeURIComponent(t.work.id)}},[n("i",{staticClass:"fas fa-arrow-left",attrs:{title:"Go back"}})])])])])]):t._e(),t.hasContent?n("section",{staticClass:"section work-detail--content"},[n("div",{staticClass:"container is-fullhd"},[n("MarkdownBloc",{attrs:{text:t.markdownPrivacyText}})],1)]):t._e()])},rt=[],st={props:["workId"],data:function(){return{work:{},markdownPrivacyText:""}},components:{MarkdownBloc:N},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new p,e.next=3,t.fetchPortfolio(n);case 3:t.work=e.sent,t.work.markdownPrivacyUrl&&t.loadDescription();case 5:case"end":return e.stop()}}),e)})))()},methods:{fetchPortfolio:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.getPage(this.workId));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadDescription:function(){var t=this;fetch(this.work.markdownPrivacyUrl).then((function(t){return t.text()})).then((function(e){return t.markdownPrivacyText=e}))}},computed:{hasContent:function(){return this.markdownPrivacyText}}},it=st,ot=(n("92ba"),Object(g["a"])(it,at,rt,!1,null,"92085756",null)),ct=ot.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.work?n("section",{staticClass:"hero work-detail",class:t.hasContent?"":"is-fullheight"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container is-fullhd has-text-centered"},[n("h1",{staticClass:"title is-1 is-spaced"},[t.work.logo?n("span",{staticClass:"icon is-large"},[n("img",{staticClass:"is-rounded work-logo",attrs:{src:t.work.logo.url,alt:t.work.logo.alt,loading:"lazy"}})]):t._e(),t._v(" "+t._s(t.work.title)+" ")]),n("div",{staticClass:"buttons"},[n("a",{staticClass:"button button-secondary",attrs:{href:"/work/"+encodeURIComponent(t.work.id)}},[n("i",{staticClass:"fas fa-arrow-left",attrs:{title:"Go back"}})])])])])]):t._e(),t.hasContent?n("section",{staticClass:"section work-detail--content"},[n("div",{staticClass:"container is-fullhd"},[n("MarkdownBloc",{attrs:{text:t.markdownLicenseText}})],1)]):t._e()])},ut=[],dt={props:["workId"],data:function(){return{work:{},markdownLicenseText:""}},components:{MarkdownBloc:N},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new p,e.next=3,t.fetchPortfolio(n);case 3:t.work=e.sent,t.work.markdownLicenseUrl&&t.loadDescription();case 5:case"end":return e.stop()}}),e)})))()},methods:{fetchPortfolio:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.getPage(this.workId));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadDescription:function(){var t=this;fetch(this.work.markdownLicenseUrl).then((function(t){return t.text()})).then((function(e){return t.markdownLicenseText=e}))}},computed:{hasContent:function(){return this.markdownLicenseText}}},ft=dt,ht=(n("9cd0"),Object(g["a"])(ft,lt,ut,!1,null,"a396b12c",null)),pt=ht.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero is-fullheight"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container is-fullhd"},[n("figure",{staticClass:"image is-pulled-right"},[n("img",{attrs:{src:t.profilePicture,alt:"Profile picture"}})]),n("article",{staticClass:"message"},[n("div",{staticClass:"message-body"},[n("div",{staticClass:"content"},[n("h1",{staticClass:"title is-spaced"},[t._v(" Terms And Conditions of Use ")]),n("h2",{staticClass:"subtitle"},[t._v("WTFPL - Do What the Fuck You Want to Public License")]),n("p",[t._v(" Choose Freedom. Do What the Fuck You Want to. ")]),n("p",[t._v(" Copyright (C) "+t._s(t.today)+" Ismaïl NGUYEN ")]),n("p",[t._v(" Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed. ")]),t._m(0),n("p",[t._v(" 0. You just DO WHAT THE FUCK YOU WANT TO. ")]),t._m(1)])])])])])])},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE "),n("br"),t._v(" TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("small",[t._v(" See more at "),n("a",{attrs:{href:"//www.wtfpl.net",target:"_blank",rel:"noopener"}},[t._v("www.wtfpl.net")])])])}],vt={computed:{today:function(){return(new Date).getFullYear()}},data:function(){return{profilePicture:"/resources/images/avatar/face/1.png"}},mounted:function(){this.animateProfilePicture()},methods:{animateProfilePicture:function(){var t=this;setInterval((function(){t.profilePicture="/resources/images/avatar/face/"+Math.floor(13*Math.random()+1)+".png"}),1e3)}}},bt=vt,gt=(n("1989"),Object(g["a"])(bt,mt,wt,!1,null,"271b17db",null)),kt=gt.exports;a["a"].use(r["a"]);var Ct=new r["a"]({mode:"history",linkExactActiveClass:"is-active",routes:[{name:"Presentation",path:"/",component:I},{name:"All",path:"*",component:I},{name:"Portfolio",path:"/portfolio",component:O,props:{showAll:!0}},{name:"WorkDetail",path:"/work/:id",component:nt,props:function(t){return{workId:t.params.id}}},{name:"WorkPrivacy",path:"/work/:id/Privacy",component:ct,props:function(t){return{workId:t.params.id}}},{name:"WorkLicense",path:"/work/:id/License",component:pt,props:function(t){return{workId:t.params.id}}},{name:"Terms",path:"/terms",component:kt}],scrollBehavior:function(t,e,n){return n||(t.hash?{selector:t.hash}:{x:0,y:0})}}),_t=Ct,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isUnsupportedBrowser()?n("div",{staticClass:"notification is-danger is-light"},[n("b",[t._v("Unsupported Browser!")]),t._v(" This website will offer limited functionality in this browser. We only support the recent versions of major browsers like Chrome, Firefox, Safari, and Edge. ")]):t._e(),n("Navbar"),n("router-view"),n("button",{staticClass:"tally-button",attrs:{"data-tally-open":"3jaD66","data-tally-emoji-text":"👋🏽","data-tally-emoji-animation":"wave","data-tally-auto-close":"2000"}},[t._v("👋🏽")]),n("Footer")],1)},xt=[],Ot=(n("92c6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",class:t.isMenuOpen?"is-blurred":"",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[n("div",{staticClass:"logo",attrs:{id:"brand"}})]),n("a",{class:t.isMenuOpen?"navbar-burger burger is-active":"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){t.isMenuOpen?t.closeMenu():t.openMenu()}}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])],1),n("div",{class:t.isMenuOpen?"navbar-menu is-active":"navbar-menu"},[n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[n("transition",{attrs:{name:"slide-left"}},[n("a",{staticClass:"button is-light button-social button-buymeacoffee",attrs:{href:"//www.buymeacoffee.com/ismailnguyen",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fas fa-coffee",attrs:{title:"Buy me a coffee"}})])]),n("transition",{attrs:{name:"slide-left"}},[n("a",{staticClass:"button is-light button-social button-dev",attrs:{href:"//dev.to/ismailnguyen",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fab fa-dev",attrs:{title:"DEV Community"}})])]),n("transition",{attrs:{name:"slide-left"}},[n("a",{staticClass:"button is-light button-social button-linkedin",attrs:{href:"//www.linkedin.com/in/ismailnguyen",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fab fa-linkedin",attrs:{title:"LinkedIn"}})])]),n("transition",{attrs:{name:"slide-left"}},[n("a",{staticClass:"button is-light button-social button-paypal",attrs:{href:"//www.paypal.me/ismailnguyen",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fab fa-paypal",attrs:{title:"Paypal"}})])]),n("transition",{attrs:{name:"slide-left"}},[n("a",{staticClass:"button is-light button-social button-npm",attrs:{href:"//www.npmjs.com/~ismailnguyen",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fab fa-npm",attrs:{title:"NPM"}})])]),n("transition",{attrs:{name:"slide-left"}},[n("a",{staticClass:"button is-light button-social button-github",attrs:{href:"//github.com/ismailnguyen",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fab fa-github",attrs:{title:"Github"}})])]),n("transition",{attrs:{name:"slide-left"}},[n("a",{staticClass:"button is-light button-social button-twitter",attrs:{href:"//twitter.com/ishmaa_el",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fab fa-twitter",attrs:{title:"Twitter"}})])]),n("transition",{attrs:{name:"slide-left"}},[n("a",{staticClass:"button is-light button-social button-resume",attrs:{href:"//ismailnguyen.notion.site/Resume-76b61cac195d4a7b867bec952ed76db6",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fas fa-file-alt",attrs:{title:"Resum&eacute;"}})])]),n("transition",{attrs:{name:"slide-left"}},[n("a",{staticClass:"button is-light button-social button-github",attrs:{href:"//github.com/ismailnguyen/ismailnguyen.github.io",target:"_blank",rel:"noopener"}},[n("i",{staticClass:"fas fa-code",attrs:{title:"Resum&eacute;"}})])])],1)])])])])}),Pt=[],Mt=function(){function t(e){Object(d["a"])(this,t),this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}return Object(f["a"])(t,[{key:"setText",value:function(t){var e=this,n=this.el.innerText,a=Math.max(n.length,t.length),r=new Promise((function(t){return e.resolve=t}));this.queue=[];for(var s=0;s<a;s++){var i=n[s]||"",o=t[s]||"",c=Math.floor(40*Math.random()),l=c+Math.floor(40*Math.random());this.queue.push({from:i,to:o,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),r}},{key:"update",value:function(){for(var t="",e=0,n=0,a=this.queue.length;n<a;n++){var r=this.queue[n],s=r.from,i=r.to,o=r.start,c=r.end,l=r.char;this.frame>=c?(e++,t+=i):this.frame>=o?((!l||Math.random()<.28)&&(l=this.randomChar(),this.queue[n].char=l),t+=l):t+=s}this.el.innerHTML=t,e===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}]),t}();function Tt(t,e){var n=document.body,a=document.getElementById(t),r=new Mt(a),s=0,i=function t(){r.setText(e[s]).then((function(){setTimeout(t,800)})),s=(s+1)%e.length};i(),n.onmousemove=function(t){var e=n.clientWidth/2,r=n.clientHeight/2,s=e-(t.pageX-n.offsetLeft),i=r-(t.pageY-n.offsetTop),o=i/r*20,c=s/e*-20,l=.75;i<0&&(l=1.5-l);var u=.75;s<0&&(u=1.5-u),a.style.transform="perspective( 600px ) translate3d( 0, 0, 0 ) rotateX("+o*l+"deg) rotateY("+c*u+"deg)"}}var jt=Tt,It={data:function(){return{isMenuOpen:!1,showSocialButtons:!1}},components:{},mounted:function(){jt("brand",["isma&iuml;l","NGUYEN"])},methods:{openMenu:function(){this.isMenuOpen||(this.isMenuOpen=!0)},closeMenu:function(){this.isMenuOpen&&(this.isMenuOpen=!1)}}},Lt=It,Et=(n("fc00"),Object(g["a"])(Lt,Ot,Pt,!1,null,"44980af3",null)),Rt=Et.exports,At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"content has-text-centered"},[n("p",{staticClass:"is-pulled-left"},[t._v(" Handcrafted with "),n("span",{class:t.isHeartbeatEnabled?"icon is-small pulse":"icon is-small",on:{click:function(e){t.isHeartbeatEnabled=!t.isHeartbeatEnabled}}},[t._v("❤️")])]),n("p",{staticClass:"is-pulled-right"},[n("router-link",{attrs:{to:"/terms"}},[n("small",[t._v(" Terms ")])])],1)]),n("div",{staticClass:"waves-container"},[n("Waves")],1)])},Wt=[],Ut=n("9353"),St=n.n(Ut),Dt=(n("4cdc"),{data:function(){return{isHeartbeatEnabled:!1}},components:{Waves:St.a}}),Nt=Dt,Ht=(n("f3e3"),Object(g["a"])(Nt,At,Wt,!1,null,"f2417cd0",null)),Bt=Ht.exports,$t=n("3f73"),Ft=n.n($t),Yt={name:"App",components:{Navbar:Rt,Footer:Bt},methods:{initEasterEgg:function(){new Ft.a((function(){document.querySelector(".tally-popup iframe").src="https://with-me.netlify.app/"}))},isUnsupportedBrowser:function(){return/Trident\/|MSIE/.test(window.navigator.userAgent)},printConsoleSignature:function(){var t="font-size: 16px;background-image: linear-gradient(180deg,#bfff39,#a8ff35 70%);color: #060602;text-align: center;padding: 10px 15px;width: 100%;border-radius: 20px;";console.log("%cHi there 👋 !",t),setTimeout((function(){console.log("%cI am Ismaïl NGUYEN",t)}),1e3),setTimeout((function(){console.log("%cNice to meet you here 😊",t)}),2e3),setTimeout((function(){console.log("%cFeel free to checkout the full source code of this website in my github at https://github.com/ismailnguyen/ismailnguyen.github.io",t)}),3e3)}},mounted:function(){this.printConsoleSignature(),this.initEasterEgg()}},qt=Yt,Gt=(n("5c0b"),Object(g["a"])(qt,yt,xt,!1,null,null,null)),zt=Gt.exports;a["a"].config.productionTip=!1,new a["a"]({router:_t,render:function(t){return t(zt)}}).$mount("#app")},"57b4":function(t,e,n){"use strict";var a=n("7c8c"),r=n.n(a);r.a},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},6406:function(t,e,n){"use strict";var a=n("74c8"),r=n.n(a);r.a},"74c8":function(t,e,n){},"7c8c":function(t,e,n){},"92ba":function(t,e,n){"use strict";var a=n("fb94"),r=n.n(a);r.a},"9c0c":function(t,e,n){},"9cd0":function(t,e,n){"use strict";var a=n("2184"),r=n.n(a);r.a},a716:function(t,e,n){},b92c:function(t,e,n){"use strict";var a=n("fbf4"),r=n.n(a);r.a},f2fb:function(t,e,n){},f382:function(t,e,n){"use strict";var a=n("4efb"),r=n.n(a);r.a},f3e3:function(t,e,n){"use strict";var a=n("fa6e"),r=n.n(a);r.a},fa6e:function(t,e,n){},fb94:function(t,e,n){},fbf4:function(t,e,n){},fc00:function(t,e,n){"use strict";var a=n("a716"),r=n.n(a);r.a}});
//# sourceMappingURL=app.ea165146.js.map
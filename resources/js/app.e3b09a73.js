(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0c1c":function(t,e,a){},"0d87":function(t,e,a){},"10ee":function(t,e,a){},"1e9a":function(t,e,a){},"1fe9":function(t,e,a){"use strict";var n=a("d542"),s=a.n(n);s.a},"21ce":function(t,e,a){"use strict";var n=a("24f3"),s=a.n(n);s.a},"24f3":function(t,e,a){},3305:function(t,e,a){"use strict";var n=a("8a8c"),s=a.n(n);s.a},"389a":function(t,e,a){},5157:function(t,e,a){},"51f8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("8c4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"hero is-dark is-fullheight presentation"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-left"},[a("div",{staticClass:"columns is-vcentered"},[t._m(0),a("div",{staticClass:"column is-7-tablet is-7-desktop"},[a("figure",{staticClass:"image is4by3"},[a("img",{attrs:{src:t.profilePicture,alt:"Profile picture"}})])])]),a("div",{staticClass:"center-do-not-use"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMouseWheel,expression:"showMouseWheel"}],staticClass:"mouse"},[a("div",{staticClass:"wheel"})])])])])]),a("section",{staticClass:"hero is-dark is-fullheight portfolio"},[a("Portfolio")],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-5-tablet is-5-desktop"},[a("h3",{staticClass:"subhead is-5 handwritten-text"},[t._v(" Hi there 👋 ! ")]),a("h1",{staticClass:"title is-1 handwritten-text"},[t._v(" I am "),a("span",{staticClass:"has-text-background"},[t._v("Ismaïl NGUYEN")])]),a("h2",{staticClass:"subtitle is-4 handwritten-text animated-text"},[t._v(" I have no special talent. I am only passionately curious. ")])])}],o=(a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-left"},[a("h3",{staticClass:"title is-5"},[t._v(" Featured Works ")]),a("ul",{staticClass:"featuredposts__list",class:t.isLoading?"loading-skeleton":""},t._l(t.displayedWorks,(function(e,n){return a("li",{key:n,staticClass:"featuredposts__item",attrs:{title:e.title}},[a("div",{staticClass:"featuredpost",style:e.coverImage?"background-image: url("+e.coverImage.url+")":""},[a("div",{staticClass:"featuredpost__inner"},[a("div",{staticClass:"media"},[e.logo?a("div",{staticClass:"media-left"},[a("span",{staticClass:"icon is-large"},[a("img",{attrs:{src:e.logo.url,alt:e.title}})])]):t._e(),a("div",{staticClass:"media-content"},[a("a",{staticClass:"featuredpost__link",attrs:{href:"work/"+encodeURIComponent(e.id)}},[a("span",{staticClass:"featuredpost__title"},[t._v(t._s(e.title))])])])]),e.subTitle?a("p",{staticClass:"featuredpost__description"},[t._v(t._s(e.subTitle))]):t._e()])])])})),0),t.showAllWorks||t.isLoading?t._e():a("p",{staticClass:"featuredposts__footer"},[a("a",{staticClass:"featuredposts__see-all",on:{click:function(e){t.showAllWorks=!0}}},[a("span",{staticClass:"has-text-background"},[t._v("See All Works")])])])])])}),c=[],l=(a("4de4"),a("96cf"),a("1da1")),u=(a("d81d"),a("b0c0"),a("d4ec")),d=a("bee2"),f=a("ade3"),m=function(){function t(){var e=this;Object(u["a"])(this,t),Object(f["a"])(this,"parseImages",(function(t){var a=t.properties;return{url:e.getUrl(a.Url),alt:e.getTitle(a.Alt)}})),Object(f["a"])(this,"parsePageToWork",(function(t){var a=t.id,n=t.properties;return{id:a,isPinned:!!n.Pinned&&n.Pinned.checkbox,coverImage:n.CoverImageUrl?{url:e.getUrl(n.CoverImageUrl),alt:e.getRichText(n.CoverImageAlt)}:void 0,logo:n.LogoUrl?{url:e.getUrl(n.LogoUrl),alt:e.getRichText(n.LogoAlt)}:void 0,title:e.getTitle(n.Title),subTitle:e.getRichText(n.Subtitle),description:e.getRichText(n.Description),primaryLink:n.PrimaryLinkUrl&&n.PrimaryLinkText?{url:e.getUrl(n.PrimaryLinkUrl),text:e.getRichText(n.PrimaryLinkText)}:void 0,secondaryLink:n.SecondaryLinkUrl&&n.SecondaryLinkText?{url:e.getUrl(n.SecondaryLinkUrl),text:e.getRichText(n.SecondaryLinkText)}:void 0,markdownContentUrl:n.MarkdownContentUrl?e.getUrl(n.MarkdownContentUrl):void 0,markdownPrivacyUrl:n.MarkdownPrivacyUrl?e.getUrl(n.MarkdownPrivacyUrl):void 0,markdownLicenseUrl:n.MarkdownLicenseUrl?e.getUrl(n.MarkdownLicenseUrl):void 0,embeddedContent:n.EmbeddedContentUrl?{url:e.getUrl(n.EmbeddedContentUrl),orientation:e.getSelectValue(n.EmbeddedContentOrientation)}:void 0,embeddedVideoUrl:n.EmbeddedVideoUrl?e.getUrl(n.EmbeddedVideoUrl):void 0,socialShare:n.SocialShare?n.SocialShare.multi_select.map((function(t){return t.name.toLowerCase()})):[],tags:n.Tags?n.Tags.multi_select.map((function(t){return t.name})):[]}})),Object(f["a"])(this,"getTitle",(function(t){return t&&t.title&&t.title[0]&&t.title[0].text?t.title[0].text.content:""})),Object(f["a"])(this,"getRichText",(function(t){return t&&t.rich_text&&t.rich_text[0]&&t.rich_text[0].text?t.rich_text[0].text.content:""})),Object(f["a"])(this,"getUrl",(function(t){return t?t.url:""})),Object(f["a"])(this,"getSelectValue",(function(t){return t&&t.select?t.select.name:""}));var n=a("ed7c"),s=n.Client;this.notionClient=new s({baseUrl:"https://cors-proxy-eu.herokuapp.com/https://api.notion.com",auth:"secret_KCY0isKCbBNn7iPMkP1mLE4g0kPOYsE9AKHYEltVWeD"})}return Object(d["a"])(t,[{key:"getAllPages",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.notionClient.databases.query({database_id:"e497f54cfbc44457832225ae3ac060d2",filter:{property:"Status",select:{equals:"Published"}}});case 2:return e=t.sent,a=e.results,t.abrupt("return",a.map(this.parsePageToWork));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getPage",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.notionClient.pages.retrieve({page_id:e});case 2:return a=t.sent,t.abrupt("return",this.parsePageToWork(a));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getPageImages",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.notionClient.blocks.children.list({block_id:e});case 2:if(a=t.sent,n=a.results,!(n&&n.length>0)){t.next=10;break}if(s=n[0],"child_database"!==s.type||!s.child_database||"Images"!==s.child_database.title){t.next=10;break}return t.next=9,this.getImages(s.id);case 9:return t.abrupt("return",t.sent);case 10:return t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"getImages",value:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.notionClient.databases.query({database_id:e});case 2:return a=t.sent,n=a.results,t.abrupt("return",n.map(this.parseImages));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),h={props:["showAll"],data:function(){return{works:[],showAllWorks:this.showAll||!1,isLoading:!0}},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loadWorks(),t.fetchPortfolio();case 2:case"end":return e.stop()}}),e)})))()},methods:{loadWorks:function(){for(var t=0;t<7;t++)this.works.push({isPinned:!0,title:"..."})},fetchPortfolio:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new m,t.next=3,e.getAllPages();case 3:this.works=t.sent,this.isLoading=!1;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},computed:{displayedWorks:function(){return this.showAllWorks?this.works:this.works?this.works.filter((function(t){return t.isPinned})):[]}}},p=h,v=(a("1fe9"),a("2877")),g=Object(v["a"])(p,o,c,!1,null,"635f23f6",null),b=g.exports,w=a("1209"),C={data:function(){return{profilePicture:"/resources/images/avatar/face/1.png",showMouseWheel:!0}},components:{Portfolio:b},mounted:function(){this.animateDescriptionText(),this.animateProfilePicture(),this.animateMouseWheel()},methods:{animateDescriptionText:function(){var t=document.querySelector(".animated-text");t.innerHTML=t.textContent.replace(/\S/g,"<span class='letter'>$&</span>"),w["a"].timeline({loop:!1}).add({targets:".animated-text .letter",opacity:[0,1],easing:"easeInOutQuad",duration:2250,delay:function(t,e){return 150*(e+1)}}).add({targets:".animated-text",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3})},animateProfilePicture:function(){var t=this;setInterval((function(){t.profilePicture="/resources/images/avatar/body/"+Math.floor(8*Math.random()+1)+".png"}),1e3)},animateMouseWheel:function(){var t=this;window.onscroll=function(){t.showMouseWheel=window.scrollY<200}}}},k=C,_=(a("a187"),Object(v["a"])(k,r,i,!1,null,"e0dd84b6",null)),y=_.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.work?a("section",{staticClass:"hero work-detail",class:t.hasContent?"":"is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container is-fullhd has-text-centered"},[a("h1",{staticClass:"title is-1 is-spaced"},[t.work.logo?a("span",{staticClass:"icon is-large"},[a("img",{staticClass:"is-rounded work-logo",attrs:{src:t.work.logo.url,alt:t.work.logo.alt,loading:"lazy"}})]):t._e(),t._v(" "+t._s(t.work.title)+" ")]),t.work.subTitle?a("h2",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.work.subTitle)+" ")]):t._e(),a("div",{staticClass:"tags"},t._l(t.work.tags,(function(e,n){return a("span",{key:n,staticClass:"tag"},[t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"subhead",domProps:{innerHTML:t._s(t.work.description)}}),a("div",{staticClass:"buttons"},[t.work.secondaryLink&&t.work.secondaryLink.text&&t.work.secondaryLink.url?a("a",{staticClass:"button button-secondary",attrs:{href:t.work.secondaryLink.url,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(t.work.secondaryLink.text)+" ")]):t._e(),t.work.primaryLink&&t.work.primaryLink.text&&t.work.primaryLink.url?a("a",{staticClass:"button button-primary",attrs:{href:t.work.primaryLink.url,target:"_blank",rel:"noopener"}},[t._v(" "+t._s(t.work.primaryLink.text)+" ")]):t._e(),t.work.markdownPrivacyUrl?a("a",{staticClass:"button button-secondary",attrs:{href:"/work/"+encodeURIComponent(t.work.id)+"/privacy"}},[t._v(" Privacy Policy ")]):t._e(),t.work.markdownLicenseUrl?a("a",{staticClass:"button button-secondary",attrs:{href:"/work/"+encodeURIComponent(t.work.id)+"/license"}},[t._v(" License ")]):t._e()])])])]):t._e(),t.work.embeddedVideoUrl?a("section",{staticClass:"section work-detail--content"},[a("div",{staticClass:"container is-fullhd"},[a("IframeBloc",{attrs:{url:t.work.embeddedVideoUrl}})],1)]):t._e(),t.work.embeddedContent&&t.work.embeddedContent.url?a("section",{staticClass:"section work-detail--content"},[a("div",{staticClass:"container is-fullhd"},[a("IframeBloc",{attrs:{url:t.work.embeddedContent.url,orientation:t.work.embeddedContent.orientation}})],1)]):t._e(),a("section",{staticClass:"hero work-detail--content"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container is-fullhd has-text-centered"},[a("WorkCarousel",{attrs:{images:t.images}})],1)])]),t.markdownContent?a("section",{staticClass:"section work-detail--content"},[a("div",{staticClass:"container is-fullhd"},[a("MarkdownBloc",{attrs:{text:t.markdownContent}})],1)]):t._e()])},P=[],T=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"message"},[a("div",{staticClass:"message-body"},[a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.parsedContent)}})])])}),O=[],L=a("d4cd")(),M={props:["text"],computed:{parsedContent:function(){return L.render(this.text)}}},U=M,I=(a("6c60"),Object(v["a"])(U,T,O,!1,null,null,null)),E=I.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"image",class:"vertical"===t.orientation?"is-9by16":"is-16by9"},[a("iframe",{staticClass:"has-ratio",attrs:{src:t.url,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",mozallowfullscreen:"",webkitallowfullscreen:""}})])},S=[],R={props:["url","orientation"]},W=R,A=(a("3305"),Object(v["a"])(W,j,S,!1,null,"61d9e68e",null)),D=A.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("carousel",{attrs:{perPage:1,paginationPadding:5,paginationColor:"#404E57",paginationActiveColor:"#f8faff"}},t._l(t.images,(function(t,e){return a("slide",{key:e},[a("figure",{staticClass:"image"},[a("img",{attrs:{src:t.url,alt:t.alt,loading:"lazy"}})])])})),1)},F=[],N=a("0a63"),Y={props:["images"],components:{Carousel:N["Carousel"],Slide:N["Slide"]}},B=Y,H=(a("dfc3"),Object(v["a"])(B,$,F,!1,null,"6b1155c5",null)),q=H.exports,z={props:["workId"],data:function(){return{work:{},markdownContent:"",images:[]}},components:{MarkdownBloc:E,IframeBloc:D,WorkCarousel:q},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new m,e.next=3,t.fetchPortfolio(a);case 3:return t.work=e.sent,t.work.markdownContentUrl&&t.loadDescription(),e.next=7,a.getPageImages(t.workId);case 7:t.images=e.sent;case 8:case"end":return e.stop()}}),e)})))()},methods:{fetchPortfolio:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.getPage(this.workId));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadDescription:function(){var t=this;fetch(this.work.markdownContentUrl).then((function(t){return t.text()})).then((function(e){return t.markdownContent=e}))},twitterShareLink:function(){return"https://twitter.com/intent/tweet/?text="+this.work.title+"&url="+this.work.readMoreLink},linkedInShareLink:function(){return"https://www.linkedin.com/shareArticle?mini=true&url="+this.work.readMoreLink+"&title="+this.work.title+"&source=https://www.ismailnguyen.com"}},computed:{hasContent:function(){return this.images||this.markdownContent||this.work.embeddedContent}}},G=z,V=(a("f24f"),Object(v["a"])(G,x,P,!1,null,"f8fa66da",null)),K=V.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.work?a("section",{staticClass:"hero work-detail",class:t.hasContent?"":"is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container is-fullhd has-text-centered"},[a("h1",{staticClass:"title is-1 is-spaced"},[t.work.logo?a("span",{staticClass:"icon is-large"},[a("img",{staticClass:"is-rounded work-logo",attrs:{src:t.work.logo.url,alt:t.work.logo.alt,loading:"lazy"}})]):t._e(),t._v(" "+t._s(t.work.title)+" ")]),a("div",{staticClass:"buttons"},[a("a",{staticClass:"button button-secondary",attrs:{href:"/work/"+encodeURIComponent(t.work.id)}},[a("i",{staticClass:"fas fa-arrow-left",attrs:{title:"Go back"}})])])])])]):t._e(),t.hasContent?a("section",{staticClass:"section work-detail--content"},[a("div",{staticClass:"container is-fullhd"},[a("MarkdownBloc",{attrs:{text:t.markdownPrivacyText}})],1)]):t._e()])},X=[],Q={props:["workId"],data:function(){return{work:{},markdownPrivacyText:""}},components:{MarkdownBloc:E},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new m,e.next=3,t.fetchPortfolio(a);case 3:t.work=e.sent,t.work.markdownPrivacyUrl&&t.loadDescription();case 5:case"end":return e.stop()}}),e)})))()},methods:{fetchPortfolio:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.getPage(this.workId));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadDescription:function(){var t=this;fetch(this.work.markdownPrivacyUrl).then((function(t){return t.text()})).then((function(e){return t.markdownPrivacyText=e}))}},computed:{hasContent:function(){return this.markdownPrivacyText}}},Z=Q,tt=(a("fcbb"),Object(v["a"])(Z,J,X,!1,null,"017c76cf",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.work?a("section",{staticClass:"hero work-detail",class:t.hasContent?"":"is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container is-fullhd has-text-centered"},[a("h1",{staticClass:"title is-1 is-spaced"},[t.work.logo?a("span",{staticClass:"icon is-large"},[a("img",{staticClass:"is-rounded work-logo",attrs:{src:t.work.logo.url,alt:t.work.logo.alt,loading:"lazy"}})]):t._e(),t._v(" "+t._s(t.work.title)+" ")]),a("div",{staticClass:"buttons"},[a("a",{staticClass:"button button-secondary",attrs:{href:"/work/"+encodeURIComponent(t.work.id)}},[a("i",{staticClass:"fas fa-arrow-left",attrs:{title:"Go back"}})])])])])]):t._e(),t.hasContent?a("section",{staticClass:"section work-detail--content"},[a("div",{staticClass:"container is-fullhd"},[a("MarkdownBloc",{attrs:{text:t.markdownLicenseText}})],1)]):t._e()])},nt=[],st={props:["workId"],data:function(){return{work:{},markdownLicenseText:""}},components:{MarkdownBloc:E},created:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new m,e.next=3,t.fetchPortfolio(a);case 3:t.work=e.sent,t.work.markdownLicenseUrl&&t.loadDescription();case 5:case"end":return e.stop()}}),e)})))()},methods:{fetchPortfolio:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",e.getPage(this.workId));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadDescription:function(){var t=this;fetch(this.work.markdownLicenseUrl).then((function(t){return t.text()})).then((function(e){return t.markdownLicenseText=e}))}},computed:{hasContent:function(){return this.markdownLicenseText}}},rt=st,it=(a("80de"),Object(v["a"])(rt,at,nt,!1,null,"46a466ea",null)),ot=it.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-light is-fullheight-with-navbar has-text-centered about-me"},[a("FullScreenBackgroundMap",{attrs:{location:"Geneva"}}),a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns is-vcentered"},[a("div",{staticClass:"column"}),a("div",{staticClass:"column animated-column"},[a("div",{staticClass:"box twitter-box"},[a("article",{staticClass:"media"},[t._m(0),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v("Albert Einstein")]),t._v(" "),a("small",[t._v("@e=mc2")]),t._v(" "),a("small",[t._v(t._s((new Date).getFullYear()-1879)+" years ago")]),a("br"),t._v(" I have no special talent. I am only passionately curious. ")])])])])]),a("div",{staticClass:"box twitter-box"},[a("article",{staticClass:"media"},[t._m(1),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v("Tech Lead / Solution Architect")]),t._v(" "),t._m(2),t._v(" "),a("small",[t._v(t._s((new Date).getFullYear()-2017)+" years ago")]),a("br"),t._v(" In the "),a("i",[t._v("Center of Excellence")]),t._v(" of the e-commerce website. ")])])])])]),a("div",{staticClass:"box twitter-box"},[a("article",{staticClass:"media"},[t._m(3),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v("Craft coach | Software craftsman")]),t._v(" "),t._m(4),t._v(" "),a("small",[t._v(t._s((new Date).getFullYear()-2017)+" years ago")]),a("br"),t._v(" I give trainings to juniors on Simple Design, TDD, Agile, Coding best practices. ")])])])])]),a("div",{staticClass:"box twitter-box"},[a("article",{staticClass:"media"},[t._m(5),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v("Organizer")]),t._v(" "),t._m(6),t._v(" "),a("small",[t._v(t._s((new Date).getFullYear()-2015)+" years ago")]),a("br"),t._v(" International software development conference for professional developers who care about quality code and bettering their practices. ")])])])])]),a("div",{staticClass:"box twitter-box"},[a("article",{staticClass:"media"},[t._m(7),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v("Organizer")]),t._v(" "),t._m(8),t._v(" "),a("small",[t._v(t._s((new Date).getFullYear()-2019)+" years ago")]),a("br"),t._v(" Agile France is the great Agile conference of the community for the community: Francophone, without sponsor. ")])])])])]),t._m(9),t._m(10),t._m(11)])])])])],1)},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-left"},[a("div",{staticClass:"icon-logo"},[a("i",{staticClass:"fas fa-quote-left"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-64x64"},[a("img",{staticClass:"is-rounded",attrs:{src:"https://pbs.twimg.com/profile_images/1108412895501709312/2-VCGorq_400x400.png",alt:"L'Occitane en Provence",loading:"lazy"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",[t._v("@"),a("a",{attrs:{href:"//fr.loccitane.com",target:"_blank",rel:"noopener"}},[t._v("L'Occitane en Provence")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-64x64"},[a("img",{staticClass:"is-rounded",attrs:{src:"https://pbs.twimg.com/profile_images/1250026757094354945/y5GUDuqw_400x400.png",alt:"La Combe du Lion Vert",loading:"lazy"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",[t._v("@"),a("a",{attrs:{href:"//la-combe-du-lion-vert.fr",target:"_blank",rel:"noopener"}},[t._v("La Combe du Lion Vert")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-64x64"},[a("img",{staticClass:"is-rounded",attrs:{src:"https://pbs.twimg.com/profile_images/1065610855604252672/q3HvTFdY_400x400.jpg",alt:"NewCrafts",loading:"lazy"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",[t._v("@"),a("a",{attrs:{href:"//ncrafts.io",target:"_blank",rel:"noopener"}},[t._v("NewCrafts")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-64x64"},[a("img",{staticClass:"is-rounded",attrs:{src:"https://pbs.twimg.com/profile_images/1069274159157600257/W-gjNsu0_400x400.jpg",alt:"Agile France",loading:"lazy"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",[t._v("@"),a("a",{attrs:{href:"//2020.conf.agile-france.org",target:"_blank",rel:"noopener"}},[t._v("Agile France")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box twitter-box"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("div",{staticClass:"icon-logo"},[a("i",{staticClass:"fa fa-map-marker-alt"})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v("Google Maps")]),a("br"),t._v(" You can found me here : "),a("i",[t._v("{ `lat`: 48.86, `lon`: 2.33 }")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box twitter-box"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("div",{staticClass:"icon-logo"},[a("i",{staticClass:"fas fa-utensils"})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v("Food fact")]),a("br"),t._v(" Trying to eat less animal derived products ")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box twitter-box"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("div",{staticClass:"icon-logo"},[a("i",{staticClass:"fas fa-code"})])]),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("p",[a("strong",[t._v("True story")]),a("br"),t._v(" I want to code the future ")])])])])])}],ut=a("2909"),dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("iframe",{staticStyle:{filter:"grayscale(1) contrast(1.2) opacity(0.4)"},attrs:{width:"100%",height:"100%",frameborder:"0",marginheight:"0",marginwidth:"0",title:"map",scrolling:"no",src:"https://maps.google.com/maps?width=100%&height=600&hl=en&q="+t.location+"&ie=UTF8&t=&z=14&iwloc=B&output=embed"}})},ft=[],mt={props:["location"]},ht=mt,pt=(a("9a33"),Object(v["a"])(ht,dt,ft,!1,null,"6839d97b",null)),vt=pt.exports,gt={components:{FullScreenBackgroundMap:vt},mounted:function(){this.startAnimation()},methods:{startAnimation:function(){Object(ut["a"])(document.querySelectorAll(".column.animated-column")).map((function(t){t.innerHTML=t.innerHTML+t.innerHTML}))}}},bt=gt,wt=(a("f56a"),Object(v["a"])(bt,ct,lt,!1,null,"74ce3af9",null)),Ct=wt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container is-fullhd"},[a("figure",{staticClass:"image is-pulled-right"},[a("img",{attrs:{src:t.profilePicture,alt:"Profile picture"}})]),a("article",{staticClass:"message"},[a("div",{staticClass:"message-body"},[a("div",{staticClass:"content"},[a("h1",{staticClass:"title is-spaced"},[t._v(" Terms And Conditions of Use ")]),a("h2",{staticClass:"subtitle"},[t._v("WTFPL - Do What the Fuck You Want to Public License")]),a("p",[t._v(" Choose Freedom. Do What the Fuck You Want to. ")]),a("p",[t._v(" Copyright (C) "+t._s(t.today)+" Ismaïl NGUYEN ")]),a("p",[t._v(" Everyone is permitted to copy and distribute verbatim or modified copies of this license document, and changing it is allowed as long as the name is changed. ")]),t._m(0),a("p",[t._v(" 0. You just DO WHAT THE FUCK YOU WANT TO. ")]),t._m(1)])])])])])])},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE "),a("br"),t._v(" TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("small",[t._v(" See more at "),a("a",{attrs:{href:"www.wtfpl.net",target:"_blank",rel:"noopener"}},[t._v("www.wtfpl.net")])])])}],yt={computed:{today:function(){return(new Date).getFullYear()}},data:function(){return{profilePicture:"/resources/images/avatar/face/1.png"}},mounted:function(){this.animateProfilePicture()},methods:{animateProfilePicture:function(){var t=this;setInterval((function(){t.profilePicture="/resources/images/avatar/face/"+Math.floor(13*Math.random()+1)+".png"}),1e3)}}},xt=yt,Pt=(a("f783"),Object(v["a"])(xt,kt,_t,!1,null,"64df8f8a",null)),Tt=Pt.exports;n["a"].use(s["a"]);var Ot=new s["a"]({mode:"history",linkExactActiveClass:"is-active",routes:[{name:"Presentation",path:"/",component:y},{name:"All",path:"*",component:y},{name:"Portfolio",path:"/portfolio",component:b,props:{showAll:!0}},{name:"WorkDetail",path:"/work/:id",component:K,props:function(t){return{workId:t.params.id}}},{name:"WorkPrivacy",path:"/work/:id/Privacy",component:et,props:function(t){return{workId:t.params.id}}},{name:"WorkLicense",path:"/work/:id/License",component:ot,props:function(t){return{workId:t.params.id}}},{name:"Now",path:"/now",component:Ct},{name:"Terms",path:"/terms",component:Tt}],scrollBehavior:function(t,e,a){return a||(t.hash?{selector:t.hash}:{x:0,y:0})}}),Lt=Ot,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isUnsupportedBrowser()?a("div",{staticClass:"notification is-danger is-light"},[a("b",[t._v("Unsupported Browser!")]),t._v(" This website will offer limited functionality in this browser. We only support the recent versions of major browsers like Chrome, Firefox, Safari, and Edge. ")]):t._e(),a("Navbar"),a("router-view"),a("button",{staticClass:"tally-button",attrs:{"data-tally-open":"3jaD66","data-tally-emoji-text":"👋","data-tally-emoji-animation":"wave","data-tally-auto-close":"2000"}},[t._v("👋")]),a("Footer")],1)},Ut=[],It=(a("92c6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-transparent is-fixed-top",class:t.isMenuOpen?"is-blurred":"",attrs:{role:"navigation","aria-label":"main navigation"}},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("div",{staticClass:"logo",attrs:{id:"brand"}})]),a("a",{class:t.isMenuOpen?"navbar-burger burger is-active":"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"},on:{click:function(e){t.isMenuOpen?t.closeMenu():t.openMenu()}}},[a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}}),a("span",{attrs:{"aria-hidden":"true"}})])],1),a("div",{class:t.isMenuOpen?"navbar-menu is-active":"navbar-menu"},[a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[a("div",{staticClass:"buttons"},[a("transition",{attrs:{name:"slide-left"}},[a("a",{staticClass:"button is-light button-social button-buymeacoffee",attrs:{href:"//www.buymeacoffee.com/ismailnguyen",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fas fa-coffee",attrs:{title:"Buy me a coffee"}})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{staticClass:"button is-light button-social button-dev",attrs:{href:"//dev.to/ismailnguyen",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-dev",attrs:{title:"DEV Community"}})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{staticClass:"button is-light button-social button-linkedin",attrs:{href:"//www.linkedin.com/in/ismailnguyen",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-linkedin",attrs:{title:"LinkedIn"}})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{staticClass:"button is-light button-social button-paypal",attrs:{href:"//www.paypal.me/ismailnguyen",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-paypal",attrs:{title:"Paypal"}})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{staticClass:"button is-light button-social button-npm",attrs:{href:"//www.npmjs.com/~ismailnguyen",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-npm",attrs:{title:"NPM"}})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{staticClass:"button is-light button-social button-github",attrs:{href:"//github.com/ismailnguyen",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-github",attrs:{title:"Github"}})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{staticClass:"button is-light button-social button-twitter",attrs:{href:"//twitter.com/ishmaa_el",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fab fa-twitter",attrs:{title:"Twitter"}})])]),a("transition",{attrs:{name:"slide-left"}},[a("a",{staticClass:"button is-light button-social button-resume",attrs:{href:"//ismailnguyen.notion.site/Resume-76b61cac195d4a7b867bec952ed76db6",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"fas fa-file-alt",attrs:{title:"Resum&eacute;"}})])])],1)])])])])}),Et=[],jt=function(){function t(e){Object(u["a"])(this,t),this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}return Object(d["a"])(t,[{key:"setText",value:function(t){var e=this,a=this.el.innerText,n=Math.max(a.length,t.length),s=new Promise((function(t){return e.resolve=t}));this.queue=[];for(var r=0;r<n;r++){var i=a[r]||"",o=t[r]||"",c=Math.floor(40*Math.random()),l=c+Math.floor(40*Math.random());this.queue.push({from:i,to:o,start:c,end:l})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),s}},{key:"update",value:function(){for(var t="",e=0,a=0,n=this.queue.length;a<n;a++){var s=this.queue[a],r=s.from,i=s.to,o=s.start,c=s.end,l=s.char;this.frame>=c?(e++,t+=i):this.frame>=o?((!l||Math.random()<.28)&&(l=this.randomChar(),this.queue[a].char=l),t+=l):t+=r}this.el.innerHTML=t,e===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}},{key:"randomChar",value:function(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}]),t}();function St(t,e){var a=document.body,n=document.getElementById(t),s=new jt(n),r=0,i=function t(){s.setText(e[r]).then((function(){setTimeout(t,800)})),r=(r+1)%e.length};i(),a.onmousemove=function(t){var e=a.clientWidth/2,s=a.clientHeight/2,r=e-(t.pageX-a.offsetLeft),i=s-(t.pageY-a.offsetTop),o=i/s*20,c=r/e*-20,l=.75;i<0&&(l=1.5-l);var u=.75;r<0&&(u=1.5-u),n.style.transform="perspective( 600px ) translate3d( 0, 0, 0 ) rotateX("+o*l+"deg) rotateY("+c*u+"deg)"}}var Rt=St,Wt={data:function(){return{isMenuOpen:!1,showSocialButtons:!1}},components:{},mounted:function(){Rt("brand",["isma&iuml;l","NGUYEN"])},methods:{openMenu:function(){this.isMenuOpen||(this.isMenuOpen=!0)},closeMenu:function(){this.isMenuOpen&&(this.isMenuOpen=!1)},setTheme:function(t){if(t)return document.body.classList.remove("has-background-light"),void document.body.classList.add("has-background-dark");document.body.classList.remove("has-background-dark"),document.body.classList.add("has-background-light")},isWindowColorSchemeDark:function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},listenToWindowColorSchemeUpdate:function(){var t=this;window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){return t.setTheme(e.matches)}))},initializeTheme:function(){this.setTheme(this.isWindowColorSchemeDark()),this.listenToWindowColorSchemeUpdate()}},beforeMount:function(){document.body.classList.add("has-navbar-fixed-top"),this.initializeTheme()}},At=Wt,Dt=(a("b357"),Object(v["a"])(At,It,Et,!1,null,"a538ca14",null)),$t=Dt.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"content has-text-centered"},[a("p",{staticClass:"is-pulled-left"},[t._v(" Handcrafted with "),a("span",{class:t.isHeartbeatEnabled?"icon is-small pulse":"icon is-small",on:{click:function(e){t.isHeartbeatEnabled=!t.isHeartbeatEnabled}}},[t._v("❤️")])]),a("p",{staticClass:"is-pulled-right"},[a("router-link",{attrs:{to:"/terms"}},[a("small",[t._v(" Terms ")])])],1)]),a("div",{staticClass:"waves-container"},[a("Waves")],1)])},Nt=[],Yt=a("9353"),Bt=a.n(Yt),Ht=(a("4cdc"),{data:function(){return{isHeartbeatEnabled:!1}},components:{Waves:Bt.a}}),qt=Ht,zt=(a("21ce"),Object(v["a"])(qt,Ft,Nt,!1,null,"7273d33c",null)),Gt=zt.exports,Vt={name:"App",components:{Navbar:$t,Footer:Gt},methods:{isUnsupportedBrowser:function(){return/Trident\/|MSIE/.test(window.navigator.userAgent)},printConsoleSignature:function(){var t="font-size: 16px;background: linear-gradient(to right, #e66465, #9198e5);color: white;text-align: center;padding: 10px 15px;width: 100%;border-radius: 20px;";console.log("%cHi there 👋 !",t),setTimeout((function(){console.log("%cI am Ismaïl NGUYEN",t)}),1e3),setTimeout((function(){console.log("%cNice to meet you here 😊",t)}),2e3),setTimeout((function(){console.log("%cFeel free to checkout the full source code of this website in my github at https://github.com/ismailnguyen/ismailnguyen.github.io",t)}),3e3)}},mounted:function(){this.printConsoleSignature()}},Kt=Vt,Jt=(a("5c0b"),Object(v["a"])(Kt,Mt,Ut,!1,null,null,null)),Xt=Jt.exports;n["a"].config.productionTip=!1,new n["a"]({router:Lt,render:function(t){return t(Xt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"6c60":function(t,e,a){"use strict";var n=a("10ee"),s=a.n(n);s.a},"78bd":function(t,e,a){},"80de":function(t,e,a){"use strict";var n=a("0c1c"),s=a.n(n);s.a},"8a8c":function(t,e,a){},"8b04":function(t,e,a){},"8db9":function(t,e,a){},"9a33":function(t,e,a){"use strict";var n=a("1e9a"),s=a.n(n);s.a},"9c0c":function(t,e,a){},a187:function(t,e,a){"use strict";var n=a("389a"),s=a.n(n);s.a},b357:function(t,e,a){"use strict";var n=a("0d87"),s=a.n(n);s.a},d542:function(t,e,a){},dfc3:function(t,e,a){"use strict";var n=a("51f8"),s=a.n(n);s.a},f24f:function(t,e,a){"use strict";var n=a("78bd"),s=a.n(n);s.a},f56a:function(t,e,a){"use strict";var n=a("8db9"),s=a.n(n);s.a},f783:function(t,e,a){"use strict";var n=a("8b04"),s=a.n(n);s.a},fcbb:function(t,e,a){"use strict";var n=a("5157"),s=a.n(n);s.a}});
//# sourceMappingURL=app.e3b09a73.js.map
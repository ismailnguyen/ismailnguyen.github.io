import{_ as a,r as l,o as s,c as r,n as d,b as e,e as c,g as _,t as h,h as k,F as p,W as w,p as u,i as m}from"./index-a5b8c6fa.js";import{M as f}from"./TerminalMarkdownBloc-abd213db.js";import"./index-0b8f7f2d.js";import"./StaticTerminal-ab69233f.js";const y={props:["workId"],data(){return{work:{},markdownPrivacyText:""}},components:{MarkdownBloc:f},async created(){const o=new w;this.work=await this.fetchPortfolio(o),this.work.markdownPrivacyUrl&&this.loadDescription()},methods:{fetchPortfolio:async function(o){return o.getPage(this.workId)},loadDescription:function(){fetch(this.work.markdownPrivacyUrl).then(o=>o.text()).then(o=>this.markdownPrivacyText=o)}},computed:{hasContent:function(){return this.markdownPrivacyText}}},v=o=>(u("data-v-750240c9"),o=o(),m(),o),g={class:"hero-body"},x={class:"container is-fullhd has-text-centered"},P={class:"title is-1 is-spaced"},C={key:0,class:"icon is-large"},I=["src","alt"],b={class:"buttons"},B=["href"],S=v(()=>e("i",{class:"fas fa-arrow-left",title:"Go back"},null,-1)),T=[S],M={key:1,class:"section work-detail--content"},N={class:"container is-fullhd"};function V(o,W,D,U,t,n){const i=l("MarkdownBloc");return s(),r(p,null,[t.work?(s(),r("section",{key:0,class:d(["hero work-detail",n.hasContent?"":"is-fullheight"])},[e("div",g,[e("div",x,[e("h1",P,[t.work.logo?(s(),r("span",C,[e("img",{class:"is-rounded work-logo",src:t.work.logo.url,alt:t.work.logo.alt,loading:"lazy"},null,8,I)])):c("",!0),_(" "+h(t.work.title),1)]),e("div",b,[e("a",{href:"/work/"+encodeURIComponent(t.work.id),class:"button button-secondary"},T,8,B)])])])],2)):c("",!0),n.hasContent?(s(),r("section",M,[e("div",N,[k(i,{title:"Privacy policy",text:t.markdownPrivacyText,icon:t.work.logo.url},null,8,["text","icon"])])])):c("",!0)],64)}const R=a(y,[["render",V],["__scopeId","data-v-750240c9"]]);export{R as default};
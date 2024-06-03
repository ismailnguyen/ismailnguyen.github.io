import{W as a}from"./WorksService-9e8e3eac.js";import{M as l}from"./TerminalMarkdownBloc-d6d4e154.js";import{_ as d,e as _,o as s,c as n,f as h,b as t,d as c,j as k,t as p,g as w,p as u,i as f}from"./index-5eb4ccb3.js";import"./index-0b8f7f2d.js";import"./StaticTerminal-2374b791.js";const m={props:["workId"],data(){return{work:{},markdownLicenseText:""}},components:{MarkdownBloc:l},async created(){const o=new a;this.work=await this.fetchPortfolio(o),this.work.markdownLicenseUrl&&this.loadDescription()},methods:{fetchPortfolio:async function(o){return o.getPage(this.workId)},loadDescription:function(){fetch(this.work.markdownLicenseUrl).then(o=>o.text()).then(o=>this.markdownLicenseText=o)}},computed:{hasContent:function(){return this.markdownLicenseText}}},g=o=>(u("data-v-a565ae4b"),o=o(),f(),o),x={class:"hero-body"},v={class:"container is-fullhd has-text-centered"},y={class:"title is-1 is-spaced"},b={key:0,class:"icon is-large"},L=["src","alt"],C={class:"buttons"},I=["href"],B=g(()=>t("i",{class:"fas fa-arrow-left",title:"Go back"},null,-1)),S=[B],T={key:1,class:"section work-detail--content"},M={class:"container is-fullhd"};function N(o,V,W,D,e,r){const i=_("MarkdownBloc");return s(),n("div",null,[e.work?(s(),n("section",{key:0,class:h(["hero work-detail",r.hasContent?"":"is-fullheight"])},[t("div",x,[t("div",v,[t("h1",y,[e.work.logo?(s(),n("span",b,[t("img",{class:"is-rounded work-logo",src:e.work.logo.url,alt:e.work.logo.alt,loading:"lazy"},null,8,L)])):c("",!0),k(" "+p(e.work.title),1)]),t("div",C,[t("a",{href:"/work/"+encodeURIComponent(e.work.id),class:"button button-secondary"},S,8,I)])])])],2)):c("",!0),r.hasContent?(s(),n("section",T,[t("div",M,[w(i,{title:"License",text:e.markdownLicenseText,icon:e.work.logo.url},null,8,["text","icon"])])])):c("",!0)])}const G=d(m,[["render",N],["__scopeId","data-v-a565ae4b"]]);export{G as default};

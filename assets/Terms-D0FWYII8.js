import{S as o}from"./StaticTerminal-C6JcheU-.js";import{_ as a,c as s,b as r,y as i,t as n,o as c}from"./index-BCOwMnKj.js";const l={components:{StaticTerminal:o},data(){return{profilePicture:"/resources/images/avatar/face/1.png",text:`
                    <h1 class="title is-spaced">
                        WTFPL - Do What the Fuck You Want to Public License
                    </h1>
                    
                    <p>
                        Choose Freedom. Do What the Fuck You Want to.
                    </p>

                    <p>
                        Copyright (C) ${new Date().getFullYear()} Isma&iuml;l NGUYEN
                    </p>

                    <p>
                        Everyone is permitted to copy and distribute verbatim or modified 
                        copies of this license document, and changing it is allowed as long 
                        as the name is changed.
                    </p>
                    
                    <p>
                        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                        <br>
                        TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
                    </p>
                    
                    <p>
                        0. You just DO WHAT THE FUCK YOU WANT TO.
                    </p>

                    <p>
                        <small>
                            See more at <a href="//www.wtfpl.net" target="_blank" rel="noopener">www.wtfpl.net</a>
                        </small>
                    </p>`}},mounted(){this.animateProfilePicture()},methods:{animateProfilePicture:function(){setInterval(()=>{this.profilePicture="/resources/images/avatar/face/"+Math.floor(Math.random()*13+1)+".png"},1e3)}}},p={class:"hero section"},m={class:"container is-fullhd"};function u(d,f,h,T,e,_){const t=n("StaticTerminal");return c(),s("section",p,[r("div",m,[i(t,{handle:"Terms And Conditions of Use",profilePicture:e.profilePicture,text:e.text},null,8,["profilePicture","text"])])])}const O=a(l,[["render",u]]);export{O as default};

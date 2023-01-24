<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container is-fullhd">
                <figure class="image is-pulled-right">
                    <img :src="profilePicture" alt="Profile picture">
                </figure>
                
                <article class="message">
                    <div class="message-body">
                        <div class="content">
                            <h1 class="title is-spaced">
                                Terms And Conditions of Use
                            </h1>
                            
                            <h2 class="subtitle">WTFPL - Do What the Fuck You Want to Public License</h2>
                            
                            <p>
                                Choose Freedom. Do What the Fuck You Want to.
                            </p>

                            <p>
                                Copyright (C) {{ today }} Isma&iuml;l NGUYEN
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
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            today: function () {
                return new Date().getFullYear();
            }
        },
         data () {
            return {
				profilePicture: '/resources/images/avatar/face/1.png',
            }
        },
		mounted() {
			this.animateProfilePicture();
		},
		methods: {
			animateProfilePicture: function () {
				setInterval(() => {   
					this.profilePicture = '/resources/images/avatar/face/' + Math.floor((Math.random()*13)+1) + '.png';
				}, 1000);
			}
		}
    }
</script>

<style scoped>
    p {
        padding-top: 30px;
    }
    
    p, a {
        color: #808592 !important;
    }
</style>

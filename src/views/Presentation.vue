<template>
   <div>
        <section class="hero is-dark is-fullheight presentation">
            <div class="hero-body">
                <div class="container has-text-left">
                    <div class="columns is-vcentered">
                        <div class="column is-5-tablet is-5-desktop">
                            <h3 class="subhead is-5 handwritten-text">
                                Hi there 👋 !
                            </h3>

                            <h1 class="title is-1 handwritten-text">
                                I am <span class="has-text-background">Ismaïl NGUYEN</span>
                            </h1>

                            <h2 class="subtitle is-4 handwritten-text animated-text">
                                I have no special talent. I am only passionately curious.
                            </h2>
                        </div>

                        <div class="column is-7-tablet is-7-desktop">
                            <figure class="image is4by3">
								<img :src="profilePicture" alt="Profile picture">
							</figure>
                        </div>
                    </div>
					
					<div class="center-do-not-use">
						<div class="mouse" v-show="showMouseWheel">
							<div class="wheel"></div>
						</div>
					</div>
                </div>
            </div>
        </section>
		
		<section class="hero is-dark is-fullheight miniportfolio">
			<MiniPortfolio />
        </section>
   </div>
</template>

<script>
    import MiniPortfolio from '../components/MiniPortfolio'
	import anime from 'animejs/lib/anime.es.js';

    export default {
        data () {
            return {
				profilePicture: '/resources/images/avatar/face/1.png',
				showMouseWheel: true
            }
        },
        components: {
            MiniPortfolio
        },
		mounted() {
			this.animateDescriptionText();
			this.animateProfilePicture();
			this.animateMouseWheel();
		},
		methods: {
			animateDescriptionText: function () {
				var animatedTextWrapper = document.querySelector('.animated-text');
				animatedTextWrapper.innerHTML = animatedTextWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

				anime
				.timeline({loop: false})
				.add({
					targets: '.animated-text .letter',
					opacity: [0,1],
					easing: "easeInOutQuad",
					duration: 2250,
					delay: (el, i) => 150 * (i+1)
				}).add({
					targets: '.animated-text',
					opacity: 0,
					duration: 1000,
					easing: "easeOutExpo",
					delay: 1000
				});
			},

			animateProfilePicture: function () {
				setInterval(() => {   
					this.profilePicture = '/resources/images/avatar/body/' + Math.floor((Math.random()*8)+1) + '.png';
				}, 1000);
			},

			animateMouseWheel: function () {
				window.onscroll = () => {
					this.showMouseWheel = window.scrollY < 200;
				};
			}
		}
	}
</script>

<style scoped lang="scss">
    .presentation {
        & .subhead,
        & .title,
        & .subtitle,
        & .image,
		& .mouse {
            animation-duration: 1s;
            animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
            animation-fill-mode: both;
            animation-name: slideUp;
        }

        & .subhead {
            animation-delay: 700ms;
			padding-bottom: 15px;
        }

        & .title {
            animation-delay: 800ms;
			padding-bottom: 40px;
        }

        & .subtitle {
            animation-delay: 900ms;
        }

        & .image {
            animation-delay: 1s;
        }
		
		& .has-text-background {
			background-image: linear-gradient(120deg, #f582ae,#f582ae 100%);
			background-repeat: no-repeat;
			background-size: 100% 0.6em;
			background-position: 0 70%;
			transition: background-size 0.25s ease-in;
			
			&:hover {
				background-size: 100% 88% !important; 
			}
		}
		
		& .mouse {
			animation-delay: 7s;
		}
    }

	@media(max-width: 400px) {
		.title.is-1 {
			font-size: 2rem;
		}

		.subtitle.is-4 {
			font-size: 1rem;
		}
	}

    .miniportfolio {
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
        animation-fill-mode: both;
        animation-name: fillUp;
        animation-delay: 2s;
    }
	
	.center-do-not-use {
		display: block;
		margin: 0 auto;
		width: 24px;
		height: 100px;
		margin-top: 125px;
	}
    
	.mouse {
		height: 42px;
		width: 24px;
		border-radius: 14px;
		transform: none;
		border: 2px solid #ffffffaa;
		margin-bottom: 6px;
	}

	.wheel {
		height: 5px;
		width: 2px;
		display: block;
		margin: 5px auto;
		background: white;
		position: relative;
		height: 4px;
		width: 4px;
		border: 2px solid #ffffffaa;
		border-radius: 8px;
	}

	.wheel {
		-webkit-animation: mouse-wheel 1s linear infinite;
		-moz-animation: mouse-wheel 1s linear infinite;
	}

	@-webkit-keyframes mouse-wheel {
		0% {
			opacity: 1;
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			-webkit-transform: translateY(20px);
			-ms-transform: translateY(20px);
			transform: translateY(20px);
		}
	}

	@-moz-keyframes mouse-wheel {
		0% {
			top: 1px;
		}
		25% {
			top: 2px;
		}
		50% {
			top: 6px;
		}
		75% {
			top: 2px;
		}
		100% {
			top: 1px;
		}
	}

	@-webkit-keyframes mouse-scroll {
		0% {
			opacity: 0;
		}
		25% {
			opacity: .25;
		}
		50% {
			opacity: .5;
		}
		75% {
			opacity: .75;
		}
		100% {
			opacity: 1;
		}
	}

	@-moz-keyframes mouse-scroll {
		0% {
			opacity: 0;
		}
		50% {
			opacity: .5;
		}
		100% {
			opacity: 1;
		}
	}

	@-o-keyframes mouse-scroll {
		0% {
			opacity: 0;
		}
		25% {
			opacity: .25;
		}
		50% {
			opacity: .5;
		}
		75% {
			opacity: .75;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes mouse-scroll {
		0% {
			opacity: 0;
		}
		25% {
			opacity: .25;
		}
		50% {
			opacity: .5;
		}
		75% {
			opacity: .75;
		}
		100% {
			opacity: 1;
		}
	}
</style>
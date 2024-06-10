<template>
    <section class="hero is-fullheight-with-navbar presentation">
        <div class="hero-body">
            <div class="container has-text-left">
                <div class="columns is-vcentered">
                    <div class="column is-5-tablet is-5-desktop">
                        <h3 class="subhead is-5 handwritten-text">
                            Hi there 👋🏽 !
                        </h3>

                        <h1 class="title is-1 handwritten-text">
                            I am <span class="has-text-background">Ismaïl NGUYEN</span>
                        </h1>

                        <h2 class="subtitle is-4 ">
                            <p class="handwritten-text animated-text">
                                I have no special talent. I am only passionately curious.
                            </p>

                            <a @click="scrollToBottom" class="button button-secondary portfolio__link">
                                See my works
                            </a>
                        </h2>
                    </div>

                    <div class="column is-7-tablet is-7-desktop">
                        <figure class="image is4by3">
                            <img class="profile--picture" src="/resources/images/avatar/full_walking.png" alt="Profile picture">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	import anime from 'animejs/lib/anime.es.js';

    export default {
        data () {
            return {
				profilePicture: '/resources/images/avatar/face/1.png',
            }
        },
		mounted() {
			this.animateDescriptionText();
			this.animateProfilePicture();
		},
		methods: {
            scrollToBottom: function () {
                window.scroll({
                    top: window.outerHeight,
                    behavior: "smooth",
                });
            },
    
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
					this.profilePicture = '';
				}, 1000);
			},
		}
	}
</script>

<style scoped lang="scss">
    .presentation {
        background: #FFF !important;
        min-height: 100vh;
        z-index: 10;
    }

    .presentation {
        & .subhead,
        & .title,
        & .subtitle,
        & .image,
		& .portfolio__link {
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

			& span {
				background-image: linear-gradient(120deg, #a4a6ab, #8cb2d7 100%);
				background-repeat: no-repeat;
				background-size: 100% 0.6em;
				background-position: 0 70%;
			}
        }

        & .subtitle {
            animation-delay: 900ms;
        }

        & .image {
            animation-delay: 1s;
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

    .portfolio__link {
		animation-delay: 2s;
    }

	.buttons {
        display: inline-block;
    }

    .button-secondary {
        margin-right: 10px;
        margin-left: 10px;
        background-color: #f8faff;
        color: #000;
        font-size: 16px;
        display: inline-block;
        transition: background-color 80ms ease-in-out;
        font-weight: 400;
        text-decoration: none;
        padding: 9px 24px;
        font-size: 16px;
        border: 0;
        line-height: inherit;
        cursor: pointer;
        border-radius: 0;

        &:hover {
            background-color: #d5d6d6;
            color: #000;
        }
    }

    .profile--picture {
        transform: scaleX(-1);
    }
</style>
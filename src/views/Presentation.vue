<template>
    <section class="hero is-fullheight-with-navbar presentation">
        <div class="hero-body">
            <div class="container has-text-left">
                <div class="columns is-vcentered">
                    <div class="column is-5-tablet is-5-desktop handwritten-text">
                        <h3 class="subhead is-5 handwritten-text">
                            Hi there 👋🏽 !
                        </h3>

                        <h1 class="title is-1 handwritten-text">
                            I am Ismaïl NGUYEN
                        </h1>

                        <h2 class="subtitle is-4 ">
                            <p class="handwritten-text animated-text">
                                I have no special talent. I am only passionately curious.
                            </p>
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

    .profile--picture {
        transform: scaleX(-1);
    }
</style>
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
                            I am <span class="highlight">Ismaïl</span> NGUYEN
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

        & .hero-body {
            position: relative;
            /* Remove global static grid on this page */
            background: none !important;
            mask: radial-gradient(77% 50% at 55% 30%,#000 0,#000 39.64%,transparent 100%);
        }

        /* Animated grid overlay */
        & .hero-body::before,
        & .hero-body::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 0;
            opacity: 1;
        }

        /* Vertical moving lines */
        & .hero-body::before {
            --grid: 56px;
            --line: rgba(0, 0, 0, 0.10);
            background-image: repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px var(--grid));
            background-size: var(--grid) var(--grid);
            animation: grid-move-x 18s linear infinite;
            will-change: background-position;
        }

        /* Horizontal moving lines */
        & .hero-body::after {
            --grid: 56px;
            --line: rgba(0, 0, 0, 0.10);
            background-image: repeating-linear-gradient(0deg, var(--line) 0 1px, transparent 1px var(--grid));
            background-size: var(--grid) var(--grid);
            animation: grid-move-y 24s linear infinite;
            will-change: background-position;
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

            & .highlight {
                position: relative;
                color: #0091ff;

                &::before {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    border-radius: 10px;
                    background: rgba(1, 128, 255, 0.118);
                }

                @media (max-width: 767.98px) {
                    &::before {
                        top: .25rem;
                        right: -.75rem;
                        bottom: 0;
                        left: -1.25rem;
                    }
                }

                @media (min-width: 1218px) {
                    &::before {
                        top: .25rem;
                        right: -0.75rem;
                        bottom: 0;
                        left: -1.25rem;
                    }
                }

                @media (min-width: 767.98px) and (max-width: 1218px) {
                    &::before {
                        top: 3.75rem;
                        right: -.75rem;
                        bottom: 0;
                        left: -8.75rem;
                    }
                }
            }
        }

        & .subtitle {
            animation-delay: 900ms;
        }

        & .image {
            animation-delay: 1s;
        }
    }

    @keyframes grid-move-x {
        from { background-position: 0 0; }
        to   { background-position: 56px 0; }
    }

    @keyframes grid-move-y {
        from { background-position: 0 0; }
        to   { background-position: 0 56px; }
    }

    /* Respect users who prefer reduced motion */
    @media (prefers-reduced-motion: reduce) {
        .presentation .hero-body::before,
        .presentation .hero-body::after {
            animation: none !important;
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

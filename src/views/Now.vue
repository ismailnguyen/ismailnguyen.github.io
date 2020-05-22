<template>
    <section class="hero is-light is-fullheight-with-navbar has-text-centered about-me">
        <div class="hero-body">
            <div class="container">
              
                <div class="columns is-vcentered">
                    <div class="column">
                        <h1 class="title is-1">About me</h1>
                        <blockquote class="handwritten-text">"I have no special talent. I am only passionately curious."</blockquote>
                        <blockquote>- A. Einstein</blockquote>
                    </div>
                    <div class="column">
                        <div class="notification is-warning">
                            <div class="neon-container">
                                <span class="title">
                                    Now
                                </span>
                            </div>

                            <ul class="has-text-left">
                                <li>
                                    <p>
                                        <i class="fas fa-briefcase"></i> In position of Technical Leader of the <i>Checkout team</i> <strong>@<a href="//fr.loccitane.com/" target="_blank" rel="noopener">L'Occitane en Provence</a></strong>'s e-commerce website.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i class="fas fa-graduation-cap"></i> As a <i>software craftsman</i> and <i>craft coach</i> I also give trainings to juniors on Simple Design, TDD, Agile, Coding best practices <strong>@<a href="//la-combe-du-lion-vert.fr/" target="_blank" rel="noopener">LeLion_Vert</a></strong>.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i class="fas fa-chalkboard-teacher"></i> I'm part of <i>organization team</i> of <strong><a href="//ncrafts.io/" target="_blank" rel="noopener">NewCrafts</a></strong> and <strong><a href="//conf.agile-france.org" target="_blank" rel="noopener">Agile France</a></strong> conferences.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i class="fa fa-map-marker-alt"></i> You can found me here : <i>{ `lat`: 48.86, `lon`: 2.33 }</i>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i class="fas fa-utensils"></i> Trying to eat less animal derived products
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <i class="fas fa-code"></i> I want to code the future
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    blockquote.handwritten-text {
        color: #2d3958 !important; 
    }

    blockquote {
        color: #7b88a8 !important;
    }

    .button-github:hover .icon {
        color: black;
    }

    .button-twitter:hover .icon {
        color: #1aa4ef;
    }

    .button-linkedin:hover .icon {
        color: #0073b1;
    }

    /* --- Neon animation --- */
    @font-face {
        font-family: 'neontubes';
        src: url("/resources/fonts/neontubes/neontubes-webfont.eot");
        src: url("/resources/fonts/neontubes/neontubes-webfont.eot?#iefix") format("embedded-opentype"), url("/resources/fonts/neontubes/neontubes-webfont.woff2") format("woff2"), url("/resources/fonts/neontubes/neontubes-webfont.woff") format("woff"), url("/resources/fonts/neontubes/neontubes-webfont.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    .neon-container {
        display: inline-flex;
        font-family: "neontubes";
        font-size: 40px;
        text-align: center;
        white-space: nowrap;
        text-align: center;
    }

    .neon-container span {
        display: block;
        -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        will-change: opacity;
        color: #ffd9e2;
        text-shadow: 0 0 0 transparent, 0 0 10px #ff003c, 0 0 20px rgba(255, 0, 60, 0.5), 0 0 40px #ff003c, 0 0 100px #ff003c, 0 0 200px #ff003c, 0 0 300px #ff003c, 0 0 500px #ff003c, 0 0 1000px #ff003c;
        -webkit-animation: blink 4s infinite alternate;
            animation: blink 4s infinite alternate;
    }
    
    @-webkit-keyframes buzz {
        70% {
            opacity: 0.80;
        }
    }
    
    @keyframes buzz {
        70% {
            opacity: 0.80;
        }
    }
    @-webkit-keyframes blink {
        40% {
            opacity: 1;
        }
        42% {
            opacity: 0.8;
        }
        43% {
            opacity: 1;
        }
        45% {
            opacity: 0.2;
        }
        46% {
            opacity: 1;
        }
    }
    @keyframes blink {
        40% {
            opacity: 1;
        }
        42% {
            opacity: 0.8;
        }
        43% {
            opacity: 1;
        }
        45% {
            opacity: 0.2;
        }
        46% {
            opacity: 1;
        }
    }

    .notification {
        box-shadow: 8px 8px 20px 0 rgba(106, 53, 255, 0.32);
    }

    ul,
    li {
        padding-top: 20px;
    }

    .about-me .title,
    .about-me blockquote,
    .about-me .notification {
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
        animation-fill-mode: both;
    }

    .about-me .title {
        animation-name: slideUp;
        animation-delay: 700ms;
    }

    .about-me blockquote {
      animation-name: slideUp;
      animation-delay: 800ms;
    }

    .about-me .notification {
      animation-name: bounceIn;
      animation-delay: 900ms;
    }
</style>
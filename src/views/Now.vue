<template>
    <section class="hero is-light is-fullheight-with-navbar has-text-centered about-me">
        
        <FullScreenBackgroundMap location="Romainville" />

        <div class="hero-body">
            <div class="container">
              
                <div class="columns is-vcentered">
                    <div class="column"></div>

                    <div class="column animated-column">
                        <div class="box twitter-box">
                            <article class="media">
                                <div class="media-left">
                                    <div class="icon-logo">
                                        <i class="fas fa-quote-left"></i>
                                    </div>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Albert Einstein</strong> <small>@e=mc2</small> <small>{{ new Date().getFullYear() - 1879  }} years ago</small>
                                            <br>
                                            I have no special talent. I am only passionately curious.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="box twitter-box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img class="is-rounded" src="https://pbs.twimg.com/profile_images/1108412895501709312/2-VCGorq_400x400.png" alt="L'Occitane en Provence" loading="lazy">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Tech lead</strong> <small>@<a href="//fr.loccitane.com" target="_blank" rel="noopener">L'Occitane en Provence</a></small> <small>{{ new Date().getFullYear() - 2017  }} years ago</small>
                                            <br>
                                            In the <i>Checkout team</i> of the e-commerce website.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="box twitter-box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img class="is-rounded" src="https://pbs.twimg.com/profile_images/1250026757094354945/y5GUDuqw_400x400.png" alt="La Combe du Lion Vert" loading="lazy">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Craft coach | Software craftsman</strong> <small>@<a href="//la-combe-du-lion-vert.fr" target="_blank" rel="noopener">La Combe du Lion Vert</a></small> <small>{{ new Date().getFullYear() - 2017  }} years ago</small>
                                            <br>
                                            I give trainings to juniors on Simple Design, TDD, Agile, Coding best practices.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="box twitter-box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img class="is-rounded" src="https://pbs.twimg.com/profile_images/1065610855604252672/q3HvTFdY_400x400.jpg" alt="NewCrafts" loading="lazy">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Organizer</strong> <small>@<a href="//ncrafts.io" target="_blank" rel="noopener">NewCrafts</a></small> <small>{{ new Date().getFullYear() - 2015  }} years ago</small>
                                            <br>
                                            International software development conference for professional developers who care about quality code and bettering their practices.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="box twitter-box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img class="is-rounded" src="https://pbs.twimg.com/profile_images/1069274159157600257/W-gjNsu0_400x400.jpg" alt="Agile France" loading="lazy">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Organizer</strong> <small>@<a href="//2020.conf.agile-france.org" target="_blank" rel="noopener">Agile France</a></small> <small>{{ new Date().getFullYear() - 2019  }} years ago</small>
                                            <br>
                                            Agile France is the great Agile conference of the community for the community: Francophone, without sponsor.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="box twitter-box">
                            <article class="media">
                                <div class="media-left">
                                    <div class="icon-logo">
                                        <i class="fa fa-map-marker-alt"></i>
                                    </div>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Google Maps</strong>
                                            <br>
                                            You can found me here : <i>{ `lat`: 48.86, `lon`: 2.33 }</i>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="box twitter-box">
                            <article class="media">
                                <div class="media-left">
                                    <div class="icon-logo">
                                        <i class="fas fa-utensils"></i>
                                    </div>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Food fact</strong>
                                            <br>
                                            Trying to eat less animal derived products
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="box twitter-box">
                            <article class="media">
                                <div class="media-left">
                                    <div class="icon-logo">
                                        <i class="fas fa-code"></i>
                                    </div>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>True story</strong>
                                            <br>
                                            I want to code the future
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import FullScreenBackgroundMap from '../components/FullScreenBackgroundMap'

    export default {
        components: {
            FullScreenBackgroundMap
        },
        mounted () {
            this.startAnimation();
        },
        methods: {
            startAnimation: function () {
                [...document.querySelectorAll('.column.animated-column')].map(column => {
                    column.innerHTML = column.innerHTML + column.innerHTML;
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .about-me .twitter-box {
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
        animation-fill-mode: both;
    }

    .about-me .twitter-box {
      animation-name: slideUp;
    }

    @for $i from 1 through 50 {
      .about-me .twitter-box:nth-child(#{$i}n) {
          animation-delay: #{($i/3 + 0.7)}s;
      }
    }

    .icon-logo {
        font-size: 40px;
    }

    .has-background-light .icon-logo > * {
        color: #6b65a7;
    }

    .has-background-dark .icon-logo > * {
        color: #f8faff;
    }

    .has-background-dark .about-me .twitter-box {
        background-color: rgb(41, 43, 51);
        color: rgb(149, 156, 177);
    }

    .has-background-dark .about-me .twitter-box .media-content strong {
        color: #f8faff;
    }

    .animated-column {
        animation: slide 60s infinite linear;
    }

    @keyframes slide {
        to {
            -webkit-transform: translateY(var(--direction, -50%));
                    transform: translateY(var(--direction, -50%));
        }
    }
</style>
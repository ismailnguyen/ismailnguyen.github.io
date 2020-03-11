<template>
    <section class="hero is-light is-fullheight-with-navbar">
        <div class="hero-body">
            <div class="container has-text-left">
                <div class="columns">
                    <div class="column">
                        <h1 class="title is-1">Hey, I'm Ismaïl Nguyen.</h1>

                        <h2 class="subtitle is-4">
                            <span>&lt; &frasl; I'm a</span>
                            <span id="animatedText"></span>
                            <span>&gt;</span>
                        </h2>
                    </div>

                    <div class="column">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img data-src="https://ih0.redbubble.net/image.293388391.7026/flat,1000x1000,075,f.jpg" alt="Image" class="lazyload">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>Leonardo da Vinci</strong> <small>@leonardoDaVinci</small> <small>520 years ago</small>
                                            <br> Simplicity is the ultimate sophistication.
                                        </p>
                                    </div>
                                    <nav class="level is-mobile">
                                        <div class="level-left">
                                            <a class="level-item" aria-label="reply">
                                                <span class="icon is-small">
                                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a class="level-item" aria-label="retweet">
                                                <span class="icon is-small">
                                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a class="level-item" aria-label="like">
                                                <span class="icon is-small">
                                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
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
    import TxtType from '../typing-animation'

    export default {
      mounted() {
        var element = document.getElementById('animatedText');
        var rotationText = [ " software craftsman.", " family guy.", " food addicted." ];
        var typingSpeed = 2000;

        new TxtType(element, rotationText, typingSpeed);
      }
    }
</script>

<style scoped>
 
</style>
<template>
  <div>
    <div class="notification is-danger is-light" v-if="isUnsupportedBrowser()">
      <b>Unsupported Browser!</b>
      This website will offer limited functionality in this browser. We only support the recent versions of major browsers like Chrome, Firefox, Safari, and Edge.
    </div>

    <Navbar />

    <video class="bg-video" src="//dapper-phoenix-0e57fc.netlify.app/bg_video.webm" muted loop autoplay></video>
    
    <router-view />

    <button
      class="tally-button"
      data-tally-open="3jaD66"
      data-tally-emoji-text="👋🏽"
      data-tally-emoji-animation="wave"
      data-tally-auto-close="2000">👋🏽</button>
	
    <Footer />

  </div>
</template>

<script>
  import 'bulma/css/bulma.css'
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'
  import Konami from 'konami';

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    },
    methods: {
      initEasterEgg: function () {
        new Konami(() => {
          document.querySelector('.tally-popup iframe').src = 'https://with-me.netlify.app/';
        });
      },
      isUnsupportedBrowser: function () {
        // Internet Explorer 10 and Internet Explorer 11
        return /Trident\/|MSIE/.test(window.navigator.userAgent);
      },
      printConsoleSignature: function () {
        var consoleSignatureStyle = "font-size: 16px;" +
        "background-image: linear-gradient(120deg, #839c11, #839c11 100%);" +
        "color: #fff;" +
        "text-align: center;" +
        "padding: 10px 15px;" +
        "width: 100%;" +
        "border-radius: 20px;";

        console.log(`%cHi there 👋 !`, consoleSignatureStyle);

        setTimeout(() => {   
          console.log(`%cI am Ismaïl NGUYEN`, consoleSignatureStyle);
        }, 1000);

        setTimeout(() => {   
          console.log(`%cNice to meet you here 😊`, consoleSignatureStyle);
        }, 2000);

        setTimeout(() => {   
          console.log(`%cFeel free to checkout the full source code of this website in my github at https://github.com/ismailnguyen/ismailnguyen.github.io`, consoleSignatureStyle);
        }, 3000);
      },
    },
    mounted() {
      this.printConsoleSignature();
      this.initEasterEgg();
    }
  }
</script>

<style lang="scss">
  html {
    background: #9cf32b!important;
  }

  video.bg-video
  {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  body {
    margin: 1rem;
    border-radius: 50px;
    background-image: linear-gradient(180deg,#bfff39,#a8ff35 70%);
  }

  @font-face {
    font-family: 'Bluu Next Bold';
    font-style: normal;
    font-weight: normal;
    src: local('fonts/Bluu Next Bold'), url('/resources/fonts/BluuNext-Bold.woff') format('woff');
  }
    
  @font-face {
    font-family: 'Bluu Next Bold Italic';
    font-style: normal;
    font-weight: normal;
    src: local('Bluu Next Bold Italic'), url('/resources/fonts/BluuNext-Bolditalic.woff') format('woff');
  }

  body {
    font-family:'Bluu Next Bold';
  }

  article {
    font-family: Muli, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  }
  
  .handwritten-text {
    font-family: 'Waiting for the Sunrise', cursive; 
    margin: 10px 50px; 
    letter-spacing: 6px; 
    font-weight: bold;
  }

  /* Do not factorize this with the below one because it won't work*/
  ::selection {
    background: #fff;
    color: #060602;
  }

  ::-moz-selection {
    background: #fff;
    color: #060602;
  }

  .hero .subhead {
    color: #fff;
  }

  .hero.is-fullheight-with-navbar {
    min-height: 74vh;
  }

  body,
  h1,
  h2,
  h3,
  .hero .title,
  .hero h2,
  .hero .subtitle {
    color: #fff;
  }

  .hero,
  .navbar
   {
    background:none !important;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.3s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
  }

  .is-clickable {
    cursor: pointer;
  }

  /* --- Item animations --- */
  @keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-1rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(1rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(-5rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes bounceIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fillUp {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  .tally-button {
    background: none;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0, 0.5, 0, 1);
    animation-fill-mode: both;
    animation-name: fillUp;
    animation-delay: 2s;
  }
  
  .tally-button:hover {
    animation: index-module_wave__28Vlw 1s ease-in-out 20;
  }
</style>
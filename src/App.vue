<template>
  <div>
    <div class="notification is-danger is-light" v-if="isUnsupportedBrowser()">
      <b>Unsupported Browser!</b>
      This website will offer limited functionality in this browser. We only support the recent versions of major browsers like Chrome, Firefox, Safari, and Edge.
    </div>

    <Navbar />
    
    <router-view />
    
    <Footer />
  </div>
</template>

<script>
  import 'bulma/css/bulma.css'
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    },
    methods: {
      isUnsupportedBrowser: function () {
          // Internet Explorer 10 and Internet Explorer 11
          return /Trident\/|MSIE/.test(window.navigator.userAgent);
      },
      
    }
  }
</script>

<style lang="scss">
  html, body {
    background: none;
  }

  body {
    font-family: Muli, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  }

  ::selection {
    background: #2d3958;
    color: #f8faff;
  }

  ::-moz-selection {
    background: #2d3958;
    color: #f8faff;
  }

  .hero .subhead {
    color: #6b65a7;
  }

  .hero.is-fullheight-with-navbar {
    min-height: 74vh;
  }

  .has-background-light body,
  .has-background-light .hero h1 {
    color: #2d3958 !important;
  }

  .has-background-light .hero h2 {
    color: #7b88a8 !important;
  }

  .has-background-dark body,
  .has-background-dark .hero h1 {
    color: #f8faff !important;
  }

  .has-background-dark,
  .hero.is-dark,
  .has-background-dark .hero h2,
  .has-background-dark .hero .subtitle {
    color: #acb9bf !important;
  }

  .has-background-light {
    background: #D3CCE3;
    background: -webkit-linear-gradient(to right, #E9E4F0, #D3CCE3);
    background: linear-gradient(to right, #E9E4F0, #D3CCE3);
  }

  .hero,
  .navbar
   {
    background:none !important;
  }

  .has-background-dark {
    background: #152331;
    background: -webkit-linear-gradient(45deg, #000000, #152331);
    background: linear-gradient(45deg, #000000, #152331);
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
</style>
<template>
  <div id="app" :class="this.$route.name == 'WorkDetail' ? 'has-background-dark': 'has-background-light'">

    <Navbar />
    <transition name="slide-left">
      <router-view />
      
    </transition>
      <Footer />
    
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style>

  body,
  .has-background-light .hero h1,
  .has-background-light .hero h2 {
    color: #2d3958 !important; 
  }

  .has-background-light .hero h2 {
    color: #7b88a8 !important;
  }

  body,
  .has-background-dark .hero h1,
  .has-background-dark .hero h2 {
    color: #fff !important; 
  }

  .has-background-dark .hero h2,
  .has-background-dark .hero .subtitle {
    color: #acb9bf !important;
  }

  .has-background-light,
  .is-light {
    background-color: #eceef7 !important;
  }

  .has-background-dark,
  .is-dark {
    background-color: #2e363b !important;
    color: #acb9bf !important;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
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

  .handwritten-text {
    font-family: 'Waiting for the Sunrise', cursive; 
    margin: 10px 50px; 
    letter-spacing: 6px; 
    font-weight: bold
  }

  .is-clickable {
    cursor: pointer;
  }
</style>
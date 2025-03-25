<template>
  <main>
    <Navbar />

    <router-view />
  </main>
  <div class="placeholder"></div>

  <FooterWithPortfolio v-if="$route.meta.footerType == 'withPortfolio'" />
  <Footer v-else />
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.css";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import FooterWithPortfolio from "./components/FooterWithPortfolio.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    FooterWithPortfolio,
  },
  methods: {
    printConsoleSignature: function () {
      var consoleSignatureStyle =
        "font-size: 16px;" +
        "background-color: #000;" +
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
        console.log(
          `%cFeel free to checkout the full source code of this website in my github at https://github.com/ismailnguyen/ismailnguyen.github.io`,
          consoleSignatureStyle
        );
      }, 3000);
    },
  },
  mounted() {
    this.printConsoleSignature();
  },
};
</script>

<style lang="scss">
html {
  background: #fff !important;
}

video.bg-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

main {
  z-index: 10;
  position: relative;
}

nav {
  padding: 1rem;
}

@import url("https://fonts.cdnfonts.com/css/latin-modern-roman");

body {
  font-family: "LMRoman10", sans-serif;
  font-family: "LMRomanCaps10", sans-serif;
  font-family: "LMRomanDunh10", sans-serif;
  font-family: "LMRomanSlant10", sans-serif;
  font-family: "LMRomanDemi10", sans-serif;
}

.handwritten-text {
  letter-spacing: 6px;
  font-weight: bold;
}

@media (max-width: 767.98px) {
  .handwritten-text {
    margin: 10px;
    letter-spacing: 6px;
    font-weight: bold;
  }
}

@media (min-width: 767.98px) {
  .handwritten-text {
    margin: 10px 50px;
    letter-spacing: 6px;
    font-weight: bold;
  }
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
  color: #060602;
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
  color: #060602;
}

.hero,
.navbar {
  background: none !important;
}

.hero {
  background-color: #fff !important;
  z-index: 10;
}

.hero-body {
  background-image: repeating-linear-gradient(#fff 1px, #fff 4px, transparent 5px, transparent 8px), repeating-linear-gradient(90deg, #fff 1px, #fff 5px, transparent 0, transparent 8px), repeating-linear-gradient(rgba(0, 0, 0, .22), rgba(0, 0, 0, .22) 1px, transparent 0, transparent), repeating-linear-gradient(90deg, rgba(0, 0, 0, .22), rgba(0, 0, 0, .22) 1px, transparent 0, transparent);
  background-size: 56px 56px;
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

.button-primary {
  margin-right: 10px;
  margin-left: 10px;
  padding: 9px 24px;
  background-color: #000;
  font-size: 16px;
  display: inline-block;
  transition: background-color 80ms ease-in-out;
  font-weight: 400;
  text-decoration: none;
  color: #fff;
  border: 1px solid #000;
  line-height: inherit;
  cursor: pointer;
  border-radius: 0;

  &:hover {
    color: #000;
    background-color: #fff;
  }
}

.button-secondary {
  margin-right: 10px;
  margin-left: 10px;
  font-size: 16px;
  display: inline-block;
  transition: background-color 80ms ease-in-out;
  font-weight: 400;
  text-decoration: none;
  padding: 9px 24px;
  font-size: 16px;
  border: 1px dashed #000;

  line-height: inherit;
  cursor: pointer;
  border-radius: 0;

  &:hover {
    background-color: #000;
    color: #fff;
  }
}
</style>

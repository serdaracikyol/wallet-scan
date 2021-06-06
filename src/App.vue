<template>
  <div id="app">
    <Navigation brand="WalletScan" />
    <div class="router-wrapper">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-size: 16px;

  body {
    font-weight: normal;
    font-family: "Roboto", sans-serif;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    a {
      text-decoration: none;
    }

    #app {
      color: #444;

      .router-wrapper {
        width: 1366px;
        height: calc(100vh - 5rem);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>

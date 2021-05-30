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
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400&family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap");
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  ul,
  li,
  a {
    list-style: none;
    text-decoration: none;
  }
  body {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: "Lato", sans-serif;
    width: 100%;
    height: 100%;

    #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #444;
      height: 100%;
      display: flex;
      flex-direction: column;

      .router-wrapper {
        width: 1366px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        flex-grow: 1;
        justify-content: space-between;
        align-items: stretch;
      }
    }
  }
}
</style>

<template>
  <div id="welcome-banner">
    <div class="wrapper">
      <div class="left">
        <h1>Track Your Wallet</h1>
        <h4>Track your EVM compatible wallet address in one place.</h4>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeBanner",
  data() {
    return {};
  },
  props: {},
  computed: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap");
#welcome-banner {
  background: linear-gradient(
    180deg,
    rgba(179, 255, 177, 1) 31%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 450px;
  width: 100%;
  margin: 0;

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .left {
    width: 600px;
    h1,
    h4 {
      display: inline-block;
      font-family: "Roboto Slab", serif;
      color: #4b4b4b;
    }
    h1 {
      font-size: 50px;
      font-weight: bold;
      margin-top: 100px;
    }
    h4 {
      font-size: 20px;
      font-weight: 300;
      margin-top: 10px;
    }
  }
  .right {
    width: 588px;
    height: 450px;
    background: url("../assets/images/Supported_Chains.svg") no-repeat;
  }
}
</style>

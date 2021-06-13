<template>
  <div class="home">
    <h1>This page is home page.</h1>
    <button @click="test">Test</button>
  </div>
</template>

<script>
//import marketDataService from "../services/market/marketData.service";

export default {
  name: "Home",
  components: {},
  methods: {
    test() {
      //marketDataService.getCoinPrices(["avalanche-2"], ["TRY"]);
    },
  },
};
</script>

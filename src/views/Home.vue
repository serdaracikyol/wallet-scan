<template>
  <div class="home">
    <h1>This page is home page.</h1>
    <button @click="deneme">Test</button>
  </div>
</template>

<script>
//import marketDataService from "../services/market/marketData.service";
import BlockchainFactory from "../services/blockchain/blockchainFactory.service";

export default {
  name: "Home",
  components: {},
  methods: {
    deneme() {
      let avx = new BlockchainFactory(
        null,
        "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"
      );

      avx.getBalance().then((bal) => {
        console.log(bal);
      });
      //marketDataService.getCoinPrices(["avalanche-2"], ["TRY"]);
    },
  },
};
</script>

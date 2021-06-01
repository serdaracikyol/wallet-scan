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
      let avx = BlockchainFactory.avalanche(
        "0xe63D6CF8e83E0F0F04Fb38C04d01a8E6e2aA0187"
      );

      // avx.getBalance().then((bal) => {
      //   console.log(bal);
      // });

      // avx.getTokenBalances().then((bal) => {
      //   console.log(bal);
      // });

      avx.getAllBalance().then((bal) => {
        console.log(bal);
      });
      //marketDataService.getCoinPrices(["avalanche-2"], ["TRY"]);
    },
  },
};
</script>

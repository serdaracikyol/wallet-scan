<template>
  <WelcomeBanner />
</template>

<script>
//import marketDataService from "../services/market/marketData.service";
import WelcomeBanner from "../components/WelcomeBanner.vue";

export default {
  name: "Home",
  components: {
    WelcomeBanner,
  },
  methods: {
    test() {
      //marketDataService.getCoinPrices(["avalanche-2"], ["TRY"]);
    },
  },
};
</script>

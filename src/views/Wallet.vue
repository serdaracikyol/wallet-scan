<template>
  <div class="wallet">
    <div class="wrapper">
      <h1>Your Wallet</h1>
      <wallet-table :key="$route.query.q" />
    </div>
  </div>
</template>
<script>
import WalletTable from "../components/WalletTable.vue";

export default {
  computed: {},
  components: {
    WalletTable,
  },
};
</script>
<style lang="scss" scoped>
.wallet {
  flex-grow: 1;
}
</style>

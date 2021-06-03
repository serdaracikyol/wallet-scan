<template>
  <div class="wallet">
    <h1>Your Wallet</h1>
    <wallet-table :key="$route.query.q" />
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

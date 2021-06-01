<template>
  <div class="wallet">
    <h1>Your Wallet</h1>
    <wallet-table></wallet-table>
  </div>
</template>
<script>
import WalletTable from "../components/WalletTable.vue";
export default {
  components: {
    WalletTable,
  },
};
</script>

<template>
  <div>
    <table class="wallet-table">
      <thead>
        <tr>
          <th>BC</th>
          <th>Name</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in balanceList" :key="item.symbol">
          <td>
            <chain-icon :chain-name="item.chain" width="40" height="40" />
          </td>
          <td>{{ item.name }}</td>
          <td>
            {{ item.balance }} <span class="symbol">{{ item.symbol }}</span>
          </td>
        </tr>
        <tr v-if="loading" class="loading">
          <td colspan="4">Loading..</td>
        </tr>
        <tr v-if="error.walletError && !loading" class="loading">
          <td colspan="4">{{ error.walletError }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { ChainIcon } from "./icons/LoadIcon";

export default {
  computed: {
    ...mapState(["error"]),
    ...mapState("walletModule", ["balanceList", "loading"]),
  },
  methods: {
    ...mapActions("walletModule", ["getBalances"]),
  },
  mounted: function () {
    this.getBalances(this.$route.query.q);
  },
  components: {
    ChainIcon,
  },
};
</script>

<style lang="scss" scoped>
table.wallet-table {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border-collapse: collapse;

  th,
  td {
    text-align: start;
    padding: 15px;

    &:first-child {
      width: 5%;
    }

    &:last-child {
      width: 20%;
    }
  }

  thead {
    tr {
      color: #eee;
      background-color: #333;
      border-bottom: 1px solid #444;

      th {
        border-right: 1px solid #444;
      }
    }
  }

  tbody {
    tr {
      background-color: #eee;
      background: linear-gradient(to top, #f0f0f0, #ffffff, #ffffff, #f0f0f0);

      td {
        border: 1px solid #eaeaea;
        padding: 17px 12px;

        span.symbol {
          font-weight: bold;
        }
      }

      &.loading {
        td {
          text-align: center;
          padding: 50px;
        }
      }
    }
  }
}
</style>

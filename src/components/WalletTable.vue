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
          <td>{{ item.chain }}</td>
          <td>{{ item.name }}</td>
          <td>
            {{ item.balance }} <b>{{ item.symbol }}</b>
          </td>
        </tr>
        <tr v-if="loading" class="loading">
          <td colspan="4">Loading...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("walletModule", ["balanceList", "loading"]),
  },
  methods: {
    ...mapActions("walletModule", ["getBalances"]),
  },
  created: function () {
    this.getBalances();
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

    &:nth-child(2) {
      width: 50%;
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
        padding: 20px 12px;
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

import BlockchainFactory from "../../services/blockchain/blockchainFactory.service";
import router from "@/router";
import { concat } from "core-js/core/array";

export default {
  namespaced: true,
  state: {
    loading: true,
    balanceList: [],
  },
  mutations: {
    setLoading(state, _data) {
      state.loading = _data;
    },
    setBalances(state, _balances) {
      state.balanceList = _balances;
    },
  },
  /**
   * @todo test
   */
  actions: {
    async getBalances({ commit }) {
      commit("setLoading", true);
      commit("setBalances", []);
      let balances = [];

      let bsc = BlockchainFactory.smartchain(
        router.currentRoute.params.walletAddress
      );
      let avx = BlockchainFactory.avalanche(
        router.currentRoute.params.walletAddress
      );
      let eth = BlockchainFactory.ethereum(
        router.currentRoute.params.walletAddress
      );

      let bscBalances = await bsc.getAllBalance();
      let avxBalances = await avx.getAllBalance();
      let ethBalances = await eth.getAllBalance();

      if (balances.length > 0) {
        commit("setBalances", balances);
        commit("setLoading", false);
      }
    },
  },
  getters: {},
};

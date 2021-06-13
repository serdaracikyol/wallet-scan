import Blockchain from "@/services/blockchain/blockchain.service";
import { isValidAddress } from "@/utils/blockchain";

export default {
  namespaced: true,
  state: {
    loading: true,
    balanceList: [],
  },
  mutations: {
    setLoading(state, _loadState) {
      state.loading = _loadState;
    },
    setBalances(state, _balances) {
      state.balanceList = _balances;
    },
  },
  /**
   * @todo test
   */
  actions: {
    async getBalances({ commit }, _walletAddress) {
      if (isValidAddress(_walletAddress)) {
        commit("setBalances", []);
        commit("setLoading", true);

        let bc = new Blockchain(_walletAddress);
        let balances = await bc.getAllBalance();

        if (balances.length < 0) {
          commit(
            "setError",
            {
              moduleName: "walletError",
              errMessage: "There is no balance.",
            },
            { root: true }
          );
        }

        commit("setLoading", false);
        commit("setBalances", balances);
        commit("resetError", "walletError", { root: true });
      } else {
        commit("setLoading", false);
        commit("setBalances", []);
        commit(
          "setError",
          {
            moduleName: "walletError",
            errMessage: "This address is not a valid address.",
          },
          { root: true }
        );
      }
    },
  },
  getters: {},
};

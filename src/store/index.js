import Vue from "vue";
import Vuex from "vuex";
import walletModule from "./modules/wallet.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: {},
  },
  mutations: {
    setError(state, _error) {
      state.error[_error.moduleName] = _error.errMessage;
    },
    resetError(state, _module) {
      delete state.error[_module];
    },
  },
  actions: {},
  getters: {},
  modules: { walletModule },
});

import Vue from "vue";
import Vuex from "vuex";
import walletModule from "./modules/wallet.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: [],
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: { walletModule },
});

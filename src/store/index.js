import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import profile from "./module-profile";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profile
  },
  plugins: [
    createPersistedState({
      paths: ["profile"]
    })
  ]
});

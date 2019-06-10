import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { saveInLocal } from "./plugin";
import user from "./module/user";
Vue.use(Vuex);
export default new Vuex.Store({
  strict: process.env.NODE_ENV === "development", // 直接修改state会报错，否则不会报错
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  },
  plugins: [saveInLocal]
});

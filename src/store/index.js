import Vue from 'vue';
import Vuex from 'vuex';

import accounts from './modules/accounts';

Vue.use(Vuex);

const modules = {
  accounts,
};

export default new Vuex.Store({
  modules,
});

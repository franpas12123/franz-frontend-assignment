import Vue from 'vue';
import Vuex from 'vuex';

import profile from './modules/profile';

Vue.use(Vuex);

const modules = {
  profile,
};

export default new Vuex.Store({
  modules,
});

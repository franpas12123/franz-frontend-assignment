const state = {
  accounts: [],
};

const getters = {
  accounts: (state) => state.accounts,
};

const actions = {
  addAccount({ commit }, data) {
    commit('setAccount',data)
  },
};

const mutations = {
  setAccount(state, data) {
    state.accounts.push(data);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

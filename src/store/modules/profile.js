const state = {
  profile: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

const getters = {
  profile: (state) => state.profile,
};

const actions = {
  editProfile({ commit }, data) {
    commit('editProfile', data);
  },
};

const mutations = {
  editProfile(state, data) {
    state.profile = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

import api from '@/src/api';

export const state = () => ({
  menuItems: []
});

export const mutations = {
  setMenuItems(state, data) {
    state.menuItems = data;
  }
};

export const actions = {
  loadMenu({ commit }) {
    return this.$axios(api.getMenu()).then(res => {
      if (res.data.error === 0) {
        if (res.data.content.menu !== 'undefined') {
          commit('setMenuItems', res.data.content.menu);
        }
      }
    });
  },
};

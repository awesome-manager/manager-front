import api from '@/src/api';

export const state = () => ({
  vacations: [],
  employees: []
});

export const mutations = {
  setVacations(state, data) {
    state.vacations = data;
  },
  setEmployees(state, data) {
    state.employees = data;
  }
};

export const actions = {
  loadPage({ commit }) {
    return this.$axios(api.getVacationsPage()).then(res => {
      if (res.data.error === 0) {
        if (res.data.content.vacations !== 'undefined') {
          commit('setVacations', res.data.content.vacations);
        }
        if (res.data.content.employees !== 'undefined') {
          commit('setEmployees', res.data.content.employees);
        }
      }
    });
  }
}

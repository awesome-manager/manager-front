import api from '@/src/api';

export const state = () => ({
  employees: []
});

export const mutations = {
  setEmployees(state, data) {
    state.employees = data;
  },
};

export const actions = {
  loadPage({ commit }) {
    return api.getEmployeesPage().then(res => {
      if (res.data.error === 0) {
        if (res.data.content.employees !== 'undefined') {
          commit('setEmployees', res.data.content.employees);
        }
      }
    });
  },
}

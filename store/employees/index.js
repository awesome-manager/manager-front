import api from '@/src/api';

export const state = () => ({
  employees: [],
  grades: [],
  positions: []
});

export const mutations = {
  setEmployees(state, data) {
    state.employees = data;
  },
  setGrades(state, data) {
    state.grades = data;
  },
  setPositions(state, data) {
    state.positions = data;
  },
};

export const actions = {
  loadPage({ commit }) {
    return this.$axios(api.getEmployeesPage()).then(res => {
      if (res.data.error === 0) {
        if (res.data.content.employees !== 'undefined') {
          commit('setEmployees', res.data.content.employees);
        }
        if (res.data.content.grades !== 'undefined') {
          commit('setGrades', res.data.content.grades);
        }
        if (res.data.content.positions !== 'undefined') {
          commit('setPositions', res.data.content.positions);
        }
      }
    });
  },
}

import api from '@/src/api';

export const state = () => ({
  customers: [],
  projects: [],
  statuses: [],
  groups: [],
  settings: {
    VAT: 1.2
  }
});

export const mutations = {
  setCustomers(state, data) {
    state.customers = data;
  },
  setProjects(state, data) {
    state.projects = data;
  },
  setStatuses(state, data) {
    state.statuses = data;
  },
  setGroups(state, data) {
    state.groups = data;
  }
};

export const actions = {
  loadPage({ commit }) {
    return api.getProjectsPage().then(res => {
      if (res.data.error === 0) {
        if (res.data.content.customers !== 'undefined') {
          commit('setCustomers', res.data.content.customers);
        }
        if (res.data.content.projects !== 'undefined') {
          commit('setProjects', res.data.content.projects);
        }
        if (res.data.content.statuses !== 'undefined') {
          commit('setStatuses', res.data.content.statuses);
        }
        if (res.data.content.groups !== 'undefined') {
          commit('setGroups', res.data.content.groups);
        }
      }
    });
  },
  loadGantPage({ commit }) {
    return api.getProjectsGanttPage().then(res => {
      if (res.data.error === 0) {
        if (res.data.content.projects !== 'undefined') {
          commit('setProjects', res.data.content.projects);
        }
        if (res.data.content.statuses !== 'undefined') {
          commit('setStatuses', res.data.content.statuses);
        }
        if (res.data.content.groups !== 'undefined') {
          commit('setGroups', res.data.content.groups);
        }
      }
    });
  }
}

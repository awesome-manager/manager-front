import api from '@/src/api';
import { state as mainState } from "@/store/projects/index";

export const state = () => ({
  groupCustomer: [],
  customers: [],
  statuses: [],
  groups: [],
  settings: {
    projectTypes: [
      'FIX',
      'TM'
    ]
  },
});

export const mutations = {
  setCustomers(state, data) {
    state.customers = data;
  },
  setStatuses(state, data) {
    state.statuses = data;
  },
  setGroups(state, data) {
    state.groups = data;
  },
  setGroupCustomer(state, data) {
    state.groupCustomer = data;
  },
};

export const getters = {
  getSettings(state) {
    return {
      ...mainState().settings,
      ...state.settings
    };
  }
};

export const actions = {
  loadPage({ commit }) {
    return api.getProjectsAddPage().then(res => {
      if (res.data.error === 0) {
        if (res.data.content.statuses !== 'undefined') {
          commit('setStatuses', res.data.content.statuses);
        }
        if (res.data.content.groups !== 'undefined') {
          commit('setGroups', res.data.content.groups);
        }
        if (res.data.content.customers !== 'undefined') {
          commit('setCustomers', res.data.content.customers);
        }
        if (res.data.content.group_customer !== 'undefined') {
          commit('setGroupCustomer', res.data.content.group_customer);
        }
      }
    });
  }
}


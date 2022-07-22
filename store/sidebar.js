export const state = () => ({
  show: false,
  links: [],
});

export const mutations = {
  setShow(state, data) {
    state.show = data;
  }
};

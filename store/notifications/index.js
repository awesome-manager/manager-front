export const state = () => ({
  data: [],
  settings: {
    overlap: false,
    verticalAlign: 'top',
    horizontalAlign: 'right',
    type: 'info',
    timeout: 5000,
    closeOnClick: true,
    showClose: true,
    order: 'normal' // normal | reverse (When reverse, each notification will be added on top)
  }
});

export const mutations = {
  setOptions(state, options) {
    state.settings = Object.assign(state.settings, options);
  },
  removeNotification(state, timestamp) {
    const indexToDelete = state.data.findIndex(n => n.timestamp === timestamp);
    if (indexToDelete !== -1) {
      state.data.splice(indexToDelete, 1);
    }
  },
  addNotification(state, notification) {
    if (typeof notification === 'string' || notification instanceof String) {
      notification = { message: notification };
    }
    notification.timestamp = new Date();
    notification.timestamp.setMilliseconds(
      notification.timestamp.getMilliseconds() + state.data.length
    );
    notification = Object.assign({}, state.settings, notification);
    if (state.settings.order === 'reverse') {
      state.data.unshift(notification)
    } else {
      state.data.push(notification)
    }
  },
};

export const actions = {
  notify(notification) {
    if (Array.isArray(notification)) {
      notification.forEach(notificationInstance => {
        this.addNotification(notificationInstance);
      });
    } else {
      this.addNotification(notification);
    }
  }
};

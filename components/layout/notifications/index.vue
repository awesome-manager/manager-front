<template>
  <div class="notifications">
    <transition-group :name="transitionName" :mode="transitionMode">
      <notification
        v-for="notification in notifications"
        v-bind="notification"
        :clickHandler="notification.onClick"
        :key="notification.timestamp.getTime()"
        @close="removeNotification"
      >
      </notification>
    </transition-group>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

import Notification from './notification';

export default {
  props: {
    transitionName: {
      type: String,
      default: 'list'
    },
    transitionMode: {
      type: String,
      default: 'in-out'
    },
    overlap: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.setOverlapOption(this.overlap);
  },
  computed: {
    ...mapState({
      notifications: 'notifications/data'
    })
  },
  methods: {
    ...mapMutations('notifications', ['removeNotification', 'setOptions']),
    setOverlapOption(val) {
      this.setOptions({
        overlap: val
      });
    },
    removeNotification(timestamp) {
      this.removeNotification(timestamp);
    }
  },
  watch: {
    overlap: function(newVal) {
      this.setOverlapOption = newVal;
    }
  },
  components: {
    Notification
  }
};
</script>
<style lang="scss">
.notifications {
  .list-move {
    transition: transform 0.3s, opacity 0.4s;
  }
  .list-item {
    display: inline-block;
  }
  .list-enter-active {
    transition: transform 0.2s ease-in, opacity 0.4s ease-in;
  }
  .list-leave-active {
    transition: transform 1s ease-out, opacity 0.4s ease-out;
  }

  .list-enter {
    opacity: 0;
    transform: scale(1.1);
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(1.2, 0.7);
  }
}
</style>

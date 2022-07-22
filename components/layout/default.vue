<template>
  <div class="wrapper" :class="{ 'nav-open': show }">
    <div class="main-panel" :data="sidebarBackground">
      <div
        :class="{ content: !isFullScreenRoute }"
        @click="toggleSidebar"
      >
        zxc
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
    };
  },
  computed: {
    ...mapState('sidebar', ['show']),
    isFullScreenRoute() {
      return this.$route.path === '/maps/full-screen'
    }
  },
  methods: {
    ...mapMutations('sidebar', ['setShow']),
    toggleSidebar() {
      if (this.show) {
        this.setShow(false);
      }
    },
  }
};
</script>
<style lang="scss">
$scaleSize: 0.95;
@keyframes zoomIn95 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  to {
    opacity: 1;
  }
}

.main-panel .zoomIn {
  animation-name: zoomIn95;
}

@keyframes zoomOut95 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-panel .zoomOut {
  animation-name: zoomOut95;
}
</style>

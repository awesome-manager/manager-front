<template>
  <div class="wrapper">
    <div class="main-panel" :data="sidebarBackground">
      <zoom-center-transition :duration="200" mode="out-in">
        <!-- your content here -->
        <slot></slot>
      </zoom-center-transition>
    </div>
  </div>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions';

export default {
  data() {
    return {
      sidebarBackground: 'vue' //vue|blue|orange|green|red|primary
    };
  },
  components: {
    ZoomCenterTransition,
  }
};
</script>
<style lang="scss">
$scaleSize: 0.95;
.main-panel {
  padding-top: 30px;
}

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

<template>
  <div class="wrapper" :class="{ 'nav-open': show }">
    <notifications></notifications>
    <side-bar
      :background-color="sidebarBackground"
      :short-title="$t('sidebar.shortTitle')"
      :title="$t('sidebar.title')"
    >
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: $t('sidebar.dashboard'),
            icon: 'tim-icons icon-chart-pie-36',
            path: '/'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('sidebar.projects'),
            icon: 'tim-icons icon-laptop',
            path: '/projects'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('sidebar.employees'),
            icon: 'tim-icons icon-single-02',
            path: '/employees'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('sidebar.vacations'),
            icon: 'tim-icons icon-world',
            path: '/vacations'
          }"
        >
        </sidebar-item>
      </template>
    </side-bar>
    <sidebar-share :background-color.sync="sidebarBackground"> </sidebar-share>
    <div class="main-panel" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>
      <router-view name="header"></router-view>

      <div
        :class="{ content: !isFullScreenRoute }"
        @click="toggleSidebar"
      >
        <zoom-center-transition :duration="200" mode="out-in">
          <!-- your content here -->
          <slot></slot>
        </zoom-center-transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { SlideYDownTransition, ZoomCenterTransition } from 'vue2-transitions';

import Sidebar from "@/components/layout/sidebar";
import SidebarItem from "@/components/layout/sidebar/item";
import SidebarShare from "@/components/layout/sidebar-share";
import Notifications from "@/components/layout/notifications";
import DashboardNavbar from "@/components/layout/dashboard-navbar";

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
  },
  components: {
    SlideYDownTransition,
    ZoomCenterTransition,
    DashboardNavbar,
    Notifications,
    SidebarShare,
    SidebarItem,
    Sidebar,
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

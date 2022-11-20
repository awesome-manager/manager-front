<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar
      :background-color="sidebarBackground"
      :short-title="$t('sidebar.shortTitle')"
      :title="$t('sidebar.title')"
    >
      <template slot-scope="props" slot="links">
        <sidebar-item v-for="menuItem in menuItems"
          :link="{
            name: menuItem.title,
            icon: `tim-icons ${menuItem.icon}`,
            path: menuItem.link
          }"
        >
        </sidebar-item>
      </template>
    </side-bar>
    <sidebar-share :background-color.sync="sidebarBackground"> </sidebar-share>
    <div class="main-panel" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>
      <router-view name="header"></router-view>

      <div class="content">
        <zoom-center-transition :duration="200" mode="out-in">
          <!-- your content here -->
          <slot></slot>
        </zoom-center-transition>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
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
  created() {
    this.loadMenu();
  },
  computed: {
    ...mapState('menu', ['menuItems']),
  },
  methods: {
    ...mapActions('menu', ['loadMenu'])
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

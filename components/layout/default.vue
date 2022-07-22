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
            name: $t('sidebar.icons'),
            icon: 'tim-icons icon-atom',
            path: '/icons'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: $t('sidebar.maps'),
            icon: 'tim-icons icon-pin',
            path: '/google'
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: $t('sidebar.notifications'),
            icon: 'tim-icons icon-bell-55',
            path: '/notifications'
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: $t('sidebar.userProfile'),
            icon: 'tim-icons icon-single-02',
            path: '/user' }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: $t('sidebar.regularTables'),
            icon: 'tim-icons icon-puzzle-10',
            path: '/regular'
          }"
        ></sidebar-item>

        <sidebar-item
          :link="{
            name: $t('sidebar.typography'),
            icon: 'tim-icons icon-align-center',
            path: '/typography'
          }"
        ></sidebar-item>

        <sidebar-item
          :link="{
            name: $t('sidebar.rtl'),
            icon: 'tim-icons icon-world',
            path: localePath('/rtl', 'ar') }"
        ></sidebar-item>

        <li class="active-pro">
          <a href="https://www.creative-tim.com/product/nuxt-black-dashboard-pro" target="_blank">
            <i class="tim-icons icon-spaceship"></i>
            <p>Upgrade to PRO</p>
          </a>
        </li>
      </template>
    </side-bar>
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

import Sidebar from "@/components/layout/sidebar";
import SidebarItem from "@/components/layout/sidebar/item";
import Notifications from "@/components/layout/notifications";

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
    Notifications,
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

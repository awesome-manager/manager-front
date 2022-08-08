<template>
  <div class="row">
    <div class="col-lg-12">
      <g-card>
        <div slot="header" class="row">
          <h3 class="card-title col-12">Диаграмма Ганта</h3>
          <div class="mx-2">
            <nuxt-link :to="{ name: i18nLink('projects') }">
              <button type="button" class="btn btn-info">Проекты</button>
            </nuxt-link>
          </div>
        </div>
        <Timeline :data="preparedProjects" v-if="projects.length > 0"/>
      </g-card>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

import find from 'lodash/find';
import routerMixin from '@/src/mixins/routerMixin';

import Timeline from 'vue-timeline-component';

export default {
  'name': 'GanttPage',
  mixins: [routerMixin],
  created() {
    if (this.projects === undefined || this.projects.length === 0) {
      this.loadGantPage();
    }
  },
  computed: {
    ...mapState('projects', ['projects', 'statuses', 'groups']),
    preparedProjects() {
      return this.projects.map(project => {
        let group = find(this.groups, { id: project.group_id });

        return {
          name: `${group.title} ${project.title}`,
          start: new Date(project.started_at),
          end: new Date(project.ended_at)
        };
      });
    },
  },
  methods: {
    ...mapActions('projects', ['loadGantPage'])
  },
  components: {
    Timeline
  }
}
</script>

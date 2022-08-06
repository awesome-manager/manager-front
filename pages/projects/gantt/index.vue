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
        <Timeline :data="preparedProjects" />
      </g-card>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

import find from 'lodash/find';
import fetchSilence from '@/src/tools/safeRequest';
import routerMixin from '@/src/mixins/routerMixin';

import Timeline from 'vue-timeline-component';

export default {
  'name': 'GanttPage',
  mixins: [routerMixin],
  fetch({ store, error }) {
    if (this.projects === undefined || this.projects.length === 0) {
      return fetchSilence(store, error, 'projects/loadGantPage');
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
  components: {
    Timeline
  }
}
</script>

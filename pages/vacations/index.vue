<template>
  <div class="row">
    <div class="col-lg-12">
      <g-card>
        <h3 slot="header" class="card-title">Отпуск</h3>
        <Timeline :data="preparedVacations" />
      </g-card>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

import find from 'lodash/find';
import fetchSilence from '@/src/tools/safeRequest';

import Timeline from 'vue-timeline-component';

export default {
  'name': 'VacationsPage',
  fetch({ store, error }) {
    return fetchSilence(store, error, 'vacations/loadPage');
  },
  computed: {
    ...mapState('vacations', ['vacations', 'employees']),
    preparedVacations() {
      return this.vacations.map(vacation => {
        let employee = find(this.employees, { id: vacation.employee_id });

        return {
          name: `${employee.name} ${employee.surname}`,
          start: new Date(vacation.started_at),
          end: new Date(vacation.ended_at),
        }
      });
    }
  },
  components: {
    Timeline
  }
}
</script>

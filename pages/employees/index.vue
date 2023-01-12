<template>
  <div class="row">
    <div class="col-lg-12">
      <g-card card-body-classes="table-full-width">
        <h3 slot="header" class="card-title">Сотрудники</h3>
        <g-table :table-data="preparedEmployees" :table-columns="columns" />
      </g-card>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

import find from 'lodash/find';
import fetchSilence from '@/src/tools/safeRequest';

export default {
  name: 'EmployeesPage',
  fetch({ store, error }) {
    return fetchSilence(store, error, 'employees/loadPage');
  },
  data () {
    return {
      columns: [
        {
          minWidth: 150,
          sortable: true,
          label: 'Имя',
          propertyName: 'name'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Фамилия',
          propertyName: 'surname'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Должность',
          propertyName: 'position'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Уровень',
          propertyName: 'grade'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Начало работы',
          propertyName: 'employment_at'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'ИС',
          propertyName: 'probation'
        }
      ],
    };
  },
  computed: {
    ...mapState('employees', ['employees', 'grades', 'positions']),
    preparedEmployees() {
      return this.employees.map(employee => {
        let grade = find(this.grades, {id: employee.grade_id}) || {};
        let position = find(this.positions, {id: employee.position_id}) || {};
        let employmentAt = employee.employment_at ? new Date(employee.employment_at).toDateString() : '';
        let probation = employee.probation ? new Date(employee.probation).toDateString() : '';

        return {
          ...employee,
          grade: grade.title,
          position: position.title,
          employment_at: employmentAt,
          probation: probation
        };
      });
    }
  }
}
</script>

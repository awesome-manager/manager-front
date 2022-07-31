<template>
  <div class="row">
    <div class="col-lg-12">
      <g-card card-body-classes="table-full-width">
        <h4 slot="header" class="card-title">Сотрудники</h4>
        <g-table :table-data="employees" :table-columns="columns" />
      </g-card>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
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
          propertyName: 'position.title'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Уровень',
          propertyName: 'grade.title'
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
    ...mapState('employees', ['employees'])
  }
}
</script>
<style lang="scss" scoped>

</style>

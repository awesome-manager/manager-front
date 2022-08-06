<template>
  <div class="row">
    <div class="col-lg-12">
      <g-card card-body-classes="table-full-width">
        <div slot="header" class="row">
          <h3 class="card-title col-12">Проекты</h3>
          <div class="mx-2">
            <nuxt-link :to="{ name: i18nLink('projects-gantt') }">
              <button type="button" class="btn btn-info">Гант</button>
            </nuxt-link>
            <nuxt-link :to="{ name: i18nLink('projects-add') }">
              <button type="button" class="btn btn-success">Добавить проект</button>
            </nuxt-link>
          </div>
        </div>
        <g-table
          :table-data="preparedProjects"
          :table-columns="columns"
          :row-class-name="rowClassName"
        />
      </g-card>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

import find from 'lodash/find';
import fetchSilence from '@/src/tools/safeRequest';
import routerMixin from '@/src/mixins/routerMixin';
import customersMixin from '@/src/mixins/customersMixin';

export default {
  name: 'ProjectsPage',
  mixins: [customersMixin, routerMixin],
  fetch({ store, error }) {
    return fetchSilence(store, error, 'projects/loadPage');
  },
  data () {
    return {
      columns: [
        {
          minWidth: 150,
          sortable: true,
          label: 'Группа',
          propertyName: 'group'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Заказчик',
          propertyName: 'customer'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Название',
          propertyName: 'title'
        },
        {
          minWidth: 80,
          sortable: true,
          label: 'Тип',
          propertyName: 'type'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Статус',
          propertyName: 'status'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Бюджет',
          propertyName: 'budget'
        },
        {
          minWidth: 175,
          sortable: true,
          label: 'Рентабельность',
          propertyName: 'expected_profitability'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Прибыль',
          propertyName: 'profit'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Остаток',
          propertyName: 'balance'
        },
        {
          minWidth: 100,
          sortable: true,
          label: 'Ставка',
          propertyName: 'average_rate'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Часов',
          propertyName: 'fullHours'
        },
        {
          minWidth: 150,
          sortable: true,
          label: 'Комментарий',
          propertyName: 'comment'
        }
      ],
    };
  },
  computed: {
    ...mapState('projects', ['projects', 'groups', 'customers', 'statuses', 'settings']),
    preparedProjects() {
      return this.projects.map(project => {
        let group = find(this.groups, { id: project.group_id });
        let customer = find(this.customers, { id: project.customer_id });
        let status = find(this.statuses, { id: project.status_id });
        let profit = project.budget * project.expected_profitability / 100;
        let balance = project.budget - profit;

        return {
          ...project,
          group: group.title,
          customer: `${customer.name} ${customer.surname}`,
          status: status.title,
          vatBudget: project.budget * this.settings.VAT,
          profit: profit,
          balance: balance,
          fullHours: Math.round(balance / project.average_rate / 10) * 10
        }
      });
    }
  },
  methods: {
    rowClassName(row) {
      return this.getTableClass(row.row.customer);
    }
  }
}
</script>

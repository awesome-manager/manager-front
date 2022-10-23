<template>
  <div class="row">
    <div class="col-lg-12">
      <g-card>
        <h4 slot="header">Новый проект</h4>
        <div v-if="isSended">Проект успешно создан!</div>
        <form @submit.prevent="submitForm" v-else>
          <div class="row">
            <div class="col-md-6">
              <g-input
                type="text"
                label="Название"
                placeholder="Название"
                v-model="form.title"
                :required="true"
              />
            </div>
            <div class="col-md-6">
              <g-input
                type="text"
                label="Код"
                placeholder="Код"
                v-model="form.code"
                :required="true"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <g-select
                type="text"
                label="Заказчик"
                placeholder="Заказчик"
                v-model="form.customer"
                :searchable="true"
                :required="true"
                :options="preparedCustomers"
              />
            </div>
            <div class="col-md-6">
              <g-select
                type="text"
                label="Группа"
                placeholder="Группа"
                v-model="form.group"
                :searchable="true"
                :required="true"
                :options="preparedGroups"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <g-select
                type="text"
                label="Тип проекта"
                placeholder="Тип проекта"
                v-model="form.projectType"
                :searchable="true"
                :required="true"
                :options="projectTypes"
              />
            </div>
            <div class="col-md-6">
              <g-select
                type="text"
                label="Статус"
                placeholder="Статус"
                v-model="form.status"
                :searchable="true"
                :required="true"
                :options="preparedStatuses"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <g-input
                type="date"
                label="Дата начала"
                placeholder="Дата начала"
                v-model="form.startedAt"
                :required="false"
              />
            </div>
            <div class="col-md-6">
              <g-input
                type="date"
                label="Дата окончания"
                placeholder="Дата окончания"
                v-model="form.endedAt"
                :required="false"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <g-input
                type="number"
                label="Бюджет"
                placeholder="Бюджет"
                v-model="form.budget"
                :required="false"
              />
            </div>
            <div class="col-md-6">
              <g-input
                type="number"
                label="Рентабельность (%)"
                placeholder="Рентабельность"
                v-model="form.expectedProfitability"
                :required="false"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <g-input
                type="number"
                label="Средняя ставка"
                placeholder="Средняя ставка"
                v-model="form.averageRate"
                :required="false"
              />
            </div>
            <div class="col-md-6">
              <g-switch
                v-model="form.isActive"
                label="Активность"
                on-text="Да"
                off-text="Нет"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <g-input label="Комметарий">
              <textarea
                class="form-control"
                placeholder="Комметарий"
                v-model="form.comment"
              >
              </textarea>
              </g-input>
            </div>
          </div>
          <g-button native-type="submit" type="primary" class="btn-fill">
            Save
          </g-button>
        </form>
      </g-card>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';

import api from '@/src/api';
import fetchSilence from '@/src/tools/safeRequest';

export default {
  name: 'AddProjectPage',
  fetch({ store, error }) {
    return fetchSilence(store, error, 'projects/add/loadPage');
  },
  data() {
    return {
      form: {
        title: null,
        group: null,
        customer: null,
        projectType: null,
        status: null,
        startedAt: null,
        endedAt: null,
        budget: null,
        expectedProfitability: null,
        averageRate: null,
        comment: null,
        isActive: null
      },
      isSended: false
    };
  },
  computed: {
    ...mapState('projects/add', ['groups', 'customers', 'statuses', 'groupCustomer']),
    ...mapGetters('projects/add', ['getSettings']),
    preparedGroups() {
      if (this.form.customer) {
        let availableGroups = this.groupCustomer.filter(
          groupCustomer => groupCustomer.customer_id === this.form.customer.id
        ).map(groupCustomer => groupCustomer.group_id);


        return this.groups.filter(
          group => availableGroups.includes(group.id)
        ).map(group => { return {
          id: group.id,
          title: group.title
        }});
      }

      return this.groups.map(group => { return {
        id: group.id,
        title: group.title
      }});
    },
    preparedCustomers() {
      if (this.form.group) {
        let availableGroups = this.groupCustomer.filter(
          groupCustomer => groupCustomer.group_id === this.form.group.id
        ).map(groupCustomer => groupCustomer.customer_id);


        return this.customers.filter(
          customer => availableGroups.includes(customer.id)
        ).map(customer => { return {
          id: customer.id,
          title: `${customer.name} ${customer.surname}`
        }});
      }

      return this.customers.map(customer => { return {
        id: customer.id,
        title: `${customer.name} ${customer.surname}`
      }});
    },
    projectTypes() {
      return this.getSettings.projectTypes;
    },
    preparedStatuses() {
      return this.statuses.map(status => { return {
        id: status.id,
        title: status.title
      }});
    }
  },
  methods: {
    submitForm() {
      let formData = new FormData();
      formData.append('title', this.form.title);
      formData.append('code', this.form.code);
      formData.append('group_id', this.form.group.id);
      formData.append('customer_id', this.form.customer.id);
      formData.append('type', this.form.projectType);
      formData.append('status_id', this.form.status.id);

      if (this.form.startedAt) {
        formData.append('started_at', this.form.startedAt);
      }

      if (this.form.startedAt) {
        formData.append('ended_at', this.form.endedAt);
      }

      if (this.form.budget) {
        formData.append('budget', this.form.budget);
      }

      if (this.form.expectedProfitability) {
        formData.append('expected_profitability', this.form.expectedProfitability);
      }

      if (this.form.averageRate) {
        formData.append('average_rate', this.form.averageRate);
      }

      if (this.form.budget) {
        formData.append('comment', this.form.comment);
      }

      formData.append('is_active', +this.form.isActive);

      api.addProject(formData).then(res => {
        if (res.data.content.success) {
          this.isSended = true;
        }
      }).catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

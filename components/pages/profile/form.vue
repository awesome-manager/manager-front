<template>
  <g-card>
    <h5 class="title">Профиль</h5>
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-md-4">
          <g-input
            type="text"
            label="Фамилия"
            placeholder="Фамилия"
            v-model="form.surname"
          >
          </g-input>
        </div>
        <div class="col-md-4">
          <g-input
            type="text"
            label="Имя"
            placeholder="Имя"
            v-model="form.name"
          >
          </g-input>
        </div>
        <div class="col-md-4">
          <g-input
            type="text"
            label="Отчество"
            placeholder="Отчество"
            v-model="form.secondName"
          >
          </g-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <g-input
            type="text"
            label="Телефон"
            placeholder="Телефон"
            v-model="form.phone"
          >
          </g-input>
        </div>
        <div class="col-md-4">
          <g-input
            type="email"
            label="Email"
            placeholder="Email"
            v-model="form.email"
          >
          </g-input>
        </div>
      </div>

      <g-button native-type="submit" type="primary" class="btn-fill">
        {{ buttonText }}
      </g-button>
    </form>
  </g-card>
</template>

<script>
import api from "@/src/api";

import prepareFormDataMixin from "@/src/mixins/prepareFormDataMixin";

export default {
  mixins: [prepareFormDataMixin],
  data: () => {
    return {
      form: {
        name: null,
        secondName: null,
        surname: null,
        phone: null,
        email: null
      },
      updated: false
    }
  },
  created() {
    this.fillFormUserData(this.form);
  },
  computed: {
    buttonText() {
      return this.updated ? 'Сохранено!' : 'Сохранить';
    }
  },
  methods: {
    onSubmit() {
      let formData = new FormData();

      formData.append('name', this.form.name);
      formData.append('surname', this.form.surname);
      formData.append('phone', this.form.phone);

      if (this.form.secondName) {
        formData.append('second_name', this.form.secondName);
      }

      if (this.form.email) {
        formData.append('email', this.form.email);
      }

      this.$axios(api.updateUser(formData)).then(response => {
        if (typeof response.data.content.success !== undefined && response.data.content.success) {
          this.$auth.fetchUser().then(() => {
            this.fillFormUserData(this.form);
            this.updated = true;
          });
        }
      });
    }
  },
  watch: {
    form: {
      handler(val) {
        this.updated = false;
      },
      deep: true
    }
  }
}

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <g-card class="card-user">
          <p class="card-text"></p>
          <div class="author">
            <div class="block block-one"></div>
            <div class="block block-two"></div>
            <div class="block block-three"></div>
            <div class="block block-four"></div>
            <h5 class="title">Awesome manager app</h5>
            <p class="description">Welcome!</p>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="row">
              <div class="col-md-12">
                <g-input
                  type="text"
                  label="Логин"
                  placeholder="Логин"
                  v-model="form.username"
                  :required="true"
                />
              </div>
              <div class="col-md-12">
                <g-input
                  type="password"
                  label="Пароль"
                  placeholder="Пароль"
                  v-model="form.password"
                  :required="true"
                />
              </div>
            </div>
            <div class="row">
              <g-button native-type="submit" type="primary" class="btn-fill col-md-2">
                Войти
              </g-button>
            </div>
          </form>
        </g-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    onSubmit() {
      let formData = new FormData();

      formData.append('username', this.form.username);
      formData.append('password', this.form.password);

      this.$auth.loginWith('local', { data: formData});
    }
  }
}
</script>

<style lang="scss" scoped>
.author {
  margin-bottom: 40px;
}
.btn {
  margin: auto;
}
</style>

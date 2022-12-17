export default {
  methods: {
    fillFormUserData(formFields) {
      if (this.$auth.loggedIn) {
        if (typeof formFields.name !== undefined) {
          formFields.name = this.$auth.user.name;
        }

        if (typeof formFields.surname !== undefined) {
          formFields.surname = this.$auth.user.surname;
        }

        if (typeof formFields.secondName !== undefined && this.$auth.user.second_name) {
          formFields.secondName = this.$auth.user.second_name;
        }

        if (typeof formFields.phone !== undefined) {
          formFields.phone = this.$auth.user.phone;
        }

        if (typeof formFields.email !== undefined && this.$auth.user.email) {
          formFields.email = this.$auth.user.email;
        }
      }
    }
  }
}

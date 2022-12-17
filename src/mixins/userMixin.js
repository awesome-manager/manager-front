export default {
  computed: {
    userName() {
      return this.$auth.user.name;
    },
    userSurname() {
      return this.$auth.user.surname;
    },
    hasImage() {
      return !!this.$auth.user.image;
    },
    userImage() {
      if (this.hasImage) {
        return this.generateFilePath(this.$auth.user.image);
      }

      return '/img/user.png';
    }
  }
}

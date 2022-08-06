export default {
  methods: {
    i18nLink(link) {
      return `${link}___${this.$i18n.locale}`;
    }
  }
}

export default {
  methods: {
    getTableClass(customer) {
      return `table-${this.getCustomerColor(customer)}`;
    },
    getCustomerColor(customer) {
      switch (customer) {
        case 'Сергей Левченко':
          return 'primary';
        case 'Берлизева Мария':
          return 'info';
        case 'Дрызлов Георгий':
          return 'danger';
        default:
          return '';
      }
    }
  }
}

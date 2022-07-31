import request from './request';

class Api {
  getEmployeesPage() {
    return request.get('/ajax/page/employees/');
  }
}

const api = new Api();

export default api;

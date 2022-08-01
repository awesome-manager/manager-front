import request from './request';

class Api {
  getEmployeesPage() {
    return request.get('/ajax/page/employees/');
  }

  getVacationsPage() {
    return request.get('/ajax/page/vacations/');
  }
}

const api = new Api();

export default api;

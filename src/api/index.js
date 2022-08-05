import request from './request';

class Api {
  getEmployeesPage() {
    return request.get('/ajax/page/employees/');
  }

  getVacationsPage() {
    return request.get('/ajax/page/vacations/');
  }

  getProjectsPage() {
    return request.get('/ajax/page/projects/');
  }
}

const api = new Api();

export default api;

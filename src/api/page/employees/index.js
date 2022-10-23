import request from "@/src/api/request";

export default {
  getEmployeesPage() {
    return request.get('/ajax/page/employees/');
  }
};

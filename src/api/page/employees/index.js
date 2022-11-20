import { get } from "@/src/api/factory";

export default {
  getEmployeesPage() {
    return get('/ajax/page/employees/');
  }
};

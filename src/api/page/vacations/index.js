import { get } from "@/src/api/factory"

export default {
  getVacationsPage() {
    return get('/ajax/page/vacations/');
  }
};

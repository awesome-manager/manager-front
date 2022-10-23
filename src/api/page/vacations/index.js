import request from "@/src/api/request";

export default {
  getVacationsPage() {
    return request.get('/ajax/page/vacations/');
  }
};

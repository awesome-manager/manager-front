import request from "@/src/api/request";

export default {
  getMenu() {
    return request.get('/ajax/site/menu/');
  },
};

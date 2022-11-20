import { get } from "@/src/api/factory";

export default {
  getMenu() {
    return get('/ajax/site/menu/');
  },
};

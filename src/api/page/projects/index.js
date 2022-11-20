import { get, post } from "@/src/api/factory";

export default {
  getProjectsPage() {
    return get('/ajax/page/projects/');
  },

  getProjectsGanttPage() {
    return get('/ajax/page/projects/gantt');
  },

  getProjectsAddPage() {
    return get('/ajax/page/projects/add');
  },

  addProject(data) {
    return post('/ajax/page/projects/add', data, {
      'Content-Type': 'multipart/form-data',
    });
  }
};

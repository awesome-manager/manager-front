import request from "@/src/api/request";

export default {
  getProjectsPage() {
    return request.get('/ajax/page/projects/');
  },

  getProjectsGanttPage() {
    return request.get('/ajax/page/projects/gantt');
  },

  getProjectsAddPage() {
    return request.get('/ajax/page/projects/add');
  },

  addProject(data) {
    return request.post('/ajax/page/projects/add', data, {
      'Content-Type': 'multipart/form-data',
    });
  }
};

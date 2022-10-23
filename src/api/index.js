import PageEmployees from './page/employees';
import pageVacations from './page/vacations';
import pageProjects from './page/projects';

export default {
  ...PageEmployees,
  ...pageVacations,
  ...pageProjects
};

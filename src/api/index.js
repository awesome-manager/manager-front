import pageEmployees from './page/employees';
import pageVacations from './page/vacations';
import pageProjects from './page/projects';
import siteMenu from './site/menu';

export default {
  ...pageEmployees,
  ...pageVacations,
  ...pageProjects,
  ...siteMenu
};

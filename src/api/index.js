import pageEmployees from './page/employees';
import pageProfile from './page/profile';
import pageProjects from './page/projects';
import pageVacations from './page/vacations';
import siteMenu from './site/menu';

export default {
  ...pageEmployees,
  ...pageProfile,
  ...pageProjects,
  ...pageVacations,
  ...siteMenu
};

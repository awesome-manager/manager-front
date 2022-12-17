import Vue from 'vue';
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
import { Input, InputNumber, Tooltip, Popover } from 'element-ui';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUpload, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { faHatWizard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const requireComponent = require.context(
  // The relative path of the components folder
  '../components/global',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Strip the leading `./` and extension from the filename
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  );

  // Register component globally
  Vue.component(
    'G' + componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

Vue.component(Input.name, Input);
Vue.component(InputNumber.name, InputNumber);
Vue.use(Tooltip);
Vue.use(Popover);
library.add(faUpload, faTrash);
Vue.component('font-awesome-icon', FontAwesomeIcon);

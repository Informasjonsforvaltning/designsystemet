// Medium
import { configure } from '@storybook/react';
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);


// // Org
// import { configure } from '@storybook/react';

// function loadStories() {
//   require('../src/stories');
// }

// configure(loadStories, module);

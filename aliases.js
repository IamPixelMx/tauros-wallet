const path = require('path');
const root = path.resolve(__dirname);

const alias = {
  components: `${root}/components`,
  pages: `${root}/pages`,
  store: `${root}/store`,
  styles: `${root}/styles`,
  utils: `${root}/utils`,
  'jest-factories': `${root}/jest/factories`,
  'jest-utils': `${root}/jest/utils`,
};

module.exports = alias;

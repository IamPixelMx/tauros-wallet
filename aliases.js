const path = require('path');
const root = path.resolve(__dirname);

const alias = {
  actions: `${root}/redux/actions`,
  api: `${root}/redux/sagas/api`,
  assets: `${root}/public`,
  components: `${root}/components`,
  constants: `${root}/utils/constants`,
  models: `${root}/redux/models`,
  pages: `${root}/pages`,
  reducers: `${root}/redux/reducers`,
  redux: `${root}/redux`,
  sagas: `${root}/redux/sagas`,
  theme: `${root}/theme`,
  utils: `${root}/utils`,
  'jest-factories': `${root}/jest/factories`,
  'jest-utils': `${root}/jest/utils`,
};

module.exports = alias;

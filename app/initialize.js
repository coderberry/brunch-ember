window.App = require('config/app');
require('config/router');
require('config/store');

var folderOrder = [
  'mixins',
  'routes',
  'models',
  'views',
  'controllers',
  'helpers',
  'templates',
  'components'
];

folderOrder.forEach(function(folder) {
  return window.require.list().filter(function(module) {
    return new RegExp('^' + folder + '/').test(module);
  }).forEach(function(module) {
    return require(module);
  });
});
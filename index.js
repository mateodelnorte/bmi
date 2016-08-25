const cdem = require('cardstack-extension-manager');
const BmiPlugin = require('./plugin');

let interval;

// register resource paths to for expansion from relative to absolute paths
cdem.registerResourcePath('capabilities.search.imageUrl');
cdem.registerResourcePath('capabilities.search.searchImageUrl');

module.exports.activate = function (cb) {
  cb(null, new BmiPlugin());
};

module.exports.deactivate = function () {
  console.log('extension deactivated');
}
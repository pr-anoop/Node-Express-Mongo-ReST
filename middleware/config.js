var nconf = require('nconf');

nconf.env().argv();

var path = require('path');
var configFile = (nconf.get('config')) ?
  path.resolve(nconf.get('config')) :
  path.resolve('config.json');

nconf.file({
  file: configFile
});

module.exports = nconf;
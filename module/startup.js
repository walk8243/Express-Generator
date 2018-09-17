const logger = require('walk8243-logger').color(process.env.NODE_ENV || 'development');
var path = require('path');
const repoDir = path.dirname(__dirname);

Object.assign(process, {
  logger,
  repoDir,
});
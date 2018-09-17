const path  = require('path'),
      walk8243Logger  = require('walk8243-logger');

const logger  = walk8243Logger.color(process.env.NODE_ENV || 'development');
      repoDir = path.dirname(__dirname);

Object.assign(process, {
  logger,
  repoDir,
});
var defaults  = {
  srcSass: `${process.repoDir}/public/css`,
  destSass: `${process.repoDir}/public/css`,
  js:   `${process.repoDir}/public/js`,
};

module.exports = watch = async (options) => {
  options = Object.assign(defaults, options);
  const js    = require('./watch/js')({
          src : options.js,
        }),
        sass  = require('./watch/sass')({
          src : options.srcSass,
          dest: options.destSass,
        }),
        watch = require('./watch/watch');

  // sassを監視して、コンパイル
  var sassFiles = await sass.getSassFiles(),
      renderingSassFiles = await sass.getRenderingSassFiles();
  if(sassFiles.length) {
    watch.easyTryCatch(() => sass.render(renderingSassFiles));
    watch.watchFile(sassFiles, (() => {
      watch.easyTryCatch(() => sass.render(renderingSassFiles));
    }));
  }

  // jsを監視して、圧縮
  var jsFiles = await js.getJsFiles(options.js);
  if(jsFiles.length) {
    watch.easyTryCatch(() => js.compress(jsFiles));
    watch.watchFile(jsFiles, (() => {
      watch.easyTryCatch(() => js.compress(jsFiles));
    }));
  }
};

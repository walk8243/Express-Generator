const sass = require('./sass'),
      watch = require('./watch');

(async () => {
  var sassFiles = await sass.getSassFiles(),
      renderingSassFiles = await sass.getRenderingSassFiles();

  watch.watchFile(sassFiles, (() => {sass.render(renderingSassFiles)}));
})();

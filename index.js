// sassを監視して、コンパイル
(async () => {
  const sass = require('./sass'),
        watch = require('./watch');

  var sassFiles = await sass.getSassFiles(),
      renderingSassFiles = await sass.getRenderingSassFiles();

  watch.watchFile(sassFiles, (() => {sass.render(renderingSassFiles)}));
})();

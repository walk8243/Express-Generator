// sassを監視して、コンパイル
(async () => {
  const sass = require('./sass'),
        watch = require('./watch');

  var sassFiles = await sass.getSassFiles(),
      renderingSassFiles = await sass.getRenderingSassFiles();

  watch.watchFile(sassFiles, (() => {sass.render(renderingSassFiles)}));
})();

// jsを監視して、圧縮
(async () => {
  const js = require('./js'),
        watch = require('./watch');

  var jsFiles = await js.getJsFiles();

  watch.watchFile(jsFiles, (() => {js.compress(jsFiles)}));
})();

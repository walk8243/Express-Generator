const fs    = require('fs'),
      init  = require('init-package-json');

const initFile = __dirname + '/init-package.js',
      initData = JSON.parse(fs.readFileSync(process.cwd() + '/package.json').toString());

init(process.cwd(), initFile, initData, function (err, data) {
  if (err) console.error(err);
  // console.log('written successfully');
});

// require('./sass')('./css');
// require('./sass')('./css/style.scss');

const func = require('./func');

(async () => {
  var fileList = await func.searchCriteriaFile('./public/css', new RegExp('\\.(sass|scss)'));
  console.log(fileList);
})();

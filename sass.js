/*
 * 外部モジュール
 */
const nodeSass  = require('node-sass'),
      fs    = require('fs');

/*
 * ユーザ定義モジュール
 */
const func  = require('./func');

/*
 * 変数
 */
const sassCond  = new RegExp('.+\\.(sass|scss)'),
      renderingSassCond = new RegExp('^[^\\_].+\\.(sass|scss)');

async function getSassFiles(path = './public/css') {
  return await func.searchCriteriaFile(path, sassCond);
}
async function getRenderingSassFiles(path = './public/css') {
  return await func.searchCriteriaFile(path, renderingSassCond);
}

function renderSass(file) {
  if(!fs.statSync(file).isFile()) throw new Error();

  nodeSass.render({
    file: file,
    outputStyle: "compressed",
    outputFile: file.replace(/\.(sass|scss)/, '.css')
  }, (err, result) => {
    if(err) throw err;
    fs.writeFile(file.replace(/\.(sass|scss)/, '.css'), result.css, err => {
      if(err) throw err;
    });
  });
}

function render(target = []) {
  if(!Array.isArray(target)) {
    if(typeof target === 'string') {
      target = new Array(target);
    } else {
      throw new Error();
    }
  } else if(target.length == 0) {
    throw new Error();
  }

  for (let path of target) {
    if(fs.statSync(path).isFile()) {
      if(path.match(renderingSassCond)) {
        renderSass(path);
        return;
      } else {
        throw new Error();
      }
    } else {
      throw new Error();
    }
  }
}

module.exports = sass = {
  getSassFiles,
  getRenderingSassFiles,
  renderSass,
  render,
}

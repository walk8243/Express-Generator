const fs = require('fs');

// module.exports = (target = [], func) => {
//   if(!target.isArray()) {
//     throw new Error();
//   } else if(target.length == 0) {
//     throw new Error();
//   }
//
//   for(let file of target) {
//     fs.watchFile(file, (current, previous) => {
//       func(file);
//     });
//   }
// }

function watchFile(target = [], func) {
  if(!Array.isArray(target)) {
    if(typeof target === 'string') {
      target = new Array(target);
    } else {
      // 配列でもファイル単体でもない場合
      throw new Error();
    }
  } else if(target.length == 0) {
    // ファイルが指定されなかった場合
    throw new Error();
  }

  for(let file of target) {
    if(fs.statSync(file).isFile()) {
      fs.watchFile(file, (current, previous) => {
        func();
      });
    } else {
      // パスが存在しない場合 or ファイルでない場合
      throw new Error();
    }
  }
}

module.exports = watch = {
  watchFile,
}

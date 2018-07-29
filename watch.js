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
      throw new Error();
    }
  } else if(target.length == 0) {
    throw new Error();
  }

  for(let file of target) {
    if(fs.statSync(file).isFile()) {
      fs.watchFile(file, (current, previous) => {
        func();
      });
    } else {
      throw new Error();
    }
  }
}

module.exports = watch = {
  watchFile,
}

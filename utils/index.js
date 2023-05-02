const fs = require('fs');
const path = require('path');

/** 获取文件路径列表 */
const getFiles = (dir) => {
  return fs.readdirSync(dir).map((item => {
    return path.join(dir, item);
  }))
}

/** 首字母大写 */
const firstUpperCase = (text) => {
  return text.replace(/\b(\w)(\w*)/g, function($0, $1, $2) {
      return $1.toUpperCase() + $2.toLowerCase();
  });
}

// 获取文件路径
const getPath = (pathStr) => {
  return path.resolve(pathStr)
}

module.exports = {
  firstUpperCase,
  getFiles,
  getPath
}

// 设置nav

const fs = require('fs');
const path = require('path');
const { getPath } = require('./index');
let id = 1
/** 
 * 根据文件夹递归生成目录
 * 目前只支持四级目录
 * */
const getMenusOfDir = (dir, tree = [], level = 1, stopLevel = 4) => {
  if(level > stopLevel) return

  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const curPath = path.join(dir, file)
    const fileStat = fs.statSync(curPath)
    const isDir = fileStat.isDirectory()
    const fileItem = {
      name: file,
      path: curPath,
      id: id++
    }
    if(isDir) {
      fileItem.children = getMenusOfDir(curPath, [], level + 1)
      fileItem.isDir = true
    } else {
      fileItem.name = file.split('.')[0]
      fileItem.path = curPath.replace(/\.md$/, '.html')
    }
    tree.push(fileItem)
  })

  return tree
}

const getNav = (dir = 'doc', stopLevel = 4) => {
  return getMenusOfDir(dir, [], 1, stopLevel)
}

const setIndexNavs = (navs) => {
  const template = fs.readFileSync(getPath('tpl/index.tpl'), 'utf-8');
  const createPath = getPath('index.html')

  const htmlFileContent = template
    .replace('{{navs}}', JSON.stringify(navs))

  fs.writeFileSync(createPath, htmlFileContent);
}

module.exports = {
  getNav,
  setIndexNavs
}

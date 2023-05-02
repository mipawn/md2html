/**
 * 将 md 文件转换为 html 文件
 */

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const { getPath } = require('./utils/index');
const { createHtml } = require('./utils/md');
const { getNav, setIndexNavs } = require('./utils/nav');

// 清空目录
shell.rm('-rf', getPath('html/*'));
shell.rm('-f', getPath('index.html'));

// 获取 nav
const navs = getNav();
navs.forEach(createHtml)

// 设置nav
setIndexNavs(navs)

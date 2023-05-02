const fs = require('fs');
const marked = require('marked');
const shell = require('shelljs');
const { getPath, firstUpperCase } = require('./index');

const renderer = new marked.Renderer();
renderer.heading = function (text, level) {
  return `
    <h${level}>
      <a name="${text}" class="anchor" href="#${text}">
        <span class="header-link">${text}</span>
      </a>
    </h${level}>
  `;
}
// 配置 marked
marked.setOptions({
  renderer,
  toc: true
});

// md 生成 对应html
const createHtml = (nav) => {
  const { isDir, path: curPath, children, name } = nav
  const filePath = getPath(curPath)
  // 生成html 的path
  const createPath = filePath.replace('\/doc', '/html')
  if(isDir) {
    shell.mkdir('-p', createPath)
    try {
      nav.children?.forEach(createHtml)
    } catch (error) {
      console.log(JSON.stringify(nav, null, 2))
      console.log(error)
    }
    
  } else {
    // 转换文件
    const template = fs.readFileSync(getPath('tpl/template.tpl'), 'utf-8');
    const mdFilePath = getPath(filePath).replace(/\.html$/, '.md');
    const mdFileContent = fs.readFileSync(mdFilePath, 'utf-8');
    const mdContent = marked.parse(mdFileContent);
    const css = fs.readFileSync(getPath('tpl/theme.css'))

    const htmlFileContent = template
      .replace('{{content}}', mdContent)
      .replace('{{styles}}', css)
      .replace('{{title}}', firstUpperCase(name))

    fs.writeFileSync(createPath, htmlFileContent);
  }
}

module.exports = {
  createHtml
}

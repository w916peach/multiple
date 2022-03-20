const fs = require('fs');
const path = require('path');
const removeDir = (target) => {
  if (!fs.existsSync(target)) {
    throw new Error(`${target}不存在`);
  }
  const stat = fs.statSync(target);
  if (stat.isFile()) {
    fs.unlinkSync(target);
  }
  if (stat.isDirectory()) {
    const childs = fs.readdirSync(target);
    childs.forEach(item => {
      removeDir(path.join(target, item));
    });
    fs.rmdirSync(target);
  }
};

// test

removeDir(path.join(__dirname, './a2'));
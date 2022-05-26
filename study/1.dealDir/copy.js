const fs = require("fs");
const path = require("path");

const copy = (dir, target) => {
  // 如果目标资源不存在，就创建目录
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  // 如果目标资源不是目录，报错
  if (!fs.statSync(target).isDirectory()) {
    throw new Error(`${target}必须为合法的目录`);
  }
  // 如果需要复制的资源不存在，报错
  if (!fs.existsSync(dir)) {
    throw new Error(`${dir}不存在`);
  }

  const stat = fs.statSync(dir);
  if (stat.isFile()) {
    // 如果需要复制的资源是一个文件，读取文件并写入target中
    fs.writeFileSync(
      path.join(target, path.basename(dir)),
      fs.readFileSync(dir)
    );
    return;
  }
  if (stat.isDirectory()) {
    // 如果需要复制的资源是一个目录，对内部目录复制，再执行一次copy方法
    fs.readdirSync(dir).forEach((filename) => {
      copy(path.join(dir, filename), path.join(target, path.basename(dir)));
    });
  }
};

// test
copy(path.join(__dirname, "a1"), path.join(__dirname, "a2"));

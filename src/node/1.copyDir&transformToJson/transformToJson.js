const fs = require('fs')
const path = require('path')

console.log(path);

// 封装将资源目录读取为json格式的方法
const transformToJson = (target) => {
    if (!fs.existsSync(target)) { //如果资源不存在
        return false;
    }

    const stat = fs.statSync(target);
    if (stat.isFile()) { //如果资源是文件
        return {
            name: path.basename(target), //path的basename方法返回path的最后一部分
            localPath: target,
            type: 'file',
            content: fs.readFileSync(target, 'utf-8'),
        }
    }
    if (stat.isDirectory()) { //如果资源是目录
        return {
            name: path.basename(target),
            localPath: target,
            type: 'dir',
            childs: fs.readdirSync(target).map(filename => {
                // 对目录中的文件继续转json，再次调用transformToJson方法
                return transformToJson(path.join(target, filename))
            })
        }
    }
}

// 测试
const json = transformToJson(path.join(__dirname, './a1'))
console.log(JSON.stringify(json))


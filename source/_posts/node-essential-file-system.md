---
title: Node基础篇（文件操作）
date: 2016-05-02 16:21:24
tags:
  Node
---
## 文件操作

### 相关模块

Node内核提供了很多与文件操作相关的模块，每个模块都提供了一些最基本的操作API，在NPM中也有社区提供的功能包

##### fs：

基础的文件操作 API

##### path：

提供和路径相关的操作 API

##### readline：

用于读取大文本文件，一行一行读

##### fs-extra（第三方）：

https://www.npmjs.com/package/fs-extra



### 同步或异步调用

- fs模块对文件的几乎所有操作都有同步和异步两种形式
- 例如：readFile() 和 readFileSync()
- 区别：
  + 同步调用会阻塞代码的执行，异步则不会
  + 异步调用会将读取任务下达到任务队列，直到任务执行完成才会回调
  + 异常处理方面，同步必须使用 try catch 方式，异步可以通过回调函数的第一个参数



### 路径模块

在文件操作的过程中，都必须使用物理路径（绝对路径），path模块提供了一系列与路径相关的 API

```javascript
console.log('join用于拼接多个路径部分，并转化为正常格式');
const temp = path.join(__dirname, '..', 'lyrics', './友谊之光.lrc');
console.log(temp);

console.log('获取路径中的文件名');
console.log(path.basename(temp));

console.log('获取路径中的文件名并排除扩展名');
console.log(path.basename(temp, '.lrc'));

console.log('====================================');

console.log('获取不同操作系统的路径分隔符');
console.log(process.platform + '的分隔符为 ' + path.delimiter);

console.log('一般用于分割环境变量');
console.log(process.env.PATH.split(path.delimiter));

console.log('====================================');

console.log('获取一个路径中的目录部分');
console.log(path.dirname(temp));

console.log('====================================');

console.log('获取一个路径中最后的扩展名');
console.log(path.extname(temp));

console.log('====================================');

console.log('将一个路径解析成一个对象的形式');
const pathObject = path.parse(temp);
console.log(pathObject);

console.log('====================================');

console.log('将一个路径对象再转换为一个字符串的形式');
// pathObject.name = '我终于失去了你';
pathObject.base = '我终于失去了你.lrc';
console.log(pathObject);

console.log(path.format(pathObject));

console.log('====================================');

console.log('获取一个路径是不是绝对路径');
console.log(path.isAbsolute(temp));
console.log(path.isAbsolute('../lyrics/爱的代价.lrc'));

console.log('====================================');

console.log('将一个路径转换为当前系统默认的标准格式，并解析其中的./和../');
console.log(path.normalize('c:/develop/demo\\hello/../world/./a.txt'));

console.log('====================================');

console.log('获取第二个路径相对第一个路径的相对路径');
console.log(path.relative(__dirname, temp));

console.log('====================================');

console.log('以类似命令行cd命令的方式拼接路径');
console.log(path.resolve(temp, 'c:/', './develop', '../application'));

console.log('====================================');

console.log('获取不同平台中路径的分隔符（默认）');
console.log(path.sep);

console.log('====================================');

console.log('允许在任意平台下以WIN32的方法调用PATH对象');
// console.log(path.win32);
console.log(path === path.win32);

console.log('====================================');

console.log('允许在任意平台下以POSIX的方法调用PATH对象');
console.log(path === path.posix);
```

源码地址：
https://github.com/nodejs/node/blob/master/lib/path.js



### 文件读取

Node中文件读取的方式主要有：

#### fs.readFile(file[, options], callback(error, data))

```javascript
fs.readFile('c:\\demo\1.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

#### fs.readFileSync(file[, options])

```javascript
try {
  const data = fs.readFileSync('c:\\demo\1.txt', 'utf8');
  console.log(data);
} catch(e) {
  // 文件不存在，或者权限错误
  throw e;
}
```

#### fs.createReadStream(path[, options])

```javascript
const stream = fs.createReadStream('c:\\demo\1.txt');
let data = ''
stream.on('data', (trunk) => {
  data += trunk;
});
stream.on('end', () => {
  console.log(data);
});
```

> *由于Windows平台下默认文件编码是GBK，在Node中不支持，可以通过[iconv-lite](https://github.com/ashtuchkin/iconv-lite)解决*


### Readline模块逐行读取文本内容

```javascript
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('sample.txt')
});

rl.on('line', (line) => {
  console.log('Line from file:', line);
});
```


### 文件写入

Node中文件写入的方式主要有：

#### fs.writeFile(file, data[, options], callback(error))

```javascript
fs.writeFile('c:\\demo\a.txt', new Date(), (error) => {
  console.log(error);
});
```

#### fs.writeFileSync(file, data[, options])

```javascript
try {
  fs.writeFileSync('c:\\demo\a.txt', new Date());
} catch (error) {
  // 文件夹不存在，或者权限错误
  console.log(error);
}
```

#### fs.createWriteStream(path[,option])

```javascript
var streamWriter = fs.createWriteStream('c:\\demo\a.txt');
setInterval(() => {
  streamWriter.write(`${new Date}\n`, (error) => {
    console.log(error);
  });
}, 1000);
```


### 文件写入


#### fs.appendFile(file,data[,options],callback(err))

```javascript
// 相比较之前文件流的方式，这种方式不会占用文件资源，append完成就会释放
setInterval(() => {
  fs.appendFile('c:\\demo\a.txt',`${new Date}\n`, (error) => {
    console.log(error);
  });
}, 1000);
```

#### fs.appendFileSync(file,data[,options])

```javascript
setInterval(() => {
  fs.appendFileSync('c:\\demo\a.txt',`${new Date}\n`);
}, 1000);
```


### 其他常见文件操作

#### 验证路径是否存在（过时的API）

- fs.exists(path,callback(exists))
- fs.existsSync(path) // => 返回布尔类型 exists

#### 获取文件信息

- fs.stat(path,callback(err,stats))
- fs.statSync(path) // => 返回一个fs.Stats实例

#### 移动文件或重命名文件或目录

> 与命令行相同，重命名操作也可以实现文件移动

- fs.rename(oldPath,newPath,callback)
- fs.renameSync(oldPath,newPath)

#### 删除文件

- fs.unlink(path,callback(err))
- fs.unlinkSync(path)



### 其他常见文件夹操作

#### 创建一个目录

- fs.mkdir(path[,model],callback)
- fs.mkdirSync(path[,model])

#### 删除一个空目录

- fs.rmdir(path,callback)
- fs.rmdirSync(path)

#### 读取一个目录

- fs.readdir(path,callback(err,files))
- fs.readdirSync(path) // => 返回files



### 文件监视

#### 利用文件监视实现自动 markdown 文件转换

- 相关链接：

  1. https://github.com/chjj/marked
  2. https://github.com/Browsersync/browser-sync

- 实现思路：
  1. 利用`fs`模块的文件监视功能监视指定MD文件
  2. 当文件发生变化后，借助`marked`包提供的`markdown` to `html`功能将改变后的MD文件转换为HTML
  3. 再将得到的HTML替换到模版中
  4. 最后利用BrowserSync模块实现浏览器自动刷新

```javascript
const fs = require('fs');
const path = require('path');
var marked = require('marked');
var bs = require('browser-sync').create();


var target = path.join(__dirname, process.argv[2] || './README.md');
var filename = path.basename(target, path.extname(target)) + '.html';
var targetHtml = path.join(path.dirname(target), filename);

bs.init({
  server: path.dirname(target),
  index: filename,
  notify: false
});

bs.reload(filename);

var template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
  <style>{{{styles}}}</style>
</head>
<body>
  <article class="markdown">
    {{{body}}}
  </article>
</body>
</html>
`;

fs.readFile(path.join(__dirname, './markdown.css'), 'utf8', (error, css) => {
  if (error) throw error;
  template = template.replace('{{{styles}}}', css);
  var handler = (current, previous) => {
    fs.readFile(target, 'utf8', (error, content) => {
      var html = template.replace('{{{body}}}', marked(content));
      fs.writeFile(targetHtml, html, (error) => {
        if (!error) {
          console.log(`updated@${new Date()}`);
          bs.reload(filename);
        }
      });
    });
  };
  handler();
  fs.watchFile(target, { interval: 100 }, handler);
});
```


*****

## 缓冲区处理

### 什么是缓冲区

- 缓冲区就是内存中操作数据的容器
- 只是数据容器而已
- 通过缓冲区可以很方便的操作二进制数据
- 而且在大文件操作时必须有缓冲区


### 为什么要有缓冲区

- JavaScript是比较擅长处理字符串，但是早期的应用场景主要用于处理HTML文档，不会有太大篇幅的数据处理，也不会接触到二进制的数据。
- 而在Node中操作数据、网络通信是没办法完全以字符串的方式操作的，简单来说
- 所以在Node中引入了一个二进制的缓冲区的实现：Buffer

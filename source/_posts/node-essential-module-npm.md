---
title: Node基础篇（模块和NPM）
date: 2016-05-02 16:21:10
tags:
  Node
  NPM
---
## 核心模块

### 核心模块的意义

- 如果只是在服务器运行JavaScript代码，意义并不大，因为无法实现任何功能（读写文件，访问网络）。
- Node 的用处在于它本身还提供的一系列功能模块，用于与操作系统互动。
- 这些核心的功能模块在 Node 中内置。



### 内置如下模块：

- [path](http://nodejs.org/api/path.html)：处理文件路径。
- [fs](http://nodejs.org/api/fs.html)：操作文件系统。
- [child_process](http://nodejs.org/api/child_process.html)：新建子进程。
- [util](http://nodejs.org/api/util.html)：提供一系列实用小工具。
- [http](http://nodejs.org/api/http.html)：提供HTTP服务器功能。
- [url](http://nodejs.org/api/url.html)：用于解析URL。
- [querystring](http://nodejs.org/api/querystring.html)：解析URL中的查询字符串。
- [crypto](http://nodejs.org/api/crypto.html)：提供加密和解密功能。
- [其他](https://nodejs.org/api/)




*****

## Node Package

> 由于Node是一套轻内核的平台，虽然提供了一系列的内置模块，但是不足以满足开发者的需求，于是乎出现了包（Package）的概念。与核心模块类似，就是将一些预先设计好的功能或者说API封装到一个文件夹，提供给开发者使用；


### 包的加载机制

- 与内置模块相同，包的加载同样使用`require`方法

```javascript
const express = require('express');
```

- 加载机制也和内置模块加载机制相同
- 加载注意事项：
  + 先在系统核心（优先级最高）的模块中找；

```javascript
const fs = require('fs');
// 永远加载内部核心模块fs
```

  + 然后再到当前项目中 node_modules 目录中找；


### 如何管理好自己的包包

- 由于`Node`本身并没有太多的功能性`API`，所以市面上涌现出大量的第三方人员开发出来的`Package`
![www.npmjs.com](http://files.wedn.net/2016/03/npm-1457192944176.png)
- 包的生态圈一旦繁荣起来，就必须有工具去代替人脑或者文档的方式管理
- 这时候`NPM`诞生了


### NPM

- 随着时间的发展，NPM 出现了两层概念：
  + 一层含义是 Node 的开放式模块登记和管理系统，亦可以说是一个生态圈，一个社区
  + 另一层含义是 Node 默认的模块管理器，是一个命令行下的软件，用来安装和管理 Node 模块。

- 官方链接： https://www.npmjs.com/
- 国内加速镜像： https://npm.taobao.org/

### 安装NPM

- NPM 不需要单独安装。默认在安装 Node 的时候，会连带一起安装 NPM。
- 但是，Node 附带的 NPM 可能不是最新版本，最好用下面的命令，更新到最新版本。

```bash
$ npm install npm -g
```

- 默认安装到当前系统 Node 所在目录下。
- 由于之前使用 NVM 的方式安装的 Node 所以需要重新配置 NPM 的全局目录

### 配置NPM的全局目录

```bash
$ npm config set prefix [pathtonpm]
```

- 将NPM目录配置到其他目录时，必须将该目录放到环境变量中，否则无法再全局使用


### 常用NPM命令

- https://docs.npmjs.com/

```bash
npm config [ls|list|set|get] [name] [value]
npm init [--yes|-y]
npm search [name]
npm info [name]
npm install [--global|-g] [name]
npm uninstall [--global|-g] [name]
npm list [--global|-g]
npm outdated [--global|-g]
npm update [--global|-g] [name]
npm run [task]
npm cache [clean]
```



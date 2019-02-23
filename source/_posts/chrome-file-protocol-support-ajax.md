---
title: 配置Chrome支持本地（file协议）的AJAX请求
date: 2016-05-02 16:19:27
tags:
  Chrome
  AJAX
  Sublime
---
### 什么问题

WEB开发过程中，很多时候我们都是写一些简单的Demo，并不是开发一个完整项目，此时我们常见的操作是：

- 新建文件夹
- 新建需要的文件
- 在Sublime（或其他编辑器）中完成DEMO的编码
- 双击HTML文件，直接在浏览器中运行演示

如果此时Demo中有AJAX操作，浏览器就会报一个错：

> `XMLHttpRequest cannot load file:///Users/iceStone/Documents/Learning/angular/demo/angular-moviecat/movie/view.html. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.`

原因很简单，浏览器（Webkit内核）的安全策略决定了file协议访问的应用无法使用`XMLHttpRequest`对象，错误消息中也很清楚的说明了：

> Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.

> 跨域请求仅支持协议：http, data, chrome, chrome-extension, https, chrome-extension-resource

在某些浏览器中是允许这种操作的，比如Firefox浏览器，也就是说Filefox支持file协议下的AJAX请求。

### 解决办法

作为我个人最喜欢的Chrome，强大，没什么好说的，只有想不到，几乎没有做不到，所以必须也得支持：

- Windows：
  + 设置Chrome的快捷方式属性，在“目标”后面加上--allow-file-access-from-files，注意前面有个空格，重新打开Chrome即可。
  + ![](http://files.wedn.net/2016/01/chrome-link-setting-1453637228774.jpg)
- Mac：
  + 只能通过终端打开浏览器：打开终端，输入下面命令：open -a "Google Chrome" --args --disable-web-security然后就可以屏蔽安全访问了[ --args：此参数可有可无]

### 补充说明

长久来看，你肯定是需要通过HTTP的方式访问你的应用，那就需要配置HTTP服务器软件。但是对于一些刚入门的同学，配一个HTTP服务器（比如Apache、IIS等）比较繁琐，望而却步。

- 对于使用IDE的同学没什么好说的，每个用于Web开发的IDE都内置http服务器，不用单独配置。
- 对于喜欢轻量级编辑器的同学，比如Sublime Text，它默认是没有内置HTTP服务器的

接下来推荐一款Sublime的插件`Sublime Server`，这个插件可以提供一个静态文件HTTP服务器，具体使用方式如下：

- 安装Package Control（Sublime的插件管理工具），不会安装自行Google
- `Command+Shift+P`或`Ctrl+Shift+P`打开命令面板，输入`Package Control: Install Package`

  ![Install Package](http://files.wedn.net/2016/01/install-step-01-1453630478271.png)

- 稍等片刻（此时会连接到插件提供商的服务器，比较慢，有可能背墙），搜索`SublimeServer`

  ![SublimeServer](http://files.wedn.net/2016/01/install-step-02-1453630571261.png)

- 安装完成过后通过`Tool → SublimeServer → Start SublimeServer`

  ![Start SublimeServer](http://files.wedn.net/2016/01/usage-step-01-1453630756940.png)

- **一定要用打开文件夹的方式使用Sublime**，否则没有办法正常使用SublimeServer。

  ![打开文件夹的方式使用Sublime](http://files.wedn.net/2016/01/open-folder-in-sublime-1453630966189.png)

- 打开HTML文件，在右键菜单中选择`View in SublimeServer`，此时就可以以HTTP方式在浏览器中访问该文件了，
- 如果该选项是灰色的，那就说明没有启动SublimeServer，`Tool → SublimeServer → Start SublimeServer`

到此为止，你已经可以在Sublime中使用HTTP服务器了。

#### 可能遇到的问题

如果`Start SublimeServer`不能点，可能是当前`8080`端口被占用了（SublimeServer默认使用8080端口）

解决方法就是打开配置文件将端口修改为其他端口：

  ![打开SublimeServer设置文件](http://files.wedn.net/2016/01/sublime-server-settings-1453631342548.png)

以下是我的配置：
```json
{
  "attempts": 5,
  "autorun": false, // 是否在启动Sublime时自动启动SublimeServer
  "defaultExtension": ".html",
  "interval": 500,
  "mimetypes":
  {
    "": "application/octet-stream",
    ".c": "text/plain",
    ".h": "text/plain",
    ".py": "text/plain"
  },
  "port": 2016 // 端口号
}
```

当然其他编辑器也有类似的插件。

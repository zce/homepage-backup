---
title: Ruby环境Sass编译中文出现'Invalid GBK character'错误解决方法
date: 2016-05-02 16:20:34
tags:
  Ruby
  Sass
---
sass文件编译时候使用ruby环境，无论是界面化的koala工具还是命令行模式的都无法通过，真是令人烦恼。

容易出现中文注释时候无法编译通过，或者出现乱码，找了几天的解决方法终于解决了。

这个问题的奇葩之处在于在xp环境中没有任何问题，只是在windows7以上环境中才出现的这个。

Sass编译时候出现如下错误的解决方法：

```css
/*
Error: Invalid GBK character "\xE6"
        on line 1 of ./demo2.scss

1: /* 更严谨 更容易接受的语法 *\/
2:
3: body{
4:   background-color: #fff;
5:   color: #000;
6: }
```

### 解决办法：

- koala可视化编译工具:

找到安装目录里面sass-3.3.7模块下面的engine.rb文件，例如下面路径：

```
C:\Program Files (x86)\Koala\rubygems\gems\sass-3.3.7\lib\sass
```
在这个文件里面engine.rb，添加一行代码

```ruby
Encoding.default_external = Encoding.find('utf-8')
```

放在所有的require XXXX 之后即可。

- 命令行工具同理

找到ruby的安装目录，里面也有sass模块，如这个路径：

```
C:\Ruby\lib\ruby\gems\1.9.1\gems\sass-3.3.14\lib\sass
```

在这个文件里面engine.rb，添加一行代码（同方法1）

```ruby
Encoding.default_external = Encoding.find('utf-8')
```

放在所有的require XXXX 之后即可。

> 感谢：https://github.com/imathis/octopress/issues/232   mattn 提供了一种解决方法，用到这里极为合适。



---
title: 淘宝提供Rubygems国内镜像站点
date: 2016-05-02 16:20:16
tags:
  Ruby
---
阿里巴巴作为国内互联网行业一把手，一直比较看重技术，特别是在国外新兴技术的引进和普及上面花了很大功夫。

NPM官方数据源不稳定，提供[CNPM](http://npm.taobao.org)服务，做到与官方每10分钟同步一次。

Rubygems也是一样，彻底离开广大“天朝”统治的GFW（Rubygems是托管在Amazon S3上的），任然是淘宝提供了国内最稳定的镜像站点。

使用方式很简单：

```shell
$ gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
$ gem sources -l
*** CURRENT SOURCES ***

https://ruby.taobao.org
# 请确保只有 ruby.taobao.org
$ gem install rails
```

如果你使用 Gemfile 和 Bundle (例如：Rails 项目)

```shell
$ bundle config mirror.https://rubygems.org https://ruby.taobao.org
```

这样你不用改你的 Gemfile 的 source。

```shell
source 'https://rubygems.org/'
gem 'rails', '4.1.0'
```

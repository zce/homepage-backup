---
title: 通过ng-cloak指令解决Angular表达式闪烁问题
date: 2016-05-02 16:19:53
tags:
  Angular
---
### 问题

表达式的使用在AngularJS应用开发过程中经常遇到，其作用就是输出一个值到HTML的指定位置，例如：

```html
<strong>{{todos.length}}</strong>
```

效果就是将`todos.length`的值输出到`<strong></strong>`标签中，同时可以完成自动化的数据同步，十分方便。

但是方便的背后也是有一些问题的，这个功能类似于一些服务端的模板引擎，比如Handlebars、xTemplate中都有这种表达式的功能，可是AngularJS始终还是一个JavaScript的框架，是JS框架，就必须在浏览器中执行。

JavaScript的执行需要时间的，在这个时间内，浏览器任然会将这个标记作为普通的内容渲染到界面上，当JS执行完成则会将这个标记替换为对应的内容。

在这个过程中会出现从标记转换为真实数据的跳跃，而且为了体验也不应该将标记显示到界面上，那么怎么办？

### 解决方案

#### 1. 使用ng-bind指令替换表达式：

```html
<strong ng-bind="todos.length"></strong>
```

使用这种方式就不会再界面上显示表达式的内容，html对不认识的属性采取不予理睬的态度，所以没有什么影响

#### 2. 使用ng-cloak指令：

```html
<div ng-cloak>
  <strong>{{todos.length}}</strong>
</div>
```

原因是angularjs源码最后添加该样式隐藏：

```javascript
window.angular.element(document).find("head")
  .prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}');
```

在所有使用表达式的容器上添加ng-cloak的属性或者添加ng-cloak的类，这样就可以解决这个问题了，因为ng-cloak指令功能就是在AngularJS任务执行完成以后，自动去除当前元素的ng-cloak的属性或者ng-cloak的类，利用这个特点可以解决以上的问题，不过测试表明需要我们自己手动添加一个隐藏ng-cloak元素的样式：

```css
[ng-cloak],
.ng-cloak{
  display:none !important;
}
```

原因很简单，这个样式默认是angularjs添加的，但是此时元素大多数情况下已经渲染完成了，所以丧失了意义。

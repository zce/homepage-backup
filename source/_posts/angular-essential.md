---
title: Angular 基础入门
date: 2016-05-02 16:22:14
tags:
  Angular
---
## 简介

### 什么是AngularJS

- 一个功能非常完备的前端框架，通过增强HTML的方式提供一种便捷开发Web应用程序的方式
- 其核心特点就是几乎无任何DOM操作，让开发人员的精力和时间全部集中于业务
- MVC的特性增强了代码的结构和可维护性，应对需求的变化做出最小的改动


### 为什么使用AngularJS

- 更少的代码实现更强劲的功能
- 提供了很多在传统后端开发中大量使用的思想和方式，提高前台代码的结构和可维护性


### 使用AnuglarJS的流程

1. 在HTML中引入Angular.js文件
2. 在自己的代码中定义一个AngularJS的模块
3. 将模块作用到HTML中的某个节点
4. 根据模块的功能定义控制器
5. 根据当前页面原型设计$scope的结构
6. 通过$scope暴露数据和行为
7. 将暴露出来的数据和行为通过特定的指令绑定到HTML节点中


### MVC

- 一种应用程序的设计思想，其目的是为了对应用程序的组成进行划分，让结构更加清晰可维护性更高，确保每个原件都有明确的单一职责

![MVC](http://files.wedn.net/2016/03/mvc-1458840221606.png)



<!-- ======================================================================= -->
*****

## 模块

> - 可以通过`angular.module()`方法操作模块
> - *注意：该方法只有在传入两个参数时才会创建模块，否则为获取已有模块*

### 定义模块

```javascript
// 第一个参数为模块名，第二个参数为当前这个模块所依赖的模块列表
angular.module('ModuleName', []);
```

### 获取已经定义过的模块

```javascript
var existModule = angular.module('ExistModule');
```

### 如何划分模块

#### 1.根据当前需要开发的应用程序的组成划分需要多少模块，

比如：
- 注册模块
- 登录模块
- 用户列表页模块
- 用户详细页模块
- etc.

#### 2. 根据文件类型的不同来划分

比如：
- 所有的控制器
- 所有的服务
- 所有的指令
- etc.




<!-- ======================================================================= -->
*****

## 控制器

> 当下的企业开发，如果使用Angular，主要就是开发对应的控制器和模型

### 定义控制器

定义控制器可以有三种方式，注意第一种已经被淘汰

#### 传统方式（不要再用了）

在最早期的 Angular 代码中可能会见到以全局函数的方式定义的控制器：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>早期的控制器定义方式-全局函数</title>
</head>
<body ng-app>
  <div ng-controller="FooController">
    <input type="button" value="clicked me!" ng-click="say()">
  </div>
</body>
</html>
```

```javascript
function FooController($scope) {
  $scope.say = function(){
    console.log('hello angular');
  };
}
```

这种方式现在已经不被支持，就算没有淘汰也不应该使用，太low（全局作用域的问题）


#### 常用方式（挂载在某个模块下）（必须掌握）

Angular中最常见的一种使用方式，通过模块中定义的`controller`方法定义控制器

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>常用方式（挂载在某个模块下）</title>
</head>
<body ng-app="MyModule">
  <div ng-controller="FooController">
    <input type="button" value="clicked me!" ng-click="say()">
  </div>
</body>
</html>
```

```javascript
angular.module('MyModule', [])
  .controller('FooController', function($scope) {
    $scope.say = function(){
      console.log('hello angular');
    };
  });
```


#### 定义类型的方式（构造函数）

对于喜欢通过定义构造函数的方式编写面向对象代码的同学可以使用构造函数的形式定义一个控制器

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>面向对象的方式</title>
</head>
<body ng-app="MyModule">
  <div ng-controller="FooController as context">
    <input type="button" value="clicked me!" ng-click="context.say()">
  </div>
</body>
</html>
```

```javascript
function FooController() {
  this.message = 'hello angular';
}

FooController.prototype.say = function() {
  console.log(this.message);
};

angular.module('MyModule', [])
  .controller('FooController', FooController);
```


### 注意事项

- 在以上的使用方式中，如果需要为控制器函数注入类似`$scope`之类的参数，必须确保参数名为一个特定值
- 也就是说Angular会根据参数名称自动注入对应的对象（与参数个数，出现顺序无关），所以参数名一定不能写错
- 但是，我们对于写完的JS代码经常会在上线之前对代码进行压缩
- 压缩的过程中如果启用混淆压缩的话，就会造成参数名变化
- 一旦变化了参数名，NG就无法为其注入对应的对象了
- `所以，最安全的写法就是不要依赖参数名（依赖不会变化的东西）：`

```javascript
angular.module('MyModule', [])
  .controller('FooController', ['$scope', function(whatever) {
    whatever.say = function(){
      console.log('hello angular');
    };
  }]);
```

解决方式就是将创建控制器的第二个参数改为一个数组，数组的最后一个成员就是以前的控制器函数，前面的成员就是控制器函数需要注入的对象列表，按照顺序对应


#### 扩展小知识：实现原理

如何根据参数名传入特定对象？

```javascript
function getFnParams(fn) {
  if (typeof fn == 'function') {
    var mathes = /.+\((.+)\)/.exec(Function.prototype.toString.call(fn));
    if (mathes[1]) {
      var args = mathes[1].replace(/\s/g, '').split(',');
      return args;
    }
  }
}

function foo(id, name, a1ge) {}

console.log(getFnParams(foo));
```





<!-- ======================================================================= -->
*****

## $scope

- 视图和控制器之间的数据桥梁
- 用于在视图和控制器之间传递数据
- 用来暴露数据模型（数据，行为）

![$scope](http://files.wedn.net/2016/03/scope-1458840236999.png)

### ViewModel

- $scope 实际上就是MVVM中所谓的VM（视图模型）
- 正是因为$scope在Angular中大量使用甚至盖过了C（控制器）的概念，所以很多人（包括我）把Angular称之为MVVM框架
- 这一点倒是无所谓，具体看怎么用罢了

大家必须掌握的就是如何根据一个原型抽象出对应的视图模型

![抽象ViewModel](http://files.wedn.net/2016/03/view-model-1458840241292.png)



<!-- ======================================================================= -->
*****

## 表达式

类似于模版引擎的语法

### 作用：

使用表达式把数据绑定到 HTML。

### 语法：

- 表达式写在双大括号内：{{ expression }}。
- AngularJS 表达式很像 JavaScript 表达式
- 它们可以包含文字、运算符和变量
- 如 {{ 5 + 5 }} 或 {{ firstName + '-' + lastName }}

### 支持的类型

- 数字  {{ 100 + 100 }}
- 字符串 {{ 'hello' + 'angular' }}
- 对象  {{ zhangsan.name }}
- 数组  {{ students[10] }}


### 与JS的比较：

相同点：
- AngularJS 表达式可以包含字母，操作符，变量。

不同点：
- AngularJS 表达式可以写在 HTML 中。
- AngularJS 表达式不支持条件判断，循环及异常。
- AngularJS 表达式支持过滤器。




<!-- ======================================================================= -->
*****

## 指令

- 在 AngularJS 中将前缀为 ng- 这种属性称之为指令，其作用就是为 DOM 元素调用方法、定义行为绑定数据等
- 简单说：当一个 Angular 应用启动，Angular 就会遍历 DOM 树来解析 HTML，根据指令不同，完成不同操作

### 指令标准属性的问题

- ng-xxx 的属性本身并不是标准中定义的属性
- 很多情况下语法校验是无法通过的
- HTML5 允许扩展的（自制的）属性，以 data- 开头。
- 在 AngularJS 中可以使用 data-ng- 来让网页对 HTML5 有效。
- 二者效果相同。


### 内置指令


#### ng-app

- ng-app 指令用来标明一个 AngularJS 应用程序
- 标记在一个 AngularJS 的作用范围的根对象上
- 系统执行时会自动的执行根对象范围内的其他指令
- 可以在同一个页面创建多个 ng-app 节点（不推荐）
- 创建多个ng-app时，默认只能执行第一个，后面的需要手动引导：angular.bootstrap()
- 标记的范围尽可能小，性能


#### ng-model

- 用于建立界面上的元素到数据模型属性的双向数据绑定
- 一般情况绑定到元素的value属性上
- 但是在checkbox之类的表单元素会有不同


#### ng-bind


#### ng-bind-html


#### ng-repeat


#### ng-class


#### ng-cloak


#### ng-show/ng-hide/ng-if


#### ng-src


#### ng-switch


#### 其他常用指令

- ng-checked：
  + 单选/复选是否选中，只是单向绑定数据
- ng-selected：
  + 是否选中，只是单向绑定数据
- ng-disabled：
  + 是否禁用
- ng-readonly：
  + 是否只读

### 常用事件指令

不同于以上的功能性指令，Angular还定义了一些用于和事件绑定的指令：

- ng-blur：
  + 失去焦点
- ng-change：
  + 发生改变
- ng-copy：
  + 拷贝完成
- ng-click：
  + 单击
- ng-dblclick：
  + 双击
- ng-focus：
  + 得到焦点
- ng-blur：
  + 失去焦点
- ng-submit：
  + 表单提交



### 自定义指令

- 指令无外乎增强了 HTML，提供额外的功能
- 以上的指令基本上已经可以满足我们的绝大多数需要了
- 少数情况下我们有一些特殊的需要，可以通过自定义指令的方式实现：

#### 组件式指令Demo

```javascript
myModule.directive('hello', function() {
  return {
    restrict: 'E',
    template: '<h1>Hello world</h1>',
    replace: true
  };
});
```

#### 功能型指令Demo

```javascript
myApp.directive("ngHover", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      element.css("background", "yellow");
    });
    element.bind("mouseleave", function() {
      element.css("background", "none");
    });
  }
});
```

#### 自定义指令的类型

1. E：Element（元素）
2. A：Attribute（属性）
3. C：Class（类名）
4. M：Comment（注释）

#### 注意：

在定义指令应该使用驼峰命名法，使用指令时应该使用的是全小写字母中划线分割的方式

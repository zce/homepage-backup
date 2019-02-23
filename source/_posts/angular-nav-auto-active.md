---
title: Angular实现导航自动切换状态
date: 2016-05-02 16:18:50
tags:
  Angular
---
很多时候我们需要实现导航的自动状态切换，现整理一下一些常见的解决方案：

#### 第一种：

通过 $scope 暴露公共方法实现：

```html
<ul class="nav nav-sidebar" ng-controller="NavController">
  <li ng-class="{active:isActive('/hot')}">
    <a href="#/hot">
      正在热映<span ng-if="isActive('/hot')" class="sr-only">(current)</span>
    </a>
  </li>
  <li ng-class="{active:isActive('/coming-soon')}">
    <a href="#/coming-soon">
      即将上映<span ng-if="isActive('/coming-soon')" class="sr-only">(current)</span>
    </a>
  </li>
</ul>
```

```javascript
app.controller(
  'NavController',
  [
    '$scope', '$location',
    function($scope, $location) {
      $scope.isActive = function(path) {
        return $location.path().substr(0, path.length) === path;
      };
    }
  ]
);
```

实现思路就是通过视图模型上的isActive方法判断当前访问地址是否为此链接地址，从而决定是否添加active样式

#### 第二种：

定义一个指令封装这个逻辑：

```javascript
angular.module('app.components.nav', [])
  .directive('auto', ['$location', function($location) {
    return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs, controller) {
        var className = iAttrs.auto;
        var path = iAttrs.href.substring(1);
        $scope.location = $location;
        $scope.$watch('location.path()', function(newPath) {
          if (path === newPath) {
            iElm.parent().addClass(className);
          } else {
            iElm.parent().removeClass(className);
          }
        });
      }
    };
  }]);
```

```html
<ul class="nav nav-sidebar">
  <li>
    <a auto="active" href="#/hot">正在热映</a>
  </li>
  <li>
    <a auto="active" href="#/coming-soon">即将上映</a>
  </li>
</ul>
```

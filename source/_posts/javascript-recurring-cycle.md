---
title: JavaScript 计算循环节
date: 2016-05-02 16:21:38
tags:
  JavaScript
---
### 如何计算循环节长度呢？

想想我们手算，如果余数比除数小，我们会在后面补0然后再除。也就是说补零之后的数是下一次的被除数。如果被除数重复出现，除数确定的，那么商和余数也就是一样的。这时，循环节就出现了。

### 下面的函数分为两部分，

1. 补零操作
2. 查找有没有同样的被除数存在，如果有，就找到了循环节，计算循环节长度并返回。在没有找到的前提下，把当前被除数记录下来，并得到余数作为下一次的被除数。
这里需要注意，如果某一次出现了除尽的情况，说明该分数是有限小数，循环节长度是0。

```javascript
console.log(foo(11, 3));
console.log(foo(1, 7));;
console.log(foo(2, 10));;
function foo(a, b) {
  if (!(a % b)) {
    return `${a}÷${b}:${a / b}`;
  }
  var all = (a / b).toString().split('.');
  var i = getCycleSection(a, b);
  if(i)
    return `${a}÷${b}: ${all[0]}.{${all[1].substr(0, i) }}`;
    return `${a}÷${b}: ${a / b}`;

}
function getCycleSection(n, m) {
  var temp = [];
  while (true) {
    while (n < m) {
      n *= 10;
    }
    var index = temp.indexOf(n);
    if (index >= 0) {
      return temp.length - index;
    }
    temp.push(n);
    n %= m;
    if (!n)
      return 0;
  }
}
```

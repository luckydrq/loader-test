# loader-test
AMD与CMD的一个简单demo

# 演示

```base
$ npm install
$ npm start

// console输出
server start at 3000
```

访问:
- CMD: [http://localhost:3000/index](http://localhost:3000/index)
- AMD: [http://localhost:3000/index2](http://localhost:3000/index2)

# 结果

## CMD
```
main required
mod1 required
mod1 hello
mod2 required
mod2 hello
main hello
```

## AMD
```
mod2 required
mod1 required
main required
mod1 hello
mod2 hello
main hello
```

## 结论

`CMD`和`AMD`的区别：

1. 模块执行机制差别

首先，要清楚模块执行机制和模块加载机制的概念。模块加载机制是指浏览器请求模块的方式，这里两者都是异步请求，因此没有区别。而模块执行机制是指`factory`的执行顺序。`CMD`是懒执行的，即执行流从主模块`factory`开始，如果`require`到某个依赖模块，则再去执行该依赖模块的`factory`。而`AMD`是在执行主模块`factory`之前，先执行所有依赖模块的`factory`。

2. 依赖模块的执行顺序差别

在上一条结论里，由于`CMD`是懒执行的，因此执行顺序始终是一致的。而`AMD`里各自的依赖模块执行顺序是无序的，即浏览器请求到模块时立即执行`factory`。在demo的代码里故意延迟加载`mod1.js`，从输出结果可以看到mod2先执行。

## 参考
- [前端工程与模块化框架](http://div.io/topic/439)

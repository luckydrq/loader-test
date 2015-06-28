# loader-test
AMD与CMD的一个简单demo

# 演示

```base
$ npm install
$ node --harmony index.js

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
mod1 required
mod2 required
main required
mod1 hello
mod2 hello
main hello
```

## 结论

从结果看来，`CMD`和`AMD`最大的区别在于模块的执行顺序，而不是模块的加载顺序（都是异步请求）。`CMD`是懒执行的，执行流从主模块开始，`require`到依赖模块时再去执行依赖模块的`factory`。而`AMD`是在执行主模块`factory`之前，先执行所有依赖模块的`factory`。

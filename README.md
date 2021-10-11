## 关联store
```
1.在redux里面导入applyMiddleware
2.导入createSagaMiddleware
3.导入自己创建的saga
4.调用createSagaMiddleware方法，返回middleware 实例对象
5.通过createStore第三个参数来进行关联
createStore(defReducer, {}, applyMiddleware
(sagaMiddleware));
6，运行saga，通过middleware.run（自己定义的saga）
```

## Saga辅助函数
```
1. takeEvery(pattern, saga, args)
触发了多少次异步的action，就会执行多少次异步的任务
2. takelatest(pattern, saga, .args)
每次触发，会取消掉上一次正在执行的异步任务
3. throttle(ms, pattern, saga, -.args
匹配到一个对应的action后，会执行一个异步任务，但是同时还会接收一次对应action的异步任务，放在底层的buffer中，那么在第一个参数ms毫秒内将不会执行异步任务了
例如我来定义一个count代表数量，然后我把这个count传递给后台
这三个辅助函数都是用来监听action
只要action发送过来了，就会触发对应的saga函数的调用
```

## Effect函数
```
1. select(selector) 
2. call(fn, args)
3. take(pattern)
4. put(action)
```

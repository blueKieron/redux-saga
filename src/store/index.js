import {createStore, applyMiddleware} from 'redux'
import {defReducer} from './reducers'
// 导入saga 最终需要去run一下，执行saga
import {defSaga} from './sagas'
// 导入createSagaMiddleware
import createSagaMiddleware from 'redux-saga'

// 调用一下这个函数，来构建sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

// 构建store
export default createStore(defReducer,{},applyMiddleware(sagaMiddleware))

// 利用sagaMiddleware来run一下
sagaMiddleware.run(defSaga)
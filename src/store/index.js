import {createStore} from '../redux';
import reducer from './reducer';

// let store = createStore(reducer);
window._store = store;//store.getState store.dispatch
// let old = store.dispatch;//存一下以前的方法
//改写了dispatch的方法
function compose(...fns) {
    return function (...args) {
        let last = fns.pop();//最后一个函数 addFirst
        return fns.reduceRight(function (prev, next, curIndex, arr) {
            return next(prev);
        }, last(...args));
    }
}
//logger1的dispatch其实是logger2的最后一个函数
let logger1 = store => dispatch => action => {
    //最后这个函数是用户派发执行的
    console.log('1', store.getState().number);
    dispatch(action);//进行动作的派发
    console.log('1', store.getState().number);
};
// 1 2 2 1
let logger2 = store => dispatch => action => {
    //最后这个函数是用户派发执行的
    console.log('2', store.getState().number);
    dispatch(action);//进行动作的派发
    console.log('2', store.getState().number);
};
let reduxThunk = store => dispatch => action => {
    //dispatch(actions.add())
    if (typeof action === 'function') {
        //如果是函数，让其执行
        return action(dispatch, store.getState);
    }
    return dispatch(action);//按照原来的逻辑处理
};
let reduxPromise = store => dispatch => action => {
    //action可能是promise
    if (action.then) {
        //说明是promise
        /*action.then(function (action) {
            reducer(state, {type: Types.DECREMENT, amount: 5});
        });*/
        action.then(dispatch);//dispatch就是一个函数，所以没有处理失败
    } else if (action.payload && action.payload.then) {
        action.payload.then(function (data) {
            //promise是异步函数
            return dispatch({...action, payload: data});
        }, function (err) {
            return dispatch({...action, payload: err});
        });
        return;
    }
    return dispatch(action);
};
//应用中间件 redux内部的方法
let applyMiddleWare = (...middlewares) => createStore => reducer => {
    let store = createStore(reducer);//创建一个store
    let middles = middlewares.map(middleware => {
        //将两个middleware都执行
        return middleware(store);
    });//middles = [fn,fn]
    let dispatch = compose(...middles)(store.dispatch);
    return {...store, dispatch};
};
//applyMiddleware可以返回一个store，store中的dispatch方法是Logger最后的返回值
let store = applyMiddleWare(logger1, logger2)(createStore)(reducer);
/*store.dispatch = function (action) {
    console.log(store.getState().number);//派发前的
    old(action);
    console.log(store.getState().number);//派发后的
};*/
export default store;
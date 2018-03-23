function createStore(reducer) {
    //reducer是外界传入的，可以让reducer执行，执行后默认会返回初始化的状态
    let state;//默认是undefined
    let getState = () => {
        //组件获取状态的
        return JSON.parse(JSON.stringify(state));
    };
    let listeners = [];
    let subscribe = (fn) => {
        //订阅状态发生变化触发的事情
        listeners.push(fn);
        return function () {
            listeners = listeners.filter(item => item !== fn);//调第二次的时候可以把函数移除掉
        }
    };
    let dispatch = (action) => {
        //用来组件派发动作的
        state = reducer(state, action);//reducer是根据老状态和派发动作返回一个新的状态覆盖掉老状态
        listeners.forEach(item => item());//状态变化时重新触发执行订阅的事件
    };
    dispatch({});//初始化redux的默认状态
    return {getState, subscribe, dispatch};
}
//combineReducers 合并reducers{counter:{number:0},todo:[]}
//返回一个新的reduer
let combineReducers = (reducers) => {
    //reducers{counter:fn,todo:fn}
    let obj = {};//最终的状态
    return (state = {}, action) => {
        for (let key in reducers) {
            if (reducers.hasOwnProperty(key)) {
                obj[key] = reducers[key](state[key],action);//obj.counter={number:0}
            }
        }
        return obj;
    }
};
// module.exports = createStore;
export {createStore,combineReducers}
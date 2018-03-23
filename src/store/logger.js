//改写了dispatch的方法
let logger = store => dispatch => action => {
    //最后这个函数是用户派发执行的
    console.log(store.getState().number);
    dispatch(action);//进行动作的派发
    console.log(store.getState().number);
};
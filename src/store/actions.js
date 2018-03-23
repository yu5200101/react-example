import * as Types from './action-types';

export default {
    add() {
        return function (dispatch, getState) {
            setTimeout(() => {
                dispatch({type: Types.INCREMENT, amount: 1});
            }, 1000);
        }
    },
    minus() {
        /*return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve({type:Types.DECREMENT,amount:5});
            })
        });*/
        return {
            type:Types.DECREMENT,
            payload:new Promise((resolve,reject)=>{
                reject({amount:3});
            })
        }
    }
}
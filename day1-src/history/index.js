import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from './redux';

const INCREMENT = 'increment';//增加
const DECREMENT = 'decrement';//减少
function reducer(state = {number: 0}, action) {
    switch (action.type) {
        case INCREMENT:
            return {number: action.amount + state.number};
            break;
    }
    return state;//切记返回默认状态
}

let store = createStore(reducer);

//=>目的是将redux中的状态映射到组件上，更改组件的状态就可以导致视图的刷新
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            number: store.getState().number
        }
    }

    componentDidMount() {
        //组件渲染完成
        this.unSubscribe = store.subscribe(() => {
            this.setState({
                number:store.getState().number
            })
        });
    }
    componentWillUnMount(){
        this.unSubscribe();//移除掉事件监听
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    store.dispatch({type: INCREMENT, amount: 3})
                }}>+
                </button>
                <p>{this.state.number}</p>
                <button>-</button>
            </div>
        )
    }
}

ReactDom.render(<Counter/>, window.root);
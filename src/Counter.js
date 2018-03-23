import React from 'react';
import store from './store';
import actions from './store/actions'
export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state={number:store.getState().number}
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({number:store.getState().number});
        });
    }
    render() {
        return <div>
            <button onClick={()=>{
                store.dispatch(actions.add())
            }}>+</button>
            {this.state.number}
            <button onClick={()=>{
                store.dispatch(actions.minus())
            }}>-</button>
        </div>
    }
}

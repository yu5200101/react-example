import React from 'react';
import {connect} from "react-redux";
import actions from './store/action'
class Counter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            {this.props.n}
            <button onClick={()=>{
                this.props.add(1)
            }}>+</button>
            <button onClick={()=>{
                this.props.minus(1)
            }}>-</button>
        </div>
    }
}
export default connect(state=>({n:state.number}),actions)(Counter)

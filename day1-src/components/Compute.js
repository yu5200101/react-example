import React from 'react';
import store from '../store';

export default class Compute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: store.getState().counter.number
        }
    }

    componentDidMount() {
        this.un = store.subscribe(() => {
            this.setState({
                n: store.getState().counter.number
            })
        })
    }

    componentWillUnMount() {
        this.un();
    }

    render() {
        return <div>{this.state.n % 2 ? '奇数' : '偶数'}</div>
    }
}

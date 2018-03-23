import React from 'react';
import local from './Local'
//存一个数据 数据叫username，需要将值放在输入框内

class Username extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username:''};
    }
    componentWillMount(){
        let val = localStorage.getItem('username');
        this.setState({username:val});
    }
    render() {
        return <div>
            <input type="text" value={this.state.username}
            onChange={()=>{}}
            />
        </div>
    }
}
//告诉local将username取出来，以属性的方式传递给username
//minxin混合，我们可以把公共逻辑提取到它的父组件上
export default local('username')(Username)

import React from 'react';
//存一个数据 数据叫username，需要将值放在输入框内
import local from './Local';
 class Password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {password:''};
    }
    componentWillMount(){
        let val = localStorage.getItem('password');
        this.setState({password:val});
    }
    render() {
        return <div>
            <input type="text" value={this.state.password}
                   onChange={()=>{}}
            />
        </div>
    }
}
export default local('password')(Password)
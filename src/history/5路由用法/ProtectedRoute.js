import React from 'react';
import {withRouter} from 'react-router-dom';
class ProtectedRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        setTimeout(()=>{
            let flag = localStorage.getItem('LOGIN');
            if(!flag){
                this.props.history.push('/');//没登录去首页
            }
        },1000);
    }
    render() {
        let {path, component:Component} = this.props;
        let flag = localStorage.getItem('LOGIN');
        return <div>
            <Component/>
        </div>
    }
}
export default withRouter(ProtectedRoute);

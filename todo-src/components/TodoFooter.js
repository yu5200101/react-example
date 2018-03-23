import React from 'react';
import {connect} from 'react-redux';
import actions from '../store/action'
 class TodoFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <nav className="nav nav-pills" onClick={(e)=>{
                let result = e.target.dataset.type;//点击的某一个
                this.props.changeType(result);

            }}>
                <li className={this.props.type==='all'?'active':''}><a data-type="all">全部</a></li>
                <li className={this.props.type==='unFinish'?'active':''}><a data-type="unFinish">未完成</a></li>
                <li className={this.props.type==='finish'?'active':''}><a data-type="finish">已完成</a></li>
            </nav>
        </div>
    }
}
export default connect(state=>({...state}),actions)(TodoFooter);
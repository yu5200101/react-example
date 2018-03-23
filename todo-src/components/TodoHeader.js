import React from 'react';
import {connect} from 'react-redux';
//actions 是actionCreator组成的对象
import actions from '../store/action/index';

class TodoHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    getUnFinishCount = () => {
        //过滤数组中没有选中的length长度
        return this.props.todos.filter(item => !item.isSelected).length
    };

    render() {
        return <div>
            <h3>亲，你有{this.getUnFinishCount()}件事情没有完成</h3>
            <input type="text" className="form-control" onKeyUp={(e) => {
                if (e.keyCode === 13) {
                    this.props.addTodo({
                        id: Math.random(),
                        title: e.target.value,
                        isSelected: false
                    })
                }
            }}/>
        </div>
    }
}

//store.getState();//{todos:[{title:'xxx'}]}
export default connect(state => ({...state}), actions)(TodoHeader);

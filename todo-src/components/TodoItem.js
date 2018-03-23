import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {item} = this.props;
        return <li className="list-group-item">
            <input type="checkbox" checked={item.isSelected}
                   onChange={() => {
                       this.props.changeSelected(item.id);
                   }}/>
            {item.title}
            <button className="btn brn-xs pull-right"
                    onClick={() => {
                        this.props.deleteTodo(item.id);
                    }}
            >&times;</button>
        </li>
    }
}

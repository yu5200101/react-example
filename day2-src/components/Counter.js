import React from 'react';
// import store from '../store';
import * as actions from '../store/action/counter';
import {connect} from 'react-redux';

//利用react-redux需要导出一个连接后的组件
class Counter extends React.Component {
    /*constructor(props) {
        super(props);
        /!*this.state = {
            number:store.getState().counter.number
        }*!/
    }*/

    /*componentDidMount(){
        this.un = store.subscribe(()=>{
            this.setState({
                number:store.getState().counter.number
            })
        })
    }
    componentWillUnMount(){
        this.un();
    }*/
    render() {
        //{counter:{number:0}}
        return <div>
            <button onClick={() => {
                // store.dispatch(actions.add(10));
                this.props.add(1);
            }}>+
            </button>
            {/*{this.state.number}*/}
            <p>{this.props.number}</p>
            <button onClick={() => {
                // store.dispatch(actions.minus(10));
                this.props.minus(1);
            }}>-
            </button>
        </div>
    }
}

//connect执行时有两个“函数”
//1.mapStateToProps 将redux中的状态映射成属性
//2.mapDispatchToProps将dispatch方法映射成属性
//3.这两个组件的返回值会作为当前组件的属性
/*let mapStateToProps = (state) => {
    //这个函数的参数是state
    // return {n1: state.counter.number};
    //{...state.counter}=>{number:0}
    return {...state.counter};
};
let mapDispatchToProps = (dispatch) => {
    //这个函数的参数是dispatch
    return {
        add: (count) => {
            dispatch(actions.add(count));
        },
        minus:(count)=>{
            dispatch(actions.minus(count));
        }
    }
};
//connect中的mapDispatchToProps可以传入一个actionCreator对象
export default connect(mapStateToProps,mapDispatchToProps)(Counter);*/
//这个方法是redux中的
/*let bindActionCreators = (actions) => {
    //为什么可以直接传入一个actions，在内部会用这个函数进行包装
    return (dispatch) => {
        let obj = {};
        for (let key in actions) {
            if (actions.hasOwnProperty(key)) {
                obj[key] = (...args) => {
                    dispatch(actions[key](...args))
                }
            }
        }

        return obj;

    }
};
export default connect(state => ({...state.counter}), bindActionCreators(actions))(Counter);//第二次执行的参数是当前组件*/
export default connect(state => ({...state.counter}), actions)(Counter);

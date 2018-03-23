//Provider是一个组件，接收了一个store的属性，内部将其挂载在了context上
import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component {
    static childContextTypes = {
        store: PropTypes.object,
    };

    getChildContext() {
        return {store: this.props.store}
    }

    render() {
        return this.props.children
    }
}

let connect = (mapStateToProps,mapDispatchToProps) => (Component) => {
    return class Proxy extends React.Component {
        constructor(props, context) {
            //constructor的第二个参数是context
            super();//默认情况下先调用mapStateToProps返回结果{n:0}
            this.state = mapStateToProps(context.store.getState());//n:state.number
        }

        componentDidMount() {
            //每次更新重新执行mapStateToProps获取最新的状态
            this.context.store.subscribe(() => {
                this.setState(mapStateToProps(this.context.store.getState()))
            })
        }

        static contextTypes = {
            store: PropTypes.object
        };

        render() {
            return <Component {...this.state}
                              {...mapDispatchToProps(this.context.store.dispatch)}
            />
        }
    }
};
export {Provider, connect}
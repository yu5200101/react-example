import React from 'react';

let local = (key) => (Component) => {
    return class HighOrderComponent extends React.Component {
        constructor() {
            super();
            this.state = {[key]: ''};
        }

        componentWillMount() {
            let val = localStorage.getItem(key);
            this.setState({[key]: val});
        }
        render(){
           return  <Component {...this.state}/>
        }
    }
};

export default local
import React from 'react';
import ReactDom from 'react-dom';
import Counter from "./components/Counter";
import Todo from "./components/Todo";

//react-redux提供了一个provider组件，这里需要将store传入
import {Provider} from 'react-redux';
import store from './store'
ReactDom.render(<Provider store={store}>
    <div>
        <Counter/>
        <Todo/>
    </div>
</Provider>, window.root);
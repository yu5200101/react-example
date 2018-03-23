import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store';

ReactDom.render(<Provider store={store}>
    <div>
        <App/>
    </div>
</Provider>, window.root);
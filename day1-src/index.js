import React from 'react';
import ReactDom from 'react-dom';
import Counter from "./components/Counter";
import Compute from "./components/Compute";
import Todo from "./components/Todo";


ReactDom.render(<div>
    <Counter/>
    <Compute/>
    <Todo/>
</div>, window.root);
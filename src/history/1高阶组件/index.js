//高阶组件（一个组件返回一个组件） 高阶函数(多于一个箭头的就叫做高阶函数)
import React from 'react';
import ReactDom from 'react-dom';
import Username from "./components/Username";
import Password from "./components/Password";

ReactDom.render(<div>
    <Username/>
    <Password/>
</div>, window.root);


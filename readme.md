`tree /f` 查看目录结构

│  index.js 最终运行文件
│
├─components
│      Counter.js
│      Todo.js
│
└─store 存放redux逻辑的
    │  action-types.js 所有动作类型
    │  index.js 产生store
    │
    └─reducer 处理动作派发
            counter.js 
            index.js 将所有的reducer合并
            todo.js
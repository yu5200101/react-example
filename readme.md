`tree /f` 查看目录结构

- index.js 最终运行文件
   + components
      + Counter.js
      + todo.js
    + store 存放redux逻辑的
      + action-types.js 所有动作类型
      + index.js 产生store
      + action 
            + index.js
      + reducer 处理动作派发
            + counter.js 
            + index.js 将所有的reducer合并
            + todo.js
            
>打开cmd窗口使用以下命令跑环境

>`npm install`或者`yarn install`

>使用`yarn start`命令开启客户端

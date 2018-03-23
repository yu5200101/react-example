import * as Types from '../action-types';

let obj = {
    addTodo(content){
        return {type:Types.ADDTODO,text:content};
    }
};
export default obj;
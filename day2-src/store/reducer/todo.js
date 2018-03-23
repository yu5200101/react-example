import * as Types from '../action-types'

function todo(state = [], action) {
    switch (action.type) {
        case Types.ADDTODO:
            return [...state,action.text];
    }
    return state;//重点
}

export default todo;
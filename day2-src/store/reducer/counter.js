import * as Types from '../action-types'

function counter(state = {number: 100}, action) {
    switch (action.type) {
        case Types.INCREMENT:
            return {number: state.number + action.count};
        case Types.DECREMENT:
            return {number: state.number - action.count};
    }
    return state;//重点
}

export default counter
import {createStore} from 'redux';
const ADD = 'ADD';
const MINUS = 'MINUS';
let store = createStore(reducer);
function reducer(state = {number: 0}, action) {
    switch (action.type) {
        case ADD:
            return {number: state.number + action.count};
        case MINUS:
            return {number: state.number - action.count};
    }
    return state;
}
window._store = store;
export default store;
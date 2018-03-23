let createStore = require('./redux');

function reducer(state = {number: 0}, action) {
    switch (action.type) {
        case 'ADD':
            return {number: state.number + action.amount};
    }
    return state;
}

let store = createStore(reducer);
store.dispatch({type: 'ADD', amount: 1});
console.log(store.getState());
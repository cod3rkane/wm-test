import { CART_ADD_ACTION, CART_REMOVE_ACTION } from '../actions/index';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

let storage = JSON.parse(localStorage.getItem('cart'));

const defaultState = storage || [];

function cartReducer(state = defaultState, action) {
    let newState = [];
    switch (action.type) {
        case CART_ADD_ACTION:
            newState = Object.assign([], state);
            newState.push(action.item);
            saveStorage(newState);
            return newState;
            break;
        case CART_REMOVE_ACTION:
            newState = Object.assign([], state);
            newState.splice(action.id, 1);
            return newState;
            break;
        default:
            return state;
    }
}

function saveStorage(items) {
    localStorage.setItem('cart', JSON.stringify(items));
}

const rootReducer = combineReducers({
    cartReducer,
    routing
});

export default rootReducer;

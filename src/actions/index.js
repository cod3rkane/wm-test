import { CALL_API, Schemas } from '../middleware/api'

export const CartStatus = {
    CART_REQUEST: 'CART_REQUEST',
    CART_SUCCESS: 'CART_SUCCESS',
    CART_FAILURE: 'CART_FAILURE'
};

export const CART_ADD_ACTION = 'CART_ADD_ACTION';
export const CART_REMOVE_ACTION = 'CART_REMOVE_ACTION' ;


export function addToCart(item) {
    return {
        type: CART_ADD_ACTION,
        item: item,
        status: CartStatus.CART_REQUEST
    }
}

export function removeItemCart(item, id) {
    return {
        type: CART_REMOVE_ACTION,
        item: item,
        id: id,
        status: CartStatus.CART_REQUEST
    }
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})

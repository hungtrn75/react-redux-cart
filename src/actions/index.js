import * as types from './../constants/ActionTypes';

export const actionAddToCart = (product,quantity)=>{
    return {
        type: types.ADD_TO_CARD,
        product,
        quantity
    }
}
export const actionUpdateProductToCart = (product,quantity)=>{
    return {
        type: types.UPDATE_PRODUCT_IN_CARD,
        product,
        quantity
    }
}
export const actionUpdateMessage = (message)=>{
    return {
        type: types.UPDATE_MESSAGE,
        message
    }
}
export const actionRemoveProductInCart = (product)=>{
    return {
        type: types.DELETE_PRODUCT_IN_CARD,
        product
    }
}
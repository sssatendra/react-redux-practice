import { Action1Types } from "../constants/action1-types"


export const setProducts = (products) => {
    return {
        type: Action1Types.SET_PRODUCT,
        payload: products,
    }
}
export const selectedProduct = (product) => {
    return {
        type: Action1Types.SELECTED_PRODUCT,
        payload: product,
    }
}

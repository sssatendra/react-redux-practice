import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedPorduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const loggedInUser = (user) => {
    return {
        type: ActionTypes.LOGGED_IN_USER,
        payload: user,
    }
}

export const loggedOut = (user) => {
    return {
        type: ActionTypes.LOGGED_OUT,
        payload: user,
    }
}
import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: [{
        id: 5451618,
        title: "Satendra Kumar",
        email: "samsung@email.com",
        category: "MERN Developer"
    }],
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;
    }
}
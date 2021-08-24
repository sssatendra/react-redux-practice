import { ActionTypes1 } from "../constants/action1-types";
const initialState = {
    products: [],
}
export const productReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes1.SET_PRODUCTS:
            return payload
        default:
            break;
    }

import { ActionTypes } from "../constants/action-types";


export const userReducer = (state = null, { type, payload }) => {
    switch (type) {
        case ActionTypes.LOGGED_IN_USER:
            return payload;

        case ActionTypes.LOGGED_OUT:
            return payload;
        default:
            break;
    }
}
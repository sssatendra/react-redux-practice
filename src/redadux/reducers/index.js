import { combineReducers } from "redux";
import { productReducer } from "./productRed";

const reducer = combineReducers({
    allProducts: productReducer,
})

export default reducer;
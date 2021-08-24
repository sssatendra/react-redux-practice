import { createStore } from "redux";
import { productReducer } from "./reducers/productRed";



const store = createStore(productReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
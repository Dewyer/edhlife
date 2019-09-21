import { createStore, applyMiddleware } from "redux";
import { mainReducer, defaultState } from ".";
import thunk from "redux-thunk";


const store = createStore(mainReducer, defaultState(), applyMiddleware(thunk.withExtraArgument({ })));

export default store;
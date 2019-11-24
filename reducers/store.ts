import { createStore, applyMiddleware } from "redux";
import { rootReducer, defaultState } from ".";
import thunk from "redux-thunk";


const store = createStore(rootReducer, defaultState(), applyMiddleware(thunk.withExtraArgument({ })));

export default store;
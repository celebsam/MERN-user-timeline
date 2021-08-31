import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./reducers/postReducers";

const reducers = combineReducers({
   post: postReducer,
});

const middleware = [thunk];

const store = createStore(
   reducers,
   {},
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

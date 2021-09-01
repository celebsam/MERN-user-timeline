import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./reducers/postReducers";
import { loginReducer } from "./reducers/userReducers";

const reducers = combineReducers({
   post: postReducer,
   login: loginReducer,
});

const middleware = [thunk];

const store = createStore(
   reducers,
   {},
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
   createPostReducer,
   postReducer,
   singlePostReducer,
} from "./reducers/postReducers";
import { loginReducer, registerReducer } from "./reducers/userReducers";

const reducers = combineReducers({
   post: postReducer,
   login: loginReducer,
   register: registerReducer,
   createPost: createPostReducer,
   singlePost: singlePostReducer,
});

const userInfoFromStorage = localStorage.getItem("timelineUserInfo")
   ? JSON.parse(localStorage.getItem("timelineUserInfo"))
   : null;

const initialState = {
   login: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
   reducers,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

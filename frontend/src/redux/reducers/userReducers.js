export const loginReducer = (state = { userInfo: {} }, action) => {
   if (action.type === "LOGIN_REQUEST") {
      return { loading: true, userInfo: {} };
   } else if (action.type === "LOGIN_REQUEST_SUCCESS") {
      return { loading: false, userInfo: action.payload };
   } else if (action.type === "LOGIN_REQUEST_FAIL") {
      return { loading: false, userInfo: action.payload };
   } else {
      return state;
   }
};

export const registerReducer = (state = { registerInfo: {} }, action) => {
   if (action.type === "REGISTER_REQUEST") {
      return { loading: true, registerInfo: {} };
   } else if (action.type === "REGISTER_REQUEST_SUCCESS") {
      return { loading: false, success: true, registerInfo: action.payload };
   } else if (action.type === "REGISTER_REQUEST_FAIL") {
      return { loading: false, registerInfo: action.payload };
   } else {
      return state;
   }
};

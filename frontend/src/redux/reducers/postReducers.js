export const postReducer = (state = { posts: [] }, action) => {
   if (action.type === "GET_POST_REQUEST") {
      return { loading: true, posts: [] };
   } else if (action.type === "GET_POST_SUCCESS") {
      return { loading: false, posts: action.payload };
   } else if (action.type === "GET_POST_FAIL") {
      return { loading: false, error: action.payload };
   } else {
      return state;
   }
};
export const createPostReducer = (state = { post: {} }, action) => {
   if (action.type === "CREATE_POST_REQUEST") {
      return { loading: true, post: {} };
   } else if (action.type === "CREATE_POST_SUCCESS") {
      return { loading: false, success: true, post: action.payload };
   } else if (action.type === "CREATE_POST_FAIL") {
      return { loading: false, success: false, error: action.payload };
   } else {
      return state;
   }
};

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

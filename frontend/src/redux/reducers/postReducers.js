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

export const singlePostReducer = (state = { singlePost: {} }, action) => {
   if (action.type === "SINGLE_POST_REQUEST") {
      return { loading: true, singlePost: {} };
   } else if (action.type === "SINGLE_POST_SUCCESS") {
      return { loading: false, success: true, singlePost: action.payload };
   } else if (action.type === "SINGLE_POST_FAIL") {
      return { loading: false, success: false, error: action.payload };
   } else {
      return state;
   }
};

export const deletePostReducer = (state = { message: "" }, action) => {
   if (action.type === "DELETE_POST_REQUEST") {
      return { loading: true, message: "" };
   } else if (action.type === "DELETE_POST_SUCCESS") {
      return {
         loading: false,
         success: true,
         message: action.payload,
      };
   } else if (action.type === "DELETE_POST_FAIL") {
      return { loading: false, success: false, error: action.payload };
   } else {
      return state;
   }
};

export const updatePostReducer = (state = { updateInfo: {} }, action) => {
   if (action.type === "UPDATE_POST_REQUEST") {
      return { loading: true, updateInfo: {} };
   } else if (action.type === "UPDATE_POST_SUCCESS") {
      return { loading: false, success: true, updateInfo: action.payload };
   } else if (action.type === "UPDATE_POST_FAIL") {
      return { loading: false, success: false, error: action.payload };
   } else {
      return state;
   }
};

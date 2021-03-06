import axios from "axios";

export const getPost = () => async (dispatch) => {
   try {
      dispatch({ type: "GET_POST_REQUEST" });
      const { data } = await axios.get("/api/post");

      dispatch({ type: "GET_POST_SUCCESS", payload: data });
   } catch (error) {
      dispatch({
         type: "GET_POST_FAIL",
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};

export const createPostAction = (postInfo) => async (dispatch, getState) => {
   try {
      dispatch({ type: "CREATE_POST_REQUEST" });

      const user = getState().login.userInfo;

      const { _id, token } = user;

      const details = { ...postInfo, user: _id };

      const config = {
         headers: {
            "Content-Type": "application/json",
            authorization: token,
         },
      };

      const { data } = await axios.post("/api/post", details, config);

      dispatch({ type: "CREATE_POST_SUCCESS", payload: data });
   } catch (error) {
      dispatch({
         type: "CREATE_POST_FAIL",
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};

export const singlePostAction = (id) => async (dispatch) => {
   try {
      dispatch({ type: "SINGLE_POST_REQUEST" });

      const { data } = await axios.get(`/api/post/single-post/${id}`);

      dispatch({ type: "SINGLE_POST_SUCCESS", payload: data });
   } catch (error) {
      dispatch({
         type: "SINGLE_POST_FAIL",
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};

export const deletePostAction = (id) => async (dispatch) => {
   try {
      dispatch({ type: "DELETE_POST_REQUEST" });
      const { data } = await axios.delete(`/api/post/${id}`);
      dispatch({ type: "DELETE_POST_SUCCESS", payload: data });
   } catch (error) {
      dispatch({
         type: "DELETE_POST_FAIL",
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};

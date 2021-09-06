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

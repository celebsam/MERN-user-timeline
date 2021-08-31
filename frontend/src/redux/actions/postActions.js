export const getPost = () => async (dispatch) => {
   try {
      dispatch({ type: "GET_POST_REQUEST" });
   } catch (error) {}
};

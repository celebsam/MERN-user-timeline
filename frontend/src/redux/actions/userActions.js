import axios from "axios";

export const loginAction = (loginInfo) => async (dispatch) => {
   try {
      dispatch({ type: "LOGIN_REQUEST" });

      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };

      const { data } = await axios.post("/api/user/login", loginInfo, config);

      dispatch({ type: "LOGIN_REQUEST_SUCCESS", payload: data });
      localStorage.setItem("timelineUserInfo", JSON.stringify(data));
   } catch (error) {
      dispatch({ type: "LOGIN_REQUEST_FAIL", payload: error });
   }
};

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
      dispatch({
         type: "LOGIN_REQUEST_FAIL",
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};

export const registerAction = (registerInfo) => async (dispatch) => {
   try {
      dispatch({ type: "REGISTER_REQUEST" });

      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };

      const { data } = await axios.post(
         "/api/user/register",
         registerInfo,
         config
      );

      dispatch({ type: "REGISTER_REQUEST_SUCCESS", payload: data });
   } catch (error) {
      dispatch({
         type: "REGISTER_REQUEST_FAIL",
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};

// export const registerAction =
//    (firstname, lastname, email, password, picture) => async (dispatch) => {
//       try {
//          dispatch({ type: "REGISTER_REQUEST" });

//          const config = { headers: { "Content-Type": "application/json" } };

//          const { data } = axios.post(
//             "/api/user/register",
//             { firstname, lastname, email, password, picture },
//             config
//          );

//          dispatch({ type: "REGISTER_REQUEST_SUCCESS", payload: data });
//       } catch (error) {
//          dispatch({
//             type: "REGISTER_REQUEST_FAIL",
//             payload:
//                error.response && error.response.data.message
//                   ? error.response.data.message
//                   : error.message,

//          });
//       }
//    };

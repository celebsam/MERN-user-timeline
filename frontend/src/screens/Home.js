import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Home = () => {
   const login = useSelector((state) => state.login);

   const history = useHistory();

   useEffect(() => {
      if (login.userInfo) {
         history.push("/posts");
      }
   }, [login, history]);
   return (
      <div
         style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
         }}
      >
         <h1 style={{ textTransform: "uppercase" }}>
            Welcome to user timeline
         </h1>
         <div>
            <Link to="/register">
               <button className="btn btn-primary btn-lg mx-3 mt-3">
                  Register
               </button>
            </Link>
            <Link to="/login">
               <button className="btn btn-info btn-lg mx-3 mt-3">Login</button>
            </Link>
         </div>
      </div>
   );
};

export default Home;

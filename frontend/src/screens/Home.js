import React from "react";

const Home = () => {
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
            <button className="btn btn-primary btn-lg mx-3 mt-3">
               Register
            </button>
            <button className="btn btn-info btn-lg mx-3 mt-3">Login</button>
         </div>
      </div>
   );
};

export default Home;

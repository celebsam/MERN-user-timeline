import React from "react";

const SinglePost = ({ match }) => {
   return (
      <div>
         <h1>{match.params.id}</h1>
      </div>
   );
};

export default SinglePost;

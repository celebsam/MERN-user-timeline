import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { singlePostAction } from "../redux/actions/postActions";

const SinglePost = ({ match }) => {
   const dispatch = useDispatch();

   const singlePost = useSelector((state) => state.singlePost);

   useEffect(() => {
      dispatch(singlePostAction(match.params.id));
   }, [dispatch, match, singlePost]);

   return (
      <div>
         <h1>{singlePost.description}</h1>
      </div>
   );
};

export default SinglePost;

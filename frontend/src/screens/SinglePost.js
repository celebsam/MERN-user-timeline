import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { singlePostAction } from "../redux/actions/postActions";

const SinglePost = ({ match }) => {
   const dispatch = useDispatch();
   const id = match.params.id;

   const singlePost = useSelector((state) => state.singlePost);
   const { singlePost: post } = singlePost;
   useEffect(() => {
      dispatch(singlePostAction(id));
   }, [dispatch, id]);

   return (
      <Container>
         <h1 className="mt-3">The usefulness of mobile phones today</h1>
         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <img
               style={{ width: "100%" }}
               src="http://picsum.photos/400"
               alt=""
            />
            <div style={{ textAlign: "center" }}></div>
         </div>
      </Container>
   );
};

export default SinglePost;

import React, { useEffect } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
   deletePostAction,
   singlePostAction,
} from "../redux/actions/postActions";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const SinglePost = ({ match }) => {
   const dispatch = useDispatch();
   const history = useHistory();
   const id = match.params.id;

   const singlePost = useSelector((state) => state.singlePost);
   const { singlePost: post, loading } = singlePost;

   // const deletePost = useSelector((state) => state.deletePost);

   // const { message } = deletePost;

   console.log(post);
   useEffect(() => {
      dispatch(singlePostAction(id));
   }, [dispatch, id]);

   // useEffect(() => {
   //    if (success) {
   //       toast.success("deleted", {
   //          position: "top-center",
   //       });
   //       setTimeout(() => {
   //          history.push("/posts");
   //       }, 1000);
   //    }
   // }, [history, success, message]);

   const deleteHandler = () => {
      dispatch(deletePostAction(id));

      toast.success("Post deleted.", {
         position: "top-center",
      });
      setTimeout(() => {
         history.push("/posts");
      }, 500);
   };

   return loading ? (
      <Spinner
         animation="border"
         role="status"
         style={{
            width: "90px",
            height: "90px",
            margin: "5rem auto 0",
            display: "block",
         }}
      >
         <span className="visually-hidden">Loading...</span>
      </Spinner>
   ) : (
      <Container>
         <h1 className="mt-3">The usefulness of mobile phones today</h1>
         <div
            style={{
               display: "grid",
               gridTemplateColumns: "1fr 1fr",
               gap: "2rem",
            }}
         >
            <img
               style={{ width: "100%" }}
               // src="http://picsum.photos/400"
               src={post?.image}
               alt=""
            />
            <div style={{ textAlign: "center" }}>
               <div>
                  <img
                     style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                     }}
                     src={post && post.user?.picture}
                     alt=""
                  />
                  <p>{post?.description}</p>
                  <p>
                     created at{" "}
                     {post &&
                        post?.createdAt
                           ?.slice(0, 10)
                           ?.split("-")
                           ?.reverse()
                           ?.join("-")}
                  </p>
                  <div>
                     <Button className="btn btn-info btn-lg">Edit</Button>
                     <Button
                        className="btn btn-danger btn-lg mx-5"
                        onClick={deleteHandler}
                     >
                        Delete
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
};

export default SinglePost;

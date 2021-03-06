import React, { useEffect } from "react";
import { Card, Container, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/actions/postActions";
import { Link } from "react-router-dom";

const Posts = () => {
   const post = useSelector((state) => state.post);

   const { loading, posts } = post;
   // console.log(posts);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getPost());
   }, [dispatch]);
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
         <h1 className="mt-3">Posts</h1>
         <Link to="/create">Create Post</Link>
         <br />
         <br />

         <div
            style={{
               display: "grid",
               gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
               gap: "1rem",
            }}
         >
            {posts?.map((post) => (
               <Card key={post._id}>
                  <Card.Img variant="top" src={post.image} />
                  <Card.Body>
                     <Card.Title>{post.title}</Card.Title>
                     <Card.Text>{post.description}</Card.Text>
                     <Card.Text>
                        {post.user
                           ? "By " +
                             post.user.firstname +
                             " " +
                             post.user.lastname
                           : ""}
                     </Card.Text>
                     <Link to={`/single-post/${post._id}`}>
                        <Button variant="primary">More details.</Button>
                     </Link>
                  </Card.Body>
               </Card>
            ))}
         </div>
      </Container>
   );
};

export default Posts;

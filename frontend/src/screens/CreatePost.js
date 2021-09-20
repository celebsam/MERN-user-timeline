import React, { useState } from "react";
import { Container, Form, Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreatePost = () => {
   const [title, setTitle] = useState("");
   const [image, setImage] = useState("");
   const [description, setDescription] = useState("");
   const [loading, setLoading] = useState(false);

   const postHandler = (e) => {
      e.preventDefault();
      console.log("Clicked");
   };

   return (
      <Container>
         <h1 className="mt-3">Create Post</h1>
         {/* {message && message} */}
         <Form style={{ width: "60%", margin: "auto" }}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
               <Form.Label>Post Title</Form.Label>
               <Form.Control
                  value={title}
                  type="text"
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e.target.value)}
               />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImage">
               <Form.Label>Image</Form.Label>
               <Form.Control
                  value={image}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setImage(e.target.value)}
               />
            </Form.Group>
            {loading ? (
               <Spinner
                  animation="border"
                  role="status"
                  style={{
                     width: "20px",
                     height: "20px",
                     margin: "5rem auto 0",
                     display: "block",
                  }}
               >
                  <span className="visually-hidden">Loading...</span>
               </Spinner>
            ) : (
               <Button variant="primary" type="submit" onClick={postHandler}>
                  Login
               </Button>
            )}
         </Form>
      </Container>
   );
};

export default CreatePost;

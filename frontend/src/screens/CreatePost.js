import React, { useEffect, useState } from "react";
import { Container, Form, Spinner, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createPostAction } from "../redux/actions/postActions";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

const CreatePost = () => {
   const [title, setTitle] = useState("");
   const [image, setImage] = useState("");
   const [description, setDescription] = useState("");
   const [picLoading, setPicLoading] = useState(false);

   const history = useHistory();

   const dispatch = useDispatch();
   const createPost = useSelector((state) => state.createPost);

   const { loading, success } = createPost;

   const postHandler = (e) => {
      e.preventDefault();
      dispatch(createPostAction({ title, image, description }));
   };

   useEffect(() => {
      if (success) {
         toast.success("Post created.", {
            position: "top-center",
         });
         setTimeout(() => {
            history.push("/posts");
         }, 2000);
      }
   }, [history, success]);

   const imageHandler = (chosenPic) => {
      setPicLoading(true);
      if (!chosenPic) {
         // return setPicMessage("Please select an image");
         return console.log("Please select an image");
      }
      const data = new FormData();
      data.append("file", chosenPic);
      data.append("upload_preset", "timeline");
      data.append("cloud_name", "samgreen");
      fetch("https://api.cloudinary.com/v1_1/samgreen/image/upload", {
         method: "post",
         body: data,
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPicLoading(false);
            setImage(data?.url?.toString());
         })
         .catch((err) => console.log(err));
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

            <Form.Group className="mb-3">
               <Form.Label>Image</Form.Label>
               <Form.Control
                  type="file"
                  onChange={(e) => imageHandler(e.target.files[0])}
                  id="custom-file"
                  // type="image/png"
                  label=""
               />
            </Form.Group>
            {picLoading ? (
               <Spinner
                  animation="border"
                  role="status"
                  style={{
                     width: "20px",
                     height: "20px",
                     display: "block",
                  }}
               >
                  <span className="visually-hidden">Loading...</span>
               </Spinner>
            ) : null}

            <Form.Group className="mb-3" controlId="formBasicDescription">
               <Form.Label>Description</Form.Label>
               <Form.Control
                  value={description}
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
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
               <Button
                  disabled={picLoading}
                  variant="primary"
                  type="submit"
                  onClick={postHandler}
               >
                  Submit
               </Button>
            )}
         </Form>
      </Container>
   );
};

export default CreatePost;

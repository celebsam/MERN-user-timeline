import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import { registerAction } from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Register = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [picture, setPicture] = useState("");
   // const [message, setMessage] = useState("");

   const register = useSelector((state) => state.register);

   const { loading, error, success } = register;
   console.log(success);

   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(() => {
      if (success) {
         toast.success("Registration successful. You can login.", {
            position: "top-center",
         });
         setTimeout(() => {
            history.push("/login");
         }, 2000);
      }
   }, [history, success]);

   const registerHandler = (e) => {
      e.preventDefault();
      if (!email || !password || !firstname || !lastname) {
         return toast.error("Fill in all the fields.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
      }
      dispatch(
         registerAction({ firstname, lastname, email, password, picture })
      );
   };

   const pictureHandler = (chosenPic) => {
      if (!chosenPic) {
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
            setPicture(data?.url?.toString());
         })
         .catch((err) => console.log(err));
   };

   return (
      <div>
         <Container>
            <h1 className="mt-3">Register</h1>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form style={{ width: "60%", margin: "auto" }}>
               <Form.Group className="mb-3" controlId="formBasicFirstname">
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control
                     value={firstname}
                     type="text"
                     placeholder="Enter Firstname"
                     onChange={(e) => setFirstname(e.target.value)}
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicLastname">
                  <Form.Label>Lastname</Form.Label>
                  <Form.Control
                     value={lastname}
                     type="text"
                     placeholder="Enter Lastname"
                     onChange={(e) => setLastname(e.target.value)}
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                     value={email}
                     type="email"
                     placeholder="Enter email"
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     value={password}
                     type="password"
                     placeholder="Password"
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </Form.Group>
               <Form.Group className="mb-3">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control
                     type="file"
                     onChange={(e) => pictureHandler(e.target.files[0])}
                     id="custom-file"
                     // type="image/png"
                     label=""
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
                     variant="primary"
                     type="submit"
                     onClick={registerHandler}
                  >
                     Register
                  </Button>
               )}
            </Form>

            <br />
            <p>
               Have an account? <Link to="/login"> Login here</Link>
            </p>
         </Container>
      </div>
   );
};

export default Register;

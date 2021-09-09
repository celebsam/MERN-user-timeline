import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { registerAction } from "../redux/actions/userActions";

const Register = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   // const [message, setMessage] = useState("");

   const register = useSelector((state) => state.register);

   const { loading } = register;

   const dispatch = useDispatch();

   const registerHandler = (e) => {
      e.preventDefault();
      dispatch(registerAction({ firstname, lastname, email, password }));
   };

   return (
      <div>
         <Container>
            <h1 className="mt-3">Register</h1>
            {/* {message && message} */}
            <Form style={{ width: "60%", margin: "auto" }}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Firstname</Form.Label>
                  <Form.Control
                     value={firstname}
                     type="text"
                     placeholder="Enter Firstname"
                     onChange={(e) => setFirstname(e.target.value)}
                  />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
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
                     Login
                  </Button>
               )}
            </Form>
         </Container>
      </div>
   );
};

export default Register;

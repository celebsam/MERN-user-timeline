import React, { useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/userActions";

const LoginScreen = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [message, setMessage] = useState("");

   const login = useSelector((state) => state.login);

   const { loading } = login;

   const dispatch = useDispatch();

   const loginHandler = (e) => {
      e.preventDefault();

      if (email.length < 3 || password.length < 3) {
         return setMessage("Values entered are too small");
      }
      dispatch(loginAction({ email, password }));
   };

   return (
      <Container>
         <h1 className="mt-3">Login</h1>
         {message && message}
         <Form style={{ width: "60%", margin: "auto" }}>
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
               <Button variant="primary" type="submit" onClick={loginHandler}>
                  Login
               </Button>
            )}
         </Form>
      </Container>
   );
};

export default LoginScreen;

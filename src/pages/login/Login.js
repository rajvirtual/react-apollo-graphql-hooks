import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useLoginMutation from "../../hooks/useLoginMutation";

export const Login = () => {
  let history = useHistory();
  const doLogin = useLoginMutation();

  const handleLogin = (e) => {
    e.preventDefault();
    doLogin({
      variables: {
        username: e.target.elements.username.value,
        password: e.target.elements.pass.value,
      },
      // variables: { username: "testuser", password: "testpass" },
    }).then(
      (data) => {
        console.log(data);
        localStorage.setItem("token", data.data.logIn.token);
        history.push("/list");
      },
      (e) => {
        history.push("/list");
        console.log(e);
      }
    );
  };
  return (
    <>
      <Container className="mt-4">
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="username">
            <Form.Label>User Name</Form.Label>
            <Form.Control autoFocus type="text" placeholder="Enter User Name" />
          </Form.Group>
          <Form.Group controlId="pass">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="mr-2" variant="primary" type="submit">
            Login
          </Button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </Form>
      </Container>
    </>
  );
};

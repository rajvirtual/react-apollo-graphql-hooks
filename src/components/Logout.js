import React from "react";
import { isLoggedIn } from "./../services/service";
import { useHistory } from "react-router-dom";
import { Form, Col } from "react-bootstrap";

export const Logout = () => {
  let history = useHistory();

  const logOut = () => {
    window.localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <>
      <Form.Group as={Col}>
        {isLoggedIn() && (
          <button onClick={logOut} className="btn btn-link">
            Log Out
          </button>
        )}
      </Form.Group>
    </>
  );
};

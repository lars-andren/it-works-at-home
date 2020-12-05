import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/form");
  }

  return (
    <section className="section">
      <div className="container top-container">
        <h1 className="title">IT Works @ Home</h1>
        <p className="subtitle">
          in collaboration with <strong>DEFA</strong>
        </p>
      </div>
      <div className="container Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="username" className="field">
            <Form.Label className="label">Username</Form.Label>
            <Form.Control
              className="input"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password" className="field">
            <Form.Label className="label">Password</Form.Label>
            <Form.Control
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            className="button is-link"
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </Button>
        </Form>
      </div>
    </section>
  );
}

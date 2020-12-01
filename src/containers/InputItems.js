import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./InputItems.css";
import { useHistory } from "react-router-dom";

export function encode(data: any) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

export default function InputItems() {
  const history = useHistory();
  const [formState, setFormState] = useState({
    country: "Norway",
    comment: "",
  });

  function validateForm() {
    return country && comment;
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "number-of-submissions",
          "text-to-send": `${Math.random() + "message"}`,
          ...formState
        }),
      });

    history.push("thank-you");
  }

  function onValueChange(event) {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  const { comment, country } = formState;

  return (
    <div className="container InputItems">
      <div className="section">
        <h1 className="title">Please answer the following questions.</h1>
        <p className="subtitle">All responses are anonymous.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="country" className="field">
            <Form.Label className="label">Select your country:</Form.Label>
            <div className="control">
              <label className="radio">
                <input
                  name="country"
                  type="radio"
                  value="Norway"
                  checked={country === "Norway"}
                  onChange={onValueChange}
                />{" "}
                Norway
              </label>
            </div>
            <div className="control">
              <label className="radio">
                <input
                  name="country"
                  type="radio"
                  value="Sweden"
                  checked={country === "Sweden"}
                  onChange={onValueChange}
                />{" "}
                Sweden
              </label>
            </div>
            <div className="control">
              <label className="radio">
                <input
                  name="country"
                  type="radio"
                  value="Other"
                  checked={country === "Other"}
                  onChange={onValueChange}
                />{" "}
                Other
              </label>
            </div>
          </Form.Group>

          <Form.Group size="lg" controlId="comment" className="field">
            <Form.Label className="label">Have you ever experienced physical discomfort caused by your work environment?</Form.Label>
            <Form.Control
                autoFocus
                type="text"
                name="comment"
                value={comment}
                onChange={onValueChange}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="comment" className="field">
            <Form.Label className="label">Additional comment</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              name="comment"
              value={comment}
              onChange={onValueChange}
            />
          </Form.Group>
          <Button
            className="button is-link"
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

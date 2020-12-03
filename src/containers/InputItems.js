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

  const { comment, country, tools } = formState;

  function validateForm() {
    return country && tools;
  }

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

          <Form.Group size="lg" controlId="role" className="field">
            <Form.Label className="label">Select your working environment (check all that apply):</Form.Label>
            <div className="control">
              <label className="checkbox">
                <input
                  name="role"
                  type="checkbox"
                  value="Outdoors"
                />{" "}
                  Outdoors
                </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input
                  name="role"
                  type="checkbox"
                  value="Office"
                />{" "}
                  Office
                </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input
                  name="role"
                  type="checkbox"
                  value="Home"
                />{" "}
                  Home office
                </label>
            </div>
          </Form.Group>

          <Form.Group size="lg" controlId="comment" className="field">
            <Form.Label className="label">Is your home office lacking any vital tools or equipment?</Form.Label>
            <div className="control">
              <label className="radio">
                <input
                  name="tools"
                  type="radio"
                  value="yes" onChange={onValueChange}
                />{" "}
                  Yes
                </label>
            </div>
            <div className="control">
              <label className="radio">
                <input
                  name="tools"
                  type="radio"
                  value="No" onChange={onValueChange}
                />{" "}
                  No
                </label>
            </div>
            <div className="control">
              <label className="radio">
                <input
                  name="tools"
                  type="radio"
                  value="Unsure" onChange={onValueChange}
                />{" "}
                  Not sure
                </label>
            </div>
          </Form.Group>

          <Form.Group size="lg" controlId="tools" className="field">
            <Form.Label className="label">What do you miss in your home office (check all that apply):</Form.Label>
            <div className="control">
              <label className="checkbox">
                <input
                  name="tools"
                  type="checkbox"
                  value="Desk"
                />{" "}
                  Desk
                </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input
                  name="tools"
                  type="checkbox"
                  value="Screen"
                />{" "}
                  Large monitor
                </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input
                  name="tools"
                  type="checkbox"
                  value="station"
                />{" "}
                  Laptop docking station
                </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input
                  name="tools"
                  type="checkbox"
                  value="chair"
                />{" "}
                  Comfortable chair
                </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input
                  name="tools"
                  type="checkbox"
                  value="coffee"
                />{" "}
                  Coffee machine
                </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input
                  name="tools"
                  type="checkbox"
                  value="drawers"
                />{" "}
                  Drawers cabinet
                </label>
            </div>
            <div className="control">
              <label className="checkbox">
                <input
                  name="tools"
                  type="checkbox"
                  value="notlisted"
                />{" "}
                  Something not listed here
                </label>
            </div>
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
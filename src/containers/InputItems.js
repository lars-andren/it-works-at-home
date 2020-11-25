import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./InputItems.css";

export default function InputItems() {
    const [comment, setEmail] = useState("");
    //const [state] = useState("")

    const state = {
        name: "Norway"
    };

    function validateForm() {

    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    return (
        <div className="InputItems">
            <Form onSubmit={handleSubmit}>

                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Norway"
                            checked={this.state.selectedOption === "Norway"}
                            onChange={this.onValueChange}
                        />
                        Norway
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Sweden"
                            checked={this.state.selectedOption === "Sweden"}
                            onChange={this.onValueChange}
                        />
                        Sweden
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="Other"
                            checked={this.state.selectedOption === "Other"}
                            onChange={this.onValueChange}
                        />
                        Other
                    </label>
                </div>

                <Form.Group size="lg" controlId="comment">
                    <Form.Label>Additional comment</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={comment}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

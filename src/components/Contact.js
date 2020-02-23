import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <container>
          <div className="contact col-6 mx-auto text-center">
            <h2> CONTACT </h2>

            <p className="contact text-left">
              I am interested in Freelance opportunities. Flick me a message if
              you're keen to work together, or have any questions about my work!{" "}
            </p>
            <Form className="text-left">
              <Form.Group controlId="formName">
                <Form.Label>Name </Form.Label>
                <Form.Control type="name" placeholder="Enter name" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message </Form.Label>
                <Form.Control as="textarea" rows="3" placeholder="Message" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </div>
        </container>
      </div>
    );
  }
}

export default Home;

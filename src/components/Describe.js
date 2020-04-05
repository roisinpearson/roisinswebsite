import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";

class Describe extends Component {
  render() {
    return (
      <div className="describe">
        <Row className="justify-content-md-center">
          <Col>
            <div className=" col-6 mx-auto text-center">
              <h3> What do you want to see? </h3>
            </div>
          </Col>
        </Row>
        <div className="options">
          <Row className="justify-content-md-center">
            <div className="col-3 text-center">
              <Button variant="link">Design</Button>
              <span class="fas fa-camera"></span>
            </div>
            <div className="col-3 text-center">
              <Button variant="link">Code</Button>
            </div>
            <div className="col-3 text-center">
              <Button variant="link">Both!</Button>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default Describe;

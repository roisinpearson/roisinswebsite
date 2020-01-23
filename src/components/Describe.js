import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
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
                <p> Design</p>
              </div>
              <div className="col-3 text-center">
                <p> Code </p>
              </div>
              <div className="col-3 text-center">
                <p> Both! </p>
              </div>

            </Row>
          </div>
      </div>
    );
  }
}

export default Describe;

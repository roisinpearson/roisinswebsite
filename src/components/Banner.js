import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Home from "./Home";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        {/*<Container>*/}
        <Row>
          <Col>
            <div className=" col-8 mx-auto">
              <h1 className="text-center"> ROISIN PEARSON </h1>
              <h3 className="text-center"> Developer and Designer </h3>
            </div>
          </Col>
        </Row>
        {/*</Container>*/}
      </div>
    );
  }
}

export default Banner;

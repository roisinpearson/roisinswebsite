import React, { Component } from 'react';
import { Container, Row} from 'react-bootstrap';
import Col from "react-bootstrap/esm/Col";

class Describe extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className=" col-8 mx-auto">
                                <h3 className="text-center"> What I do </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Describe;
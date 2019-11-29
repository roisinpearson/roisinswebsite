import React, {Component} from 'react';
import { Container, Row} from 'react-bootstrap';

class About extends Component {
    render() {
        return (

            <Container>
                <Row>
                    <div className="about col-6 mx-auto">
                <h2 className="text-center"> ABOUT ME </h2>
                    </div>
                </Row>
                <Row>
                    <div className="about col-8 mx-auto">
                <h3> Hi I'm Roisin </h3>
                <p> I am a software developer with a passion for beautiful design. </p>
                <p>
                    My studies in design and information systems means I have the skills to both develop applications and design them.
                    The worlds of design and development have previously been relatively separate from each other so my aim is to bridge the gap between the two professions
                    and give equal importance to both.
                </p>

                <p> Aside from tech stuff I love ransacking thrift stores, dancing to Rhianna and eating peanut butter toast. </p>

                <p> I am currently working as a graduate developer at Xero. </p>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default About;
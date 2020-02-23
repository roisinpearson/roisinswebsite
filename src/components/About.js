import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

class About extends Component {
  render() {
    return (
      <Container className="about">
        <div className="about col-6 mx-auto">
          <h2 className="about-heading text-center"> ABOUT ME </h2>
        </div>
        <Row>
          <div className="about col-8 mx-auto">
            <h3 className="about-heading"> Hi I'm Roisin </h3>
            <p>
              {" "}
              I am a software developer with a passion for beautiful design.{" "}
            </p>
            <p>
              My studies in design and information systems means I have the
              skills to both develop applications and design them. The worlds of
              design and development have previously been relatively separate
              from each other so my aim is to bridge the gap between the two
              professions and give equal importance to both.
            </p>

            <p>
              {" "}
              Aside from tech stuff I love ransacking thrift stores, dancing to
              Rhianna and eating peanut butter toast.{" "}
            </p>

            <p> I am currently working as a Full Stack Developer at Xero. </p>

            <div>
              <SocialIcon
                className="socials"
                url="https://twitter.com/roisin_pearsonn"
              />
              <SocialIcon
                className="socials"
                url="https://www.linkedin.com/in/roisin-pearson/"
              />
              <SocialIcon
                className="socials"
                url="https://drive.google.com/file/d/0B99UR9gXLpKdVHZkcjJxeTBMUmc/view"
              />
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default About;

import React, { Component } from "react";
import pic1 from "./images/big-e.png"
import pic2 from "./images/afar.JPG"
import pic3 from "./images/sculpture.jpg"
import pic4 from "./images/titlepage.png"

class Projects extends Component {
    render() {
        return (

            <div className="projects">
                <img className="images" src={pic1} alt="Name animation"/>
                <img className="images" src={pic2} alt="Sol-Armour"/>
                <img className="images" src={pic3} alt="sculpture"/>
                <img className="images" src={pic4} alt="Design over the years"/>
            </div>
            );
        }
    }

    export default Projects;


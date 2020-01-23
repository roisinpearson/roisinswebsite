import React, { Component } from 'react';
import Col from "react-bootstrap/esm/Col";
import Describe from "./Describe";
import Banner from "./Banner";
import Projects from "./Projects";


export function Home() {
    return (
        <React.Fragment>
            <Banner />
            <Describe />
            <Projects />
        </React.Fragment>
    );
}

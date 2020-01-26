import React, { useState } from "react";
import banner from "./components/images/banner.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import About from "./components/About";
import { Home } from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [color, changeColor] = useState("#282c34");
  return (
    <div style={{ background: color }} id="main">
      <Router>
        <Navbar bg="dark" variant="dark" className="navbar">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link
                to={"/"}
                onClick={() => changeColor("#fff")}
                className="nav-link"
              >
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={() => changeColor("#02132b")}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                onClick={() => changeColor("#B761AA")}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

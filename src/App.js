import React from 'react';
import banner from './images/banner.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
<Router>

          <Navbar bg="dark" variant="dark" className="navbar">
              <ul className="navbar-nav mr-auto">
                  <li><Link to={'/'} className="nav-link"> Home </Link></li>
                  <li><Link to={'/about'} className="nav-link">About</Link></li>
                  <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              </ul>
          </Navbar>

          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
          </Switch>



</Router>
  );
}

export default App;

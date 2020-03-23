import React, { Component } from "react";
import { Route, NavLink, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


class App extends Component {
  render() {
    return (
      
        <div>
          <h1 className="title">Single Page Application</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            </Switch>
          </div>
        </div>
      
    );
  }
}

export default App;
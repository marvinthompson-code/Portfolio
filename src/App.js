import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Nav from "../src/components/Nav";
import Home from "../src/components/Home/Home";
import Project from "../src/components/Projects/Project";
import About from "../src/components/About/About";
import Footer from "./components/Footer";

import Skills from "./components/Skills/Skills";
import Splash from "./components/Splash/Spash";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Splash />
        </Route>

        <Route exact path={"/home"}>
          <Nav />
          <Home />
        </Route>

        <Route exact path={"/contact"}>
          <Nav />
          <Contact />
        </Route>

        <Route path={"/about"}>
          <Nav />
          <About />
        </Route>

        <Route path={"/projects"}>
          <Nav />
          <Project />
        </Route>

        <Route path={"/skills"}>
          <Nav />
          <Skills />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

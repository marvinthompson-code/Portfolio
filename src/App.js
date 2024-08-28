import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
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
      <Nav />
      <Routes>
        <Route exact path={"/"} element={<Splash />} />

        <Route exact path={"/home"} element={<Home />} />

        <Route exact path={"/contact"} element={<Contact />} />

        <Route path={"/about"} element={<About />} />

        <Route path={"/projects"} element={<Project />} />

        <Route path={"/skills"} element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;

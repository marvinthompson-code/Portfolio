import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Nav from '../src/components/Nav'
import Home from '../src/components/Home/Home'
import Project from '../src/components/Projects/Project'
import About from '../src/components/About/About'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>

        <Route exact path={"/"}>
          <Home/>
        </Route>

        <Route path={"/about"}>
          <About/>
        </Route>

        <Route path={"/projects"}>
          <Project/>
        </Route>

      </Switch>

    </div>
  );
}

export default App;

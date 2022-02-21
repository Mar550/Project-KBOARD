import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route
} from 'react-router-dom';
import './App.css';


import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects/Projects";
import Column from './components/Column/Column';
import Sidebar from './components/Sidebar/Sidebar';
import Board from './pages/Board/Board';
import Testing from './pages/Testing';
import Protected from './Protected.js';
import UpdateProject from './pages/Projects/UpdateProject';

const App = () => {
  
  return (

    <Router>
      <Sidebar/>
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>

        <Route  path='/register'>
          <Register/>
        </Route>

        <Route  path='/dashboard'>
          <Dashboard/>
        </Route>

        <Route  path='/projects'>
          <Projects/>
        </Route>

        <Route  path='/update/:id'>
          <Protected Cmp={UpdateProject}/>
        </Route>

        <Route  path='/board'>
          <Board/> 
        </Route>

        <Route  path='/faq'>
          <FAQ/>
        </Route>

        <Route  path='/about'>
          <About/>
        </Route>

        <Route  path='/contact'>
          <Contact/>
        </Route>

        <Route  path='/sidebar'>
          <Sidebar/>
        </Route>
        
        <Route  path='/column'>
          <Column/>
        </Route>

        <Route  path='/testing'>
          <Testing/>
        </Route>

        <Route exact path='*'>
          <Error/>
        </Route>
      </Switch> 
    </Router>
  )
}



export default App;



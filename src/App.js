import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route
} from 'react-router-dom';
import './App.css';


import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Column from './components/Column';
import Sidebar from './components/Sidebar';
import Board from './pages/Board';

const App = () => {
  
  return (

    <Router>
        
      <Switch>
        <Route exact path='/'>
          <Login/>
        </Route>

        <Route  path='/signup'>
          <Signup/>
        </Route>

        <Route  path='/dashboard'>
          <Dashboard/>
        </Route>

        <Route  path='/projects'>
          <Projects/>
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

        <Route exact path='*'>
          <Error/>
        </Route>
      </Switch> 
    </Router>
  )
}



export default App;



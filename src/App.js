import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route
} from 'react-router-dom';
import './App.css';

import Error from "./pages/Error";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Projects from "./pages/Projects/Projects";
import Sidebar from './components/Sidebar/Sidebar';
import Board from './pages/Board/Board';
import Update from './pages/Projects/Update';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Private from './helpers/Private';
import SearchProject from './pages/Projects/SearchProject';
import EditProject from './pages/Projects/EditProject';
import Protected from './helpers/Protected.js';

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

        <Route  path='/search'>
          <SearchProject/>
        </Route>

        <Route  path='/projects'>
          <Projects/>
          {/*Protected Cmp={Projects}*/}
        </Route>

        <Route  path='/update/:id'>
          <Update/>
          {/*Protected Cmp={UpdateProject}*/}
        </Route>

        <Route  path='/board'>
          <Board/> 
            {/*Protected Cmp={Board}*/}
        </Route>

        <Route path='/footer'>
          <Footer/>
        </Route>

        <Route path='/navbar'>
          <Navbar/>
        </Route>


        <Route  path='/contact'>
          <Contact />
        </Route>

        <Route  path='/sidebar'>
          <Sidebar/>
        </Route>

        
        <Route  path='/privatecontent'>
          <Private/>
        </Route>
      
        <Route  path='/editproject/:id'>
          <EditProject/>
        </Route>


        <Route exact path='*'>
          <Error/>
        </Route>
      </Switch> 
    </Router>
  )
}



export default App;



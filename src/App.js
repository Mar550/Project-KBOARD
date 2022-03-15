import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route
} from 'react-router-dom';
import './App.css';


import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Projects from "./pages/Projects/Projects";
import Sidebar from './components/Sidebar/Sidebar';
import Board from './pages/Board/Board';
import Protected from './helpers/Protected.js';
import Update from './pages/Projects/Update';
import Popupb from './components/Popup/PopupB';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Private from './helpers/Private';
import SearchProject from './pages/Projects/SearchProject';
import Testing from './TestAdd';
import Board2 from './pages/Board/Board2';

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

        <Route  path='/board2'>
          <Board2/> 
            {/*Protected Cmp={Board}*/}
        </Route>

        <Route path='/popup'>
          <Popupb/>
          {/*Protected Cmp={Popup}*/}
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

        <Route path="/testing">
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



import React from 'react';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Logo from './components/inc/Logo';
import Slider from './components/inc/Slider';
import Cards from './components/inc/Cards';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import './App.css';
// import {BrowserRouter as Router,Route} from 'react-router-dom';
import Column from './components/inc/Column';
import Decorcards from './components/inc/decor-cards';
import Footer from './components/inc/Footer';
import Footer2 from './components/inc/Footer2';
import Logotest from './components/inc/logotest';


function App() {
  return (
    
    <div className="main">
      
      {/* <Logo/>  */}
      <Logotest/>
      {/* <Login/>
      <Signup/> */}
      <Navbar/>
     
      <Slider/>
      <Cards/>
      <Column/>
      <Decorcards/>
      <div id="siteFooter">
      <Footer/>
      <Footer2/>
      </div>
    </div>
  );
}

export default App;

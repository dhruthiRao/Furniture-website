import React from 'react';
import oakntimber from '../images/oakntimber_transparent.png';
import Cart from '../images/cart.png';
import './Inc.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function Logo() {
    return (
        <nav class="navbar bg-light">
  <div class="container-fluid">
     <a class="navbar-brand" href="/"> 
        <h1>
      <img  src={oakntimber} alt="logo" class="spin" id="logoImg" height='120'px />
        Oak & Timber
        </h1>
     </a>  
       
  </div>
</nav>
    );
}
export default Logo;
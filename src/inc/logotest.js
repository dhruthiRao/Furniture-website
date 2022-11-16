import React from 'react';
import oakntimber from '../images/oakntimber_transparent.png';
import Cart from '../images/cart.png';
import './Inc.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function Logotest() {
    return (
        <nav class="navbar bg-light">
  <div class="container-fluid">
     <a class="navbar-brand" href="/"> 
        <h1>
      <img  src={oakntimber} alt="logo" class="spin" id="logoImg" height='120'px />
        Oak & Timber
        </h1>
     </a>  
       
  
  <button type="button" id="login-btn" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Login
</button>

 {/* Modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-outline-primary w-100">Submit</button>
</form>

      </div>
      
    </div>
  </div>
</div>


        <button type="button" id="sign-btn" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#signupModal">
  Sign Up
</button>

 
<div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      <form>
      

  <div class="mb-3">
    <label for="exampleInput" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInput" aria-describedby="emailHelp"/>
    <div id="InputHelp" class="form-text">Enter a username.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-outline-primary w-100">Submit</button>
</form>

      </div>

      
    </div>
  </div>
</div>
<div id="cart">
<img src={Cart} alt="cart" id="cart-btn"/>
</div>
</div>



</nav>

    );
}

export default Logotest;
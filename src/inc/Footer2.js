import React from 'react';
import oakntimber from '../images/oakntimber_transparent.png';
import instagram from '../images/instagram.jpg';
import facebook from '../images/facebook.png';
import twitter from '../images/twitterlogo.png';
import linkedin from '../images/linkedin.png';
import './Inc.css';
import call from '../images/calllogo.png';
import mail from '../images/emaillogo.png';
import chat from '../images/chatlogo.png';
import top from '../images/top.jpg';

function Footer2() {
    return (
        <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div class="card-body" id="footerBody">
        <h5 class="card-title">CONTACT US</h5>
        <div id="contactEle">
            <img src={call} alt="call" height="50px" width="50px"/>
            <p>Call us at</p>
            <p>080-87654321</p>
        </div>
        <div id="contactEle">
        <a href="www.gmail.com">
            <img src={mail} alt="mail" height="40px" width="40px"/>
            </a>
            <p>Mail us at</p>
            <p>oakntimber@gmail.com</p>
        </div>
        <div id="contactEle">
            <a href="#">
            <img src={chat} alt="chat" height="40px" width="40px"/>
            </a>
            <p>Chat with us</p> 
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <div class="card-body" id="footerBody">
        <h5 class="card-title">SOCIALS</h5>
        
        <a href="www.instagram.com">
        <img src={instagram} alt="instagram" id="socialImage" height="40px" width="40px"/>
        </a>
        <a href="www.facebook.com">
        <img src={facebook} alt="facebook" id="socialImage" height="50px" width="50px"/>
        </a>
        <a href="www.twitter.com">
        <img src={twitter} alt="twitter" id="socialImage" height="40px" width="40px"/>
        </a>
        <a href="www.linkedin.com">
        <img src={linkedin} alt="linkedin" id="socialImage" height="60px" width="60px"/>
        </a>

         
        <div class="card-body" id="topArrow">
        <a href="#">
        <img src={top} alt="top" id="top" height="50px" width="50px"/>
        </a>
        <p id="socPara">Skip to top</p>
        </div>
      </div>
    </div>
  </div>
  {/* <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div> */}
  {/* <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}
</div>
    );
}

export default Footer2;
import React from 'react';
import './Inc.css';
import chair from '../images/chair.jpg';
import dining from '../images/dining.jpg';
import bookshelf from '../images/bookshelf.jpg';
import threeseater from '../images/threeseater.jpg';
import twoseater from '../images/twoseater.jpg';
import sofaset from '../images/sofaset.jpg';
import beds from '../images/beds.jpg';
import kidsbeds from '../images/kidsbeds.jpg';
import mattress from '../images/mattress.jpg';
import curtain from '../images/curtains.jpg';
import mirror from '../images/mirrors.jpg';
import photo from '../images/photo.jpg';
import carpet from '../images/carpets.jpg';
import doormat from '../images/doormat.jpg';
import runner from '../images/runner.jpg';


function Navbar() {
    
    return (
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="furnitureDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FURNITURE
          </a>
          <ul class="dropdown-menu" aria-labelledby="furnitureDropdown">
          <li>
              <div id="dropItem">
              <img src={chair} alt="chair" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Chairs</a>
              </div>
            </li>
            
            <li>
              <div id="dropItem">
              <img src={dining} alt="dining" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Dining sets</a>
              </div>
            </li>
            
            <li>
              <div id="dropItem">
              <img src={bookshelf} alt="bookshelf" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Bookshelves</a>
              </div>
            </li>
          </ul>
        </li>    

          
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="sofaDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SOFAS & RECLINERS
          </a>
          <ul class="dropdown-menu" aria-labelledby="sofaDropdown">
            <li>
              <div id="dropItem">
              <img src={threeseater} alt="3seater" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">3 seaters</a>
              </div>
            </li>
              
            <li>
            <div id="dropItem">
              <img src={twoseater} alt="2seater" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">2 seaters</a>
              </div>
            </li>
            
            <li>
            <div id="dropItem">
              <img src={sofaset} alt="sofaset" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Sofa sets</a>
              </div>
            </li>
          </ul>
        </li>        
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="bedsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BEDS & MATTRESSES
          </a>
          <ul class="dropdown-menu" aria-labelledby="bedsDropdown">
            <li>
            <div id="dropItem">
              <img src={beds} alt="beds" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Beds</a>
              </div>
            </li>
            <li>
            <div id="dropItem">
              <img src={kidsbeds} alt="kids beds" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Kid's beds</a>
              </div>
            </li>
            
            <li>
            <div id="dropItem">
              <img src={mattress} alt="mattress" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Mattresses</a>
              </div>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="decorDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            DECOR
          </a>
          <ul class="dropdown-menu" aria-labelledby="decorDropdown">
            <li>
            <div id="dropItem">
              <img src={curtain} alt="curtain" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Curtains</a>
              </div>
            </li>
            <li>
            <div id="dropItem">
              <img src={mirror} alt="mirrors" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Mirrors</a>
              </div>
            </li>
            
            <li>
            <div id="dropItem">
              <img src={photo} alt="photoframes" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Photoframes</a>
              </div>
              </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="carpetsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CARPETS
          </a>
          <ul class="dropdown-menu" aria-labelledby="carpetsDropdown">
            <li>
            <div id="dropItem">
              <img src={carpet} alt="carpet" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Carpets</a>
              </div>
            </li>
            <li>
            <div id="dropItem">
              <img src={doormat} alt="doormats" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Doormats</a>
              </div>
            </li>
            
            <li>
            <div id="dropItem">
              <img src={runner} alt="runners" id="drop-img" height="70px" width="80px"/>
              <a class="dropdown-item" href="#">Runners</a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search for a product" aria-label="Search"/>
        <button class="btn btn-outline-dark" id="search-btn" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
    );
}
export default Navbar;
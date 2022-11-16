import React from 'react';
import Box1 from '../images/box1.jpg';
import Box2 from '../images/box2.jpg';
import Box3 from '../images/box3.jpg';
import './Inc.css';

function Cards() {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
    <a href="#">
      <img src={Box1} class="card-img-top" alt="..." height="350px"/>
      </a>
      {/* <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div> */}
      <div class="card-footer">
        <h5 class="text-muted">NEW ARRIVALS</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <a href="#">
      <img src={Box2} class="card-img-top" alt="..." height="350px"/>
      </a>
      {/* <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div> */}
      <div class="card-footer">
        <h5 class="text-muted">OFFERS</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <a href="#">
      <img src={Box3} class="card-img-top" alt="..." height="350px"/>
      </a>
      {/* <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div> */}
      <div class="card-footer">
        <h5 class="text-muted">TOP BRANDS</h5>
      </div>
    </div>
  </div>
</div>
    );
}

export default Cards;
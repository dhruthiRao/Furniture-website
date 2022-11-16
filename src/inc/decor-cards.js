import React from 'react';
import curtains from '../images/curtains.jpg';
import mirrors from '../images/mirrors.jpg';
import bookshelf from '../images/bookshelf.jpg';
import carpets from '../images/carpets.jpg';

function Decorcards() {
    return (
        <div class="row row-cols-1 row-cols-md-2 g-4" id="decor">
  <div class="col">
    <div class="card">
        <a href="#">
      <img src={curtains} class="card-img-top" alt="..."/>
      </a>
      <div class="card-body">
        <h5 class="card-title">CURTAINS</h5>
        <p class="card-text">Available in lots of colours, patterns and materials, our curtains range lets you pick one that suits your fancy.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <a href="#">
      <img src={mirrors} class="card-img-top" alt="..."/>
      </a>
      <div class="card-body">
        <h5 class="card-title">MIRRORS</h5>
        <p class="card-text">You skip, you miss. Grab your favorite Wall Mirror design before it's too late. We caught you eyeing that Wall Mirror, get back and grab it. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <a href="#">
      <img src={bookshelf} class="card-img-top" alt="..."/>
      </a>
      <div class="card-body">
        <h5 class="card-title">BOOKSHELVES</h5>
        <p class="card-text">If there are any furniture pieces that stand to add to your space while promising ample storage, they are bookshelves.Peruse our collection of book shelves online, and find one that fits your space and aesthetic taste perfectly.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <a href="#">
      <img src={carpets} class="card-img-top" alt="..." height="405px"/>
      </a>
      <div class="card-body">
        <h5 class="card-title">CARPETS</h5>
        <p class="card-text">Style your home with Oak & Timber's exquisite collection of carpet designs and rugs. Crafted from premium and luxurious raw materials, our wide range of carpets ensure an incredibly soft feeling underfoot.</p>
      </div>
    </div>
  </div>
</div>
    );
}

export default Decorcards;
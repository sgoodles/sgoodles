import React from 'react';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Vedios from './Vedios';



function TV() {
  return (
    <div className="App">
      {/* <h1>OTT</h1> */}
      <Header />
      <Carousel />
      <Vedios />     

    </div>

  );
}

export default TV;

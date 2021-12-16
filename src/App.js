import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Vedios from './Vedios';
import Footer from './Footer';
import Movies from './Movies';
import Sports from './Sports';
import Tv from './Tv';






function App() {

  return (
    <>


      <Routes>


        <Route exact path="/" element={<Header />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/sports" element={<Sports />} />

      </Routes>


    </>
  );
}

export default App;

import {React,useState} from 'react';
import './App.css';
import Header from './Header';
import Carousel from './Carousel';
import Vedios from './Vedios';




function App() {
  const[isShowLogin,setIsShowLogin]=useState(false);
  const handleLoginClick =() =>{
    setIsShowLogin((isShowLogin)=>!isShowLogin)
  }
  return (
    <div className="App">
      {/* <h1>OTT</h1> */}
      <Header />
      <Carousel />
      <Vedios />   
      

    </div>

  );
}

export default App;

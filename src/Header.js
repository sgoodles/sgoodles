import React, { useState } from 'react';
import './Header.css';
import { Input } from "@material-ui/core";
import Carousel from './Carousel';
import Tv from './tv';





function Header({handleLoginClick}) {
    const handleClick=() => {
        handleLoginClick()
    }


    
    const [channels, setChannels] = useState("Channels");
    const [languages, setLanguages] = useState("Languages");
    const [genres, setGenres] = useState("Genres");
    const [hotstar, setHotstar] = useState("Hotstar Special");
    const [quix, setQuix] = useState("Quix Special");
    const [star, setStar] = useState("Star Jalsa");
    const [starPlus, setStarPlus] = useState("Star Plus");
    const [starVijay, setStarVijay] = useState("Star Vijay");
    const [starBharat, setStarBharat] = useState("Star Bharat");
    const [asianet, setAsianet] = useState("Asianet");
    const [starMaa, setStarMaa] = useState("Star Maa");
    const [hindi, setHidi] = useState("Hindi");
    const [bengali, setBengali] = useState("Bengali");
    const [telugu, setTelugu] = useState("Telugu");
    const [malayalam, setMalayalam] = useState("Malayalam");
    const [tamil, setTamil] = useState("Tamil");
    const [marathi, setMarathi] = useState("Marathi");
    const [english, setEnglish] = useState("English");
    const [kannada, setKannada] = useState("Kannada");
    const [cricket, setCricket] = useState("Cricket")
    const [football, setFootball] = useState("Football");
    const [badminton, setBadminton] = useState("Badminton");
    const [formula1, setFormula1] = useState("Formula 1");
    const [hockey, setHockey] = useState("Hockey");
    const [kabaddi, setKabbadi] = useState("Kabaddi");
    const [tennis, setTennis] = useState("Tennis");
    const [american, setamerican] = useState("American Football");
    const [eSports, setESports] = useState("eSports");
    const [formulaE, setFormulaE] = useState("Formula E");
    const [material, setMaterial] = useState("Material Arts");
    const [tv, setTv] = useState("TV");
    const [movies, setMovies] = useState("Movies");
    const [premium, setPremium] = useState("Premium");
    const [sports, setSports] = useState("Sports");
    const [ott, setOtt] = useState("Ott");
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-left">
                    <div class="dropdown">
                        <div class="dropbtn"><i class="fas fa-bars"></i></div>
                        <div class="dropdown-content">
                            <a href="#"><i class="fas fa-tv"></i>{channels}</a>
                            <a href="#"><i class="fas fa-language"></i>{languages}</a>
                            <a href="#"><i class="fas fa-theater-masks"></i>{genres}</a>
                        </div>
                    </div>




                    <h3>OTT</h3>
                    <span id="menu">
                        <ul>
                            <li id="categories"><a className="link" href="/tv">{tv}</a>
                                <ul>
                                    <li><a href="#">{hotstar}</a></li>
                                    <li><a href="#">{quix}</a></li>
                                    <li><a href="#">{star}</a></li>
                                    <li><a href="#">{starPlus}</a></li>
                                    <li><a href="#">{starVijay}</a></li>
                                    <li><a href="#">{starBharat}</a></li>
                                    <li><a href="#">{asianet}</a></li>
                                    <li><a href="#">{starMaa}</a></li>
                                    <li><a href="#">more...</a></li>
                                </ul>
                            </li>
                            <li id="categories" class="movies"><a href="/movies">{movies}</a>
                                <ul>
                                    <li><a href="#">{hindi}</a></li>
                                    <li><a href="#">{bengali}</a></li>
                                    <li><a href="#">{telugu}</a></li>
                                    <li><a href="#">{malayalam}</a></li>
                                    <li><a href="#">{tamil}</a></li>
                                    <li><a href="#">{marathi}</a></li>
                                    <li><a href="#">{english}</a></li>
                                    <li><a href="#">{kannada}</a></li>
                                </ul>
                            </li>
                            <li id="categories" className="sports"><a href="/sports">{sports}</a>
                                <ul>
                                    <li><a href="#">{cricket}</a></li>
                                    <li><a href="#">{football}</a></li>
                                    <li><a href="#">{badminton}</a></li>
                                    <li><a href="#">{formula1}</a></li>
                                    <li><a href="#">{hockey}</a></li>
                                    <li><a href="#">{kabaddi}</a></li>
                                    <li><a href="#">{tennis}</a></li>
                                    <li><a href="#">{american}</a></li>
                                    <li><a href="#">{eSports}</a></li>
                                    <li><a href="#">{formulaE}</a></li>
                                    <li><a href="#">{material}</a></li>


                                </ul>
                            </li>
                            <li id="categories" ><a href="/tv">{premium}</a>
                            </li>
                            <li id="categories" ><a href="/tv">{ott}</a>
                            </li>

                        </ul>
                    </span>









                </div>
                <div className="header-right">
                    <Input className="search" placeholder="Search" />
                    <i className="fas fa-search"></i>
                    <button >SUBSCRIBE</button>
                    <span onClick={handleClick} className="loginicon">Login</span>
                    
    

                </div>
            </div>



        </div>
        


    );
}

export default Header;

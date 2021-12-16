import React, { useState } from 'react';
import './Header.css';
import { Input } from "@material-ui/core";
import Carousel from './Carousel';
import Tv from './Tv';
import './login.css';
import { Link } from "react-router-dom";
import Vedios from "./Vedios";
import Footer from './Footer';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';





function Header({ handleLoginClick }) {
    // const handleClick=() => {
    //     handleLoginClick()
    // }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {

        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };



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
    const [movie, setMovie] = useState("MOVIES");
    const [premium, setPremium] = useState("PREMIUM");
    const [sport, setSport] = useState("SPORTS");
    const [ott, setOtt] = useState("OTT");
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
                            <li id="categories" class="movies"><a href="/movies">{movie}</a>
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
                            <li id="categories" className="sports"><a href="/sports">{sport}</a>
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
                    <span onClick={handleClickOpen} className="loginicon">Login</span>
                    {/* <Button variant="outlined" 
              color="primary" onClick={handleClickOpen}>
        Open My Custom Dialog
      </Button> */}
                    <Dialog open={open} onClose={handleClose}
                        PaperProps={{
                            style: {

                                border: 'none',
                                overflow: 'hidden',
                                height: '500px',
                                //   width:'500px'
                            },
                        }}
                    >


                        <div class="container">
                            <div class="screen">
                                <div class="screen__content">
                                    <form class="login">
                                        <div class="login__field">
                                            <i class="login__icon fas fa-user"></i>
                                            <input type="text" class="login__input" placeholder="User name / Email" />
                                        </div>
                                        <div class="login__field">
                                            <i class="login__icon fas fa-lock"></i>
                                            <input type="password" class="login__input" placeholder="Password" />
                                        </div>
                                        <button class="button login__submit">
                                            <span class="button__text">Log In Now</span>
                                            <i class="button__icon fas fa-chevron-right"></i>
                                        </button>
                                    </form>
                                    <div class="social-login">
                                        <h3>log in via</h3>
                                        <div class="social-icons">
                                            <a href="#" class="social-login__icon fab fa-instagram"></a>
                                            <a href="#" class="social-login__icon fab fa-facebook"></a>
                                            <a href="#" class="social-login__icon fab fa-twitter"></a>
                                        </div>
                                        <Button onClick={handleClose} color="primary"

                                        >
                                            Close
                                        </Button>
                                        <Button onClick={handleClose} color="primary" autoFocus>
                                            Yes
                                        </Button>
                                    </div>
                                </div>
                                <div class="screen__background">
                                    <span class="screen__background__shape screen__background__shape4"></span>
                                    <span class="screen__background__shape screen__background__shape3"></span>
                                    <span class="screen__background__shape screen__background__shape2"></span>
                                    <span class="screen__background__shape screen__background__shape1"></span>
                                </div>
                            </div>
                        </div>



                    </Dialog>


                </div>
            </div>


            <Carousel />
            <Vedios />
            <Footer />
        </div>



    );
}

export default Header;

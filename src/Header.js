import React from 'react';
import './Header.css';
import { Input } from "@material-ui/core";
import Carousel from './Carousel'

function Header() {
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-left">
                    <div class="dropdown">
                        <div class="dropbtn"><i class="fas fa-bars"></i></div>
                        <div class="dropdown-content">
                            <a href="#"><i class="fas fa-tv"></i>Channels</a>
                            <a href="#"><i class="fas fa-language"></i>Languages</a>
                            <a href="#"><i class="fas fa-theater-masks"></i>Genres</a>
                        </div>
                    </div>




                    <h3>OTT</h3>
                    <span id="menu">
                        <ul>
                            <li id="categories"><a className="link" href="/tv">TV</a>
                                <ul>
                                    <li><a href="#">Hotstar Special</a></li>
                                    <li><a href="#">Quix</a></li>
                                    <li><a href="#">Star Jalsa</a></li>
                                    <li><a href="#">StarPlus</a></li>
                                    <li><a href="#">Star Vijay</a></li>
                                    <li><a href="#">Star Bharat</a></li>
                                    <li><a href="#">Asianet</a></li>
                                    <li><a href="#">Star Maa</a></li>
                                    <li><a href="#">more...</a></li>
                                </ul>
                            </li>
                            <li id="categories" class="movies"><a href="/tv">Movies</a>
                                <ul>
                                    <li><a href="#">Hindi</a></li>
                                    <li><a href="#">Bengali</a></li>
                                    <li><a href="#">Telugu</a></li>
                                    <li><a href="#">Malayalam</a></li>
                                    <li><a href="#">Tamil</a></li>
                                    <li><a href="#">Marathi</a></li>
                                    <li><a href="#">English</a></li>
                                    <li><a href="#">Kannada</a></li>
                                </ul>
                            </li>
                            <li id="categories" className="sports"><a href="/tv">Sports</a>
                                <ul>
                                    <li><a href="#">Cricket</a></li>
                                    <li><a href="#">Football</a></li>
                                    <li><a href="#">Badminton</a></li>
                                    <li><a href="#">Formula 1</a></li>
                                    <li><a href="#">Hockey</a></li>
                                    <li><a href="#">Kabaddi</a></li>
                                    <li><a href="#">Tennis</a></li>
                                    <li><a href="#">American Football</a></li>
                                    <li><a href="#">eSports</a></li>
                                    <li><a href="#">Formula E</a></li>
                                    <li><a href="#">Material Arts</a></li>


                                </ul>
                            </li>
                            <li id="categories" ><a href="/tv">Premium</a>
                            </li>
                            <li id="categories" ><a href="/tv">OTT</a>
                            </li>

                        </ul>
                    </span>









                </div>
                <div className="header-right">
                    <Input className="search" placeholder="Search" />
                    <i className="fas fa-search"></i>
                    <button>SUBSCRIBE</button>
                    <span>Login</span>

                </div>
            </div>



        </div>
        


    );
}

export default Header;

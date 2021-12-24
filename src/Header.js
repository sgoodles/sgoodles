import React, {createContext } from 'react';
import './Header.css';
import { Input } from "@material-ui/core";
import Carousel from './Carousel';
import Tv from './Tv';
import Login from './login';
import './Register';
import './login.css';
import { Link } from "react-router-dom";
import Vedios from "./Vedios";
import Footer from './Footer';

export const UserContext = createContext();
const Header = () => {
    const sublists = ['Hotstar', 'Quix', 'Star', 'StarPlus', 'Star Vijay', 'Star Bharat', 'Star Maa'];
    const sublists1 = ['Hindi', 'Bengali', 'Telugu', 'Malayalam', 'Tamil', 'Marathi', 'English', 'Kannada'];
    const sublists2 = ['Cricket', 'Football', 'Badminton', 'Formula 1', 'Hockey', 'Kabbadi', 'Tennis', 'American Football', 'eSports', 'Formula E', 'Material Arts']

    const UpdatedLists = sublists.map((number) => {
        return <li><a href="#">{number}</a></li>
    });

    const UpdatedLists1 = sublists1.map((number) => {
        return <li><a href="#">{number}</a></li>
    });

    const UpdatedLists2 = sublists2.map((number) => {
        return <li><a href="#">{number}</a></li>
    });


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
                                    {UpdatedLists}
                                </ul>
                            </li>
                            <li id="categories" class="movies"><a href="/movies">Movies</a>
                                <ul>
                                    {UpdatedLists1}
                                </ul>
                            </li>
                            <li id="categories" className="sports"><a href="/sports">Sports</a>
                                <ul>
                                    {UpdatedLists2}
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
                    <button >SUBSCRIBE</button>
                    <Login />
                    <span className="loginicon">LogOut</span>

                </div>
            </div>
            <Carousel />
            <Vedios />
            <Footer />
        </div>



    );
}

export default Header;

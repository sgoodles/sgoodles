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
        <div className="header bg-gray-900 py-0 sticky visible z-1000 top-0 overflow-y-visible">
            <div className="header-content flex justify-between items-center">
                <div className="header-left pb-2 text-16xl font-normal cursor-pointer flex items-center mx-10 visible z-1000">
                    <div className="dropdown relative inline-block">
                        <div className="dropbtn border-none"><i class="fas fa-bars my-6 whitesmoke"></i></div>
                        <div className="dropdown-content">
                            <a href="#" className="no-underline block"><i class="fas fa-tv pr-4"></i>Channels</a>
                            <a href="#" className="no-underline block"><i class="fas fa-language pr-4"></i>Languages</a>
                            <a href="#" className="no-underline block"><i class="fas fa-theater-masks pr-4"></i>Genres</a>
                        </div>
                    </div>
                    <h3 className="mx-3 mr-0 my-1 whitesmoke">OTT</h3>
                    <span id="menu" className="my-0.5 #ffffffcc cursor-pointer relative ">
                        <ul className="relative m-0 p-0">
                            <li id="categories" className="relative inline"><a className="link float-left" href="/tv">TV</a>
                                <ul>
                                    {UpdatedLists}
                                </ul>
                            </li>
                            <li id="categories" class="movies relative inline"><a className="relative p-4" href="/movies">Movies</a>
                                <ul>
                                    {UpdatedLists1}
                                </ul>
                            </li>
                            <li id="categories" className="sports relative inline"><a href="/sports">Sports</a>
                                <ul>
                                    {UpdatedLists2}
                                </ul>
                            </li>
                            <li id="categories" className="relative inline"><a href="/tv">Premium</a>
                            </li>
                            <li id="categories" className="relative inline"><a href="/tv">OTT</a>
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="header-right">
                    <Input className="search mr-3" placeholder="Search" />
                    <i className="fas fa-search -ml-5 #5a6268"></i>
                    <button className="outline-0 p-1 border-none h-6 rounded cursor-pointer ml-5 text-sm font-semibold ">SUBSCRIBE</button>
                    <Login />
                    {/* <span className="loginicon">LogOut</span> */}

                </div>
            </div>
            <Carousel />
            <Vedios />
            <Footer />
        </div>



    );
}

export default Header;

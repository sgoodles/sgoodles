import React from 'react';
import './Footer.css';
import Playstore from './img/playstore.png';
import Appstore from './img/appstore.png';

const Footer=()=>{
    return (
        <div className="footer flex justify-between items-center p-10 my-1 ">
            <div className="footer-left">
                <span>About OTT</span>
                <span>Terms Of Use</span>
                <span>Privacy</span>
                <span>Policy</span>
                <span>FAQ</span>
                <span>Feedback</span>
                <span>Careers</span>
                <div className="copyright">
                © 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
                </div>
            </div>
            <div className="footer-right">
                <span>Connect With Us</span>
                <div className="icons">
                    <a href="https://github.com/karun-agarwal/ott">
                    <i className="fab fa-facebook-square"></i>
                    </a>

                    <a href="">
                    <i className="fab fa-twitter-square"></i>
                    </a>

                </div>
            </div>
            <div className="foot-right">
                <span>OTT App</span>
                <div className="App flex">
                    <a href="https://github.com/karun-agarwal/ott">
                    <img className="play" src={Playstore}/>
                    </a>

                    <a href="">
                    <img src={Appstore}/>
                    </a>

                </div>
            </div>
        </div>
    );

};
export default Footer;
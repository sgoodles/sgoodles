import React from 'react';
import './Carousel.css';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
// import {Button} from '@mui/material';

// import RandomIcon from '@@mui/icons-material/Random';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.png';
import img5 from './img/img5.jpg';

function Carousell(props) {
    const items = [
        {
            name: 'Arya',
            description: 'Aarya is forced to return to India and face her family and enemies. With multiple attacks jolting her, can she and her children escape the threats of the past?',
            image: img1
        },
        {
            name: 'Anupama',
            image:img2,
            description: 'Despite the many challenges thrown her way, Anupama begins a new chapter of her life post divorce. Head held always high, what waiting for her next?',
        },
        {
            name: 'Yeh Rishta Kya Kehlata Hai ',
            image:img3,
            description: 'Kartik, Naira and Sirats daughters are all grown up. Akshara immensely loves Aarohi. But, what happens when they are caught in a love triangle with Abhimanyu?',
        },
        {
            name: 'Ghum Hai Kisike Pyar Mein ',
            image:img4,
            description: 'NEW EPS AVAILABLE 7 DAYS BEFORE TV. Going beyond the chains of duty, Virat is slowly falling in love with Sai. But will Pakhi too let go of his broken promises?',
        },
        {
            name:'Imlie',
            image:img5,
            description: 'TODAYS EPISODE IS DELAYED. All hell breaks loose when the news of Imlie and Adityas marriage comes out in the open. Will the family accept an illegitimate Imlie as their daughter-in-law?'
        }
    ];

    return (
        <Carousel centerMode={true} 
        NavButton={({onClick, className, style, next, prev}) => {
            // Other logic
    
            return (
                <Button onClick={onClick} className={className} style={{color: "#fff",backgroundColor: "transparent",fontSize:"2.5rem",marginTop:"-60px"}}>
                    {next && <i className="fas fa-chevron-right"></i>}
                    {prev && <i className="fas fa-chevron-left"></i>}
                </Button>
            )
        }}
        >
            {items.map((item, i) => (
                <Item key={i} {...item} />
            ))}


            
        </Carousel>
    );
}

const Item = ({ name, description, image }) => {
    return (
        <>

            
            {/* <div class="carousel-container" style={{zIndex:"1"}}> */}
                <div class="carousel">
                    <div class="slider">
                        <Paper>
                        <div class="slide-content">
                            <h1 class="movie-title">{name}</h1>
                            <p class="movie-des">{description}</p>
                        </div>
                        <img src={image} alt="" width = "200" height = "200"/>
                        </Paper>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
};

export default Carousell;
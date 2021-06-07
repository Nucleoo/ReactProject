import React from 'react';
import Image from '../Images/Img1.png';
// import {NavLink} from 'react-router-dom';
import Common from '../Common';

const Home = () => {
    return (
        <div>
            <Common
                name='Innovating with official'
                imgsrc={Image}
                visit="/services"
                btname="Get Started"
            />
        </div>
    )
}

export default Home;

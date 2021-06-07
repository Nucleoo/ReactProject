import React from 'react';
import Image from '../Images/Img2.jpg';
// import { NavLink } from 'react-router-dom';
import Common from '../Common';

const About = () => {
    return (
        <div>
            <Common
                name='Grow your Business with'
                imgsrc={Image}
                visit="/contact"
                btname="Contact Us"
            />
        </div>
    )
}

export default About;

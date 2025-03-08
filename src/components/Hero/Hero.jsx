import React from 'react';
import "./hero.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Image1 from "../../assets/profile.png"

const Hero = () => {
  return (
    <section className="home section" id="home">
        <div className="home-container container grid">
            <div className="home-content grid">
               <Social/>
               
               <div className="home-img" style={{ backgroundImage: `url(${Image1})` }}></div>


               <Data />
            </div>
            <ScrollDown/>
        </div>
    </section>
  )
}

export default Hero

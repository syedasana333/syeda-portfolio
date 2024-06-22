import React from "react";
import './Hero.css';
import logo from '../../assets/logo.png';
import line from '../../assets/curved-line.png';

const Hero = () => {
    return ( 
        <main>
            <img src={logo} className="logo" />

            <h1>I'm Syeda Sana - an <span>UX Designer turned Developer</span>, now crafting digital experiences.</h1>

            <img src={line} className="lines"/>

            <p className="about">In my 8-year journey within the industry, I've had the pleasure of collaborating alongside innovative startups, established organizations and advised small teams and governmental entities alike.</p>
            <p>Being an ex-founder, I'm inherently a builder at heart. I thrive amidst motivated, curious and humble teams.</p>
            <p>Since childhood, sports have been my enduring source of inspiration, profoundly shaping my perspective, leadership approach, and day-to-day living.</p>

            
        </main>
    )
};

export default Hero;
import React from "react";
// import './Hero.css';
import logo from '../../assets/Images/logo.png';
import line from '../../assets/Images/curved-line.png';
import styles from './Hero.module.css'

const Hero = () => {
    
    return ( 
        <main>
            <img src={logo} className={styles.logo} alt="image of syeda-logo"/>

            <h1>I'm Syeda Sana - <span>From UX Design to Front-End Development</span>, now crafting digital experiences.</h1>

            <img src={line} className="lines" alt="image of wavy-lines"/>

            <p className={styles.about}> I've spent the past <b> 2 years </b> learning everything I can about UI/UX, from the basics of wireframing to the complexities of user research. Throughout my career in <b>UX design,</b> I've collaborated with startups, established organizations, and worked with teams across various sectors.</p>
            <p>With experience in UX design and a shift toward <b>front-end development, </b>I am dedicated to crafting straightforward and impactful digital experiences.</p>
            <p>My goal is to continue learning and growing, creating digital experiences that resonate with users and meet their diverse needs.</p>

            <div className={styles.straight_line}></div>
            
        </main>
    )
};

export default Hero;
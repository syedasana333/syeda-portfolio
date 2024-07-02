import React from "react";
import Hero from "../../components/Hero/Hero";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Work from "../../components/Work/Work";
import Interests from "../../components/Interests/Interests";
import Footer from "../../components/Footer/Footer";
import Archives from "../../components/Archives/Archives";
import styles from './Home.module.css';


const Home = () => {

    return(
        <>
            <Hero/>
            <Experience />
            <Education />
            <Work />
            <Archives />
            <Interests />
            <Footer/>
        </>
    )
}

export default Home;
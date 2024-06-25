import React from "react";
import Hero from "../../components/Hero/Hero";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Interests from "../../components/Interests/Interests";
import Footer from "../../components/Footer/Footer";

const Home = () => {

    return(
        <>
            <Hero/>
            <Experience />
            <Education />
            <Interests />
            <Footer/>
        </>
    )
}

export default Home;
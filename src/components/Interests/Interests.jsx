import React from "react";
import './Interests.css';
import { InterestCard } from "../../utils/Helpers";
import Interest1Img from "../../assets/interest1.png";
import Interest2Img from "../../assets/interest2.png";

const Interests = () => {
    return (
        <section className="interest-section">
            <h2>Interests</h2>

            <div className="interest-cards-container">
                <InterestCard img={Interest1Img} title="Japan, 2023" text= "I collect, collate, and document my travels extensively. A lot of my exposure and learnings come from the various cultures and people I’ve encountered along the way."/>
                <InterestCard img={Interest2Img} title="Morning routine" text= "Fitness is central to my lifestyle, encompassing a diverse range of activities such as basketball, badminton, tennis, weight-training, swimming, and recently, running."/>
            </div>

            <div className="straight-line"></div>

            

        </section>
    )
};

export default Interests;
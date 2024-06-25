import React from "react";
import './Interests.css';
import { InterestCard } from "../../utils/Helpers";
import data from "../../utils/data.json"

// IMPORT IMAGES

import BookImage from "../../assets/Book.png";
import GymImage from "../../assets/Gym.png";

// MAP IMAGE KEY TO IMPORT IMAGES

const imageMap = {
    Book: BookImage,
    Gym: GymImage
};

const Interests = () => {
    return (
        <section className="interest-section">
            <h2>Interests</h2>

            <div className="interest-cards-container">
                {
                    data.interest.map((elem) => {
                        return <InterestCard img={imageMap[elem.img]} title={elem.title} text={elem.text} key={elem.id}/>
                    })
                }
            </div>

            <div className="straight-line"></div>

            

        </section>
    )
};

export default Interests;
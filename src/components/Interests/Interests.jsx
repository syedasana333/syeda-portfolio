import React from "react";
import styles from './Interests.module.css';
import data from "../../utils/data.json";


// IMPORT IMAGES

import BookImage from "../../assets/Images/Book.png";
import GymImage from "../../assets/Images/Gym.png";

// MAP IMAGE KEY TO IMPORT IMAGES

const imageMap = {
    Book: BookImage,
    Gym: GymImage
};

const Interests = () => {
    return (
        <section className={styles.interest_section}>
            <h2>Interests</h2>

            <div className={styles.interest_cards_container}>
                {
                    data.interest.map((elem) => {
                        return (
                            <div className="interest_container" key={elem.id}>
                                <img src={imageMap[elem.img]} alt="image of interest" className={styles.interest_img}/>
                                <p className={styles.interest_title}>{elem.title}</p>
                                <p className={styles.interest_text}>{elem.text}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className={styles.straight_line}></div>
            

        </section>
    )
};

export default Interests;
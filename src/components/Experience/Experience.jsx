import React from "react";
import './Experience.css';
import { InfoCard } from "../../utils/Helpers";
import data from '../../utils/data.json';

const Experience = () => {
    return (
        <section className="experience-section">
            <h2>Experience</h2>

            <div className="experience-container">
                {
                    data.experience.map((elem) => {
                        return <InfoCard title={elem.title} category={elem.category} year={elem.year} key={elem.id}/>
                    })
                }
            </div>

        </section>
    )
};

export default Experience;
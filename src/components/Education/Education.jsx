import React from "react";
import './Education.css';
import { InfoCard } from "../../utils/Helpers";
import data from "../../utils/data.json"

const Education = () => {
    return (
        <section className="education-section">
            <h2>Education</h2>

            <div className="education-container">
                {
                    data.education.map((elem) => {
                        return <InfoCard title={elem.title} category={elem.category} year={elem.title} key={elem.id}/>
                    })
                }
            </div>

        </section>
    )
};

export default Education;
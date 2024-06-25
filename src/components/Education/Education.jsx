import React from "react";
import './Education.css';
import { InfoCard } from "../../utils/Helpers";

const Education = () => {
    return (
        <section className="education-section">
            <h2>Education</h2>

            <div className="education-container">
                <InfoCard title="Ethiraj" category="B.sc Computer Science" year="2019 - 2022"/>
                <InfoCard title="Crescent" category="12th grade" year="2018 - 2019"/>
                <InfoCard title="Don Bosco" category="10th grade" year="2016 - 2017"/>
            </div>

        </section>
    )
};

export default Education;
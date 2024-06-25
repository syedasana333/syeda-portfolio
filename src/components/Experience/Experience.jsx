import React from "react";
import './Experience.css';
import { InfoCard } from "../../utils/Helpers";

const Experience = () => {
    return (
        <section className="experience-section">
            <h2>Experience</h2>

            <div className="experience-container">
                <InfoCard title="Upskillist" category="Ed-tech" year="2024 - present"/>
                <InfoCard title="Sensegrass" category="Agri-tech" year="2023 - 2023"/>
                <InfoCard title="Fibo" category="Health & Fitness" year="2022 - 2023"/>
            </div>

        </section>
    )
};

export default Experience;
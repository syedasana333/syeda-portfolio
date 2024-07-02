import React from "react";
import styles from './Experience.module.css';
import InfoCard  from "../InfoCard/InfoCard";
import data from '../../utils/data.json';

const Experience = () => {
    return (
        <section className={styles.experience_section}>
            <h2>Experience</h2>

            <div className={styles.experience_container}>
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
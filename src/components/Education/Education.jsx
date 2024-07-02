import React from "react";
import styles from './Education.module.css';
import InfoCard from "../InfoCard/InfoCard";
import data from "../../utils/data.json"

const Education = () => {
    return (
        <section className={styles.education_section}>
            <h2>Education</h2>

            <div className={styles.education_container}>
                {
                    data.education.map((elem) => {
                        return <InfoCard title={elem.title} category={elem.category} year={elem.year} key={elem.id}/>
                    })
                }
            </div>

        </section>
    )
};

export default Education;
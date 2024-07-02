import React from "react";
import styles from "./Work.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../utils/data.json";

const Work = () => {
  return (
    <section className={styles.work_section}>
      <h2>Recent work</h2>

      <div className={styles.work_list_container}>
        {data.Work.map((elem) => {
          return (
            <ProjectCard
              img={elem.img}
              title={elem.title}
              role={elem.role}
              link={elem.link}
              key={elem.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;

import React from "react";
import style from "./Archives.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import data from "../../utils/data.json";
import { MdOutlineArrowOutward as Arrow} from "react-icons/md";


const Archives = () => {
  return (
    <section className={style.archives_section}>
      <h2>From the Archives</h2>

      <div className={style.archives_list_container}>

        {data.Archive.map((elem) => {
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

export default Archives;

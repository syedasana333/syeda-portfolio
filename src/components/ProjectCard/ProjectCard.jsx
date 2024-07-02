import React from "react";
import style from './ProjectCard.module.css';

const ProjectCard = ({img, title, role, link}) => {
    
    return (
        <a className={style.project_container} href={link} target="_blank">
            <img src={img} className={style.project_img}/>
            <h3>{title}<span></span></h3>
            <p className={style.role}>{role}</p>
        </a>
    )
}

export default ProjectCard;
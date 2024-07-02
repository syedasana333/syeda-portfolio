import React from 'react';
import style from './InfoCard.module.css';

const InfoCard = ({title, category, year}) => {
    return (
        <div className={style.info_container}>
            <p className={style.card_title}>{title}</p>
            <p className={style.info_text}>{category}</p>
            <p className={style.info_text}>{year}</p>
        </div>
    )
};

export default InfoCard;
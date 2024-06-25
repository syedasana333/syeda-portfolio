import { MdOutlineArrowOutward as ArrowOutward} from "react-icons/md";

export const InfoCard = ({title, category, year}) => {
    return (
        <div className="info-container">
            <p className="card-title">{title}</p>
            <p className="info-text">{category}</p>
            <p className="info-text">{year}</p>
        </div>
    )
};


export const InterestCard = ({img, title, text}) => {
    return (
        <div className="interest-container">
            <img src={img} alt="image of interest" className="interest-img"/>
            <p className="interest-title">{title}</p>
            <p className="interest-text">{text}</p>
        </div>
    )
};


export const SocialCard = ({SocialLink, SocialLinkName}) => {
    return (
        <a href={SocialLink} target="_blank">{SocialLinkName}<ArrowOutward/>
        </a>
    )
};
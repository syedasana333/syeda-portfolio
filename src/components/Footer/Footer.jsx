import { MdOutlineArrowOutward as ArrowOutward} from "react-icons/md";
import React from "react";
import './Footer.css';
import { SocialCard } from "../../utils/Helpers";
import data from "../../utils/data.json";

const Footer = () => {
    return (
        <footer>
            <div className="social-links-container">

                {
                    data.SocialLinks.map((elem) => {
                        return <SocialCard SocialLink={elem.SocialLink} SocialLinkName={elem.SocialLinkName} key={elem.id}/>
                    })
                }
            </div>

            <p className="copy-right">&copy; 2024 Syeda Sana</p>
        </footer>
    )
};

export default Footer;

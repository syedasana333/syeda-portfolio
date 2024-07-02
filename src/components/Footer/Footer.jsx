import { MdOutlineArrowOutward as ArrowOutward} from "react-icons/md";
import React from "react";
import styles from './Footer.module.css';
import data from "../../utils/data.json";

const Footer = () => {
    return (
        <footer>
            <div className={styles.social_links_container}>

                {
                    data.SocialLinks.map((elem) => {
                        return <a href={elem.SocialLink} target="_blank" key={elem.id}>{elem.SocialLinkName}<ArrowOutward/></a>
                    })
                }
            </div>

            <p className={styles.copy_right}>&copy; 2024 Syeda Sana</p>
        </footer>
    )
};

export default Footer;

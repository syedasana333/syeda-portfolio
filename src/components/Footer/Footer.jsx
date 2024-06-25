import { MdOutlineArrowOutward as ArrowOutward} from "react-icons/md";
import React from "react";
import './Footer.css';


const Footer = () => {
    return (
        <footer>
            <div className="social-links-container">
                <a href="https://www.linkedin.com/in/syeda-sana-designing/" target="_blank">LinkedIn<ArrowOutward/></a>
                <a href="https://linktr.ee/syeda_sana" target="_blank">Contact<ArrowOutward/></a>
                <a href="https://github.com/syedasana333" target="_blank">Github<ArrowOutward/></a>
                <a href="https://drive.google.com/file/d/1OH2IHXxD4XWa4txJWmVNnXhIEgFGZwak/view" target="_blank">Resume<ArrowOutward/></a>
            </div>

            <p className="copy-right">&copy; 2024 Syeda Sana</p>
        </footer>
    )
};

export default Footer;

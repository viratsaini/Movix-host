import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGit,
    FaGitSquare,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    // Define sample social media links
    const socialMediaLinks = {
        facebook: "https://www.facebook.com/sainiji.guru",
        instagram: "https://www.instagram.com/virat_saini___/",
        github: "https://github.com/viratsaini",
        linkedin: "https://www.linkedin.com/in/virat-saini/",
    };

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    {/* Your existing info text */}
                </div>
                <div className="socialIcons">
                    {/* Add onClick handlers to open social media links */}
                    
                    <span className="icon" onClick={() => window.open(socialMediaLinks.linkedin, "_blank")}>
                        <FaLinkedin />
                    </span>
                    <span className="icon" onClick={() => window.open(socialMediaLinks.github, "_blank")}>
                        <FaGithub />
                    </span>
                    
                    <span className="icon" onClick={() => window.open(socialMediaLinks.instagram, "_blank")}>
                        <FaInstagram />
                    </span>
                    <span className="icon" onClick={() => window.open(socialMediaLinks.facebook, "_blank")}>
                        <FaFacebookF />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

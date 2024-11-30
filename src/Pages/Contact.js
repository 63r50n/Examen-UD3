import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faLinkedin,faGithub, faGit } from "@fortawesome/free-brands-svg-icons";


function Contact(){
    return(
        <section  className=" contact">
            <h2>Contactame</h2>
            <p> Puedes contactarme a travez de mi correo electronico:</p>
            <h2>gersonv.gonzales@gmail.com</h2>
            <p>Sigueme en mis redes sociales:</p>

            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </section>
    );
}

export default Contact;
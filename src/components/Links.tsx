import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Links: React.FC = () => {
  return (
    <>
      <h5>Important Links:</h5>
      <ul>
        <li>
          <a
            href="https://docs.google.com/document/d/1KsBUzuq1yEyNMH401huHguZ26BNXvFTGhRA0u6Kx8gQ/edit?usp=sharing"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFileAlt} /> <span>CV</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/drosatom" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/aros88" target="_blank">
            <FontAwesomeIcon icon={faGithub} /> <span>Github</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/paintd88" target="_blank">
            <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="https://www.artstation.com/aros88" target="_blank">
            <FontAwesomeIcon icon={faArtstation} /> <span>ArtStation</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Links;

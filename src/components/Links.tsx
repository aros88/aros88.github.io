import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faArtstation
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const Links: React.FC = () => {
  return (
    <>
      <h5>Important Links:</h5>
      <ul>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faFileAlt} /> <span>CV</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /> <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faGithub} /> <span>Github</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <FontAwesomeIcon icon={faArtstation} /> <span>ArtStation</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Links;

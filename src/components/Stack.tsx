import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJsSquare,
  faCss3,
  faJava,
  faReact,
  faPython,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { faGem } from "@fortawesome/free-regular-svg-icons";
import {
  SiRubyonrails,
  SiPostgresql,
  SiSpringboot
} from "react-icons/si";

const Stack: React.FC = () => {
  return (
    <>
      <h5>Stack:</h5>
      <ul>
        <li title="HTML5">
          <FontAwesomeIcon icon={faHtml5} />
        </li>
        <li title="Javascript">
          <FontAwesomeIcon icon={faJsSquare} />
        </li>
        <li title="CSS3">
          <FontAwesomeIcon icon={faCss3} />
        </li>
        <li title="ReactJS">
          <FontAwesomeIcon icon={faReact} />
        </li>
        <li title="NodeJS">
          <FontAwesomeIcon icon={faNode} />
        </li>
        <li title="Python">
          <FontAwesomeIcon icon={faPython} />
        </li>
        <li title="Java">
          <FontAwesomeIcon icon={faJava} />
        </li>
        <li title="Spring Boot">
          <SiSpringboot title="Spring Boot" />
        </li>
        <li title="Ruby">
          <FontAwesomeIcon icon={faGem} />
        </li>
        <li title="Rails">
          <SiRubyonrails title="Rails" />
        </li>
        <li title="PostgreSQL">
          <SiPostgresql title="PostgreSQL" />
        </li>
      </ul>
    </>
  );
};

export default Stack;

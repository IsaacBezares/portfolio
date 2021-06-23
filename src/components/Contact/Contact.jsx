import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./Contact.css"


class Contact extends Component{


    render() {
        return(
          <div className={"contact"}>
            <ul className={"contact-list"}>
                <li className={"contact-item"}>
                    <a href={"https://www.linkedin.com/in/isaac-bezares-barajas-b290a6196/"}
                       className={"contact-link contact-link-linkedin"} target={"_blank"} rel={"noreferrer"}>
                        <span className={"contact-label"}>Linkedin</span>
                        <FontAwesomeIcon icon={["fab","linkedin"]}/>
                    </a>
                </li>
                <li className={"contact-item"}>
                    <a href={"https://github.com/IsaacBezares"} className={"contact-link contact-link-github"}
                       target={"_blank"} rel={"noreferrer"}>
                        <span className={"contact-label"}>Github</span>
                        <FontAwesomeIcon icon={["fab","github"]}/>
                    </a>
                </li>
                <li className={"contact-item"}>
                    <a href={"mailto:isaacbezares@hotmail.com"} className={"contact-link contact-link-email"}
                       target={"_blank"} rel={"noreferrer"}>
                        <span className={"contact-label"}>Email</span>
                        <FontAwesomeIcon icon={["fas","envelope"]}/>
                    </a>
                </li>
                <li className={"contact-item"}>
                    <a href={"https://drive.google.com/file/d/1r3q2ONimoPdr9J5EpscNW2EL_qyyH2Y1/view?usp=sharing"}
                       className={"contact-link contact-link-resume"} target={"_blank"} rel={"noreferrer"}>
                        <span className={"contact-label"}>Resume</span>
                        <FontAwesomeIcon icon={["fas","portrait"]}/>
                    </a>
                </li>
            </ul>
          </div>
        );
    }
}

export default Contact;
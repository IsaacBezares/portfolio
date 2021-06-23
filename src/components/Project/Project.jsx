import {Component} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./Project.css";

class Project extends Component {

    constructor(props) {
        super(props);

        this.state = {showProject: false};

        this.showProject = this.showProject.bind(this);
        this.hideProject = this.hideProject.bind(this);
    }

    showProject(e) {
        this.setState({showProject: true})
    }

    hideProject(e) {
        this.setState({showProject: false})
    }

    render() {
        const project = this.props.project;
        const isPrivate = project.code === "private";
        return (
            <div className={"project"}>
                <div className={"project-item"}>
                    <img className={"project-img"} src={project.img} alt={"Isaac Bezares Brand Logo"}/>
                    <div className={"project-overlay"}>
                        <div className={"project-buttons"}>
                            <button className={"project-button"} onClick={this.showProject}>
                                <FontAwesomeIcon icon={"eye"}/>
                                View Project
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`project-background ${this.state.showProject ? "project-background-show" : ""} `}>
                    <div className={`project-modal ${this.state.showProject ? "project-modal-show" : ""}`}>
                        <button className={"project-close"} onClick={this.hideProject}><FontAwesomeIcon icon={"times"}/>
                        </button>

                        <div className={"project-left"}>
                            <img className={"project-img-modal"} src={project.img} alt={"Project Image"}/>
                        </div>

                        <div className={"project-right"}>
                            <div className={"project-label"}>Project</div>
                            <div className={"project-name"}>{project.name}</div>
                            <ul className={"project-skills"}>
                                {project.technologies.map(technology =>
                                    <li className={"project-skill"}>{technology.name}</li>
                                )}
                            </ul>
                            <div className={"project-label"}>About</div>
                            <p className={"project-summary"}>
                                {project.summary}
                            </p>
                            <a href={project.demo} className="project-button project-button-modal" target="_blank"
                               rel={"noreferrer"}><FontAwesomeIcon icon={"eye"}/>Demo</a>
                            {isPrivate
                                ? <button className={"project-button project-button-modal"} disabled={isPrivate}>
                                    <FontAwesomeIcon icon={"eye"}/>Private</button>
                                : <a href={project.code} className="project-button project-button-modal" target="_blank"
                                     rel={"noreferrer"}><FontAwesomeIcon icon={"code"}/>Code</a>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
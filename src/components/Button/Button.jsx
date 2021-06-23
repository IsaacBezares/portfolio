import {Component} from "react";
import "./Button.css"

class ButtonComponent extends Component{
    render() {
        return (
            <a className={"button"} href={this.props.url}>
                <button>{this.props.text}</button>
                <button className={"button_bottom"}>{this.props.text}</button>
            </a>
        );
    }
}

export default ButtonComponent;
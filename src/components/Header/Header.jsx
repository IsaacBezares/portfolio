import "./Header.css"
import Logo1x from "../../assets/Logo1x.png"
// import Logo2x from "../../assets/"
import {Component} from "react";


class Header extends Component {
    render() {
        return (
            <div className={"header"}>
                <a href={"/portfolio/#"} className={"brand_logo"}>
                    <source srcSet={Logo1x + " 1x"} media={"(min-width: 120em)"}/>
                    <img srcSet={Logo1x + " 1x"} alt={"Isaac B. Brand Logo"}/>
                </a>
            </div>
        );
    }
}

export default Header;
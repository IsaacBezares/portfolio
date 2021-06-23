import Router from "./Router";

import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";

import {Grid} from "@material-ui/core";

import "./App.css"
import {faEye, faCode, faPortrait, faTimes, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/Footer/Footer";
import {Component} from "react";

library.add(faEye, faCode, faPortrait, faTimes, faGithub, faLinkedin, faEnvelope);


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {loadState:false}
        this.handleLoadChange = this.handleLoadChange.bind(this);
    }

    handleLoadChange(loadState){
        this.setState({loadState : loadState})
    }

    render() {
        const loadState = this.state.loadState;

        return (
            <div>
                <Contact/>
                <Grid container direction={"column"} justify={"space-between"}>
                    <Header/>
                    <Router onStateChange={this.handleLoadChange}/>
                    {loadState && <Footer/>}
                </Grid>
            </div>
        );
    }

}

export default App;

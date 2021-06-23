import {Component} from "react";
import "./Portfolio.css"
import Projects from "../Projects/Projects";
import {Grid, Slide} from "@material-ui/core";

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: false};
        this.load();
    }

    load() {
        setTimeout(() => {
            this.setState({loading: true});
        }, 100)
        setTimeout(() => {
            this.props.onStateChange(true);
        }, 500)
    }

    componentWillUnmount() {
        this.props.onStateChange(false);
    }

    render() {
        return (
            <main className={"main"}>
                <Slide direction="down" in={this.state.loading} mountOnEnter unmountOnExit timeout={500}>
                    <Grid container direction={"column"}>
                        <h2 className={"portfolio-title"}>Portfolio</h2>
                        <span className={"portfolio-sub"}>// These are my favorite projects I've worked on for the past year. Have a look around and make sure to hit me up!</span>
                    </Grid>
                </Slide>
                <Projects/>
            </main>
        );
    }
}

export default Portfolio;
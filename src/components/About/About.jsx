import "./About.css";
import {Grid, Zoom} from '@material-ui/core';
import {Component} from "react";
import ButtonComponent from "../Button/Button";
import Subtitle from "../Subtitle/Subtitle";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {loading: false}
        this.load();
    }

    load() {
        setTimeout(() => {
            this.setState({loading: true})
        }, 200);
        setTimeout(() => {
            this.props.onStateChange(true);
        },500)

    }

    componentWillUnmount() {
        this.props.onStateChange(false);
    }

    render() {
        return (
            <main>
                <Zoom in={this.state.loading} timeout={500}>
                    <Grid container alignItems="center" item direction="column" justify={"center"} className={"about"}>
                        <h1 className={"title"}>Hey, it's Isaac Bezares</h1>
                        <Subtitle text={"I'm a mobile & back-end devoloper currently based in Chiapas, Mexico"}/>
                        <Subtitle text={"Hit me up and let's create something special"}/>
                        <ButtonComponent text={"view projects"} url={"/portfolio"}/>
                    </Grid>
                </Zoom>
            </main>
        );
    }
}

export default About;
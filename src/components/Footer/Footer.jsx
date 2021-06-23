import {Grid} from "@material-ui/core";
import "./Footer.css"
import {Component} from "react";

class Footer extends Component{
    render() {
        return(
            <Grid container item direction="row" justify="center" alignItems={"center"} className={"footer"}>
                <Grid item sm={6}>
                    <span className={"gray-text"}>&copy; 2021 Isaac Bezares. All Rights Reserved.</span>
                </Grid>
                <Grid item container sm={6} justify={"space-around"}>
                    <Grid item >
                        <span className={"gray-text"}>Email: </span>
                        <span className={"white-text"}>isaacbezares@hotmail.com</span>
                    </Grid>
                    <Grid item>
                        <span className={"gray-text"}>Tel: </span>
                        <span className={"white-text"}>+52 9616571174</span>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Footer;
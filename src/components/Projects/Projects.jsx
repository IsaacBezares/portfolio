import {Component} from "react";
import "./Projects.css"
import {Grid, Hidden, Slide} from "@material-ui/core";
import Project from "../Project/Project";

import portfolioImg from "../../assets/portfolio.png";
import kitchefLogo from "../../assets/kitchef.png"
import ecommerceLogo from "../../assets/ecommerce.png"


class Projects extends Component {

    load() {
        setTimeout(() => {
            this.setState({loading: true});
        }, 200);
    }

    render() {

        const loading = this.state.loading;

        return (
            <div className={"portfolio"}>
                <Grid container spacing={6}>
                    <Hidden mdUp>
                        <Slide direction="right" in={loading} mountOnEnter unmountOnExit timeout={500}>
                            <Grid container item>
                                <Project project={this.projects.ecommerce}/>
                            </Grid>
                        </Slide>
                        <Slide direction="left" in={loading} mountOnEnter unmountOnExit timeout={500}>
                            <Grid container item>
                                <Project project={this.projects.kitchef}/>
                            </Grid>
                        </Slide>
                        <Slide direction="right" in={loading} mountOnEnter unmountOnExit timeout={500}>
                            <Grid container item>
                                <Project project={this.projects.portfolio}/>
                            </Grid>
                        </Slide>
                    </Hidden>

                    <Hidden smDown>
                        <Grid container item direction={"row"} spacing={6} xs={12}>
                            <Slide direction="right" in={loading} mountOnEnter unmountOnExit timeout={500}>
                                <Grid container item sm={6} xs={12}>
                                    <Project project={this.projects.ecommerce}/>
                                </Grid>
                            </Slide>
                            <Slide direction="left" in={loading} mountOnEnter unmountOnExit timeout={500}>
                                <Grid container item sm={6} xs={12}>
                                    <Project project={this.projects.kitchef}/>
                                </Grid>
                            </Slide>
                        </Grid>
                        <Grid container item direction={"row"} xs={12} spacing={6}>
                            <Slide direction="right" in={loading} mountOnEnter unmountOnExit timeout={500}>
                                <Grid container item sm={6} xs={12}>
                                    <Project project={this.projects.portfolio}/>
                                </Grid>
                            </Slide>
                        </Grid>
                    </Hidden>

                </Grid>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {loading: false};
        this.load = this.load.bind(this);
        this.load();

        this.projects =
            {
                ecommerce:
                    {
                        name: 'E-Commerce',
                        summary: "The reason behind this project was to test my skills and reinforce my knowledge by developing a fully functional traditional ecommerce application, with payment processing, shopping cart, search interface, session manager, orders, etc.\n\n" +
                            "One of my objectives was to do the project correctly, with the best practices that I knew of and that i could find, throughout the development I improved as a programmer because trying to do the best possible presented many challenges that I had to solve on my own. I learned to read documentation and improved my research skills.\n\n" +
                            "With this project I learned functional programming, consume third-party apis in Android native, to use projections in Rest API’s, implement authentication by token, consume an API with Retrofit2 and use observers with RxJava",
                        img: ecommerceLogo,
                        demo: 'https://play.google.com/store/apps/details?id=com.bessarez.ecommercemobile',
                        code: 'https://github.com/IsaacBezares/ecommerce-mobile',
                        technologies:
                            [
                                {name: 'Java'},
                                {name: 'Spring Boot'},
                                {name: 'JWT'},
                                {name: 'Projections'},
                                {name: 'RxJava'},
                                {name: 'Error handling'},
                                {name: 'Stripe'},
                                {name: 'PostgreSQL'},
                                {name: 'Jetpack'},
                                {name: 'Android studio'},
                                {name: 'Retrofit2'},
                                {name: 'Streams'},
                                {name: 'Multilingual'},
                            ]
                    },
                kitchef:
                    {
                        name: 'Kitchef',
                        summary: "Has it ever happened to you that you have no idea what to do for lunch today or throughout the week?\n" +
                            "Kitchef is a meal planner that provides you with a menu of 3 meals per day so that you don't have to think or decide what to cook, the application adapts to your tastes and opens a world to new recipes that you did not know of.\n\n" +
                            "In this project I was responsible for the backend implementation, to expand my repertoire of skills I decided to implement a non-relational database like MongoDB, use a framework that I hadn't used actively like NodeJS, and a API language different from rest like GraphQL .\n\n" +
                            "Thanks to my previous experience with API development I managed to adapt to this new environment easily, the most challenging thing in this project was the change of thinking from SQL to NOSQL as I didn't want to make the mistake of relating all the collections as I would in SQL, I had to research from different sources to implement a schema that would take all the advantages of a non-relational database.",
                        img: kitchefLogo,
                        demo: 'https://github.com/IsaacBezares/kitchef-back',
                        code: 'https://github.com/IsaacBezares/kitchef-back',
                        technologies:
                            [
                                {name: 'NodeJS'},
                                {name: 'ExpressJS'},
                                {name: 'MongoDB'},
                                {name: 'Mongoose'},
                                {name: 'GraphQL'},
                                {name: 'JWT'},
                                {name: 'SendGrid'},
                            ]
                    },
                portfolio:
                    {
                        name: 'Portfolio',
                        summary: 'The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff. \n\n This is a Single Page Application and is built using ReactJS.',
                        img: portfolioImg,
                        demo: 'https://isaacbezares.github.io/',
                        code: 'https://github.com/IsaacBezares/portfolio',
                        technologies:
                            [
                                {name: 'HTML & CSS'},
                                {name: 'JavaScript'},
                                {name: 'ReactJS'},
                                {name: 'Responsive'},
                                {name: 'UI/UX'},
                            ]
                    }
            }
    }
}

export default Projects;
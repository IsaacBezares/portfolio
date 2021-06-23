import {
    BrowserRouter as RouterPackage,
    Switch,
    Route
} from 'react-router-dom';

import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import {Component} from "react";

class Router extends Component{
    render() {
        return (
            <RouterPackage>
                <Switch>
                    <Route exact path='/'>
                        <About onStateChange={this.props.onStateChange}/>
                    </Route>
                    <Route exact path='/portfolio'>
                        <Portfolio onStateChange={this.props.onStateChange}/>
                    </Route>
                </Switch>
            </RouterPackage>
        );
    }
}

export default Router;
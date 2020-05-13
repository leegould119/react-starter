import React, { Component } from 'react'
import { Router, Route, Switch } from "react-router-dom";

import history from "./common/history";
// import files 
import Navigation from "./common/nagivation";
import Home from "../pages/Home";
import Page2 from "../pages/Page2";
export default class componentName extends Component {
    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <Navigation />

                    <Switch>
                        <Route exact path="/" render={props => <Home {...props} />} />
                        <Route path="/page-two" render={props => <Page2 {...props} />} />
                    </Switch>

                </Router>
            </React.Fragment>

        )
    }
}

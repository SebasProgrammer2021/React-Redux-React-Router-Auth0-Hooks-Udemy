import React, { Component } from "react";
import ComponentA from "./functionalComponents/ComponentA";
import { ComponentB } from "./functionalComponents/ComponentB";
import { ComponentC } from "./functionalComponents/ComponentC";

import { Route, Route } from 'react-router'

import React, { Component } from 'react'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="componentA" component={ComponentA} />
                    <Route path="componentB" component={ComponentB} />
                    <Route path="componentC" component={ComponentC} />
                </Router>
            </div>
        )
    }
}

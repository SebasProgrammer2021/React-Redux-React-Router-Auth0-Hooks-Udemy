import React, { Component, useState } from 'react'

import { ComponentA } from "./functionalComponents/ComponentA"
import { ComponentB } from "./functionalComponents/ComponentB";
import { ComponentC } from "./functionalComponents/ComponentC";
import { callback } from './functionalComponents/callback';

import Container1 from './containers/Container1';
import Header from './containers/header';
// import history from './utils/history';

// import { Router, Route } from 'react-router'//no sirve
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class MainRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Container1 />} />
                    <Route path='/component/:id' element={<ComponentA />} />
                    {/* <Route path='componentB' element={<ComponentB />} />
                    <Route path='componentC' element={<ComponentC />} /> */}
                </Routes>
            </BrowserRouter>
        )
    }
}
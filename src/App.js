
import React, { Component } from "react";
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';
import Error from './Components/Error.js';
import Details from './Components/Details.js';
import WorldMap from './Components/WorldMap.js'

class App extends Component {
    render() {
        return (
    <HashRouter basename='/'>
                <Switch>
                    <Route path='/' component={WorldMap} exact />
                    <Route path='/details' component={Details} />
                    
                    <Route component={Error} /> 
                </Switch>

            </HashRouter>
            )}
}

export default App;
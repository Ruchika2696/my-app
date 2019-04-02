//App component for routing
import React, { Component } from "react";
import {BrowserRouter, Route, Switch, HashRouter} from 'react-router-dom';
import Error from './Components/Error.js';
import Details from './Components/Details.js';
import LosAngeles from './Components/LosAngeles.js'

class App extends Component {
    render() {
        return (
    <HashRouter basename='/'>
                <Switch>
                    <Route path='/' component={LosAngeles} exact /> //home page set to LosAngeles component
                    <Route path='/details' component={Details} /> //path to Details component
                    
                    <Route component={Error} /> //handles invalid path
                </Switch>

            </HashRouter>
            )}
}

export default App;
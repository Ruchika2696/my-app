
import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from './Components/Error.js';
import Details from './Components/Details.js';
import WorldMap from './Components/WorldMap.js'

class App extends Component {
    const history = createHistory({
        basename: process.env.PUBLIC_URL,
    });
        const store = configureStore({ history });
    render() {
       
        return (
            <Provider store={store}>
    <ConnectedRouter history={history}>
                <Switch>
                    <Route path='/' component={WorldMap} exact />
                    <Route path='/details' component={Details} />
                    
                    <Route component={Error} /> 
                </Switch>

            </ConnectedRouter>
    </Provider>
            )}
}

export default App;
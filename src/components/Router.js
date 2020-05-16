import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import App from './App';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
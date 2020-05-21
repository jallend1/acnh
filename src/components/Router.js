import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import App from './App';
import Songs from './Songs';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/songs">
                    <Songs />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
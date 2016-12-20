import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./app/components/app";
import Home from './app/components/home/home';
import NotFound from './app/components/commons/NotFound';

const router = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path="/">
            <IndexRoute component={Home} />
            <Route path="app" component={App} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

export { router };
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
            </Switch>
        </Router>
    );
}

export default App;

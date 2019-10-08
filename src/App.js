import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/signin' component={SignInUpPage} />
            </Switch>
        </Router>
    );
}

export default App;

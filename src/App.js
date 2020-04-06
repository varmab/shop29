import React, {useState, useEffect} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import ShopPage from './shop/containers/ShopPage'
import AboutPage from './shared/containers/AboutPage'
import ContactPage from './shared/containers/ContactPage'
import RegisterPage from './account/containers/RegisterPage'
import LoginPage from './account/containers/LoginPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ShopPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

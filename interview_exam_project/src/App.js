import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Addnews from './Addnews';
import Editnews from './Editnews';

import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Addnews" component={Addnews} />
            <Route exact path="/Editnews" component={Editnews} />
          </switch>
        
        </BrowserRouter>
      </Fragment>
    );
  }
}


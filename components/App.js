import React, { Component, Fragment } from 'react';
import { createElement } from 'glamor/react';
/* @jsx createElement */

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div
          css={{
            fontFamily: 'proxima-nova'
          }}
        >
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

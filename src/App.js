import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Surveyone from './components/surveyone/surveyone';
import Surveytwo from './components/surveytwo/surveytwo';
import Navigation from './UI/navigation/navigation';
import { Route , BrowserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route path="/" exact component={ Surveyone } />  
          <Route path="/surveytwo" exact component={ Surveytwo } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

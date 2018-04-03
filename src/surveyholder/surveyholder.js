import React, { Component } from 'react';
// import classes from './surveyholder.css';
import welcome from './../components/welcome/welcome';
import Generalinfo from './../components/generalinfo/generalinfo';
import Preferences from './../components/preferences/preferences';
import Navigation from './../UI/navigation/navigation';
import { Route , BrowserRouter } from 'react-router-dom'; 


class Surveyholder extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Route path="/" exact component={ welcome } />  
          <Route path="/generalinfo" exact component={ Generalinfo } />
          <Route path="/preferences" exact component={ Preferences } />
        </div>
      </BrowserRouter>
    );
  }
}

export default Surveyholder;

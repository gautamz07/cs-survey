import React, { Component } from 'react';
import './App.css';
// import welcome from './components/welcome/welcome';
// import Generalinfo from './components/generalinfo/generalinfo';
// import Preferences from './components/preferences/preferences';
// import Navigation from './UI/navigation/navigation';
import { Route , BrowserRouter } from 'react-router-dom'; 
import Surveyholder from './surveyholder/surveyholder'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Surveyholder />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

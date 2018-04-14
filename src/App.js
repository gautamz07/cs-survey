import React, { Component } from 'react';
import './App.css';
import Surveyholder from './surveyholder/surveyholder';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div className="App">
            <Surveyholder />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;

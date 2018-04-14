import React, { Component } from 'react';
import './surveyholder.css';
import Welcome from './../components/welcome/welcome';
import Generalinfo from './../components/generalinfo/generalinfo';
import Preferences from './../components/preferences/preferences';
import Navigation from './../UI/navigation/navigation';
import { Route , BrowserRouter , Switch } from 'react-router-dom'; 
import { CSSTransition , TransitionGroup } from 'react-transition-group';


class Surveyholder extends Component {
  render() {
    return (
        <BrowserRouter>
              <div className="App">
                <Navigation />
                <Route path="/" exact component={ Welcome } />  
                <Route path="/generalinfo" exact component={ Generalinfo } />
                <Route path="/preferences" exact component={ Preferences } />
              </div>

                {/* <Route render={ ({ location }) => (
                      <div className="App">
                        <Navigation />
                        <TransitionGroup>
                          <CSSTransition key={location.key}  timeout={3000} classNames="fade">
                            <Switch location={ location }>
                              <Route path="/" exact component={ Welcome } />  
                              <Route path="/generalinfo" exact component={ Generalinfo } />
                              <Route path="/preferences" exact component={ Preferences } />
                            </Switch>  
                          </CSSTransition>    
                        </TransitionGroup>          
                      </div>
                      )} /> */}
        </BrowserRouter>
        
    );
  }
}

export default Surveyholder;

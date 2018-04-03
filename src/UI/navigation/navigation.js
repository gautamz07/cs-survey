import React , { Component } from 'react';
import classes from './navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends Component {

    state = {
        activeLinks : []
    }

    _handleClick = (path) => {
        if(!this.state.activeLinks.includes(path)) {
            this.setState({
                 activeLinks : this.state.activeLinks.concat(path)
            });    
        }
    }

    render() {
        const ACTIVE = { background: '#286090', color: '#fff'};
        let activeLinks = [...this.state.activeLinks];

        return (
            <nav className={ classes.main__site__navigation }>
                <ul>
                    <li>
                        <Link to="/" 
                              onClick={ () => this._handleClick('/') } 
                              className={ classes.active } >
                            1
                        </Link>
                    </li>
                    <li>
                        <Link to={{
                                pathname : '/generalinfo'
                            }}
                                onClick={ () => this._handleClick('/generalinfo') } 
                              className={  activeLinks.includes("/generalinfo") ? classes.active: '' }
                        >
                            2
                        </Link>
                    </li>
                    <li>
                        <Link to={{
                                pathname : '/preferences'
                            }}
                              onClick={ () => this._handleClick('/preferences') } 
                              className={  activeLinks.includes("/preferences") ? classes.active: '' }    
                            >
                            3
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Navigation;
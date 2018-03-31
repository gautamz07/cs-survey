import React from 'react';
import classes from './navigation.css';
import { Link } from 'react-router-dom';

const navigation = (props) => {

    const ACTIVE = { background: '#286090', color: '#fff'}

    return (
        <nav className={ classes.main__site__navigation }>
            <ul>
                <li>
                    <Link to="/" 
                        activeClassName="active">
                        1
                    </Link>
                </li>
                <li>
                    <Link to={{
                            pathname : '/surveytwo'
                        }}
                        className={ classes.active }
                    >
                        2
                    </Link>
                </li>
                <li>
                    <Link to={{
                            pathname : '/surveythree'
                        }}>
                        3
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default navigation;
import React from 'react';
import classes from './navigation.css';

import { Link } from 'react-router-dom';

const navigation = (props) => {
    return (
        <nav className={ classes.main__site__navigation }>
            <ul>
                <li>
                    <Link to="/">
                        Survey 1
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname : '/surveytwo',
                        hash: '#kyaboltetu'
                    }}>
                        Survey 2
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default navigation;
import React from 'react';
import classes from './surveyone.css';
import { Link } from 'react-router-dom';

const surveyone = (props) => {
    return (
        <div className={ classes.screen1 }  >
            <h2>
                <Link to="/surveytwo" >
                    NEXT
                </Link>
            </h2>
        </div>
    );
}

export default surveyone;
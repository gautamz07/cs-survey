import React from 'react';
import classes from './welcome.css';
import { Link } from 'react-router-dom';

const welcome = (props) => {
    return (
        <div className={ classes.screen1 }  >
            <h2>
                <Link to="/generalinfo" >
                    NEXT
                </Link>
            </h2>
        </div>
    );
}

export default welcome;
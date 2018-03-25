import React from 'react';
import classes from './surveytwo.css';

const surveyTwo = (props) => {
    return (
        <div className={ classes.screen2 } >

            <table className={ classes.initial__survey__details__table }>
                <thead>
                    <tr>
                        <td>
                            Gender    
                        </td>
                        <td>
                             Age    
                        </td>     
                    </tr>     
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="radio" name="customer_gender" />                                     
                            <label>Male</label>
                        </td>
                        <td>
                            <input type="radio" name="customer_name" />                                   
                            <label>Less than 35</label>
                        </td>     
                    </tr>
                    <tr>
                        <td>
                            <input type="radio" name="customer_gender" />                                    
                            <label>Female</label>
                        </td>
                        <td>
                            <input type="radio" name="customer_name" />                                    
                            <label>More than 35</label>
                        </td>     
                    </tr> 
                    <tr>
                        <td colSpan="2">
                            <button className={ [classes.btn , classes["btn--fullwidth"] , classes.btn__next  ].join(' ') }>NEXT</button>
                        </td>   
                    </tr>     
                </tbody>   
            </table>

        </div>
    );
}

export default surveyTwo;
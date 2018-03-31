import React, { Component } from 'react';
import classes from './surveytwo.css';
import { Link } from 'react-router-dom';


class SurveyTwo extends Component {

    state = {
        genderRadioClick : false,
        ageRadioClick : false
    }

    _screenRadioButtonValidation = (e) => {
        
    }

    _updateRadioButtonValues = (e) => {
        let newStateOfCheckboxs = {
            genderRadioClick : Array.from(document.getElementsByName('customer_gender')).some( (elem , idx) => {  return elem.checked  }),
            ageRadioClick : Array.from(document.getElementsByName('customer_age')).some( (elem , idx) => {  return elem.checked  })
        }

        this.setState({
            ...newStateOfCheckboxs
        });
    }

    _ToggleNextScreenButton = (e) => {

        let currentState = this.state; 

        let checkboxStatus =  Object.keys(currentState).map( (value) => {
            return currentState[value];
        });

        let ArroyOfCheckboxValues = checkboxStatus.filter((value) => {
            return value === false;
        });

        if(ArroyOfCheckboxValues.length > 0) {
            e.preventDefault();
        }
    } 

    render() {
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
                                <input type="radio" name="customer_gender" onChange={ this._updateRadioButtonValues } />                                     
                                <label>Male</label>
                            </td>
                            <td>
                                <input type="radio" name="customer_age" onChange={ this._updateRadioButtonValues } />                                   
                                <label>Less than 35</label>
                            </td>     
                        </tr>
                        <tr>
                            <td>
                                <input type="radio" name="customer_gender" onChange={ this._updateRadioButtonValues } />                                    
                                <label>Female</label>
                            </td>
                            <td>
                                <input type="radio" name="customer_age" onChange={ this._updateRadioButtonValues } />                                    
                                <label>More than 35</label>
                            </td>     
                        </tr> 
                        <tr>
                            <td colSpan="2">
                                <Link to="/surveythree" className={ [classes.btn , classes["btn--fullwidth"] , classes.btn__next  ].join(' ') } 
                                        onClick={ this._ToggleNextScreenButton } >
                                    Next
                                </Link>
                            </td>   
                        </tr>     
                    </tbody>   
                </table>
            </div>
        );
    }

}

export default SurveyTwo;
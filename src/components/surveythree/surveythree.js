import React, { Component } from 'react';
import classes from './surveythree.css';
import { Link } from 'react-router-dom';


class SurveyThree extends Component {

    state = {
        preferenceSupercars : false,
        preferenceCruiserBikes : false,
        preferenceCoupcars : false,
        preferenceSedancars : false,
        preferenceCitycar : false
    }

    _updateCheckBoxButtonValues = (e) => {
        let newStateOfCheckboxs = {
            preferenceSupercars : document.getElementsByName('preferenceSupercars')[0].checked,
            preferenceCruiserBikes : document.getElementsByName('preferenceCruiserBikes')[0].checked,
            preferenceCoupcars : document.getElementsByName('preferenceCoupcars')[0].checked,
            preferenceSedancars : document.getElementsByName('preferenceSedancars')[0].checked,
            preferenceCitycar : document.getElementsByName('preferenceCitycar')[0].checked
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

        let ArrayOfCheckboxValues = checkboxStatus.some((value) => {
            return value === true;
        });

        console.log(ArrayOfCheckboxValues);

        if(!ArrayOfCheckboxValues) {
            e.preventDefault();
        }
    } 

    render() {
        return (
            <div className={ classes.screen3 } >
                <div className={ classes.surveyPreferencesQs } >
                    <div className={ classes.surveyPreferencesQs__indi } >
                        <h2>What are your preferences in Vehicle</h2>
                        <ul>
                            <li>
                                <input name="preferenceSupercars" type="checkbox" onChange={ this._updateCheckBoxButtonValues } />
                                <label>My preference is Supercars</label>
                            </li>
                            <li>
                                <input name="preferenceCruiserBikes" type="checkbox" onChange={ this._updateCheckBoxButtonValues } />
                                <label>My preference is Cruiser Bikes</label>
                            </li>
                            <li>
                                <input name="preferenceCoupcars" type="checkbox" onChange={ this._updateCheckBoxButtonValues } />
                                <label>My preference is Coup cars</label>
                            </li>
                            <li>
                                <input name="preferenceSedancars" type="checkbox" onChange={ this._updateCheckBoxButtonValues } />
                                <label>My preference is Sedan cars</label>
                            </li>
                            <li>
                                <input name="preferenceCitycar" type="checkbox" onChange={ this._updateCheckBoxButtonValues } />
                                <label>I prefer a City car</label>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className={ [classes.btn , classes["btn--fullwidth"] , classes.btn__next  ].join(' ') } 
                            onClick={ this._ToggleNextScreenButton } >
                            Next
                    </Link>
                </div>        
            </div>
        );
    }

}

export default SurveyThree;
import React, { Component } from 'react';
import classes from './preferences.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios'; 
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

class Preferences extends Component {

    /* state = {
        inputboxdisabled : true,
        validationrules : {
            preferenceSupercars : false,
            preferenceCruiserBikes : false,
            preferenceCoupcars : false,
            preferenceSedancars : false,
            preferenceCitycar : false
        }
    }

    _updateCheckBoxButtonValues = (e) => {

        if (document.getElementsByName('preferenceCitycar')[0].checked) { 
            this.setState({ inputboxdisabled : false });
        } 
        else {
            this.setState({ inputboxdisabled : true });
            document.getElementsByName('preferenceCitycarName')[0].value = "";
        }

        let newStateOfCheckboxs = {
            preferenceSupercars : document.getElementsByName('preferenceSupercars')[0].checked,
            preferenceCruiserBikes : document.getElementsByName('preferenceCruiserBikes')[0].checked,
            preferenceCoupcars : document.getElementsByName('preferenceCoupcars')[0].checked,
            preferenceSedancars : document.getElementsByName('preferenceSedancars')[0].checked,
            preferenceCitycar : document.getElementsByName('preferenceCitycar')[0].checked && document.getElementsByName('preferenceCitycarName')[0].value !== ""
        }

        this.setState({
            validationrules : {
                ...newStateOfCheckboxs                
            }
        });
    } */

    _ToggleNextScreenButton = (e) => {

        let currentState = this.props.prefObj['validationrules']; 

        let checkboxStatus =  Object.keys(currentState).map( (value) => {
            return currentState[value];
        });       

        let ArrayOfCheckboxValues = checkboxStatus.some((value) => {
            return !!value;
        });

        e.preventDefault();

        let formData = {
            generalInfo : {
                ...this.props.genObj
            },
            preferences : {
                ...this.props.prefObj
            }
        }
        
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
                                <FormControlLabel
                                    className={ classes.formControl }
                                    control={
                                        <Checkbox
                                            name="preferenceSupercars"
                                            checked={ this.props.prefObj.validationrules.preferenceSupercars }
                                            value="My preference is Supercars"
                                            onChange={ (e) => { this.props.validateCheckboxInput({
                                                    name  : e.target.getAttribute('name'), 
                                                    value : e.target.checked ? e.target.getAttribute('value') : false
                                                })}
                                            }  
                                        />
                                    }
                                    label="My preference is Supercars"
                                />
                            </li>
                            <li>
                               <FormControlLabel
                                    className={ classes.formControl }
                                    control={
                                        <Checkbox
                                            name="preferenceCruiserBikes"
                                            checked={ this.props.prefObj.validationrules.preferenceCruiserBikes }
                                            value="My preference is Cruiser Bikes"
                                            onChange={ (e) => { this.props.validateCheckboxInput({
                                                    name  : e.target.getAttribute('name'), 
                                                    value : e.target.checked ? e.target.getAttribute('value') : false
                                                })}
                                            }  
                                        />
                                    }
                                    label="My preference is Cruiser Bikes"
                                />      
                            </li>
                            <li>
                               <FormControlLabel
                                    className={ classes.formControl }
                                    control={
                                        <Checkbox
                                            name="preferenceCoupcars"
                                            checked={ this.props.prefObj.validationrules.preferenceCoupcars }
                                            value="My preference is Coup cars"
                                            onChange={ (e) => { this.props.validateCheckboxInput({
                                                    name  : e.target.getAttribute('name'), 
                                                    value : e.target.checked ? e.target.getAttribute('value') : false
                                                })}
                                            }  
                                        />
                                    }
                                    label="My preference is Coup cars"
                                />
                            </li>
                            <li>
                                <FormControlLabel
                                    className={ classes.formControl }
                                    control={
                                        <Checkbox
                                            name="preferenceSedancars"
                                            checked={ this.props.prefObj.validationrules.preferenceSedancars }
                                            value="My preference is Sedan cars"
                                            onChange={ (e) => { this.props.validateCheckboxInput({
                                                    name  : e.target.getAttribute('name'), 
                                                    value : e.target.checked ? e.target.getAttribute('value') : false
                                                })}
                                            }  
                                        />
                                    }
                                    label="My preference is Sedan cars"
                                />  
                            </li>
                            <li>
                               <FormControlLabel
                                    className={ classes.formControl }
                                    control={
                                        <Checkbox
                                            name="preferenceCitycar"
                                            checked={ this.props.prefObj.validationrules.preferenceCitycar }
                                            value="I prefer a city car Preferably"
                                            onChange={ (e) => { this.props.validateCheckboxInput({
                                                    name  : e.target.getAttribute('name'), 
                                                    value : e.target.checked ? e.target.getAttribute('value') : false
                                                })}
                                            }  
                                        />
                                    }
                                    label="I prefer a city car Preferably"
                                />
                                <input 
                                    type="text" 
                                    name="inputboxdisabled" 
                                    placeholder="city car preference" 
                                    disabled={ this.props.prefObj.inputboxdisabled }
                                    />
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


const mapStateToProps = state => {
    return {
        genObj  : state.gen,        
        prefObj : state.pref
    }
}

const mapDispatchToProps = dispatch => {
    return {
        validateCheckboxInput : (e) => dispatch({ type: 'VALI_CHEKBOX_INP' , payload : e })
        // toggleInputDisable : (e) => dispatch({ type: 'TOGGLE_INPUT_DISABLE' , payload : e })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
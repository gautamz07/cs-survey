import React, { Component } from 'react';
import classes from './generalinfo.css';
import { Link } from 'react-router-dom';
// import 'icheck/skins/flat/aero.css';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';


class GeneralInfo extends Component {

    /* state = {
        genderRadioClick : false,
        ageRadioClick : false
    } */

    /* _updateRadioButtonValues = (e) => {
        let newStateOfCheckboxs = {
            genderRadioClick : Array.from(document.getElementsByName('customer_gender')).some( (elem , idx) => {  return elem.checked  }),
            ageRadioClick : Array.from(document.getElementsByName('customer_age')).some( (elem , idx) => {  return elem.checked  })
        }
        this.setState({
            ...newStateOfCheckboxs
        });
    } */

    _ToggleNextScreenButton = (e) => {

        let currentState = this.props.infoObj;        

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
                                {/* <input type="radio" name="genderRadio" value="male" 
                                       onChange={ (e) => { this.props.validateRadioInput({
                                           name  : e.target.getAttribute('name'), 
                                           value : e.target.getAttribute('value')
                                       }) }
                                    } />                                     
                                <label>Male</label> */}
                                {/* <RadioButton
                                       label="Male"
                                       type="radio" 
                                       name="genderRadio" 
                                       value="male" 
                                       onChange={ (e) => { this.props.validateRadioInput({
                                           name  : e.target.getAttribute('name'), 
                                           value : e.target.getAttribute('value')
                                       }) }}       
                                /> */}
                                {/* <Radio value="female" control={<Radio />} label="Female"  />     */}
                                <FormControlLabel

                                       control={<Radio />}

                                       label="Male" 
                                       name="genderRadio" 
                                       value="male" 
                                       onChange={ (e) => { this.props.validateRadioInput({
                                           name  : e.target.getAttribute('name'), 
                                           value : e.target.getAttribute('value')
                                       }) }}
                                         />
                            </td>
                            <td>
                                <input type="radio" name="ageRadio" value="Less than 35" 
                                       onChange={ (e) => { this.props.validateRadioInput({
                                           name  : e.target.getAttribute('name'), 
                                           value : e.target.getAttribute('value')
                                       }) } } />                                   
                                <label>Less than 35</label>
                            </td>     
                        </tr>
                        <tr>
                            <td>
                                {/* <input type="radio" name="genderRadio" value="Female" 
                                       onChange={ (e) => { this.props.validateRadioInput({
                                           name  : e.target.getAttribute('name'), 
                                           value : e.target.getAttribute('value')
                                       }) } } />                                    
                                <label>Female</label> */}

                                {/* <RadioButton
                                       label="Female"
                                       type="radio" 
                                       name="genderRadio" 
                                       value="female" 
                                       onChange={ (e) => { this.props.validateRadioInput({
                                           name  : e.target.getAttribute('name'), 
                                           value : e.target.getAttribute('value')
                                       }) }}
                                /> */}

                                <FormControlLabel

                                       control={<Radio />}

                                       label="Female"
                                       name="genderRadio" 
                                       value="female" 
                                       onChange={ (e) => { this.props.validateRadioInput({
                                           name  : e.target.getAttribute('name'), 
                                           value : e.target.getAttribute('value')
                                       }) }}
                                    />
                            </td>
                            <td>
                                <input type="radio" name="ageRadio" value="More than 35" 
                                       onChange={ (e) => { this.props.validateRadioInput({
                                           name  : e.target.getAttribute('name'), 
                                           value : e.target.getAttribute('value')
                                       }) } } />                                    
                                <label>More than 35</label>
                            </td>     
                        </tr> 
                        <tr>
                            <td colSpan="2">
                                <Link to="/preferences" className={ [classes.btn , classes["btn--fullwidth"] , classes.btn__next  ].join(' ') } 
                                        onClick={ (e) => this._ToggleNextScreenButton(e) } >
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


const mapStateToProps = state => {
    return {
        infoObj : state.gen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        validateRadioInput : (e) => dispatch({ type: 'VALI_RADIO_INP' , payload : e })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(GeneralInfo);
let initialState = {
    genderRadio : false,
    ageRadio : false
}

const reducer = (  state = initialState , action ) => {

    switch(action.type) {
        case "VALI_RADIO_INP":

            let newStateOfCheckboxs = {
                ...state,
                 [action.payload.name] : action.payload.value     
            }

            state = {
                ...newStateOfCheckboxs
            }

            return state        
    }
    return state;
}

export default reducer;
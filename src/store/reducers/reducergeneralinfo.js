const initialState = {
    genderRadio : false,
    ageRadio : false
}

const reducer = (  state = initialState , action ) => {

    switch(action.type) {
        case "VALI_RADIO_INP":
            console.log(action.payload.target);
            return state        
    }
    return state;
}

export default reducer;
let initialState = {
    inputboxdisabled : true,
    validationrules : {
        preferenceSupercars : false,
        preferenceCruiserBikes : false,
        preferenceCoupcars : false,
        preferenceSedancars : false,
        preferenceCitycar : false
    }
}

const reducer = (  state = initialState , action ) => {

    switch(action.type) {
        case "VALI_CHEKBOX_INP":

            if (action.payload.name === "preferenceCitycar") {

                let newStateOfCheckboxs = {
                    ...state,
                    inputboxdisabled : !state.inputboxdisabled,
                    validationrules : {
                        ...state.validationrules,
                        [action.payload.name] : action.payload.value,                 
                    }     
                }
                state = {
                    ...newStateOfCheckboxs
                }
            } 
            else {
                let newStateOfCheckboxs = {
                    ...state,
                    inputboxdisabled : true,
                    validationrules : {
                        ...state.validationrules,
                        [action.payload.name] : action.payload.value,                 
                    }     
                }
                state = {
                    ...newStateOfCheckboxs
                }
            }  

        return state;        
    }
    return state;
}

export default reducer;
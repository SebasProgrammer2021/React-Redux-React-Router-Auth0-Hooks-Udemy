import * as ACTIONS_TYPES from "../actions/actions_types";

const initialState = {
    stateProp1: false,
    userText: ""
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.SUCCESS:
            return {
                ...state,
                stateProp1: true,
            };
        case ACTIONS_TYPES.FAILURE:
            return {
                ...state,
                stateProp1: false,
            };
        case ACTIONS_TYPES.USER_INPUT:
            return {
                ...state,
                userText: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;

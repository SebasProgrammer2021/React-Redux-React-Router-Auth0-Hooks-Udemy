import * as ACTIONS_TYPES from "../actions/actions_types";

const initialState = {
    userText: ""
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.USER_INPUT:
            return {
                ...state,
                userText: action.payload
            };
        default:
            return state;
    }
};

export default UserReducer;

import * as ACTIONS_TYPES from '../actions/actions_type';

const initialState = {
    statePropo1: false
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS_TYPES.SUCCESS:
            return {
                ...state,
                statePropo1: true
            }
        case ACTIONS_TYPES.FAILURE:
            return {
                ...state,
                statePropo1: false
            }
        default:
            return state
    }
}

export default rootReducer;
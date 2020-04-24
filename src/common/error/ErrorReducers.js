import * as types from './ErrorActions';

export const errorReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case types.HANDLE_ERROR: {
            
            if ((action.response && action.response.data)) {
                return { 
                    type : "HANDLE_ERROR", // sample
                    message : "has error",
                    code : "4000" }
            }
            else {
                return { ...action };
            }
        }

        case types.CLOSE_ERROR:
            return {};

        default:
            return state;
    }
};

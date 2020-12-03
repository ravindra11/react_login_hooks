import { userConstants } from '../constants';
const { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE } = userConstants;


export function registration(state = {}, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { registering: true };
        case REGISTER_SUCCESS:
            return {};
        case REGISTER_FAILURE:
            return {};
        default:
            return state;
    }
}
import { EMPLOYEE_FETCH} from '../actions/type';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMPLOYEE_FETCH:
            return { ...state, [action.payload.prop]: action.payload.value }

        default:
            return state;
    }
}
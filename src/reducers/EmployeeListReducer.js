import { EMPLOYEE_FETCH} from '../actions/type';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => { 

    switch (action.type) {
        case EMPLOYEE_FETCH:
        //console.log(action.payload);
            return action.payload;

        default:
            return state;
    }
}
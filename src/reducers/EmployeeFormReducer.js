import { EMPLOYEE_UPDATE,EMPLOYEE_RESET} from '../actions/type';

const INITIAL_STATE = {name:'', phone:'', shift:''};

export default (state = INITIAL_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMPLOYEE_UPDATE:
        //action.payload === {prop: 'name', value: 'jane'}
            return { ...state, [action.payload.prop]: action.payload.value }
        case EMPLOYEE_RESET:
            return INITIAL_STATE;

        default:
            return state;
    }
}
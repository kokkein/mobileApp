import {EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEE_RESET} from './type';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};
export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();
    //firebase.database().ref('/users/userId/employees')
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name, phone, shift})
        .then(() => {
            dispatch({type: EMPLOYEE_RESET});
            Actions.pop()
        });
    };

};
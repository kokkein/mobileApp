import { EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS } from './type';
import firebase from 'firebase';


export const emailChanged = (text) =>
{
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passChanged = (text) =>
{
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({type: LOGIN_USER_SUCCESS, payload: user});
            });
    };
};
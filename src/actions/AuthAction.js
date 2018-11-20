import {PASSWORD_CHANGED, EMAIL_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_START} from './actionTypes';
import firebase from 'firebase';
//import {Actions} from 'react-native-router-flux';
import {NavigationActions} from 'react-navigation';
export const emailChanged = (text)=>{
  return {
    type: EMAIL_CHANGED,
    payload:text
  }
}

  export const passwordChanged = (text)=>{
    return {
      type: PASSWORD_CHANGED,
      payload:text
    }
  }

export const loginUser = ({email, password}, callback)=>{
  return (dispatch)=>{
    dispatch({type:LOGIN_USER_START})
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(user=>loginUserSuccess(user, dispatch, callback))
      .catch(error=>loginUserFail(error, dispatch))
  }
}
const loginUserSuccess=(user, dispatch, callback)=>{

  dispatch({type:LOGIN_USER_SUCCESS, playload:user});
  callback();
}
const loginUserFail=(error, dispatch)=>{
  dispatch({type:LOGIN_USER_FAIL, payload:error.code})
}

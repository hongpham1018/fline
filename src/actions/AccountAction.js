import {PASSWORD_CHANGED
  , EMAIL_CHANGED
  , USERNAME_CHANGED
  , CREATE_ACCOUNT_SUCCESS
  , CREATE_ACCOUNT_FAIL
  , CREATE_ACCOUNT_START} from './actionTypes';
//import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

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

export const usernameChanged = (text) =>{
  return {
    type:USERNAME_CHANGED,
    payload:text
  }
}

export const createAccount = ({email, password, username}, callback)=>{

  return (dispatch) =>{
    dispatch({type:CREATE_ACCOUNT_START});

    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(user=>createUserSuccess(email, username, dispatch, callback))
      .catch(error=>createUserFailed(error, dispatch))
    }
  }

  const createUserSuccess=(email, username, dispatch, callback)=>{
    const {currentUser} = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}`).push({username, email})
    .then(()=>{
       dispatch({type:CREATE_ACCOUNT_SUCCESS});
       callback();
       //Actions.listWorks();
     }).catch(error=>createUserFailed(error, dispatch));
   }
  const createUserFailed=(error, dispatch)=>{
    console.dir(error)
    dispatch({type:CREATE_ACCOUNT_FAIL, payload:error.code})
  }

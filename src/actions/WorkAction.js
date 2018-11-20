import {CREATE_WORK_SAVE,
  CREATE_WORK_SUCCESS,
  CREATE_WORK_CHANGED,
  WORKS_FETCH_SUCCESS,
  FETCH_WORK,
  SELECT_WORK,
  CREATE_WORK_FAILED} from './actionTypes';
import firebase from 'firebase';
//import {Actions} from 'react-native-router-flux';

export const createWorkSave = ({topic, content, id}, callback)=>{
  const {currentUser} = firebase.auth();
  return (dispatch)=>{
    firebase.database().ref(`/work/${currentUser.uid}/works`).push({topic, content, id})
    .then(user=>{
        dispatch({type:CREATE_WORK_SAVE})
        callback();
      }
    ).catch (error=>{
      dispatch({type:CREATE_WORK_FAILED, error:error.message})
    })
  }
}
export const createWorkTextChanged = (content)=>{
  return{
    type:CREATE_WORK_CHANGED,
    payload:content
  }
}
export const selectWork = (id)=>
{
  return {
    type: SELECT_WORK,
    selectedWorkId: id
  }
}
export const fetchWorksList = ()=>{
  const {currentUser} = firebase.auth();
  return (dispatch)=>{
    https://manager-f3aca.firebaseio.com/work/N1s4KikejJQOLYKLeNp2FF5OR2K2
     //firebase.database().ref(`/work/${currentUser.uid}/works`).on("value", snapshot => {
     firebase.database().ref(`/work/N1s4KikejJQOLYKLeNp2FF5OR2K2/works`).on("value", snapshot => {
      dispatch({type: WORKS_FETCH_SUCCESS, payload: snapshot.val()})
    })
  }
}

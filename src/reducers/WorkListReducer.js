import {CREATE_WORK_SAVE,
  CREATE_WORK_SUCCESS,
  CREATE_WORK_CHANGED,
  CREATE_WORK_FAILED,
  SELECT_WORK,
  FETCH_WORK,
  WORKS_FETCH_SUCCESS} from '../actions/actionTypes';

const INITIAL_STATES = {}
  export default (state=INITIAL_STATES, action)=>{
  switch (action.type){
    default:
      return {state};
    case CREATE_WORK_CHANGED://too many times got called
      return {content:action.payload}
    case CREATE_WORK_SAVE:
      return {...state};
    case CREATE_WORK_SUCCESS:
      return {...state};
    case WORKS_FETCH_SUCCESS:
      return action.payload
    case CREATE_WORK_FAILED:
      return {...state, loading:false, error:action.payload}
    case FETCH_WORK:
      return {'loading':true}
  }
}

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START} from '../actions/actionTypes';
const INITIAL_STATES = {
  email:'',
  password:'',
  loading:false,
  error:'',
  user:null
}
export default (state=INITIAL_STATES, action)=>{

  switch (action.type){
    case EMAIL_CHANGED:
      return {...state, email:action.payload};
    case PASSWORD_CHANGED:
      return {...state, password:action.payload};
    case LOGIN_USER_SUCCESS:
      return {...state, user:action.payload, loading:false}
    case LOGIN_USER_FAIL:
        return {...state, loading:false, error:action.payload}
    case LOGIN_USER_START:
      return {...state, loading:true, error:''}
    default:
      return state;
  }

}

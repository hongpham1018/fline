import {EMAIL_CHANGED, PASSWORD_CHANGED, USERNAME_CHANGED, CREATE_ACCOUNT_FAIL,
CREATE_ACCOUNT_START, CREATE_ACCOUNT_SUCCESS} from '../actions/actionTypes';
export default (state={username:'', email:'', password:'', loading:'', error:''}, action) =>{
  switch (action.type){
    case EMAIL_CHANGED:
      return {...state, email:action.payload}
    case PASSWORD_CHANGED:
      return {...state, password:action.payload}
    case USERNAME_CHANGED:
      return {...state, username:action.payload}
    case CREATE_ACCOUNT_SUCCESS:
        return {...state, loading:false, error:''}
    case CREATE_ACCOUNT_START:
        return {...state, loading:true, error:''}
    case CREATE_ACCOUNT_FAIL:
        return {...state, loading:false, error:action.payload}
   default:
      return {}
  }

}

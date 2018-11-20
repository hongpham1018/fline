import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import AccountReducer from './AccountReducer';
import TopicReducer from './TopicReducer';
import TopicFormReducer from './TopicFormReducer';
import WorkListReducer from './WorkListReducer';
import WorkReducer from './WorkReducer';

export default combineReducers ({
  auth: AuthReducer,
  account: AccountReducer,
  topics: TopicReducer,
  selectedTopicId:TopicFormReducer,
  works:WorkListReducer,
  work: WorkReducer,


})
